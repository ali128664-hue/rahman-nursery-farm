export const RAHMAN_WHATSAPP_NUMBER = '923040450065'; // Official Nursery WhatsApp: 03040450065

/**
 * 100% Pure English WhatsApp Link Generator for Single Plant Orders
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
*DELIVERY CHARGES:* Separate / As per destination (Please call or inquire in chat for exact cargo charges)
-----------------------------------------------
*CUSTOMER DELIVERY DETAILS:*
• *Customer Name:* ${customerName || 'Valued Client'}
• *Delivery City:* ${city}
• *Phone Number:* ${phone || 'Will share in chat'}
${specialNotes ? `• *Special Note:* ${specialNotes}\n` : ''}-----------------------------------------------
Hello Ansar Hussain (0304-0450065)!
I have composed this plant order bill on Rahman Nursery Farm website. Please check plant availability, photo verification, and confirm dispatch schedule. Thank you!`;

  return `https://wa.me/${RAHMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

/**
 * 100% Pure English WhatsApp Link Generator for Landscape Inquiry
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
Hello Ansar Hussain (0304-0450065)!
I am submitting a landscape architectural inquiry from Rahman Nursery Farm website. Please share quotation details and schedule an initial consultation. Thank you!`;

  return `https://wa.me/${RAHMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};
