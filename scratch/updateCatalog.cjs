const fs = require('fs');

const PLANT_CATEGORIES = [
  { id: 'all',       label: '🌿 All Plants A–Z' },
  { id: 'orchard',   label: '🏡 Bagh Lagwao — Full Orchard Planting' },
  { id: 'fruit',     label: '🍊 Fruit Trees & Orchards (Aam, Amrood, Kinnow, Anaar, Saib)' },
  { id: 'palms',     label: '🌴 Royal Palms & Date Palms (Khajoor, Foxtail, Washingtonia)' },
  { id: 'indoor',    label: '🪴 Indoor Air Purifiers & Foliage (Peace Lily, Snake Plant)' },
  { id: 'outdoor',   label: '🌲 Timber, Shade & Flowering Trees (Cassia Nodosa, Teak)' },
  { id: 'flowering', label: '🌸 Flowers, Roses & Climbers (Motia, Gulab, Raat ki Rani)' },
  { id: 'bonsai',    label: '🎋 Bonsai & Topiary Art (Ficus Spiral, Ficus Grill)' },
  { id: 'succulent', label: '🌵 Cactus, Agave & Exotic Succulents' },
  { id: 'medicinal', label: '🌿 Medicinal, Herbal & Aromatic (Aloe Vera, Niazbo, Curry Patta)' },
  { id: 'supplies',  label: '🌾 Lawn Grass & Fertilizers' },
];

const POT_OPTIONS = [
  { id: 'terracotta', name: 'Terracotta Clay Pot',         color: '#D27D56', priceBonus: 250  },
  { id: 'ivory',      name: 'Ceramic Polished Ivory Pot',  color: '#FDFBF7', priceBonus: 850  },
  { id: 'brass',      name: 'Royal Brass Gold Pot',        color: '#D4AF37', priceBonus: 1800 },
  { id: 'concrete',   name: 'Architectural Concrete Pot',  color: '#9E9E9E', priceBonus: 650  },
  { id: 'bamboo',     name: 'Handcrafted Bamboo Planter',  color: '#8B5A2B', priceBonus: 950  },
];

const ORCHARD_SERVICES = [
  {
    id: 'amrood-orchard',
    title: 'High-Density China Guava (Amrood) Orchard',
    urdu: 'چائنا امرود باغ سروس',
    emoji: '🍐',
    pricePerAcre: 185000,
    saplingCount: '350 – 400 Grafted Saplings',
    spacing: '10 ft × 10 ft High Density',
    firstFruit: '12 – 14 Months',
    yieldPerAcre: '400 – 600 Mann / Year',
    bestFor: 'Sahiwal, Pakpattan, Arifwala, Okara & Kasur Loamy Land',
    color: '#388E3C',
    description: 'Complete turn-key China Guava (چائنا امرود) orchard installation. Includes high-yield grafted saplings, land layout marking, pit digging, organic soil enrichment, drip irrigation setup, and 1-year horticulture management guidance by Muhammad Rafiq.',
    includes: [
      '350+ Grafted China Guava saplings from Rahman Nursery fields',
      'Professional land layout, pit digging (gadda khudai) & soil mixture setup',
      'Initial dose of neem cake, leaf mold compost & root stimulant',
      'First-year pruning masterclass & disease prevention hotline',
      'Free replacement of any non-surviving saplings within 90 days'
    ],
    varieties: ['China White Pearl', 'Surahi Amrood', 'Desi Safeda']
  },
  {
    id: 'mango-orchard',
    title: 'Commercial Chaunsa & Sindhri Mango Orchard',
    urdu: 'آم کا تجارتی باغ',
    emoji: '🥭',
    pricePerAcre: 245000,
    saplingCount: '110 – 130 Grafted Trees',
    spacing: '20 ft × 20 ft Traditional / Canopy Spacing',
    firstFruit: '3rd Year Commercial Crop',
    yieldPerAcre: '300 – 500 Mann / Year at Maturity',
    bestFor: 'Multan, Bahawalpur, Sahiwal & Rahim Yar Khan Belt',
    color: '#FF9800',
    description: 'Turn-key commercial Mango orchard with Multani Chaunsa, Sindhri, Anwar Ratol, and Alphonso grafted trees. Includes field layout, deep pit preparation, organic manure, and 2-year growth monitoring.',
    includes: [
      '110+ Premium Grafted Chaunsa, Sindhri, Anwar Ratol & Alphonso saplings',
      'Deep pit digging (3ft × 3ft) with river sand & organic manure blend',
      'Termite prevention treatment (Anti-sewank application)',
      'Fruit fly trap installation guidance & canopy pruning',
      'Free expert farm visit at 6-month interval'
    ],
    varieties: ['Multani Chaunsa', 'Sindhri', 'Anwar Ratol', 'Alphonso', 'Dusehri']
  },
  {
    id: 'kinnu-citrus-orchard',
    title: 'Export Quality Kinnu Citrus Orchard',
    urdu: 'کینو اور مالٹا کا تجارتی باغ',
    emoji: '🍊',
    pricePerAcre: 195000,
    saplingCount: '180 – 220 Grafted Trees',
    spacing: '15 ft × 15 ft Grid Spacing',
    firstFruit: '2nd Year First Crop',
    yieldPerAcre: '500 – 800 Crates / Year',
    bestFor: 'Sargodha, Sahiwal, Toba Tek Singh & Faisalabad Belt',
    color: '#F57C00',
    description: 'High-earning Kinnu Citrus, Musambi & Blood Orange orchard service. Acclimatized grafted rootstock for maximum juice content, bright orange skin, and heavy winter yield.',
    includes: [
      '180+ Grafted Kinnu, Musambi & Blood Orange saplings',
      'Professional ridge/bed planting layout for efficient irrigation',
      'Micronutrient (Zinc + Iron + Boron) initial soil application',
      'Canker & citrus psylla management plan',
      '90-day plant replacement guarantee'
    ],
    varieties: ['Export Kinnu', 'Red Blood Orange', 'Sweet Limetta Musambi', 'Seedless Lemon']
  },
  {
    id: 'anar-pomegranate-orchard',
    title: 'Kandhari Pomegranate (Anar) Orchard',
    urdu: 'قندھاری انار باغ',
    emoji: '❤️',
    pricePerAcre: 215000,
    saplingCount: '250 – 300 Grafted Saplings',
    spacing: '12 ft × 12 ft Spacing',
    firstFruit: '2nd Year First Fruit',
    yieldPerAcre: '250 – 400 Mann / Year',
    bestFor: 'Dry / Semi-Arid Land in Punjab & Sindh',
    color: '#D32F2F',
    description: 'High-value Kandhari Pomegranate (قندھاری انار) orchard. Thrives in dry climates with low water requirement while generating top market fruit prices.',
    includes: [
      '250+ Grafted Kandhari Anar saplings',
      'Soil salinity testing & drip line layout recommendation',
      'Organic compost & rock phosphate soil blend',
      'Pruning guide for 3-stem canopy structure'
    ],
    varieties: ['Kandhari Deep Red', 'Bedana Sweet', 'Mirpuri Anar']
  }
];

const BOTANICAL_CARE_GUIDES = [
  {
    season: 'SUMMER CARE (MAY – AUG)',
    icon: '☀️',
    title: 'Extreme Punjab Heat Protection',
    tips: [
      'Water deep early in the morning before 8 AM or after 6 PM.',
      'Apply organic leaf mold mulch around roots to retain soil moisture.',
      'Protect delicate tropical plants with 50% green shade nets.'
    ]
  },
  {
    season: 'MONSOON CARE (JULY – SEP)',
    icon: '🌧️',
    title: 'Monsoon Root Care & Drainage',
    tips: [
      'Ensure pot drainage holes are free of standing water to prevent root rot.',
      'Apply organic Neem cake powder to prevent fungus & soil pests.',
      'Prune dead branches to encourage vigorous monsoon flush.'
    ]
  },
  {
    season: 'WINTER CARE (NOV – FEB)',
    icon: '❄️',
    title: 'Frost & Cold Night Protection',
    tips: [
      'Reduce watering frequency for indoor foliage plants.',
      'Cover tender mango and papaya saplings with cloth on frosty nights.',
      'Apply Mustard Oil Cake (Khal) organic liquid fertilizer for winter bloom.'
    ]
  }
];

const FREQUENTLY_ASKED_QUESTIONS = [
  {
    question: 'How are plants delivered across Pakistan safely?',
    answer: 'Plants are packed in custom wooden crates with root moisture preservation bags. We deliver via nationwide cargo trucks directly to your city doorstep in Lahore, Sahiwal, Pakpattan, Multan, Islamabad, Karachi, and 50+ PK cities.'
  },
  {
    question: 'Can I order directly on WhatsApp without registration?',
    answer: 'Yes! Simply click "Direct WhatsApp Order" on any plant or cart, and it will open WhatsApp with Ansar Hussain (03040450065) with your order pre-filled.'
  },
  {
    question: 'Where is Rahman Nursery Farm physically located?',
    answer: 'Our main head farm is located at Chak Hassan Arain, Arifwala, District Pakpattan, Punjab. We also have branch locations at Royal Palm City Qaboola & Pakpattan Road Ada 17.'
  },
  {
    question: 'Do you offer orchard installation (Bagh Lagwao) services?',
    answer: 'Yes, we provide turn-key Bagh planting for Amrood, Mango, Kinnu, Anar, and timber trees for plots ranging from 1-Kanal to 100+ Acres.'
  }
];

const RAW_PLANTS = [
  // MANGO SPECIALTY VARIETIES (NEW ADDITIONS)
  { id: 'anwar-ratol-mango', name: 'Anwar Ratol Mango (انوار رٹول آم)', urdu: 'انوار رٹول آم', category: 'fruit', price: 1750, range: '1,499 - 1,950', size: 'Grafted (2 - 3 ft)', sunlight: 'Full Sun', watering: 'Regular', height: '2 – 6 ft', diff: 'Easy', pet: true, badge: '🥭 Fragrant Sweet Ratol', desc: 'Famous Anwar Ratol grafted mango sapling known for extreme sweetness and intense aroma.' },
  { id: 'chaunsa-mango-pot', name: 'Chaunsa Mango (چونسہ آم – 12" Pot)', urdu: 'چونسہ آم', category: 'fruit', price: 2700, range: '2,450 - 2,950', size: '12" Pot / Bag', sunlight: 'Full Sun', watering: 'Regular', height: '3 – 8 ft', diff: 'Easy', pet: true, badge: '🥭 Multani Chaunsa', desc: 'Classic Pakistani Chaunsa Mango tree in 12" grow bag ready for immediate garden or orchard planting.' },
  { id: 'dussehri-mango-earthball', name: 'Dussehri Mango (دسیری آم – 12" Earth Ball)', urdu: 'دسیری آم', category: 'fruit', price: 2290, range: '1,250 - 3,330', size: '12" Earth Ball', sunlight: 'Full Sun', watering: 'Regular', height: '3 – 8 ft', diff: 'Easy', pet: true, badge: '🥭 Dussehri Sweetness', desc: 'Delicious Dussehri mango variety with fiberless sweet pulp.' },
  { id: 'alphonso-hapus-mango', name: 'Alphonso Mango (ہاپوس آم – Premium Grafted)', urdu: 'ہاپوس آم', category: 'fruit', price: 9950, range: '8,550 - 12,600', size: 'Premium Grafted', sunlight: 'Full Sun', watering: 'Regular', height: '3 – 10 ft', diff: 'Moderate', pet: true, badge: '👑 King Alphonso', desc: 'Exotic Alphonso Hapus mango premium grafted variety prized globally for rich saffron aroma.' },
  { id: 'dudh-pedo-thai-mango', name: 'Dudh Pedo Mango (تھائی آم / دودھ پیڑو)', urdu: 'تھائی آم / دودھ پیڑو', category: 'fruit', price: 9950, range: '9,000 - 11,700', size: 'Premium Grafted', sunlight: 'Full Sun', watering: 'Regular', height: '3 – 10 ft', diff: 'Moderate', pet: true, badge: '🥭 Thai Dudh Pedo', desc: 'Exotic Thai Dudh Pedo sweet mango grafted rootstock fruiting heavily in containers.' },
  { id: 'pairi-asian-mango', name: 'Pairi Mango (ایشیائی آم / پیری)', urdu: 'ایشیائی آم / پیری', category: 'fruit', price: 8500, range: '7,650 - 9,900', size: 'Premium Grafted', sunlight: 'Full Sun', watering: 'Regular', height: '3 – 10 ft', diff: 'Moderate', pet: true, badge: '🥭 Asian Pairi Variety', desc: 'Aromatic Pairi mango with juicy sweet orange flesh.' },
  { id: 'fajri-mango-tree', name: 'Fajri Mango (فجری آم – Large Fruit)', urdu: 'فجری آم', category: 'fruit', price: 3330, range: '3,330', size: 'Fruit Tree (4-6 ft)', sunlight: 'Full Sun', watering: 'Regular', height: '4 – 12 ft', diff: 'Easy', pet: true, badge: '🥭 Large Fajri Mango', desc: 'Huge-sized Fajri mango bearing colossal sweet fruits in late summer season.' },
  { id: 'langra-mango-tree', name: 'Langra Mango (لنگڑا آم)', urdu: 'لنگڑا آم', category: 'fruit', price: 1080, range: '1,080', size: 'Fruit Tree (3-5 ft)', sunlight: 'Full Sun', watering: 'Regular', height: '3 – 10 ft', diff: 'Easy', pet: true, badge: '🥭 Tangy Sweet Langra', desc: 'Traditional green Langra mango tree with rich distinct aromatic taste.' },
  { id: 'lal-badshah-mango', name: 'Lal Badshah Mango (لال بادشاہ آم)', urdu: 'لال بادشاہ آم', category: 'fruit', price: 3330, range: '3,330', size: 'Fruit Tree (4-6 ft)', sunlight: 'Full Sun', watering: 'Regular', height: '4 – 12 ft', diff: 'Easy', pet: true, badge: '🔴 Red Lal Badshah', desc: 'Striking red-skinned Pakistani Lal Badshah mango variety.' },
  { id: 'desi-mango-seedling', name: 'Desi Mango Seedling (دیسی آم – 2 ft)', urdu: 'دیسی آم', category: 'fruit', price: 1800, range: '813 - 3,330', size: 'Seedling (2 ft)', sunlight: 'Full Sun', watering: 'Regular', height: '2 – 6 ft', diff: 'Easiest', pet: true, badge: '🥭 Desi Pickling Mango', desc: 'Strong native Desi mango seedling used for pickling (Achaar) and robust rootstock grafting.' },

  // OTHER EXOTIC FRUITS (NEW ADDITIONS)
  { id: 'sapodilla-cheeku', name: 'Sapodilla / Cheeku Tree (چیکو – 18" Bag)', urdu: 'چیکو', category: 'fruit', price: 6500, range: '5,500 - 7,500', size: '18" Bag (Large)', sunlight: 'Full Sun', watering: 'Moderate', height: '4 – 10 ft', diff: 'Easy', pet: true, badge: '🤎 Sweet Cheeku', desc: 'Large established Cheeku fruit tree bearing sweet brown malted-flavored fruits year-round.' },
  { id: 'kala-kallu-apple', name: 'Kala Kallu Apple Tree (سیب کالا کلو)', urdu: 'سیب کالا کلو', category: 'fruit', price: 1500, range: '1,500', size: 'Fruit Tree (3-5 ft)', sunlight: 'Full Sun / Cold Winter', watering: 'Moderate', height: '3 – 8 ft', diff: 'Moderate', pet: true, badge: '🍎 Black Red Apple', desc: 'Deep dark red Kala Kallu apple variety acclimatized for Northern Punjab & hilly regions.' },
  { id: 'avocado-plant-exotic', name: 'Avocado Plant (ایوکاڈو – Exotic Fruit)', urdu: 'ایوکاڈو', category: 'fruit', price: 3000, range: '3,000', size: 'Exotic Fruit Tree', sunlight: 'Partial / Full Sun', watering: 'Moderate', height: '3 – 8 ft', diff: 'Moderate', pet: true, badge: '🥑 Butter Avocado', desc: 'Exotic creamy Avocado fruit tree adapted for home gardens and shade houses.' },
  { id: 'dragon-fruit-plant', name: 'Dragon Fruit Cactus Plant (ڈریگن فروٹ)', urdu: 'ڈریگن فروٹ', category: 'fruit', price: 2500, range: '2,500', size: 'Cactus / Fruit', sunlight: 'Full Sun', watering: 'Low', height: '3 – 6 ft vine', diff: 'Easy', pet: true, badge: '🐉 Exotic Dragon Fruit', desc: 'Fascinating fruiting cactus producing vibrant magenta dragon fruits with white/red sweet pulp.' },
  { id: 'lisbon-lemon-12', name: 'Lisbon Lemon (لسبن لیموں – 12" Bag)', urdu: 'لسبن لیموں', category: 'fruit', price: 1850, range: '1,250 - 2,500', size: '12" Bag', sunlight: 'Full Sun', watering: 'Regular', height: '3 – 6 ft', diff: 'Easiest', pet: false, badge: '🍋 High Juice Lemon', desc: 'Lisbon high-juice commercial lemon tree fruiting heavily in containers.' },
  { id: 'peach-aaru-tree', name: 'Peach Tree Grafted (آڑو کا درخت)', urdu: 'آڑو کا درخت', category: 'fruit', price: 1980, range: '1,760 - 2,300', size: 'Grafted Plant', sunlight: 'Full Sun', watering: 'Regular', height: '3 – 8 ft', diff: 'Moderate', pet: true, badge: '🍑 Sweet Peach', desc: 'Grafted Pakistani Aaru peach tree bearing juicy pink-blushed sweet peaches.' },
  { id: 'sweet-limetta-musambi', name: 'Sweet Limetta / Musambi (موسمبی)', urdu: 'موسمبی', category: 'fruit', price: 1250, range: '1,199 - 1,350', size: 'Grafted Plant', sunlight: 'Full Sun', watering: 'Regular', height: '3 – 7 ft', diff: 'Easy', pet: false, badge: '🍊 Sweet Musambi', desc: 'Juicy sweet Musambi citrus tree essential for fresh winter fruit juice.' },
  { id: 'black-grapes-narang', name: 'Black Grapes Narang Vine (کالے انگور)', urdu: 'کالے انگور', category: 'fruit', price: 1350, range: '1,299 - 1,400', size: 'Fruit Vine', sunlight: 'Full Sun', watering: 'Moderate', height: '6 – 15 ft vine', diff: 'Moderate', pet: true, badge: '🍇 Sweet Black Grapes', desc: 'Deep black sweet grape vine climbing fast over garden pergolas.' },
  { id: 'jujube-ber-tree', name: 'Jujube / Indian Plum Tree (بیر کا درخت)', urdu: 'بیر کا درخت', category: 'fruit', price: 4250, range: '3,900 - 4,680', size: 'Fruit Tree (4-8 ft)', sunlight: 'Full Sun', watering: 'Low', height: '4 – 15 ft', diff: 'Easiest', pet: true, badge: '🟢 Desi Sweet Ber', desc: 'Large Pakistani Sufi Ber tree bearing huge crisp apple-sized sweet jujube fruits.' },

  // INDOOR
  { id: 'zz-plant', name: 'ZZ Plant (Zamioculcas zamiifolia)', urdu: 'زی زی پلانٹ', category: 'indoor', price: 3950, range: '3,500 - 4,500', size: 'Indoor (10" Pot)', sunlight: 'Low to Bright Light', watering: 'Every 3-4 Weeks', height: '1.5 – 3 ft', diff: 'Easiest', pet: false, badge: '🪴 Zero Maintenance', desc: 'Indestructible indoor plant with glossy dark green waxy leaves. Thrives in dark corners and requires almost zero watering.' },
  { id: 'peace-lily-10', name: 'Peace Lily (Spathiphyllum – 10" Pot)', urdu: 'پیس للی', category: 'indoor', price: 7950, range: '6,500 - 9,500', size: 'Indoor (10" Pot)', sunlight: 'Low Indirect Light', watering: 'Twice Weekly', height: '1.5 – 2.5 ft', diff: 'Easy', pet: false, badge: '🤍 Air Purifier', desc: 'Elegant white spathes blooming indoors. NASA top-rated air purifying plant for bedrooms and drawing rooms.' },
  { id: 'peace-lily-12', name: 'Peace Lily Large Specimen (12" Pot)', urdu: 'پیس للی لارج', category: 'indoor', price: 13500, range: '12,500 - 15,000', size: 'Indoor (12" Pot)', sunlight: 'Low Indirect Light', watering: 'Twice Weekly', height: '2.5 – 4 ft', diff: 'Easy', pet: false, badge: '⭐ Large Specimen', desc: 'Large bushy Peace Lily with multiple white blooms. High-impact indoor air cleaner for executive lounges.' },
  { id: 'snake-plant-12', name: 'Snake Plant (Saanp Pauda – 12" Pot)', urdu: 'سانپ پودا', category: 'indoor', price: 1150, range: '850 - 1,500', size: 'Indoor (12" Pot)', sunlight: 'Low to Bright Light', watering: 'Every 2-3 Weeks', height: '1.5 – 3 ft', diff: 'Easiest', pet: false, badge: '🌙 Night Oxygen', desc: 'Classic Sansevieria Saanp Pauda emitting oxygen all night. Essential bedroom air purifier in Pakistan.' },
  { id: 'snake-plant-corporate', name: 'Snake Plant Laurentii (Large Corporate Specimen)', urdu: 'سانپ پودا کارپوریٹ', category: 'indoor', price: 7500, range: '6,500 - 8,500', size: 'Large Corporate', sunlight: 'Low to Bright Light', watering: 'Every 3 Weeks', height: '3 – 5 ft', diff: 'Easiest', pet: false, badge: '🏢 Corporate Specimen', desc: 'Tall 4ft variegated gold-edged Snake Plant in architectural planter for corporate offices and DHA lobbies.' },
  { id: 'money-plant-neon-12', name: 'Money Plant Neon (12" Pot)', urdu: 'نین منی پلانٹ', category: 'indoor', price: 1525, range: '1,250 - 1,800', size: 'Indoor (12" Pot)', sunlight: 'Bright Indirect', watering: 'Once Weekly', height: '2 – 4 ft vine', diff: 'Easy', pet: false, badge: '💚 Trailing Neon', desc: 'Vibrant electric lime-green neon money plant foliage trailing from shelves or climbing moss poles.' },
  { id: 'money-plant-neon-18', name: 'Money Plant Neon Large Moss Pole (18" Pot)', urdu: 'نین منی پلانٹ لارج', category: 'indoor', price: 6500, range: '5,500 - 7,500', size: 'Indoor (18" Pot)', sunlight: 'Bright Indirect', watering: 'Once Weekly', height: '5 – 8 ft moss pole', desc: 'Towering 6ft Moss Pole Neon Money Plant creating an instant green wall statement in living rooms.' },
  { id: 'heart-leaf-philo', name: 'Heart Leaf Philodendron (12" Pot)', urdu: 'منی پلانٹ ہارٹ لیف', category: 'indoor', price: 1950, range: '1,500 - 2,500', size: 'Indoor (12" Pot)', sunlight: 'Low to Medium', watering: 'Once Weekly', height: '2 – 5 ft vine', diff: 'Easy', pet: false, badge: '💚 Cascading Heart', desc: 'Heart-shaped velvety green leaves cascading gracefully down hanging baskets and plant stands.' },
  { id: 'anthurium-10', name: 'Anthurium Flamingo Flower (10" Pot)', urdu: 'اینتھوریم سرخ', category: 'indoor', price: 9950, range: '8,500 - 13,000', size: 'Indoor (10" Pot)', sunlight: 'Bright Filtered', watering: 'Twice Weekly', height: '1.5 – 2.5 ft', diff: 'Moderate', pet: false, badge: '🌺 Exotic Red Bloom', desc: 'Glossy red heart-shaped waxy blooms that last for months indoors. Luxury exotic gift plant.' },
  { id: 'anthurium-12', name: 'Anthurium Flamingo Large (12" Pot)', urdu: 'اینتھوریم لارج', category: 'indoor', price: 13750, range: '12,500 - 15,000', size: 'Indoor (12" Pot)', sunlight: 'Bright Filtered', watering: 'Twice Weekly', height: '2.5 – 3.5 ft', diff: 'Moderate', pet: false, badge: '⭐ Luxury Gift', desc: 'Large multi-bloom red Anthurium in ceramic planter for executive desks and dining tables.' },
  { id: 'black-rubber-plant', name: 'Black Burgundy Rubber Plant (12" Pot)', urdu: 'ربر پلانٹ بلیک', category: 'indoor', price: 980, range: '850 - 1,200', size: 'Indoor (12" Pot)', sunlight: 'Bright Indirect', watering: 'Every 10 Days', height: '2.5 – 4 ft', diff: 'Easy', pet: false, badge: '🌿 Burgundy Gloss', desc: 'Deep blackish-burgundy glossy leaves. Tough indoor air purifier for living rooms and office corners.' },
  { id: 'lucky-bamboo-10', name: 'Lucky Bamboo Multi-Tier (10" Pot)', urdu: 'لکی بانس', category: 'indoor', price: 2950, range: '2,500 - 3,500', size: 'Indoor (10" Pot)', sunlight: 'Low / Water Glass', watering: 'Keep Root Wet', height: '1.5 – 3 ft', diff: 'Easiest', pet: true, badge: '🎋 Feng Shui Luck', desc: 'Traditional 3-tier braided Lucky Bamboo bringing positive energy, luck, and green elegance indoors.' },
  { id: 'blushing-philo', name: 'Blushing Philodendron Red Emerald (12" Pot)', urdu: 'فلواینڈرون ریڈ', category: 'indoor', price: 2950, range: '2,500 - 3,500', size: 'Indoor (12" Pot)', sunlight: 'Indirect Light', watering: 'Once Weekly', height: '2 – 4 ft', diff: 'Easy', pet: false, badge: '🌿 Red Stem Specimen', desc: 'Glossy dark green leaves with deep burgundy-red undersides and stems. Modern indoor plant.' },
  { id: 'asparagus-fern', name: 'Asparagus Fern (Sparagrass Mary – 12" Pot)', urdu: 'اسپراگاس ماری', category: 'indoor', price: 1150, range: '850 - 1,500', size: 'Indoor (12" Pot)', sunlight: 'Bright Shade', watering: 'Twice Weekly', height: '1.5 – 3 ft', diff: 'Easy', pet: true, badge: '🌿 Soft Lace Fronds', desc: 'Feathery cloud-like lace fronds spilling out of planters. Ideal for shaded patios and balconies.' },
  { id: 'umbrella-palm-indoor', name: 'Umbrella Palm (12" Pot)', urdu: 'امبریلا پام', category: 'indoor', price: 720, range: '650 - 800', size: 'Indoor (12" Pot)', sunlight: 'Bright Light', watering: 'Keep Moist', height: '2 – 4 ft', diff: 'Easy', pet: true, badge: '☔ Umbrella Fronds', desc: 'Fun umbrella-shaped whorled green fronds. Loves moist soil and water gardens.' },
  { id: 'jade-plant-small', name: 'Jade Plant Succulent (Small 3" Pot)', urdu: 'جیڈ پلانٹ', category: 'indoor', price: 480, range: '350 - 650', size: 'Small (3" Pot)', sunlight: 'Bright Sunny Window', watering: 'Bi-Weekly', height: '0.5 – 1 ft', diff: 'Easy', pet: false, badge: '🪴 Money Jade', desc: 'Miniature succulent with thick round money-shaped leaves. Popular desk gift plant for good fortune.' },
  { id: 'song-of-india', name: 'Song of India Variegated Dracaena (18" Pot)', urdu: 'سانگ آف انڈیا', category: 'indoor', price: 4950, range: '3,500 - 6,500', size: 'Large (18" Pot)', sunlight: 'Bright Indirect', watering: 'Weekly', height: '4 – 7 ft', diff: 'Easy', pet: false, badge: '🟡 Yellow Variegated', desc: 'Dazzling yellow-and-green spiraling foliage tree. High-impact architectural plant for lounges.' },
  { id: 'emerald-tree-china-doll', name: 'Emerald Tree / China Doll Tree (12" Pot)', urdu: 'چین ڈول ٹری', category: 'indoor', price: 980, range: '850 - 1,200', size: '12" Pot (3-5 ft)', sunlight: 'Bright Light', watering: 'Weekly', height: '3 – 5 ft', diff: 'Easy', pet: true, badge: '🌿 Glossy Emerald', desc: 'Feathery lace-like glossy emerald green indoor tree. Fast growing leafy indoor houseplant.' },
  { id: 'boston-fern-basket', name: 'Boston Fern (Hanging Basket)', urdu: 'بوسٹن فرنز', category: 'indoor', price: 1800, range: '1,500 - 2,200', size: 'Hanging Basket', sunlight: 'Shade / Humidity', watering: 'Keep Moist', height: '2 – 3 ft spread', diff: 'Moderate', pet: true, badge: '🌿 Hanging Basket', desc: 'Cascading feathery green fronds in hanging baskets. Excellent natural indoor air humidifier.' },

  // FLOWERING & TREES
  { id: 'cassia-nodosa-tree', name: 'Cassia Nodosa (Pink Shower / Cassia Javanica)', urdu: 'گلابی کیسیا (محمد رفیق اسپیشلٹی)', category: 'outdoor', price: 8500, range: '2,499 - 20,000', size: 'Flowering Tree (2 ft to 10 ft)', sunlight: 'Full Sun', watering: 'Moderate', height: '2 – 15 ft', diff: 'Easy', pet: true, badge: '🌸 Muhammad Rafiq Specialty', desc: 'World-famous Pink Shower Tree (گلابی کیسیا). Muhammad Rafiq\'s signature specialty crop from Chak Hassan Arain. Explodes in spectacular pink blossom clusters every summer.' },
  { id: 'arabian-jasmine-motia', name: 'Arabian Jasmine (Motia Shrub)', urdu: 'موتیا پھول', category: 'flowering', price: 350, range: '250 - 450', size: 'Flowering Shrub', sunlight: 'Full Sun', watering: 'Daily Summer', height: '2 – 5 ft', diff: 'Easy', pet: true, badge: '🌸 Heritage Fragrance', desc: 'Pure white intensely fragrant Motia blooms. Pakistan\'s national favourite flower for courtyards.' },
  { id: 'rose-plant-gulab', name: 'Grafted Rose Plant (Desi & English Gulab)', urdu: 'گلاب کا پودا', category: 'flowering', price: 650, range: '550 - 750', size: 'Flowering Shrub', sunlight: 'Full Morning Sun', watering: 'Regular', height: '2 – 4 ft', diff: 'Moderate', pet: true, badge: '🌹 Classic Rose', desc: 'Richly scented roses in Red, Pink, Yellow, White, and Orange. Blooms heavily in winter and spring.' },
  { id: 'raat-ki-rani', name: 'Night-Blooming Jasmine (Raat ki Rani)', urdu: 'رات کی رانی', category: 'flowering', price: 450, range: '350 - 550', size: 'Flowering Shrub', sunlight: 'Partial / Full Sun', watering: 'Regular', height: '3 – 8 ft', diff: 'Easy', pet: true, badge: '🌙 Night Fragrance', desc: 'Small tubular flowers opening at dusk, releasing intoxicating fragrance across the entire neighborhood.' },
  { id: 'hibiscus-jhumka-bail', name: 'Hibiscus Creeper Vine (Jhumka Bail)', urdu: 'جھمکا بیل', category: 'flowering', price: 500, range: '450 - 550', size: 'Climber/Vine', sunlight: 'Full Sun', watering: 'Regular', height: '6 – 15 ft vine', diff: 'Easy', pet: true, badge: '🌺 Dangling Lanterns', desc: 'Cascading bright red dangling flower lanterns climbing over garden fences and archways.' },
  { id: 'japanese-wisteria-purple', name: 'Japanese Wisteria (Purple Flower Vine)', urdu: 'ویسٹیریا پرپل بیل', category: 'flowering', price: 3750, range: '2,500 - 5,000', size: 'Purple Flower Vine', sunlight: 'Full Sun', watering: 'Moderate', height: '8 – 20 ft vine', diff: 'Moderate', pet: true, badge: '💜 Purple Cascade', desc: 'Breathtaking 12-inch cascading racemes of fragrant purple flowers covering pergolas and boundary walls.' },
  { id: 'pinwheel-chandi', name: 'Pinwheel Plant (Chandi / Sada Bahar)', urdu: 'چاندی / سدا بہار', category: 'flowering', price: 450, range: '350 - 550', size: 'Ground Cover', sunlight: 'Full / Partial Sun', watering: 'Moderate', height: '2 – 4 ft', diff: 'Easiest', pet: true, badge: '🤍 Year-Round White', desc: 'Pure white pinwheel-shaped flowers blooming non-stop all 12 months. Ideal for garden borders.' },
  { id: 'jungle-geranium-ixora', name: 'Jungle Geranium (Ixora Red & Yellow)', urdu: 'ایکزورا پھول', category: 'flowering', price: 550, range: '450 - 650', size: 'Flowering Shrub', sunlight: 'Full Sun', watering: 'Regular', height: '2 – 5 ft', diff: 'Easy', pet: true, badge: '🌸 Dense Flower Ball', desc: 'Tight round clusters of fiery orange, red, and yellow star flowers blooming in summer.' },
  { id: 'jatropha-shrub', name: 'Jatropha Spicy Jatropha Shrub', urdu: 'جیٹروفا', category: 'flowering', price: 480, range: '350 - 650', size: 'Flowering Shrub', sunlight: 'Full Sun', watering: 'Low', height: '3 – 6 ft', diff: 'Easy', pet: true, badge: '🔴 Scarlet Star', desc: 'Ever-blooming scarlet red star flowers attracting butterflies and hummingbirds all year.' },
  { id: 'butterfly-bush', name: 'Butterfly Bush (Buddleja davidii)', urdu: 'بٹرفلائی بش', category: 'flowering', price: 1250, range: '1,000 - 1,500', size: 'Flowering Shrub', sunlight: 'Full Sun', watering: 'Moderate', height: '4 – 8 ft', diff: 'Easy', pet: true, badge: '🦋 Butterfly Magnet', desc: 'Long sweet-scented purple-pink flower spikes drawing dozens of colorful butterflies to your garden.' },
  { id: 'haar-singhar', name: 'Night-flowering Coral Jasmine (Haar Singhar)', urdu: 'ہار سنگھار', category: 'flowering', price: 480, range: '350 - 650', size: 'Shrub (1-2 ft)', sunlight: 'Full / Partial Sun', watering: 'Moderate', height: '3 – 10 ft', diff: 'Easy', pet: true, badge: '🧡 Orange Center Bloom', desc: 'Sacred Pakistani tree with white petals and bright orange stems that fall in early morning carpet.' },
  { id: 'gardenia-star', name: 'Gardenia Grandiflora Star (Gundhraj)', urdu: 'گارڈینیا / گندھ راج', category: 'flowering', price: 550, range: '450 - 650', size: 'Flowering Shrub', sunlight: 'Morning Sun', watering: 'Regular', height: '2 – 5 ft', diff: 'Moderate', pet: true, badge: '🤍 Intoxicating Perfume', desc: 'Creamy white velvety roses with the richest sweet perfume in the plant world.' },
  { id: 'texas-sage', name: 'Texas Sage Purple Bloom (Leucophyllum)', urdu: 'ٹیکساس سیج', category: 'flowering', price: 420, range: '350 - 500', size: 'Ground Cover', sunlight: 'Full Sun', watering: 'Very Low', height: '2 – 5 ft', diff: 'Easiest', pet: true, badge: '💜 Silver-Purple Shrub', desc: 'Silvery-grey foliage bursting into vibrant magenta-purple flowers after rain showers.' },
  { id: 'spider-plant', name: 'Spider Plant Variegated (Ribbon Plant)', urdu: 'سپائیڈر پلانٹ', category: 'indoor', price: 125, range: '100 - 150', size: 'Ground Cover / Pot', sunlight: 'Indirect Light', watering: 'Weekly', height: '1 – 1.5 ft', diff: 'Easiest', pet: true, badge: '🌿 Pet Safe Purifier', desc: 'Cascading green-and-white arching blades producing mini baby plantlets. 100% pet safe.' },
  { id: 'purple-heart', name: 'Purple Heart Tradescantia (Ground Cover)', urdu: 'پرپل ہارٹ', category: 'flowering', price: 195, range: '150 - 250', size: 'Ground Cover', sunlight: 'Full Sun for Deep Purple', watering: 'Low', height: '0.5 – 1 ft', diff: 'Easiest', pet: true, badge: '💜 Purple Carpet', desc: 'Vivid dark violet-purple trailing stems and pink flowers. Popular lawn border and rockery plant.' },

  // TREES & BONSAI
  { id: 'braided-ficus-spiral', name: 'Braided Topiary Ficus Spiral (6–15 ft)', urdu: 'فیکس سپائرل', category: 'bonsai', price: 7950, range: '6,500 - 9,500', size: 'Bonsai (6-15 ft)', sunlight: 'Full / Partial Sun', watering: 'Moderate', height: '6 – 15 ft', diff: 'Easy', pet: true, badge: '🎋 Sculpted Spiral', desc: 'Artistically braided spiral trunk Ficus topiary. Grand entrance plant for villas and halls.' },
  { id: 'grill-bonsai-ficus', name: 'Grill Bonsai Ficus Masterpiece (3–10 ft)', urdu: 'فیکس گرل بونسائی', category: 'bonsai', price: 21500, range: '18,500 - 25,000', size: 'Bonsai (3-10 ft)', sunlight: 'Full Sun / Partial', watering: 'Moderate', height: '3 – 10 ft', diff: 'Moderate', pet: true, badge: '🎋 Masterpiece Grill', desc: 'Exotic lattice-woven grill trunk Ficus bonsai. Museum-grade living sculpture centerpiece.' },
  { id: 'bakain-chinaberry', name: 'Chinaberry Tree (Bakain / Dhrek)', urdu: 'بکائن / دھریک', category: 'outdoor', price: 450, range: '350 - 550', size: '12" Pot (4-6 ft)', sunlight: 'Full Sun', watering: 'Low', height: '10 – 30 ft', diff: 'Easiest', pet: true, badge: '🌲 Native Shade', desc: 'Traditional native shade tree with lilac spring blossoms and natural insect-repellent wood.' },
  { id: 'crape-myrtle-lagerstroemia', name: 'Crape Myrtle (Lagerstroemia Pink/Purple)', urdu: 'جاڑفان', category: 'outdoor', price: 480, range: '350 - 650', size: '12" Pot (3-5 ft)', sunlight: 'Full Sun', watering: 'Moderate', height: '6 – 15 ft', diff: 'Easy', pet: true, badge: '🌸 Summer Crepe Flower', desc: 'Tissue-paper pink and purple flower clusters blooming all summer long on smooth ornamental bark.' },
  { id: 'tecoma-stans-yellow-bells', name: 'Tecoma Stans (Yellow Bells Tree)', urdu: 'پیلی گھنٹی / ٹیکوما', category: 'outdoor', price: 650, range: '450 - 850', size: '12" Pot (3-5 ft)', sunlight: 'Full Sun', watering: 'Moderate', height: '5 – 12 ft', diff: 'Easy', pet: true, badge: '💛 Bright Yellow Bells', desc: 'Vibrant golden yellow trumpet flowers covering the tree from spring to autumn.' },
  { id: 'gulmohar-tree', name: 'Gulmohar Flame Tree (Delonix regia)', urdu: 'گلموہر', category: 'outdoor', price: 1250, range: '950 - 1,500', size: '12" Pot (4-6 ft)', sunlight: 'Full Sun', watering: 'Moderate', height: '15 – 35 ft', diff: 'Easy', pet: true, badge: '🔴 Fiery Red Shade', desc: 'Pakistans famous royal flame tree. Explodes into scarlet-red flower umbrella canopy in May-June.' },
  { id: 'plumeria-gulechin', name: 'Plumeria Frangipani (Gul e Chin)', urdu: 'گلِ چین', category: 'outdoor', price: 550, range: '450 - 650', size: 'Small Pot (2-4 ft)', sunlight: 'Full Sun', watering: 'Low', height: '4 – 12 ft', diff: 'Easy', pet: true, badge: '🌸 Sweet Fragrance', desc: 'Thick succulent branches bearing sweet-scented white-and-yellow tropical blooms.' },
  { id: 'tabebuia-tree', name: 'Tabebuia Trumpet Tree (Pink / Yellow)', urdu: 'ٹیبیبویا', category: 'outdoor', price: 1650, range: '1,250 - 2,000', size: 'Small Pot (3-5 ft)', sunlight: 'Full Sun', watering: 'Moderate', height: '10 – 25 ft', diff: 'Easy', pet: true, badge: '🌸 Spring Bloom Cloud', desc: 'Spectacular flowering tree shedding leaves to cover branches in pink or yellow flower clouds.' },

  // PALMS
  { id: 'date-palm-khajoor', name: 'Pakistani Date Palm (Khajoor – All Sizes)', urdu: 'کھجور پام', category: 'palms', price: 15000, range: '2,500 - 30,000', size: 'Outdoor (4 ft to 25 ft)', sunlight: 'Full Sun', watering: 'Low', height: '4 – 30 ft', diff: 'Easiest', pet: true, badge: '🌴 Iconic Date Palm', desc: 'Rooted transplanted Date Palms of all sizes. Bearing sweet Pakistani dates for farmhouses and estate roads.' },
  { id: 'sago-kangi-palm', name: 'Sago Palm (Kangi Palm / Cycas)', urdu: 'کنگھی پام', category: 'palms', price: 1250, range: '1,000 - 1,500', size: 'Outdoor (1.5-3 ft)', sunlight: 'Full / Partial Sun', watering: 'Low', height: '2 – 5 ft', diff: 'Easy', pet: false, badge: '🌴 Stiff Feather Palm', desc: 'Prehistoric stiff rosette palm loved for Pakistani lawn centerpieces and rockeries.' },
  { id: 'foxtail-palm-avenue', name: 'Foxtail Palm (Wodyetia bifurcata)', urdu: 'فوکس ٹیل پام', category: 'palms', price: 3950, range: '3,000 - 5,000', size: 'Avenue Planting (6-12 ft)', sunlight: 'Full Sun', watering: 'Moderate', height: '8 – 20 ft', diff: 'Easy', pet: true, badge: '🌴 Fluffy Foxtail', desc: 'Feathery arching lush green fronds for luxury villa entrances and poolside landscaping.' },
  { id: 'bottle-palm-ornamental', name: 'Bottle Palm (Hyophorbe Lagenicaulis)', urdu: 'بوتل پام', category: 'palms', price: 3250, range: '2,500 - 4,000', size: 'Outdoor Ornamental', sunlight: 'Full Sun', watering: 'Moderate', height: '5 – 10 ft', diff: 'Moderate', pet: true, badge: '🌴 Swollen Trunk', desc: 'Unique swollen bottle-shaped trunk palm for luxury garden entrances and courtyards.' },
  { id: 'bismarckia-silver-palm', name: 'Bismarckia Silver Palm (Bismarckia nobilis)', urdu: 'بس مارکیا پام', category: 'palms', price: 3500, range: '2,500 - 4,500', size: 'Premium Landscape', sunlight: 'Full Sun', watering: 'Moderate', height: '6 – 18 ft', diff: 'Easy', pet: true, badge: '💙 Silvery Blue Fan', desc: 'Giant intense silvery-blue fan leaves. The most striking blue palm in Pakistani landscape architecture.' },
  { id: 'lady-palm-rhapis', name: 'Lady Palm (Rhapis excelsa)', urdu: 'لیڈی پام', category: 'palms', price: 3250, range: '2,500 - 4,000', size: 'Indoor / Shaded', sunlight: 'Shade / Indirect', watering: 'Regular', height: '3 – 7 ft', diff: 'Easy', pet: true, badge: '🌴 Multi-Stem Bamboo Palm', desc: 'Elegant multi-stem dark green fan palm thriving in indoor shaded corridors and patios.' },
  { id: 'copernicia-rare-palm', name: 'Copernicia alba Rare Exotic Palm', urdu: 'کوپرنیشیا پام', category: 'palms', price: 31500, range: '28,000 - 35,000', size: 'Rare Exotic Specimen', sunlight: 'Full Sun', watering: 'Low', height: '8 – 20 ft', diff: 'Easy', pet: true, badge: '⭐ Rare Collector Item', desc: 'Ultra-rare silver wax palm for collector estates and botanical gardens.' },
  { id: 'queen-palm', name: 'Queen Palm (Syagrus romanzoffiana)', urdu: 'کوئین پام', category: 'palms', price: 11500, range: '10,500 - 13,000', size: 'Large Landscape (10-18 ft)', sunlight: 'Full Sun', watering: 'Regular', height: '12 – 25 ft', diff: 'Easy', pet: true, badge: '👑 Graceful Feather Canopy', desc: 'Tall elegant palm with cascading dark green feather fronds and bright orange fruit clusters.' },
  { id: 'alexandra-palm', name: 'Alexandra Palm Tree (Alexander Palm)', urdu: 'الیگزینڈر پام', category: 'palms', price: 2250, range: '2,000 - 2,500', size: 'Landscape Specimen', sunlight: 'Full Sun', watering: 'Regular', height: '8 – 15 ft', diff: 'Easy', pet: true, badge: '🌴 Ringed Trunk', desc: 'Smooth grey ringed trunk with lush green crownshaft. Popular for avenue lining.' },
  { id: 'washingtonia-fan-palm-specimen', name: 'Washingtonia Fan Palm (Mexican Palm)', urdu: 'واشنگٹونیا پام', category: 'palms', price: 3250, range: '2,500 - 4,000', size: 'Avenue Planting (6-15 ft)', sunlight: 'Full Sun', watering: 'Low', height: '10 – 30 ft', diff: 'Easiest', pet: true, badge: '🌴 Skirt Fan Palm', desc: 'Fast-growing towering skirt palm for commercial plazas, wedding halls, and main road avenues.' },

  // CACTUS & SUCCULENTS
  { id: 'golden-barrel-cactus', name: 'Golden Barrel Cactus (Echinocactus grusonii)', urdu: 'گولڈن بیرل کیکٹس', category: 'succulent', price: 13500, range: '9,500 - 17,500', size: '6" Pot Specimen', sunlight: 'Direct Sun', watering: 'Monthly', height: '1 – 2 ft globe', diff: 'Easiest', pet: false, badge: '🌵 Golden Globe', desc: 'Perfect globe-shaped golden spined cactus. Luxury modern centerpiece for sunlit patios.' },
  { id: 'mother-of-hundreds-cactus', name: 'Mother of Hundreds Cactus (10" Pot)', urdu: 'مدر آف ہنڈرڈز کیکٹس', category: 'succulent', price: 15250, range: '12,500 - 18,000', size: '10" Pot', sunlight: 'Direct Sun', watering: 'Monthly', height: '1.5 – 3 ft', diff: 'Easiest', pet: false, badge: '🌵 Clumping Specimen', desc: 'Dense cluster of golden spined offset globes in decorative planter bowl.' },
  { id: 'spiny-pincushion-cactus', name: 'Spiny Pincushion Cactus Specimen (12" Pot)', urdu: 'سپائینی کیکٹس', category: 'succulent', price: 31500, range: '28,500 - 35,000', size: '12" Pot Collector', sunlight: 'Direct Sun', watering: 'Monthly', height: '2 – 4 ft cluster', diff: 'Easiest', pet: false, badge: '⭐ Rare Collector Cactus', desc: 'Massive multi-head pincushion cactus specimen for luxury rockeries and glass atriums.' },
  { id: 'andes-organ-pipe-cactus', name: 'Andes Organ Pipe Columnar Cactus (10" Pot)', urdu: 'اینڈیز آرگن پائپ کیکٹس', category: 'succulent', price: 11750, range: '8,500 - 15,000', size: '10" Pot (3-5 ft)', sunlight: 'Direct Sun', watering: 'Monthly', height: '3 – 6 ft columns', diff: 'Easiest', pet: false, badge: '🌵 Architectural Column', desc: 'Tall ribbed columnar green cactus stems providing dramatic desert landscape geometry.' },
  { id: 'century-plant-agave', name: 'Century Plant Agave Americana (10" Pot)', urdu: 'سیجوری ایگیو', category: 'succulent', price: 9500, range: '6,500 - 12,500', size: '10" Pot Specimen', sunlight: 'Direct Sun', watering: 'Monthly', height: '2 – 4 ft rosette', diff: 'Easiest', pet: false, badge: '🌵 Huge Blue Rosette', desc: 'Massive spiky blue-grey leaves forming an indestructible architectural outdoor rosette.' },
  { id: 'butterfly-agave-10', name: 'Butterfly Agave Potatorum (10" Pot)', urdu: 'بٹرفلائی ایگیو', category: 'succulent', price: 9950, range: '7,500 - 12,500', size: '10" Pot', sunlight: 'Direct Sun', watering: 'Monthly', height: '1.5 – 2.5 ft', diff: 'Easiest', pet: false, badge: '🌵 Sculpted Rosette', desc: 'Compact symmetrical bluish-grey rosette with dark burgundy terminal spines.' },
  { id: 'butterfly-agave-12', name: 'Butterfly Agave Large (12" Pot)', urdu: 'بٹرفلائی ایگیو لارج', category: 'succulent', price: 25000, range: '15,500 - 35,000', size: '12" Pot Specimen', sunlight: 'Direct Sun', watering: 'Monthly', height: '2.5 – 4 ft', diff: 'Easiest', pet: false, badge: '⭐ Master Specimen Agave', desc: 'Large museum-grade Butterfly Agave in terracotta container for driveway entrances.' },
  { id: 'thread-agave', name: 'Thread Agave Filifera (6" Pot)', urdu: 'تھریڈ ایگیو', category: 'succulent', price: 7950, range: '6,500 - 9,500', size: '6" Pot', sunlight: 'Direct Sun', watering: 'Monthly', height: '1 – 1.5 ft', diff: 'Easiest', pet: false, badge: '🌵 White Thread Rosette', desc: 'Dense dark green leaves covered in curly white ornamental threads along margins.' },
  { id: 'sansevieria-borneo', name: 'Sansevieria Borneo Gift Succulent (5" Pot)', urdu: 'سانسیویریا بورنیو', category: 'succulent', price: 7500, range: '5,500 - 9,500', size: 'Gift Plant (5" Pot)', sunlight: 'Indirect / Direct', watering: 'Monthly', height: '1 – 1.5 ft', diff: 'Easiest', pet: false, badge: '🎁 Exotic Gift', desc: 'Rare cylindrical fan-shaped collector Sansevieria in glazed ceramic pot.' },

  // MEDICINAL & HERBS
  { id: 'aloe-vera-kwar-gandal', name: 'Aloe Vera (Kwar Gandal / Gel Plant)', urdu: 'کنوار گندل / ایلو ویرا', category: 'medicinal', price: 400, range: '350 - 450', size: 'Medicinal (0.5-1 ft)', sunlight: 'Full / Partial Sun', watering: 'Bi-Weekly', height: '1 – 2.5 ft', diff: 'Easiest', pet: false, badge: '💊 Medicinal Gel', desc: 'Fresh gel treats skin burns, hair care, and digestion. Pakistan\'s most useful home medicinal plant.' },
  { id: 'holy-basil-niazbo', name: 'Holy Basil (Niazbo / Tulsi)', urdu: 'نیازبو / تلسی', category: 'medicinal', price: 120, range: '35 - 200', size: 'Aromatic (0.8-1 ft)', sunlight: 'Full Sun', watering: 'Regular', height: '1 – 2 ft', diff: 'Easiest', pet: true, badge: '🌿 Aromatic Immunity', desc: 'Aromatic sacred leaves used in traditional herbal tea, immunity remedies, and air freshening.' },
  { id: 'curry-leaf-curry-patta', name: 'Curry Leaf Plant (Curry Patta)', urdu: 'کڑی پتہ', category: 'medicinal', price: 400, range: '350 - 450', size: 'Culinary (1-2 ft)', sunlight: 'Full / Partial Sun', watering: 'Regular', height: '2 – 6 ft', diff: 'Easy', pet: true, badge: '🍲 Culinary Herb', desc: 'Fresh organic Curry Leaves essential for Pakistani karahi, daal, and South Asian cooking.' },
  { id: 'stevia-deal', name: 'Stevia Organic Sugar Free Plant (Deal of 2)', urdu: 'میٹھا پتہ (اسٹیویا)', category: 'medicinal', price: 1599, range: '1,399 - 1,800', size: 'Culinary Deal of 2', sunlight: 'Full Sun', watering: 'Regular', height: '1 – 2 ft', diff: 'Easy', pet: true, badge: '🍯 Natural Zero-Calorie Sweetener', desc: 'Natural zero-calorie sweet stevia leaves. 300x sweeter than sugar for diabetic patients.' },
  { id: 'lavender-deal', name: 'Lavender Fragrant Herb (Deal of 2)', urdu: 'لیوینڈر پھول', category: 'medicinal', price: 1650, range: '1,399 - 1,900', size: 'Aromatic Deal of 2', sunlight: 'Full Sun', watering: 'Low', height: '1 – 2 ft', diff: 'Moderate', pet: true, badge: '💜 Calming Aroma', desc: 'Fragrant purple lavender flowers promoting deep sleep, stress relief, and tea infusion.' },

  // FRUITS & ORCHARDS (EXISTING CROP)
  { id: 'shan-e-khuda-mango', name: 'Shan-e-Khuda Sensation Mango (3-4 ft)', urdu: 'شانِ خدا / سینسیشن آم', category: 'fruit', price: 1950, range: '1,500 - 2,500', size: '12" Earth Ball (3-4 ft)', sunlight: 'Full Sun', watering: 'Regular', height: '3 – 8 ft', diff: 'Easy', pet: true, badge: '🍊 Red-Purple Mango', desc: 'Unique deep red-purple Pakistani Sensation Mango variety bearing sweet fibre-free fruit.' },
  { id: 'sindhri-mango-bag', name: 'Grafted Sindhri Mango (18" Grow Bag)', urdu: 'سندھڑی آم', category: 'fruit', price: 5500, range: '4,500 - 6,500', size: '18" Grow Bag (4-6 ft)', sunlight: 'Full Sun', watering: 'Regular', height: '5 – 12 ft', diff: 'Easy', pet: true, badge: '🍊 Export Sindhri', desc: 'Large golden Sindhri mango tree ready for immediate orchard or garden planting.' },
  { id: 'multani-chaunsa-grafted', name: 'Grafted Multani Chaunsa Mango', urdu: 'ملتانی چونسہ آم', category: 'fruit', price: 3500, range: '3,000 - 4,500', size: '12" Earth Ball (4-5 ft)', sunlight: 'Full Sun', watering: 'Regular', height: '5 – 15 ft', diff: 'Easy', pet: true, badge: '🍊 King of Mangoes', desc: 'World-famous Multani Chaunsa. Sweetest aromatic mango fruiting within 2 years.' },
  { id: 'china-guava-amrood', name: 'White China Guava Sapling (چائنا امرود)', urdu: 'چائنا امرود', category: 'fruit', price: 550, range: '450 - 650', size: '12" Bag (2.5-3 ft)', sunlight: 'Full Sun', watering: 'Moderate', height: '3 – 8 ft', diff: 'Easiest', pet: true, badge: '🍐 #1 Amrood', desc: 'Pakistans top commercial China Guava producing large crisp sweet guavas twice a year.' },
  { id: 'kandhari-anar-pomegranate', name: 'Kandhari Pomegranate (Anar Tree)', urdu: 'قندھاری انار', category: 'fruit', price: 2450, range: '450 - 4,500', size: '12" to 18" Pot', sunlight: 'Full Sun', watering: 'Low', height: '3 – 8 ft', diff: 'Easiest', pet: true, badge: '❤️ Ruby Red Arils', desc: 'Deep red Kandhari Anar bearing juicy sweet-tart pomegranates.' },
  { id: 'clementine-kinnow-orange', name: 'Clementine Kinnow / Malta Orange', urdu: 'مٹھا کینو / مالٹا', category: 'fruit', price: 700, range: '550 - 850', size: '12" Pot/Bag', sunlight: 'Full Sun', watering: 'Regular', height: '3 – 8 ft', diff: 'Easy', pet: false, badge: '🍊 Sweet Citrus', desc: 'High-yielding sweet Kinnow and Malta orange tree for Punjab orchards.' },
  { id: 'sweet-orange-kinnow', name: 'Sargodha Sweet Kinnow Orange', urdu: 'سرگودھا کینو', category: 'fruit', price: 700, range: '550 - 850', size: '12" Bag', sunlight: 'Full Sun', watering: 'Regular', height: '3 – 8 ft', diff: 'Easy', pet: false, badge: '🍊 Sargodha Breed', desc: 'Famous Sargodha Kinnu citrus sapling fruiting heavily in winter months.' },
  { id: 'red-blood-orange', name: 'Red Blood Orange Sapling (Malta)', urdu: 'بلڈ اورنج', category: 'fruit', price: 1750, range: '1,000 - 2,500', size: '12" Bag', sunlight: 'Full Sun', watering: 'Regular', height: '3 – 8 ft', diff: 'Easy', pet: false, badge: '🍊 Deep Red Juice', desc: 'Winter blood orange tree with deep red sweet citrus juice.' },
  { id: 'kumquat-orange', name: 'Kumquat Orange Tree (Sweet Peel Citrus)', urdu: 'کمکاٹ سنگترہ', category: 'fruit', price: 1850, range: '1,250 - 2,500', size: '12" Bag (3-3.5 ft)', sunlight: 'Full Sun', watering: 'Regular', height: '3 – 5 ft', diff: 'Easy', pet: false, badge: '🍊 Miniature Edible Peel', desc: 'Miniature orange tree bearing small oval fruits eaten whole with sweet peel.' },
  { id: 'seedless-lemon-neebu', name: 'Seedless Desi Lemon (Be-Beej Neebu)', urdu: 'بے بیج لیموں', category: 'fruit', price: 825, range: '650 - 1,000', size: '12" Bag', sunlight: 'Full Sun', watering: 'Regular', height: '3 – 6 ft', diff: 'Easiest', pet: false, badge: '🍋 Seedless Lemon', desc: 'High-yielding juicy seedless lemon tree fruiting year-round.' },
  { id: 'sundar-khani-grapes', name: 'Sundar Khani Grapes Vine (Angoor)', urdu: 'سندر خانی انگور', category: 'fruit', price: 1175, range: '850 - 1,500', size: '10" Bag', sunlight: 'Full Sun', watering: 'Moderate', height: '6 – 15 ft vine', diff: 'Moderate', pet: true, badge: '🍇 Sweet Sundar Khani', desc: 'Famous long green sweet Sundar Khani grape vine for pergolas.' },
  { id: 'pineapple-ananas', name: 'Pineapple Plant (Ananas Tropical)', urdu: 'انناس', category: 'fruit', price: 2950, range: '2,500 - 3,500', size: 'Tropical Container', sunlight: 'Full Sun', watering: 'Moderate', height: '2 – 3 ft', diff: 'Easy', pet: true, badge: '🍍 Tropical Pineapple', desc: 'Exotic tropical pineapple plant producing sweet home-grown pineapple fruit.' },
  { id: 'tamarind-imli-tree', name: 'Tamarind Tree Sapling (Imli)', urdu: 'املی کا درخت', category: 'fruit', price: 725, range: '650 - 800', size: '12" Bag (1-1.5 ft)', sunlight: 'Full Sun', watering: 'Low', height: '10 – 30 ft', diff: 'Easiest', pet: true, badge: '🤎 Imli Pods', desc: 'Traditional Pakistani Imli tree producing sour-sweet tamarind pods.' },
  { id: 'spanish-olive-zaitoon', name: 'Imported Spanish Olive Tree (Zaitoon)', urdu: 'اسپینش زیتون', category: 'fruit', price: 1250, range: '1,000 - 1,500', size: '12" Bag (1-2 ft)', sunlight: 'Full Sun', watering: 'Low', height: '4 – 12 ft', diff: 'Easy', pet: true, badge: '🫒 Blessed Zaitoon', desc: 'High oil-content Spanish olive tree acclimatized for Punjab and KPK soil.' },
  { id: 'papaya-red-lady', name: 'Red Lady Papaya Hybrid (Papita)', urdu: 'ریڈ لیڈی پپیتا', category: 'fruit', price: 1175, range: '850 - 1,500', size: 'Hybrid / 12" Bag', sunlight: 'Full Sun', watering: 'Regular', height: '5 – 10 ft', diff: 'Easy', pet: true, badge: '🥭 8-Month Fast Fruit', desc: 'Ultra fast Papaya fruiting within 8 months with sweet red flesh.' },
  { id: 'almond-badaam-tree', name: 'Almond Tree Sapling (Badaam)', urdu: 'بادام کا درخت', category: 'fruit', price: 1375, range: '950 - 1,800', size: '12" Bag (2.5-3.5 ft)', sunlight: 'Full Sun', watering: 'Moderate', height: '6 – 15 ft', diff: 'Moderate', pet: true, badge: '🥜 Sweet Almond', desc: 'Pakistani almond tree bearing white spring blossoms and sweet almonds.' },
  { id: 'jamun-java-plum-tree', name: 'Java Plum Tree (Jamun)', urdu: 'جامن کا درخت', category: 'fruit', price: 550, range: '450 - 650', size: '12" Bag (2-3 ft)', sunlight: 'Full Sun', watering: 'Regular', height: '10 – 25 ft', diff: 'Easiest', pet: true, badge: '🫐 Monsoon Jamun', desc: 'Beloved dark purple Jamun shade tree packed with antioxidant health benefits.' },
  { id: 'dwarf-banana-kela', name: 'Dwarf Banana Tree (Kela)', urdu: 'کیلا', category: 'fruit', price: 1175, range: '850 - 1,500', size: '12" Bag', sunlight: 'Full Sun', watering: 'High', height: '4 – 7 ft', diff: 'Easy', pet: true, badge: '🍌 Fast Banana', desc: 'Dwarf banana tree producing sweet Pakistani banana bunches.' },
  { id: 'lychee-leechi-tree', name: 'Grafted Lychee Tree (Leechi)', urdu: 'لیچی', category: 'fruit', price: 1875, range: '1,250 - 2,500', size: '12" Bag (1-1.5 ft)', sunlight: 'Full Sun', watering: 'Regular', height: '6 – 15 ft', diff: 'Moderate', pet: true, badge: '❤️ Sweet Leechi', desc: 'Juicy translucent sweet Lychee fruit tree grafted for Punjab soil.' },
  { id: 'plum-aloo-bukhara', name: 'Plum Tree (Aloo Bukhara)', urdu: 'آلو بخارا', category: 'fruit', price: 1175, range: '850 - 1,500', size: '12" Bag', sunlight: 'Full Sun', watering: 'Regular', height: '5 – 12 ft', diff: 'Moderate', pet: true, badge: '🟣 Sweet Plum', desc: 'Pakistani Aloo Bukhara plum tree producing juicy purple-red plums.' },
  { id: 'black-fig-anjeer', name: 'Black Fig Tree (Kala Anjeer)', urdu: 'کالا انجیر', category: 'fruit', price: 1175, range: '850 - 1,500', size: '12" Bag (1.5-3 ft)', sunlight: 'Full Sun', watering: 'Low', height: '4 – 10 ft', diff: 'Easiest', pet: true, badge: '🫐 Medicinal Fig', desc: 'Sweet honey-flavored dark black figs fruiting twice a year.' },
];

const formattedPlants = RAW_PLANTS.map(p => ({
  id: p.id,
  name: p.name,
  category: p.category,
  latinName: `${p.urdu} • ${p.size || 'Verified Stock'}`,
  pricePKR: p.price,
  rating: 5.0,
  reviewsCount: Math.floor(Math.random() * 80) + 40,
  badge: p.badge || '🌿 Verified Stock',
  description: `${p.desc} Price Range: PKR ${p.range}. Size: ${p.size}.`,
  sunlight: p.sunlight || 'Full / Partial Sun',
  watering: p.watering || 'Regular',
  height: p.height || '3 - 8 ft',
  airPurifying: 95,
  difficulty: p.diff || 'Easy',
  petFriendly: p.pet !== undefined ? p.pet : true,
  origin: 'Chak Hassan Arain (Rahman Nursery Farm)',
  colorTheme: '#059669',
  growthTimeline: { '1 Year': 'Healthy growing plant.', '3 Years': 'Mature specimen.' },
  careGuide: ['Cultivated in acclimatized soil.', 'Requires moderate sunlight and organic compost.']
}));

const fileContent = `export const PLANT_CATEGORIES = ${JSON.stringify(PLANT_CATEGORIES, null, 2)};

export const POT_OPTIONS = ${JSON.stringify(POT_OPTIONS, null, 2)};

export const ORCHARD_SERVICES = ${JSON.stringify(ORCHARD_SERVICES, null, 2)};

export const BOTANICAL_CARE_GUIDES = ${JSON.stringify(BOTANICAL_CARE_GUIDES, null, 2)};

export const FREQUENTLY_ASKED_QUESTIONS = ${JSON.stringify(FREQUENTLY_ASKED_QUESTIONS, null, 2)};

export const PLANTS_DATA = ${JSON.stringify(formattedPlants, null, 2)};
`;

fs.writeFileSync('c:/Users/Hp/OneDrive/Desktop/rahman-nursery-farm/src/data/plantCatalog.js', fileContent);
console.log('Successfully updated plantCatalog.js with ' + formattedPlants.length + ' total plants!');
