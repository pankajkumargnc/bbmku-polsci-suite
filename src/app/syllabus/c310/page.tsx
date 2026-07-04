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
      "Introducing Jharkhand: Demography & Culture of Tribal People",
      "झारखंड का परिचय: जनजातीय लोगों की जनसांख्यिकी और संस्कृति"
    ],
    "introduction": [
      "Jharkhand, literally translating to \"The Land of Forests,\" was carved out of the southern part of Bihar on November 15, 2000. It is renowned for its rich mineral wealth and its significant tribal population. Understanding the politics of Jharkhand is impossible without first understanding the unique demographic profile and vibrant cultural heritage of its indigenous people (Adivasis), who have inhabited the region for centuries.",
      "झारखंड, जिसका शाब्दिक अर्थ \"वनों की भूमि\" है, 15 नवंबर, 2000 को बिहार के दक्षिणी हिस्से को अलग करके बनाया गया था। यह अपनी समृद्ध खनिज संपदा और अपनी महत्वपूर्ण जनजातीय आबादी के लिए प्रसिद्ध है। झारखंड की राजनीति को इसके मूल निवासियों (आदिवासियों) की अनूठी जनसांख्यिकीय प्रोफ़ाइल और जीवंत सांस्कृतिक विरासत को समझे बिना समझना असंभव है, जो सदियों से इस क्षेत्र में निवास करते हैं।"
    ],
    "concepts": [
      {
        "heading": [
          "Demographic Profile",
          "जनसांख्यिकीय प्रोफ़ाइल (Demographic Profile)"
        ],
        "body": [
          "- According to the 2011 Census, Scheduled Tribes (STs) constitute about 26.2% of Jharkhand's total population.\n                - There are 32 recognized tribal groups in the state. The major tribes are Santhal, Munda, Oraon, and Ho.\n                - There are also Particularly Vulnerable Tribal Groups (PVTGs) like Asur, Birhor, and Pahariya, whose populations are small and declining.",
          "- 2011 की जनगणना के अनुसार, अनुसूचित जनजाति (ST) झारखंड की कुल आबादी का लगभग 26.2% है।\n                - राज्य में 32 मान्यता प्राप्त जनजातीय समूह हैं। प्रमुख जनजातियां संथाल, मुंडा, उरांव और हो हैं।\n                - असुर, बिरहोर और पहाड़िया जैसे विशेष रूप से कमजोर जनजातीय समूह (PVTG) भी हैं, जिनकी आबादी कम है और घट रही है।"
        ]
      },
      {
        "heading": [
          "Socio-Cultural Ethos",
          "सामाजिक-सांस्कृतिक लोकाचार (Socio-Cultural Ethos)"
        ],
        "body": [
          "- Sarna Religion: The traditional religion of many tribes, centering around nature worship, specifically the veneration of sacred groves (Sarna Sthal).\n                - Festivals: Sarhul (worship of the Sal tree, marking the new year), Karam (celebrating youth and harvest), Sohrai, and Mage Porob.\n                - Language: Tribal languages belong to two main linguistic families: Austro-Asiatic (Santhali, Mundari, Ho) and Dravidian (Kurukh spoken by Oraons).",
          "- सरना धर्म: कई जनजातियों का पारंपरिक धर्म, जो प्रकृति पूजा के इर्द-गिर्द घूमता है, विशेष रूप से पवित्र उपवनों (सरना स्थल) की वंदना।\n                - त्यौहार: सरहुल (साल के पेड़ की पूजा, नए साल का प्रतीक), करम (युवाओं और फसल का जश्न), सोहराई और मागे पर्व।\n                - भाषा: जनजातीय भाषाएं दो मुख्य भाषाई परिवारों से संबंधित हैं: ऑस्ट्रो-एशियाई (संथाली, मुंडारी, हो) और द्रविड़ (उरांव द्वारा बोली जाने वाली कुड़ुख)।"
        ]
      },
      {
        "heading": [
          "Egalitarian Society",
          "समतावादी समाज (Egalitarian Society)"
        ],
        "body": [
          "Tribal societies in Jharkhand traditionally emphasize community ownership, egalitarianism, and democratic decision-making (e.g., the Parha or Manki-Munda systems), standing in contrast to the rigid caste hierarchies of mainstream Indian society.",
          "झारखंड में आदिवासी समाज पारंपरिक रूप से सामुदायिक स्वामित्व, समतावाद और लोकतांत्रिक निर्णय लेने (जैसे, पढा या मानकी-मुंडा प्रणाली) पर जोर देते हैं, जो मुख्यधारा के भारतीय समाज के कठोर जाति पदानुक्रम के विपरीत है।"
        ]
      }
    ],
    "quotes": [
      [
        "\"The tribal identity in Jharkhand is not merely an ethnic marker; it is a profound connection to Jal, Jungle, and Zameen (Water, Forest, and Land) that shapes their entire worldview and political consciousness.\"",
        "\"झारखंड में आदिवासी पहचान केवल एक जातीय मार्कर नहीं है; यह जल, जंगल और जमीन से एक गहरा संबंध है जो उनके पूरे विश्वदृष्टि और राजनीतिक चेतना को आकार देता है।\""
      ]
    ],
    "evaluation": [
      "While the cultural richness of Jharkhand's tribes is celebrated, their demographic reality is grim. Over the decades, due to massive industrialization and influx of non-tribals (Dikus), the tribal population percentage has steadily declined (from over 36% in 1951 to 26.2% in 2011). This demographic shift has created deep anxieties regarding cultural assimilation and political marginalization. Furthermore, despite being resource-rich, the tribal populations remain disproportionately impoverished, facing high rates of displacement and malnutrition.",
      "हालांकि झारखंड की जनजातियों की सांस्कृतिक समृद्धि का जश्न मनाया जाता है, लेकिन उनकी जनसांख्यिकीय वास्तविकता गंभीर है। दशकों से, बड़े पैमाने पर औद्योगीकरण और गैर-आदिवासियों (जिन्हें 'दिक्कू' कहा जाता है) की आमद के कारण, जनजातीय आबादी का प्रतिशत लगातार कम हुआ है (1951 में 36% से अधिक से गिरकर 2011 में 26.2% हो गया)। इस जनसांख्यिकीय बदलाव ने सांस्कृतिक आत्मसात और राजनीतिक हाशिए पर जाने के संबंध में गहरी चिंताएं पैदा की हैं। इसके अलावा, संसाधन-संपन्न होने के बावजूद, आदिवासी आबादी असमान रूप से गरीब है, विस्थापन और कुपोषण की उच्च दर का सामना कर रही है।"
    ],
    "conclusion": [
      "The demography and culture of the tribal people are the bedrock of Jharkhand's identity. However, they are currently facing an existential threat from aggressive modernization and demographic influx. Protecting their cultural heritage and ensuring their demographic and economic security is the primary challenge for contemporary Jharkhand politics.",
      "जनजातीय लोगों की जनसांख्यिकी और संस्कृति झारखंड की पहचान का आधार हैं। हालांकि, वे वर्तमान में आक्रामक आधुनिकीकरण और जनसांख्यिकीय आमद से अस्तित्व के खतरे का सामना कर रहे हैं। उनकी सांस्कृतिक विरासत की रक्षा करना और उनकी जनसांख्यिकीय और आर्थिक सुरक्षा सुनिश्चित करना समकालीन झारखंड की राजनीति की प्राथमिक चुनौती है।"
    ],
    "shortQ": [
      [
        "When was Jharkhand formed?",
        "झारखंड का गठन कब हुआ था?"
      ],
      [
        "Name the four major tribes of Jharkhand.",
        "झारखंड की चार प्रमुख जनजातियों के नाम बताइए।"
      ],
      [
        "What is the significance of the Sarhul festival?",
        "सरहुल उत्सव का क्या महत्व है?"
      ],
      [
        "Define PVTGs and name two such groups in Jharkhand.",
        "PVTG को परिभाषित करें और झारखंड में ऐसे दो समूहों के नाम बताइए।"
      ],
      [
        "What is the 'Sarna' religion?",
        "'सरना' धर्म क्या है?"
      ]
    ],
    "longQ": [
      [
        "Discuss the demographic profile of the tribal population in Jharkhand based on the 2011 census.",
        "2011 की जनगणना के आधार पर झारखंड में जनजातीय आबादी की जनसांख्यिकीय प्रोफ़ाइल पर चर्चा करें।"
      ],
      [
        "Describe the unique socio-cultural ethos of the Adivasis of Jharkhand.",
        "झारखंड के आदिवासियों के अनूठे सामाजिक-सांस्कृतिक लोकाचार का वर्णन करें।"
      ],
      [
        "Critically analyze the reasons behind the declining percentage of the tribal population in Jharkhand.",
        "झारखंड में जनजातीय आबादी के घटते प्रतिशत के पीछे के कारणों का आलोचनात्मक विश्लेषण करें।"
      ],
      [
        "\"Jal, Jungle, and Zameen are central to tribal identity.\" Elaborate on this statement with reference to Jharkhand's culture.",
        "\"जल, जंगल और जमीन आदिवासी पहचान के केंद्र में हैं।\" झारखंड की संस्कृति के संदर्भ में इस कथन का विस्तार करें।"
      ],
      [
        "Write an essay on the major festivals and religious beliefs of the tribes in Jharkhand.",
        "झारखंड की जनजातियों के प्रमुख त्योहारों और धार्मिक मान्यताओं पर एक निबंध लिखिए।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "According to the 2011 Census, the tribal population in Jharkhand is approximately:",
          "2011 की जनगणना के अनुसार, झारखंड में जनजातीय आबादी लगभग है:"
        ],
        "opts": [
          [
            "15.5%",
            "15.5%"
          ],
          [
            "26.2%",
            "26.2%"
          ],
          [
            "36.5%",
            "36.5%"
          ],
          [
            "45.2%",
            "45.2%"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which is the most populous tribe in Jharkhand?",
          "झारखंड में सबसे अधिक आबादी वाली जनजाति कौन सी है?"
        ],
        "opts": [
          [
            "Munda",
            "मुंडा"
          ],
          [
            "Oraon",
            "उरांव"
          ],
          [
            "Santhal",
            "संथाल"
          ],
          [
            "Ho",
            "हो"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "The festival of Sarhul is associated with the worship of the:",
          "सरहुल उत्सव किसकी पूजा से जुड़ा है?"
        ],
        "opts": [
          [
            "Peepal tree",
            "पीपल का पेड़"
          ],
          [
            "Banyan tree",
            "बरगद का पेड़"
          ],
          [
            "Sal tree",
            "साल का पेड़"
          ],
          [
            "Mango tree",
            "आम का पेड़"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "The Kurukh language spoken by the Oraon tribe belongs to which linguistic family?",
          "उरांव जनजाति द्वारा बोली जाने वाली 'कुड़ुख' भाषा किस भाषाई परिवार से संबंधित है?"
        ],
        "opts": [
          [
            "Indo-Aryan",
            "इंडो-आर्यन"
          ],
          [
            "Austro-Asiatic",
            "ऑस्ट्रो-एशियाई"
          ],
          [
            "Dravidian",
            "द्रविड़"
          ],
          [
            "Sino-Tibetan",
            "चीन-तिब्बती"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "Which of the following is considered a PVTG (Particularly Vulnerable Tribal Group) in Jharkhand?",
          "निम्नलिखित में से किसे झारखंड में PVTG (विशेष रूप से कमजोर जनजातीय समूह) माना जाता है?"
        ],
        "opts": [
          [
            "Santhal",
            "संथाल"
          ],
          [
            "Munda",
            "मुंडा"
          ],
          [
            "Birhor",
            "बिरहोर"
          ],
          [
            "Bhumij",
            "भूमिज"
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
      "Impact of British Administration in Tribal Areas and Protest Movements",
      "आदिवासी क्षेत्रों में ब्रिटिश प्रशासन का प्रभाव और विरोध आंदोलन"
    ],
    "introduction": [
      "The entry of the British East India Company into the Chotanagpur region (present-day Jharkhand) in the late 18th century profoundly disrupted the traditional socio-economic and political structures of the tribal societies. The imposition of new administrative systems, land revenue policies, and the influx of outsiders sparked a series of fierce tribal uprisings. The most prominent among these were the Kol Rebellion and the Birsa Munda Movement (Ulgulan), which shaped the historical consciousness of the region.",
      "18वीं शताब्दी के अंत में छोटानागपुर क्षेत्र (वर्तमान झारखंड) में ब्रिटिश ईस्ट इंडिया कंपनी के प्रवेश ने जनजातीय समाजों की पारंपरिक सामाजिक-आर्थिक और राजनीतिक संरचनाओं को गहराई से बाधित कर दिया। नई प्रशासनिक प्रणालियों, भू-राजस्व नीतियों को थोपने और बाहरी लोगों की आमद ने कई भयंकर आदिवासी विद्रोहों को जन्म दिया। इनमें सबसे प्रमुख कोल विद्रोह और बिरसा मुंडा आंदोलन (उलगुलान) थे, जिन्होंने इस क्षेत्र की ऐतिहासिक चेतना को आकार दिया।"
    ],
    "concepts": [
      {
        "heading": [
          "Impact of British Administration",
          "ब्रिटिश प्रशासन का प्रभाव (Impact of British Administration)"
        ],
        "body": [
          "- Land Revenue System: The British introduced the Permanent Settlement (1793), transforming traditional community ownership of land (Khuntkatti system) into private property, leading to widespread land alienation.\n                - Influx of Dikus: The British brought in outsiders (money lenders, landlords, traders - termed 'Dikus' by tribals) who exploited the natives through debt bondage and land grabbing.\n                - Forest Laws: Traditional rights of tribals over forest resources were curtailed by new forest acts, threatening their livelihood.",
          "- भू-राजस्व प्रणाली (Land Revenue System): अंग्रेजों ने स्थायी बंदोबस्त (Permanent Settlement, 1793) लागू किया, जिसने भूमि के पारंपरिक सामुदायिक स्वामित्व (खूंटकट्टी प्रणाली) को निजी संपत्ति में बदल दिया, जिससे व्यापक भूमि अलगाव (land alienation) हुआ।\n                - दिक्कुओं की आमद (Influx of Dikus): अंग्रेजों ने बाहरी लोगों (साहूकारों, जमींदारों, व्यापारियों - जिन्हें आदिवासियों द्वारा 'दिक्कू' कहा जाता था) को लाया, जिन्होंने ऋण बंधन और भूमि हड़पने के माध्यम से मूल निवासियों का शोषण किया।\n                - वन कानून: नए वन अधिनियमों द्वारा वन संसाधनों पर आदिवासियों के पारंपरिक अधिकारों में कटौती की गई, जिससे उनकी आजीविका को खतरा पैदा हो गया।"
        ]
      },
      {
        "heading": [
          "Kol Rebellion (1831-32)",
          "कोल विद्रोह (Kol Rebellion, 1831-32)"
        ],
        "body": [
          "- Led by Buddhu Bhagat, Joa Bhagat, and Madara Mahato.\n                - Cause: Oppression by Sikh and Muslim thikadars (contractors) who were granted villages by the local Maharaja, resulting in the eviction of indigenous Munda and Oraon farmers.\n                - Result: Though brutally suppressed, it forced the British to create the 'South-West Frontier Agency', acknowledging the need for special administrative provisions for tribal areas.",
          "- बुद्धू भगत, जोआ भगत और मदरा महतो के नेतृत्व में।\n                - कारण: सिख और मुस्लिम ठेकेदारों (thikadars) द्वारा उत्पीड़न, जिन्हें स्थानीय महाराजा द्वारा गाँव दिए गए थे, जिसके परिणामस्वरूप मूल मुंडा और उरांव किसानों को बेदखल कर दिया गया।\n                - परिणाम: हालांकि इसे बेरहमी से दबा दिया गया था, इसने अंग्रेजों को 'साउथ-वेस्ट फ्रंटियर एजेंसी' बनाने के लिए मजबूर किया, आदिवासी क्षेत्रों के लिए विशेष प्रशासनिक प्रावधानों की आवश्यकता को स्वीकार किया।"
        ]
      },
      {
        "heading": [
          "Birsa Movement / Ulgulan (1895-1900)",
          "बिरसा आंदोलन / उलगुलान (Birsa Movement / Ulgulan, 1895-1900)"
        ],
        "body": [
          "- Led by the young and charismatic Birsa Munda, known as 'Dharti Aaba' (Father of the Earth).\n                - Nature: It started as a religious reform movement (Birsait sect) to purge tribal society of superstitions, but quickly transformed into an agrarian and political armed struggle against the British, landlords, and Christian missionaries.\n                - Objective: To establish 'Munda Raj' by driving out the British and Dikus.\n                - Result: Birsa died in jail in 1900. However, the movement led to the passage of the Chotanagpur Tenancy (CNT) Act in 1908, which restricted the transfer of tribal land to non-tribals.",
          "- युवा और करिश्माई बिरसा मुंडा के नेतृत्व में, जिन्हें 'धरती आबा' (पृथ्वी के पिता) के रूप में जाना जाता है।\n                - प्रकृति: यह अंधविश्वासों के आदिवासी समाज को शुद्ध करने के लिए एक धार्मिक सुधार आंदोलन (बिरसैत संप्रदाय) के रूप में शुरू हुआ, लेकिन जल्दी ही अंग्रेजों, जमींदारों और ईसाई मिशनरियों के खिलाफ एक कृषि और राजनीतिक सशस्त्र संघर्ष में बदल गया।\n                - उद्देश्य: अंग्रेजों और दिक्कुओं को खदेड़ कर 'मुंडा राज' स्थापित करना।\n                - परिणाम: 1900 में बिरसा की जेल में मृत्यु हो गई। हालांकि, आंदोलन के कारण 1908 में छोटानागपुर काश्तकारी (CNT) अधिनियम पारित हुआ, जिसने आदिवासी भूमि के गैर-आदिवासियों को हस्तांतरण को प्रतिबंधित कर दिया।"
        ]
      }
    ],
    "quotes": [
      [
        "\"The tribal uprisings were not mere law and order problems; they were desperate assertions of subaltern independence against the exploitative machinery of colonial capitalism.\"",
        "\"आदिवासी विद्रोह केवल कानून व्यवस्था की समस्या नहीं थे; वे औपनिवेशिक पूंजीवाद की शोषक मशीनरी के खिलाफ अधीनस्थ स्वतंत्रता (subaltern independence) के हताश दावे थे।\""
      ]
    ],
    "evaluation": [
      "British historians often portrayed these uprisings as 'savage' reactions against 'civilizing' governance. However, modern subaltern historians view them as highly organized, conscious political struggles for territorial sovereignty and cultural preservation. While the movements failed militarily against the superior British forces, they succeeded legislatively (e.g., CNT Act 1908). Yet, the legacy of land alienation remains a core issue in contemporary Jharkhand politics, proving that the structural problems introduced during the colonial era were never fully resolved by post-independence governments.",
      "ब्रिटिश इतिहासकारों ने अक्सर इन विद्रोहों को 'सभ्य' शासन के खिलाफ 'असभ्य' प्रतिक्रियाओं के रूप में चित्रित किया। हालांकि, आधुनिक सबाल्टर्न इतिहासकार उन्हें क्षेत्रीय संप्रभुता और सांस्कृतिक संरक्षण के लिए अत्यधिक संगठित, सचेत राजनीतिक संघर्ष मानते हैं। जबकि उच्च ब्रिटिश बलों के खिलाफ सैन्य रूप से आंदोलन विफल रहे, वे विधायी रूप से सफल रहे (उदा. CNT अधिनियम 1908)। फिर भी, भूमि अलगाव की विरासत समकालीन झारखंड की राजनीति में एक मुख्य मुद्दा बनी हुई है, जो यह साबित करती है कि औपनिवेशिक युग के दौरान शुरू की गई संरचनात्मक समस्याओं को स्वतंत्रता के बाद की सरकारों द्वारा कभी भी पूरी तरह से हल नहीं किया गया था।"
    ],
    "conclusion": [
      "The impact of the British administration was catastrophic for the tribal socio-economic fabric, primarily through the destruction of traditional land rights. The protest movements, especially the Kol Rebellion and Birsa Munda's Ulgulan, were defining moments of resistance. These historical struggles continue to inspire political mobilization and demands for tribal rights in present-day Jharkhand.",
      "ब्रिटिश प्रशासन का प्रभाव आदिवासी सामाजिक-आर्थिक ताने-बाने के लिए विनाशकारी था, मुख्य रूप से पारंपरिक भूमि अधिकारों के विनाश के माध्यम से। विरोध आंदोलन, विशेष रूप से कोल विद्रोह और बिरसा मुंडा का उलगुलान, प्रतिरोध के परिभाषित क्षण थे। ये ऐतिहासिक संघर्ष वर्तमान झारखंड में राजनीतिक लामबंदी और आदिवासी अधिकारों की मांगों को प्रेरित करते हैं।"
    ],
    "shortQ": [
      [
        "Who were referred to as 'Dikus' by the tribals?",
        "आदिवासियों द्वारा 'दिक्कू' किसे कहा जाता था?"
      ],
      [
        "What was the primary cause of the Kol Rebellion?",
        "कोल विद्रोह का प्राथमिक कारण क्या था?"
      ],
      [
        "Who is known as 'Dharti Aaba'?",
        "'धरती आबा' के नाम से किसे जाना जाता है?"
      ],
      [
        "What was the significance of the Chotanagpur Tenancy (CNT) Act of 1908?",
        "1908 के छोटानागपुर टेनेंसी (CNT) अधिनियम का क्या महत्व था?"
      ],
      [
        "Define the Khuntkatti system.",
        "खूंटकट्टी प्रणाली को परिभाषित करें।"
      ]
    ],
    "longQ": [
      [
        "Examine the impact of British administrative and revenue policies on the tribal societies of Chotanagpur.",
        "छोटानागपुर के आदिवासी समाजों पर ब्रिटिश प्रशासनिक और राजस्व नीतियों के प्रभाव का परीक्षण करें।"
      ],
      [
        "Discuss the causes, course, and consequences of the Kol Rebellion (1831-32).",
        "कोल विद्रोह (1831-32) के कारणों, पाठ्यक्रम और परिणामों पर चर्चा करें।"
      ],
      [
        "Analyze the role of Birsa Munda in organizing the 'Ulgulan' against the British and Dikus.",
        "अंग्रेजों और दिक्कुओं के खिलाफ 'उलगुलान' के आयोजन में बिरसा मुंडा की भूमिका का विश्लेषण करें।"
      ],
      [
        "How did the tribal uprisings force the British to change their administrative policies in tribal areas?",
        "आदिवासी विद्रोहों ने अंग्रेजों को आदिवासी क्षेत्रों में अपनी प्रशासनिक नीतियां बदलने के लिए कैसे मजबूर किया?"
      ],
      [
        "\"The tribal revolts were primarily agrarian in nature.\" Critically examine this statement in the context of Jharkhand.",
        "\"आदिवासी विद्रोह मुख्य रूप से प्रकृति में कृषि प्रधान थे।\" झारखंड के संदर्भ में इस कथन का आलोचनात्मक परीक्षण करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "The traditional collective land ownership system of the Mundas was known as:",
          "मुंडाओं की पारंपरिक सामूहिक भूमि स्वामित्व प्रणाली को किस रूप में जाना जाता था?"
        ],
        "opts": [
          [
            "Ryotwari",
            "रैयतवाड़ी"
          ],
          [
            "Khuntkatti",
            "खूंटकट्टी"
          ],
          [
            "Zamindari",
            "जमींदारी"
          ],
          [
            "Mahalwari",
            "महलवाड़ी"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Who among the following was a prominent leader of the Kol Rebellion?",
          "निम्नलिखित में से कौन कोल विद्रोह का प्रमुख नेता था?"
        ],
        "opts": [
          [
            "Sidhu",
            "सिद्धू"
          ],
          [
            "Kanhu",
            "कान्हू"
          ],
          [
            "Buddhu Bhagat",
            "बुद्धू भगत"
          ],
          [
            "Tilka Manjhi",
            "तिलका मांझी"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "The Birsa Munda movement is also famously known as:",
          "बिरसा मुंडा आंदोलन को मुख्य रूप से किस नाम से जाना जाता है?"
        ],
        "opts": [
          [
            "Hul",
            "हूल"
          ],
          [
            "Ulgulan (Great Tumult)",
            "उलगुलान (महान हलचल)"
          ],
          [
            "Diku Hatao",
            "दिक्कू हटाओ"
          ],
          [
            "Sarna Andolan",
            "सरना आंदोलन"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which important legislation was passed by the British as a direct result of the Birsa Movement to protect tribal land?",
          "आदिवासी भूमि की रक्षा के लिए बिरसा आंदोलन के प्रत्यक्ष परिणाम के रूप में अंग्रेजों द्वारा कौन सा महत्वपूर्ण कानून पारित किया गया था?"
        ],
        "opts": [
          [
            "Santhal Pargana Tenancy Act, 1876",
            "संथाल परगना काश्तकारी अधिनियम, 1876"
          ],
          [
            "Chotanagpur Tenancy (CNT) Act, 1908",
            "छोटानागपुर काश्तकारी (CNT) अधिनियम, 1908"
          ],
          [
            "Forest Act, 1865",
            "वन अधिनियम, 1865"
          ],
          [
            "Wilkinson's Rule, 1837",
            "विल्किंसन नियम, 1837"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "The term 'Diku' in tribal history refers to:",
          "आदिवासी इतिहास में 'दिक्कू' (Diku) शब्द का तात्पर्य है:"
        ],
        "opts": [
          [
            "Tribal chiefs",
            "आदिवासी मुखिया"
          ],
          [
            "British officials exclusively",
            "विशेष रूप से ब्रिटिश अधिकारी"
          ],
          [
            "Exploitative outsiders (moneylenders, landlords)",
            "शोषक बाहरी लोग (साहूकार, जमींदार)"
          ],
          [
            "Christian missionaries only",
            "केवल ईसाई मिशनरी"
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
    "id": "t3",
    "num": 3,
    "title": [
      "Socio-economic Determinants of Jharkhand Politics",
      "झारखंड की राजनीति के सामाजिक-आर्थिक निर्धारक"
    ],
    "introduction": [
      "The politics of Jharkhand is profoundly shaped by its unique, and often contradictory, socio-economic landscape. It is a state characterized by the \"paradox of plenty\" — possessing approximately 40% of India's mineral wealth, yet hosting some of the most impoverished populations in the country. The interplay of tribal identity, caste dynamics, aggressive industrialization, and resource extraction forms the complex socio-economic bedrock of electoral and state politics in Jharkhand.",
      "झारखंड की राजनीति इसके अनूठे, और अक्सर विरोधाभासी, सामाजिक-आर्थिक परिदृश्य से गहराई से आकार लेती है। यह एक ऐसा राज्य है जिसकी विशेषता \"प्रचुरता का विरोधाभास\" (paradox of plenty) है — इसके पास भारत की खनिज संपदा का लगभग 40% हिस्सा है, फिर भी यहां देश की कुछ सबसे गरीब आबादी निवास करती है। आदिवासी पहचान, जाति की गतिशीलता, आक्रामक औद्योगीकरण और संसाधन निष्कर्षण की परस्पर क्रिया झारखंड में चुनावी और राज्य की राजनीति का जटिल सामाजिक-आर्थिक आधार बनाती है।"
    ],
    "concepts": [
      {
        "heading": [
          "The Tribal vs. Diku Divide",
          "आदिवासी बनाम दिक्कू विभाजन (Tribal vs. Diku Divide)"
        ],
        "body": [
          "The historical animosity between the indigenous tribes and the outsider 'Dikus' (non-tribal settlers, businessmen, and bureaucrats) remains a primary fault line. The demand for statehood was fundamentally driven by the desire of tribals to control their own destiny free from North Bihar's political dominance.",
          "मूल जनजातियों और बाहरी 'दिक्कुओं' (गैर-आदिवासी बसने वाले, व्यापारी और नौकरशाह) के बीच ऐतिहासिक दुश्मनी एक प्राथमिक दोष रेखा (fault line) बनी हुई है। राज्य की मांग मुख्य रूप से आदिवासियों की अपनी नियति को उत्तरी बिहार के राजनीतिक प्रभुत्व से मुक्त करने की इच्छा से प्रेरित थी।"
        ]
      },
      {
        "heading": [
          "Industrialization and Displacement",
          "औद्योगीकरण और विस्थापन (Industrialization and Displacement)"
        ],
        "body": [
          "Jharkhand is home to massive industrial projects (Tata Steel, HEC, Bokaro Steel) and mining operations (coal, uranium, mica). However, this \"development\" has led to the widespread displacement of tribal communities, often without adequate compensation, fueling deep resentment and political mobilization (e.g., opposition to the Netarhat Field Firing Range or ArcelorMittal plants).",
          "झारखंड बड़े पैमाने पर औद्योगिक परियोजनाओं (टाटा स्टील, HEC, बोकारो स्टील) और खनन कार्यों (कोयला, यूरेनियम, अभ्रक) का घर है। हालांकि, इस \"विकास\" के कारण अक्सर पर्याप्त मुआवजे के बिना आदिवासी समुदायों का बड़े पैमाने पर विस्थापन हुआ है, जिससे गहरी नाराजगी और राजनीतिक लामबंदी (जैसे, नेतरहाट फील्ड फायरिंग रेंज या आर्सेलर मित्तल संयंत्रों का विरोध) को बढ़ावा मिला है।"
        ]
      },
      {
        "heading": [
          "Resource Curse (Paradox of Plenty)",
          "संसाधन अभिशाप (Resource Curse / Paradox of Plenty)"
        ],
        "body": [
          "The state generates huge revenues from mining royalties, but the wealth does not trickle down. High levels of poverty, malnutrition, and unemployment drive political instability and provide fertile ground for Left-Wing Extremism (Naxalism).",
          "राज्य खनन रॉयल्टी से भारी राजस्व उत्पन्न करता है, लेकिन धन नीचे तक नहीं पहुंचता है। उच्च स्तर की गरीबी, कुपोषण और बेरोजगारी राजनीतिक अस्थिरता को बढ़ाती है और वामपंथी उग्रवाद (नक्सलवाद) के लिए उपजाऊ जमीन प्रदान करती है।"
        ]
      },
      {
        "heading": [
          "Emergence of the Sadan and OBC Factor",
          "सदान और OBC कारक का उदय"
        ],
        "body": [
          "Sadans are the non-tribal indigenous people of Jharkhand. Alongside them, the Other Backward Classes (OBCs), like the Kurmis and Mahtos, have become powerful vote banks, challenging exclusive tribal political dominance. The shift from purely 'tribal politics' to a broader 'regional politics' involves balancing these diverse groups.",
          "सदान झारखंड के गैर-आदिवासी मूल निवासी हैं। उनके साथ-साथ, अन्य पिछड़ा वर्ग (OBC), जैसे कि कुर्मी और महतो, शक्तिशाली वोट बैंक बन गए हैं, जो विशेष आदिवासी राजनीतिक प्रभुत्व को चुनौती दे रहे हैं। विशुद्ध रूप से 'आदिवासी राजनीति' से व्यापक 'क्षेत्रीय राजनीति' में बदलाव में इन विविध समूहों को संतुलित करना शामिल है।"
        ]
      },
      {
        "heading": [
          "Land Alienation",
          "भूमि अलगाव (Land Alienation)"
        ],
        "body": [
          "Despite protective laws like the CNT and SPT Acts, illegal land alienation continues, keeping land rights at the absolute center of election manifestos.",
          "CNT और SPT अधिनियमों जैसे सुरक्षात्मक कानूनों के बावजूद, अवैध भूमि अलगाव जारी है, जो भूमि अधिकारों को चुनाव घोषणापत्रों के पूर्ण केंद्र में रखता है।"
        ]
      }
    ],
    "quotes": [
      [
        "\"Jharkhand's politics is an arena where the struggle over identity is inextricably linked with the struggle over resources; to lose land is to lose identity.\"",
        "\"झारखंड की राजनीति एक ऐसा अखाड़ा है जहां पहचान का संघर्ष संसाधनों के संघर्ष के साथ अटूट रूप से जुड़ा हुआ है; जमीन खोने का मतलब पहचान खोना है।\""
      ]
    ],
    "evaluation": [
      "Political parties in Jharkhand constantly walk a tightrope between catering to corporate interests (essential for state revenue and 'development') and addressing the grievances of the displaced indigenous population (essential for votes). The result is often policy paralysis or 'crony capitalism'. The state's failure to ensure equitable distribution of mining wealth has led to a situation where political power is often seen merely as a tool to control lucrative government contracts and mining leases, leading to systemic corruption (highlighted by various mining scams involving top politicians).",
      "झारखंड में राजनीतिक दल लगातार कॉर्पोरेट हितों (राज्य के राजस्व और 'विकास' के लिए आवश्यक) को पूरा करने और विस्थापित मूल आबादी (वोट के लिए आवश्यक) की शिकायतों को दूर करने के बीच एक तंग रस्सी पर चलते हैं। इसका परिणाम अक्सर नीतिगत पक्षाघात (policy paralysis) या 'क्रोनी कैपिटलिज्म' होता है। खनन धन का समान वितरण सुनिश्चित करने में राज्य की विफलता ने एक ऐसी स्थिति पैदा कर दी है जहां राजनीतिक सत्ता को अक्सर आकर्षक सरकारी अनुबंधों और खनन पट्टों को नियंत्रित करने के एक उपकरण के रूप में देखा जाता है, जिससे प्रणालीगत भ्रष्टाचार (शीर्ष राजनेताओं से जुड़े विभिन्न खनन घोटालों द्वारा उजागर) होता है।"
    ],
    "conclusion": [
      "The socio-economic determinants of Jharkhand dictate a volatile political environment. The state's future stability depends entirely on resolving the core contradiction of its existence: ensuring that the exploitation of its vast underground wealth translates into above-ground socio-economic prosperity for its marginalized indigenous and local populations, rather than causing their displacement.",
      "झारखंड के सामाजिक-आर्थिक निर्धारक एक अस्थिर राजनीतिक वातावरण को निर्धारित करते हैं। राज्य का भविष्य की स्थिरता पूरी तरह से इसके अस्तित्व के मुख्य विरोधाभास को हल करने पर निर्भर करती है: यह सुनिश्चित करना कि इसके विशाल भूमिगत धन का दोहन इसके हाशिए के स्वदेशी और स्थानीय आबादी के लिए विस्थापन का कारण बनने के बजाय उनके सामाजिक-आर्थिक समृद्धि में तब्दील हो।"
    ],
    "shortQ": [
      [
        "What is the \"paradox of plenty\" in the context of Jharkhand?",
        "झारखंड के संदर्भ में \"प्रचुरता का विरोधाभास\" (paradox of plenty) क्या है?"
      ],
      [
        "Who are the 'Sadans' in Jharkhand?",
        "झारखंड में 'सदान' (Sadans) कौन हैं?"
      ],
      [
        "How does industrialization act as a determinant of state politics?",
        "औद्योगीकरण राज्य की राजनीति के निर्धारक के रूप में कैसे कार्य करता है?"
      ],
      [
        "Why is land alienation a continuous political issue despite the CNT Act?",
        "CNT अधिनियम के बावजूद भूमि अलगाव एक निरंतर राजनीतिक मुद्दा क्यों है?"
      ],
      [
        "What role do OBCs play in the current electoral dynamics of Jharkhand?",
        "झारखंड की वर्तमान चुनावी गतिशीलता में OBC क्या भूमिका निभाते हैं?"
      ]
    ],
    "longQ": [
      [
        "Discuss the key socio-economic determinants that shape the political landscape of Jharkhand.",
        "झारखंड के राजनीतिक परिदृश्य को आकार देने वाले प्रमुख सामाजिक-आर्थिक निर्धारकों पर चर्चा करें।"
      ],
      [
        "Critically analyze the impact of mining and industrialization on tribal displacement and political mobilization in Jharkhand.",
        "झारखंड में आदिवासी विस्थापन और राजनीतिक लामबंदी पर खनन और औद्योगीकरण के प्रभाव का आलोचनात्मक विश्लेषण करें।"
      ],
      [
        "Examine the transition from 'Tribal Politics' to 'Regional Politics' in Jharkhand with reference to the Sadan and OBC populations.",
        "सदान और OBC आबादी के संदर्भ में झारखंड में 'आदिवासी राजनीति' से 'क्षेत्रीय राजनीति' में संक्रमण का परीक्षण करें।"
      ],
      [
        "\"Jharkhand suffers from the Resource Curse.\" Evaluate this statement in light of its political instability.",
        "\"झारखंड संसाधन अभिशाप (Resource Curse) से पीड़ित है।\" इसकी राजनीतिक अस्थिरता के प्रकाश में इस कथन का मूल्यांकन करें।"
      ],
      [
        "How has the issue of 'Jal, Jungle, and Zameen' influenced electoral manifestos in Jharkhand?",
        "'जल, जंगल और जमीन' के मुद्दे ने झारखंड में चुनाव घोषणापत्रों को कैसे प्रभावित किया है?"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "The phenomenon where resource-rich regions experience low economic growth and high poverty is known as:",
          "वह घटना जहां संसाधन-संपन्न क्षेत्रों में कम आर्थिक विकास और उच्च गरीबी का अनुभव होता है, उसे किस रूप में जाना जाता है?"
        ],
        "opts": [
          [
            "Trickle-down effect",
            "ट्रिकल-डाउन प्रभाव"
          ],
          [
            "Resource Curse",
            "संसाधन अभिशाप (Resource Curse)"
          ],
          [
            "Industrial paradox",
            "औद्योगिक विरोधाभास"
          ],
          [
            "Demographic dividend",
            "जनसांख्यिकीय लाभांश"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Who among the following are considered the non-tribal indigenous people of Jharkhand?",
          "निम्नलिखित में से किसे झारखंड के गैर-आदिवासी मूल निवासी माना जाता है?"
        ],
        "opts": [
          [
            "Dikus",
            "दिक्कू"
          ],
          [
            "Sadans",
            "सदान"
          ],
          [
            "Santhals",
            "संथाल"
          ],
          [
            "Marwaris",
            "मारवाड़ी"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "The primary cause of tribal displacement in Jharkhand post-independence has been:",
          "स्वतंत्रता के बाद झारखंड में आदिवासी विस्थापन का प्राथमिक कारण रहा है:"
        ],
        "opts": [
          [
            "Agricultural expansion",
            "कृषि विस्तार"
          ],
          [
            "Large-scale mining and industrial projects",
            "बड़े पैमाने पर खनन और औद्योगिक परियोजनाएं"
          ],
          [
            "Natural disasters",
            "प्राकृतिक आपदाएं"
          ],
          [
            "Religious conflicts",
            "धार्मिक संघर्ष"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "The CNT (Chotanagpur Tenancy) Act and SPT (Santhal Pargana Tenancy) Act are primarily meant to prevent:",
          "CNT (छोटानागपुर टेनेंसी) अधिनियम और SPT (संथाल परगना टेनेंसी) अधिनियम मुख्य रूप से किसे रोकने के लिए हैं:"
        ],
        "opts": [
          [
            "Industrial strikes",
            "औद्योगिक हड़ताल"
          ],
          [
            "Inter-state migration",
            "अंतर-राज्यीय प्रवास"
          ],
          [
            "Alienation of tribal land to non-tribals",
            "गैर-आदिवासियों को आदिवासी भूमि का हस्तांतरण"
          ],
          [
            "Deforestation by tribals",
            "आदिवासियों द्वारा वनों की कटाई"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "In recent electoral politics of Jharkhand, which demographic group has emerged as a crucial \"swing\" vote bank demanding greater representation alongside tribals?",
          "झारखंड की हालिया चुनावी राजनीति में, कौन सा जनसांख्यिकीय समूह एक महत्वपूर्ण \"स्विंग\" वोट बैंक के रूप में उभरा है जो आदिवासियों के साथ अधिक प्रतिनिधित्व की मांग कर रहा है?"
        ],
        "opts": [
          [
            "Urban Elites",
            "शहरी अभिजात वर्ग"
          ],
          [
            "Other Backward Classes (OBCs like Kurmis)",
            "अन्य पिछड़ा वर्ग (OBC जैसे कुर्मी)"
          ],
          [
            "PVTGs",
            "PVTG"
          ],
          [
            "Christian Missionaries",
            "ईसाई मिशनरी"
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
      "Working of Coalition Government in Jharkhand",
      "झारखंड में गठबंधन सरकार की कार्यप्रणाली"
    ],
    "introduction": [
      "Since its inception in 2000, Jharkhand has been notoriously famous for its political instability, characterized by frequent changes in leadership and a heavy reliance on Coalition Governments. The fractured mandate in successive assembly elections has necessitated alliances between national parties (BJP, Congress) and regional powerhouses (JMM, AJSU, JVM). This coalition era has profoundly impacted the state's governance, policy continuity, and economic development.",
      "2000 में अपनी स्थापना के बाद से, झारखंड अपनी राजनीतिक अस्थिरता के लिए कुख्यात रहा है, जिसकी विशेषता नेतृत्व में लगातार बदलाव और गठबंधन सरकारों (Coalition Governments) पर भारी निर्भरता है। क्रमिक विधानसभा चुनावों में खंडित जनादेश (fractured mandate) ने राष्ट्रीय दलों (BJP, कांग्रेस) और क्षेत्रीय दिग्गजों (JMM, AJSU, JVM) के बीच गठबंधन को आवश्यक बना दिया है। इस गठबंधन युग ने राज्य के शासन, नीतिगत निरंतरता और आर्थिक विकास को गहराई से प्रभावित किया है।"
    ],
    "concepts": [
      {
        "heading": [
          "Fractured Mandates",
          "खंडित जनादेश (Fractured Mandates)"
        ],
        "body": [
          "The demographic diversity (tribals vs. non-tribals) and regional disparities within Jharkhand often result in a hung assembly. No single party usually commands a clear majority, making coalitions inevitable.",
          "झारखंड के भीतर जनसांख्यिकीय विविधता (आदिवासी बनाम गैर-आदिवासी) और क्षेत्रीय असमानताओं के परिणामस्वरूप अक्सर त्रिशंकु विधानसभा होती है। कोई भी एक पार्टी आमतौर पर स्पष्ट बहुमत हासिल नहीं कर पाती है, जिससे गठबंधन अपरिहार्य हो जाता है।"
        ]
      },
      {
        "heading": [
          "Key Political Players",
          "प्रमुख राजनीतिक खिलाड़ी"
        ],
        "body": [
          "- Regional: Jharkhand Mukti Morcha (JMM - primarily tribal base), All Jharkhand Students Union (AJSU - strong OBC/Kurmi base).\n                - National: Bharatiya Janata Party (BJP), Indian National Congress (INC).",
          "- क्षेत्रीय: झारखंड मुक्ति मोर्चा (JMM - मुख्य रूप से आदिवासी आधार), ऑल झारखंड स्टूडेंट्स यूनियन (AJSU - मजबूत OBC/कुर्मी आधार)।\n                - राष्ट्रीय: भारतीय जनता पार्टी (BJP), भारतीय राष्ट्रीय कांग्रेस (INC)।"
        ]
      },
      {
        "heading": [
          "Instability and \"Aya Ram Gaya Ram\" Politics",
          "अस्थिरता और \"आया राम गया राम\" राजनीति"
        ],
        "body": [
          "In its first 14 years (2000-2014), Jharkhand saw 9 governments and 3 spells of President's Rule. Independent MLAs (like Madhu Koda, who surprisingly became CM) often wielded disproportionate power, leading to horse-trading and massive corruption scandals.",
          "अपने पहले 14 वर्षों (2000-2014) में, झारखंड ने 9 सरकारें और राष्ट्रपति शासन के 3 दौर देखे। निर्दलीय विधायकों (जैसे मधु कोड़ा, जो आश्चर्यजनक रूप से CM बने) ने अक्सर अनुपातहीन शक्ति का इस्तेमाल किया, जिससे हॉर्स-ट्रेडिंग और बड़े पैमाने पर भ्रष्टाचार के घोटाले हुए।"
        ]
      },
      {
        "heading": [
          "The Shift (Post 2014)",
          "बदलाव (2014 के बाद)"
        ],
        "body": [
          "The trend shifted slightly when a BJP-AJSU coalition completed a full 5-year term (2014-2019) under a non-tribal CM (Raghubar Das). This was followed by a JMM-Congress-RJD coalition forming a relatively stable government under Hemant Soren (2019 onwards), indicating a maturation of coalition management.",
          "प्रवृत्ति थोड़ी बदल गई जब एक गैर-आदिवासी CM (रघुवर दास) के तहत BJP-AJSU गठबंधन ने पूरे 5 साल का कार्यकाल (2014-2019) पूरा किया। इसके बाद हेमंत सोरेन (2019 से) के नेतृत्व में JMM-कांग्रेस-RJD गठबंधन ने अपेक्षाकृत स्थिर सरकार बनाई, जो गठबंधन प्रबंधन की परिपक्वता का संकेत देती है।"
        ]
      }
    ],
    "quotes": [
      [
        "\"Coalition politics in Jharkhand initially manifested as a marriage of convenience for power-sharing and resource extraction, rather than an alliance of shared ideology.\"",
        "\"झारखंड में गठबंधन की राजनीति शुरू में साझा विचारधारा के गठबंधन के बजाय सत्ता-साझेदारी और संसाधन निष्कर्षण के लिए सुविधा की शादी (marriage of convenience) के रूप में प्रकट हुई।\""
      ]
    ],
    "evaluation": [
      "The working of coalition governments in Jharkhand has had severe negative consequences. Policy paralysis is common, as coalition partners frequently block each other's agendas to appease their specific vote banks (e.g., disagreements over domicile policies or amendments to the CNT/SPT Acts). The reliance on smaller parties and independents has led to the institutionalization of corruption, as seen in the notorious mining scams where cabinet berths were traded for support. However, on the positive side, coalitions ensure that diverse social groups (Tribals, Sadans, OBCs) share power, preventing the outright dominance of any single community.",
      "झारखंड में गठबंधन सरकारों के कामकाज के गंभीर नकारात्मक परिणाम हुए हैं। नीतिगत पक्षाघात (Policy paralysis) आम है, क्योंकि गठबंधन सहयोगी अक्सर अपने विशिष्ट वोट बैंकों को खुश करने के लिए एक-दूसरे के एजेंडे को रोकते हैं (उदा., अधिवास नीतियों (domicile policies) या CNT/SPT अधिनियमों में संशोधन पर असहमति)। छोटे दलों और निर्दलीयों पर निर्भरता ने भ्रष्टाचार को संस्थागत रूप दिया है, जैसा कि कुख्यात खनन घोटालों में देखा गया है जहां समर्थन के लिए कैबिनेट पदों का व्यापार किया गया था। हालांकि, सकारात्मक पक्ष पर, गठबंधन यह सुनिश्चित करते हैं कि विविध सामाजिक समूह (आदिवासी, सदान, OBC) सत्ता साझा करें, जिससे किसी भी एकल समुदाय के पूर्ण प्रभुत्व को रोका जा सके।"
    ],
    "conclusion": [
      "Coalition governments in Jharkhand are a direct reflection of its fragmented socio-political reality. While early coalitions were marked by opportunistic instability and corruption, recent trends suggest that political parties are learning the art of pre-poll alliances and stable coalition management, which is essential for the long-term development of the state.",
      "झारखंड में गठबंधन सरकारें इसकी खंडित सामाजिक-राजनीतिक वास्तविकता का प्रत्यक्ष प्रतिबिंब हैं। जबकि शुरुआती गठबंधनों को अवसरवादी अस्थिरता और भ्रष्टाचार द्वारा चिह्नित किया गया था, हालिया रुझान बताते हैं कि राजनीतिक दल चुनाव पूर्व गठबंधन और स्थिर गठबंधन प्रबंधन की कला सीख रहे हैं, जो राज्य के दीर्घकालिक विकास के लिए आवश्यक है।"
    ],
    "shortQ": [
      [
        "Why are coalition governments common in Jharkhand?",
        "झारखंड में गठबंधन सरकारें आम क्यों हैं?"
      ],
      [
        "Name the major regional political parties of Jharkhand.",
        "झारखंड के प्रमुख क्षेत्रीय राजनीतिक दलों के नाम बताइए।"
      ],
      [
        "What was unique about Madhu Koda's tenure as Chief Minister?",
        "मुख्यमंत्री के रूप में मधु कोड़ा के कार्यकाल के बारे में क्या अनोखा था?"
      ],
      [
        "How many times was President's Rule imposed in Jharkhand between 2000 and 2014?",
        "2000 और 2014 के बीच झारखंड में कितनी बार राष्ट्रपति शासन लगाया गया था?"
      ],
      [
        "Which coalition government completed the first full five-year term in the state?",
        "किस गठबंधन सरकार ने राज्य में पहला पूर्ण पांच साल का कार्यकाल पूरा किया?"
      ]
    ],
    "longQ": [
      [
        "Discuss the factors that make coalition politics inevitable in Jharkhand.",
        "झारखंड में गठबंधन की राजनीति को अपरिहार्य बनाने वाले कारकों पर चर्चा करें।"
      ],
      [
        "Critically evaluate the impact of coalition governments on the administration and development of Jharkhand.",
        "झारखंड के प्रशासन और विकास पर गठबंधन सरकारों के प्रभाव का आलोचनात्मक मूल्यांकन करें।"
      ],
      [
        "Analyze the changing trends of coalition politics in Jharkhand from 2000 to the present day.",
        "2000 से लेकर आज तक झारखंड में गठबंधन की राजनीति की बदलती प्रवृत्तियों का विश्लेषण करें।"
      ],
      [
        "\"Coalition politics in Jharkhand has led to policy paralysis and corruption.\" Do you agree? Give reasons.",
        "\"झारखंड में गठबंधन की राजनीति ने नीतिगत पक्षाघात और भ्रष्टाचार को जन्म दिया है।\" क्या आप सहमत हैं? कारण दीजिए।"
      ],
      [
        "Examine the role of independent MLAs and smaller parties in government formation in Jharkhand.",
        "झारखंड में सरकार बनाने में निर्दलीय विधायकों और छोटे दलों की भूमिका का परीक्षण करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "Who among the following became the Chief Minister of Jharkhand as an Independent MLA in a coalition government?",
          "निम्नलिखित में से कौन एक गठबंधन सरकार में निर्दलीय विधायक के रूप में झारखंड का मुख्यमंत्री बना?"
        ],
        "opts": [
          [
            "Shibu Soren",
            "शिबू सोरेन"
          ],
          [
            "Babulal Marandi",
            "बाबूलाल मरांडी"
          ],
          [
            "Madhu Koda",
            "मधु कोड़ा"
          ],
          [
            "Arjun Munda",
            "अर्जुन मुंडा"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "Which is the primary tribal-based regional political party in Jharkhand?",
          "झारखंड में प्राथमिक आदिवासी-आधारित क्षेत्रीय राजनीतिक दल कौन सा है?"
        ],
        "opts": [
          [
            "RJD",
            "RJD"
          ],
          [
            "JMM (Jharkhand Mukti Morcha)",
            "JMM (झारखंड मुक्ति मोर्चा)"
          ],
          [
            "AJSU",
            "AJSU"
          ],
          [
            "LJP",
            "LJP"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Who was the first Chief Minister to complete a full five-year term in Jharkhand?",
          "झारखंड में पूर्ण पांच साल का कार्यकाल पूरा करने वाले पहले मुख्यमंत्री कौन थे?"
        ],
        "opts": [
          [
            "Arjun Munda",
            "अर्जुन मुंडा"
          ],
          [
            "Hemant Soren",
            "हेमंत सोरेन"
          ],
          [
            "Raghubar Das",
            "रघुवर दास"
          ],
          [
            "Babulal Marandi",
            "बाबूलाल मरांडी"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "The All Jharkhand Students Union (AJSU) primarily draws its political strength from which demographic group?",
          "ऑल झारखंड स्टूडेंट्स यूनियन (AJSU) मुख्य रूप से किस जनसांख्यिकीय समूह से अपनी राजनीतिक शक्ति प्राप्त करता है?"
        ],
        "opts": [
          [
            "PVTGs",
            "PVTG"
          ],
          [
            "OBCs / Kurmis",
            "OBC / कुर्मी"
          ],
          [
            "Upper Castes",
            "उच्च जातियां"
          ],
          [
            "Christian Tribals",
            "ईसाई आदिवासी"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "A major negative consequence of early coalition governments in Jharkhand was:",
          "झारखंड में शुरुआती गठबंधन सरकारों का एक बड़ा नकारात्मक परिणाम क्या था?"
        ],
        "opts": [
          [
            "Rapid industrialization",
            "तीव्र औद्योगीकरण"
          ],
          [
            "Strong land reform implementation",
            "मजबूत भूमि सुधार कार्यान्वयन"
          ],
          [
            "Horse-trading and mega corruption scams",
            "हॉर्स-ट्रेडिंग और बड़े भ्रष्टाचार घोटाले"
          ],
          [
            "Eradication of Naxalism",
            "नक्सलवाद का उन्मूलन"
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
      "Naxalism in Jharkhand: Causes, Growth, Effects, Countering Naxalism",
      "झारखंड में नक्सलवाद: कारण, विकास, प्रभाव, नक्सलवाद का मुकाबला"
    ],
    "introduction": [
      "Left-Wing Extremism (LWE), commonly known as Naxalism or Maoism, has been one of the most severe internal security challenges for Jharkhand. Originating from the Naxalbari uprising in West Bengal (1967), it found highly fertile ground in the dense forests (like Saranda) and deeply impoverished tribal belts of Jharkhand. The CPI (Maoist) is the primary group operating here, waging a protracted armed struggle against the state.",
      "वामपंथी उग्रवाद (Left-Wing Extremism - LWE), जिसे आमतौर पर नक्सलवाद या माओवाद के रूप में जाना जाता है, झारखंड के लिए सबसे गंभीर आंतरिक सुरक्षा चुनौतियों में से एक रहा है। पश्चिम बंगाल (1967) में नक्सलबाड़ी विद्रोह से उत्पन्न, इसे झारखंड के घने जंगलों (जैसे सारंडा) और अत्यधिक गरीब आदिवासी बेल्ट में अत्यधिक उपजाऊ जमीन मिली। CPI (माओवादी) यहां सक्रिय प्राथमिक समूह है, जो राज्य के खिलाफ एक लंबा सशस्त्र संघर्ष छेड़ रहा है।"
    ],
    "concepts": [
      {
        "heading": [
          "Causes for Growth",
          "वृद्धि के कारण"
        ],
        "body": [
          "- Jal, Jungle, Zameen: Alienation of tribal land for mining and dams without proper rehabilitation.\n                - Exploitation: Exploitation of tendu leaf pluckers and forest dwellers by contractors and corrupt officials.\n                - Governance Deficit: Absence of basic state infrastructure (schools, healthcare, roads) in remote areas created a vacuum filled by Maoists running \"Jan Adalats\" (Kangaroo courts).",
          "- जल, जंगल, जमीन: उचित पुनर्वास के बिना खनन और बांधों के लिए आदिवासी भूमि का अलगाव।\n                - शोषण: ठेकेदारों और भ्रष्ट अधिकारियों द्वारा तेंदू पत्ता तोड़ने वालों और वनवासियों का शोषण।\n                - शासन की कमी (Governance Deficit): दूरदराज के क्षेत्रों में बुनियादी सरकारी बुनियादी ढांचे (स्कूल, स्वास्थ्य सेवा, सड़क) की अनुपस्थिति ने एक शून्य पैदा किया जिसे \"जन अदालतें\" (कंगारू कोर्ट) चलाने वाले माओवादियों ने भर दिया।"
        ]
      },
      {
        "heading": [
          "Effects of Naxalism",
          "नक्सलवाद के प्रभाव"
        ],
        "body": [
          "- Violence and Casualties: Loss of lives of civilians, security personnel, and insurgents.\n                - Economic Stagnation: Destruction of public infrastructure (railways, schools) and extortion ('levy') from contractors, which halts developmental projects.\n                - Child Soldiers: Exploitation of youth by recruiting them into armed squads (Bal Dastas).",
          "- हिंसा और हताहत: नागरिकों, सुरक्षा कर्मियों और विद्रोहियों की जानमाल की हानि।\n                - आर्थिक ठहराव: सार्वजनिक बुनियादी ढांचे (रेलवे, स्कूल) का विनाश और ठेकेदारों से जबरन वसूली ('लेवी'), जो विकासात्मक परियोजनाओं को रोकता है।\n                - बाल सैनिक (Child Soldiers): युवाओं को सशस्त्र दस्तों (बाल दस्तों) में भर्ती करके उनका शोषण।"
        ]
      },
      {
        "heading": [
          "Countering Naxalism (State Response)",
          "नक्सलवाद का मुकाबला (राज्य की प्रतिक्रिया)"
        ],
        "body": [
          "- Security Approach: Deployment of central forces (CRPF, CoBRA) alongside state police (Jharkhand Jaguars). Operations like 'Operation Green Hunt' and 'Operation Anaconda' to clear strongholds like Saranda forest.\n                - Developmental Approach: Surrender and Rehabilitation policies (Nayi Disha), Aspirational Districts Program (improving HDI indicators), and building infrastructure in affected areas.",
          "- सुरक्षा दृष्टिकोण: राज्य पुलिस (झारखंड जगुआर) के साथ केंद्रीय बलों (CRPF, CoBRA) की तैनाती। सारंडा जंगल जैसे गढ़ों को साफ करने के लिए 'ऑपरेशन ग्रीन हंट' और 'ऑपरेशन एनाकोंडा' जैसे अभियान।\n                - विकासात्मक दृष्टिकोण: आत्मसमर्पण और पुनर्वास नीतियां (नई दिशा), आकांक्षी जिला कार्यक्रम (HDI संकेतकों में सुधार), और प्रभावित क्षेत्रों में बुनियादी ढांचे का निर्माण।"
        ]
      }
    ],
    "quotes": [
      [
        "\"Naxalism is not merely a law and order problem; it is a symptom of systemic socio-economic failure and the state's betrayal of its most vulnerable citizens.\"",
        "\"नक्सलवाद केवल कानून और व्यवस्था की समस्या नहीं है; यह प्रणालीगत सामाजिक-आर्थिक विफलता और राज्य द्वारा अपने सबसे कमजोर नागरिकों के साथ विश्वासघात का एक लक्षण है।\""
      ]
    ],
    "evaluation": [
      "The state's dual approach of \"Security and Development\" has yielded mixed results. While aggressive security operations have significantly reduced the geographical spread and striking capacity of Maoists in recent years, human rights activists often accuse security forces of fake encounters and harassing innocent tribals, which risks alienating the local population further. The Maoists, on the other hand, have degenerated in many areas into mere extortion syndicates, losing their ideological high ground. True resolution requires ensuring that developmental funds actually reach the grassroots and addressing the core issue of land rights.",
      "राज्य के \"सुरक्षा और विकास\" के दोहरे दृष्टिकोण ने मिश्रित परिणाम दिए हैं। जबकि आक्रामक सुरक्षा अभियानों ने हाल के वर्षों में माओवादियों के भौगोलिक प्रसार और हमले की क्षमता को काफी कम कर दिया है, मानवाधिकार कार्यकर्ता अक्सर सुरक्षा बलों पर फर्जी मुठभेड़ों और निर्दोष आदिवासियों को परेशान करने का आरोप लगाते हैं, जो स्थानीय आबादी को और अलग-थलग करने का जोखिम उठाता है। दूसरी ओर, माओवादी कई क्षेत्रों में केवल जबरन वसूली सिंडिकेट में बदल गए हैं, जिससे उनका वैचारिक उच्च आधार खो गया है। वास्तविक समाधान के लिए यह सुनिश्चित करना आवश्यक है कि विकासात्मक धन वास्तव में जमीनी स्तर तक पहुंचे और भूमि अधिकारों के मुख्य मुद्दे को संबोधित किया जाए।"
    ],
    "conclusion": [
      "Naxalism in Jharkhand is a complex issue rooted in historical injustice and uneven development. While the security forces have managed to contain the physical violence to a large extent, a permanent end to Left-Wing Extremism demands a sustained commitment to inclusive governance, strict implementation of laws like PESA, and protecting tribal land rights.",
      "झारखंड में नक्सलवाद ऐतिहासिक अन्याय और असमान विकास में निहित एक जटिल मुद्दा है। जबकि सुरक्षा बल काफी हद तक शारीरिक हिंसा को नियंत्रित करने में कामयाब रहे हैं, वामपंथी उग्रवाद को स्थायी रूप से समाप्त करने के लिए समावेशी शासन, पेसा (PESA) जैसे कानूनों के सख्त कार्यान्वयन और आदिवासी भूमि अधिकारों की रक्षा के लिए निरंतर प्रतिबद्धता की आवश्यकता है।"
    ],
    "shortQ": [
      [
        "What does LWE stand for?",
        "LWE का पूर्ण रूप क्या है?"
      ],
      [
        "Name two main causes for the growth of Naxalism in Jharkhand.",
        "झारखंड में नक्सलवाद के विकास के दो मुख्य कारण बताइए।"
      ],
      [
        "What are 'Jan Adalats'?",
        "'जन अदालतें' क्या हैं?"
      ],
      [
        "Name the specialized anti-Naxal police force of Jharkhand.",
        "झारखंड के विशेष नक्सल विरोधी पुलिस बल का नाम बताइए।"
      ],
      [
        "What is the 'Aspirational Districts Program' in the context of LWE?",
        "LWE के संदर्भ में 'आकांक्षी जिला कार्यक्रम' (Aspirational Districts Program) क्या है?"
      ]
    ],
    "longQ": [
      [
        "Discuss the socio-economic root causes that led to the growth of Naxalism in Jharkhand.",
        "उन सामाजिक-आर्थिक मूल कारणों पर चर्चा करें जिनके कारण झारखंड में नक्सलवाद का विकास हुआ।"
      ],
      [
        "Evaluate the impact of Left-Wing Extremism on the development of Jharkhand.",
        "झारखंड के विकास पर वामपंथी उग्रवाद के प्रभाव का मूल्यांकन करें।"
      ],
      [
        "Critically analyze the state government's 'security and development' strategy to counter Naxalism.",
        "नक्सलवाद का मुकाबला करने के लिए राज्य सरकार की 'सुरक्षा और विकास' रणनीति का आलोचनात्मक विश्लेषण करें।"
      ],
      [
        "\"Naxalism in Jharkhand has degenerated into an extortion industry.\" Comment.",
        "\"झारखंड में नक्सलवाद एक जबरन वसूली उद्योग (extortion industry) में बदल गया है।\" टिप्पणी करें।"
      ],
      [
        "Explain the role of land alienation and mining policies in fueling the Maoist insurgency.",
        "माओवादी उग्रवाद को बढ़ावा देने में भूमि अलगाव और खनन नीतियों की भूमिका की व्याख्या करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "Naxalism originated in 1967 in which state before spreading to Jharkhand?",
          "नक्सलवाद 1967 में झारखंड में फैलने से पहले किस राज्य में उत्पन्न हुआ था?"
        ],
        "opts": [
          [
            "Andhra Pradesh",
            "आंध्र प्रदेश"
          ],
          [
            "West Bengal",
            "पश्चिम बंगाल"
          ],
          [
            "Bihar",
            "बिहार"
          ],
          [
            "Chhattisgarh",
            "छत्तीसगढ़"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which of the following is a specialized force of the Jharkhand Police formed to combat Naxalism?",
          "निम्नलिखित में से कौन नक्सलवाद से निपटने के लिए गठित झारखंड पुलिस का एक विशेष बल है?"
        ],
        "opts": [
          [
            "Greyhounds",
            "ग्रेहाउंड्स (Greyhounds)"
          ],
          [
            "Jharkhand Jaguars",
            "झारखंड जगुआर (Jharkhand Jaguars)"
          ],
          [
            "CoBRA",
            "कोबरा (CoBRA)"
          ],
          [
            "Black Cats",
            "ब्लैक कैट्स (Black Cats)"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "'Levy' in the context of Naxalism in Jharkhand primarily refers to:",
          "झारखंड में नक्सलवाद के संदर्भ में 'लेवी' (Levy) मुख्य रूप से किसे संदर्भित करता है?"
        ],
        "opts": [
          [
            "Government taxes",
            "सरकारी कर"
          ],
          [
            "Extortion money collected from contractors and mining companies",
            "ठेकेदारों और खनन कंपनियों से वसूला गया जबरन वसूली का पैसा"
          ],
          [
            "Funds provided by foreign NGOs",
            "विदेशी NGO द्वारा प्रदान की गई धनराशि"
          ],
          [
            "Agricultural surplus collected from farmers",
            "किसानों से एकत्र कृषि अधिशेष"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "The dense forest area in West Singhbhum district that was a major Maoist stronghold is:",
          "पश्चिमी सिंहभूम जिले का वह घना वन क्षेत्र कौन सा है जो एक प्रमुख माओवादी गढ़ था?"
        ],
        "opts": [
          [
            "Dalma",
            "दलमा"
          ],
          [
            "Saranda",
            "सारंडा"
          ],
          [
            "Palamu",
            "पलामू"
          ],
          [
            "Hazaribagh",
            "हजारीबाग"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "The primary ideological group driving Left-Wing Extremism in Jharkhand today is:",
          "आज झारखंड में वामपंथी उग्रवाद को चलाने वाला प्राथमिक वैचारिक समूह कौन सा है?"
        ],
        "opts": [
          [
            "CPI (Marxist)",
            "CPI (मार्क्सवादी)"
          ],
          [
            "CPI (Maoist)",
            "CPI (माओवादी)"
          ],
          [
            "All India Forward Bloc",
            "ऑल इंडिया फॉरवर्ड ब्लॉक"
          ],
          [
            "RSP",
            "RSP"
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
      "Tribal Issues in Jharkhand",
      "झारखंड में जनजातीय मुद्दे"
    ],
    "introduction": [
      "Despite being created specifically to fulfill the aspirations of the Adivasis, Jharkhand continues to grapple with severe tribal issues. The indigenous populations, who were the original masters of the land, find themselves marginalized in their own state. The core tribal issues revolve around the threat to their land, livelihood, culture, and political representation in the face of aggressive modernization and external influx.",
      "विशेष रूप से आदिवासियों की आकांक्षाओं को पूरा करने के लिए बनाए जाने के बावजूद, झारखंड गंभीर जनजातीय मुद्दों से जूझना जारी रखता है। स्वदेशी आबादी, जो इस भूमि के मूल मालिक थे, खुद को अपने ही राज्य में हाशिए पर पाते हैं। आक्रामक आधुनिकीकरण और बाहरी आमद के सामने मुख्य जनजातीय मुद्दे उनकी भूमि, आजीविका, संस्कृति और राजनीतिक प्रतिनिधित्व के खतरे के इर्द-गिर्द घूमते हैं।"
    ],
    "concepts": [
      {
        "heading": [
          "Land Alienation and Displacement",
          "भूमि अलगाव और विस्थापन (Land Alienation and Displacement)"
        ],
        "body": [
          "This is the most burning issue. Mega steel plants, dams, and coal mines have caused massive displacement. The promised rehabilitation often fails, turning independent farmers into daily wage laborers. Attempts by governments to amend the protective CNT and SPT Acts to easily acquire tribal land have sparked massive statewide protests (e.g., the Pathalgadi movement).",
          "यह सबसे ज्वलंत मुद्दा है। मेगा स्टील प्लांट, बांध और कोयला खदानों ने बड़े पैमाने पर विस्थापन किया है। वादा किया गया पुनर्वास अक्सर विफल रहता है, जिससे स्वतंत्र किसान दिहाड़ी मजदूर बन जाते हैं। आसानी से आदिवासी भूमि का अधिग्रहण करने के लिए सुरक्षात्मक CNT और SPT अधिनियमों में संशोधन करने के सरकारों के प्रयासों ने राज्यव्यापी विरोध (जैसे, पत्थलगड़ी आंदोलन) को जन्म दिया है।"
        ]
      },
      {
        "heading": [
          "The Domicile Issue (Khatian)",
          "अधिवास मुद्दा (खतियान - Domicile Issue)"
        ],
        "body": [
          "Determining who is a 'local' (Jharkhandi) is highly contentious. Tribals demand that the 1932 land survey (Khatian) be used as the cutoff date to define a local, ensuring priority in government jobs and resources, while non-tribals oppose this.",
          "'स्थानीय' (झारखंडी) कौन है, यह तय करना अत्यधिक विवादास्पद है। आदिवासी मांग करते हैं कि सरकारी नौकरियों और संसाधनों में प्राथमिकता सुनिश्चित करने के लिए स्थानीय को परिभाषित करने के लिए 1932 के भूमि सर्वेक्षण (खतियान) का उपयोग किया जाए, जबकि गैर-आदिवासी इसका विरोध करते हैं।"
        ]
      },
      {
        "heading": [
          "Cultural Assimilation and Language",
          "सांस्कृतिक आत्मसात और भाषा"
        ],
        "body": [
          "The dominance of Hindi is eroding tribal languages (Santhali, Mundari, Ho, Kurukh). There is a continuous struggle to protect the 'Sarna' religious code, demanding a separate column in the national census to prevent them from being clubbed with Hindus.",
          "हिंदी का प्रभुत्व आदिवासी भाषाओं (संथाली, मुंडारी, हो, कुड़ुख) को नष्ट कर रहा है। 'सरना' धार्मिक कोड की रक्षा के लिए निरंतर संघर्ष चल रहा है, राष्ट्रीय जनगणना में एक अलग कॉलम की मांग की जा रही है ताकि उन्हें हिंदुओं के साथ जोड़े जाने से रोका जा सके।"
        ]
      },
      {
        "heading": [
          "Migration and Trafficking",
          "प्रवास और मानव तस्करी (Migration and Trafficking)"
        ],
        "body": [
          "Extreme poverty forces thousands of tribal youth, especially young girls, to migrate to metro cities for domestic work, making them highly vulnerable to human trafficking and exploitation.",
          "अत्यधिक गरीबी हजारों आदिवासी युवाओं, विशेष रूप से युवा लड़कियों को घरेलू काम के लिए मेट्रो शहरों में प्रवास करने के लिए मजबूर करती है, जिससे वे मानव तस्करी और शोषण के प्रति अत्यधिक संवेदनशील हो जाते हैं।"
        ]
      },
      {
        "heading": [
          "Malnutrition and Health",
          "कुपोषण और स्वास्थ्य"
        ],
        "body": [
          "Tribal areas suffer from abysmal health infrastructure. Diseases like Malaria, TB, and severe malnutrition (stunting in children) are disproportionately high among PVTGs and general ST populations.",
          "आदिवासी क्षेत्र खराब स्वास्थ्य बुनियादी ढांचे से पीड़ित हैं। PVTG और सामान्य ST आबादी के बीच मलेरिया, टीबी और गंभीर कुपोषण (बच्चों में स्टंटिंग) जैसी बीमारियां असंगत रूप से उच्च हैं।"
        ]
      }
    ],
    "quotes": [
      [
        "\"Development in Jharkhand has largely meant development 'at the cost' of the tribals, rather than development 'for' the tribals.\"",
        "\"झारखंड में विकास का अर्थ बड़े पैमाने पर आदिवासियों 'के लिए' विकास के बजाय, आदिवासियों 'की कीमत पर' विकास रहा है।\""
      ]
    ],
    "evaluation": [
      "The state's approach to resolving tribal issues is often criticized as superficial. While symbolic gestures (like declaring public holidays on tribal festivals) are common, structural issues like the implementation of the PESA Act (Panchayats Extension to Scheduled Areas) are deliberately delayed because empowering grassroots tribal councils threatens the nexus of politicians, bureaucrats, and mining mafias. The Pathalgadi movement, where villages erected stone slabs declaring their autonomy under the Constitution, was a stark manifestation of the tribals' complete disillusionment with the state apparatus.",
      "जनजातीय मुद्दों को हल करने के राज्य के दृष्टिकोण की अक्सर सतही होने के रूप में आलोचना की जाती है। जबकि प्रतीकात्मक इशारे (जैसे आदिवासी त्योहारों पर सार्वजनिक अवकाश घोषित करना) आम हैं, पेसा (PESA) अधिनियम (अनुसूचित क्षेत्रों में पंचायतों का विस्तार) के कार्यान्वयन जैसे संरचनात्मक मुद्दों में जानबूझकर देरी की जाती है क्योंकि जमीनी स्तर की आदिवासी परिषदों को सशक्त बनाने से राजनेताओं, नौकरशाहों और खनन माफियाओं की सांठगांठ को खतरा होता है। पत्थलगड़ी आंदोलन, जहां गांवों ने संविधान के तहत अपनी स्वायत्तता की घोषणा करते हुए पत्थर की पट्टियां खड़ी कीं, राज्य तंत्र के प्रति आदिवासियों के पूर्ण मोहभंग की एक स्पष्ट अभिव्यक्ति थी।"
    ],
    "conclusion": [
      "The tribal issues in Jharkhand are not merely economic problems; they are crises of existence and identity. Unless the model of development is shifted from 'resource extraction' to 'community empowerment,' and protective legislations are strictly enforced, the alienation of the Adivasis will continue to fuel unrest and political instability in the state.",
      "झारखंड में जनजातीय मुद्दे केवल आर्थिक समस्याएं नहीं हैं; वे अस्तित्व और पहचान के संकट हैं। जब तक विकास के मॉडल को 'संसाधन निष्कर्षण' से 'सामुदायिक सशक्तिकरण' में स्थानांतरित नहीं किया जाता है, और सुरक्षात्मक कानूनों को सख्ती से लागू नहीं किया जाता है, आदिवासियों का अलगाव राज्य में अशांति और राजनीतिक अस्थिरता को बढ़ावा देता रहेगा।"
    ],
    "shortQ": [
      [
        "What is the '1932 Khatian' demand in Jharkhand?",
        "झारखंड में '1932 का खतियान' मांग क्या है?"
      ],
      [
        "What was the Pathalgadi movement?",
        "पत्थलगड़ी आंदोलन क्या था?"
      ],
      [
        "Name two tribal languages of Jharkhand that face the threat of erosion.",
        "झारखंड की दो जनजातीय भाषाओं के नाम बताइए जो क्षरण (erosion) के खतरे का सामना कर रही हैं।"
      ],
      [
        "Why do tribal groups demand a separate 'Sarna' code?",
        "आदिवासी समूह एक अलग 'सरना' कोड की मांग क्यों करते हैं?"
      ],
      [
        "How does industrialization lead to human trafficking in Jharkhand?",
        "झारखंड में औद्योगीकरण किस प्रकार मानव तस्करी को बढ़ावा देता है?"
      ]
    ],
    "longQ": [
      [
        "Discuss the major contemporary issues faced by the tribal population in Jharkhand.",
        "झारखंड में जनजातीय आबादी द्वारा सामना किए जाने वाले प्रमुख समकालीन मुद्दों पर चर्चा करें।"
      ],
      [
        "Critically analyze the problem of land alienation and displacement among the Adivasis.",
        "आदिवासियों के बीच भूमि अलगाव और विस्थापन की समस्या का आलोचनात्मक विश्लेषण करें।"
      ],
      [
        "Examine the politics behind the 'Domicile Policy' (Khatian) and its impact on tribal identity.",
        "'अधिवास नीति' (खतियान) के पीछे की राजनीति और आदिवासी पहचान पर इसके प्रभाव का परीक्षण करें।"
      ],
      [
        "\"The Pathalgadi movement was a symptom of a deeper governance failure.\" Elaborate.",
        "\"पत्थलगड़ी आंदोलन एक गहरी शासन विफलता का लक्षण था।\" स्पष्ट करें।"
      ],
      [
        "Discuss the socio-cultural challenges faced by tribals, focusing on language and the Sarna religious code.",
        "भाषा और सरना धार्मिक कोड पर ध्यान केंद्रित करते हुए आदिवासियों के सामने आने वाली सामाजिक-सांस्कृतिक चुनौतियों पर चर्चा करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "The demand for the '1932 Khatian' is primarily related to defining the:",
          "'1932 के खतियान' की मांग मुख्य रूप से किसे परिभाषित करने से संबंधित है?"
        ],
        "opts": [
          [
            "Mining rights",
            "खनन अधिकार"
          ],
          [
            "Domicile/Local status for jobs",
            "नौकरियों के लिए अधिवास/स्थानीय स्थिति (Correct)"
          ],
          [
            "Forest boundaries",
            "वन सीमाएं"
          ],
          [
            "State borders",
            "राज्य की सीमाएं"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which recent movement in Jharkhand saw tribals erecting huge stone slabs to declare the autonomy of Gram Sabhas?",
          "झारखंड में किस हालिया आंदोलन में आदिवासियों ने ग्राम सभाओं की स्वायत्तता घोषित करने के लिए विशाल पत्थर की पट्टियां (stone slabs) खड़ी कीं?"
        ],
        "opts": [
          [
            "Ulgulan",
            "उलगुलान"
          ],
          [
            "Hul",
            "हूल"
          ],
          [
            "Pathalgadi Movement",
            "पत्थलगड़ी आंदोलन"
          ],
          [
            "Sarna Andolan",
            "सरना आंदोलन"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "The demand for a separate 'Sarna Code' in the census is made to prevent the assimilation of tribals into:",
          "आदिवासियों को किसमें आत्मसात होने से रोकने के लिए जनगणना में एक अलग 'सरना कोड' की मांग की गई है?"
        ],
        "opts": [
          [
            "Christianity",
            "ईसाई धर्म"
          ],
          [
            "Islam",
            "इस्लाम"
          ],
          [
            "Hinduism",
            "हिंदू धर्म"
          ],
          [
            "Buddhism",
            "बौद्ध धर्म"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "PESA, an act crucial for tribal empowerment, stands for Panchayats (Extension to the ________ Areas) Act.",
          "आदिवासी सशक्तिकरण के लिए एक महत्वपूर्ण अधिनियम PESA का अर्थ है, पंचायत (________ क्षेत्रों में विस्तार) अधिनियम।"
        ],
        "opts": [
          [
            "State",
            "राज्य (State)"
          ],
          [
            "Scheduled",
            "अनुसूचित (Scheduled)"
          ],
          [
            "Santhal",
            "संथाल"
          ],
          [
            "Southern",
            "दक्षिणी (Southern)"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which tribal language from Jharkhand was included in the 8th Schedule of the Indian Constitution in 2003?",
          "2003 में भारतीय संविधान की 8वीं अनुसूची में झारखंड की किस जनजातीय भाषा को शामिल किया गया था?"
        ],
        "opts": [
          [
            "Mundari",
            "मुंडारी"
          ],
          [
            "Kurukh",
            "कुड़ुख"
          ],
          [
            "Ho",
            "हो"
          ],
          [
            "Santhali",
            "संथाली"
          ]
        ],
        "correct": 3
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
      "Constitutional and Policy Provisions for Tribal Development",
      "जनजातीय विकास के लिए संवैधानिक और नीतिगत प्रावधान"
    ],
    "introduction": [
      "Recognizing the historical injustices faced by indigenous populations, the framers of the Indian Constitution incorporated special provisions to protect their distinct identity and promote their socio-economic development. In Jharkhand, which has a substantial tribal population, these constitutional safeguards and subsequent state policies form the legal framework for tribal administration and welfare.",
      "स्वदेशी आबादी द्वारा सामना किए गए ऐतिहासिक अन्यायों को पहचानते हुए, भारतीय संविधान के निर्माताओं ने उनकी विशिष्ट पहचान की रक्षा करने और उनके सामाजिक-आर्थिक विकास को बढ़ावा देने के लिए विशेष प्रावधान शामिल किए। झारखंड में, जहां काफी आदिवासी आबादी है, ये संवैधानिक सुरक्षा उपाय और बाद की राज्य नीतियां आदिवासी प्रशासन और कल्याण के लिए कानूनी ढांचा बनाती हैं।"
    ],
    "concepts": [
      {
        "heading": [
          "Fifth Schedule (Article 244(1))",
          "पांचवीं अनुसूची (अनुच्छेद 244(1))"
        ],
        "body": [
          "Most tribal areas in Jharkhand fall under the Fifth Schedule. This provides for the creation of a Tribes Advisory Council (TAC) to advise the Governor on tribal welfare. The Governor has extraordinary powers to direct that any act of Parliament or State Legislature shall not apply to a Scheduled Area or apply with modifications.",
          "झारखंड के अधिकांश आदिवासी क्षेत्र पांचवीं अनुसूची के अंतर्गत आते हैं। यह आदिवासी कल्याण पर राज्यपाल को सलाह देने के लिए जनजातीय सलाहकार परिषद (TAC) के निर्माण का प्रावधान करता है। राज्यपाल के पास यह निर्देश देने की असाधारण शक्तियां हैं कि संसद या राज्य विधानमंडल का कोई भी कार्य अनुसूचित क्षेत्र पर लागू नहीं होगा या संशोधनों के साथ लागू होगा।"
        ]
      },
      {
        "heading": [
          "Political Representation",
          "राजनीतिक प्रतिनिधित्व"
        ],
        "body": [
          "Article 330 and 332 provide for the reservation of seats for Scheduled Tribes (STs) in the Lok Sabha and the State Legislative Assembly respectively (Jharkhand has 28 seats reserved for STs out of 81).",
          "अनुच्छेद 330 और 332 क्रमशः लोकसभा और राज्य विधानसभा में अनुसूचित जनजातियों (ST) के लिए सीटों के आरक्षण का प्रावधान करते हैं (झारखंड में 81 में से 28 सीटें ST के लिए आरक्षित हैं)।"
        ]
      },
      {
        "heading": [
          "PESA Act, 1996",
          "PESA अधिनियम, 1996"
        ],
        "body": [
          "The Panchayat (Extension to Scheduled Areas) Act empowers Gram Sabhas to safeguard traditional customs, resolve disputes, and control minor forest produce and land acquisition, essentially institutionalizing tribal self-governance.",
          "पंचायत (अनुसूचित क्षेत्रों में विस्तार) अधिनियम ग्राम सभाओं को पारंपरिक रीति-रिवाजों की रक्षा करने, विवादों को सुलझाने, और लघु वनोपज और भूमि अधिग्रहण को नियंत्रित करने का अधिकार देता है, अनिवार्य रूप से आदिवासी स्वशासन को संस्थागत बनाता है।"
        ]
      },
      {
        "heading": [
          "Forest Rights Act (FRA), 2006",
          "वन अधिकार अधिनियम (FRA), 2006"
        ],
        "body": [
          "Officially the Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act. It recognizes the rights of forest-dwelling communities to land and other resources, correcting historical injustices of colonial forest laws.",
          "आधिकारिक तौर पर अनुसूचित जनजाति और अन्य पारंपरिक वन निवासी (वन अधिकारों की मान्यता) अधिनियम। यह भूमि और अन्य संसाधनों पर वन-निवासी समुदायों के अधिकारों को मान्यता देता है, औपनिवेशिक वन कानूनों के ऐतिहासिक अन्यायों को दूर करता है।"
        ]
      },
      {
        "heading": [
          "Tenancy Acts (CNT & SPT)",
          "टेनेंसी अधिनियम (CNT और SPT)"
        ],
        "body": [
          "Pre-independence laws—Chotanagpur Tenancy Act (1908) and Santhal Pargana Tenancy Act (1949)—that prohibit the transfer of tribal land to non-tribals without strict government permission.",
          "स्वतंत्रता-पूर्व कानून—छोटानागपुर टेनेंसी अधिनियम (1908) और संथाल परगना टेनेंसी अधिनियम (1949)—जो सख्त सरकारी अनुमति के बिना आदिवासी भूमि को गैर-आदिवासियों को हस्तांतरित करने पर रोक लगाते हैं।"
        ]
      }
    ],
    "quotes": [
      [
        "\"The Constitution provides a robust protective shield for the tribals; the tragedy of Jharkhand is not a lack of laws, but a lack of political will to enforce them.\"",
        "\"संविधान आदिवासियों के लिए एक मजबूत सुरक्षा कवच प्रदान करता है; झारखंड की त्रासदी कानूनों की कमी नहीं है, बल्कि उन्हें लागू करने के लिए राजनीतिक इच्छाशक्ति की कमी है।\""
      ]
    ],
    "evaluation": [
      "On paper, Jharkhand has some of the strongest legal protections for tribals in the world. However, the implementation is deeply flawed. The Tribes Advisory Council (TAC) is often rendered toothless, rarely advising the Governor independently but rather functioning as an extension of the Chief Minister's office. The Governors have rarely used their special powers under the Fifth Schedule to stop anti-tribal legislation. PESA rules were formulated in Jharkhand very late, and Gram Sabhas are routinely bypassed during land acquisition for mining companies. The protective CNT/SPT acts are constantly circumvented using legal loopholes or facing amendment attempts by governments seeking 'ease of doing business.'",
      "कागजों पर, झारखंड में आदिवासियों के लिए दुनिया के कुछ सबसे मजबूत कानूनी संरक्षण हैं। हालांकि, कार्यान्वयन गहराई से त्रुटिपूर्ण है। जनजातीय सलाहकार परिषद (TAC) को अक्सर शक्तिहीन बना दिया जाता है, जो शायद ही कभी राज्यपाल को स्वतंत्र रूप से सलाह देता है, बल्कि मुख्यमंत्री कार्यालय के विस्तार के रूप में कार्य करता है। राज्यपालों ने आदिवासी विरोधी कानूनों को रोकने के लिए पांचवीं अनुसूची के तहत अपनी विशेष शक्तियों का शायद ही कभी उपयोग किया है। झारखंड में PESA नियम बहुत देर से बनाए गए थे, और खनन कंपनियों के लिए भूमि अधिग्रहण के दौरान ग्राम सभाओं को नियमित रूप से दरकिनार कर दिया जाता है। सुरक्षात्मक CNT/SPT अधिनियमों को लगातार कानूनी खामियों का उपयोग करके दरकिनार किया जाता है या 'ईज ऑफ डूइंग बिजनेस' (ease of doing business) की मांग करने वाली सरकारों द्वारा संशोधन के प्रयासों का सामना करना पड़ता है।"
    ],
    "conclusion": [
      "Constitutional and policy provisions are vital for tribal survival in Jharkhand. However, without vigilant execution and the genuine empowerment of grassroots institutions like the Gram Sabha, these laws remain mere letters. The gap between constitutional intent and administrative reality remains the primary driver of tribal alienation in the state.",
      "झारखंड में आदिवासियों के अस्तित्व के लिए संवैधानिक और नीतिगत प्रावधान महत्वपूर्ण हैं। हालांकि, सतर्क निष्पादन और ग्राम सभा जैसे जमीनी संस्थानों के वास्तविक सशक्तिकरण के बिना, ये कानून केवल अक्षर (mere letters) बने हुए हैं। संवैधानिक मंशा और प्रशासनिक वास्तविकता के बीच की खाई राज्य में आदिवासी अलगाव का प्राथमिक चालक बनी हुई है।"
    ],
    "shortQ": [
      [
        "Which Schedule of the Indian Constitution applies to the tribal areas of Jharkhand?",
        "भारतीय संविधान की कौन सी अनुसूची झारखंड के आदिवासी क्षेत्रों पर लागू होती है?"
      ],
      [
        "What is the function of the Tribes Advisory Council (TAC)?",
        "जनजातीय सलाहकार परिषद (TAC) का कार्य क्या है?"
      ],
      [
        "How does the Forest Rights Act (FRA) 2006 help tribals?",
        "वन अधिकार अधिनियम (FRA) 2006 आदिवासियों की मदद कैसे करता है?"
      ],
      [
        "Mention the constitutional articles that provide political reservation to STs.",
        "उन संवैधानिक अनुच्छेदों का उल्लेख करें जो ST को राजनीतिक आरक्षण प्रदान करते हैं।"
      ],
      [
        "What is the core objective of the PESA Act?",
        "PESA अधिनियम का मुख्य उद्देश्य क्या है?"
      ]
    ],
    "longQ": [
      [
        "Discuss the special provisions made for the administration of Scheduled Areas under the Fifth Schedule of the Constitution.",
        "संविधान की पांचवीं अनुसूची के तहत अनुसूचित क्षेत्रों के प्रशासन के लिए किए गए विशेष प्रावधानों पर चर्चा करें।"
      ],
      [
        "\"PESA is a revolutionary act that remains largely unimplemented in Jharkhand.\" Critically evaluate this statement.",
        "\"PESA एक क्रांतिकारी अधिनियम है जो झारखंड में काफी हद तक लागू नहीं हुआ है।\" इस कथन का आलोचनात्मक मूल्यांकन करें।"
      ],
      [
        "Examine the role and effectiveness of the Tribes Advisory Council (TAC) in protecting tribal interests.",
        "आदिवासी हितों की रक्षा करने में जनजातीय सलाहकार परिषद (TAC) की भूमिका और प्रभावशीलता का परीक्षण करें।"
      ],
      [
        "Discuss the significance of the CNT and SPT Acts in preventing tribal land alienation.",
        "आदिवासी भूमि के अलगाव को रोकने में CNT और SPT अधिनियमों के महत्व पर चर्चा करें।"
      ],
      [
        "Analyze the constitutional safeguards provided for the socio-economic and political development of Scheduled Tribes.",
        "अनुसूचित जनजातियों के सामाजिक-आर्थिक और राजनीतिक विकास के लिए प्रदान किए गए संवैधानिक सुरक्षा उपायों का विश्लेषण करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "The administration of Scheduled Areas in Jharkhand falls under which Schedule of the Indian Constitution?",
          "झारखंड में अनुसूचित क्षेत्रों का प्रशासन भारतीय संविधान की किस अनुसूची के अंतर्गत आता है?"
        ],
        "opts": [
          [
            "Fourth Schedule",
            "चौथी अनुसूची"
          ],
          [
            "Fifth Schedule",
            "पांचवीं अनुसूची"
          ],
          [
            "Sixth Schedule",
            "छठी अनुसूची"
          ],
          [
            "Ninth Schedule",
            "नौवीं अनुसूची"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Who has the special constitutional power to declare that an Act of Parliament does not apply to a Scheduled Area in a state?",
          "यह घोषित करने की विशेष संवैधानिक शक्ति किसके पास है कि संसद का कोई अधिनियम राज्य के किसी अनुसूचित क्षेत्र पर लागू नहीं होता है?"
        ],
        "opts": [
          [
            "Chief Minister",
            "मुख्यमंत्री"
          ],
          [
            "Governor of the State",
            "राज्य के राज्यपाल"
          ],
          [
            "President of India",
            "भारत के राष्ट्रपति"
          ],
          [
            "Chief Justice of the High Court",
            "उच्च न्यायालय के मुख्य न्यायाधीश"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "The Tribes Advisory Council (TAC) should consist of not more than ________ members.",
          "जनजातीय सलाहकार परिषद (TAC) में कितने सदस्यों से अधिक नहीं होने चाहिए?"
        ],
        "opts": [
          [
            "10",
            "10"
          ],
          [
            "15",
            "15"
          ],
          [
            "20",
            "20"
          ],
          [
            "25",
            "25"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "Under the PESA Act, which body is endowed with the power to safeguard the traditions and customs of the people?",
          "PESA अधिनियम के तहत, किस निकाय को लोगों की परंपराओं और रीति-रिवाजों की रक्षा करने की शक्ति संपन्न की गई है?"
        ],
        "opts": [
          [
            "Zila Parishad",
            "जिला परिषद"
          ],
          [
            "Block Development Office",
            "प्रखंड विकास कार्यालय"
          ],
          [
            "Gram Sabha",
            "ग्राम सभा"
          ],
          [
            "State Assembly",
            "राज्य विधानसभा"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "How many assembly seats are reserved for Scheduled Tribes (STs) in the Jharkhand Legislative Assembly?",
          "झारखंड विधानसभा में अनुसूचित जनजातियों (ST) के लिए कितनी विधानसभा सीटें आरक्षित हैं?"
        ],
        "opts": [
          [
            "21",
            "21"
          ],
          [
            "28",
            "28"
          ],
          [
            "32",
            "32"
          ],
          [
            "41",
            "41"
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
      "Role of Socio-religious Organizations: (i) Christian Missionaries, (ii) RSS",
      "सामाजिक-धार्मिक संगठनों की भूमिका: (i) ईसाई मिशनरी, (ii) आरएसएस"
    ],
    "introduction": [
      "The socio-political landscape of Jharkhand is heavily influenced by the activities of socio-religious organizations. For decades, the region has witnessed a quiet but intense ideological battle for the hearts, minds, and souls of the Adivasis. The two most prominent actors in this arena are the Christian Missionaries and the Hindu nationalist Rashtriya Swayamsevak Sangh (RSS). Their activities in education, healthcare, and religious conversion/reconversion have deeply impacted the voting behavior and identity politics of the state.",
      "झारखंड का सामाजिक-राजनीतिक परिदृश्य सामाजिक-धार्मिक संगठनों की गतिविधियों से काफी प्रभावित है। दशकों से, इस क्षेत्र ने आदिवासियों के दिलों, दिमाग और आत्माओं के लिए एक शांत लेकिन गहन वैचारिक लड़ाई देखी है। इस अखाड़े में दो सबसे प्रमुख अभिनेता ईसाई मिशनरी और हिंदू राष्ट्रवादी राष्ट्रीय स्वयंसेवक संघ (RSS) हैं। शिक्षा, स्वास्थ्य सेवा और धार्मिक रूपांतरण/पुनर्धर्मांतरण (conversion/reconversion) में उनकी गतिविधियों ने राज्य के मतदान व्यवहार और पहचान की राजनीति को गहराई से प्रभावित किया है।"
    ],
    "concepts": [
      {
        "heading": [
          "(i) Role of Christian Missionaries",
          "(i) ईसाई मिशनरियों की भूमिका"
        ],
        "body": [
          "- Historical Entry: Gossner Evangelical Lutheran Church arrived in 1845, followed by Anglicans and Catholics (notably Father Camille Bulcke and Father Constant Lievens).\n                - Socio-Economic Impact: They were pioneers in establishing schools, colleges (like St. Xavier's), and hospitals in remote tribal areas. They also helped tribals fight exploitative landlords in British courts.\n                - Political Impact: Education led to the emergence of a conscious tribal middle class. Early leaders of the Jharkhand movement (like Jaipal Singh Munda) were Christian tribals.\n                - Controversy: Accusations of forced or lured religious conversions, altering the traditional 'Sarna' demographic.",
          "- ऐतिहासिक प्रवेश: गोस्नर इवेंजेलिकल लूथरन चर्च 1845 में आया, उसके बाद एंग्लिकन और कैथोलिक (विशेष रूप से फादर कामिल बुल्के और फादर कॉन्स्टेंट लिवेंस)।\n                - सामाजिक-आर्थिक प्रभाव: वे दूरदराज के आदिवासी क्षेत्रों में स्कूल, कॉलेज (जैसे सेंट जेवियर्स) और अस्पताल स्थापित करने में अग्रणी थे। उन्होंने ब्रिटिश अदालतों में शोषक जमींदारों से लड़ने में आदिवासियों की मदद भी की।\n                - राजनीतिक प्रभाव: शिक्षा के कारण एक जागरूक आदिवासी मध्यम वर्ग का उदय हुआ। झारखंड आंदोलन के शुरुआती नेता (जैसे जयपाल सिंह मुंडा) ईसाई आदिवासी थे।\n                - विवाद: पारंपरिक 'सरना' जनसांख्यिकी को बदलते हुए, जबरन या लालच देकर धार्मिक धर्मांतरण के आरोप।"
        ]
      },
      {
        "heading": [
          "(ii) Role of RSS (and Affiliates like Vanvasi Kalyan Ashram)",
          "(ii) RSS की भूमिका (और वनवासी कल्याण आश्रम जैसे सहयोगी)"
        ],
        "body": [
          "- Historical Entry: The Vanvasi Kalyan Ashram (VKA) was established to counter missionary influence and integrate tribals into the larger Hindu fold.\n                - Socio-Economic Impact: Setting up Saraswati Shishu Mandirs (schools), Ekal Vidyalayas (single-teacher schools), and healthcare centers in remote villages.\n                - Political Impact: Highly successful in mobilizing the non-Christian tribal and Sadan votes for the BJP. They emphasize that tribals are essentially 'Sanatanis' (Hindus).\n                - Controversy: Accusations of eroding distinct tribal identities by 'Hinduizing' them (e.g., establishing Hanuman temples in Sarna villages) and campaigns of 'Ghar Wapsi' (reconversion).",
          "- ऐतिहासिक प्रवेश: मिशनरी प्रभाव का मुकाबला करने और आदिवासियों को बड़े हिंदू समूह में एकीकृत करने के लिए वनवासी कल्याण आश्रम (VKA) की स्थापना की गई थी।\n                - सामाजिक-आर्थिक प्रभाव: दूरदराज के गांवों में सरस्वती शिशु मंदिर (स्कूल), एकल विद्यालय (एकल-शिक्षक स्कूल) और स्वास्थ्य सेवा केंद्र स्थापित करना।\n                - राजनीतिक प्रभाव: BJP के लिए गैर-ईसाई आदिवासी और सदान वोटों को लामबंद करने में अत्यधिक सफल। वे इस बात पर जोर देते हैं कि आदिवासी अनिवार्य रूप से ' सनातनी' (हिंदू) हैं।\n                - विवाद: आदिवासियों का 'हिंदूकरण' करके उनकी विशिष्ट पहचान को मिटाने का आरोप (जैसे, सरना गांवों में हनुमान मंदिर स्थापित करना) और 'घर वापसी' (पुनर्धर्मांतरण) के अभियान।"
        ]
      },
      {
        "heading": [
          "The Fault Line",
          "विभाजन रेखा (The Fault Line)"
        ],
        "body": [
          "This has created a political divide: Christian tribals often lean towards the JMM/Congress, while a significant chunk of non-Christian (Sarna/Hinduized) tribals vote for the BJP.",
          "इसने एक राजनीतिक विभाजन पैदा कर दिया है: ईसाई आदिवासी अक्सर JMM/कांग्रेस की ओर झुकते हैं, जबकि गैर-ईसाई (सरना/हिंदूकृत) आदिवासियों का एक महत्वपूर्ण हिस्सा BJP को वोट देता है।"
        ]
      }
    ],
    "quotes": [
      [
        "\"The tribal in Jharkhand is caught in an ideological crossfire; one side seeks to 'civilize' him through Western Christianity, the other seeks to 'absorb' him into mainstream Hinduism, both often ignoring his distinct indigenous identity.\"",
        "\"झारखंड में आदिवासी एक वैचारिक गोलीबारी में फंसा है; एक पक्ष उसे पश्चिमी ईसाई धर्म के माध्यम से 'सभ्य' बनाना चाहता है, दूसरा उसे मुख्यधारा के हिंदू धर्म में 'अवशोषित' करना चाहता है, दोनों अक्सर उसकी विशिष्ट स्वदेशी पहचान को नजरअंदाज करते हैं।\""
      ]
    ],
    "evaluation": [
      "Both organizations have undeniably contributed to the welfare of tribals where the state failed, particularly in education and health. However, their ultimate goals are often ideological rather than purely altruistic. The missionaries' work brought modern education but created a wedge between Christian and non-Christian tribals. The RSS's work countered this but often at the cost of erasing unique Adivasi religious traditions. The state government's passage of the controversial 'Anti-Conversion Bill' (Freedom of Religion Act, 2017) was a direct political manifestation of this ongoing socio-religious turf war.",
      "दोनों संगठनों ने निर्विवाद रूप से आदिवासियों के कल्याण में योगदान दिया है जहां राज्य विफल रहा, विशेष रूप से शिक्षा और स्वास्थ्य में। हालांकि, उनके अंतिम लक्ष्य अक्सर विशुद्ध रूप से परोपकारी होने के बजाय वैचारिक होते हैं। मिशनरियों के काम ने आधुनिक शिक्षा ला दी लेकिन ईसाई और गैर-ईसाई आदिवासियों के बीच दरार पैदा कर दी। RSS के काम ने इसका मुकाबला किया लेकिन अक्सर अनूठी आदिवासी धार्मिक परंपराओं को मिटाने की कीमत पर। राज्य सरकार द्वारा विवादास्पद 'धर्मांतरण विरोधी विधेयक' (Freedom of Religion Act, 2017) का पारित होना इस चल रहे सामाजिक-धार्मिक युद्ध की प्रत्यक्ष राजनीतिक अभिव्यक्ति थी।"
    ],
    "conclusion": [
      "The socio-religious activities of the Christian Missionaries and the RSS are deeply woven into the political fabric of Jharkhand. Their rival strategies of conversion and assimilation have permanently altered the region's demography and voting patterns, making religion and identity central themes in the state's electoral politics.",
      "ईसाई मिशनरियों और RSS की सामाजिक-धार्मिक गतिविधियाँ झारखंड के राजनीतिक ताने-बाने में गहराई से बुनी हुई हैं। धर्मांतरण और आत्मसात करने की उनकी प्रतिद्वंद्वी रणनीतियों ने इस क्षेत्र की जनसांख्यिकी और मतदान के पैटर्न को स्थायी रूप से बदल दिया है, जिससे धर्म और पहचान राज्य की चुनावी राजनीति में केंद्रीय विषय बन गए हैं।"
    ],
    "shortQ": [
      [
        "Name the first Christian mission to arrive in Jharkhand.",
        "झारखंड पहुंचने वाले पहले ईसाई मिशन का नाम बताइए।"
      ],
      [
        "What is the Vanvasi Kalyan Ashram?",
        "वनवासी कल्याण आश्रम क्या है?"
      ],
      [
        "How did Christian missionaries contribute to the Jharkhand movement?",
        "ईसाई मिशनरियों ने झारखंड आंदोलन में कैसे योगदान दिया?"
      ],
      [
        "What is the concept of 'Ghar Wapsi'?",
        "'घर वापसी' की अवधारणा क्या है?"
      ],
      [
        "Why did the Jharkhand government pass the Freedom of Religion Act in 2017?",
        "झारखंड सरकार ने 2017 में धर्म स्वातंत्र्य अधिनियम (Freedom of Religion Act) क्यों पारित किया?"
      ]
    ],
    "longQ": [
      [
        "Discuss the socio-economic and political impact of Christian missionaries in Jharkhand.",
        "झारखंड में ईसाई मिशनरियों के सामाजिक-आर्थिक और राजनीतिक प्रभाव पर चर्चा करें।"
      ],
      [
        "Analyze the role of the RSS and Vanvasi Kalyan Ashram in shaping the electoral politics of Jharkhand.",
        "झारखंड की चुनावी राजनीति को आकार देने में RSS और वनवासी कल्याण आश्रम की भूमिका का विश्लेषण करें।"
      ],
      [
        "Compare and contrast the approaches of Christian Missionaries and the RSS toward the tribal population of Jharkhand.",
        "झारखंड की जनजातीय आबादी के प्रति ईसाई मिशनरियों और RSS के दृष्टिकोण की तुलना करें।"
      ],
      [
        "\"Tribal identity in Jharkhand is caught between Christianization and Hinduization.\" Critically evaluate this statement.",
        "\"झारखंड में आदिवासी पहचान ईसाईकरण और हिंदूकरण के बीच फंसी हुई है।\" इस कथन का आलोचनात्मक मूल्यांकन करें।"
      ],
      [
        "Explain how socio-religious organizations fill the 'governance deficit' in tribal areas and the political consequences of this.",
        "बताएं कि सामाजिक-धार्मिक संगठन किस प्रकार आदिवासी क्षेत्रों में 'शासन की कमी' (governance deficit) को भरते हैं और इसके राजनीतिक परिणाम क्या होते हैं।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "The first Christian mission to arrive in Chotanagpur (Ranchi) in 1845 was the:",
          "1845 में छोटानागपुर (रांची) पहुंचने वाला पहला ईसाई मिशन कौन सा था?"
        ],
        "opts": [
          [
            "Catholic Mission",
            "कैथोलिक मिशन"
          ],
          [
            "Gossner Evangelical Lutheran (GEL) Church",
            "गोस्नर इवेंजेलिकल लूथरन (GEL) चर्च"
          ],
          [
            "Anglican Mission",
            "एंग्लिकन मिशन"
          ],
          [
            "Baptist Mission",
            "बैपटिस्ट मिशन"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which RSS-affiliated organization specifically works among the tribal populations in India, including Jharkhand?",
          "RSS से संबद्ध कौन सा संगठन विशेष रूप से झारखंड सहित भारत में आदिवासी आबादी के बीच काम करता है?"
        ],
        "opts": [
          [
            "Vishva Hindu Parishad (VHP)",
            "विश्व हिंदू परिषद (VHP)"
          ],
          [
            "Bajrang Dal",
            "बजरंग दल"
          ],
          [
            "Vanvasi Kalyan Ashram",
            "वनवासी कल्याण आश्रम"
          ],
          [
            "Akhil Bharatiya Vidyarthi Parishad (ABVP)",
            "अखिल भारतीय विद्यार्थी परिषद (ABVP)"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "The single-teacher schools run by RSS affiliates in remote tribal villages are known as:",
          "सुदूर आदिवासी गांवों में RSS सहयोगियों द्वारा चलाए जा रहे एकल-शिक्षक स्कूलों को किस रूप में जाना जाता है?"
        ],
        "opts": [
          [
            "Navodaya Vidyalayas",
            "नवोदय विद्यालय"
          ],
          [
            "Ekal Vidyalayas",
            "एकल विद्यालय"
          ],
          [
            "Kendriya Vidyalayas",
            "केंद्रीय विद्यालय"
          ],
          [
            "Ashram Schools",
            "आश्रम स्कूल"
          ]
        ],
        "correct": 1
      },
      {
        "q": [
          "Jaipal Singh Munda, the legendary leader of the Jharkhand movement, belonged to which religious background?",
          "झारखंड आंदोलन के महान नेता जयपाल सिंह मुंडा किस धार्मिक पृष्ठभूमि के थे?"
        ],
        "opts": [
          [
            "Sarna",
            "सरना"
          ],
          [
            "Hindu",
            "हिंदू"
          ],
          [
            "Christian",
            "ईसाई"
          ],
          [
            "Muslim",
            "मुस्लिम"
          ]
        ],
        "correct": 2
      },
      {
        "q": [
          "The Jharkhand Freedom of Religion Act, 2017, was primarily aimed at regulating:",
          "झारखंड धर्म स्वातंत्र्य अधिनियम, 2017 (Freedom of Religion Act) मुख्य रूप से किसे विनियमित करने के उद्देश्य से था?"
        ],
        "opts": [
          [
            "Establishment of new temples",
            "नए मंदिरों की स्थापना"
          ],
          [
            "Religious conversions by force or allurement",
            "बल या लालच द्वारा धार्मिक धर्मांतरण"
          ],
          [
            "Foreign funding of NGOs",
            "गैर सरकारी संगठनों का विदेशी वित्तपोषण"
          ],
          [
            "Tribal festivals",
            "आदिवासी त्यौहार"
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
  const paperTitle = language === 'en' ? 'PSC-C-310: Politics of Jharkhand' : 'PSC-C-310: झारखंड की राजनीति';
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
            <span className="font-semibold">{t('Paper Code: PSC-C-310', 'पेपर कोड: PSC-C-310')}</span>
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
            {t('All 8 Topics Complete! Full PSC-C-310 notes with 5-part structure, MCQs & UGC NET Prep ready.', 'सभी 8 विषय पूर्ण! 5-भाग संरचना, MCQ और UGC NET तैयारी के साथ संपूर्ण PSC-C-310 नोट्स तैयार।')}
          </p>
        </div>
      </div>
    </div>
  );
}
