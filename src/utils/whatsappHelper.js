export const RAHMAN_WHATSAPP_NUMBER = '923040450065'; // Official Nursery WhatsApp: 03040450065

/**
 * Clean WhatsApp Link Generator for Single Plant Orders (No icons, WhatsApp bold formatting)
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

  const text = `*NEW PLANT ORDER — RAHMAN NURSERY FARM*
*Chak Hassan Arain, Arifwala • Official Dispatch Hub*
-----------------------------------------------
*Plant Name:* ${plantName}
*Quantity:* ${quantity} Unit(s)
*Selected Pot:* ${potName} ${potPrice > 0 ? `(+PKR ${potPrice.toLocaleString()})` : ''}
*Unit Price:* PKR ${plantPrice.toLocaleString()}
-----------------------------------------------
*TOTAL ESTIMATED ITEM COST:* PKR ${totalPrice.toLocaleString()}
*DELIVERY CHARGES:* Alag honge (Delivery charges k liye kripya call ya chat par rabta karein)
-----------------------------------------------
*CUSTOMER DELIVERY DETAILS:*
• *Customer Name:* ${customerName || 'Valued Client'}
• *Delivery City:* ${city}
• *Phone Number:* ${phone || 'Will share in chat'}
${specialNotes ? `• *Special Note:* ${specialNotes}\n` : ''}-----------------------------------------------
Assalam o Alaikum Ansar Hussain Bhai (0304-0450065)!
Main ne Rahman Nursery Farm website se yeh plant order compose kiya hai. Kripya plant availability aur delivery charges call/chat par confirm kar dein. Shukriya!`;

  return `https://wa.me/${RAHMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

/**
 * Clean WhatsApp Link Generator for Landscape Inquiry (No icons, WhatsApp bold formatting)
 */
export const generateLandscapeInquiryLink = ({
  projectType = 'Residential Villa',
  city = 'Lahore',
  areaSize = '1 Kanal',
  customerName = '',
  phone = ''
}) => {
  const text = `*LANDSCAPE & VILLA DESIGN INQUIRY — RAHMAN NURSERY FARM*
-----------------------------------------------
*Client Name:* ${customerName || 'Valued Client'}
*Location / City:* ${city}
*Plot / Lawn Area:* ${areaSize}
*Project Type:* ${projectType}
*Phone Number:* ${phone || 'Will share in chat'}
-----------------------------------------------
Assalam o Alaikum Ansar Hussain Bhai (0304-0450065)!
Main ne Rahman Nursery Farm website se inquiry compose ki hai. Kripya quotation aur landscape team visit for consultation confirm karein. Shukriya!`;

  return `https://wa.me/${RAHMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};
