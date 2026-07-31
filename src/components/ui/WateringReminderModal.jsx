import React, { useState } from 'react';
import { Bell, BellOff, X, CheckCircle2, Clock, Droplets, Sparkles } from 'lucide-react';
import { requestNotificationPermission, sendTestNotification } from '../../utils/notificationManager';

export const WateringReminderModal = ({ isOpen, onClose }) => {
  const [isEnabled, setIsEnabled] = useState(
    localStorage.getItem('rahman_reminders_enabled') === 'true'
  );
  const [statusMsg, setStatusMsg] = useState('');

  if (!isOpen) return null;

  const handleEnableReminders = async () => {
    setStatusMsg('Requesting notification permission...');
    const result = await requestNotificationPermission();
    if (result.success) {
      setIsEnabled(true);
      setStatusMsg('✅ Daily Reminders Active! Check your notification bar for test reminder.');
    } else {
      setStatusMsg(`⚠️ ${result.reason || 'Could not enable notifications.'}`);
    }
  };

  const handleDisableReminders = () => {
    localStorage.setItem('rahman_reminders_enabled', 'false');
    setIsEnabled(false);
    setStatusMsg('Daily reminders turned off.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-emerald-300 space-y-5 text-emerald-950">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black">
              <Bell className="w-5 h-5 text-emerald-700 animate-bounce" />
            </div>
            <div>
              <span className="text-[9px] font-black text-amber-700 uppercase tracking-widest block">DAILY CARE REMINDERS</span>
              <h3 className="font-serif text-lg font-black text-emerald-950">Plant Watering Notifications</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Schedule Box */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 text-white space-y-3 shadow-lg border border-amber-400/30">
          <div className="flex items-center gap-2 text-xs font-black text-amber-300 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Automatic Daily Timings</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-white/10 p-3 rounded-xl border border-white/20">
              <div className="text-[10px] text-amber-300 uppercase font-black flex items-center gap-1">
                <Clock className="w-3 h-3" /> Subah (Morning)
              </div>
              <div className="text-base font-black text-white mt-0.5">7:00 AM</div>
              <div className="text-[10px] text-emerald-200 mt-1">Watering & Sun Protection</div>
            </div>

            <div className="bg-white/10 p-3 rounded-xl border border-white/20">
              <div className="text-[10px] text-amber-300 uppercase font-black flex items-center gap-1">
                <Clock className="w-3 h-3" /> Shaam (Evening)
              </div>
              <div className="text-base font-black text-white mt-0.5">6:00 PM</div>
              <div className="text-[10px] text-emerald-200 mt-1">Care & Soil Moisture Check</div>
            </div>
          </div>
        </div>

        {/* Info Text */}
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium leading-relaxed">
          <Droplets className="w-4 h-4 inline text-blue-600 mr-1.5" />
          Subah 7:00 baje aur Shaam 6:00 baje aap ke phone par automatic notification aayegi taake pouday hamesha haray bharay aur taaza rahein!
        </div>

        {/* Status Message */}
        {statusMsg && (
          <div className="text-xs font-bold text-emerald-900 text-center p-2.5 rounded-xl bg-emerald-50 border border-emerald-200">
            {statusMsg}
          </div>
        )}

        {/* Action Button */}
        <div className="space-y-2">
          {isEnabled ? (
            <div className="space-y-2">
              <button
                onClick={sendTestNotification}
                className="w-full py-3 rounded-2xl text-xs font-black bg-emerald-100 text-emerald-900 hover:bg-emerald-200 border border-emerald-300 flex items-center justify-center gap-2"
              >
                <Bell className="w-4 h-4 text-emerald-700" />
                <span>Send Test Notification Now</span>
              </button>
              <button
                onClick={handleDisableReminders}
                className="w-full py-2.5 rounded-2xl text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 flex items-center justify-center gap-2"
              >
                <BellOff className="w-3.5 h-3.5" />
                <span>Turn Off Reminders</span>
              </button>
            </div>
          ) : (
            <button
              onClick={handleEnableReminders}
              className="w-full py-4 rounded-2xl text-sm font-black bg-emerald-800 text-white hover:bg-emerald-900 shadow-xl transition-all flex items-center justify-center gap-2 min-h-[48px]"
            >
              <Bell className="w-5 h-5 fill-white/20" />
              <span>Enable 7 AM & 6 PM Reminders</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
