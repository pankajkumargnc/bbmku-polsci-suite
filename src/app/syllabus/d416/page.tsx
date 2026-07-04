'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { ArrowLeft, BookOpen, ChevronDown, CheckCircle2, Quote, AlertTriangle, Lightbulb, GraduationCap, ClipboardList, Info } from 'lucide-react';
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
      "Introduction of Research Methodology",
      "अनुसंधान पद्धति (Research Methodology) का परिचय"
    ],
    "introduction": [
      "Research is a logical and systematic search for new and useful information on a particular topic. It is an investigation of finding solutions to scientific and social problems through objective and systematic analysis. Research Methodology is the specific procedures or techniques used to identify, select, process, and analyze information about a topic. It provides a blueprint for conducting research, ensuring that the results are valid, reliable, and scientifically sound.",
      "अनुसंधान (Research) किसी विशेष विषय पर नई और उपयोगी जानकारी के लिए एक तार्किक और व्यवस्थित खोज है। यह वस्तुनिष्ठ और व्यवस्थित विश्लेषण के माध्यम से वैज्ञानिक और सामाजिक समस्याओं के समाधान खोजने की एक जांच है। अनुसंधान पद्धति (Research Methodology) किसी विषय के बारे में जानकारी की पहचान करने, चुनने, संसाधित करने और विश्लेषण करने के लिए उपयोग की जाने वाली विशिष्ट प्रक्रियाएं या तकनीकें हैं। यह अनुसंधान करने के लिए एक खाका (blueprint) प्रदान करता है, यह सुनिश्चित करता है कि परिणाम मान्य, विश्वसनीय और वैज्ञानिक रूप से सही हैं।"
    ],
    "concepts": [
      {
        "heading": [
          "Meaning and Objectives of Research",
          "अनुसंधान का अर्थ और उद्देश्य"
        ],
        "body": [
          "- Meaning: The word 'research' is derived from the French word 'recherche', which means to go about seeking. It is a systematic inquiry to describe, explain, predict, and control the observed phenomenon.\n- Objectives: To gain familiarity with a phenomenon or to achieve new insights into it (exploratory or formulative research); to portray accurately the characteristics of a particular individual, situation or a group (descriptive research); to determine the frequency with which something occurs or with which it is associated with something else (diagnostic research); to test a hypothesis of a causal relationship between variables (hypothesis-testing research).",
          "- अर्थ: 'अनुसंधान' शब्द फ्रांसीसी शब्द 'recherche' से लिया गया है, जिसका अर्थ है खोजने जाना। यह देखी गई घटना का वर्णन करने, समझाने, भविष्यवाणी करने और नियंत्रित करने के लिए एक व्यवस्थित जांच है।\n- उद्देश्य: किसी घटना से परिचित होना या उसमें नई अंतर्दृष्टि प्राप्त करना (खोजपूर्ण या रचनात्मक अनुसंधान); किसी विशेष व्यक्ति, स्थिति या समूह की विशेषताओं को सटीक रूप से चित्रित करना (वर्णनात्मक अनुसंधान); वह आवृत्ति निर्धारित करना जिसके साथ कुछ होता है या जिसके साथ यह किसी अन्य चीज से जुड़ा होता है (नैदानिक अनुसंधान); चरों (variables) के बीच एक कारण संबंध की परिकल्पना का परीक्षण करना (परिकल्पना-परीक्षण अनुसंधान)।"
        ]
      },
      {
        "heading": [
          "Research Methods vs. Research Methodology",
          "अनुसंधान विधियां बनाम अनुसंधान पद्धति"
        ],
        "body": [
          "Research Methods refer to the behavior and instruments used in selecting and constructing research technique (e.g., surveys, observation). Research Methodology is the science of studying how research is done scientifically; it is the logic behind the methods we use in the context of our research study and explains why we are using a particular method or technique and why we are not using others so that research results are capable of being evaluated either by the researcher himself or by others.",
          "अनुसंधान विधियां (Research Methods) अनुसंधान तकनीक (जैसे, सर्वेक्षण, अवलोकन) के चयन और निर्माण में प्रयुक्त व्यवहार और उपकरणों को संदर्भित करती हैं। अनुसंधान पद्धति (Research Methodology) यह अध्ययन करने का विज्ञान है कि अनुसंधान वैज्ञानिक रूप से कैसे किया जाता है; यह हमारे शोध अध्ययन के संदर्भ में हमारे द्वारा उपयोग की जाने वाली विधियों के पीछे का तर्क है और यह बताता है कि हम किसी विशेष विधि या तकनीक का उपयोग क्यों कर रहे हैं और हम दूसरों का उपयोग क्यों नहीं कर रहे हैं ताकि शोध परिणामों का मूल्यांकन शोधकर्ता द्वारा स्वयं या दूसरों द्वारा किया जा सके।"
        ]
      }
    ],
    "quotes": [
      [
        "\"Research is a systematized effort to gain new knowledge.\" — Redman and Mory",
        "\"अनुसंधान नए ज्ञान प्राप्त करने का एक व्यवस्थित प्रयास है।\" — रेडमैन और मोरी"
      ],
      [
        "Reference: 'Research Methodology (Methods and Techniques)' by C.R. Kothari.",
        "संदर्भ: सी.आर. कोठारी द्वारा 'रिसर्च मेथडोलॉजी (मेथड्स एंड टेक्निक्स)'।"
      ]
    ],
    "evaluation": [
      "Critically evaluating the field of research methodology reveals its dual nature as both an art and a science. While rigid methodologies ensure objectivity and replicability (crucial for hard sciences), an over-reliance on quantitative methods can obscure the subjective, human elements essential in social science research. A good research methodology must balance rigorous, standardized procedures with the flexibility needed to capture nuanced, qualitative realities, adapting to the specific context of the research problem.",
      "अनुसंधान पद्धति के क्षेत्र का आलोचनात्मक मूल्यांकन इसकी दोहरी प्रकृति को एक कला और विज्ञान दोनों के रूप में उजागर करता है। जबकि कठोर पद्धतियां निष्पक्षता और प्रतिकृति (कठिन विज्ञानों के लिए महत्वपूर्ण) सुनिश्चित करती हैं, मात्रात्मक विधियों (quantitative methods) पर अत्यधिक निर्भरता सामाजिक विज्ञान अनुसंधान में आवश्यक व्यक्तिपरक, मानवीय तत्वों को अस्पष्ट कर सकती है। एक अच्छी अनुसंधान पद्धति को कठोर, मानकीकृत प्रक्रियाओं को सूक्ष्म, गुणात्मक वास्तविकताओं (qualitative realities) को पकड़ने के लिए आवश्यक लचीलेपन के साथ संतुलित करना चाहिए, अनुसंधान समस्या के विशिष्ट संदर्भ को अपनाना चाहिए।"
    ],
    "conclusion": [
      "In conclusion, understanding Research Methodology is the foundational step for any aspiring researcher. It dictates the validity of the entire research endeavor. A well-defined methodology not only guides the researcher like a compass but also allows the academic community to critically evaluate, replicate, and validate the findings, thereby expanding the boundaries of human knowledge.",
      "निष्कर्ष में, अनुसंधान पद्धति को समझना किसी भी महत्वाकांक्षी शोधकर्ता के लिए मूलभूत कदम है। यह संपूर्ण शोध प्रयास की वैधता (validity) निर्धारित करता है। एक अच्छी तरह से परिभाषित पद्धति न केवल एक कंपास की तरह शोधकर्ता का मार्गदर्शन करती है, बल्कि अकादमिक समुदाय को निष्कर्षों का आलोचनात्मक मूल्यांकन करने, उन्हें दोहराने (replicate) और मान्य करने की अनुमति देती है, जिससे मानव ज्ञान की सीमाओं का विस्तार होता है।"
    ],
    "shortQ": [
      [
        "Define 'Research' in your own words.",
        "अपने शब्दों में 'अनुसंधान' (Research) को परिभाषित करें।"
      ],
      [
        "What is the difference between Research Method and Research Methodology?",
        "अनुसंधान विधि (Research Method) और अनुसंधान पद्धति (Research Methodology) के बीच क्या अंतर है?"
      ],
      [
        "State any two objectives of research.",
        "अनुसंधान के किन्हीं दो उद्देश्यों का उल्लेख करें।"
      ],
      [
        "Why is it important to have a well-defined research methodology?",
        "एक अच्छी तरह से परिभाषित अनुसंधान पद्धति का होना क्यों महत्वपूर्ण है?"
      ],
      [
        "What is diagnostic research?",
        "नैदानिक अनुसंधान (Diagnostic research) क्या है?"
      ]
    ],
    "longQ": [
      [
        "Discuss the meaning and significance of Research in Social Sciences.",
        "सामाजिक विज्ञान में अनुसंधान के अर्थ और महत्व पर चर्चा करें।"
      ],
      [
        "Elucidate the primary objectives of undertaking a research study.",
        "एक शोध अध्ययन शुरू करने के प्राथमिक उद्देश्यों को स्पष्ट करें।"
      ],
      [
        "Distinguish between Research Methods and Research Methodology with suitable examples.",
        "उपयुक्त उदाहरणों के साथ अनुसंधान विधियों और अनुसंधान पद्धति के बीच अंतर स्पष्ट करें।"
      ],
      [
        "Critically evaluate the role of objectivity and subjectivity in political science research.",
        "राजनीति विज्ञान अनुसंधान में निष्पक्षता (objectivity) और व्यक्तिपरकता (subjectivity) की भूमिका का आलोचनात्मक मूल्यांकन करें।"
      ],
      [
        "What are the main challenges faced by a researcher while selecting a research methodology?",
        "शोध पद्धति का चयन करते समय शोधकर्ता को किन मुख्य चुनौतियों का सामना करना पड़ता है?"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "The word 'research' is derived from which language?",
          "'रिसर्च' शब्द किस भाषा से लिया गया है?"
        ],
        "opts": [
          ["Latin", "लैटिन"],
          ["French", "फ्रेंच"],
          ["Greek", "ग्रीक"],
          ["German", "जर्मन"]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which of the following describes finding solutions to a problem through systematic analysis?",
          "निम्नलिखित में से कौन व्यवस्थित विश्लेषण के माध्यम से किसी समस्या के समाधान खोजने का वर्णन करता है?"
        ],
        "opts": [
          ["Speculation", "अटकलें (Speculation)"],
          ["Hypothesis", "परिकल्पना (Hypothesis)"],
          ["Research", "अनुसंधान (Research)"],
          ["Observation", "अवलोकन (Observation)"]
        ],
        "correct": 2
      },
      {
        "q": [
          "Research methodology is defined as:",
          "अनुसंधान पद्धति (Research methodology) को इस प्रकार परिभाषित किया गया है:"
        ],
        "opts": [
          ["The specific tools used for data collection", "डेटा संग्रह के लिए उपयोग किए जाने वाले विशिष्ट उपकरण"],
          ["The science of studying how research is done scientifically", "वैज्ञानिक रूप से शोध कैसे किया जाता है, इसका अध्ययन करने का विज्ञान"],
          ["A list of reference books", "संदर्भ पुस्तकों की एक सूची"],
          ["The final chapter of a thesis", "थीसिस का अंतिम अध्याय"]
        ],
        "correct": 1
      },
      {
        "q": [
          "Research undertaken to achieve new insights into a phenomenon is called:",
          "किसी घटना में नई अंतर्दृष्टि प्राप्त करने के लिए किए गए शोध को क्या कहा जाता है:"
        ],
        "opts": [
          ["Descriptive research", "वर्णनात्मक अनुसंधान"],
          ["Diagnostic research", "नैदानिक अनुसंधान"],
          ["Exploratory research", "खोजपूर्ण (Exploratory) अनुसंधान"],
          ["Historical research", "ऐतिहासिक अनुसंधान"]
        ],
        "correct": 2
      },
      {
        "q": [
          "Who among the following authored the popular book 'Research Methodology: Methods and Techniques'?",
          "निम्नलिखित में से किसने लोकप्रिय पुस्तक 'रिसर्च मेथडोलॉजी: मेथड्स एंड टेक्निक्स' लिखी है?"
        ],
        "opts": [
          ["John W. Best", "जॉन डब्ल्यू. बेस्ट"],
          ["C.R. Kothari", "सी.आर. कोठारी"],
          ["Karl Popper", "कार्ल पॉपर"],
          ["Thomas Kuhn", "थॉमस कुह्न"]
        ],
        "correct": 1
      }
    ],
    "ugcNotes": [
      "For UGC NET: Research Methodology is a major topic in Paper 1. Focus on defining Ontology (what is reality?), Epistemology (how do we know reality?), and Methodology (how do we find out?). Understand that Methodology encompasses Methods.",
      "UGC NET के लिए: रिसर्च मेथडोलॉजी पेपर 1 का एक प्रमुख विषय है। ऑन्टोलॉजी (Ontology - वास्तविकता क्या है?), एपिस्टेमोलॉजी (Epistemology - हम वास्तविकता को कैसे जानते हैं?), और मेथडोलॉजी (हम कैसे पता लगाते हैं?) को परिभाषित करने पर ध्यान दें।"
    ],
    "ugcQ": [
      [
        "Q: What is the philosophical basis of research that asks 'What is the nature of reality'? A: Ontology.",
        "प्र: शोध का वह दार्शनिक आधार क्या है जो पूछता है कि 'वास्तविकता की प्रकृति क्या है'? उ: ऑन्टोलॉजी (Ontology)।"
      ]
    ]
  },
  {
    "id": "t2",
    "num": 2,
    "title": [
      "Types of Research",
      "अनुसंधान के प्रकार"
    ],
    "introduction": [
      "Research can be classified from several perspectives depending on its purpose, its depth of study, or the type of data it employs. Understanding the different types of research is essential for a researcher to select the correct approach for their specific problem. The major dichotomies in research typologies include Descriptive vs. Analytical, Applied vs. Fundamental (Basic), Quantitative vs. Qualitative, and Conceptual vs. Empirical.",
      "अनुसंधान को इसके उद्देश्य, इसके अध्ययन की गहराई, या इसके द्वारा नियोजित डेटा के प्रकार के आधार पर कई दृष्टिकोणों से वर्गीकृत किया जा सकता है। एक शोधकर्ता के लिए अपनी विशिष्ट समस्या के लिए सही दृष्टिकोण का चयन करने के लिए विभिन्न प्रकार के शोधों को समझना आवश्यक है। अनुसंधान प्रकारों में प्रमुख विरोधाभासों (dichotomies) में वर्णनात्मक बनाम विश्लेषणात्मक, अनुप्रयुक्त बनाम मौलिक (बुनियादी), मात्रात्मक बनाम गुणात्मक, और वैचारिक बनाम अनुभवजन्य शामिल हैं।"
    ],
    "concepts": [
      {
        "heading": [
          "Descriptive vs. Analytical & Applied vs. Fundamental",
          "वर्णनात्मक बनाम विश्लेषणात्मक और अनुप्रयुक्त बनाम मौलिक"
        ],
        "body": [
          "- Descriptive vs. Analytical: Descriptive research includes surveys and fact-finding enquiries (answering 'what is'). The researcher has no control over the variables. Analytical research uses facts or information already available and analyzes them to make a critical evaluation of the material (answering 'why' or 'how').\n- Applied vs. Fundamental: Applied (Action) research aims at finding a solution for an immediate problem facing a society or an organization. Fundamental (Basic or Pure) research is mainly concerned with generalizations and with the formulation of a theory, driven by curiosity.",
          "- वर्णनात्मक बनाम विश्लेषणात्मक (Descriptive vs. Analytical): वर्णनात्मक शोध में सर्वेक्षण और तथ्य-खोज पूछताछ (यह उत्तर देना कि 'क्या है') शामिल हैं। चरों पर शोधकर्ता का कोई नियंत्रण नहीं होता है। विश्लेषणात्मक शोध पहले से उपलब्ध तथ्यों या सूचनाओं का उपयोग करता है और सामग्री का आलोचनात्मक मूल्यांकन करने के लिए उनका विश्लेषण करता है ('क्यों' या 'कैसे' का उत्तर देना)।\n- अनुप्रयुक्त बनाम मौलिक (Applied vs. Fundamental): अनुप्रयुक्त (एक्शन) अनुसंधान का उद्देश्य समाज या संगठन के सामने आने वाली तत्काल समस्या का समाधान खोजना है। मौलिक (बुनियादी या शुद्ध) अनुसंधान मुख्य रूप से सामान्यीकरण और जिज्ञासा से प्रेरित सिद्धांत के निर्माण से संबंधित है।"
        ]
      },
      {
        "heading": [
          "Quantitative vs. Qualitative & Conceptual vs. Empirical",
          "मात्रात्मक बनाम गुणात्मक और वैचारिक बनाम अनुभवजन्य"
        ],
        "body": [
          "- Quantitative vs. Qualitative: Quantitative research is based on the measurement of quantity or amount, applicable to phenomena that can be expressed in terms of numbers. Qualitative research is concerned with qualitative phenomena (e.g., investigating human behavior, motives, and opinions) using interviews and focus groups.\n- Conceptual vs. Empirical: Conceptual research is related to some abstract idea(s) or theory, generally used by philosophers to develop new concepts. Empirical (data-based) research relies on experience or observation alone, producing conclusions capable of being verified by observation or experiment.",
          "- मात्रात्मक बनाम गुणात्मक (Quantitative vs. Qualitative): मात्रात्मक अनुसंधान मात्रा या राशि की माप पर आधारित है, जो उन घटनाओं पर लागू होता है जिन्हें संख्याओं के संदर्भ में व्यक्त किया जा सकता है। गुणात्मक शोध साक्षात्कार और फोकस समूहों का उपयोग करके गुणात्मक घटनाओं (जैसे, मानव व्यवहार, उद्देश्यों और विचारों की जांच) से संबंधित है।\n- वैचारिक बनाम अनुभवजन्य (Conceptual vs. Empirical): वैचारिक शोध कुछ अमूर्त विचारों (abstract ideas) या सिद्धांत से संबंधित है, जिसका उपयोग आमतौर पर दार्शनिकों द्वारा नई अवधारणाओं को विकसित करने के लिए किया जाता है। अनुभवजन्य (डेटा-आधारित) अनुसंधान अकेले अनुभव या अवलोकन पर निर्भर करता है, जो अवलोकन या प्रयोग द्वारा सत्यापित किए जाने में सक्षम निष्कर्ष उत्पन्न करता है।"
        ]
      }
    ],
    "quotes": [
      [
        "\"Not everything that can be counted counts, and not everything that counts can be counted.\" — William Bruce Cameron (highlighting the need for qualitative research)",
        "\"हर वह चीज़ जिसे गिना जा सकता है वह मायने नहीं रखती, और हर वह चीज़ जो मायने रखती है उसे गिना नहीं जा सकता।\" — विलियम ब्रूस कैमरून (गुणात्मक अनुसंधान की आवश्यकता पर प्रकाश डालते हुए)"
      ],
      [
        "Reference: 'Research Methodology in Social Sciences' by C.R. Kothari.",
        "संदर्भ: सी.आर. कोठारी द्वारा 'रिसर्च मेथडोलॉजी इन सोशल साइंसेज'।"
      ]
    ],
    "evaluation": [
      "A critical evaluation of these typologies reveals that they are rarely mutually exclusive in practice. The most robust research designs today employ a \"Mixed-Methods\" approach. For instance, studying poverty might require Quantitative data (income levels, caloric intake) but truly understanding its impact requires Qualitative data (interviews on social exclusion). Similarly, while Applied research solves immediate problems, it relies heavily on the theoretical frameworks built by Fundamental research. The rigid separation of these types is more pedantic than practical.",
      "इन प्रकारों का आलोचनात्मक मूल्यांकन बताता है कि व्यवहार में वे शायद ही कभी पारस्परिक रूप से अनन्य (mutually exclusive) होते हैं। आज सबसे मजबूत शोध डिजाइन \"मिश्रित-तरीके\" (Mixed-Methods) दृष्टिकोण को नियोजित करते हैं। उदाहरण के लिए, गरीबी का अध्ययन करने के लिए मात्रात्मक डेटा (आय स्तर, कैलोरी सेवन) की आवश्यकता हो सकती है, लेकिन इसके प्रभाव को सही मायने में समझने के लिए गुणात्मक डेटा (सामाजिक बहिष्कार पर साक्षात्कार) की आवश्यकता होती है। इसी तरह, जबकि अनुप्रयुक्त (Applied) अनुसंधान तत्काल समस्याओं को हल करता है, यह काफी हद तक मौलिक (Fundamental) अनुसंधान द्वारा निर्मित सैद्धांतिक ढांचे पर निर्भर करता है। इन प्रकारों का कठोर पृथक्करण व्यावहारिक से अधिक किताबी है।"
    ],
    "conclusion": [
      "In conclusion, recognizing the various types of research allows the investigator to correctly align their methods with their specific research goals. Whether counting ballots (Quantitative) or exploring voter psychology (Qualitative), or testing a new drug (Applied) versus understanding cellular biology (Fundamental), the chosen type of research dictates the entire trajectory and validity of the project.",
      "निष्कर्ष में, विभिन्न प्रकार के शोधों को पहचानने से अन्वेषक (investigator) को अपने विशिष्ट शोध लक्ष्यों के साथ अपने तरीकों को सही ढंग से संरेखित करने की अनुमति मिलती है। चाहे मतपत्रों की गिनती करना हो (मात्रात्मक) या मतदाता मनोविज्ञान (गुणात्मक) की खोज करना हो, या नई दवा (अनुप्रयुक्त) का परीक्षण करना हो बनाम सेलुलर जीव विज्ञान (मौलिक) को समझना हो, चुने गए शोध का प्रकार परियोजना के पूरे प्रक्षेपवक्र और वैधता को निर्धारित करता है।"
    ],
    "shortQ": [
      [
        "Distinguish between Applied and Fundamental research.",
        "अनुप्रयुक्त (Applied) और मौलिक (Fundamental) अनुसंधान के बीच अंतर स्पष्ट करें।"
      ],
      [
        "What is Descriptive Research?",
        "वर्णनात्मक अनुसंधान (Descriptive Research) क्या है?"
      ],
      [
        "Give one example of Qualitative Research.",
        "गुणात्मक अनुसंधान (Qualitative Research) का एक उदाहरण दीजिए।"
      ],
      [
        "What is meant by Empirical research?",
        "अनुभवजन्य (Empirical) अनुसंधान से क्या तात्पर्य है?"
      ],
      [
        "Why is Conceptual research primarily used by philosophers?",
        "दार्शनिकों द्वारा मुख्य रूप से वैचारिक अनुसंधान का उपयोग क्यों किया जाता है?"
      ]
    ],
    "longQ": [
      [
        "Explain the differences between Quantitative and Qualitative research with suitable examples from social sciences.",
        "सामाजिक विज्ञान के उपयुक्त उदाहरणों के साथ मात्रात्मक और गुणात्मक अनुसंधान के बीच अंतर स्पष्ट करें।"
      ],
      [
        "\"Descriptive research focuses on 'what', while analytical research focuses on 'why'.\" Elaborate.",
        "\"वर्णनात्मक शोध 'क्या' पर केंद्रित है, जबकि विश्लेषणात्मक शोध 'क्यों' पर केंद्रित है।\" विस्तार से बताएं।"
      ],
      [
        "Discuss the significance of Fundamental research. How does it aid Applied research?",
        "मौलिक अनुसंधान के महत्व पर चर्चा करें। यह अनुप्रयुक्त अनुसंधान में कैसे सहायता करता है?"
      ],
      [
        "Critically evaluate the 'Mixed-Methods' approach in modern political science research.",
        "आधुनिक राजनीति विज्ञान अनुसंधान में 'मिश्रित-तरीके' (Mixed-Methods) दृष्टिकोण का आलोचनात्मक मूल्यांकन करें।"
      ],
      [
        "Differentiate between Conceptual and Empirical research. When should an empirical approach be preferred?",
        "वैचारिक और अनुभवजन्य अनुसंधान के बीच अंतर करें। एक अनुभवजन्य दृष्टिकोण को कब प्राथमिकता दी जानी चाहिए?"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "Research that aims at finding a solution for an immediate problem facing a society is called:",
          "वह शोध जिसका उद्देश्य समाज के सामने आने वाली तत्काल समस्या का समाधान खोजना है, कहलाता है:"
        ],
        "opts": [
          ["Fundamental Research", "मौलिक अनुसंधान"],
          ["Applied/Action Research", "अनुप्रयुक्त/कार्रवाई अनुसंधान"],
          ["Conceptual Research", "वैचारिक अनुसंधान"],
          ["Historical Research", "ऐतिहासिक अनुसंधान"]
        ],
        "correct": 1
      },
      {
        "q": [
          "Surveys and fact-finding enquiries are primarily part of which type of research?",
          "सर्वेक्षण और तथ्य-खोज पूछताछ मुख्य रूप से किस प्रकार के शोध का हिस्सा हैं?"
        ],
        "opts": [
          ["Analytical Research", "विश्लेषणात्मक अनुसंधान"],
          ["Descriptive Research", "वर्णनात्मक अनुसंधान"],
          ["Empirical Research", "अनुभवजन्य अनुसंधान"],
          ["Fundamental Research", "मौलिक अनुसंधान"]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which research type is primarily concerned with investigating human behavior and motives?",
          "कौन सा शोध प्रकार मुख्य रूप से मानव व्यवहार और उद्देश्यों की जांच से संबंधित है?"
        ],
        "opts": [
          ["Quantitative Research", "मात्रात्मक अनुसंधान"],
          ["Qualitative Research", "गुणात्मक अनुसंधान"],
          ["Statistical Research", "सांख्यिकीय अनुसंधान"],
          ["Mathematical Research", "गणितीय अनुसंधान"]
        ],
        "correct": 1
      },
      {
        "q": [
          "A research based on observation or experience alone, often without due regard for system and theory, is:",
          "अकेले अवलोकन या अनुभव पर आधारित शोध, जो अक्सर प्रणाली और सिद्धांत के उचित सम्मान के बिना होता है, वह है:"
        ],
        "opts": [
          ["Empirical Research", "अनुभवजन्य अनुसंधान"],
          ["Conceptual Research", "वैचारिक अनुसंधान"],
          ["Fundamental Research", "मौलिक अनुसंधान"],
          ["Descriptive Research", "वर्णनात्मक अनुसंधान"]
        ],
        "correct": 0
      },
      {
        "q": [
          "Which research is mainly concerned with generalizations and with the formulation of a theory?",
          "कौन सा शोध मुख्य रूप से सामान्यीकरण और सिद्धांत के निर्माण से संबंधित है?"
        ],
        "opts": [
          ["Applied Research", "अनुप्रयुक्त अनुसंधान"],
          ["Fundamental (Basic) Research", "मौलिक (बुनियादी) अनुसंधान"],
          ["Diagnostic Research", "नैदानिक अनुसंधान"],
          ["Action Research", "एक्शन रिसर्च"]
        ],
        "correct": 1
      }
    ],
    "ugcNotes": [
      "For UGC NET: Ex-post facto research (a type of descriptive research) is conducted after an event has occurred. Action research follows the cycle: Plan -> Act -> Observe -> Reflect. Case studies are predominantly qualitative.",
      "UGC NET के लिए: कार्योत्तर शोध (Ex-post facto research - एक प्रकार का वर्णनात्मक शोध) किसी घटना के घटित होने के बाद किया जाता है। एक्शन रिसर्च (Action research) इस चक्र का पालन करता है: योजना (Plan) -> कार्य (Act) -> निरीक्षण (Observe) -> प्रतिबिंबित (Reflect)। केस स्टडी मुख्य रूप से गुणात्मक हैं।"
    ],
    "ugcQ": [
      [
        "Q: Which research design aims to establish a cause-and-effect relationship? A: Experimental Research.",
        "प्र: किस शोध डिजाइन का उद्देश्य कारण-और-प्रभाव (cause-and-effect) संबंध स्थापित करना है? उ: प्रायोगिक अनुसंधान (Experimental Research)।"
      ]
    ]
  },
  {
    "id": "t3",
    "num": 3,
    "title": [
      "Research Process",
      "अनुसंधान प्रक्रिया (Research Process)"
    ],
    "introduction": [
      "The Research Process consists of a series of systematic steps or actions required to effectively conduct research. While the exact steps may vary depending on the discipline, a standard scientific research process follows a highly structured path. It begins with identifying a problem and ends with reporting the findings. Navigating this process sequentially ensures that the research is rigorous, logical, and capable of withstanding academic scrutiny.",
      "अनुसंधान प्रक्रिया (Research Process) में प्रभावी ढंग से अनुसंधान करने के लिए आवश्यक व्यवस्थित चरणों या कार्यों की एक श्रृंखला होती है। जबकि सटीक कदम विषय के आधार पर भिन्न हो सकते हैं, एक मानक वैज्ञानिक अनुसंधान प्रक्रिया एक अत्यधिक संरचित मार्ग का अनुसरण करती है। यह किसी समस्या की पहचान करने से शुरू होता है और निष्कर्षों की रिपोर्टिंग के साथ समाप्त होता है। इस प्रक्रिया को क्रमिक रूप से नेविगेट करना यह सुनिश्चित करता है कि शोध कठोर, तार्किक और अकादमिक जांच का सामना करने में सक्षम है।"
    ],
    "concepts": [
      {
        "heading": [
          "Formulating the Research Problem & Literature Review",
          "अनुसंधान समस्या और साहित्य समीक्षा तैयार करना"
        ],
        "body": [
          "- Formulating the Problem: The first and most crucial step. It involves discovering a gap in existing knowledge or a real-world problem that needs solving. A problem well-defined is half-solved.\n- Literature Review: Once the problem is formulated, the researcher must extensively survey available literature (books, journals, past studies) to understand what is already known, avoid duplicating work, and refine the research questions.",
          "- समस्या तैयार करना: पहला और सबसे महत्वपूर्ण कदम। इसमें मौजूदा ज्ञान में एक अंतर (gap) या एक वास्तविक दुनिया की समस्या की खोज करना शामिल है जिसे हल करने की आवश्यकता है। एक अच्छी तरह से परिभाषित समस्या आधी हल हो जाती है।\n- साहित्य समीक्षा (Literature Review): एक बार समस्या तैयार हो जाने के बाद, शोधकर्ता को यह समझने के लिए उपलब्ध साहित्य (किताबों, पत्रिकाओं, पिछले अध्ययनों) का बड़े पैमाने पर सर्वेक्षण करना चाहिए कि पहले से क्या ज्ञात है, काम को दोहराने से बचें और शोध प्रश्नों को परिष्कृत करें।"
        ]
      },
      {
        "heading": [
          "Hypothesis, Questions, and Methodology",
          "परिकल्पना, प्रश्न और पद्धति"
        ],
        "body": [
          "- Hypothesis: A tentative assumption made in order to draw out and test its logical or empirical consequences. It is a proposed explanation that is tested during the research (e.g., 'Higher education leads to increased political participation').\n- Research Questions: Specific questions the study aims to answer.\n- Research Methodology (Design): The conceptual structure within which research is conducted. It constitutes the blueprint for the collection, measurement, and analysis of data.",
          "- परिकल्पना (Hypothesis): इसके तार्किक या अनुभवजन्य परिणामों को निकालने और परीक्षण करने के लिए की गई एक अस्थायी धारणा (tentative assumption)। यह एक प्रस्तावित स्पष्टीकरण है जिसका परीक्षण शोध के दौरान किया जाता है (उदा., 'उच्च शिक्षा से राजनीतिक भागीदारी बढ़ती है')।\n- शोध प्रश्न: विशिष्ट प्रश्न जिनका अध्ययन उत्तर देने का लक्ष्य रखता है।\n- अनुसंधान पद्धति (डिज़ाइन): वैचारिक संरचना जिसके भीतर अनुसंधान किया जाता है। यह डेटा के संग्रह, माप और विश्लेषण के लिए खाका बनाता है।"
        ]
      }
    ],
    "quotes": [
      [
        "\"A problem well put is half solved.\" — John Dewey",
        "\"एक समस्या जिसे अच्छी तरह से रखा गया है, वह आधी हल हो जाती है।\" — जॉन डेवी"
      ],
      [
        "Reference: 'Research Design: Qualitative, Quantitative, and Mixed Methods Approaches' by John W. Creswell.",
        "संदर्भ: जॉन डब्ल्यू. क्रेसवेल द्वारा 'रिसर्च डिजाइन: क्वालिटेटिव, क्वांटिटेटिव, एंड मिक्स्ड मेथड्स अप्रोचेस'।"
      ]
    ],
    "evaluation": [
      "Critically evaluating the standard 'Research Process' reveals a common misconception: that it is a strictly linear, one-way street. In reality, the research process is highly iterative and cyclical. For instance, while conducting a Literature Review (Step 2), a researcher might realize their initial Research Problem (Step 1) is too broad and needs reformulation. Similarly, during Data Collection, unexpected findings might force a revision of the Hypothesis. Thus, while the steps provide a necessary framework, rigidity can stifle genuine discovery. Good research requires a willingness to circle back and refine earlier steps.",
      "मानक 'अनुसंधान प्रक्रिया' का आलोचनात्मक मूल्यांकन एक आम गलतफहमी को उजागर करता है: कि यह एक कड़ाई से रैखिक, एक तरफ़ा सड़क है। वास्तविकता में, शोध प्रक्रिया अत्यधिक पुनरावृत्त (iterative) और चक्रीय (cyclical) है। उदाहरण के लिए, साहित्य समीक्षा (चरण 2) का संचालन करते समय, एक शोधकर्ता यह महसूस कर सकता है कि उनकी प्रारंभिक शोध समस्या (चरण 1) बहुत व्यापक है और उसे फिर से तैयार करने की आवश्यकता है। इसी तरह, डेटा संग्रह के दौरान, अप्रत्याशित निष्कर्ष परिकल्पना के संशोधन को मजबूर कर सकते हैं। इस प्रकार, जबकि कदम एक आवश्यक ढांचा प्रदान करते हैं, कठोरता वास्तविक खोज को रोक सकती है। अच्छे शोध के लिए वापस लौटने और पहले के चरणों को परिष्कृत करने की इच्छा की आवश्यकता होती है।"
    ],
    "conclusion": [
      "In conclusion, the research process is the architectural blueprint of academic inquiry. From the initial spark of formulating a problem to the rigorous testing of a hypothesis, each step logically leads to the next. Mastering this process is what separates casual observation from legitimate, scientific knowledge creation.",
      "निष्कर्ष में, अनुसंधान प्रक्रिया अकादमिक जांच का स्थापत्य खाका (architectural blueprint) है। किसी समस्या को तैयार करने की प्रारंभिक चिंगारी से लेकर परिकल्पना के कठोर परीक्षण तक, प्रत्येक चरण तार्किक रूप से अगले की ओर ले जाता है। इस प्रक्रिया में महारत हासिल करना ही आकस्मिक अवलोकन (casual observation) को वैध, वैज्ञानिक ज्ञान निर्माण से अलग करता है।"
    ],
    "shortQ": [
      [
        "What is the first step in the research process?",
        "शोध प्रक्रिया में पहला कदम क्या है?"
      ],
      [
        "Define 'Hypothesis'.",
        "'परिकल्पना' (Hypothesis) को परिभाषित करें।"
      ],
      [
        "Why is a Literature Review necessary?",
        "साहित्य समीक्षा (Literature Review) क्यों आवश्यक है?"
      ],
      [
        "What is a Research Design?",
        "रिसर्च डिज़ाइन क्या है?"
      ],
      [
        "Is the research process strictly linear? Why?",
        "क्या शोध प्रक्रिया कड़ाई से रैखिक है? क्यों?"
      ]
    ],
    "longQ": [
      [
        "Elaborate on the various steps involved in a standard research process.",
        "एक मानक शोध प्रक्रिया में शामिल विभिन्न चरणों के बारे में विस्तार से बताएं।"
      ],
      [
        "Discuss the importance of formulating a clear research problem.",
        "एक स्पष्ट शोध समस्या तैयार करने के महत्व पर चर्चा करें।"
      ],
      [
        "What is the role of a Literature Review in shaping a research study?",
        "एक शोध अध्ययन को आकार देने में साहित्य समीक्षा की क्या भूमिका है?"
      ],
      [
        "Explain the characteristics of a good hypothesis.",
        "एक अच्छी परिकल्पना की विशेषताओं की व्याख्या करें।"
      ],
      [
        "\"Research design is the blueprint for data collection and analysis.\" Critically examine this statement.",
        "\"रिसर्च डिज़ाइन डेटा संग्रह और विश्लेषण का खाका है।\" इस कथन का आलोचनात्मक परीक्षण करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "The very first step in the scientific research process is:",
          "वैज्ञानिक अनुसंधान प्रक्रिया में सबसे पहला कदम है:"
        ],
        "opts": [
          ["Data Collection", "डेटा संग्रह"],
          ["Formulating the Research Problem", "अनुसंधान समस्या तैयार करना"],
          ["Developing the Hypothesis", "परिकल्पना का विकास"],
          ["Literature Review", "साहित्य समीक्षा"]
        ],
        "correct": 1
      },
      {
        "q": [
          "A tentative assumption made to test its logical consequences is called a:",
          "इसके तार्किक परिणामों का परीक्षण करने के लिए की गई एक अस्थायी धारणा (tentative assumption) को क्या कहा जाता है:"
        ],
        "opts": [
          ["Theory", "सिद्धांत (Theory)"],
          ["Fact", "तथ्य (Fact)"],
          ["Hypothesis", "परिकल्पना (Hypothesis)"],
          ["Law", "कानून (Law)"]
        ],
        "correct": 2
      },
      {
        "q": [
          "Surveying past studies, journals, and books related to your topic is known as:",
          "अपने विषय से संबंधित पिछले अध्ययनों, पत्रिकाओं और पुस्तकों का सर्वेक्षण करना किस रूप में जाना जाता है:"
        ],
        "opts": [
          ["Data Processing", "डेटा प्रसंस्करण"],
          ["Literature Review", "साहित्य समीक्षा"],
          ["Hypothesis Testing", "परिकल्पना परीक्षण"],
          ["Sampling", "सैम्पलिंग (नमूनाकरण)"]
        ],
        "correct": 1
      },
      {
        "q": [
          "The conceptual structure within which research is conducted is called the:",
          "वैचारिक संरचना जिसके भीतर अनुसंधान किया जाता है, क्या कहलाती है:"
        ],
        "opts": [
          ["Research Design", "रिसर्च डिजाइन"],
          ["Research Hypothesis", "अनुसंधान परिकल्पना"],
          ["Research Problem", "अनुसंधान समस्या"],
          ["Research Abstract", "अनुसंधान सार (Abstract)"]
        ],
        "correct": 0
      },
      {
        "q": [
          "Which of the following is an iterative characteristic of the research process?",
          "निम्नलिखित में से कौन शोध प्रक्रिया की एक पुनरावृत्त (iterative) विशेषता है?"
        ],
        "opts": [
          ["It always moves in a straight line from step 1 to 10", "यह हमेशा चरण 1 से 10 तक एक सीधी रेखा में चलती है"],
          ["You can never change your hypothesis once made", "एक बार बनने के बाद आप अपनी परिकल्पना को कभी नहीं बदल सकते"],
          ["New findings can force a revision of earlier steps like the hypothesis", "नए निष्कर्ष परिकल्पना जैसे पहले के चरणों के संशोधन को मजबूर कर सकते हैं"],
          ["Literature review is only done at the very end", "साहित्य समीक्षा केवल अंत में की जाती है"]
        ],
        "correct": 2
      }
    ],
    "ugcNotes": [
      "For UGC NET: Order of research process is a frequent question: Problem -> Literature -> Hypothesis -> Design -> Sample -> Data Collection -> Analysis -> Generalization/Report. Null Hypothesis (H0) implies 'no difference' or 'no relationship'.",
      "UGC NET के लिए: शोध प्रक्रिया का क्रम एक लगातार पूछे जाने वाला प्रश्न है: समस्या -> साहित्य -> परिकल्पना -> डिजाइन -> नमूना -> डेटा संग्रह -> विश्लेषण -> सामान्यीकरण/रिपोर्ट। शून्य परिकल्पना (Null Hypothesis - H0) का अर्थ है 'कोई अंतर नहीं' या 'कोई संबंध नहीं'।"
    ],
    "ugcQ": [
      [
        "Q: What type of hypothesis states that there is NO relationship between two variables? A: Null Hypothesis.",
        "प्र: किस प्रकार की परिकल्पना यह बताती है कि दो चरों के बीच कोई संबंध नहीं है? उ: शून्य परिकल्पना (Null Hypothesis)।"
      ]
    ]
  },
  {
    "id": "t4",
    "num": 4,
    "title": [
      "Data Collection, Processing, and Analysis",
      "डेटा संग्रह, प्रसंस्करण और विश्लेषण"
    ],
    "introduction": [
      "Data collection is the process of gathering and measuring information on variables of interest, in an established systematic fashion that enables one to answer stated research questions, test hypotheses, and evaluate outcomes. It is the empirical heart of the research. Once collected, raw data is virtually useless until it is processed (edited, coded, classified, and tabulated) and analyzed to uncover patterns, relationships, and ultimately, meaningful conclusions.",
      "डेटा संग्रह रुचि के चरों (variables of interest) पर जानकारी एकत्र करने और मापने की प्रक्रिया है, एक स्थापित व्यवस्थित तरीके से जो किसी को बताए गए शोध प्रश्नों का उत्तर देने, परिकल्पनाओं का परीक्षण करने और परिणामों का मूल्यांकन करने में सक्षम बनाता है। यह शोध का अनुभवजन्य हृदय (empirical heart) है। एक बार एकत्र होने के बाद, कच्चा डेटा तब तक लगभग बेकार है जब तक कि इसे संसाधित (संपादित, कोडित, वर्गीकृत और सारणीबद्ध) और विश्लेषण न किया जाए ताकि पैटर्न, संबंधों और अंततः सार्थक निष्कर्षों को उजागर किया जा सके।"
    ],
    "concepts": [
      {
        "heading": [
          "Primary vs. Secondary Data",
          "प्राथमिक बनाम द्वितीयक डेटा"
        ],
        "body": [
          "- Primary Data: Data collected afresh and for the first time, directly by the researcher. It is original in character. Methods include Observation, Interviews, Questionnaires, and Schedules.\n- Secondary Data: Data which has already been collected by someone else and which has already been passed through the statistical process. Sources include government publications, census reports, books, and journals.",
          "- प्राथमिक डेटा (Primary Data): शोधकर्ता द्वारा सीधे, नए सिरे से और पहली बार एकत्र किया गया डेटा। यह चरित्र में मूल (original) है। विधियों में अवलोकन, साक्षात्कार, प्रश्नावली और अनुसूचियां (Schedules) शामिल हैं।\n- द्वितीयक डेटा (Secondary Data): वह डेटा जो पहले ही किसी और के द्वारा एकत्र किया जा चुका है और जो पहले ही सांख्यिकीय प्रक्रिया से गुजर चुका है। स्रोतों में सरकारी प्रकाशन, जनगणना रिपोर्ट, किताबें और पत्रिकाएं शामिल हैं।"
        ]
      },
      {
        "heading": [
          "Key Methods of Data Collection",
          "डेटा संग्रह की प्रमुख विधियाँ"
        ],
        "body": [
          "- Sampling: Selecting a subset (sample) from a statistical population to estimate characteristics of the whole population (e.g., Random, Stratified, Purposive sampling).\n- Observation: Systematically watching and recording behavior/events without asking questions (useful for studying human behavior).\n- Questionnaires & Interviews: Questionnaires are printed lists of questions sent to respondents (cheap, wide reach). Interviews involve direct verbal interaction (higher response rate, allows probing).\n- Case Study: An in-depth, intensive investigation of a single individual, group, or event to explore causation in order to find underlying principles.",
          "- सैंपलिंग (Sampling): पूरी आबादी की विशेषताओं का अनुमान लगाने के लिए सांख्यिकीय आबादी से एक उपसमूह (नमूना) का चयन करना (उदा. यादृच्छिक (Random), स्तरीकृत (Stratified), उद्देश्यपूर्ण (Purposive) सैंपलिंग)।\n- अवलोकन (Observation): प्रश्न पूछे बिना व्यवहार/घटनाओं को व्यवस्थित रूप से देखना और रिकॉर्ड करना (मानव व्यवहार के अध्ययन के लिए उपयोगी)।\n- प्रश्नावली और साक्षात्कार (Questionnaires & Interviews): प्रश्नावली उत्तरदाताओं को भेजी गई प्रश्नों की मुद्रित सूची है (सस्ती, व्यापक पहुंच)। साक्षात्कार में सीधा मौखिक संपर्क शामिल होता है (उच्च प्रतिक्रिया दर, पूछताछ की अनुमति देता है)।\n- केस स्टडी (Case Study): अंतर्निहित सिद्धांतों को खोजने के लिए कारण का पता लगाने के लिए किसी एक व्यक्ति, समूह या घटना की गहन जांच।"
        ]
      },
      {
        "heading": [
          "Processing, Analysis, and Interpretation",
          "प्रसंस्करण, विश्लेषण और व्याख्या"
        ],
        "body": [
          "- Processing: Involves editing (cleaning data), coding (assigning numerals to answers), classification (grouping data), and tabulation (arranging in rows/columns).\n- Analysis: The computation of certain measures along with searching for patterns of relationship that exist among data-groups.\n- Interpretation: Drawing inferences from the collected facts after analytical and/or experimental study. It is the transition from 'data' to 'meaning'.",
          "- प्रसंस्करण (Processing): इसमें संपादन (डेटा की सफाई), कोडिंग (उत्तरों को अंक निर्दिष्ट करना), वर्गीकरण (डेटा समूहीकरण), और सारणीकरण (पंक्तियों/स्तंभों में व्यवस्थित करना) शामिल हैं।\n- विश्लेषण (Analysis): डेटा-समूहों के बीच मौजूद संबंधों के पैटर्न की खोज के साथ कुछ उपायों की गणना।\n- व्याख्या (Interpretation): विश्लेषणात्मक और/या प्रयोगात्मक अध्ययन के बाद एकत्र किए गए तथ्यों से निष्कर्ष निकालना। यह 'डेटा' से 'अर्थ' (meaning) में संक्रमण है।"
        ]
      }
    ],
    "quotes": [
      [
        "\"Data! Data! Data! I can't make bricks without clay.\" — Arthur Conan Doyle (Sherlock Holmes)",
        "\"डेटा! डेटा! डेटा! मैं मिट्टी के बिना ईंटें नहीं बना सकता।\" — आर्थर कॉनन डॉयल (शरलॉक होम्स)"
      ],
      [
        "Reference: 'Research Methodology: Methods and Techniques' by C.R. Kothari.",
        "संदर्भ: सी.आर. कोठारी द्वारा 'रिसर्च मेथडोलॉजी: मेथड्स एंड टेक्निक्स'।"
      ]
    ],
    "evaluation": [
      "A critical evaluation of data collection methods reveals a constant trade-off between depth and breadth, and between cost and accuracy. Questionnaires allow for large-scale data collection (breadth) but often suffer from low response rates and superficial answers. Interviews provide deep insights (depth) but are time-consuming, expensive, and prone to interviewer bias. Furthermore, the modern era of \"Big Data\" has shifted the challenge from \"collecting enough data\" to \"filtering the noise\" and ensuring data privacy and ethical compliance during interpretation.",
      "डेटा संग्रह विधियों का आलोचनात्मक मूल्यांकन गहराई और चौड़ाई (depth and breadth) के बीच, और लागत और सटीकता के बीच निरंतर समझौते (trade-off) को उजागर करता है। प्रश्नावली बड़े पैमाने पर डेटा संग्रह (चौड़ाई) की अनुमति देती है लेकिन अक्सर कम प्रतिक्रिया दर और सतही उत्तरों से ग्रस्त होती है। साक्षात्कार गहरी अंतर्दृष्टि (गहराई) प्रदान करते हैं लेकिन समय लेने वाले, महंगे होते हैं, और साक्षात्कारकर्ता पूर्वाग्रह (bias) से ग्रस्त होते हैं। इसके अलावा, \"बिग डेटा\" के आधुनिक युग ने चुनौती को \"पर्याप्त डेटा एकत्र करने\" से हटाकर \"शोर को छानने\" (filtering the noise) और व्याख्या के दौरान डेटा गोपनीयता और नैतिक अनुपालन सुनिश्चित करने में बदल दिया है।"
    ],
    "conclusion": [
      "In conclusion, the integrity of a research study rests heavily on the quality of its data collection and analysis. A poorly designed questionnaire or a biased sample can fatally compromise even the most brilliantly formulated hypothesis. The researcher must meticulously choose the right tools, rigorously process the raw data, and interpret the findings objectively to derive valid conclusions.",
      "निष्कर्ष में, किसी भी शोध अध्ययन की अखंडता काफी हद तक उसके डेटा संग्रह और विश्लेषण की गुणवत्ता पर टिकी होती है। एक खराब डिज़ाइन की गई प्रश्नावली या पक्षपाती नमूना (biased sample) सबसे शानदार ढंग से तैयार की गई परिकल्पना से भी समझौता कर सकता है। शोधकर्ता को सावधानीपूर्वक सही उपकरण चुनने चाहिए, कच्चे डेटा को कठोरता से संसाधित करना चाहिए, और वैध निष्कर्ष निकालने के लिए निष्पक्ष रूप से निष्कर्षों की व्याख्या करनी चाहिए।"
    ],
    "shortQ": [
      [
        "What is the difference between Primary and Secondary data?",
        "प्राथमिक और द्वितीयक डेटा के बीच क्या अंतर है?"
      ],
      [
        "List two advantages of using a Questionnaire.",
        "प्रश्नावली (Questionnaire) के उपयोग के दो लाभ बताइए।"
      ],
      [
        "What is meant by 'Coding' in data processing?",
        "डेटा प्रोसेसिंग में 'कोडिंग' (Coding) का क्या अर्थ है?"
      ],
      [
        "Define a 'Case Study'.",
        "'केस स्टडी' (Case Study) को परिभाषित करें।"
      ],
      [
        "Why is Sampling used in research?",
        "शोध में सैंपलिंग (Sampling) का उपयोग क्यों किया जाता है?"
      ]
    ],
    "longQ": [
      [
        "Discuss the various methods of collecting primary data, highlighting their merits and demerits.",
        "प्राथमिक डेटा एकत्र करने के विभिन्न तरीकों पर चर्चा करें, उनके गुणों और दोषों पर प्रकाश डालें।"
      ],
      [
        "Explain the process of data processing (Editing, Coding, Classification, Tabulation).",
        "डेटा प्रोसेसिंग (संपादन, कोडिंग, वर्गीकरण, सारणीकरण) की प्रक्रिया की व्याख्या करें।"
      ],
      [
        "\"Interpretation is the transition from data to meaning.\" Elaborate on this statement.",
        "\"व्याख्या डेटा से अर्थ में संक्रमण है।\" इस कथन पर विस्तार से चर्चा करें।"
      ],
      [
        "Compare the Observation method with the Interview method of data collection.",
        "डेटा संग्रह की अवलोकन (Observation) विधि की तुलना साक्षात्कार (Interview) विधि से करें।"
      ],
      [
        "What is a Sampling Design? Discuss the difference between Probability and Non-Probability sampling.",
        "सैंपलिंग डिज़ाइन क्या है? प्रायिकता (Probability) और गैर-प्रायिकता (Non-Probability) सैंपलिंग के बीच अंतर पर चर्चा करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "Data that is collected originally for the first time by the researcher is known as:",
          "शोधकर्ता द्वारा पहली बार मूल रूप से एकत्र किए गए डेटा को क्या कहा जाता है:"
        ],
        "opts": [
          ["Secondary Data", "द्वितीयक डेटा"],
          ["Tertiary Data", "तृतीयक डेटा"],
          ["Primary Data", "प्राथमिक डेटा"],
          ["Historical Data", "ऐतिहासिक डेटा"]
        ],
        "correct": 2
      },
      {
        "q": [
          "Which data collection method involves sending a printed list of questions to respondents by mail?",
          "किस डेटा संग्रह विधि में उत्तरदाताओं को मेल द्वारा प्रश्नों की एक मुद्रित सूची भेजना शामिल है?"
        ],
        "opts": [
          ["Interview", "साक्षात्कार"],
          ["Observation", "अवलोकन"],
          ["Case Study", "केस स्टडी"],
          ["Questionnaire", "प्रश्नावली"]
        ],
        "correct": 3
      },
      {
        "q": [
          "Assigning numerals or symbols to answers so that responses can be grouped into a limited number of categories is called:",
          "उत्तरों को अंक या प्रतीक निर्दिष्ट करना ताकि प्रतिक्रियाओं को सीमित संख्या में श्रेणियों में समूहीकृत किया जा सके, कहलाता है:"
        ],
        "opts": [
          ["Editing", "संपादन"],
          ["Coding", "कोडिंग"],
          ["Tabulation", "सारणीकरण"],
          ["Classification", "वर्गीकरण"]
        ],
        "correct": 1
      },
      {
        "q": [
          "A method of sampling where every item in the universe has an equal chance of inclusion is:",
          "सैंपलिंग की एक विधि जहां ब्रह्मांड (universe) के प्रत्येक आइटम को शामिल किए जाने का समान अवसर मिलता है, वह है:"
        ],
        "opts": [
          ["Purposive Sampling", "उद्देश्यपूर्ण सैंपलिंग"],
          ["Quota Sampling", "कोटा सैंपलिंग"],
          ["Random Sampling", "यादृच्छिक (Random) सैंपलिंग"],
          ["Snowball Sampling", "स्नोबॉल सैंपलिंग"]
        ],
        "correct": 2
      },
      {
        "q": [
          "Census reports and government publications are examples of:",
          "जनगणना रिपोर्ट और सरकारी प्रकाशन किसके उदाहरण हैं:"
        ],
        "opts": [
          ["Primary Data", "प्राथमिक डेटा"],
          ["Secondary Data", "द्वितीयक डेटा"],
          ["Qualitative Data", "गुणात्मक डेटा"],
          ["Experimental Data", "प्रयोगात्मक डेटा"]
        ],
        "correct": 1
      }
    ],
    "ugcNotes": [
      "For UGC NET: Differentiate between a Questionnaire (filled by the respondent) and a Schedule (filled by the enumerator/interviewer). Probability sampling includes Simple Random, Stratified, Cluster. Non-probability includes Purposive, Quota, Snowball.",
      "UGC NET के लिए: एक प्रश्नावली (उत्तरदाता द्वारा भरी गई) और एक अनुसूची (प्रगणक/साक्षात्कारकर्ता द्वारा भरी गई) के बीच अंतर करें। प्रायिकता (Probability) सैंपलिंग में सरल यादृच्छिक, स्तरीकृत, क्लस्टर शामिल हैं। गैर-प्रायिकता में उद्देश्यपूर्ण, कोटा, स्नोबॉल शामिल हैं।"
    ],
    "ugcQ": [
      [
        "Q: Which sampling technique is most suitable when the population is divided into distinct subgroups (like gender or income brackets)? A: Stratified Random Sampling.",
        "प्र: जब जनसंख्या को अलग-अलग उपसमूहों (जैसे लिंग या आय वर्ग) में विभाजित किया जाता है, तो कौन सी सैंपलिंग तकनीक सबसे उपयुक्त होती है? उ: स्तरीकृत यादृच्छिक सैंपलिंग (Stratified Random Sampling)।"
      ]
    ]
  },
  {
    "id": "t5",
    "num": 5,
    "title": [
      "Research Writing & Plagiarism",
      "अनुसंधान लेखन और साहित्यिक चोरी (Plagiarism)"
    ],
    "introduction": [
      "The final and perhaps most critical phase of the research process is Research Writing. The brilliant discoveries of a study are completely useless unless they are communicated effectively to the academic community and the public. This communication takes various forms: Synopsis, Research Papers, Dissertations, and Books. Alongside effective writing, a researcher must adhere to strict ethical guidelines—the most cardinal rule being the avoidance of Plagiarism (intellectual theft).",
      "अनुसंधान प्रक्रिया का अंतिम और शायद सबसे महत्वपूर्ण चरण अनुसंधान लेखन (Research Writing) है। किसी अध्ययन की शानदार खोजें तब तक पूरी तरह से बेकार हैं जब तक कि उन्हें अकादमिक समुदाय और जनता तक प्रभावी ढंग से संप्रेषित (communicate) नहीं किया जाता। यह संचार विभिन्न रूप लेता है: सिनोप्सिस, रिसर्च पेपर, शोध प्रबंध (Dissertations) और किताबें। प्रभावी लेखन के साथ-साथ, एक शोधकर्ता को सख्त नैतिक दिशानिर्देशों का पालन करना चाहिए—सबसे प्रमुख नियम साहित्यिक चोरी (Plagiarism - बौद्धिक चोरी) से बचना है।"
    ],
    "concepts": [
      {
        "heading": [
          "Forms of Research Writing",
          "अनुसंधान लेखन के रूप"
        ],
        "body": [
          "- Synopsis: A brief summary or outline of the proposed research project, prepared before starting the actual research to get approval.\n- Article/Research Paper: A relatively short, highly focused piece of original research published in academic peer-reviewed journals.\n- Dissertation/Thesis: A lengthy, formal document submitted in support of a candidature for an academic degree or professional qualification presenting the author's research and findings.\n- Book-Review: A critical evaluation of a book, summarizing its content and assessing its value to the field.",
          "- सिनोप्सिस (Synopsis): प्रस्तावित शोध परियोजना का एक संक्षिप्त सारांश या रूपरेखा, जिसे अनुमोदन प्राप्त करने के लिए वास्तविक शोध शुरू करने से पहले तैयार किया जाता है।\n- लेख/शोध पत्र (Research Paper): अकादमिक सहकर्मी-समीक्षित (peer-reviewed) पत्रिकाओं में प्रकाशित मूल शोध का एक अपेक्षाकृत छोटा, अत्यधिक केंद्रित टुकड़ा।\n- शोध प्रबंध/थीसिस (Dissertation/Thesis): एक अकादमिक डिग्री या पेशेवर योग्यता के लिए उम्मीदवारी के समर्थन में प्रस्तुत एक लंबा, औपचारिक दस्तावेज जो लेखक के शोध और निष्कर्षों को प्रस्तुत करता है।\n- पुस्तक-समीक्षा (Book-Review): किसी पुस्तक का आलोचनात्मक मूल्यांकन, उसकी सामग्री का सारांश और क्षेत्र के लिए उसके मूल्य का आकलन करना।"
        ]
      },
      {
        "heading": [
          "Criteria of Good Research & Plagiarism",
          "अच्छे शोध और साहित्यिक चोरी के मानदंड"
        ],
        "body": [
          "- Good Research: Must be Systematic (logical steps), Logical (guided by rules of logical reasoning), Empirical (based on observable evidence), and Replicable (others can verify findings by repeating the study).\n- Plagiarism: The unethical practice of using another person's ideas, processes, results, or words without giving appropriate credit. It ranges from outright copying to paraphrasing without citation. Universities use software like Turnitin to detect it.",
          "- अच्छा शोध (Good Research): व्यवस्थित (तार्किक कदम), तार्किक (तार्किक तर्क के नियमों द्वारा निर्देशित), अनुभवजन्य (अवलोकनीय साक्ष्य के आधार पर), और अनुकरणीय (Replicable - अन्य लोग अध्ययन को दोहराकर निष्कर्षों को सत्यापित कर सकते हैं) होना चाहिए।\n- साहित्यिक चोरी (Plagiarism): उचित श्रेय दिए बिना किसी अन्य व्यक्ति के विचारों, प्रक्रियाओं, परिणामों या शब्दों का उपयोग करने की अनैतिक प्रथा। यह सीधे कॉपी करने से लेकर बिना उद्धरण के पैराफ्रेसिंग तक होता है। इसका पता लगाने के लिए विश्वविद्यालय Turnitin जैसे सॉफ्टवेयर का इस्तेमाल करते हैं।"
        ]
      }
    ],
    "quotes": [
      [
        "\"To steal ideas from one person is plagiarism; to steal from many is research.\" — Steven Wright (A humorous take highlighting the importance of synthesis and proper citation)",
        "\"एक व्यक्ति से विचार चुराना साहित्यिक चोरी है; कई लोगों से चुराना शोध है।\" — स्टीवन राइट (संश्लेषण और उचित उद्धरण के महत्व को उजागर करने वाला एक हास्यपूर्ण कथन)"
      ],
      [
        "Reference: 'Research Design' by John W. Creswell.",
        "संदर्भ: जॉन डब्ल्यू. क्रेसवेल द्वारा 'रिसर्च डिजाइन'।"
      ]
    ],
    "evaluation": [
      "Critically evaluating the current landscape of research writing exposes the immense pressure of \"publish or perish\" in academia. This pressure often leads to a decline in the quality of research, fostering a culture of superficial, repetitive publications in predatory journals. Furthermore, it has fueled the rise of academic misconduct, notably plagiarism and data fabrication. While anti-plagiarism tools are becoming sophisticated, true academic integrity cannot be enforced by software alone; it requires a fundamental commitment to the ethics of knowledge creation.",
      "शोध लेखन के वर्तमान परिदृश्य का आलोचनात्मक मूल्यांकन शिक्षा जगत में \"प्रकाशित करो या नष्ट हो जाओ\" (publish or perish) के अत्यधिक दबाव को उजागर करता है। यह दबाव अक्सर शोध की गुणवत्ता में गिरावट की ओर ले जाता है, जो शिकारी (predatory) पत्रिकाओं में सतही, दोहराए जाने वाले प्रकाशनों की संस्कृति को बढ़ावा देता है। इसके अलावा, इसने अकादमिक कदाचार, विशेष रूप से साहित्यिक चोरी और डेटा निर्माण (fabrication) में वृद्धि को बढ़ावा दिया है। जबकि साहित्यिक चोरी विरोधी उपकरण परिष्कृत हो रहे हैं, सच्ची अकादमिक अखंडता को केवल सॉफ्टवेयर द्वारा लागू नहीं किया जा सकता है; इसके लिए ज्ञान निर्माण की नैतिकता के प्रति मौलिक प्रतिबद्धता की आवश्यकता है।"
    ],
    "conclusion": [
      "In conclusion, research writing is the bridge between the researcher’s isolated work and the collective progress of humanity. A good research report must be clear, concise, and rigorously honest. Plagiarism is not just a violation of rules, but a betrayal of the scientific method. Upholding the criteria of good research ensures that the pursuit of truth remains credible and cumulative.",
      "निष्कर्ष में, अनुसंधान लेखन शोधकर्ता के अलग-थलग काम और मानवता की सामूहिक प्रगति के बीच का सेतु है। एक अच्छी शोध रिपोर्ट स्पष्ट, संक्षिप्त और कठोरता से ईमानदार होनी चाहिए। साहित्यिक चोरी केवल नियमों का उल्लंघन नहीं है, बल्कि वैज्ञानिक पद्धति के साथ विश्वासघात है। अच्छे शोध के मानदंडों को बनाए रखना यह सुनिश्चित करता है कि सत्य की खोज विश्वसनीय और संचयी (cumulative) बनी रहे।"
    ],
    "shortQ": [
      [
        "What is a Research Synopsis?",
        "रिसर्च सिनोप्सिस (Synopsis) क्या है?"
      ],
      [
        "Define Plagiarism.",
        "साहित्यिक चोरी (Plagiarism) को परिभाषित करें।"
      ],
      [
        "What is the main difference between an Article and a Thesis?",
        "एक लेख (Article) और एक थीसिस (Thesis) के बीच मुख्य अंतर क्या है?"
      ],
      [
        "List two criteria of Good Research.",
        "अच्छे शोध (Good Research) के दो मानदंड सूचीबद्ध करें।"
      ],
      [
        "Why is replicating a study important?",
        "किसी अध्ययन को दोहराना (replicating) क्यों महत्वपूर्ण है?"
      ]
    ],
    "longQ": [
      [
        "Discuss the essential components and layout of a Research Report/Thesis.",
        "एक शोध रिपोर्ट/थीसिस के आवश्यक घटकों और लेआउट पर चर्चा करें।"
      ],
      [
        "What are the criteria of good research? Explain.",
        "अच्छे शोध के मानदंड क्या हैं? व्याख्या करें।"
      ],
      [
        "Define Plagiarism. What are its types, and how can a researcher avoid it?",
        "साहित्यिक चोरी को परिभाषित करें। इसके प्रकार क्या हैं, और एक शोधकर्ता इससे कैसे बच सकता है?"
      ],
      [
        "Differentiate between a Research Article, a Dissertation, and a Book Review.",
        "शोध लेख, शोध प्रबंध और पुस्तक समीक्षा के बीच अंतर करें।"
      ],
      [
        "\"Research is incomplete until it is communicated.\" Discuss the importance of Research Writing.",
        "\"शोध तब तक अधूरा है जब तक इसे संप्रेषित नहीं किया जाता।\" अनुसंधान लेखन के महत्व पर चर्चा करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "A brief outline of the proposed research project submitted for approval is called:",
          "अनुमोदन के लिए प्रस्तुत प्रस्तावित शोध परियोजना की संक्षिप्त रूपरेखा क्या कहलाती है:"
        ],
        "opts": [
          ["Thesis", "थीसिस"],
          ["Synopsis / Proposal", "सिनोप्सिस / प्रस्ताव"],
          ["Research Paper", "रिसर्च पेपर"],
          ["Bibliography", "ग्रंथ सूची"]
        ],
        "correct": 1
      },
      {
        "q": [
          "Using someone else's work without giving them proper credit is known as:",
          "उचित श्रेय दिए बिना किसी और के काम का उपयोग करना किस रूप में जाना जाता है:"
        ],
        "opts": [
          ["Citation", "उद्धरण"],
          ["Plagiarism", "साहित्यिक चोरी (Plagiarism)"],
          ["Paraphrasing", "पैराफ्रेसिंग"],
          ["Acknowledgement", "आभार"]
        ],
        "correct": 1
      },
      {
        "q": [
          "Which of the following is NOT a criterion for Good Research?",
          "निम्नलिखित में से कौन अच्छे शोध का मानदंड नहीं है?"
        ],
        "opts": [
          ["Systematic", "व्यवस्थित (Systematic)"],
          ["Logical", "तार्किक (Logical)"],
          ["Biased", "पक्षपाती (Biased)"],
          ["Replicable", "अनुकरणीय (Replicable)"]
        ],
        "correct": 2
      },
      {
        "q": [
          "Software like Turnitin and Urkund are primarily used for:",
          "Turnitin और Urkund जैसे सॉफ्टवेयर मुख्य रूप से किसके लिए उपयोग किए जाते हैं:"
        ],
        "opts": [
          ["Data Analysis", "डेटा विश्लेषण"],
          ["Statistical Computation", "सांख्यिकीय गणना"],
          ["Plagiarism Detection", "साहित्यिक चोरी का पता लगाने"],
          ["Formatting references", "संदर्भों का प्रारूपण"]
        ],
        "correct": 2
      },
      {
        "q": [
          "A lengthy, formal document presenting original research submitted for a Ph.D. degree is typically called a:",
          "पीएच.डी. डिग्री के लिए प्रस्तुत मूल शोध प्रस्तुत करने वाले एक लंबे, औपचारिक दस्तावेज को आम तौर पर क्या कहा जाता है:"
        ],
        "opts": [
          ["Synopsis", "सिनोप्सिस"],
          ["Article", "लेख"],
          ["Thesis / Dissertation", "थीसिस / शोध प्रबंध"],
          ["Abstract", "सार (Abstract)"]
        ],
        "correct": 2
      }
    ],
    "ugcNotes": [
      "For UGC NET: Ethics in research is heavily tested. Falsification (manipulating data) and Fabrication (making up data) are severe academic misconducts. Plagiarism checks are mandatory per UGC regulations (allowable limit usually 10%).",
      "UGC NET के लिए: शोध में नैतिकता (Ethics) का भारी परीक्षण किया जाता है। मिथ्याकरण (Falsification - डेटा में हेरफेर) और मनगढ़ंत (Fabrication - डेटा बनाना) गंभीर अकादमिक कदाचार हैं। UGC के नियमों के अनुसार साहित्यिक चोरी की जांच अनिवार्य है (अनुमेय सीमा आमतौर पर 10%)।"
    ],
    "ugcQ": [
      [
        "Q: What is the term for submitting one's own previously published work as new without citation? A: Self-plagiarism.",
        "प्र: बिना उद्धरण के अपने स्वयं के पहले प्रकाशित कार्य को नए के रूप में प्रस्तुत करने के लिए क्या शब्द है? उ: स्व-साहित्यिक चोरी (Self-plagiarism)।"
      ]
    ]
  },
  {
    "id": "t6",
    "num": 6,
    "title": [
      "Citation Style & Methods",
      "उद्धरण शैली (Citation Style) और विधियाँ"
    ],
    "introduction": [
      "Citation is the formal method of giving credit to the original authors whose ideas, words, or data you have used in your research. Proper citation acknowledges intellectual property, helps readers locate the original sources, and protects the researcher from accusations of plagiarism. Different academic disciplines have developed specific formatting styles for citations and referencing, the most prominent being APA (Psychology/Social Sciences) and MLA (Humanities/Literature).",
      "उद्धरण (Citation) मूल लेखकों को श्रेय देने की औपचारिक विधि है जिनके विचारों, शब्दों या डेटा का उपयोग आपने अपने शोध में किया है। उचित उद्धरण बौद्धिक संपदा को स्वीकार करता है, पाठकों को मूल स्रोतों का पता लगाने में मदद करता है, और शोधकर्ता को साहित्यिक चोरी के आरोपों से बचाता है। विभिन्न शैक्षणिक विषयों ने उद्धरणों और संदर्भों के लिए विशिष्ट स्वरूपण (formatting) शैलियाँ विकसित की हैं, जिनमें सबसे प्रमुख APA (मनोविज्ञान/सामाजिक विज्ञान) और MLA (मानविकी/साहित्य) हैं।"
    ],
    "concepts": [
      {
        "heading": [
          "APA and MLA Styles",
          "APA और MLA शैलियाँ"
        ],
        "body": [
          "- APA Style (American Psychological Association): Widely used in Social Sciences. Emphasizes the publication date. In-text citation format: (Author's Last Name, Year, p. Page Number). E.g., (Smith, 2019, p. 42).\n- MLA Style (Modern Language Association): Widely used in Humanities and Literature. Emphasizes the author and page. In-text citation format: (Author's Last Name Page Number). E.g., (Smith 42).",
          "- APA शैली (अमेरिकन साइकोलॉजिकल एसोसिएशन): सामाजिक विज्ञान में व्यापक रूप से उपयोग किया जाता है। प्रकाशन की तारीख पर जोर देता है। पाठ के भीतर उद्धरण प्रारूप (In-text citation): (लेखक का अंतिम नाम, वर्ष, पृष्ठ संख्या)। उदा., (स्मिथ, 2019, पृ. 42)।\n- MLA शैली (मॉडर्न लैंग्वेज एसोसिएशन): मानविकी और साहित्य में व्यापक रूप से उपयोग किया जाता है। लेखक और पृष्ठ पर जोर देता है। पाठ के भीतर उद्धरण प्रारूप: (लेखक का अंतिम नाम पृष्ठ संख्या)। उदा., (स्मिथ 42)।"
        ]
      },
      {
        "heading": [
          "Footnotes, Endnotes, References, and Bibliography",
          "फुटनोट, एंडनोट, संदर्भ (References) और ग्रंथ सूची (Bibliography)"
        ],
        "body": [
          "- Footnotes/Endnotes: Notes placed at the bottom of the page (footnotes) or at the end of the chapter/document (endnotes) to provide additional context or citations without cluttering the main text.\n- References: A list of all the sources that were specifically cited in the text of the research document.\n- Bibliography: A broader list that includes all sources cited, PLUS any other sources consulted during the research, even if not directly cited in the text.",
          "- फुटनोट/एंडनोट: मुख्य पाठ को अव्यवस्थित किए बिना अतिरिक्त संदर्भ या उद्धरण प्रदान करने के लिए पृष्ठ के नीचे (फुटनोट) या अध्याय/दस्तावेज़ के अंत में (एंडनोट) रखे गए नोट।\n- संदर्भ (References): उन सभी स्रोतों की सूची जिन्हें विशेष रूप से शोध दस्तावेज के पाठ में उद्धृत किया गया था।\n- ग्रंथ सूची (Bibliography): एक व्यापक सूची जिसमें सभी उद्धृत स्रोत शामिल हैं, साथ ही शोध के दौरान परामर्श किए गए किसी भी अन्य स्रोत, भले ही पाठ में सीधे उद्धृत न किए गए हों।"
        ]
      }
    ],
    "quotes": [
      [
        "\"Citation is the academic equivalent of saying 'Thank You'.\" — Anonymous",
        "\"उद्धरण (Citation) 'थैंक यू' कहने के अकादमिक समकक्ष है।\" — अज्ञात"
      ],
      [
        "Reference: 'Publication Manual of the American Psychological Association' (APA).",
        "संदर्भ: 'पब्लिकेशन मैनुअल ऑफ द अमेरिकन साइकोलॉजिकल एसोसिएशन' (APA)।"
      ]
    ],
    "evaluation": [
      "Evaluating citation practices reveals an increasingly complex administrative burden on researchers. The strict adherence to microscopic formatting rules (where a misplaced comma in an APA citation is deemed an error) often distracts from the actual content and quality of the research. However, this standardization is essential in a globalized academic world. Without universally accepted styles like APA or MLA, cross-referencing global knowledge would be chaotic. The advent of Reference Management Software (like Mendeley, Zotero) has fortunately automated much of this tedious formatting work.",
      "उद्धरण प्रथाओं का मूल्यांकन शोधकर्ताओं पर एक तेजी से जटिल प्रशासनिक बोझ को उजागर करता है। सूक्ष्म स्वरूपण नियमों (जहां APA उद्धरण में गलत जगह पर लगाए गए अल्पविराम को भी त्रुटि माना जाता है) का कड़ाई से पालन अक्सर शोध की वास्तविक सामग्री और गुणवत्ता से ध्यान भटकाता है। हालांकि, यह मानकीकरण वैश्वीकृत अकादमिक दुनिया में आवश्यक है। APA या MLA जैसी सार्वभौमिक रूप से स्वीकृत शैलियों के बिना, वैश्विक ज्ञान का क्रॉस-रेफ़रेंसिंग अराजक होगा। संदर्भ प्रबंधन सॉफ्टवेयर (जैसे Mendeley, Zotero) के आगमन ने सौभाग्य से इस थकाऊ स्वरूपण कार्य को स्वचालित (automate) कर दिया है।"
    ],
    "conclusion": [
      "In conclusion, mastering citation styles is non-negotiable for academic writing. Whether using APA for political science or MLA for literature, proper referencing demonstrates the researcher's rigorous literature review, intellectual honesty, and respect for the academic community. Knowing the distinction between a reference list and a bibliography ensures the document is presented with professional perfection.",
      "निष्कर्ष में, अकादमिक लेखन के लिए उद्धरण शैलियों (citation styles) में महारत हासिल करना अनिवार्य है। चाहे राजनीति विज्ञान के लिए APA का उपयोग कर रहे हों या साहित्य के लिए MLA का, उचित संदर्भ शोधकर्ता की कठोर साहित्य समीक्षा, बौद्धिक ईमानदारी और अकादमिक समुदाय के प्रति सम्मान को प्रदर्शित करता है। संदर्भ सूची (reference list) और ग्रंथ सूची (bibliography) के बीच का अंतर जानने से यह सुनिश्चित होता है कि दस्तावेज़ पेशेवर पूर्णता के साथ प्रस्तुत किया गया है।"
    ],
    "shortQ": [
      [
        "What does APA stand for?",
        "APA का पूर्ण रूप क्या है?"
      ],
      [
        "What is the difference between a Reference List and a Bibliography?",
        "संदर्भ सूची (Reference List) और ग्रंथ सूची (Bibliography) के बीच क्या अंतर है?"
      ],
      [
        "Where are Endnotes placed in a document?",
        "दस्तावेज़ में एंडनोट्स (Endnotes) कहाँ रखे जाते हैं?"
      ],
      [
        "Give an example of an in-text citation in MLA style.",
        "MLA शैली में पाठ के भीतर उद्धरण (in-text citation) का एक उदाहरण दें।"
      ],
      [
        "Why do we need citation styles?",
        "हमें उद्धरण शैलियों (citation styles) की आवश्यकता क्यों है?"
      ]
    ],
    "longQ": [
      [
        "Explain the importance of Citation and Referencing in academic research.",
        "अकादमिक शोध में उद्धरण और संदर्भ (Citation and Referencing) के महत्व की व्याख्या करें।"
      ],
      [
        "Differentiate between APA and MLA citation styles. Where is each primarily used?",
        "APA और MLA उद्धरण शैलियों के बीच अंतर करें। प्रत्येक का मुख्य रूप से कहाँ उपयोग किया जाता है?"
      ],
      [
        "Distinguish between Footnotes, Endnotes, References, and Bibliography.",
        "फुटनोट, एंडनोट, संदर्भ और ग्रंथ सूची के बीच अंतर स्पष्ट करें।"
      ],
      [
        "Discuss the role of Reference Management Software in modern research.",
        "आधुनिक शोध में संदर्भ प्रबंधन सॉफ्टवेयर की भूमिका पर चर्चा करें।"
      ],
      [
        "\"Proper referencing is the shield against plagiarism.\" Evaluate this statement.",
        "\"उचित संदर्भ साहित्यिक चोरी के खिलाफ ढाल है।\" इस कथन का मूल्यांकन करें।"
      ]
    ],
    "mcqs": [
      {
        "q": [
          "Which citation style is mostly used in the Social Sciences?",
          "सामाजिक विज्ञान में अधिकतर किस उद्धरण शैली का उपयोग किया जाता है?"
        ],
        "opts": [
          ["MLA", "MLA"],
          ["APA", "APA"],
          ["Chicago", "शिकागो"],
          ["IEEE", "IEEE"]
        ],
        "correct": 1
      },
      {
        "q": [
          "A list of all sources consulted during research, regardless of whether they were cited in the text, is called:",
          "शोध के दौरान परामर्श किए गए सभी स्रोतों की सूची, भले ही वे पाठ में उद्धृत किए गए हों या नहीं, क्या कहलाती है:"
        ],
        "opts": [
          ["Reference List", "संदर्भ सूची"],
          ["Index", "इंडेक्स"],
          ["Bibliography", "ग्रंथ सूची (Bibliography)"],
          ["Glossary", "शब्दावली"]
        ],
        "correct": 2
      },
      {
        "q": [
          "In APA format, which of the following is the correct in-text citation?",
          "APA प्रारूप में, निम्नलिखित में से कौन सा सही इन-टेक्स्ट उद्धरण है?"
        ],
        "opts": [
          ["(Smith 2019, p. 12)", "(स्मिथ 2019, पृ. 12)"],
          ["(Smith, 2019, p. 12)", "(स्मिथ, 2019, पृ. 12)"],
          ["(Smith, p. 12, 2019)", "(स्मिथ, पृ. 12, 2019)"],
          ["(Smith 12)", "(स्मिथ 12)"]
        ],
        "correct": 1
      },
      {
        "q": [
          "Notes providing explanatory comments or citations placed at the very bottom of a page are called:",
          "किसी पृष्ठ के बिल्कुल नीचे रखे गए व्याख्यात्मक टिप्पणियों या उद्धरणों को प्रदान करने वाले नोट कहलाते हैं:"
        ],
        "opts": [
          ["Footnotes", "फुटनोट"],
          ["Endnotes", "एंडनोट"],
          ["Headings", "शीर्षक"],
          ["Appendices", "परिशिष्ट (Appendices)"]
        ],
        "correct": 0
      },
      {
        "q": [
          "MLA stands for:",
          "MLA का पूर्ण रूप है:"
        ],
        "opts": [
          ["Modern Linguistic Association", "मॉडर्न लिंग्विस्टिक एसोसिएशन"],
          ["Medical Literature Association", "मेडिकल लिटरेचर एसोसिएशन"],
          ["Modern Language Association", "मॉडर्न लैंग्वेज एसोसिएशन"],
          ["Modern Legal Association", "मॉडर्न लीगल एसोसिएशन"]
        ],
        "correct": 2
      }
    ],
    "ugcNotes": [
      "For UGC NET: Be prepared to identify the correct format of a book citation in APA style. Example of APA Book Citation: Author, A. A. (Year of publication). Title of work: Capital letter also for subtitle. Publisher Name. Remember: In APA, the publication year comes immediately after the author's name.",
      "UGC NET के लिए: APA शैली में पुस्तक उद्धरण के सही प्रारूप की पहचान करने के लिए तैयार रहें। APA पुस्तक उद्धरण का उदाहरण: लेखक, A. A. (प्रकाशन का वर्ष)। कार्य का शीर्षक। प्रकाशक का नाम। याद रखें: APA में, प्रकाशन वर्ष सीधे लेखक के नाम के बाद आता है।"
    ],
    "ugcQ": [
      [
        "Q: What style requires the author's full first name in the reference list? A: MLA (APA only uses initials).",
        "प्र: संदर्भ सूची में लेखक के पूर्ण प्रथम नाम की आवश्यकता किस शैली में होती है? उ: MLA (APA केवल आद्याक्षर या initials का उपयोग करता है)।"
      ]
    ]
  }
];

export default function DissertationPage() {
  const { language } = useAppStore();
  const paperTitle = language === 'en' ? 'PSC-D-416: Research Methodology — Dissertation/Project' : 'PSC-D-416: रिसर्च मेथडोलॉजी — शोध प्रबंध/प्रोजेक्ट';
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
              {t('PG Semester IV — MSE Notes & Project Guidelines', 'PG सेमेस्टर IV — MSE नोट्स और प्रोजेक्ट दिशानिर्देश')}
            </p>
          </div>
        </div>

        {/* GUIDELINES SECTION */}
        <div className="bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 text-gray-900 dark:text-gray-100 mb-8 shadow-xl relative overflow-hidden border border-amber-200 dark:border-gray-700">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-amber-600 dark:text-amber-400">
            <BookOpen className="w-32 h-32" />
          </div>
          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-amber-700 dark:text-amber-400">
              <Info className="w-6 h-6" />
              {t('Project & Dissertation Guidelines (70 Marks)', 'प्रोजेक्ट और शोध प्रबंध दिशानिर्देश (70 अंक)')}
            </h2>
            
            <div className="space-y-4 text-sm text-gray-800 dark:text-gray-200">
              <div className="bg-white/60 dark:bg-gray-800/80 p-4 rounded-xl border border-amber-200/50 dark:border-gray-600">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{t('Evaluation Heads:', 'मूल्यांकन के मुख्य बिंदु:')}</h3>
                <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li>Motivation for choice of topic</li>
                  <li>Project dissertation design</li>
                  <li>Methodology and Content depth</li>
                  <li>Results and Discussion</li>
                  <li>Future Scope & References</li>
                  <li>Application of Research technique</li>
                  <li>Report Presentation & Viva-voce</li>
                </ul>
              </div>

              <div className="bg-white/60 dark:bg-gray-800/80 p-4 rounded-xl border border-amber-200/50 dark:border-gray-600">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{t('Formatting Specifications:', 'प्रारूपण (Formatting) विनिर्देश:')}</h3>
                <ul className="list-none space-y-2">
                  <li><span className="font-semibold text-amber-700 dark:text-amber-400">Size:</span> A4, Printed on one side.</li>
                  <li><span className="font-semibold text-amber-700 dark:text-amber-400">Font:</span> Times New Roman/Arial (Eng - 12pt) | Kruti Dev 010 (Hindi - 14pt).</li>
                  <li><span className="font-semibold text-amber-700 dark:text-amber-400">Headings:</span> ALL CAPS, Bold, 15pt. Sub-headings: Bold, 14pt.</li>
                  <li><span className="font-semibold text-amber-700 dark:text-amber-400">Spacing:</span> 1.5 line spacing. Triple spacing before/after subheadings.</li>
                  <li><span className="font-semibold text-amber-700 dark:text-amber-400">Margins:</span> Left: 4cm, Right/Top: 2cm, Bottom: 2.5cm. No ornamental borders.</li>
                  <li><span className="font-semibold text-amber-700 dark:text-amber-400">Citation Style:</span> APA (6th edition) for Social Sciences.</li>
                </ul>
              </div>
              
              <p className="italic text-xs text-gray-600 dark:text-gray-400 mt-4">
                {t('Note: Submit 2 copies forwarded by HOD and signed by the supervisor. Preliminary sections must include Declaration, Certificates, Plagiarism declaration, and Abstract.', 'नोट: विभागाध्यक्ष द्वारा अग्रेषित और पर्यवेक्षक द्वारा हस्ताक्षरित 2 प्रतियां जमा करें। प्रारंभिक खंडों में घोषणा, प्रमाण पत्र, साहित्यिक चोरी (Plagiarism) घोषणा और सार (Abstract) शामिल होना चाहिए।')}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-5 text-white mb-6">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">{t('MSE: Research Methodology Syllabus (30 Marks)', 'MSE: अनुसंधान पद्धति सिलेबस (30 अंक)')}</span>
          </div>
          <p className="text-sm text-white/80">
            {t('Internal Assessment: Group A (10x1=10 Marks) Compulsory MCQ | Group B (4x5=20 Marks) Descriptive', 'आंतरिक मूल्यांकन: ग्रुप A (10x1=10 अंक) अनिवार्य MCQ | ग्रुप B (4x5=20 अंक) वर्णनात्मक')}
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

      </div>
    </div>
  );
}
