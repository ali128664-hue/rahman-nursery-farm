export const RAHMAN_WHATSAPP_NUMBER = '923040450065'; // Official Nursery WhatsApp: 03040450065

/**
 * Rich Formatted WhatsApp Link for Single Plant Orders
 */
export const generatePlantWhatsAppLink = ({
  plantName,
  plantPrice,
  potName = 'Standard Nursery Pot',
  potPrice = 0,
  customerName = '',
  city = 'Lahore',
  phone = '',
  quantity = 1,
  specialNotes = ''
}) => {
  const totalPrice = (plantPrice + potPrice) * quantity;

  const text = `🌿 *NEW PLANT ORDER — RAHMAN NURSERY FARM* 🌿
📍 *50+ Years Botanical Heritage • Pattoki Nursery Hub*
-----------------------------------------------
🌱 *Plant Name:* ${plantName}
📦 *Quantity:* ${quantity} Unit(s)
🏺 *Selected Pot:* ${potName} ${potPrice > 0 ? `(+PKR ${potPrice.toLocaleString()})` : ''}
💰 *Unit Price:* PKR ${plantPrice.toLocaleString()}
-----------------------------------------------
💵 *TOTAL ESTIMATED COST:* PKR ${totalPrice.toLocaleString()}
-----------------------------------------------
👤 *CUSTOMER DELIVERY DETAILS:*
• *Customer Name:* ${customerName || 'Valued Client'}
• *Delivery City:* 📍 ${city}
• *Phone Number:* 📱 ${phone || 'Will share in WhatsApp chat'}
${specialNotes ? `• *Special Note:* 📝 ${specialNotes}\n` : ''}-----------------------------------------------
Assalam o Alaikum Ansar Hussain Bhai (0304-0450065)!
Main Rahman Nursery Farm website se yeh plant order karna chahta hun. Kripya plant availability, real greenhouse photos, aur fast delivery details confirm kar dein. Shukriya!`;

  return `https://wa.me/${RAHMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

/**
 * Rich Formatted WhatsApp Link for Landscape Consultation
 */
export const generateLandscapeInquiryLink = ({
  projectType = 'Residential Villa',
  city = 'Lahore',
  areaSize = '1 Kanal',
  customerName = '',
  phone = ''
}) => {
  const text = `🏡 *LANDSCAPE & VILLA DESIGN INQUIRY — RAHMAN NURSERY* 🏡
-----------------------------------------------
👤 *Client Name:* ${customerName || 'Valued Client'}
📍 *Location / Society:* ${city}
📐 *Plot / Lawn Area:* ${areaSize}
🏠 *Project Type:* ${projectType}
📱 *Phone:* ${phone || 'Will share in chat'}
-----------------------------------------------
Assalam o Alaikum Ansar Hussain Bhai (0304-0450065)!
Main Rahman Nursery Farm website se apne plot/farmhouse ke liye 3D Landscape Architecture aur Lawn Grass installation ki quotation lena chahta hun. Kripya Senior Architect se Rabta karwayein. Shukriya!`;

  return `https://wa.me/${RAHMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};
