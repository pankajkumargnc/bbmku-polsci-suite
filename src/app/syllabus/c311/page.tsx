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
      "Meaning, Nature and Scope of Political Sociology",
      "राजनीतिक समाजशास्त्र का अर्थ, प्रकृति और क्षेत्र"
    ],
    "introduction": [
      "Political Sociology is a hybrid discipline that emerged at the intersection of Political Science and Sociology. While Political Science traditionally focused on the formal institutions of the state (government, constitution, laws), and Sociology focused on society (family, religion, class), Political Sociology studies the dynamic relationship between the two. It examines how social structures influence political systems and, conversely, how political decisions shape society. It is the study of \"power in its social context.\"",
      "राजनीतिक समाजशास्त्र (Political Sociology) एक संकर (hybrid) विषय है जो राजनीति विज्ञान और समाजशास्त्र के चौराहे पर उभरा है। जबकि राजनीति विज्ञान पारंपरिक रूप से राज्य के औपचारिक संस्थानों (सरकार, संविधान, कानून) पर केंद्रित था, और समाजशास्त्र समाज (परिवार, धर्म, वर्ग) पर केंद्रित था, राजनीतिक समाजशास्त्र दोनों के बीच गतिशील संबंधों का अध्ययन करता है। यह जांचता है कि सामाजिक संरचनाएं राजनीतिक प्रणालियों को कैसे प्रभावित करती हैं और, इसके विपरीत, राजनीतिक निर्णय समाज को कैसे आकार देते हैं। यह \"अपने सामाजिक संदर्भ में सत्ता (power)\" का अध्ययन है।"
    ],
    "concepts": [
      {
        "heading": [
          "Meaning",
          "अर्थ (Meaning)"
        ],
        "body": [
          "It is the sociological analysis of political phenomena. It views the state not as an isolated entity, but as a subsystem within the larger social system. It investigates the social basis of power, authority, and political behavior.",
          "यह राजनीतिक घटनाओं का समाजशास्त्रीय विश्लेषण है। यह राज्य को एक अलग इकाई के रूप में नहीं, बल्कि बड़ी सामाजिक व्यवस्था के भीतर एक उप-प्रणाली (subsystem) के रूप में देखता है। यह सत्ता, अधिकार और राजनीतिक व्यवहार के सामाजिक आधार की जांच करता है।"
        ]
      },
      {
        "heading": [
          "Nature",
          "प्रकृति (Nature)"
        ],
        "body": [
          "- Interdisciplinary: It borrows methodologies and concepts from both sociology and political science.\n                - Behavioral: It emphasizes the actual behavior of individuals and groups rather than just formal constitutional structures.\n                - Empirical and Analytical: It relies on observation, surveys, and data to analyze political realities (e.g., voting behavior based on caste or class).",
          "- अंतःविषय (Interdisciplinary): यह समाजशास्त्र और राजनीति विज्ञान दोनों से कार्यप्रणाली और अवधारणाएं उधार लेता है।\n                - व्यवहारवादी (Behavioral): यह केवल औपचारिक संवैधानिक संरचनाओं के बजाय व्यक्तियों और समूहों के वास्तविक व्यवहार पर जोर देता है।\n                - अनुभवजन्य और विश्लेषणात्मक (Empirical and Analytical): यह राजनीतिक वास्तविकताओं (जैसे, जाति या वर्ग के आधार पर मतदान व्यवहार) का विश्लेषण करने के लिए अवलोकन, सर्वेक्षण और डेटा पर निर्भर करता है।"
        ]
      },
      {
        "heading": [
          "Scope",
          "क्षेत्र (Scope)"
        ],
        "body": [
          "The scope of political sociology is vast, covering:\n                - The relationship between society and the state.\n                - Social stratification (caste, class, race) and its impact on politics.\n                - Political culture, political socialization, and political participation.\n                - The study of political elites, political parties, and pressure groups.\n                - The dynamics of power, authority, and legitimacy in society.",
          "राजनीतिक समाजशास्त्र का दायरा विशाल है, जिसमें शामिल हैं:\n                - समाज और राज्य के बीच संबंध।\n                - सामाजिक स्तरीकरण (जाति, वर्ग, नस्ल) और राजनीति पर इसका प्रभाव।\n                - राजनीतिक संस्कृति, राजनीतिक समाजीकरण और राजनीतिक भागीदारी।\n                - राजनीतिक अभिजात वर्ग (elites), राजनीतिक दलों और दबाव समूहों का अध्ययन।\n                - समाज में सत्ता, अधिकार और वैधता (legitimacy) की गतिशीलता।"
        ]
      }
    ],
    "quotes": [
      [
        "Giovanni Sartori: \"Political sociology is the study of the interrelationship between society and polity, between social structures and political institutions.\"",
        "जियोवानी सरटोरी (Giovanni Sartori): \"राजनीतिक समाजशास्त्र समाज और राजनीति के बीच, सामाजिक संरचनाओं और राजनीतिक संस्थानों के बीच अंतर्संबंधों का अध्ययन है।\""
      ]
    ],
    "evaluation": [
      "The emergence of Political Sociology was a necessary reaction against the highly formal, legal-institutional approach of traditional political science, which often failed to explain real-world political crises. By incorporating sociological insights (like the role of caste in Indian elections), it provided a much more realistic picture of politics. However, critics argue that it sometimes 'sociologizes' politics too much, treating the state merely as a reflection of social forces and ignoring the independent power and autonomy that political institutions can exercise over society.",
      "राजनीतिक समाजशास्त्र का उदय पारंपरिक राजनीति विज्ञान के अत्यधिक औपचारिक, कानूनी-संस्थागत दृष्टिकोण के खिलाफ एक आवश्यक प्रतिक्रिया थी, जो अक्सर वास्तविक दुनिया के राजनीतिक संकटों को समझाने में विफल रहा। समाजशास्त्रीय अंतर्दृष्टि (जैसे भारतीय चुनावों में जाति की भूमिका) को शामिल करके, इसने राजनीति की बहुत अधिक यथार्थवादी तस्वीर प्रदान की। हालांकि, आलोचकों का तर्क है कि यह कभी-कभी राजनीति का बहुत अधिक 'समाजशास्त्रीकरण' करता है, राज्य को केवल सामाजिक ताकतों के प्रतिबिंब के रूप में मानता है और उस स्वतंत्र शक्ति और स्वायत्तता को नजरअंदाज करता है जो राजनीतिक संस्थान समाज पर प्रयोग कर सकते हैं।"
    ],
    "conclusion": [
      "Political Sociology acts as a vital bridge between society and the state. To understand modern political phenomena—from the rise of populist leaders to the voting patterns in a democracy—one must look beyond the constitution and examine the underlying social fabric, making Political Sociology an indispensable tool for contemporary political analysis.",
      "राजनीतिक समाजशास्त्र समाज और राज्य के बीच एक महत्वपूर्ण सेतु का कार्य करता है। आधुनिक राजनीतिक घटनाओं को समझने के लिए—लोकलुभावन नेताओं के उदय से लेकर लोकतंत्र में मतदान के पैटर्न तक—संविधान से परे देखना चाहिए और अंतर्निहित सामाजिक ताने-बाने की जांच करनी चाहिए, जिससे राजनीतिक समाजशास्त्र समकालीन राजनीतिक विश्लेषण के लिए एक अपरिहार्य उपकरण बन जाता है।"
    ],
    "shortQ": [
      [
        "Define Political Sociology.",
        "राजनीतिक समाजशास्त्र को परिभाषित करें।"
      ],
      [
        "How is Political Sociology different from traditional Political Science?",
        "राजनीतिक समाजशास्त्र पारंपरिक राजनीति विज्ञान से किस प्रकार भिन्न है?"
      ],
      [
        "Mention any three areas that fall under the scope of Political Sociology.",
        "राजनीतिक समाजशास्त्र के दायरे (scope) में आने वाले किन्हीं तीन क्षेत्रों का उल्लेख करें।"
      ],
      [
        "Why is Political Sociology called an interdisciplinary subject?",
        "राजनीतिक समाजशास्त्र को अंतःविषय (interdisciplinary) विषय क्यों कहा जाता है?"
      ],
      [
        "What is the core focus of Political Sociology according to Giovanni Sartori?",
        "जियोवानी सरटोरी के अनुसार राजनीतिक समाजशास्त्र का मुख्य फोकस क्या है?"
      ]
    ],
    "longQ": [
      [
        "Discuss the meaning, nature, and scope of Political Sociology.",
        "राजनीतिक समाजशास्त्र के अर्थ, प्रकृति और क्षेत्र पर चर्चा करें।"
      ],
      [
        "\"Political Sociology is the study of power in its social context.\" Elaborate.",
        "\"राजनीतिक समाजशास्त्र अपने सामाजिक संदर्भ में सत्ता का अध्ययन है।\" विस्तार से बताएं।"
      ],
      [
        "Trace the emergence of Political Sociology as a reaction against the traditional institutional approach.",
        "पारंपरिक संस्थागत दृष्टिकोण के खिलाफ प्रतिक्रिया के रूप में राजनीतिक समाजशास्त्र के उद्भव का पता लगाएं।"
      ],
      [
        "Critically analyze the relationship between Sociology and Political Science.",
        "समाजशास्त्र और राजनीति विज्ञान के बीच संबंधों का आलोचनात्मक विश्लेषण करें।"
      ],
      [
        "Evaluate the importance of Political Sociology in understanding contemporary democratic politics in India.",
        "भारत में समकालीन लोकतांत्रिक राजनीति को समझने में राजनीतिक समाजशास्त्र के महत्व का मूल्यांकन करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "Political Sociology primarily studies the relationship between:",
          "राजनीतिक समाजशास्त्र मुख्य रूप से किसके बीच संबंधों का अध्ययन करता है?"
        ],
        "opts": [
          [
            "State and Government",
            "राज्य और सरकार"
          ],
          [
            "State and Society",
            "राज्य और समाज"
          ],
          [
            "Executive and Legislature",
            "कार्यपालिका और विधायिका"
          ],
          [
            "International organizations and Nations",
            "अंतर्राष्ट्रीय संगठन और राष्ट्र"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which approach heavily contributed to the development of Political Sociology by focusing on human actions rather than just institutions?",
          "केवल संस्थानों के बजाय मानवीय कार्यों पर ध्यान केंद्रित करके राजनीतिक समाजशास्त्र के विकास में किस दृष्टिकोण (approach) ने भारी योगदान दिया?"
        ],
        "opts": [
          [
            "Historical Approach",
            "ऐतिहासिक दृष्टिकोण"
          ],
          [
            "Legal-Institutional Approach",
            "कानूनी-संस्थागत दृष्टिकोण"
          ],
          [
            "Behavioral Approach",
            "व्यवहारवादी दृष्टिकोण (Behavioral Approach)"
          ],
          [
            "Philosophical Approach",
            "दार्शनिक दृष्टिकोण"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "Who among the following is widely considered one of the founding figures of Political Sociology for his work on power, authority, and bureaucracy?",
          "निम्नलिखित में से किसे सत्ता, अधिकार और नौकरशाही पर उनके काम के लिए राजनीतिक समाजशास्त्र के संस्थापक आंकड़ों में से एक माना जाता है?"
        ],
        "opts": [
          [
            "Plato",
            "प्लेटो"
          ],
          [
            "Machiavelli",
            "मैकियावेली"
          ],
          [
            "Max Weber",
            "मैक्स वेबर (Max Weber)"
          ],
          [
            "John Locke",
            "जॉन लोके"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "Traditional Political Science focused on 'State', whereas Political Sociology shifts the focus towards the study of:",
          "पारंपरिक राजनीति विज्ञान 'राज्य' पर केंद्रित था, जबकि राजनीतिक समाजशास्त्र अध्ययन की ओर ध्यान केंद्रित करता है:"
        ],
        "opts": [
          [
            "International law",
            "अंतर्राष्ट्रीय कानून"
          ],
          [
            "Power and its social dynamics",
            "सत्ता और इसकी सामाजिक गतिशीलता"
          ],
          [
            "Constitutional amendments",
            "संवैधानिक संशोधन"
          ],
          [
            "Administrative efficiency",
            "प्रशासनिक दक्षता"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "The book \"Political Sociology: A Critical Introduction\" is authored by:",
          "\"Political Sociology: A Critical Introduction\" पुस्तक किसके द्वारा लिखी गई है?"
        ],
        "opts": [
          [
            "Karl Marx",
            "कार्ल मार्क्स"
          ],
          [
            "Talcott Parsons",
            "टैल्कॉट पार्सन्स"
          ],
          [
            "Keith Faulks",
            "कीथ फॉल्क्स (Keith Faulks)"
          ],
          [
            "Robert Dahl",
            "रॉबर्ट डाहल"
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
      "Social Stratification and Politics: Caste, Class, Religion",
      "सामाजिक स्तरीकरण और राजनीति: जाति, वर्ग, धर्म"
    ],
    "introduction": [
      "Society is never entirely equal; it is divided into hierarchical layers based on wealth, status, birth, or beliefs. This division is known as Social Stratification. In Political Sociology, studying stratification is crucial because a person's position in this social hierarchy (their caste, class, or religion) profoundly dictates their political power, voting behavior, and access to state resources. In India, politics is inextricably linked to these three primary determinants.",
      "समाज कभी भी पूरी तरह से समान नहीं होता है; यह धन, स्थिति, जन्म या विश्वासों के आधार पर पदानुक्रमित परतों (hierarchical layers) में विभाजित होता है। इस विभाजन को सामाजिक स्तरीकरण (Social Stratification) कहा जाता है। राजनीतिक समाजशास्त्र में, स्तरीकरण का अध्ययन करना महत्वपूर्ण है क्योंकि इस सामाजिक पदानुक्रम (उनकी जाति, वर्ग या धर्म) में एक व्यक्ति की स्थिति उनकी राजनीतिक शक्ति, मतदान व्यवहार और राज्य के संसाधनों तक पहुंच को गहराई से निर्धारित करती है। भारत में, राजनीति इन तीन प्राथमिक निर्धारकों से अटूट रूप से जुड़ी हुई है।"
    ],
    "concepts": [
      {
        "heading": [
          "Caste and Politics (Politicization of Caste)",
          "जाति और राजनीति (जाति का राजनीतिकरण - Politicization of Caste)"
        ],
        "body": [
          "- Caste (Jati), traditionally a rigid social hierarchy, has transformed into an instrument of political mobilization in modern democratic India.\n                - Rajni Kothari famously noted that in India, \"it is not politics that gets caste-ridden; it is caste that gets politicized.\"\n                - Caste groups act as pressure groups, vote banks, and bases for political parties (e.g., BSP for Dalits, SP for Yadavs).",
          "- जाति, जो पारंपरिक रूप से एक कठोर सामाजिक पदानुक्रम है, आधुनिक लोकतांत्रिक भारत में राजनीतिक लामबंदी के एक उपकरण में बदल गई है।\n                - रजनी कोठारी ने प्रसिद्ध रूप से उल्लेख किया है कि भारत में, \"यह राजनीति नहीं है जो जाति-ग्रस्त हो जाती है; यह जाति है जिसका राजनीतिकरण हो जाता है।\"\n                - जाति समूह दबाव समूहों, वोट बैंकों और राजनीतिक दलों के आधार (जैसे दलितों के लिए BSP, यादवों के लिए SP) के रूप में कार्य करते हैं।"
        ]
      },
      {
        "heading": [
          "Class and Politics",
          "वर्ग और राजनीति (Class and Politics)"
        ],
        "body": [
          "- Class refers to economic stratification (rich, middle class, poor). Karl Marx argued that political power is a reflection of economic power; the capitalist class controls the state.\n                - In democracies, class influences policy. For instance, pro-corporate policies vs. pro-poor welfare schemes. However, in India, class politics is often overshadowed by caste politics, though they often overlap (Dalits mostly belonging to the lower economic class).",
          "- वर्ग आर्थिक स्तरीकरण (अमीर, मध्यम वर्ग, गरीब) को संदर्भित करता है। कार्ल मार्क्स का तर्क था कि राजनीतिक शक्ति आर्थिक शक्ति का प्रतिबिंब है; पूंजीवादी वर्ग राज्य को नियंत्रित करता है।\n                - लोकतंत्रों में, वर्ग नीति को प्रभावित करता है। उदाहरण के लिए, कॉर्पोरेट समर्थक नीतियां बनाम गरीब समर्थक कल्याणकारी योजनाएं। हालांकि, भारत में, वर्ग की राजनीति अक्सर जाति की राजनीति से छिप जाती है, हालांकि वे अक्सर ओवरलैप करते हैं (दलित ज्यादातर निचले आर्थिक वर्ग से संबंधित होते हैं)।"
        ]
      },
      {
        "heading": [
          "Religion and Politics (Communalism)",
          "धर्म और राजनीति (सांप्रदायिकता - Communalism)"
        ],
        "body": [
          "- Religion acts as a powerful mobilizing force. When religion is used to create exclusive political identities that are hostile to others, it leads to communalism.\n                - It dictates electoral tickets, shapes national narratives (e.g., Hindutva politics), and unfortunately, sometimes leads to communal riots which polarize vote banks.",
          "- धर्म एक शक्तिशाली प्रेरक शक्ति के रूप में कार्य करता है। जब धर्म का उपयोग विशेष राजनीतिक पहचान बनाने के लिए किया जाता है जो दूसरों के प्रति शत्रुतापूर्ण हो, तो यह सांप्रदायिकता की ओर ले जाता है।\n                - यह चुनावी टिकट तय करता है, राष्ट्रीय आख्यानों (जैसे, हिंदुत्व की राजनीति) को आकार देता है, और दुर्भाग्य से, कभी-कभी सांप्रदायिक दंगों की ओर ले जाता है जो वोट बैंकों का ध्रुवीकरण करते हैं।"
        ]
      }
    ],
    "quotes": [
      [
        "Rajni Kothari: \"Those in India who complain of 'casteism in politics' are really looking for a sort of politics which has no basis in society.\"",
        "रजनी कोठारी: \"भारत में जो लोग 'राजनीति में जातिवाद' की शिकायत करते हैं, वे वास्तव में एक ऐसी राजनीति की तलाश में हैं जिसका समाज में कोई आधार नहीं है।\""
      ]
    ],
    "evaluation": [
      "The interaction between stratification and politics is a double-edged sword. On one hand, democracy has empowered historically marginalized castes (Dalits and OBCs) by giving them the power of the vote, leading to a \"silent revolution\" (as termed by Jaffrelot) where political power shifted from upper castes to lower castes. On the other hand, it has entrenched identity politics. Parties rarely fight elections purely on developmental issues; instead, they rely on complex arithmetic of caste and religious combinations (e.g., the MY - Muslim Yadav factor), which fragments society and compromises governance quality.",
      "स्तरीकरण और राजनीति के बीच की परस्पर क्रिया एक दोधारी तलवार है। एक ओर, लोकतंत्र ने ऐतिहासिक रूप से हाशिए पर रहने वाली जातियों (दलितों और OBC) को वोट की शक्ति देकर सशक्त बनाया है, जिससे एक \"मौन क्रांति\" (जैसा कि जैफ्रेलॉट ने कहा है) हुई है जहां राजनीतिक सत्ता उच्च जातियों से निचली जातियों में स्थानांतरित हो गई है। दूसरी ओर, इसने पहचान की राजनीति (identity politics) को मजबूत किया है। पार्टियां शायद ही कभी विशुद्ध रूप से विकासात्मक मुद्दों पर चुनाव लड़ती हैं; इसके बजाय, वे जाति और धार्मिक संयोजनों (जैसे, MY - मुस्लिम यादव कारक) के जटिल अंकगणित पर भरोसा करते हैं, जो समाज को खंडित करता है और शासन की गुणवत्ता से समझौता करता है।"
    ],
    "conclusion": [
      "Social stratification forms the raw material of politics. Caste, class, and religion are not vanishing in modern democracies; rather, they are adapting. Understanding Indian politics is impossible without understanding the intricate arithmetic and emotional appeal of these social divisions.",
      "सामाजिक स्तरीकरण राजनीति का कच्चा माल बनाता है। आधुनिक लोकतंत्रों में जाति, वर्ग और धर्म गायब नहीं हो रहे हैं; बल्कि, वे अनुकूलन (adapt) कर रहे हैं। भारतीय राजनीति को समझना इन सामाजिक विभाजनों के जटिल अंकगणित और भावनात्मक अपील को समझे बिना असंभव है।"
    ],
    "shortQ": [
      [
        "Define Social Stratification.",
        "सामाजिक स्तरीकरण (Social Stratification) को परिभाषित करें।"
      ],
      [
        "What does Rajni Kothari mean by the \"politicization of caste\"?",
        "रजनी कोठारी का \"जाति के राजनीतिकरण\" से क्या तात्पर्य है?"
      ],
      [
        "Differentiate between caste and class in the context of Indian politics.",
        "भारतीय राजनीति के संदर्भ में जाति और वर्ग के बीच अंतर करें।"
      ],
      [
        "What is communalism in political sociology?",
        "राजनीतिक समाजशास्त्र में सांप्रदायिकता क्या है?"
      ],
      [
        "Name the author of the book 'Caste in Indian Politics'.",
        "'Caste in Indian Politics' पुस्तक के लेखक का नाम बताइए।"
      ]
    ],
    "longQ": [
      [
        "Discuss the role of caste as a determinant of voting behavior in India.",
        "भारत में मतदान व्यवहार के निर्धारक के रूप में जाति की भूमिका पर चर्चा करें।"
      ],
      [
        "Examine the relationship between social stratification and political power.",
        "सामाजिक स्तरीकरण और राजनीतिक सत्ता के बीच संबंध का परीक्षण करें।"
      ],
      [
        "\"In India, class politics is often overshadowed by caste and religion.\" Evaluate this statement.",
        "\"भारत में, वर्ग की राजनीति अक्सर जाति और धर्म से ढक जाती है।\" इस कथन का मूल्यांकन करें।"
      ],
      [
        "Critically analyze the impact of religion on Indian politics.",
        "भारतीय राजनीति पर धर्म के प्रभाव का आलोचनात्मक विश्लेषण करें।"
      ],
      [
        "How has the democratic process empowered marginalized castes in India? Discuss with examples.",
        "लोकतांत्रिक प्रक्रिया ने भारत में हाशिए की जातियों को कैसे सशक्त बनाया है? उदाहरण सहित चर्चा करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "Who authored the seminal work \"Caste in Indian Politics\"?",
          "मौलिक कृति \"Caste in Indian Politics\" किसने लिखी है?"
        ],
        "opts": [
          [
            "M.N. Srinivas",
            "एम. एन. श्रीनिवास"
          ],
          [
            "Rajni Kothari",
            "रजनी कोठारी"
          ],
          [
            "B.R. Ambedkar",
            "बी. आर. अम्बेडकर"
          ],
          [
            "Andre Beteille",
            "आंद्रे बेतेले"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "According to Karl Marx, the primary basis of social stratification that determines political power is:",
          "कार्ल मार्क्स के अनुसार, सामाजिक स्तरीकरण का प्राथमिक आधार जो राजनीतिक सत्ता निर्धारित करता है, वह है:"
        ],
        "opts": [
          [
            "Religion",
            "धर्म"
          ],
          [
            "Race",
            "नस्ल"
          ],
          [
            "Class (Economy)",
            "वर्ग (अर्थव्यवस्था)"
          ],
          [
            "Education",
            "शिक्षा"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "The phenomenon where castes function as pressure groups to secure political benefits is termed as:",
          "वह घटना जहां जातियां राजनीतिक लाभ हासिल करने के लिए दबाव समूहों के रूप में कार्य करती हैं, उसे कहा जाता है:"
        ],
        "opts": [
          [
            "Sanskritization",
            "संस्कृतिकरण"
          ],
          [
            "Politicization of Caste",
            "जाति का राजनीतिकरण"
          ],
          [
            "Westernization",
            "पश्चिमीकरण"
          ],
          [
            "Secularization",
            "धर्मनिरपेक्षता"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Christophe Jaffrelot uses the term \"Silent Revolution\" in Indian politics to describe the:",
          "क्रिस्टोफ जैफ्रेलॉट भारतीय राजनीति में \"मौन क्रांति\" (Silent Revolution) शब्द का प्रयोग किसका वर्णन करने के लिए करते हैं:"
        ],
        "opts": [
          [
            "Economic liberalization of 1991",
            "1991 का आर्थिक उदारीकरण"
          ],
          [
            "Rise of lower castes (OBCs/Dalits) in political power",
            "राजनीतिक सत्ता में निचली जातियों (OBC/दलितों) का उदय"
          ],
          [
            "Green Revolution",
            "हरित क्रांति"
          ],
          [
            "Growth of the IT sector",
            "IT क्षेत्र का विकास"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "When religious identity is used aggressively to polarize society for political gains, it is known as:",
          "जब राजनीतिक लाभ के लिए समाज का ध्रुवीकरण करने के लिए धार्मिक पहचान का आक्रामक रूप से उपयोग किया जाता है, तो इसे कहा जाता है:"
        ],
        "opts": [
          [
            "Secularism",
            "धर्मनिरपेक्षता"
          ],
          [
            "Communalism",
            "सांप्रदायिकता (Communalism)"
          ],
          [
            "Nationalism",
            "राष्ट्रवाद"
          ],
          [
            "Regionalism",
            "क्षेत्रवाद"
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
      "Concept of Power, Authority and Legitimacy",
      "शक्ति, सत्ता और वैधता की अवधारणा"
    ],
    "introduction": [
      "Power, Authority, and Legitimacy are the foundational triad of Political Sociology. They explain why some people command while others obey. Understanding these concepts is essential to grasp how state control is exercised without relying solely on brute force. Max Weber provided the most enduring sociological analysis of these concepts, shifting the focus from legal structures to the social acceptance of rule.",
      "शक्ति, सत्ता (अधिकार) और वैधता राजनीतिक समाजशास्त्र की मूलभूत त्रयी (foundational triad) हैं। वे बताते हैं कि क्यों कुछ लोग आदेश देते हैं जबकि अन्य उनका पालन करते हैं। राज्य नियंत्रण को केवल पाशविक बल (brute force) पर निर्भर किए बिना कैसे प्रयोग किया जाता है, यह समझने के लिए इन अवधारणाओं को समझना आवश्यक है। मैक्स वेबर ने इन अवधारणाओं का सबसे स्थायी समाजशास्त्रीय विश्लेषण प्रदान किया, जिससे ध्यान कानूनी संरचनाओं से हटकर शासन की सामाजिक स्वीकृति पर केंद्रित हो गया।"
    ],
    "concepts": [
      {
        "heading": [
          "Power (शक्ति)",
          "शक्ति (Power)"
        ],
        "body": [
          "- According to Max Weber, power is the ability of an individual or group to achieve their own goals or aims despite opposition from others. It is the capacity to force someone to do something they otherwise wouldn't do.\n                - Power relies on coercion (force, wealth, or fear). A dictator ruling by military might relies purely on power.",
          "- मैक्स वेबर के अनुसार, शक्ति किसी व्यक्ति या समूह की दूसरों के विरोध के बावजूद अपने स्वयं के लक्ष्यों या उद्देश्यों को प्राप्त करने की क्षमता है। यह किसी को ऐसा कुछ करने के लिए मजबूर करने की क्षमता है जो वे अन्यथा नहीं करते।\n                - शक्ति जबरदस्ती (बल, धन या भय) पर निर्भर करती है। सैन्य शक्ति से शासन करने वाला तानाशाह पूरी तरह से शक्ति पर निर्भर करता है।"
        ]
      },
      {
        "heading": [
          "Authority (सत्ता / अधिकार)",
          "सत्ता / अधिकार (Authority)"
        ],
        "body": [
          "- Authority is defined as \"legitimate power.\" When power is recognized as rightful and justified by the people being ruled, it becomes authority.\n                - People obey authority voluntarily because they believe the command is right, not just out of fear.\n                - Max Weber's Three Types of Authority:\n                  \n                    Traditional Authority: Based on custom, birthright, and the past (e.g., Kings, tribal chiefs, patriarchal heads).",
          "- सत्ता को \"वैध शक्ति\" (legitimate power) के रूप में परिभाषित किया गया है। जब शक्ति को शासित लोगों द्वारा सही और उचित माना जाता है, तो यह सत्ता बन जाती है।\n                - लोग स्वेच्छा से सत्ता का पालन करते हैं क्योंकि उनका मानना है कि आदेश सही है, केवल डर के कारण नहीं।\n                - मैक्स वेबर के सत्ता के तीन प्रकार:\n                  \n                    पारंपरिक सत्ता (Traditional Authority): रीति-रिवाज, जन्मसिद्ध अधिकार और अतीत पर आधारित (जैसे, राजा, आदिवासी मुखिया, पितृसत्तात्मक मुखिया)।"
        ]
      },
      {
        "heading": [
          "Charismatic Authority",
          "करिश्माई सत्ता (Charismatic Authority)"
        ],
        "body": [
          "Based on the exceptional, almost superhuman, personal qualities of a leader (e.g., Mahatma Gandhi, Hitler, Nelson Mandela).",
          "एक नेता के असाधारण, लगभग अलौकिक, व्यक्तिगत गुणों पर आधारित (जैसे, महात्मा गांधी, हिटलर, नेल्सन मंडेला)।"
        ]
      },
      {
        "heading": [
          "Legal-Rational Authority",
          "कानूनी-तर्कसंगत सत्ता (Legal-Rational Authority)"
        ],
        "body": [
          "Based on a system of well-defined laws, rules, and bureaucratic structures. Obedience is owed to the legally established office, not the person holding it (e.g., Prime Minister, IAS officers).",
          "अच्छी तरह से परिभाषित कानूनों, नियमों और नौकरशाही संरचनाओं की एक प्रणाली पर आधारित। आज्ञाकारिता कानूनी रूप से स्थापित कार्यालय (पद) के प्रति होती है, न कि उसे धारण करने वाले व्यक्ति के प्रति (जैसे, प्रधान मंत्री, IAS अधिकारी)।"
        ]
      },
      {
        "heading": [
          "Legitimacy (वैधता)",
          "वैधता (Legitimacy)"
        ],
        "body": [
          "- Legitimacy is the bridge that converts raw power into authority. It is the belief held by the citizens that the government has the moral right to rule.\n                - A government losing its legitimacy (due to corruption or economic collapse) will eventually have to rely on sheer military power to survive, which is unsustainable in the long run.",
          "- वैधता वह पुल है जो कच्ची शक्ति (raw power) को सत्ता में परिवर्तित करता है। यह नागरिकों द्वारा रखा गया यह विश्वास है कि सरकार को शासन करने का नैतिक अधिकार है।\n                - अपनी वैधता खोने वाली सरकार (भ्रष्टाचार या आर्थिक पतन के कारण) को अंततः जीवित रहने के लिए पूरी तरह से सैन्य शक्ति पर निर्भर होना पड़ेगा, जो लंबे समय में अस्थिर है।"
        ]
      }
    ],
    "quotes": [
      [
        "Max Weber: \"Power is the chance of a man or of a number of men to realize their own will in a communal action even against the resistance of others.\"",
        "मैक्स वेबर: \"शक्ति किसी व्यक्ति या कई लोगों के लिए दूसरों के प्रतिरोध के खिलाफ भी सांप्रदायिक कार्रवाई में अपनी इच्छा को महसूस करने का मौका है।\""
      ]
    ],
    "evaluation": [
      "Weber's typology is highly influential but is considered an \"ideal type\"—pure forms rarely exist in reality. Modern democratic leaders often blend legal-rational authority (they are elected under the constitution) with charismatic authority (relying on their personal appeal to win votes). Furthermore, Marxist sociologists criticize traditional views of legitimacy, arguing that capitalist states create a \"false consciousness\" (ideological hegemony) through media and education, tricking the working class into believing that a system exploiting them is actually 'legitimate.'",
      "वेबर का वर्गीकरण अत्यधिक प्रभावशाली है लेकिन इसे \"आदर्श प्रकार\" (ideal type) माना जाता है - शुद्ध रूप वास्तविकता में शायद ही कभी मौजूद होते हैं। आधुनिक लोकतांत्रिक नेता अक्सर कानूनी-तर्कसंगत अधिकार (वे संविधान के तहत चुने जाते हैं) को करिश्माई अधिकार (वोट जीतने के लिए अपनी व्यक्तिगत अपील पर भरोसा करते हुए) के साथ मिलाते हैं। इसके अलावा, मार्क्सवादी समाजशास्त्री वैधता के पारंपरिक विचारों की आलोचना करते हैं, यह तर्क देते हुए कि पूंजीवादी राज्य मीडिया और शिक्षा के माध्यम से \"झूठी चेतना\" (वैचारिक आधिपत्य - ideological hegemony) बनाते हैं, मजदूर वर्ग को यह विश्वास दिलाते हैं कि उनका शोषण करने वाली प्रणाली वास्तव में 'वैध' है।"
    ],
    "conclusion": [
      "No state can survive for long on coercive power alone. The transformation of power into authority through the acquisition of legitimacy is the central goal of any political system. As societies modernize, there is a general evolutionary shift from traditional and charismatic authority toward legal-rational authority, which forms the bedrock of modern democratic governance.",
      "कोई भी राज्य लंबे समय तक केवल दमनकारी शक्ति पर जीवित नहीं रह सकता है। वैधता के अधिग्रहण के माध्यम से शक्ति का सत्ता में परिवर्तन किसी भी राजनीतिक व्यवस्था का केंद्रीय लक्ष्य है। जैसे-जैसे समाजों का आधुनिकीकरण होता है, पारंपरिक और करिश्माई सत्ता से कानूनी-तर्कसंगत सत्ता की ओर एक सामान्य विकासवादी बदलाव होता है, जो आधुनिक लोकतांत्रिक शासन का आधार बनता है।"
    ],
    "shortQ": [
      [
        "Define Power according to Max Weber.",
        "मैक्स वेबर के अनुसार शक्ति (Power) को परिभाषित करें।"
      ],
      [
        "How is Authority different from Power?",
        "सत्ता (Authority) शक्ति से किस प्रकार भिन्न है?"
      ],
      [
        "What is Legitimacy?",
        "वैधता (Legitimacy) क्या है?"
      ],
      [
        "Give one example each of Charismatic and Traditional authority.",
        "करिश्माई और पारंपरिक सत्ता का एक-एक उदाहरण दें।"
      ],
      [
        "What is Legal-Rational authority?",
        "कानूनी-तर्कसंगत (Legal-Rational) सत्ता क्या है?"
      ]
    ],
    "longQ": [
      [
        "Discuss Max Weber's classification of Authority with suitable examples.",
        "उपयुक्त उदाहरणों के साथ मैक्स वेबर के सत्ता के वर्गीकरण पर चर्चा करें।"
      ],
      [
        "Explain the concepts of Power, Authority, and Legitimacy, and how they are interrelated.",
        "शक्ति, सत्ता और वैधता की अवधारणाओं को समझाइए, और वे आपस में कैसे जुड़े हुए हैं।"
      ],
      [
        "\"Authority is legitimate power.\" Elaborate on this statement.",
        "\"सत्ता वैध शक्ति है।\" इस कथन का विस्तार करें।"
      ],
      [
        "Critically examine the concept of Charismatic Authority in modern democratic politics.",
        "आधुनिक लोकतांत्रिक राजनीति में करिश्माई सत्ता की अवधारणा का आलोचनात्मक परीक्षण करें।"
      ],
      [
        "Why is legitimacy essential for the survival of any political system?",
        "किसी भी राजनीतिक व्यवस्था के अस्तित्व के लिए वैधता क्यों आवश्यक है?"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "Who classified authority into Traditional, Charismatic, and Legal-Rational types?",
          "सत्ता (authority) को पारंपरिक, करिश्माई और कानूनी-तर्कसंगत प्रकारों में किसने वर्गीकृत किया?"
        ],
        "opts": [
          [
            "Karl Marx",
            "कार्ल मार्क्स"
          ],
          [
            "Max Weber",
            "मैक्स वेबर"
          ],
          [
            "Robert Michels",
            "रॉबर्ट मिशेल्स"
          ],
          [
            "David Easton",
            "डेविड ईस्टन"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "When power is recognized as rightful and accepted by those subjected to it, it is called:",
          "जब शक्ति को वैध के रूप में मान्यता दी जाती है और उसके अधीन लोगों द्वारा स्वीकार किया जाता है, तो उसे कहा जाता है:"
        ],
        "opts": [
          [
            "Coercion",
            "जबरदस्ती (Coercion)"
          ],
          [
            "Influence",
            "प्रभाव (Influence)"
          ],
          [
            "Authority",
            "सत्ता (Authority)"
          ],
          [
            "Dictatorship",
            "तानाशाही (Dictatorship)"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "A modern democracy relies primarily on which type of authority?",
          "आधुनिक लोकतंत्र मुख्य रूप से किस प्रकार की सत्ता पर निर्भर करता है?"
        ],
        "opts": [
          [
            "Traditional",
            "पारंपरिक"
          ],
          [
            "Charismatic",
            "करिश्माई"
          ],
          [
            "Legal-Rational",
            "कानूनी-तर्कसंगत"
          ],
          [
            "Divine Right",
            "दैवीय अधिकार"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "The belief that a government has the moral right to rule is known as:",
          "यह विश्वास कि किसी सरकार को शासन करने का नैतिक अधिकार है, कहलाता है:"
        ],
        "opts": [
          [
            "Sovereignty",
            "संप्रभुता"
          ],
          [
            "Legitimacy",
            "वैधता (Legitimacy)"
          ],
          [
            "Supremacy",
            "सर्वोच्चता"
          ],
          [
            "Hegemony",
            "आधिपत्य (Hegemony)"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "The authority of a tribal chief or a monarch is an example of:",
          "आदिवासी मुखिया या सम्राट की सत्ता किसका उदाहरण है?"
        ],
        "opts": [
          [
            "Traditional Authority",
            "पारंपरिक सत्ता"
          ],
          [
            "Charismatic Authority",
            "करिश्माई सत्ता"
          ],
          [
            "Legal-Rational Authority",
            "कानूनी-तर्कसंगत सत्ता"
          ],
          [
            "Bureaucratic Authority",
            "नौकरशाही सत्ता"
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
    "id": "t4",
    "num": 4,
    "title": [
      "Political Culture and Political Socialization",
      "राजनीतिक संस्कृति और राजनीतिक समाजीकरण"
    ],
    "introduction": [
      "For any political system to function smoothly, it requires the people to hold certain beliefs and attitudes towards it. Political Culture refers to this psychological environment of politics—the set of attitudes, beliefs, and sentiments that give order and meaning to a political process. Political Socialization is the lifelong process by which these cultural values are transmitted from one generation to the next. Gabriel Almond and Sidney Verba pioneered the study of political culture.",
      "किसी भी राजनीतिक व्यवस्था को सुचारू रूप से चलाने के लिए, यह आवश्यक है कि लोग इसके प्रति कुछ विश्वास और दृष्टिकोण रखें। राजनीतिक संस्कृति (Political Culture) राजनीति के इस मनोवैज्ञानिक वातावरण को संदर्भित करती है—दृष्टिकोण, विश्वास और भावनाओं का वह समूह जो एक राजनीतिक प्रक्रिया को आदेश और अर्थ देता है। राजनीतिक समाजीकरण (Political Socialization) वह आजीवन प्रक्रिया है जिसके द्वारा इन सांस्कृतिक मूल्यों को एक पीढ़ी से दूसरी पीढ़ी तक पहुँचाया जाता है। गेब्रियल आमंड (Gabriel Almond) और सिडनी वर्बा (Sidney Verba) ने राजनीतिक संस्कृति के अध्ययन का बीड़ा उठाया।"
    ],
    "concepts": [
      {
        "heading": [
          "Political Culture",
          "राजनीतिक संस्कृति (Political Culture)"
        ],
        "body": [
          "It is not about what people do, but what they think and feel about what they do in politics. It includes national pride, trust in government, and belief in democracy.\n                Almond and Verba's Classification (The Civic Culture):\n                \n                  Parochial Culture: Citizens have no awareness of the political system and do not participate (e.g., remote, isolated tribes).",
          "यह इस बारे में नहीं है कि लोग क्या करते हैं, बल्कि इस बारे में है कि वे राजनीति में जो करते हैं उसके बारे में वे क्या सोचते और महसूस करते हैं। इसमें राष्ट्रीय गौरव, सरकार में विश्वास और लोकतंत्र में विश्वास शामिल है।\n                आमंड और वर्बा का वर्गीकरण (The Civic Culture):\n                \n                  संकुचित संस्कृति (Parochial Culture): नागरिकों को राजनीतिक व्यवस्था के बारे में कोई जागरूकता नहीं होती है और वे भाग नहीं लेते हैं (जैसे, दूरस्थ, अलग-थलग जनजातियां)।"
        ]
      },
      {
        "heading": [
          "Subject Culture",
          "अधीनस्थ / प्रजा संस्कृति (Subject Culture)"
        ],
        "body": [
          "Citizens are aware of the political system and government outputs (laws, taxes) but see themselves as passive subjects with no power to influence inputs (e.g., dictatorships, absolute monarchies).",
          "नागरिक राजनीतिक व्यवस्था और सरकारी आउटपुट (कानून, कर) के बारे में जानते हैं, लेकिन खुद को निष्क्रिय प्रजा के रूप में देखते हैं जिनके पास इनपुट को प्रभावित करने की कोई शक्ति नहीं है (जैसे, तानाशाही, पूर्ण राजतंत्र)।"
        ]
      },
      {
        "heading": [
          "Participant Culture",
          "सहभागी संस्कृति (Participant Culture)"
        ],
        "body": [
          "Citizens are highly aware and actively participate in the political process (voting, protesting, joining parties), believing they can influence outcomes (e.g., modern democracies).",
          "नागरिक अत्यधिक जागरूक होते हैं और राजनीतिक प्रक्रिया (मतदान, विरोध, पार्टियों में शामिल होना) में सक्रिय रूप से भाग लेते हैं, यह मानते हुए कि वे परिणामों को प्रभावित कर सकते हैं (जैसे, आधुनिक लोकतंत्र)।"
        ]
      },
      {
        "heading": [
          "Political Socialization",
          "राजनीतिक समाजीकरण (Political Socialization)"
        ],
        "body": [
          "It is the learning process through which an individual acquires political knowledge, values, and beliefs.\n                Agents of Socialization:\n                \n                  Family: The first and most profound influence. Children often inherit their parents' political leanings.",
          "यह वह सीखने की प्रक्रिया है जिसके माध्यम से एक व्यक्ति राजनीतिक ज्ञान, मूल्य और विश्वास प्राप्त करता है।\n                समाजीकरण के अभिकरण / साधन (Agents of Socialization):\n                \n                  परिवार: पहला और सबसे गहरा प्रभाव। बच्चे अक्सर अपने माता-पिता के राजनीतिक झुकाव को विरासत में पाते हैं।"
        ]
      },
      {
        "heading": [
          "Education/Schools",
          "शिक्षा/स्कूल"
        ],
        "body": [
          "Teaches civic duties, national history, and patriotism.",
          "नागरिक कर्तव्यों, राष्ट्रीय इतिहास और देशभक्ति सिखाता है।"
        ]
      },
      {
        "heading": [
          "Peer Groups",
          "सहकर्मी समूह (Peer Groups)"
        ],
        "body": [
          "Friends and colleagues influence views, especially during youth.",
          "दोस्त और सहकर्मी विचारों को प्रभावित करते हैं, खासकर युवाओं के दौरान।"
        ]
      },
      {
        "heading": [
          "Mass Media",
          "जनसंचार माध्यम (Mass Media)"
        ],
        "body": [
          "TV, newspapers, and now social media strongly shape public perception and political reality.",
          "टीवी, समाचार पत्र, और अब सोशल मीडिया जनता की धारणा और राजनीतिक वास्तविकता को दृढ़ता से आकार देते हैं।"
        ]
      },
      {
        "heading": [
          "State/Government",
          "राज्य/सरकार"
        ],
        "body": [
          "Through national symbols, anthems, and official ceremonies.",
          "राष्ट्रीय प्रतीकों, गान और आधिकारिक समारोहों के माध्यम से।"
        ]
      }
    ],
    "quotes": [
      [
        "Almond and Powell: \"Political culture is the pattern of individual attitudes and orientations toward politics among the members of a political system.\"",
        "आमंड और पॉवेल: \"राजनीतिक संस्कृति एक राजनीतिक व्यवस्था के सदस्यों के बीच राजनीति के प्रति व्यक्तिगत दृष्टिकोण और झुकाव का पैटर्न है।\""
      ]
    ],
    "evaluation": [
      "While Almond and Verba argued that a mix of participant, subject, and parochial cultures (a \"Civic Culture\") is best for a stable democracy, critics argue this model is heavily biased towards Western (especially American/British) democracies. It fails to adequately explain post-colonial societies like India, where high political participation often coexists with deep parochial loyalties (caste/religion). Furthermore, Marxist scholars argue that political socialization is merely a tool of 'ideological state apparatuses' (Althusser) used by the ruling class to brainwash the masses into accepting their own exploitation.",
      "जबकि आमंड और वर्बा ने तर्क दिया कि सहभागी, प्रजा और संकुचित संस्कृतियों का मिश्रण (एक \"नागरिक संस्कृति\" - Civic Culture) एक स्थिर लोकतंत्र के लिए सबसे अच्छा है, आलोचकों का तर्क है कि यह मॉडल पश्चिमी (विशेष रूप से अमेरिकी/ब्रिटिश) लोकतंत्रों की ओर भारी रूप से पक्षपाती है। यह भारत जैसे उत्तर-औपनिवेशिक समाजों को पर्याप्त रूप से समझाने में विफल रहता है, जहां उच्च राजनीतिक भागीदारी अक्सर गहरी संकीर्ण वफादारी (जाति/धर्म) के साथ सह-अस्तित्व में होती है। इसके अलावा, मार्क्सवादी विद्वानों का तर्क है कि राजनीतिक समाजीकरण केवल शासक वर्ग द्वारा जनता को उनके स्वयं के शोषण को स्वीकार करने के लिए ब्रेनवॉश करने के लिए उपयोग किया जाने वाला 'वैचारिक राज्य तंत्र' (ideological state apparatuses - Althusser) का एक उपकरण है।"
    ],
    "conclusion": [
      "Political culture is the invisible glue that holds a political system together, and socialization is the mechanism that maintains this glue over time. A democratic constitution can only survive if the underlying political culture of the masses is participatory and tolerant; otherwise, democratic institutions will eventually collapse into authoritarianism.",
      "राजनीतिक संस्कृति वह अदृश्य गोंद है जो एक राजनीतिक व्यवस्था को एक साथ जोड़कर रखती है, और समाजीकरण वह तंत्र है जो समय के साथ इस गोंद को बनाए रखता है। एक लोकतांत्रिक संविधान तभी जीवित रह सकता है जब जनता की अंतर्निहित राजनीतिक संस्कृति सहभागी और सहिष्णु हो; अन्यथा, लोकतांत्रिक संस्थाएं अंततः सत्तावाद में ढह जाएंगी।"
    ],
    "shortQ": [
      [
        "Define Political Culture.",
        "राजनीतिक संस्कृति को परिभाषित करें।"
      ],
      [
        "What is Political Socialization?",
        "राजनीतिक समाजीकरण क्या है?"
      ],
      [
        "Name the three types of political culture classified by Almond and Verba.",
        "आमंड और वर्बा द्वारा वर्गीकृत तीन प्रकार की राजनीतिक संस्कृति के नाम बताइए।"
      ],
      [
        "List any three major agents of political socialization.",
        "राजनीतिक समाजीकरण के किन्हीं तीन प्रमुख साधनों (agents) की सूची बनाएं।"
      ],
      [
        "What is meant by a 'Subject Political Culture'?",
        "'अधीनस्थ / प्रजा राजनीतिक संस्कृति' (Subject Political Culture) से क्या तात्पर्य है?"
      ]
    ],
    "longQ": [
      [
        "Discuss the concept of Political Culture and explain the classification given by Almond and Verba.",
        "राजनीतिक संस्कृति की अवधारणा पर चर्चा करें और आमंड और वर्बा द्वारा दिए गए वर्गीकरण की व्याख्या करें।"
      ],
      [
        "Define Political Socialization and analyze the role of its various agents.",
        "राजनीतिक समाजीकरण को परिभाषित करें और इसके विभिन्न अभिकरणों (agents) की भूमिका का विश्लेषण करें।"
      ],
      [
        "How do political culture and political socialization contribute to the stability of a democracy?",
        "राजनीतिक संस्कृति और राजनीतिक समाजीकरण लोकतंत्र की स्थिरता में कैसे योगदान करते हैं?"
      ],
      [
        "Critically evaluate the 'Civic Culture' concept in the context of developing nations like India.",
        "भारत जैसे विकासशील देशों के संदर्भ में 'नागरिक संस्कृति' (Civic Culture) अवधारणा का आलोचनात्मक मूल्यांकन करें।"
      ],
      [
        "Explain the role of mass media and family as agents of political socialization.",
        "राजनीतिक समाजीकरण के साधनों के रूप में जनसंचार माध्यमों (mass media) और परिवार की भूमिका की व्याख्या करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "The classic book \"The Civic Culture\" was written by:",
          "क्लासिक पुस्तक \"The Civic Culture\" किसके द्वारा लिखी गई थी?"
        ],
        "opts": [
          [
            "David Easton",
            "डेविड ईस्टन"
          ],
          [
            "Gabriel Almond and Sidney Verba",
            "गेब्रियल आमंड और सिडनी वर्बा"
          ],
          [
            "Karl Marx",
            "कार्ल मार्क्स"
          ],
          [
            "Max Weber",
            "मैक्स वेबर"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "A political culture where citizens have no awareness of the political system is called:",
          "एक राजनीतिक संस्कृति जहां नागरिकों को राजनीतिक व्यवस्था के बारे में कोई जागरूकता नहीं होती है, कहलाती है:"
        ],
        "opts": [
          [
            "Parochial Culture",
            "संकुचित संस्कृति (Parochial Culture)"
          ],
          [
            "Subject Culture",
            "प्रजा संस्कृति (Subject Culture)"
          ],
          [
            "Participant Culture",
            "सहभागी संस्कृति (Participant Culture)"
          ],
          [
            "Civic Culture",
            "नागरिक संस्कृति (Civic Culture)"
          ]
        ],
        "correct": 0
      },
      {
        "q": [
          "The lifelong process through which individuals acquire their political beliefs and values is known as:",
          "वह आजीवन प्रक्रिया जिसके माध्यम से व्यक्ति अपनी राजनीतिक मान्यताओं और मूल्यों को प्राप्त करते हैं, कहलाती है:"
        ],
        "opts": [
          [
            "Political Modernization",
            "राजनीतिक आधुनिकीकरण"
          ],
          [
            "Political Development",
            "राजनीतिक विकास"
          ],
          [
            "Political Socialization",
            "राजनीतिक समाजीकरण"
          ],
          [
            "Political Participation",
            "राजनीतिक भागीदारी"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "Which of the following is considered the primary and earliest agent of political socialization?",
          "निम्नलिखित में से किसे राजनीतिक समाजीकरण का प्राथमिक और सबसे प्रारंभिक साधन (agent) माना जाता है?"
        ],
        "opts": [
          [
            "School",
            "स्कूल"
          ],
          [
            "Mass Media",
            "मास मीडिया"
          ],
          [
            "Political Parties",
            "राजनीतिक दल"
          ],
          [
            "Family",
            "परिवार"
          ]
        ],
        "correct": 3
      },
      {
        "q": [
          "In a 'Subject Political Culture', citizens are generally:",
          "'अधीनस्थ राजनीतिक संस्कृति' (Subject Political Culture) में, नागरिक आमतौर पर होते हैं:"
        ],
        "opts": [
          [
            "Highly active in changing government policies",
            "सरकारी नीतियों को बदलने में अत्यधिक सक्रिय"
          ],
          [
            "Completely unaware of the government's existence",
            "सरकार के अस्तित्व से पूरी तरह अनजान"
          ],
          [
            "Aware of government outputs but passive in their participation",
            "सरकारी आउटपुट के प्रति जागरूक लेकिन अपनी भागीदारी में निष्क्रिय"
          ],
          [
            "Seeking to overthrow the government",
            "सरकार को उखाड़ फेंकने की मांग करने वाले"
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
      "Political Participation and Political Development",
      "राजनीतिक भागीदारी और राजनीतिक विकास"
    ],
    "introduction": [
      "Political Participation and Political Development are two interconnected barometers used to measure the health and maturity of a democratic society. Participation refers to the active involvement of citizens in shaping government policies, while development refers to the political system's capacity to handle this participation, modernize its institutions, and maintain stability while undergoing socio-economic change.",
      "राजनीतिक भागीदारी (Political Participation) और राजनीतिक विकास (Political Development) लोकतांत्रिक समाज के स्वास्थ्य और परिपक्वता को मापने के लिए उपयोग किए जाने वाले दो परस्पर जुड़े बैरोमीटर हैं। भागीदारी का तात्पर्य सरकारी नीतियों को आकार देने में नागरिकों की सक्रिय भागीदारी से है, जबकि विकास का तात्पर्य इस भागीदारी को संभालने, अपने संस्थानों को आधुनिक बनाने और सामाजिक-आर्थिक परिवर्तनों के दौर से गुजरते हुए स्थिरता बनाए रखने की राजनीतिक व्यवस्था की क्षमता से है।"
    ],
    "concepts": [
      {
        "heading": [
          "Political Participation",
          "राजनीतिक भागीदारी (Political Participation)"
        ],
        "body": [
          "- It is the voluntary activity by members of a society to select rulers and influence public policy.\n                - Forms: Voting (the most common form), campaigning, joining political parties, protesting, lobbying, and even civil disobedience.\n                - Determinants: Education, income, age, gender, and political efficacy (the belief that one's vote actually matters). Usually, higher education and income correlate with higher participation, though India provides a unique paradox where the poor often vote in higher numbers than the urban rich.",
          "- यह समाज के सदस्यों द्वारा शासकों का चयन करने और सार्वजनिक नीति को प्रभावित करने के लिए की जाने वाली स्वैच्छिक गतिविधि है।\n                - रूप (Forms): मतदान (सबसे आम रूप), चुनाव प्रचार, राजनीतिक दलों में शामिल होना, विरोध प्रदर्शन, पैरवी (lobbying), और यहाँ तक कि सविनय अवज्ञा।\n                - निर्धारक: शिक्षा, आय, आयु, लिंग, और राजनीतिक प्रभावकारिता (political efficacy - यह विश्वास कि किसी के वोट का वास्तव में महत्व है)। आमतौर पर, उच्च शिक्षा और आय का संबंध उच्च भागीदारी से होता है, हालांकि भारत एक अनूठा विरोधाभास प्रदान करता है जहां गरीब अक्सर शहरी अमीरों की तुलना में अधिक संख्या में मतदान करते हैं।"
        ]
      },
      {
        "heading": [
          "Political Development",
          "राजनीतिक विकास (Political Development)"
        ],
        "body": [
          "- Lucian Pye described political development as encompassing three dimensions (the 'Development Syndrome'):\n                  \n                    Equality: Mass participation, universal adult franchise, and laws applying equally to all.",
          "- लूसियन पाई (Lucian Pye) ने राजनीतिक विकास को तीन आयामों ('विकास सिंड्रोम') को समाहित करने वाला बताया:\n                  \n                    समानता (Equality): जनभागीदारी, सार्वभौमिक वयस्क मताधिकार, और सभी पर समान रूप से लागू होने वाले कानून।"
        ]
      },
      {
        "heading": [
          "Capacity",
          "क्षमता (Capacity)"
        ],
        "body": [
          "The government's ability to manage public affairs, enforce laws, and manage tensions effectively.",
          "सार्वजनिक मामलों का प्रबंधन करने, कानूनों को लागू करने और तनावों को प्रभावी ढंग से प्रबंधित करने की सरकार की क्षमता।"
        ]
      },
      {
        "heading": [
          "Differentiation",
          "विभेदीकरण (Differentiation)"
        ],
        "body": [
          "The specialization of political institutions (e.g., separation of powers between executive, legislature, and judiciary).",
          "राजनीतिक संस्थाओं की विशेषज्ञता (जैसे, कार्यपालिका, विधायिका और न्यायपालिका के बीच शक्तियों का पृथक्करण)।"
        ]
      },
      {
        "heading": [
          "The Relationship (Huntington's Thesis)",
          "संबंध (हंटिंगटन की थीसिस - Huntington's Thesis)"
        ],
        "body": [
          "Samuel P. Huntington argued that if political participation increases rapidly (due to modernization/education) but the political institutions are not developed enough (Capacity/Differentiation) to absorb these new demands, it leads to political decay, instability, and violence.",
          "सैमुअल पी. हंटिंगटन ने तर्क दिया कि यदि राजनीतिक भागीदारी तेजी से बढ़ती है (आधुनिकीकरण/शिक्षा के कारण) लेकिन राजनीतिक संस्थान इन नई मांगों को अवशोषित करने के लिए पर्याप्त रूप से विकसित नहीं हैं (क्षमता/विभेदीकरण की कमी), तो यह राजनीतिक पतन (political decay), अस्थिरता और हिंसा की ओर ले जाता है।"
        ]
      }
    ],
    "quotes": [
      [
        "Samuel P. Huntington: \"Political development is the institutionalization of political organizations and procedures... Rapid modernization produces not political development, but political decay.\"",
        "सैमुअल पी. हंटिंगटन: \"राजनीतिक विकास राजनीतिक संगठनों और प्रक्रियाओं का संस्थागतीकरण है... तीव्र आधुनिकीकरण राजनीतिक विकास नहीं, बल्कि राजनीतिक पतन (political decay) पैदा करता है।\""
      ]
    ],
    "evaluation": [
      "The concept of 'Political Development' has faced severe criticism from Third World scholars for being highly ethnocentric. It often equated 'development' with 'Westernization', assuming that all nations must follow the path of the US or UK. Critics argue this model ignores the unique historical contexts of post-colonial states. Regarding participation, while higher voting turnout is celebrated, critical theorists point out that in many developing democracies, participation is often mobilized through clientelism (vote-buying) or identity politics, rather than rational policy choices.",
      "'राजनीतिक विकास' की अवधारणा को अत्यधिक नृजातीय (ethnocentric) होने के कारण तीसरी दुनिया (Third World) के विद्वानों से गंभीर आलोचना का सामना करना पड़ा है। इसने अक्सर 'विकास' की बराबरी 'पश्चिमीकरण' से की, यह मानते हुए कि सभी राष्ट्रों को अमेरिका या यूके के मार्ग का अनुसरण करना चाहिए। आलोचकों का तर्क है कि यह मॉडल उत्तर-औपनिवेशिक राज्यों के अनूठे ऐतिहासिक संदर्भों को नजरअंदाज करता है। भागीदारी के संबंध में, जबकि उच्च मतदान की सराहना की जाती है, महत्वपूर्ण सिद्धांतकार बताते हैं कि कई विकासशील लोकतंत्रों में, भागीदारी अक्सर तर्कसंगत नीतिगत विकल्पों के बजाय 'क्लाइंटेलिज़्म' (clientelism - वोट-खरीदना) या पहचान की राजनीति (identity politics) के माध्यम से लामबंद की जाती है।"
    ],
    "conclusion": [
      "Political participation is the lifeblood of democracy, ensuring government accountability. However, as Huntington warned, participation must be balanced by strong, capable, and adaptable political institutions (Political Development). The success of a democracy like India lies in its continuous effort to build institutional capacity to match the ever-rising democratic aspirations of its vast and diverse population.",
      "राजनीतिक भागीदारी लोकतंत्र की जीवनदायिनी है, जो सरकार की जवाबदेही सुनिश्चित करती है। हालांकि, जैसा कि हंटिंगटन ने चेतावनी दी थी, भागीदारी को मजबूत, सक्षम और अनुकूलनीय राजनीतिक संस्थानों (राजनीतिक विकास) द्वारा संतुलित किया जाना चाहिए। भारत जैसे लोकतंत्र की सफलता अपनी विशाल और विविध आबादी की लगातार बढ़ती लोकतांत्रिक आकांक्षाओं से मेल खाने के लिए संस्थागत क्षमता के निर्माण के निरंतर प्रयास में निहित है।"
    ],
    "shortQ": [
      [
        "What is meant by Political Participation?",
        "राजनीतिक भागीदारी (Political Participation) से क्या तात्पर्य है?"
      ],
      [
        "Give three examples of political participation other than voting.",
        "मतदान के अलावा राजनीतिक भागीदारी के तीन उदाहरण दीजिए।"
      ],
      [
        "What are the three characteristics of Political Development according to Lucian Pye?",
        "लूसियन पाई के अनुसार राजनीतिक विकास की तीन विशेषताएं क्या हैं?"
      ],
      [
        "What does Samuel Huntington mean by 'Political Decay'?",
        "सैमुअल हंटिंगटन का 'राजनीतिक पतन' (Political Decay) से क्या तात्पर्य है?"
      ],
      [
        "Define 'political efficacy'.",
        "'राजनीतिक प्रभावकारिता' (political efficacy) को परिभाषित करें।"
      ]
    ],
    "longQ": [
      [
        "Discuss the various forms and determinants of Political Participation.",
        "राजनीतिक भागीदारी के विभिन्न रूपों और निर्धारकों पर चर्चा करें।"
      ],
      [
        "Explain Lucian Pye's concept of the 'Development Syndrome'.",
        "लूसियन पाई की 'विकास सिंड्रोम' (Development Syndrome) की अवधारणा की व्याख्या करें।"
      ],
      [
        "Critically analyze Samuel P. Huntington's views on the relationship between modernization, participation, and political instability.",
        "आधुनिकीकरण, भागीदारी और राजनीतिक अस्थिरता के बीच संबंध पर सैमुअल पी. हंटिंगटन के विचारों का आलोचनात्मक विश्लेषण करें।"
      ],
      [
        "Why is the Western model of Political Development criticized by Third World scholars?",
        "तीसरी दुनिया के विद्वानों द्वारा राजनीतिक विकास के पश्चिमी मॉडल की आलोचना क्यों की जाती है?"
      ],
      [
        "\"High political participation without institutional development leads to chaos.\" Evaluate this statement.",
        "\"संस्थागत विकास के बिना उच्च राजनीतिक भागीदारी अराजकता की ओर ले जाती है।\" इस कथन का मूल्यांकन करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "Who authored the influential book \"Political Order in Changing Societies\"?",
          "प्रभावशाली पुस्तक \"Political Order in Changing Societies\" किसने लिखी है?"
        ],
        "opts": [
          [
            "Lucian Pye",
            "लूसियन पाई"
          ],
          [
            "Samuel P. Huntington",
            "सैमुअल पी. हंटिंगटन"
          ],
          [
            "David Apter",
            "डेविड एप्टर"
          ],
          [
            "Gabriel Almond",
            "गेब्रियल आमंड"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "According to Lucian Pye, which of the following is NOT a dimension of political development?",
          "लूसियन पाई के अनुसार, निम्नलिखित में से कौन राजनीतिक विकास का आयाम नहीं है?"
        ],
        "opts": [
          [
            "Equality",
            "समानता (Equality)"
          ],
          [
            "Capacity",
            "क्षमता (Capacity)"
          ],
          [
            "Differentiation",
            "विभेदीकरण (Differentiation)"
          ],
          [
            "Dictatorship",
            "तानाशाही (Dictatorship)"
          ]
        ],
        "correct": 3
      },
      {
        "q": [
          "Huntington argues that if political participation outpaces institutionalization, it leads to:",
          "हंटिंगटन का तर्क है कि यदि राजनीतिक भागीदारी संस्थागतीकरण से आगे निकल जाती है, तो यह किसकी ओर ले जाती है:"
        ],
        "opts": [
          [
            "Mature democracy",
            "परिपक्व लोकतंत्र"
          ],
          [
            "Political decay and instability",
            "राजनीतिक पतन और अस्थिरता"
          ],
          [
            "Economic prosperity",
            "आर्थिक समृद्धि"
          ],
          [
            "Social harmony",
            "सामाजिक सद्भाव"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "The belief of citizens that they can understand and influence political affairs is termed as:",
          "नागरिकों का यह विश्वास कि वे राजनीतिक मामलों को समझ सकते हैं और प्रभावित कर सकते हैं, कहलाता है:"
        ],
        "opts": [
          [
            "Political apathy",
            "राजनीतिक उदासीनता"
          ],
          [
            "Political efficacy",
            "राजनीतिक प्रभावकारिता (Political efficacy)"
          ],
          [
            "Political alienation",
            "राजनीतिक अलगाव"
          ],
          [
            "Political culture",
            "राजनीतिक संस्कृति"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "In developing countries like India, an interesting paradox regarding voting behavior is that:",
          "भारत जैसे विकासशील देशों में, मतदान व्यवहार के संबंध में एक दिलचस्प विरोधाभास यह है कि:"
        ],
        "opts": [
          [
            "The rich vote more than the poor",
            "अमीर गरीबों से ज्यादा वोट करते हैं"
          ],
          [
            "The poor and marginalized often turn out to vote in higher numbers than the urban rich",
            "गरीब और हाशिए के लोग अक्सर शहरी अमीरों की तुलना में अधिक संख्या में मतदान करने आते हैं"
          ],
          [
            "Only educated people are allowed to vote",
            "केवल शिक्षित लोगों को मतदान करने की अनुमति है"
          ],
          [
            "Voting percentages are always 100%",
            "मतदान प्रतिशत हमेशा 100% होता है"
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
      "Political Elites (Mosca, Pareto, Michels)",
      "राजनीतिक अभिजात वर्ग (मोस्का, पेरेटो, मिशेल्स)"
    ],
    "introduction": [
      "The Elite Theory is a fundamental concept in Political Sociology which challenges the democratic ideal that power is held by the people. It posits that in every society, regardless of its form of government (democracy, monarchy, or socialist), a small, organized minority always ends up ruling over the unorganized majority. This minority is known as the 'Elite'. The classical elite theory was developed by three Italian/German sociologists: Gaetano Mosca, Vilfredo Pareto, and Robert Michels.",
      "अभिजात वर्ग सिद्धांत (Elite Theory) राजनीतिक समाजशास्त्र में एक मौलिक अवधारणा है जो इस लोकतांत्रिक आदर्श को चुनौती देती है कि सत्ता लोगों के हाथ में होती है। यह मानता है कि हर समाज में, सरकार के रूप (लोकतंत्र, राजतंत्र, या समाजवादी) की परवाह किए बिना, एक छोटा, संगठित अल्पसंख्यक वर्ग हमेशा असंगठित बहुमत पर शासन करता है। इस अल्पसंख्यक वर्ग को 'अभिजात वर्ग' (Elite) कहा जाता है। शास्त्रीय अभिजात वर्ग सिद्धांत तीन इतालवी/जर्मन समाजशास्त्रियों द्वारा विकसित किया गया था: गेटानो मोस्का (Gaetano Mosca), विल्फ्रेडो पेरेटो (Vilfredo Pareto), और रॉबर्ट मिशेल्स (Robert Michels)।"
    ],
    "concepts": [
      {
        "heading": [
          "Gaetano Mosca (The Ruling Class)",
          "गेटानो मोस्का (शासक वर्ग - The Ruling Class)"
        ],
        "body": [
          "- Mosca argued that society is always divided into two classes: a class that rules and a class that is ruled.\n                - The ruling class is always a minority. They rule because they possess organizational skills and superior qualities (wealth, education, military prowess). The disorganized majority cannot effectively challenge an organized minority.",
          "- मोस्का ने तर्क दिया कि समाज हमेशा दो वर्गों में बंटा होता है: एक वर्ग जो शासन करता है और एक वर्ग जिस पर शासन किया जाता है।\n                - शासक वर्ग हमेशा अल्पसंख्यक होता है। वे इसलिए शासन करते हैं क्योंकि उनके पास संगठनात्मक कौशल और श्रेष्ठ गुण (धन, शिक्षा, सैन्य कौशल) होते हैं। असंगठित बहुमत संगठित अल्पसंख्यक को प्रभावी ढंग से चुनौती नहीं दे सकता।"
        ]
      },
      {
        "heading": [
          "Vilfredo Pareto (Circulation of Elites)",
          "विल्फ्रेडो पेरेटो (अभिजात वर्ग का परिसंचरण - Circulation of Elites)"
        ],
        "body": [
          "- Pareto categorized elites into 'Governing Elites' (those with direct political power) and 'Non-governing Elites' (leaders in business, art, etc.).\n                - He introduced the concept of the Circulation of Elites. History is a \"graveyard of aristocracies.\" Elites eventually lose their vigor and are replaced by new elites rising from the masses, either through peaceful assimilation or violent revolution (like foxes replacing lions).",
          "- पेरेटो ने अभिजात वर्ग को 'शासक अभिजात वर्ग' (जिनके पास प्रत्यक्ष राजनीतिक शक्ति है) और 'गैर-शासक अभिजात वर्ग' (व्यापार, कला आदि में नेता) में वर्गीकृत किया।\n                - उन्होंने अभिजात वर्ग के परिसंचरण (Circulation of Elites) की अवधारणा पेश की। इतिहास \"कुलीन तंत्रों का कब्रिस्तान\" (graveyard of aristocracies) है। अभिजात वर्ग अंततः अपना जोश खो देते हैं और उनकी जगह शांतिपूर्ण आत्मसात या हिंसक क्रांति (जैसे लोमड़ियों की जगह शेर) के माध्यम से जनता के बीच से उठने वाले नए अभिजात वर्ग ले लेते हैं।"
        ]
      },
      {
        "heading": [
          "Robert Michels (Iron Law of Oligarchy)",
          "रॉबर्ट मिशेल्स (अल्पतंत्र का लौह नियम - Iron Law of Oligarchy)"
        ],
        "body": [
          "- Michels studied political parties and trade unions. He formulated the Iron Law of Oligarchy, stating, \"Who says organization, says oligarchy.\"\n                - He argued that any large organization, even one committed to democratic ideals, inevitably becomes dominated by a small, self-serving group of leaders (an oligarchy). This is because the masses are apathetic, and the organization requires specialized leaders to run efficiently. Once in power, these leaders use their position to stay in power.",
          "- मिशेल्स ने राजनीतिक दलों और ट्रेड यूनियनों का अध्ययन किया। उन्होंने अल्पतंत्र का लौह नियम तैयार किया, जिसमें कहा गया, \"जो संगठन कहता है, वह अल्पतंत्र (oligarchy) कहता है।\"\n                - उन्होंने तर्क दिया कि कोई भी बड़ा संगठन, यहां तक कि लोकतांत्रिक आदर्शों के लिए प्रतिबद्ध संगठन भी, अनिवार्य रूप से नेताओं के एक छोटे, स्वार्थी समूह (एक अल्पतंत्र) के प्रभुत्व में आ जाता है। ऐसा इसलिए है क्योंकि जनता उदासीन है, और संगठन को कुशलतापूर्वक चलाने के लिए विशेष नेताओं की आवश्यकता होती है। एक बार सत्ता में आने के बाद, ये नेता सत्ता में बने रहने के लिए अपने पद का उपयोग करते हैं।"
        ]
      }
    ],
    "quotes": [
      [
        "Vilfredo Pareto: \"History is a graveyard of aristocracies.\"",
        "विल्फ्रेडो पेरेटो: \"इतिहास कुलीन तंत्रों (aristocracies) का कब्रिस्तान है।\""
      ]
    ],
    "evaluation": [
      "Classical elite theory provides a deeply cynical but realistic view of politics, stripping away the romantic illusions of democracy. However, critics, especially Pluralists (like Robert Dahl), argue that power in modern democracies is not concentrated in one single elite group, but is dispersed among multiple competing elites (business, military, media, politicians). The masses can influence these elites through elections and pressure groups. Marxist scholars also critique elite theory, arguing that the so-called 'elite' is nothing but the economically dominant 'capitalist class.'",
      "शास्त्रीय अभिजात वर्ग सिद्धांत लोकतंत्र के रोमांटिक भ्रम को दूर करते हुए राजनीति का गहरा निंदक (cynical) लेकिन यथार्थवादी दृष्टिकोण प्रदान करता है। हालांकि, आलोचकों, विशेष रूप से बहुलवादियों (Pluralists - जैसे रॉबर्ट डाहल) का तर्क है कि आधुनिक लोकतंत्रों में सत्ता किसी एक अभिजात समूह में केंद्रित नहीं है, बल्कि कई प्रतिस्पर्धी अभिजात्य वर्गों (व्यापार, सैन्य, मीडिया, राजनेताओं) के बीच छितरी हुई है। जनता चुनावों और दबाव समूहों के माध्यम से इन अभिजात वर्ग को प्रभावित कर सकती है। मार्क्सवादी विद्वान भी अभिजात वर्ग सिद्धांत की आलोचना करते हैं, यह तर्क देते हुए कि तथाकथित 'अभिजात वर्ग' आर्थिक रूप से हावी 'पूंजीवादी वर्ग' के अलावा और कुछ नहीं है।"
    ],
    "conclusion": [
      "Despite criticisms, the theories of Mosca, Pareto, and Michels remain highly relevant. They compel us to look beyond democratic facades and recognize the persistent reality of elite domination. A mature democracy doesn't eliminate elites; rather, it ensures that multiple elites compete fairly and remain accountable to the public through regular, transparent elections.",
      "आलोचनाओं के बावजूद, मोस्का, पेरेटो और मिशेल्स के सिद्धांत अत्यधिक प्रासंगिक बने हुए हैं। वे हमें लोकतांत्रिक मुखौटों से परे देखने और अभिजात वर्ग के वर्चस्व की निरंतर वास्तविकता को पहचानने के लिए मजबूर करते हैं। एक परिपक्व लोकतंत्र अभिजात वर्ग को खत्म नहीं करता है; बल्कि, यह सुनिश्चित करता है कि कई अभिजात वर्ग निष्पक्ष रूप से प्रतिस्पर्धा करें और नियमित, पारदर्शी चुनावों के माध्यम से जनता के प्रति जवाबदेह रहें।"
    ],
    "shortQ": [
      [
        "What is the core argument of Elite Theory?",
        "अभिजात वर्ग सिद्धांत (Elite Theory) का मुख्य तर्क क्या है?"
      ],
      [
        "Explain Pareto's concept of the 'Circulation of Elites'.",
        "पेरेटो के 'अभिजात वर्ग का परिसंचरण' (Circulation of Elites) की अवधारणा को समझाइए।"
      ],
      [
        "What is the 'Iron Law of Oligarchy'?",
        "'अल्पतंत्र का लौह नियम' (Iron Law of Oligarchy) क्या है?"
      ],
      [
        "According to Mosca, why does a minority always rule the majority?",
        "मोस्का के अनुसार, एक अल्पसंख्यक वर्ग हमेशा बहुमत पर शासन क्यों करता है?"
      ],
      [
        "Name the authors of 'The Ruling Class' and 'Political Parties'.",
        "'The Ruling Class' और 'Political Parties' के लेखकों के नाम बताइए।"
      ]
    ],
    "longQ": [
      [
        "Discuss the classical Elite Theory with reference to the contributions of Mosca, Pareto, and Michels.",
        "मोस्का, पेरेटो और मिशेल्स के योगदान के संदर्भ में शास्त्रीय अभिजात वर्ग सिद्धांत पर चर्चा करें।"
      ],
      [
        "\"Who says organization, says oligarchy.\" Critically examine this statement by Robert Michels.",
        "\"जो संगठन कहता है, वह अल्पतंत्र कहता है।\" रॉबर्ट मिशेल्स के इस कथन का आलोचनात्मक परीक्षण करें।"
      ],
      [
        "Analyze Vilfredo Pareto's concept of the Circulation of Elites. How does it explain political change?",
        "विल्फ्रेडो पेरेटो के अभिजात वर्ग के परिसंचरण की अवधारणा का विश्लेषण करें। यह राजनीतिक परिवर्तन की व्याख्या कैसे करता है?"
      ],
      [
        "Contrast Elite Theory with the Pluralist theory of democracy.",
        "लोकतंत्र के बहुलवादी (Pluralist) सिद्धांत के साथ अभिजात वर्ग सिद्धांत की तुलना करें।"
      ],
      [
        "How does Gaetano Mosca's concept of the 'Ruling Class' challenge the Marxist concept of class?",
        "गेटानो मोस्का की 'शासक वर्ग' की अवधारणा वर्ग की मार्क्सवादी अवधारणा को कैसे चुनौती देती है?"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "Who among the following propounded the concept of the 'Circulation of Elites'?",
          "निम्नलिखित में से किसने 'अभिजात वर्ग का परिसंचरण' (Circulation of Elites) की अवधारणा का प्रतिपादन किया?"
        ],
        "opts": [
          [
            "Gaetano Mosca",
            "गेटानो मोस्का"
          ],
          [
            "Vilfredo Pareto",
            "विल्फ्रेडो पेरेटो"
          ],
          [
            "Robert Michels",
            "रॉबर्ट मिशेल्स"
          ],
          [
            "C. Wright Mills",
            "सी. राइट मिल्स"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "The \"Iron Law of Oligarchy\", which states that all organizations eventually become oligarchies, was formulated by:",
          "\"अल्पतंत्र का लौह नियम\", जिसमें कहा गया है कि सभी संगठन अंततः अल्पतंत्र (oligarchies) बन जाते हैं, किसके द्वारा तैयार किया गया था:"
        ],
        "opts": [
          [
            "Karl Marx",
            "कार्ल मार्क्स"
          ],
          [
            "Max Weber",
            "मैक्स वेबर"
          ],
          [
            "Robert Michels",
            "रॉबर्ट मिशेल्स"
          ],
          [
            "Vilfredo Pareto",
            "विल्फ्रेडो पेरेटो"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "According to Gaetano Mosca, the primary reason the ruling class is able to dominate the masses is because:",
          "गेटानो मोस्का के अनुसार, शासक वर्ग जनता पर हावी होने में सक्षम होने का प्राथमिक कारण यह है कि:"
        ],
        "opts": [
          [
            "They have divine rights",
            "उनके पास दैवीय अधिकार हैं"
          ],
          [
            "They are highly organized while the masses are unorganized",
            "वे अत्यधिक संगठित हैं जबकि जनता असंगठित है"
          ],
          [
            "They possess superior physical strength",
            "उनके पास बेहतर शारीरिक शक्ति है"
          ],
          [
            "The masses willingly surrender power",
            "जनता स्वेच्छा से सत्ता सौंपती है"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "The statement \"History is a graveyard of aristocracies\" is attributed to:",
          "\"इतिहास कुलीन तंत्रों का कब्रिस्तान है\" यह कथन किसका है:"
        ],
        "opts": [
          [
            "Vilfredo Pareto",
            "विल्फ्रेडो पेरेटो"
          ],
          [
            "Robert Michels",
            "रॉबर्ट मिशेल्स"
          ],
          [
            "Gaetano Mosca",
            "गेटानो मोस्का"
          ],
          [
            "Plato",
            "प्लेटो"
          ]
        ],
        "correct": 0
      },
      {
        "q": [
          "Which theory directly challenges Elite Theory by arguing that power in democracy is dispersed among multiple competing interest groups?",
          "कौन सा सिद्धांत यह तर्क देकर अभिजात वर्ग सिद्धांत को सीधे चुनौती देता है कि लोकतंत्र में सत्ता कई प्रतिस्पर्धी हित समूहों के बीच बिखरी हुई है?"
        ],
        "opts": [
          [
            "Marxist Theory",
            "मार्क्सवादी सिद्धांत"
          ],
          [
            "Institutional Theory",
            "संस्थागत सिद्धांत"
          ],
          [
            "Pluralist Theory",
            "बहुलवादी सिद्धांत (Pluralist Theory)"
          ],
          [
            "Systems Theory",
            "प्रणाली सिद्धांत"
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
      "Party System and Pressure Groups",
      "दलीय व्यवस्था और दबाव समूह"
    ],
    "introduction": [
      "Modern democracies cannot function without intermediary organizations that link the citizens to the state. The two most critical intermediaries are Political Parties and Pressure Groups (or Interest Groups). While political parties seek to capture political power and run the government, pressure groups seek only to influence government policies in favor of their specific interests without contesting elections.",
      "आधुनिक लोकतंत्र मध्यवर्ती संगठनों के बिना काम नहीं कर सकते जो नागरिकों को राज्य से जोड़ते हैं। दो सबसे महत्वपूर्ण मध्यस्थ राजनीतिक दल (Political Parties) और दबाव समूह (Pressure Groups - या हित समूह) हैं। जबकि राजनीतिक दल राजनीतिक सत्ता पर कब्जा करना और सरकार चलाना चाहते हैं, दबाव समूह चुनाव लड़े बिना अपने विशिष्ट हितों के पक्ष में सरकारी नीतियों को प्रभावित करना चाहते हैं।"
    ],
    "concepts": [
      {
        "heading": [
          "Party System",
          "दलीय व्यवस्था (Party System)"
        ],
        "body": [
          "- A political party is an organized group of people with a common ideology who seek to win elections and form the government.\n                - Types of Party Systems: \n                  \n                    One-Party System: Only one party is legally allowed to hold power (e.g., CCP in China). Often authoritarian.",
          "- एक राजनीतिक दल एक समान विचारधारा वाले लोगों का एक संगठित समूह है जो चुनाव जीतना और सरकार बनाना चाहते हैं।\n                - दलीय व्यवस्था के प्रकार: \n                  \n                    एक-दलीय व्यवस्था (One-Party System): केवल एक पार्टी को कानूनी रूप से सत्ता रखने की अनुमति है (जैसे, चीन में CCP)। अक्सर सत्तावादी।"
        ]
      },
      {
        "heading": [
          "Two-Party System",
          "द्वि-दलीय व्यवस्था (Two-Party System)"
        ],
        "body": [
          "Two major parties dominate the political landscape (e.g., USA: Democrats vs. Republicans; UK: Conservatives vs. Labour). Highly stable.",
          "दो प्रमुख दल राजनीतिक परिदृश्य पर हावी हैं (जैसे, USA: डेमोक्रेट्स बनाम रिपब्लिकन; UK: कंजर्वेटिव बनाम लेबर)। अत्यधिक स्थिर।"
        ]
      },
      {
        "heading": [
          "Multi-Party System",
          "बहु-दलीय व्यवस्था (Multi-Party System)"
        ],
        "body": [
          "Multiple parties have a realistic chance of gaining power, often leading to coalition governments (e.g., India, France, Italy). Highly representative but can be unstable.",
          "कई पार्टियों के पास सत्ता हासिल करने का यथार्थवादी मौका है, जिससे अक्सर गठबंधन सरकारें बनती हैं (जैसे, भारत, फ्रांस, इटली)। अत्यधिक प्रतिनिधि (representative) लेकिन अस्थिर हो सकती है।"
        ]
      },
      {
        "heading": [
          "Pressure Groups",
          "दबाव समूह (Pressure Groups)"
        ],
        "body": [
          "- An organized group that tries to influence public policy in the interest of a particular cause. They do not field candidates for elections.\n                - Techniques: Lobbying, strikes, protests, funding campaigns, and public relations campaigns.\n                - Types: \n                  \n                    Associational: Formed to pursue specific economic interests (e.g., FICCI, Trade Unions).",
          "- एक संगठित समूह जो किसी विशेष कारण के हित में सार्वजनिक नीति को प्रभावित करने का प्रयास करता है। वे चुनाव के लिए उम्मीदवार नहीं उतारते हैं।\n                - तकनीकें: पैरवी (Lobbying), हड़ताल, विरोध प्रदर्शन, अभियानों का वित्तपोषण, और जनसंपर्क अभियान।\n                - प्रकार (गेब्रियल आमंड के अनुसार): \n                  \n                    सहयोगी (Associational): विशिष्ट आर्थिक हितों को आगे बढ़ाने के लिए गठित (जैसे, FICCI, ट्रेड यूनियन)।"
        ]
      },
      {
        "heading": [
          "Institutional",
          "संस्थागत (Institutional)"
        ],
        "body": [
          "Part of the government machinery but act as pressure groups (e.g., Army, Bureaucracy).",
          "सरकारी मशीनरी का हिस्सा लेकिन दबाव समूहों के रूप में कार्य करते हैं (जैसे, सेना, नौकरशाही)।"
        ]
      },
      {
        "heading": [
          "Non-Associational",
          "गैर-सहयोगी (Non-Associational)"
        ],
        "body": [
          "Based on kinship, religion, or caste (e.g., Karni Sena, All India Muslim Personal Law Board).",
          "रिश्तेदारी, धर्म या जाति पर आधारित (जैसे, करणी सेना, ऑल इंडिया मुस्लिम पर्सनल लॉ बोर्ड)।"
        ]
      },
      {
        "heading": [
          "Anomic",
          "एनोमिक (Anomic)"
        ],
        "body": [
          "Spontaneous groups forming out of sudden crises, often using unconstitutional means like riots.",
          "अचानक आने वाले संकटों से बनने वाले सहज समूह, अक्सर दंगों जैसे असंवैधानिक साधनों का उपयोग करते हैं।"
        ]
      }
    ],
    "quotes": [
      [
        "\"Political parties are the transmission belts between the public and the government.\"",
        "\"राजनीतिक दल जनता और सरकार के बीच ट्रांसमिशन बेल्ट (transmission belts) हैं।\""
      ]
    ],
    "evaluation": [
      "The Multi-Party system in India beautifully accommodates the nation's immense diversity, giving a voice to regional and caste-based aspirations (which a two-party system might crush). However, it often leads to fractured mandates and opportunistic coalitions, compromising strong decision-making. Pressure groups are essential for democracy as they prevent the tyranny of the majority by protecting minority interests. Yet, powerful corporate pressure groups (lobbyists) often hijack public policy, creating a system where policies benefit the wealthy elite rather than the common citizen.",
      "भारत में बहु-दलीय प्रणाली देश की अपार विविधता को खूबसूरती से समायोजित करती है, क्षेत्रीय और जाति-आधारित आकांक्षाओं को आवाज देती है (जिसे दो-दलीय प्रणाली कुचल सकती है)। हालांकि, यह अक्सर खंडित जनादेश और अवसरवादी गठबंधनों की ओर ले जाता है, जिससे मजबूत निर्णय लेने में समझौता होता है। लोकतंत्र के लिए दबाव समूह आवश्यक हैं क्योंकि वे अल्पसंख्यक हितों की रक्षा करके बहुमत के अत्याचार को रोकते हैं। फिर भी, शक्तिशाली कॉर्पोरेट दबाव समूह (लॉबिस्ट) अक्सर सार्वजनिक नीति को हाईजैक कर लेते हैं, जिससे एक ऐसी प्रणाली बन जाती है जहां नीतियां आम नागरिक के बजाय अमीर अभिजात वर्ग को लाभ पहुंचाती हैं।"
    ],
    "conclusion": [
      "Both political parties and pressure groups are indispensable arteries of a healthy democratic body. While parties organize the chaos of public opinion into governable majorities, pressure groups ensure that the government remains continuously responsive to the specific needs of diverse sections of society between elections.",
      "राजनीतिक दल और दबाव समूह दोनों एक स्वस्थ लोकतांत्रिक निकाय की अपरिहार्य धमनियां हैं। जबकि पार्टियां जनमत की अराजकता को शासन योग्य बहुमत में व्यवस्थित करती हैं, दबाव समूह यह सुनिश्चित करते हैं कि सरकार चुनावों के बीच समाज के विविध वर्गों की विशिष्ट आवश्यकताओं के प्रति लगातार उत्तरदायी बनी रहे।"
    ],
    "shortQ": [
      [
        "What is the primary difference between a Political Party and a Pressure Group?",
        "राजनीतिक दल और दबाव समूह के बीच प्राथमिक अंतर क्या है?"
      ],
      [
        "Give an example of a country with a Two-Party system.",
        "द्वि-दलीय (Two-Party) व्यवस्था वाले देश का उदाहरण दें।"
      ],
      [
        "What is an 'Associational' pressure group? Give an example.",
        "'सहयोगी' (Associational) दबाव समूह क्या है? एक उदाहरण दें।"
      ],
      [
        "Mention two techniques used by pressure groups to influence policy.",
        "नीति को प्रभावित करने के लिए दबाव समूहों द्वारा उपयोग की जाने वाली दो तकनीकों का उल्लेख करें।"
      ],
      [
        "Define a Multi-Party system.",
        "बहु-दलीय (Multi-Party) प्रणाली को परिभाषित करें।"
      ]
    ],
    "longQ": [
      [
        "Discuss the different types of Party Systems with suitable examples.",
        "उपयुक्त उदाहरणों के साथ दलीय व्यवस्था के विभिन्न प्रकारों पर चर्चा करें।"
      ],
      [
        "Define Pressure Groups and classify them according to Gabriel Almond.",
        "दबाव समूहों को परिभाषित करें और गेब्रियल आमंड के अनुसार उनका वर्गीकरण करें।"
      ],
      [
        "Compare and contrast the roles of Political Parties and Pressure Groups in a democracy.",
        "लोकतंत्र में राजनीतिक दलों और दबाव समूहों की भूमिकाओं की तुलना करें।"
      ],
      [
        "Critically analyze the merits and demerits of the Multi-Party system in India.",
        "भारत में बहु-दलीय प्रणाली के गुण और दोषों का आलोचनात्मक विश्लेषण करें।"
      ],
      [
        "\"Pressure groups are the invisible empires in modern democracies.\" Elaborate.",
        "\"दबाव समूह आधुनिक लोकतंत्रों में अदृश्य साम्राज्य (invisible empires) हैं।\" विस्तार से बताएं।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "The primary objective of a political party, which distinguishes it from a pressure group, is to:",
          "राजनीतिक दल का प्राथमिक उद्देश्य, जो इसे दबाव समूह से अलग करता है, वह है:"
        ],
        "opts": [
          [
            "Influence public opinion",
            "जनमत को प्रभावित करना"
          ],
          [
            "Capture political power and form the government",
            "राजनीतिक सत्ता पर कब्जा करना और सरकार बनाना"
          ],
          [
            "Promote social welfare",
            "समाज कल्याण को बढ़ावा देना"
          ],
          [
            "Protest against laws",
            "कानूनों का विरोध करना"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which country is a classic example of a Two-Party System?",
          "कौन सा देश द्वि-दलीय प्रणाली (Two-Party System) का एक उत्कृष्ट उदाहरण है?"
        ],
        "opts": [
          [
            "India",
            "भारत"
          ],
          [
            "France",
            "फ्रांस"
          ],
          [
            "United States of America",
            "संयुक्त राज्य अमेरिका"
          ],
          [
            "China",
            "चीन"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "Organizations like FICCI or Trade Unions, formed to protect specific economic interests, are examples of:",
          "FICCI या ट्रेड यूनियन जैसे संगठन, जो विशिष्ट आर्थिक हितों की रक्षा के लिए बनाए गए हैं, किसके उदाहरण हैं:"
        ],
        "opts": [
          [
            "Institutional pressure groups",
            "संस्थागत (Institutional) दबाव समूह"
          ],
          [
            "Associational pressure groups",
            "सहयोगी (Associational) दबाव समूह"
          ],
          [
            "Anomic pressure groups",
            "एनोमिक (Anomic) दबाव समूह"
          ],
          [
            "Non-associational pressure groups",
            "गैर-सहयोगी (Non-associational) दबाव समूह"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Spontaneous, unorganized crowds that gather suddenly to protest, sometimes violently, are classified as:",
          "सहज, असंगठित भीड़ जो विरोध करने के लिए अचानक इकट्ठा होती है, कभी-कभी हिंसक रूप से, उन्हें वर्गीकृत किया जाता है:"
        ],
        "opts": [
          [
            "Associational groups",
            "सहयोगी (Associational) समूह"
          ],
          [
            "Institutional groups",
            "संस्थागत (Institutional) समूह"
          ],
          [
            "Anomic pressure groups",
            "एनोमिक (Anomic) दबाव समूह"
          ],
          [
            "Political parties",
            "राजनीतिक दल"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "Maurice Duverger is famous for his structural classification of:",
          "मौरिस डुवर्जर (Maurice Duverger) किसके संरचनात्मक वर्गीकरण के लिए प्रसिद्ध हैं:"
        ],
        "opts": [
          [
            "Voting behavior",
            "मतदान व्यवहार"
          ],
          [
            "Political Parties",
            "राजनीतिक दल"
          ],
          [
            "Bureaucracies",
            "नौकरशाही"
          ],
          [
            "Constitutions",
            "संविधान"
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
      "Political Communication and Public Opinion",
      "राजनीतिक संचार और जनमत"
    ],
    "introduction": [
      "Political Communication is the nervous system of the political process. It refers to the flow of information between the political system (government, leaders) and the environment (citizens). This continuous exchange of information is what forms Public Opinion—the collective views and attitudes of the public on matters of relevance to the state. In modern democracies, the health of the state depends entirely on the transparency and accuracy of this communication.",
      "राजनीतिक संचार (Political Communication) राजनीतिक प्रक्रिया का तंत्रिका तंत्र (nervous system) है। यह राजनीतिक व्यवस्था (सरकार, नेताओं) और पर्यावरण (नागरिकों) के बीच सूचना के प्रवाह को संदर्भित करता है। सूचना का यह निरंतर आदान-प्रदान ही जनमत (Public Opinion) बनाता है—राज्य के लिए प्रासंगिकता के मामलों पर जनता के सामूहिक विचार और दृष्टिकोण। आधुनिक लोकतंत्रों में, राज्य का स्वास्थ्य पूरी तरह से इस संचार की पारदर्शिता और सटीकता पर निर्भर करता है।"
    ],
    "concepts": [
      {
        "heading": [
          "Political Communication",
          "राजनीतिक संचार (Political Communication)"
        ],
        "body": [
          "- Downward Flow: From government to citizens (e.g., policy announcements, propaganda, speeches).\n                - Upward Flow: From citizens to government (e.g., voting, protests, opinion polls, petitions).\n                - Horizontal Flow: Communication among citizens (e.g., debates, social media discussions).",
          "- नीचे की ओर प्रवाह (Downward Flow): सरकार से नागरिकों तक (जैसे, नीति घोषणाएं, प्रचार, भाषण)।\n                - ऊपर की ओर प्रवाह (Upward Flow): नागरिकों से सरकार तक (जैसे, मतदान, विरोध प्रदर्शन, जनमत सर्वेक्षण, याचिकाएं)।\n                - क्षैतिज प्रवाह (Horizontal Flow): नागरिकों के बीच संचार (जैसे, बहस, सोशल मीडिया चर्चा)।"
        ]
      },
      {
        "heading": [
          "Public Opinion",
          "जनमत (Public Opinion)"
        ],
        "body": [
          "- It is not just the opinion of the majority; it must be an opinion that aims at the general welfare and is formulated through rational debate.\n                - Agencies forming Public Opinion: \n                  \n                    Press/Mass Media: Traditionally the strongest pillar (the \"Fourth Estate\").",
          "- यह केवल बहुमत की राय नहीं है; यह एक ऐसी राय होनी चाहिए जिसका उद्देश्य सामान्य कल्याण हो और तर्कसंगत बहस के माध्यम से तैयार की गई हो।\n                - जनमत बनाने वाली एजेंसियां: \n                  \n                    प्रेस/जनसंचार माध्यम (Mass Media): पारंपरिक रूप से सबसे मजबूत स्तंभ (\"चौथा स्तंभ\" - Fourth Estate)।"
        ]
      },
      {
        "heading": [
          "Political Parties",
          "राजनीतिक दल"
        ],
        "body": [
          "Educate the masses and crystallize vague demands into concrete policies.",
          "जनता को शिक्षित करते हैं और अस्पष्ट मांगों को ठोस नीतियों में क्रिस्टलीकृत करते हैं।"
        ]
      },
      {
        "heading": [
          "Educational Institutions & Family",
          "शैक्षणिक संस्थान और परिवार"
        ],
        "body": [
          "Instill foundational values.",
          "मूलभूत मूल्यों को स्थापित करते हैं।"
        ]
      },
      {
        "heading": [
          "Social Media",
          "सोशल मीडिया"
        ],
        "body": [
          "The modern frontier, allowing instantaneous, global, and highly personalized communication, but also susceptible to echo chambers.",
          "आधुनिक सीमा, जो तात्कालिक, वैश्विक और अत्यधिक व्यक्तिगत संचार की अनुमति देती है, लेकिन 'इको चैंबर' (echo chambers) के प्रति भी संवेदनशील है।"
        ]
      },
      {
        "heading": [
          "Propaganda vs. Education",
          "प्रचार (Propaganda) बनाम शिक्षा"
        ],
        "body": [
          "Communication can be manipulative. While political education aims to inform, propaganda aims to systematically manipulate public opinion using emotional appeals and half-truths (e.g., wartime propaganda, fake news during elections).",
          "संचार जोड़-तोड़ वाला (manipulative) हो सकता है। जबकि राजनीतिक शिक्षा का उद्देश्य सूचित करना है, प्रचार का उद्देश्य भावनात्मक अपीलों और आधे-अधूरे सच का उपयोग करके व्यवस्थित रूप से जनमत में हेरफेर करना है (जैसे, युद्ध के समय का प्रचार, चुनावों के दौरान फर्जी खबरें)।"
        ]
      }
    ],
    "quotes": [
      [
        "Benjamin Franklin: \"Without freedom of thought, there can be no such thing as wisdom; and no such thing as public liberty, without freedom of speech.\"",
        "बेंजामिन फ्रैंकलिन: \"विचार की स्वतंत्रता के बिना, ज्ञान जैसी कोई चीज नहीं हो सकती; और बोलने की स्वतंत्रता के बिना, सार्वजनिक स्वतंत्रता जैसी कोई चीज नहीं हो सकती।\""
      ]
    ],
    "evaluation": [
      "While public opinion is supposed to be the driving force of democracy, critical theorists argue it is often manufactured. Noam Chomsky's concept of \"Manufacturing Consent\" highlights how corporate-owned mass media filters information to serve elite interests, effectively brainwashing the public into supporting policies that harm them. Furthermore, in the digital age, algorithms and social media bots are weaponized to spread disinformation and hyper-polarize society, making the formation of a rational, unified 'public opinion' increasingly difficult.",
      "यद्यपि जनमत को लोकतंत्र की प्रेरक शक्ति माना जाता है, लेकिन आलोचनात्मक सिद्धांतकारों (critical theorists) का तर्क है कि इसे अक्सर 'निर्मित' (manufactured) किया जाता है। नोम चोम्स्की की \"मैन्युफैक्चरिंग कंसेंट\" (Manufacturing Consent) की अवधारणा इस बात पर प्रकाश डालती है कि कैसे कॉर्पोरेट-स्वामित्व वाले जनसंचार माध्यम कुलीन वर्ग के हितों की सेवा करने के लिए सूचनाओं को फ़िल्टर करते हैं, जिससे प्रभावी रूप से जनता का ब्रेनवॉश होता है ताकि वे उन नीतियों का समर्थन कर सकें जो उन्हें नुकसान पहुँचाती हैं। इसके अलावा, डिजिटल युग में, एल्गोरिदम और सोशल मीडिया बॉट्स का उपयोग दुष्प्रचार फैलाने और समाज का अत्यधिक ध्रुवीकरण करने के लिए हथियारों के रूप में किया जाता है, जिससे एक तर्कसंगत, एकीकृत 'जनमत' का निर्माण तेजी से कठिन हो गया है।"
    ],
    "conclusion": [
      "A democratic government is fundamentally a government by public opinion. Ensuring that political communication remains free, fair, and protected from corporate monopolies or state censorship is the greatest challenge for contemporary political sociology. A misinformed public opinion is the fastest route to democratic decay.",
      "एक लोकतांत्रिक सरकार मूल रूप से जनमत की सरकार है। यह सुनिश्चित करना कि राजनीतिक संचार स्वतंत्र, निष्पक्ष और कॉर्पोरेट एकाधिकार या राज्य की सेंसरशिप से सुरक्षित रहे, समकालीन राजनीतिक समाजशास्त्र के लिए सबसे बड़ी चुनौती है। गलत सूचना वाला जनमत लोकतांत्रिक पतन का सबसे तेज़ मार्ग है।"
    ],
    "shortQ": [
      [
        "Define Political Communication.",
        "राजनीतिक संचार (Political Communication) को परिभाषित करें।"
      ],
      [
        "What is meant by Public Opinion?",
        "जनमत (Public Opinion) से क्या तात्पर्य है?"
      ],
      [
        "Name three main agencies that form public opinion.",
        "जनमत बनाने वाली तीन मुख्य एजेंसियों के नाम बताइए।"
      ],
      [
        "What is the 'upward flow' of political communication? Give an example.",
        "राजनीतिक संचार का 'ऊपर की ओर प्रवाह' (upward flow) क्या है? एक उदाहरण दें।"
      ],
      [
        "Who wrote the classic book \"Public Opinion\"?",
        "क्लासिक पुस्तक \"Public Opinion\" किसने लिखी है?"
      ]
    ],
    "longQ": [
      [
        "Discuss the role and significance of Political Communication in a democracy.",
        "लोकतंत्र में राजनीतिक संचार की भूमिका और महत्व पर चर्चा करें।"
      ],
      [
        "Define Public Opinion. What are the various agencies involved in its formation?",
        "जनमत को परिभाषित करें। इसके निर्माण में शामिल विभिन्न एजेंसियां कौन सी हैं?"
      ],
      [
        "\"Public opinion is not just the opinion of the majority.\" Critically evaluate this statement.",
        "\"जनमत केवल बहुमत की राय नहीं है।\" इस कथन का आलोचनात्मक मूल्यांकन करें।"
      ],
      [
        "Examine the impact of mass media and social media on political communication today.",
        "आज राजनीतिक संचार पर मास मीडिया और सोशल मीडिया के प्रभाव का परीक्षण करें।"
      ],
      [
        "Discuss the concept of 'Manufacturing Consent' and how propaganda distorts public opinion.",
        "'सहमति निर्माण' (Manufacturing Consent) की अवधारणा पर चर्चा करें और बताएं कि प्रचार (propaganda) जनमत को कैसे विकृत करता है।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "The foundational book \"Public Opinion\", which discussed how media creates \"pictures in our heads\", was authored by:",
          "मूलभूत पुस्तक \"Public Opinion\", जिसमें चर्चा की गई थी कि मीडिया हमारे \"दिमाग में चित्र\" कैसे बनाता है, किसके द्वारा लिखी गई थी?"
        ],
        "opts": [
          [
            "Noam Chomsky",
            "नोम चोम्स्की"
          ],
          [
            "Walter Lippmann",
            "वाल्टर लिपमैन"
          ],
          [
            "Jürgen Habermas",
            "जुर्गन हैबरमास"
          ],
          [
            "Karl Deutsch",
            "कार्ल Deutsch"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which concept, popularized by Noam Chomsky, explains how mass media manipulates the public to support elite interests?",
          "नोम चोम्स्की द्वारा लोकप्रिय कौन सी अवधारणा बताती है कि मास मीडिया कुलीन वर्ग के हितों का समर्थन करने के लिए जनता में कैसे हेरफेर करता है?"
        ],
        "opts": [
          [
            "The Public Sphere",
            "द पब्लिक स्फीयर (The Public Sphere)"
          ],
          [
            "Political Socialization",
            "राजनीतिक समाजीकरण"
          ],
          [
            "Manufacturing Consent",
            "मैन्युफैक्चरिंग कंसेंट (सहमति निर्माण)"
          ],
          [
            "Circulation of Elites",
            "अभिजात वर्ग का परिसंचरण"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "In political communication, citizens organizing a protest march and sending a petition to the government is an example of:",
          "राजनीतिक संचार में, नागरिकों द्वारा विरोध मार्च आयोजित करना और सरकार को याचिका भेजना किसका एक उदाहरण है:"
        ],
        "opts": [
          [
            "Downward flow",
            "नीचे की ओर प्रवाह (Downward flow)"
          ],
          [
            "Upward flow",
            "ऊपर की ओर प्रवाह (Upward flow)"
          ],
          [
            "Horizontal flow",
            "क्षैतिज प्रवाह (Horizontal flow)"
          ],
          [
            "Lateral flow",
            "पार्श्व प्रवाह (Lateral flow)"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "The \"Public Sphere\", a space where citizens can come together to freely discuss societal problems, is a concept central to the work of:",
          "\"पब्लिक स्फीयर\" (Public Sphere), एक ऐसा स्थान जहां नागरिक स्वतंत्र रूप से सामाजिक समस्याओं पर चर्चा करने के लिए एक साथ आ सकते हैं, किसके काम की एक केंद्रीय अवधारणा है:"
        ],
        "opts": [
          [
            "Max Weber",
            "मैक्स वेबर"
          ],
          [
            "Jürgen Habermas",
            "जुर्गन हैबरमास"
          ],
          [
            "Karl Marx",
            "कार्ल मार्क्स"
          ],
          [
            "Robert Michels",
            "रॉबर्ट मिशेल्स"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which of the following is traditionally referred to as the \"Fourth Estate\" in a democracy for its role in shaping public opinion?",
          "लोकतंत्र में जनमत को आकार देने में अपनी भूमिका के लिए निम्नलिखित में से किसे पारंपरिक रूप से \"चौथा स्तंभ\" (Fourth Estate) कहा जाता है?"
        ],
        "opts": [
          [
            "The Judiciary",
            "न्यायपालिका"
          ],
          [
            "Political Parties",
            "राजनीतिक दल"
          ],
          [
            "The Press/Media",
            "प्रेस / मीडिया"
          ],
          [
            "Pressure Groups",
            "दबाव समूह"
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
  }
];

export default function DetailedNotesPage() {
  const { language } = useAppStore();
  const paperTitle = language === 'en' ? 'PSC-C-311: Political Sociology' : 'PSC-C-311: राजनीतिक समाजशास्त्र';
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
            <span className="font-semibold">{t('Paper Code: PSC-C-311', 'पेपर कोड: PSC-C-311')}</span>
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
            {t('All 8 Topics Complete! Full PSC-C-311 notes with 5-part structure, MCQs & UGC NET Prep ready.', 'सभी 8 विषय पूर्ण! 5-भाग संरचना, MCQ और UGC NET तैयारी के साथ संपूर्ण PSC-C-311 नोट्स तैयार।')}
          </p>
        </div>
      </div>
    </div>
  );
}
