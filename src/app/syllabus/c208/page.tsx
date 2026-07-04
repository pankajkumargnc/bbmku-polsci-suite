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

/* ─── ALL 10 TOPIC NOTES FOR PSC-C-208 ─── */
const NOTES: TopicNote[] = [
  // TOPIC 1
  {
    id: 't1', num: 1,
    title: ["Meaning, Nature and Scope of Public Administration", "लोक प्रशासन का अर्थ, प्रकृति और दायरा"],
    introduction: [
      "Public Administration is the machinery used by the state to implement its policies and programs. It is the action part of government, the means by which the purposes and goals of government are realized. Woodrow Wilson, the father of Public Administration, defined it as \"the detailed and systematic execution of public law.\" In modern times, the role of public administration has expanded from merely maintaining law and order to managing a complex welfare state. It is both a discipline of academic study and a professional practice. Understanding its meaning, nature, and scope is fundamental to the study of how modern states function.",
      "लोक प्रशासन वह तंत्र है जिसका उपयोग राज्य अपनी नीतियों और कार्यक्रमों को लागू करने के लिए करता है। यह सरकार का क्रियान्वयन वाला हिस्सा है। लोक प्रशासन के जनक वुडरो विल्सन ने इसे \"सार्वजनिक कानून के विस्तृत और व्यवस्थित निष्पादन\" के रूप में परिभाषित किया। आधुनिक समय में, लोक प्रशासन की भूमिका केवल कानून व्यवस्था बनाए रखने से बढ़कर एक जटिल कल्याणकारी राज्य के प्रबंधन तक विस्तारित हो गई है। यह एक अकादमिक अध्ययन का विषय और पेशेवर अभ्यास दोनों है।"
    ],
    concepts: [
      {
        heading: ["Meaning and Definitions", "अर्थ और परिभाषाएं"],
        body: [
          "Meaning:\n• 'Public' = Government/State; 'Administration' = To manage, direct or serve (from Latin 'ad' + 'ministrare').\n• It is the management of governmental affairs at all levels (national, state, local).\n\nKey Definitions:\n1. Woodrow Wilson (1887): \"Public administration is detailed and systematic execution of public law. Every particular application of general law is an act of administration.\"\n2. L.D. White: \"Public administration consists of all those operations having for their purpose the fulfillment or enforcement of public policy.\"\n3. Dimock & Dimock: \"Public administration is the area of study and practice where law and policy are recommended and carried out.\"\n4. F.A. Nigro: It is the \"co-operative group effort in a public setting.\"",
          "अर्थ:\n• 'लोक' = सरकार/राज्य; 'प्रशासन' = प्रबंधन, निर्देशन या सेवा करना (लैटिन शब्द 'ad' + 'ministrare' से)।\n• यह सभी स्तरों (राष्ट्रीय, राज्य, स्थानीय) पर सरकारी मामलों का प्रबंधन है।\n\nप्रमुख परिभाषाएं:\n1. वुडरो विल्सन (1887): \"लोक प्रशासन सार्वजनिक कानून का विस्तृत और व्यवस्थित निष्पादन है। सामान्य कानून का हर विशेष अनुप्रयोग प्रशासन का एक कार्य है।\"\n2. एल.डी. व्हाइट: \"लोक प्रशासन में वे सभी कार्य शामिल हैं जिनका उद्देश्य सार्वजनिक नीति को पूरा करना या लागू करना है।\"\n3. डिमॉक और डिमॉक: \"लोक प्रशासन अध्ययन और अभ्यास का वह क्षेत्र है जहां कानून और नीति की सिफारिश की जाती है और उसे क्रियान्वित किया जाता है।\""
        ]
      },
      {
        heading: ["Nature and Scope", "प्रकृति और क्षेत्र"],
        body: [
          "NATURE of Public Administration:\nTwo divergent views exist regarding its nature:\n1. Integral View (L.D. White, Dimock): Administration consists of ALL activities (manual, clerical, managerial, technical) undertaken to realize a public policy. From a peon to the secretary, everyone is an administrator.\n2. Managerial View (Simon, Gulick): Administration consists only of the managerial activities (planning, organizing, directing). Clerical and manual works are excluded.\n\nSCOPE of Public Administration:\n1. POSDCORB View (Luther Gulick): Narrow scope focused on organizational techniques. \n   • P - Planning, O - Organizing, S - Staffing, D - Directing, CO - Coordinating, R - Reporting, B - Budgeting.\n2. Subject Matter View: POSDCORB is 'technique-oriented' but ignores the 'substance'. Administration must also include the subject matter of services like defense, education, health, agriculture.\n3. Modern/Broader Scope: Today, it includes policy formulation, human relations, comparative studies, public enterprises, and ecology of administration.",
          "लोक प्रशासन की प्रकृति:\nदो भिन्न दृष्टिकोण हैं:\n1. समग्र दृष्टिकोण (एल.डी. व्हाइट, डिमॉक): प्रशासन में सार्वजनिक नीति को साकार करने के लिए की जाने वाली सभी गतिविधियां (शारीरिक, लिपिकीय, प्रबंधकीय) शामिल हैं। चपरासी से लेकर सचिव तक सभी प्रशासक हैं।\n2. प्रबंधकीय दृष्टिकोण (साइमन, गुलिक): प्रशासन में केवल प्रबंधकीय गतिविधियां शामिल हैं। लिपिकीय और शारीरिक कार्य बाहर हैं।\n\nलोक प्रशासन का क्षेत्र:\n1. POSDCORB दृष्टिकोण (लूथर गुलिक): संगठनात्मक तकनीकों पर केंद्रित संकीर्ण क्षेत्र। (योजना, आयोजन, नियुक्तियां, निर्देशन, समन्वय, रिपोर्टिंग, बजटिंग)।\n2. विषय-वस्तु दृष्टिकोण: POSDCORB केवल 'तकनीक' है, 'सार' को अनदेखा करता है। रक्षा, शिक्षा, स्वास्थ्य जैसे विषय शामिल होने चाहिए।\n3. आधुनिक/व्यापक क्षेत्र: नीति निर्माण, मानवीय संबंध, पारिस्थितिकी।"
        ]
      }
    ],
    quotes: [
      ["Woodrow Wilson: \"It is getting harder to run a constitution than to frame one.\" (The Study of Administration, 1887)", "वुडरो विल्सन: \"संविधान बनाने की तुलना में उसे चलाना कठिन होता जा रहा है।\""],
      ["Luther Gulick: \"Administration has to do with getting things done; with the accomplishment of defined objectives.\"", "लूथर गुलिक: \"प्रशासन का संबंध कार्यों को पूरा करने से है; परिभाषित उद्देश्यों की प्राप्ति से है।\""],
      ["Dwight Waldo: \"Public administration is the art and science of management as applied to affairs of state.\"", "ड्वाइट वाल्डो: \"लोक प्रशासन राज्य के मामलों पर लागू प्रबंधन की कला और विज्ञान है।\""],
    ],
    evaluation: [
      "The debate over the nature and scope of Public Administration reflects its evolution. The POSDCORB view, while providing a neat framework for organizational management, was rightly criticized for being \"technique-oriented\" and ignoring the social context. A purely managerial view fails to capture the human element of public service. Today, the scope has widened immensely because the state has transformed from a 'police state' to a 'welfare state'. However, this vast expansion raises concerns about bureaucratic red-tape, inefficiency, and the lack of accountability, leading to contemporary demands for privatization and 'New Public Management'.",
      "लोक प्रशासन की प्रकृति और क्षेत्र पर बहस इसके विकास को दर्शाती है। POSDCORB दृष्टिकोण की \"तकनीक-उन्मुख\" होने के लिए सही आलोचना की गई थी। एक विशुद्ध प्रबंधकीय दृष्टिकोण सार्वजनिक सेवा के मानवीय तत्व को पकड़ने में विफल रहता है। आज, राज्य के 'कल्याणकारी राज्य' में बदलने के कारण इसका क्षेत्र बहुत विस्तृत हो गया है। हालांकि, यह विशाल विस्तार लालफीताशाही, अक्षमता और जवाबदेही की कमी के बारे में चिंताएं पैदा करता है।"
    ],
    conclusion: [
      "Public Administration is an essential instrument of the modern state. Its nature combines both managerial techniques and holistic implementation activities, while its scope has expanded beyond POSDCORB to encompass the entire spectrum of welfare and developmental activities. As long as the state exists, Public Administration will remain the indispensable bridge between political intent and practical reality.",
      "लोक प्रशासन आधुनिक राज्य का एक आवश्यक उपकरण है। इसकी प्रकृति प्रबंधकीय तकनीकों और समग्र कार्यान्वयन गतिविधियों दोनों को जोड़ती है, जबकि इसका क्षेत्र POSDCORB से आगे बढ़कर कल्याण और विकासात्मक गतिविधियों के पूरे स्पेक्ट्रम को शामिल करता है।"
    ],
    shortQ: [
      ["Who is known as the father of Public Administration?", "लोक प्रशासन के जनक के रूप में किसे जाना जाता है?"],
      ["What does POSDCORB stand for?", "POSDCORB का क्या अर्थ है?"],
      ["Differentiate between the integral and managerial views of Public Administration.", "लोक प्रशासन के समग्र और प्रबंधकीय दृष्टिकोणों के बीच अंतर करें।"],
      ["Define Public Administration according to Woodrow Wilson.", "वुडरो विल्सन के अनुसार लोक प्रशासन को परिभाषित करें।"],
      ["Who coined the acronym POSDCORB?", "POSDCORB संक्षिप्त नाम किसने गढ़ा?"],
    ],
    longQ: [
      ["Discuss the meaning and nature of Public Administration.", "लोक प्रशासन के अर्थ और प्रकृति पर चर्चा करें।"],
      ["Critically examine the POSDCORB view of the scope of Public Administration.", "लोक प्रशासन के क्षेत्र के POSDCORB दृष्टिकोण का आलोचनात्मक परीक्षण करें।"],
      ["How has the scope of Public Administration changed in the modern welfare state?", "आधुनिक कल्याणकारी राज्य में लोक प्रशासन का क्षेत्र कैसे बदल गया है?"],
      ["'It is getting harder to run a constitution than to frame one.' Explain this statement by Wilson.", "'संविधान बनाने की तुलना में उसे चलाना कठिन होता जा रहा है।' विल्सन के इस कथन की व्याख्या करें।"],
      ["Compare the subject-matter view with the POSDCORB view of Public Administration.", "लोक प्रशासन के विषय-वस्तु दृष्टिकोण की POSDCORB दृष्टिकोण से तुलना करें।"],
    ],
    mcqs: [
      { q: ["Who is the author of 'The Study of Administration' (1887)?", "'द स्टडी ऑफ एडमिनिस्ट्रेशन' (1887) के लेखक कौन हैं?"], opts: [["L.D. White", "एल.डी. व्हाइट"], ["Luther Gulick", "लूथर गुलिक"], ["Woodrow Wilson", "वुडरो विल्सन"], ["Max Weber", "मैक्स वेबर"]], correct: 2 },
      { q: ["The 'S' in POSDCORB stands for:", "POSDCORB में 'S' का अर्थ है:"], opts: [["Supervision", "पर्यवेक्षण"], ["Staffing", "स्टाफिंग (नियुक्तियां)"], ["Strategy", "रणनीति"], ["Subordination", "अधीनता"]], correct: 1 },
      { q: ["Who among the following supports the Managerial view of Public Administration?", "निम्नलिखित में से कौन लोक प्रशासन के प्रबंधकीय दृष्टिकोण का समर्थन करता है?"], opts: [["L.D. White", "एल.डी. व्हाइट"], ["Dimock", "डिमॉक"], ["Herbert Simon", "हर्बर्ट साइमन"], ["F.A. Nigro", "एफ.ए. निग्रो"]], correct: 2 },
      { q: ["'CO' in POSDCORB stands for:", "POSDCORB में 'CO' का अर्थ है:"], opts: [["Cooperation", "सहयोग"], ["Coordinating", "कोऑर्डिनेटिंग (समन्वय)"], ["Commanding", "कमांडिंग"], ["Controlling", "कंट्रोलिंग"]], correct: 1 },
      { q: ["Which view considers every employee from top to bottom as part of administration?", "कौन सा दृष्टिकोण ऊपर से नीचे तक हर कर्मचारी को प्रशासन का हिस्सा मानता है?"], opts: [["Managerial view", "प्रबंधकीय दृष्टिकोण"], ["Integral view", "समग्र दृष्टिकोण"], ["POSDCORB view", "POSDCORB दृष्टिकोण"], ["Ecological view", "पारिस्थितिक दृष्टिकोण"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Woodrow Wilson's essay \"The Study of Administration\" (1887) in Political Science Quarterly marked the birth of the discipline.\n• L.D. White wrote the first textbook: \"Introduction to the Study of Public Administration\" (1926).\n• POSDCORB: Coined by Luther Gulick and Lyndall Urwick in \"Papers on the Science of Administration\" (1937).\n• Integral View advocates: L.D. White, Dimock, Woodrow Wilson, Percy McQueen.\n• Managerial View advocates: Luther Gulick, Herbert Simon, Smithburg, Thompson.",
      "UGC NET फोकस:\n• वुडरो विल्सन का निबंध \"द स्टडी ऑफ एडमिनिस्ट्रेशन\" (1887) अनुशासन का जन्म।\n• एल.डी. व्हाइट ने पहली पाठ्यपुस्तक लिखी (1926)।\n• POSDCORB: लूथर गुलिक और लिंडल उर्विक द्वारा (1937)।\n• समग्र दृष्टिकोण: व्हाइट, डिमॉक। प्रबंधकीय: साइमन, गुलिक।"
    ],
    ugcQ: [
      ["Q: Who wrote the first textbook on Public Administration? A: Leonard D. White (1926).", "प्र: लोक प्रशासन पर पहली पाठ्यपुस्तक किसने लिखी? उ: लियोनार्ड डी. व्हाइट (1926)।"],
      ["Q: What was the main argument of Wilson's 1887 essay? A: Politics-Administration Dichotomy (Administration should be separate from political meddling).", "प्र: विल्सन के 1887 के निबंध का मुख्य तर्क क्या था? उ: राजनीति-प्रशासन द्वैतवाद (प्रशासन को राजनीतिक हस्तक्षेप से अलग होना चाहिए)।"],
    ],
  },

  // TOPIC 2
  {
    id: 't2', num: 2,
    title: ["Evolution of Public Administration", "लोक प्रशासन का विकास"],
    introduction: [
      "The evolution of Public Administration as an academic discipline is a fascinating journey that began in the late 19th century. From Woodrow Wilson's call to separate administration from politics, to the modern focus on public policy and new public management, the discipline has undergone several paradigm shifts. Nicholas Henry divides this evolution into distinct \"paradigms\" based on the shifting focus of the discipline—sometimes emphasizing 'locus' (where it is studied, i.e., government bureaucracy) and sometimes 'focus' (what is studied, i.e., principles of management). Understanding these stages is crucial to grasp how the study of government machinery has adapted to changing societal needs.",
      "एक अकादमिक विषय के रूप में लोक प्रशासन का विकास एक आकर्षक यात्रा है जो 19वीं सदी के अंत में शुरू हुई। प्रशासन को राजनीति से अलग करने के वुडरो विल्सन के आह्वान से लेकर सार्वजनिक नीति पर आधुनिक जोर तक, विषय में कई बदलाव हुए हैं। निकोलस हेनरी ने इस विकास को अलग-अलग 'प्रतिमानों' (Paradigms) में विभाजित किया है।"
    ],
    concepts: [
      {
        heading: ["Phase I & II: The Foundation and Golden Era", "चरण I और II: नींव और स्वर्ण युग"],
        body: [
          "Phase I: Politics-Administration Dichotomy (1887-1926):\n• Origin: Triggered by Woodrow Wilson's essay (1887).\n• Core Belief: Politics (policymaking) should be strictly separated from Administration (policy execution). \n• Key Figure: Frank J. Goodnow (Father of American Public Admin) published \"Politics and Administration\" (1900).\n• Milestone: L.D. White's first textbook in 1926.\n\nPhase II: Principles of Administration (1927-1937):\n• The Golden Era of the discipline.\n• Core Belief: Administration is a science with universal \"principles\" that apply to any organization (public or private).\n• Key Figures: W.F. Willoughby (\"Principles of Public Administration\", 1927), F.W. Taylor (Scientific Management), Henri Fayol.\n• Milestone: Gulick & Urwick's \"Papers on the Science of Administration\" (1937) which gave the POSDCORB formula.",
          "चरण I: राजनीति-प्रशासन द्वैतवाद (1887-1926):\n• उत्पत्ति: वुडरो विल्सन के निबंध (1887) से।\n• मुख्य विश्वास: राजनीति (नीति निर्माण) को प्रशासन (नीति निष्पादन) से सख्ती से अलग किया जाना चाहिए।\n• प्रमुख व्यक्ति: फ्रैंक जे. गुडनॉ (\"पॉलिटिक्स एंड एडमिनिस्ट्रेशन\", 1900)।\n\nचरण II: प्रशासन के सिद्धांत (1927-1937):\n• विषय का स्वर्ण युग।\n• मुख्य विश्वास: प्रशासन एक विज्ञान है जिसके सार्वभौमिक 'सिद्धांत' हैं जो किसी भी संगठन पर लागू होते हैं।\n• मील का पत्थर: गुलिक और उर्विक का POSDCORB सूत्र (1937)।"
        ]
      },
      {
        heading: ["Phase III, IV & V: Challenge, Identity Crisis and Modern Era", "चरण III, IV और V: चुनौती, पहचान का संकट और आधुनिक युग"],
        body: [
          "Phase III: Era of Challenge (1938-1947):\n• The \"principles\" and the \"dichotomy\" were severely challenged.\n• Chester Barnard and Elton Mayo (Human Relations) showed humans aren't just machines.\n• Herbert Simon (\"Administrative Behavior\", 1947) dismissed POSDCORB principles as mere \"proverbs\" and myths, emphasizing decision-making.\n• Robert Dahl argued that administration cannot be a science because it involves human behavior and values.\n\nPhase IV: Crisis of Identity (1948-1970):\n• With its foundations destroyed, the discipline faced an identity crisis.\n• Scholars either returned to Political Science (studying bureaucracy conceptually) or moved to Management/Business Administration (studying organizational theory).\n\nPhase V: Public Policy Perspective (1971-Present):\n• The discipline realized that administration cannot be separated from policymaking.\n• Focus shifted to Public Policy Analysis, interdisciplinary studies, and New Public Administration (NPA).\n• Later evolved into New Public Management (NPM) in the 1990s (focus on efficiency, privatization, customer service) and Good Governance.",
          "चरण III: चुनौती का युग (1938-1947):\n• 'सिद्धांतों' और 'द्वैतवाद' को चुनौती दी गई।\n• हर्बर्ट साइमन ने POSDCORB सिद्धांतों को महज 'कहावतें' और मिथक बताया। रॉबर्ट डाहल ने तर्क दिया कि प्रशासन विज्ञान नहीं हो सकता।\n\nचरण IV: पहचान का संकट (1948-1970):\n• अपनी नींव नष्ट होने के साथ, विषय को पहचान के संकट का सामना करना पड़ा। विद्वान या तो राजनीति विज्ञान या प्रबंधन की ओर चले गए।\n\nचरण V: सार्वजनिक नीति परिप्रेक्ष्य (1971-वर्तमान):\n• प्रशासन को नीति निर्माण से अलग नहीं किया जा सकता।\n• नया लोक प्रशासन (NPA) और नया सार्वजनिक प्रबंधन (NPM) का उदय।"
        ]
      }
    ],
    quotes: [
      ["Frank J. Goodnow: \"Politics has to do with policies or expressions of the state will. Administration has to do with the execution of these policies.\"", "फ्रैंक जे. गुडनॉ: \"राजनीति का संबंध राज्य की इच्छा की नीतियों या अभिव्यक्तियों से है। प्रशासन का संबंध इन नीतियों के निष्पादन से है।\""],
      ["Herbert Simon: \"The 'principles' of administration are exactly like proverbs... for almost every principle one can find an equally plausible and acceptable contradictory principle.\"", "हर्बर्ट साइमन: \"प्रशासन के 'सिद्धांत' बिल्कुल कहावतों की तरह हैं... लगभग हर सिद्धांत के लिए एक विरोधाभासी सिद्धांत पाया जा सकता है।\""],
    ],
    evaluation: [
      "The evolution of Public Administration highlights its struggle to balance political realities with managerial efficiency. The initial Politics-Administration dichotomy was unrealistic—administrators heavily influence policymaking. The search for universal 'principles' failed because human behavior in organizations is complex and culturally bound (as pointed out by Robert Dahl). Herbert Simon's devastating critique forced the discipline to mature. Today, the field is deeply interdisciplinary. While New Public Management brought corporate efficiency into government, critics argue it eroded the public service ethos, emphasizing 'customers' over 'citizens'.",
      "लोक प्रशासन का विकास प्रबंधकीय दक्षता के साथ राजनीतिक वास्तविकताओं को संतुलित करने के संघर्ष को उजागर करता है। प्रारंभिक राजनीति-प्रशासन द्वैतवाद अवास्तविक था। सार्वभौमिक 'सिद्धांतों' की खोज विफल रही क्योंकि संगठनों में मानव व्यवहार जटिल है। हर्बर्ट साइमन की आलोचना ने विषय को परिपक्व होने के लिए मजबूर किया। नया सार्वजनिक प्रबंधन (NPM) कॉर्पोरेट दक्षता लाया, लेकिन 'नागरिकों' के बजाय 'ग्राहकों' पर जोर देने के लिए इसकी आलोचना की जाती है।"
    ],
    conclusion: [
      "From Woodrow Wilson's simplistic dichotomy to the complex realities of modern public policy and governance, Public Administration has evolved significantly. It survived its mid-century identity crisis by abandoning rigid principles and embracing an interdisciplinary, policy-oriented approach. Today, it remains highly relevant in analyzing how states deliver services in an increasingly complex world.",
      "वुडरो विल्सन के सरल द्वैतवाद से लेकर आधुनिक सार्वजनिक नीति की जटिल वास्तविकताओं तक, लोक प्रशासन काफी विकसित हुआ है। आज, यह एक जटिल दुनिया में राज्य कैसे सेवाएं प्रदान करते हैं, इसका विश्लेषण करने में अत्यधिक प्रासंगिक बना हुआ है।"
    ],
    shortQ: [
      ["What is the Politics-Administration dichotomy?", "राजनीति-प्रशासन द्वैतवाद क्या है?"],
      ["Who called the principles of administration 'proverbs'?", "प्रशासन के सिद्धांतों को 'कहावतें' किसने कहा?"],
      ["Name the author of 'Politics and Administration' (1900).", "'पॉलिटिक्स एंड एडमिनिस्ट्रेशन' (1900) के लेखक का नाम बताएं।"],
      ["What was the 'Crisis of Identity' phase?", "'पहचान का संकट' चरण क्या था?"],
      ["Mention one reason why Robert Dahl argued public administration is not a science.", "रॉबर्ट डाहल ने लोक प्रशासन को विज्ञान क्यों नहीं माना, इसका एक कारण बताएं।"],
    ],
    longQ: [
      ["Trace the evolution of Public Administration as an academic discipline.", "एक अकादमिक विषय के रूप में लोक प्रशासन के विकास का पता लगाएं।"],
      ["Discuss the Politics-Administration dichotomy phase.", "राजनीति-प्रशासन द्वैतवाद चरण पर चर्चा करें।"],
      ["Why is the period from 1927-1937 called the Golden Era of principles?", "1927-1937 की अवधि को सिद्धांतों का स्वर्ण युग क्यों कहा जाता है?"],
      ["Evaluate Herbert Simon's critique of the principles of administration.", "प्रशासन के सिद्धांतों की हर्बर्ट साइमन की आलोचना का मूल्यांकन करें।"],
      ["Discuss the emergence of the Public Policy perspective in Public Administration.", "लोक प्रशासन में सार्वजनिक नीति परिप्रेक्ष्य के उद्भव पर चर्चा करें।"],
    ],
    mcqs: [
      { q: ["Frank J. Goodnow is considered the father of:", "फ्रैंक जे. गुडनॉ को किसका जनक माना जाता है?"], opts: [["Scientific Management", "वैज्ञानिक प्रबंधन"], ["American Public Administration", "अमेरिकी लोक प्रशासन"], ["Human Relations Theory", "मानव संबंध सिद्धांत"], ["New Public Administration", "नया लोक प्रशासन"]], correct: 1 },
      { q: ["Who dismissed POSDCORB principles as 'myth and proverbs'?", "POSDCORB सिद्धांतों को 'मिथक और कहावतें' कहकर किसने खारिज किया?"], opts: [["L.D. White", "एल.डी. व्हाइट"], ["Robert Dahl", "रॉबर्ट डाहल"], ["Herbert Simon", "हर्बर्ट साइमन"], ["Woodrow Wilson", "वुडरो विल्सन"]], correct: 2 },
      { q: ["The phase of 'Identity Crisis' occurred during:", "'पहचान का संकट' का चरण किस दौरान हुआ?"], opts: [["1887-1926", "1887-1926"], ["1927-1937", "1927-1937"], ["1938-1947", "1938-1947"], ["1948-1970", "1948-1970"]], correct: 3 },
      { q: ["Which scholar argued that the study of administration must be comparative to be a science?", "किस विद्वान ने तर्क दिया कि विज्ञान होने के लिए प्रशासन का अध्ययन तुलनात्मक होना चाहिए?"], opts: [["Robert Dahl", "रॉबर्ट डाहल"], ["Luther Gulick", "लूथर गुलिक"], ["F.W. Taylor", "एफ.डब्ल्यू. टेलर"], ["Henri Fayol", "हेनरी फेयोल"]], correct: 0 },
      { q: ["'Administrative Behavior' (1947) was written by:", "'एडमिनिस्ट्रेटिव बिहेवियर' (1947) किसके द्वारा लिखा गया था?"], opts: [["Chester Barnard", "चेस्टर बर्नार्ड"], ["Herbert Simon", "हर्बर्ट साइमन"], ["Dwight Waldo", "ड्वाइट वाल्डो"], ["Elton Mayo", "एल्टन मेयो"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Nicholas Henry's 5 Paradigms of Public Administration evolution.\n• Paradigm 1: Politics/Admin Dichotomy (Goodnow, Wilson).\n• Paradigm 2: Principles of Admin (Willoughby, Gulick, Urwick). Era of 'Orthodoxy'.\n• Paradigm 3: Public Admin as Political Science (Identity crisis).\n• Paradigm 4: Public Admin as Management (Identity crisis).\n• Paradigm 5: Public Admin as Public Admin (Public Policy focus).\n• Robert Dahl's 3 problems in making PA a science: Normative values, study of human behavior, lack of comparative studies.",
      "UGC NET फोकस:\n• निकोलस हेनरी के 5 प्रतिमान (Paradigms)।\n• प्रतिमान 1: राजनीति/प्रशासन द्वैतवाद। प्रतिमान 2: प्रशासन के सिद्धांत।\n• रॉबर्ट डाहल की PA को विज्ञान बनाने में 3 समस्याएं: मूल्य, मानव व्यवहार, तुलनात्मक अध्ययन की कमी।"
    ],
    ugcQ: [
      ["Q: What book did W.F. Willoughby write in 1927? A: Principles of Public Administration.", "प्र: W.F. Willoughby ने 1927 में कौन सी पुस्तक लिखी? उ: प्रिंसिपल्स ऑफ पब्लिक एडमिनिस्ट्रेशन।"],
      ["Q: Who is the Father of American Public Administration? A: Frank J. Goodnow.", "प्र: अमेरिकी लोक प्रशासन के जनक कौन हैं? उ: फ्रैंक जे. गुडनॉ।"],
    ],
  },

  // TOPIC 3
  {
    id: 't3', num: 3,
    title: ["New Public Administration (NPA)", "नवीन लोक प्रशासन (NPA)"],
    introduction: [
      "New Public Administration (NPA) emerged in the late 1960s as a powerful reaction against the traditional, orthodox public administration. Against the backdrop of social unrest, the Vietnam War, and civil rights movements in the USA, young scholars felt that traditional public administration—with its obsession with efficiency, economy, and POSDCORB principles—was completely detached from the severe social problems of the time. Initiated mainly at the Minnowbrook Conference of 1968 (driven by Dwight Waldo), NPA demanded that public administration must not just be efficient, but it must be relevant, equitable, and responsive to the needs of the marginalized sections of society.",
      "नया लोक प्रशासन (NPA) 1960 के दशक के अंत में पारंपरिक, रूढ़िवादी लोक प्रशासन के खिलाफ एक शक्तिशाली प्रतिक्रिया के रूप में उभरा। USA में सामाजिक अशांति के बीच, युवा विद्वानों ने महसूस किया कि पारंपरिक लोक प्रशासन (दक्षता और POSDCORB पर ध्यान) उस समय की सामाजिक समस्याओं से पूरी तरह कटा हुआ था। 1968 के मिनोब्रुक सम्मेलन (ड्वाइट वाल्डो द्वारा संचालित) में शुरू हुआ, NPA ने मांग की कि लोक प्रशासन न केवल कुशल होना चाहिए, बल्कि इसे प्रासंगिक, न्यायसंगत और समाज के हाशिए के वर्गों के प्रति उत्तरदायी होना चाहिए।"
    ],
    concepts: [
      {
        heading: ["Origin and Landmarks of NPA", "NPA की उत्पत्ति और मील के पत्थर"],
        body: [
          "Context of the 1960s:\n• Social turmoil, Vietnam War protests, poverty, urban riots, and racial tensions in the USA.\n• Traditional PA (focused on budgets and efficiency) had failed to solve real-world crises.\n\nKey Landmarks/Events:\n1. The Honey Report on Higher Education (1967): Highlighted the gap between PA study and practice.\n2. The Philadelphia Conference (1967): Discussed the theory and practice of PA under James C. Charlesworth.\n3. First Minnowbrook Conference (1968): The true birthplace of NPA. Young scholars gathered under Dwight Waldo at Syracuse University to reinvent the discipline.\n4. Publication of \"Toward a New Public Administration: The Minnowbrook Perspective\" (1971) edited by Frank Marini.\n5. Publication of \"Public Administration in a Time of Turbulence\" (1971) edited by Dwight Waldo.",
          "1960 के दशक का संदर्भ:\n• सामाजिक उथल-पुथल, वियतनाम युद्ध का विरोध, गरीबी।\n• पारंपरिक लोक प्रशासन वास्तविक दुनिया के संकटों को हल करने में विफल रहा था।\n\nप्रमुख मील के पत्थर:\n1. हनी रिपोर्ट (1967): PA अध्ययन और व्यवहार के बीच की खाई को उजागर किया।\n2. फिलाडेल्फिया सम्मेलन (1967)।\n3. प्रथम मिनोब्रुक सम्मेलन (1968): NPA का वास्तविक जन्मस्थान। ड्वाइट वाल्डो के नेतृत्व में युवा विद्वान एकत्र हुए।\n4. फ्रैंक मारिनी द्वारा संपादित पुस्तक (1971)।"
        ]
      },
      {
        heading: ["Themes and Goals of NPA", "NPA के विषय और लक्ष्य"],
        body: [
          "Anti-Goals of NPA (What it rejected):\n• Rejected Value-Neutrality: Administration cannot be strictly neutral; it must take a stand for the poor.\n• Rejected Politics-Administration Dichotomy: Administrators are actively involved in policymaking.\n• Rejected excessive focus on Efficiency and Economy at the cost of human needs.\n\nFive Key Goals/Themes of NPA (as identified by George Frederickson):\n1. Relevance: PA must study real, contemporary social problems, not just abstract management theories.\n2. Values: PA must explicitly reject value-neutrality. It must champion democratic values, human dignity, and social justice.\n3. Social Equity: The most important pillar. Administrators must act as champions for the underprivileged and reduce economic/social disparities. (Efficiency is meaningless if it doesn't help the poor).\n4. Change: Administration must be a catalyst for social change, fighting against the status quo and rigid bureaucracy.\n5. Client Focus/Responsiveness: Bureaucracy must be decentralized, democratized, and responsive to citizens (clients), not just to elected politicians.",
          "NPA के एंटी-गोल (जिसे उसने खारिज किया):\n• मूल्य-तटस्थता को खारिज किया: प्रशासन तटस्थ नहीं हो सकता; इसे गरीबों का पक्ष लेना चाहिए।\n• राजनीति-प्रशासन द्वैतवाद को खारिज किया।\n• केवल दक्षता और अर्थव्यवस्था पर ध्यान खारिज किया।\n\nNPA के पांच प्रमुख लक्ष्य (जॉर्ज फ्रेडरिकसन द्वारा):\n1. प्रासंगिकता: PA को वास्तविक सामाजिक समस्याओं का अध्ययन करना चाहिए।\n2. मूल्य: मूल्य-तटस्थता को खारिज करना, सामाजिक न्याय का समर्थन करना।\n3. सामाजिक समता: सबसे महत्वपूर्ण स्तंभ। प्रशासकों को वंचितों के लिए काम करना चाहिए।\n4. परिवर्तन: प्रशासन को सामाजिक परिवर्तन का उत्प्रेरक होना चाहिए।\n5. ग्राहक फोकस/उत्तरदायित्व: नौकरशाही को नागरिकों के प्रति उत्तरदायी होना चाहिए।"
        ]
      }
    ],
    quotes: [
      ["George Frederickson: \"New Public Administration adds social equity to the classic objectives of efficiency and economy.\"", "जॉर्ज फ्रेडरिकसन: \"नया लोक प्रशासन दक्षता और अर्थव्यवस्था के क्लासिक उद्देश्यों में सामाजिक समता जोड़ता है।\""],
      ["Dwight Waldo: \"Public administration in a time of turbulence requires a completely new perspective focused on values and ethics.\"", "ड्वाइट वाल्डो: \"अशांति के समय में लोक प्रशासन को मूल्यों और नैतिकता पर केंद्रित एक बिल्कुल नए दृष्टिकोण की आवश्यकता है।\""],
    ],
    evaluation: [
      "New Public Administration successfully humanized the discipline. It shattered the illusion of 'value-neutrality' and rightly argued that bureaucrats possess discretionary power which should be used to promote social justice. However, NPA was heavily criticized by traditionalists (like Robert Golembiewski) for being an \"illusion\" and lacking solid theoretical substance. It sounded more like political rhetoric than administrative theory. Expecting non-elected bureaucrats to act as social justice warriors also raised concerns about democratic accountability (since politicians, not bureaucrats, should set social goals). Nevertheless, NPA permanently shifted the focus from 'machinery' to 'people'.",
      "NPA ने विषय का सफलतापूर्वक मानवीकरण किया। इसने 'मूल्य-तटस्थता' के भ्रम को तोड़ा। हालांकि, पारंपरिक विचारकों ने इसे एक \"भ्रम\" होने और ठोस सैद्धांतिक सार की कमी के लिए आलोचना की। गैर-निर्वाचित नौकरशाहों से सामाजिक न्याय के लिए काम करने की उम्मीद करने से लोकतांत्रिक जवाबदेही के बारे में भी चिंताएं पैदा हुईं। फिर भी, NPA ने फोकस को 'मशीनरी' से 'लोगों' पर स्थायी रूप से स्थानांतरित कर दिया।"
    ],
    conclusion: [
      "The New Public Administration movement was a watershed moment that injected ethics, values, and social equity into a discipline previously obsessed with mechanical efficiency. Born out of the turbulence of the 1960s, it redefined the role of the public administrator from a neutral executor of rules to an active agent of social change and justice.",
      "नया लोक प्रशासन आंदोलन एक ऐतिहासिक क्षण था जिसने पहले से यांत्रिक दक्षता के प्रति जुनूनी विषय में नैतिकता, मूल्यों और सामाजिक समता को इंजेक्ट किया। इसने प्रशासक की भूमिका को नियमों के तटस्थ निष्पादक से सामाजिक परिवर्तन के सक्रिय एजेंट के रूप में फिर से परिभाषित किया।"
    ],
    shortQ: [
      ["What was the main venue where NPA was born?", "NPA का जन्म मुख्य रूप से किस स्थान पर हुआ था?"],
      ["Name any two key scholars associated with NPA.", "NPA से जुड़े किन्हीं दो प्रमुख विद्वानों के नाम बताएं।"],
      ["What is the core pillar/goal of New Public Administration?", "NPA का मुख्य स्तंभ/लक्ष्य क्या है?"],
      ["What did NPA reject about traditional public administration?", "NPA ने पारंपरिक लोक प्रशासन के बारे में क्या खारिज किया?"],
      ["Define 'Social Equity' in the context of NPA.", "NPA के संदर्भ में 'सामाजिक समता' को परिभाषित करें।"],
    ],
    longQ: [
      ["Discuss the factors that led to the emergence of New Public Administration.", "उन कारकों पर चर्चा करें जिनके कारण नया लोक प्रशासन का उद्भव हुआ।"],
      ["Explain the core themes and goals of New Public Administration.", "नया लोक प्रशासन के मुख्य विषयों और लक्ष्यों की व्याख्या करें।"],
      ["'NPA adds social equity to the classic objectives of efficiency and economy.' Discuss.", "'NPA दक्षता और अर्थव्यवस्था के उद्देश्यों में सामाजिक समता जोड़ता है।' चर्चा करें।"],
      ["Critically evaluate the impact and limitations of New Public Administration.", "नया लोक प्रशासन के प्रभाव और सीमाओं का आलोचनात्मक मूल्यांकन करें।"],
      ["Compare Traditional Public Administration with New Public Administration.", "पारंपरिक लोक प्रशासन की नया लोक प्रशासन से तुलना करें।"],
    ],
    mcqs: [
      { q: ["The First Minnowbrook Conference was held in the year:", "प्रथम मिनोब्रुक सम्मेलन किस वर्ष आयोजित किया गया था?"], opts: [["1960", "1960"], ["1968", "1968"], ["1971", "1971"], ["1988", "1988"]], correct: 1 },
      { q: ["Who was the chief patron/organizer of the First Minnowbrook Conference?", "प्रथम मिनोब्रुक सम्मेलन के मुख्य संरक्षक/आयोजक कौन थे?"], opts: [["Woodrow Wilson", "वुडरो विल्सन"], ["George Frederickson", "जॉर्ज फ्रेडरिकसन"], ["Dwight Waldo", "ड्वाइट वाल्डो"], ["Robert Dahl", "रॉबर्ट डाहल"]], correct: 2 },
      { q: ["Which of the following is NOT a goal of NPA?", "निम्नलिखित में से कौन NPA का लक्ष्य नहीं है?"], opts: [["Relevance", "प्रासंगिकता"], ["Value-neutrality", "मूल्य-तटस्थता"], ["Social Equity", "सामाजिक समता"], ["Change", "परिवर्तन"]], correct: 1 },
      { q: ["The book 'Toward a New Public Administration' was edited by:", "पुस्तक 'Toward a New Public Administration' किसके द्वारा संपादित की गई थी?"], opts: [["Frank Marini", "फ्रैंक मारिनी"], ["Dwight Waldo", "ड्वाइट वाल्डो"], ["L.D. White", "एल.डी. व्हाइट"], ["Herbert Simon", "हर्बर्ट साइमन"]], correct: 0 },
      { q: ["NPA shifted the focus of administration from efficiency to:", "NPA ने प्रशासन का ध्यान दक्षता से हटाकर किस पर केंद्रित किया?"], opts: [["Profit", "लाभ"], ["Social Equity", "सामाजिक समता"], ["Centralization", "केंद्रीकरण"], ["Dictatorship", "तानाशाही"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Minnowbrook I (1968): Sponsored by Dwight Waldo at Syracuse University. Resulted in NPA.\n• Minnowbrook II (1988): Focus on privatization, leadership, technology.\n• Minnowbrook III (2008): Focus on global public administration and networking.\n• 4 Key Themes of NPA (by Frederickson): Relevance, Values, Social Equity, Change.\n• Important books: \"Toward a New Public Admin\" (Frank Marini, 1971), \"Public Admin in a Time of Turbulence\" (Dwight Waldo, 1971).",
      "UGC NET फोकस:\n• मिनोब्रुक I (1968): ड्वाइट वाल्डो द्वारा प्रायोजित। NPA का जन्म।\n• 4 प्रमुख विषय (फ्रेडरिकसन द्वारा): प्रासंगिकता, मूल्य, सामाजिक समता, परिवर्तन।"
    ],
    ugcQ: [
      ["Q: What is the defining feature of NPA? A: The inclusion of 'Social Equity' as the primary goal of administration.", "प्र: NPA की परिभाषित विशेषता क्या है? उ: प्रशासन के प्राथमिक लक्ष्य के रूप में 'सामाजिक समता' को शामिल करना।"],
    ],
  },

  // TOPIC 4
  {
    id: 't4', num: 4,
    title: ["Development Administration", "विकास प्रशासन"],
    introduction: [
      "Development Administration emerged in the 1950s and 1960s as a specialized branch of Public Administration, tailored specifically for the newly independent 'Third World' countries (Asia, Africa, Latin America). Traditional Western public administration was designed for maintaining law, order, and collecting revenue (regulatory administration) in developed nations. However, post-colonial nations faced monumental challenges of nation-building, poverty eradication, and rapid socio-economic modernization. Thus, a new administrative framework was needed—one that was action-oriented, goal-oriented, and flexible. George Gant coined the term, and scholars like Edward Weidner and Fred Riggs popularized it.",
      "विकास प्रशासन 1950 और 60 के दशक में लोक प्रशासन की एक विशेष शाखा के रूप में उभरा, जो विशेष रूप से नव-स्वतंत्र 'तीसरी दुनिया' के देशों के लिए तैयार किया गया था। पारंपरिक पश्चिमी प्रशासन कानून व्यवस्था बनाए रखने के लिए था। हालांकि, उत्तर-औपनिवेशिक राष्ट्रों को राष्ट्र-निर्माण, गरीबी उन्मूलन और तेजी से आधुनिकीकरण की चुनौतियों का सामना करना पड़ा। इसलिए, एक नए प्रशासनिक ढांचे की आवश्यकता थी—जो लक्ष्य-उन्मुख और लचीला हो।"
    ],
    concepts: [
      {
        heading: ["Meaning and Concept", "अर्थ और अवधारणा"],
        body: [
          "Meaning:\n• Development Administration refers to the organized efforts carried out by public administration to achieve socio-economic development and nation-building.\n• Edward Weidner defined it as: \"The process of guiding an organization toward the achievement of progressive political, economic, and social objectives that are authoritatively determined in one manner or another.\"\n• George Gant coined the term in 1955.\n\nTwo Aspects of Development Administration (Fred Riggs):\n1. Administration of Development: The execution of developmental programs, policies, and projects (e.g., building dams, schools, health missions).\n2. Development of Administration: Improving and modernizing the administrative machinery itself so it can handle complex developmental tasks (e.g., civil service reforms, training, e-governance). Also called 'Administrative Development'.",
          "अर्थ:\n• विकास प्रशासन से तात्पर्य सार्वजनिक प्रशासन द्वारा सामाजिक-आर्थिक विकास और राष्ट्र-निर्माण प्राप्त करने के लिए किए गए संगठित प्रयासों से है।\n• एडवर्ड वीडनर: \"संगठन को प्रगतिशील राजनीतिक, आर्थिक और सामाजिक उद्देश्यों की प्राप्ति की ओर निर्देशित करने की प्रक्रिया।\"\n• जॉर्ज गैंट ने 1955 में यह शब्द गढ़ा।\n\nविकास प्रशासन के दो पहलू (फ्रेड रिग्स):\n1. विकास का प्रशासन: विकासात्मक कार्यक्रमों और परियोजनाओं का निष्पादन (जैसे बांध, स्कूल बनाना)।\n2. प्रशासन का विकास: प्रशासनिक तंत्र को ही सुधारना और आधुनिक बनाना ताकि वह जटिल कार्यों को संभाल सके (जैसे सिविल सेवा सुधार)। इसे 'प्रशासनिक विकास' भी कहा जाता है।"
        ]
      },
      {
        heading: ["Features and Differences from Traditional Administration", "विशेषताएं और पारंपरिक प्रशासन से अंतर"],
        body: [
          "Features of Development Administration:\n1. Change-Oriented: Rejects status quo; aims at bringing rapid socio-economic transformation.\n2. Goal-Oriented: Focuses on achieving specific developmental targets (e.g., increasing literacy by 10%).\n3. Client-Oriented: Focuses on meeting the needs of specific target groups (e.g., farmers, tribals, women).\n4. Temporal Dimension: Time-bound execution of projects is critical.\n5. People's Participation: Development cannot happen from top-down alone; it requires grass-roots involvement (e.g., Panchayati Raj).\n6. Innovativeness: Requires flexible, creative problem-solving rather than rigid rule-following.\n\nTraditional vs. Development Administration:\n• Traditional: Status-quo oriented, focused on rules, hierarchical, concerned with law & order and revenue collection.\n• Development: Change-oriented, focused on goals, flexible, concerned with socio-economic modernization and nation-building.",
          "विकास प्रशासन की विशेषताएं:\n1. परिवर्तन-उन्मुख: यथास्थिति को खारिज करता है; तेजी से सामाजिक-आर्थिक परिवर्तन लाना।\n2. लक्ष्य-उन्मुख: विशिष्ट विकासात्मक लक्ष्यों को प्राप्त करने पर केंद्रित।\n3. ग्राहक-उन्मुख: विशिष्ट लक्ष्य समूहों (किसानों, महिलाओं) की जरूरतों को पूरा करना।\n4. समय आयाम: परियोजनाओं का समयबद्ध निष्पादन।\n5. जनभागीदारी: विकास केवल ऊपर से नीचे नहीं हो सकता; जमीनी स्तर की भागीदारी आवश्यक है (जैसे पंचायती राज)।\n6. नवाचार: कठोर नियमों के बजाय रचनात्मक समस्या-समाधान।\n\nपारंपरिक बनाम विकास प्रशासन:\n• पारंपरिक: यथास्थिति-उन्मुख, नियमों पर केंद्रित, कानून व्यवस्था।\n• विकास: परिवर्तन-उन्मुख, लक्ष्यों पर केंद्रित, लचीला, आधुनिकीकरण।"
        ]
      }
    ],
    quotes: [
      ["Edward Weidner: \"Development administration is action-oriented, goal-oriented administrative system.\"", "एडवर्ड वीडनर: \"विकास प्रशासन क्रिया-उन्मुख, लक्ष्य-उन्मुख प्रशासनिक प्रणाली है।\""],
      ["Fred Riggs: \"Development administration refers not only to a government's efforts to carry out programs designed to reshape its physical, human, and cultural environment, but also to the struggle to enlarge a government's capacity to engage in such programs.\"", "फ्रेड रिग्स: \"विकास प्रशासन का तात्पर्य न केवल पर्यावरण को नया आकार देने के कार्यक्रमों से है, बल्कि ऐसे कार्यक्रमों में शामिल होने की सरकार की क्षमता बढ़ाने के संघर्ष से भी है।\""],
    ],
    evaluation: [
      "Development Administration provided a vital conceptual framework for newly independent nations to tackle poverty and underdevelopment. However, in practice, it faced massive failures in many developing nations (the 'implementation gap'). The administrative machinery inherited from colonial rulers was inherently rigid and elitist, unsuitable for participatory development. Corruption, bureaucratic apathy, and lack of political will further derailed developmental goals. Critics argue that Development Administration became overly centralized, treating citizens as passive recipients ('beneficiaries') rather than active participants. This realization led to the shift towards 'Good Governance' and decentralized local self-government.",
      "विकास प्रशासन ने नव-स्वतंत्र राष्ट्रों को गरीबी से निपटने के लिए एक महत्वपूर्ण ढांचा प्रदान किया। हालांकि, व्यवहार में, कई विकासशील देशों में इसे भारी विफलताओं का सामना करना पड़ा। औपनिवेशिक शासकों से विरासत में मिला प्रशासनिक तंत्र कठोर और कुलीनवादी था। भ्रष्टाचार और राजनीतिक इच्छाशक्ति की कमी ने लक्ष्यों को पटरी से उतार दिया। आलोचकों का तर्क है कि यह अत्यधिक केंद्रीकृत हो गया, नागरिकों को सक्रिय प्रतिभागियों के बजाय निष्क्रिय प्राप्तकर्ता मान लिया।"
    ],
    conclusion: [
      "Development Administration represents the proactive role of the state in steering societal transformation. While the initial enthusiasm of the 1960s faded due to bureaucratic failures in the Third World, its core philosophy—that administration must be an engine for socio-economic progress and must evolve its own capacities to do so—remains valid for developing nations like India.",
      "विकास प्रशासन सामाजिक परिवर्तन को संचालित करने में राज्य की सक्रिय भूमिका का प्रतिनिधित्व करता है। हालांकि 1960 के दशक का प्रारंभिक उत्साह विफलताओं के कारण फीका पड़ गया, लेकिन इसका मुख्य दर्शन—कि प्रशासन को सामाजिक-आर्थिक प्रगति का इंजन होना चाहिए—भारत जैसे विकासशील देशों के लिए वैध बना हुआ है।"
    ],
    shortQ: [
      ["Who coined the term 'Development Administration'?", "'विकास प्रशासन' शब्द किसने गढ़ा?"],
      ["Define Development Administration according to Weidner.", "वीडनर के अनुसार विकास प्रशासन को परिभाषित करें।"],
      ["What is the difference between 'Administration of Development' and 'Development of Administration'?", "'विकास का प्रशासन' और 'प्रशासन का विकास' में क्या अंतर है?"],
      ["Mention any three features of Development Administration.", "विकास प्रशासन की किन्हीं तीन विशेषताओं का उल्लेख करें।"],
      ["Why was Traditional Administration considered unsuitable for Third World countries?", "पारंपरिक प्रशासन को तीसरी दुनिया के देशों के लिए अनुपयुक्त क्यों माना गया?"],
    ],
    longQ: [
      ["Discuss the meaning, emergence, and features of Development Administration.", "विकास प्रशासन के अर्थ, उद्भव और विशेषताओं पर चर्चा करें।"],
      ["Differentiate between Traditional Administration and Development Administration.", "पारंपरिक प्रशासन और विकास प्रशासन के बीच अंतर करें।"],
      ["Explain Fred Riggs' concept of the two aspects of Development Administration.", "विकास प्रशासन के दो पहलुओं की फ्रेड रिग्स की अवधारणा की व्याख्या करें।"],
      ["Critically evaluate the success and failures of Development Administration in developing nations.", "विकासशील देशों में विकास प्रशासन की सफलता और विफलताओं का आलोचनात्मक मूल्यांकन करें।"],
      ["Why is people's participation crucial for Development Administration?", "विकास प्रशासन के लिए जनभागीदारी क्यों महत्वपूर्ण है?"],
    ],
    mcqs: [
      { q: ["The term 'Development Administration' was first used by:", "'विकास प्रशासन' शब्द का पहली बार प्रयोग किसने किया था?"], opts: [["Fred Riggs", "फ्रेड रिग्स"], ["George Gant", "जॉर्ज गैंट"], ["Edward Weidner", "एडवर्ड वीडनर"], ["Woodrow Wilson", "वुडरो विल्सन"]], correct: 1 },
      { q: ["Which of the following is NOT a feature of Development Administration?", "निम्नलिखित में से कौन विकास प्रशासन की विशेषता नहीं है?"], opts: [["Change-oriented", "परिवर्तन-उन्मुख"], ["Goal-oriented", "लक्ष्य-उन्मुख"], ["Status-quo oriented", "यथास्थिति-उन्मुख"], ["Client-oriented", "ग्राहक-उन्मुख"]], correct: 2 },
      { q: ["The concept of 'Development of Administration' implies:", "'प्रशासन का विकास' की अवधारणा का तात्पर्य है:"], opts: [["Building schools", "स्कूल बनाना"], ["Reforming and improving the administrative system itself", "प्रशासनिक प्रणाली में सुधार करना"], ["Economic growth", "आर्थिक विकास"], ["Collecting taxes", "कर एकत्र करना"]], correct: 1 },
      { q: ["Development Administration was primarily designed for:", "विकास प्रशासन मुख्य रूप से किसके लिए तैयार किया गया था?"], opts: [["Developed Western nations", "विकसित पश्चिमी राष्ट्र"], ["Communist countries", "कम्युनिस्ट देश"], ["Third World / Developing nations", "तीसरी दुनिया / विकासशील राष्ट्र"], ["None of the above", "उपरोक्त में से कोई नहीं"]], correct: 2 },
      { q: ["Which scholar extensively studied comparative public administration in developing countries?", "किस विद्वान ने विकासशील देशों में तुलनात्मक लोक प्रशासन का बड़े पैमाने पर अध्ययन किया?"], opts: [["Herbert Simon", "हर्बर्ट साइमन"], ["Fred Riggs", "फ्रेड रिग्स"], ["L.D. White", "एल.डी. व्हाइट"], ["Chester Barnard", "चेस्टर बर्नार्ड"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Term coined by: George Gant (1955).\n• Popularized by: Edward Weidner, Fred Riggs, Ferrel Heady.\n• Twin concepts by Riggs: Administration of Development (carrying out plans) vs Development of Administration (capacity building of bureaucracy).\n• Focus: Third World (Asia, Africa, Latin America) post-WWII.\n• Riggs' Prismatic Model (Sala model) is heavily associated with analyzing administration in developing transitional societies.",
      "UGC NET फोकस:\n• शब्द गढ़ा: जॉर्ज गैंट (1955)।\n• फ्रेड रिग्स की जुड़वां अवधारणाएं: विकास का प्रशासन बनाम प्रशासन का विकास।\n• रिग्स का प्रिज्मीय मॉडल (Prismatic Model) विकासशील समाजों के प्रशासन का विश्लेषण करता है।"
    ],
    ugcQ: [
      ["Q: What is the main characteristic of Development Administration? A: It is change-oriented and goal-oriented.", "प्र: विकास प्रशासन की मुख्य विशेषता क्या है? उ: यह परिवर्तन-उन्मुख और लक्ष्य-उन्मुख है।"],
    ],
  },

  // TOPIC 5
  {
    id: 't5', num: 5,
    title: ["Good Governance", "सुशासन"],
    introduction: [
      "The concept of 'Good Governance' gained prominence in the early 1990s, heavily promoted by international financial institutions like the World Bank and the IMF. Following the end of the Cold War and the realization that massive financial aid to developing countries was failing due to rampant corruption and inefficient bureaucracies, these institutions tied aid to administrative reforms. Governance is broader than government; it involves the state, the private sector, and civil society interacting to manage public affairs. 'Good' governance implies that this management is democratic, transparent, accountable, and responsive to the needs of the people. It represents a paradigm shift from a state-centric approach to a multi-actor approach.",
      "'सुशासन' (Good Governance) की अवधारणा 1990 के दशक की शुरुआत में प्रमुखता से उभरी, जिसे मुख्य रूप से विश्व बैंक और IMF जैसी संस्थाओं द्वारा बढ़ावा दिया गया। यह महसूस करने के बाद कि विकासशील देशों को दी जाने वाली सहायता भ्रष्टाचार के कारण विफल हो रही थी, इन संस्थाओं ने सहायता को प्रशासनिक सुधारों से जोड़ दिया। शासन (Governance) सरकार से व्यापक है; इसमें राज्य, निजी क्षेत्र और नागरिक समाज शामिल हैं। 'सुशासन' का अर्थ है कि यह प्रबंधन लोकतांत्रिक, पारदर्शी और जवाबदेह है।"
    ],
    concepts: [
      {
        heading: ["Origin and Concept", "उत्पत्ति और अवधारणा"],
        body: [
          "Origin:\n• The term was popularized by the World Bank in its 1989 report on Sub-Saharan Africa, which identified a \"crisis of governance\" as the root cause of underdevelopment.\n• The 1992 World Bank document \"Governance and Development\" formally laid down its parameters.\n\nConcept:\n• Government vs. Governance: Government is the formal institutional structure. Governance is the *process* of decision-making and the process by which decisions are implemented (or not implemented). It involves non-state actors (NGOs, corporate sector, media).\n• Good Governance means making the exercise of political, economic, and administrative authority efficient, transparent, and responsive.",
          "उत्पत्ति:\n• यह शब्द विश्व बैंक द्वारा 1989 में अपनी रिपोर्ट में लोकप्रिय हुआ, जिसने 'शासन के संकट' को अविकसितता का मूल कारण बताया।\n• 1992 के विश्व बैंक के दस्तावेज ने इसके मापदंडों को औपचारिक रूप दिया।\n\nअवधारणा:\n• सरकार बनाम शासन (Governance): सरकार एक औपचारिक ढांचा है। शासन निर्णय लेने और लागू करने की 'प्रक्रिया' है। इसमें गैर-राज्य कर्ता (NGO, मीडिया) शामिल हैं।\n• सुशासन का अर्थ है राजनीतिक, आर्थिक और प्रशासनिक अधिकार के प्रयोग को पारदर्शी और उत्तरदायी बनाना।"
        ]
      },
      {
        heading: ["8 Characteristics of Good Governance (UN ESCAP)", "सुशासन की 8 विशेषताएं (UN ESCAP)"],
        body: [
          "The United Nations identifies 8 core characteristics of Good Governance:\n1. Participation: All men and women should have a voice in decision-making, either directly or through legitimate intermediate institutions.\n2. Rule of Law: Legal frameworks should be fair and enforced impartially, particularly laws on human rights.\n3. Transparency: Information is freely available and directly accessible to those who will be affected by decisions (e.g., RTI Act in India).\n4. Responsiveness: Institutions must try to serve all stakeholders within a reasonable timeframe.\n5. Consensus Oriented: Mediation of different interests to reach a broad consensus on what is in the best interest of the whole community.\n6. Equity and Inclusiveness: All groups, particularly the most vulnerable, have opportunities to improve or maintain their well-being.\n7. Effectiveness and Efficiency: Processes and institutions produce results that meet needs while making the best use of resources.\n8. Accountability: Governmental, private sector, and civil society organizations must be accountable to the public (the key requirement).",
          "संयुक्त राष्ट्र सुशासन की 8 मुख्य विशेषताएं बताता है:\n1. भागीदारी: निर्णय लेने में सभी की आवाज होनी चाहिए।\n2. कानून का शासन: कानूनी ढांचा निष्पक्ष होना चाहिए।\n3. पारदर्शिता: जानकारी स्वतंत्र रूप से उपलब्ध होनी चाहिए (जैसे RTI)।\n4. उत्तरदायित्व: संस्थाओं को उचित समय सीमा के भीतर सेवा करनी चाहिए।\n5. आम सहमति उन्मुख: विभिन्न हितों के बीच मध्यस्थता।\n6. समता और समावेशिता: सबसे कमजोर वर्गों के पास अवसर होने चाहिए।\n7. प्रभावशीलता और दक्षता: संसाधनों का सर्वोत्तम उपयोग।\n8. जवाबदेही: सरकारी और निजी संगठनों को जनता के प्रति जवाबदेह होना चाहिए।"
        ]
      }
    ],
    quotes: [
      ["World Bank (1992): \"Governance is the manner in which power is exercised in the management of a country's economic and social resources for development.\"", "विश्व बैंक (1992): \"शासन वह तरीका है जिससे विकास के लिए देश के आर्थिक और सामाजिक संसाधनों के प्रबंधन में शक्ति का प्रयोग किया जाता है।\""],
      ["Kofi Annan (Former UN Sec-Gen): \"Good governance is perhaps the single most important factor in eradicating poverty and promoting development.\"", "कोफी अन्नान: \"सुशासन शायद गरीबी मिटाने और विकास को बढ़ावा देने में सबसे महत्वपूर्ण एकल कारक है।\""],
    ],
    evaluation: [
      "The Good Governance agenda brought crucial concepts like transparency (RTI), accountability (Lokpal/Ombudsman), and citizen charters to the forefront of public administration in developing countries like India (e-governance initiatives). However, it is heavily criticized by Left-leaning scholars as a 'neo-liberal agenda'. They argue that the World Bank uses 'Good Governance' to force developing nations to privatize public assets, shrink the welfare state, and deregulate the economy for the benefit of Western corporations. Critics say it treats citizens merely as 'consumers' rather than rights-bearing individuals. Despite these valid critiques, the core administrative ideals of transparency and accountability remain universally desirable.",
      "सुशासन एजेंडे ने भारत जैसे देशों में पारदर्शिता (RTI) और जवाबदेही जैसी महत्वपूर्ण अवधारणाओं को सामने लाया। हालांकि, वामपंथी विद्वानों द्वारा इसे 'नव-उदारवादी एजेंडा' कहकर भारी आलोचना की जाती है। उनका तर्क है कि विश्व बैंक 'सुशासन' का उपयोग विकासशील राष्ट्रों को सार्वजनिक संपत्तियों का निजीकरण करने के लिए मजबूर करने के लिए करता है। आलोचकों का कहना है कि यह नागरिकों को केवल 'उपभोक्ताओं' के रूप में देखता है। इन आलोचनाओं के बावजूद, पारदर्शिता के मूल आदर्श सर्वभौमिक रूप से वांछनीय हैं।"
    ],
    conclusion: [
      "Good Governance represents a fundamental shift in how public affairs are managed, moving away from state monopoly towards a collaborative model involving the private sector and civil society. While its origins lie in the conditionalities of international financial institutions, its core tenets—participation, transparency, and accountability—are essential for democratic deepening and effective public service delivery in the 21st century.",
      "सुशासन सार्वजनिक मामलों के प्रबंधन में एक मौलिक बदलाव का प्रतिनिधित्व करता है, जो राज्य के एकाधिकार से दूर जाकर निजी क्षेत्र और नागरिक समाज को शामिल करने वाले सहयोगी मॉडल की ओर बढ़ता है। इसके मुख्य सिद्धांत—भागीदारी, पारदर्शिता और जवाबदेही—21वीं सदी में आवश्यक हैं।"
    ],
    shortQ: [
      ["Which institution popularized the concept of 'Good Governance'?", "किस संस्था ने 'सुशासन' की अवधारणा को लोकप्रिय बनाया?"],
      ["What is the difference between Government and Governance?", "सरकार और शासन (Governance) के बीच क्या अंतर है?"],
      ["Mention any four characteristics of Good Governance.", "सुशासन की किन्हीं चार विशेषताओं का उल्लेख करें।"],
      ["How is 'Transparency' related to Good Governance?", "'पारदर्शिता' सुशासन से कैसे संबंधित है?"],
      ["Why is Good Governance criticized as a neo-liberal agenda?", "सुशासन की नव-उदारवादी एजेंडे के रूप में आलोचना क्यों की जाती है?"],
    ],
    longQ: [
      ["Discuss the origin and meaning of the concept of Good Governance.", "सुशासन की अवधारणा की उत्पत्ति और अर्थ पर चर्चा करें।"],
      ["Explain the eight characteristics of Good Governance as identified by the UN.", "संयुक्त राष्ट्र द्वारा पहचानी गई सुशासन की आठ विशेषताओं की व्याख्या करें।"],
      ["Critically evaluate the World Bank's model of Good Governance.", "विश्व बैंक के सुशासन मॉडल का आलोचनात्मक मूल्यांकन करें।"],
      ["Discuss the role of civil society and NGOs in ensuring Good Governance.", "सुशासन सुनिश्चित करने में नागरिक समाज और गैर सरकारी संगठनों की भूमिका पर चर्चा करें।"],
      ["What steps have been taken in India to promote Good Governance (e.g., RTI, e-governance)?", "भारत में सुशासन को बढ़ावा देने के लिए क्या कदम उठाए गए हैं (जैसे, RTI, ई-गवर्नेंस)?"],
    ],
    mcqs: [
      { q: ["The concept of Good Governance was first prominently used by the World Bank in a report on:", "सुशासन की अवधारणा का पहली बार विश्व बैंक द्वारा किस पर एक रिपोर्ट में प्रमुखता से उपयोग किया गया था?"], opts: [["South Asia (1985)", "दक्षिण एशिया"], ["Sub-Saharan Africa (1989)", "उप-सहारा अफ्रीका"], ["Latin America (1995)", "लैटिन अमेरिका"], ["Eastern Europe (1990)", "पूर्वी यूरोप"]], correct: 1 },
      { q: ["Which of the following is NOT a core characteristic of Good Governance according to UN?", "UN के अनुसार निम्नलिखित में से कौन सुशासन की मुख्य विशेषता नहीं है?"], opts: [["Transparency", "पारदर्शिता"], ["Accountability", "जवाबदेही"], ["Centralization of power", "शक्ति का केंद्रीकरण"], ["Rule of Law", "कानून का शासन"]], correct: 2 },
      { q: ["The shift from 'Government' to 'Governance' implies:", "'सरकार' से 'शासन' (Governance) में बदलाव का तात्पर्य है:"], opts: [["More power to bureaucrats", "नौकरशाहों को अधिक शक्ति"], ["Involvement of multiple actors including civil society and market", "नागरिक समाज और बाजार सहित कई कर्ताओं की भागीदारी"], ["Military rule", "सैन्य शासन"], ["Total nationalization", "पूर्ण राष्ट्रीयकरण"]], correct: 1 },
      { q: ["The Right to Information (RTI) Act primarily promotes which aspect of good governance?", "सूचना का अधिकार (RTI) अधिनियम मुख्य रूप से सुशासन के किस पहलू को बढ़ावा देता है?"], opts: [["Efficiency", "दक्षता"], ["Equity", "समता"], ["Transparency", "पारदर्शिता"], ["Consensus", "आम सहमति"]], correct: 2 },
      { q: ["Critics associate the Good Governance agenda with:", "आलोचक सुशासन एजेंडे को किससे जोड़ते हैं?"], opts: [["Marxism", "मार्क्सवाद"], ["Neo-liberalism and Washington Consensus", "नव-उदारवाद और वाशिंगटन सहमति"], ["Feudalism", "सामंतवाद"], ["Anarchism", "अराजकतावाद"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• World Bank 1989 document: \"Sub-Saharan Africa: From Crisis to Sustainable Growth\" first coined the term.\n• World Bank 1992 document: \"Governance and Development\".\n• 8 Pillars of UN ESCAP: Participation, Rule of Law, Transparency, Responsiveness, Consensus Oriented, Equity, Effectiveness, Accountability.\n• Shift from Government (State-centric) to Governance (State + Market + Civil Society).\n• Washington Consensus: The neo-liberal economic policies (privatization, deregulation) often tied to Good Governance loans.",
      "UGC NET फोकस:\n• विश्व बैंक 1989 रिपोर्ट: 'सब-सहारा अफ्रीका' में पहली बार प्रयोग।\n• सरकार (राज्य-केंद्रित) से शासन (राज्य + बाजार + नागरिक समाज) में बदलाव।\n• वाशिंगटन सहमति: नव-उदारवादी आर्थिक नीतियां (निजीकरण) जो अक्सर सुशासन ऋणों से जुड़ी होती हैं।"
    ],
    ugcQ: [
      ["Q: How does Governance differ from Government? A: Government is a formal institutional actor; Governance is a broader process involving the State, Civil Society, and the Private Sector.", "प्र: शासन (Governance) सरकार से कैसे भिन्न है? उ: सरकार एक औपचारिक संस्थागत कर्ता है; शासन एक व्यापक प्रक्रिया है जिसमें राज्य, नागरिक समाज और निजी क्षेत्र शामिल हैं।"],
    ],
  },

  // TOPIC 6
  {
    id: 't6', num: 6,
    title: ["Feminist Perspective of Public Administration", "लोक प्रशासन का नारीवादी परिप्रेक्ष्य"],
    introduction: [
      "Historically, Public Administration as a discipline and practice was entirely male-dominated, focusing on hierarchy, rationality, and command-and-control structures—traits traditionally associated with masculinity. The Feminist Perspective of Public Administration emerged to challenge this gender-blind nature of the discipline. It highlights how administrative theories, structures, and policies inherently reflect masculine biases and systematically disadvantage women both as employees within the bureaucracy and as citizens receiving public services. Scholars like Camilla Stivers and Mary Guy have been instrumental in advocating for a more inclusive, empathetic, and equitable administrative framework.",
      "ऐतिहासिक रूप से, एक विषय और अभ्यास के रूप में लोक प्रशासन पूरी तरह से पुरुष-प्रधान था, जो पदानुक्रम, तर्कसंगतता और कमांड-एंड-कंट्रोल संरचनाओं पर केंद्रित था—वे लक्षण जो पारंपरिक रूप से पुरुषत्व से जुड़े हैं। लोक प्रशासन का नारीवादी परिप्रेक्ष्य विषय की इस लैंगिक-अंध (gender-blind) प्रकृति को चुनौती देने के लिए उभरा। यह उजागर करता है कि कैसे प्रशासनिक सिद्धांत और नीतियां स्वाभाविक रूप से मर्दाना पूर्वाग्रहों को दर्शाती हैं और महिलाओं को व्यवस्थित रूप से नुकसान पहुंचाती हैं।"
    ],
    concepts: [
      {
        heading: ["The Critique of Traditional Administration", "पारंपरिक प्रशासन की आलोचना"],
        body: [
          "Masculine Bias in Theories:\n• Traditional theories (like Max Weber's Bureaucracy and Taylor's Scientific Management) celebrate \"rationality\", \"objectivity\", and \"hierarchy\" while dismissing emotion, empathy, and collaboration.\n• Feminists argue that this definition of 'rationality' is actually a masculine construct. The bureaucratic model values the 'ideal worker' who has no family responsibilities (traditionally a man whose domestic life is managed by a woman).\n\nThe \"Glass Ceiling\" and \"Glass Cliff\":\n• Glass Ceiling: Invisible barriers that prevent women from rising to top executive positions in the public sector.\n• Glass Cliff: Women are often appointed to leadership roles only during times of crisis when the chance of failure is highest.\n• Sticky Floor: Women being stuck in low-paying, frontline administrative jobs (clerical, caregiving).",
          "सिद्धांतों में मर्दाना पूर्वाग्रह:\n• पारंपरिक सिद्धांत (जैसे मैक्स वेबर की नौकरशाही) \"तार्किकता\" और \"पदानुक्रम\" का जश्न मनाते हैं जबकि भावना, सहानुभूति और सहयोग को खारिज करते हैं।\n• नारीवादियों का तर्क है कि नौकरशाही मॉडल उस 'आदर्श कार्यकर्ता' को महत्व देता है जिसकी कोई पारिवारिक जिम्मेदारी नहीं है (पारंपरिक रूप से एक पुरुष जिसका घरेलू जीवन महिला द्वारा प्रबंधित किया जाता है)।\n\n\"ग्लास सीलिंग\" (कांच की छत):\n• अदृश्य बाधाएं जो महिलाओं को सार्वजनिक क्षेत्र में शीर्ष कार्यकारी पदों तक उठने से रोकती हैं।\n• ग्लास क्लिफ: महिलाओं को संकट के समय नेतृत्व की भूमिका दी जाती है।\n• स्टिकी फ्लोर: महिलाओं का कम वेतन वाले, क्लर्क स्तर के कामों में फंसे रहना।"
        ]
      },
      {
        heading: ["Alternative Feminist Models and Policy Impact", "वैकल्पिक नारीवादी मॉडल और नीतिगत प्रभाव"],
        body: [
          "Feminist Administrative Model:\n• Instead of Hierarchy → Flat networks and collaboration.\n• Instead of Command-and-Control → Empowerment and participative decision-making.\n• Instead of strict Rationality → Emotional intelligence, empathy, and ethics of care.\n• Recognition of the \"lived experiences\" of women in policy making.\n\nImpact on Public Policy (Gender Mainstreaming):\n• Feminist PA demands 'Gender Mainstreaming'—assessing the implications for women and men of any planned policy action, including legislation and budgets.\n• Gender Budgeting: Analyzing the national/state budget to see how resources are allocated to address gender disparities.\n• Service Delivery: Recognizing that women interact with the state differently (e.g., as primary caregivers, users of public transport, and welfare recipients), requiring gender-sensitive public services.",
          "नारीवादी प्रशासनिक मॉडल:\n• पदानुक्रम के बजाय → फ्लैट नेटवर्क और सहयोग।\n• कमांड-एंड-कंट्रोल के बजाय → सशक्तिकरण और सहभागी निर्णय लेना।\n• सख्त तार्किकता के बजाय → भावनात्मक बुद्धिमत्ता, सहानुभूति और देखभाल की नैतिकता।\n\nसार्वजनिक नीति पर प्रभाव (जेंडर मेनस्ट्रीमिंग):\n• नारीवादी PA 'जेंडर मेनस्ट्रीमिंग' की मांग करता है—किसी भी नीति या बजट का महिलाओं और पुरुषों पर पड़ने वाले प्रभाव का आकलन करना।\n• जेंडर बजटिंग: लैंगिक असमानताओं को दूर करने के लिए राष्ट्रीय बजट का विश्लेषण करना।\n• सेवा वितरण: यह पहचानना कि महिलाएं राज्य के साथ अलग तरह से बातचीत करती हैं, जिसके लिए लिंग-संवेदनशील सार्वजनिक सेवाओं की आवश्यकता होती है।"
        ]
      }
    ],
    quotes: [
      ["Camilla Stivers: \"The image of the public administrator is implicitly masculine... reflecting cultural assumptions about men's capacity for rational, objective action.\"", "कैमिला स्टिवर्स: \"लोक प्रशासक की छवि अंतर्निहित रूप से मर्दाना है... जो तर्कसंगत, वस्तुनिष्ठ कार्रवाई के लिए पुरुषों की क्षमता के बारे में सांस्कृतिक मान्यताओं को दर्शाती है।\""],
      ["Mary Guy: \"Emotional labor is the invisible work in public administration... work largely performed by women.\"", "मैरी गाय: \"भावनात्मक श्रम लोक प्रशासन में अदृश्य काम है... यह काम बड़े पैमाने पर महिलाओं द्वारा किया जाता है।\""],
    ],
    evaluation: [
      "The Feminist Perspective has fundamentally disrupted the 'malestream' study of Public Administration. By introducing concepts like emotional labor and gender budgeting, it has made the discipline more humane and responsive. However, the application of these models faces deep-rooted institutional resistance. Bureaucracies remain inherently hierarchical. Critics also warn against 'essentializing' women (assuming all women are naturally more empathetic or collaborative). Despite challenges, the feminist perspective is essential for creating state machinery that truly serves and represents 100% of its population.",
      "नारीवादी परिप्रेक्ष्य ने लोक प्रशासन के अध्ययन को मौलिक रूप से बाधित किया है। भावनात्मक श्रम और जेंडर बजटिंग जैसी अवधारणाओं को पेश करके, इसने विषय को अधिक मानवीय बना दिया है। हालांकि, इन मॉडलों के अनुप्रयोग को गहरी संस्थागत प्रतिरोध का सामना करना पड़ता है। नौकरशाही स्वाभाविक रूप से पदानुक्रमित बनी हुई है। चुनौतियों के बावजूद, ऐसा राज्य तंत्र बनाने के लिए नारीवादी परिप्रेक्ष्य आवश्यक है जो अपनी 100% आबादी का प्रतिनिधित्व करे।"
    ],
    conclusion: [
      "The Feminist Perspective is not just about adding more women to the bureaucracy; it is about fundamentally restructuring administrative theories and practices to eliminate masculine biases. By advocating for empathy, collaboration, and gender-sensitive policymaking, it enriches Public Administration, making the state more equitable and effective in its service to all citizens.",
      "नारीवादी परिप्रेक्ष्य केवल नौकरशाही में अधिक महिलाओं को जोड़ने के बारे में नहीं है; यह मर्दाना पूर्वाग्रहों को खत्म करने के लिए प्रशासनिक सिद्धांतों और प्रथाओं के मौलिक पुनर्गठन के बारे में है। सहानुभूति और लिंग-संवेदनशील नीति निर्माण की वकालत करके, यह लोक प्रशासन को समृद्ध करता है।"
    ],
    shortQ: [
      ["What does 'Glass Ceiling' mean in public administration?", "लोक प्रशासन में 'ग्लास सीलिंग' का क्या अर्थ है?"],
      ["Name a prominent scholar of the feminist perspective in PA.", "PA में नारीवादी परिप्रेक्ष्य की एक प्रमुख विद्वान का नाम बताएं।"],
      ["What is Gender Budgeting?", "जेंडर बजटिंग (Gender Budgeting) क्या है?"],
      ["How do feminists critique Max Weber's bureaucratic model?", "नारीवादी मैक्स वेबर के नौकरशाही मॉडल की आलोचना कैसे करते हैं?"],
      ["What is 'Emotional Labor'?", "'भावनात्मक श्रम' क्या है?"],
    ],
    longQ: [
      ["Discuss the feminist critique of traditional public administration theories.", "पारंपरिक लोक प्रशासन सिद्धांतों की नारीवादी आलोचना पर चर्चा करें।"],
      ["What is the Feminist Perspective of Public Administration? What are its main features?", "लोक प्रशासन का नारीवादी परिप्रेक्ष्य क्या है? इसकी मुख्य विशेषताएं क्या हैं?"],
      ["Explain the concepts of Glass Ceiling, Glass Cliff, and Sticky Floor.", "ग्लास सीलिंग, ग्लास क्लिफ और स्टिकी फ्लोर की अवधारणाओं की व्याख्या करें।"],
      ["How does 'Gender Mainstreaming' impact public policy formulation?", "'जेंडर मेनस्ट्रीमिंग' सार्वजनिक नीति निर्माण को कैसे प्रभावित करती है?"],
      ["'The traditional definition of administrative rationality is highly masculine.' Discuss.", "'प्रशासनिक तार्किकता की पारंपरिक परिभाषा अत्यधिक मर्दाना है।' चर्चा करें।"],
    ],
    mcqs: [
      { q: ["Who among the following is a key scholar of the Feminist Perspective in PA?", "निम्नलिखित में से कौन PA में नारीवादी परिप्रेक्ष्य की एक प्रमुख विद्वान है?"], opts: [["Camilla Stivers", "कैमिला स्टिवर्स"], ["Herbert Simon", "हर्बर्ट साइमन"], ["F.W. Taylor", "एफ.डब्ल्यू. टेलर"], ["Luther Gulick", "लूथर गुलिक"]], correct: 0 },
      { q: ["The invisible barrier that prevents women from reaching top leadership positions is called:", "वह अदृश्य बाधा जो महिलाओं को शीर्ष नेतृत्व पदों तक पहुंचने से रोकती है, कहलाती है:"], opts: [["Iron Curtain", "आयरन कर्टेन"], ["Glass Ceiling", "ग्लास सीलिंग"], ["Bamboo Ceiling", "बैम्बू सीलिंग"], ["Sticky Floor", "स्टिकी फ्लोर"]], correct: 1 },
      { q: ["Feminist theories of administration prefer ________ over hierarchy.", "प्रशासन के नारीवादी सिद्धांत पदानुक्रम के बजाय ________ पसंद करते हैं।"], opts: [["Dictatorship", "तानाशाही"], ["Centralization", "केंद्रीकरण"], ["Collaboration and Networks", "सहयोग और नेटवर्क"], ["Strict discipline", "सख्त अनुशासन"]], correct: 2 },
      { q: ["The concept of assessing policy implications on both men and women is known as:", "नीति के निहितार्थों का पुरुषों और महिलाओं दोनों पर आकलन करने की अवधारणा कहलाती है:"], opts: [["Gender Mainstreaming", "जेंडर मेनस्ट्रीमिंग"], ["Feminization", "फेमिनाइजेशन"], ["Matriarchy", "मातृसत्ता"], ["Social Equity", "सामाजिक समता"]], correct: 0 },
      { q: ["Mary Guy is known for her work on which concept in PA?", "मैरी गाय PA में किस अवधारणा पर अपने काम के लिए जानी जाती हैं?"], opts: [["Scientific Management", "वैज्ञानिक प्रबंधन"], ["Emotional Labor", "भावनात्मक श्रम"], ["Budgeting", "बजटिंग"], ["E-governance", "ई-गवर्नेंस"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Camilla Stivers: Wrote \"Gender Images in Public Administration\" (1993). Argued that PA is built on masculine norms.\n• Mary Guy: Focused on 'Emotional Labor' (managing feelings to fulfill job duties), mostly done by women in public service.\n• Glass Ceiling: Barrier to top jobs.\n• Sticky Floor: Women trapped in low-wage, low-mobility administrative jobs.\n• Glass Cliff: Women put in charge during crises with high risk of failure.\n• Gender Mainstreaming: ECOSOC definition (1997) - assessing implications for women and men of any planned action.",
      "UGC NET फोकस:\n• कैमिला स्टिवर्स: \"Gender Images in Public Administration\" (1993)।\n• मैरी गाय: 'भावनात्मक श्रम' पर काम।\n• ग्लास सीलिंग (शीर्ष बाधा) और स्टिकी फ्लोर (निचले स्तर पर फंसे रहना)।\n• जेंडर मेनस्ट्रीमिंग: ECOSOC परिभाषा (1997)।"
    ],
    ugcQ: [
      ["Q: What is the Feminist critique of 'Rationality' in PA? A: Feminists argue that PA defines rationality as unemotional and detached (masculine traits), while devaluing empathy and care (traditionally feminine traits).", "प्र: PA में 'तार्किकता' की नारीवादी आलोचना क्या है? उ: नारीवादियों का तर्क है कि PA तार्किकता को भावनाहीन (मर्दाना लक्षण) के रूप में परिभाषित करता है, जबकि सहानुभूति और देखभाल (पारंपरिक स्त्री लक्षण) का अवमूल्यन करता है।"],
    ],
  },

  // TOPIC 7
  {
    id: 't7', num: 7,
    title: ["Concept of Organization", "संगठन की अवधारणा"],
    introduction: [
      "Organization is the basic framework of Public Administration. Without an organization, no administrative action is possible. It is the anatomical structure of administration. L.D. White defines organization as \"the arrangement of personnel for facilitating the accomplishment of some agreed purpose through allocation of functions and responsibilities.\" An organization brings together human and material resources, structures them logically, and directs them toward a common goal. Understanding the concept of organization involves looking at its meaning, bases (how it is formed), and its formal vs. informal structures.",
      "संगठन (Organization) लोक प्रशासन का मूल ढांचा है। संगठन के बिना कोई भी प्रशासनिक कार्रवाई संभव नहीं है। यह प्रशासन की शारीरिक संरचना है। एल.डी. व्हाइट संगठन को परिभाषित करते हैं \"कार्यों और जिम्मेदारियों के आवंटन के माध्यम से किसी सहमत उद्देश्य की प्राप्ति को सुविधाजनक बनाने के लिए कर्मियों की व्यवस्था।\" एक संगठन मानवीय और भौतिक संसाधनों को एक साथ लाता है। संगठन की अवधारणा को समझने में इसका अर्थ, इसके आधार और औपचारिक बनाम अनौपचारिक संरचनाओं को देखना शामिल है।"
    ],
    concepts: [
      {
        heading: ["Meaning and Elements", "अर्थ और तत्व"],
        body: [
          "Meaning:\n• Organization is the structuring of individuals and functions into productive relationships to achieve specific goals.\n• John M. Gaus: \"Organization is the arrangement of personnel for facilitating the accomplishment of some agreed purpose.\"\n• Mooney: \"Organization is the form of every human association for the attainment of a common purpose.\"\n\nEssential Elements of an Organization:\n1. A common purpose or goal.\n2. A group of people.\n3. Communication network.\n4. Division of work/specialization.\n5. Hierarchy and Authority (Chain of Command).\n6. Rules and regulations.",
          "अर्थ:\n• संगठन विशिष्ट लक्ष्यों को प्राप्त करने के लिए उत्पादक संबंधों में व्यक्तियों और कार्यों की संरचना है।\n• जॉन एम. गॉस: \"संगठन किसी सहमत उद्देश्य की प्राप्ति को सुविधाजनक बनाने के लिए कर्मियों की व्यवस्था है।\"\n• मूनी: \"संगठन एक सामान्य उद्देश्य की प्राप्ति के लिए हर मानव संघ का रूप है।\"\n\nसंगठन के आवश्यक तत्व:\n1. एक सामान्य उद्देश्य या लक्ष्य।\n2. लोगों का एक समूह।\n3. संचार नेटवर्क।\n4. कार्य का विभाजन/विशेषज्ञता।\n5. पदानुक्रम और अधिकार (कमांड की श्रृंखला)।\n6. नियम और कानून।"
        ]
      },
      {
        heading: ["Bases of Organization (4P's) and Types", "संगठन के आधार (4P) और प्रकार"],
        body: [
          "Bases of Departmentalization (Luther Gulick's 4P's):\nGulick suggested four bases on which an organization/department can be created:\n1. Purpose: Based on the major function or objective (e.g., Ministry of Defence, Ministry of Health).\n2. Process: Based on the technique or professional skill used (e.g., Law Department, Space Department, IT Dept).\n3. Persons (Clientele): Based on the group of people served (e.g., Ministry of Tribal Affairs, Ministry of Women & Child Development).\n4. Place: Based on the geographical area served (e.g., Ministry of Development of North Eastern Region, Damodar Valley Corporation).\n\nFormal vs. Informal Organization:\n• Formal Organization: The officially designed structure, based on rules, hierarchy, and explicit authority (e.g., the organizational chart of a Ministry).\n• Informal Organization: The network of personal and social relations that spontaneously develops among workers within the formal structure (e.g., a group of employees who eat lunch together and share unofficial information). Elton Mayo highlighted its importance in the Hawthorne Studies.",
          "संगठन के आधार (लूथर गुलिक के 4P):\nगुलिक ने चार आधार सुझाए जिन पर कोई विभाग बनाया जा सकता है:\n1. उद्देश्य (Purpose): मुख्य कार्य पर आधारित (जैसे रक्षा मंत्रालय, स्वास्थ्य मंत्रालय)।\n2. प्रक्रिया (Process): प्रयुक्त तकनीक या कौशल पर आधारित (जैसे कानून विभाग, IT विभाग)।\n3. व्यक्ति (Persons/Clientele): सेवा प्राप्त करने वाले लोगों पर आधारित (जैसे जनजातीय मामलों का मंत्रालय)।\n4. स्थान (Place): भौगोलिक क्षेत्र पर आधारित (जैसे उत्तर पूर्वी क्षेत्र विकास मंत्रालय)।\n\nऔपचारिक बनाम अनौपचारिक संगठन:\n• औपचारिक: आधिकारिक रूप से डिजाइन की गई संरचना, नियमों और पदानुक्रम पर आधारित (जैसे मंत्रालय का चार्ट)।\n• अनौपचारिक: श्रमिकों के बीच सहज रूप से विकसित होने वाले व्यक्तिगत और सामाजिक संबंधों का नेटवर्क (एल्टन मेयो ने इसके महत्व को उजागर किया)।"
        ]
      }
    ],
    quotes: [
      ["Mooney: \"Organization is the form of every human association for the attainment of a common purpose.\"", "मूनी: \"संगठन एक सामान्य उद्देश्य की प्राप्ति के लिए हर मानव संघ का रूप है।\""],
      ["Luther Gulick: \"Organization is the formal structure of authority through which work subdivisions are arranged, defined, and coordinated for the defined objective.\"", "लूथर गुलिक: \"संगठन अधिकार की वह औपचारिक संरचना है जिसके माध्यम से कार्य उपखंडों को परिभाषित उद्देश्य के लिए व्यवस्थित, परिभाषित और समन्वित किया जाता है।\""],
    ],
    evaluation: [
      "The concept of organization is vital, but traditional theories focused too heavily on the 'formal' machine-like structure. Gulick's 4P's provide a useful, logical way to structure government departments, and most modern governments use a mix of all four bases. However, overlapping occurs (e.g., Ministry of Tribal Affairs is 'Persons', but deals with 'Purpose' like education and health). Furthermore, classical theorists completely ignored the 'informal organization'. Modern administrative thought recognizes that without understanding the informal social networks among employees, managing a formal organization effectively is impossible.",
      "संगठन की अवधारणा महत्वपूर्ण है, लेकिन पारंपरिक सिद्धांतों ने 'औपचारिक' मशीन जैसी संरचना पर बहुत अधिक ध्यान केंद्रित किया। गुलिक के 4P सरकारी विभागों की संरचना का एक उपयोगी तरीका प्रदान करते हैं, लेकिन इनमें ओवरलैपिंग होती है। शास्त्रीय विचारकों ने 'अनौपचारिक संगठन' को पूरी तरह से अनदेखा कर दिया। आधुनिक विचारक मानते हैं कि कर्मचारियों के बीच अनौपचारिक सामाजिक नेटवर्क को समझे बिना औपचारिक संगठन का प्रबंधन असंभव है।"
    ],
    conclusion: [
      "Organization is the institutional mechanism through which public administration operates. Whether structured by purpose, process, persons, or place, its fundamental aim is the coordinated achievement of collective goals. A comprehensive understanding of an organization requires analyzing both its rigid formal blueprint and its dynamic informal human relationships.",
      "संगठन वह संस्थागत तंत्र है जिसके माध्यम से लोक प्रशासन कार्य करता है। चाहे वह उद्देश्य, प्रक्रिया, व्यक्ति या स्थान द्वारा संरचित हो, इसका मूल लक्ष्य सामूहिक लक्ष्यों की समन्वित प्राप्ति है।"
    ],
    shortQ: [
      ["Define Organization.", "संगठन को परिभाषित करें।"],
      ["What are the 4P's of organization according to Luther Gulick?", "लूथर गुलिक के अनुसार संगठन के 4P क्या हैं?"],
      ["Give an example of an organization based on 'Clientele' (Persons).", "'व्यक्ति' (Clientele) पर आधारित संगठन का एक उदाहरण दें।"],
      ["What is an informal organization?", "अनौपचारिक संगठन क्या है?"],
      ["Give an example of an organization based on 'Place'.", "'स्थान' (Place) पर आधारित संगठन का एक उदाहरण दें।"],
    ],
    longQ: [
      ["Discuss the meaning and essential elements of an Organization.", "संगठन के अर्थ और आवश्यक तत्वों पर चर्चा करें।"],
      ["Explain Luther Gulick's 4P's of departmentalization with suitable examples.", "उपयुक्त उदाहरणों के साथ लूथर गुलिक के विभागीकरण के 4P की व्याख्या करें।"],
      ["Distinguish between formal and informal organization.", "औपचारिक और अनौपचारिक संगठन के बीच अंतर करें।"],
      ["Why is the study of informal organization important in Public Administration?", "लोक प्रशासन में अनौपचारिक संगठन का अध्ययन क्यों महत्वपूर्ण है?"],
      ["Critically evaluate the bases of organization in modern government.", "आधुनिक सरकार में संगठन के आधारों का आलोचनात्मक मूल्यांकन करें।"],
    ],
    mcqs: [
      { q: ["Who proposed the 4P's formula for the bases of organization?", "संगठन के आधारों के लिए 4P का सूत्र किसने प्रस्तावित किया?"], opts: [["Henri Fayol", "हेनरी फेयोल"], ["F.W. Taylor", "एफ.डब्ल्यू. टेलर"], ["Luther Gulick", "लूथर गुलिक"], ["Herbert Simon", "हर्बर्ट साइमन"]], correct: 2 },
      { q: ["The Ministry of Women and Child Development is an example of organization based on:", "महिला एवं बाल विकास मंत्रालय किस पर आधारित संगठन का उदाहरण है?"], opts: [["Purpose", "उद्देश्य"], ["Process", "प्रक्रिया"], ["Place", "स्थान"], ["Persons (Clientele)", "व्यक्ति (ग्राहक)"]], correct: 3 },
      { q: ["The Ministry of Defence is based on the principle of:", "रक्षा मंत्रालय किस सिद्धांत पर आधारित है?"], opts: [["Purpose", "उद्देश्य"], ["Process", "प्रक्रिया"], ["Place", "स्थान"], ["Persons", "व्यक्ति"]], correct: 0 },
      { q: ["Which aspect of organization did Elton Mayo's Hawthorne studies highlight?", "एल्टन मेयो के हॉथोर्न अध्ययनों ने संगठन के किस पहलू पर प्रकाश डाला?"], opts: [["Formal structure", "औपचारिक संरचना"], ["Informal organization", "अनौपचारिक संगठन"], ["Financial incentives", "वित्तीय प्रोत्साहन"], ["Rules and manuals", "नियम और मैनुअल"]], correct: 1 },
      { q: ["A Law Department in a government is organized on the basis of:", "सरकार में कानून विभाग किस आधार पर आयोजित किया जाता है?"], opts: [["Place", "स्थान"], ["Persons", "व्यक्ति"], ["Process", "प्रक्रिया"], ["Purpose", "उद्देश्य"]], correct: 2 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Luther Gulick's 4Ps: Purpose, Process, Persons (Clientele), Place (Area).\n• Haldane Committee Report (1918, UK) recommended 'Purpose' as the best basis of organization.\n• Formal Organization: Associated with Classical theory (Weber, Taylor, Gulick).\n• Informal Organization: Discovered and emphasized by Human Relations theory (Elton Mayo, Chester Barnard).\n• Chester Barnard: Organization is a \"system of consciously coordinated activities of two or more persons.\"",
      "UGC NET फोकस:\n• लूथर गुलिक के 4P: Purpose, Process, Persons, Place।\n• हाल्डेन समिति रिपोर्ट (1918, UK) ने 'उद्देश्य' (Purpose) की सिफारिश की।\n• औपचारिक संगठन: शास्त्रीय सिद्धांत (वेबर)।\n• अनौपचारिक संगठन: मानव संबंध सिद्धांत (मेयो, बर्नार्ड)।"
    ],
    ugcQ: [
      ["Q: What did the Haldane Committee (1918) recommend? A: It recommended that government departments should be organized on the basis of 'Services to be rendered' (Purpose).", "प्र: हाल्डेन समिति (1918) ने क्या सिफारिश की? उ: सरकारी विभागों को 'प्रदान की जाने वाली सेवाओं' (उद्देश्य) के आधार पर आयोजित किया जाना चाहिए।"],
    ],
  },

  // TOPIC 8
  {
    id: 't8', num: 8,
    title: ["Theories of Organization", "संगठन के सिद्धांत"],
    introduction: [
      "To understand how organizations function, manage people, and achieve goals, various scholars have proposed 'Theories of Organization'. These theories provide frameworks to analyze and improve administrative structures. The evolution of these theories reflects a shift from treating workers as mere cogs in a machine to viewing them as complex social and psychological beings. The three most prominent theories are the Classical Theory (Structural), the Scientific Management Theory (Efficiency-driven), and the Human Relations Theory (Socio-psychological).",
      "संगठन कैसे कार्य करते हैं, लोगों का प्रबंधन कैसे करते हैं और लक्ष्य कैसे प्राप्त करते हैं, यह समझने के लिए विभिन्न विद्वानों ने 'संगठन के सिद्धांत' प्रस्तावित किए हैं। इन सिद्धांतों का विकास श्रमिकों को मशीन के पुर्जे के रूप में देखने से लेकर उन्हें जटिल सामाजिक और मनोवैज्ञानिक प्राणी के रूप में देखने तक के बदलाव को दर्शाता है। तीन सबसे प्रमुख सिद्धांत हैं: शास्त्रीय सिद्धांत, वैज्ञानिक प्रबंधन सिद्धांत, और मानव संबंध सिद्धांत।"
    ],
    concepts: [
      {
        heading: ["Classical and Scientific Management Theories", "शास्त्रीय और वैज्ञानिक प्रबंधन सिद्धांत"],
        body: [
          "1. Classical Theory (Structural/Mechanistic Theory):\n• Thinkers: Henri Fayol, Luther Gulick, Lyndall Urwick.\n• Core Idea: Focuses on the formal structure of the organization. It believes that there are universal \"principles\" of organization (like hierarchy, span of control, unity of command) that apply everywhere.\n• Features: Treats organization as a machine and workers as cogs. Highly impersonal. Efficiency is achieved through proper structuring.\n• Fayol gave 14 principles of management (Division of work, Authority, Discipline, etc.).\n\n2. Scientific Management Theory:\n• Thinker: Frederick Winslow Taylor (Father of Scientific Management).\n• Core Idea: Focuses on the physical efficiency of the worker at the shop-floor level. Replaces \"rule of thumb\" with scientific methods.\n• Features:\n  - Time and Motion Studies: Finding the \"one best way\" to do a job.\n  - Differential Piece Rate: Paying workers based on the number of items produced to motivate them financially (Economic Man concept).\n  - Functional Foremanship: A worker is supervised by 8 specialist bosses instead of 1 (violates unity of command).\n  - Mental Revolution: Harmony and cooperation between management and workers.",
          "1. शास्त्रीय सिद्धांत (संरचनात्मक):\n• विचारक: हेनरी फेयोल, लूथर गुलिक।\n• मुख्य विचार: औपचारिक संरचना पर केंद्रित। इसका मानना है कि संगठन के सार्वभौमिक \"सिद्धांत\" (जैसे पदानुक्रम) होते हैं।\n• विशेषताएं: संगठन को एक मशीन और श्रमिकों को पुर्जों के रूप में मानता है। फेयोल ने प्रबंधन के 14 सिद्धांत दिए।\n\n2. वैज्ञानिक प्रबंधन सिद्धांत:\n• विचारक: एफ.डब्ल्यू. टेलर (वैज्ञानिक प्रबंधन के जनक)।\n• मुख्य विचार: दुकान-मंजिल (shop-floor) स्तर पर भौतिक दक्षता पर केंद्रित। \"अंगूठे के नियम\" को वैज्ञानिक तरीकों से बदलता है।\n• विशेषताएं: समय और गति अध्ययन (\"एक सबसे अच्छा तरीका\"), विभेदक टुकड़ा दर (वित्तीय प्रोत्साहन), कार्यात्मक फोरमैनशिप (8 बॉस), मानसिक क्रांति।"
        ]
      },
      {
        heading: ["Human Relations Theory", "मानव संबंध सिद्धांत"],
        body: [
          "3. Human Relations Theory:\n• Thinker: Elton Mayo (Father of Human Relations).\n• Origin: The famous Hawthorne Studies (1924-1932) at the Western Electric Company, Chicago.\n• Core Idea: Rejected the 'machine' and 'economic man' models of Classical and Taylor's theories. It proved that workers are motivated by social and psychological factors, not just money.\n• Key Findings (Hawthorne Experiments):\n  - Social norms determine production levels, not just physical capacity.\n  - Non-economic rewards (praise, belongingness) affect behavior.\n  - Informal Organization exists within the formal one and heavily influences worker output.\n  - Workers react to management as members of a group, not as isolated individuals.\n• Impact: Shifted the focus of administration from 'structure' and 'efficiency' to 'people' and 'social dynamics'.",
          "3. मानव संबंध सिद्धांत:\n• विचारक: एल्टन मेयो (मानव संबंधों के जनक)।\n• उत्पत्ति: शिकागो में प्रसिद्ध हॉथोर्न अध्ययन (1924-1932)।\n• मुख्य विचार: शास्त्रीय और टेलर के 'आर्थिक मनुष्य' मॉडल को खारिज किया। साबित किया कि श्रमिक केवल पैसे से नहीं, बल्कि सामाजिक और मनोवैज्ञानिक कारकों से प्रेरित होते हैं।\n• प्रमुख निष्कर्ष:\n  - सामाजिक मानदंड उत्पादन का स्तर निर्धारित करते हैं।\n  - गैर-आर्थिक पुरस्कार (प्रशंसा, अपनत्व) व्यवहार को प्रभावित करते हैं।\n  - अनौपचारिक संगठन मौजूद है और आउटपुट को प्रभावित करता है।\n• प्रभाव: प्रशासन का ध्यान 'संरचना' से हटाकर 'लोगों' पर केंद्रित किया।"
        ]
      }
    ],
    quotes: [
      ["F.W. Taylor: \"The principal object of management should be to secure the maximum prosperity for the employer, coupled with the maximum prosperity for each employee.\"", "एफ.डब्ल्यू. टेलर: \"प्रबंधन का मुख्य उद्देश्य नियोक्ता और कर्मचारी दोनों के लिए अधिकतम समृद्धि सुरक्षित करना होना चाहिए।\""],
      ["Elton Mayo: \"Man's desire to be continuously associated in work with his fellows is a strong, if not the strongest, human characteristic.\"", "एल्टन मेयो: \"अपने साथियों के साथ काम में लगातार जुड़े रहने की मनुष्य की इच्छा एक मजबूत मानवीय विशेषता है।\""],
    ],
    evaluation: [
      "The Classical and Scientific Management theories revolutionized industrial efficiency. Taylor's methods dramatically increased productivity. However, they were severely criticized for being \"inhuman\"—treating workers like unfeeling machines driven only by money (Taylorism was called 'physiological organization theory'). Elton Mayo's Human Relations theory provided a vital corrective by discovering the 'social man'. However, Mayo was criticized by Marxists for giving management psychological tools to manipulate and exploit workers without increasing their pay. Modern organizational theory (like Systems Theory) tries to synthesize both: combining formal structural efficiency with informal human relations.",
      "शास्त्रीय और वैज्ञानिक प्रबंधन सिद्धांतों ने औद्योगिक दक्षता में क्रांति ला दी। टेलर के तरीकों ने उत्पादकता बढ़ाई। हालांकि, \"अमानवीय\" होने के लिए उनकी कड़ी आलोचना की गई—श्रमिकों को केवल पैसे से चलने वाली मशीनों की तरह माना गया। एल्टन मेयो के मानव संबंध सिद्धांत ने 'सामाजिक मनुष्य' की खोज करके एक महत्वपूर्ण सुधार प्रदान किया। हालांकि, मेयो की आलोचना की गई कि उन्होंने प्रबंधन को श्रमिकों में हेरफेर करने के मनोवैज्ञानिक उपकरण दिए। आधुनिक सिद्धांत संरचना और मानवीय संबंधों दोनों को जोड़ते हैं।"
    ],
    conclusion: [
      "Theories of organization have progressed from a mechanistic focus on structure and physical efficiency to a humanistic focus on social relations and psychology. Together, Taylor's search for the 'one best way', Fayol's structural principles, and Mayo's emphasis on informal groups provide a comprehensive understanding of how organizations function.",
      "संगठन के सिद्धांत संरचना और भौतिक दक्षता पर यांत्रिक फोकस से आगे बढ़कर सामाजिक संबंधों और मनोविज्ञान पर मानवतावादी फोकस तक प्रगति कर चुके हैं। टेलर, फेयोल और मेयो के सिद्धांत एक साथ संगठन की व्यापक समझ प्रदान करते हैं।"
    ],
    shortQ: [
      ["Who is known as the father of Scientific Management?", "वैज्ञानिक प्रबंधन के जनक के रूप में किसे जाना जाता है?"],
      ["What was the main finding of the Hawthorne Studies?", "हॉथोर्न अध्ययन का मुख्य निष्कर्ष क्या था?"],
      ["Name two thinkers associated with the Classical Theory of organization.", "संगठन के शास्त्रीय सिद्धांत से जुड़े दो विचारकों के नाम बताएं।"],
      ["What is 'Functional Foremanship'?", "'कार्यात्मक फोरमैनशिप' क्या है?"],
      ["Differentiate between 'Economic Man' and 'Social Man'.", "'आर्थिक मनुष्य' और 'सामाजिक मनुष्य' में अंतर करें।"],
    ],
    longQ: [
      ["Discuss the main features of the Classical Theory of Organization.", "संगठन के शास्त्रीय सिद्धांत की मुख्य विशेषताओं पर चर्चा करें।"],
      ["Explain F.W. Taylor's Scientific Management Theory. What are its criticisms?", "एफ.डब्ल्यू. टेलर के वैज्ञानिक प्रबंधन सिद्धांत की व्याख्या करें। इसकी आलोचनाएं क्या हैं?"],
      ["Analyze the impact of the Hawthorne Studies on organizational theory.", "संगठनात्मक सिद्धांत पर हॉथोर्न अध्ययन के प्रभाव का विश्लेषण करें।"],
      ["Compare Scientific Management Theory with Human Relations Theory.", "मानव संबंध सिद्धांत के साथ वैज्ञानिक प्रबंधन सिद्धांत की तुलना करें।"],
      ["'The Human Relations Theory shifted the focus from machines to people.' Discuss.", "'मानव संबंध सिद्धांत ने ध्यान मशीनों से लोगों पर स्थानांतरित कर दिया।' चर्चा करें।"],
    ],
    mcqs: [
      { q: ["Frederick Winslow Taylor is associated with:", "फ्रेडरिक विंसलो टेलर जुड़े हुए हैं:"], opts: [["Human Relations Theory", "मानव संबंध सिद्धांत"], ["Scientific Management Theory", "वैज्ञानिक प्रबंधन सिद्धांत"], ["Bureaucratic Theory", "नौकरशाही सिद्धांत"], ["Systems Theory", "प्रणाली सिद्धांत"]], correct: 1 },
      { q: ["The concept of 'Mental Revolution' was given by:", "'मानसिक क्रांति' की अवधारणा किसने दी?"], opts: [["Elton Mayo", "एल्टन मेयो"], ["Henri Fayol", "हेनरी फेयोल"], ["F.W. Taylor", "एफ.डब्ल्यू. टेलर"], ["Max Weber", "मैक्स वेबर"]], correct: 2 },
      { q: ["Hawthorne Experiments were conducted under the leadership of:", "हॉथोर्न प्रयोग किसके नेतृत्व में आयोजित किए गए थे?"], opts: [["F.W. Taylor", "एफ.डब्ल्यू. टेलर"], ["Luther Gulick", "लूथर गुलिक"], ["Elton Mayo", "एल्टन मेयो"], ["Herbert Simon", "हर्बर्ट साइमन"]], correct: 2 },
      { q: ["Which theory views workers primarily as 'Economic Men'?", "कौन सा सिद्धांत श्रमिकों को मुख्य रूप से 'आर्थिक मनुष्य' के रूप में देखता है?"], opts: [["Classical/Scientific Management", "शास्त्रीय/वैज्ञानिक प्रबंधन"], ["Human Relations", "मानव संबंध"], ["Decision-making", "निर्णय लेने का"], ["Ecological", "पारिस्थितिक"]], correct: 0 },
      { q: ["Henri Fayol proposed how many principles of management?", "हेनरी फेयोल ने प्रबंधन के कितने सिद्धांत प्रस्तावित किए?"], opts: [["10", "10"], ["12", "12"], ["14", "14"], ["16", "16"]], correct: 2 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• F.W. Taylor: \"Principles of Scientific Management\" (1911). Coined 'Mental Revolution', 'Functional Foremanship' (8 bosses: 4 planning, 4 execution).\n• Henri Fayol: \"General and Industrial Management\" (1916). Gave 14 principles (Division of work, Authority, Discipline, Unity of command, Unity of direction, Subordination of individual interest, Remuneration, Centralization, Scalar chain, Order, Equity, Stability of tenure, Initiative, Esprit de corps).\n• Elton Mayo: Hawthorne Studies (1924-1932) at Western Electric Co. Phases: Illumination experiment, Relay assembly test room, Mass interviewing, Bank wiring observation room.",
      "UGC NET फोकस:\n• एफ.डब्ल्यू. टेलर: \"Principles of Scientific Management\" (1911)। कार्यात्मक फोरमैनशिप (8 बॉस)।\n• हेनरी फेयोल: 14 सिद्धांत।\n• एल्टन मेयो: हॉथोर्न अध्ययन (1924-1932)। इल्यूमिनेशन प्रयोग, बैंक वायरिंग रूम।"
    ],
    ugcQ: [
      ["Q: What does 'Functional Foremanship' violate? A: It violates Fayol's principle of 'Unity of Command' because a worker receives orders from 8 different bosses instead of just 1.", "प्र: 'कार्यात्मक फोरमैनशिप' किसका उल्लंघन करता है? उ: यह फेयोल के 'कमांड की एकता' के सिद्धांत का उल्लंघन करता है क्योंकि एक कार्यकर्ता 1 के बजाय 8 अलग-अलग बॉसों से आदेश प्राप्त करता है।"],
    ],
  },

  // TOPIC 9
  {
    id: 't9', num: 9,
    title: ["Principles of Organization", "संगठन के सिद्धांत (Principles)"],
    introduction: [
      "Classical thinkers of Public Administration believed that administration is a science, and just like physics, it has universal 'principles'. If these principles are applied, any organization will achieve maximum efficiency. While later behavioral scholars (like Herbert Simon) criticized these as mere 'proverbs', they remain the structural foundation of almost all modern government bureaucracies and military organizations. The most important principles of organization are Hierarchy, Span of Control, Unity of Command, and Centralization vs. Decentralization.",
      "लोक प्रशासन के शास्त्रीय विचारकों का मानना था कि प्रशासन एक विज्ञान है, और भौतिकी की तरह, इसके सार्वभौमिक 'सिद्धांत' हैं। यदि इन सिद्धांतों को लागू किया जाता है, तो कोई भी संगठन अधिकतम दक्षता प्राप्त करेगा। हालांकि बाद के विद्वानों (जैसे हर्बर्ट साइमन) ने इन्हें महज 'कहावतें' कहकर आलोचना की, वे लगभग सभी आधुनिक सरकारी नौकरशाही की संरचनात्मक नींव बने हुए हैं। सबसे महत्वपूर्ण सिद्धांत हैं पदानुक्रम, नियंत्रण का दायरा, आदेश की एकता, और केंद्रीकरण बनाम विकेंद्रीकरण।"
    ],
    concepts: [
      {
        heading: ["Hierarchy and Span of Control", "पदानुक्रम और नियंत्रण का दायरा"],
        body: [
          "1. HIERARCHY (Scalar Chain):\n• Meaning: The universal principle of organizing people in a pyramid-like ranking (superior-subordinate relationship). Authority flows step-by-step from top to bottom.\n• Rule: \"Through proper channel\" - no level can be skipped in communication.\n• Advantages: Fixes responsibility, ensures discipline and unity of direction.\n• Disadvantages: Causes delay (red tape), rigidity. Fayol suggested 'Gang-Plank' (a temporary bridge between two same-level employees) to avoid delays.\n\n2. SPAN OF CONTROL:\n• Meaning: The number of subordinates a superior can effectively supervise.\n• Graicunas Formula: V.A. Graicunas mathematically proved that as the number of subordinates increases arithmetically, the number of relationships the boss must manage increases geometrically.\n• Ideal Span: Classical thinkers suggested a narrow span (3 to 6 subordinates). Modern IT has widened the span of control.\n• Relation with Hierarchy: Narrow span creates a tall/hierarchical organization; Wide span creates a flat organization.",
          "1. पदानुक्रम (Hierarchy / Scalar Chain):\n• अर्थ: लोगों को पिरामिड जैसी रैंकिंग (वरिष्ठ-अधीनस्थ संबंध) में व्यवस्थित करना। अधिकार ऊपर से नीचे बहता है।\n• नियम: \"उचित माध्यम से\" (Through proper channel)।\n• दोष: देरी (लालफीताशाही)। फेयोल ने देरी से बचने के लिए 'गैंग-प्लैंक' (Gang-Plank) का सुझाव दिया।\n\n2. नियंत्रण का दायरा (Span of Control):\n• अर्थ: अधीनस्थों की वह संख्या जिसकी एक वरिष्ठ प्रभावी ढंग से देखरेख कर सकता है।\n• ग्रेसुनास का सूत्र: जैसे-जैसे अधीनस्थों की संख्या बढ़ती है, संबंधों की संख्या ज्यामितीय रूप से बढ़ती है।\n• आदर्श दायरा: शास्त्रीय विचारकों ने संकीर्ण दायरे (3 से 6 अधीनस्थ) का सुझाव दिया।"
        ]
      },
      {
        heading: ["Unity of Command and Centralization/Decentralization", "आदेश की एकता और केंद्रीकरण/विकेंद्रीकरण"],
        body: [
          "3. UNITY OF COMMAND:\n• Meaning: An employee should receive orders from one, and only one, superior.\n• Rationale: Prevents confusion, conflict of instructions, and evasion of responsibility (no one can say \"I didn't do it because the other boss told me to do something else\").\n• Exception: Taylor's 'Functional Foremanship' directly violates this by giving a worker 8 bosses.\n\n4. CENTRALIZATION vs DECENTRALIZATION:\n• Centralization: Concentration of decision-making authority at the top of the hierarchy.\n• Decentralization: Dispersal of decision-making authority to lower levels (e.g., giving powers to Panchayati Raj institutions).\n• Factors determining choice: Size of organization, history, crisis situations (crises demand centralization), and availability of capable subordinates.",
          "3. आदेश की एकता (Unity of Command):\n• अर्थ: एक कर्मचारी को केवल एक ही वरिष्ठ से आदेश प्राप्त होना चाहिए।\n• औचित्य: भ्रम और जिम्मेदारी से बचने को रोकता है।\n• अपवाद: टेलर की 'कार्यात्मक फोरमैनशिप' इसका उल्लंघन करती है।\n\n4. केंद्रीकरण बनाम विकेंद्रीकरण:\n• केंद्रीकरण: पदानुक्रम के शीर्ष पर निर्णय लेने के अधिकार का एकाग्रता।\n• विकेंद्रीकरण: निचले स्तरों पर निर्णय लेने के अधिकार का फैलाव (जैसे पंचायती राज)।\n• संकट की स्थितियों में केंद्रीकरण की आवश्यकता होती है।"
        ]
      }
    ],
    quotes: [
      ["Henri Fayol: \"For any action whatsoever, an employee should receive orders from one superior only.\" (Unity of Command)", "हेनरी फेयोल: \"किसी भी कार्य के लिए, एक कर्मचारी को केवल एक वरिष्ठ से आदेश प्राप्त होना चाहिए।\""],
      ["V.A. Graicunas: \"As subordinates increase arithmetically, relationships increase geometrically.\"", "वी.ए. ग्रेसुनास: \"जैसे-जैसे अधीनस्थ अंकगणितीय रूप से बढ़ते हैं, संबंध ज्यामितीय रूप से बढ़ते हैं।\""],
    ],
    evaluation: [
      "The classical principles provide clarity, order, and discipline in an organization. Hierarchy establishes a clear chain of command, which is essential for militaries and large bureaucracies. However, strict adherence to these principles leads to severe red-tapism and rigidity. Herbert Simon criticized them as contradictory 'proverbs' (e.g., if you reduce the Span of Control, you increase Hierarchy, causing communication delays). In the modern era of knowledge workers and IT, strict hierarchy and unity of command are giving way to flat networks, matrix organizations, and decentralized team-based structures.",
      "शास्त्रीय सिद्धांत संगठन में स्पष्टता, व्यवस्था और अनुशासन प्रदान करते हैं। पदानुक्रम सेनाओं और बड़ी नौकरशाही के लिए आवश्यक है। हालांकि, इन सिद्धांतों के सख्त पालन से लालफीताशाही और कठोरता आती है। हर्बर्ट साइमन ने उन्हें विरोधाभासी 'कहावतें' कहकर आलोचना की। आधुनिक IT युग में, सख्त पदानुक्रम और आदेश की एकता की जगह फ्लैट नेटवर्क और विकेंद्रीकृत ढांचे ले रहे हैं।"
    ],
    conclusion: [
      "The principles of organization—Hierarchy, Span of Control, Unity of Command, and Decentralization—are the building blocks of administrative anatomy. While they are no longer viewed as infallible scientific laws, they remain practical tools for designing and managing large-scale public institutions, provided they are applied with flexibility rather than rigidity.",
      "संगठन के सिद्धांत प्रशासनिक शरीर रचना के निर्माण खंड हैं। हालांकि अब उन्हें अचूक वैज्ञानिक कानूनों के रूप में नहीं देखा जाता है, फिर भी वे बड़े पैमाने पर सार्वजनिक संस्थानों को डिजाइन करने और प्रबंधित करने के लिए व्यावहारिक उपकरण बने हुए हैं, बशर्ते उन्हें कठोरता के बजाय लचीलेपन के साथ लागू किया जाए।"
    ],
    shortQ: [
      ["Define 'Hierarchy' in public administration.", "लोक प्रशासन में 'पदानुक्रम' को परिभाषित करें।"],
      ["What is meant by 'Span of Control'?", "'नियंत्रण के दायरे' से क्या तात्पर्य है?"],
      ["What is 'Unity of Command'?", "'आदेश की एकता' क्या है?"],
      ["What is Fayol's 'Gang-Plank'?", "फेयोल का 'गैंग-प्लैंक' क्या है?"],
      ["Which principle does Taylor's Functional Foremanship violate?", "टेलर की कार्यात्मक फोरमैनशिप किस सिद्धांत का उल्लंघन करती है?"],
    ],
    longQ: [
      ["Discuss Hierarchy as a principle of organization. What are its merits and demerits?", "संगठन के एक सिद्धांत के रूप में पदानुक्रम पर चर्चा करें। इसके गुण और दोष क्या हैं?"],
      ["Explain the concept of Span of Control. What factors determine it?", "नियंत्रण के दायरे की अवधारणा की व्याख्या करें। कौन से कारक इसे निर्धारित करते हैं?"],
      ["What is Unity of Command? Discuss its importance in an organization.", "आदेश की एकता क्या है? संगठन में इसके महत्व पर चर्चा करें।"],
      ["Critically examine the debate between Centralization and Decentralization.", "केंद्रीकरण और विकेंद्रीकरण के बीच बहस का आलोचनात्मक परीक्षण करें।"],
      ["Why did Herbert Simon call the principles of organization 'proverbs'?", "हर्बर्ट साइमन ने संगठन के सिद्धांतों को 'कहावतें' क्यों कहा?"],
    ],
    mcqs: [
      { q: ["The principle that an employee should receive orders from one superior only is:", "यह सिद्धांत कि एक कर्मचारी को केवल एक वरिष्ठ से आदेश प्राप्त होना चाहिए, है:"], opts: [["Span of Control", "नियंत्रण का दायरा"], ["Unity of Direction", "दिशा की एकता"], ["Unity of Command", "आदेश की एकता"], ["Scalar Chain", "स्केलर चेन"]], correct: 2 },
      { q: ["V.A. Graicunas is associated with which principle?", "वी.ए. ग्रेसुनास किस सिद्धांत से जुड़े हैं?"], opts: [["Hierarchy", "पदानुक्रम"], ["Span of Control", "नियंत्रण का दायरा"], ["Centralization", "केंद्रीकरण"], ["Delegation", "प्रत्यायोजन"]], correct: 1 },
      { q: ["'Gang-Plank' is a mechanism to overcome the delays caused by:", "'गैंग-प्लैंक' किसके कारण होने वाली देरी को दूर करने का एक तंत्र है?"], opts: [["Span of control", "नियंत्रण का दायरा"], ["Unity of command", "आदेश की एकता"], ["Hierarchy (Scalar Chain)", "पदानुक्रम (स्केलर चेन)"], ["Decentralization", "विकेंद्रीकरण"]], correct: 2 },
      { q: ["Who termed the principles of administration as 'proverbs'?", "प्रशासन के सिद्धांतों को 'कहावतें' किसने कहा?"], opts: [["Herbert Simon", "हर्बर्ट साइमन"], ["F.W. Taylor", "एफ.डब्ल्यू. टेलर"], ["Henri Fayol", "हेनरी फेयोल"], ["L.D. White", "एल.डी. व्हाइट"]], correct: 0 },
      { q: ["A flat organization structure implies a:", "एक फ्लैट संगठन संरचना का तात्पर्य है:"], opts: [["Narrow span of control", "नियंत्रण का संकीर्ण दायरा"], ["Wide span of control", "नियंत्रण का विस्तृत दायरा"], ["Strict hierarchy", "सख्त पदानुक्रम"], ["No hierarchy", "कोई पदानुक्रम नहीं"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Graicunas Formula: Calculates the number of relationships (R) a manager must handle for 'n' subordinates. R = n [2^(n-1) + n - 1].\n• Gang-Plank (Fayol): A level-jumping mechanism in hierarchy to allow horizontal communication in emergencies.\n• Unity of Command (Fayol) vs Functional Foremanship (Taylor): Direct contradiction.\n• Span of Control is inversely proportional to the number of hierarchical levels (Wide span = flat org; Narrow span = tall org).",
      "UGC NET फोकस:\n• ग्रेसुनास सूत्र: अधीनस्थों और संबंधों की गणना।\n• गैंग-प्लैंक (फेयोल): पदानुक्रम में क्षैतिज संचार।\n• नियंत्रण का दायरा पदानुक्रम के स्तरों के व्युत्क्रमानुपाती होता है (विस्तृत दायरा = फ्लैट संगठन)।"
    ],
    ugcQ: [
      ["Q: What did Graicunas mathematically prove? A: That while subordinates increase arithmetically (1, 2, 3), the relationships the manager has to supervise increase geometrically, justifying a narrow span of control.", "प्र: ग्रेसुनास ने गणितीय रूप से क्या साबित किया? उ: कि जबकि अधीनस्थ अंकगणितीय रूप से बढ़ते हैं, संबंधों की संख्या ज्यामितीय रूप से बढ़ती है, जो नियंत्रण के संकीर्ण दायरे को सही ठहराती है।"],
    ],
  },

  // TOPIC 10
  {
    id: 't10', num: 10,
    title: ["Line and Staff Agencies", "लाइन और स्टाफ एजेंसियां"],
    introduction: [
      "In any large administrative organization, functions are broadly divided into two categories based on their direct contribution to the organization's ultimate goals. These are executed by 'Line' and 'Staff' agencies. This concept was originally borrowed from the military. In the army, 'Line' soldiers are the ones actually fighting on the battlefield, while 'Staff' officers sit in the headquarters planning strategies, managing supplies, and advising the generals. In Public Administration, the Line agencies perform the primary tasks of the government, while Staff agencies provide advice, research, and support to the Line agencies. Understanding this division is crucial for analyzing the structural design of government ministries.",
      "किसी भी बड़े प्रशासनिक संगठन में, कार्यों को संगठन के अंतिम लक्ष्यों में उनके प्रत्यक्ष योगदान के आधार पर दो श्रेणियों में बांटा जाता है। ये 'लाइन' (Line) और 'स्टाफ' (Staff) एजेंसियों द्वारा निष्पादित किए जाते हैं। यह अवधारणा मूल रूप से सेना से ली गई थी। लोक प्रशासन में, लाइन एजेंसियां सरकार के प्राथमिक कार्य करती हैं, जबकि स्टाफ एजेंसियां लाइन एजेंसियों को सलाह, शोध और सहायता प्रदान करती हैं।"
    ],
    concepts: [
      {
        heading: ["Line Agencies", "लाइन एजेंसियां"],
        body: [
          "Meaning and Role:\n• 'Line' agencies are directly engaged in the execution of the primary objectives of the government.\n• They interact directly with the citizens.\n• They have the power of command and decision-making authority.\n\nExamples of Line Agencies:\n1. Government Departments/Ministries (e.g., Ministry of Health, Ministry of Defence, Police Department).\n2. Public Corporations (e.g., LIC, Air India).\n3. Independent Regulatory Commissions (in USA).\n\nKey Features:\n• Action-oriented: They 'do' the actual work (e.g., doctors in public hospitals, police officers on patrol).\n• Possess authoritative command.\n• Direct contact with the public.",
          "अर्थ और भूमिका:\n• 'लाइन' एजेंसियां सीधे सरकार के प्राथमिक उद्देश्यों के निष्पादन में लगी हुई हैं।\n• वे नागरिकों के साथ सीधे बातचीत करती हैं।\n• उनके पास आदेश और निर्णय लेने का अधिकार है।\n\nलाइन एजेंसियों के उदाहरण:\n1. सरकारी विभाग/मंत्रालय (जैसे स्वास्थ्य मंत्रालय, रक्षा मंत्रालय, पुलिस विभाग)।\n2. सार्वजनिक निगम (जैसे LIC)।\n\nप्रमुख विशेषताएं:\n• क्रिया-उन्मुख: वे वास्तविक काम 'करते' हैं।\n• जनता के साथ सीधा संपर्क।"
        ]
      },
      {
        heading: ["Staff and Auxiliary Agencies", "स्टाफ और सहायक एजेंसियां"],
        body: [
          "Meaning and Role of Staff Agencies:\n• 'Staff' agencies do not directly execute primary objectives. Their job is to advise, plan, research, and assist the Chief Executive and Line agencies.\n• They have NO power of command over the line agencies. They only advise.\n• Pfiffner says: \"Staff is an extension of the personality of the executive.\"\n• Examples: NITI Aayog (Planning), Prime Minister's Office (PMO), Cabinet Secretariat, Economic Advisors.\n\nMeaning and Role of Auxiliary Agencies:\n• Sometimes called 'housekeeping' agencies. They provide common support services needed by all line agencies to function.\n• Examples: Public Works Department (building offices), UPSC (recruiting staff), Finance Ministry (providing funds), Central Purchasing Office.\n• Difference from Staff: Staff gives 'intellectual' support (advice), Auxiliary gives 'material/institutional' support.\n\nThe Line-Staff Conflict:\n• In practice, friction often occurs. Line officers complain that Staff officers give impractical advice from \"ivory towers\" without ground reality. Staff officers complain that Line officers are stubborn and ignore expert advice.",
          "स्टाफ एजेंसियों का अर्थ और भूमिका:\n• 'स्टाफ' एजेंसियां मुख्य कार्यकारी और लाइन एजेंसियों को सलाह, योजना और सहायता प्रदान करती हैं।\n• उनके पास लाइन एजेंसियों पर आदेश देने की कोई शक्ति नहीं है। वे केवल सलाह देते हैं।\n• उदाहरण: नीति आयोग, PMO, आर्थिक सलाहकार।\n\nसहायक एजेंसियों का अर्थ और भूमिका:\n• इन्हें 'हाउसकीपिंग' एजेंसियां भी कहा जाता है। वे सभी लाइन एजेंसियों को आवश्यक सामान्य सहायता सेवाएं प्रदान करती हैं।\n• उदाहरण: PWD (कार्यालय भवन), UPSC (भर्ती), वित्त मंत्रालय।\n\nलाइन-स्टाफ संघर्ष:\n• व्यवहार में, अक्सर घर्षण होता है। लाइन अधिकारियों की शिकायत है कि स्टाफ अधिकारी जमीनी वास्तविकता के बिना अव्यावहारिक सलाह देते हैं। स्टाफ अधिकारियों की शिकायत है कि लाइन अधिकारी जिद्दी हैं और विशेषज्ञ सलाह की उपेक्षा करते हैं।"
        ]
      }
    ],
    quotes: [
      ["Mooney: \"The line is the chain of command, the staff is an advisory group.\"", "मूनी: \"लाइन कमांड की श्रृंखला है, स्टाफ एक सलाहकार समूह है।\""],
      ["Pfiffner: \"Staff is an extension of the personality of the executive. It means more eyes, more ears and more hands to aid him in forming and carrying out his plans.\"", "फिफनर: \"स्टाफ कार्यकारी के व्यक्तित्व का विस्तार है। इसका अर्थ है उसे अपनी योजनाएं बनाने और क्रियान्वित करने में सहायता करने के लिए अधिक आंखें, अधिक कान और अधिक हाथ।\""],
    ],
    evaluation: [
      "The distinction between line and staff is essential for organizational efficiency. A Chief Executive (like a Prime Minister or a CEO) cannot possibly research, plan, and execute everything alone; they need a robust 'staff' (like the PMO) to filter information and provide expert advice, allowing the 'line' ministries to execute the decisions. However, the theoretical distinction is blurring in modern administration. Staff agencies (like the PMO in India or the Executive Office of the President in the USA) have become immensely powerful and often exert de-facto command over Line ministries, leading to severe Line-Staff conflicts. Managing this friction is a key challenge in public administration.",
      "संगठनात्मक दक्षता के लिए लाइन और स्टाफ के बीच का अंतर आवश्यक है। एक मुख्य कार्यकारी (जैसे PM) अकेले सब कुछ नहीं कर सकता; उसे विशेषज्ञ सलाह के लिए एक मजबूत 'स्टाफ' (जैसे PMO) की आवश्यकता होती है। हालांकि, आधुनिक प्रशासन में यह सैद्धांतिक अंतर धुंधला हो रहा है। स्टाफ एजेंसियां (जैसे PMO) अत्यधिक शक्तिशाली हो गई हैं और अक्सर लाइन मंत्रालयों पर वास्तविक (de-facto) कमांड का प्रयोग करती हैं, जिससे गंभीर लाइन-स्टाफ संघर्ष होते हैं।"
    ],
    conclusion: [
      "Line and Staff agencies are two halves of the administrative whole. Line agencies are the hands that execute and deliver services to the public, while Staff agencies are the brain that plans and advises. Despite the inevitable friction between them, their harmonious functioning is critical for the success of government policies.",
      "लाइन और स्टाफ एजेंसियां प्रशासनिक संपूर्ण के दो हिस्से हैं। लाइन एजेंसियां वे हाथ हैं जो जनता को सेवाएं प्रदान करती हैं, जबकि स्टाफ एजेंसियां वह मस्तिष्क हैं जो योजना बनाती और सलाह देती हैं।"
    ],
    shortQ: [
      ["What is a Line Agency? Give an example.", "लाइन एजेंसी क्या है? एक उदाहरण दें।"],
      ["What is a Staff Agency? Give an example.", "स्टाफ एजेंसी क्या है? एक उदाहरण दें।"],
      ["How does an Auxiliary agency differ from a Staff agency?", "एक सहायक एजेंसी स्टाफ एजेंसी से कैसे भिन्न होती है?"],
      ["Where did the concept of Line and Staff originate?", "लाइन और स्टाफ की अवधारणा की उत्पत्ति कहां से हुई?"],
      ["Why does conflict occur between Line and Staff agencies?", "लाइन और स्टाफ एजेंसियों के बीच संघर्ष क्यों होता है?"],
    ],
    longQ: [
      ["Explain the concept of Line, Staff, and Auxiliary agencies with suitable examples.", "उपयुक्त उदाहरणों के साथ लाइन, स्टाफ और सहायक एजेंसियों की अवधारणा की व्याख्या करें।"],
      ["Distinguish clearly between Line agencies and Staff agencies.", "लाइन एजेंसियों और स्टाफ एजेंसियों के बीच स्पष्ट अंतर करें।"],
      ["'Staff is an extension of the personality of the executive.' Discuss.", "'स्टाफ कार्यकारी के व्यक्तित्व का विस्तार है।' चर्चा करें।"],
      ["Analyze the causes of conflict between Line and Staff agencies. How can it be resolved?", "लाइन और स्टाफ एजेंसियों के बीच संघर्ष के कारणों का विश्लेषण करें। इसे कैसे हल किया जा सकता है?"],
      ["Evaluate the role of the NITI Aayog as a Staff agency in the Indian administration.", "भारतीय प्रशासन में एक स्टाफ एजेंसी के रूप में नीति आयोग की भूमिका का मूल्यांकन करें।"],
    ],
    mcqs: [
      { q: ["Which of the following is a Staff Agency in India?", "भारत में निम्नलिखित में से कौन सी एक स्टाफ एजेंसी है?"], opts: [["Ministry of Health", "स्वास्थ्य मंत्रालय"], ["NITI Aayog", "नीति आयोग"], ["Police Department", "पुलिस विभाग"], ["Reserve Bank of India", "भारतीय रिजर्व बैंक"]], correct: 1 },
      { q: ["The primary function of a Line agency is to:", "लाइन एजेंसी का प्राथमिक कार्य है:"], opts: [["Advise the executive", "कार्यकारी को सलाह देना"], ["Execute government policies", "सरकारी नीतियों को निष्पादित करना"], ["Recruit personnel", "कर्मियों की भर्ती करना"], ["Conduct research", "शोध करना"]], correct: 1 },
      { q: ["Agencies that provide common housekeeping services like recruitment and supplies are called:", "भर्ती और आपूर्ति जैसी सामान्य हाउसकीपिंग सेवाएं प्रदान करने वाली एजेंसियों को कहा जाता है:"], opts: [["Line agencies", "लाइन एजेंसियां"], ["Staff agencies", "स्टाफ एजेंसियां"], ["Auxiliary agencies", "सहायक एजेंसियां"], ["Regulatory commissions", "नियामक आयोग"]], correct: 2 },
      { q: ["The concept of Line and Staff was originally borrowed from:", "लाइन और स्टाफ की अवधारणा मूल रूप से किससे ली गई थी?"], opts: [["Corporate business", "कॉर्पोरेट व्यवसाय"], ["Military administration", "सैन्य प्रशासन"], ["Religious organizations", "धार्मिक संगठन"], ["Sports teams", "खेल टीमें"]], correct: 1 },
      { q: ["Which agency has the right to issue orders (power of command)?", "किस एजेंसी को आदेश जारी करने (कमांड की शक्ति) का अधिकार है?"], opts: [["Staff Agency", "स्टाफ एजेंसी"], ["Line Agency", "लाइन एजेंसी"], ["Auxiliary Agency", "सहायक एजेंसी"], ["Advisory Board", "सलाहकार बोर्ड"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Line agencies: Command, decision-making, direct execution (e.g., Ministries).\n• Staff agencies: Advise, plan, research. No command authority. (e.g., NITI Aayog, PMO).\n• Auxiliary agencies: Institutional support/housekeeping (e.g., UPSC, CPWD).\n• Origin: The concept originated in Military administration and was introduced to PA/Business by thinkers like Harrington Emerson.\n• Pfiffner's quote on staff as the 'extension of personality' is frequently asked.",
      "UGC NET फोकस:\n• लाइन: कमांड, प्रत्यक्ष निष्पादन (मंत्रालय)।\n• स्टाफ: सलाह, योजना (नीति आयोग)। कोई कमांड शक्ति नहीं।\n• सहायक: संस्थागत सहायता/हाउसकीपिंग (UPSC)।\n• उत्पत्ति: सैन्य प्रशासन।"
    ],
    ugcQ: [
      ["Q: What is the nature of NITI Aayog? A: It is a Staff Agency. It acts as a think tank advising the government but does not directly execute policies.", "प्र: नीति आयोग की प्रकृति क्या है? उ: यह एक स्टाफ एजेंसी है। यह सरकार को सलाह देने वाले थिंक टैंक के रूप में कार्य करता है लेकिन नीतियों को सीधे लागू नहीं करता है।"],
    ],
  }
];

/* ─── COMPONENT ─── */
export default function C208DetailedNotesPage() {
  const { language } = useAppStore();
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
              PSC-C-208: Public Administration
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t('PG Semester II — Detailed Bilingual Notes', 'PG सेमेस्टर II — विस्तृत द्विभाषी नोट्स')}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-5 text-white mb-8">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">{t('Paper Code: PSC-C-208', 'पेपर कोड: PSC-C-208')}</span>
          </div>
          <p className="text-sm text-white/80">
            {t('5 Credits | 60 Lectures + 15 Tutorials | Full Marks: 100 (End Sem: 70 + Internal: 30) | 10 Topics | Ref: Avasthi & Maheshwari, M. Bhattacharya', '5 क्रेडिट | 60 लेक्चर + 15 ट्यूटोरियल | पूर्णांक: 100 | 10 विषय | संदर्भ: अवस्थी और माहेश्वरी, एम. भट्टाचार्य')}
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
              <button
                onClick={() => toggle(topic.id)}
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-850 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {topic.num}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold text-gray-900 dark:text-white text-base md:text-lg text-justify">{t(topic.title[0], topic.title[1])}</h2>
                  <span className="text-xs text-gray-400">{t('5-part structure | MCQs | UGC NET Prep', '5-भाग संरचना | MCQ | UGC NET तैयारी')}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${expanded.has(topic.id) ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {expanded.has(topic.id) && (
                  <motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden border-t border-gray-100 dark:border-gray-800">
                    <div className="p-5 space-y-6">
                      <section>
                        <h3 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-xs">1</span>{t('INTRODUCTION','परिचय')}</h3>
                        <p className="text-base text-justify text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{t(topic.introduction[0],topic.introduction[1])}</p>
                      </section>
                      <section>
                        <h3 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-xs">2</span>{t('CORE CONCEPTS','मुख्य सिद्धांत')}</h3>
                        {topic.concepts.map((c,i)=>(<div key={i} className="mb-4 last:mb-0"><h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">{t(c.heading[0],c.heading[1])}</h4><div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-sm leading-relaxed whitespace-pre-line text-gray-700 dark:text-gray-300">{t(c.body[0],c.body[1])}</div></div>))}
                      </section>
                      <section>
                        <h3 className="text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-3 flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-xs">3</span>{t('SCHOLARLY QUOTES & BOOK REFERENCES','विद्वत उद्धरण और पुस्तक संदर्भ')}</h3>
                        <div className="space-y-2">{topic.quotes.map((q,i)=>(<div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/20"><Quote className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0"/><p className="text-sm text-purple-900 dark:text-purple-200 italic">{t(q[0],q[1])}</p></div>))}</div>
                      </section>
                      <section>
                        <h3 className="text-sm font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-xs">4</span>{t('CRITICAL EVALUATION','आलोचनात्मक मूल्यांकन')}</h3>
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/20"><AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0"/><p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">{t(topic.evaluation[0],topic.evaluation[1])}</p></div>
                      </section>
                      <section>
                        <h3 className="text-sm font-bold text-green-600 dark:text-green-400 uppercase tracking-wider mb-2 flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-xs">5</span>{t('CONCLUSION','निष्कर्ष')}</h3>
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-800/20"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"/><p className="text-sm text-green-900 dark:text-green-200 leading-relaxed">{t(topic.conclusion[0],topic.conclusion[1])}</p></div>
                      </section>
                      <section className="border-2 border-dashed border-orange-300 dark:border-orange-700 rounded-2xl p-5">
                        <h3 className="text-sm font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-4 flex items-center gap-2"><Lightbulb className="w-4 h-4"/>{t('REVISION BOOSTER','रिवीजन बूस्टर')}</h3>
                        <div className="mb-4"><h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-2">{t('Expected Short-Answer Questions (5)','अपेक्षित लघु-उत्तरीय प्रश्न (5)')}</h4><ol className="list-decimal list-inside space-y-1">{topic.shortQ.map((q,i)=>(<li key={i} className="text-base text-justify text-gray-700 dark:text-gray-300">{t(q[0],q[1])}</li>))}</ol></div>
                        <div className="mb-4"><h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-2">{t('Expected Long-Answer Questions (5)','अपेक्षित दीर्घ-उत्तरीय प्रश्न (5)')}</h4><ol className="list-decimal list-inside space-y-1">{topic.longQ.map((q,i)=>(<li key={i} className="text-base text-justify text-gray-700 dark:text-gray-300">{t(q[0],q[1])}</li>))}</ol></div>
                        <div><h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-2">{t('Multiple Choice Questions (5)','बहुविकल्पीय प्रश्न (5)')}</h4><div className="space-y-2">{topic.mcqs.map((mcq,i)=>{const key=`${topic.id}-${i}`;const revealed=showMCQAnswer.has(key);return(<div key={i} className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50"><p className="text-base font-medium text-gray-900 dark:text-white mb-2">Q{i+1}. {t(mcq.q[0],mcq.q[1])}</p><div className="grid grid-cols-2 gap-1 mb-2">{mcq.opts.map((opt,j)=>(<span key={j} className={`text-xs px-2 py-1 rounded ${j===mcq.correct&&revealed?'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-semibold':'text-gray-600 dark:text-gray-400'}`}>{String.fromCharCode(65+j)}. {t(opt[0],opt[1])}</span>))}</div><button onClick={()=>toggleMCQ(topic.id,i)} className="text-xs text-primary-600 dark:text-primary-400 hover:underline">{revealed?t('Hide Answer','उत्तर छुपाएं'):t('Show Answer','उत्तर देखें')}</button></div>);})}</div></div>
                      </section>
                      <section className="rounded-2xl p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 border border-indigo-100 dark:border-indigo-800/20">
                        <h3 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3 flex items-center gap-2"><GraduationCap className="w-4 h-4"/>{t('UGC NET/JRF PREPARATION','UGC NET/JRF तैयारी')}</h3>
                        <div className="p-4 rounded-xl bg-white/60 dark:bg-gray-900/50 mb-3"><p className="text-base text-justify text-indigo-900 dark:text-indigo-200 leading-relaxed whitespace-pre-line">{t(topic.ugcNotes[0],topic.ugcNotes[1])}</p></div>
                        <h4 className="text-xs font-bold text-indigo-500 uppercase mb-2 flex items-center gap-1.5"><ClipboardList className="w-3.5 h-3.5"/>{t('Quick Revision Q&A','त्वरित रिवीजन प्रश्नोत्तर')}</h4>
                        <div className="space-y-1.5">{topic.ugcQ.map((q,i)=>(<div key={i} className="text-xs text-indigo-800 dark:text-indigo-300 p-2 rounded-lg bg-white/40 dark:bg-gray-900/30">{t(q[0],q[1])}</div>))}</div>
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
            {t('All 10 Topics Complete! Full PSC-C-208 notes with 5-part structure, MCQs & UGC NET Prep ready.','सभी 10 विषय पूर्ण! 5-भाग संरचना, MCQ और UGC NET तैयारी के साथ संपूर्ण PSC-C-208 नोट्स तैयार।')}
          </p>
        </div>
      </div>
    </div>
  );
}
