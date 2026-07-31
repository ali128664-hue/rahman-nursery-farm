// Rahman Nursery Farm — Daily Plant Care Notification Engine

export const WATERING_SCHEDULE = {
  MORNING_HOUR: 7,   // 7:00 AM
  EVENING_HOUR: 18,  // 6:00 PM (18:00)
};

export const requestNotificationPermission = async () => {
  if (!('Notification' in window)) {
    return { success: false, reason: 'Notifications not supported on this browser' };
  }

  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      localStorage.setItem('rahman_reminders_enabled', 'true');
      sendTestNotification();
      return { success: true, permission };
    } else {
      localStorage.setItem('rahman_reminders_enabled', 'false');
      return { success: false, reason: 'Permission denied by user' };
    }
  } catch (err) {
    return { success: false, reason: err.message };
  }
};

export const sendTestNotification = () => {
  showNotification(
    '🌿 Reminders Activated — Rahman Nursery',
    'Zabardast! Everyday at 7:00 AM (Subah) & 6:00 PM (Shaam), we will remind you to water your plants. 💧🌱'
  );
};

export const showNotification = (title, body) => {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;

  // Try via Service Worker first
  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      type: 'SHOW_WATERING_REMINDER',
      title,
      body,
    });
  } else {
    // Fallback to standard Web Notification
    try {
      new Notification(title, {
        body,
        icon: '/logo.png',
        badge: '/logo.png',
        tag: 'watering-reminder',
        renotify: true,
      });
    } catch (e) {
      console.log('Fallback notification failed', e);
    }
  }
};

export const checkAndTriggerDailyReminders = () => {
  const isEnabled = localStorage.getItem('rahman_reminders_enabled') === 'true';
  if (!isEnabled || !('Notification' in window) || Notification.permission !== 'granted') return;

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const todayKey = now.toISOString().split('T')[0];

  // Morning 7:00 AM check (7:00 - 7:05 window)
  if (hours === WATERING_SCHEDULE.MORNING_HOUR && minutes < 5) {
    const morningSentKey = `rahman_sent_morning_${todayKey}`;
    if (!localStorage.getItem(morningSentKey)) {
      showNotification(
        '🌅 Subah 7:00 AM — Poudon Ko Pani Dene Ka Waqt!',
        'Assalam o Alaikum! Subah ka pani poudon ke jadoon ko din bhar ki shdeed dhoop se mehfooz rakhta hai. 🌿💧'
      );
      localStorage.setItem(morningSentKey, 'true');
    }
  }

  // Evening 6:00 PM check (18:00 - 18:05 window)
  if (hours === WATERING_SCHEDULE.EVENING_HOUR && minutes < 5) {
    const eveningSentKey = `rahman_sent_evening_${todayKey}`;
    if (!localStorage.getItem(eveningSentKey)) {
      showNotification(
        '🌆 Shaam 6:00 PM — Plant Watering & Inspection!',
        'Shaam ka waqt hai! Poudon ki mitti check karein aur taza pani dein. Healthy plants = Fresh green home! 🪴💧'
      );
      localStorage.setItem(eveningSentKey, 'true');
    }
  }
};
