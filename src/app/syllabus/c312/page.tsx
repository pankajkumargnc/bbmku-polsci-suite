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
      "Understanding Contemporary Political Issues",
      "समकालीन राजनीतिक मुद्दों को समझना"
    ],
    "introduction": [
      "Political Science is not a static discipline; it must continuously evolve to address the pressing challenges of the modern world. \"Contemporary Political Issues\" refers to the complex, often global, problems that dominate current political discourse. These issues transcend traditional national boundaries and require a multidisciplinary approach, challenging traditional notions of state sovereignty, security, and governance.",
      "राजनीति विज्ञान एक स्थिर विषय नहीं है; आधुनिक दुनिया की गंभीर चुनौतियों का समाधान करने के लिए इसे लगातार विकसित होना चाहिए। \"समकालीन राजनीतिक मुद्दे\" (Contemporary Political Issues) उन जटिल, अक्सर वैश्विक, समस्याओं को संदर्भित करते हैं जो वर्तमान राजनीतिक विमर्श पर हावी हैं। ये मुद्दे पारंपरिक राष्ट्रीय सीमाओं को पार करते हैं और एक बहु-विषयक दृष्टिकोण की आवश्यकता होती है, जो राज्य संप्रभुता, सुरक्षा और शासन की पारंपरिक धारणाओं को चुनौती देते हैं।"
    ],
    "concepts": [
      {
        "heading": [
          "Nature of Contemporary Issues",
          "समकालीन मुद्दों की प्रकृति (Nature of Contemporary Issues)"
        ],
        "body": [
          "- Globalized: Issues like climate change or terrorism cannot be solved by one nation acting alone.\n                - Intersectional: An economic issue (neo-liberalism) is often tied to an environmental issue (resource depletion) and a social issue (inequality).\n                - Fluid: They change rapidly with technological advancements (e.g., cyber-security, AI in politics).",
          "- वैश्वीकृत (Globalized): जलवायु परिवर्तन या आतंकवाद जैसे मुद्दों को अकेले काम करने वाला कोई एक राष्ट्र हल नहीं कर सकता है।\n                - प्रतिच्छेदी (Intersectional): एक आर्थिक मुद्दा (नव-उदारवाद) अक्सर एक पर्यावरणीय मुद्दे (संसाधन की कमी) और एक सामाजिक मुद्दे (असमानता) से जुड़ा होता है।\n                - तरल (Fluid): वे तकनीकी प्रगति (जैसे, साइबर-सुरक्षा, राजनीति में AI) के साथ तेजी से बदलते हैं।"
        ]
      },
      {
        "heading": [
          "Shift from 'High Politics' to 'Low Politics'",
          "'उच्च राजनीति' से 'निम्न राजनीति' की ओर बदलाव (Shift from 'High Politics' to 'Low Politics')"
        ],
        "body": [
          "- Traditional politics focused heavily on 'High Politics' (war, peace, statecraft, diplomacy).\n                - Contemporary issues often elevate 'Low Politics' (environment, gender equality, human rights, economic welfare) to the top of the global agenda.",
          "- पारंपरिक राजनीति 'उच्च राजनीति' (High Politics - युद्ध, शांति, शासन कला, कूटनीति) पर बहुत अधिक केंद्रित थी।\n                - समकालीन मुद्दे अक्सर 'निम्न राजनीति' (Low Politics - पर्यावरण, लैंगिक समानता, मानवाधिकार, आर्थिक कल्याण) को वैश्विक एजेंडे के शीर्ष पर ले जाते हैं।"
        ]
      },
      {
        "heading": [
          "The Role of Non-State Actors",
          "गैर-राज्य अभिनेताओं की भूमिका (The Role of Non-State Actors)"
        ],
        "body": [
          "Contemporary issues are increasingly shaped by non-state actors such as Multinational Corporations (MNCs), Non-Governmental Organizations (NGOs like Greenpeace or Amnesty International), and even transnational terrorist networks.",
          "समकालीन मुद्दे तेजी से बहुराष्ट्रीय निगमों (MNCs), गैर-सरकारी संगठनों (NGOs जैसे ग्रीनपीस या एमनेस्टी इंटरनेशनल), और यहां तक कि अंतरराष्ट्रीय आतंकवादी नेटवर्क जैसे गैर-राज्य अभिनेताओं द्वारा आकार ले रहे हैं।"
        ]
      }
    ],
    "quotes": [
      [
        "\"The defining characteristic of contemporary political issues is their refusal to respect the sovereign borders of the nation-state.\"",
        "\"समकालीन राजनीतिक मुद्दों की परिभाषित विशेषता राष्ट्र-राज्य की संप्रभु सीमाओं का सम्मान करने से उनका इनकार है।\""
      ]
    ],
    "evaluation": [
      "Understanding contemporary issues exposes the limitations of the traditional Westphalian state system (which is based on absolute territorial sovereignty). The state is often too small to solve global problems (like global warming) and too big to solve local problems (like minority identity crises). This creates a 'governance gap'. However, critics of globalization argue that framing everything as a 'global issue' often allows powerful Western nations and international bodies (IMF, World Bank) to dictate policies to developing nations, compromising their economic sovereignty.",
      "समकालीन मुद्दों को समझना पारंपरिक वेस्टफेलियन राज्य प्रणाली (Westphalian state system - जो पूर्ण क्षेत्रीय संप्रभुता पर आधारित है) की सीमाओं को उजागर करता है। राज्य अक्सर वैश्विक समस्याओं (जैसे ग्लोबल वार्मिंग) को हल करने के लिए बहुत छोटा होता है और स्थानीय समस्याओं (जैसे अल्पसंख्यक पहचान संकट) को हल करने के लिए बहुत बड़ा होता है। यह एक 'शासन अंतर' (governance gap) पैदा करता है। हालांकि, वैश्वीकरण के आलोचकों का तर्क है कि हर चीज को 'वैश्विक मुद्दे' के रूप में तैयार करने से अक्सर शक्तिशाली पश्चिमी देशों और अंतरराष्ट्रीय निकायों (IMF, विश्व बैंक) को विकासशील देशों पर नीतियां थोपने की अनुमति मिलती है, जिससे उनकी आर्थिक संप्रभुता से समझौता होता है。"
    ],
    "conclusion": [
      "To study contemporary political issues is to study the survival and future of humanity. It requires a shift from a purely state-centric view of politics to a more holistic, global, and human-centric perspective.",
      "समकालीन राजनीतिक मुद्दों का अध्ययन करना मानवता के अस्तित्व और भविष्य का अध्ययन करना है। इसके लिए राजनीति के विशुद्ध रूप से राज्य-केंद्रित दृष्टिकोण से अधिक समग्र, वैश्विक और मानव-केंद्रित परिप्रेक्ष्य में बदलाव की आवश्यकता है।"
    ],
    "shortQ": [
      [
        "What are 'Contemporary Political Issues'?",
        "'समकालीन राजनीतिक मुद्दे' क्या हैं?"
      ],
      [
        "Differentiate between 'High Politics' and 'Low Politics'.",
        "'उच्च राजनीति' (High Politics) और 'निम्न राजनीति' (Low Politics) के बीच अंतर स्पष्ट करें।"
      ],
      [
        "Give two examples of Non-State Actors.",
        "गैर-राज्य अभिनेताओं (Non-State Actors) के दो उदाहरण दीजिए।"
      ],
      [
        "Why are contemporary issues considered 'globalized'?",
        "समकालीन मुद्दों को 'वैश्वीकृत' (globalized) क्यों माना जाता है?"
      ],
      [
        "Name the author of the book \"Global Politics\".",
        "\"Global Politics\" पुस्तक के लेखक का नाम बताइए।"
      ]
    ],
    "longQ": [
      [
        "Discuss the nature and scope of Contemporary Political Issues.",
        "समकालीन राजनीतिक मुद्दों की प्रकृति और कार्यक्षेत्र पर चर्चा करें।"
      ],
      [
        "Explain the shift from 'High Politics' to 'Low Politics' in the contemporary era.",
        "समकालीन युग में 'उच्च राजनीति' से 'निम्न राजनीति' में बदलाव की व्याख्या करें।"
      ],
      [
        "\"The traditional nation-state is ill-equipped to handle contemporary global issues.\" Critically evaluate this statement.",
        "\"पारंपरिक राष्ट्र-राज्य समकालीन वैश्विक मुद्दों को संभालने के लिए सुसज्जित नहीं है।\" इस कथन का आलोचनात्मक मूल्यांकन करें।"
      ],
      [
        "Analyze the role of Non-State Actors in shaping contemporary political discourse.",
        "समकालीन राजनीतिक विमर्श को आकार देने में गैर-राज्य अभिनेताओं की भूमिका का विश्लेषण करें।"
      ],
      [
        "How does globalization impact the sovereignty of developing nations in resolving contemporary issues?",
        "वैश्वीकरण समकालीन मुद्दों को हल करने में विकासशील देशों की संप्रभुता को कैसे प्रभावित करता है?"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "In international relations, issues like war, diplomacy, and national security are traditionally categorized as:",
          "अंतरराष्ट्रीय संबंधों में, युद्ध, कूटनीति और राष्ट्रीय सुरक्षा जैसे मुद्दों को पारंपरिक रूप से किस रूप में वर्गीकृत किया जाता है:"
        ],
        "opts": [
          [
            "High Politics",
            "उच्च राजनीति (High Politics)"
          ],
          [
            "Low Politics",
            "निम्न राजनीति (Low Politics)"
          ],
          [
            "Soft Power",
            "सॉफ्ट पावर (Soft Power)"
          ],
          [
            "Domestic Politics",
            "घरेलू राजनीति"
          ]
        ],
        "correct": 0
      },
      {
        "q": [
          "Which of the following is NOT an example of a Non-State Actor?",
          "निम्नलिखित में से कौन गैर-राज्य अभिनेता (Non-State Actor) का उदाहरण नहीं है?"
        ],
        "opts": [
          [
            "Amnesty International",
            "एमनेस्टी इंटरनेशनल"
          ],
          [
            "Apple Inc. (MNC)",
            "Apple Inc. (MNC)"
          ],
          [
            "Al-Qaeda",
            "अल-कायदा"
          ],
          [
            "The Government of India",
            "भारत सरकार"
          ]
        ],
        "correct": 3
      },
      {
        "q": [
          "The traditional system of international relations based on absolute territorial sovereignty is known as the:",
          "पूर्ण क्षेत्रीय संप्रभुता पर आधारित अंतरराष्ट्रीय संबंधों की पारंपरिक प्रणाली को किस रूप में जाना जाता है:"
        ],
        "opts": [
          [
            "Versailles System",
            "वर्साय प्रणाली"
          ],
          [
            "Westphalian System",
            "वेस्टफेलियन प्रणाली (Westphalian System)"
          ],
          [
            "Bretton Woods System",
            "ब्रेटन वुड्स प्रणाली"
          ],
          [
            "Washington Consensus",
            "वाशिंगटन सर्वसम्मति"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Issues like environmental degradation and gender equality fall under the category of:",
          "पर्यावरण क्षरण और लैंगिक समानता जैसे मुद्दे किस श्रेणी में आते हैं:"
        ],
        "opts": [
          [
            "High Politics",
            "उच्च राजनीति"
          ],
          [
            "Low Politics",
            "निम्न राजनीति (Low Politics)"
          ],
          [
            "Hard Power",
            "हार्ड पावर"
          ],
          [
            "Geopolitics",
            "भू-राजनीति (Geopolitics)"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "A key characteristic of contemporary political issues is that they are:",
          "समकालीन राजनीतिक मुद्दों की एक प्रमुख विशेषता यह है कि वे हैं:"
        ],
        "opts": [
          [
            "Strictly confined within national borders",
            "राष्ट्रीय सीमाओं के भीतर सख्ती से सीमित"
          ],
          [
            "Easily resolved by military force",
            "सैन्य बल द्वारा आसानी से हल"
          ],
          [
            "Transnational and intersectional",
            "अंतरराष्ट्रीय (Transnational) और प्रतिच्छेदी (intersectional)"
          ],
          [
            "Irrelevant to domestic politics",
            "घरेलू राजनीति के लिए अप्रासंगिक"
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
    "id": "t2",
    "num": 2,
    "title": [
      "Democracy",
      "लोकतंत्र"
    ],
    "introduction": [
      "Democracy, literally meaning \"rule by the people\" (from Greek demos and kratos), has become the universally accepted ideal of legitimate governance in the contemporary world. However, the contemporary debate is no longer about whether democracy is good, but about what kind of democracy we have, and why so many democracies are currently facing crises, backsliding into authoritarianism, or failing to deliver socio-economic justice.",
      "लोकतंत्र, जिसका शाब्दिक अर्थ है \"लोगों का शासन\" (ग्रीक शब्द demos और kratos से), समकालीन दुनिया में वैध शासन का सर्वमान्य आदर्श बन गया है। हालांकि, समकालीन बहस अब इस बारे में नहीं है कि क्या लोकतंत्र अच्छा है, बल्कि इस बारे में है कि हमारे पास किस तरह का लोकतंत्र है, और क्यों इतने सारे लोकतंत्र वर्तमान में संकटों का सामना कर रहे हैं, सत्तावाद (authoritarianism) की ओर वापस जा रहे हैं, या सामाजिक-आर्थिक न्याय प्रदान करने में विफल हो रहे हैं।"
    ],
    "concepts": [
      {
        "heading": [
          "Models of Democracy",
          "लोकतंत्र के मॉडल (Models of Democracy)"
        ],
        "body": [
          "- Representative (Procedural) Democracy: The most common form today. Citizens elect leaders who make decisions on their behalf. It focuses on procedures: free elections, universal suffrage, and civil liberties (e.g., USA, India).\n                - Participatory (Substantive) Democracy: Argues that merely voting every five years is insufficient. It demands active citizen involvement in decision-making at the grassroots level (e.g., Gram Sabhas in India, referendums in Switzerland) and focuses on the substance of democracy: achieving economic and social equality.\n                - Deliberative Democracy: Emphasizes rational discussion and debate among citizens before decision-making, rather than just majority voting.",
          "- प्रतिनिधि (प्रक्रियात्मक) लोकतंत्र (Representative Democracy): आज का सबसे आम रूप। नागरिक ऐसे नेताओं का चुनाव करते हैं जो उनकी ओर से निर्णय लेते हैं। यह प्रक्रियाओं पर केंद्रित है: स्वतंत्र चुनाव, सार्वभौमिक मताधिकार और नागरिक स्वतंत्रता (जैसे, अमेरिका, भारत)।\n                - सहभागी (मूलभूत) लोकतंत्र (Participatory Democracy): यह तर्क देता है कि हर पांच साल में केवल मतदान करना अपर्याप्त है। यह जमीनी स्तर पर निर्णय लेने में सक्रिय नागरिक भागीदारी की मांग करता है (जैसे, भारत में ग्राम सभाएं, स्विट्जरलैंड में जनमत संग्रह) और लोकतंत्र के सार (substance) पर ध्यान केंद्रित करता है: आर्थिक और सामाजिक समानता प्राप्त करना।\n                - विमर्शात्मक लोकतंत्र (Deliberative Democracy): केवल बहुमत से मतदान के बजाय निर्णय लेने से पहले नागरिकों के बीच तर्कसंगत चर्चा और बहस पर जोर देता है।"
        ]
      },
      {
        "heading": [
          "Contemporary Challenges to Democracy",
          "लोकतंत्र के लिए समकालीन चुनौतियां"
        ],
        "body": [
          "- Democratic Backsliding/Illiberal Democracy: Elected leaders using legal means to dismantle democratic institutions, muzzle the press, and weaken the judiciary (e.g., recent trends in Hungary, Turkey, and debates in India).\n                - Populism: Leaders claiming to represent the 'pure people' against a 'corrupt elite', often undermining minority rights and democratic norms.\n                - Inequality: Severe economic inequality allows the wealthy elite to capture the democratic process (Plutocracy), making the idea of \"one person, one value\" a myth.",
          "- लोकतांत्रिक पतन / अनुदार लोकतंत्र (Democratic Backsliding / Illiberal Democracy): निर्वाचित नेता लोकतांत्रिक संस्थाओं को खत्म करने, प्रेस का मुंह बंद करने और न्यायपालिका को कमजोर करने के लिए कानूनी साधनों का उपयोग करते हैं (जैसे, हंगरी, तुर्की में हालिया रुझान और भारत में बहस)।\n                - लोकलुभावनवाद (Populism): एक 'भ्रष्ट कुलीन वर्ग' के खिलाफ 'शुद्ध लोगों' का प्रतिनिधित्व करने का दावा करने वाले नेता, अक्सर अल्पसंख्यक अधिकारों और लोकतांत्रिक मानदंडों को कमजोर करते हैं।\n                - असमानता (Inequality): गंभीर आर्थिक असमानता अमीर अभिजात वर्ग को लोकतांत्रिक प्रक्रिया (प्लेटोक्रेसी) पर कब्जा करने की अनुमति देती है, जिससे \"एक व्यक्ति, एक मूल्य\" का विचार एक मिथक बन जाता है।"
        ]
      }
    ],
    "quotes": [
      [
        "Dr. B.R. Ambedkar: \"Political democracy cannot last unless there lies at the base of it social democracy.\"",
        "डॉ. बी. आर. अम्बेडकर: \"राजनीतिक लोकतंत्र तब तक नहीं टिक सकता जब तक कि इसके आधार में सामाजिक लोकतंत्र न हो।\""
      ]
    ],
    "evaluation": [
      "Marxist scholars heavily critique liberal representative democracy, terming it a \"bourgeois democracy.\" They argue that political equality (the right to vote) is meaningless without economic equality; the capitalists inevitably control the politicians. From a contemporary perspective, the rise of \"Illiberal Democracies\" (a term coined by Fareed Zakaria) is the greatest threat. These regimes conduct elections and claim popular mandates but systematically strip away the liberal pillars of democracy—freedom of speech, rule of law, and protection of minorities.",
      "मार्क्सवादी विद्वान उदारवादी प्रतिनिधि लोकतंत्र की कड़ी आलोचना करते हैं, इसे \"बुर्जुआ लोकतंत्र\" (bourgeois democracy) करार देते हैं। उनका तर्क है कि राजनीतिक समानता (वोट का अधिकार) आर्थिक समानता के बिना अर्थहीन है; पूंजीपति अनिवार्य रूप से राजनेताओं को नियंत्रित करते हैं। समकालीन दृष्टिकोण से, \"अनुदार लोकतंत्रों\" (Illiberal Democracies - फरीद जकारिया द्वारा गढ़ा गया शब्द) का उदय सबसे बड़ा खतरा है। ये शासन चुनाव कराते हैं और लोकप्रिय जनादेश का दावा करते हैं, लेकिन लोकतंत्र के उदार स्तंभों—बोलने की स्वतंत्रता, कानून का शासन और अल्पसंख्यकों की सुरक्षा—को व्यवस्थित रूप से छीन लेते हैं।"
    ],
    "conclusion": [
      "Democracy is a continuous project, not a final destination. The contemporary challenge is to move from merely procedural democracy (holding elections) to substantive democracy, where the focus is on active participation, safeguarding liberal institutions from populist attacks, and ensuring that political equality translates into socio-economic justice.",
      "लोकतंत्र एक सतत परियोजना है, कोई अंतिम गंतव्य नहीं। समकालीन चुनौती केवल प्रक्रियात्मक लोकतंत्र (चुनाव कराने) से आगे बढ़कर वास्तविक लोकतंत्र (substantive democracy) की ओर बढ़ने की है, जहां ध्यान सक्रिय भागीदारी, लोकलुभावन हमलों से उदारवादी संस्थानों की रक्षा करने और यह सुनिश्चित करने पर है कि राजनीतिक समानता सामाजिक-आर्थिक न्याय में तब्दील हो।"
    ],
    "shortQ": [
      [
        "What is the literal meaning of the word 'Democracy'?",
        "'लोकतंत्र' (Democracy) शब्द का शाब्दिक अर्थ क्या है?"
      ],
      [
        "Differentiate between procedural and substantive democracy.",
        "प्रक्रियात्मक (procedural) और मूलभूत (substantive) लोकतंत्र के बीच अंतर स्पष्ट करें।"
      ],
      [
        "What is an 'Illiberal Democracy'?",
        "'अनुदार लोकतंत्र' (Illiberal Democracy) क्या है?"
      ],
      [
        "Define Deliberative Democracy.",
        "विमर्शात्मक लोकतंत्र (Deliberative Democracy) को परिभाषित करें।"
      ],
      [
        "Who authored the book \"How Democracies Die\"?",
        "\"How Democracies Die\" पुस्तक किसने लिखी है?"
      ]
    ],
    "longQ": [
      [
        "Discuss the various models of democracy (Representative, Participatory, Deliberative).",
        "लोकतंत्र के विभिन्न मॉडलों (प्रतिनिधि, सहभागी, विमर्शात्मक) पर चर्चा करें।"
      ],
      [
        "Critically examine the contemporary challenges faced by democratic systems worldwide.",
        "दुनिया भर में लोकतांत्रिक प्रणालियों द्वारा सामना की जाने वाली समकालीन चुनौतियों का आलोचनात्मक परीक्षण करें।"
      ],
      [
        "\"Political democracy is meaningless without social and economic democracy.\" Discuss this statement with reference to Dr. B.R. Ambedkar's views.",
        "\"सामाजिक और आर्थिक लोकतंत्र के बिना राजनीतिक लोकतंत्र अर्थहीन है।\" डॉ. बी. आर. अम्बेडकर के विचारों के संदर्भ में इस कथन पर चर्चा करें।"
      ],
      [
        "Explain the concept of 'Democratic Backsliding' with contemporary examples.",
        "समकालीन उदाहरणों के साथ 'लोकतांत्रिक पतन' (Democratic Backsliding) की अवधारणा की व्याख्या करें।"
      ],
      [
        "Analyze the Marxist critique of liberal representative democracy.",
        "उदारवादी प्रतिनिधि लोकतंत्र की मार्क्सवादी आलोचना का विश्लेषण करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "The term \"Illiberal Democracy\", describing a system that has elections but lacks civil liberties, was coined by:",
          "\"अनुदार लोकतंत्र\" (Illiberal Democracy) शब्द, जो एक ऐसी प्रणाली का वर्णन करता है जिसमें चुनाव होते हैं लेकिन नागरिक स्वतंत्रता का अभाव होता है, किसके द्वारा गढ़ा गया था:"
        ],
        "opts": [
          [
            "Samuel Huntington",
            "सैमुअल हंटिंगटन"
          ],
          [
            "Fareed Zakaria",
            "फरीद जकारिया"
          ],
          [
            "Robert Dahl",
            "रॉबर्ट डाहल"
          ],
          [
            "David Held",
            "डेविड हेल्ड"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "A model of democracy that emphasizes active citizen involvement and grassroots decision-making is called:",
          "लोकतंत्र का एक मॉडल जो सक्रिय नागरिक भागीदारी और जमीनी स्तर पर निर्णय लेने पर जोर देता है, कहलाता है:"
        ],
        "opts": [
          [
            "Representative Democracy",
            "प्रतिनिधि लोकतंत्र"
          ],
          [
            "Participatory Democracy",
            "सहभागी लोकतंत्र (Participatory Democracy)"
          ],
          [
            "Elitist Democracy",
            "अभिजात्य लोकतंत्र"
          ],
          [
            "Pluralist Democracy",
            "बहुलवादी लोकतंत्र"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Who among the following argued that \"Political democracy cannot last unless there lies at the base of it social democracy\"?",
          "निम्नलिखित में से किसने तर्क दिया कि \"राजनीतिक लोकतंत्र तब तक नहीं टिक सकता जब तक कि उसके मूल में सामाजिक लोकतंत्र न हो\"?"
        ],
        "opts": [
          [
            "Mahatma Gandhi",
            "महात्मा गांधी"
          ],
          [
            "Jawaharlal Nehru",
            "जवाहरलाल नेहरू"
          ],
          [
            "Dr. B.R. Ambedkar",
            "डॉ. बी. आर. अम्बेडकर"
          ],
          [
            "Karl Marx",
            "कार्ल मार्क्स"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "The contemporary phenomenon where elected leaders use legal, constitutional means to slowly dismantle democratic checks and balances is known as:",
          "वह समकालीन घटना जहां निर्वाचित नेता लोकतांत्रिक नियंत्रण और संतुलन को धीरे-धीरे खत्म करने के लिए कानूनी, संवैधानिक साधनों का उपयोग करते हैं, जानी जाती है:"
        ],
        "opts": [
          [
            "Military Coup",
            "सैन्य तख्तापलट"
          ],
          [
            "Democratic Backsliding",
            "लोकतांत्रिक पतन (Democratic Backsliding)"
          ],
          [
            "Democratic Consolidation",
            "लोकतांत्रिक समेकन"
          ],
          [
            "Revolution",
            "क्रांति"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which book by Steven Levitsky and Daniel Ziblatt analyzes how modern democracies are undermined from within by elected autocrats?",
          "स्टीवन लेवित्स्की और डैनियल जिब्लाट की कौन सी पुस्तक यह विश्लेषण करती है कि निर्वाचित निरंकुशों द्वारा आधुनिक लोकतंत्रों को भीतर से कैसे कमजोर किया जाता है?"
        ],
        "opts": [
          [
            "Models of Democracy",
            "Models of Democracy"
          ],
          [
            "How Democracies Die",
            "How Democracies Die"
          ],
          [
            "The End of History",
            "The End of History"
          ],
          [
            "Clash of Civilizations",
            "Clash of Civilizations"
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
    "id": "t3",
    "num": 3,
    "title": [
      "Terrorism and Global Security",
      "आतंकवाद और वैश्विक सुरक्षा"
    ],
    "introduction": [
      "Since the September 11 attacks (9/11) in 2001, Terrorism has moved to the absolute center of international relations and global security. Unlike conventional warfare between state armies, contemporary terrorism is an asymmetric, transnational phenomenon. It is defined as the systematic use of violence and intimidation against non-combatants (civilians) to achieve political, religious, or ideological goals.",
      "2001 में 11 सितंबर (9/11) के हमलों के बाद से, आतंकवाद (Terrorism) अंतरराष्ट्रीय संबंधों और वैश्विक सुरक्षा के पूर्ण केंद्र में आ गया है। राज्य की सेनाओं के बीच पारंपरिक युद्ध के विपरीत, समकालीन आतंकवाद एक असममित (asymmetric), पारराष्ट्रीय घटना है। इसे राजनीतिक, धार्मिक या वैचारिक लक्ष्यों को प्राप्त करने के लिए गैर-लड़ाकों (नागरिकों) के खिलाफ हिंसा और धमकी के व्यवस्थित उपयोग के रूप में परिभाषित किया गया है।"
    ],
    "concepts": [
      {
        "heading": [
          "Nature of Contemporary Terrorism",
          "समकालीन आतंकवाद की प्रकृति"
        ],
        "body": [
          "- Transnational: Modern terrorist groups (like Al-Qaeda or ISIS) operate across borders, utilizing global financial networks and the internet for recruitment and radicalization.\n                - Asymmetric Warfare: A weaker non-state actor fighting a vastly superior state power. They use surprise, shock value, and psychological terror rather than direct military confrontation.\n                - State-Sponsored Terrorism: When a sovereign state secretly funds, trains, and uses terrorist groups as a tool of its foreign policy against rival nations (e.g., Pakistan's use of LeT against India).",
          "- पारराष्ट्रीय (Transnational): आधुनिक आतंकवादी समूह (जैसे अल-कायदा या ISIS) सीमाओं के पार काम करते हैं, भर्ती और कट्टरपंथ के लिए वैश्विक वित्तीय नेटवर्क और इंटरनेट का उपयोग करते हैं।\n                - असममित युद्ध (Asymmetric Warfare): एक कमजोर गैर-राज्य अभिनेता (non-state actor) एक बहुत बेहतर राज्य शक्ति से लड़ रहा है। वे सीधे सैन्य टकराव के बजाय आश्चर्य, आघात (shock value) और मनोवैज्ञानिक आतंक का उपयोग करते हैं।\n                - राज्य-प्रायोजित आतंकवाद (State-Sponsored Terrorism): जब एक संप्रभु राज्य गुप्त रूप से धन देता है, प्रशिक्षण देता है, और प्रतिद्वंद्वी राष्ट्रों के खिलाफ अपनी विदेश नीति के एक उपकरण के रूप में आतंकवादी समूहों का उपयोग करता है (जैसे, भारत के खिलाफ पाकिस्तान द्वारा LeT का उपयोग)।"
        ]
      },
      {
        "heading": [
          "Impact on Global Security",
          "वैश्विक सुरक्षा पर प्रभाव"
        ],
        "body": [
          "- It has redefined the concept of security. Security is no longer just about guarding borders against foreign armies; it is about internal surveillance, intelligence gathering, and cyber-security.\n                - The \"Global War on Terror\" (GWOT) launched by the USA led to invasions (Afghanistan, Iraq), fundamentally altering the geopolitical landscape of the Middle East and causing immense civilian casualties.",
          "- इसने सुरक्षा की अवधारणा को फिर से परिभाषित किया है। सुरक्षा अब केवल विदेशी सेनाओं से सीमाओं की रक्षा करने के बारे में नहीं है; यह आंतरिक निगरानी, खुफिया जानकारी जुटाने और साइबर सुरक्षा के बारे में है।\n                - अमेरिका द्वारा शुरू किए गए \"ग्लोबल वार ऑन टेरर\" (GWOT) के कारण आक्रमण (अफगानिस्तान, इराक) हुए, जिसने मौलिक रूप से मध्य पूर्व के भू-राजनीतिक परिदृश्य को बदल दिया और भारी नागरिक हताहत हुए।"
        ]
      },
      {
        "heading": [
          "The Human Rights Dilemma",
          "मानवाधिकार दुविधा (The Human Rights Dilemma)"
        ],
        "body": [
          "Counter-terrorism laws (like the USA PATRIOT Act or India's UAPA) often expand state power at the cost of civil liberties. The debate is how to balance the need for national security with the protection of fundamental human rights.",
          "आतंकवाद विरोधी कानून (जैसे USA पैट्रियट एक्ट या भारत का UAPA) अक्सर नागरिक स्वतंत्रता की कीमत पर राज्य की शक्ति का विस्तार करते हैं। बहस यह है कि राष्ट्रीय सुरक्षा की आवश्यकता को मौलिक मानवाधिकारों की रक्षा के साथ कैसे संतुलित किया जाए।"
        ]
      }
    ],
    "quotes": [
      [
        "\"One man's terrorist is another man's freedom fighter.\" (Highlighting the subjective and highly politicized nature of defining terrorism)",
        "\"एक आदमी का आतंकवादी दूसरे आदमी का स्वतंत्रता सेनानी होता है।\" (आतंकवाद को परिभाषित करने की व्यक्तिपरक और अत्यधिक राजनीतिक प्रकृति को उजागर करना)"
      ]
    ],
    "evaluation": [
      "The global response to terrorism has been heavily criticized. Critical theorists argue that the \"War on Terror\" has been used as a pretext by powerful Western nations for neo-imperial interventions and securing oil interests. Furthermore, purely military solutions have proven largely ineffective in eradicating terrorism (as seen in the return of the Taliban in Afghanistan). A lasting solution requires addressing the root causes: political alienation, foreign occupation, extreme poverty, and the ideological radicalization that breeds terrorists.",
      "आतंकवाद के प्रति वैश्विक प्रतिक्रिया की कड़ी आलोचना की गई है। आलोचनात्मक सिद्धांतकारों का तर्क है कि शक्तिशाली पश्चिमी देशों द्वारा नव-साम्राज्यवादी हस्तक्षेप (neo-imperial interventions) और तेल हितों को सुरक्षित करने के लिए \"वार ऑन टेरर\" का उपयोग एक बहाने के रूप में किया गया है। इसके अलावा, विशुद्ध रूप से सैन्य समाधान आतंकवाद को खत्म करने में काफी हद तक अप्रभावी साबित हुए हैं (जैसा कि अफगानिस्तान में तालिबान की वापसी में देखा गया है)। एक स्थायी समाधान के लिए मूल कारणों को संबोधित करने की आवश्यकता है: राजनीतिक अलगाव, विदेशी कब्जे, अत्यधिक गरीबी, और वैचारिक कट्टरपंथ जो आतंकवादियों को पैदा करता है।"
    ],
    "conclusion": [
      "Terrorism remains the most unpredictable threat to global security. Defeating it requires not just military and intelligence cooperation among states, but a genuine global effort to resolve long-standing political conflicts and promote inclusive economic development.",
      "आतंकवाद वैश्विक सुरक्षा के लिए सबसे अप्रत्याशित खतरा बना हुआ है। इसे हराने के लिए न केवल राज्यों के बीच सैन्य और खुफिया सहयोग की आवश्यकता है, बल्कि लंबे समय से चले आ रहे राजनीतिक संघर्षों को सुलझाने और समावेशी आर्थिक विकास को बढ़ावा देने के लिए एक वास्तविक वैश्विक प्रयास की भी आवश्यकता है।"
    ],
    "shortQ": [
      [
        "Define Terrorism.",
        "आतंकवाद को परिभाषित करें।"
      ],
      [
        "What is meant by 'Asymmetric Warfare'?",
        "'असममित युद्ध' (Asymmetric Warfare) से क्या तात्पर्य है?"
      ],
      [
        "What is State-Sponsored Terrorism? Give an example.",
        "राज्य-प्रायोजित आतंकवाद (State-Sponsored Terrorism) क्या है? एक उदाहरण दें।"
      ],
      [
        "How has terrorism changed the traditional concept of national security?",
        "आतंकवाद ने राष्ट्रीय सुरक्षा की पारंपरिक अवधारणा को कैसे बदल दिया है?"
      ],
      [
        "Mention one major dilemma between counter-terrorism and human rights.",
        "आतंकवाद का मुकाबला करने और मानवाधिकारों के बीच एक बड़ी दुविधा का उल्लेख करें।"
      ]
    ],
    "longQ": [
      [
        "Discuss the nature and characteristics of contemporary global terrorism.",
        "समकालीन वैश्विक आतंकवाद की प्रकृति और विशेषताओं पर चर्चा करें।"
      ],
      [
        "Critically analyze the impact of the \"Global War on Terror\" on international relations and global security.",
        "अंतरराष्ट्रीय संबंधों और वैश्विक सुरक्षा पर \"ग्लोबल वार ऑन टेरर\" के प्रभाव का आलोचनात्मक विश्लेषण करें।"
      ],
      [
        "\"Terrorism cannot be defeated by military means alone.\" Evaluate this statement by discussing the root causes of terrorism.",
        "\"आतंकवाद को केवल सैन्य साधनों से नहीं हराया जा सकता है।\" आतंकवाद के मूल कारणों पर चर्चा करके इस कथन का मूल्यांकन करें।"
      ],
      [
        "Explain the concept of State-Sponsored Terrorism and its implications for regional security in South Asia.",
        "राज्य-प्रायोजित आतंकवाद की अवधारणा और दक्षिण एशिया में क्षेत्रीय सुरक्षा के लिए इसके निहितार्थ की व्याख्या करें।"
      ],
      [
        "Discuss the tension between implementing stringent anti-terror laws and protecting civil liberties in a democracy.",
        "लोकतंत्र में कड़े आतंकवाद विरोधी कानूनों को लागू करने और नागरिक स्वतंत्रता की रक्षा के बीच तनाव पर चर्चा करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "When a weaker non-state actor uses unconventional tactics like terrorism against a vastly superior state military, it is termed as:",
          "जब एक कमजोर गैर-राज्य अभिनेता बहुत बेहतर राज्य सेना के खिलाफ आतंकवाद जैसी अपरंपरागत रणनीति का उपयोग करता है, तो उसे क्या कहा जाता है:"
        ],
        "opts": [
          [
            "Conventional warfare",
            "पारंपरिक युद्ध"
          ],
          [
            "Asymmetric warfare",
            "असममित युद्ध (Asymmetric warfare)"
          ],
          [
            "Cold War",
            "शीत युद्ध"
          ],
          [
            "Total War",
            "संपूर्ण युद्ध"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which major event fundamentally shifted the focus of global security towards countering transnational terrorism?",
          "किस प्रमुख घटना ने मौलिक रूप से वैश्विक सुरक्षा का ध्यान पारराष्ट्रीय आतंकवाद का मुकाबला करने की ओर स्थानांतरित कर दिया?"
        ],
        "opts": [
          [
            "The Fall of the Berlin Wall (1989)",
            "बर्लिन की दीवार का गिरना (1989)"
          ],
          [
            "The 9/11 Attacks (2001)",
            "9/11 के हमले (2001)"
          ],
          [
            "The Cuban Missile Crisis",
            "क्यूबा मिसाइल संकट"
          ],
          [
            "The 2008 Financial Crisis",
            "2008 का वित्तीय संकट"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "The book \"Inside Terrorism\", a seminal work on the subject, was written by:",
          "विषय पर एक मौलिक कार्य, पुस्तक \"Inside Terrorism\", किसके द्वारा लिखी गई थी:"
        ],
        "opts": [
          [
            "Samuel Huntington",
            "सैमुअल हंटिंगटन"
          ],
          [
            "Bruce Hoffman",
            "ब्रूस हॉफमैन (Bruce Hoffman)"
          ],
          [
            "Walter Laqueur",
            "वाल्टर लक्वेर"
          ],
          [
            "Joseph Nye",
            "जोसेफ न्ये"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "The practice of a sovereign government secretly funding and training terrorist groups to attack a rival country is known as:",
          "एक प्रतिद्वंद्वी देश पर हमला करने के लिए एक संप्रभु सरकार द्वारा गुप्त रूप से आतंकवादी समूहों को वित्त पोषण और प्रशिक्षण देने की प्रथा को किस रूप में जाना जाता है:"
        ],
        "opts": [
          [
            "Cyber terrorism",
            "साइबर आतंकवाद"
          ],
          [
            "State-sponsored terrorism",
            "राज्य-प्रायोजित आतंकवाद (State-sponsored terrorism)"
          ],
          [
            "Eco-terrorism",
            "इको-आतंकवाद"
          ],
          [
            "Domestic terrorism",
            "घरेलू आतंकवाद"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "A major criticism of stringent counter-terrorism laws (like the Patriot Act or UAPA) in democratic countries is that they often:",
          "लोकतांत्रिक देशों में कड़े आतंकवाद विरोधी कानूनों (जैसे पैट्रियट एक्ट या UAPA) की एक बड़ी आलोचना यह है कि वे अक्सर:"
        ],
        "opts": [
          [
            "Are too weak to stop terrorists",
            "आतंकवादियों को रोकने के लिए बहुत कमजोर हैं"
          ],
          [
            "Infringe upon fundamental civil liberties and human rights",
            "मौलिक नागरिक स्वतंत्रता और मानवाधिकारों का उल्लंघन करते हैं"
          ],
          [
            "Reduce the defense budget",
            "रक्षा बजट कम करते हैं"
          ],
          [
            "Promote international trade",
            "अंतर्राष्ट्रीय व्यापार को बढ़ावा देते हैं"
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
      "Feminism",
      "नारीवाद"
    ],
    "introduction": [
      "Feminism is a diverse collection of social theories, political movements, and moral philosophies that share a common goal: to define, establish, and achieve political, economic, personal, and social equality of sexes. It challenges the historical dominance of men in society (patriarchy) and seeks to dismantle the structural inequalities that oppress women. In political science, feminism transformed the discipline by arguing that \"the personal is political.\"",
      "नारीवाद (Feminism) सामाजिक सिद्धांतों, राजनीतिक आंदोलनों और नैतिक दर्शन का एक विविध संग्रह है जो एक सामान्य लक्ष्य साझा करते हैं: लिंगों (sexes) की राजनीतिक, आर्थिक, व्यक्तिगत और सामाजिक समानता को परिभाषित करना, स्थापित करना और प्राप्त करना। यह समाज में पुरुषों के ऐतिहासिक प्रभुत्व (पितृसत्ता - patriarchy) को चुनौती देता है और महिलाओं पर अत्याचार करने वाली संरचनात्मक असमानताओं को खत्म करना चाहता है। राजनीति विज्ञान में, नारीवाद ने यह तर्क देकर विषय को बदल दिया कि \"व्यक्तिगत ही राजनीतिक है\" (the personal is political)।"
    ],
    "concepts": [
      {
        "heading": [
          "Patriarchy",
          "पितृसत्ता (Patriarchy)"
        ],
        "body": [
          "The central concept of feminism. It is a social system in which men hold primary power, predominate in roles of political leadership, moral authority, social privilege, and control of property.",
          "नारीवाद की केंद्रीय अवधारणा। यह एक ऐसी सामाजिक व्यवस्था है जिसमें पुरुषों के पास प्राथमिक सत्ता होती है, राजनीतिक नेतृत्व, नैतिक अधिकार, सामाजिक विशेषाधिकार और संपत्ति के नियंत्रण की भूमिकाओं में उनकी प्रधानता होती है।"
        ]
      },
      {
        "heading": [
          "Waves of Feminism",
          "नारीवाद की लहरें (Waves of Feminism)"
        ],
        "body": [
          "- First Wave (19th - early 20th century): Focused on legal inequalities, primarily gaining women's suffrage (the right to vote) and property rights. (Key figure: Mary Wollstonecraft).\n                - Second Wave (1960s - 1980s): Broadened the debate to include the workplace, sexuality, family, and reproductive rights. Slogan: \"The personal is political.\" (Key figures: Betty Friedan, Simone de Beauvoir).\n                - Third Wave (1990s onwards): Emphasized 'Intersectionality'—the idea that women experience oppression differently based on race, class, and ethnicity (e.g., a Dalit woman's experience is different from a white middle-class woman's).",
          "- पहली लहर (19वीं - 20वीं सदी की शुरुआत): कानूनी असमानताओं पर केंद्रित, मुख्य रूप से महिलाओं का मताधिकार (वोट देने का अधिकार) और संपत्ति के अधिकार प्राप्त करना। (प्रमुख हस्ती: मैरी वोलस्टोनक्राफ्ट)।\n                - दूसरी लहर (1960 - 1980 का दशक): कार्यस्थल, कामुकता, परिवार और प्रजनन अधिकारों को शामिल करने के लिए बहस को व्यापक बनाया। नारा: \"व्यक्तिगत ही राजनीतिक है।\" (प्रमुख हस्तियां: बेट्टी फ्रीडन, सिमोन डी ब्यूवोयर)।\n                - तीसरी लहर (1990 के दशक से): 'प्रतिच्छेदन' (Intersectionality) पर जोर दिया—यह विचार कि महिलाएं जाति, वर्ग और जातीयता के आधार पर उत्पीड़न का अलग-अलग अनुभव करती हैं (उदाहरण के लिए, एक दलित महिला का अनुभव एक श्वेत मध्यम वर्गीय महिला से अलग होता है)।"
        ]
      },
      {
        "heading": [
          "Schools of Feminist Thought",
          "नारीवादी विचार के स्कूल (Schools of Feminist Thought)"
        ],
        "body": [
          "- Liberal Feminism: Seeks equality through legal and political reform within the existing democratic system (equal pay, anti-discrimination laws).\n                - Radical Feminism: Believes society is fundamentally patriarchal. True equality requires the total overthrow of the patriarchal system, not just legal tweaks.\n                - Marxist/Socialist Feminism: Argues that capitalism and patriarchy work together to oppress women. Women are exploited as unpaid labor at home, which sustains the capitalist workforce.",
          "- उदारवादी नारीवाद (Liberal Feminism): मौजूदा लोकतांत्रिक व्यवस्था के भीतर कानूनी और राजनीतिक सुधार (समान वेतन, भेदभाव विरोधी कानून) के माध्यम से समानता चाहता है।\n                - कट्टरपंथी नारीवाद (Radical Feminism): मानता है कि समाज मौलिक रूप से पितृसत्तात्मक है। सच्ची समानता के लिए केवल कानूनी बदलाव ही नहीं, बल्कि पितृसत्तात्मक व्यवस्था को पूरी तरह से उखाड़ फेंकने की आवश्यकता है।\n                - मार्क्सवादी/समाजवादी नारीवाद (Marxist/Socialist Feminism): तर्क देता है कि पूंजीवाद और पितृसत्ता महिलाओं पर अत्याचार करने के लिए मिलकर काम करते हैं। महिलाओं का घर पर अवैतनिक श्रम के रूप में शोषण किया जाता है, जो पूंजीवादी कार्यबल को बनाए रखता है।"
        ]
      }
    ],
    "quotes": [
      [
        "Simone de Beauvoir (Highlighting the difference between biological sex and socially constructed gender): \"One is not born, but rather becomes, a woman.\"",
        "सिमोन डी ब्यूवोयर (जैविक लिंग (sex) और सामाजिक रूप से निर्मित जेंडर के बीच के अंतर को उजागर करते हुए): \"कोई महिला पैदा नहीं होती, बल्कि वह बन जाती है।\""
      ]
    ],
    "evaluation": [
      "Feminism has successfully forced political science to look beyond the state and the public sphere, bringing issues like domestic violence and reproductive rights into mainstream political debate. However, mainstream (liberal) feminism has often been criticized for being too focused on the concerns of white, middle-class, Western women. Post-colonial and Dalit feminists argue that Western feminist frameworks fail to capture the severe, multi-layered discrimination faced by women in the Global South, where caste, extreme poverty, and colonial legacies intersect with patriarchy.",
      "नारीवाद ने राजनीति विज्ञान को राज्य और सार्वजनिक क्षेत्र से परे देखने के लिए सफलतापूर्वक मजबूर किया है, घरेलू हिंसा और प्रजनन अधिकारों जैसे मुद्दों को मुख्यधारा की राजनीतिक बहस में लाया है। हालांकि, मुख्यधारा (उदारवादी) नारीवाद की अक्सर श्वेत, मध्यम वर्गीय, पश्चिमी महिलाओं की चिंताओं पर बहुत अधिक ध्यान केंद्रित करने के लिए आलोचना की गई है। उत्तर-औपनिवेशिक और दलित नारीवादियों का तर्क है कि पश्चिमी नारीवादी ढांचे ग्लोबल साउथ में महिलाओं द्वारा सामना किए जाने वाले गंभीर, बहुस्तरीय भेदभाव को पकड़ने में विफल रहते हैं, जहां जाति, अत्यधिक गरीबी और औपनिवेशिक विरासत पितृसत्ता के साथ प्रतिच्छेद (intersect) करते हैं।"
    ],
    "conclusion": [
      "Feminism is not merely about women's rights; it is a fundamental critique of how power is distributed in society. By striving to eliminate gender-based hierarchies, feminism aims to create a truly egalitarian society where human potential is not restricted by socially constructed gender roles.",
      "नारीवाद केवल महिलाओं के अधिकारों के बारे में नहीं है; यह समाज में शक्ति कैसे वितरित की जाती है, इसकी एक मौलिक आलोचना है। लिंग-आधारित पदानुक्रमों (gender-based hierarchies) को खत्म करने का प्रयास करके, नारीवाद का उद्देश्य एक वास्तविक समतावादी समाज का निर्माण करना है जहां मानव क्षमता सामाजिक रूप से निर्मित जेंडर भूमिकाओं द्वारा प्रतिबंधित न हो।"
    ],
    "shortQ": [
      [
        "Define Patriarchy.",
        "पितृसत्ता (Patriarchy) को परिभाषित करें।"
      ],
      [
        "What was the primary goal of the First Wave of Feminism?",
        "नारीवाद की पहली लहर का प्राथमिक लक्ष्य क्या था?"
      ],
      [
        "What does the slogan \"The personal is political\" mean?",
        "\"व्यक्तिगत ही राजनीतिक है\" (The personal is political) नारे का क्या अर्थ है?"
      ],
      [
        "Explain the concept of 'Intersectionality' in feminism.",
        "नारीवाद में 'प्रतिच्छेदन' (Intersectionality) की अवधारणा की व्याख्या करें।"
      ],
      [
        "Name the author of \"The Second Sex\".",
        "\"The Second Sex\" पुस्तक के लेखक का नाम बताइए।"
      ]
    ],
    "longQ": [
      [
        "Discuss the evolution of Feminism through its various 'waves'.",
        "नारीवाद की विभिन्न 'लहरों' के माध्यम से इसके विकास पर चर्चा करें।"
      ],
      [
        "Compare and contrast Liberal Feminism with Radical Feminism.",
        "उदारवादी नारीवाद (Liberal Feminism) और कट्टरपंथी नारीवाद (Radical Feminism) की तुलना करें।"
      ],
      [
        "Explain the Marxist/Socialist feminist perspective on the oppression of women.",
        "महिलाओं के उत्पीड़न पर मार्क्सवादी/समाजवादी नारीवादी दृष्टिकोण की व्याख्या करें।"
      ],
      [
        "\"One is not born, but rather becomes, a woman.\" Elaborate on this statement by Simone de Beauvoir.",
        "\"कोई महिला पैदा नहीं होती, बल्कि बन जाती है।\" सिमोन डी ब्यूवोयर के इस कथन का विस्तार करें।"
      ],
      [
        "Critically analyze the relevance of intersectional feminism in the context of developing countries like India.",
        "भारत जैसे विकासशील देशों के संदर्भ में 'प्रतिच्छेदी नारीवाद' (intersectional feminism) की प्रासंगिकता का आलोचनात्मक विश्लेषण करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "The foundational feminist text \"A Vindication of the Rights of Woman\" (1792) was written by:",
          "मूलभूत नारीवादी पाठ \"A Vindication of the Rights of Woman\" (1792) किसके द्वारा लिखा गया था:"
        ],
        "opts": [
          [
            "Betty Friedan",
            "बेट्टी फ्रीडन"
          ],
          [
            "Simone de Beauvoir",
            "सिमोन डी ब्यूवोयर"
          ],
          [
            "Mary Wollstonecraft",
            "मैरी वोलस्टोनक्राफ्ट"
          ],
          [
            "Judith Butler",
            "जूडिथ बटलर"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "Which wave of feminism is most closely associated with the fight for women's suffrage (the right to vote)?",
          "नारीवाद की कौन सी लहर महिलाओं के मताधिकार (वोट देने के अधिकार) की लड़ाई से सबसे अधिक निकटता से जुड़ी है?"
        ],
        "opts": [
          [
            "First Wave",
            "पहली लहर (First Wave)"
          ],
          [
            "Second Wave",
            "दूसरी लहर"
          ],
          [
            "Third Wave",
            "तीसरी लहर"
          ],
          [
            "Fourth Wave",
            "चौथी लहर"
          ]
        ],
        "correct": 0
      },
      {
        "q": [
          "The concept that women experience oppression in varying configurations and in varying degrees of intensity due to the overlap of gender with race, class, and caste is known as:",
          "यह अवधारणा कि जाति, वर्ग और लिंग के ओवरलैप के कारण महिलाएं अलग-अलग विन्यासों में और अलग-अलग तीव्रता के उत्पीड़न का अनुभव करती हैं, कहलाती है:"
        ],
        "opts": [
          [
            "Patriarchy",
            "पितृसत्ता"
          ],
          [
            "Androcentrism",
            "एंड्रोसेंट्रिज़्म"
          ],
          [
            "Intersectionality",
            "प्रतिच्छेदन (Intersectionality)"
          ],
          [
            "Radicalism",
            "कट्टरपंथ (Radicalism)"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "Which school of feminist thought argues that the capitalist economic system is fundamentally tied to the patriarchal oppression of women through unpaid domestic labor?",
          "नारीवादी विचार का कौन सा स्कूल यह तर्क देता है कि पूंजीवादी आर्थिक व्यवस्था मुख्य रूप से अवैतनिक घरेलू श्रम के माध्यम से महिलाओं के पितृसत्तात्मक उत्पीड़न से जुड़ी है?"
        ],
        "opts": [
          [
            "Liberal Feminism",
            "उदारवादी नारीवाद"
          ],
          [
            "Marxist/Socialist Feminism",
            "मार्क्सवादी/समाजवादी नारीवाद"
          ],
          [
            "Eco-Feminism",
            "इको-नारीवाद"
          ],
          [
            "Post-modern Feminism",
            "उत्तर-आधुनिक नारीवाद"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "The famous slogan \"The personal is political\" emerged during which wave of the feminist movement?",
          "प्रसिद्ध नारा \"व्यक्तिगत ही राजनीतिक है\" (The personal is political) नारीवादी आंदोलन की किस लहर के दौरान उभरा?"
        ],
        "opts": [
          [
            "First Wave",
            "पहली लहर"
          ],
          [
            "Second Wave",
            "दूसरी लहर (Second Wave)"
          ],
          [
            "Third Wave",
            "तीसरी लहर"
          ],
          [
            "Pre-feminist era",
            "नारीवाद-पूर्व युग"
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
    "id": "t5",
    "num": 5,
    "title": [
      "Neo-Liberalism",
      "नव-उदारवाद"
    ],
    "introduction": [
      "Neo-liberalism is the dominant political and economic ideology of the contemporary globalized world. Emerging in the late 1970s and 1980s (championed by Margaret Thatcher in the UK and Ronald Reagan in the USA), it marked a sharp reversal from the post-WWII consensus of the 'Welfare State'. Neo-liberalism advocates for free-market capitalism, minimizing state intervention in the economy, and maximizing the role of the private sector.",
      "नव-उदारवाद (Neo-liberalism) समकालीन वैश्वीकृत दुनिया की प्रमुख राजनीतिक और आर्थिक विचारधारा है। 1970 और 1980 के दशक के उत्तरार्ध में उभरते हुए (यूके में मार्गरेट थैचर और यूएसए में रोनाल्ड रीगन द्वारा समर्थित), इसने 'कल्याणकारी राज्य' (Welfare State) की द्वितीय विश्व युद्ध के बाद की सर्वसम्मति से एक तीव्र उलटफेर को चिह्नित किया। नव-उदारवाद मुक्त-बाजार पूंजीवाद की वकालत करता है, अर्थव्यवस्था में राज्य के हस्तक्षेप को कम करता है, और निजी क्षेत्र की भूमिका को अधिकतम करता है।"
    ],
    "concepts": [
      {
        "heading": [
          "The Core Belief",
          "मुख्य विश्वास (The Core Belief)"
        ],
        "body": [
          "The fundamental premise of neo-liberalism is that the free market is the most efficient allocator of resources. State interference (regulations, high taxes) only creates inefficiencies and stifles individual liberty and economic growth.",
          "नव-उदारवाद का मूल आधार यह है कि मुक्त बाजार (free market) संसाधनों का सबसे कुशल आवंटक है। राज्य का हस्तक्षेप (नियमन, उच्च कर) केवल अक्षमताएं पैदा करता है और व्यक्तिगत स्वतंत्रता और आर्थिक विकास को रोकता है।"
        ]
      },
      {
        "heading": [
          "Key Policies (The Washington Consensus)",
          "प्रमुख नीतियां (वाशिंगटन सर्वसम्मति - The Washington Consensus)"
        ],
        "body": [
          "- Privatization: Selling off state-owned enterprises (railways, telecom, public utilities) to private companies.\n                - Deregulation: Removing government rules that restrict business operations, especially in the financial and environmental sectors.\n                - Liberalization/Free Trade: Removing tariffs and barriers to international trade and foreign direct investment (FDI).\n                - Austerity: Cutting government spending, particularly on social welfare programs (education, healthcare, subsidies) to reduce budget deficits.",
          "- निजीकरण (Privatization): राज्य के स्वामित्व वाले उद्यमों (रेलवे, दूरसंचार, सार्वजनिक उपयोगिताओं) को निजी कंपनियों को बेचना।\n                - विनियमन (Deregulation): सरकार के उन नियमों को हटाना जो व्यावसायिक कार्यों को प्रतिबंधित करते हैं, विशेष रूप से वित्तीय और पर्यावरण क्षेत्रों में।\n                - उदारीकरण/मुक्त व्यापार (Liberalization/Free Trade): अंतरराष्ट्रीय व्यापार और प्रत्यक्ष विदेशी निवेश (FDI) के लिए टैरिफ और बाधाओं को हटाना।\n                - मितव्ययिता (Austerity): बजट घाटे को कम करने के लिए विशेष रूप से समाज कल्याण कार्यक्रमों (शिक्षा, स्वास्थ्य सेवा, सब्सिडी) पर सरकारी खर्च में कटौती करना।"
        ]
      },
      {
        "heading": [
          "Impact on the State",
          "राज्य पर प्रभाव"
        ],
        "body": [
          "The role of the state is reduced from a 'provider' (Welfare State) to a mere 'regulator' or 'facilitator' whose main job is to protect private property rights and ensure the smooth functioning of markets.",
          "राज्य की भूमिका एक 'प्रदाता' (कल्याणकारी राज्य) से घटकर केवल एक 'नियामक' (regulator) या 'सुविधाप्रदाता' (facilitator) की रह जाती है, जिसका मुख्य काम निजी संपत्ति के अधिकारों की रक्षा करना और बाजारों के सुचारू कामकाज को सुनिश्चित करना है।"
        ]
      }
    ],
    "quotes": [
      [
        "Margaret Thatcher (Summarizing the hyper-individualistic ethos of neo-liberalism): \"There is no such thing as society. There are individual men and women and there are families.\"",
        "मार्गरेट थैचर (नव-उदारवाद के अति-व्यक्तिवादी लोकाचार को संक्षेप में बताते हुए): \"समाज जैसी कोई चीज नहीं है। व्यक्तिगत पुरुष और महिलाएं हैं और परिवार हैं।\""
      ]
    ],
    "evaluation": [
      "Proponents argue that neo-liberalism has lifted millions out of poverty (especially in China and India post-1991 reforms) by integrating them into the global market and fostering unprecedented technological innovation. However, critics (like David Harvey or Joseph Stiglitz) argue that it has been disastrous for social equity. It has led to massive wealth concentration (the top 1% owning more than the rest of the world), the destruction of labor unions, job insecurity (the 'gig economy'), and the commodification of basic human needs like health and education. The 2008 global financial crisis was seen by many as a direct result of reckless neo-liberal deregulation.",
      "समर्थकों का तर्क है कि नव-उदारवाद ने लाखों लोगों को वैश्विक बाजार में एकीकृत करके और अभूतपूर्व तकनीकी नवाचार को बढ़ावा देकर (विशेषकर 1991 के सुधारों के बाद चीन और भारत में) गरीबी से बाहर निकाला है। हालांकि, आलोचकों (जैसे डेविड हार्वे या जोसेफ स्टिग्लिट्ज़) का तर्क है कि यह सामाजिक समानता के लिए विनाशकारी रहा है। इसने बड़े पैमाने पर धन एकाग्रता (top 1% के पास शेष दुनिया से अधिक संपत्ति है), ट्रेड यूनियनों का विनाश, नौकरी की असुरक्षा ('गिग इकॉनमी') और स्वास्थ्य तथा शिक्षा जैसी बुनियादी मानवीय जरूरतों के व्यावसायीकरण (commodification) को जन्म दिया है। 2008 के वैश्विक वित्तीय संकट को कई लोग लापरवाह नव-उदारवादी विनियमन (deregulation) का प्रत्यक्ष परिणाम मानते थे।"
    ],
    "conclusion": [
      "Neo-liberalism has reshaped the world, creating immense wealth but also deep fault lines of inequality. The contemporary political backlash seen in many countries (the rise of populism, anti-globalization movements) is largely a reaction by the working classes who feel left behind by neo-liberal economic policies.",
      "नव-उदारवाद ने दुनिया को फिर से आकार दिया है, जिससे अपार धन पैदा हुआ है लेकिन असमानता की गहरी दरारें भी पैदा हुई हैं। कई देशों में देखी गई समकालीन राजनीतिक प्रतिक्रिया (लोकलुभावनवाद का उदय, वैश्वीकरण विरोधी आंदोलन) काफी हद तक श्रमिक वर्गों की प्रतिक्रिया है जो नव-उदारवादी आर्थिक नीतियों द्वारा खुद को पीछे छूटा हुआ महसूस करते हैं।"
    ],
    "shortQ": [
      [
        "Define Neo-liberalism.",
        "नव-उदारवाद (Neo-liberalism) को परिभाषित करें।"
      ],
      [
        "Name two political leaders associated with the rise of Neo-liberalism in the 1980s.",
        "1980 के दशक में नव-उदारवाद के उदय से जुड़े दो राजनीतिक नेताओं के नाम बताइए।"
      ],
      [
        "What is meant by 'Privatization' in the neo-liberal context?",
        "नव-उदारवादी संदर्भ में 'निजीकरण' (Privatization) का क्या अर्थ है?"
      ],
      [
        "What is the Washington Consensus?",
        "वाशिंगटन सर्वसम्मति (Washington Consensus) क्या है?"
      ],
      [
        "Name the author of \"A Brief History of Neoliberalism\".",
        "\"A Brief History of Neoliberalism\" के लेखक का नाम बताइए।"
      ]
    ],
    "longQ": [
      [
        "Discuss the core principles and policies of Neo-liberalism.",
        "नव-उदारवाद के मुख्य सिद्धांतों और नीतियों पर चर्चा करें।"
      ],
      [
        "How does Neo-liberalism change the traditional role of the Welfare State?",
        "नव-उदारवाद कल्याणकारी राज्य की पारंपरिक भूमिका को कैसे बदलता है?"
      ],
      [
        "Critically evaluate the impact of Neo-liberal economic policies on global inequality.",
        "वैश्विक असमानता पर नव-उदारवादी आर्थिक नीतियों के प्रभाव का आलोचनात्मक मूल्यांकन करें।"
      ],
      [
        "\"Neo-liberalism prioritizes market efficiency over social equity.\" Discuss.",
        "\"नव-उदारवाद सामाजिक समानता पर बाजार दक्षता को प्राथमिकता देता है।\" चर्चा करें।"
      ],
      [
        "Explain the concept of the 'Washington Consensus' and its impact on developing countries.",
        "'वाशिंगटन सर्वसम्मति' की अवधारणा और विकासशील देशों पर इसके प्रभाव की व्याख्या करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "Neo-liberalism emerged primarily as a reaction against which mid-20th-century economic model?",
          "नव-उदारवाद मुख्य रूप से 20वीं सदी के मध्य के किस आर्थिक मॉडल के खिलाफ प्रतिक्रिया के रूप में उभरा?"
        ],
        "opts": [
          [
            "Laissez-faire capitalism",
            "लेसे-फेयर पूंजीवाद"
          ],
          [
            "The Keynesian Welfare State",
            "कीनेसियन कल्याणकारी राज्य (Keynesian Welfare State)"
          ],
          [
            "Feudalism",
            "सामंतवाद"
          ],
          [
            "Mercantilism",
            "वाणिज्यवाद"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which set of policy prescriptions, promoted by the IMF and World Bank for developing countries, is strongly associated with Neo-liberalism?",
          "विकासशील देशों के लिए IMF और विश्व बैंक द्वारा प्रचारित कौन सी नीति नव-उदारवाद से मजबूती से जुड़ी है?"
        ],
        "opts": [
          [
            "The Geneva Conventions",
            "जिनेवा कन्वेंशन"
          ],
          [
            "The Kyoto Protocol",
            "क्योटो प्रोटोकॉल"
          ],
          [
            "The Washington Consensus",
            "वाशिंगटन सर्वसम्मति (Washington Consensus)"
          ],
          [
            "The Bandung Declaration",
            "बांडुंग घोषणा"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "The highly critical book \"A Brief History of Neoliberalism\" was written by:",
          "अत्यधिक आलोचनात्मक पुस्तक \"A Brief History of Neoliberalism\" किसके द्वारा लिखी गई थी:"
        ],
        "opts": [
          [
            "Milton Friedman",
            "मिल्टन फ्रीडमैन"
          ],
          [
            "Friedrich Hayek",
            "फ्रेडरिक हायेक"
          ],
          [
            "David Harvey",
            "डेविड हार्वे (David Harvey)"
          ],
          [
            "Joseph Stiglitz",
            "जोसेफ स्टिग्लिट्ज़"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "Which of the following is NOT a core policy of Neo-liberalism?",
          "निम्नलिखित में से कौन सी नव-उदारवाद की मुख्य नीति नहीं है?"
        ],
        "opts": [
          [
            "Deregulation",
            "विनियमन (Deregulation)"
          ],
          [
            "Privatization",
            "निजीकरण (Privatization)"
          ],
          [
            "Free Trade",
            "मुक्त व्यापार (Free Trade)"
          ],
          [
            "Nationalization of industries",
            "उद्योगों का राष्ट्रीयकरण (Nationalization of industries)"
          ]
        ],
        "correct": 3
      },
      {
        "q": [
          "Who famously stated, representing the neo-liberal ethos, that \"There is no such thing as society\"?",
          "नव-उदारवादी लोकाचार का प्रतिनिधित्व करते हुए प्रसिद्ध रूप से किसने कहा था कि \"समाज जैसी कोई चीज नहीं है\"?"
        ],
        "opts": [
          [
            "Ronald Reagan",
            "रोनाल्ड रीगन"
          ],
          [
            "Margaret Thatcher",
            "मार्गरेट थैचर (Margaret Thatcher)"
          ],
          [
            "Bill Clinton",
            "बिल क्लिंटन"
          ],
          [
            "Manmohan Singh",
            "मनमोहन सिंह"
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
      "Multiculturalism",
      "बहुसंस्कृतिवाद"
    ],
    "introduction": [
      "Multiculturalism is a political philosophy and public policy approach that emerged in the late 20th century to manage the increasing diversity of modern societies (fueled by globalization and mass migration). It rejects the older \"melting pot\" theory (where immigrants are expected to assimilate and adopt the dominant culture) in favor of a \"salad bowl\" theory, where different cultural, ethnic, and religious groups co-exist, maintaining their distinct identities while sharing equal rights within the state.",
      "बहुसंस्कृतिवाद (Multiculturalism) एक राजनीतिक दर्शन और सार्वजनिक नीति दृष्टिकोण है जो आधुनिक समाजों की बढ़ती विविधता (वैश्वीकरण और बड़े पैमाने पर प्रवास द्वारा संचालित) को प्रबंधित करने के लिए 20वीं सदी के अंत में उभरा। यह पुरानी \"मेल्टिंग पॉट\" (melting pot) थ्योरी (जहां अप्रवासियों से उम्मीद की जाती है कि वे प्रमुख संस्कृति को आत्मसात करेंगे और अपनाएंगे) को खारिज करता है और \"सलाद बाउल\" (salad bowl) थ्योरी का पक्ष लेता है, जहां विभिन्न सांस्कृतिक, जातीय और धार्मिक समूह राज्य के भीतर समान अधिकार साझा करते हुए अपनी विशिष्ट पहचान बनाए रखते हैं और सह-अस्तित्व में रहते हैं।"
    ],
    "concepts": [
      {
        "heading": [
          "Politics of Recognition",
          "मान्यता की राजनीति (Politics of Recognition)"
        ],
        "body": [
          "Charles Taylor argued that our identity is shaped by recognition. Withholding recognition (ignoring minority cultures) or misrecognizing them is a form of oppression. Multiculturalism demands public recognition and respect for cultural differences.",
          "चार्ल्स टेलर (Charles Taylor) ने तर्क दिया कि हमारी पहचान मान्यता द्वारा आकार लेती है। मान्यता वापस लेना (अल्पसंख्यक संस्कृतियों को नज़रअंदाज़ करना) या उन्हें गलत तरीके से पहचानना उत्पीड़न का एक रूप है। बहुसंस्कृतिवाद सांस्कृतिक मतभेदों के लिए सार्वजनिक मान्यता और सम्मान की मांग करता है।"
        ]
      },
      {
        "heading": [
          "Differentiated Citizenship (Group Rights)",
          "विभेदित नागरिकता (समूह अधिकार - Group Rights)"
        ],
        "body": [
          "Will Kymlicka, a leading theorist, argues that standard \"color-blind\" liberal rights (individual rights) are not enough for minorities. He proposes Group-Differentiated Rights:\n                - Self-government rights: For indigenous populations (e.g., Native Americans).\n                - Polyethnic rights: Accommodations for immigrants (e.g., exempting Sikhs from helmet laws to wear turbans).\n                - Special representation rights: Reserved seats for underrepresented minorities.",
          "विल किमलिका (Will Kymlicka), एक प्रमुख सिद्धांतकार, का तर्क है कि अल्पसंख्यकों के लिए मानक \"कलर-ब्लाइंड\" उदार अधिकार (व्यक्तिगत अधिकार) पर्याप्त नहीं हैं। वे समूह-विभेदित अधिकार (Group-Differentiated Rights) का प्रस्ताव करते हैं:\n                - स्वशासन के अधिकार (Self-government rights): स्वदेशी आबादी के लिए (जैसे, मूल अमेरिकी)।\n                - बहुजातीय अधिकार (Polyethnic rights): अप्रवासियों के लिए आवास (उदाहरण के लिए, सिखों को पगड़ी पहनने के लिए हेलमेट कानूनों से छूट देना)।\n                - विशेष प्रतिनिधित्व अधिकार: कम प्रतिनिधित्व वाले अल्पसंख्यकों के लिए आरक्षित सीटें।"
        ]
      },
      {
        "heading": [
          "Value Pluralism",
          "मूल्य बहुलवाद (Value Pluralism)"
        ],
        "body": [
          "Based on Isaiah Berlin's idea that there are many different, equally valid ways of living a good life, and a liberal state should not impose one single cultural blueprint on everyone.",
          "यशायाह बर्लिन (Isaiah Berlin) के इस विचार पर आधारित है कि एक अच्छा जीवन जीने के कई अलग-अलग, समान रूप से मान्य तरीके हैं, और एक उदार राज्य को सभी पर एक ही सांस्कृतिक खाका (blueprint) नहीं थोपना चाहिए।"
        ]
      }
    ],
    "quotes": [
      [
        "Charles Taylor: \"Nonrecognition or misrecognition can inflict harm, can be a form of oppression, imprisoning someone in a false, distorted, and reduced mode of being.\"",
        "चार्ल्स टेलर: \"गैर-मान्यता या गलत मान्यता नुकसान पहुंचा सकती है, उत्पीड़न का एक रूप हो सकती है, किसी को होने के झूठे, विकृत और कम तरीके से कैद कर सकती है।\""
      ]
    ],
    "evaluation": [
      "Multiculturalism is highly debated today. Proponents argue it creates a more inclusive, tolerant, and vibrant society. However, critics (often from the conservative right, but also some liberals) argue it leads to the \"ghettoization\" of society, where communities live parallel lives without integrating, destroying national unity. Feminist critics (like Susan Moller Okin in her essay \"Is Multiculturalism Bad for Women?\") point out a severe flaw: granting 'group rights' to a minority culture might empower the patriarchal leaders of that culture to oppress their own women (e.g., defending child marriage or honor killings as 'cultural traditions').",
      "बहुसंस्कृतिवाद आज अत्यधिक बहस का विषय है। समर्थकों का तर्क है कि यह एक अधिक समावेशी, सहिष्णु और जीवंत समाज बनाता है। हालांकि, आलोचकों (अक्सर रूढ़िवादी दक्षिणपंथियों से, लेकिन कुछ उदारवादियों से भी) का तर्क है कि यह समाज के \"घेटोकरण\" (ghettoization) की ओर ले जाता है, जहां समुदाय बिना एकीकृत हुए समानांतर जीवन जीते हैं, जिससे राष्ट्रीय एकता नष्ट होती है। नारीवादी आलोचक (जैसे सुसान मोलर ओकिन अपने निबंध \"Is Multiculturalism Bad for Women?\" में) एक गंभीर दोष की ओर इशारा करते हैं: किसी अल्पसंख्यक संस्कृति को 'समूह अधिकार' देने से उस संस्कृति के पितृसत्तात्मक नेताओं को अपनी ही महिलाओं पर अत्याचार करने का अधिकार मिल सकता है (जैसे, बाल विवाह या ऑनर किलिंग को 'सांस्कृतिक परंपराओं' के रूप में बचाव करना)।"
    ],
    "conclusion": [
      "Multiculturalism attempts to answer one of the hardest questions in contemporary politics: how to forge a united nation out of deeply diverse populations. While it provides a moral framework for respecting minorities, the practical challenge remains balancing the protection of cultural diversity with the enforcement of universal human rights.",
      "बहुसंस्कृतिवाद समकालीन राजनीति के सबसे कठिन सवालों में से एक का जवाब देने का प्रयास करता है: गहराई से विविध आबादी से एक एकजुट राष्ट्र कैसे बनाया जाए। हालांकि यह अल्पसंख्यकों का सम्मान करने के लिए एक नैतिक ढांचा प्रदान करता है, व्यावहारिक चुनौती सांस्कृतिक विविधता की सुरक्षा को सार्वभौमिक मानवाधिकारों के प्रवर्तन के साथ संतुलित करना बनी हुई है।"
    ],
    "shortQ": [
      [
        "Define Multiculturalism.",
        "बहुसंस्कृतिवाद (Multiculturalism) को परिभाषित करें।"
      ],
      [
        "How does the 'salad bowl' theory differ from the 'melting pot' theory?",
        "'सलाद बाउल' (salad bowl) थ्योरी 'मेल्टिंग पॉट' (melting pot) थ्योरी से किस प्रकार भिन्न है?"
      ],
      [
        "What does Charles Taylor mean by the 'Politics of Recognition'?",
        "चार्ल्स टेलर की 'मान्यता की राजनीति' (Politics of Recognition) से क्या तात्पर्य है?"
      ],
      [
        "Give an example of a 'Polyethnic right' as defined by Will Kymlicka.",
        "विल किमलिका द्वारा परिभाषित 'बहुजातीय अधिकार' (Polyethnic right) का एक उदाहरण दें।"
      ],
      [
        "Why do some feminists criticize multiculturalism?",
        "कुछ नारीवादी बहुसंस्कृतिवाद की आलोचना क्यों करते हैं?"
      ]
    ],
    "longQ": [
      [
        "Discuss the core principles of Multiculturalism.",
        "बहुसंस्कृतिवाद के मुख्य सिद्धांतों पर चर्चा करें।"
      ],
      [
        "Explain Will Kymlicka's theory of 'Group-Differentiated Rights'.",
        "विल किमलिका के 'समूह-विभेदित अधिकार' (Group-Differentiated Rights) के सिद्धांत की व्याख्या करें।"
      ],
      [
        "Critically analyze the arguments for and against multiculturalism in contemporary democracies.",
        "समकालीन लोकतंत्रों में बहुसंस्कृतिवाद के पक्ष और विपक्ष में तर्कों का आलोचनात्मक विश्लेषण करें।"
      ],
      [
        "\"Multiculturalism leads to the fragmentation of national identity.\" Evaluate this criticism.",
        "\"बहुसंस्कृतिवाद राष्ट्रीय पहचान के विखंडन (fragmentation) की ओर ले जाता है।\" इस आलोचना का मूल्यांकन करें।"
      ],
      [
        "Discuss the tension between multicultural group rights and universal individual human rights (especially women's rights).",
        "बहुसांस्कृतिक समूह अधिकारों और सार्वभौमिक व्यक्तिगत मानवाधिकारों (विशेषकर महिलाओं के अधिकारों) के बीच तनाव पर चर्चा करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "The political theorist famous for advocating \"Group-Differentiated Rights\" (Multicultural Citizenship) is:",
          "\"समूह-विभेदित अधिकार\" (बहुसांस्कृतिक नागरिकता) की वकालत करने के लिए प्रसिद्ध राजनीतिक सिद्धांतकार हैं:"
        ],
        "opts": [
          [
            "John Rawls",
            "जॉन रॉल्स"
          ],
          [
            "Will Kymlicka",
            "विल किमलिका (Will Kymlicka)"
          ],
          [
            "Isaiah Berlin",
            "यशायाह बर्लिन"
          ],
          [
            "Robert Nozick",
            "रॉबर्ट नोज़िक"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Multiculturalism replaces the assimilationist \"melting pot\" theory with the metaphor of a:",
          "बहुसंस्कृतिवाद आत्मसात करने वाले (assimilationist) \"मेल्टिंग पॉट\" सिद्धांत को किस रूपक (metaphor) से बदल देता है:"
        ],
        "opts": [
          [
            "Pressure cooker",
            "प्रेशर कुकर"
          ],
          [
            "Salad bowl (Mosaic)",
            "सलाद बाउल (मोज़ेक)"
          ],
          [
            "Iron cage",
            "लोहे का पिंजरा"
          ],
          [
            "Boiling pot",
            "उबलता हुआ बर्तन"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "The essay \"The Politics of Recognition\", central to multicultural theory, was written by:",
          "बहुसांस्कृतिक सिद्धांत के केंद्र में निबंध \"The Politics of Recognition\" किसके द्वारा लिखा गया था:"
        ],
        "opts": [
          [
            "Charles Taylor",
            "चार्ल्स टेलर (Charles Taylor)"
          ],
          [
            "Susan Moller Okin",
            "सुसान मोलर ओकिन"
          ],
          [
            "Amartya Sen",
            "अमर्त्य सेन"
          ],
          [
            "Bhikhu Parekh",
            "भीखू पारेख"
          ]
        ],
        "correct": 0
      },
      {
        "q": [
          "Susan Moller Okin raised a famous critique of multiculturalism by asking if it is bad for:",
          "सुसान मोलर ओकिन ने यह पूछकर बहुसंस्कृतिवाद की एक प्रसिद्ध आलोचना उठाई कि क्या यह किसके लिए बुरा है:"
        ],
        "opts": [
          [
            "The economy",
            "अर्थव्यवस्था"
          ],
          [
            "National security",
            "राष्ट्रीय सुरक्षा"
          ],
          [
            "Women",
            "महिलाएं"
          ],
          [
            "Freedom of speech",
            "बोलने की स्वतंत्रता"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "According to Kymlicka, exempting Sikh men from wearing motorcycle helmets so they can wear turbans is an example of a:",
          "किमलिका के अनुसार, सिख पुरुषों को मोटरसाइकिल हेलमेट पहनने से छूट देना ताकि वे पगड़ी पहन सकें, किसका एक उदाहरण है:"
        ],
        "opts": [
          [
            "Self-government right",
            "स्वशासन का अधिकार"
          ],
          [
            "Polyethnic right",
            "बहुजातीय अधिकार (Polyethnic right)"
          ],
          [
            "Special representation right",
            "विशेष प्रतिनिधित्व अधिकार"
          ],
          [
            "Universal human right",
            "सार्वभौमिक मानवाधिकार"
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
    "id": "t7",
    "num": 7,
    "title": [
      "Environment and Development",
      "पर्यावरण और विकास"
    ],
    "introduction": [
      "The conflict between Environment and Development is arguably the most existential contemporary political issue. Since the Industrial Revolution, the dominant model of economic development has relied on the relentless exploitation of natural resources. Today, the consequences—climate change, biodiversity loss, and severe pollution—threaten the very survival of the planet. Politics today is deeply concerned with how to balance the need for economic growth (especially for developing nations) with the urgent need for environmental conservation.",
      "पर्यावरण (Environment) और विकास (Development) के बीच का संघर्ष यकीनन सबसे अधिक अस्तित्ववादी समकालीन राजनीतिक मुद्दा है। औद्योगिक क्रांति के बाद से, आर्थिक विकास का प्रमुख मॉडल प्राकृतिक संसाधनों के निरंतर दोहन पर निर्भर रहा है। आज, इसके परिणाम—जलवायु परिवर्तन, जैव विविधता का नुकसान, और गंभीर प्रदूषण—ग्रह के अस्तित्व को ही खतरे में डालते हैं। आज की राजनीति इस बात से गहराई से चिंतित है कि आर्थिक विकास (विशेषकर विकासशील देशों के लिए) की आवश्यकता को पर्यावरण संरक्षण की तत्काल आवश्यकता के साथ कैसे संतुलित किया जाए।"
    ],
    "concepts": [
      {
        "heading": [
          "Sustainable Development",
          "सतत विकास (Sustainable Development)"
        ],
        "body": [
          "- Coined by the Brundtland Commission (1987), it is defined as \"development that meets the needs of the present without compromising the ability of future generations to meet their own needs.\" It calls for an integration of economic, social, and environmental policies.",
          "- ब्रंटलैंड आयोग (1987) द्वारा गढ़ा गया, इसे \"ऐसे विकास के रूप में परिभाषित किया गया है जो भविष्य की पीढ़ियों की अपनी जरूरतों को पूरा करने की क्षमता से समझौता किए बिना वर्तमान की जरूरतों को पूरा करता है।\" यह आर्थिक, सामाजिक और पर्यावरणीय नीतियों के एकीकरण का आह्वान करता है।"
        ]
      },
      {
        "heading": [
          "The North-South Divide (Ecological Imperialism)",
          "उत्तर-दक्षिण विभाजन (पारिस्थितिक साम्राज्यवाद - The North-South Divide)"
        ],
        "body": [
          "- Global North (Developed nations): Historically responsible for the majority of greenhouse gas emissions due to early industrialization. They now push for strict global environmental regulations.\n                - Global South (Developing nations like India/China): Argue that strict regulations hinder their economic growth and poverty eradication efforts. They demand \"Common but Differentiated Responsibilities\" (CBDR), meaning developed nations should bear a larger burden of cutting emissions and provide financial/technological aid to the South.",
          "- ग्लोबल नॉर्थ (विकसित देश): प्रारंभिक औद्योगीकरण के कारण ऐतिहासिक रूप से ग्रीनहाउस गैस उत्सर्जन के बहुमत के लिए जिम्मेदार हैं। वे अब सख्त वैश्विक पर्यावरण नियमों पर जोर देते हैं।\n                - ग्लोबल साउथ (भारत/चीन जैसे विकासशील देश): तर्क देते हैं कि सख्त नियम उनके आर्थिक विकास और गरीबी उन्मूलन के प्रयासों में बाधा डालते हैं। वे \"सामान्य लेकिन विभेदित जिम्मेदारियों\" (Common but Differentiated Responsibilities - CBDR) की मांग करते हैं, जिसका अर्थ है कि विकसित देशों को उत्सर्जन में कटौती का बड़ा बोझ उठाना चाहिए और दक्षिण को वित्तीय/तकनीकी सहायता प्रदान करनी चाहिए।"
        ]
      },
      {
        "heading": [
          "Green Politics (Ecocentrism vs. Anthropocentrism)",
          "हरित राजनीति (Green Politics - मानव-केंद्रित बनाम प्रकृति-केंद्रित)"
        ],
        "body": [
          "- Anthropocentrism (Human-centered): Nature has value only because it is useful to humans.\n                - Ecocentrism (Nature-centered): Nature has intrinsic value independent of its utility to humans. Green politics advocates for a radical shift towards ecocentrism and limits to economic growth.",
          "- मानव-केंद्रित (Anthropocentrism): प्रकृति का मूल्य केवल इसलिए है क्योंकि यह मनुष्यों के लिए उपयोगी है।\n                - प्रकृति-केंद्रित (Ecocentrism): प्रकृति का मनुष्यों के लिए इसकी उपयोगिता से स्वतंत्र अपना आंतरिक मूल्य है। हरित राजनीति इकोसेंट्रिज्म की ओर एक आमूल-चूल बदलाव और आर्थिक विकास की सीमाओं की वकालत करती है।"
        ]
      }
    ],
    "quotes": [
      [
        "Mahatma Gandhi: \"Earth provides enough to satisfy every man's needs, but not every man's greed.\"",
        "महात्मा गांधी: \"पृथ्वी हर आदमी की जरूरतों को पूरा करने के लिए पर्याप्त प्रदान करती है, लेकिन हर आदमी के लालच को नहीं।\""
      ]
    ],
    "evaluation": [
      "While \"Sustainable Development\" sounds perfect in theory, critics argue it is an oxymoron under global capitalism, which requires infinite growth on a planet with finite resources. Radical environmentalists (Deep Ecology) argue that tweaking the system with 'green technology' is not enough; we need a fundamental reduction in consumption. Furthermore, environmental degradation disproportionately affects the poor and marginalized (e.g., indigenous tribals displaced by dams, or poor nations facing the brunt of sea-level rise), making it not just an ecological issue, but an issue of profound social justice and human rights.",
      "जबकि \"सतत विकास\" सिद्धांत रूप में एकदम सही लगता है, आलोचकों का तर्क है कि यह वैश्विक पूंजीवाद के तहत एक विरोधाभास (oxymoron) है, जिसके लिए सीमित संसाधनों वाले ग्रह पर अनंत विकास की आवश्यकता होती है। कट्टरपंथी पर्यावरणविदों (डीप इकोलॉजी) का तर्क है कि 'हरित प्रौद्योगिकी' के साथ प्रणाली में बदलाव करना पर्याप्त नहीं है; हमें उपभोग में मूलभूत कमी की आवश्यकता है। इसके अलावा, पर्यावरणीय गिरावट गरीबों और हाशिए के लोगों (जैसे, बांधों द्वारा विस्थापित स्वदेशी आदिवासियों, या समुद्र के स्तर में वृद्धि का खामियाजा भुगत रहे गरीब देशों) को असमान रूप से प्रभावित करती है, जिससे यह केवल एक पारिस्थितिक मुद्दा नहीं, बल्कि गहन सामाजिक न्याय और मानवाधिकारों का मुद्दा बन जाता है।"
    ],
    "conclusion": [
      "The politics of environment and development is a politics of survival. It requires unprecedented global cooperation, moving past national self-interests, to forge binding international agreements (like the Paris Agreement) and transition towards a genuinely green and equitable global economy.",
      "पर्यावरण और विकास की राजनीति अस्तित्व की राजनीति है। इसके लिए अभूतपूर्व वैश्विक सहयोग की आवश्यकता है, राष्ट्रीय स्वार्थों से आगे बढ़कर बाध्यकारी अंतरराष्ट्रीय समझौते (जैसे पेरिस समझौता) बनाने और वास्तव में हरित और न्यायसंगत वैश्विक अर्थव्यवस्था की ओर बढ़ने की आवश्यकता है।"
    ],
    "shortQ": [
      [
        "Define Sustainable Development.",
        "सतत विकास (Sustainable Development) को परिभाषित करें।"
      ],
      [
        "Which commission popularized the term 'Sustainable Development' in 1987?",
        "किस आयोग ने 1987 में 'सतत विकास' शब्द को लोकप्रिय बनाया?"
      ],
      [
        "What is the principle of 'Common but Differentiated Responsibilities' (CBDR)?",
        "'सामान्य लेकिन विभेदित जिम्मेदारियों' (CBDR) का सिद्धांत क्या है?"
      ],
      [
        "Differentiate between Anthropocentrism and Ecocentrism.",
        "एन्थ्रोपोसेंट्रिज्म (मानव-केंद्रित) और इकोसेंट्रिज्म (प्रकृति-केंद्रित) के बीच अंतर स्पष्ट करें।"
      ],
      [
        "Name the author of the book \"Silent Spring\".",
        "\"Silent Spring\" पुस्तक के लेखक का नाम बताइए।"
      ]
    ],
    "longQ": [
      [
        "Discuss the conflict between economic development and environmental conservation.",
        "आर्थिक विकास और पर्यावरण संरक्षण के बीच संघर्ष पर चर्चा करें।"
      ],
      [
        "Explain the concept of Sustainable Development and its key challenges.",
        "सतत विकास की अवधारणा और इसकी प्रमुख चुनौतियों की व्याख्या करें।"
      ],
      [
        "Analyze the 'North-South Divide' in global environmental politics.",
        "वैश्विक पर्यावरण राजनीति में 'उत्तर-दक्षिण विभाजन' का विश्लेषण करें।"
      ],
      [
        "Critically evaluate the capitalist model of development from an environmental perspective.",
        "पर्यावरणीय दृष्टिकोण से विकास के पूंजीवादी मॉडल का आलोचनात्मक मूल्यांकन करें।"
      ],
      [
        "\"Environmental degradation is fundamentally an issue of social justice.\" Discuss.",
        "\"पर्यावरणीय गिरावट मौलिक रूप से सामाजिक न्याय का मुद्दा है।\" चर्चा करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "The term \"Sustainable Development\" was popularized by which international report in 1987?",
          "\"सतत विकास\" (Sustainable Development) शब्द को 1987 में किस अंतरराष्ट्रीय रिपोर्ट द्वारा लोकप्रिय बनाया गया था?"
        ],
        "opts": [
          [
            "The Kyoto Protocol",
            "क्योटो प्रोटोकॉल"
          ],
          [
            "The Brundtland Report (Our Common Future)",
            "ब्रंटलैंड रिपोर्ट (Our Common Future)"
          ],
          [
            "The Rio Declaration",
            "रियो घोषणा"
          ],
          [
            "The Paris Agreement",
            "पेरिस समझौता"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "The principle that all nations are responsible for climate change, but developed nations should bear a larger burden due to their historical emissions, is known as:",
          "यह सिद्धांत कि सभी राष्ट्र जलवायु परिवर्तन के लिए जिम्मेदार हैं, लेकिन विकसित देशों को उनके ऐतिहासिक उत्सर्जन के कारण बड़ा बोझ उठाना चाहिए, कहलाता है:"
        ],
        "opts": [
          [
            "Equal Carbon Footprint",
            "समान कार्बन फुटप्रिंट"
          ],
          [
            "Common but Differentiated Responsibilities (CBDR)",
            "सामान्य लेकिन विभेदित जिम्मेदारियां (CBDR)"
          ],
          [
            "Ecological Imperialism",
            "पारिस्थितिक साम्राज्यवाद"
          ],
          [
            "Carbon Trading",
            "कार्बन ट्रेडिंग"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "An environmental philosophy that argues nature has intrinsic value independent of its usefulness to humans is called:",
          "एक पर्यावरणीय दर्शन जो तर्क देता है कि प्रकृति का मनुष्यों के लिए उसकी उपयोगिता से स्वतंत्र आंतरिक मूल्य है, कहलाता है:"
        ],
        "opts": [
          [
            "Anthropocentrism",
            "एन्थ्रोपोसेंट्रिज्म (Anthropocentrism)"
          ],
          [
            "Ecocentrism (Deep Ecology)",
            "इकोसेंट्रिज्म (डीप इकोलॉजी)"
          ],
          [
            "Utilitarianism",
            "उपयोगितावाद (Utilitarianism)"
          ],
          [
            "Techno-centrism",
            "टेक्नो-सेंट्रिज्म"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "The groundbreaking 1962 book \"Silent Spring\", which warned against the use of chemical pesticides, was written by:",
          "अभूतपूर्व 1962 की पुस्तक \"Silent Spring\", जिसने रासायनिक कीटनाशकों के उपयोग के खिलाफ चेतावनी दी थी, किसके द्वारा लिखी गई थी:"
        ],
        "opts": [
          [
            "Vandana Shiva",
            "वंदना शिवा"
          ],
          [
            "Rachel Carson",
            "राचेल कार्सन (Rachel Carson)"
          ],
          [
            "Medha Patkar",
            "मेधा पाटकर"
          ],
          [
            "Al Gore",
            "अल गोर"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Eco-feminist scholars like Vandana Shiva argue that the Western model of capitalist development is inherently destructive to both:",
          "वंदना शिवा जैसे इको-नारीवादी (Eco-feminist) विद्वानों का तर्क है कि पूंजीवादी विकास का पश्चिमी मॉडल स्वाभाविक रूप से किसके लिए विनाशकारी है:"
        ],
        "opts": [
          [
            "Technology and Industry",
            "प्रौद्योगिकी और उद्योग"
          ],
          [
            "Nature and Women",
            "प्रकृति और महिलाएं"
          ],
          [
            "Religion and Culture",
            "धर्म और संस्कृति"
          ],
          [
            "Urban and Rural elites",
            "शहरी और ग्रामीण अभिजात वर्ग"
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
      "End of Ideology Debate",
      "विचारधारा के अंत की बहस"
    ],
    "introduction": [
      "Ideologies (like Marxism, Fascism, Liberalism) are comprehensive belief systems that provide a blueprint for organizing society. The 20th century was marked by violent clashes between these ideologies. However, in the late 1950s, a thesis emerged called the \"End of Ideology,\" which argued that the grand ideological battles were over in the West. This debate flared up again spectacularly in 1989 with Francis Fukuyama's related concept, the \"End of History.\"",
      "विचारधाराएं (Ideologies - जैसे मार्क्सवाद, फासीवाद, उदारवाद) व्यापक विश्वास प्रणालियां हैं जो समाज को व्यवस्थित करने के लिए एक खाका प्रदान करती हैं। 20वीं सदी इन विचारधाराओं के बीच हिंसक संघर्षों से चिह्नित थी। हालांकि, 1950 के दशक के उत्तरार्ध में, \"विचारधारा का अंत\" (End of Ideology) नामक एक थीसिस सामने आई, जिसमें तर्क दिया गया कि पश्चिम में बड़े वैचारिक युद्ध समाप्त हो गए थे। यह बहस 1989 में फ्रांसिस फुकुयामा की संबंधित अवधारणा, \"इतिहास का अंत\" (End of History) के साथ फिर से शानदार ढंग से भड़क उठी।"
    ],
    "concepts": [
      {
        "heading": [
          "The First Wave (1950s) Daniel Bell",
          "पहली लहर (1950 का दशक) डैनियल बेल (Daniel Bell)"
        ],
        "body": [
          "- In his 1960 book, The End of Ideology, Bell argued that among the intellectual elite in the West, there was a broad consensus. The old passions of extreme Left (Marxism) and extreme Right (Fascism) had exhausted themselves.\n                - The consensus was around the Welfare State, mixed economy, and political pluralism. Politics was no longer about radical revolution, but about pragmatic, technical problem-solving.",
          "- 1960 की अपनी पुस्तक, The End of Ideology में, बेल ने तर्क दिया कि पश्चिम में बौद्धिक अभिजात वर्ग के बीच एक व्यापक आम सहमति थी। चरम वामपंथ (मार्क्सवाद) और चरम दक्षिणपंथ (फासीवाद) के पुराने जुनून खुद को समाप्त कर चुके थे।\n                - यह आम सहमति कल्याणकारी राज्य (Welfare State), मिश्रित अर्थव्यवस्था और राजनीतिक बहुलवाद (pluralism) के इर्द-गिर्द थी। राजनीति अब कट्टरपंथी क्रांति के बारे में नहीं थी, बल्कि व्यावहारिक, तकनीकी समस्या-समाधान के बारे में थी।"
        ]
      },
      {
        "heading": [
          "The Second Wave (1989) Francis Fukuyama's \"End of History\"",
          "दूसरी लहर (1989) फ्रांसिस फुकुयामा का \"इतिहास का अंत\" (End of History)"
        ],
        "body": [
          "- As the Cold War ended and the Soviet Union collapsed, Fukuyama published an essay (later a book) declaring the \"End of History.\"\n                - He didn't mean that events would stop happening. He meant the end of humanity's ideological evolution. He argued that Western Liberal Democracy and free-market capitalism had decisively defeated all rivals (monarchy, fascism, and finally communism) and emerged as the final form of human government.",
          "- जैसे ही शीत युद्ध समाप्त हुआ और सोवियत संघ का पतन हुआ, फुकुयामा ने \"इतिहास का अंत\" घोषित करते हुए एक निबंध (बाद में एक पुस्तक) प्रकाशित किया।\n                - उनका मतलब यह नहीं था कि घटनाएं होनी बंद हो जाएंगी। उनका मतलब मानवता के वैचारिक विकास के अंत से था। उन्होंने तर्क दिया कि पश्चिमी उदारवादी लोकतंत्र (Western Liberal Democracy) और मुक्त-बाजार पूंजीवाद ने सभी प्रतिद्वंद्वियों (राजतंत्र, फासीवाद, और अंततः साम्यवाद) को निर्णायक रूप से हरा दिया है और मानव सरकार के अंतिम रूप के रूप में उभरा है।"
        ]
      }
    ],
    "quotes": [
      [
        "Francis Fukuyama: \"What we may be witnessing is not just the end of the Cold War... but the end of history as such: that is, the end point of mankind's ideological evolution and the universalization of Western liberal democracy as the final form of human government.\"",
        "फ्रांसिस फुकुयामा: \"हम जो देख रहे हैं वह केवल शीत युद्ध का अंत नहीं हो सकता है... बल्कि इतिहास का ही अंत है: यानी, मानव जाति के वैचारिक विकास का अंतिम बिंदु और मानव सरकार के अंतिम रूप के रूप में पश्चिमी उदारवादी लोकतंत्र का सार्वभौमिकरण।\""
      ]
    ],
    "evaluation": [
      "Both theses have faced intense criticism. Critics of Daniel Bell argued that his \"consensus\" was merely a reflection of Western capitalist complacency; it ignored the ideological struggles in the Third World and the rising civil rights and feminist movements. Fukuyama's thesis seemed triumphant in the 1990s but has been severely battered in the 21st century. The rise of radical Islamic terrorism (9/11), the authoritarian state-capitalist model of China, and the resurgence of right-wing populism/nationalism within Western democracies themselves prove that ideological battles are far from over. Ideology hasn't ended; it has simply taken new forms (like environmentalism or religious fundamentalism).",
      "दोनों थीसिस को कड़ी आलोचना का सामना करना पड़ा है। डैनियल बेल के आलोचकों ने तर्क दिया कि उनकी \"आम सहमति\" केवल पश्चिमी पूंजीवादी आत्मसंतुष्टि का प्रतिबिंब थी; इसने तीसरी दुनिया में वैचारिक संघर्षों और बढ़ते नागरिक अधिकारों और नारीवादी आंदोलनों को नजरअंदाज कर दिया। फुकुयामा की थीसिस 1990 के दशक में विजयी लग रही थी, लेकिन 21वीं सदी में इसे गंभीर झटका लगा है। कट्टरपंथी इस्लामी आतंकवाद (9/11) का उदय, चीन का सत्तावादी राज्य-पूंजीवादी मॉडल, और स्वयं पश्चिमी लोकतंत्रों के भीतर दक्षिणपंथी लोकलुभावनवाद/राष्ट्रवाद का पुनरुत्थान यह साबित करता है कि वैचारिक लड़ाई खत्म होने से कोसों दूर है। विचारधारा खत्म नहीं हुई है; इसने बस नए रूप ले लिए हैं (जैसे पर्यावरणवाद या धार्मिक कट्टरवाद)।"
    ],
    "conclusion": [
      "The \"End of Ideology\" debate is a fascinating study in political forecasting. While the specific totalitarian ideologies of the mid-20th century may have exhausted themselves, human societies will always generate new belief systems to address inequalities and systemic failures. As long as there is political conflict over resources and values, ideology will remain alive.",
      "\"विचारधारा का अंत\" बहस राजनीतिक पूर्वानुमान (political forecasting) में एक आकर्षक अध्ययन है। जबकि 20वीं सदी के मध्य की विशिष्ट अधिनायकवादी विचारधाराओं ने खुद को समाप्त कर लिया होगा, मानव समाज असमानताओं और प्रणालीगत विफलताओं को दूर करने के लिए हमेशा नई विश्वास प्रणालियां उत्पन्न करेगा। जब तक संसाधनों और मूल्यों पर राजनीतिक संघर्ष है, विचारधारा जीवित रहेगी।"
    ],
    "shortQ": [
      [
        "Who coined the phrase \"End of Ideology\" in the 1960s?",
        "1960 के दशक में \"विचारधारा का अंत\" (End of Ideology) वाक्यांश किसने गढ़ा?"
      ],
      [
        "What did Daniel Bell mean by the 'End of Ideology'?",
        "डैनियल बेल का 'विचारधारा के अंत' से क्या तात्पर्य था?"
      ],
      [
        "Who authored the book \"The End of History and the Last Man\"?",
        "\"The End of History and the Last Man\" पुस्तक किसने लिखी?"
      ],
      [
        "According to Fukuyama, what is the 'final form of human government'?",
        "फुकुयामा के अनुसार, 'मानव सरकार का अंतिम रूप' क्या है?"
      ],
      [
        "Give one major criticism of the 'End of History' thesis based on 21st-century events.",
        "21वीं सदी की घटनाओं के आधार पर 'इतिहास के अंत' थीसिस की एक प्रमुख आलोचना दीजिए।"
      ]
    ],
    "longQ": [
      [
        "Discuss Daniel Bell's thesis on the 'End of Ideology'.",
        "'विचारधारा के अंत' पर डैनियल बेल की थीसिस पर चर्चा करें।"
      ],
      [
        "Examine Francis Fukuyama's concept of the 'End of History' in the context of the post-Cold War era.",
        "शीत युद्ध के बाद के युग के संदर्भ में फ्रांसिस फुकुयामा की 'इतिहास के अंत' की अवधारणा का परीक्षण करें।"
      ],
      [
        "Critically evaluate the 'End of Ideology' debate. Have ideologies really ended?",
        "'विचारधारा के अंत' की बहस का आलोचनात्मक मूल्यांकन करें। क्या विचारधाराएं वास्तव में समाप्त हो गई हैं?"
      ],
      [
        "Compare and contrast the views of Daniel Bell and Francis Fukuyama.",
        "डैनियल बेल और फ्रांसिस फुकुयामा के विचारों की तुलना करें।"
      ],
      [
        "Discuss how the rise of religious fundamentalism and authoritarian capitalism challenges Fukuyama's thesis.",
        "धार्मिक कट्टरवाद और सत्तावादी पूंजीवाद का उदय फुकुयामा की थीसिस को कैसे चुनौती देता है? चर्चा करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "The 1960 book \"The End of Ideology\", which argued that political consensus had replaced radical ideologies in the West, was written by:",
          "1960 की पुस्तक \"The End of Ideology\", जिसमें तर्क दिया गया था कि पश्चिम में राजनीतिक आम सहमति ने कट्टरपंथी विचारधाराओं की जगह ले ली है, किसके द्वारा लिखी गई थी:"
        ],
        "opts": [
          [
            "Karl Popper",
            "कार्ल पॉपर"
          ],
          [
            "Daniel Bell",
            "डैनियल बेल (Daniel Bell)"
          ],
          [
            "Francis Fukuyama",
            "फ्रांसिस फुकुयामा"
          ],
          [
            "John Rawls",
            "जॉन रॉल्स"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Francis Fukuyama's \"End of History\" thesis was proclaimed immediately following which major global event?",
          "फ्रांसिस फुकुयामा के \"इतिहास का अंत\" थीसिस की घोषणा किस प्रमुख वैश्विक घटना के तुरंत बाद की गई थी?"
        ],
        "opts": [
          [
            "World War II",
            "द्वितीय विश्व युद्ध"
          ],
          [
            "The collapse of the Soviet Union / End of Cold War",
            "सोवियत संघ का पतन / शीत युद्ध का अंत"
          ],
          [
            "The 9/11 Attacks",
            "9/11 के हमले"
          ],
          [
            "The 2008 Financial Crisis",
            "2008 का वित्तीय संकट"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "According to Fukuyama, what ideological system has emerged as the ultimate victor at the \"End of History\"?",
          "फुकुयामा के अनुसार, \"इतिहास के अंत\" में अंतिम विजेता के रूप में कौन सी वैचारिक प्रणाली उभरी है?"
        ],
        "opts": [
          [
            "Democratic Socialism",
            "लोकतांत्रिक समाजवाद"
          ],
          [
            "Neo-Marxism",
            "नव-मार्क्सवाद"
          ],
          [
            "Western Liberal Democracy and Free-Market Capitalism",
            "पश्चिमी उदारवादी लोकतंत्र और मुक्त-बाजार पूंजीवाद"
          ],
          [
            "Authoritarian Nationalism",
            "सत्तावादी राष्ट्रवाद"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "Critics of the \"End of Ideology\" thesis point to the rise of which new ideological movements in the 1960s and 70s as proof that ideology was not dead?",
          "\"विचारधारा का अंत\" थीसिस के आलोचक 1960 और 70 के दशक में किन नए वैचारिक आंदोलनों के उदय को इस बात के प्रमाण के रूप में इंगित करते हैं कि विचारधारा मृत नहीं थी?"
        ],
        "opts": [
          [
            "Monarchism",
            "राजशाही"
          ],
          [
            "Feminism, Environmentalism, and Civil Rights movements",
            "नारीवाद, पर्यावरणवाद और नागरिक अधिकार आंदोलन"
          ],
          [
            "Feudalism",
            "सामंतवाद"
          ],
          [
            "Mercantilism",
            "वाणिज्यवाद"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "The rise of China as a global superpower challenges Fukuyama's thesis because China represents a successful model of:",
          "वैश्विक महाशक्ति के रूप में चीन का उदय फुकुयामा की थीसिस को चुनौती देता है क्योंकि चीन किसका एक सफल मॉडल प्रस्तुत करता है:"
        ],
        "opts": [
          [
            "Liberal Democracy",
            "उदारवादी लोकतंत्र"
          ],
          [
            "Authoritarian State Capitalism",
            "सत्तावादी राज्य पूंजीवाद (Authoritarian State Capitalism)"
          ],
          [
            "Anarchism",
            "अराजकतावाद"
          ],
          [
            "Traditional Monarchy",
            "पारंपरिक राजतंत्र"
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
  }
];

export default function DetailedNotesPage() {
  const { language } = useAppStore();
  const paperTitle = language === 'en' ? 'PSC-C-312: Contemporary Political Issues' : 'PSC-C-312: समकालीन राजनीतिक मुद्दे';
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
            <span className="font-semibold">{t('Paper Code: PSC-C-312', 'पेपर कोड: PSC-C-312')}</span>
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
                                    Q{i+1}. {t(mcq.q[0], mcq.q[1])}
                                  </p>
                                  <div className="grid grid-cols-2 gap-1 mb-2">
                                    {mcq.opts.map((opt, j) => (
                                      <span key={j} className={`text-xs px-2 py-1 rounded ${j === mcq.correct && revealed ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-semibold' : 'text-gray-600 dark:text-gray-400'}`}>
                                        {String.fromCharCode(65+j)}. {t(opt[0], opt[1])}
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
            {t('All 8 Topics Complete! Full PSC-C-312 notes with 5-part structure, MCQs & UGC NET Prep ready.', 'सभी 8 विषय पूर्ण! 5-भाग संरचना, MCQ और UGC NET तैयारी के साथ संपूर्ण PSC-C-312 नोट्स तैयार।')}
          </p>
        </div>
      </div>
    </div>
  );
}
