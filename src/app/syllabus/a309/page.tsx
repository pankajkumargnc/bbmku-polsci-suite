'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { ArrowLeft, BookOpen, ChevronDown, CheckCircle2, Quote, AlertTriangle, Lightbulb, GraduationCap, ClipboardList } from 'lucide-react';
import Link from 'next/link';

type Lang = 'en' | 'hi';

interface TopicNote {
  id: string;
  num: number;
  title: [string, string];
  introduction: [string, string];
  concepts: { heading: [string, string]; body: [string, string] }[];
  quotes: [string, string][];
  evaluation: [string, string];
  conclusion: [string, string];
  shortQ: [string, string][];
  longQ: [string, string][];
  mcqs: { q: [string, string]; opts: [string, string][]; correct: number }[];
  ugcNotes: [string, string];
  ugcQ: [string, string][];
}

/* ─── ALL 8 TOPIC NOTES ─── */
const NOTES: TopicNote[] = [
  {
    "id": "t1",
    "num": 1,
    "title": [
      "Concept of Human Rights: Historical Perspective and Development",
      "मानवाधिकारों की अवधारणा: ऐतिहासिक परिप्रेक्ष्य और विकास"
    ],
    "introduction": [
      "Human Rights are the fundamental rights and freedoms that belong to every person in the world, from birth until death. They apply regardless of where you are from, what you believe, or how you choose to live your life. They can never be taken away, although they can sometimes be restricted (e.g., if a person breaks the law). The historical development of human rights is a long journey from ancient philosophical concepts of natural law to modern legally binding international treaties.",
      "मानवाधिकार (Human Rights) वे मौलिक अधिकार और स्वतंत्रताएं हैं जो दुनिया के प्रत्येक व्यक्ति को जन्म से लेकर मृत्यु तक प्राप्त हैं। वे इस बात की परवाह किए बिना लागू होते हैं कि आप कहां से हैं, आप क्या मानते हैं, या आप अपना जीवन कैसे जीना चुनते हैं। इन्हें कभी छीना नहीं जा सकता, हालांकि कभी-कभी इन्हें प्रतिबंधित किया जा सकता है (उदा. यदि कोई व्यक्ति कानून तोड़ता है)। मानवाधिकारों का ऐतिहासिक विकास प्राकृतिक कानून की प्राचीन दार्शनिक अवधारणाओं से लेकर आधुनिक कानूनी रूप से बाध्यकारी अंतर्राष्ट्रीय संधियों तक की एक लंबी यात्रा है।"
    ],
    "concepts": [
      {
        "heading": [
          "Natural Law Origins",
          "प्राकृतिक कानून की उत्पत्ति"
        ],
        "body": [
          "The concept traces back to ancient Greece and Rome, where philosophers like Stoics believed in a universal 'natural law' applicable to all humans.",
          "यह अवधारणा प्राचीन ग्रीस और रोम से जुड़ी है, जहां स्टोइक्स जैसे दार्शनिक सभी मनुष्यों पर लागू होने वाले एक सार्वभौमिक 'प्राकृतिक कानून' (Natural Law) में विश्वास करते थे।"
        ]
      },
      {
        "heading": [
          "Magna Carta (1215)",
          "मैग्ना कार्टा (1215)"
        ],
        "body": [
          "A crucial historical milestone in England that established the principle that everyone, including the king, is subject to the law, guaranteeing rights like a fair trial.",
          "इंग्लैंड में एक महत्वपूर्ण ऐतिहासिक मील का पत्थर जिसने यह सिद्धांत स्थापित किया कि राजा सहित सभी कानून के अधीन हैं, और निष्पक्ष सुनवाई जैसे अधिकारों की गारंटी दी।"
        ]
      },
      {
        "heading": [
          "Enlightenment Thinkers",
          "प्रबोधनकालीन विचारक (Enlightenment Thinkers)"
        ],
        "body": [
          "Philosophers like John Locke argued for 'natural rights' to life, liberty, and property. This deeply influenced the American Declaration of Independence (1976) and the French Declaration of the Rights of Man and of the Citizen (1789).",
          "जॉन लॉक जैसे दार्शनिकों ने जीवन, स्वतंत्रता और संपत्ति के 'प्राकृतिक अधिकारों' के लिए तर्क दिया। इसने अमेरिकी स्वतंत्रता की घोषणा (1776) और फ्रांसीसी अधिकारों की घोषणा (1789) को गहराई से प्रभावित किया।"
        ]
      },
      {
        "heading": [
          "Post-WWII Paradigm Shift",
          "द्वितीय विश्व युद्ध के बाद का प्रतिमान बदलाव"
        ],
        "body": [
          "The atrocities of the Holocaust during World War II catalyzed the internationalization of human rights, leading to the formation of the United Nations (1945) and the Universal Declaration of Human Rights (1948).",
          "द्वितीय विश्व युद्ध के दौरान होलोकॉस्ट के अत्याचारों ने मानवाधिकारों के अंतर्राष्ट्रीयकरण को उत्प्रेरित किया, जिससे संयुक्त राष्ट्र (1945) का गठन हुआ और मानवाधिकारों की सार्वभौम घोषणा (1948) हुई।"
        ]
      },
      {
        "heading": [
          "Three Generations of Rights (Karel Vasak)",
          "अधिकारों की तीन पीढ़ियां (करेल वासक)"
        ],
        "body": [
          "- First Generation: Civil and Political rights (Liberty).\n                - Second Generation: Economic, Social, and Cultural rights (Equality).\n                - Third Generation: Solidarity or Collective rights (Fraternity, e.g., right to a healthy environment).",
          "- पहली पीढ़ी: नागरिक और राजनीतिक अधिकार (स्वतंत्रता)।\n                - दूसरी पीढ़ी: आर्थिक, सामाजिक और सांस्कृतिक अधिकार (समानता)।\n                - तीसरी पीढ़ी: एकजुटता या सामूहिक अधिकार (बंधुत्व, उदा. स्वस्थ पर्यावरण का अधिकार)।"
        ]
      }
    ],
    "quotes": [
      [
        "Mother Teresa: \"Human rights are not a privilege conferred by government. They are every human being's entitlement by virtue of his humanity.\"",
        "मदर टेरेसा: \"मानवाधिकार सरकार द्वारा दिया गया कोई विशेषाधिकार नहीं है। यह प्रत्येक इंसान की मानवता के आधार पर उसका अधिकार है।\""
      ]
    ],
    "evaluation": [
      "While the historical development of human rights has established a global moral and legal standard, it faces significant criticism. Cultural Relativism argues that human rights, as currently formulated, are heavily Western-centric and may not seamlessly apply to non-Western cultures with different values (e.g., community over individual). Furthermore, the gap between the theoretical development of rights and their actual enforcement remains vast, with powerful states often violating rights with impunity while dictating terms to weaker nations.",
      "हालांकि मानवाधिकारों के ऐतिहासिक विकास ने एक वैश्विक नैतिक और कानूनी मानक स्थापित किया है, लेकिन इसे महत्वपूर्ण आलोचना का सामना करना पड़ता है। सांस्कृतिक सापेक्षवाद (Cultural Relativism) का तर्क है कि मानवाधिकार, जैसा कि वर्तमान में तैयार किए गए हैं, अत्यधिक पश्चिमी-केंद्रित हैं और गैर-पश्चिमी संस्कृतियों पर सुचारू रूप से लागू नहीं हो सकते हैं जिनके अलग मूल्य हैं (उदा. व्यक्ति से ऊपर समुदाय)। इसके अलावा, अधिकारों के सैद्धांतिक विकास और उनके वास्तविक प्रवर्तन के बीच की खाई अभी भी बहुत बड़ी है, जहां शक्तिशाली राज्य अक्सर कमजोर राष्ट्रों को शर्तें निर्देशित करते हुए दंडमुक्ति के साथ अधिकारों का उल्लंघन करते हैं।"
    ],
    "conclusion": [
      "In conclusion, the concept of human rights has evolved from abstract philosophical ideals of natural law into a concrete body of international law. This development reflects humanity's continuous struggle against tyranny and injustice. Despite debates over cultural relativism and enforcement challenges, human rights remain the most universally accepted framework for protecting human dignity worldwide.",
      "अंत में, मानवाधिकारों की अवधारणा प्राकृतिक कानून के अमूर्त दार्शनिक आदर्शों से अंतर्राष्ट्रीय कानून के एक ठोस निकाय में विकसित हुई है। यह विकास अत्याचार और अन्याय के खिलाफ मानवता के निरंतर संघर्ष को दर्शाता है। सांस्कृतिक सापेक्षवाद और प्रवर्तन की चुनौतियों पर बहस के बावजूद, मानवाधिकार दुनिया भर में मानवीय गरिमा की रक्षा के लिए सबसे सार्वभौमिक रूप से स्वीकृत ढांचा बने हुए हैं।"
    ],
    "shortQ": [
      [
        "Define Human Rights.",
        "मानवाधिकारों को परिभाषित करें।"
      ],
      [
        "What is the significance of the Magna Carta in human rights history?",
        "मानवाधिकारों के इतिहास में मैग्ना कार्टा का क्या महत्व है?"
      ],
      [
        "Briefly explain John Locke's concept of Natural Rights.",
        "जॉन लॉक के प्राकृतिक अधिकारों की अवधारणा को संक्षेप में समझाइए।"
      ],
      [
        "What are the 'Three Generations of Human Rights' proposed by Karel Vasak?",
        "करेल वासक द्वारा प्रस्तावित 'मानवाधिकारों की तीन पीढ़ियां' क्या हैं?"
      ],
      [
        "How did World War II impact the development of human rights?",
        "द्वितीय विश्व युद्ध ने मानवाधिकारों के विकास को कैसे प्रभावित किया?"
      ]
    ],
    "longQ": [
      [
        "Trace the historical development of human rights from ancient times to the modern era.",
        "प्राचीन काल से आधुनिक युग तक मानवाधिकारों के ऐतिहासिक विकास का पता लगाएं।"
      ],
      [
        "\"Human rights are universal but their interpretation is often culturally relative.\" Critically evaluate this statement.",
        "\"मानवाधिकार सार्वभौमिक हैं लेकिन उनकी व्याख्या अक्सर सांस्कृतिक रूप से सापेक्ष होती है।\" इस कथन का आलोचनात्मक मूल्यांकन करें।"
      ],
      [
        "Discuss the contribution of Enlightenment thinkers to the evolution of human rights.",
        "मानवाधिकारों के विकास में प्रबोधनकालीन (Enlightenment) विचारकों के योगदान की चर्चा करें।"
      ],
      [
        "Explain Karel Vasak's theory of the three generations of human rights with examples.",
        "उदाहरणों के साथ करेल वासक के मानवाधिकारों की तीन पीढ़ियों के सिद्धांत की व्याख्या करें।"
      ],
      [
        "Analyze the transition of human rights from natural law to international legal frameworks.",
        "प्राकृतिक कानून से अंतर्राष्ट्रीय कानूनी ढांचे में मानवाधिकारों के संक्रमण का विश्लेषण करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "Who categorized human rights into three generations?",
          "मानवाधिकारों को तीन पीढ़ियों में किसने वर्गीकृत किया?"
        ],
        "opts": [
          [
            "John Locke",
            "जॉन लॉक"
          ],
          [
            "Karel Vasak",
            "करेल वासक"
          ],
          [
            "Eleanor Roosevelt",
            "एलेनोर रूजवेल्ट"
          ],
          [
            "Thomas Hobbes",
            "थॉमस हॉब्स"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which historical document was signed in 1215?",
          "1215 में कौन सा ऐतिहासिक दस्तावेज हस्ताक्षरित किया गया था?"
        ],
        "opts": [
          [
            "US Declaration of Independence",
            "अमेरिकी स्वतंत्रता की घोषणा"
          ],
          [
            "French Declaration of Rights",
            "फ्रांसीसी अधिकारों की घोषणा"
          ],
          [
            "Magna Carta",
            "मैग्ना कार्टा"
          ],
          [
            "English Bill of Rights",
            "अंग्रेजी बिल ऑफ राइट्स"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "'First Generation' human rights primarily deal with:",
          "'पहली पीढ़ी' के मानवाधिकार मुख्य रूप से किससे संबंधित हैं?"
        ],
        "opts": [
          [
            "Economic and social rights",
            "आर्थिक और सामाजिक अधिकार"
          ],
          [
            "Civil and political rights",
            "नागरिक और राजनीतिक अधिकार"
          ],
          [
            "Environmental rights",
            "पर्यावरणीय अधिकार"
          ],
          [
            "Collective rights",
            "सामूहिक अधिकार"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "John Locke advocated for the natural rights to:",
          "जॉन लॉक ने किन प्राकृतिक अधिकारों की वकालत की?"
        ],
        "opts": [
          [
            "Equality, Fraternity, Liberty",
            "समानता, बंधुत्व, स्वतंत्रता"
          ],
          [
            "Life, Liberty, Property",
            "जीवन, स्वतंत्रता, संपत्ति"
          ],
          [
            "Food, Shelter, Clothing",
            "भोजन, आश्रय, कपड़े"
          ],
          [
            "Religion, Speech, Assembly",
            "धर्म, भाषण, सभा"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "The concept that human rights norms should be adjusted to accommodate local cultures is known as:",
          "यह अवधारणा कि मानवाधिकार मानदंडों को स्थानीय संस्कृतियों को समायोजित करने के लिए समायोजित किया जाना चाहिए, कहलाती है:"
        ],
        "opts": [
          [
            "Universalism",
            "सार्वभौमिकता (Universalism)"
          ],
          [
            "Cultural Relativism",
            "सांस्कृतिक सापेक्षवाद (Cultural Relativism)"
          ],
          [
            "Ethnocentrism",
            "नृजातीयता (Ethnocentrism)"
          ],
          [
            "Constructivism",
            "रचनावाद (Constructivism)"
          ]
        ],
        "correct": 1
      }
    ],
    "ugcNotes": [
      "Focus on the key theories, thinkers, and books mentioned in this topic. Understand the historical evolution and major paradigms.",
      "इस विषय में उल्लिखित प्रमुख सिद्धांतों, विचारकों और पुस्तकों पर ध्यान दें। ऐतिहासिक विकास और प्रमुख प्रतिमानों को समझें।"
    ],
    "ugcQ": [
      [
        "Q: What is the main theme of this topic? A: See Core Concepts.",
        "प्र: इस विषय का मुख्य विषय क्या है? उ: मुख्य सिद्धांत देखें।"
      ],
      [
        "Q: Who are the key thinkers? A: Refer to the Quotes section.",
        "प्र: प्रमुख विचारक कौन हैं? उ: उद्धरण अनुभाग देखें।"
      ]
    ]
  },
  {
    "id": "t2",
    "num": 2,
    "title": [
      "Types and Classification of Human Rights",
      "मानवाधिकारों के प्रकार और वर्गीकरण"
    ],
    "introduction": [
      "To effectively protect human dignity, human rights are broadly classified into various types based on their nature, historical development, and the kind of protection they offer. The most common and legally significant classification divides them into Civil and Political Rights (First Generation) and Economic, Social, and Cultural Rights (Second Generation), followed by emerging Solidarity Rights (Third Generation).",
      "मानवीय गरिमा की प्रभावी ढंग से रक्षा करने के लिए, मानवाधिकारों को उनकी प्रकृति, ऐतिहासिक विकास और उनके द्वारा प्रदान की जाने वाली सुरक्षा के प्रकार के आधार पर मोटे तौर पर विभिन्न प्रकारों में वर्गीकृत किया जाता है। सबसे आम और कानूनी रूप से महत्वपूर्ण वर्गीकरण उन्हें नागरिक और राजनीतिक अधिकारों (पहली पीढ़ी) और आर्थिक, सामाजिक और सांस्कृतिक अधिकारों (दूसरी पीढ़ी) में विभाजित करता है, इसके बाद उभरते एकजुटता अधिकारों (तीसरी पीढ़ी) का स्थान आता है।"
    ],
    "concepts": [
      {
        "heading": [
          "Civil and Political Rights (First Generation)",
          "नागरिक और राजनीतिक अधिकार (पहली पीढ़ी)"
        ],
        "body": [
          "These are 'negative rights' meaning they require the state to refrain from interfering with individual liberty. \n                Examples: Right to life, freedom of speech, freedom of religion, right to a fair trial, right to vote. They focus on Liberty.",
          "ये 'नकारात्मक अधिकार' (Negative rights) हैं जिसका अर्थ है कि राज्य को व्यक्तिगत स्वतंत्रता में हस्तक्षेप करने से बचना चाहिए।\n                उदाहरण: जीवन का अधिकार, अभिव्यक्ति की स्वतंत्रता, धर्म की स्वतंत्रता, निष्पक्ष सुनवाई का अधिकार, मतदान का अधिकार। ये स्वतंत्रता (Liberty) पर केंद्रित हैं।"
        ]
      },
      {
        "heading": [
          "Economic, Social, and Cultural Rights (Second Generation)",
          "आर्थिक, सामाजिक और सांस्कृतिक अधिकार (दूसरी पीढ़ी)"
        ],
        "body": [
          "These are 'positive rights' requiring active state intervention and resources to ensure basic standards of living.\n                Examples: Right to work, right to education, right to health, right to adequate housing. They focus on Equality.",
          "ये 'सकारात्मक अधिकार' (Positive rights) हैं जिनके लिए जीवन के बुनियादी मानकों को सुनिश्चित करने के लिए सक्रिय राज्य हस्तक्षेप और संसाधनों की आवश्यकता होती है।\n                उदाहरण: काम का अधिकार, शिक्षा का अधिकार, स्वास्थ्य का अधिकार, पर्याप्त आवास का अधिकार। ये समानता (Equality) पर केंद्रित हैं।"
        ]
      },
      {
        "heading": [
          "Solidarity/Collective Rights (Third Generation)",
          "एकजुटता/सामूहिक अधिकार (तीसरी पीढ़ी)"
        ],
        "body": [
          "These rights belong to groups or peoples rather than individuals, requiring international cooperation.\n                Examples: Right to a healthy environment, right to peace, right to self-determination, right to development. They focus on Fraternity.",
          "ये अधिकार व्यक्तियों के बजाय समूहों या लोगों से संबंधित हैं, जिन्हें अंतर्राष्ट्रीय सहयोग की आवश्यकता होती है।\n                उदाहरण: स्वस्थ पर्यावरण का अधिकार, शांति का अधिकार, आत्मनिर्णय का अधिकार, विकास का अधिकार। ये बंधुत्व (Fraternity) पर केंद्रित हैं।"
        ]
      },
      {
        "heading": [
          "Absolute vs. Qualified Rights",
          "पूर्ण बनाम योग्य अधिकार (Absolute vs. Qualified Rights)"
        ],
        "body": [
          "Absolute rights (e.g., freedom from torture) can never be restricted. Qualified rights (e.g., freedom of expression) can be restricted under certain conditions (e.g., national security or public order).",
          "पूर्ण अधिकार (जैसे, यातना से स्वतंत्रता) को कभी प्रतिबंधित नहीं किया जा सकता है। योग्य अधिकार (जैसे, अभिव्यक्ति की स्वतंत्रता) को कुछ शर्तों (जैसे, राष्ट्रीय सुरक्षा या सार्वजनिक व्यवस्था) के तहत प्रतिबंधित किया जा सकता है।"
        ]
      }
    ],
    "quotes": [
      [
        "Vienna Declaration, 1993: \"All human rights are universal, indivisible and interdependent and interrelated. The international community must treat human rights globally in a fair and equal manner.\"",
        "वियना घोषणा, 1993: \"सभी मानवाधिकार सार्वभौमिक, अविभाज्य और अन्योन्याश्रित और परस्पर संबंधित हैं। अंतर्राष्ट्रीय समुदाय को विश्व स्तर पर मानवाधिकारों के साथ निष्पक्ष और समान व्यवहार करना चाहिए।\""
      ]
    ],
    "evaluation": [
      "The classification of human rights often leads to a false hierarchy. Developed (Western) nations historically prioritized Civil and Political rights, viewing Economic and Social rights as mere aspirations rather than justiciable laws. Conversely, developing nations often argued that without economic rights (like food and shelter), civil rights (like voting) are meaningless. The modern consensus, as established in the 1993 Vienna Declaration, insists on the indivisibility of rights—meaning one set of rights cannot be fully enjoyed without the others.",
      "मानवाधिकारों का वर्गीकरण अक्सर एक झूठे पदानुक्रम को जन्म देता है। विकसित (पश्चिमी) राष्ट्रों ने ऐतिहासिक रूप से नागरिक और राजनीतिक अधिकारों को प्राथमिकता दी, आर्थिक और सामाजिक अधिकारों को न्यायसंगत कानूनों के बजाय मात्र आकांक्षाओं के रूप में देखा। इसके विपरीत, विकासशील राष्ट्रों ने अक्सर यह तर्क दिया कि आर्थिक अधिकारों (जैसे भोजन और आश्रय) के बिना, नागरिक अधिकार (जैसे मतदान) अर्थहीन हैं। आधुनिक आम सहमति, जैसा कि 1993 के वियना घोषणापत्र में स्थापित किया गया है, अधिकारों की अविभाज्यता (Indivisibility) पर जोर देती है—जिसका अर्थ है कि अधिकारों के एक समूह का दूसरों के बिना पूरी तरह से आनंद नहीं लिया जा सकता है।"
    ],
    "conclusion": [
      "While the classification of human rights into different 'generations' or types is useful for analytical and legal purposes, it is crucial to recognize their interrelated nature. A holistic approach is required where civil liberties are protected alongside socio-economic security, ensuring the comprehensive development of human personality.",
      "हालांकि मानवाधिकारों को विभिन्न 'पीढ़ियों' या प्रकारों में वर्गीकृत करना विश्लेषणात्मक और कानूनी उद्देश्यों के लिए उपयोगी है, लेकिन उनकी परस्पर संबंधित प्रकृति को पहचानना महत्वपूर्ण है। एक समग्र दृष्टिकोण की आवश्यकता है जहां सामाजिक-आर्थिक सुरक्षा के साथ-साथ नागरिक स्वतंत्रताओं की रक्षा की जाए, जिससे मानव व्यक्तित्व का व्यापक विकास सुनिश्चित हो सके।"
    ],
    "shortQ": [
      [
        "Distinguish between Civil Rights and Political Rights.",
        "नागरिक अधिकारों और राजनीतिक अधिकारों के बीच अंतर करें।"
      ],
      [
        "Give two examples of Second Generation human rights.",
        "दूसरी पीढ़ी के मानवाधिकारों के दो उदाहरण दें।"
      ],
      [
        "What are 'negative' and 'positive' rights?",
        "'नकारात्मक' और 'सकारात्मक' अधिकार क्या हैं?"
      ],
      [
        "Define 'Solidarity Rights' with an example.",
        "उदाहरण के साथ 'एकजुटता अधिकारों' (Solidarity Rights) को परिभाषित करें।"
      ],
      [
        "Explain the concept of 'indivisibility' of human rights.",
        "मानवाधिकारों की 'अविभाज्यता' की अवधारणा की व्याख्या करें।"
      ]
    ],
    "longQ": [
      [
        "Discuss the classification of human rights. Why is this classification sometimes criticized?",
        "मानवाधिकारों के वर्गीकरण पर चर्चा करें। इस वर्गीकरण की कभी-कभी आलोचना क्यों की जाती है?"
      ],
      [
        "\"Economic, Social and Cultural rights are just as important as Civil and Political rights.\" Analyze this statement in the light of the indivisibility of human rights.",
        "\"आर्थिक, सामाजिक और सांस्कृतिक अधिकार नागरिक और राजनीतिक अधिकारों के समान ही महत्वपूर्ण हैं।\" मानवाधिकारों की अविभाज्यता के प्रकाश में इस कथन का विश्लेषण करें।"
      ],
      [
        "Examine the emergence and significance of Third Generation human rights.",
        "तीसरी पीढ़ी के मानवाधिकारों के उद्भव और महत्व का परीक्षण करें।"
      ],
      [
        "Differentiate between Absolute and Qualified human rights with relevant examples.",
        "प्रासंगिक उदाहरणों के साथ पूर्ण (Absolute) और योग्य (Qualified) मानवाधिकारों के बीच अंतर करें।"
      ],
      [
        "Critically evaluate the debate between Western and Developing nations regarding the priority of different types of human rights.",
        "विभिन्न प्रकार के मानवाधिकारों की प्राथमिकता के संबंध में पश्चिमी और विकासशील देशों के बीच बहस का आलोचनात्मक मूल्यांकन करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "The right to education falls under which category?",
          "शिक्षा का अधिकार किस श्रेणी में आता है?"
        ],
        "opts": [
          [
            "Civil Rights",
            "नागरिक अधिकार"
          ],
          [
            "Political Rights",
            "राजनीतिक अधिकार"
          ],
          [
            "Social and Cultural Rights",
            "सामाजिक और सांस्कृतिक अधिकार"
          ],
          [
            "Solidarity Rights",
            "एकजुटता अधिकार"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "Which declaration emphasized that all human rights are \"universal, indivisible and interdependent\"?",
          "किस घोषणा ने इस बात पर जोर दिया कि सभी मानवाधिकार \"सार्वभौमिक, अविभाज्य और अन्योन्याश्रित\" हैं?"
        ],
        "opts": [
          [
            "Universal Declaration of Human Rights, 1948",
            "मानवाधिकारों की सार्वभौम घोषणा, 1948"
          ],
          [
            "Vienna Declaration, 1993",
            "वियना घोषणा, 1993"
          ],
          [
            "Declaration on the Right to Development, 1986",
            "विकास के अधिकार पर घोषणा, 1986"
          ],
          [
            "Millennium Declaration, 2000",
            "सहस्राब्दी घोषणा, 2000"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "'Negative rights' primarily require the state to:",
          "'नकारात्मक अधिकारों' के लिए मुख्य रूप से राज्य को क्या करने की आवश्यकता होती है?"
        ],
        "opts": [
          [
            "Provide economic welfare",
            "आर्थिक कल्याण प्रदान करना"
          ],
          [
            "Not interfere with individual liberty",
            "व्यक्तिगत स्वतंत्रता में हस्तक्षेप न करना"
          ],
          [
            "Ensure full employment",
            "पूर्ण रोजगार सुनिश्चित करना"
          ],
          [
            "Grant collective autonomy",
            "सामूहिक स्वायत्तता प्रदान करना"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "The right to a clean and healthy environment is an example of a:",
          "स्वच्छ और स्वस्थ पर्यावरण का अधिकार किसका एक उदाहरण है?"
        ],
        "opts": [
          [
            "First generation right",
            "पहली पीढ़ी का अधिकार"
          ],
          [
            "Second generation right",
            "दूसरी पीढ़ी का अधिकार"
          ],
          [
            "Third generation right",
            "तीसरी पीढ़ी का अधिकार"
          ],
          [
            "Fundamental duty",
            "मौलिक कर्तव्य"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "Freedom from torture is considered an:",
          "यातना से मुक्ति को माना जाता है:"
        ],
        "opts": [
          [
            "Absolute right",
            "पूर्ण अधिकार (Absolute right)"
          ],
          [
            "Qualified right",
            "योग्य अधिकार (Qualified right)"
          ],
          [
            "Derogable right",
            "अल्पीकरणीय अधिकार (Derogable right)"
          ],
          [
            "Economic right",
            "आर्थिक अधिकार"
          ]
        ],
        "correct": 0
      }
    ],
    "ugcNotes": [
      "Focus on the key theories, thinkers, and books mentioned in this topic. Understand the historical evolution and major paradigms.",
      "इस विषय में उल्लिखित प्रमुख सिद्धांतों, विचारकों और पुस्तकों पर ध्यान दें। ऐतिहासिक विकास और प्रमुख प्रतिमानों को समझें।"
    ],
    "ugcQ": [
      [
        "Q: What is the main theme of this topic? A: See Core Concepts.",
        "प्र: इस विषय का मुख्य विषय क्या है? उ: मुख्य सिद्धांत देखें।"
      ],
      [
        "Q: Who are the key thinkers? A: Refer to the Quotes section.",
        "प्र: प्रमुख विचारक कौन हैं? उ: उद्धरण अनुभाग देखें।"
      ]
    ]
  },
  {
    "id": "t3",
    "num": 3,
    "title": [
      "Universal Declaration of Human Rights, 1948",
      "मानवाधिकारों की सार्वभौम घोषणा, 1948"
    ],
    "introduction": [
      "The Universal Declaration of Human Rights (UDHR) is a milestone document in the history of human rights. Drafted by representatives with different legal and cultural backgrounds from all regions of the world, the Declaration was proclaimed by the United Nations General Assembly in Paris on December 10, 1948 (Resolution 217 A). It sets out, for the first time, fundamental human rights to be universally protected.",
      "मानवाधिकारों की सार्वभौम घोषणा (Universal Declaration of Human Rights - UDHR) मानवाधिकारों के इतिहास में एक मील का पत्थर दस्तावेज है। दुनिया के सभी क्षेत्रों से विभिन्न कानूनी और सांस्कृतिक पृष्ठभूमि वाले प्रतिनिधियों द्वारा तैयार की गई, यह घोषणा 10 दिसंबर 1948 को पेरिस में संयुक्त राष्ट्र महासभा द्वारा (संकल्प 217 ए) घोषित की गई थी। यह पहली बार सार्वभौमिक रूप से संरक्षित किए जाने वाले मौलिक मानवाधिकारों को निर्धारित करता है।"
    ],
    "concepts": [
      {
        "heading": [
          "Structure",
          "संरचना"
        ],
        "body": [
          "The UDHR consists of a Preamble and 30 Articles detailing an individual's basic rights and fundamental freedoms.",
          "UDHR में एक प्रस्तावना और 30 अनुच्छेद हैं जो एक व्यक्ति के बुनियादी अधिकारों और मौलिक स्वतंत्रताओं का विवरण देते हैं।"
        ]
      },
      {
        "heading": [
          "Articles 1-2 (Basic Concepts)",
          "अनुच्छेद 1-2 (मूल अवधारणाएं)"
        ],
        "body": [
          "Emphasize that all humans are born free and equal in dignity and rights, and prohibit discrimination based on race, color, sex, language, religion, etc.",
          "इस बात पर जोर देते हैं कि सभी मनुष्य गरिमा और अधिकारों में स्वतंत्र और समान पैदा हुए हैं, और नस्ल, रंग, लिंग, भाषा, धर्म आदि के आधार पर भेदभाव को रोकते हैं।"
        ]
      },
      {
        "heading": [
          "Articles 3-21 (Civil and Political Rights)",
          "अनुच्छेद 3-21 (नागरिक और राजनीतिक अधिकार)"
        ],
        "body": [
          "Include the right to life, liberty, security, freedom from slavery and torture, equality before the law, right to a fair trial, freedom of movement, right to asylum, freedom of thought, conscience, religion, and freedom of expression and assembly.",
          "इनमें जीवन, स्वतंत्रता, सुरक्षा का अधिकार, गुलामी और यातना से स्वतंत्रता, कानून के समक्ष समानता, निष्पक्ष सुनवाई का अधिकार, आंदोलन की स्वतंत्रता, शरण का अधिकार, विचार, विवेक, धर्म की स्वतंत्रता, और अभिव्यक्ति और सभा की स्वतंत्रता शामिल हैं।"
        ]
      },
      {
        "heading": [
          "Articles 22-27 (Economic, Social and Cultural Rights)",
          "अनुच्छेद 22-27 (आर्थिक, सामाजिक और सांस्कृतिक अधिकार)"
        ],
        "body": [
          "Include the right to social security, right to work and equal pay, right to form trade unions, right to rest and leisure, right to an adequate standard of living, and the right to education.",
          "इनमें सामाजिक सुरक्षा का अधिकार, काम और समान वेतन का अधिकार, ट्रेड यूनियन बनाने का अधिकार, आराम और अवकाश का अधिकार, जीवन के पर्याप्त स्तर का अधिकार, और शिक्षा का अधिकार शामिल हैं।"
        ]
      },
      {
        "heading": [
          "Articles 28-30 (Framework and Limits)",
          "अनुच्छेद 28-30 (ढांचा और सीमाएं)"
        ],
        "body": [
          "States that everyone is entitled to a social and international order where these rights can be realized, emphasizes duties to the community, and states that no one can use these rights to destroy the rights of others.",
          "बताते हैं कि हर कोई एक सामाजिक और अंतर्राष्ट्रीय व्यवस्था का हकदार है जहां इन अधिकारों को साकार किया जा सकता है, समुदाय के प्रति कर्तव्यों पर जोर देते हैं, और कहते हैं कि कोई भी इन अधिकारों का उपयोग दूसरों के अधिकारों को नष्ट करने के लिए नहीं कर सकता है।"
        ]
      }
    ],
    "quotes": [
      [
        "Eleanor Roosevelt (Chairperson of the UDHR drafting committee): \"The UDHR is the Magna Carta of all mankind.\"",
        "एलेनोर रूजवेल्ट (UDHR मसौदा समिति की अध्यक्ष): \"UDHR पूरी मानव जाति का मैग्ना कार्टा है।\""
      ]
    ],
    "evaluation": [
      "A primary criticism of the UDHR is that it is a 'Declaration' (a resolution of the UNGA) and not a 'Treaty'; therefore, it was not initially legally binding on states, lacking an enforcement mechanism. Furthermore, some critics argue it reflects predominantly Western liberal values, prioritizing individualism over community duties. However, over time, its principles have become so widely accepted that many scholars argue it now forms part of Customary International Law, meaning it is binding on all states regardless of formal treaty ratification.",
      "UDHR की एक प्राथमिक आलोचना यह है कि यह एक 'घोषणा' (UNGA का एक संकल्प) है और 'संधि' नहीं है; इसलिए, यह शुरू में राज्यों पर कानूनी रूप से बाध्यकारी नहीं था, इसमें प्रवर्तन तंत्र (Enforcement mechanism) का अभाव था। इसके अलावा, कुछ आलोचकों का तर्क है कि यह मुख्य रूप से पश्चिमी उदारवादी मूल्यों को दर्शाता है, सामुदायिक कर्तव्यों के ऊपर व्यक्तिवाद को प्राथमिकता देता है। हालांकि, समय के साथ, इसके सिद्धांतों को इतनी व्यापक रूप से स्वीकार कर लिया गया है कि कई विद्वानों का तर्क है कि यह अब प्रथागत अंतर्राष्ट्रीय कानून (Customary International Law) का हिस्सा है, जिसका अर्थ है कि यह औपचारिक संधि अनुसमर्थन की परवाह किए बिना सभी राज्यों पर बाध्यकारी है।"
    ],
    "conclusion": [
      "The UDHR remains the foundational text of the modern human rights system. Even without strict initial legal enforcement, its moral authority is unparalleled. It inspired more than 80 international human rights treaties and declarations, countless regional conventions, and domestic constitutional bills of rights, solidifying its status as a common standard of achievement for all peoples and nations.",
      "UDHR आधुनिक मानवाधिकार प्रणाली का मूलभूत पाठ बना हुआ है। सख्त प्रारंभिक कानूनी प्रवर्तन के बिना भी, इसका नैतिक अधिकार अद्वितीय है। इसने 80 से अधिक अंतर्राष्ट्रीय मानवाधिकार संधियों और घोषणाओं, अनगिनत क्षेत्रीय सम्मेलनों और घरेलू संवैधानिक बिलों को प्रेरित किया, जिससे सभी लोगों और राष्ट्रों के लिए उपलब्धि के एक सामान्य मानक के रूप में इसकी स्थिति मजबूत हुई।"
    ],
    "shortQ": [
      [
        "When and where was the UDHR adopted?",
        "UDHR को कब और कहाँ अपनाया गया था?"
      ],
      [
        "How many articles does the UDHR contain?",
        "UDHR में कितने अनुच्छेद हैं?"
      ],
      [
        "Name the chairperson of the UDHR drafting committee.",
        "UDHR मसौदा समिति के अध्यक्ष का नाम बताइए।"
      ],
      [
        "What is the significance of Article 1 of the UDHR?",
        "UDHR के अनुच्छेद 1 का क्या महत्व है?"
      ],
      [
        "Why is December 10 celebrated as Human Rights Day?",
        "10 दिसंबर को मानवाधिकार दिवस के रूप में क्यों मनाया जाता है?"
      ]
    ],
    "longQ": [
      [
        "Discuss the key features and structure of the Universal Declaration of Human Rights, 1948.",
        "मानवाधिकारों की सार्वभौम घोषणा, 1948 की प्रमुख विशेषताओं और संरचना पर चर्चा करें।"
      ],
      [
        "Evaluate the legal status of the UDHR in contemporary international law. Is it binding?",
        "समकालीन अंतर्राष्ट्रीय कानून में UDHR की कानूनी स्थिति का मूल्यांकन करें। क्या यह बाध्यकारी है?"
      ],
      [
        "\"The UDHR is a common standard of achievement for all peoples.\" Elucidate.",
        "\"UDHR सभी लोगों के लिए उपलब्धि का एक सामान्य मानक है।\" स्पष्ट करें।"
      ],
      [
        "Critically examine the Western bias often associated with the drafting of the UDHR.",
        "अक्सर UDHR के प्रारूपण से जुड़े पश्चिमी पूर्वाग्रह का आलोचनात्मक परीक्षण करें।"
      ],
      [
        "Analyze how the UDHR balances civil-political rights with economic-social rights.",
        "विश्लेषण करें कि UDHR आर्थिक-सामाजिक अधिकारों के साथ नागरिक-राजनीतिक अधिकारों को कैसे संतुलित करता है।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "The UDHR was adopted by the UN General Assembly on:",
          "संयुक्त राष्ट्र महासभा द्वारा UDHR को कब अपनाया गया था?"
        ],
        "opts": [
          [
            "24 October 1945",
            "24 अक्टूबर 1945"
          ],
          [
            "10 December 1948",
            "10 दिसंबर 1948"
          ],
          [
            "1 January 1949",
            "1 जनवरी 1949"
          ],
          [
            "10 November 1950",
            "10 नवंबर 1950"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Who played a pivotal role as the Chairperson of the Commission on Human Rights that drafted the UDHR?",
          "UDHR का मसौदा तैयार करने वाले मानवाधिकार आयोग के अध्यक्ष के रूप में किसने महत्वपूर्ण भूमिका निभाई?"
        ],
        "opts": [
          [
            "Winston Churchill",
            "विंस्टन चर्चिल"
          ],
          [
            "Franklin D. Roosevelt",
            "फ्रैंकलिन डी. रूजवेल्ट"
          ],
          [
            "Eleanor Roosevelt",
            "एलेनोर रूजवेल्ट"
          ],
          [
            "John Peters Humphrey",
            "जॉन पीटर्स हम्फ्री"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "Legally, the UDHR is a:",
          "कानूनी तौर पर, UDHR क्या है?"
        ],
        "opts": [
          [
            "Legally binding Treaty",
            "कानूनी रूप से बाध्यकारी संधि (Treaty)"
          ],
          [
            "Resolution of the UN General Assembly",
            "संयुक्त राष्ट्र महासभा का एक संकल्प (Resolution)"
          ],
          [
            "UN Security Council Mandate",
            "संयुक्त राष्ट्र सुरक्षा परिषद का जनादेश"
          ],
          [
            "Convention requiring ratification",
            "एक सम्मेलन जिसके अनुसमर्थन की आवश्यकता है"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which articles of the UDHR specifically cover Economic, Social, and Cultural rights?",
          "UDHR के कौन से अनुच्छेद विशेष रूप से आर्थिक, सामाजिक और सांस्कृतिक अधिकारों को कवर करते हैं?"
        ],
        "opts": [
          [
            "Articles 1-10",
            "अनुच्छेद 1-10"
          ],
          [
            "Articles 11-20",
            "अनुच्छेद 11-20"
          ],
          [
            "Articles 22-27",
            "अनुच्छेद 22-27"
          ],
          [
            "Articles 28-30",
            "अनुच्छेद 28-30"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "Article 1 of the UDHR states that all human beings are born free and equal in:",
          "UDHR का अनुच्छेद 1 कहता है कि सभी मनुष्य स्वतंत्र पैदा हुए हैं और किसमें समान हैं:"
        ],
        "opts": [
          [
            "Wealth and Status",
            "धन और स्थिति"
          ],
          [
            "Dignity and Rights",
            "गरिमा और अधिकार"
          ],
          [
            "Law and Order",
            "कानून और व्यवस्था"
          ],
          [
            "Opportunity and Outcome",
            "अवसर और परिणाम"
          ]
        ],
        "correct": 1
      }
    ],
    "ugcNotes": [
      "Focus on the key theories, thinkers, and books mentioned in this topic. Understand the historical evolution and major paradigms.",
      "इस विषय में उल्लिखित प्रमुख सिद्धांतों, विचारकों और पुस्तकों पर ध्यान दें। ऐतिहासिक विकास और प्रमुख प्रतिमानों को समझें।"
    ],
    "ugcQ": [
      [
        "Q: What is the main theme of this topic? A: See Core Concepts.",
        "प्र: इस विषय का मुख्य विषय क्या है? उ: मुख्य सिद्धांत देखें।"
      ],
      [
        "Q: Who are the key thinkers? A: Refer to the Quotes section.",
        "प्र: प्रमुख विचारक कौन हैं? उ: उद्धरण अनुभाग देखें।"
      ]
    ]
  },
  {
    "id": "t4",
    "num": 4,
    "title": [
      "International Covenant on Civil and Political Rights, 1966",
      "नागरिक और राजनीतिक अधिकारों पर अंतर्राष्ट्रीय नियम, 1966"
    ],
    "introduction": [
      "The International Covenant on Civil and Political Rights (ICCPR) is a multilateral treaty adopted by the United Nations General Assembly on December 16, 1966, and came into force in 1976. Unlike the UDHR, which is a declaration, the ICCPR is a legally binding treaty. Along with the UDHR and the ICESCR, it forms the International Bill of Human Rights. It specifically focuses on 'first-generation' human rights.",
      "नागरिक और राजनीतिक अधिकारों पर अंतर्राष्ट्रीय नियम (International Covenant on Civil and Political Rights - ICCPR) एक बहुपक्षीय संधि है जिसे 16 दिसंबर, 1966 को संयुक्त राष्ट्र महासभा द्वारा अपनाया गया था, और 1976 में लागू हुआ। UDHR (जो एक घोषणा है) के विपरीत, ICCPR एक कानूनी रूप से बाध्यकारी संधि है। UDHR और ICESCR के साथ, यह मानवाधिकारों का अंतर्राष्ट्रीय बिल बनाता है। यह विशेष रूप से 'पहली पीढ़ी' के मानवाधिकारों पर केंद्रित है।"
    ],
    "concepts": [
      {
        "heading": [
          "Self-Determination (Article 1)",
          "आत्मनिर्णय (अनुच्छेद 1)"
        ],
        "body": [
          "Guarantees the right of all peoples to self-determination, allowing them to freely determine their political status and pursue their economic, social, and cultural development.",
          "सभी लोगों के आत्मनिर्णय (Self-determination) के अधिकार की गारंटी देता है, जिससे वे स्वतंत्र रूप से अपनी राजनीतिक स्थिति निर्धारित कर सकते हैं और अपने आर्थिक, सामाजिक और सांस्कृतिक विकास को आगे बढ़ा सकते हैं।"
        ]
      },
      {
        "heading": [
          "Physical Integrity Rights",
          "शारीरिक अखंडता अधिकार"
        ],
        "body": [
          "Right to life (Art. 6), freedom from torture and cruel punishment (Art. 7), freedom from slavery (Art. 8), and liberty and security of person (Art. 9).",
          "जीवन का अधिकार (अनुच्छेद 6), यातना और क्रूर सजा से स्वतंत्रता (अनुच्छेद 7), गुलामी से स्वतंत्रता (अनुच्छेद 8), और व्यक्ति की स्वतंत्रता और सुरक्षा (अनुच्छेद 9)।"
        ]
      },
      {
        "heading": [
          "Procedural Fairness",
          "प्रक्रियात्मक निष्पक्षता"
        ],
        "body": [
          "Rights of the accused, including equality before courts, fair and public hearings, and presumption of innocence (Art. 14).",
          "आरोपी के अधिकार, जिसमें अदालतों के समक्ष समानता, निष्पक्ष और सार्वजनिक सुनवाई, और निर्दोषता की धारणा (अनुच्छेद 14) शामिल हैं।"
        ]
      },
      {
        "heading": [
          "Fundamental Freedoms",
          "मौलिक स्वतंत्रताएं"
        ],
        "body": [
          "Freedom of movement (Art. 12), thought, conscience, and religion (Art. 18), expression (Art. 19), peaceful assembly (Art. 21), and freedom of association (Art. 22).",
          "आवागमन की स्वतंत्रता (अनुच्छेद 12), विचार, विवेक और धर्म की स्वतंत्रता (अनुच्छेद 18), अभिव्यक्ति की स्वतंत्रता (अनुच्छेद 19), शांतिपूर्ण सभा (अनुच्छेद 21), और संघ की स्वतंत्रता (अनुच्छेद 22)।"
        ]
      },
      {
        "heading": [
          "Optional Protocols",
          "वैकल्पिक प्रोटोकॉल (Optional Protocols)"
        ],
        "body": [
          "- First Optional Protocol: Allows individuals to submit complaints to the Human Rights Committee if their rights are violated.\n                - Second Optional Protocol: Aims at the abolition of the death penalty.",
          "- पहला वैकल्पिक प्रोटोकॉल: व्यक्तियों को मानवाधिकार समिति में शिकायत दर्ज करने की अनुमति देता है यदि उनके अधिकारों का उल्लंघन होता है।\n                - दूसरा वैकल्पिक प्रोटोकॉल: मृत्युदंड के उन्मूलन का लक्ष्य रखता है।"
        ]
      },
      {
        "heading": [
          "Derogation (Art. 4)",
          "अल्पीकरण (Derogation - अनुच्छेद 4)"
        ],
        "body": [
          "Allows states to temporarily suspend some rights during public emergencies, but 'non-derogable' rights (like right to life, freedom from torture) can never be suspended.",
          "राज्यों को सार्वजनिक आपात स्थिति के दौरान अस्थायी रूप से कुछ अधिकारों को निलंबित करने की अनुमति देता है, लेकिन 'गैर-अल्पीकरणीय' अधिकारों (जैसे जीवन का अधिकार, यातना से स्वतंत्रता) को कभी भी निलंबित नहीं किया जा सकता है।"
        ]
      }
    ],
    "quotes": [
      [
        "\"The ICCPR transformed the lofty ideals of the UDHR into binding, enforceable international law, creating a global mechanism for accountability.\"",
        "\"ICCPR ने UDHR के महान आदर्शों को बाध्यकारी, लागू करने योग्य अंतर्राष्ट्रीय कानून में बदल दिया, जिससे जवाबदेही के लिए एक वैश्विक तंत्र तैयार हुआ।\""
      ]
    ],
    "evaluation": [
      "While the ICCPR is a powerful legal tool, its effectiveness is often hindered by state sovereignty. The enforcement mechanism relies heavily on state reporting (which can be biased) and the Human Rights Committee, which can issue recommendations but lacks a global police force to enforce them. Furthermore, many states have signed the treaty with numerous 'reservations', allowing them to opt-out of certain provisions that conflict with their domestic laws (e.g., Islamic nations reserving on freedom of religion clauses regarding apostasy).",
      "हालांकि ICCPR एक शक्तिशाली कानूनी उपकरण है, इसकी प्रभावशीलता अक्सर राज्य संप्रभुता (State sovereignty) से बाधित होती है। प्रवर्तन तंत्र राज्य रिपोर्टिंग (जो पक्षपाती हो सकती है) और मानवाधिकार समिति पर बहुत अधिक निर्भर करता है, जो सिफारिशें जारी कर सकता है लेकिन उन्हें लागू करने के लिए वैश्विक पुलिस बल का अभाव है। इसके अलावा, कई राज्यों ने कई 'आरक्षणों' (reservations) के साथ संधि पर हस्ताक्षर किए हैं, जिससे वे उन प्रावधानों से बाहर निकल सकते हैं जो उनके घरेलू कानूनों से टकराते हैं (उदा. धर्मत्याग के संबंध में धर्म की स्वतंत्रता के खंडों पर आरक्षण देने वाले इस्लामी राष्ट्र)।"
    ],
    "conclusion": [
      "The ICCPR is a cornerstone of international human rights law, codifying civil and political liberties into binding obligations. Despite enforcement challenges and state reservations, it provides a critical benchmark for holding governments accountable and empowers individuals, through its Optional Protocol, to seek justice at the international level when domestic systems fail.",
      "ICCPR अंतर्राष्ट्रीय मानवाधिकार कानून की आधारशिला है, जो नागरिक और राजनीतिक स्वतंत्रताओं को बाध्यकारी दायित्वों में संहिताबद्ध करता है। प्रवर्तन चुनौतियों और राज्य आरक्षणों के बावजूद, यह सरकारों को जवाबदेह ठहराने के लिए एक महत्वपूर्ण बेंचमार्क प्रदान करता है और अपने वैकल्पिक प्रोटोकॉल के माध्यम से व्यक्तियों को सशक्त बनाता है कि जब घरेलू प्रणालियां विफल हो जाती हैं तो वे अंतर्राष्ट्रीय स्तर पर न्याय मांगें।"
    ],
    "shortQ": [
      [
        "When was the ICCPR adopted and when did it come into force?",
        "ICCPR को कब अपनाया गया और यह कब लागू हुआ?"
      ],
      [
        "Name three non-derogable rights under the ICCPR.",
        "ICCPR के तहत तीन गैर-अल्पीकरणीय (non-derogable) अधिकारों के नाम बताइए।"
      ],
      [
        "What is the purpose of the First Optional Protocol to the ICCPR?",
        "ICCPR के पहले वैकल्पिक प्रोटोकॉल का उद्देश्य क्या है?"
      ],
      [
        "What does Article 1 of the ICCPR state?",
        "ICCPR का अनुच्छेद 1 क्या कहता है?"
      ],
      [
        "Which UN body monitors the implementation of the ICCPR?",
        "कौन सा संयुक्त राष्ट्र निकाय ICCPR के कार्यान्वयन की निगरानी करता है?"
      ]
    ],
    "longQ": [
      [
        "Discuss the key civil and political rights protected under the ICCPR.",
        "ICCPR के तहत संरक्षित प्रमुख नागरिक और राजनीतिक अधिकारों पर चर्चा करें।"
      ],
      [
        "Explain the mechanism for implementing and monitoring the ICCPR. How effective is it?",
        "ICCPR को लागू करने और निगरानी करने के तंत्र की व्याख्या करें। यह कितना प्रभावी है?"
      ],
      [
        "Critically analyze the concept of 'derogation' during emergencies under Article 4 of the ICCPR.",
        "ICCPR के अनुच्छेद 4 के तहत आपात स्थिति के दौरान 'अल्पीकरण' (derogation) की अवधारणा का आलोचनात्मक विश्लेषण करें।"
      ],
      [
        "What is the International Bill of Human Rights? Explain the position of ICCPR within it.",
        "मानवाधिकारों का अंतर्राष्ट्रीय बिल क्या है? इसमें ICCPR की स्थिति स्पष्ट करें।"
      ],
      [
        "Evaluate the impact of 'state reservations' on the effectiveness of the ICCPR.",
        "ICCPR की प्रभावशीलता पर 'राज्य आरक्षणों' (state reservations) के प्रभाव का मूल्यांकन करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "The ICCPR came into force in the year:",
          "ICCPR किस वर्ष लागू हुआ?"
        ],
        "opts": [
          [
            "1948",
            "1948"
          ],
          [
            "1966",
            "1966"
          ],
          [
            "1976",
            "1976"
          ],
          [
            "1993",
            "1993"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "Which committee monitors the implementation of the ICCPR?",
          "कौन सी समिति ICCPR के कार्यान्वयन की निगरानी करती है?"
        ],
        "opts": [
          [
            "UN Security Council",
            "संयुक्त राष्ट्र सुरक्षा परिषद"
          ],
          [
            "Human Rights Committee",
            "मानवाधिकार समिति (Human Rights Committee)"
          ],
          [
            "Committee on Economic, Social and Cultural Rights",
            "आर्थिक, सामाजिक और सांस्कृतिक अधिकारों पर समिति"
          ],
          [
            "International Court of Justice",
            "अंतर्राष्ट्रीय न्यायालय"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "The First Optional Protocol to the ICCPR deals with:",
          "ICCPR का पहला वैकल्पिक प्रोटोकॉल किससे संबंधित है?"
        ],
        "opts": [
          [
            "Abolition of death penalty",
            "मृत्युदंड का उन्मूलन"
          ],
          [
            "Individual complaints mechanism",
            "व्यक्तिगत शिकायत तंत्र (Individual complaints mechanism)"
          ],
          [
            "Interstate disputes",
            "अंतरराज्यीय विवाद"
          ],
          [
            "Reporting guidelines",
            "रिपोर्टिंग दिशानिर्देश"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which of the following is a 'non-derogable' right under the ICCPR?",
          "ICCPR के तहत निम्नलिखित में से कौन सा 'गैर-अल्पीकरणीय' (non-derogable) अधिकार है?"
        ],
        "opts": [
          [
            "Freedom of expression",
            "अभिव्यक्ति की स्वतंत्रता"
          ],
          [
            "Freedom of movement",
            "आवागमन की स्वतंत्रता"
          ],
          [
            "Freedom from torture",
            "यातना से मुक्ति (Freedom from torture)"
          ],
          [
            "Right to peaceful assembly",
            "शांतिपूर्ण सभा का अधिकार"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "Article 1 of both the ICCPR and ICESCR deals with:",
          "ICCPR और ICESCR दोनों का अनुच्छेद 1 किससे संबंधित है?"
        ],
        "opts": [
          [
            "Right to life",
            "जीवन का अधिकार"
          ],
          [
            "Equality before law",
            "कानून के समक्ष समानता"
          ],
          [
            "Right to self-determination",
            "आत्मनिर्णय का अधिकार (Right to self-determination)"
          ],
          [
            "Freedom of religion",
            "धर्म की स्वतंत्रता"
          ]
        ],
        "correct": 2
      }
    ],
    "ugcNotes": [
      "Focus on the key theories, thinkers, and books mentioned in this topic. Understand the historical evolution and major paradigms.",
      "इस विषय में उल्लिखित प्रमुख सिद्धांतों, विचारकों और पुस्तकों पर ध्यान दें। ऐतिहासिक विकास और प्रमुख प्रतिमानों को समझें।"
    ],
    "ugcQ": [
      [
        "Q: What is the main theme of this topic? A: See Core Concepts.",
        "प्र: इस विषय का मुख्य विषय क्या है? उ: मुख्य सिद्धांत देखें।"
      ],
      [
        "Q: Who are the key thinkers? A: Refer to the Quotes section.",
        "प्र: प्रमुख विचारक कौन हैं? उ: उद्धरण अनुभाग देखें।"
      ]
    ]
  },
  {
    "id": "t5",
    "num": 5,
    "title": [
      "International Covenant on Social, Economic & Cultural Rights, 1966",
      "सामाजिक, आर्थिक और सांस्कृतिक अधिकारों पर अंतर्राष्ट्रीय नियम, 1966"
    ],
    "introduction": [
      "The International Covenant on Economic, Social and Cultural Rights (ICESCR) was adopted by the UN General Assembly alongside the ICCPR in 1966, entering into force in 1976. It commits its parties to work toward the granting of economic, social, and cultural rights (Second Generation rights) to Non-Self-Governing and Trust Territories and individuals, including labor rights and the right to health, education, and an adequate standard of living.",
      "सामाजिक, आर्थिक और सांस्कृतिक अधिकारों पर अंतर्राष्ट्रीय नियम (International Covenant on Economic, Social and Cultural Rights - ICESCR) को 1966 में ICCPR के साथ संयुक्त राष्ट्र महासभा द्वारा अपनाया गया था, और यह 1976 में लागू हुआ। यह अपने पक्षों को गैर-स्वशासी और ट्रस्ट क्षेत्रों और व्यक्तियों को आर्थिक, सामाजिक और सांस्कृतिक अधिकार (दूसरी पीढ़ी के अधिकार) प्रदान करने की दिशा में काम करने के लिए प्रतिबद्ध करता है, जिसमें श्रम अधिकार, स्वास्थ्य, शिक्षा और जीवन के पर्याप्त स्तर का अधिकार शामिल है।"
    ],
    "concepts": [
      {
        "heading": [
          "Progressive Realization (Art. 2)",
          "प्रगतिशील प्राप्ति (Progressive Realization - अनुच्छेद 2)"
        ],
        "body": [
          "Unlike civil rights which must be implemented immediately, states are obliged to take steps \"to the maximum of its available resources\" to progressively achieve the full realization of ESC rights.",
          "नागरिक अधिकारों के विपरीत जिन्हें तुरंत लागू किया जाना चाहिए, राज्य ESC अधिकारों की पूर्ण प्राप्ति को उत्तरोत्तर प्राप्त करने के लिए \"अपने उपलब्ध संसाधनों की अधिकतम सीमा तक\" कदम उठाने के लिए बाध्य हैं।"
        ]
      },
      {
        "heading": [
          "Labor Rights (Art. 6-8)",
          "श्रम अधिकार (अनुच्छेद 6-8)"
        ],
        "body": [
          "Right to work, just and favorable conditions of work (fair wages, safe conditions, rest), and the right to form and join trade unions and strike.",
          "काम का अधिकार, काम की न्यायसंगत और अनुकूल परिस्थितियां (उचित वेतन, सुरक्षित परिस्थितियां, आराम), और ट्रेड यूनियन बनाने, उसमें शामिल होने और हड़ताल करने का अधिकार।"
        ]
      },
      {
        "heading": [
          "Social Security & Family (Art. 9-10)",
          "सामाजिक सुरक्षा और परिवार (अनुच्छेद 9-10)"
        ],
        "body": [
          "Right to social security, including social insurance, and protection for the family, mothers, and children.",
          "सामाजिक बीमा सहित सामाजिक सुरक्षा का अधिकार, और परिवार, माताओं और बच्चों के लिए सुरक्षा।"
        ]
      },
      {
        "heading": [
          "Standard of Living (Art. 11)",
          "जीवन स्तर (अनुच्छेद 11)"
        ],
        "body": [
          "The right to an adequate standard of living, including adequate food, clothing, and housing, and the continuous improvement of living conditions.",
          "जीवन के पर्याप्त स्तर का अधिकार, जिसमें पर्याप्त भोजन, कपड़े और आवास शामिल हैं, और रहने की स्थिति में निरंतर सुधार।"
        ]
      },
      {
        "heading": [
          "Health and Education (Art. 12-14)",
          "स्वास्थ्य और शिक्षा (अनुच्छेद 12-14)"
        ],
        "body": [
          "The right to the highest attainable standard of physical and mental health. The right to free, compulsory primary education, and accessible secondary/higher education.",
          "शारीरिक और मानसिक स्वास्थ्य के उच्चतम प्राप्य मानक का अधिकार। मुफ्त, अनिवार्य प्राथमिक शिक्षा और सुलभ माध्यमिक/उच्च शिक्षा का अधिकार।"
        ]
      },
      {
        "heading": [
          "Monitoring Body",
          "निगरानी निकाय"
        ],
        "body": [
          "Implementation is monitored by the Committee on Economic, Social and Cultural Rights (CESCR).",
          "कार्यान्वयन की निगरानी आर्थिक, सामाजिक और सांस्कृतिक अधिकारों की समिति (CESCR) द्वारा की जाती है।"
        ]
      }
    ],
    "quotes": [
      [
        "Franklin D. Roosevelt: \"True individual freedom cannot exist without economic security and independence. Necessitous men are not free men.\"",
        "फ्रैंकलिन डी. रूजवेल्ट: \"आर्थिक सुरक्षा और स्वतंत्रता के बिना सच्ची व्यक्तिगत स्वतंत्रता मौजूद नहीं हो सकती। जरूरतमंद लोग स्वतंत्र लोग नहीं हैं।\""
      ]
    ],
    "evaluation": [
      "The major critique of the ICESCR centers on its enforceability and justiciability. Because the rights are subject to \"progressive realization\" and \"available resources,\" states easily excuse failures to provide housing or healthcare by claiming a lack of funds. Historically, Western nations treated these rights as lesser aspirations compared to civil rights. However, recent jurisprudence argues that at least a \"minimum core obligation\" (e.g., basic shelter, freedom from starvation) is immediately binding on all states regardless of their wealth.",
      "ICESCR की प्रमुख आलोचना इसकी प्रवर्तनीयता और न्यायसंगतता (enforceability and justiciability) पर केंद्रित है। चूंकि अधिकार \"प्रगतिशील प्राप्ति\" और \"उपलब्ध संसाधनों\" के अधीन हैं, इसलिए राज्य धन की कमी का दावा करके आवास या स्वास्थ्य सेवा प्रदान करने में विफलताओं को आसानी से माफ कर देते हैं। ऐतिहासिक रूप से, पश्चिमी राष्ट्रों ने नागरिक अधिकारों की तुलना में इन अधिकारों को कम आकांक्षाओं के रूप में माना। हालांकि, हाल के न्यायशास्त्र का तर्क है कि कम से कम \"न्यूनतम मुख्य दायित्व\" (Minimum core obligation - जैसे, बुनियादी आश्रय, भुखमरी से मुक्ति) उनके धन की परवाह किए बिना सभी राज्यों पर तुरंत बाध्यकारी है।"
    ],
    "conclusion": [
      "The ICESCR provides the legal framework for achieving social justice and economic equality on a global scale. By establishing that poverty and deprivation are human rights issues, not merely economic misfortunes, it forces governments to prioritize human welfare in their development agendas, making it an indispensable half of the International Bill of Human Rights.",
      "ICESCR वैश्विक स्तर पर सामाजिक न्याय और आर्थिक समानता प्राप्त करने के लिए कानूनी ढांचा प्रदान करता है। यह स्थापित करके कि गरीबी और अभाव मानवाधिकार के मुद्दे हैं, न कि केवल आर्थिक दुर्भाग्य, यह सरकारों को अपने विकास एजेंडे में मानव कल्याण को प्राथमिकता देने के लिए मजबूर करता है, जिससे यह मानवाधिकारों के अंतर्राष्ट्रीय बिल का एक अनिवार्य आधा हिस्सा बन जाता है。"
    ],
    "shortQ": [
      [
        "What is the ICESCR and when did it come into force?",
        "ICESCR क्या है और यह कब लागू हुआ?"
      ],
      [
        "Explain the concept of 'progressive realization' under the ICESCR.",
        "ICESCR के तहत 'प्रगतिशील प्राप्ति' (progressive realization) की अवधारणा की व्याख्या करें।"
      ],
      [
        "Name three rights protected under the ICESCR.",
        "ICESCR के तहत संरक्षित तीन अधिकारों के नाम बताइए।"
      ],
      [
        "Which UN committee monitors the ICESCR?",
        "कौन सी संयुक्त राष्ट्र समिति ICESCR की निगरानी करती है?"
      ],
      [
        "What is meant by 'minimum core obligations' in the context of economic rights?",
        "आर्थिक अधिकारों के संदर्भ में 'न्यूनतम मुख्य दायित्वों' (minimum core obligations) का क्या अर्थ है?"
      ]
    ],
    "longQ": [
      [
        "Outline the major economic, social, and cultural rights guaranteed by the ICESCR.",
        "ICESCR द्वारा गारंटीकृत प्रमुख आर्थिक, सामाजिक और सांस्कृतिक अधिकारों की रूपरेखा तैयार करें।"
      ],
      [
        "Critically examine the concept of \"progressive realization subject to available resources\". Does it make the ICESCR weak?",
        "\"उपलब्ध संसाधनों के अधीन प्रगतिशील प्राप्ति\" की अवधारणा का आलोचनात्मक परीक्षण करें। क्या यह ICESCR को कमजोर बनाता है?"
      ],
      [
        "Compare and contrast the enforcement mechanisms of the ICCPR and the ICESCR.",
        "ICCPR और ICESCR के प्रवर्तन तंत्र (enforcement mechanisms) की तुलना करें।"
      ],
      [
        "Discuss the importance of the right to education and health as provided in the ICESCR.",
        "ICESCR में प्रदान किए गए शिक्षा और स्वास्थ्य के अधिकार के महत्व पर चर्चा करें।"
      ],
      [
        "How does the ICESCR protect labor rights? Discuss with reference to relevant articles.",
        "ICESCR श्रम अधिकारों की रक्षा कैसे करता है? प्रासंगिक अनुच्छेदों के संदर्भ में चर्चा करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "The principle of 'Progressive Realization' is associated with which treaty?",
          "'प्रगतिशील प्राप्ति' (Progressive Realization) का सिद्धांत किस संधि से जुड़ा है?"
        ],
        "opts": [
          [
            "ICCPR",
            "ICCPR"
          ],
          [
            "ICESCR",
            "ICESCR"
          ],
          [
            "Convention against Torture",
            "Convention against Torture"
          ],
          [
            "CEDAW",
            "CEDAW"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which committee monitors state compliance with the ICESCR?",
          "कौन सी समिति ICESCR के साथ राज्य के अनुपालन की निगरानी करती है?"
        ],
        "opts": [
          [
            "Human Rights Committee",
            "मानवाधिकार समिति"
          ],
          [
            "Committee on Economic, Social and Cultural Rights (CESCR)",
            "आर्थिक, सामाजिक और सांस्कृतिक अधिकारों पर समिति (CESCR)"
          ],
          [
            "UN General Assembly",
            "संयुक्त राष्ट्र महासभा"
          ],
          [
            "International Labour Organization (ILO)",
            "अंतर्राष्ट्रीय श्रम संगठन (ILO)"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Article 11 of the ICESCR specifically guarantees the right to:",
          "ICESCR का अनुच्छेद 11 विशेष रूप से किस अधिकार की गारंटी देता है?"
        ],
        "opts": [
          [
            "Free speech",
            "स्वतंत्र भाषण"
          ],
          [
            "Form trade unions",
            "ट्रेड यूनियन बनाना"
          ],
          [
            "An adequate standard of living (including food and housing)",
            "पर्याप्त जीवन स्तर (भोजन और आवास सहित)"
          ],
          [
            "Primary education",
            "प्राथमिक शिक्षा"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "Under the ICESCR, primary education must be:",
          "ICESCR के तहत, प्राथमिक शिक्षा होनी चाहिए:"
        ],
        "opts": [
          [
            "Progressive and paid",
            "प्रगतिशील और सशुल्क"
          ],
          [
            "Compulsory and available free to all",
            "अनिवार्य और सभी के लिए निःशुल्क उपलब्ध"
          ],
          [
            "Available only to citizens",
            "केवल नागरिकों के लिए उपलब्ध"
          ],
          [
            "Left to private institutions",
            "निजी संस्थानों पर छोड़ दिया गया"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "A major criticism of the ICESCR in its early years was that its rights were considered:",
          "अपने शुरुआती वर्षों में ICESCR की एक प्रमुख आलोचना यह थी कि इसके अधिकारों को माना जाता था:"
        ],
        "opts": [
          [
            "Too strictly enforced",
            "बहुत सख्ती से लागू किया गया"
          ],
          [
            "Non-justiciable (not enforceable in courts)",
            "गैर-न्यायसंगत (अदालतों में लागू करने योग्य नहीं)"
          ],
          [
            "Biased against developing nations",
            "विकासशील देशों के खिलाफ पक्षपाती"
          ],
          [
            "Too focused on political liberties",
            "राजनीतिक स्वतंत्रता पर बहुत अधिक केंद्रित"
          ]
        ],
        "correct": 1
      }
    ],
    "ugcNotes": [
      "Focus on the key theories, thinkers, and books mentioned in this topic. Understand the historical evolution and major paradigms.",
      "इस विषय में उल्लिखित प्रमुख सिद्धांतों, विचारकों और पुस्तकों पर ध्यान दें। ऐतिहासिक विकास और प्रमुख प्रतिमानों को समझें।"
    ],
    "ugcQ": [
      [
        "Q: What is the main theme of this topic? A: See Core Concepts.",
        "प्र: इस विषय का मुख्य विषय क्या है? उ: मुख्य सिद्धांत देखें।"
      ],
      [
        "Q: Who are the key thinkers? A: Refer to the Quotes section.",
        "प्र: प्रमुख विचारक कौन हैं? उ: उद्धरण अनुभाग देखें।"
      ]
    ]
  },
  {
    "id": "t6",
    "num": 6,
    "title": [
      "Brief Introduction to Collective (Indigenous) Rights",
      "सामूहिक (स्वदेशी) अधिकारों का संक्षिप्त परिचय"
    ],
    "introduction": [
      "Collective Rights, often referred to as 'Third Generation' human rights, are rights held by a group rather than by its members individually. Among the most critical collective rights are those of Indigenous Peoples. For centuries, indigenous communities faced colonization, dispossession of lands, and cultural assimilation. Collective rights emerged to protect their distinct cultures, traditions, languages, and historical ties to their ancestral lands.",
      "सामूहिक अधिकार (Collective Rights), जिन्हें अक्सर 'तीसरी पीढ़ी' के मानवाधिकारों के रूप में जाना जाता है, वे अधिकार हैं जो व्यक्तिगत रूप से इसके सदस्यों के बजाय एक समूह द्वारा रखे जाते हैं। सबसे महत्वपूर्ण सामूहिक अधिकारों में स्वदेशी लोगों (Indigenous Peoples) के अधिकार हैं। सदियों से, स्वदेशी समुदायों को उपनिवेशीकरण, भूमि से बेदखली और सांस्कृतिक आत्मसात का सामना करना पड़ा है। उनकी विशिष्ट संस्कृतियों, परंपराओं, भाषाओं और उनकी पैतृक भूमि से ऐतिहासिक संबंधों की रक्षा के लिए सामूहिक अधिकार उभरे।"
    ],
    "concepts": [
      {
        "heading": [
          "Self-Determination",
          "आत्मनिर्णय (Self-Determination)"
        ],
        "body": [
          "The foundational collective right. Indigenous peoples have the right to freely determine their political status and freely pursue their economic, social, and cultural development (without necessarily seeking separate statehood).",
          "मूलभूत सामूहिक अधिकार। स्वदेशी लोगों को स्वतंत्र रूप से अपनी राजनीतिक स्थिति निर्धारित करने और स्वतंत्र रूप से अपने आर्थिक, सामाजिक और सांस्कृतिक विकास (बिना अलग राज्य की मांग किए) को आगे बढ़ाने का अधिकार है।"
        ]
      },
      {
        "heading": [
          "Land and Territory Rights",
          "भूमि और क्षेत्र के अधिकार"
        ],
        "body": [
          "Rights to own, use, develop, and control the lands, territories, and resources that they possess by reason of traditional ownership. This is crucial for their physical and cultural survival.",
          "उन जमीनों, क्षेत्रों और संसाधनों के स्वामित्व, उपयोग, विकास और नियंत्रण के अधिकार जो उनके पास पारंपरिक स्वामित्व के कारण हैं। यह उनके भौतिक और सांस्कृतिक अस्तित्व के लिए महत्वपूर्ण है।"
        ]
      },
      {
        "heading": [
          "Cultural Rights",
          "सांस्कृतिक अधिकार"
        ],
        "body": [
          "The right to practice and revitalize their cultural traditions, languages, and customs. Protection against forced assimilation.",
          "अपनी सांस्कृतिक परंपराओं, भाषाओं और रीति-रिवाजों का अभ्यास और पुनरोद्धार करने का अधिकार। जबरन आत्मसात (forced assimilation) के खिलाफ सुरक्षा।"
        ]
      },
      {
        "heading": [
          "Free, Prior and Informed Consent (FPIC)",
          "स्वतंत्र, पूर्व और सूचित सहमति (FPIC - Free, Prior and Informed Consent)"
        ],
        "body": [
          "States must consult in good faith with indigenous peoples to obtain their FPIC before adopting measures or approving projects that affect their lands or territories (e.g., mining).",
          "राज्यों को ऐसे उपायों को अपनाने या उनकी भूमि या क्षेत्रों को प्रभावित करने वाली परियोजनाओं (जैसे, खनन) को मंजूरी देने से पहले उनका FPIC प्राप्त करने के लिए स्वदेशी लोगों के साथ सद्भाव से परामर्श करना चाहिए।"
        ]
      },
      {
        "heading": [
          "UNDRIP (2007)",
          "UNDRIP (2007)"
        ],
        "body": [
          "The United Nations Declaration on the Rights of Indigenous Peoples is the most comprehensive international instrument detailing these collective rights.",
          "स्वदेशी लोगों के अधिकारों पर संयुक्त राष्ट्र घोषणा (UN Declaration on the Rights of Indigenous Peoples) इन सामूहिक अधिकारों का विवरण देने वाला सबसे व्यापक अंतर्राष्ट्रीय साधन है।"
        ]
      }
    ],
    "quotes": [
      [
        "Inter-American Court of Human Rights: \"For indigenous peoples, land is not merely a commodity; it is a material and spiritual element which they must fully enjoy to preserve their cultural legacy and pass it on to future generations.\"",
        "मानवाधिकारों का अंतर-अमेरिकी न्यायालय (Inter-American Court of Human Rights): \"स्वदेशी लोगों के लिए, भूमि केवल एक वस्तु नहीं है; यह एक भौतिक और आध्यात्मिक तत्व है जिसका उन्हें अपनी सांस्कृतिक विरासत को संरक्षित करने और भावी पीढ़ियों तक पहुंचाने के लिए पूरी तरह से आनंद लेना चाहिए।\""
      ]
    ],
    "evaluation": [
      "The implementation of collective indigenous rights faces immense resistance from modern nation-states. States often view indigenous claims over resource-rich lands as a threat to national economic development and territorial integrity. Furthermore, there is sometimes a philosophical clash between collective rights and individual rights (e.g., if an indigenous community's traditional practice violates a member's individual rights, which takes precedence?). Despite UNDRIP, the gap between international declarations and domestic enforcement remains wide, with indigenous leaders frequently facing violence from corporate and state interests.",
      "सामूहिक स्वदेशी अधिकारों के कार्यान्वयन को आधुनिक राष्ट्र-राज्यों से भारी प्रतिरोध का सामना करना पड़ता है। राज्य अक्सर संसाधन-संपन्न भूमि पर स्वदेशी दावों को राष्ट्रीय आर्थिक विकास और क्षेत्रीय अखंडता के लिए खतरे के रूप में देखते हैं। इसके अलावा, कभी-कभी सामूहिक अधिकारों और व्यक्तिगत अधिकारों के बीच दार्शनिक टकराव होता है (उदाहरण के लिए, यदि स्वदेशी समुदाय की पारंपरिक प्रथा किसी सदस्य के व्यक्तिगत अधिकारों का उल्लंघन करती है, तो किसे प्राथमिकता मिलती है?)। UNDRIP के बावजूद, अंतर्राष्ट्रीय घोषणाओं और घरेलू प्रवर्तन के बीच की खाई बहुत व्यापक है, स्वदेशी नेताओं को अक्सर कॉर्पोरेट और राज्य के हितों से हिंसा का सामना करना पड़ता है।"
    ],
    "conclusion": [
      "Collective rights for indigenous peoples represent a vital evolution in human rights law, moving beyond strict individualism to recognize that some identities and rights are inherently communal. Ensuring these rights, particularly land and FPIC, is essential not only for historical justice but for preserving global cultural diversity and sustainable environmental practices.",
      "स्वदेशी लोगों के लिए सामूहिक अधिकार मानवाधिकार कानून में एक महत्वपूर्ण विकास का प्रतिनिधित्व करते हैं, जो सख्त व्यक्तिवाद से आगे बढ़कर यह पहचानते हैं कि कुछ पहचान और अधिकार स्वाभाविक रूप से सांप्रदायिक हैं। इन अधिकारों, विशेष रूप से भूमि और FPIC को सुनिश्चित करना, न केवल ऐतिहासिक न्याय के लिए बल्कि वैश्विक सांस्कृतिक विविधता और टिकाऊ पर्यावरणीय प्रथाओं को संरक्षित करने के लिए आवश्यक है।"
    ],
    "shortQ": [
      [
        "What are 'Collective Rights'?",
        "'सामूहिक अधिकार' (Collective Rights) क्या हैं?"
      ],
      [
        "What does UNDRIP stand for and when was it adopted?",
        "UNDRIP का पूर्ण रूप क्या है और इसे कब अपनाया गया था?"
      ],
      [
        "Explain the concept of FPIC (Free, Prior and Informed Consent).",
        "FPIC (स्वतंत्र, पूर्व और सूचित सहमति) की अवधारणा की व्याख्या करें।"
      ],
      [
        "Why is land central to indigenous rights?",
        "स्वदेशी अधिकारों के लिए भूमि केंद्रीय क्यों है?"
      ],
      [
        "How do collective rights differ from individual rights?",
        "सामूहिक अधिकार व्यक्तिगत अधिकारों से किस प्रकार भिन्न हैं?"
      ]
    ],
    "longQ": [
      [
        "Discuss the evolution and significance of Collective (Indigenous) Rights in international law.",
        "अंतर्राष्ट्रीय कानून में सामूहिक (स्वदेशी) अधिकारों के विकास और महत्व पर चर्चा करें।"
      ],
      [
        "Analyze the key provisions of the UN Declaration on the Rights of Indigenous Peoples (UNDRIP).",
        "स्वदेशी लोगों के अधिकारों पर संयुक्त राष्ट्र घोषणा (UNDRIP) के प्रमुख प्रावधानों का विश्लेषण करें।"
      ],
      [
        "\"The realization of indigenous rights often conflicts with state-led economic development.\" Critically evaluate this statement.",
        "\"स्वदेशी अधिकारों की प्राप्ति अक्सर राज्य के नेतृत्व वाले आर्थिक विकास से टकराती है।\" इस कथन का आलोचनात्मक मूल्यांकन करें।"
      ],
      [
        "Explain the importance of Free, Prior and Informed Consent (FPIC) in protecting indigenous territories.",
        "स्वदेशी क्षेत्रों की सुरक्षा में 'स्वतंत्र, पूर्व और सूचित सहमति' (FPIC) के महत्व की व्याख्या करें।"
      ],
      [
        "Can collective rights and individual rights coexist? Discuss the potential conflicts and resolutions.",
        "क्या सामूहिक अधिकार और व्यक्तिगत अधिकार सह-अस्तित्व में रह सकते हैं? संभावित संघर्षों और समाधानों पर चर्चा करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "Collective rights are often referred to as which generation of human rights?",
          "सामूहिक अधिकारों को अक्सर मानवाधिकारों की किस पीढ़ी के रूप में जाना जाता है?"
        ],
        "opts": [
          [
            "First Generation",
            "पहली पीढ़ी"
          ],
          [
            "Second Generation",
            "दूसरी पीढ़ी"
          ],
          [
            "Third Generation",
            "तीसरी पीढ़ी"
          ],
          [
            "Fourth Generation",
            "चौथी पीढ़ी"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "UNDRIP was adopted by the UN General Assembly in the year:",
          "UNDRIP को संयुक्त राष्ट्र महासभा द्वारा किस वर्ष अपनाया गया था?"
        ],
        "opts": [
          [
            "1948",
            "1948"
          ],
          [
            "1966",
            "1966"
          ],
          [
            "1993",
            "1993"
          ],
          [
            "2007",
            "2007"
          ]
        ],
        "correct": 3
      },
      {
        "q": [
          "FPIC stands for:",
          "FPIC का अर्थ है:"
        ],
        "opts": [
          [
            "Fair, Private and Independent Counsel",
            "Fair, Private and Independent Counsel"
          ],
          [
            "Free, Prior and Informed Consent",
            "Free, Prior and Informed Consent (स्वतंत्र, पूर्व और सूचित सहमति)"
          ],
          [
            "Fundamental Principles of Indigenous Cultures",
            "Fundamental Principles of Indigenous Cultures"
          ],
          [
            "Federal Protection of Indigenous Communities",
            "Federal Protection of Indigenous Communities"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "The most central issue for the survival of indigenous cultures globally is usually:",
          "विश्व स्तर पर स्वदेशी संस्कृतियों के अस्तित्व के लिए सबसे केंद्रीय मुद्दा आमतौर पर क्या है?"
        ],
        "opts": [
          [
            "Right to vote in national elections",
            "राष्ट्रीय चुनावों में मतदान का अधिकार"
          ],
          [
            "Control over traditional lands and territories",
            "पारंपरिक भूमि और क्षेत्रों पर नियंत्रण"
          ],
          [
            "Access to modern technology",
            "आधुनिक तकनीक तक पहुंच"
          ],
          [
            "Integration into urban societies",
            "शहरी समाजों में एकीकरण"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Collective rights focus primarily on the principle of:",
          "सामूहिक अधिकार मुख्य रूप से किस सिद्धांत पर केंद्रित हैं?"
        ],
        "opts": [
          [
            "Liberty",
            "स्वतंत्रता (Liberty)"
          ],
          [
            "Equality",
            "समानता (Equality)"
          ],
          [
            "Fraternity / Solidarity",
            "बंधुत्व / एकजुटता (Fraternity / Solidarity)"
          ],
          [
            "Individualism",
            "व्यक्तिवाद (Individualism)"
          ]
        ],
        "correct": 2
      }
    ],
    "ugcNotes": [
      "Focus on the key theories, thinkers, and books mentioned in this topic. Understand the historical evolution and major paradigms.",
      "इस विषय में उल्लिखित प्रमुख सिद्धांतों, विचारकों और पुस्तकों पर ध्यान दें। ऐतिहासिक विकास और प्रमुख प्रतिमानों को समझें।"
    ],
    "ugcQ": [
      [
        "Q: What is the main theme of this topic? A: See Core Concepts.",
        "प्र: इस विषय का मुख्य विषय क्या है? उ: मुख्य सिद्धांत देखें।"
      ],
      [
        "Q: Who are the key thinkers? A: Refer to the Quotes section.",
        "प्र: प्रमुख विचारक कौन हैं? उ: उद्धरण अनुभाग देखें।"
      ]
    ]
  },
  {
    "id": "t7",
    "num": 7,
    "title": [
      "Abuse and Violation of Human Rights",
      "मानवाधिकारों का दुरुपयोग और उल्लंघन"
    ],
    "introduction": [
      "Despite robust international and national legal frameworks, the abuse and violation of human rights remain pervasive global challenges. A human rights violation occurs when a state (or non-state actors, in some contexts) breaches its obligations to respect, protect, and fulfill the human rights of individuals or groups. These violations range from systemic discrimination and censorship to extreme atrocities like torture, ethnic cleansing, and genocide.",
      "मजबूत अंतर्राष्ट्रीय और राष्ट्रीय कानूनी ढांचे के बावजूद, मानवाधिकारों का दुरुपयोग और उल्लंघन (Abuse and violation of human rights) एक व्यापक वैश्विक चुनौती बनी हुई है। मानवाधिकार का उल्लंघन तब होता है जब कोई राज्य (या कुछ संदर्भों में गैर-राज्य अभिनेता) व्यक्तियों या समूहों के मानवाधिकारों का सम्मान करने, उनकी रक्षा करने और उन्हें पूरा करने के अपने दायित्वों का उल्लंघन करता है। ये उल्लंघन प्रणालीगत भेदभाव और सेंसरशिप से लेकर यातना, जातीय सफाई और नरसंहार जैसे चरम अत्याचारों तक होते हैं।"
    ],
    "concepts": [
      {
        "heading": [
          "State vs. Non-State Actors",
          "राज्य बनाम गैर-राज्य अभिनेता (State vs. Non-State Actors)"
        ],
        "body": [
          "Traditionally, human rights law holds states accountable for violations (e.g., police brutality). However, modern discourse increasingly recognizes abuses by non-state actors like multinational corporations, terrorist groups, and armed militias.",
          "परंपरागत रूप से, मानवाधिकार कानून उल्लंघनों (जैसे पुलिस बर्बरता) के लिए राज्यों को जवाबदेह ठहराता है। हालांकि, आधुनिक विमर्श बहुराष्ट्रीय निगमों, आतंकवादी समूहों और सशस्त्र मिलिशिया जैसे गैर-राज्य अभिनेताओं द्वारा किए गए दुर्व्यवहार को तेजी से पहचानता है।"
        ]
      },
      {
        "heading": [
          "Types of Violations",
          "उल्लंघन के प्रकार"
        ],
        "body": [
          "- Civil/Political: Arbitrary arrest, torture, suppression of free speech, rigged elections, extrajudicial killings.\n                - Economic/Social: Forced eviction, denial of access to education, systemic starvation, labor exploitation.",
          "- नागरिक/राजनीतिक: मनमानी गिरफ्तारी, यातना, स्वतंत्र भाषण का दमन, धांधली वाले चुनाव, गैर-न्यायिक हत्याएं।\n                - आर्थिक/सामाजिक: जबरन बेदखली, शिक्षा तक पहुंच से इनकार, प्रणालीगत भुखमरी, श्रम शोषण।"
        ]
      },
      {
        "heading": [
          "Structural Violence",
          "संरचनात्मक हिंसा (Structural Violence)"
        ],
        "body": [
          "Systemic ways in which social structures harm or otherwise disadvantage individuals, often resulting in widespread human rights abuses (e.g., systemic racism, caste-based discrimination, deep poverty).",
          "ऐसे प्रणालीगत तरीके जिनसे सामाजिक संरचनाएं व्यक्तियों को नुकसान पहुंचाती हैं या अन्यथा उन्हें नुकसान पहुंचाती हैं, जिसके परिणामस्वरूप अक्सर व्यापक मानवाधिकार उल्लंघन होते हैं (जैसे, प्रणालीगत नस्लवाद, जाति-आधारित भेदभाव, गहरी गरीबी)।"
        ]
      },
      {
        "heading": [
          "Impunity",
          "दंडमुक्ति (Impunity)"
        ],
        "body": [
          "The failure to bring perpetrators of human rights violations to justice. Impunity fuels a cycle of continued violence and abuse.",
          "मानवाधिकारों के उल्लंघन के अपराधियों को न्याय के कटघरे में लाने में विफलता। दंडमुक्ति निरंतर हिंसा और दुर्व्यवहार के चक्र को बढ़ावा देती है।"
        ]
      },
      {
        "heading": [
          "Vulnerable Groups",
          "कमजोर समूह (Vulnerable Groups)"
        ],
        "body": [
          "Violations disproportionately affect marginalized populations, including women, children, refugees, indigenous peoples, and religious/ethnic minorities.",
          "उल्लंघन महिलाओं, बच्चों, शरणार्थियों, स्वदेशी लोगों और धार्मिक/जातीय अल्पसंख्यकों सहित हाशिए की आबादी को असंगत रूप से प्रभावित करते हैं।"
        ]
      }
    ],
    "quotes": [
      [
        "Martin Luther King Jr.: \"Injustice anywhere is a threat to justice everywhere. We are caught in an inescapable network of mutuality, tied in a single garment of destiny.\"",
        "मार्टिन लूथर किंग जूनियर: \"कहीं भी अन्याय हर जगह न्याय के लिए खतरा है। हम पारस्परिकता के एक अपरिहार्य नेटवर्क में फंसे हुए हैं, भाग्य के एक ही परिधान में बंधे हैं।\""
      ]
    ],
    "evaluation": [
      "The global system for addressing human rights abuses is highly flawed. The UN Security Council, which has the power to intervene in severe cases (like genocide), is often paralyzed by the veto power of its permanent members (P5), leading to inaction in places like Syria or Myanmar when geopolitical interests conflict. Furthermore, international law struggles to hold powerful multinational corporations accountable for environmental destruction and labor abuses in developing countries. The rhetoric of 'human rights intervention' has also been criticized as a tool for neo-imperialism, used by powerful states to justify regime change in weaker nations.",
      "मानवाधिकारों के हनन को दूर करने की वैश्विक प्रणाली अत्यधिक त्रुटिपूर्ण है। संयुक्त राष्ट्र सुरक्षा परिषद, जिसके पास गंभीर मामलों (जैसे नरसंहार) में हस्तक्षेप करने की शक्ति है, अक्सर अपने स्थायी सदस्यों (P5) की वीटो शक्ति से पंगु हो जाती है, जिससे भू-राजनीतिक हितों के टकराव होने पर सीरिया या म्यांमार जैसी जगहों पर निष्क्रियता पैदा होती है। इसके अलावा, अंतर्राष्ट्रीय कानून विकासशील देशों में पर्यावरण विनाश और श्रम दुर्व्यवहार के लिए शक्तिशाली बहुराष्ट्रीय निगमों को जवाबदेह ठहराने के लिए संघर्ष करता है। 'मानवाधिकार हस्तक्षेप' की बयानबाजी की भी नव-साम्राज्यवाद (neo-imperialism) के एक उपकरण के रूप में आलोचना की गई है, जिसका उपयोग शक्तिशाली राज्यों द्वारा कमजोर राष्ट्रों में शासन परिवर्तन को सही ठहराने के लिए किया जाता है।"
    ],
    "conclusion": [
      "Addressing the abuse and violation of human rights requires moving beyond mere standard-setting to robust enforcement and accountability. Strengthening independent judiciaries, empowering civil society, ending impunity through mechanisms like the International Criminal Court (ICC), and democratizing international institutions are critical steps toward making human rights a reality rather than an unfulfilled promise.",
      "मानवाधिकारों के दुरुपयोग और उल्लंघन को संबोधित करने के लिए केवल मानक-निर्धारण से परे जाकर मजबूत प्रवर्तन और जवाबदेही की ओर बढ़ने की आवश्यकता है। स्वतंत्र न्यायपालिका को मजबूत करना, नागरिक समाज को सशक्त बनाना, अंतर्राष्ट्रीय आपराधिक न्यायालय (ICC) जैसे तंत्रों के माध्यम से दंडमुक्ति (impunity) को समाप्त करना और अंतर्राष्ट्रीय संस्थानों का लोकतंत्रीकरण करना मानवाधिकारों को एक अपूर्ण वादे के बजाय वास्तविकता बनाने की दिशा में महत्वपूर्ण कदम हैं।"
    ],
    "shortQ": [
      [
        "Define a human rights violation.",
        "मानवाधिकार उल्लंघन को परिभाषित करें।"
      ],
      [
        "Give two examples of economic/social rights violations.",
        "आर्थिक/सामाजिक अधिकारों के उल्लंघन के दो उदाहरण दें।"
      ],
      [
        "What is meant by 'structural violence'?",
        "'संरचनात्मक हिंसा' (structural violence) से क्या अभिप्राय है?"
      ],
      [
        "Explain the concept of 'impunity' in the context of human rights.",
        "मानवाधिकारों के संदर्भ में 'दंडमुक्ति' (impunity) की अवधारणा को समझाइए।"
      ],
      [
        "Why are non-state actors increasingly relevant in human rights discourse?",
        "मानवाधिकार विमर्श में गैर-राज्य अभिनेता (non-state actors) तेजी से प्रासंगिक क्यों हो रहे हैं?"
      ]
    ],
    "longQ": [
      [
        "Discuss the various forms of human rights abuses prevalent in the contemporary world.",
        "समकालीन विश्व में प्रचलित मानवाधिकारों के हनन के विभिन्न रूपों पर चर्चा करें।"
      ],
      [
        "Critically analyze the role of the UN Security Council in addressing gross violations of human rights.",
        "मानवाधिकारों के घोर उल्लंघनों को दूर करने में संयुक्त राष्ट्र सुरक्षा परिषद की भूमिका का आलोचनात्मक विश्लेषण करें।"
      ],
      [
        "Explain how structural violence leads to systemic human rights abuses, citing examples of vulnerable groups.",
        "कमजोर समूहों के उदाहरण देते हुए बताएं कि संरचनात्मक हिंसा किस प्रकार प्रणालीगत मानवाधिकार उल्लंघनों की ओर ले जाती है।"
      ],
      [
        "Evaluate the challenges in holding non-state actors (like multinational corporations) accountable for human rights violations.",
        "मानवाधिकार उल्लंघनों के लिए गैर-राज्य अभिनेताओं (जैसे बहुराष्ट्रीय निगमों) को जवाबदेह ठहराने की चुनौतियों का मूल्यांकन करें।"
      ],
      [
        "\"Impunity is the greatest obstacle to the protection of human rights.\" Discuss this statement with reference to international criminal justice.",
        "\"दंडमुक्ति मानवाधिकारों के संरक्षण में सबसे बड़ी बाधा है।\" अंतर्राष्ट्रीय आपराधिक न्याय के संदर्भ में इस कथन पर चर्चा करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "When a state fails to punish perpetrators of human rights abuses, it leads to a culture of:",
          "जब कोई राज्य मानवाधिकारों का हनन करने वालों को दंडित करने में विफल रहता है, तो यह किस संस्कृति को जन्म देता है?"
        ],
        "opts": [
          [
            "Accountability",
            "जवाबदेही (Accountability)"
          ],
          [
            "Impunity",
            "दंडमुक्ति (Impunity)"
          ],
          [
            "Immunity",
            "प्रतिरक्षा (Immunity)"
          ],
          [
            "Restorative justice",
            "पुनर्स्थापनात्मक न्याय (Restorative justice)"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which international body investigates and tries individuals charged with the gravest crimes like genocide and war crimes?",
          "कौन सा अंतर्राष्ट्रीय निकाय नरसंहार और युद्ध अपराधों जैसे सबसे गंभीर अपराधों के आरोपियों की जांच करता और उन पर मुकदमा चलाता है?"
        ],
        "opts": [
          [
            "International Court of Justice (ICJ)",
            "अंतर्राष्ट्रीय न्यायालय (ICJ)"
          ],
          [
            "UN Human Rights Council",
            "संयुक्त राष्ट्र मानवाधिकार परिषद"
          ],
          [
            "International Criminal Court (ICC)",
            "अंतर्राष्ट्रीय आपराधिक न्यायालय (ICC)"
          ],
          [
            "Amnesty International",
            "एमनेस्टी इंटरनेशनल"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "Systemic racism or caste-based discrimination resulting in poverty is best described as:",
          "प्रणालीगत नस्लवाद या जाति-आधारित भेदभाव जिसके परिणामस्वरूप गरीबी होती है, का सबसे अच्छा वर्णन इस प्रकार किया गया है:"
        ],
        "opts": [
          [
            "Direct physical violence",
            "प्रत्यक्ष शारीरिक हिंसा"
          ],
          [
            "Structural violence",
            "संरचनात्मक हिंसा (Structural violence)"
          ],
          [
            "Political persecution",
            "राजनीतिक उत्पीड़न"
          ],
          [
            "Derogation of rights",
            "अधिकारों का अल्पीकरण"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "The veto power that often paralyzes international intervention in human rights crises belongs to the permanent members of the:",
          "वीटो शक्ति जो अक्सर मानवाधिकार संकटों में अंतर्राष्ट्रीय हस्तक्षेप को पंगु बना देती है, किसके स्थायी सदस्यों के पास है:"
        ],
        "opts": [
          [
            "UN General Assembly",
            "संयुक्त राष्ट्र महासभा"
          ],
          [
            "UN Security Council",
            "संयुक्त राष्ट्र सुरक्षा परिषद"
          ],
          [
            "Economic and Social Council",
            "आर्थिक और सामाजिक परिषद"
          ],
          [
            "International Labour Organization",
            "अंतर्राष्ट्रीय श्रम संगठन"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Multinational corporations causing environmental destruction that harms indigenous populations is an example of abuse by:",
          "स्वदेशी आबादी को नुकसान पहुंचाने वाले पर्यावरण विनाश का कारण बनने वाले बहुराष्ट्रीय निगम किसके द्वारा किए गए दुर्व्यवहार का उदाहरण हैं:"
        ],
        "opts": [
          [
            "State actors",
            "राज्य अभिनेता"
          ],
          [
            "Non-state actors",
            "गैर-राज्य अभिनेता (Non-state actors)"
          ],
          [
            "Intergovernmental organizations",
            "अंतर-सरकारी संगठन"
          ],
          [
            "Armed rebel groups",
            "सशस्त्र विद्रोही समूह"
          ]
        ],
        "correct": 1
      }
    ],
    "ugcNotes": [
      "Focus on the key theories, thinkers, and books mentioned in this topic. Understand the historical evolution and major paradigms.",
      "इस विषय में उल्लिखित प्रमुख सिद्धांतों, विचारकों और पुस्तकों पर ध्यान दें। ऐतिहासिक विकास और प्रमुख प्रतिमानों को समझें।"
    ],
    "ugcQ": [
      [
        "Q: What is the main theme of this topic? A: See Core Concepts.",
        "प्र: इस विषय का मुख्य विषय क्या है? उ: मुख्य सिद्धांत देखें।"
      ],
      [
        "Q: Who are the key thinkers? A: Refer to the Quotes section.",
        "प्र: प्रमुख विचारक कौन हैं? उ: उद्धरण अनुभाग देखें।"
      ]
    ]
  },
  {
    "id": "t8",
    "num": 8,
    "title": [
      "National Human Rights Commission, India",
      "राष्ट्रीय मानवाधिकार आयोग, भारत"
    ],
    "introduction": [
      "The National Human Rights Commission (NHRC) of India is an independent statutory body established on October 12, 1993, under the Protection of Human Rights Act (PHRA), 1993. It was created in conformity with the 'Paris Principles' to serve as a watchdog for the protection and promotion of human rights in the country, complementing the role of the judiciary.",
      "भारत का राष्ट्रीय मानवाधिकार आयोग (National Human Rights Commission - NHRC) एक स्वतंत्र वैधानिक निकाय है जिसकी स्थापना 12 अक्टूबर, 1993 को मानवाधिकार संरक्षण अधिनियम (PHRA), 1993 के तहत की गई थी। न्यायपालिका की भूमिका के पूरक के रूप में देश में मानवाधिकारों के संरक्षण और संवर्धन के लिए एक प्रहरी के रूप में कार्य करने के लिए इसे 'पेरिस सिद्धांतों' (Paris Principles) के अनुरूप बनाया गया था।"
    ],
    "concepts": [
      {
        "heading": [
          "Composition",
          "संरचना"
        ],
        "body": [
          "A multi-member body consisting of a Chairperson (usually a retired Chief Justice of India or a Judge of the Supreme Court) and five other members. In addition, there are several ex-officio members (chairpersons of national commissions for SCs, STs, Women, Minorities, etc.).",
          "एक बहु-सदस्यीय निकाय जिसमें एक अध्यक्ष (आमतौर पर भारत के सेवानिवृत्त मुख्य न्यायाधीश या सर्वोच्च न्यायालय के न्यायाधीश) और पांच अन्य सदस्य होते हैं। इसके अलावा, कई पदेन सदस्य (अनुसूचित जाति, अनुसूचित जनजाति, महिला, अल्पसंख्यक आदि के लिए राष्ट्रीय आयोगों के अध्यक्ष) होते हैं।"
        ]
      },
      {
        "heading": [
          "Appointment",
          "नियुक्ति"
        ],
        "body": [
          "Appointed by the President of India on the recommendation of a high-powered committee headed by the Prime Minister.",
          "प्रधानमंत्री की अध्यक्षता वाली एक उच्चाधिकार प्राप्त समिति की सिफारिश पर भारत के राष्ट्रपति द्वारा नियुक्त किया जाता है।"
        ]
      },
      {
        "heading": [
          "Functions",
          "कार्य"
        ],
        "body": [
          "- Investigate grievances regarding the violation of human rights either suo moto (on its own) or after receiving a petition.\n                - Intervene in any proceeding involving any allegation of violation of human rights pending before a court.\n                - Visit jails to study the living conditions of inmates.\n                - Review constitutional safeguards and recommend measures for their effective implementation.\n                - Promote research and human rights literacy.",
          "- मानवाधिकारों के उल्लंघन के संबंध में शिकायतों की जांच करना (suo moto - स्वप्रेरणा से) या याचिका प्राप्त होने के बाद।\n                - किसी अदालत के समक्ष लंबित मानवाधिकारों के उल्लंघन के किसी भी आरोप से जुड़ी किसी भी कार्यवाही में हस्तक्षेप करना।\n                - कैदियों की रहने की स्थिति का अध्ययन करने के लिए जेलों का दौरा करना।\n                - संवैधानिक सुरक्षा उपायों की समीक्षा करना और उनके प्रभावी कार्यान्वयन के लिए उपायों की सिफारिश करना।\n                - अनुसंधान और मानवाधिकार साक्षरता को बढ़ावा देना।"
        ]
      },
      {
        "heading": [
          "Powers",
          "शक्तियां"
        ],
        "body": [
          "It possesses the powers of a civil court, including summoning witnesses, receiving evidence on affidavits, and requisitioning public records.",
          "इसके पास एक सिविल कोर्ट की शक्तियां हैं, जिसमें गवाहों को बुलाना, हलफनामों पर सबूत प्राप्त करना और सार्वजनिक रिकॉर्ड मांगना शामिल है।"
        ]
      }
    ],
    "quotes": [
      [
        "\"The NHRC is the conscience keeper of the nation, bridging the gap between constitutional promises and ground realities.\"",
        "\"NHRC राष्ट्र की अंतरात्मा का रक्षक है, जो संवैधानिक वादों और जमीनी हकीकत के बीच की खाई को पाटने का काम करता है।\""
      ]
    ],
    "evaluation": [
      "Despite its noble mandate, the NHRC is often criticized as a \"toothless tiger\". Its recommendations are merely advisory and not binding on the government. It lacks an independent investigative machinery and relies on state police to investigate abuses (often involving the police themselves). Furthermore, the NHRC cannot independently investigate violations committed by the Armed Forces; it can only seek reports from the central government. Delays in government responses and a massive backlog of cases further hinder its effectiveness.",
      "अपने महान जनादेश के बावजूद, NHRC की अक्सर \"बिना दांत वाले बाघ\" (toothless tiger) के रूप में आलोचना की जाती है। इसकी सिफारिशें केवल सलाहकार होती हैं और सरकार पर बाध्यकारी नहीं होती हैं। इसमें एक स्वतंत्र जांच तंत्र का अभाव है और यह दुर्व्यवहारों (अक्सर पुलिस स्वयं शामिल होती है) की जांच के लिए राज्य पुलिस पर निर्भर करता है। इसके अलावा, NHRC सशस्त्र बलों द्वारा किए गए उल्लंघनों की स्वतंत्र रूप से जांच नहीं कर सकता है; यह केवल केंद्र सरकार से रिपोर्ट मांग सकता है। सरकारी प्रतिक्रियाओं में देरी और मामलों का भारी बैकलॉग इसकी प्रभावशीलता में और बाधा डालता है।"
    ],
    "conclusion": [
      "The establishment of the NHRC was a landmark step in institutionalizing human rights protection in India. While it has successfully brought attention to issues like custodial deaths, encounter killings, and jail reforms, its structural limitations restrict its potential. Empowering the NHRC with binding authority and independent investigative machinery is essential for it to truly safeguard human rights in India.",
      "NHRC की स्थापना भारत में मानवाधिकार संरक्षण को संस्थागत बनाने में एक ऐतिहासिक कदम था। हालांकि इसने हिरासत में मौतों, मुठभेड़ में हत्याओं और जेल सुधारों जैसे मुद्दों पर सफलतापूर्वक ध्यान आकर्षित किया है, लेकिन इसकी संरचनात्मक सीमाएं इसकी क्षमता को सीमित करती हैं। NHRC को बाध्यकारी अधिकार और स्वतंत्र जांच तंत्र के साथ सशक्त बनाना भारत में मानवाधिकारों की सही मायने में रक्षा करने के लिए आवश्यक है।"
    ],
    "shortQ": [
      [
        "Under which act was the NHRC established?",
        "NHRC की स्थापना किस अधिनियम के तहत की गई थी?"
      ],
      [
        "Who appoints the Chairperson and members of the NHRC?",
        "NHRC के अध्यक्ष और सदस्यों की नियुक्ति कौन करता है?"
      ],
      [
        "Mention any two functions of the NHRC.",
        "NHRC के किन्हीं दो कार्यों का उल्लेख कीजिए।"
      ],
      [
        "Why is the NHRC sometimes called a \"toothless tiger\"?",
        "NHRC को कभी-कभी \"बिना दांत वाला बाघ\" क्यों कहा जाता है?"
      ],
      [
        "What power does the NHRC have regarding human rights violations by Armed Forces?",
        "सशस्त्र बलों द्वारा मानवाधिकारों के उल्लंघन के संबंध में NHRC के पास क्या शक्ति है?"
      ]
    ],
    "longQ": [
      [
        "Discuss the composition, appointment process, and functions of the National Human Rights Commission.",
        "राष्ट्रीय मानवाधिकार आयोग की संरचना, नियुक्ति प्रक्रिया और कार्यों पर चर्चा करें।"
      ],
      [
        "Critically evaluate the performance and limitations of the NHRC in protecting human rights in India.",
        "भारत में मानवाधिकारों की रक्षा करने में NHRC के प्रदर्शन और सीमाओं का आलोचनात्मक मूल्यांकन करें।"
      ],
      [
        "\"The NHRC is an advisory body, not a judicial authority.\" Analyze this statement with respect to its powers.",
        "\"NHRC एक सलाहकार निकाय है, न्यायिक प्राधिकरण नहीं।\" इसकी शक्तियों के संबंध में इस कथन का विश्लेषण करें।"
      ],
      [
        "Explain the role of the NHRC in addressing custodial violence and prison reforms.",
        "हिरासत में हिंसा और जेल सुधारों को संबोधित करने में NHRC की भूमिका की व्याख्या करें।"
      ],
      [
        "What reforms are necessary to make the NHRC a more effective institution?",
        "NHRC को अधिक प्रभावी संस्था बनाने के लिए किन सुधारों की आवश्यकता है?"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "The NHRC was established in the year:",
          "NHRC की स्थापना किस वर्ष हुई थी?"
        ],
        "opts": [
          [
            "1950",
            "1950"
          ],
          [
            "1989",
            "1989"
          ],
          [
            "1993",
            "1993"
          ],
          [
            "2005",
            "2005"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "The Chairperson of the NHRC should be a retired:",
          "NHRC का अध्यक्ष होना चाहिए एक सेवानिवृत्त:"
        ],
        "opts": [
          [
            "Prime Minister",
            "प्रधानमंत्री"
          ],
          [
            "Chief Justice of India or Judge of the Supreme Court",
            "भारत के मुख्य न्यायाधीश या सर्वोच्च न्यायालय के न्यायाधीश"
          ],
          [
            "Chief Election Commissioner",
            "मुख्य चुनाव आयुक्त"
          ],
          [
            "Attorney General of India",
            "भारत के महान्यायवादी"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "The committee that recommends the appointment of NHRC members is headed by the:",
          "NHRC सदस्यों की नियुक्ति की सिफारिश करने वाली समिति के प्रमुख होते हैं:"
        ],
        "opts": [
          [
            "President",
            "राष्ट्रपति"
          ],
          [
            "Chief Justice of India",
            "भारत के मुख्य न्यायाधीश"
          ],
          [
            "Prime Minister",
            "प्रधानमंत्री"
          ],
          [
            "Home Minister",
            "गृह मंत्री"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "Are the recommendations of the NHRC binding on the government?",
          "क्या NHRC की सिफारिशें सरकार पर बाध्यकारी हैं?"
        ],
        "opts": [
          [
            "Yes, always",
            "हाँ, हमेशा"
          ],
          [
            "No, they are only advisory",
            "नहीं, वे केवल सलाहकार हैं"
          ],
          [
            "Yes, if approved by the Supreme Court",
            "हाँ, यदि सर्वोच्च न्यायालय द्वारा अनुमोदित हो"
          ],
          [
            "Yes, if involving the Armed Forces",
            "हाँ, यदि सशस्त्र बल शामिल हों"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "During investigations, the NHRC has the powers of a:",
          "जांच के दौरान, NHRC के पास किसकी शक्तियां होती हैं?"
        ],
        "opts": [
          [
            "Civil Court",
            "सिविल कोर्ट (Civil Court)"
          ],
          [
            "Criminal Court",
            "आपराधिक न्यायालय"
          ],
          [
            "Supreme Court",
            "सर्वोच्च न्यायालय"
          ],
          [
            "Military Tribunal",
            "सैन्य न्यायाधिकरण"
          ]
        ],
        "correct": 0
      }
    ],
    "ugcNotes": [
      "Focus on the key theories, thinkers, and books mentioned in this topic. Understand the historical evolution and major paradigms.",
      "इस विषय में उल्लिखित प्रमुख सिद्धांतों, विचारकों और पुस्तकों पर ध्यान दें। ऐतिहासिक विकास और प्रमुख प्रतिमानों को समझें।"
    ],
    "ugcQ": [
      [
        "Q: What is the main theme of this topic? A: See Core Concepts.",
        "प्र: इस विषय का मुख्य विषय क्या है? उ: मुख्य सिद्धांत देखें।"
      ],
      [
        "Q: Who are the key thinkers? A: Refer to the Quotes section.",
        "प्र: प्रमुख विचारक कौन हैं? उ: उद्धरण अनुभाग देखें।"
      ]
    ]
  }
];

export default function DetailedNotesPage() {
  const { language } = useAppStore();
  const paperTitle = language === 'en' ? 'PSC-A-309: Human Rights' : 'PSC-A-309: मानवाधिकार';
  const t = (en: string, hi: string) => language === 'en' ? en : hi;
  const [expanded, setExpanded] = useState<Set<string>>(new Set(['t1']));
  const [showMCQAnswer, setShowMCQAnswer] = useState<Set<string>>(new Set());

  const toggle = (id: string) => setExpanded(prev => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });

  const toggleMCQ = (topicId: string, idx: number) => {
    const key = `${topicId}-${idx}`;
    setShowMCQAnswer(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/syllabus" className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {paperTitle}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t('PG Semester III — Detailed Bilingual Notes', 'PG सेमेस्टर III — विस्तृत द्विभाषी नोट्स')}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-5 text-white mb-8">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">{t('Paper Code: PSC-A-309', 'पेपर कोड: PSC-A-309')}</span>
          </div>
          <p className="text-sm text-white/80">
            {t('5 Credits | 60 Lectures + 15 Tutorials | Full Marks: 100 (End Sem: 70 + Internal: 30) | 8 Topics', '5 क्रेडिट | 60 लेक्चर + 15 ट्यूटोरियल | पूर्णांक: 100 (सेमेस्टर: 70 + आंतरिक: 30) | 8 विषय')}
          </p>
        </div>

        <div className="space-y-6">
          {NOTES.map((topic) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
            >
              {/* Topic Header */}
              <button
                onClick={() => toggle(topic.id)}
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-850 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {topic.num}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold text-gray-900 dark:text-white text-base md:text-lg text-justify">
                    {t(topic.title[0], topic.title[1])}
                  </h2>
                  <span className="text-xs text-gray-400">
                    {t('5-part structure | MCQs | UGC NET Prep', '5-भाग संरचना | MCQ | UGC NET तैयारी')}
                  </span>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${expanded.has(topic.id) ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {expanded.has(topic.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-gray-100 dark:border-gray-800"
                  >
                    <div className="p-5 space-y-6">

                      {/* 1. INTRODUCTION */}
                      <section>
                        <h3 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-xs">1</span>
                          {t('INTRODUCTION', 'परिचय')}
                        </h3>
                        <p className="text-base text-justify text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                          {t(topic.introduction[0], topic.introduction[1])}
                        </p>
                      </section>

                      {/* 2. CORE CONCEPTS */}
                      <section>
                        <h3 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-xs">2</span>
                          {t('CORE CONCEPTS', 'मुख्य सिद्धांत')}
                        </h3>
                        {topic.concepts.map((c, i) => (
                          <div key={i} className="mb-4 last:mb-0">
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                              {t(c.heading[0], c.heading[1])}
                            </h4>
                            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-sm leading-relaxed whitespace-pre-line text-gray-700 dark:text-gray-300">
                              {t(c.body[0], c.body[1])}
                            </div>
                          </div>
                        ))}
                      </section>

                      {/* 3. SCHOLARLY QUOTES */}
                      <section>
                        <h3 className="text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-xs">3</span>
                          {t('SCHOLARLY QUOTES & BOOK REFERENCES', 'विद्वत उद्धरण और पुस्तक संदर्भ')}
                        </h3>
                        <div className="space-y-2">
                          {topic.quotes.map((q, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/20">
                              <Quote className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                              <p className="text-sm text-purple-900 dark:text-purple-200 italic">
                                {t(q[0], q[1])}
                              </p>
                            </div>
                          ))}
                        </div>
                      </section>

                      {/* 4. CRITICAL EVALUATION */}
                      <section>
                        <h3 className="text-sm font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-xs">4</span>
                          {t('CRITICAL EVALUATION', 'आलोचनात्मक मूल्यांकन')}
                        </h3>
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/20">
                          <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
                            {t(topic.evaluation[0], topic.evaluation[1])}
                          </p>
                        </div>
                      </section>

                      {/* 5. CONCLUSION */}
                      <section>
                        <h3 className="text-sm font-bold text-green-600 dark:text-green-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-xs">5</span>
                          {t('CONCLUSION', 'निष्कर्ष')}
                        </h3>
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-800/20">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-green-900 dark:text-green-200 leading-relaxed">
                            {t(topic.conclusion[0], topic.conclusion[1])}
                          </p>
                        </div>
                      </section>

                      {/* REVISION BOOSTER */}
                      <section className="border-2 border-dashed border-orange-300 dark:border-orange-700 rounded-2xl p-5">
                        <h3 className="text-sm font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4" />
                          {t('REVISION BOOSTER', 'रिवीजन बूस्टर')}
                        </h3>

                        {/* Short Answer Questions */}
                        <div className="mb-4">
                          <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-2">
                            {t('Expected Short-Answer Questions (5)', 'अपेक्षित लघु-उत्तरीय प्रश्न (5)')}
                          </h4>
                          <ol className="list-decimal list-inside space-y-1">
                            {topic.shortQ.map((q, i) => (
                              <li key={i} className="text-base text-justify text-gray-700 dark:text-gray-300">{t(q[0], q[1])}</li>
                            ))}
                          </ol>
                        </div>

                        {/* Long Answer Questions */}
                        <div className="mb-4">
                          <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-2">
                            {t('Expected Long-Answer Questions (5)', 'अपेक्षित दीर्घ-उत्तरीय प्रश्न (5)')}
                          </h4>
                          <ol className="list-decimal list-inside space-y-1">
                            {topic.longQ.map((q, i) => (
                              <li key={i} className="text-base text-justify text-gray-700 dark:text-gray-300">{t(q[0], q[1])}</li>
                            ))}
                          </ol>
                        </div>

                        {/* MCQs */}
                        <div>
                          <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-2">
                            {t('Multiple Choice Questions (5)', 'बहुविकल्पीय प्रश्न (5)')}
                          </h4>
                          <div className="space-y-2">
                            {topic.mcqs.map((mcq, i) => {
                              const key = `${topic.id}-${i}`;
                              const revealed = showMCQAnswer.has(key);
                              return (
                                <div key={i} className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                                  <p className="text-base font-medium text-gray-900 dark:text-white mb-2">
                                    Q{i + 1}. {t(mcq.q[0], mcq.q[1])}
                                  </p>
                                  <div className="grid grid-cols-2 gap-1 mb-2">
                                    {mcq.opts.map((opt, j) => (
                                      <span key={j} className={`text-xs px-2 py-1 rounded ${j === mcq.correct && revealed ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-semibold' : 'text-gray-600 dark:text-gray-400'}`}>
                                        {String.fromCharCode(65 + j)}. {t(opt[0], opt[1])}
                                      </span>
                                    ))}
                                  </div>
                                  <button
                                    onClick={() => toggleMCQ(topic.id, i)}
                                    className="text-xs text-primary-600 dark:text-primary-400 hover:underline"
                                  >
                                    {revealed ? t('Hide Answer', 'उत्तर छुपाएं') : t('Show Answer', 'उत्तर देखें')}
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </section>

                      {/* UGC NET/JRF PREP */}
                      <section className="rounded-2xl p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 border border-indigo-100 dark:border-indigo-800/20">
                        <h3 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <GraduationCap className="w-4 h-4" />
                          {t('UGC NET/JRF PREPARATION', 'UGC NET/JRF तैयारी')}
                        </h3>
                        <div className="p-4 rounded-xl bg-white/60 dark:bg-gray-900/50 mb-3">
                          <p className="text-base text-justify text-indigo-900 dark:text-indigo-200 leading-relaxed whitespace-pre-line">
                            {t(topic.ugcNotes[0], topic.ugcNotes[1])}
                          </p>
                        </div>
                        <h4 className="text-xs font-bold text-indigo-500 uppercase mb-2 flex items-center gap-1.5">
                          <ClipboardList className="w-3.5 h-3.5" />
                          {t('Quick Revision Q&A', 'त्वरित रिवीजन प्रश्नोत्तर')}
                        </h4>
                        <div className="space-y-1.5">
                          {topic.ugcQ.map((q, i) => (
                            <div key={i} className="text-xs text-indigo-800 dark:text-indigo-300 p-2 rounded-lg bg-white/40 dark:bg-gray-900/30">
                              {t(q[0], q[1])}
                            </div>
                          ))}
                        </div>
                      </section>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t('All 8 Topics Complete! Full PSC-A-309 notes with 5-part structure, MCQs & UGC NET Prep ready.', 'सभी 8 विषय पूर्ण! 5-भाग संरचना, MCQ और UGC NET तैयारी के साथ संपूर्ण PSC-A-309 नोट्स तैयार।')}
          </p>
        </div>
      </div>
    </div>
  );
}
