// ─────────────────────────────────────────────────────────────
// Everything you may want to edit lives in this file.
// Contact details: fill these in — buttons stay hidden while empty.
// ─────────────────────────────────────────────────────────────
export const contact = {
  phone: '', // e.g. '+91 98620 00000'
  whatsapp: '', // digits only with country code, e.g. '919862000000'
  email: '',
  // Brick kiln — M/S Maa Bricks Industries Unit-II (MKB), Jirania
  mapsUrl: 'https://maps.app.goo.gl/GhWHLCHrE7n1aucB9',
}

export const credit = 'Designed with respect by Ritu Raj'

// Photo gallery. To add a photo: put the file in public/photos/ and add one line here.
// The first photo is shown large. Captions are optional; shape is detected automatically.
export const photos = [
  {
    src: '/photos/association-address.jpg',
    en: 'Addressing the gathering — Tripura Brick Manufacturers Association, Sepahijala',
    bn: 'সভায় বক্তব্য — ত্রিপুরা ব্রিক ম্যানুফ্যাকচারার্স অ্যাসোসিয়েশন, সিপাহীজলা',
  },
  { src: '/photos/association-lamp.jpg', en: 'Lighting the ceremonial lamp', bn: 'প্রদীপ প্রজ্বলন' },
  { src: '/photos/association-group.jpg', en: 'With fellow members of the association', bn: 'অ্যাসোসিয়েশনের সদস্যদের সঙ্গে' },
]

// Bilingual copy. Keep the two languages' structure identical.
export const copy = {
  en: {
    langLabel: 'বাংলা',
    nav: { about: 'About', moments: 'Moments', bricks: 'Brick field', works: 'Contracts', home: 'Sonamura', contact: 'Contact' },
    hero: {
      eyebrow: 'Sonamura · Tripura',
      name: 'Asok Roy',
      tagline: 'Building Tripura, one brick at a time.',
      sub: 'Brick manufacturer and government contractor — making the bricks, and building the roads, buildings and drains that carry Sonamura forward.',
      ctaPrimary: 'Order bricks',
      ctaSecondary: 'See our work',
    },
    pillars: ['Own brick kiln', 'Government contractor', 'Roads · Buildings · Drains', 'Rooted in Sonamura'],
    about: {
      kicker: 'About',
      title: 'A life built on solid ground',
      body: [
        'Asok Roy has spent his working life where the earth meets the fire — turning the clay of Sonamura into bricks, and those bricks into roads, schools and offices that people use every day.',
        'His way of working is simple: honest measurement, sound material, and a job finished the way it was promised. That reputation, earned slowly over the years, is what brings people back.',
      ],
      motto: 'A wall is only as strong as its weakest brick.',
      values: [
        { t: 'Honest measure', d: 'Full count, true size. What is billed is what is delivered.' },
        { t: 'Sound material', d: 'Well-fired bricks and proper materials — no shortcuts hidden inside the walls.' },
        { t: 'On schedule', d: 'Work planned around the season and finished on the date given.' },
        { t: 'Local hands', d: 'Built by workers and families from Sonamura and the villages around it.' },
      ],
    },
    moments: {
      kicker: 'Moments',
      title: 'Among his peers',
      intro:
        'With fellow brick manufacturers of Tripura at the Sepahijala District Committee of The Tripura Brick Manufacturers Association.',
      close: 'Close',
      prev: 'Previous photo',
      next: 'Next photo',
    },
    bricks: {
      kicker: 'The brick field',
      title: 'From river clay to fired brick',
      intro:
        'Good buildings begin long before the site — in the clay pit and the kiln. Our bricks are moulded from local clay, sun-dried through the dry season and fired evenly for strength and a clean ring.',
      steps: [
        { t: 'Clay', d: 'Selected and well-tempered local clay.' },
        { t: 'Moulding', d: 'Shaped by hand to a uniform size.' },
        { t: 'Drying', d: 'Sun-dried in long rows before firing.' },
        { t: 'Firing', d: 'Fired evenly in the kiln for days.' },
        { t: 'Sorting', d: 'Graded so you get exactly what you order.' },
      ],
      productsTitle: 'What we supply',
      products: [
        { t: 'First-class bricks', d: 'Well-burnt, uniform, sharp-edged. For load-bearing walls and exposed brickwork.' },
        { t: 'Second-class bricks', d: 'Sound and economical for partition walls and general masonry.' },
        { t: 'Picket (jhama) bricks', d: 'Over-burnt, very hard bricks for foundations, soling and paving.' },
        { t: 'Brick bats (khoa)', d: 'Broken-brick aggregate for concrete, road base and filling.' },
      ],
      kiln: { name: 'Maa Bricks Industries', place: 'Unit-II (MKB) · Jirania, West Tripura', map: 'Get directions' },
      cta: "Ask for today's rate and delivery",
    },
    works: {
      kicker: 'Government contracts',
      title: 'Public works, done properly',
      intro:
        "As a government contractor, Asok Roy executes public works to the department's drawings, specifications and timelines — and with his own brick field behind him, the most important material is never in short supply.",
      items: [
        { t: 'Roads', d: 'Brick soling, metalled and rural roads.' },
        { t: 'Buildings', d: 'Schools, offices and public buildings.' },
        { t: 'Drains & culverts', d: 'Drainage, culverts and retaining walls.' },
        { t: 'Earthwork', d: 'Filling, levelling and site development.' },
      ],
      promise: ['Work to specification', 'Quality-checked material', 'Timely completion'],
    },
    home: {
      kicker: 'Home',
      title: 'Rooted in Sonamura',
      body:
        'Sonamura sits on the banks of the Gumti in Sepahijala district, close to the Bangladesh border — a land of paddy fields, river clay and the lake palace of Neermahal. This is the soil our bricks come from, and the community our work serves.',
      facts: ['Gumti river', 'Neermahal, Rudrasagar', 'Sepahijala district'],
    },
    contact: {
      kicker: 'Contact',
      title: "Let's build together",
      body: 'For brick orders, rates and delivery, or to discuss a project — reach out directly.',
      call: 'Call',
      whatsapp: 'WhatsApp',
      email: 'Email',
      maps: 'Brick kiln on Maps',
      addresses: [
        { label: 'Brick kiln', v: 'M/S Maa Bricks Industries Unit-II, Jirania, West Tripura' },
        { label: 'Home', v: 'Sonamura, Sepahijala District, Tripura' },
      ],
    },
    footer: 'Sonamura, Tripura',
  },

  bn: {
    langLabel: 'English',
    nav: { about: 'পরিচয়', moments: 'মুহূর্ত', bricks: 'ইটভাটা', works: 'ঠিকাদারি', home: 'সোনামুড়া', contact: 'যোগাযোগ' },
    hero: {
      eyebrow: 'সোনামুড়া · ত্রিপুরা',
      name: 'অশোক রায়',
      tagline: 'ইটে ইটে গড়ি ত্রিপুরা।',
      sub: 'ইট প্রস্তুতকারক ও সরকারি ঠিকাদার — নিজের ভাটার ইটে গড়ে তুলি রাস্তা, ভবন আর নালা, যা সোনামুড়াকে এগিয়ে নিয়ে যায়।',
      ctaPrimary: 'ইট অর্ডার করুন',
      ctaSecondary: 'আমাদের কাজ',
    },
    pillars: ['নিজস্ব ইটভাটা', 'সরকারি ঠিকাদার', 'রাস্তা · ভবন · নালা', 'সোনামুড়ার মাটিতে শিকড়'],
    about: {
      kicker: 'পরিচয়',
      title: 'মজবুত ভিতের উপর গড়া এক জীবন',
      body: [
        'অশোক রায়ের কর্মজীবন কেটেছে মাটি আর আগুনের মাঝে — সোনামুড়ার মাটি থেকে ইট, আর সেই ইট দিয়ে রাস্তা, বিদ্যালয় ও অফিস, যা মানুষ প্রতিদিন ব্যবহার করে।',
        'তাঁর কাজের ধরন সহজ: সৎ মাপ, ভালো মাল, আর কথা দেওয়া সময়ে কথামতো কাজ। বহু বছরে ধীরে ধীরে অর্জিত এই সুনামই মানুষকে বারবার ফিরিয়ে আনে।',
      ],
      motto: 'একটা দেয়াল ততটাই মজবুত, যতটা মজবুত তার সবচেয়ে দুর্বল ইট।',
      values: [
        { t: 'সৎ মাপ', d: 'পুরো গুনতি, সঠিক মাপ। যা বিল, তা-ই সরবরাহ।' },
        { t: 'ভালো মাল', d: 'ভালো পোড়ানো ইট আর সঠিক মালমশলা — দেয়ালের ভেতরে কোনো ফাঁকি নেই।' },
        { t: 'সময়মতো কাজ', d: 'মরসুম বুঝে পরিকল্পনা, কথা দেওয়া তারিখে কাজ শেষ।' },
        { t: 'স্থানীয় হাত', d: 'সোনামুড়া ও আশেপাশের গ্রামের শ্রমিক ও পরিবারের হাতে গড়া।' },
      ],
    },
    moments: {
      kicker: 'মুহূর্ত',
      title: 'সহযোদ্ধাদের মাঝে',
      intro: 'ত্রিপুরার ইট প্রস্তুতকারকদের সঙ্গে — দ্য ত্রিপুরা ব্রিক ম্যানুফ্যাকচারার্স অ্যাসোসিয়েশন, সিপাহীজলা জেলা কমিটির অনুষ্ঠানে।',
      close: 'বন্ধ করুন',
      prev: 'আগের ছবি',
      next: 'পরের ছবি',
    },
    bricks: {
      kicker: 'ইটভাটা',
      title: 'নদীর মাটি থেকে পোড়া ইট',
      intro:
        'ভালো ভবনের শুরু নির্মাণস্থলের অনেক আগে — মাটির গর্ত আর ভাটায়। আমাদের ইট স্থানীয় মাটিতে তৈরি, শুকনো মরসুমে রোদে শুকানো, আর সমান তাপে পোড়ানো — যাতে মজবুত হয়, আর টোকা দিলে পরিষ্কার শব্দ হয়।',
      steps: [
        { t: 'মাটি', d: 'বাছাই করা, ভালোভাবে মাখানো স্থানীয় মাটি।' },
        { t: 'ছাঁচ', d: 'হাতে ছাঁচে ফেলে একই মাপের ইট।' },
        { t: 'শুকানো', d: 'পোড়ানোর আগে সারি করে রোদে শুকানো।' },
        { t: 'পোড়ানো', d: 'ভাটায় দিনের পর দিন সমান তাপে পোড়ানো।' },
        { t: 'বাছাই', d: 'শ্রেণি অনুযায়ী বাছাই — যা অর্ডার, ঠিক তা-ই।' },
      ],
      productsTitle: 'আমরা যা সরবরাহ করি',
      products: [
        { t: 'প্রথম শ্রেণির ইট', d: 'ভালো পোড়া, সমান মাপ, ধারালো কিনারা। ভারবাহী দেয়াল ও খোলা গাঁথনির জন্য।' },
        { t: 'দ্বিতীয় শ্রেণির ইট', d: 'পার্টিশন দেয়াল ও সাধারণ গাঁথনির জন্য মজবুত ও সাশ্রয়ী।' },
        { t: 'ঝামা (পিকেট) ইট', d: 'বেশি পোড়া, খুব শক্ত ইট — ভিত, সোলিং ও রাস্তার জন্য।' },
        { t: 'ইটের খোয়া', d: 'কংক্রিট, রাস্তার ভিত ও ভরাটের জন্য ভাঙা ইটের খোয়া।' },
      ],
      kiln: { name: 'মা ব্রিকস ইন্ডাস্ট্রিজ', place: 'ইউনিট-২ (MKB) · জিরানিয়া, পশ্চিম ত্রিপুরা', map: 'পথনির্দেশ দেখুন' },
      cta: 'আজকের দর ও ডেলিভারির খোঁজ নিন',
    },
    works: {
      kicker: 'সরকারি ঠিকাদারি',
      title: 'সরকারি কাজ, সঠিকভাবে',
      intro:
        'সরকারি ঠিকাদার হিসেবে অশোক রায় দপ্তরের নকশা, নির্দিষ্ট মান ও সময়সীমা মেনে সরকারি কাজ সম্পন্ন করেন — আর নিজের ইটভাটা থাকায় সবচেয়ে জরুরি মালের জোগান থাকে নিশ্চিত।',
      items: [
        { t: 'রাস্তা', d: 'ইটের সোলিং, পাকা ও গ্রামীণ রাস্তা।' },
        { t: 'ভবন', d: 'বিদ্যালয়, অফিস ও সরকারি ভবন।' },
        { t: 'নালা ও কালভার্ট', d: 'নিকাশি নালা, কালভার্ট ও গার্ড ওয়াল।' },
        { t: 'মাটির কাজ', d: 'মাটি ভরাট, সমতলকরণ ও জমি উন্নয়ন।' },
      ],
      promise: ['নির্দিষ্ট মান মেনে কাজ', 'পরীক্ষিত মাল', 'সময়মতো সমাপ্তি'],
    },
    home: {
      kicker: 'আমাদের মাটি',
      title: 'সোনামুড়ার মাটিতে শিকড়',
      body:
        'গোমতী নদীর তীরে, সিপাহীজলা জেলার সোনামুড়া — বাংলাদেশ সীমান্তের কাছে ধানখেত, নদীর মাটি আর নীরমহলের দেশ। এই মাটি থেকেই আমাদের ইট, আর এই মানুষদের জন্যই আমাদের কাজ।',
      facts: ['গোমতী নদী', 'নীরমহল, রুদ্রসাগর', 'সিপাহীজলা জেলা'],
    },
    contact: {
      kicker: 'যোগাযোগ',
      title: 'চলুন, একসাথে গড়ি',
      body: 'ইটের অর্ডার, দর ও ডেলিভারি, কিংবা কোনো কাজের আলোচনা — সরাসরি যোগাযোগ করুন।',
      call: 'ফোন করুন',
      whatsapp: 'হোয়াটসঅ্যাপ',
      email: 'ইমেল',
      maps: 'ম্যাপে ইটভাটা দেখুন',
      addresses: [
        { label: 'ইটভাটা', v: 'মেসার্স মা ব্রিকস ইন্ডাস্ট্রিজ ইউনিট-২, জিরানিয়া, পশ্চিম ত্রিপুরা' },
        { label: 'বাড়ি', v: 'সোনামুড়া, সিপাহীজলা জেলা, ত্রিপুরা' },
      ],
    },
    footer: 'সোনামুড়া, ত্রিপুরা',
  },
}
