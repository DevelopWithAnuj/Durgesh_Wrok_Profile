/**
 * translations.js
 * -----------------------------------------------------------------------
 * Central translation dictionary for the bilingual (English ↔ Hindi)
 * portfolio website.
 *
 * HOW TO ADD A NEW TRANSLATABLE STRING
 * 1. In the HTML, add a `data-lang="yourKey"` attribute to the element
 *    (or `data-placeholder="yourKey"` for <input>/<textarea> placeholders).
 * 2. Add "yourKey" to BOTH the `en` and `hi` objects below with the
 *    matching text.
 * 3. That's it — language.js automatically picks up every key on the
 *    page, so no other code needs to change.
 *
 * This file only defines DATA. All DOM logic lives in language.js.
 * -----------------------------------------------------------------------
 */

const translations = {
  en: {
    // ---------- NAVIGATION ----------
    navHome: "Home",
    navAbout: "About Me",
    navServices: "Services",
    navWork: "My Work",
    navReviews: "Reviews",
    navContact: "Contact",
    navCallNow: "📞 Call Now",
    navWhatsapp: "💬 WhatsApp",

    // ---------- HERO ----------
    heroBadge: "⚡ Independent Electrician",
    heroTitle: "Hi, I'm Durgesh",
    heroSubtitle:
      "Professional Electrical Services for Homes, Shops & New Building Projects",
    heroDesc:
      "Helping homeowners and builders with safe, reliable electrical installations.",
    heroStat1: "3+ Years Experience",
    heroStat2: "50+ Completed Projects",
    heroStat3: "Personal Service",
    heroStat4: "Available Nearby Areas",
    heroCallBtn: "📞 Call Now",
    heroWhatsappBtn: "💬 WhatsApp",
    heroTag1: "⚡ House Wiring",
    heroTag2: "🏠 New House Wiring",
    heroTag3: "💡 Electrical Installation",
    heroTag4: "🔧 Maintenance",

    // ---------- ABOUT ----------
    aboutLabel: "About Me",
    aboutTitle:
      "From Blueprint to First Light: Precision Electrical Installations",
    aboutDesc:
      "I'm an independent electrician with 3+ years of experience across Uttar Pradesh. I work on every project myself — no hand-offs, no subcontracting. Honest pricing, careful supervision, and safe practices on every job, from a single ceiling fan to full wiring for a new house.",
    aboutPoint1: "Honest Pricing",
    aboutPoint2: "Personal Supervision",
    aboutPoint3: "Quality-First Work",
    aboutPoint4: "Safety Committed",

    // ---------- ELECTRICAL SERVICES ----------
    servicesLabel: "Services",
    servicesTitle: "Electrical Services",
    service1: "Complete House Wiring",
    service2: "Complete Electrical Installation",
    service3: "Switch Board Installation",
    service4: "Lighting Installation",
    service5: "Ceiling Fan Installation",
    service6: "Electrical Maintenance",
    service7: "Shop Electrical Work",
    service8: "Small Office Electrical Work",

    // ---------- NEW CONSTRUCTION ----------
    constructionLabel: "New Construction",
    constructionTitle: "New Construction Services",
    constructionDesc:
      "Electrical and plumbing work during new house construction.",
    construction1: "New House Electrical Installation",
    construction2: "Electrical Layout Planning",
    construction3: "Water Pipeline Installation",
    construction4: "Bathroom & Kitchen Pipeline Installation",
    construction5: "Builder & Architect Coordination",
    constructionNote:
      "Pipeline work is carried out only as part of new house or building construction — not offered as a standalone plumbing repair service.",

    // ---------- MY WORK ----------
    workLabel: "Portfolio",
    workTitle: "My Work",
    filterAll: "All",
    filterHouses: "🏠 Houses",
    filterBuilders: "🏗 Builder Projects",
    filterShops: "🏪 Shops",
    filterCommercial: "🏢 Small Commercial",

    // ---------- WHY PEOPLE CHOOSE ME ----------
    whyLabel: "Why People Choose Me",
    whyTitle: "What you can expect",
    why1: "Personal Attention",
    why2: "Honest Pricing",
    why3: "Quality Work",
    why4: "Clean Installation",
    why5: "On-Time Completion",
    why6: "Reliable Communication",
    why7: "Safe Electrical Practices",
    why8: "New House Construction Experience",

    // ---------- REVIEWS ----------
    reviewsLabel: "Reviews",
    reviewsTitle: "Customer Reviews",
    review1Location: "Gomti Nagar, Lucknow",
    review1Text:
      "Rewired our whole house neatly and explained everything clearly. Very reliable.",
    review2Location: "Builder, Indira Nagar",
    review2Text:
      "We've used Durgesh on three builder projects. Always on time and fair pricing.",
    review3Location: "Shop Owner, Aminabad",
    review3Text:
      "Handled all the electrical work for my new shop. Clean wiring, no issues since.",

    // ---------- FAQ ----------
    faqLabel: "FAQ",
    faqTitle: "Frequently Asked Questions",
    faq1Q: "Do you work on new houses?",
    faq1A:
      "Yes — I handle electrical installation and layout planning for new house construction, plus pipeline work as part of that project.",
    faq2Q: "Do you work with builders?",
    faq2A:
      "Yes, I regularly coordinate with builders and architects on electrical work for houses under construction.",
    faq3Q: "Can I contact you on WhatsApp?",
    faq3A:
      "Yes — WhatsApp is usually the fastest way to reach me. Just tap the WhatsApp button anywhere on this site.",
    faq4Q: "Which areas do you serve?",
    faq4A:
      "I mainly serve Varanasi and nearby areas across Uttar Pradesh. Message me your location and I'll confirm availability.",
    faq5Q: "Do you visit the site before starting work?",
    faq5A:
      "For most jobs, yes — I visit first to understand the scope and give an accurate quote before starting.",

    // ---------- CONTACT ----------
    contactLabel: "Get In Touch",
    contactTitle: "Tell me about your work",
    contactDesc:
      "Fill in the form or reach us directly — I'll get back to you soon.",
    contactAddressLabel: "Address",
    contactAddressText: "Chakiya Mason, Aurnihar<br />Ghazipur, Uttar Pradesh 233221",
    contactPhoneLabel: "Phone",
    contactEmailLabel: "Email",
    contactHoursLabel: "Working Hours",
    contactHoursText: "Mon–Sat: 8:00 AM – 8:00 PM<br />24/7 for emergency call-outs",
    contactWhatsappTitle: "Chat on WhatsApp",
    contactWhatsappDesc: "Scan to message us directly, or tap below on mobile.",
    contactWhatsappBtn: "Open WhatsApp",

    // ---------- CONTACT FORM ----------
    formNameLabel: "Name",
    formNamePlaceholder: "Your full name",
    formPhoneLabel: "Phone",
    formPhonePlaceholder: "+91 00000 00000",
    formEmailLabel: "Email",
    formEmailPlaceholder: "you@email.com",
    formServiceLabel: "Service Required",
    serviceOption1: "House Wiring",
    serviceOption2: "Electrical Repair & Maintenance",
    serviceOption3: "Lighting Installation",
    serviceOption4: "Switch Board Installation",
    serviceOption5: "Shop & Office Electrical Work",
    serviceOption6: "Builder Project",
    serviceOption7: "New House Construction (Electrical + Plumbing)",
    serviceOption8: "Other",
    formLocationLabel: "Project Location",
    formLocationPlaceholder: "City / Area / Address",
    formTimeLabel: "Preferred Visit Date & Time",
    formMessageLabel: "Message",
    formMessagePlaceholder: "Describe your work requirement...",
    formSendBtn: "Send Message",
    formSuccessMsg:
      "Thanks — your message has been noted. We'll get back to you shortly.",

    // ---------- FOOTER ----------
    footerDesc:
      "Independent & Licensed Electrician specializing in residential wiring, builder projects, and new house electrical installations.",
    footerQuickLinks: "Quick Links",
    footerLinkAbout: "About Me",
    footerLinkServices: "Services",
    footerLinkWork: "My Work",
    footerLinkContact: "Contact",
    footerFollow: "Follow Us",
    footerCopyright:
      "© 2026 Durgesh Prajapati. Independent Electrician, Uttar Pradesh.",

    // ---------- STICKY MOBILE BAR ----------
    stickyCallBtn: "📞 Call Now",
    stickyWhatsappBtn: "💬 WhatsApp",
  },

  hi: {
    // ---------- NAVIGATION ----------
    navHome: "होम",
    navAbout: "मेरे बारे में",
    navServices: "सेवाएं",
    navWork: "मेरा काम",
    navReviews: "समीक्षाएं",
    navContact: "संपर्क करें",
    navCallNow: "📞 अभी कॉल करें",
    navWhatsapp: "💬 व्हाट्सएप",

    // ---------- HERO ----------
    heroBadge: "⚡ स्वतंत्र इलेक्ट्रीशियन",
    heroTitle: "नमस्ते, मैं दुर्गेश हूं",
    heroSubtitle:
      "घरों, दुकानों और नई इमारत परियोजनाओं के लिए पेशेवर इलेक्ट्रिकल सेवाएं",
    heroDesc:
      "घर मालिकों और बिल्डरों के लिए सुरक्षित और भरोसेमंद इलेक्ट्रिकल इंस्टॉलेशन।",
    heroStat1: "3+ वर्षों का अनुभव",
    heroStat2: "50+ पूर्ण परियोजनाएं",
    heroStat3: "व्यक्तिगत सेवा",
    heroStat4: "आस-पास के क्षेत्रों में उपलब्ध",
    heroCallBtn: "📞 अभी कॉल करें",
    heroWhatsappBtn: "💬 व्हाट्सएप",
    heroTag1: "⚡ हाउस वायरिंग",
    heroTag2: "🏠 नई घर वायरिंग",
    heroTag3: "💡 इलेक्ट्रिकल इंस्टॉलेशन",
    heroTag4: "🔧 रखरखाव",

    // ---------- ABOUT ----------
    aboutLabel: "मेरे बारे में",
    aboutTitle: "नक़्शे से पहली रोशनी तक: सटीक इलेक्ट्रिकल इंस्टॉलेशन",
    aboutDesc:
      "मैं उत्तर प्रदेश में 3+ वर्षों के अनुभव वाला एक स्वतंत्र इलेक्ट्रीशियन हूं। मैं हर परियोजना खुद करता हूं — कोई आउटसोर्सिंग नहीं, कोई सबकॉन्ट्रैक्टिंग नहीं। एक सीलिंग फैन से लेकर नए घर की पूरी वायरिंग तक, हर काम में ईमानदार मूल्य निर्धारण, सावधानीपूर्ण निगरानी और सुरक्षित तरीके।",
    aboutPoint1: "ईमानदार मूल्य निर्धारण",
    aboutPoint2: "व्यक्तिगत निगरानी",
    aboutPoint3: "गुणवत्तापूर्ण कार्य",
    aboutPoint4: "सुरक्षा के प्रति प्रतिबद्ध",

    // ---------- ELECTRICAL SERVICES ----------
    servicesLabel: "सेवाएं",
    servicesTitle: "इलेक्ट्रिकल सेवाएं",
    service1: "संपूर्ण हाउस वायरिंग",
    service2: "संपूर्ण इलेक्ट्रिकल इंस्टॉलेशन",
    service3: "स्विच बोर्ड इंस्टॉलेशन",
    service4: "लाइटिंग इंस्टॉलेशन",
    service5: "सीलिंग फैन इंस्टॉलेशन",
    service6: "इलेक्ट्रिकल रखरखाव",
    service7: "दुकान इलेक्ट्रिकल कार्य",
    service8: "छोटे ऑफिस का इलेक्ट्रिकल कार्य",

    // ---------- NEW CONSTRUCTION ----------
    constructionLabel: "नया निर्माण",
    constructionTitle: "नई निर्माण सेवाएं",
    constructionDesc: "नए घर के निर्माण के दौरान इलेक्ट्रिकल और प्लंबिंग कार्य।",
    construction1: "नए घर की इलेक्ट्रिकल इंस्टॉलेशन",
    construction2: "इलेक्ट्रिकल लेआउट योजना",
    construction3: "पानी की पाइपलाइन इंस्टॉलेशन",
    construction4: "बाथरूम और किचन पाइपलाइन इंस्टॉलेशन",
    construction5: "बिल्डर और आर्किटेक्ट समन्वय",
    constructionNote:
      "पाइपलाइन कार्य केवल नए घर या भवन निर्माण के हिस्से के रूप में किया जाता है — एक स्वतंत्र प्लंबिंग मरम्मत सेवा के रूप में नहीं।",

    // ---------- MY WORK ----------
    workLabel: "पोर्टफोलियो",
    workTitle: "मेरा काम",
    filterAll: "सभी",
    filterHouses: "🏠 घर",
    filterBuilders: "🏗 बिल्डर परियोजनाएं",
    filterShops: "🏪 दुकानें",
    filterCommercial: "🏢 छोटा वाणिज्यिक",

    // ---------- WHY PEOPLE CHOOSE ME ----------
    whyLabel: "लोग मुझे क्यों चुनते हैं",
    whyTitle: "आप क्या उम्मीद कर सकते हैं",
    why1: "व्यक्तिगत ध्यान",
    why2: "ईमानदार मूल्य निर्धारण",
    why3: "गुणवत्तापूर्ण कार्य",
    why4: "स्वच्छ इंस्टॉलेशन",
    why5: "समय पर पूर्णता",
    why6: "भरोसेमंद संचार",
    why7: "सुरक्षित इलेक्ट्रिकल प्रथाएं",
    why8: "नए घर निर्माण का अनुभव",

    // ---------- REVIEWS ----------
    reviewsLabel: "समीक्षाएं",
    reviewsTitle: "ग्राहक समीक्षाएं",
    review1Location: "गोमती नगर, लखनऊ",
    review1Text:
      "हमारे पूरे घर की वायरिंग साफ-सुथरे तरीके से की और सब कुछ स्पष्ट रूप से समझाया। बहुत भरोसेमंद।",
    review2Location: "बिल्डर, इंदिरा नगर",
    review2Text:
      "हमने दुर्गेश को तीन बिल्डर परियोजनाओं में इस्तेमाल किया है। हमेशा समय पर और उचित मूल्य के साथ।",
    review3Location: "दुकान मालिक, अमीनाबाद",
    review3Text:
      "मेरी नई दुकान का सारा इलेक्ट्रिकल काम संभाला। साफ वायरिंग, तब से कोई समस्या नहीं।",

    // ---------- FAQ ----------
    faqLabel: "सामान्य प्रश्न",
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
    faq1Q: "क्या आप नए घरों पर काम करते हैं?",
    faq1A:
      "हां — मैं नए घर के निर्माण के लिए इलेक्ट्रिकल इंस्टॉलेशन और लेआउट योजना संभालता हूं, साथ ही उस परियोजना के हिस्से के रूप में पाइपलाइन का काम भी करता हूं।",
    faq2Q: "क्या आप बिल्डरों के साथ काम करते हैं?",
    faq2A:
      "हां, मैं निर्माणाधीन घरों के इलेक्ट्रिकल कार्य के लिए नियमित रूप से बिल्डरों और आर्किटेक्ट्स के साथ समन्वय करता हूं।",
    faq3Q: "क्या मैं आपसे व्हाट्सएप पर संपर्क कर सकता हूं?",
    faq3A:
      "हां — व्हाट्सएप आमतौर पर मुझ तक पहुंचने का सबसे तेज़ तरीका है। बस इस साइट पर कहीं भी व्हाट्सएप बटन पर टैप करें।",
    faq4Q: "आप किन क्षेत्रों में सेवा देते हैं?",
    faq4A:
      "मैं मुख्य रूप से वाराणसी और उत्तर प्रदेश के आसपास के क्षेत्रों में सेवा देता हूं। मुझे अपना स्थान संदेश भेजें और मैं उपलब्धता की पुष्टि करूंगा।",
    faq5Q: "क्या आप काम शुरू करने से पहले साइट पर आते हैं?",
    faq5A:
      "अधिकांश कार्यों के लिए, हां — मैं दायरा समझने और काम शुरू करने से पहले सटीक कोटेशन देने के लिए पहले आता हूं।",

    // ---------- CONTACT ----------
    contactLabel: "संपर्क करें",
    contactTitle: "मुझे अपने काम के बारे में बताएं",
    contactDesc:
      "फॉर्म भरें या सीधे हमसे संपर्क करें — मैं जल्द ही आपसे संपर्क करूंगा।",
    contactAddressLabel: "पता",
    contactAddressText: "चकिया मेसन, औरनिहार<br />गाजीपुर, उत्तर प्रदेश 233221",
    contactPhoneLabel: "फ़ोन",
    contactEmailLabel: "ईमेल",
    contactHoursLabel: "कार्य समय",
    contactHoursText: "सोम–शनि: सुबह 8:00 – रात 8:00<br />आपातकालीन कॉल के लिए 24/7",
    contactWhatsappTitle: "व्हाट्सएप पर चैट करें",
    contactWhatsappDesc: "सीधे संदेश भेजने के लिए स्कैन करें, या मोबाइल पर नीचे टैप करें।",
    contactWhatsappBtn: "व्हाट्सएप खोलें",

    // ---------- CONTACT FORM ----------
    formNameLabel: "नाम",
    formNamePlaceholder: "आपका पूरा नाम",
    formPhoneLabel: "फ़ोन",
    formPhonePlaceholder: "+91 00000 00000",
    formEmailLabel: "ईमेल",
    formEmailPlaceholder: "आपका ईमेल पता",
    formServiceLabel: "आवश्यक सेवा",
    serviceOption1: "हाउस वायरिंग",
    serviceOption2: "इलेक्ट्रिकल मरम्मत एवं रखरखाव",
    serviceOption3: "लाइटिंग इंस्टॉलेशन",
    serviceOption4: "स्विच बोर्ड इंस्टॉलेशन",
    serviceOption5: "दुकान और ऑफिस इलेक्ट्रिकल कार्य",
    serviceOption6: "बिल्डर परियोजना",
    serviceOption7: "नए घर का निर्माण (इलेक्ट्रिकल + प्लंबिंग)",
    serviceOption8: "अन्य",
    formLocationLabel: "परियोजना स्थान",
    formLocationPlaceholder: "शहर / क्षेत्र / पता",
    formTimeLabel: "पसंदीदा विज़िट तिथि और समय",
    formMessageLabel: "संदेश",
    formMessagePlaceholder: "अपनी कार्य आवश्यकता का विवरण दें...",
    formSendBtn: "संदेश भेजें",
    formSuccessMsg:
      "धन्यवाद — आपका संदेश दर्ज कर लिया गया है। हम जल्द ही आपसे संपर्क करेंगे।",

    // ---------- FOOTER ----------
    footerDesc:
      "स्वतंत्र और लाइसेंस प्राप्त इलेक्ट्रीशियन, आवासीय वायरिंग, बिल्डर परियोजनाओं और नए घर के इलेक्ट्रिकल इंस्टॉलेशन में विशेषज्ञ।",
    footerQuickLinks: "त्वरित लिंक",
    footerLinkAbout: "मेरे बारे में",
    footerLinkServices: "सेवाएं",
    footerLinkWork: "मेरा काम",
    footerLinkContact: "संपर्क करें",
    footerFollow: "हमें फॉलो करें",
    footerCopyright: "© 2026 दुर्गेश प्रजापति। स्वतंत्र इलेक्ट्रीशियन, उत्तर प्रदेश।",

    // ---------- STICKY MOBILE BAR ----------
    stickyCallBtn: "📞 अभी कॉल करें",
    stickyWhatsappBtn: "💬 व्हाट्सएप",
  },
};

// Expose to other modules (language.js) without using ES modules,
// so the site keeps working with plain <script> tags and no build step.
window.translations = translations;
