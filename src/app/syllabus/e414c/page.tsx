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
      "National Integration: Challenges and Solutions",
      "राष्ट्रीय एकीकरण: चुनौतियां और समाधान"
    ],
    "introduction": [
      "National Integration is the socio-psychological and educational process through which a feeling of unity, solidarity, and cohesion is developed in the hearts of the people, irrespective of their caste, religion, region, or language. In a highly diverse country like India, national integration is not just a political necessity but an existential prerequisite for the survival of the nation-state. However, since independence, India has faced continuous challenges to its unity from various divisive forces.",
      "राष्ट्रीय एकीकरण (National Integration) वह सामाजिक-मनोवैज्ञानिक और शैक्षिक प्रक्रिया है जिसके माध्यम से लोगों के दिलों में उनकी जाति, धर्म, क्षेत्र या भाषा की परवाह किए बिना एकता, एकजुटता और सामंजस्य की भावना विकसित की जाती है। भारत जैसे अत्यधिक विविधतापूर्ण देश में, राष्ट्रीय एकीकरण केवल एक राजनीतिक आवश्यकता नहीं है, बल्कि राष्ट्र-राज्य के अस्तित्व के लिए एक अस्तित्वगत पूर्वापेक्षा है। हालांकि, स्वतंत्रता के बाद से, भारत ने विभिन्न विभाजनकारी ताकतों से अपनी एकता के लिए निरंतर चुनौतियों का सामना किया है।"
    ],
    "concepts": [
      {
        "heading": [
          "Meaning and Nature of National Integration",
          "राष्ट्रीय एकीकरण का अर्थ और प्रकृति"
        ],
        "body": [
          "National integration implies the creation of a national consciousness that supersedes narrow parochial loyalties. It does not mean the obliteration of regional or cultural identities (assimilation), but rather the harmonious co-existence of these identities within a broader framework of national loyalty ('Unity in Diversity').",
          "राष्ट्रीय एकीकरण का तात्पर्य एक ऐसी राष्ट्रीय चेतना के निर्माण से है जो संकीर्ण संकीर्ण वफादारी (parochial loyalties) का स्थान लेती है। इसका अर्थ क्षेत्रीय या सांस्कृतिक पहचान (आत्मसात) का विनाश नहीं है, बल्कि राष्ट्रीय वफादारी ('विविधता में एकता') के व्यापक ढांचे के भीतर इन पहचानों का सामंजस्यपूर्ण सह-अस्तित्व है।"
        ]
      },
      {
        "heading": [
          "Challenges to National Integration",
          "राष्ट्रीय एकीकरण की चुनौतियां"
        ],
        "body": [
          "- Communalism (सांप्रदायिकता): The politicization of religion leading to inter-community hatred and riots. It remains the most potent threat.\n- Casteism (जातिवाद): The use of caste loyalty for political gains, leading to social fragmentation and violence.\n- Regionalism (क्षेत्रवाद): Extreme loyalty to one's region, sometimes leading to demands for secession or statehood at the cost of national unity.\n- Linguism (भाषावाद): Conflicts arising from language imposition or linguistic chauvinism (e.g., Anti-Hindi agitations).\n- Economic Disparities: Uneven development and poverty breed frustration and extremism (like Naxalism).",
          "- सांप्रदायिकता: धर्म का राजनीतिकरण जिससे अंतर-सामुदायिक घृणा और दंगे होते हैं। यह सबसे शक्तिशाली खतरा बना हुआ है।\n- जातिवाद: राजनीतिक लाभ के लिए जातिगत वफादारी का उपयोग, जिससे सामाजिक विखंडन और हिंसा होती है।\n- क्षेत्रवाद: अपने क्षेत्र के प्रति अत्यधिक वफादारी, कभी-कभी राष्ट्रीय एकता की कीमत पर अलगाव या राज्य की मांगों को जन्म देती है।\n- भाषावाद: भाषा थोपने या भाषाई अंधराष्ट्रवाद से उत्पन्न होने वाले संघर्ष (उदा. हिंदी विरोधी आंदोलन)।\n- आर्थिक असमानताएं: असमान विकास और गरीबी हताशा और उग्रवाद (जैसे नक्सलवाद) को जन्म देती है।"
        ]
      },
      {
        "heading": [
          "Solutions and Institutional Safeguards",
          "समाधान और संस्थागत सुरक्षा उपाय"
        ],
        "body": [
          "- Constitutional Provisions: Fundamental Rights (Equality, Freedom of Religion), Directive Principles, and a strong Center in the federal structure.\n- National Integration Council (NIC): Established in 1961 to combat communalism, casteism, and regionalism.\n- Secular State: Ensuring state neutrality in religious matters to build trust among minorities.\n- Inclusive Development: Addressing regional imbalances and economic inequalities through planned development.\n- Education and Media: Promoting a scientific temper and a pan-Indian identity through a secular education system.",
          "- संवैधानिक प्रावधान: मौलिक अधिकार (समानता, धर्म की स्वतंत्रता), नीति निर्देशक सिद्धांत, और संघीय ढांचे में एक मजबूत केंद्र।\n- राष्ट्रीय एकता परिषद (NIC): सांप्रदायिकता, जातिवाद और क्षेत्रवाद से निपटने के लिए 1961 में स्थापित।\n- धर्मनिरपेक्ष राज्य: अल्पसंख्यकों के बीच विश्वास जगाने के लिए धार्मिक मामलों में राज्य की तटस्थता सुनिश्चित करना।\n- समावेशी विकास: नियोजित विकास के माध्यम से क्षेत्रीय असंतुलन और आर्थिक असमानताओं को दूर करना।\n- शिक्षा और मीडिया: एक धर्मनिरपेक्ष शिक्षा प्रणाली के माध्यम से वैज्ञानिक स्वभाव और अखिल भारतीय पहचान को बढ़ावा देना।"
        ]
      }
    ],
    "quotes": [
      [
        "\"National integration is not a house which could be built by mortar and bricks. It is not an industrial plan too which could be discussed and implemented by experts. Integration, on the contrary, is a thought which must go into the hearts of the people.\" — Dr. S. Radhakrishnan",
        "\"राष्ट्रीय एकीकरण कोई ऐसा घर नहीं है जिसे मोर्टार और ईंटों से बनाया जा सके। यह कोई औद्योगिक योजना भी नहीं है जिस पर विशेषज्ञों द्वारा चर्चा की जा सके और लागू किया जा सके। इसके विपरीत, एकीकरण एक ऐसा विचार है जिसे लोगों के दिलों में उतरना चाहिए।\" — डॉ. एस. राधाकृष्णन"
      ],
      [
        "Reference: 'Indian Government and Politics' by Dr. B. L. Fadia.",
        "संदर्भ: डॉ. बी. एल. फाड़िया द्वारा 'इंडियन गवर्नमेंट एंड पॉलिटिक्स'।"
      ]
    ],
    "evaluation": [
      "While India has successfully survived as a unified nation-state for over seven decades, defeating pessimistic Western predictions, national integration remains an ongoing project, not a completed task. The resurgence of identity politics, hyper-nationalism, and communal polarization in recent years shows that the fault lines are still active. True integration cannot be achieved merely by coercive state power or legal bans on divisive forces; it requires the continuous socio-economic upliftment of marginalized sections and a genuine commitment to secular democratic values by the political leadership.",
      "हालांकि भारत निराशावादी पश्चिमी भविष्यवाणियों को हराते हुए सात दशकों से अधिक समय तक एक एकीकृत राष्ट्र-राज्य के रूप में सफलतापूर्वक जीवित रहा है, लेकिन राष्ट्रीय एकीकरण एक सतत परियोजना बनी हुई है, न कि कोई पूरा हुआ कार्य। हाल के वर्षों में पहचान की राजनीति, अति-राष्ट्रवाद और सांप्रदायिक ध्रुवीकरण का पुनरुत्थान दर्शाता है कि फॉल्ट लाइन अभी भी सक्रिय हैं। सच्चा एकीकरण केवल जबरदस्ती राज्य की शक्ति या विभाजनकारी ताकतों पर कानूनी प्रतिबंधों से प्राप्त नहीं किया जा सकता है; इसके लिए हाशिए के वर्गों के निरंतर सामाजिक-आर्थिक उत्थान और राजनीतिक नेतृत्व द्वारा धर्मनिरपेक्ष लोकतांत्रिक मूल्यों के प्रति वास्तविक प्रतिबद्धता की आवश्यकता है।"
    ],
    "conclusion": [
      "In conclusion, National Integration in India is challenged by the deep-rooted socio-cultural diversities when they are exploited for political mobilization. However, the resilience of the Indian Constitution, democratic institutions, and the deep-seated cultural ethos of syncretism have acted as powerful cohesive forces. Addressing economic disparities and depoliticizing religion and caste are the essential solutions for building a strong, integrated India.",
      "निष्कर्ष में, भारत में राष्ट्रीय एकीकरण को गहरे बैठे सामाजिक-सांस्कृतिक विविधताओं द्वारा चुनौती दी जाती है जब उनका राजनीतिक लामबंदी के लिए शोषण किया जाता है। हालांकि, भारतीय संविधान का लचीलापन, लोकतांत्रिक संस्थाएं और समन्वयवाद (syncretism) के गहरे सांस्कृतिक लोकाचार ने शक्तिशाली एकजुट ताकतों के रूप में काम किया है। आर्थिक असमानताओं को दूर करना और धर्म और जाति का अराजनीतिकरण करना एक मजबूत, एकीकृत भारत के निर्माण के लिए आवश्यक समाधान हैं।"
    ],
    "shortQ": [
      [
        "Define National Integration.",
        "राष्ट्रीय एकीकरण को परिभाषित करें।"
      ],
      [
        "What is the National Integration Council (NIC)?",
        "राष्ट्रीय एकता परिषद (NIC) क्या है?"
      ],
      [
        "How is linguism a challenge to national integration?",
        "भाषावाद राष्ट्रीय एकीकरण के लिए एक चुनौती कैसे है?"
      ],
      [
        "Mention two constitutional provisions that promote national integration.",
        "राष्ट्रीय एकीकरण को बढ़ावा देने वाले दो संवैधानिक प्रावधानों का उल्लेख करें।"
      ],
      [
        "Why is uneven economic development considered a threat to unity?",
        "असमान आर्थिक विकास को एकता के लिए खतरा क्यों माना जाता है?"
      ]
    ],
    "longQ": [
      [
        "Discuss the major challenges to National Integration in India today.",
        "आज भारत में राष्ट्रीय एकीकरण की प्रमुख चुनौतियों पर चर्चा करें।"
      ],
      [
        "Evaluate the role of communalism and casteism as divisive forces in Indian politics.",
        "भारतीय राजनीति में विभाजनकारी ताकतों के रूप में सांप्रदायिकता और जातिवाद की भूमिका का मूल्यांकन करें।"
      ],
      [
        "What are the solutions and safeguards provided in the Indian Constitution to protect national unity?",
        "राष्ट्रीय एकता की रक्षा के लिए भारतीय संविधान में क्या समाधान और सुरक्षा उपाय प्रदान किए गए हैं?"
      ],
      [
        "\"National integration is a psychological and educational process.\" Explain this statement.",
        "\"राष्ट्रीय एकीकरण एक मनोवैज्ञानिक और शैक्षिक प्रक्रिया है।\" इस कथन की व्याख्या करें।"
      ],
      [
        "Critically analyze the role of the state and political parties in promoting or hindering national integration.",
        "राष्ट्रीय एकीकरण को बढ़ावा देने या बाधा डालने में राज्य और राजनीतिक दलों की भूमिका का आलोचनात्मक विश्लेषण करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "When was the National Integration Council (NIC) first constituted?",
          "राष्ट्रीय एकता परिषद (NIC) का गठन पहली बार कब किया गया था?"
        ],
        "opts": [
          ["1950", "1950"],
          ["1961", "1961"],
          ["1976", "1976"],
          ["1992", "1992"]
        ],
        "correct": 1
      },
      {
        "q": [
          "Who is the chairman of the National Integration Council?",
          "राष्ट्रीय एकता परिषद के अध्यक्ष कौन होते हैं?"
        ],
        "opts": [
          ["President of India", "भारत के राष्ट्रपति"],
          ["Prime Minister of India", "भारत के प्रधान मंत्री"],
          ["Home Minister", "गृह मंत्री"],
          ["Chief Justice of India", "भारत के मुख्य न्यायाधीश"]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which of the following is NOT a challenge to National Integration?",
          "निम्नलिखित में से कौन सा राष्ट्रीय एकीकरण के लिए एक चुनौती नहीं है?"
        ],
        "opts": [
          ["Communalism", "सांप्रदायिकता"],
          ["Regionalism", "क्षेत्रवाद"],
          ["Secularism", "धर्मनिरपेक्षता"],
          ["Casteism", "जातिवाद"]
        ],
        "correct": 2
      },
      {
        "q": [
          "The term 'Unity in Diversity' in the Indian context was popularized by:",
          "भारतीय संदर्भ में 'विविधता में एकता' शब्द को किसके द्वारा लोकप्रिय बनाया गया था?"
        ],
        "opts": [
          ["Mahatma Gandhi", "महात्मा गांधी"],
          ["Jawaharlal Nehru", "जवाहरलाल नेहरू"],
          ["Sardar Patel", "सरदार पटेल"],
          ["B. R. Ambedkar", "बी. आर. अंबेडकर"]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which Constitutional Amendment Act added the word 'Integrity' to the Preamble?",
          "किस संवैधानिक संशोधन अधिनियम ने प्रस्तावना में 'अखंडता' शब्द जोड़ा?"
        ],
        "opts": [
          ["42nd Amendment", "42वां संशोधन"],
          ["44th Amendment", "44वां संशोधन"],
          ["1st Amendment", "पहला संशोधन"],
          ["73rd Amendment", "73वां संशोधन"]
        ],
        "correct": 0
      }
    ],
    "ugcNotes": [
      "For UGC NET: Focus on the timeline of the National Integration Council (NIC). Remember that the 42nd Amendment (1976) formally added 'Integrity' to the Preamble. Understand the theories of nation-building by authors like Myron Weiner and Rajni Kothari.",
      "UGC NET के लिए: राष्ट्रीय एकता परिषद (NIC) की समयरेखा पर ध्यान दें। याद रखें कि 42वें संशोधन (1976) ने औपचारिक रूप से प्रस्तावना में 'अखंडता' (Integrity) को जोड़ा। मायरॉन वेनर (Myron Weiner) और रजनी कोठारी जैसे लेखकों द्वारा राष्ट्र-निर्माण के सिद्धांतों को समझें।"
    ],
    "ugcQ": [
      [
        "Q: Who convened the first National Integration Conference? A: PM Jawaharlal Nehru in 1961.",
        "प्र: पहले राष्ट्रीय एकता सम्मेलन की बैठक किसने बुलाई? उ: 1961 में पीएम जवाहरलाल नेहरू ने।"
      ]
    ]
  },
  {
    "id": "t2",
    "num": 2,
    "title": [
      "Secularism and Reservation",
      "धर्मनिरपेक्षता और आरक्षण"
    ],
    "introduction": [
      "Secularism and Reservation are two pivotal pillars of the Indian constitutional architecture designed to ensure equity, justice, and social harmony in a deeply stratified and multi-religious society. Indian secularism protects religious minorities and ensures state neutrality, while the reservation system (affirmative action) aims to uplift historically marginalized communities (SC, ST, and OBCs) by providing them representation in education and government jobs. Both concepts, while constitutionally mandated, are subjects of intense contemporary political debate.",
      "धर्मनिरपेक्षता और आरक्षण एक गहरे स्तरीकृत और बहु-धार्मिक समाज में समानता, न्याय और सामाजिक सद्भाव सुनिश्चित करने के लिए डिज़ाइन किए गए भारतीय संवैधानिक वास्तुकला के दो महत्वपूर्ण स्तंभ हैं। भारतीय धर्मनिरपेक्षता धार्मिक अल्पसंख्यकों की रक्षा करती है और राज्य की तटस्थता सुनिश्चित करती है, जबकि आरक्षण प्रणाली (सकारात्मक कार्रवाई) का उद्देश्य ऐतिहासिक रूप से हाशिए पर रहने वाले समुदायों (SC, ST और OBC) को शिक्षा और सरकारी नौकरियों में प्रतिनिधित्व प्रदान करके उनका उत्थान करना है। दोनों अवधारणाएं, हालांकि संवैधानिक रूप से अनिवार्य हैं, तीव्र समकालीन राजनीतिक बहस के विषय हैं।"
    ],
    "concepts": [
      {
        "heading": [
          "Indian Model of Secularism",
          "धर्मनिरपेक्षता का भारतीय मॉडल"
        ],
        "body": [
          "- 'Sarva Dharma Sambhava': Unlike Western secularism (which demands a strict separation of church and state), Indian secularism means equal respect for all religions and 'principled distance' of the state from religion.\n- The state can intervene in religious affairs to enact social reforms (e.g., banning untouchability, reforming personal laws).\n- Challenges: Vote-bank politics, communal violence, and the debate over a Uniform Civil Code (UCC).",
          "- 'सर्व धर्म समभाव': पश्चिमी धर्मनिरपेक्षता (जो चर्च और राज्य के सख्त अलगाव की मांग करती है) के विपरीत, भारतीय धर्मनिरपेक्षता का अर्थ है सभी धर्मों के लिए समान सम्मान और धर्म से राज्य की 'सैद्धांतिक दूरी'।\n- सामाजिक सुधारों को लागू करने के लिए राज्य धार्मिक मामलों में हस्तक्षेप कर सकता है (उदा. अस्पृश्यता पर प्रतिबंध लगाना, व्यक्तिगत कानूनों में सुधार)।\n- चुनौतियां: वोट-बैंक की राजनीति, सांप्रदायिक हिंसा, और समान नागरिक संहिता (UCC) पर बहस।"
        ]
      },
      {
        "heading": [
          "Reservation Policy (Affirmative Action)",
          "आरक्षण नीति (सकारात्मक कार्रवाई)"
        ],
        "body": [
          "- Objective: To correct historical injustices suffered by lower castes (Dalits and Adivasis) and ensure their adequate representation in the state apparatus.\n- Constitutional Basis: Article 15(4) and 16(4) empower the state to make special provisions for Socially and Educationally Backward Classes (SEBCs).\n- Mandal Commission: Its implementation in 1990 provided 27% reservation for OBCs, fundamentally altering Indian politics and giving rise to lower-caste assertion.",
          "- उद्देश्य: निचली जातियों (दलितों और आदिवासियों) को हुए ऐतिहासिक अन्यायों को ठीक करना और राज्य के तंत्र में उनका पर्याप्त प्रतिनिधित्व सुनिश्चित करना।\n- संवैधानिक आधार: अनुच्छेद 15(4) और 16(4) राज्य को सामाजिक और शैक्षिक रूप से पिछड़े वर्गों (SEBC) के लिए विशेष प्रावधान करने का अधिकार देते हैं।\n- मंडल आयोग: 1990 में इसके कार्यान्वयन ने OBC के लिए 27% आरक्षण प्रदान किया, जिसने मौलिक रूप से भारतीय राजनीति को बदल दिया और निचली जाति के मुखरता को जन्म दिया।"
        ]
      },
      {
        "heading": [
          "Intersection of Secularism and Reservation",
          "धर्मनिरपेक्षता और आरक्षण का अंतर्संबंध"
        ],
        "body": [
          "While reservation was initially caste-based (for Hindus, Sikhs, Buddhists), the demand for reservation based on economic backwardness among religious minorities (like Muslims) brings the debate of secularism into the reservation discourse (e.g., the Sachar Committee Report).",
          "जबकि आरक्षण शुरू में जाति-आधारित था (हिंदुओं, सिखों, बौद्धों के लिए), धार्मिक अल्पसंख्यकों (जैसे मुसलमानों) के बीच आर्थिक पिछड़ेपन के आधार पर आरक्षण की मांग धर्मनिरपेक्षता की बहस को आरक्षण के विमर्श में लाती है (उदा. सच्चर समिति की रिपोर्ट)।"
        ]
      }
    ],
    "quotes": [
      [
        "\"Indian secularism is not a blind copy of the West; it is a unique product of India's civilizational ethos of accommodation and tolerance.\" — Rajeev Bhargava",
        "\"भारतीय धर्मनिरपेक्षता पश्चिम की अंधी नकल नहीं है; यह आवास और सहिष्णुता के भारत के सभ्यतागत लोकाचार का एक अनूठा उत्पाद है।\" — राजीव भार्गव"
      ],
      [
        "Reference: 'Indian Politics: Contemporary Issues and Concerns' by J.C. Johari.",
        "संदर्भ: जे.सी. जौहरी द्वारा 'इंडियन पॉलिटिक्स: कंटेम्पररी इश्यूज़ एंड कंसर्न्स'।"
      ]
    ],
    "evaluation": [
      "The critical evaluation of secularism reveals a crisis of 'pseudo-secularism', where political parties are accused of minority appeasement rather than genuine empowerment. Similarly, the reservation policy, originally intended to be a temporary measure for social justice, has become a permanent tool for political mobilization. The 'creamy layer' debate highlights that the benefits of reservation are often cornered by the elite among the backward classes. Both policies face the challenge of moving beyond political tokenism to achieve substantive equality and true communal harmony.",
      "धर्मनिरपेक्षता का आलोचनात्मक मूल्यांकन 'छद्म-धर्मनिरपेक्षता' (pseudo-secularism) के संकट को उजागर करता है, जहां राजनीतिक दलों पर वास्तविक सशक्तिकरण के बजाय अल्पसंख्यक तुष्टिकरण का आरोप लगाया जाता है। इसी तरह, आरक्षण नीति, जिसे मूल रूप से सामाजिक न्याय के लिए एक अस्थायी उपाय के रूप में अभिप्रेत किया गया था, राजनीतिक लामबंदी के लिए एक स्थायी उपकरण बन गई है। 'क्रीमी लेयर' (creamy layer) की बहस इस बात पर प्रकाश डालती है कि आरक्षण के लाभ अक्सर पिछड़े वर्गों के बीच अभिजात वर्ग द्वारा प्राप्त कर लिए जाते हैं। दोनों नीतियां वास्तविक समानता और सच्चे सांप्रदायिक सद्भाव को प्राप्त करने के लिए राजनीतिक प्रतीकवाद (tokenism) से आगे बढ़ने की चुनौती का सामना करती हैं।"
    ],
    "conclusion": [
      "In conclusion, Secularism and Reservation are indispensable tools for managing India's immense diversity and deep-rooted inequalities. However, their highly politicized implementation has created new social frictions. To fulfill the constitutional vision, secularism must be practiced as genuine neutrality and respect, while the reservation system must be rationalized to ensure that the benefits reach the truly marginalized and deeply disadvantaged sections of society.",
      "निष्कर्ष में, धर्मनिरपेक्षता और आरक्षण भारत की अपार विविधता और गहरी असमानताओं के प्रबंधन के लिए अपरिहार्य उपकरण हैं। हालांकि, उनके अत्यधिक राजनीतिक कार्यान्वयन ने नए सामाजिक घर्षण पैदा किए हैं। संवैधानिक दृष्टिकोण को पूरा करने के लिए, धर्मनिरपेक्षता को वास्तविक तटस्थता और सम्मान के रूप में अभ्यास किया जाना चाहिए, जबकि आरक्षण प्रणाली को युक्तिसंगत बनाया जाना चाहिए ताकि यह सुनिश्चित हो सके कि लाभ समाज के वास्तव में हाशिए पर और अत्यधिक वंचित वर्गों तक पहुंचे।"
    ],
    "shortQ": [
      [
        "Distinguish between Western and Indian secularism.",
        "पश्चिमी और भारतीय धर्मनिरपेक्षता के बीच अंतर स्पष्ट करें।"
      ],
      [
        "What is Article 16(4) of the Indian Constitution?",
        "भारतीय संविधान का अनुच्छेद 16(4) क्या है?"
      ],
      [
        "What was the main recommendation of the Mandal Commission?",
        "मंडल आयोग की मुख्य सिफारिश क्या थी?"
      ],
      [
        "Define the 'creamy layer' concept.",
        "'क्रीमी लेयर' अवधारणा को परिभाषित करें।"
      ],
      [
        "What does 'Sarva Dharma Sambhava' mean?",
        "'सर्व धर्म समभाव' का क्या अर्थ है?"
      ]
    ],
    "longQ": [
      [
        "Examine the nature of Indian secularism and the contemporary challenges it faces.",
        "भारतीय धर्मनिरपेक्षता की प्रकृति और इसके सामने आने वाली समकालीन चुनौतियों का परीक्षण करें।"
      ],
      [
        "Critically evaluate the reservation policy in India. Has it achieved its goal of social justice?",
        "भारत में आरक्षण नीति का आलोचनात्मक मूल्यांकन करें। क्या इसने सामाजिक न्याय के अपने लक्ष्य को प्राप्त कर लिया है?"
      ],
      [
        "Discuss the impact of the Mandal Commission report on Indian politics.",
        "भारतीय राजनीति पर मंडल आयोग की रिपोर्ट के प्रभाव पर चर्चा करें।"
      ],
      [
        "\"Reservation has become a tool for political mobilization rather than social empowerment.\" Comment.",
        "\"आरक्षण सामाजिक सशक्तिकरण के बजाय राजनीतिक लामबंदी का एक साधन बन गया है।\" टिप्पणी करें।"
      ],
      [
        "Analyze the debate surrounding 'pseudo-secularism' and minority appeasement in India.",
        "भारत में 'छद्म-धर्मनिरपेक्षता' और अल्पसंख्यक तुष्टिकरण से जुड़ी बहस का विश्लेषण करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "The word 'Secular' was added to the Preamble of the Indian Constitution by which Amendment?",
          "भारतीय संविधान की प्रस्तावना में 'धर्मनिरपेक्ष' शब्द किस संशोधन द्वारा जोड़ा गया था?"
        ],
        "opts": [
          ["42nd Amendment", "42वां संशोधन"],
          ["44th Amendment", "44वां संशोधन"],
          ["73rd Amendment", "73वां संशोधन"],
          ["86th Amendment", "86वां संशोधन"]
        ],
        "correct": 0
      },
      {
        "q": [
          "The Mandal Commission (Second Backward Classes Commission) was headed by:",
          "मंडल आयोग (दूसरा पिछड़ा वर्ग आयोग) की अध्यक्षता किसने की थी?"
        ],
        "opts": [
          ["Kaka Kalelkar", "काका कालेलकर"],
          ["B. P. Mandal", "बी. पी. मंडल"],
          ["Morarji Desai", "मोरारजी देसाई"],
          ["V. P. Singh", "वी. पी. सिंह"]
        ],
        "correct": 1
      },
      {
        "q": [
          "In which landmark case did the Supreme Court uphold the 27% quota for OBCs but excluded the 'creamy layer'?",
          "किस ऐतिहासिक मामले में सुप्रीम कोर्ट ने OBC के लिए 27% कोटे को बरकरार रखा लेकिन 'क्रीमी लेयर' को बाहर कर दिया?"
        ],
        "opts": [
          ["Kesavananda Bharati case", "केशवानंद भारती मामला"],
          ["Indra Sawhney case", "इंद्रा साहनी मामला"],
          ["Minerva Mills case", "मिनर्वा मिल्स मामला"],
          ["Golaknath case", "गोलकनाथ मामला"]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which committee was constituted to report on the social, economic, and educational conditions of Muslims in India?",
          "भारत में मुसलमानों की सामाजिक, आर्थिक और शैक्षिक स्थितियों पर रिपोर्ट करने के लिए किस समिति का गठन किया गया था?"
        ],
        "opts": [
          ["Kothari Commission", "कोठारी आयोग"],
          ["Sachar Committee", "सच्चर समिति"],
          ["Punchhi Commission", "पुंछी आयोग"],
          ["Nanavati Commission", "नानावती आयोग"]
        ],
        "correct": 1
      },
      {
        "q": [
          "Currently, what is the maximum cap on reservation set by the Supreme Court (excluding the EWS quota)?",
          "वर्तमान में, सुप्रीम कोर्ट द्वारा निर्धारित आरक्षण पर अधिकतम सीमा (EWS कोटे को छोड़कर) क्या है?"
        ],
        "opts": [
          ["33%", "33%"],
          ["49.5%", "49.5%"],
          ["50%", "50%"],
          ["69%", "69%"]
        ],
        "correct": 2
      }
    ],
    "ugcNotes": [
      "For UGC NET: Be clear on the Indra Sawhney vs Union of India (1992) judgement, which established the 50% cap and the concept of the Creamy Layer. Know that Kaka Kalelkar headed the First Backward Classes Commission (1953). Understand Rajeev Bhargava's concept of 'Principled Distance' in Indian secularism.",
      "UGC NET के लिए: इंद्रा साहनी बनाम भारत संघ (1992) के फैसले पर स्पष्ट रहें, जिसने 50% की सीमा और क्रीमी लेयर की अवधारणा स्थापित की। जान लें कि काका कालेलकर ने प्रथम पिछड़ा वर्ग आयोग (1953) की अध्यक्षता की थी। भारतीय धर्मनिरपेक्षता में राजीव भार्गव की 'सैद्धांतिक दूरी' (Principled Distance) की अवधारणा को समझें।"
    ],
    "ugcQ": [
      [
        "Q: When was the Mandal Commission report implemented? A: 1990 (by V.P. Singh government).",
        "प्र: मंडल आयोग की रिपोर्ट कब लागू की गई थी? उ: 1990 (वी.पी. सिंह सरकार द्वारा)।"
      ]
    ]
  },
  {
    "id": "t3",
    "num": 3,
    "title": [
      "Media and Indian Democracy: Role and Limitations",
      "मीडिया और भारतीय लोकतंत्र: भूमिका और सीमाएं"
    ],
    "introduction": [
      "The media is widely regarded as the 'Fourth Estate' of democracy, serving as a critical watchdog that holds the government accountable, informs the public, and facilitates the exchange of ideas. In the world's largest democracy, the Indian media (print, electronic, and now digital) plays a monumental role in shaping public opinion and political narratives. However, contemporary Indian media is also facing severe criticism regarding its limitations, corporatization, and potential compromises in journalistic ethics.",
      "मीडिया को व्यापक रूप से लोकतंत्र का 'चौथा स्तंभ' (Fourth Estate) माना जाता है, जो एक महत्वपूर्ण प्रहरी के रूप में कार्य करता है जो सरकार को जवाबदेह ठहराता है, जनता को सूचित करता है, और विचारों के आदान-प्रदान को सुविधाजनक बनाता है। दुनिया के सबसे बड़े लोकतंत्र में, भारतीय मीडिया (प्रिंट, इलेक्ट्रॉनिक और अब डिजिटल) जनमत और राजनीतिक आख्यानों को आकार देने में एक स्मारकीय भूमिका निभाता है। हालांकि, समकालीन भारतीय मीडिया भी अपनी सीमाओं, निगमीकरण (corporatization) और पत्रकारिता नैतिकता में संभावित समझौतों के संबंध में गंभीर आलोचना का सामना कर रहा है।"
    ],
    "concepts": [
      {
        "heading": [
          "Role of Media in Indian Democracy",
          "भारतीय लोकतंत्र में मीडिया की भूमिका"
        ],
        "body": [
          "- Watchdog Function: Exposing corruption, scams (e.g., 2G, Bofors), and administrative failures.\n- Informative Role: Educating citizens about their rights, government policies, and global events to enable informed voting.\n- Platform for Debate: Providing a public sphere where diverse viewpoints, civil society, and the opposition can voice their concerns.\n- Agenda Setting: Highlighting critical social issues (like women's safety, environmental degradation) and forcing the government to act.",
          "- प्रहरी कार्य (Watchdog Function): भ्रष्टाचार, घोटालों (उदा. 2G, बोफोर्स) और प्रशासनिक विफलताओं को उजागर करना।\n- सूचनात्मक भूमिका: नागरिकों को उनके अधिकारों, सरकारी नीतियों और वैश्विक घटनाओं के बारे में शिक्षित करना ताकि वे सूचित मतदान कर सकें।\n- बहस के लिए मंच: एक सार्वजनिक क्षेत्र प्रदान करना जहां विविध दृष्टिकोण, नागरिक समाज और विपक्ष अपनी चिंताओं को व्यक्त कर सकते हैं।\n- एजेंडा सेटिंग: महत्वपूर्ण सामाजिक मुद्दों (जैसे महिलाओं की सुरक्षा, पर्यावरण क्षरण) को उजागर करना और सरकार को कार्य करने के लिए मजबूर करना।"
        ]
      },
      {
        "heading": [
          "Limitations and Challenges",
          "सीमाएं और चुनौतियां"
        ],
        "body": [
          "- Corporatization and Cross-Media Ownership: Large corporations owning media houses leads to biased reporting that protects corporate and allied political interests.\n- Sensationalism and 'Trial by Media': Prioritizing TRPs over truth, leading to sensationalized news and bypassing judicial processes.\n- Paid News and Fake News: The illegal practice of publishing sponsored content as news, and the unchecked spread of misinformation via social media.\n- Political Polarization: Media houses acting as mouthpieces for specific political parties, abandoning journalistic neutrality.",
          "- निगमीकरण और क्रॉस-मीडिया स्वामित्व: बड़े निगमों के मीडिया घरानों के मालिक होने से पक्षपातपूर्ण रिपोर्टिंग होती है जो कॉर्पोरेट और संबद्ध राजनीतिक हितों की रक्षा करती है।\n- सनसनीखेज और 'मीडिया द्वारा परीक्षण' (Trial by Media): सच्चाई पर TRP को प्राथमिकता देना, जिससे सनसनीखेज खबरें आती हैं और न्यायिक प्रक्रियाओं को दरकिनार किया जाता है।\n- पेड न्यूज़ और फेक न्यूज़: प्रायोजित सामग्री को समाचार के रूप में प्रकाशित करने की अवैध प्रथा, और सोशल मीडिया के माध्यम से गलत सूचना का अनियंत्रित प्रसार।\n- राजनीतिक ध्रुवीकरण: मीडिया घरानों का विशिष्ट राजनीतिक दलों के मुखपत्र के रूप में कार्य करना, पत्रकारिता की तटस्थता को छोड़ देना।"
        ]
      }
    ],
    "quotes": [
      [
        "\"A free press is not a privilege but an organic necessity in a great society. Without it, democracy is an illusion.\" — Walter Lippmann",
        "\"एक स्वतंत्र प्रेस एक विशेषाधिकार नहीं बल्कि एक महान समाज में एक जैविक आवश्यकता है। इसके बिना, लोकतंत्र एक भ्रम है।\" — वाल्टर लिपमैन"
      ],
      [
        "Reference: 'Indian Politics' by Dr. B. L. Fadia.",
        "संदर्भ: डॉ. बी. एल. फाड़िया द्वारा 'इंडियन पॉलिटिक्स'।"
      ]
    ],
    "evaluation": [
      "A critical evaluation of the Indian media landscape reveals a paradoxical situation. While the reach and volume of media have exploded with the advent of 24/7 news channels and digital platforms, the quality and credibility of journalism have demonstrably declined. The 'Godi Media' phenomenon (a colloquial term for politically subservient media) highlights a severe democratic deficit. When the watchdog becomes a lapdog of the establishment, the foundational premise of democracy—an informed citizenry—is compromised. Independent digital journalism offers a glimmer of hope but faces regulatory pressures.",
      "भारतीय मीडिया परिदृश्य का एक आलोचनात्मक मूल्यांकन एक विरोधाभासी स्थिति को उजागर करता है। जबकि 24/7 समाचार चैनलों और डिजिटल प्लेटफार्मों के आगमन के साथ मीडिया की पहुंच और मात्रा में विस्फोट हुआ है, पत्रकारिता की गुणवत्ता और विश्वसनीयता में स्पष्ट रूप से गिरावट आई है। 'गोदी मीडिया' (राजनीतिक रूप से अधीन मीडिया के लिए एक बोलचाल का शब्द) की घटना एक गंभीर लोकतांत्रिक घाटे को उजागर करती है। जब प्रहरी (watchdog) स्थापना का पालतू कुत्ता (lapdog) बन जाता है, तो लोकतंत्र का आधारभूत आधार—एक सूचित नागरिक—समझौता कर लिया जाता है। स्वतंत्र डिजिटल पत्रकारिता आशा की एक किरण पेश करती है लेकिन नियामक दबावों का सामना करती है।"
    ],
    "conclusion": [
      "In conclusion, the media is oxygen for the Indian democratic system. Its role in mobilizing public opinion and ensuring government accountability is undeniable. However, to truly serve democracy, the media must urgently self-regulate, address the perils of fake news and corporate monopolies, and return to the core ethics of objective, fearless, and independent journalism.",
      "निष्कर्ष में, मीडिया भारतीय लोकतांत्रिक व्यवस्था के लिए ऑक्सीजन है। जनमत जुटाने और सरकारी जवाबदेही सुनिश्चित करने में इसकी भूमिका निर्विवाद है। हालांकि, लोकतंत्र की सही मायने में सेवा करने के लिए, मीडिया को तत्काल आत्म-नियमन (self-regulate) करना चाहिए, नकली समाचारों और कॉर्पोरेट एकाधिकार के खतरों को दूर करना चाहिए, और उद्देश्यपूर्ण, निडर और स्वतंत्र पत्रकारिता की मुख्य नैतिकता पर लौटना चाहिए।"
    ],
    "shortQ": [
      [
        "Why is the media called the 'Fourth Estate'?",
        "मीडिया को 'चौथा स्तंभ' क्यों कहा जाता है?"
      ],
      [
        "What do you understand by 'Trial by Media'?",
        "'मीडिया द्वारा परीक्षण' (Trial by Media) से आप क्या समझते हैं?"
      ],
      [
        "What is 'Paid News'?",
        "'पेड न्यूज़' क्या है?"
      ],
      [
        "Mention two positive roles of media in democracy.",
        "लोकतंत्र में मीडिया की दो सकारात्मक भूमिकाओं का उल्लेख करें।"
      ],
      [
        "How does cross-media ownership affect news?",
        "क्रॉस-मीडिया स्वामित्व समाचारों को कैसे प्रभावित करता है?"
      ]
    ],
    "longQ": [
      [
        "Discuss the role of media in strengthening Indian democracy with suitable examples.",
        "उपयुक्त उदाहरणों के साथ भारतीय लोकतंत्र को मजबूत करने में मीडिया की भूमिका पर चर्चा करें।"
      ],
      [
        "Critically evaluate the limitations and contemporary challenges faced by the Indian media.",
        "भारतीय मीडिया द्वारा सामना की जाने वाली सीमाओं और समकालीन चुनौतियों का आलोचनात्मक मूल्यांकन करें।"
      ],
      [
        "Analyze the impact of corporatization on journalistic ethics and media independence in India.",
        "भारत में पत्रकारिता नैतिकता और मीडिया की स्वतंत्रता पर निगमीकरण के प्रभाव का विश्लेषण करें।"
      ],
      [
        "Write an essay on the rise of digital media and its impact on traditional political communication.",
        "डिजिटल मीडिया के उदय और पारंपरिक राजनीतिक संचार पर इसके प्रभाव पर एक निबंध लिखें।"
      ],
      [
        "\"A biased media is a threat to democratic survival.\" Elucidate.",
        "\"एक पक्षपाती मीडिया लोकतांत्रिक अस्तित्व के लिए खतरा है।\" स्पष्ट करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "Freedom of the Press in India is implicitly protected under which Article of the Constitution?",
          "भारत में प्रेस की स्वतंत्रता को संविधान के किस अनुच्छेद के तहत निहित रूप से संरक्षित किया गया है?"
        ],
        "opts": [
          ["Article 14", "अनुच्छेद 14"],
          ["Article 19(1)(a)", "अनुच्छेद 19(1)(a)"],
          ["Article 21", "अनुच्छेद 21"],
          ["Article 22", "अनुच्छेद 22"]
        ],
        "correct": 1
      },
      {
        "q": [
          "The concept of the 'Fourth Estate' was coined by:",
          "'फोर्थ एस्टेट' (Fourth Estate) की अवधारणा किसके द्वारा गढ़ी गई थी?"
        ],
        "opts": [
          ["Edmund Burke", "एडमंड बर्क"],
          ["John Locke", "जॉन लॉक"],
          ["Montesquieu", "मोंटेस्क्यू"],
          ["Karl Marx", "कार्ल मार्क्स"]
        ],
        "correct": 0
      },
      {
        "q": [
          "The statutory quasi-judicial body that acts as a watchdog of the print media in India is:",
          "वह वैधानिक अर्ध-न्यायिक निकाय जो भारत में प्रिंट मीडिया के प्रहरी के रूप में कार्य करता है:"
        ],
        "opts": [
          ["Prasar Bharati", "प्रसार भारती"],
          ["Press Council of India (PCI)", "भारतीय प्रेस परिषद (PCI)"],
          ["Ministry of I&B", "सूचना और प्रसारण मंत्रालय"],
          ["News Broadcasting Standards Authority", "समाचार प्रसारण मानक प्राधिकरण"]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which of the following is considered a negative aspect of contemporary media?",
          "निम्नलिखित में से किसे समकालीन मीडिया का नकारात्मक पहलू माना जाता है?"
        ],
        "opts": [
          ["Investigative journalism", "खोजपूर्ण पत्रकारिता"],
          ["Agenda setting for public good", "सार्वजनिक भलाई के लिए एजेंडा सेटिंग"],
          ["Yellow Journalism", "येलो जर्नलिज्म (पीत पत्रकारिता)"],
          ["Fact-checking", "तथ्य-जांच"]
        ],
        "correct": 2
      },
      {
        "q": [
          "RTI Act, which highly aided media investigations, was passed in the year:",
          "RTI अधिनियम, जिसने मीडिया जांच में अत्यधिक सहायता की, किस वर्ष पारित किया गया था?"
        ],
        "opts": [
          ["2000", "2000"],
          ["2005", "2005"],
          ["2010", "2010"],
          ["2014", "2014"]
        ],
        "correct": 1
      }
    ],
    "ugcNotes": [
      "For UGC NET: Remember that Freedom of the Press is not explicitly mentioned but is derived from Article 19(1)(a) - Freedom of Speech and Expression (Romesh Thappar case). The Press Council of India was established in 1966.",
      "UGC NET के लिए: याद रखें कि प्रेस की स्वतंत्रता का स्पष्ट रूप से उल्लेख नहीं किया गया है, लेकिन यह अनुच्छेद 19(1)(a) - वाक् और अभिव्यक्ति की स्वतंत्रता (रोमेश थापर मामला) से लिया गया है। भारतीय प्रेस परिषद की स्थापना 1966 में हुई थी।"
    ],
    "ugcQ": [
      [
        "Q: Who coined the term 'Manufacturing Consent'? A: Edward Herman and Noam Chomsky.",
        "प्र: 'मैन्युफैक्चरिंग कंसेंट' (Manufacturing Consent) शब्द किसने गढ़ा? उ: एडवर्ड हरमन और नोम चॉम्स्की।"
      ]
    ]
  },
  {
    "id": "t4",
    "num": 4,
    "title": [
      "Coalition Government in India",
      "भारत में गठबंधन सरकार"
    ],
    "introduction": [
      "A Coalition Government is a cabinet of a parliamentary government in which multiple political parties cooperate to form a government, reducing the dominance of any one party within that coalition. The era of coalition politics in India began at the national level in 1989 (with the V.P. Singh-led National Front), marking the end of the dominant 'Congress System'. Since then, coalition politics has profoundly reshaped the federal structure, policy-making, and political dynamics of India.",
      "गठबंधन सरकार (Coalition Government) एक संसदीय सरकार का मंत्रिमंडल है जिसमें कई राजनीतिक दल सरकार बनाने के लिए सहयोग करते हैं, जिससे उस गठबंधन के भीतर किसी एक दल का प्रभुत्व कम हो जाता है। भारत में गठबंधन की राजनीति का युग 1989 में राष्ट्रीय स्तर पर शुरू हुआ (वी.पी. सिंह के नेतृत्व वाले राष्ट्रीय मोर्चा के साथ), जो प्रमुख 'कांग्रेस प्रणाली' के अंत को चिह्नित करता है। तब से, गठबंधन की राजनीति ने भारत की संघीय संरचना, नीति-निर्माण और राजनीतिक गतिशीलता को गहराई से नया आकार दिया है।"
    ],
    "concepts": [
      {
        "heading": [
          "Features of Indian Coalition Politics",
          "भारतीय गठबंधन राजनीति की विशेषताएं"
        ],
        "body": [
          "- Ideological Heterogeneity: Coalitions in India are often formed opportunistically post-elections for power-sharing, bringing together parties with conflicting ideologies.\n- Rise of Regional Parties: Coalitions have shifted power from the Center to the States, making regional leaders 'kingmakers' in national politics.\n- National Democratic Alliance (NDA) and United Progressive Alliance (UPA): The institutionalization of pre-poll alliances divided into two major bi-polar camps.\n- Minimum Common Programme (MCP): A negotiated policy document agreed upon by coalition partners to ensure smooth functioning.",
          "- वैचारिक विषमता (Ideological Heterogeneity): भारत में गठबंधन अक्सर सत्ता-साझाकरण के लिए चुनाव के बाद अवसरवादी रूप से बनाए जाते हैं, जो परस्पर विरोधी विचारधाराओं वाले दलों को एक साथ लाते हैं।\n- क्षेत्रीय दलों का उदय: गठबंधनों ने सत्ता को केंद्र से राज्यों में स्थानांतरित कर दिया है, जिससे क्षेत्रीय नेता राष्ट्रीय राजनीति में 'किंगमेकर' बन गए हैं।\n- राष्ट्रीय जनतांत्रिक गठबंधन (NDA) और संयुक्त प्रगतिशील गठबंधन (UPA): चुनाव पूर्व गठबंधनों का संस्थानीकरण दो प्रमुख द्वि-ध्रुवीय शिविरों में विभाजित।\n- न्यूनतम साझा कार्यक्रम (MCP): सुचारू कामकाज सुनिश्चित करने के लिए गठबंधन सहयोगियों द्वारा सहमत एक बातचीत नीति दस्तावेज।"
        ]
      },
      {
        "heading": [
          "Merits and Demerits",
          "गुण और दोष"
        ],
        "body": [
          "- Merits: More representative of a diverse country; prevents the dictatorship of a single party; accommodates regional aspirations and fosters cooperative federalism.\n- Demerits: Political instability; policy paralysis due to continuous compromises; frequent mid-term elections; 'tail wagging the dog' syndrome (small parties holding the government hostage for narrow demands).",
          "- गुण: एक विविध देश का अधिक प्रतिनिधि; एक ही दल की तानाशाही को रोकता है; क्षेत्रीय आकांक्षाओं को समायोजित करता है और सहकारी संघवाद को बढ़ावा देता है।\n- दोष: राजनीतिक अस्थिरता; निरंतर समझौतों के कारण नीतिगत पक्षाघात (policy paralysis); लगातार मध्यावधि चुनाव; 'पूंछ द्वारा कुत्ते को हिलाना' सिंड्रोम (छोटे दल संकीर्ण मांगों के लिए सरकार को बंधक बनाते हैं)।"
        ]
      }
    ],
    "quotes": [
      [
        "\"The transition from a one-party dominant system to a multi-party coalition system represents the deepening of Indian democracy, accommodating regional forces at the center.\" — Rajni Kothari",
        "\"एक-दलीय प्रमुख प्रणाली से बहु-दलीय गठबंधन प्रणाली में परिवर्तन भारतीय लोकतंत्र के गहरा होने का प्रतिनिधित्व करता है, जो केंद्र में क्षेत्रीय ताकतों को समायोजित करता है।\" — रजनी कोठारी"
      ],
      [
        "Reference: 'Indian Government and Politics' by Dr. B. L. Fadia.",
        "संदर्भ: डॉ. बी. एल. फाड़िया द्वारा 'इंडियन गवर्नमेंट एंड पॉलिटिक्स'।"
      ]
    ],
    "evaluation": [
      "A critical evaluation of the coalition era (1989-2014) shows a mixed bag. On one hand, it democratized power, giving voice to marginalized castes and regional identities at the national level. On the other hand, it often led to severe policy paralysis and massive corruption scandals (like the 2G scam), as prime ministers had to compromise on governance to save the alliance. However, since 2014, the return of single-party majority governments (BJP) has sparked a new debate—whether the decisiveness of a majority government is better, or if it risks authoritarianism, making the consensus-building nature of coalitions seem desirable in retrospect.",
      "गठबंधन युग (1989-2014) का एक आलोचनात्मक मूल्यांकन एक मिश्रित परिणाम दिखाता है। एक ओर, इसने सत्ता का लोकतंत्रीकरण किया, जिससे हाशिए की जातियों और क्षेत्रीय पहचानों को राष्ट्रीय स्तर पर आवाज मिली। दूसरी ओर, इसके कारण अक्सर गंभीर नीतिगत पक्षाघात और बड़े पैमाने पर भ्रष्टाचार के घोटाले (जैसे 2G घोटाला) हुए, क्योंकि प्रधानमंत्रियों को गठबंधन बचाने के लिए शासन से समझौता करना पड़ा। हालांकि, 2014 के बाद से, एकल-दलीय बहुमत वाली सरकारों (BJP) की वापसी ने एक नई बहस छेड़ दी है—क्या बहुमत सरकार की निर्णायकता बेहतर है, या क्या यह सत्तावाद का जोखिम उठाती है, जिससे पूर्वव्यापी रूप से गठबंधनों की सर्वसम्मति-निर्माण प्रकृति वांछनीय प्रतीत होती है।"
    ],
    "conclusion": [
      "In conclusion, coalition government is an inevitable byproduct of India's social plurality translated into political multi-partyism. While it brings challenges of instability and delayed decision-making, it fundamentally safeguards the federal fabric of the nation by ensuring that no single region or ideology can monopolize national power. Coalition politics has matured in India, transitioning from fragile post-poll marriages of convenience to stable pre-poll alliances.",
      "निष्कर्ष में, गठबंधन सरकार भारत की सामाजिक बहुलता (social plurality) का एक अपरिहार्य उपोत्पाद है जिसका अनुवाद राजनीतिक बहु-दलीय व्यवस्था में किया गया है। यद्यपि यह अस्थिरता और निर्णय लेने में देरी की चुनौतियां लाता है, यह मौलिक रूप से राष्ट्र के संघीय ताने-बाने की रक्षा करता है यह सुनिश्चित करके कि कोई एक क्षेत्र या विचारधारा राष्ट्रीय शक्ति पर एकाधिकार नहीं कर सकती। भारत में गठबंधन की राजनीति परिपक्व हो गई है, जो चुनाव के बाद की नाजुक सुविधा की शादियों से स्थिर चुनाव-पूर्व गठबंधनों में बदल गई है।"
    ],
    "shortQ": [
      [
        "What is a Coalition Government?",
        "गठबंधन सरकार क्या है?"
      ],
      [
        "Define Minimum Common Programme (MCP).",
        "न्यूनतम साझा कार्यक्रम (MCP) को परिभाषित करें।"
      ],
      [
        "When did the era of coalition politics begin at the center in India?",
        "भारत में केंद्र में गठबंधन की राजनीति का युग कब शुरू हुआ?"
      ],
      [
        "Name the two major national coalition alliances in India.",
        "भारत में दो प्रमुख राष्ट्रीय गठबंधन गठजोड़ों के नाम बताइए।"
      ],
      [
        "Write one major demerit of a coalition government.",
        "गठबंधन सरकार का एक प्रमुख दोष लिखिए।"
      ]
    ],
    "longQ": [
      [
        "Trace the evolution of Coalition Governments in India since 1989.",
        "1989 के बाद से भारत में गठबंधन सरकारों के विकास का पता लगाएं।"
      ],
      [
        "Analyze the impact of coalition politics on the federal structure of India.",
        "भारत के संघीय ढांचे पर गठबंधन की राजनीति के प्रभाव का विश्लेषण करें।"
      ],
      [
        "Critically evaluate the merits and demerits of coalition governments with reference to India.",
        "भारत के संदर्भ में गठबंधन सरकारों के गुणों और दोषों का आलोचनात्मक मूल्यांकन करें।"
      ],
      [
        "\"Regional parties play the role of kingmakers in coalition politics.\" Discuss.",
        "\"क्षेत्रीय दल गठबंधन की राजनीति में किंगमेकर की भूमिका निभाते हैं।\" चर्चा करें।"
      ],
      [
        "Discuss the role of the President of India during the formation of a coalition government.",
        "गठबंधन सरकार के गठन के दौरान भारत के राष्ट्रपति की भूमिका पर चर्चा करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "The first non-Congress Prime Minister to lead a coalition government (Janata Party) at the center was:",
          "केंद्र में गठबंधन सरकार (जनता पार्टी) का नेतृत्व करने वाले पहले गैर-कांग्रेसी प्रधानमंत्री कौन थे?"
        ],
        "opts": [
          ["Charan Singh", "चरण सिंह"],
          ["Morarji Desai", "मोरारजी देसाई"],
          ["V. P. Singh", "वी. पी. सिंह"],
          ["Atal Bihari Vajpayee", "अटल बिहारी वाजपेयी"]
        ],
        "correct": 1
      },
      {
        "q": [
          "The United Progressive Alliance (UPA) was formed in which year?",
          "संयुक्त प्रगतिशील गठबंधन (UPA) का गठन किस वर्ष किया गया था?"
        ],
        "opts": [
          ["1998", "1998"],
          ["1999", "1999"],
          ["2004", "2004"],
          ["2014", "2014"]
        ],
        "correct": 2
      },
      {
        "q": [
          "Which of the following describes the 'tail wagging the dog' syndrome in coalition politics?",
          "गठबंधन की राजनीति में निम्नलिखित में से कौन 'पूंछ द्वारा कुत्ते को हिलाना' (tail wagging the dog) सिंड्रोम का वर्णन करता है?"
        ],
        "opts": [
          ["Major party ignoring minor parties", "प्रमुख दल छोटे दलों की अनदेखी कर रहा है"],
          ["Minor parties dictating terms to the major party", "छोटे दल प्रमुख दल को शर्तें तय कर रहे हैं"],
          ["President taking all decisions", "राष्ट्रपति सभी निर्णय ले रहे हैं"],
          ["Opposition supporting the government", "विपक्ष सरकार का समर्थन कर रहा है"]
        ],
        "correct": 1
      },
      {
        "q": [
          "The National Democratic Alliance (NDA) is led by which political party?",
          "राष्ट्रीय जनतांत्रिक गठबंधन (NDA) का नेतृत्व कौन सा राजनीतिक दल करता है?"
        ],
        "opts": [
          ["INC", "INC (कांग्रेस)"],
          ["CPI(M)", "CPI(M)"],
          ["BJP", "BJP"],
          ["Janata Dal", "जनता दल"]
        ],
        "correct": 2
      },
      {
        "q": [
          "A hung parliament occurs when:",
          "त्रिशंकु संसद (hung parliament) तब होती है जब:"
        ],
        "opts": [
          ["One party gets a two-thirds majority", "एक पार्टी को दो-तिहाई बहुमत मिलता है"],
          ["No single party secures an absolute majority", "किसी एक पार्टी को पूर्ण बहुमत नहीं मिलता है"],
          ["The parliament is suspended", "संसद को निलंबित कर दिया जाता है"],
          ["Elections are cancelled", "चुनाव रद्द कर दिए जाते हैं"]
        ],
        "correct": 1
      }
    ],
    "ugcNotes": [
      "For UGC NET: Be familiar with the chronology of Prime Ministers during the highly volatile coalition era of 1989-1999 (V.P. Singh, Chandra Shekhar, Narasimha Rao, Vajpayee, Deve Gowda, I.K. Gujral).",
      "UGC NET के लिए: 1989-1999 के अत्यधिक अस्थिर गठबंधन युग के दौरान प्रधानमंत्रियों के कालक्रम (वी.पी. सिंह, चंद्र शेखर, नरसिम्हा राव, वाजपेयी, देवेगौड़ा, आई.के. गुजराल) से परिचित रहें।"
    ],
    "ugcQ": [
      [
        "Q: Which was the first full-term non-Congress coalition government? A: NDA led by A.B. Vajpayee (1999-2004).",
        "प्र: पहली पूर्णकालिक गैर-कांग्रेसी गठबंधन सरकार कौन सी थी? उ: ए.बी. वाजपेयी के नेतृत्व में NDA (1999-2004)।"
      ]
    ]
  },
  {
    "id": "t5",
    "num": 5,
    "title": [
      "Autonomy of State: Special Status and Article 370",
      "राज्य की स्वायत्तता: विशेष राज्य का दर्जा और अनुच्छेद 370"
    ],
    "introduction": [
      "The debate over State Autonomy is a recurring theme in Indian federalism. While the Constitution establishes a strong Center to maintain national unity, regional aspirations often demand greater political and financial autonomy. The most profound and controversial manifestation of this autonomy was the 'Special Status' granted to Jammu and Kashmir under Article 370. The abrogation of this article in 2019 fundamentally altered the federal dynamics and reignited debates on asymmetric federalism in India.",
      "राज्य की स्वायत्तता (State Autonomy) पर बहस भारतीय संघवाद में एक आवर्ती विषय है। जबकि संविधान राष्ट्रीय एकता बनाए रखने के लिए एक मजबूत केंद्र स्थापित करता है, क्षेत्रीय आकांक्षाएं अक्सर अधिक राजनीतिक और वित्तीय स्वायत्तता की मांग करती हैं। इस स्वायत्तता की सबसे गहरी और विवादास्पद अभिव्यक्ति जम्मू और कश्मीर को अनुच्छेद 370 के तहत दिया गया 'विशेष दर्जा' (Special Status) था। 2019 में इस अनुच्छेद को निरस्त करने से संघीय गतिशीलता मौलिक रूप से बदल गई और भारत में असममित संघवाद (asymmetric federalism) पर बहस फिर से शुरू हो गई।"
    ],
    "concepts": [
      {
        "heading": [
          "Meaning of State Autonomy",
          "राज्य की स्वायत्तता का अर्थ"
        ],
        "body": [
          "State autonomy means empowering the state governments to make independent decisions regarding their internal administration and economic development without undue interference from the Central Government. It involves demands for decentralization of power, a greater share of central revenues, and restricting the misuse of Article 356 (President's Rule).",
          "राज्य की स्वायत्तता का अर्थ राज्य सरकारों को केंद्र सरकार के अनुचित हस्तक्षेप के बिना उनके आंतरिक प्रशासन और आर्थिक विकास के संबंध में स्वतंत्र निर्णय लेने के लिए सशक्त बनाना है। इसमें सत्ता के विकेंद्रीकरण की मांग, केंद्रीय राजस्व का बड़ा हिस्सा और अनुच्छेद 356 (राष्ट्रपति शासन) के दुरुपयोग को प्रतिबंधित करना शामिल है।"
        ]
      },
      {
        "heading": [
          "Article 370 and Special Status",
          "अनुच्छेद 370 और विशेष दर्जा"
        ],
        "body": [
          "- Historical Context: Drafted in Part XXI of the Constitution (Temporary, Transitional and Special Provisions), Article 370 was a negotiated settlement granting J&K a separate constitution, flag, and autonomy over all matters except defense, foreign affairs, and communications.\n- Article 35A: Stemming from Article 370, it allowed the J&K legislature to define 'permanent residents' and restrict outsiders from buying land or getting state government jobs.\n- Abrogation (2019): The Presidential Order of August 5, 2019, rendered Article 370 inoperative and bifurcated the state into two Union Territories (J&K and Ladakh), bringing it completely on par with the rest of India.",
          "- ऐतिहासिक संदर्भ: संविधान के भाग XXI (अस्थायी, संक्रमणकालीन और विशेष प्रावधान) में तैयार किया गया, अनुच्छेद 370 एक बातचीत का समझौता था जो जम्मू-कश्मीर को एक अलग संविधान, ध्वज और रक्षा, विदेशी मामलों और संचार को छोड़कर सभी मामलों पर स्वायत्तता प्रदान करता था।\n- अनुच्छेद 35A: अनुच्छेद 370 से उत्पन्न, इसने J&K विधायिका को 'स्थायी निवासियों' को परिभाषित करने और बाहरी लोगों को जमीन खरीदने या राज्य सरकार की नौकरी पाने से रोकने की अनुमति दी।\n- निरस्तीकरण (2019): 5 अगस्त, 2019 के राष्ट्रपति के आदेश ने अनुच्छेद 370 को निष्क्रिय कर दिया और राज्य को दो केंद्र शासित प्रदेशों (जम्मू-कश्मीर और लद्दाख) में विभाजित कर दिया, जिससे यह पूरी तरह से शेष भारत के बराबर आ गया।"
        ]
      }
    ],
    "quotes": [
      [
        "\"Indian federalism is not a rigid model; it is 'asymmetric', recognizing that different units have different historical trajectories and need different degrees of autonomy to integrate successfully.\" — Granville Austin",
        "\"भारतीय संघवाद एक कठोर मॉडल नहीं है; यह 'असममित' (asymmetric) है, यह पहचानते हुए कि विभिन्न इकाइयों के अलग-अलग ऐतिहासिक प्रक्षेपवक्र हैं और उन्हें सफलतापूर्वक एकीकृत करने के लिए स्वायत्तता के विभिन्न डिग्री की आवश्यकता है।\" — ग्रानविले ऑस्टिन"
      ],
      [
        "Reference: 'Indian Politics' by Dr. B. L. Fadia.",
        "संदर्भ: डॉ. बी. एल. फाड़िया द्वारा 'इंडियन पॉलिटिक्स'।"
      ]
    ],
    "evaluation": [
      "The issue of state autonomy reflects the inherent tension between national integration and regional identity. Critics argue that extreme autonomy, like that under Article 370, breeds separatism, creates a 'state within a state', and hinders socio-economic integration. Conversely, supporters of autonomy argue that forcefully centralizing power alienates marginalized regions and that 'asymmetric federalism' (such as Article 371 for North-Eastern states) is essential to accommodate India's immense diversity. The abrogation of 370 was politically popular but raised serious constitutional questions regarding the consent of the state assembly.",
      "राज्य की स्वायत्तता का मुद्दा राष्ट्रीय एकीकरण और क्षेत्रीय पहचान के बीच अंतर्निहित तनाव को दर्शाता है। आलोचकों का तर्क है कि अनुच्छेद 370 के तहत अत्यधिक स्वायत्तता अलगाववाद को जन्म देती है, 'राज्य के भीतर राज्य' बनाती है, और सामाजिक-आर्थिक एकीकरण में बाधा डालती है। इसके विपरीत, स्वायत्तता के समर्थकों का तर्क है कि सत्ता को बलपूर्वक केंद्रीकृत करना हाशिए के क्षेत्रों को अलग-थलग कर देता है और भारत की अपार विविधता को समायोजित करने के लिए 'असममित संघवाद' (जैसे पूर्वोत्तर राज्यों के लिए अनुच्छेद 371) आवश्यक है। 370 को निरस्त करना राजनीतिक रूप से लोकप्रिय था लेकिन राज्य विधानसभा की सहमति के संबंध में गंभीर संवैधानिक सवाल खड़े कर दिए।"
    ],
    "conclusion": [
      "In conclusion, the debate over autonomy and special status is central to defining the nature of Indian federalism. The abrogation of Article 370 signifies a decisive shift towards a 'One Nation, One Constitution' model. However, true federalism requires that the Center addresses the legitimate developmental and political aspirations of the states to prevent feelings of alienation and ensure a cooperative rather than coercive union.",
      "निष्कर्ष में, स्वायत्तता और विशेष राज्य के दर्जे पर बहस भारतीय संघवाद की प्रकृति को परिभाषित करने के केंद्र में है। अनुच्छेद 370 को निरस्त करना 'एक राष्ट्र, एक संविधान' मॉडल की दिशा में एक निर्णायक बदलाव का प्रतीक है। हालांकि, सच्चे संघवाद के लिए यह आवश्यक है कि केंद्र राज्यों की वैध विकासात्मक और राजनीतिक आकांक्षाओं को संबोधित करे ताकि अलगाव की भावनाओं को रोका जा सके और एक जबरदस्त (coercive) संघ के बजाय एक सहकारी (cooperative) संघ सुनिश्चित किया जा सके।"
    ],
    "shortQ": [
      [
        "What was the significance of Article 370?",
        "अनुच्छेद 370 का क्या महत्व था?"
      ],
      [
        "What did Article 35A entail?",
        "अनुच्छेद 35A में क्या शामिल था?"
      ],
      [
        "Define 'Asymmetric Federalism'.",
        "'असममित संघवाद' (Asymmetric Federalism) को परिभाषित करें।"
      ],
      [
        "When was Article 370 abrogated?",
        "अनुच्छेद 370 को कब निरस्त किया गया था?"
      ],
      [
        "Why do states demand autonomy?",
        "राज्य स्वायत्तता की मांग क्यों करते हैं?"
      ]
    ],
    "longQ": [
      [
        "Critically analyze the historical background and the provisions of Article 370.",
        "ऐतिहासिक पृष्ठभूमि और अनुच्छेद 370 के प्रावधानों का आलोचनात्मक विश्लेषण करें।"
      ],
      [
        "Discuss the political and constitutional implications of the abrogation of Article 370 in 2019.",
        "2019 में अनुच्छेद 370 को निरस्त करने के राजनीतिक और संवैधानिक निहितार्थों पर चर्चा करें।"
      ],
      [
        "Examine the demands for State Autonomy in Indian politics. Are they a threat to national integration?",
        "भारतीय राजनीति में राज्य स्वायत्तता की मांगों का परीक्षण करें। क्या वे राष्ट्रीय एकीकरण के लिए खतरा हैं?"
      ],
      [
        "Write an essay on 'Asymmetric Federalism' in India with reference to Article 371.",
        "अनुच्छेद 371 के संदर्भ में भारत में 'असममित संघवाद' पर एक निबंध लिखें।"
      ],
      [
        "Evaluate the relationship between the Center and the States in the context of autonomy demands.",
        "स्वायत्तता की मांगों के संदर्भ में केंद्र और राज्यों के बीच संबंधों का मूल्यांकन करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "Article 370 was included in which part of the Indian Constitution?",
          "अनुच्छेद 370 को भारतीय संविधान के किस भाग में शामिल किया गया था?"
        ],
        "opts": [
          ["Part III", "भाग III"],
          ["Part XVIII", "भाग XVIII"],
          ["Part XXI", "भाग XXI"],
          ["Part XX", "भाग XX"]
        ],
        "correct": 2
      },
      {
        "q": [
          "The state of Jammu & Kashmir was bifurcated into which two Union Territories?",
          "जम्मू और कश्मीर राज्य को किन दो केंद्र शासित प्रदेशों में विभाजित किया गया था?"
        ],
        "opts": [
          ["J&K and Srinagar", "जम्मू-कश्मीर और श्रीनगर"],
          ["J&K and Ladakh", "जम्मू-कश्मीर और लद्दाख"],
          ["Jammu and Kashmir", "जम्मू और कश्मीर"],
          ["Ladakh and Leh", "लद्दाख और लेह"]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which Commission is famously associated with Center-State relations and the issue of state autonomy?",
          "कौन सा आयोग मुख्य रूप से केंद्र-राज्य संबंधों और राज्य की स्वायत्तता के मुद्दे से जुड़ा है?"
        ],
        "opts": [
          ["Mandal Commission", "मंडल आयोग"],
          ["Sarkaria Commission", "सरकारिया आयोग"],
          ["Kothari Commission", "कोठारी आयोग"],
          ["Nanavati Commission", "नानावती आयोग"]
        ],
        "correct": 1
      },
      {
        "q": [
          "Article 371A gives special provisions to which state?",
          "अनुच्छेद 371A किस राज्य को विशेष प्रावधान देता है?"
        ],
        "opts": [
          ["Assam", "असम"],
          ["Nagaland", "नागालैंड"],
          ["Sikkim", "सिक्किम"],
          ["Mizoram", "मिजोरम"]
        ],
        "correct": 1
      },
      {
        "q": [
          "The abrogation of Article 370 was done through a Presidential Order known as:",
          "अनुच्छेद 370 को निरस्त करना एक राष्ट्रपति आदेश के माध्यम से किया गया था जिसे किस रूप में जाना जाता है:"
        ],
        "opts": [
          ["Constitution (Application to J&K) Order, 2019", "संविधान (J&K पर लागू) आदेश, 2019"],
          ["J&K Reorganisation Act, 1954", "जम्मू-कश्मीर पुनर्गठन अधिनियम, 1954"],
          ["Instrument of Accession Order", "इंस्ट्रूमेंट ऑफ एक्सेशन ऑर्डर"],
          ["Delhi Agreement, 2019", "दिल्ली समझौता, 2019"]
        ],
        "correct": 0
      }
    ],
    "ugcNotes": [
      "For UGC NET: Note that Article 35A was added not by a constitutional amendment under Article 368, but by a Presidential Order in 1954 under Article 370(1)(d). The J&K Reorganisation Act 2019 created the UT of J&K (with legislature) and UT of Ladakh (without legislature).",
      "UGC NET के लिए: ध्यान दें कि अनुच्छेद 35A को अनुच्छेद 368 के तहत संवैधानिक संशोधन द्वारा नहीं, बल्कि अनुच्छेद 370(1)(d) के तहत 1954 में राष्ट्रपति के आदेश द्वारा जोड़ा गया था। J&K पुनर्गठन अधिनियम 2019 ने J&K (विधायिका के साथ) का UT और लद्दाख (विधायिका के बिना) का UT बनाया।"
    ],
    "ugcQ": [
      [
        "Q: Who drafted Article 370? A: N. Gopalaswami Ayyangar.",
        "प्र: अनुच्छेद 370 का मसौदा किसने तैयार किया था? उ: एन. गोपालस्वामी अय्यंगार।"
      ]
    ]
  },
  {
    "id": "t6",
    "num": 6,
    "title": [
      "Naxalism in India",
      "भारत में नक्सलवाद"
    ],
    "introduction": [
      "Naxalism, also known as Left-Wing Extremism (LWE) or Maoism, is considered the gravest internal security threat to India. Originating in 1967 as a peasant uprising in the village of Naxalbari in West Bengal, it quickly morphed into a violent armed struggle against the Indian state. Driven by the ideology of Mao Zedong, the Naxalites aim to overthrow the democratic government through a \"protracted people's war\" and establish a communist society. The movement primarily affects the impoverished tribal belts of central and eastern India, known as the 'Red Corridor'.",
      "नक्सलवाद, जिसे वामपंथी उग्रवाद (LWE) या माओवाद भी कहा जाता है, भारत के लिए सबसे गंभीर आंतरिक सुरक्षा खतरा माना जाता है। 1967 में पश्चिम बंगाल के नक्सलबाड़ी गांव में एक किसान विद्रोह के रूप में उत्पन्न, यह जल्दी ही भारतीय राज्य के खिलाफ एक हिंसक सशस्त्र संघर्ष में बदल गया। माओ त्से तुंग की विचारधारा से प्रेरित होकर, नक्सली \"लंबे जनयुद्ध\" के माध्यम से लोकतांत्रिक सरकार को उखाड़ फेंकने और एक कम्युनिस्ट समाज स्थापित करने का लक्ष्य रखते हैं। यह आंदोलन मुख्य रूप से मध्य और पूर्वी भारत के गरीब आदिवासी क्षेत्रों को प्रभावित करता है, जिसे 'रेड कॉरिडोर' के रूप में जाना जाता है।"
    ],
    "concepts": [
      {
        "heading": [
          "Causes of Naxalism",
          "नक्सलवाद के कारण"
        ],
        "body": [
          "The roots of Naxalism are socio-economic rather than purely law-and-order issues:\n- Land Alienation: Widespread eviction of tribals and poor farmers by landlords, mining corporations, and state infrastructure projects without proper rehabilitation.\n- Exploitation and Poverty: Rampant poverty, lack of basic amenities (healthcare, education), and exploitation by local officials and money lenders.\n- Governance Deficit: Absence of effective state administration and justice delivery systems in remote forest areas creates a vacuum filled by Maoists who run parallel 'Jan Adalats' (people's courts).",
          "नक्सलवाद की जड़ें विशुद्ध रूप से कानून-व्यवस्था के मुद्दों के बजाय सामाजिक-आर्थिक हैं:\n- भूमि अलगाव: उचित पुनर्वास के बिना जमींदारों, खनन निगमों और राज्य की बुनियादी ढांचा परियोजनाओं द्वारा आदिवासियों और गरीब किसानों की व्यापक बेदखली।\n- शोषण और गरीबी: बड़े पैमाने पर गरीबी, बुनियादी सुविधाओं (स्वास्थ्य सेवा, शिक्षा) की कमी, और स्थानीय अधिकारियों और साहूकारों द्वारा शोषण।\n- शासन की कमी: दूरदराज के वन क्षेत्रों में प्रभावी राज्य प्रशासन और न्याय वितरण प्रणाली का अभाव एक शून्य पैदा करता है जिसे माओवादी भरते हैं जो समानांतर 'जन अदालतें' (people's courts) चलाते हैं।"
        ]
      },
      {
        "heading": [
          "Ideology and Strategy",
          "विचारधारा और रणनीति"
        ],
        "body": [
          "They follow the Maoist strategy of organizing the rural peasantry, creating armed guerrilla squads (like the PLGA - People's Liberation Guerrilla Army), encircling the cities from the countryside, and eventually capturing state power.",
          "वे ग्रामीण किसानों को संगठित करने, सशस्त्र गुरिल्ला दस्तों (जैसे PLGA - पीपुल्स लिबरेशन गुरिल्ला आर्मी) बनाने, ग्रामीण इलाकों से शहरों को घेरने और अंततः राज्य की सत्ता पर कब्जा करने की माओवादी रणनीति का पालन करते हैं।"
        ]
      }
    ],
    "quotes": [
      [
        "\"Naxalism is the most significant internal security threat facing our country. It is a virus that feeds on poverty, exploitation, and the absence of governance.\" — Former PM Manmohan Singh",
        "\"नक्सलवाद हमारे देश के सामने सबसे महत्वपूर्ण आंतरिक सुरक्षा खतरा है। यह एक ऐसा वायरस है जो गरीबी, शोषण और शासन की अनुपस्थिति पर पनपता है।\" — पूर्व पीएम मनमोहन सिंह"
      ],
      [
        "Reference: 'Indian Politics: Contemporary Issues' by J. C. Johari.",
        "संदर्भ: जे. सी. जौहरी द्वारा 'इंडियन पॉलिटिक्स: कंटेम्पररी इश्यूज़'।"
      ]
    ],
    "evaluation": [
      "Critically evaluating the state's response to Naxalism reveals a historical flaw: for decades, it was treated merely as a law-and-order problem to be crushed militarily (e.g., Operation Green Hunt). However, brute force alienated the local tribals further. In recent years, the government has adopted a two-pronged strategy: aggressive security operations coupled with accelerated development (building roads, schools, and implementing the Forest Rights Act). While violence has significantly reduced, the ideological appeal of Naxalism remains alive in areas where developmental justice is still a mirage.",
      "नक्सलवाद पर राज्य की प्रतिक्रिया का आलोचनात्मक मूल्यांकन एक ऐतिहासिक दोष को उजागर करता है: दशकों तक, इसे केवल एक कानून-व्यवस्था की समस्या माना जाता था जिसे सैन्य रूप से कुचल दिया जाना था (उदा. ऑपरेशन ग्रीन हंट)। हालांकि, क्रूर बल ने स्थानीय आदिवासियों को और अलग-थलग कर दिया। हाल के वर्षों में, सरकार ने दो-आयामी रणनीति अपनाई है: त्वरित विकास (सड़कें, स्कूल बनाना और वन अधिकार अधिनियम लागू करना) के साथ-साथ आक्रामक सुरक्षा अभियान। हालांकि हिंसा में काफी कमी आई है, नक्सलवाद की वैचारिक अपील उन क्षेत्रों में अभी भी जीवित है जहां विकासात्मक न्याय अभी भी एक मृगतृष्णा है।"
    ],
    "conclusion": [
      "In conclusion, Naxalism is a violent symptom of a deeper socio-economic disease—the failure of the democratic state to deliver equity and justice to its most vulnerable citizens. Military action can contain the violence, but the final defeat of Naxalism can only be achieved by winning the 'hearts and minds' of the marginalized through inclusive development, land reforms, and transparent governance.",
      "निष्कर्ष में, नक्सलवाद एक गहरी सामाजिक-आर्थिक बीमारी का एक हिंसक लक्षण है—अपने सबसे कमजोर नागरिकों को समानता और न्याय प्रदान करने में लोकतांत्रिक राज्य की विफलता। सैन्य कार्रवाई हिंसा को रोक सकती है, लेकिन नक्सलवाद की अंतिम हार केवल समावेशी विकास, भूमि सुधार और पारदर्शी शासन के माध्यम से हाशिए के लोगों के 'दिलों और दिमागों' को जीतकर ही प्राप्त की जा सकती है।"
    ],
    "shortQ": [
      [
        "Where did the Naxalite movement originate?",
        "नक्सलवादी आंदोलन की उत्पत्ति कहाँ हुई थी?"
      ],
      [
        "What is the 'Red Corridor'?",
        "'रेड कॉरिडोर' (Red Corridor) क्या है?"
      ],
      [
        "Name the primary armed wing of the Maoists.",
        "माओवादियों की प्राथमिक सशस्त्र शाखा का नाम बताइए।"
      ],
      [
        "Mention two socio-economic causes of Naxalism.",
        "नक्सलवाद के दो सामाजिक-आर्थिक कारणों का उल्लेख करें।"
      ],
      [
        "What is a 'Jan Adalat'?",
        "'जन अदालत' क्या है?"
      ]
    ],
    "longQ": [
      [
        "Trace the origin and ideological basis of the Naxalite movement in India.",
        "भारत में नक्सलवादी आंदोलन की उत्पत्ति और वैचारिक आधार का पता लगाएं।"
      ],
      [
        "Discuss the socio-economic factors responsible for the growth of Naxalism.",
        "नक्सलवाद के विकास के लिए जिम्मेदार सामाजिक-आर्थिक कारकों पर चर्चा करें।"
      ],
      [
        "Evaluate the strategies adopted by the Indian Government to counter Left-Wing Extremism.",
        "वामपंथी उग्रवाद का मुकाबला करने के लिए भारत सरकार द्वारा अपनाई गई रणनीतियों का मूल्यांकन करें।"
      ],
      [
        "\"Naxalism is a developmental issue, not just a security threat.\" Comment.",
        "\"नक्सलवाद एक विकासात्मक मुद्दा है, न कि केवल एक सुरक्षा खतरा।\" टिप्पणी करें।"
      ],
      [
        "Examine the impact of Naxalism on the tribal populations of central India.",
        "मध्य भारत की जनजातीय आबादी पर नक्सलवाद के प्रभाव का परीक्षण करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "The Naxalbari uprising of 1967 took place in which state?",
          "1967 का नक्सलबाड़ी विद्रोह किस राज्य में हुआ था?"
        ],
        "opts": [
          ["Bihar", "बिहार"],
          ["Jharkhand", "झारखंड"],
          ["West Bengal", "पश्चिम बंगाल"],
          ["Chhattisgarh", "छत्तीसगढ़"]
        ],
        "correct": 2
      },
      {
        "q": [
          "Who among the following is considered the founding father of the Naxalite movement in India?",
          "निम्नलिखित में से किसे भारत में नक्सलवादी आंदोलन का संस्थापक पिता माना जाता है?"
        ],
        "opts": [
          ["M. N. Roy", "एम. एन. रॉय"],
          ["Charu Majumdar", "चारु मजूमदार"],
          ["Kanhaiya Kumar", "कन्हैया कुमार"],
          ["Jyoti Basu", "ज्योति बसु"]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which ideology primarily drives the Naxalite movement?",
          "नक्सली आंदोलन मुख्य रूप से किस विचारधारा से प्रेरित है?"
        ],
        "opts": [
          ["Marxism-Leninism-Maoism", "मार्क्सवाद-लेनिनवाद-माओवाद"],
          ["Democratic Socialism", "लोकतांत्रिक समाजवाद"],
          ["Gandhism", "गांधीवाद"],
          ["Fascism", "फासीवाद"]
        ],
        "correct": 0
      },
      {
        "q": [
          "The major anti-Naxal operation launched by the central government in 2009 was named:",
          "2009 में केंद्र सरकार द्वारा शुरू किए गए प्रमुख नक्सल विरोधी अभियान का क्या नाम था?"
        ],
        "opts": [
          ["Operation Blue Star", "ऑपरेशन ब्लू स्टार"],
          ["Operation Green Hunt", "ऑपरेशन ग्रीन हंट"],
          ["Operation Polo", "ऑपरेशन पोलो"],
          ["Operation Vijay", "ऑपरेशन विजय"]
        ],
        "correct": 1
      },
      {
        "q": [
          "The Salwa Judum, an anti-Naxalite militia, was primarily active in which state?",
          "नक्सल विरोधी मिलिशिया, सलवा जुडूम (Salwa Judum), मुख्य रूप से किस राज्य में सक्रिय थी?"
        ],
        "opts": [
          ["Andhra Pradesh", "आंध्र प्रदेश"],
          ["Odisha", "ओडिशा"],
          ["Chhattisgarh", "छत्तीसगढ़"],
          ["Maharashtra", "महाराष्ट्र"]
        ],
        "correct": 2
      }
    ],
    "ugcNotes": [
      "For UGC NET: Charu Majumdar and Kanu Sanyal were the key figures of the 1967 uprising. In 2004, the CPI(ML) People's War Group and the Maoist Communist Centre of India (MCCI) merged to form the CPI (Maoist). Salwa Judum was declared illegal by the Supreme Court in 2011.",
      "UGC NET के लिए: चारु मजूमदार और कानू सान्याल 1967 के विद्रोह के प्रमुख व्यक्ति थे। 2004 में, CPI(ML) पीपुल्स वॉर ग्रुप और माओवादी कम्युनिस्ट सेंटर ऑफ इंडिया (MCCI) का विलय होकर CPI (माओवादी) बना। 2011 में सुप्रीम कोर्ट ने सलवा जुडूम को अवैध घोषित कर दिया था।"
    ],
    "ugcQ": [
      [
        "Q: What is SAMADHAN doctrine? A: MHA's strategy against LWE (Smart leadership, Aggressive strategy, Motivation, Actionable intel, Dashboard KPIs, Harnessing tech, Action plan for theaters, No access to financing).",
        "प्र: समाधान (SAMADHAN) सिद्धांत क्या है? उ: LWE के खिलाफ MHA की रणनीति।"
      ]
    ]
  },
  {
    "id": "t7",
    "num": 7,
    "title": [
      "Electoral Reforms",
      "चुनाव सुधार"
    ],
    "introduction": [
      "Free, fair, and periodic elections are the bedrock of any vibrant democracy. India, conducting the largest democratic exercise in human history, takes pride in its Election Commission (ECI). However, the electoral system is plagued by severe ailments such as the criminalization of politics, the excessive use of money and muscle power, and opaque political funding. Electoral Reforms refer to the systematic efforts, legal amendments, and institutional changes required to cleanse the electoral process and ensure that the mandate of the people is genuine and uncorrupted.",
      "स्वतंत्र, निष्पक्ष और आवधिक चुनाव किसी भी जीवंत लोकतंत्र का आधार हैं। भारत, जो मानव इतिहास में सबसे बड़ा लोकतांत्रिक अभ्यास आयोजित करता है, अपने चुनाव आयोग (ECI) पर गर्व करता है। हालांकि, चुनाव प्रणाली राजनीति के अपराधीकरण, धन और बाहुबल के अत्यधिक उपयोग और अपारदर्शी राजनीतिक वित्तपोषण जैसी गंभीर बीमारियों से ग्रस्त है। चुनाव सुधार (Electoral Reforms) का तात्पर्य चुनाव प्रक्रिया को साफ करने और यह सुनिश्चित करने के लिए आवश्यक व्यवस्थित प्रयासों, कानूनी संशोधनों और संस्थागत परिवर्तनों से है कि लोगों का जनादेश वास्तविक और भ्रष्टाचार मुक्त हो।"
    ],
    "concepts": [
      {
        "heading": [
          "Major Flaws in the Electoral System",
          "चुनाव प्रणाली में प्रमुख कमियां"
        ],
        "body": [
          "- Criminalization of Politics: A significant percentage of elected representatives have serious criminal cases pending against them. Political parties field 'winnable' criminals.\n- Money Power: Elections have become extraordinarily expensive, making it impossible for honest, ordinary citizens to contest. This leads to massive corruption and crony capitalism.\n- Paid News: Using media to project favorable biased coverage in exchange for money.\n- Voting System Flaws: Under the First-Past-The-Post (FPTP) system, a candidate can win even without securing a majority of the total votes, leading to disproportionate representation.",
          "- राजनीति का अपराधीकरण: निर्वाचित प्रतिनिधियों के एक महत्वपूर्ण प्रतिशत के खिलाफ गंभीर आपराधिक मामले लंबित हैं। राजनीतिक दल 'जीतने योग्य' अपराधियों को मैदान में उतारते हैं।\n- धन शक्ति: चुनाव असाधारण रूप से महंगे हो गए हैं, जिससे ईमानदार, आम नागरिकों के लिए चुनाव लड़ना असंभव हो गया है। इससे बड़े पैमाने पर भ्रष्टाचार और क्रोनी कैपिटलिज्म होता है।\n- पेड न्यूज़: पैसे के बदले अनुकूल पक्षपातपूर्ण कवरेज प्रोजेक्ट करने के लिए मीडिया का उपयोग करना।\n- मतदान प्रणाली की खामियां: फर्स्ट-पास्ट-द-पोस्ट (FPTP) प्रणाली के तहत, एक उम्मीदवार कुल मतों का बहुमत हासिल किए बिना भी जीत सकता है, जिससे असंगत प्रतिनिधित्व होता है।"
        ]
      },
      {
        "heading": [
          "Key Reforms Undertaken and Proposed",
          "किए गए और प्रस्तावित प्रमुख सुधार"
        ],
        "body": [
          "- Introduction of EVMs and VVPATs to prevent booth capturing and ensure vote verifiability.\n- Disclosure of Antecedents: Supreme Court mandated candidates to declare their criminal records, assets, and educational qualifications.\n- NOTA (None of the Above): Introduced to give voters the right to reject all candidates.\n- Political Funding: Introduction of Electoral Bonds (though highly controversial for its opacity, recently struck down by SC).\n- Proposed Reforms: State funding of elections, debarring candidates with serious criminal charges before conviction, and holding simultaneous elections ('One Nation, One Election').",
          "- बूथ कैप्चरिंग को रोकने और वोट सत्यापन सुनिश्चित करने के लिए EVM और VVPAT की शुरूआत।\n- पूर्ववृत्त का प्रकटीकरण (Disclosure of Antecedents): सुप्रीम कोर्ट ने उम्मीदवारों को अपने आपराधिक रिकॉर्ड, संपत्ति और शैक्षिक योग्यता घोषित करना अनिवार्य कर दिया।\n- NOTA (इनमें से कोई नहीं): मतदाताओं को सभी उम्मीदवारों को अस्वीकार करने का अधिकार देने के लिए पेश किया गया।\n- राजनीतिक वित्तपोषण: चुनावी बांड (Electoral Bonds) की शुरूआत (हालांकि इसकी अपारदर्शिता के लिए अत्यधिक विवादास्पद, हाल ही में SC द्वारा रद्द)।\n- प्रस्तावित सुधार: चुनावों का राज्य वित्तपोषण, सजा से पहले गंभीर आपराधिक आरोपों वाले उम्मीदवारों को रोकना, और एक साथ चुनाव ('एक राष्ट्र, एक चुनाव') आयोजित करना।"
        ]
      }
    ],
    "quotes": [
      [
        "\"The health of a democracy depends on the purity of its electoral process. If the fountainhead is poisoned, the entire system becomes toxic.\" — Justice V.R. Krishna Iyer",
        "\"लोकतंत्र का स्वास्थ्य इसकी चुनाव प्रक्रिया की पवित्रता पर निर्भर करता है। यदि उद्गम स्थल (fountainhead) में जहर है, तो पूरी व्यवस्था विषैली हो जाती है।\" — न्यायमूर्ति वी.आर. कृष्णा अय्यर"
      ],
      [
        "Reference: 'Indian Government and Politics' by Dr. B. L. Fadia.",
        "संदर्भ: डॉ. बी. एल. फाड़िया द्वारा 'इंडियन गवर्नमेंट एंड पॉलिटिक्स'।"
      ]
    ],
    "evaluation": [
      "Critically evaluating the trajectory of electoral reforms shows that while technological interventions (EVMs) have curbed physical malpractices like booth capturing, structural issues remain unaddressed. The most significant reforms (like NOTA and asset disclosure) have come through judicial activism (Supreme Court orders) rather than parliamentary legislation, indicating a severe lack of political will among parties to reform a system that benefits them. The recent striking down of the opaque Electoral Bonds scheme by the Supreme Court highlights the ongoing struggle to bring transparency to political funding.",
      "चुनाव सुधारों के प्रक्षेपवक्र का आलोचनात्मक मूल्यांकन दर्शाता है कि हालांकि तकनीकी हस्तक्षेपों (EVM) ने बूथ कैप्चरिंग जैसी शारीरिक कुप्रथाओं पर अंकुश लगाया है, लेकिन संरचनात्मक मुद्दे अभी भी अनसुलझे हैं। सबसे महत्वपूर्ण सुधार (जैसे NOTA और संपत्ति प्रकटीकरण) संसदीय कानून के बजाय न्यायिक सक्रियता (सुप्रीम कोर्ट के आदेशों) के माध्यम से आए हैं, जो पार्टियों के बीच उस प्रणाली में सुधार करने के लिए राजनीतिक इच्छाशक्ति की भारी कमी का संकेत देते हैं जो उन्हें लाभ पहुंचाती है। सुप्रीम कोर्ट द्वारा अपारदर्शी चुनावी बांड योजना को हाल ही में रद्द करना राजनीतिक वित्तपोषण में पारदर्शिता लाने के चल रहे संघर्ष को उजागर करता है।"
    ],
    "conclusion": [
      "In conclusion, Electoral Reforms are a continuous necessity to maintain the legitimacy of Indian democracy. Without curbing the unholy nexus between crime, money, and politics, democratic elections will merely become an auction. Comprehensive reforms, particularly regarding transparent political funding and internal inner-party democracy, are urgently required to empower the common citizen.",
      "निष्कर्ष में, भारतीय लोकतंत्र की वैधता बनाए रखने के लिए चुनाव सुधार एक निरंतर आवश्यकता है। अपराध, धन और राजनीति के बीच के अपवित्र गठजोड़ पर अंकुश लगाए बिना, लोकतांत्रिक चुनाव महज एक नीलामी बन जाएंगे। आम नागरिक को सशक्त बनाने के लिए विशेष रूप से पारदर्शी राजनीतिक वित्तपोषण और आंतरिक पार्टी लोकतंत्र के संबंध में व्यापक सुधारों की तत्काल आवश्यकता है।"
    ],
    "shortQ": [
      [
        "What does VVPAT stand for?",
        "VVPAT का पूर्ण रूप क्या है?"
      ],
      [
        "What is the significance of the NOTA option?",
        "NOTA विकल्प का क्या महत्व है?"
      ],
      [
        "What is meant by the 'Criminalization of Politics'?",
        "'राजनीति के अपराधीकरण' का क्या अर्थ है?"
      ],
      [
        "Name one committee related to Electoral Reforms in India.",
        "भारत में चुनाव सुधारों से संबंधित किसी एक समिति का नाम बताइए।"
      ],
      [
        "Why were Electoral Bonds introduced?",
        "चुनावी बांड (Electoral Bonds) क्यों पेश किए गए थे?"
      ]
    ],
    "longQ": [
      [
        "Discuss the major defects in the Indian electoral system.",
        "भारतीय चुनाव प्रणाली के प्रमुख दोषों पर चर्चा करें।"
      ],
      [
        "Critically evaluate the steps taken by the Election Commission and the Judiciary towards electoral reforms.",
        "चुनाव सुधारों की दिशा में चुनाव आयोग और न्यायपालिका द्वारा उठाए गए कदमों का आलोचनात्मक मूल्यांकन करें।"
      ],
      [
        "Examine the issue of criminalization of politics. What measures can be taken to stop it?",
        "राजनीति के अपराधीकरण के मुद्दे का परीक्षण करें। इसे रोकने के लिए क्या उपाय किए जा सकते हैं?"
      ],
      [
        "Write a detailed note on the debate surrounding 'One Nation, One Election'.",
        "'एक राष्ट्र, एक चुनाव' से जुड़ी बहस पर एक विस्तृत नोट लिखें।"
      ],
      [
        "Analyze the role of money power in Indian elections and the challenges in regulating political funding.",
        "भारतीय चुनावों में धन शक्ति की भूमिका और राजनीतिक वित्तपोषण को विनियमित करने की चुनौतियों का विश्लेषण करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "EVMs (Electronic Voting Machines) were first used on an experimental basis in 1982 in which state?",
          "EVM (इलेक्ट्रॉनिक वोटिंग मशीन) का पहली बार 1982 में प्रायोगिक आधार पर किस राज्य में उपयोग किया गया था?"
        ],
        "opts": [
          ["Gujarat", "गुजरात"],
          ["Kerala", "केरल"],
          ["Karnataka", "कर्नाटक"],
          ["Goa", "गोवा"]
        ],
        "correct": 1
      },
      {
        "q": [
          "The option of NOTA (None of the Above) was introduced in EVMs following a Supreme Court directive in which year?",
          "किस वर्ष सुप्रीम कोर्ट के निर्देश के बाद EVM में NOTA (इनमें से कोई नहीं) का विकल्प पेश किया गया था?"
        ],
        "opts": [
          ["2004", "2004"],
          ["2009", "2009"],
          ["2013", "2013"],
          ["2019", "2019"]
        ],
        "correct": 2
      },
      {
        "q": [
          "Which committee is prominently known for its recommendations on State Funding of Elections?",
          "कौन सी समिति मुख्य रूप से चुनावों के राज्य वित्तपोषण पर अपनी सिफारिशों के लिए जानी जाती है?"
        ],
        "opts": [
          ["Dinesh Goswami Committee", "दिनेश गोस्वामी समिति"],
          ["Indrajit Gupta Committee", "इंद्रजीत गुप्ता समिति"],
          ["Tarkunde Committee", "तारकुंडे समिति"],
          ["Vohra Committee", "वोहरा समिति"]
        ],
        "correct": 1
      },
      {
        "q": [
          "The Vohra Committee (1993) was primarily constituted to study:",
          "वोहरा समिति (1993) मुख्य रूप से किसके अध्ययन के लिए गठित की गई थी?"
        ],
        "opts": [
          ["Voting age reduction", "मतदान की आयु कम करना"],
          ["EVM manipulation", "EVM हेरफेर"],
          ["Nexus between politicians and criminals", "राजनेताओं और अपराधियों के बीच साठगांठ"],
          ["Simultaneous elections", "एक साथ चुनाव"]
        ],
        "correct": 2
      },
      {
        "q": [
          "Under which section of the Representation of the People Act, 1951 can a person be disqualified upon conviction?",
          "जनप्रतिनिधित्व अधिनियम, 1951 की किस धारा के तहत किसी व्यक्ति को सजा होने पर अयोग्य ठहराया जा सकता है?"
        ],
        "opts": [
          ["Section 4", "धारा 4"],
          ["Section 8", "धारा 8"],
          ["Section 12", "धारा 12"],
          ["Section 123", "धारा 123"]
        ],
        "correct": 1
      }
    ],
    "ugcNotes": [
      "For UGC NET: Important Committees on Electoral Reforms: Tarkunde (1974), Dinesh Goswami (1990 - recommended EVMs), Vohra (1993 - on criminal-political nexus), Indrajit Gupta (1998 - state funding). Article 324 deals with the Election Commission.",
      "UGC NET के लिए: चुनाव सुधारों पर महत्वपूर्ण समितियां: तारकुंडे (1974), दिनेश गोस्वामी (1990 - EVM की सिफारिश), वोहरा (1993 - आपराधिक-राजनीतिक गठजोड़ पर), इंद्रजीत गुप्ता (1998 - राज्य वित्तपोषण)। अनुच्छेद 324 चुनाव आयोग से संबंधित है।"
    ],
    "ugcQ": [
      [
        "Q: When was the voting age reduced from 21 to 18? A: By the 61st Constitutional Amendment Act, 1988.",
        "प्र: मतदान की आयु 21 से घटाकर 18 वर्ष कब की गई? उ: 61वें संविधान संशोधन अधिनियम, 1988 द्वारा।"
      ]
    ]
  },
  {
    "id": "t8",
    "num": 8,
    "title": [
      "Impact of Caste, Religion, Region and Language",
      "जाति, धर्म, क्षेत्र और भाषा का प्रभाव"
    ],
    "introduction": [
      "Indian politics is fundamentally characterized by identity politics, where primordial loyalties like Caste, Religion, Region, and Language play a decisive role in shaping political behavior, party formation, and electoral outcomes. While modernization theorists predicted that these traditional identities would fade away with economic development, in India, democracy has paradoxically revitalized them. They serve as the primary grammar of political mobilization in contemporary India.",
      "भारतीय राजनीति मूल रूप से पहचान की राजनीति (identity politics) की विशेषता है, जहां जाति, धर्म, क्षेत्र और भाषा जैसी आदिम वफादारी (primordial loyalties) राजनीतिक व्यवहार, पार्टी निर्माण और चुनावी परिणामों को आकार देने में निर्णायक भूमिका निभाती हैं। जबकि आधुनिकीकरण सिद्धांतकारों ने भविष्यवाणी की थी कि ये पारंपरिक पहचान आर्थिक विकास के साथ फीकी पड़ जाएंगी, भारत में, लोकतंत्र ने विरोधाभासी रूप से उन्हें पुनर्जीवित किया है। वे समकालीन भारत में राजनीतिक लामबंदी के प्राथमिक व्याकरण के रूप में कार्य करते हैं।"
    ],
    "concepts": [
      {
        "heading": [
          "Caste and Politics (Politicization of Caste)",
          "जाति और राजनीति (जाति का राजनीतिकरण)"
        ],
        "body": [
          "Instead of politics destroying caste, caste has adapted to politics. Parties select candidates based on the dominant caste of a constituency (caste arithmetic). The post-Mandal era saw the spectacular rise of OBC, Dalit, and regional parties (like SP, BSP, RJD) that explicitly seek power based on caste empowerment.",
          "राजनीति के जाति को नष्ट करने के बजाय, जाति ने खुद को राजनीति के अनुकूल बना लिया है। पार्टियां एक निर्वाचन क्षेत्र की प्रमुख जाति (caste arithmetic) के आधार पर उम्मीदवारों का चयन करती हैं। मंडल के बाद के युग में OBC, दलित और क्षेत्रीय दलों (जैसे SP, BSP, RJD) का शानदार उदय देखा गया, जो स्पष्ट रूप से जाति सशक्तिकरण के आधार पर सत्ता चाहते हैं।"
        ]
      },
      {
        "heading": [
          "Religion in Politics",
          "राजनीति में धर्म"
        ],
        "body": [
          "Religion provides a powerful emotional tool for mobilization. The rise of Hindutva politics (BJP) successfully mobilized the majority Hindu community across caste lines. Conversely, minority vote-bank politics involves parties appealing to Muslim or Christian voters as a monolithic block, often leading to communal polarization.",
          "धर्म लामबंदी के लिए एक शक्तिशाली भावनात्मक उपकरण प्रदान करता है। हिंदुत्व की राजनीति (BJP) के उदय ने बहुसंख्यक हिंदू समुदाय को जातिगत रेखाओं से परे सफलतापूर्वक लामबंद किया। इसके विपरीत, अल्पसंख्यक वोट-बैंक की राजनीति में पार्टियों द्वारा मुस्लिम या ईसाई मतदाताओं से एक अखंड ब्लॉक के रूप में अपील करना शामिल है, जिससे अक्सर सांप्रदायिक ध्रुवीकरण होता है।"
        ]
      },
      {
        "heading": [
          "Region and Language",
          "क्षेत्र और भाषा"
        ],
        "body": [
          "- Region: Uneven development leads to regionalism. It manifests as demands for new states (e.g., Telangana, Jharkhand) or greater autonomy, giving birth to powerful regional parties (DMK, TMC, BJD).\n- Language: Language is closely tied to cultural identity. The linguistic reorganization of states (1956) was a major political event. Language continues to be a sensitive political issue (e.g., anti-Hindi imposition protests in the South).",
          "- क्षेत्र: असमान विकास क्षेत्रवाद को जन्म देता है। यह नए राज्यों (उदा. तेलंगाना, झारखंड) या अधिक स्वायत्तता की मांगों के रूप में प्रकट होता है, जिससे शक्तिशाली क्षेत्रीय दलों (DMK, TMC, BJD) का जन्म होता है।\n- भाषा: भाषा सांस्कृतिक पहचान से निकटता से जुड़ी हुई है। राज्यों का भाषाई पुनर्गठन (1956) एक बड़ी राजनीतिक घटना थी। भाषा एक संवेदनशील राजनीतिक मुद्दा बनी हुई है (उदा. दक्षिण में हिंदी थोपने का विरोध)।"
        ]
      }
    ],
    "quotes": [
      [
        "\"In India, people do not cast their vote, they vote their caste.\" — Popular Political Adage (often attributed to various sociologists)",
        "\"भारत में, लोग अपना वोट नहीं डालते, वे अपनी जाति को वोट देते हैं।\" — लोकप्रिय राजनीतिक कहावत"
      ],
      [
        "Reference: 'Caste in Indian Politics' by Rajni Kothari.",
        "संदर्भ: रजनी कोठारी द्वारा 'कास्ट इन इंडियन पॉलिटिक्स'।"
      ]
    ],
    "evaluation": [
      "Evaluating the impact of these factors presents a paradox. Positively, the mobilization of caste and region has led to the 'silent revolution' (Christophe Jaffrelot)—the democratization of power where historically marginalized groups have gained political voice and representation. Negatively, it has severely fragmented the polity, shifting the focus of elections from development, economy, and governance (issues of substance) to emotional identity appeals and exclusionary politics. The overarching dominance of identity politics often masks elite capture within these very communities.",
      "इन कारकों के प्रभाव का मूल्यांकन एक विरोधाभास प्रस्तुत करता है। सकारात्मक रूप से, जाति और क्षेत्र की लामबंदी ने 'मौन क्रांति' (क्रिस्टोफ़ जाफ्रेलॉट)—सत्ता के लोकतंत्रीकरण को जन्म दिया है जहां ऐतिहासिक रूप से हाशिए पर रहने वाले समूहों ने राजनीतिक आवाज और प्रतिनिधित्व प्राप्त किया है। नकारात्मक रूप से, इसने राजनीति को गंभीर रूप से विखंडित कर दिया है, चुनावों का ध्यान विकास, अर्थव्यवस्था और शासन (सार के मुद्दों) से हटाकर भावनात्मक पहचान की अपील और बहिष्करण की राजनीति पर केंद्रित कर दिया है। पहचान की राजनीति का व्यापक प्रभुत्व अक्सर इन्हीं समुदायों के भीतर अभिजात वर्ग के कब्जे को छुपाता है।"
    ],
    "conclusion": [
      "In conclusion, caste, religion, region, and language are not mere archaic remnants; they are the active, driving engines of Indian electoral politics. While they have served to deepen democracy by bringing the marginalized into the political fold, the ultimate maturity of Indian democracy will depend on its ability to transition from 'identity-based' politics to 'issue-based' developmental politics.",
      "निष्कर्ष में, जाति, धर्म, क्षेत्र और भाषा केवल पुरातन अवशेष नहीं हैं; वे भारतीय चुनावी राजनीति के सक्रिय, प्रेरक इंजन हैं। यद्यपि उन्होंने हाशिए के लोगों को राजनीतिक तह में लाकर लोकतंत्र को गहरा करने का काम किया है, लेकिन भारतीय लोकतंत्र की अंतिम परिपक्वता 'पहचान-आधारित' राजनीति से 'मुद्दा-आधारित' विकासात्मक राजनीति में संक्रमण करने की क्षमता पर निर्भर करेगी।"
    ],
    "shortQ": [
      [
        "What is meant by the 'politicization of caste'?",
        "'जाति के राजनीतिकरण' से क्या तात्पर्य है?"
      ],
      [
        "How does regionalism influence Indian politics?",
        "क्षेत्रवाद भारतीय राजनीति को कैसे प्रभावित करता है?"
      ],
      [
        "Give two examples of political parties based primarily on regional identity.",
        "मुख्य रूप से क्षेत्रीय पहचान पर आधारित राजनीतिक दलों के दो उदाहरण दें।"
      ],
      [
        "What was the basis for the reorganization of Indian states in 1956?",
        "1956 में भारतीय राज्यों के पुनर्गठन का आधार क्या था?"
      ],
      [
        "What is 'Vote-bank politics'?",
        "'वोट-बैंक की राजनीति' क्या है?"
      ]
    ],
    "longQ": [
      [
        "Analyze the role of Caste in Indian politics with special reference to the post-Mandal era.",
        "मंडल के बाद के युग के विशेष संदर्भ में भारतीय राजनीति में जाति की भूमिका का विश्लेषण करें।"
      ],
      [
        "Discuss how religion has been used as an instrument of political mobilization in contemporary India.",
        "चर्चा करें कि समकालीन भारत में धर्म का उपयोग राजनीतिक लामबंदी के साधन के रूप में कैसे किया गया है।"
      ],
      [
        "Evaluate the impact of language and regionalism on the unity of the Indian nation.",
        "भारतीय राष्ट्र की एकता पर भाषा और क्षेत्रवाद के प्रभाव का मूल्यांकन करें।"
      ],
      [
        "\"In India, politics uses caste, and caste uses politics.\" Discuss this statement.",
        "\"भारत में, राजनीति जाति का उपयोग करती है, और जाति राजनीति का उपयोग करती है।\" इस कथन पर चर्चा करें।"
      ],
      [
        "Critically evaluate whether identity politics is a boon or a bane for Indian democracy.",
        "आलोचनात्मक मूल्यांकन करें कि पहचान की राजनीति भारतीय लोकतंत्र के लिए वरदान है या अभिशाप।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "The book 'Caste in Indian Politics' is authored by:",
          "पुस्तक 'कास्ट इन इंडियन पॉलिटिक्स' किसके द्वारा लिखी गई है?"
        ],
        "opts": [
          ["M. N. Srinivas", "एम. एन. श्रीनिवास"],
          ["Rajni Kothari", "रजनी कोठारी"],
          ["Christophe Jaffrelot", "क्रिस्टोफ़ जाफ्रेलॉट"],
          ["Paul Brass", "पॉल ब्रास"]
        ],
        "correct": 1
      },
      {
        "q": [
          "The term 'Sanskritization', which explains social mobility in the caste system, was coined by:",
          "'संस्कृतिकरण' (Sanskritization) शब्द, जो जाति व्यवस्था में सामाजिक गतिशीलता की व्याख्या करता है, किसके द्वारा गढ़ा गया था?"
        ],
        "opts": [
          ["B. R. Ambedkar", "बी. आर. अंबेडकर"],
          ["M. N. Srinivas", "एम. एन. श्रीनिवास"],
          ["G. S. Ghurye", "जी. एस. घुर्ये"],
          ["Louis Dumont", "लुई ड्यूमॉन्ट"]
        ],
        "correct": 1
      },
      {
        "q": [
          "The States Reorganisation Commission (1953) which recommended the linguistic reorganization of states was headed by:",
          "राज्य पुनर्गठन आयोग (1953) जिसने राज्यों के भाषाई पुनर्गठन की सिफारिश की थी, की अध्यक्षता किसने की थी?"
        ],
        "opts": [
          ["Sardar Patel", "सरदार पटेल"],
          ["Fazal Ali", "फजल अली"],
          ["K. M. Panikkar", "के. एम. पणिक्कर"],
          ["H. N. Kunzru", "एच. एन. कुंजरू"]
        ],
        "correct": 1
      },
      {
        "q": [
          "The phenomenon of lower castes asserting political power in North India during the 1990s is termed by Christophe Jaffrelot as:",
          "1990 के दशक के दौरान उत्तर भारत में निचली जातियों द्वारा राजनीतिक सत्ता का दावा करने की घटना को क्रिस्टोफ़ जाफ्रेलॉट द्वारा क्या नाम दिया गया है?"
        ],
        "opts": [
          ["The Great Awakening", "द ग्रेट अवेकनिंग"],
          ["The Silent Revolution", "मूक क्रांति (The Silent Revolution)"],
          ["Subaltern Uprising", "सबाल्टर्न विद्रोह"],
          ["Mandalization", "मंडलीकरण"]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which of the following is the oldest regional party in India?",
          "निम्नलिखित में से कौन भारत का सबसे पुराना क्षेत्रीय दल है?"
        ],
        "opts": [
          ["Telugu Desam Party (TDP)", "तेलुगु देशम पार्टी (TDP)"],
          ["Shiv Sena", "शिवसेना"],
          ["Shiromani Akali Dal (SAD)", "शिरोमणि अकाली दल (SAD)"],
          ["Dravida Munnetra Kazhagam (DMK)", "द्रविड़ मुनेत्र कड़गम (DMK)"]
        ],
        "correct": 2
      }
    ],
    "ugcNotes": [
      "For UGC NET: Be familiar with the key concepts of Rajni Kothari (Politicization of Caste), M.N. Srinivas (Sanskritization and Dominant Caste), and Christophe Jaffrelot (Silent Revolution). Know the States Reorganisation Act 1956.",
      "UGC NET के लिए: रजनी कोठारी (जाति का राजनीतिकरण), एम.एन. श्रीनिवास (संस्कृतिकरण और प्रमुख जाति), और क्रिस्टोफ़ जाफ्रेलॉट (मूक क्रांति) की प्रमुख अवधारणाओं से परिचित रहें। राज्य पुनर्गठन अधिनियम 1956 को जानें।"
    ],
    "ugcQ": [
      [
        "Q: Who coined the term 'Dominant Caste'? A: M. N. Srinivas.",
        "प्र: 'प्रमुख जाति' (Dominant Caste) शब्द किसने गढ़ा? उ: एम. एन. श्रीनिवास।"
      ]
    ]
  }
];

export default function ContemporaryIssuesPage() {
  const { language } = useAppStore();
  const paperTitle = language === 'en' ? 'PSCE-414C: Contemporary Issues of Indian Politics' : 'PSCE-414C: भारतीय राजनीति के समकालीन मुद्दे';
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

        <div className="bg-gradient-to-r from-rose-600 to-pink-700 rounded-2xl p-5 text-white mb-8">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">{t('Paper Code: PSCE-414C', 'पेपर कोड: PSCE-414C')}</span>
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
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
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
            {t('All 8 Topics Complete! Full PSCE-414C notes with 5-part structure, MCQs & UGC NET Prep ready.', 'सभी 8 विषय पूर्ण! 5-भाग संरचना, MCQ और UGC NET तैयारी के साथ संपूर्ण PSCE-414C नोट्स तैयार।')}
          </p>
        </div>
      </div>
    </div>
  );
}
