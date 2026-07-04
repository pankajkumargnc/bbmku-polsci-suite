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

const NOTES: TopicNote[] = [
  {
    "id": "t1",
    "num": 1,
    "title": [
      "Comparative Politics: Meaning, Nature and Scope",
      "तुलनात्मक राजनीति: अर्थ, प्रकृति और दायरा"
    ],
    "introduction": [
      "Comparative Politics is a subfield of political science that involves the systematic study and comparison of the world's diverse political systems, institutions, processes, and behavior. Unlike international relations, which studies the interactions between states, comparative politics primarily focuses on the internal workings of states. Since Aristotle compared the constitutions of 158 Greek city-states, the discipline has evolved from a formal-legal approach to a highly analytical, empirical, and behavioral science, aiming to uncover universal laws of political behavior and system stability.",
      "तुलनात्मक राजनीति (Comparative Politics) राजनीति विज्ञान का एक उपक्षेत्र है जिसमें दुनिया की विविध राजनीतिक प्रणालियों, संस्थानों, प्रक्रियाओं और व्यवहार का व्यवस्थित अध्ययन और तुलना शामिल है। अंतरराष्ट्रीय संबंधों के विपरीत, जो राज्यों के बीच बातचीत का अध्ययन करता है, तुलनात्मक राजनीति मुख्य रूप से राज्यों के आंतरिक कामकाज पर केंद्रित है। जब से अरस्तू ने 158 ग्रीक नगर-राज्यों के संविधानों की तुलना की, यह अनुशासन एक औपचारिक-कानूनी दृष्टिकोण से एक अत्यधिक विश्लेषणात्मक, अनुभवजन्य और व्यवहारिक विज्ञान के रूप में विकसित हुआ है, जिसका उद्देश्य राजनीतिक व्यवहार और प्रणाली की स्थिरता के सार्वभौमिक नियमों को उजागर करना है।"
    ],
    "concepts": [
      {
        "heading": [
          "Meaning and Nature",
          "अर्थ और प्रकृति"
        ],
        "body": [
          "- Meaning: It is not just studying foreign governments in isolation, but analyzing them comparatively to identify similarities, differences, and patterns (e.g., why democracy thrives in country X but fails in country Y).\n- Nature: The traditional approach was normative, descriptive, and institutional (focusing on formal constitutions). The modern nature is empirical, analytical, and behavioral (focusing on actual political processes, power dynamics, political culture, and informal structures like interest groups).",
          "- अर्थ: यह केवल अलग-थलग विदेशी सरकारों का अध्ययन नहीं है, बल्कि समानताओं, अंतरों और पैटर्नों की पहचान करने के लिए उनका तुलनात्मक रूप से विश्लेषण करना है (उदा. देश X में लोकतंत्र क्यों पनपता है लेकिन देश Y में क्यों विफल हो जाता है)।\n- प्रकृति: पारंपरिक दृष्टिकोण मानक, वर्णनात्मक और संस्थागत था (औपचारिक संविधानों पर केंद्रित)। आधुनिक प्रकृति अनुभवजन्य, विश्लेषणात्मक और व्यवहारिक है (वास्तविक राजनीतिक प्रक्रियाओं, सत्ता की गतिशीलता, राजनीतिक संस्कृति और हित समूहों जैसी अनौपचारिक संरचनाओं पर केंद्रित है)।"
        ]
      },
      {
        "heading": [
          "Scope of Comparative Politics",
          "तुलनात्मक राजनीति का दायरा"
        ],
        "body": [
          "The scope has vastly expanded post-WWII:\n1. Beyond the West: Shifting from a Eurocentric focus to studying developing nations (Asia, Africa, Latin America).\n2. Beyond Formal Institutions: Studying political parties, pressure groups, voting behavior, and public opinion.\n3. Interdisciplinary Approach: Using sociology, economics, and psychology to explain political phenomena (Political Sociology, Political Economy).",
          "द्वितीय विश्व युद्ध के बाद इसका दायरा काफी बढ़ गया है:\n1. पश्चिम से परे: यूरोसेंट्रिक (Eurocentric) फोकस से हटकर विकासशील राष्ट्रों (एशिया, अफ्रीका, लैटिन अमेरिका) के अध्ययन की ओर।\n2. औपचारिक संस्थाओं से परे: राजनीतिक दलों, दबाव समूहों, मतदान व्यवहार और जनमत का अध्ययन करना।\n3. बहु-विषयक दृष्टिकोण: राजनीतिक घटनाओं (राजनीतिक समाजशास्त्र, राजनीतिक अर्थव्यवस्था) को समझाने के लिए समाजशास्त्र, अर्थशास्त्र और मनोविज्ञान का उपयोग करना।"
        ]
      }
    ],
    "quotes": [
      [
        "\"Comparative Politics is everything—or it is nothing.\" — Roy Macridis (highlighting its all-encompassing scope)",
        "\"तुलनात्मक राजनीति सब कुछ है—या यह कुछ भी नहीं है।\" — रॉय मैक्रिडिस (इसके सर्वव्यापी दायरे को उजागर करते हुए)"
      ],
      [
        "Reference: 'Comparative Politics' by J.C. Johari.",
        "संदर्भ: जे.सी. जौहरी द्वारा 'कम्पेरेटिव पॉलिटिक्स'।"
      ]
    ],
    "evaluation": [
      "A critical evaluation of comparative politics reveals its ongoing struggle with methodology. While the behavioral revolution brought scientific rigor, it often resulted in abstract, jargon-heavy models that were disconnected from historical realities. The attempt to create universal, \"value-free\" theories often failed when applied to the unique cultural contexts of the Third World. Today, the discipline is seeking a balance—combining the empirical rigor of modern approaches with the historical and contextual sensitivity of traditional approaches (Neo-Institutionalism).",
      "तुलनात्मक राजनीति का एक आलोचनात्मक मूल्यांकन कार्यप्रणाली के साथ इसके चल रहे संघर्ष को उजागर करता है। जबकि व्यवहारिक क्रांति (behavioral revolution) ने वैज्ञानिक कठोरता ला दी, यह अक्सर अमूर्त, शब्दजाल-भारी मॉडल के परिणामस्वरूप हुई जो ऐतिहासिक वास्तविकताओं से कटे हुए थे। सार्वभौमिक, \"मूल्य-मुक्त\" (value-free) सिद्धांत बनाने का प्रयास अक्सर तब विफल रहा जब इसे तीसरी दुनिया के अद्वितीय सांस्कृतिक संदर्भों पर लागू किया गया। आज, यह अनुशासन एक संतुलन की तलाश कर रहा है—आधुनिक दृष्टिकोणों की अनुभवजन्य कठोरता को पारंपरिक दृष्टिकोणों की ऐतिहासिक और प्रासंगिक संवेदनशीलता (नव-संस्थागतवाद - Neo-Institutionalism) के साथ जोड़ना।"
    ],
    "conclusion": [
      "In conclusion, Comparative Politics is the core mechanism through which political scientists make sense of a complex world. By moving beyond descriptive studies of western institutions to analytical studies of global political behavior, it provides the essential tools to evaluate why governments succeed or fail. Despite methodological challenges, it remains indispensable for forming generalized theories about human political organization.",
      "निष्कर्ष में, तुलनात्मक राजनीति वह मुख्य तंत्र है जिसके माध्यम से राजनीति वैज्ञानिक एक जटिल दुनिया को समझते हैं। पश्चिमी संस्थानों के वर्णनात्मक अध्ययनों से आगे बढ़कर वैश्विक राजनीतिक व्यवहार के विश्लेषणात्मक अध्ययनों की ओर बढ़ते हुए, यह यह मूल्यांकन करने के लिए आवश्यक उपकरण प्रदान करता है कि सरकारें क्यों सफल या विफल होती हैं। पद्धतिगत चुनौतियों के बावजूद, यह मानव राजनीतिक संगठन के बारे में सामान्यीकृत सिद्धांत बनाने के लिए अपरिहार्य बना हुआ है।"
    ],
    "shortQ": [
      [
        "Who is considered the father of comparative politics?",
        "तुलनात्मक राजनीति का जनक किसे माना जाता है?"
      ],
      [
        "What is the difference between Comparative Government and Comparative Politics?",
        "तुलनात्मक सरकार और तुलनात्मक राजनीति के बीच क्या अंतर है?"
      ],
      [
        "Mention two characteristics of the modern approach to comparative politics.",
        "तुलनात्मक राजनीति के आधुनिक दृष्टिकोण की दो विशेषताओं का उल्लेख करें।"
      ],
      [
        "Why is the traditional approach criticized as being 'parochial'?",
        "पारंपरिक दृष्टिकोण की 'संकीर्ण' (parochial) होने के रूप में आलोचना क्यों की जाती है?"
      ],
      [
        "What is the role of empirical study in comparative politics?",
        "तुलनात्मक राजनीति में अनुभवजन्य (empirical) अध्ययन की क्या भूमिका है?"
      ]
    ],
    "longQ": [
      [
        "Define Comparative Politics. Discuss its changing nature from traditional to modern approaches.",
        "तुलनात्मक राजनीति को परिभाषित करें। पारंपरिक से आधुनिक दृष्टिकोण तक इसकी बदलती प्रकृति पर चर्चा करें।"
      ],
      [
        "Examine the scope of comparative politics in the contemporary era.",
        "समकालीन युग में तुलनात्मक राजनीति के दायरे का परीक्षण करें।"
      ],
      [
        "Critically evaluate the utility and limitations of comparative politics.",
        "तुलनात्मक राजनीति की उपयोगिता और सीमाओं का आलोचनात्मक मूल्यांकन करें।"
      ],
      [
        "\"Comparative Politics has moved beyond the study of formal institutions.\" Discuss.",
        "\"तुलनात्मक राजनीति औपचारिक संस्थाओं के अध्ययन से आगे बढ़ गई है।\" चर्चा करें।"
      ],
      [
        "Discuss the impact of the behavioral revolution on the study of comparative politics.",
        "तुलनात्मक राजनीति के अध्ययन पर व्यवहारवादी क्रांति के प्रभाव पर चर्चा करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "Who famously compared the constitutions of 158 Greek city-states?",
          "प्रसिद्ध रूप से किसने 158 ग्रीक नगर-राज्यों के संविधानों की तुलना की थी?"
        ],
        "opts": [
          ["Plato", "प्लेटो"],
          ["Aristotle", "अरस्तू"],
          ["Machiavelli", "मैकियावेली"],
          ["Socrates", "सुकरात"]
        ],
        "correct": 1
      },
      {
        "q": [
          "The traditional approach to comparative politics was primarily:",
          "तुलनात्मक राजनीति का पारंपरिक दृष्टिकोण मुख्य रूप से था:"
        ],
        "opts": [
          ["Empirical and Behavioral", "अनुभवजन्य और व्यवहारिक"],
          ["Normative and Institutional", "मानक और संस्थागत"],
          ["Statistical and Analytical", "सांख्यिकीय और विश्लेषणात्मक"],
          ["Psychological", "मनोवैज्ञानिक"]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which revolution in the 1950s shifted the focus of comparative politics from formal institutions to actual political behavior?",
          "1950 के दशक में किस क्रांति ने तुलनात्मक राजनीति का ध्यान औपचारिक संस्थानों से वास्तविक राजनीतिक व्यवहार में स्थानांतरित कर दिया?"
        ],
        "opts": [
          ["Industrial Revolution", "औद्योगिक क्रांति"],
          ["Behavioral Revolution", "व्यवहारवादी क्रांति"],
          ["Marxist Revolution", "मार्क्सवादी क्रांति"],
          ["Cognitive Revolution", "संज्ञानात्मक क्रांति"]
        ],
        "correct": 1
      },
      {
        "q": [
          "The modern study of comparative politics is heavily influenced by:",
          "तुलनात्मक राजनीति का आधुनिक अध्ययन किससे काफी प्रभावित है:"
        ],
        "opts": [
          ["Theology", "धर्मशास्त्र"],
          ["Interdisciplinary approach", "बहु-विषयक दृष्टिकोण"],
          ["Astrology", "ज्योतिष"],
          ["Only History", "केवल इतिहास"]
        ],
        "correct": 1
      },
      {
        "q": [
          "A major criticism of the traditional approach was that it was 'Eurocentric'. What does this mean?",
          "पारंपरिक दृष्टिकोण की एक बड़ी आलोचना यह थी कि यह 'यूरोसेंट्रिक' था। इसका क्या मतलब है?"
        ],
        "opts": [
          ["It focused only on Asian countries", "इसने केवल एशियाई देशों पर ध्यान केंद्रित किया"],
          ["It focused almost exclusively on Western European institutions", "यह लगभग विशेष रूप से पश्चिमी यूरोपीय संस्थानों पर केंद्रित था"],
          ["It ignored Europe completely", "इसने यूरोप को पूरी तरह से नजरअंदाज कर दिया"],
          ["It focused on the United Nations", "इसने संयुक्त राष्ट्र पर ध्यान केंद्रित किया"]
        ],
        "correct": 1
      }
    ],
    "ugcNotes": [
      "For UGC NET: Differentiate between Comparative Government (formal/legal study of institutions) and Comparative Politics (study of all political activities, formal and informal). Key thinkers marking the transition to modern comparative politics: Gabriel Almond, David Easton, Roy Macridis.",
      "UGC NET के लिए: तुलनात्मक सरकार (संस्थानों का औपचारिक/कानूनी अध्ययन) और तुलनात्मक राजनीति (सभी राजनीतिक गतिविधियों का अध्ययन, औपचारिक और अनौपचारिक) के बीच अंतर करें। आधुनिक तुलनात्मक राजनीति में परिवर्तन को चिह्नित करने वाले प्रमुख विचारक: गेब्रियल बादाम, डेविड ईस्टन, रॉय मैक्रिडिस।"
    ],
    "ugcQ": [
      [
        "Q: Who wrote 'The Study of Comparative Government' (1955) criticizing the traditional approach? A: Roy Macridis.",
        "प्र: पारंपरिक दृष्टिकोण की आलोचना करते हुए 'द स्टडी ऑफ कम्पेरेटिव गवर्नमेंट' (1955) किसने लिखी? उ: रॉय मैक्रिडिस।"
      ]
    ]
  },
  {
    "id": "t2",
    "num": 2,
    "title": [
      "Salient Features of the Constitution (Britain, USA, France, Switzerland and China)",
      "संविधान की मुख्य विशेषताएं (ब्रिटेन, अमेरिका, फ्रांस, स्विट्जरलैंड और चीन)"
    ],
    "introduction": [
      "A Constitution is the fundamental law of a state, outlining its structure, powers, and the rights of its citizens. Studying the constitutions of major global powers provides insight into different models of governance: the Parliamentary sovereignty of Britain, the Presidential system of the USA, the mixed model of France, the direct democracy of Switzerland, and the one-party socialist state of China. These documents are not merely legal texts; they are reflections of the unique historical, cultural, and political struggles of their respective nations.",
      "संविधान किसी राज्य का मौलिक कानून है, जो इसकी संरचना, शक्तियों और इसके नागरिकों के अधिकारों को रेखांकित करता है। प्रमुख वैश्विक शक्तियों के संविधानों का अध्ययन करने से शासन के विभिन्न मॉडलों में अंतर्दृष्टि मिलती है: ब्रिटेन की संसदीय संप्रभुता, संयुक्त राज्य अमेरिका की अध्यक्षीय प्रणाली, फ्रांस का मिश्रित मॉडल, स्विट्जरलैंड का प्रत्यक्ष लोकतंत्र, और चीन का एक-दलीय समाजवादी राज्य। ये दस्तावेज केवल कानूनी पाठ नहीं हैं; वे अपने-अपने राष्ट्रों के अद्वितीय ऐतिहासिक, सांस्कृतिक और राजनीतिक संघर्षों के प्रतिबिंब हैं।"
    ],
    "concepts": [
      {
        "heading": [
          "Britain and USA: The Democratic Pioneers",
          "ब्रिटेन और अमेरिका: लोकतांत्रिक अग्रदूत"
        ],
        "body": [
          "- Britain (UK): An unwritten, evolved constitution. Features Parliamentary Sovereignty (Parliament can make/unmake any law), a Constitutional Monarchy (King is titular head), Rule of Law, and a Unitary system.\n- USA: The first written constitution (1787). Extremely rigid. Features Federalism, Presidential form of government, Separation of Powers (with Checks and Balances), and Judicial Supremacy (Judicial Review).",
          "- ब्रिटेन (UK): एक अलिखित, विकसित संविधान। इसमें संसदीय संप्रभुता (संसद कोई भी कानून बना/हटा सकती है), संवैधानिक राजतंत्र (राजा नाममात्र का प्रमुख होता है), कानून का शासन, और एक एकात्मक (Unitary) प्रणाली शामिल है।\n- अमेरिका: पहला लिखित संविधान (1787)। अत्यंत कठोर। इसमें संघवाद, सरकार का अध्यक्षीय रूप, शक्तियों का पृथक्करण (Checks and Balances के साथ), और न्यायिक सर्वोच्चता (न्यायिक समीक्षा) की विशेषताएं हैं।"
        ]
      },
      {
        "heading": [
          "France and Switzerland: Unique European Models",
          "फ्रांस और स्विट्जरलैंड: अद्वितीय यूरोपीय मॉडल"
        ],
        "body": [
          "- France (Fifth Republic, 1958): A Semi-Presidential system (combines a powerful, directly elected President with a Prime Minister accountable to the legislature). Known for strong administrative centralization and the Constitutional Council.\n- Switzerland: Famous for Direct Democracy tools (Referendum and Initiative). Features a Plural Executive (Federal Council of 7 members) and a highly decentralized Federal system (Cantons).",
          "- फ्रांस (पांचवां गणराज्य, 1958): एक अर्ध-अध्यक्षीय प्रणाली (एक शक्तिशाली, सीधे निर्वाचित राष्ट्रपति को विधायिका के प्रति जवाबदेह प्रधान मंत्री के साथ जोड़ती है)। मजबूत प्रशासनिक केंद्रीकरण और संवैधानिक परिषद के लिए जाना जाता है।\n- स्विट्जरलैंड: प्रत्यक्ष लोकतंत्र उपकरणों (जनमत संग्रह और पहल - Referendum and Initiative) के लिए प्रसिद्ध। इसमें एक बहुल कार्यपालिका (7 सदस्यों की संघीय परिषद) और एक अत्यधिक विकेंद्रीकृत संघीय प्रणाली (कैंटन) शामिल है।"
        ]
      },
      {
        "heading": [
          "China: The Socialist State",
          "चीन: समाजवादी राज्य"
        ],
        "body": [
          "- China (1982 Constitution): A socialist state under the people's democratic dictatorship led by the working class. It explicitly enshrines the monopoly of the Communist Party of China (CPC). Features Democratic Centralism, a unicameral legislature (National People's Congress), and no separation of powers.",
          "- चीन (1982 संविधान): मजदूर वर्ग के नेतृत्व में लोगों की लोकतांत्रिक तानाशाही के तहत एक समाजवादी राज्य। यह स्पष्ट रूप से कम्युनिस्ट पार्टी ऑफ चाइना (CPC) के एकाधिकार को स्थापित करता है। इसमें लोकतांत्रिक केंद्रीयवाद, एक सदनीय विधायिका (नेशनल पीपुल्स कांग्रेस), और शक्तियों का कोई पृथक्करण नहीं है।"
        ]
      }
    ],
    "quotes": [
      [
        "\"The British Constitution is a product of history and not of political design. It has evolved, not been made.\" — Ivor Jennings",
        "\"ब्रिटिश संविधान इतिहास का उत्पाद है, राजनीतिक डिजाइन का नहीं। यह विकसित हुआ है, बनाया नहीं गया है।\" — आइवर जेनिंग्स"
      ],
      [
        "Reference: 'Comparative Politics' by O. P. Gauba.",
        "संदर्भ: ओ. पी. गौबा द्वारा 'कम्पेरेटिव पॉलिटिक्स'।"
      ]
    ],
    "evaluation": [
      "Critically evaluating these constitutions reveals the adaptability of political institutions. The British unwritten constitution relies heavily on conventions, making it flexible but susceptible to executive dominance. The US Constitution's strict separation of powers prevents tyranny but often leads to legislative gridlock. France's Fifth Republic solved past instabilities by creating a \"Republican Monarch\" (the President). Switzerland proves that direct democracy is possible, albeit in small, highly educated nations. China's constitution, while economically flexible, remains politically rigid, serving primarily to legitimize the absolute rule of the Communist Party.",
      "इन संविधानों का आलोचनात्मक मूल्यांकन राजनीतिक संस्थानों की अनुकूलन क्षमता को उजागर करता है। ब्रिटिश अलिखित संविधान काफी हद तक परंपराओं (conventions) पर निर्भर करता है, जिससे यह लचीला बनता है लेकिन कार्यकारी प्रभुत्व के प्रति संवेदनशील हो जाता है। अमेरिकी संविधान का शक्तियों का सख्त पृथक्करण अत्याचार को रोकता है लेकिन अक्सर विधायी गतिरोध (gridlock) की ओर ले जाता है। फ्रांस के पांचवें गणराज्य ने एक \"रिपब्लिकन मोनार्क\" (राष्ट्रपति) बनाकर पिछली अस्थिरताओं को हल किया। स्विट्जरलैंड साबित करता है कि प्रत्यक्ष लोकतंत्र संभव है, हालांकि छोटे, अत्यधिक शिक्षित राष्ट्रों में। चीन का संविधान, हालांकि आर्थिक रूप से लचीला है, राजनीतिक रूप से कठोर बना हुआ है, मुख्य रूप से कम्युनिस्ट पार्टी के पूर्ण शासन को वैध बनाने के लिए कार्य करता है।"
    ],
    "conclusion": [
      "In conclusion, there is no \"perfect\" constitution. Each state tailors its constitutional framework to its unique socio-political realities. While the USA and UK offer the classic blueprints for Presidential and Parliamentary democracies respectively, models like Switzerland’s direct democracy and France’s hybrid system provide vital innovations. The comparative study of these constitutions provides essential lessons on how institutional design impacts political stability and citizen rights.",
      "निष्कर्ष में, कोई भी \"पूर्ण\" संविधान नहीं है। प्रत्येक राज्य अपने संवैधानिक ढांचे को अपनी अनूठी सामाजिक-राजनीतिक वास्तविकताओं के अनुरूप बनाता है। जबकि अमेरिका और ब्रिटेन क्रमशः अध्यक्षीय और संसदीय लोकतंत्रों के लिए क्लासिक खाका पेश करते हैं, स्विट्जरलैंड के प्रत्यक्ष लोकतंत्र और फ्रांस के हाइब्रिड सिस्टम जैसे मॉडल महत्वपूर्ण नवाचार प्रदान करते हैं। इन संविधानों का तुलनात्मक अध्ययन आवश्यक सबक प्रदान करता है कि संस्थागत डिजाइन राजनीतिक स्थिरता और नागरिक अधिकारों को कैसे प्रभावित करता है।"
    ],
    "shortQ": [
      [
        "What is meant by an 'unwritten constitution' in the context of Britain?",
        "ब्रिटेन के संदर्भ में 'अलिखित संविधान' का क्या अर्थ है?"
      ],
      [
        "What is the system of 'Checks and Balances' in the US Constitution?",
        "अमेरिकी संविधान में 'चेक एंड बैलेंस' (Checks and Balances) की प्रणाली क्या है?"
      ],
      [
        "What makes the French executive a 'semi-presidential' system?",
        "फ्रांसीसी कार्यपालिका को 'अर्ध-अध्यक्षीय' प्रणाली क्या बनाता है?"
      ],
      [
        "Define the Plural Executive of Switzerland.",
        "स्विट्जरलैंड की बहुल कार्यपालिका (Plural Executive) को परिभाषित करें।"
      ],
      [
        "What is Democratic Centralism in the context of China?",
        "चीन के संदर्भ में लोकतांत्रिक केंद्रीयवाद (Democratic Centralism) क्या है?"
      ]
    ],
    "longQ": [
      [
        "Discuss the salient features of the British Constitution, focusing on Parliamentary Sovereignty.",
        "संसदीय संप्रभुता पर ध्यान केंद्रित करते हुए ब्रिटिश संविधान की मुख्य विशेषताओं पर चर्चा करें।"
      ],
      [
        "Analyze the principles of Separation of Powers and Checks and Balances in the US Constitution.",
        "अमेरिकी संविधान में शक्तियों के पृथक्करण और चेक एंड बैलेंस के सिद्धांतों का विश्लेषण करें।"
      ],
      [
        "Examine the unique semi-presidential features of the Constitution of the Fifth Republic of France.",
        "फ्रांस के पांचवें गणराज्य के संविधान की अनूठी अर्ध-अध्यक्षीय विशेषताओं का परीक्षण करें।"
      ],
      [
        "Evaluate the instruments of Direct Democracy present in the Swiss Constitution.",
        "स्विस संविधान में मौजूद प्रत्यक्ष लोकतंत्र के उपकरणों का मूल्यांकन करें।"
      ],
      [
        "Discuss the role and position of the Communist Party in the Constitution of China.",
        "चीन के संविधान में कम्युनिस्ट पार्टी की भूमिका और स्थिति पर चर्चा करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "Which country has an 'unwritten' and highly flexible constitution?",
          "किस देश का संविधान 'अलिखित' और अत्यधिक लचीला है?"
        ],
        "opts": [
          ["USA", "अमेरिका"],
          ["France", "फ्रांस"],
          ["Britain", "ब्रिटेन"],
          ["Switzerland", "स्विट्जरलैंड"]
        ],
        "correct": 2
      },
      {
        "q": [
          "The concept of 'Judicial Review' originated in which country?",
          "'न्यायिक समीक्षा' (Judicial Review) की अवधारणा किस देश में उत्पन्न हुई?"
        ],
        "opts": [
          ["Britain", "ब्रिटेन"],
          ["USA", "अमेरिका"],
          ["India", "भारत"],
          ["China", "चीन"]
        ],
        "correct": 1
      },
      {
        "q": [
          "The 'Federal Council', consisting of seven members, functions as the Plural Executive in:",
          "सात सदस्यों वाली 'संघीय परिषद' किस देश में बहुल कार्यपालिका (Plural Executive) के रूप में कार्य करती है:"
        ],
        "opts": [
          ["France", "फ्रांस"],
          ["Switzerland", "स्विट्जरलैंड"],
          ["Britain", "ब्रिटेन"],
          ["China", "चीन"]
        ],
        "correct": 1
      },
      {
        "q": [
          "The current Constitution of France belongs to the:",
          "फ्रांस का वर्तमान संविधान किससे संबंधित है:"
        ],
        "opts": [
          ["Third Republic", "तीसरा गणराज्य"],
          ["Fourth Republic", "चौथा गणराज्य"],
          ["Fifth Republic", "पांचवां गणराज्य"],
          ["Sixth Republic", "छठा गणराज्य"]
        ],
        "correct": 2
      },
      {
        "q": [
          "The supreme organ of state power in China is the:",
          "चीन में राज्य की सत्ता का सर्वोच्च अंग कौन सा है?"
        ],
        "opts": [
          ["State Council", "राज्य परिषद"],
          ["President", "राष्ट्रपति"],
          ["National People's Congress", "नेशनल पीपुल्स कांग्रेस"],
          ["Supreme People's Court", "सुप्रीम पीपुल्स कोर्ट"]
        ],
        "correct": 2
      }
    ],
    "ugcNotes": [
      "For UGC NET: US Constitution = First written, rigid, checks & balances (Montesquieu's influence). UK = Unwritten, conventions, Magna Carta (1215). France = Semi-presidential (designed by Charles de Gaulle in 1958). Switzerland = Cantonal federalism, referendum, initiative. China = 1982 Constitution, Democratic Centralism (Leninist concept).",
      "UGC NET के लिए: अमेरिकी संविधान = पहला लिखित, कठोर, चेक एंड बैलेंस (मोंटेस्क्यू का प्रभाव)। यूके = अलिखित, परंपराएं, मैग्ना कार्टा (1215)। फ्रांस = अर्ध-अध्यक्षीय (1958 में चार्ल्स डी गॉल द्वारा डिजाइन किया गया)। स्विट्जरलैंड = कैंटोनल संघवाद, जनमत संग्रह, पहल। चीन = 1982 का संविधान, लोकतांत्रिक केंद्रीयवाद (लेनिनवादी अवधारणा)।"
    ],
    "ugcQ": [
      [
        "Q: In which country is the legislature often termed 'Parliamentary Sovereignty'? A: Britain.",
        "प्र: किस देश में विधायिका को अक्सर 'संसदीय संप्रभुता' कहा जाता है? उ: ब्रिटेन।"
      ]
    ]
  },
  {
    "id": "t3",
    "num": 3,
    "title": [
      "Approaches to Study: System Theory and Structural-Functional Approach",
      "अध्ययन के दृष्टिकोण: प्रणाली सिद्धांत और संरचनात्मक-कार्यात्मक दृष्टिकोण"
    ],
    "introduction": [
      "In the mid-20th century, Comparative Politics underwent a 'behavioral revolution', rejecting the traditional descriptive study of formal institutions in favor of scientific, theory-driven, and empirical approaches. Two of the most influential macro-theories that emerged were David Easton's 'System Theory' and Gabriel Almond's 'Structural-Functional Approach'. Borrowed from biology and sociology, these approaches attempt to provide a universal framework to analyze how any political system in the world operates, survives, and adapts to changes.",
      "20वीं सदी के मध्य में, तुलनात्मक राजनीति में एक 'व्यवहारवादी क्रांति' हुई, जिसने वैज्ञानिक, सिद्धांत-संचालित और अनुभवजन्य दृष्टिकोणों के पक्ष में औपचारिक संस्थानों के पारंपरिक वर्णनात्मक अध्ययन को खारिज कर दिया। दो सबसे प्रभावशाली मैक्रो-सिद्धांत जो उभरे वे थे डेविड ईस्टन का 'सिस्टम थ्योरी' (System Theory) और गेब्रियल बादाम का 'संरचनात्मक-कार्यात्मक दृष्टिकोण' (Structural-Functional Approach)। जीव विज्ञान और समाजशास्त्र से उधार लिए गए, ये दृष्टिकोण यह विश्लेषण करने के लिए एक सार्वभौमिक ढांचा प्रदान करने का प्रयास करते हैं कि दुनिया में कोई भी राजनीतिक व्यवस्था कैसे संचालित होती है, कैसे जीवित रहती है और परिवर्तनों के अनुकूल कैसे होती है।"
    ],
    "concepts": [
      {
        "heading": [
          "David Easton's System Theory",
          "डेविड ईस्टन का प्रणाली सिद्धांत"
        ],
        "body": [
          "Easton views politics as a \"political system\" interacting with its \"environment\".\n- Inputs: The system receives demands (requests for action) and supports (obedience, taxes) from the environment.\n- Conversion Process: The political system (government) processes these inputs.\n- Outputs: The system produces authoritative decisions and policies.\n- Feedback Loop: Outputs impact the environment, generating new demands/supports. A system survives if it maintains equilibrium through this dynamic feedback loop.",
          "ईस्टन राजनीति को उसके \"पर्यावरण\" के साथ बातचीत करने वाली \"राजनीतिक प्रणाली\" (political system) के रूप में देखते हैं।\n- इनपुट (Inputs): प्रणाली को पर्यावरण से मांग (कार्रवाई के अनुरोध) और समर्थन (आज्ञाकारिता, कर) प्राप्त होते हैं।\n- रूपांतरण प्रक्रिया (Conversion Process): राजनीतिक प्रणाली (सरकार) इन इनपुट को संसाधित करती है।\n- आउटपुट (Outputs): प्रणाली आधिकारिक निर्णय और नीतियां तैयार करती है।\n- फीडबैक लूप (Feedback Loop): आउटपुट पर्यावरण को प्रभावित करते हैं, जिससे नई मांग/समर्थन उत्पन्न होते हैं। कोई प्रणाली तब बची रहती है जब वह इस गतिशील फीडबैक लूप के माध्यम से संतुलन बनाए रखती है।"
        ]
      },
      {
        "heading": [
          "Almond's Structural-Functional Approach",
          "अल्मंड का संरचनात्मक-कार्यात्मक दृष्टिकोण"
        ],
        "body": [
          "Gabriel Almond criticized Easton's model as too abstract and Western-centric. He argued that every political system has 'Structures' (institutions like parties, courts) that perform necessary 'Functions' to keep the system alive.\n- Input Functions (performed by non-governmental structures): Political socialization, interest articulation (by pressure groups), interest aggregation (by political parties), and political communication.\n- Output Functions (performed by governmental structures): Rule-making (Legislature), Rule-application (Executive), and Rule-adjudication (Judiciary).",
          "गेब्रियल अल्मंड ने ईस्टन के मॉडल की बहुत अधिक अमूर्त और पश्चिमी-केंद्रित होने के रूप में आलोचना की। उन्होंने तर्क दिया कि प्रत्येक राजनीतिक प्रणाली में 'संरचनाएं' (पार्टियों, अदालतों जैसी संस्थाएं) होती हैं जो प्रणाली को जीवित रखने के लिए आवश्यक 'कार्य' (Functions) करती हैं।\n- इनपुट कार्य (गैर-सरकारी संरचनाओं द्वारा किए गए): राजनीतिक समाजीकरण, हित अभिव्यक्ति (दबाव समूहों द्वारा), हित एकत्रीकरण (राजनीतिक दलों द्वारा), और राजनीतिक संचार।\n- आउटपुट कार्य (सरकारी संरचनाओं द्वारा किए गए): नियम-निर्माण (विधायिका), नियम-अनुप्रयोग (कार्यपालिका), और नियम-निर्णय (न्यायपालिका)।"
        ]
      }
    ],
    "quotes": [
      [
        "\"Politics is the authoritative allocation of values for a society.\" — David Easton",
        "\"राजनीति समाज के लिए मूल्यों का आधिकारिक आवंटन है।\" — डेविड ईस्टन"
      ],
      [
        "Reference: 'Comparative Politics Today' by Gabriel Almond et al.",
        "संदर्भ: गेब्रियल अल्मंड और अन्य द्वारा 'कम्पेरेटिव पॉलिटिक्स टुडे'।"
      ]
    ],
    "evaluation": [
      "Critically evaluating these approaches, we see they successfully elevated political science to a rigorous empirical discipline. They allowed scholars to compare a Western democracy directly with an African tribal system using the same vocabulary of 'inputs and outputs'. However, they suffer from a conservative 'status quo' bias. Both models focus heavily on how a system survives and maintains stability (equilibrium), but fail adequately to explain radical revolutionary changes, sudden systemic collapses, or the role of conflict and class struggle (as pointed out by Marxist critics).",
      "इन दृष्टिकोणों का आलोचनात्मक मूल्यांकन करते हुए, हम देखते हैं कि उन्होंने सफलतापूर्वक राजनीति विज्ञान को एक कठोर अनुभवजन्य अनुशासन तक बढ़ा दिया। उन्होंने विद्वानों को 'इनपुट और आउटपुट' की समान शब्दावली का उपयोग करके पश्चिमी लोकतंत्र की सीधे अफ्रीकी आदिवासी प्रणाली के साथ तुलना करने की अनुमति दी। हालांकि, वे एक रूढ़िवादी 'यथास्थिति' (status quo) पूर्वाग्रह से ग्रस्त हैं। दोनों मॉडल इस बात पर भारी ध्यान केंद्रित करते हैं कि एक प्रणाली कैसे जीवित रहती है और स्थिरता (संतुलन) बनाए रखती है, लेकिन कट्टरपंथी क्रांतिकारी परिवर्तनों, अचानक प्रणालीगत पतन, या संघर्ष और वर्ग संघर्ष की भूमिका (जैसा कि मार्क्सवादी आलोचकों द्वारा बताया गया है) को पर्याप्त रूप से समझाने में विफल रहते हैं।"
    ],
    "conclusion": [
      "In conclusion, System Theory and the Structural-Functional approach were revolutionary milestones in comparative politics. Easton provided the \"black box\" mechanism of political survival, while Almond opened that box to detail the exact functions performed within it. Despite their limitations in explaining revolutionary change, they remain foundational frameworks for understanding the complex dynamics of modern political systems.",
      "निष्कर्ष में, सिस्टम थ्योरी और संरचनात्मक-कार्यात्मक दृष्टिकोण तुलनात्मक राजनीति में क्रांतिकारी मील के पत्थर थे। ईस्टन ने राजनीतिक अस्तित्व का \"ब्लैक बॉक्स\" तंत्र प्रदान किया, जबकि अल्मंड ने इसके भीतर किए गए सटीक कार्यों का विस्तार करने के लिए उस बॉक्स को खोला। क्रांतिकारी बदलाव को समझाने में अपनी सीमाओं के बावजूद, वे आधुनिक राजनीतिक प्रणालियों की जटिल गतिशीलता को समझने के लिए मूलभूत ढांचे बने हुए हैं।"
    ],
    "shortQ": [
      [
        "Define 'Political System' according to David Easton.",
        "डेविड ईस्टन के अनुसार 'राजनीतिक प्रणाली' को परिभाषित करें।"
      ],
      [
        "What are the two types of 'Inputs' in Easton's model?",
        "ईस्टन के मॉडल में दो प्रकार के 'इनपुट' क्या हैं?"
      ],
      [
        "What is the significance of the 'Feedback Loop'?",
        "'फीडबैक लूप' का क्या महत्व है?"
      ],
      [
        "List the four Input Functions given by Gabriel Almond.",
        "गेब्रियल अल्मंड द्वारा दिए गए चार इनपुट कार्यों की सूची बनाएं।"
      ],
      [
        "Who performs 'Interest Aggregation' in Almond's model?",
        "अल्मंड के मॉडल में 'हित एकत्रीकरण' (Interest Aggregation) कौन करता है?"
      ]
    ],
    "longQ": [
      [
        "Explain David Easton's System Theory. How does a political system maintain its equilibrium?",
        "डेविड ईस्टन की सिस्टम थ्योरी की व्याख्या करें। एक राजनीतिक व्यवस्था अपना संतुलन कैसे बनाए रखती है?"
      ],
      [
        "Critically examine Gabriel Almond's Structural-Functional approach to comparative politics.",
        "तुलनात्मक राजनीति के लिए गेब्रियल अल्मंड के संरचनात्मक-कार्यात्मक दृष्टिकोण का आलोचनात्मक परीक्षण करें।"
      ],
      [
        "Compare and contrast Easton's System Theory with Almond's Structural-Functional approach.",
        "अल्मंड के संरचनात्मक-कार्यात्मक दृष्टिकोण के साथ ईस्टन की सिस्टम थ्योरी की तुलना और विषमता करें।"
      ],
      [
        "Discuss the criticisms leveled against the Systems approach by Marxist scholars.",
        "मार्क्सवादी विद्वानों द्वारा सिस्टम दृष्टिकोण के खिलाफ की गई आलोचनाओं पर चर्चा करें।"
      ],
      [
        "How did the Structural-Functional approach help in studying political systems of developing countries?",
        "विकासशील देशों की राजनीतिक प्रणालियों का अध्ययन करने में संरचनात्मक-कार्यात्मक दृष्टिकोण ने कैसे मदद की?"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "Who defined politics as the 'authoritative allocation of values for a society'?",
          "राजनीति को 'समाज के लिए मूल्यों का आधिकारिक आवंटन' के रूप में किसने परिभाषित किया?"
        ],
        "opts": [
          ["Karl Marx", "कार्ल मार्क्स"],
          ["Max Weber", "मैक्स वेबर"],
          ["David Easton", "डेविड ईस्टन"],
          ["Gabriel Almond", "गेब्रियल अल्मंड"]
        ],
        "correct": 2
      },
      {
        "q": [
          "In Easton's Systems model, what translates outputs back into new inputs?",
          "ईस्टन के सिस्टम मॉडल में, आउटपुट को वापस नए इनपुट में कौन अनुवाद करता है?"
        ],
        "opts": [
          ["Black Box", "ब्लैक बॉक्स"],
          ["Feedback Loop", "फीडबैक लूप"],
          ["Conversion Process", "रूपांतरण प्रक्रिया"],
          ["Environment", "पर्यावरण"]
        ],
        "correct": 1
      },
      {
        "q": [
          "The Structural-Functional approach in political science was pioneered by:",
          "राजनीति विज्ञान में संरचनात्मक-कार्यात्मक दृष्टिकोण का बीड़ा किसके द्वारा उठाया गया था?"
        ],
        "opts": [
          ["Gabriel Almond", "गेब्रियल अल्मंड"],
          ["Lucian Pye", "लूसियन पाई"],
          ["Samuel Huntington", "सैमुअल हंटिंगटन"],
          ["Talcott Parsons", "टैल्कॉट पार्सन्स"]
        ],
        "correct": 0
      },
      {
        "q": [
          "According to Almond, which structure primarily performs the function of 'Interest Articulation'?",
          "अल्मंड के अनुसार, कौन सी संरचना मुख्य रूप से 'हित अभिव्यक्ति' (Interest Articulation) का कार्य करती है?"
        ],
        "opts": [
          ["Judiciary", "न्यायपालिका"],
          ["Pressure Groups", "दबाव समूह"],
          ["Bureaucracy", "नौकरशाही"],
          ["Legislature", "विधायिका"]
        ],
        "correct": 1
      },
      {
        "q": [
          "A major criticism of both System and Structural-Functional theories is their inability to adequately explain:",
          "सिस्टम और संरचनात्मक-कार्यात्मक दोनों सिद्धांतों की एक बड़ी आलोचना यह है कि वे पर्याप्त रूप से क्या समझाने में असमर्थ हैं:"
        ],
        "opts": [
          ["Equilibrium", "संतुलन"],
          ["Radical Change / Revolution", "कट्टरपंथी परिवर्तन / क्रांति"],
          ["Rule Application", "नियम अनुप्रयोग"],
          ["Political Socialization", "राजनीतिक समाजीकरण"]
        ],
        "correct": 1
      }
    ],
    "ugcNotes": [
      "For UGC NET: Match authors to concepts: David Easton (Systems Approach, Authoritative allocation of values, Black box), Gabriel Almond (Structural-Functionalism, Interest articulation/aggregation). Know that Almond's work was deeply influenced by sociologist Talcott Parsons.",
      "UGC NET के लिए: लेखकों को अवधारणाओं से मिलाएं: डेविड ईस्टन (सिस्टम दृष्टिकोण, मूल्यों का आधिकारिक आवंटन, ब्लैक बॉक्स), गेब्रियल अल्मंड (संरचनात्मक-कार्यात्मकता, रुचि अभिव्यक्ति/एकत्रीकरण)। जान लें कि अल्मंड का काम समाजशास्त्री टैल्कॉट पार्सन्स से गहराई से प्रभावित था।"
    ],
    "ugcQ": [
      [
        "Q: Name the book written by David Easton in 1953. A: 'The Political System'.",
        "प्र: 1953 में डेविड ईस्टन द्वारा लिखी गई पुस्तक का नाम बताइए। उ: 'द पॉलिटिकल सिस्टम'।"
      ]
    ]
  },
  {
    "id": "t4",
    "num": 4,
    "title": [
      "Constitutional Structures: Executive",
      "संवैधानिक संरचनाएं: कार्यपालिका"
    ],
    "introduction": [
      "The Executive is the branch of government responsible for implementing, supporting, and enforcing the laws made by the legislature. Historically, the executive (the monarch) held absolute power, but modern constitutionalism has redefined its scope and structure. In comparative politics, the executive structure varies significantly across different systems—ranging from the Parliamentary executive in Britain and India, the Presidential executive in the USA, to the unique Plural executive in Switzerland. Understanding these variations is crucial for analyzing how power is exercised and restrained in modern states.",
      "कार्यपालिका (Executive) सरकार की वह शाखा है जो विधायिका द्वारा बनाए गए कानूनों को लागू करने, समर्थन करने और लागू कराने के लिए जिम्मेदार है। ऐतिहासिक रूप से, कार्यपालिका (सम्राट) के पास पूर्ण शक्ति थी, लेकिन आधुनिक संविधानवाद ने इसके दायरे और संरचना को फिर से परिभाषित किया है। तुलनात्मक राजनीति में, कार्यपालिका संरचना विभिन्न प्रणालियों में काफी भिन्न होती है—ब्रिटेन और भारत में संसदीय कार्यपालिका, संयुक्त राज्य अमेरिका में अध्यक्षीय कार्यपालिका, स्विट्जरलैंड में अद्वितीय बहुल कार्यपालिका तक। इन विविधताओं को समझना आधुनिक राज्यों में सत्ता के प्रयोग और नियंत्रण का विश्लेषण करने के लिए महत्वपूर्ण है।"
    ],
    "concepts": [
      {
        "heading": [
          "Types of Executive Systems",
          "कार्यपालिका प्रणालियों के प्रकार"
        ],
        "body": [
          "- Parliamentary Executive (e.g., Britain, India): Dual executive. A nominal head (King/President) and a real head (Prime Minister). The executive is part of the legislature and is continuously accountable to it (can be removed via No-Confidence Motion).\n- Presidential Executive (e.g., USA): Single executive. The President is both head of state and head of government. Elected independently of the legislature, not part of it, and cannot be easily removed by it (except via impeachment).\n- Semi-Presidential (e.g., France): Dual executive but with a very strong, directly elected President sharing power with a Prime Minister.",
          "- संसदीय कार्यपालिका (उदा. ब्रिटेन, भारत): दोहरी कार्यपालिका। एक नाममात्र का प्रमुख (राजा/राष्ट्रपति) और एक वास्तविक प्रमुख (प्रधान मंत्री)। कार्यपालिका विधायिका का हिस्सा है और इसके प्रति लगातार जवाबदेह है (अविश्वास प्रस्ताव के माध्यम से हटाया जा सकता है)।\n- अध्यक्षीय कार्यपालिका (उदा. अमेरिका): एकल कार्यपालिका। राष्ट्रपति राज्य का प्रमुख और सरकार का प्रमुख दोनों होता है। विधायिका से स्वतंत्र रूप से निर्वाचित, इसका हिस्सा नहीं है, और इसे आसानी से हटाया नहीं जा सकता है (महाभियोग को छोड़कर)।\n- अर्ध-अध्यक्षीय (उदा. फ्रांस): दोहरी कार्यपालिका लेकिन एक बहुत मजबूत, सीधे निर्वाचित राष्ट्रपति के साथ जो एक प्रधान मंत्री के साथ सत्ता साझा करता है।"
        ]
      },
      {
        "heading": [
          "The Plural Executive of Switzerland",
          "स्विट्जरलैंड की बहुल कार्यपालिका"
        ],
        "body": [
          "Switzerland presents a unique model—the Federal Council. It consists of seven members elected by the legislature. All seven have equal power (no Prime Minister; the presidency rotates annually among them). It combines the stability of the Presidential system with the collegiality of the Parliamentary system.",
          "स्विट्जरलैंड एक अनूठा मॉडल प्रस्तुत करता है—संघीय परिषद (Federal Council)। इसमें विधायिका द्वारा चुने गए सात सदस्य होते हैं। सातों के पास समान शक्ति होती है (कोई प्रधान मंत्री नहीं; राष्ट्रपति पद उनके बीच प्रतिवर्ष घूमता है)। यह संसदीय प्रणाली के सामूहिकता (collegiality) के साथ अध्यक्षीय प्रणाली की स्थिरता को जोड़ता है।"
        ]
      }
    ],
    "quotes": [
      [
        "\"The executive power is the power of acting; the legislative power is the power of deliberating.\" — Alexander Hamilton",
        "\"कार्यकारी शक्ति कार्य करने की शक्ति है; विधायी शक्ति विचार-विमर्श करने की शक्ति है।\" — अलेक्जेंडर हैमिल्टन"
      ],
      [
        "Reference: 'Comparative Government and Politics' by J.C. Johari.",
        "संदर्भ: जे.सी. जौहरी द्वारा 'कम्पेरेटिव गवर्नमेंट एंड पॉलिटिक्स'।"
      ]
    ],
    "evaluation": [
      "A critical evaluation of modern executive structures reveals a universal trend: the \"aggrandizement of the executive\". Whether in a parliamentary or presidential system, the executive branch is becoming increasingly powerful at the expense of the legislature. Complex modern problems (like economic crises, terrorism, pandemics) require swift, decisive action, which slow-moving legislatures cannot provide. While this ensures administrative efficiency, it raises severe concerns about the erosion of democratic accountability and the rise of 'prime-ministerial dictatorships' or 'imperial presidencies'.",
      "आधुनिक कार्यपालिका संरचनाओं का एक आलोचनात्मक मूल्यांकन एक सार्वभौमिक प्रवृत्ति को उजागर करता है: \"कार्यपालिका की शक्ति में वृद्धि\" (aggrandizement of the executive)। चाहे संसदीय प्रणाली हो या अध्यक्षीय, विधायिका की कीमत पर कार्यपालिका शाखा तेजी से शक्तिशाली होती जा रही है। जटिल आधुनिक समस्याओं (जैसे आर्थिक संकट, आतंकवाद, महामारी) के लिए त्वरित, निर्णायक कार्रवाई की आवश्यकता होती है, जो धीमी गति से चलने वाली विधायिका प्रदान नहीं कर सकती हैं। हालांकि यह प्रशासनिक दक्षता सुनिश्चित करता है, यह लोकतांत्रिक जवाबदेही के क्षरण और 'प्रधान-मंत्री की तानाशाही' या 'साम्राज्यवादी राष्ट्रपति' (imperial presidencies) के उदय के बारे में गंभीर चिंताएं पैदा करता है।"
    ],
    "conclusion": [
      "In conclusion, the structure of the executive defines the character of a government. While the British model prioritizes accountability and the American model prioritizes stability, both are grappling with the expanding scope of executive power. The challenge for contemporary comparative politics is to design institutional checks that allow the executive to govern effectively without sliding into authoritarianism.",
      "निष्कर्ष में, कार्यपालिका की संरचना सरकार के चरित्र को परिभाषित करती है। जबकि ब्रिटिश मॉडल जवाबदेही को प्राथमिकता देता है और अमेरिकी मॉडल स्थिरता को प्राथमिकता देता है, दोनों कार्यकारी शक्ति के विस्तार के दायरे से जूझ रहे हैं। समकालीन तुलनात्मक राजनीति के लिए चुनौती ऐसे संस्थागत जांचों (institutional checks) को डिजाइन करना है जो कार्यपालिका को सत्तावाद में खिसके बिना प्रभावी ढंग से शासन करने की अनुमति देते हैं।"
    ],
    "shortQ": [
      [
        "Distinguish between Nominal and Real Executive.",
        "नाममात्र और वास्तविक कार्यपालिका के बीच अंतर करें।"
      ],
      [
        "What is the main characteristic of a Presidential Executive?",
        "अध्यक्षीय कार्यपालिका की मुख्य विशेषता क्या है?"
      ],
      [
        "How is the Swiss executive unique?",
        "स्विस कार्यपालिका किस प्रकार अनूठी है?"
      ],
      [
        "What is meant by the 'aggrandizement of the executive'?",
        "'कार्यपालिका की शक्ति में वृद्धि' से क्या तात्पर्य है?"
      ],
      [
        "Name a country that follows a Semi-Presidential system.",
        "उस देश का नाम बताइए जो अर्ध-अध्यक्षीय प्रणाली का पालन करता है।"
      ]
    ],
    "longQ": [
      [
        "Compare the powers and position of the British Prime Minister with that of the US President.",
        "ब्रिटिश प्रधान मंत्री की शक्तियों और स्थिति की तुलना अमेरिकी राष्ट्रपति से करें।"
      ],
      [
        "Discuss the features and working of the Plural Executive in Switzerland.",
        "स्विट्जरलैंड में बहुल कार्यपालिका (Plural Executive) की विशेषताओं और कार्यप्रणाली पर चर्चा करें।"
      ],
      [
        "Analyze the reasons for the growing power of the executive in modern democracies.",
        "आधुनिक लोकतंत्रों में कार्यपालिका की बढ़ती शक्ति के कारणों का विश्लेषण करें।"
      ],
      [
        "Evaluate the merits and demerits of the Parliamentary form of executive.",
        "कार्यपालिका के संसदीय स्वरूप के गुणों और दोषों का मूल्यांकन करें।"
      ],
      [
        "Explain the concept of the Semi-Presidential system with special reference to France.",
        "फ्रांस के विशेष संदर्भ में अर्ध-अध्यक्षीय प्रणाली की अवधारणा की व्याख्या करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "In which system is the executive legally completely separated from the legislature?",
          "किस प्रणाली में कार्यपालिका कानूनी रूप से विधायिका से पूरी तरह अलग होती है?"
        ],
        "opts": [
          ["Parliamentary System", "संसदीय प्रणाली"],
          ["Presidential System", "अध्यक्षीय प्रणाली"],
          ["Swiss System", "स्विस प्रणाली"],
          ["French System", "फ्रांसीसी प्रणाली"]
        ],
        "correct": 1
      },
      {
        "q": [
          "The 'Federal Council' of Switzerland consists of how many members?",
          "स्विट्जरलैंड की 'संघीय परिषद' में कितने सदस्य होते हैं?"
        ],
        "opts": [
          ["5", "5"],
          ["7", "7"],
          ["9", "9"],
          ["11", "11"]
        ],
        "correct": 1
      },
      {
        "q": [
          "A dual executive (Nominal and Real) is a hallmark of:",
          "दोहरी कार्यपालिका (नाममात्र और वास्तविक) किसकी पहचान है:"
        ],
        "opts": [
          ["Dictatorship", "तानाशाही"],
          ["Presidential Government", "अध्यक्षीय सरकार"],
          ["Parliamentary Government", "संसदीय सरकार"],
          ["Plural Government", "बहुल सरकार"]
        ],
        "correct": 2
      },
      {
        "q": [
          "In the USA, the President is elected for a fixed term of:",
          "USA में, राष्ट्रपति को कितने निश्चित कार्यकाल के लिए चुना जाता है:"
        ],
        "opts": [
          ["4 years", "4 वर्ष"],
          ["5 years", "5 वर्ष"],
          ["6 years", "6 वर्ष"],
          ["Life", "आजीवन"]
        ],
        "correct": 0
      },
      {
        "q": [
          "Which term is often used by critics to describe the growing dominance of the British Prime Minister?",
          "ब्रिटिश प्रधान मंत्री के बढ़ते प्रभुत्व का वर्णन करने के लिए आलोचकों द्वारा अक्सर किस शब्द का उपयोग किया जाता है?"
        ],
        "opts": [
          ["Parliamentary Sovereignty", "संसदीय संप्रभुता"],
          ["Prime Ministerial Dictatorship", "प्रधानमंत्री की तानाशाही"],
          ["Pluralism", "बहुलवाद"],
          ["Judicial Supremacy", "न्यायिक सर्वोच्चता"]
        ],
        "correct": 1
      }
    ],
    "ugcNotes": [
      "For UGC NET: Understand the core distinction: In Parliamentarism, the executive derives its democratic legitimacy from the legislature. In Presidentialism, the executive derives legitimacy independently. The Swiss Plural Executive is a collegial body with no single head of government.",
      "UGC NET के लिए: मुख्य अंतर को समझें: संसदीय प्रणाली में, कार्यपालिका अपनी लोकतांत्रिक वैधता विधायिका से प्राप्त करती है। अध्यक्षीय प्रणाली में, कार्यपालिका स्वतंत्र रूप से वैधता प्राप्त करती है। स्विस बहुल कार्यपालिका एक कॉलेजिएट निकाय है जिसमें सरकार का कोई एक प्रमुख नहीं है।"
    ],
    "ugcQ": [
      [
        "Q: Who wrote 'The English Constitution' defining the Cabinet as a hyphen joining legislative and executive parts? A: Walter Bagehot.",
        "प्र: 'द इंग्लिश कॉन्स्टीट्यूशन' किसने लिखा था जिसमें कैबिनेट को विधायी और कार्यकारी भागों को जोड़ने वाला हाइफ़न (hyphen) परिभाषित किया गया था? उ: वाल्टर बैगेहॉट।"
      ]
    ]
  },
  {
    "id": "t5",
    "num": 5,
    "title": [
      "Constitutional Structures: Legislature",
      "संवैधानिक संरचनाएं: विधायिका"
    ],
    "introduction": [
      "The Legislature is the rule-making body of the government, representing the will of the people. It is the primary forum for debate, deliberation, and legislation. In modern democracies, legislatures vary in structure—primarily between Unicameral (single chamber) and Bicameral (two chambers) systems. Comparing legislatures, such as the 'Mother of Parliaments' (British Parliament) with the powerful US Congress, reveals how legislative supremacy is balanced against executive action and judicial review.",
      "विधायिका (Legislature) सरकार का नियम बनाने वाला निकाय है, जो लोगों की इच्छा का प्रतिनिधित्व करता है। यह बहस, विचार-विमर्श और कानून बनाने का प्राथमिक मंच है। आधुनिक लोकतंत्रों में, विधायिकाओं की संरचना भिन्न होती है—मुख्य रूप से एकसदनीय (Unicameral) और द्विसदनीय (Bicameral) प्रणालियों के बीच। विधायिकाओं की तुलना करना, जैसे शक्तिशाली अमेरिकी कांग्रेस के साथ 'संसदों की जननी' (ब्रिटिश संसद), यह बताता है कि कार्यकारी कार्रवाई और न्यायिक समीक्षा के खिलाफ विधायी सर्वोच्चता कैसे संतुलित है।"
    ],
    "concepts": [
      {
        "heading": [
          "Bicameralism vs. Unicameralism",
          "द्विसदनीयता बनाम एकसदनीयता"
        ],
        "body": [
          "- Bicameralism: Having two houses (e.g., UK: House of Commons & House of Lords; USA: House of Representatives & Senate; India: Lok Sabha & Rajya Sabha). The lower house represents the people directly, while the upper house represents states/federating units or special interests. It prevents hasty legislation.\n- Unicameralism: Having a single house (e.g., China's National People's Congress). It is usually found in unitary states or socialist systems to ensure quick decision-making and concentrated power.",
          "- द्विसदनीयता (Bicameralism): दो सदन होना (उदा. यूके: हाउस ऑफ कॉमन्स और हाउस ऑफ लॉर्ड्स; यूएसए: प्रतिनिधि सभा और सीनेट; भारत: लोकसभा और राज्यसभा)। निचला सदन सीधे लोगों का प्रतिनिधित्व करता है, जबकि उच्च सदन राज्यों/संघीय इकाइयों या विशेष हितों का प्रतिनिधित्व करता है। यह जल्दबाजी में कानून बनाने से रोकता है।\n- एकसदनीयता (Unicameralism): एकल सदन होना (उदा. चीन की नेशनल पीपुल्स कांग्रेस)। त्वरित निर्णय लेने और केंद्रित शक्ति सुनिश्चित करने के लिए यह आमतौर पर एकात्मक राज्यों या समाजवादी प्रणालियों में पाया जाता है।"
        ]
      },
      {
        "heading": [
          "Functions and Decline of Legislatures",
          "विधायिकाओं के कार्य और पतन"
        ],
        "body": [
          "- Functions: Law-making, controlling the executive (in parliamentary systems), financial control (passing the budget), and acting as a national forum for grievances.\n- Decline of Legislatures: A major 20th-century phenomenon noted by Lord Bryce. Legislatures are losing their real power to the Executive and Bureaucracy because modern legislation is highly technical, party discipline (whips) restricts independent voting, and executives dominate via delegated legislation.",
          "- कार्य: कानून बनाना, कार्यपालिका को नियंत्रित करना (संसदीय प्रणालियों में), वित्तीय नियंत्रण (बजट पारित करना), और शिकायतों के लिए एक राष्ट्रीय मंच के रूप में कार्य करना।\n- विधायिकाओं का पतन: लॉर्ड ब्राइस द्वारा नोट की गई एक प्रमुख 20वीं सदी की घटना। विधायिकाएं कार्यपालिका और नौकरशाही के सामने अपनी वास्तविक शक्ति खो रही हैं क्योंकि आधुनिक कानून अत्यधिक तकनीकी है, पार्टी अनुशासन (whips) स्वतंत्र मतदान को प्रतिबंधित करता है, और कार्यपालिका प्रत्यायोजित कानून (delegated legislation) के माध्यम से हावी होती है।"
        ]
      }
    ],
    "quotes": [
      [
        "\"The legislature is the grand inquest of the nation.\" — K.C. Wheare",
        "\"विधायिका राष्ट्र की महान जांच (inquest) है।\" — के.सी. व्हेयर"
      ],
      [
        "Reference: 'Modern Constitutions' by K.C. Wheare.",
        "संदर्भ: के.सी. व्हेयर द्वारा 'मॉडर्न कॉन्स्टीट्यूशंस'।"
      ]
    ],
    "evaluation": [
      "Critically evaluating the role of legislatures today shows a paradox: while they remain the symbols of democratic legitimacy, their actual law-making function is heavily dictated by the executive. The US Senate remains a rare exception of an extremely powerful upper house, capable of blocking presidential appointments and treaties. In contrast, the British House of Lords has been reduced to a mere delaying chamber. The 'decline' of legislatures does not mean they are useless; rather, their primary role has shifted from initiating legislation to holding the powerful executive publicly accountable.",
      "आज विधायिकाओं की भूमिका का आलोचनात्मक मूल्यांकन एक विरोधाभास दर्शाता है: जबकि वे लोकतांत्रिक वैधता के प्रतीक बने हुए हैं, उनके वास्तविक कानून बनाने का कार्य कार्यपालिका द्वारा काफी हद तक तय किया जाता है। अमेरिकी सीनेट एक अत्यंत शक्तिशाली उच्च सदन का एक दुर्लभ अपवाद बनी हुई है, जो राष्ट्रपति की नियुक्तियों और संधियों को अवरुद्ध करने में सक्षम है। इसके विपरीत, ब्रिटिश हाउस ऑफ लॉर्ड्स को केवल एक देरी करने वाले कक्ष (delaying chamber) तक सीमित कर दिया गया है। विधायिकाओं के 'पतन' का मतलब यह नहीं है कि वे बेकार हैं; बल्कि, उनकी प्राथमिक भूमिका कानून शुरू करने से हटकर शक्तिशाली कार्यपालिका को सार्वजनिक रूप से जवाबदेह ठहराने में बदल गई है।"
    ],
    "conclusion": [
      "In conclusion, the legislature remains the indispensable heart of representative democracy. Whether bicameral or unicameral, its health determines the quality of democratic life. To counter the growing dominance of the executive, modern legislatures must strengthen their committee systems and enhance their technical expertise to effectively scrutinize complex government operations.",
      "निष्कर्ष में, विधायिका प्रतिनिधि लोकतंत्र का अपरिहार्य हृदय बनी हुई है। चाहे द्विसदनीय हो या एकसदनीय, इसका स्वास्थ्य लोकतांत्रिक जीवन की गुणवत्ता निर्धारित करता है। कार्यपालिका के बढ़ते प्रभुत्व का मुकाबला करने के लिए, आधुनिक विधायिकाओं को जटिल सरकारी कार्यों की प्रभावी ढंग से जांच करने के लिए अपनी समिति प्रणालियों (committee systems) को मजबूत करना चाहिए और अपनी तकनीकी विशेषज्ञता को बढ़ाना चाहिए।"
    ],
    "shortQ": [
      [
        "What is the difference between Unicameral and Bicameral legislatures?",
        "एकसदनीय और द्विसदनीय विधायिकाओं के बीच क्या अंतर है?"
      ],
      [
        "Why is an Upper House considered necessary in a federal system?",
        "संघीय व्यवस्था में उच्च सदन को आवश्यक क्यों माना जाता है?"
      ],
      [
        "Mention two reasons for the 'Decline of Legislatures'.",
        "'विधायिकाओं के पतन' के दो कारणों का उल्लेख करें।"
      ],
      [
        "What is 'Delegated Legislation'?",
        "'प्रत्यायोजित विधान' (Delegated Legislation) क्या है?"
      ],
      [
        "Name the two houses of the US Congress.",
        "अमेरिकी कांग्रेस के दो सदनों के नाम बताइए।"
      ]
    ],
    "longQ": [
      [
        "Discuss the arguments for and against a Bicameral Legislature.",
        "द्विसदनीय विधायिका के पक्ष और विपक्ष में तर्कों पर चर्चा करें।"
      ],
      [
        "\"The decline of the legislature is a universal phenomenon.\" Discuss the causes and consequences of this trend.",
        "\"विधायिका का पतन एक सार्वभौमिक घटना है।\" इस प्रवृत्ति के कारणों और परिणामों पर चर्चा करें।"
      ],
      [
        "Compare the powers of the US Senate with the British House of Lords.",
        "ब्रिटिश हाउस ऑफ लॉर्ड्स के साथ अमेरिकी सीनेट की शक्तियों की तुलना करें।"
      ],
      [
        "Examine the changing role and functions of legislatures in modern democracies.",
        "आधुनिक लोकतंत्रों में विधायिकाओं की बदलती भूमिका और कार्यों का परीक्षण करें।"
      ],
      [
        "Evaluate the effectiveness of the committee system in legislative bodies.",
        "विधायी निकायों में समिति प्रणाली (committee system) की प्रभावशीलता का मूल्यांकन करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "Which is generally considered the most powerful upper house in the world?",
          "किसे आम तौर पर दुनिया का सबसे शक्तिशाली उच्च सदन माना जाता है?"
        ],
        "opts": [
          ["Rajya Sabha (India)", "राज्यसभा (भारत)"],
          ["House of Lords (UK)", "हाउस ऑफ लॉर्ड्स (यूके)"],
          ["Senate (USA)", "सीनेट (यूएसए)"],
          ["Federal Council (Russia)", "संघीय परिषद (रूस)"]
        ],
        "correct": 2
      },
      {
        "q": [
          "The 'Mother of Parliaments' is a title given to the legislature of:",
          "'संसदों की जननी' (Mother of Parliaments) की उपाधि किस विधायिका को दी गई है:"
        ],
        "opts": [
          ["USA", "यूएसए"],
          ["France", "फ्रांस"],
          ["Britain", "ब्रिटेन"],
          ["Switzerland", "स्विट्जरलैंड"]
        ],
        "correct": 2
      },
      {
        "q": [
          "Which scholar famously highlighted the 'Decline of Legislatures' in modern times?",
          "किस विद्वान ने प्रसिद्ध रूप से आधुनिक समय में 'विधायिकाओं के पतन' पर प्रकाश डाला था?"
        ],
        "opts": [
          ["Karl Marx", "कार्ल मार्क्स"],
          ["Lord Bryce", "लॉर्ड ब्राइस"],
          ["John Locke", "जॉन लॉक"],
          ["Jean-Jacques Rousseau", "जीन-जैक्स रूसो"]
        ],
        "correct": 1
      },
      {
        "q": [
          "Delegated legislation refers to law-making power given by the legislature to:",
          "प्रत्यायोजित विधान (Delegated legislation) विधायिका द्वारा किसको दी गई कानून बनाने की शक्ति को संदर्भित करता है:"
        ],
        "opts": [
          ["The Judiciary", "न्यायपालिका को"],
          ["The Executive/Bureaucracy", "कार्यपालिका/नौकरशाही को"],
          ["The Media", "मीडिया को"],
          ["Local Panchayats", "स्थानीय पंचायतों को"]
        ],
        "correct": 1
      },
      {
        "q": [
          "China's National People's Congress is an example of a:",
          "चीन की नेशनल पीपुल्स कांग्रेस किसका एक उदाहरण है:"
        ],
        "opts": [
          ["Bicameral legislature", "द्विसदनीय विधायिका"],
          ["Unicameral legislature", "एकसदनीय विधायिका"],
          ["Tricameral legislature", "त्रिसदनीय विधायिका"],
          ["Non-sovereign body", "गैर-संप्रभु निकाय"]
        ],
        "correct": 1
      }
    ],
    "ugcNotes": [
      "For UGC NET: US Senate: 100 members (2 per state regardless of population), uniquely approves treaties and major appointments. House of Lords (UK): Hereditary and life peers, powers curtailed severely by Parliament Acts of 1911 and 1949 (can only delay money bills by 1 month, ordinary bills by 1 year).",
      "UGC NET के लिए: अमेरिकी सीनेट: 100 सदस्य (जनसंख्या की परवाह किए बिना प्रति राज्य 2), विशिष्ट रूप से संधियों और प्रमुख नियुक्तियों को मंजूरी देती है। हाउस ऑफ लॉर्ड्स (यूके): वंशानुगत और आजीवन साथियों (peers), 1911 और 1949 के संसद अधिनियमों द्वारा शक्तियों को गंभीर रूप से कम कर दिया गया।"
    ],
    "ugcQ": [
      [
        "Q: Filibuster is a procedural tactic used to delay legislation in which legislative body? A: US Senate.",
        "प्र: फिलीबस्टर (Filibuster) एक प्रक्रियात्मक रणनीति है जिसका उपयोग किस विधायी निकाय में कानून में देरी के लिए किया जाता है? उ: अमेरिकी सीनेट।"
      ]
    ]
  },
  {
    "id": "t6",
    "num": 6,
    "title": [
      "Constitutional Structures: Judiciary",
      "संवैधानिक संरचनाएं: न्यायपालिका"
    ],
    "introduction": [
      "The Judiciary is the third pillar of the state, responsible for interpreting laws, adjudicating disputes, and protecting the rights of citizens against executive and legislative overreach. A defining feature of modern democracies is the Independence of the Judiciary. In comparative politics, the most significant judicial power is 'Judicial Review'—the authority to declare laws or actions unconstitutional, a concept pioneered by the USA but less prevalent in systems with strict Parliamentary Sovereignty like Britain.",
      "न्यायपालिका राज्य का तीसरा स्तंभ है, जो कानूनों की व्याख्या करने, विवादों का न्यायनिर्णयन करने और कार्यपालिका और विधायी अतिक्रमण (overreach) के खिलाफ नागरिकों के अधिकारों की रक्षा करने के लिए जिम्मेदार है। आधुनिक लोकतंत्रों की एक परिभाषित विशेषता न्यायपालिका की स्वतंत्रता है। तुलनात्मक राजनीति में, सबसे महत्वपूर्ण न्यायिक शक्ति 'न्यायिक समीक्षा' (Judicial Review) है—कानूनों या कार्यों को असंवैधानिक घोषित करने का अधिकार, एक अवधारणा जो संयुक्त राज्य अमेरिका द्वारा शुरू की गई थी लेकिन ब्रिटेन की तरह सख्त संसदीय संप्रभुता वाले प्रणालियों में कम प्रचलित है।"
    ],
    "concepts": [
      {
        "heading": [
          "Independence of the Judiciary",
          "न्यायपालिका की स्वतंत्रता"
        ],
        "body": [
          "For a judiciary to function impartially, it must be independent of the executive and legislature. This is ensured through:\n- Security of tenure (judges cannot be easily removed).\n- Financial independence (salaries charged on a consolidated fund).\n- Transparent appointment processes.\n- Contempt of court powers to punish those who undermine its authority.",
          "एक न्यायपालिका को निष्पक्ष रूप से कार्य करने के लिए, उसे कार्यपालिका और विधायिका से स्वतंत्र होना चाहिए। यह सुनिश्चित किया जाता है:\n- कार्यकाल की सुरक्षा (न्यायाधीशों को आसानी से हटाया नहीं जा सकता)।\n- वित्तीय स्वतंत्रता (समेकित निधि पर प्रभारित वेतन)।\n- पारदर्शी नियुक्ति प्रक्रियाएं।\n- अदालत की अवमानना (Contempt of court) शक्तियां उन लोगों को दंडित करने के लिए जो इसके अधिकार को कमजोर करते हैं।"
        ]
      },
      {
        "heading": [
          "Judicial Review: USA vs. UK vs. Switzerland",
          "न्यायिक समीक्षा: USA बनाम UK बनाम स्विट्जरलैंड"
        ],
        "body": [
          "- USA: The Supreme Court is the ultimate interpreter of the Constitution (established in Marbury v. Madison, 1803). It exercises 'Due Process of Law' and can strike down both legislative acts and executive orders.\n- Britain: Lacks strict judicial review because of 'Parliamentary Sovereignty'. Courts cannot strike down Acts of Parliament; they can only interpret them.\n- Switzerland: Has a limited judicial review. The Federal Supreme Court can review cantonal (state) laws but cannot strike down Federal (central) laws, deferring to the will of the people expressed through referendums.",
          "- USA: सुप्रीम कोर्ट संविधान का अंतिम व्याख्याकार है (मार्बरी बनाम मैडिसन, 1803 में स्थापित)। यह 'कानून की उचित प्रक्रिया' (Due Process of Law) का प्रयोग करता है और विधायी कृत्यों और कार्यकारी आदेशों दोनों को रद्द कर सकता है।\n- ब्रिटेन: 'संसदीय संप्रभुता' के कारण सख्त न्यायिक समीक्षा का अभाव है। अदालतें संसद के अधिनियमों को रद्द नहीं कर सकती हैं; वे केवल उनकी व्याख्या कर सकती हैं।\n- स्विट्जरलैंड: एक सीमित न्यायिक समीक्षा है। संघीय सुप्रीम कोर्ट कैंटोनल (राज्य) कानूनों की समीक्षा कर सकता है लेकिन संघीय (केंद्रीय) कानूनों को रद्द नहीं कर सकता, जनमत संग्रह के माध्यम से व्यक्त लोगों की इच्छा को टाल देता है।"
        ]
      }
    ],
    "quotes": [
      [
        "\"The Constitution is what the judges say it is.\" — Chief Justice Charles Evans Hughes (USA)",
        "\"संविधान वही है जो न्यायाधीश कहते हैं कि वह है।\" — मुख्य न्यायाधीश चार्ल्स इवांस ह्यूजेस (USA)"
      ],
      [
        "Reference: 'Comparative Constitutional Law' by Tom Ginsburg.",
        "संदर्भ: टॉम गिन्सबर्ग द्वारा 'कम्पेरेटिव कॉन्स्टीट्यूशनल लॉ'।"
      ]
    ],
    "evaluation": [
      "Critically evaluating the power of the judiciary reveals a tension between 'Judicial Activism' and democratic accountability. In the US (and increasingly in India), the judiciary has become immensely powerful, often stepping into policy-making domains (judicial overreach). While this protects minority rights against a majoritarian legislature, critics argue it is undemocratic because unelected judges are overturning the will of elected representatives. Conversely, the British system limits the judiciary, trusting the Parliament to protect rights, which may leave minorities vulnerable to the 'tyranny of the majority'.",
      "न्यायपालिका की शक्ति का आलोचनात्मक मूल्यांकन 'न्यायिक सक्रियता' (Judicial Activism) और लोकतांत्रिक जवाबदेही के बीच तनाव को उजागर करता है। अमेरिका में (और भारत में भी तेजी से), न्यायपालिका बेहद शक्तिशाली हो गई है, अक्सर नीति-निर्माण डोमेन (न्यायिक अतिक्रमण) में कदम रखती है। हालांकि यह बहुसंख्यक विधायिका के खिलाफ अल्पसंख्यक अधिकारों की रक्षा करता है, आलोचकों का तर्क है कि यह अलोकतांत्रिक है क्योंकि अनिर्वाचित न्यायाधीश निर्वाचित प्रतिनिधियों की इच्छा को पलट रहे हैं। इसके विपरीत, ब्रिटिश प्रणाली न्यायपालिका को सीमित करती है, अधिकारों की रक्षा के लिए संसद पर भरोसा करती है, जो अल्पसंख्यकों को 'बहुमत के अत्याचार' (tyranny of the majority) के प्रति संवेदनशील छोड़ सकता है।"
    ],
    "conclusion": [
      "In conclusion, the judiciary acts as the essential balance wheel of the constitution. A truly independent judiciary equipped with the power of judicial review is crucial to maintain the rule of law and the separation of powers. However, courts must exercise self-restraint to ensure they do not become 'super-legislatures', respecting the delicate balance between constitutionalism and democracy.",
      "निष्कर्ष में, न्यायपालिका संविधान के आवश्यक संतुलन चक्र (balance wheel) के रूप में कार्य करती है। न्यायिक समीक्षा की शक्ति से लैस एक वास्तव में स्वतंत्र न्यायपालिका कानून के शासन और शक्तियों के पृथक्करण को बनाए रखने के लिए महत्वपूर्ण है। हालांकि, अदालतों को यह सुनिश्चित करने के लिए आत्म-संयम का प्रयोग करना चाहिए कि वे संविधानवाद और लोकतंत्र के बीच नाजुक संतुलन का सम्मान करते हुए 'सुपर-विधायिका' न बनें।"
    ],
    "shortQ": [
      [
        "What is Judicial Independence?",
        "न्यायिक स्वतंत्रता क्या है?"
      ],
      [
        "Define Judicial Review.",
        "न्यायिक समीक्षा को परिभाषित करें।"
      ],
      [
        "In which landmark case was the principle of Judicial Review established in the USA?",
        "अमेरिका में न्यायिक समीक्षा का सिद्धांत किस ऐतिहासिक मामले में स्थापित किया गया था?"
      ],
      [
        "Why does Britain not have a strong system of judicial review?",
        "ब्रिटेन में न्यायिक समीक्षा की एक मजबूत प्रणाली क्यों नहीं है?"
      ],
      [
        "What is 'Judicial Activism'?",
        "'न्यायिक सक्रियता' क्या है?"
      ]
    ],
    "longQ": [
      [
        "Explain the concept of Judicial Review with special reference to the US Supreme Court.",
        "अमेरिकी सुप्रीम कोर्ट के विशेष संदर्भ में न्यायिक समीक्षा की अवधारणा की व्याख्या करें।"
      ],
      [
        "Compare the powers and position of the Judiciary in the USA and the UK.",
        "यूएसए और यूके में न्यायपालिका की शक्तियों और स्थिति की तुलना करें।"
      ],
      [
        "Discuss the conditions necessary to ensure the Independence of the Judiciary.",
        "न्यायपालिका की स्वतंत्रता सुनिश्चित करने के लिए आवश्यक शर्तों पर चर्चा करें।"
      ],
      [
        "Critically evaluate the phenomenon of 'Judicial Activism'. Is it a threat to democracy?",
        "'न्यायिक सक्रियता' की घटना का आलोचनात्मक मूल्यांकन करें। क्या यह लोकतंत्र के लिए खतरा है?"
      ],
      [
        "Analyze the limited nature of Judicial Review in the Swiss Constitution.",
        "स्विस संविधान में न्यायिक समीक्षा की सीमित प्रकृति का विश्लेषण करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "The doctrine of Judicial Review was first explicitly pronounced by the US Supreme Court in the case of:",
          "न्यायिक समीक्षा के सिद्धांत को पहली बार स्पष्ट रूप से अमेरिकी सुप्रीम कोर्ट ने किस मामले में घोषित किया था?"
        ],
        "opts": [
          ["McCulloch v. Maryland", "मैककुलोच बनाम मैरीलैंड"],
          ["Marbury v. Madison", "मार्बरी बनाम मैडिसन"],
          ["Brown v. Board of Education", "ब्राउन बनाम बोर्ड ऑफ एजुकेशन"],
          ["Roe v. Wade", "रो बनाम वेड"]
        ],
        "correct": 1
      },
      {
        "q": [
          "In the UK, the highest court of appeal was traditionally the House of Lords. What replaced it in 2009?",
          "यूके में, अपील की सर्वोच्च अदालत पारंपरिक रूप से हाउस ऑफ लॉर्ड्स थी। 2009 में इसकी जगह किसने ली?"
        ],
        "opts": [
          ["The Privy Council", "प्रिवी काउंसिल"],
          ["The Supreme Court of the United Kingdom", "यूनाइटेड किंगडम का सर्वोच्च न्यायालय"],
          ["The Constitutional Court", "संवैधानिक न्यायालय"],
          ["The Crown Court", "क्राउन कोर्ट"]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which concept dictates that courts should not strike down laws unless they are blatantly unconstitutional?",
          "कौन सी अवधारणा यह निर्देश देती है कि अदालतों को तब तक कानूनों को रद्द नहीं करना चाहिए जब तक कि वे स्पष्ट रूप से असंवैधानिक न हों?"
        ],
        "opts": [
          ["Judicial Activism", "न्यायिक सक्रियता"],
          ["Judicial Restraint", "न्यायिक संयम"],
          ["Due Process", "उचित प्रक्रिया"],
          ["Habeas Corpus", "बंदी प्रत्यक्षीकरण"]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which country's Supreme Court can review cantonal laws but NOT federal laws?",
          "किस देश का सुप्रीम कोर्ट कैंटोनल कानूनों की समीक्षा कर सकता है लेकिन संघीय कानूनों की नहीं?"
        ],
        "opts": [
          ["USA", "यूएसए"],
          ["India", "भारत"],
          ["Switzerland", "स्विट्जरलैंड"],
          ["Australia", "ऑस्ट्रेलिया"]
        ],
        "correct": 2
      },
      {
        "q": [
          "In the US system, the power of Judicial Review is based on the principle of:",
          "अमेरिकी प्रणाली में, न्यायिक समीक्षा की शक्ति किस सिद्धांत पर आधारित है:"
        ],
        "opts": [
          ["Procedure Established by Law", "कानून द्वारा स्थापित प्रक्रिया"],
          ["Due Process of Law", "कानून की उचित प्रक्रिया (Due Process of Law)"],
          ["Parliamentary Sovereignty", "संसदीय संप्रभुता"],
          ["Divine Right", "ईश्वरीय अधिकार"]
        ],
        "correct": 1
      }
    ],
    "ugcNotes": [
      "For UGC NET: US Chief Justice John Marshall established Judicial Review in Marbury v. Madison (1803). France does not have a traditional Supreme Court for judicial review; instead, it has a 'Constitutional Council' that exercises 'a priori' review (reviewing laws before they are promulgated).",
      "UGC NET के लिए: अमेरिकी मुख्य न्यायाधीश जॉन मार्शल ने मार्बरी बनाम मैडिसन (1803) में न्यायिक समीक्षा की स्थापना की। फ्रांस में न्यायिक समीक्षा के लिए कोई पारंपरिक सर्वोच्च न्यायालय नहीं है; इसके बजाय, इसमें एक 'संवैधानिक परिषद' (Constitutional Council) है जो 'पूर्वगामी' (a priori) समीक्षा (प्रख्यापित होने से पहले कानूनों की समीक्षा) करती है।"
    ],
    "ugcQ": [
      [
        "Q: What is the French body that reviews the constitutionality of laws before enactment? A: The Constitutional Council (Conseil Constitutionnel).",
        "प्र: कानून बनने से पहले कानूनों की संवैधानिकता की समीक्षा करने वाला फ्रांसीसी निकाय कौन सा है? उ: संवैधानिक परिषद (Conseil Constitutionnel)।"
      ]
    ]
  },
  {
    "id": "t7",
    "num": 7,
    "title": [
      "Process of Constitutional Amendments",
      "संवैधानिक संशोधनों की प्रक्रिया"
    ],
    "introduction": [
      "A Constitution is a living document. For a state to progress and adapt to changing socio-economic and political realities, its constitution must be capable of being amended. The process of constitutional amendment determines whether a constitution is 'Rigid' or 'Flexible'. Analyzing the amendment procedures of countries like the UK, USA, Switzerland, and India reveals the delicate balance constitutional makers attempt to strike between stability (preventing frivolous changes) and adaptability (allowing necessary reforms).",
      "संविधान एक जीवंत दस्तावेज है। किसी राज्य को प्रगति करने और बदलती सामाजिक-आर्थिक और राजनीतिक वास्तविकताओं के अनुकूल होने के लिए, उसके संविधान में संशोधन करने में सक्षम होना चाहिए। संवैधानिक संशोधन की प्रक्रिया यह निर्धारित करती है कि संविधान 'कठोर' (Rigid) है या 'लचीला' (Flexible)। यूके, यूएसए, स्विट्जरलैंड और भारत जैसे देशों की संशोधन प्रक्रियाओं का विश्लेषण करने से उस नाजुक संतुलन का पता चलता है जो संविधान निर्माता स्थिरता (तुच्छ परिवर्तनों को रोकने) और अनुकूलन क्षमता (आवश्यक सुधारों की अनुमति देने) के बीच बनाने का प्रयास करते हैं।"
    ],
    "concepts": [
      {
        "heading": [
          "Flexible vs. Rigid Constitutions",
          "लचीला बनाम कठोर संविधान"
        ],
        "body": [
          "- Flexible Constitution (e.g., UK): The procedure to amend the constitution is the exact same as passing an ordinary law. A simple majority in the Parliament is sufficient. It allows quick adaptation but risks instability.\n- Rigid Constitution (e.g., USA): The amendment process is distinctly different and much more difficult than ordinary law-making, often requiring super-majorities and ratification by states. It ensures stability but can lead to stagnation.",
          "- लचीला संविधान (उदा. यूके): संविधान में संशोधन करने की प्रक्रिया ठीक वैसी ही है जैसे कोई साधारण कानून पारित करना। संसद में एक साधारण बहुमत पर्याप्त है। यह त्वरित अनुकूलन की अनुमति देता है लेकिन अस्थिरता का जोखिम उठाता है।\n- कठोर संविधान (उदा. यूएसए): संशोधन प्रक्रिया स्पष्ट रूप से अलग है और साधारण कानून बनाने की तुलना में बहुत अधिक कठिन है, जिसमें अक्सर सुपर-बहुमत और राज्यों द्वारा अनुसमर्थन (ratification) की आवश्यकता होती है। यह स्थिरता सुनिश्चित करता है लेकिन ठहराव (stagnation) पैदा कर सकता है।"
        ]
      },
      {
        "heading": [
          "Amendment Procedures: USA and Switzerland",
          "संशोधन प्रक्रियाएं: अमेरिका और स्विट्जरलैंड"
        ],
        "body": [
          "- USA: Extremely rigid. Proposal requires a 2/3rd majority in both houses of Congress. Ratification requires approval by 3/4th of the State Legislatures (38 out of 50 states). Hence, only 27 amendments have occurred in over 200 years.\n- Switzerland: Features popular participation. Amendments can be proposed by the Federal Legislature or through a Popular Initiative (citizens collecting signatures). Ratification requires a 'Double Majority'—a majority of the total voting citizens AND a majority of the Cantons (states) in a compulsory Referendum.",
          "- अमेरिका: अत्यंत कठोर। प्रस्ताव के लिए कांग्रेस के दोनों सदनों में 2/3 बहुमत की आवश्यकता होती है। अनुसमर्थन के लिए राज्य विधानसभाओं के 3/4 (50 में से 38 राज्यों) के अनुमोदन की आवश्यकता होती है। इसलिए, 200 से अधिक वर्षों में केवल 27 संशोधन हुए हैं।\n- स्विट्जरलैंड: लोकप्रिय भागीदारी की सुविधा है। संशोधन संघीय विधायिका द्वारा या एक लोकप्रिय पहल (Popular Initiative - नागरिकों द्वारा हस्ताक्षर एकत्र करना) के माध्यम से प्रस्तावित किए जा सकते हैं। अनुसमर्थन के लिए 'दोहरे बहुमत' (Double Majority) की आवश्यकता होती है—अनिवार्य जनमत संग्रह में कुल मतदान करने वाले नागरिकों का बहुमत और कैंटन (राज्यों) का बहुमत।"
        ]
      }
    ],
    "quotes": [
      [
        "\"A constitution which will not bend, will sooner or later break.\" — Lord Macaulay",
        "\"जो संविधान झुकेगा नहीं, वह देर-सबेर टूट जाएगा।\" — लॉर्ड मैकाले"
      ],
      [
        "Reference: 'Constitutional Government and Democracy' by Carl J. Friedrich.",
        "संदर्भ: कार्ल जे. फ्रेडरिक द्वारा 'कॉन्स्टीट्यूशनल गवर्नमेंट एंड डेमोक्रेसी'।"
      ]
    ],
    "evaluation": [
      "Critically evaluating amendment procedures, one finds that extreme rigidity (USA) can severely hamper democratic progress, making it nearly impossible to pass crucial updates (like the Equal Rights Amendment). In contrast, extreme flexibility (UK) leaves fundamental rights at the mercy of a temporary parliamentary majority. The Indian and Swiss models offer better alternatives. India blends rigidity (for federal structures) with flexibility (for ordinary provisions). Switzerland democratizes the process entirely by placing the ultimate amendment power directly in the hands of the people, though this sometimes leads to populism.",
      "संशोधन प्रक्रियाओं का आलोचनात्मक मूल्यांकन करने पर, कोई पाता है कि अत्यधिक कठोरता (USA) लोकतांत्रिक प्रगति को गंभीर रूप से बाधित कर सकती है, जिससे महत्वपूर्ण अपडेट (जैसे समान अधिकार संशोधन) पारित करना लगभग असंभव हो जाता है। इसके विपरीत, अत्यधिक लचीलापन (UK) मौलिक अधिकारों को अस्थायी संसदीय बहुमत की दया पर छोड़ देता है। भारतीय और स्विस मॉडल बेहतर विकल्प प्रदान करते हैं। भारत लचीलेपन (सामान्य प्रावधानों के लिए) के साथ कठोरता (संघीय संरचनाओं के लिए) का मिश्रण करता है। स्विट्जरलैंड पूरी तरह से लोगों के हाथों में अंतिम संशोधन शक्ति रखकर प्रक्रिया का लोकतंत्रीकरण करता है, हालांकि इससे कभी-कभी लोकलुभावनवाद (populism) पैदा होता है।"
    ],
    "conclusion": [
      "In conclusion, the process of constitutional amendment is the safety valve of a political system. A well-designed amendment procedure must be difficult enough to prevent the constitution from being reduced to a political plaything, yet flexible enough to allow the state to grow and respond to the organic needs of a changing society.",
      "निष्कर्ष में, संवैधानिक संशोधन की प्रक्रिया एक राजनीतिक व्यवस्था का सुरक्षा वाल्व (safety valve) है। एक अच्छी तरह से डिज़ाइन की गई संशोधन प्रक्रिया इतनी कठिन होनी चाहिए कि संविधान को राजनीतिक खिलवाड़ बनने से रोका जा सके, फिर भी इतनी लचीली होनी चाहिए कि राज्य को बढ़ने और बदलते समाज की जैविक जरूरतों का जवाब देने की अनुमति मिल सके।"
    ],
    "shortQ": [
      [
        "What is the difference between a flexible and a rigid constitution?",
        "लचीले और कठोर संविधान के बीच क्या अंतर है?"
      ],
      [
        "How is a constitutional amendment proposed in the USA?",
        "अमेरिका में संवैधानिक संशोधन का प्रस्ताव कैसे किया जाता है?"
      ],
      [
        "What is a 'Popular Initiative' in Switzerland?",
        "स्विट्जरलैंड में 'लोकप्रिय पहल' (Popular Initiative) क्या है?"
      ],
      [
        "What is meant by 'Double Majority' in Swiss referendums?",
        "स्विस जनमत संग्रह में 'दोहरे बहुमत' (Double Majority) का क्या अर्थ है?"
      ],
      [
        "Why is the US Constitution considered highly rigid?",
        "अमेरिकी संविधान को अत्यधिक कठोर क्यों माना जाता है?"
      ]
    ],
    "longQ": [
      [
        "Compare the amendment process of the rigid US Constitution with that of the flexible British Constitution.",
        "कठोर अमेरिकी संविधान की संशोधन प्रक्रिया की तुलना लचीले ब्रिटिश संविधान से करें।"
      ],
      [
        "Discuss the role of Direct Democracy (Referendum and Initiative) in amending the Swiss Constitution.",
        "स्विस संविधान में संशोधन में प्रत्यक्ष लोकतंत्र (जनमत संग्रह और पहल) की भूमिका पर चर्चा करें।"
      ],
      [
        "\"A constitution must balance stability with adaptability.\" Discuss this statement in the context of amendment procedures.",
        "\"एक संविधान को अनुकूलन क्षमता के साथ स्थिरता को संतुलित करना चाहिए।\" संशोधन प्रक्रियाओं के संदर्भ में इस कथन पर चर्चा करें।"
      ],
      [
        "Evaluate the merits and demerits of a highly rigid constitution.",
        "अत्यधिक कठोर संविधान के गुणों और दोषों का मूल्यांकन करें।"
      ],
      [
        "Analyze how the Indian amendment process (Article 368) serves as a middle ground between the US and UK models.",
        "विश्लेषण करें कि कैसे भारतीय संशोधन प्रक्रिया (अनुच्छेद 368) अमेरिका और ब्रिटेन के मॉडल के बीच एक मध्य मार्ग के रूप में कार्य करती है।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "Which of the following countries has the most flexible constitution?",
          "निम्नलिखित में से किस देश का संविधान सबसे लचीला है?"
        ],
        "opts": [
          ["USA", "यूएसए"],
          ["India", "भारत"],
          ["UK", "यूके"],
          ["Switzerland", "स्विट्जरलैंड"]
        ],
        "correct": 2
      },
      {
        "q": [
          "In the USA, ratification of a constitutional amendment requires approval from what fraction of the states?",
          "अमेरिका में, एक संवैधानिक संशोधन के अनुसमर्थन (ratification) के लिए राज्यों के किस अंश से अनुमोदन की आवश्यकता होती है?"
        ],
        "opts": [
          ["Half (1/2)", "आधा (1/2)"],
          ["Two-thirds (2/3)", "दो-तिहाई (2/3)"],
          ["Three-fourths (3/4)", "तीन-चौथाई (3/4)"],
          ["Unanimous (All states)", "सर्वसम्मत (सभी राज्य)"]
        ],
        "correct": 2
      },
      {
        "q": [
          "In Switzerland, a constitutional amendment must be approved by a 'Double Majority'. This means:",
          "स्विट्जरलैंड में, एक संवैधानिक संशोधन को 'दोहरे बहुमत' द्वारा अनुमोदित किया जाना चाहिए। इसका मतलब है:"
        ],
        "opts": [
          ["Majority of men and women", "पुरुषों और महिलाओं का बहुमत"],
          ["Majority in both houses of parliament", "संसद के दोनों सदनों में बहुमत"],
          ["Majority of voting citizens AND majority of cantons", "मतदान करने वाले नागरिकों का बहुमत और कैंटन का बहुमत"],
          ["Approval by President and Prime Minister", "राष्ट्रपति और प्रधान मंत्री द्वारा अनुमोदन"]
        ],
        "correct": 2
      },
      {
        "q": [
          "How many amendments have been successfully made to the US Constitution since its inception?",
          "अपनी स्थापना के बाद से अमेरिकी संविधान में कितने संशोधन सफलतापूर्वक किए गए हैं?"
        ],
        "opts": [
          ["10", "10"],
          ["27", "27"],
          ["104", "104"],
          ["Over 200", "200 से अधिक"]
        ],
        "correct": 1
      },
      {
        "q": [
          "A method where citizens themselves can propose a constitutional amendment by collecting a certain number of signatures is called:",
          "एक ऐसी विधि जहां नागरिक स्वयं एक निश्चित संख्या में हस्ताक्षर एकत्र करके संवैधानिक संशोधन का प्रस्ताव कर सकते हैं, क्या कहलाती है:"
        ],
        "opts": [
          ["Referendum", "जनमत संग्रह (Referendum)"],
          ["Recall", "वापस बुलाना (Recall)"],
          ["Initiative", "पहल (Initiative)"],
          ["Plebiscite", "जनमत-संग्रह (Plebiscite)"]
        ],
        "correct": 2
      }
    ],
    "ugcNotes": [
      "For UGC NET: US Article V deals with amendments. The first 10 amendments in the US are collectively called the Bill of Rights (1791). In Switzerland, a 'total revision' or 'partial revision' of the constitution is possible, both ultimately requiring a mandatory referendum.",
      "UGC NET के लिए: अमेरिकी अनुच्छेद V संशोधनों से संबंधित है। अमेरिका में पहले 10 संशोधनों को सामूहिक रूप से बिल ऑफ राइट्स (1791) कहा जाता है। स्विट्जरलैंड में, संविधान का 'कुल संशोधन' या 'आंशिक संशोधन' संभव है, दोनों के लिए अंततः अनिवार्य जनमत संग्रह की आवश्यकता होती है।"
    ],
    "ugcQ": [
      [
        "Q: Does the UK require a super-majority (e.g., 2/3rd) to amend its unwritten constitution? A: No, a simple majority in Parliament is sufficient.",
        "प्र: क्या यूके को अपने अलिखित संविधान में संशोधन करने के लिए सुपर-बहुमत (उदा., 2/3) की आवश्यकता है? उ: नहीं, संसद में साधारण बहुमत पर्याप्त है।"
      ]
    ]
  }
];

export default function ComparativePoliticsPage() {
  const { language } = useAppStore();
  const paperTitle = language === 'en' ? 'PSC-C-415: Comparative Government and Politics' : 'PSC-C-415: तुलनात्मक सरकार और राजनीति';
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
              {t('PG Semester IV — Detailed Bilingual Notes', 'PG सेमेस्टर IV — विस्तृत द्विभाषी नोट्स')}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-violet-600 to-fuchsia-700 rounded-2xl p-5 text-white mb-8">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">{t('Paper Code: PSC-C-415', 'पेपर कोड: PSC-C-415')}</span>
          </div>
          <p className="text-sm text-white/80">
            {t('5 Credits | 60 Lectures + 15 Tutorials | Full Marks: 100 (End Sem: 70 + Internal: 30) | 7 Topics', '5 क्रेडिट | 60 लेक्चर + 15 ट्यूटोरियल | पूर्णांक: 100 (सेमेस्टर: 70 + आंतरिक: 30) | 7 विषय')}
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
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
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
            {t('All 7 Topics Complete! Full PSC-C-415 notes with 5-part structure, MCQs & UGC NET Prep ready.', 'सभी 7 विषय पूर्ण! 5-भाग संरचना, MCQ और UGC NET तैयारी के साथ संपूर्ण PSC-C-415 नोट्स तैयार।')}
          </p>
        </div>
      </div>
    </div>
  );
}
