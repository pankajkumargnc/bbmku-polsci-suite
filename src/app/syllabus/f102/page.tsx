'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { ArrowLeft, BookOpen, ChevronDown, CheckCircle2, Quote, AlertTriangle, Lightbulb, GraduationCap, ClipboardList } from 'lucide-react';
import Link from 'next/link';

type Lang = 'en' | 'hi';

interface TopicNote {
  id: string; num: number; title: [string, string];
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
  // TOPIC 1: Kautilya
  {
    id: 't1', num: 1,
    title: ["Kautilya (Chanakya)", "कौटिल्य (चाणक्य)"],
    introduction: [
      "Kautilya (also known as Chanakya or Vishnugupta) was the prime minister of Chandragupta Maurya (4th century BCE) and the author of the 'Arthashastra' — the most comprehensive ancient Indian treatise on statecraft, politics, economics, and military strategy. Written around 300 BCE, the Arthashastra consists of 15 books (Adhikaranas) comprising 150 chapters and 180 sections. It covers an astonishing range of subjects: the duties of the king, administration, law and justice, foreign policy, taxation, espionage, and warfare. Kautilya is often compared to Machiavelli for his realism, but unlike Machiavelli, Kautilya's realism is grounded in Dharma and the welfare of the people (Yogakshema). Dr. V.P. Verma calls him the 'Indian Machiavelli,' though this comparison understates Kautilya's originality and comprehensive vision.",
      "कौटिल्य (चाणक्य या विष्णुगुप्त) चंद्रगुप्त मौर्य (चौथी शताब्दी ईसा पूर्व) के प्रधानमंत्री और 'अर्थशास्त्र' के लेखक थे — राज्यकला, राजनीति, अर्थशास्त्र और सैन्य रणनीति पर सबसे व्यापक प्राचीन भारतीय ग्रंथ। लगभग 300 ईसा पूर्व लिखे गए अर्थशास्त्र में 15 अधिकरण (पुस्तकें), 150 अध्याय और 180 प्रकरण हैं। यह राजा के कर्तव्यों, प्रशासन, कानून और न्याय, विदेश नीति, कराधान, गुप्तचर व्यवस्था और युद्ध जैसे विषयों को शामिल करता है। डॉ. वी.पी. वर्मा उन्हें 'भारतीय मैकियावेली' कहते हैं, हालांकि यह तुलना कौटिल्य की मौलिकता को कम आंकती है।"
    ],
    concepts: [
      {
        heading: ["Saptanga Theory (Seven Elements of State)", "सप्तांग सिद्धांत (राज्य के सात अंग)"],
        body: [
          "Kautilya's most significant contribution is the Saptanga Theory — the State is composed of seven interlinked elements (prakritis):\n\n1. SWAMI (The King): The chief executive and supreme authority. Kautilya emphasizes the king's training, discipline (Vinayadhikaran), and duty to protect Dharma. The king must be energetic, wise, and dedicated to the welfare of the people.\n\n2. AMATYA (Ministers): The administrative machinery. Kautilya prescribes tests of Dharma (righteousness), Artha (material gain), Kama (pleasure), and Bhaya (fear) to select ministers.\n\n3. JANAPADA (Territory and Population): Fertile land with hardworking and loyal subjects. The prosperity of the state depends on a well-populated and productive territory.\n\n4. DURGA (Fort/Fortified Capital): A strategically located and well-defended capital city. Kautilya describes four types of forts: mountain, water, desert, and forest forts.\n\n5. KOSHA (Treasury): A well-filled treasury through legitimate taxation. Wealth is essential for both welfare (Yogakshema) and defense.\n\n6. DANDA (Army/Coercive Power): A strong, loyal, and well-trained military. The army is the instrument for protecting the state and expanding its power.\n\n7. MITRA (Ally/Friend): A trustworthy ally who provides support in times of crisis. Kautilya emphasizes the importance of a circle of allies (Rajamandala).\n\nAll seven elements are interdependent. The king, though the most important, is not absolute — he is bound by Dharma and the welfare of the people.",
          "1. स्वामी (राजा): मुख्य कार्यकारी और सर्वोच्च प्राधिकार। राजा का प्रशिक्षण, अनुशासन और धर्म रक्षा पर जोर।\n\n2. अमात्य (मंत्री): प्रशासनिक तंत्र। धर्म, अर्थ, काम और भय के परीक्षणों द्वारा मंत्री चयन।\n\n3. जनपद (क्षेत्र और जनसंख्या): मेहनती और वफादार प्रजा के साथ उपजाऊ भूमि।\n\n4. दुर्ग (किला/राजधानी): रणनीतिक रूप से स्थित सुरक्षित राजधानी। चार प्रकार: पर्वत, जल, मरुस्थल, वन दुर्ग।\n\n5. कोश (राजकोष): वैध कराधान से भरा राजकोष।\n\n6. दंड (सेना): मजबूत, वफादार सेना।\n\n7. मित्र (सहयोगी): विश्वसनीय सहयोगी। राजमंडल (सहयोगियों का घेरा) का महत्व।"
        ]
      },
      {
        heading: ["Mandala Theory (Circle of States) — Foreign Policy", "मंडल सिद्धांत — विदेश नीति"],
        body: [
          "Kautilya's Mandala Theory (Rajamandala) is a sophisticated framework for inter-state relations based on geographic realism. It assumes that:\n\n• The immediate neighbor (Vijigishu's immediate neighbor) is the natural ENEMY (Ari).\n• The neighbor's neighbor (beyond the immediate neighbor) is the natural FRIEND (Mitra).\n• This creates concentric circles of enemies, friends, and neutrals (Madhyama, Udasina).\n\nKautilya prescribes SIX FOLD POLICY (Shadgunya) for foreign relations:\n1. Sandhi (Peace/Treaty) — when weaker\n2. Vigraha (War/Hostility) — when stronger\n3. Asana (Staying Quiet) — when equal\n4. Yana (Marching/Preparing for War) — when possessing advantage\n5. Samsraya (Seeking Shelter/Alliance) — when threatened\n6. Dvaidhibhava (Dual Policy) — making peace with one and war with another\n\nThe ultimate goal is the expansion of the Vijigishu's (conqueror's) power. Kautilya's foreign policy is thoroughly pragmatic and realist.",
          "कौटिल्य का मंडल सिद्धांत भूगोल आधारित यथार्थवाद पर टिका अंतर-राज्य संबंधों का परिष्कृत ढांचा है:\n\n• तत्काल पड़ोसी = स्वाभाविक शत्रु (अरि)\n• पड़ोसी का पड़ोसी = स्वाभाविक मित्र\n• शत्रुओं, मित्रों और तटस्थों के संकेंद्रित वृत्त\n\nषाड्गुण्य (छह गुणों वाली विदेश नीति):\n1. संधि — कमजोर होने पर\n2. विग्रह — शक्तिशाली होने पर\n3. आसन — बराबरी पर मौन\n4. यान — लाभ होने पर युद्ध की तैयारी\n5. संश्रय — खतरे में शरण\n6. द्वैधीभाव — दोहरी नीति\nलक्ष्य: विजिगीषु की शक्ति का विस्तार।"
        ]
      },
      {
        heading: ["Kautilya on Statecraft and Administration", "राज्यकला और प्रशासन पर कौटिल्य"],
        body: [
          "1. Kingship (Rajdharma): The king's first duty is the protection and welfare of his subjects (Praja Palanam). He must be accessible and work tirelessly. 'In the happiness of his subjects lies the king's happiness; in their welfare his welfare.'\n\n2. Administration: Kautilya prescribes a highly centralized bureaucratic state with a vast network of spies (Gudhapurushas), a codified legal system with four sources of law (Dharma, Vyavahara, Charitra, Rajashasana), and 18 departments of government headed by Mahamatras.\n\n3. Espionage System: An elaborate network of secret agents — both stationary (Samstha) and mobile (Sanchara) — to monitor officials, foreign powers, and public opinion.\n\n4. Economic Policy: The state must promote agriculture, trade, and commerce. The treasury (Kosha) is the foundation of all state activities. Kautilya advocates state control over mines, forests, and key industries.\n\n5. Law and Justice: Kautilya emphasizes rule of law (Dharma). Even the king is subject to Dharma. Punishment (Danda) must be proportionate and impartial.",
          "1. राजधर्म: राजा का पहला कर्तव्य प्रजा की रक्षा और कल्याण। 'प्रजा के सुख में राजा का सुख; उनके कल्याण में उसका कल्याण।'\n\n2. प्रशासन: केंद्रीकृत नौकरशाही राज्य, गुप्तचरों का विशाल जाल, कानून के चार स्रोत (धर्म, व्यवहार, चरित्र, राजशासन), 18 विभाग।\n\n3. गुप्तचर व्यवस्था: स्थावर और संचार गुप्तचरों का परिष्कृत जाल।\n\n4. आर्थिक नीति: कृषि, व्यापार और वाणिज्य का राज्य प्रोत्साहन। खानों और वनों पर राज्य नियंत्रण।\n\n5. कानून और न्याय: धर्म का शासन। राजा भी धर्म के अधीन। दंड आनुपातिक और निष्पक्ष।"
        ]
      }
    ],
    quotes: [
      ["Kautilya: \"In the happiness of his subjects lies the king's happiness; in their welfare his welfare. What pleases himself, the king shall not consider good; whatever pleases his subjects, he shall consider good.\" — Arthashastra 1.19.34", "कौटिल्य: \"प्रजा के सुख में राजा का सुख निहित है; उनके कल्याण में उसका कल्याण। जो स्वयं को प्रसन्न करे, राजा उसे अच्छा न समझे; जो प्रजा को प्रसन्न करे, वही अच्छा है।\""],
      ["Dr. V.P. Verma: \"Kautilya's Arthashastra represents the quintessence of ancient Indian political realism. His Saptanga theory is the most original contribution of Indian political thought.\" — Ancient and Medieval Indian Political Thought", "डॉ. वी.पी. वर्मा: \"कौटिल्य का अर्थशास्त्र प्राचीन भारतीय राजनीतिक यथार्थवाद का सार है। उनका सप्तांग सिद्धांत भारतीय राजनीतिक विचार का सबसे मौलिक योगदान है।\""],
      ["O.P. Gauba: \"Kautilya combines extreme realism with a deep commitment to the welfare of the people. He is not merely an Indian Machiavelli but a far more comprehensive thinker.\" — Indian Political Thought", "ओ.पी. गाबा: \"कौटिल्य अत्यधिक यथार्थवाद को जनता के कल्याण के प्रति गहरी प्रतिबद्धता के साथ जोड़ते हैं। वे केवल भारतीय मैकियावेली नहीं बल्कि कहीं अधिक व्यापक विचारक हैं।\""],
      ["Max Weber: \"The Arthashastra is truly radical — 'Machiavellianism' in the popular sense is mild compared to Kautilya's Arthashastra.\"", "मैक्स वेबर: \"अर्थशास्त्र वास्तव में क्रांतिकारी है — लोकप्रिय अर्थ में 'मैकियावेलियनवाद' कौटिल्य के अर्थशास्त्र की तुलना में हल्का है।\""],
    ],
    evaluation: [
      "Kautilya's Arthashastra is both praised and critiqued. Strengths: (1) Provides the first comprehensive theory of the State in world history, (2) The Saptanga theory offers a holistic, systems-based understanding of the State, (3) The Mandala theory is a remarkably sophisticated realist framework for international relations, (4) Emphasizes welfare (Yogakshema) as the ultimate goal — not mere power accumulation. Criticisms: (1) The espionage and coercive apparatus is perceived as overly authoritarian, (2) The ends-justify-means approach (Kautilya's Arthashastra suggests using poison, deceit for state interest) has drawn moral criticism, (3) The highly centralized model leaves little room for local autonomy or democracy, (4) Some argue it reflects a Machiavellian approach where morality is subordinated to political expediency. However, modern scholars increasingly recognize that Kautilya's realism is tempered by Dharma and the welfare imperative, making him distinct from Machiavelli.",
      "कौटिल्य के अर्थशास्त्र की प्रशंसा भी हुई और आलोचना भी। शक्तियां: (1) विश्व इतिहास में राज्य का पहला व्यापक सिद्धांत, (2) सप्तांग सिद्धांत — समग्र प्रणाली-आधारित समझ, (3) मंडल सिद्धांत — IR के लिए परिष्कृत यथार्थवादी ढांचा, (4) योगक्षेम पर जोर। आलोचनाएं: (1) गुप्तचर और दंड अत्यधिक सत्तावादी, (2) साध्य-साधन दृष्टिकोण (जहर, छल की सलाह) — नैतिक आपत्तियां, (3) अति-केंद्रीकृत, (4) मैकियावेली से तुलना। फिर भी, आधुनिक विद्वान मानते हैं कि कौटिल्य धर्म और कल्याण से संयमित हैं।"
    ],
    conclusion: [
      "Kautilya stands as one of the greatest political thinkers of the ancient world. His Arthashastra remains relevant today for its insights into statecraft, administration, and international relations. The Saptanga theory offers a systems approach to governance; the Mandala theory anticipates modern geopolitical realism; and the emphasis on Yogakshema places welfare at the heart of the state's purpose. As India re-emerges as a global power, Kautilya's thought provides a valuable indigenous framework for understanding statecraft — one that balances power with Dharma, realism with welfare, and authority with responsibility.",
      "कौटिल्य प्राचीन विश्व के महानतम राजनीतिक विचारकों में से एक हैं। उनका अर्थशास्त्र राज्यकला, प्रशासन और अंतर्राष्ट्रीय संबंधों की अंतर्दृष्टि के लिए आज भी प्रासंगिक है। सप्तांग सिद्धांत शासन के लिए प्रणाली-दृष्टिकोण प्रदान करता है; मंडल सिद्धांत भू-राजनीतिक यथार्थवाद का पूर्वाभास देता है; और योगक्षेम पर जोर राज्य के उद्देश्य के केंद्र में कल्याण रखता है।"
    ],
    shortQ: [
      ["Explain Kautilya's Saptanga theory of the State.", "कौटिल्य के सप्तांग सिद्धांत की व्याख्या करें।"],
      ["What is Kautilya's Mandala theory?", "कौटिल्य का मंडल सिद्धांत क्या है?"],
      ["Discuss Kautilya's views on kingship (Rajdharma).", "राजधर्म पर कौटिल्य के विचारों पर चर्चा करें।"],
      ["What is Shadgunya (six-fold policy) in Kautilya's Arthashastra?", "कौटिल्य के अर्थशास्त्र में षाड्गुण्य क्या है?"],
      ["Compare Kautilya and Machiavelli.", "कौटिल्य और मैकियावेली की तुलना करें।"],
    ],
    longQ: [
      ["Discuss Kautilya's Saptanga theory of State in detail.", "कौटिल्य के राज्य के सप्तांग सिद्धांत पर विस्तार से चर्चा करें।"],
      ["Critically examine Kautilya's Mandala theory and its relevance in contemporary international relations.", "कौटिल्य के मंडल सिद्धांत का समकालीन अंतर्राष्ट्रीय संबंधों में प्रासंगिकता के साथ आलोचनात्मक परीक्षण करें।"],
      ["Discuss Kautilya's views on statecraft, administration, and economic policy.", "राज्यकला, प्रशासन और आर्थिक नीति पर कौटिल्य के विचारों पर चर्चा करें।"],
      ["'Kautilya is the Indian Machiavelli.' Critically examine this statement.", "'कौटिल्य भारतीय मैकियावेली हैं।' इस कथन का आलोचनात्मक परीक्षण करें।"],
      ["Discuss the relevance of Kautilya's Arthashastra in modern Indian governance and foreign policy.", "आधुनिक भारतीय शासन और विदेश नीति में कौटिल्य के अर्थशास्त्र की प्रासंगिकता पर चर्चा करें।"],
    ],
    mcqs: [
      { q: ["Kautilya's Arthashastra consists of how many books (Adhikaranas)?", "कौटिल्य के अर्थशास्त्र में कितने अधिकरण हैं?"], opts: [["10", "10"], ["12", "12"], ["15", "15"], ["18", "18"]], correct: 2 },
      { q: ["Which is NOT an element of the Saptanga theory?", "सप्तांग सिद्धांत में कौन शामिल नहीं है?"], opts: [["Swami (King)", "स्वामी"], ["Amatya (Ministers)", "अमात्य"], ["Sansad (Parliament)", "संसद"], ["Kosha (Treasury)", "कोश"]], correct: 2 },
      { q: ["Shadgunya refers to:", "षाड्गुण्य संदर्भित है:"], opts: [["Six elements of state", "राज्य के छह तत्व"], ["Six-fold foreign policy", "छह गुणों वाली विदेश नीति"], ["Six duties of king", "राजा के छह कर्तव्य"], ["Six types of forts", "छह प्रकार के किले"]], correct: 1 },
      { q: ["According to Mandala theory, the immediate neighbor is:", "मंडल सिद्धांत के अनुसार, तत्काल पड़ोसी है:"], opts: [["Friend (Mitra)", "मित्र"], ["Enemy (Ari)", "शत्रु"], ["Neutral (Udasina)", "तटस्थ"], ["Ally", "सहयोगी"]], correct: 1 },
      { q: ["Kautilya was the prime minister of which ruler?", "कौटिल्य किस शासक के प्रधानमंत्री थे?"], opts: [["Ashoka", "अशोक"], ["Chandragupta Maurya", "चंद्रगुप्त मौर्य"], ["Bindusara", "बिंदुसार"], ["Harsha", "हर्ष"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Arthashastra: 15 Adhikaranas, 150 chapters, 180 sections (Kangle's edition)\n• Saptanga: Swami, Amatya, Janapada, Durga, Kosha, Danda, Mitra\n• Mandala Theory: Vijigishu, Ari, Mitra, Madhyama, Udasina\n• Shadgunya: Sandhi, Vigraha, Asana, Yana, Samsraya, Dvaidhibhava\n• Kautilya vs Machiavelli comparison (Arthashastra vs The Prince)\n• Kautilya on taxation: 'Like the bee collecting honey' — moderate taxation\n• Danda (punishment) — central to state authority\n• Yogakshema — welfare concept; combination of Yoga (acquiring) and Kshema (preserving)\n• R.P. Kangle's translation (3 volumes, 1960-65) — authoritative edition",
      "UGC NET फोकस:\n• अर्थशास्त्र: 15 अधिकरण (कांगले संस्करण)\n• सप्तांग: स्वामी, अमात्य, जनपद, दुर्ग, कोश, दंड, मित्र\n• मंडल सिद्धांत: विजिगीषु, अरि, मित्र, मध्यम, उदासीन\n• षाड्गुण्य\n• कौटिल्य बनाम मैकियावेली\n• कराधान: 'मधुमक्खी की तरह'\n• योगक्षेम अवधारणा"
    ],
    ugcQ: [
      ["Q: Kautilya's concept of Yogakshema means? A: Welfare — Yoga (acquiring wealth/power) + Kshema (preserving/protecting).", "प्र: कौटिल्य की योगक्षेम अवधारणा? उ: कल्याण — योग (धन/शक्ति अर्जन) + क्षेम (संरक्षण)।"],
      ["Q: 'Like the bee collecting honey' refers to? A: Kautilya's principle of moderate taxation.", "प्र: 'मधुमक्खी की तरह शहद इकट्ठा करना' संदर्भित करता है? उ: मध्यम कराधान का सिद्धांत।"],
      ["Q: The authoritative English translation of Arthashastra is by? A: R.P. Kangle (3 volumes, 1960-65).", "प्र: अर्थशास्त्र का आधिकारिक अंग्रेजी अनुवाद? उ: आर.पी. कांगले (1960-65)।"],
    ],
  },

  // TOPIC 2: Raja Rammohan Roy
  {
    id: 't2', num: 2,
    title: ["The Indian Renaissance: Raja Rammohan Roy", "भारतीय पुनर्जागरण: राजा राममोहन राय"],
    introduction: [
      "Raja Rammohan Roy (1772-1833) is rightly called the 'Father of Indian Renaissance' and the 'Father of Modern India.' He was a polyglot, social reformer, journalist, and the first modern Indian political thinker. Born in Radhanagar, Bengal, he mastered Sanskrit, Persian, Arabic, English, and several other languages. Deeply influenced by Western rationalism (Bacon, Locke, Bentham), Islamic monotheism, and Vedantic philosophy, Rammohan Roy sought to synthesize the best of Eastern and Western thought. He founded the Brahmo Samaj (1828) and the Atmiya Sabha (1814), fought for the abolition of Sati (achieved through Lord Bentinck's Regulation XVII of 1829), championed women's rights, freedom of the press, modern education, and laid the intellectual foundations for Indian nationalism.",
      "राजा राममोहन राय (1772-1833) को 'भारतीय पुनर्जागरण का जनक' और 'आधुनिक भारत का जनक' कहा जाता है। वे बहुभाषाविद्, समाज सुधारक, पत्रकार और पहले आधुनिक भारतीय राजनीतिक विचारक थे। संस्कृत, फारसी, अरबी, अंग्रेजी सहित कई भाषाओं के ज्ञाता, वे पश्चिमी तर्कवाद, इस्लामी एकेश्वरवाद और वेदांत दर्शन से गहराई से प्रभावित थे। उन्होंने ब्रह्म समाज (1828) और आत्मीय सभा (1814) की स्थापना की, सती प्रथा के उन्मूलन के लिए संघर्ष किया (लॉर्ड बेंटिंक का विनियम XVII, 1829), महिला अधिकारों, प्रेस स्वतंत्रता और आधुनिक शिक्षा की वकालत की।"
    ],
    concepts: [
      {
        heading: ["Social and Religious Reforms", "सामाजिक और धार्मिक सुधार"],
        body: [
          "1. ABOLITION OF SATI: Rammohan Roy's most famous achievement. He personally witnessed his brother's wife being forced into Sati. He campaigned through writings in English, Bengali, and Persian, citing Hindu scriptures to prove Sati was not mandatory. Supported by Lord William Bentinck, Regulation XVII (1829) abolished Sati in British India.\n\n2. BRAHMO SAMAJ (1828): Founded as a monotheistic reform movement within Hinduism. Opposed idol worship, polytheism, priestly domination, and ritualism. Emphasized the worship of one Supreme Being (Brahmo) based on the Vedas and Upanishads.\n\n3. WOMEN'S RIGHTS: Advocated for women's right to property, opposed polygamy and child marriage, supported widow remarriage, and promoted female education.\n\n4. CASTE REFORM: Opposed the caste system and untouchability. The Brahmo Samaj promoted equality and fraternity among all human beings.\n\n5. RATIONALISM: Believed in reason as the ultimate arbiter. Interpreted religious texts through rational analysis. Religion must be compatible with reason (Vedantic rationalism).",
          "1. सती उन्मूलन: हिंदू शास्त्रों का हवाला देकर सिद्ध किया कि सती अनिवार्य नहीं। लॉर्ड बेंटिंक का विनियम XVII (1829)।\n\n2. ब्रह्म समाज (1828): हिंदू धर्म के भीतर एकेश्वरवादी सुधार आंदोलन। मूर्ति पूजा, बहुदेववाद, पुरोहित वर्चस्व का विरोध।\n\n3. महिला अधिकार: संपत्ति का अधिकार, बहुविवाह और बाल विवाह का विरोध, विधवा पुनर्विवाह, महिला शिक्षा।\n\n4. जाति सुधार: जाति प्रथा और अस्पृश्यता का विरोध।\n\n5. तर्कवाद: धार्मिक ग्रंथों की तर्कसंगत व्याख्या। धर्म को तर्क के अनुकूल होना चाहिए।"
        ]
      },
      {
        heading: ["Political Ideas and Liberalism", "राजनीतिक विचार और उदारवाद"],
        body: [
          "1. FREEDOM OF PRESS: Rammohan Roy was the pioneer of press freedom in India. He started the first Indian-owned newspaper — 'Sambad Kaumudi' (Bengali, 1821) and 'Mirat-ul-Akhbar' (Persian, 1822). He strongly protested the Press Regulations of 1823 (Adam's Regulations) that imposed censorship.\n\n2. MODERN EDUCATION: He advocated Western scientific education alongside Indian classical learning. Supported the establishment of Hindu College (1817, later Presidency College). Opposed the government's plan to open only Sanskrit schools, arguing for English education with modern curriculum (letters to Lord Amherst, 1823).\n\n3. CONSTITUTIONAL REFORMS: Demanded Indian representation in administration, separation of executive and judicial powers, codification of laws, trial by jury, and greater civil liberties. He was the first Indian to articulate demands for constitutional governance.\n\n4. SYNTHESIS OF EAST AND WEST: Believed in selective adoption of Western ideas (liberty, equality, scientific temper) while retaining India's spiritual heritage. Not blind Westernization — a creative synthesis.\n\n5. INTERNATIONALISM: Supported liberal movements worldwide — the Spanish Revolution, Greek War of Independence, and reform movements. Believed in universal human rights and the brotherhood of mankind.",
          "1. प्रेस स्वतंत्रता: पहला भारतीय स्वामित्व वाला समाचार पत्र — 'संबाद कौमुदी' (1821)। 1823 के प्रेस विनियमों का कड़ा विरोध।\n\n2. आधुनिक शिक्षा: पश्चिमी वैज्ञानिक शिक्षा की वकालत। हिंदू कॉलेज (1817) का समर्थन। लॉर्ड एमहर्स्ट को पत्र — अंग्रेजी शिक्षा का समर्थन।\n\n3. संवैधानिक सुधार: प्रशासन में भारतीय प्रतिनिधित्व, न्यायिक-कार्यकारी पृथक्करण, कानूनों का संहिताकरण।\n\n4. पूर्व-पश्चिम संश्लेषण: पश्चिमी विचारों का चयनात्मक ग्रहण।\n\n5. अंतर्राष्ट्रीयतावाद: स्पेनिश क्रांति, ग्रीक स्वतंत्रता संग्राम का समर्थन। सार्वभौमिक मानवाधिकारों में विश्वास।"
        ]
      }
    ],
    quotes: [
      ["Raja Rammohan Roy: \"The present system of religion adhered to by the Hindus is not well calculated to promote their political interests... it is necessary that some change should take place in their religion.\" — Letter to Lord Amherst (1823)", "राजा राममोहन राय: \"हिंदुओं द्वारा अपनाई गई वर्तमान धार्मिक प्रणाली उनके राजनीतिक हितों को बढ़ावा देने के लिए उपयुक्त नहीं... परिवर्तन आवश्यक है।\""],
      ["O.P. Gauba: \"Rammohan Roy represents the first systematic attempt to reconcile tradition with modernity in Indian political thought.\" — Indian Political Thought", "ओ.पी. गाबा: \"राममोहन राय भारतीय राजनीतिक विचार में परंपरा और आधुनिकता के बीच समन्वय का पहला व्यवस्थित प्रयास प्रस्तुत करते हैं।\""],
      ["Dr. V.P. Verma: \"Rammohan Roy was the morning star of Indian Renaissance — the first to apply rationalism to Indian social problems.\"", "डॉ. वी.पी. वर्मा: \"राममोहन राय भारतीय पुनर्जागरण के भोर के तारे थे — भारतीय सामाजिक समस्याओं पर तर्कवाद लागू करने वाले पहले व्यक्ति।\""],
      ["Rabindranath Tagore: \"Rammohan Roy inaugurated the modern age in India. He represented the spirit of a new age, the age of reason and humanity.\"", "रवींद्रनाथ टैगोर: \"राममोहन राय ने भारत में आधुनिक युग का उद्घाटन किया। वे तर्क और मानवता के नए युग की भावना का प्रतिनिधित्व करते थे।\""],
    ],
    evaluation: [
      "Rammohan Roy's legacy is monumental but not without complexities. Strengths: He pioneered the modern reform movement in India, combining social activism with intellectual rigor. His campaign against Sati saved countless lives and established the model for future reforms. He anticipated almost every major reform of 19th-century India — women's rights, education, press freedom, and constitutionalism. Criticisms: Some orthodox Hindus viewed him as an agent of Westernization undermining Indian traditions. His reliance on British colonial authority for reform (Sati abolition through Governor-General's regulation) has been criticized as an elite, top-down approach. His Vedantic monotheism was seen by some as a departure from popular Hindu devotional traditions. However, his creative synthesis — not rejection of tradition but its rational reform — remains the most constructive model for social change in a traditional society.",
      "राममोहन राय की विरासत विशाल है। शक्तियां: भारत में आधुनिक सुधार आंदोलन का प्रणयन, सामाजिक सक्रियता और बौद्धिक कठोरता का संयोजन। सती विरोधी अभियान ने अनगिनत जीवन बचाए। 19वीं सदी के लगभग हर प्रमुख सुधार का पूर्वाभास दिया। आलोचनाएं: कुछ रूढ़िवादी हिंदुओं ने उन्हें पश्चिमीकरण का एजेंट माना। सुधारों के लिए औपनिवेशिक प्राधिकार पर निर्भरता की आलोचना। फिर भी, उनका रचनात्मक संश्लेषण — परंपरा का अस्वीकार नहीं बल्कि तर्कसंगत सुधार — पारंपरिक समाज में सामाजिक परिवर्तन का सबसे रचनात्मक मॉडल है।"
    ],
    conclusion: [
      "Raja Rammohan Roy was a visionary who laid the intellectual and social foundations of modern India. As the first Indian liberal, he championed the universal values of reason, liberty, equality, and human dignity while remaining rooted in India's spiritual heritage. His synthesis of Eastern spirituality with Western rationalism created a model of 'enlightened modernity' that inspired generations of Indian reformers — from the Brahmo Samaj movement to the nationalist struggle. In an era of rising intolerance and fundamentalism, Rammohan Roy's vision of an inclusive, rational, and humane society remains deeply relevant.",
      "राजा राममोहन राय आधुनिक भारत की बौद्धिक और सामाजिक नींव रखने वाले दूरदर्शी थे। पहले भारतीय उदारवादी के रूप में, उन्होंने तर्क, स्वतंत्रता, समानता और मानव गरिमा के सार्वभौमिक मूल्यों की वकालत की। पूर्वी आध्यात्मिकता और पश्चिमी तर्कवाद के उनके संश्लेषण ने 'प्रबुद्ध आधुनिकता' का मॉडल बनाया। बढ़ती असहिष्णुता और कट्टरवाद के इस युग में, राममोहन राय की समावेशी, तर्कसंगत और मानवीय समाज की दृष्टि गहराई से प्रासंगिक बनी हुई है।"
    ],
    shortQ: [
      ["What was Rammohan Roy's role in the abolition of Sati?", "सती उन्मूलन में राममोहन राय की क्या भूमिका थी?"],
      ["Explain the objectives of Brahmo Samaj.", "ब्रह्म समाज के उद्देश्यों की व्याख्या करें।"],
      ["Discuss Rammohan Roy's views on freedom of press.", "प्रेस स्वतंत्रता पर राममोहन राय के विचारों पर चर्चा करें।"],
      ["What were Rammohan Roy's educational reforms?", "राममोहन राय के शैक्षिक सुधार क्या थे?"],
      ["Why is Rammohan Roy called the 'Father of Indian Renaissance'?", "राममोहन राय को 'भारतीय पुनर्जागरण का जनक' क्यों कहा जाता है?"],
    ],
    longQ: [
      ["Discuss Raja Rammohan Roy's contribution as a social and religious reformer.", "सामाजिक और धार्मिक सुधारक के रूप में राजा राममोहन राय के योगदान पर चर्चा करें।"],
      ["Critically examine Rammohan Roy's political ideas with emphasis on liberalism and constitutionalism.", "उदारवाद और संविधानवाद पर जोर देते हुए राममोहन राय के राजनीतिक विचारों का आलोचनात्मक परीक्षण करें।"],
      ["'Rammohan Roy represents the synthesis of Eastern and Western thought.' Discuss.", "'राममोहन राय पूर्वी और पश्चिमी विचारों के संश्लेषण का प्रतिनिधित्व करते हैं।' चर्चा करें।"],
      ["Discuss Rammohan Roy's role in the making of modern India.", "आधुनिक भारत के निर्माण में राममोहन राय की भूमिका पर चर्चा करें।"],
      ["Analyze the relevance of Rammohan Roy's ideas in contemporary India.", "समकालीन भारत में राममोहन राय के विचारों की प्रासंगिकता का विश्लेषण करें।"],
    ],
    mcqs: [
      { q: ["Rammohan Roy founded Brahmo Samaj in:", "राममोहन राय ने ब्रह्म समाज की स्थापना कब की?"], opts: [["1814", "1814"], ["1820", "1820"], ["1828", "1828"], ["1833", "1833"]], correct: 2 },
      { q: ["Sati was abolished in British India by which Regulation?", "सती प्रथा किस विनियम द्वारा समाप्त की गई?"], opts: [["Regulation XV", "विनियम XV"], ["Regulation XVI", "विनियम XVI"], ["Regulation XVII", "विनियम XVII"], ["Regulation XVIII", "विनियम XVIII"]], correct: 2 },
      { q: ["Rammohan Roy's Bengali newspaper was:", "राममोहन राय का बांग्ला समाचार पत्र था:"], opts: [["Samachar Darpan", "समाचार दर्पण"], ["Sambad Kaumudi", "संबाद कौमुदी"], ["Banga Duta", "बंग दूत"], ["Hindu Patriot", "हिंदू पैट्रियट"]], correct: 1 },
      { q: ["Rammohan Roy is known as:", "राममोहन राय को जाना जाता है:"], opts: [["Father of Indian Nationalism", "भारतीय राष्ट्रवाद के जनक"], ["Father of Indian Renaissance", "भारतीय पुनर्जागरण के जनक"], ["Father of Indian Constitution", "भारतीय संविधान के जनक"], ["Father of Indian Socialism", "भारतीय समाजवाद के जनक"]], correct: 1 },
      { q: ["Atmiya Sabha was founded in:", "आत्मीय सभा कब स्थापित हुई?"], opts: [["1814", "1814"], ["1828", "1828"], ["1818", "1818"], ["1822", "1822"]], correct: 0 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Atmiya Sabha (1814) → Brahmo Samaj (1828)\n• Sati abolition: Regulation XVII (1829), Lord William Bentinck\n• Sambad Kaumudi (Bengali, 1821) and Mirat-ul-Akhbar (Persian, 1822)\n• Letter to Lord Amherst (1823) — advocated English education\n• Tuhfat-ul-Muwahhidin (1803) — Persian treatise on monotheism\n• Precepts of Jesus (1820) — rationalist interpretation of Christianity\n• Vedantic monotheism — influence of Upanishads\n• Comparison with other reformers: Dayanand Saraswati, Swami Vivekananda\n• Rammohan Roy as the first Indian liberal — influence on Dadabhai Naoroji, Gokhale",
      "UGC NET फोकस:\n• आत्मीय सभा (1814) → ब्रह्म समाज (1828)\n• सती उन्मूलन: विनियम XVII (1829)\n• संबाद कौमुदी, मिरात-उल-अखबार\n• लॉर्ड एमहर्स्ट को पत्र (1823)\n• तुहफत-उल-मुवाहिदीन (1803)\n• वेदांतिक एकेश्वरवाद\n• पहले भारतीय उदारवादी"
    ],
    ugcQ: [
      ["Q: What was Tuhfat-ul-Muwahhidin? A: Rammohan Roy's Persian treatise on monotheism (1803), arguing for one God.", "प्र: तुहफत-उल-मुवाहिदीन क्या था? उ: एकेश्वरवाद पर राममोहन राय का फारसी ग्रंथ (1803)।"],
      ["Q: Which Governor-General abolished Sati? A: Lord William Bentinck (Regulation XVII, 1829).", "प्र: किस गवर्नर-जनरल ने सती समाप्त की? उ: लॉर्ड विलियम बेंटिंक (विनियम XVII, 1829)।"],
      ["Q: Rammohan Roy's title 'Raja' was given by? A: The Mughal Emperor Akbar II.", "प्र: 'राजा' की उपाधि किसने दी? उ: मुगल सम्राट अकबर द्वितीय।"],
    ],
  },

  // TOPIC 3: Lohia & Azad
  {
    id: 't3', num: 3,
    title: ["Ram Manohar Lohia & Moulana Abul Kalam Azad", "राम मनोहर लोहिया और मौलाना अबुल कलाम आज़ाद"],
    introduction: [
      "Ram Manohar Lohia (1910-1967) and Moulana Abul Kalam Azad (1888-1958) represent two distinct yet complementary streams of Indian political thought — Lohia's radical socialism rooted in Indian conditions and Azad's composite nationalism grounded in religious pluralism. Lohia, a fierce critic of both Western capitalism and Soviet communism, developed the concept of 'Democratic Socialism' adapted to Indian realities, emphasizing caste-class analysis, decentralisation, and the struggle against inequality. Azad, a scholar, journalist, and India's first Education Minister, articulated a vision of 'composite nationalism' (Muttahida Qaumiyat) that saw India as a nation of diverse religious communities united by shared history and culture. Both thinkers profoundly shaped India's political discourse — Lohia through his socialist movement and critique of Congress, and Azad through his intellectual leadership of the Indian National Congress and opposition to Partition.",
      "राम मनोहर लोहिया (1910-1967) और मौलाना अबुल कलाम आज़ाद (1888-1958) भारतीय राजनीतिक विचार की दो अलग लेकिन पूरक धाराओं का प्रतिनिधित्व करते हैं — भारतीय परिस्थितियों में निहित लोहिया का क्रांतिकारी समाजवाद और धार्मिक बहुलवाद में आधारित आज़ाद का समग्र राष्ट्रवाद। लोहिया ने पश्चिमी पूंजीवाद और सोवियत साम्यवाद दोनों की आलोचना करते हुए भारतीय वास्तविकताओं के अनुकूल 'लोकतांत्रिक समाजवाद' विकसित किया। आज़ाद, एक विद्वान, पत्रकार और भारत के पहले शिक्षा मंत्री, ने 'समग्र राष्ट्रवाद' (मुत्ताहिदा कौमियत) की दृष्टि प्रस्तुत की।"
    ],
    concepts: [
      {
        heading: ["Ram Manohar Lohia's Political Ideas", "राम मनोहर लोहिया के राजनीतिक विचार"],
        body: [
          "1. DEMOCRATIC SOCIALISM: Lohia rejected both Western capitalism (exploitation of poor) and Soviet communism (suppression of liberty). His 'Democratic Socialism' combined economic equality with political freedom. He advocated nationalization of key industries alongside decentralized village industries.\n\n2. CASTE-CLASS ANALYSIS: Lohia's most original contribution. He argued that caste is the 'mask of class' in India. The struggle against inequality must simultaneously fight both caste hierarchy and economic exploitation. He advocated 60% reservation for backward classes, women, and minorities.\n\n3. SAAT KRANTI (Seven Revolutions): Lohia proposed seven simultaneous revolutions for India's transformation: (i) Gender equality, (ii) Anti-caste revolution, (iii) Against racial discrimination, (iv) Against economic inequality, (v) Against foreign domination, (vi) Civil liberties revolution, (vii) Anti-militarization.\n\n4. DECENTRALIZATION (Chaukhamba Model): Power should be decentralized to four levels: Village (Gram), District (Janpad), Province (Pradesh), Centre. Villages should be self-governing. He opposed excessive centralization.\n\n5. ANTI-CONGRESSISM: Lohia was a fierce critic of Congress, which he saw as an elitist party. Advocated non-Congressism (Gair-Congressvad), leading to the first non-Congress government in 1967.\n\n6. FOREIGN POLICY: Opposed both American and Soviet blocs. Advocated non-alignment and Third World solidarity.",
          "1. लोकतांत्रिक समाजवाद: पश्चिमी पूंजीवाद और सोवियत साम्यवाद दोनों की अस्वीकृति। आर्थिक समानता + राजनीतिक स्वतंत्रता।\n\n2. जाति-वर्ग विश्लेषण: भारत में जाति 'वर्ग का मुखौटा' है। पिछड़ों, महिलाओं, अल्पसंख्यकों के लिए 60% आरक्षण।\n\n3. सात क्रांतियां: लैंगिक समानता, जाति-विरोधी, नस्लीय भेदभाव-विरोधी, आर्थिक असमानता-विरोधी, विदेशी वर्चस्व-विरोधी, नागरिक स्वतंत्रता, सैन्यीकरण-विरोधी।\n\n4. चौखंभा मॉडल: ग्राम, जनपद, प्रदेश, केंद्र — चार स्तरीय विकेंद्रीकरण।\n\n5. गैर-कांग्रेसवाद: कांग्रेस को अभिजनवादी बताया।\n\n6. विदेश नीति: दोनों गुटों का विरोध। तीसरी दुनिया एकता।"
        ]
      },
      {
        heading: ["Moulana Abul Kalam Azad's Political Ideas", "मौलाना अबुल कलाम आज़ाद के राजनीतिक विचार"],
        body: [
          "1. COMPOSITE NATIONALISM (Muttahida Qaumiyat): Azad argued that Indian nationhood is NOT based on religion. Hindus and Muslims share a common history, culture, language, and geography. India is a 'composite nation' where multiple communities coexist. He strongly opposed the Two-Nation Theory (Jinnah).\n\n2. OPPOSITION TO PARTITION: Azad was the most prominent Muslim leader opposing Partition. He argued that partition would harm Muslims more than Hindus. 'I have not an atom of doubt that the division of India will prove harmful not only to Hindus but especially to Muslims.'\n\n3. SECULARISM: For Azad, secularism meant NOT irreligion but equal respect for all religions. The State should maintain equidistance from all religions but not be hostile to religion. Religion is a personal matter.\n\n4. EDUCATION: As India's first Education Minister (1947-1958), he established UGC, IITs (first IIT at Kharagpur, 1951), Indian Council for Cultural Relations (ICCR), and emphasized universal primary education, scientific temper, and cultural synthesis.\n\n5. NATIONAL UNITY: Emphasized Hindu-Muslim unity as the foundation of Indian nationalism. Supported the Khilafat Movement (1919-1924) as a bridge between communities.\n\n6. SOCIALISM AND WELFARE: Advocated planned economy, state-led industrialization, and welfare measures for the poor.",
          "1. समग्र राष्ट्रवाद: भारतीय राष्ट्र धर्म पर आधारित नहीं। हिंदू-मुस्लिम साझा इतिहास, संस्कृति। द्वि-राष्ट्र सिद्धांत का विरोध।\n\n2. विभाजन विरोध: विभाजन का सबसे प्रमुख मुस्लिम विरोधी।\n\n3. धर्मनिरपेक्षता: अधर्म नहीं बल्कि सभी धर्मों का समान सम्मान।\n\n4. शिक्षा: पहले शिक्षा मंत्री — UGC, IIT (खड़गपुर, 1951), ICCR की स्थापना।\n\n5. राष्ट्रीय एकता: हिंदू-मुस्लिम एकता भारतीय राष्ट्रवाद की नींव।\n\n6. समाजवाद और कल्याण: नियोजित अर्थव्यवस्था।"
        ]
      }
    ],
    quotes: [
      ["Ram Manohar Lohia: \"Caste is the biggest obstacle to India's unity and progress.\"", "राम मनोहर लोहिया: \"जाति भारत की एकता और प्रगति में सबसे बड़ी बाधा है।\""],
      ["M.A.K. Azad: \"I am a Muslim and profoundly conscious of the fact that I have inherited Islam's glorious tradition... But I am equally proud of being an Indian.\" — India Wins Freedom", "एम.ए.के. आज़ाद: \"मैं मुसलमान हूं और इस्लाम की गौरवशाली परंपरा का उत्तराधिकारी हूं... लेकिन मुझे भारतीय होने पर भी उतना ही गर्व है।\""],
      ["O.P. Gauba: \"Lohia represents the most systematic attempt to adapt socialist theory to the specific conditions of Indian society.\"", "ओ.पी. गाबा: \"लोहिया समाजवादी सिद्धांत को भारतीय समाज की विशिष्ट परिस्थितियों में ढालने का सबसे व्यवस्थित प्रयास प्रस्तुत करते हैं।\""],
      ["Dr. V.P. Verma: \"Azad's composite nationalism remains the most powerful intellectual response to communalism in Indian political thought.\"", "डॉ. वी.पी. वर्मा: \"आज़ाद का समग्र राष्ट्रवाद भारतीय राजनीतिक विचार में सांप्रदायिकता की सबसे शक्तिशाली बौद्धिक प्रतिक्रिया है।\""],
    ],
    evaluation: [
      "Lohia and Azad offered different but complementary visions for India. Lohia's strength lies in his penetrating caste-class analysis, his critique of both capitalism and communism, and his advocacy for the marginalized. His 'Seven Revolutions' framework remains relevant to understanding India's unfinished social transformation. However, his anti-Congressism sometimes led to opportunistic alliances, and his decentralized model has been criticized as impractical for a modern industrial economy. Azad's composite nationalism is a powerful counter to religious majoritarianism and remains deeply relevant in contemporary India. His educational vision laid the foundation for India's technical and scientific advancement. However, his faith in Congress's secular credentials and Nehruvian socialism has been criticized as overly idealistic — the Partition proved the limits of his composite nationalism in the face of communal mobilization.",
      "लोहिया और आज़ाद ने भारत के लिए अलग लेकिन पूरक दृष्टिकोण प्रस्तुत किए। लोहिया की ताकत: जाति-वर्ग विश्लेषण, पूंजीवाद और साम्यवाद दोनों की आलोचना, हाशिए के लोगों की वकालत। 'सात क्रांतियां' प्रासंगिक। पर गैर-कांग्रेसवाद में अवसरवादिता का खतरा। आज़ाद का समग्र राष्ट्रवाद धार्मिक बहुसंख्यकवाद का मुकाबला करता है। उनकी शैक्षिक दृष्टि ने भारत की तकनीकी उन्नति की नींव रखी। पर विभाजन ने उनके समग्र राष्ट्रवाद की सीमाएं दिखाईं।"
    ],
    conclusion: [
      "Both Lohia and Azad represent the richness and diversity of Indian political thought. Lohia's radical socialism challenged entrenched hierarchies of caste and class, advocating a decentralized, egalitarian India. Azad's composite nationalism offered a vision of religious harmony and cultural synthesis rooted in India's civilizational ethos. Together, they remind us that India's strength lies in its diversity and its commitment to justice — social, economic, and cultural. In an era of rising majoritarianism and economic inequality, their ideas remain urgent guides for building a truly inclusive and just society.",
      "लोहिया और आज़ाद दोनों भारतीय राजनीतिक विचार की समृद्धि और विविधता का प्रतिनिधित्व करते हैं। लोहिया का क्रांतिकारी समाजवाद जाति-वर्ग के पदानुक्रमों को चुनौती देता है। आज़ाद का समग्र राष्ट्रवाद धार्मिक सद्भाव और सांस्कृतिक संश्लेषण की दृष्टि प्रस्तुत करता है। बढ़ते बहुसंख्यकवाद और आर्थिक असमानता के इस युग में, उनके विचार एक समावेशी और न्यायपूर्ण समाज के निर्माण के लिए मार्गदर्शक हैं।"
    ],
    shortQ: [
      ["What is the concept of 'Seven Revolutions' (Saat Kranti) by Lohia?", "लोहिया की 'सात क्रांतियां' क्या हैं?"],
      ["Explain Lohia's caste-class analysis.", "लोहिया के जाति-वर्ग विश्लेषण की व्याख्या करें।"],
      ["What is Azad's concept of Composite Nationalism?", "आज़ाद की समग्र राष्ट्रवाद की अवधारणा क्या है?"],
      ["Why did Azad oppose the Partition of India?", "आज़ाद ने भारत विभाजन का विरोध क्यों किया?"],
      ["What was Azad's contribution to Indian education?", "भारतीय शिक्षा में आज़ाद का योगदान क्या था?"],
    ],
    longQ: [
      ["Discuss the political ideas of Ram Manohar Lohia with special reference to Democratic Socialism and caste analysis.", "लोकतांत्रिक समाजवाद और जाति विश्लेषण के विशेष संदर्भ में राम मनोहर लोहिया के राजनीतिक विचारों पर चर्चा करें।"],
      ["Critically examine Moulana Azad's concept of Composite Nationalism.", "मौलाना आज़ाद की समग्र राष्ट्रवाद की अवधारणा का आलोचनात्मक परीक्षण करें।"],
      ["Compare the political ideas of Ram Manohar Lohia and Moulana Abul Kalam Azad.", "राम मनोहर लोहिया और मौलाना अबुल कलाम आज़ाद के राजनीतिक विचारों की तुलना करें।"],
      ["Discuss Azad's views on secularism and national unity.", "धर्मनिरपेक्षता और राष्ट्रीय एकता पर आज़ाद के विचारों पर चर्चा करें।"],
      ["Analyze the relevance of Lohia's Seven Revolutions in contemporary India.", "समकालीन भारत में लोहिया की सात क्रांतियों की प्रासंगिकता का विश्लेषण करें।"],
    ],
    mcqs: [
      { q: ["Lohia's 'Chaukhamba Model' refers to:", "लोहिया का 'चौखंभा मॉडल' संदर्भित है:"], opts: [["Four pillars of socialism", "समाजवाद के चार स्तंभ"], ["Four-tier decentralization", "चार-स्तरीय विकेंद्रीकरण"], ["Four economic sectors", "चार आर्थिक क्षेत्र"], ["Four foreign policy principles", "चार विदेश नीति सिद्धांत"]], correct: 1 },
      { q: ["Azad's autobiography is titled:", "आज़ाद की आत्मकथा का शीर्षक है:"], opts: [["The Story of My Life", "द स्टोरी ऑफ माई लाइफ"], ["India Wins Freedom", "इंडिया विंस फ्रीडम"], ["Freedom at Midnight", "फ्रीडम एट मिडनाइट"], ["My Experiments with Truth", "माई एक्सपेरिमेंट्स विद ट्रुथ"]], correct: 1 },
      { q: ["Azad became India's first:", "आज़ाद भारत के पहले बने:"], opts: [["Prime Minister", "प्रधानमंत्री"], ["Education Minister", "शिक्षा मंत्री"], ["Home Minister", "गृह मंत्री"], ["President", "राष्ट्रपति"]], correct: 1 },
      { q: ["Non-Congressism (Gair-Congressvad) is associated with:", "गैर-कांग्रेसवाद किससे जुड़ा है?"], opts: [["M.A.K. Azad", "आज़ाद"], ["Ram Manohar Lohia", "लोहिया"], ["J.P. Narayan", "जे.पी. नारायण"], ["B.R. Ambedkar", "आंबेडकर"]], correct: 1 },
      { q: ["Azad's 'Composite Nationalism' is called:", "आज़ाद का 'समग्र राष्ट्रवाद' कहलाता है:"], opts: [["Ek Qaumiyat", "एक कौमियत"], ["Muttahida Qaumiyat", "मुत्ताहिदा कौमियत"], ["Pan-Islamism", "पैन-इस्लामिज्म"], ["Indian Nationalism", "भारतीय राष्ट्रवाद"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Lohia: Democratic Socialism, Saat Kranti (7 Revolutions), Chaukhamba Model, Anti-Congressism\n• Lohia's 60% reservation formula for backward classes\n• Azad: Composite Nationalism (Muttahida Qaumiyat), opposition to Two-Nation Theory\n• Azad as India's first Education Minister (1947-58): UGC (1953), IIT Kharagpur (1951), ICCR\n• Azad's 'India Wins Freedom' (1957) — autobiography\n• Khilafat Movement (1919-1924) — Azad's role\n• Al-Hilal (1912) — Azad's Urdu weekly\n• Lohia and Socialist Party (1948), Samyukta Socialist Party (1964)",
      "UGC NET फोकस:\n• लोहिया: सात क्रांतियां, चौखंभा मॉडल, 60% आरक्षण\n• आज़ाद: मुत्ताहिदा कौमियत, इंडिया विंस फ्रीडम\n• UGC (1953), IIT खड़गपुर (1951)\n• अल-हिलाल (1912)\n• खिलाफत आंदोलन\n• सोशलिस्ट पार्टी (1948)"
    ],
    ugcQ: [
      ["Q: Azad founded which Urdu weekly in 1912? A: Al-Hilal.", "प्र: आज़ाद ने 1912 में कौन सा उर्दू साप्ताहिक शुरू किया? उ: अल-हिलाल।"],
      ["Q: Lohia advocated what percentage of reservation? A: 60% for backward classes, women, and minorities.", "प्र: लोहिया ने कितने प्रतिशत आरक्षण की वकालत की? उ: पिछड़ों, महिलाओं और अल्पसंख्यकों के लिए 60%।"],
      ["Q: UGC was established in which year? A: 1953 (on recommendation of Radhakrishnan Commission).", "प्र: UGC कब स्थापित हुआ? उ: 1953 (राधाकृष्णन आयोग की सिफारिश पर)।"],
    ],
  },

  // TOPIC 4: Jawaharlal Nehru
  {
    id: 't4', num: 4,
    title: ["Jawaharlal Nehru", "जवाहरलाल नेहरू"],
    introduction: [
      "Jawaharlal Nehru (1889-1964), India's first Prime Minister (1947-1964), was not only the architect of modern India's political institutions but also one of its most influential political thinkers. Educated at Harrow and Cambridge, deeply influenced by Fabian socialism, liberal democracy, and scientific humanism, Nehru developed a distinctive ideological framework — 'Democratic Socialism' — that combined parliamentary democracy with planned economic development. His political thought encompassed secularism, scientific temper, internationalism, and a commitment to constitutional methods. His books — 'The Discovery of India' (1946), 'Glimpses of World History' (1934), and 'An Autobiography' (1936) — remain classic expositions of Indian nationalism and modern political philosophy. Nehru's vision created the institutional foundations of Indian democracy: parliamentary system, planned economy, secular state, non-aligned foreign policy, and scientific-industrial development.",
      "जवाहरलाल नेहरू (1889-1964), भारत के पहले प्रधानमंत्री (1947-1964), आधुनिक भारत की राजनीतिक संस्थाओं के निर्माता ही नहीं बल्कि सबसे प्रभावशाली राजनीतिक विचारकों में से एक थे। हैरो और कैम्ब्रिज में शिक्षित, फेबियन समाजवाद, उदारवादी लोकतंत्र और वैज्ञानिक मानवतावाद से प्रभावित, नेहरू ने 'लोकतांत्रिक समाजवाद' का विशिष्ट वैचारिक ढांचा विकसित किया। उनके राजनीतिक विचार में धर्मनिरपेक्षता, वैज्ञानिक दृष्टिकोण, अंतर्राष्ट्रीयतावाद और संवैधानिक पद्धतियों के प्रति प्रतिबद्धता शामिल थी। 'द डिस्कवरी ऑफ इंडिया' (1946), 'ग्लिम्पसेज ऑफ वर्ल्ड हिस्ट्री' (1934) और 'एन ऑटोबायोग्राफी' (1936) भारतीय राष्ट्रवाद और आधुनिक राजनीतिक दर्शन की क्लासिक व्याख्याएं हैं।"
    ],
    concepts: [
      {
        heading: ["Democratic Socialism", "लोकतांत्रिक समाजवाद"],
        body: [
          "Nehru's socialism was democratic, gradual, and constitutional — not revolutionary or totalitarian.\n\n1. MIXED ECONOMY: Neither pure capitalism nor complete state ownership. Public sector for heavy and strategic industries (steel, power, defense); private sector for consumer goods. This was institutionalized through the Industrial Policy Resolutions of 1948 and 1956.\n\n2. PLANNING: Established the Planning Commission (1950) for Five-Year Plans. The First Plan (1951-56) focused on agriculture; the Second Plan (1956-61 — Mahalanobis Model) prioritized heavy industry.\n\n3. WELFARE STATE: The state must ensure minimum standards of living, education, health, and social security. Reflected in Directive Principles (Art 38-43).\n\n4. PARLIAMENTARY DEMOCRACY: Socialism must be achieved through democratic means — elections, parliamentary processes, and constitutional amendments — not violence or dictatorship. Nehru firmly rejected the communist model.\n\n5. COOPERATIVE FARMING: Advocated cooperativization of agriculture (though largely unsuccessful due to political resistance from landed interests).\n\n6. AVADI RESOLUTION (1955): The Indian National Congress formally adopted 'Socialistic Pattern of Society' as its goal at the Avadi session.",
          "1. मिश्रित अर्थव्यवस्था: भारी उद्योगों के लिए सार्वजनिक क्षेत्र; उपभोक्ता वस्तुओं के लिए निजी क्षेत्र। औद्योगिक नीति 1948, 1956।\n\n2. योजना: योजना आयोग (1950)। पहली योजना — कृषि; दूसरी — महालनोबिस मॉडल।\n\n3. कल्याणकारी राज्य: न्यूनतम जीवन स्तर (DPSP अनु. 38-43)।\n\n4. संसदीय लोकतंत्र: समाजवाद लोकतांत्रिक माध्यमों से — चुनाव, संसदीय प्रक्रिया। साम्यवादी मॉडल की अस्वीकृति।\n\n5. सहकारी कृषि।\n\n6. अवाड़ी प्रस्ताव (1955): 'समाज का समाजवादी ढांचा' — कांग्रेस लक्ष्य।"
        ]
      },
      {
        heading: ["Secularism and Scientific Temper", "धर्मनिरपेक्षता और वैज्ञानिक दृष्टिकोण"],
        body: [
          "SECULARISM: For Nehru, secularism was not merely tolerance of all religions but an active commitment to rationalism and scientific thinking in public life.\n• The State must maintain equidistance from all religions — neither theocratic nor atheistic.\n• Religion is a private matter; public policy must be based on reason, evidence, and constitutional values.\n• Opposed communalism and religious fundamentalism as threats to national unity.\n\nSCIENTIFIC TEMPER: Nehru coined this phrase, later incorporated as a Fundamental Duty (Art 51A(h)).\n• Rejection of superstition, dogma, and blind faith.\n• Cultivation of rational, critical thinking.\n• Science and technology as instruments of national development — established CSIR, IITs, IIMs, AIIMS, ISRO, and atomic energy program.\n\nINSTITUTION BUILDING: Nehru's 'Temples of Modern India' — Bhakra Nangal Dam, steel plants (Bhilai, Rourkela, Durgapur), BARC. He believed industrialization and science would transform India from a traditional to a modern society.",
          "धर्मनिरपेक्षता: सभी धर्मों से समदूरी। धर्म निजी मामला; सार्वजनिक नीति तर्क पर आधारित। सांप्रदायिकता का विरोध।\n\nवैज्ञानिक दृष्टिकोण: मौलिक कर्तव्य (अनु. 51A(h)) में शामिल। अंधविश्वास और हठधर्मिता का विरोध। राष्ट्रीय विकास के उपकरण के रूप में विज्ञान।\n\nसंस्था निर्माण: CSIR, IIT, IIM, AIIMS, ISRO, परमाणु ऊर्जा कार्यक्रम।\n\n'आधुनिक भारत के मंदिर': भाखड़ा नांगल बांध, इस्पात संयंत्र (भिलाई, राउरकेला, दुर्गापुर)।"
        ]
      },
      {
        heading: ["Internationalism and Foreign Policy", "अंतर्राष्ट्रीयतावाद और विदेश नीति"],
        body: [
          "1. NON-ALIGNMENT (NAM): Nehru, along with Nasser (Egypt) and Tito (Yugoslavia), founded the Non-Aligned Movement (1961, Belgrade). Refusal to join either the American or Soviet bloc. Maintaining strategic autonomy.\n\n2. PANCHSHEEL (Five Principles, 1954): (i) Mutual respect for territorial integrity, (ii) Non-aggression, (iii) Non-interference in internal affairs, (iv) Equality and mutual benefit, (v) Peaceful coexistence. Signed with China but violated by China in the 1962 war.\n\n3. ANTI-COLONIALISM AND ANTI-RACISM: Nehru was a global voice against colonialism and racial discrimination. Supported anti-colonial movements in Asia and Africa.\n\n4. UN AND INTERNATIONAL LAW: Strong commitment to the United Nations. Advocated disarmament and peaceful resolution of disputes.\n\n5. ONE WORLD: Believed in the eventual emergence of a single world government or 'One World' federation. A deeply internationalist vision.",
          "1. गुटनिरपेक्षता (NAM, 1961): अमेरिकी या सोवियत गुट में शामिल न होना। रणनीतिक स्वायत्तता।\n\n2. पंचशील (1954): पांच सिद्धांत — क्षेत्रीय अखंडता, अनाक्रमण, आंतरिक मामलों में हस्तक्षेप न करना, समानता, शांतिपूर्ण सह-अस्तित्व।\n\n3. उपनिवेशवाद-विरोध और नस्लवाद-विरोध।\n\n4. संयुक्त राष्ट्र के प्रति प्रतिबद्धता।\n\n5. 'एक विश्व': एकल विश्व सरकार का अंतर्राष्ट्रीयतावादी दृष्टिकोण।"
        ]
      }
    ],
    quotes: [
      ["Nehru: \"The only alternative to coexistence is co-destruction.\"", "नेहरू: \"सह-अस्तित्व का एकमात्र विकल्प सह-विनाश है।\""],
      ["Nehru: \"The future belongs to science and to those who make friends with science.\"", "नेहरू: \"भविष्य विज्ञान का है और उनका जो विज्ञान से मित्रता करते हैं।\""],
      ["O.P. Gauba: \"Nehru's greatest contribution to Indian political thought was the synthesis of liberalism, socialism, and nationalism.\"", "ओ.पी. गाबा: \"भारतीय राजनीतिक विचार में नेहरू का सबसे बड़ा योगदान उदारवाद, समाजवाद और राष्ट्रवाद का संश्लेषण था।\""],
      ["Dr. V.P. Verma: \"Nehru was the chief ideologue of the Indian National Congress who shaped its policy from 1929 to 1964.\"", "डॉ. वी.पी. वर्मा: \"नेहरू भारतीय राष्ट्रीय कांग्रेस के प्रमुख विचारक थे जिन्होंने 1929 से 1964 तक इसकी नीति को आकार दिया।\""],
    ],
    evaluation: [
      "Nehru's legacy is deeply contested. Supporters credit him with establishing strong democratic institutions, parliamentary traditions, a secular state, scientific-industrial infrastructure, and a non-aligned foreign policy that gave India strategic autonomy. His vision of a 'socialistic pattern of society' shaped India's developmental trajectory. Critics argue that his economic policies (License Raj, excessive state control) stifled growth for decades (Hindu rate of growth ~3.5%). His China policy (Panchsheel, 'Hindi-Chini Bhai Bhai') is seen as naive after the 1962 debacle. His handling of Kashmir (Art 370) and the 1962 war aftermath are debated. However, his commitment to democracy, secularism, and constitutionalism remains his enduring legacy. As Amartya Sen notes, Nehru's greatest achievement was making democracy 'normal' in a poor, illiterate, diverse society.",
      "नेहरू की विरासत गहराई से विवादित है। समर्थक मजबूत लोकतांत्रिक संस्थाओं, धर्मनिरपेक्ष राज्य, वैज्ञानिक-औद्योगिक बुनियादी ढांचे और गुटनिरपेक्ष विदेश नीति का श्रेय देते हैं। आलोचक कहते हैं कि उनकी आर्थिक नीतियों (लाइसेंस राज) ने विकास को दशकों तक रोका। चीन नीति (पंचशील) 1962 के बाद भोली प्रतीत हुई। कश्मीर और 1962 युद्ध पर भी बहस। फिर भी, लोकतंत्र, धर्मनिरपेक्षता और संविधानवाद के प्रति उनकी प्रतिबद्धता उनकी स्थायी विरासत है। अमर्त्य सेन के अनुसार, नेहरू की सबसे बड़ी उपलब्धि एक गरीब, निरक्षर, विविध समाज में लोकतंत्र को 'सामान्य' बनाना थी।"
    ],
    conclusion: [
      "Nehru's political thought represents a unique synthesis of Western liberalism, Fabian socialism, and Indian humanism. His vision of a modern, democratic, secular, and scientifically advanced India remains the foundational framework of the Indian Republic. While his economic model required reform (Liberalization of 1991), his commitment to democratic institutions, constitutional values, and pluralism provided the resilience that allowed India to navigate crises. As India completes over 75 years of independence, Nehru's ideas continue to provoke debate — a testament to their enduring significance.",
      "नेहरू का राजनीतिक विचार पश्चिमी उदारवाद, फेबियन समाजवाद और भारतीय मानवतावाद का अद्वितीय संश्लेषण है। आधुनिक, लोकतांत्रिक, धर्मनिरपेक्ष और वैज्ञानिक रूप से उन्नत भारत की उनकी दृष्टि गणतंत्र का आधारभूत ढांचा बनी हुई है। यद्यपि उनके आर्थिक मॉडल में सुधार की आवश्यकता थी (1991 का उदारीकरण), लोकतांत्रिक संस्थाओं, संवैधानिक मूल्यों और बहुलवाद के प्रति उनकी प्रतिबद्धता ने संकटों से उबरने का लचीलापन प्रदान किया।"
    ],
    shortQ: [
      ["Explain Nehru's concept of Democratic Socialism.", "नेहरू की लोकतांत्रिक समाजवाद की अवधारणा समझाएं।"],
      ["What is Avadi Resolution (1955)?", "अवाड़ी प्रस्ताव (1955) क्या है?"],
      ["What were Nehru's views on secularism?", "धर्मनिरपेक्षता पर नेहरू के विचार क्या थे?"],
      ["Explain Panchsheel (Five Principles).", "पंचशील (पांच सिद्धांत) की व्याख्या करें।"],
      ["What is scientific temper according to Nehru?", "नेहरू के अनुसार वैज्ञानिक दृष्टिकोण क्या है?"],
    ],
    longQ: [
      ["Discuss Jawaharlal Nehru's political philosophy with special reference to Democratic Socialism and Secularism.", "लोकतांत्रिक समाजवाद और धर्मनिरपेक्षता के विशेष संदर्भ में जवाहरलाल नेहरू के राजनीतिक दर्शन पर चर्चा करें।"],
      ["Critically examine Nehru's contribution to India's foreign policy.", "भारत की विदेश नीति में नेहरू के योगदान का आलोचनात्मक परीक्षण करें।"],
      ["Discuss Nehru's concept of scientific temper and its relevance in modern India.", "नेहरू की वैज्ञानिक दृष्टिकोण की अवधारणा और आधुनिक भारत में इसकी प्रासंगिकता पर चर्चा करें।"],
      ["'Nehru was the architect of modern India.' Discuss.", "'नेहरू आधुनिक भारत के निर्माता थे।' चर्चा करें।"],
      ["Critically evaluate Nehru's economic policies and their long-term impact on India.", "नेहरू की आर्थिक नीतियों और भारत पर उनके दीर्घकालिक प्रभाव का आलोचनात्मक मूल्यांकन करें।"],
    ],
    mcqs: [
      { q: ["Nehru's 'The Discovery of India' was written in:", "नेहरू की 'द डिस्कवरी ऑफ इंडिया' कब लिखी गई?"], opts: [["1934", "1934"], ["1936", "1936"], ["1944", "1944"], ["1946", "1946"]], correct: 3 },
      { q: ["Avadi Resolution (1955) adopted:", "अवाड़ी प्रस्ताव (1955) ने अपनाया:"], opts: [["Parliamentary Democracy", "संसदीय लोकतंत्र"], ["Socialistic Pattern of Society", "समाज का समाजवादी ढांचा"], ["Mixed Economy", "मिश्रित अर्थव्यवस्था"], ["Non-Alignment", "गुटनिरपेक्षता"]], correct: 1 },
      { q: ["Panchsheel was signed with which country in 1954?", "पंचशील 1954 में किस देश के साथ हस्ताक्षरित हुआ?"], opts: [["USA", "USA"], ["USSR", "USSR"], ["China", "चीन"], ["Pakistan", "पाकिस्तान"]], correct: 2 },
      { q: ["NAMs first summit was held at:", "NAM का पहला शिखर सम्मेलन कहां हुआ?"], opts: [["New Delhi", "नई दिल्ली"], ["Belgrade", "बेलग्रेड"], ["Bandung", "बांडुंग"], ["Cairo", "काहिरा"]], correct: 1 },
      { q: ["Scientific temper is a Fundamental Duty under:", "वैज्ञानिक दृष्टिकोण मौलिक कर्तव्य किस अनुच्छेद में?"], opts: [["Art 51A(g)", "अनु. 51A(g)"], ["Art 51A(h)", "अनु. 51A(h)"], ["Art 51A(i)", "अनु. 51A(i)"], ["Art 51A(j)", "अनु. 51A(j)"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Nehru's trilogy: Autobiography (1936), Glimpses of World History (1934), Discovery of India (1946)\n• Democratic Socialism — mixed economy, planning\n• Avadi Resolution (1955) — Socialistic Pattern of Society\n• Panchsheel (1954) with China; NAM (1961)\n• Second Five Year Plan (Mahalanobis Model, 1956-61)\n• Industrial Policy Resolutions 1948, 1956\n• Scientific temper — Art 51A(h)\n• 'Temples of Modern India'\n• Bandung Conference (1955) — precursor to NAM\n• Planning Commission (1950) → replaced by NITI Aayog (2015)",
      "UGC NET फोकस:\n• त्रयी: आत्मकथा, ग्लिम्पसेज, डिस्कवरी\n• लोकतांत्रिक समाजवाद\n• अवाड़ी प्रस्ताव (1955)\n• पंचशील, NAM\n• दूसरी पंचवर्षीय योजना (महालनोबिस)\n• औद्योगिक नीति 1948, 1956\n• अनु. 51A(h) — वैज्ञानिक दृष्टिकोण\n• बांडुंग सम्मेलन (1955)\n• योजना आयोग → नीति आयोग"
    ],
    ugcQ: [
      ["Q: Mahalanobis Model was adopted in which Five-Year Plan? A: Second Five-Year Plan (1956-61).", "प्र: महालनोबिस मॉडल किस पंचवर्षीय योजना में अपनाया गया? उ: दूसरी पंचवर्षीय योजना (1956-61)।"],
      ["Q: Bandung Conference was held in which year? A: 1955 (precursor to NAM).", "प्र: बांडुंग सम्मेलन कब हुआ? उ: 1955 (NAM का अग्रदूत)।"],
      ["Q: Who coined 'Scientific Temper'? A: Jawaharlal Nehru.", "प्र: 'वैज्ञानिक दृष्टिकोण' किसने गढ़ा? उ: जवाहरलाल नेहरू।"],
    ],
  },

  // TOPIC 5: Rabindranath Tagore
  {
    id: 't5', num: 5,
    title: ["Rabindranath Tagore: Humanism, Internationalism", "रवींद्रनाथ टैगोर: मानवतावाद, अंतर्राष्ट्रीयवाद"],
    introduction: [
      "Rabindranath Tagore (1861-1941), the first Asian Nobel Laureate (Literature, 1913), was not only a poet, novelist, and composer of India's national anthem but also a profound political thinker. Tagore's political philosophy is rooted in a deep humanism that emphasized the infinite value of the individual, the spiritual unity of humanity, and the need for creative freedom. A sharp critic of narrow nationalism, he warned that aggressive nationalism (which he called 'the Nation of the West') would lead to violence, imperialism, and the suppression of human creativity. His educational experiment at Santiniketan (Visva-Bharati University, founded 1921) embodied his vision of education as the harmonious development of body, mind, and spirit — 'Where the mind is without fear and the head is held high.' Tagore's internationalism, expressed most powerfully through his world travels and the concept of Visva-Bharati ('where the world makes a home in a single nest'), envisioned a world beyond political borders united by culture, art, and shared humanity.",
      "रवींद्रनाथ टैगोर (1861-1941), पहले एशियाई नोबेल पुरस्कार विजेता (साहित्य, 1913), कवि, उपन्यासकार और भारत के राष्ट्रगान के रचयिता ही नहीं बल्कि गहन राजनीतिक विचारक भी थे। टैगोर का राजनीतिक दर्शन गहरे मानवतावाद में निहित है जो व्यक्ति के अनंत मूल्य, मानवता की आध्यात्मिक एकता और रचनात्मक स्वतंत्रता पर जोर देता है। संकीर्ण राष्ट्रवाद के तीव्र आलोचक, उन्होंने चेतावनी दी कि आक्रामक राष्ट्रवाद हिंसा और साम्राज्यवाद की ओर ले जाएगा। शांतिनिकेतन (विश्व-भारती, 1921) में उनका शैक्षिक प्रयोग उनकी दृष्टि का मूर्त रूप था। टैगोर का अंतर्राष्ट्रीयतावाद राजनीतिक सीमाओं से परे संस्कृति, कला और साझा मानवता से एकजुट विश्व की कल्पना करता था।"
    ],
    concepts: [
      {
        heading: ["Tagore's Humanism", "टैगोर का मानवतावाद"],
        body: [
          "1. THE SUPREME VALUE OF THE INDIVIDUAL: For Tagore, the individual is not a cog in a machine (state, nation, or economic system). Every human being possesses infinite worth and creative potential. 'Man is not an abstraction; he is a living personality.'\n\n2. FREEDOM AS SPIRITUAL AND CREATIVE: Freedom is not merely political but spiritual and creative. True freedom is the liberation of the human spirit from all forms of bondage — political tyranny, social conformity, religious dogma, and economic exploitation.\n\n3. SYNTHESIS OF EAST AND WEST: Tagore sought to harmonize Eastern spirituality with Western humanism and scientific inquiry. He rejected both blind imitation of the West and narrow rejection of modernity.\n\n4. CRITIQUE OF MACHINE CIVILIZATION: Tagore was deeply critical of industrial civilization that reduced humans to machines. In 'The Religion of Man' (1931), he argued that modern civilization worships the machine while forgetting the human soul.\n\n5. EDUCATION FOR FULL HUMAN DEVELOPMENT: Education must nurture creativity, imagination, moral sensitivity, and appreciation of nature — not just vocational training. Santiniketan embodied learning in harmony with nature.\n\n6. UNIVERSAL RELIGION (Religion of Man): Tagore believed in a universal spirituality beyond organized religions — a direct relationship between the individual and the divine through love, beauty, and truth.",
          "1. व्यक्ति का सर्वोच्च मूल्य: प्रत्येक मनुष्य में अनंत मूल्य और रचनात्मक क्षमता।\n\n2. स्वतंत्रता आध्यात्मिक और रचनात्मक: राजनीतिक स्वतंत्रता से परे आत्मा की मुक्ति।\n\n3. पूर्व-पश्चिम संश्लेषण: पूर्वी आध्यात्मिकता और पश्चिमी मानवतावाद का समन्वय।\n\n4. मशीनी सभ्यता की आलोचना: 'द रिलिजन ऑफ मैन' (1931) — मशीन पूजा बनाम मानव आत्मा।\n\n5. शिक्षा: रचनात्मकता, कल्पना, नैतिकता का पोषण — शांतिनिकेतन।\n\n6. सार्वभौमिक धर्म (Religion of Man): संगठित धर्मों से परे प्रेम, सौंदर्य और सत्य के माध्यम से दिव्यता से संबंध।"
        ]
      },
      {
        heading: ["Nationalism: Critique and Alternative", "राष्ट्रवाद: आलोचना और विकल्प"],
        body: [
          "Tagore's most controversial political stance was his critique of nationalism.\n\n1. CRITIQUE OF WESTERN NATIONALISM: In his lectures 'Nationalism' (1917, delivered in Japan and USA), Tagore argued that Western nationalism was essentially mechanical, competitive, and violent. It transforms nations into 'organized egoisms' that inevitably clash. The Nation 'is the aspect of a whole people as an organized power... this organization is incessantly producing and consuming wealth and power.'\n\n2. NATIONALISM vs PATRIOTISM: Tagore distinguished between love of one's country (patriotism) and the ideology of the nation-state (nationalism). Patriotism is natural and healthy; nationalism is an artificial political construct that demands total loyalty.\n\n3. CRITIQUE OF INDIAN NATIONALISM: Tagore also criticized the Swadeshi Movement when it turned violent or when it promoted narrow Hindu nationalism. He disagreed with Gandhi on several issues (Non-Cooperation Movement, the cult of the charkha). He warned against 'the fierce self-idolatry of nation-worship.'\n\n4. ALTERNATIVE: A world united by culture, education, and spiritual fellowship — not by political boundaries. Visva-Bharati was the institutional expression of this vision. 'Where the world has not been broken up into fragments by narrow domestic walls.'",
          "1. पश्चिमी राष्ट्रवाद की आलोचना: 'Nationalism' (1917) — राष्ट्र यांत्रिक, प्रतिस्पर्धी, हिंसक। 'संगठित अहंकार।'\n\n2. राष्ट्रवाद बनाम देशभक्ति: देशप्रेम स्वाभाविक; राष्ट्रवाद कृत्रिम राजनीतिक निर्माण।\n\n3. भारतीय राष्ट्रवाद की आलोचना: स्वदेशी आंदोलन हिंसक होने पर आलोचना। गांधी से असहमति (असहयोग, चरखा पंथ)। 'राष्ट्र-पूजा की आत्म-मूर्तिपूजा' के विरुद्ध चेतावनी।\n\n4. विकल्प: संस्कृति, शिक्षा, आध्यात्मिक बंधुत्व से एकजुट विश्व। विश्व-भारती।"
        ]
      }
    ],
    quotes: [
      ["Tagore: \"Where the mind is without fear and the head is held high... Into that heaven of freedom, my Father, let my country awake.\" — Gitanjali", "टैगोर: \"जहां मन भय रहित और सिर ऊंचा हो... उस स्वतंत्रता के स्वर्ग में, हे पिता, मेरे देश को जगा दे।\""],
      ["Tagore: \"Nationalism is a great menace. It is the particular thing which for years has been at the bottom of India's troubles.\" — Nationalism (1917)", "टैगोर: \"राष्ट्रवाद एक बड़ा खतरा है। यह वह विशेष चीज है जो वर्षों से भारत की समस्याओं के मूल में रही है।\""],
      ["O.P. Gauba: \"Tagore's humanism represents the most profound spiritual alternative to both Western materialism and narrow nationalism in modern Indian thought.\"", "ओ.पी. गाबा: \"टैगोर का मानवतावाद आधुनिक भारतीय विचार में पश्चिमी भौतिकवाद और संकीर्ण राष्ट्रवाद दोनों का सबसे गहन आध्यात्मिक विकल्प प्रस्तुत करता है।\""],
      ["Dr. V.P. Verma: \"Tagore's cosmopolitanism anticipates the 21st century's search for a post-national global order.\"", "डॉ. वी.पी. वर्मा: \"टैगोर का विश्व-नागरिकवाद 21वीं सदी की राष्ट्र-पश्चात वैश्विक व्यवस्था की खोज का पूर्वाभास देता है।\""],
    ],
    evaluation: [
      "Tagore's ideas were often at odds with the mainstream nationalist movement, earning him criticism from political leaders. Gandhi, though deeply respectful, disagreed with Tagore's rejection of the Non-Cooperation Movement and the charkha as a symbol of national regeneration. Nehru, too, found Tagore's spiritual universalism somewhat impractical for the hard realities of political struggle. Yet Tagore's warnings about aggressive nationalism proved prophetic — the two World Wars, the Partition violence, and the rise of religious nationalism in India all underscore his insight that 'nation-worship' can become a destructive force. His educational model at Santiniketan influenced progressive education worldwide. His critique of industrial civilization anticipates contemporary environmental thought. His humanism — the insistence that every individual matters, that cultures must dialogue, not clash — remains urgently relevant in an era of rising nationalism, xenophobia, and dehumanizing technology.",
      "टैगोर के विचार मुख्यधारा राष्ट्रवादी आंदोलन से अक्सर टकराते थे। गांधी और नेहरू से असहमति। फिर भी, आक्रामक राष्ट्रवाद के बारे में उनकी चेतावनियां भविष्यवाणी सिद्ध हुईं — दो विश्व युद्ध, विभाजन हिंसा, भारत में धार्मिक राष्ट्रवाद का उदय। शांतिनिकेतन का शैक्षिक मॉडल। मशीनी सभ्यता की आलोचना समकालीन पर्यावरणीय विचार का पूर्वाभास। बढ़ते राष्ट्रवाद, विदेशी-द्वेष और अमानवीय प्रौद्योगिकी के युग में उनका मानवतावाद अत्यंत प्रासंगिक।"
    ],
    conclusion: [
      "Rabindranath Tagore's political philosophy offers a timeless vision of human dignity, creative freedom, and global fellowship. His synthesis of Eastern spirituality with universal humanism created a unique moral framework that challenges both the homogenizing forces of globalization and the divisive forces of nationalism. In 'The Religion of Man,' Tagore articulated a faith not in dogma but in the creative, loving, and truth-seeking human spirit. As the world grapples with climate change, rising inequality, and cultural conflict, Tagore's vision of a world united not by political power but by shared humanity, art, and education — 'where the world makes a home in a single nest' — remains one of the most beautiful and necessary ideals of Indian political thought.",
      "रवींद्रनाथ टैगोर का राजनीतिक दर्शन मानव गरिमा, रचनात्मक स्वतंत्रता और वैश्विक बंधुत्व की कालातीत दृष्टि प्रस्तुत करता है। पूर्वी आध्यात्मिकता और सार्वभौमिक मानवतावाद के उनके संश्लेषण ने एक अद्वितीय नैतिक ढांचा बनाया। जलवायु परिवर्तन, बढ़ती असमानता और सांस्कृतिक संघर्ष से जूझती दुनिया में, टैगोर की दृष्टि — राजनीतिक शक्ति से नहीं बल्कि साझा मानवता, कला और शिक्षा से एकजुट विश्व — भारतीय राजनीतिक विचार का सबसे सुंदर और आवश्यक आदर्श है।"
    ],
    shortQ: [
      ["What were Tagore's views on nationalism?", "राष्ट्रवाद पर टैगोर के विचार क्या थे?"],
      ["Explain Tagore's concept of humanism.", "टैगोर के मानवतावाद की अवधारणा समझाएं।"],
      ["What is the significance of Santiniketan in Tagore's thought?", "टैगोर के विचार में शांतिनिकेतन का क्या महत्व है?"],
      ["How did Tagore differ from Gandhi on the Non-Cooperation Movement?", "टैगोर असहयोग आंदोलन पर गांधी से कैसे भिन्न थे?"],
      ["Explain Tagore's concept of internationalism.", "टैगोर की अंतर्राष्ट्रीयतावाद की अवधारणा समझाएं।"],
    ],
    longQ: [
      ["Discuss Tagore's critique of nationalism and his alternative vision.", "राष्ट्रवाद की टैगोर की आलोचना और उनकी वैकल्पिक दृष्टि पर चर्चा करें।"],
      ["Critically examine Tagore's humanism and its relevance in the contemporary world.", "टैगोर के मानवतावाद और समकालीन विश्व में इसकी प्रासंगिकता का आलोचनात्मक परीक्षण करें।"],
      ["Compare the political ideas of Tagore and Gandhi.", "टैगोर और गांधी के राजनीतिक विचारों की तुलना करें।"],
      ["Discuss Tagore's educational philosophy with reference to Santiniketan.", "शांतिनिकेतन के संदर्भ में टैगोर के शैक्षिक दर्शन पर चर्चा करें।"],
      ["'Tagore's internationalism is more relevant today than his nationalism critique.' Discuss.", "'टैगोर का अंतर्राष्ट्रीयतावाद आज उनकी राष्ट्रवाद आलोचना से अधिक प्रासंगिक है।' चर्चा करें।"],
    ],
    mcqs: [
      { q: ["Tagore's 'Nationalism' lectures were delivered in:", "टैगोर के 'Nationalism' व्याख्यान कहां दिए गए?"], opts: [["India and UK", "भारत और UK"], ["Japan and USA", "जापान और USA"], ["China and USSR", "चीन और USSR"], ["France and Germany", "फ्रांस और जर्मनी"]], correct: 1 },
      { q: ["Visva-Bharati University was founded in:", "विश्व-भारती विश्वविद्यालय कब स्थापित हुआ?"], opts: [["1901", "1901"], ["1913", "1913"], ["1921", "1921"], ["1930", "1930"]], correct: 2 },
      { q: ["Tagore won Nobel Prize for:", "टैगोर को नोबेल पुरस्कार किसके लिए मिला?"], opts: [["Gora", "गोरा"], ["Gitanjali", "गीतांजलि"], ["Nationalism", "नेशनलिज्म"], ["The Home and the World", "घरे बाइरे"]], correct: 1 },
      { q: ["Tagore criticized which Gandhian concept?", "टैगोर ने किस गांधीवादी अवधारणा की आलोचना की?"], opts: [["Satyagraha", "सत्याग्रह"], ["Non-cooperation and Charkha cult", "असहयोग और चरखा पंथ"], ["Ahimsa", "अहिंसा"], ["Swaraj", "स्वराज"]], correct: 1 },
      { q: ["'Religion of Man' (1931) was written by:", "'Religion of Man' (1931) किसने लिखा?"], opts: [["Gandhi", "गांधी"], ["Tagore", "टैगोर"], ["Nehru", "नेहरू"], ["Vivekananda", "विवेकानंद"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Gitanjali (1913) — Nobel Prize\n• Nationalism (1917) — lectures in Japan and USA\n• Visva-Bharati University (1921)\n• Tagore vs Gandhi debates: Non-Cooperation (1921), Charkha, Swadeshi\n• The Religion of Man (1931) — Hibbert Lectures, Oxford\n• Critique of 'nation-worship'\n• Santiniketan — founded 1901 as ashram, 1921 as university\n• Tagore's internationalism: 'Where the world makes a home in a single nest'\n• Gora (1909), Ghare Baire (1916) — novels with political themes\n• Composed national anthems: India (Jana Gana Mana), Bangladesh (Amar Shonar Bangla)",
      "UGC NET फोकस:\n• गीतांजलि (1913) — नोबेल\n• Nationalism (1917)\n• विश्व-भारती (1921)\n• टैगोर बनाम गांधी बहस\n• द रिलिजन ऑफ मैन (1931)\n• राष्ट्र-पूजा की आलोचना\n• दो देशों के राष्ट्रगान"
    ],
    ugcQ: [
      ["Q: Tagore's lectures 'Nationalism' (1917) were published after which trip? A: His lectures in Japan and the United States.", "प्र: 'Nationalism' (1917) किस यात्रा के बाद प्रकाशित? उ: जापान और USA के व्याख्यान।"],
      ["Q: Tagore composed the national anthems of which two countries? A: India (Jana Gana Mana) and Bangladesh (Amar Shonar Bangla).", "प्र: टैगोर ने किन दो देशों के राष्ट्रगान रचे? उ: भारत और बांग्लादेश।"],
      ["Q: Tagore renounced his knighthood after which event? A: Jallianwala Bagh Massacre (1919).", "प्र: टैगोर ने किस घटना के बाद नाइटहुड त्यागा? उ: जलियांवाला बाग हत्याकांड (1919)।"],
    ],
  },

  // TOPIC 6: Mahatma Gandhi
  {
    id: 't6', num: 6,
    title: ["Mahatma Gandhi: Non-Violence, State, Satyagraha", "महात्मा गांधी: अहिंसा, राज्य, सत्याग्रह"],
    introduction: [
      "Mahatma Gandhi (1869-1948) is the most influential political thinker of modern India. His political philosophy represents a radical departure from Western political thought, rooted in Indian spiritual traditions combined with influences from Tolstoy, Ruskin, and Thoreau. Gandhi's core concepts — Satyagraha (truth-force), Ahimsa (non-violence), Swaraj (self-rule), and Sarvodaya (welfare of all) — constitute a comprehensive moral-political framework that challenges the very foundations of the modern state system. Unlike most political thinkers who accept the State as inevitable, Gandhi envisioned a stateless, decentralized society of self-governing village republics (Gram Swaraj). His critique of modern civilization in 'Hind Swaraj' (1909) remains one of the most radical documents of anti-colonial and anti-industrial thought.",
      "महात्मा गांधी (1869-1948) आधुनिक भारत के सबसे प्रभावशाली राजनीतिक विचारक हैं। उनका राजनीतिक दर्शन टॉल्स्टॉय, रस्किन और थोरो के प्रभावों के साथ भारतीय आध्यात्मिक परंपराओं में निहित पश्चिमी राजनीतिक विचार से एक मौलिक विचलन प्रस्तुत करता है। गांधी की मूल अवधारणाएं — सत्याग्रह, अहिंसा, स्वराज और सर्वोदय — एक व्यापक नैतिक-राजनीतिक ढांचा बनाती हैं। अधिकांश राजनीतिक विचारकों के विपरीत, गांधी ने राज्य को अपरिहार्य नहीं माना और आत्म-शासित ग्राम गणराज्यों (ग्राम स्वराज) के विकेंद्रीकृत, राज्यहीन समाज की कल्पना की। 'हिंद स्वराज' (1909) में आधुनिक सभ्यता की उनकी आलोचना उपनिवेशवाद-विरोधी और औद्योगिक-विरोधी विचार का सबसे क्रांतिकारी दस्तावेज है।"
    ],
    concepts: [
      {
        heading: ["Satyagraha (Truth-Force)", "सत्याग्रह (सत्य-बल)"],
        body: [
          "Satyagraha is Gandhi's most original contribution to political thought — a method of non-violent resistance based on the power of truth (Satya) and love.\n\n1. MEANING: Satya (Truth) + Agraha (insistence/firmness). It is 'insistence on truth' or 'soul force.' NOT passive resistance — it is active, courageous, and loving confrontation with injustice.\n\n2. CARDINAL PRINCIPLES: (i) Truth (Satya): The ultimate reality is Truth = God. (ii) Ahimsa (Non-violence): Means and ends are inseparable. Violence breeds more violence. Only non-violent means lead to just ends. (iii) Self-suffering (Tapasya): The Satyagrahi willingly accepts suffering to convert the opponent, not coerce them. (iv) Fearlessness: Courage to face repression without retaliation.\n\n3. TECHNIQUES: (i) Fasting, (ii) Civil Disobedience (breaking unjust laws), (iii) Non-cooperation (withdrawing support), (iv) Hartal (strike), (v) Peaceful marches (Dandi March, 1930).\n\n4. MAJOR SATYAGRAHAS: Champaran (1917), Kheda (1918), Rowlatt Satyagraha (1919), Salt Satyagraha/Dandi March (1930), Quit India Movement (1942).",
          "1. अर्थ: सत्य + आग्रह = सत्य पर आग्रह। निष्क्रिय प्रतिरोध नहीं — सक्रिय, साहसी, प्रेमपूर्ण टकराव।\n\n2. सिद्धांत: (i) सत्य = ईश्वर। (ii) अहिंसा — साधन और साध्य अविभाज्य। (iii) आत्म-कष्ट — विरोधी को दंडित नहीं, रूपांतरित करना। (iv) निर्भयता।\n\n3. तकनीकें: उपवास, सविनय अवज्ञा, असहयोग, हड़ताल, शांतिपूर्ण मार्च (दांडी मार्च, 1930)।\n\n4. प्रमुख सत्याग्रह: चंपारण (1917), खेड़ा (1918), रॉलेट (1919), नमक सत्याग्रह (1930), भारत छोड़ो (1942)।"
        ]
      },
      {
        heading: ["Gandhi's Views on the State", "राज्य पर गांधी के विचार"],
        body: [
          "Gandhi's view of the State is perhaps the most radical in modern political thought.\n\n1. STATE AS 'SOULLESS MACHINE': The State is based on coercion and violence. 'The State represents violence in a concentrated and organized form.' It suppresses individual moral autonomy.\n\n2. MINIMAL STATE: Gandhi did not seek to capture or reform the State — he wanted to minimize it. 'That government is best which governs the least.'\n\n3. STATELESS DEMOCRACY (Enlightened Anarchy): Gandhi's ideal was a society of self-governing village communities where coercive authority withers away through moral self-regulation. 'The state perfects non-violence when it becomes superfluous.'\n\n4. SWARAJ (Self-Rule): Swaraj is not merely political independence but self-control and self-governance. 'Real Swaraj will come not by the acquisition of authority by a few but by the acquisition of the capacity by all to resist authority when it is abused.'\n\n5. DECENTRALIZATION (Oceanic Circle): Power flows outward from the individual to the village, not downward from the state. Society is an 'oceanic circle' of self-reliant villages — each village a complete republic.\n\n6. TRUSTEESHIP: Property owners are 'trustees' of wealth for the community. No forcible confiscation — moral persuasion transforms capitalists into trustees.",
          "1. राज्य 'आत्माहीन मशीन': हिंसा और दमन पर आधारित। व्यक्तिगत नैतिक स्वायत्तता को दबाता।\n\n2. न्यूनतम राज्य: 'जो सरकार सबसे कम शासन करे, वह सर्वोत्तम।'\n\n3. राज्यहीन लोकतंत्र (प्रबुद्ध अराजकता): स्व-शासित ग्राम समुदायों का समाज।\n\n4. स्वराज: राजनीतिक स्वतंत्रता नहीं, आत्म-नियंत्रण और आत्म-शासन।\n\n5. महासागरीय वृत्त: शक्ति व्यक्ति से गांव की ओर बहती है। आत्मनिर्भर गांव।\n\n6. ट्रस्टीशिप: पूंजीपति समुदाय के 'ट्रस्टी'। बलपूर्वक जब्ती नहीं — नैतिक अनुनय।"
        ]
      }
    ],
    quotes: [
      ["Gandhi: \"Non-violence is the greatest force at the disposal of mankind. It is mightier than the mightiest weapon of destruction.\"", "गांधी: \"अहिंसा मानवजाति की सबसे बड़ी शक्ति है। यह विनाश के सबसे शक्तिशाली हथियार से भी अधिक शक्तिशाली है।\""],
      ["Gandhi: \"The ideally non-violent state will be an ordered anarchy.\"", "गांधी: \"आदर्श अहिंसक राज्य एक व्यवस्थित अराजकता होगा।\""],
      ["O.P. Gauba: \"Gandhi's political thought represents the most comprehensive alternative to both Western liberalism and Marxism from an Indian civilizational perspective.\"", "ओ.पी. गाबा: \"गांधी का राजनीतिक विचार भारतीय सभ्यतागत दृष्टिकोण से पश्चिमी उदारवाद और मार्क्सवाद दोनों का सबसे व्यापक विकल्प है।\""],
      ["Dr. V.P. Verma: \"Gandhi was not a systematic political philosopher but a 'karma yogi' whose ideas emerged from action.\"", "डॉ. वी.पी. वर्मा: \"गांधी व्यवस्थित राजनीतिक दार्शनिक नहीं बल्कि 'कर्म योगी' थे जिनके विचार क्रिया से उभरे।\""],
    ],
    evaluation: [
      "Gandhi's ideas have been both celebrated and criticized. Strengths: (1) Satyagraha provided a moral alternative to both violent revolution and passive submission, successfully employed in India's freedom struggle and later inspiring the American Civil Rights Movement (Martin Luther King Jr.), anti-apartheid struggle (Mandela), and democratic movements worldwide. (2) His critique of industrial civilization anticipated ecological concerns. (3) Decentralization and Gram Swaraj influenced the 73rd Amendment (Panchayati Raj). Criticisms: (1) Ambedkar sharply criticized Gandhi's approach to caste, arguing his 'change of heart' approach was inadequate for structural oppression. (2) His economic ideas (charkha, village self-sufficiency) are seen as impractical for modern economies. (3) His ideal of a stateless society is dismissed as utopian. (4) His views on sex, diet, and celibacy have been criticized as puritanical. Yet, Gandhi's moral-political framework continues to inspire movements for justice, peace, and sustainability worldwide.",
      "गांधी के विचारों की प्रशंसा और आलोचना दोनों हुई। शक्तियां: (1) सत्याग्रह — हिंसक क्रांति और निष्क्रिय समर्पण का नैतिक विकल्प। MLK, मंडेला को प्रेरित किया। (2) औद्योगिक सभ्यता की आलोचना — पर्यावरणीय चिंताओं का पूर्वाभास। (3) 73वां संशोधन। आलोचनाएं: (1) आंबेडकर — जाति पर 'हृदय परिवर्तन' दृष्टिकोण अपर्याप्त। (2) आर्थिक विचार अव्यावहारिक। (3) राज्यहीन समाज काल्पनिक। (4) यौन, आहार पर विचार। फिर भी, गांधी न्याय, शांति और स्थिरता के आंदोलनों को प्रेरित करते हैं।"
    ],
    conclusion: [
      "Gandhi remains the most original and globally influential Indian political thinker. His synthesis of spirituality and politics, means and ends, individual morality and social transformation, offers a unique paradigm for political action. In an era of climate crisis, rising authoritarianism, and social fragmentation, Gandhi's insistence on non-violence, simplicity, decentralization, and moral responsibility has never been more relevant. His vision of Swaraj — self-rule at the individual, village, and national levels — challenges us to rethink power, development, and the very purpose of political life.",
      "गांधी सबसे मौलिक और वैश्विक रूप से प्रभावशाली भारतीय राजनीतिक विचारक हैं। आध्यात्मिकता और राजनीति, साधन और साध्य, व्यक्तिगत नैतिकता और सामाजिक परिवर्तन का उनका संश्लेषण राजनीतिक क्रिया का अद्वितीय प्रतिमान प्रस्तुत करता है। जलवायु संकट, बढ़ते सत्तावाद और सामाजिक विखंडन के युग में, गांधी का अहिंसा, सादगी, विकेंद्रीकरण और नैतिक उत्तरदायित्व पर जोर कभी इतना प्रासंगिक नहीं रहा।"
    ],
    shortQ: [
      ["What is Satyagraha? Explain its main principles.", "सत्याग्रह क्या है? इसके मुख्य सिद्धांत समझाएं।"],
      ["Discuss Gandhi's views on the State.", "राज्य पर गांधी के विचारों पर चर्चा करें।"],
      ["What is the concept of Sarvodaya?", "सर्वोदय की अवधारणा क्या है?"],
      ["Explain Gandhi's theory of Trusteeship.", "गांधी के ट्रस्टीशिप सिद्धांत की व्याख्या करें।"],
      ["What is Oceanic Circle in Gandhi's thought?", "गांधी के विचार में महासागरीय वृत्त क्या है?"],
    ],
    longQ: [
      ["Discuss the concept of Satyagraha as a method of political action.", "राजनीतिक कार्रवाई की विधि के रूप में सत्याग्रह की अवधारणा पर चर्चा करें।"],
      ["Critically examine Gandhi's views on the State and his ideal of stateless democracy.", "राज्य पर गांधी के विचारों और राज्यहीन लोकतंत्र के आदर्श का आलोचनात्मक परीक्षण करें।"],
      ["Discuss Gandhi's concept of Swaraj and its relevance today.", "गांधी की स्वराज अवधारणा और आज इसकी प्रासंगिकता पर चर्चा करें।"],
      ["Compare Gandhi and Ambedkar's views on caste.", "जाति पर गांधी और आंबेडकर के विचारों की तुलना करें।"],
      ["Analyze the relevance of Gandhian thought in the 21st century.", "21वीं सदी में गांधीवादी विचार की प्रासंगिकता का विश्लेषण करें।"],
    ],
    mcqs: [
      { q: ["Gandhi wrote 'Hind Swaraj' in which year?", "गांधी ने 'हिंद स्वराज' कब लिखा?"], opts: [["1905", "1905"], ["1909", "1909"], ["1915", "1915"], ["1920", "1920"]], correct: 1 },
      { q: ["Satyagraha literally means:", "सत्याग्रह का शाब्दिक अर्थ है:"], opts: [["Passive resistance", "निष्क्रिय प्रतिरोध"], ["Insistence on truth", "सत्य पर आग्रह"], ["Civil disobedience", "सविनय अवज्ञा"], ["Non-cooperation", "असहयोग"]], correct: 1 },
      { q: ["Gandhi's first Satyagraha in India was at:", "गांधी का भारत में पहला सत्याग्रह कहां था?"], opts: [["Kheda", "खेड़ा"], ["Champaran", "चंपारण"], ["Ahmedabad", "अहमदाबाद"], ["Bardoli", "बारडोली"]], correct: 1 },
      { q: ["'The state perfects non-violence when it becomes superfluous' — whose idea?", "'राज्य तब अहिंसा को पूर्ण करता है जब वह अनावश्यक हो जाता है' — किसका?"], opts: [["Nehru", "नेहरू"], ["Tagore", "टैगोर"], ["Gandhi", "गांधी"], ["Ambedkar", "आंबेडकर"]], correct: 2 },
      { q: ["Trusteeship theory is associated with:", "ट्रस्टीशिप सिद्धांत किससे जुड़ा है?"], opts: [["Nehru", "नेहरू"], ["Lohia", "लोहिया"], ["Gandhi", "गांधी"], ["J.P. Narayan", "जे.पी. नारायण"]], correct: 2 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Hind Swaraj (1909) — critique of modern civilization, alternative to Western model\n• Satyagraha: Truth + Non-violence + Self-suffering. Champaran (1917), Kheda (1918), Rowlatt (1919), Salt (1930), Quit India (1942)\n• Swaraj: Self-rule at individual, village, national levels\n• Sarvodaya: Welfare of all; influenced by Ruskin's 'Unto This Last'\n• Oceanic Circle — decentralized democracy\n• Trusteeship — alternative to both capitalism and communism\n• Gandhi vs Ambedkar: Poona Pact (1932), caste question\n• Gandhi vs Tagore: Non-cooperation debate (1921)\n• Gandhi's influence: MLK Jr., Nelson Mandela, Dalai Lama\n• 7 Social Sins: Politics without principles, wealth without work, etc.",
      "UGC NET फोकस:\n• हिंद स्वराज (1909)\n• सत्याग्रह — चंपारण, खेड़ा, नमक, भारत छोड़ो\n• स्वराज, सर्वोदय, ट्रस्टीशिप\n• महासागरीय वृत्त\n• गांधी बनाम आंबेडकर — पूना पैक्ट (1932)\n• गांधी बनाम टैगोर\n• 7 सामाजिक पाप"
    ],
    ugcQ: [
      ["Q: Hind Swaraj was originally written in which language? A: Gujarati (1909).", "प्र: हिंद स्वराज मूलतः किस भाषा में? उ: गुजराती (1909)।"],
      ["Q: Poona Pact (1932) was between Gandhi and? A: B.R. Ambedkar — on separate electorates for depressed classes.", "प्र: पूना पैक्ट (1932) गांधी और किसके बीच? उ: बी.आर. आंबेडकर — दलितों के पृथक निर्वाचन पर।"],
      ["Q: Gandhi's 'Experiments with Truth' was influenced by which book? A: Tolstoy's 'The Kingdom of God is Within You.'", "प्र: 'सत्य के प्रयोग' किस पुस्तक से प्रभावित? उ: टॉल्स्टॉय की 'The Kingdom of God is Within You'।"],
    ],
  },

  // TOPIC 7: Jay Prakash Narayan
  {
    id: 't7', num: 7,
    title: ["Jay Prakash Narayan: Party Less Democracy and Total Revolution", "जय प्रकाश नारायण: दलविहीन लोकतंत्र और संपूर्ण क्रांति"],
    introduction: [
      "Jay Prakash Narayan (1902-1979), popularly known as 'Lok Nayak' (People's Leader), is one of modern India's most dynamic political thinkers and activists. His intellectual journey is remarkable: from a Marxist revolutionary in his youth to a democratic socialist, then to a proponent of Sarvodaya (inspired by Gandhi and Vinoba Bhave), and finally to the leader of the 'Total Revolution' (Sampoorna Kranti) movement of 1974-75 that challenged Indira Gandhi's authoritarian rule and led to the Emergency (1975-77). J.P.'s political thought is characterized by his relentless critique of centralized power, whether in the state, political parties, or economic institutions. His concept of 'Party-less Democracy' (Partyless Democracy) and 'Total Revolution' represent a radical vision of decentralized, participatory governance rooted in Gandhian principles adapted to modern conditions.",
      "जय प्रकाश नारायण (1902-1979), 'लोक नायक', आधुनिक भारत के सबसे गतिशील राजनीतिक विचारकों और कार्यकर्ताओं में से एक हैं। उनकी बौद्धिक यात्रा उल्लेखनीय है: युवावस्था में मार्क्सवादी क्रांतिकारी से लोकतांत्रिक समाजवादी, फिर सर्वोदय (गांधी और विनोबा भावे से प्रेरित) के समर्थक, और अंततः 1974-75 के 'संपूर्ण क्रांति' आंदोलन के नेता। जे.पी. का राजनीतिक विचार केंद्रीकृत शक्ति की निरंतर आलोचना द्वारा चिह्नित है। 'दलविहीन लोकतंत्र' और 'संपूर्ण क्रांति' की उनकी अवधारणाएं गांधीवादी सिद्धांतों पर आधारित विकेंद्रीकृत, सहभागी शासन की क्रांतिकारी दृष्टि प्रस्तुत करती हैं।"
    ],
    concepts: [
      {
        heading: ["Party-less Democracy (Partyless Democracy)", "दलविहीन लोकतंत्र"],
        body: [
          "J.P. argued that political parties, far from being instruments of democracy, have become obstacles to genuine democratic participation.\n\n1. CRITIQUE OF PARTY SYSTEM: (i) Parties are oligarchic — power concentrated in a few leaders (Michels' Iron Law). (ii) They divide society on caste, communal, and factional lines. (iii) They prioritize winning elections over serving the people. (iv) They breed corruption through electoral funding.\n\n2. PARTYLESS DEMOCRACY MODEL:\n• Local Level (Gram Sabha): Direct democracy — all adult villagers make decisions by consensus. No party labels.\n• Intermediate Level (Panchayat Samiti, Zila Parishad): Elected representatives but WITHOUT party affiliation. Representatives chosen on individual merit.\n• National Level (Lok Sabha): Members elected without party tickets. Government formed by consensus, not majority party rule.\n\n3. MECHANISM: Candidates stand as individuals. Voters choose based on personal integrity and capability, not party loyalty. The legislature is composed of independent representatives who form a 'national government' by consensus.\n\n4. INSPIRATION: Influenced by Gandhi's Gram Swaraj, Vinoba Bhave's Bhoodan-Gramdan movement, and the ancient Indian tradition of panchayat-based self-governance.",
          "1. दल प्रणाली की आलोचना: (i) कुलीनतंत्रीय — शक्ति कुछ नेताओं में। (ii) समाज को जाति और गुटों में बांटते। (iii) चुनाव जीतने को जनसेवा से ऊपर रखते। (iv) चुनावी वित्तपोषण से भ्रष्टाचार।\n\n2. दलविहीन लोकतंत्र मॉडल:\n• स्थानीय स्तर (ग्राम सभा): सर्वसम्मति से प्रत्यक्ष निर्णय।\n• मध्यवर्ती स्तर: बिना दल संबद्धता के निर्वाचित प्रतिनिधि।\n• राष्ट्रीय स्तर: बिना दल टिकट के निर्वाचित सदस्य — सर्वसम्मति सरकार।\n\n3. तंत्र: उम्मीदवार व्यक्तिगत योग्यता पर चुने जाएं।\n\n4. प्रेरणा: गांधी का ग्राम स्वराज, विनोबा का भूदान-ग्रामदान।"
        ]
      },
      {
        heading: ["Total Revolution (Sampoorna Kranti)", "संपूर्ण क्रांति"],
        body: [
          "J.P.'s most famous political call — 'Total Revolution' — was launched in 1974 from Patna against the Indira Gandhi government.\n\n1. MEANING: Total Revolution means transformation of ALL aspects of society — not just political but social, economic, cultural, educational, and moral. It is a revolution of values, institutions, and consciousness.\n\n2. SEVEN DIMENSIONS: (i) Social Revolution — against caste, gender, and communal inequalities. (ii) Economic Revolution — against concentration of wealth, for decentralized economy. (iii) Political Revolution — against corruption, for genuine democracy. (iv) Cultural Revolution — against consumerism, for Indian cultural values. (v) Educational Revolution — for creative, value-based education. (vi) Ideological/Intellectual Revolution — against dogmatism. (vii) Spiritual Revolution — for moral regeneration.\n\n3. METHODS: Non-violent mass mobilization — students, youth, farmers, workers. Peaceful protests, civil disobedience, gherao (encirclement). NOT armed revolution — firmly within Gandhian tradition.\n\n4. IMPACT: Led to the declaration of Emergency (1975) by Indira Gandhi, J.P.'s arrest, and eventually the formation of the first non-Congress government (Janata Party, 1977).\n\n5. LOKSHAKTI vs RAJSHAKTI: J.P. distinguished between Lokshakti (people's power) and Rajshakti (state power). Total Revolution aimed to empower Lokshakti against the excesses of Rajshakti.",
          "1. अर्थ: समाज के सभी पहलुओं का रूपांतरण — राजनीतिक, सामाजिक, आर्थिक, सांस्कृतिक, शैक्षिक, नैतिक।\n\n2. सात आयाम: सामाजिक, आर्थिक, राजनीतिक, सांस्कृतिक, शैक्षिक, वैचारिक/बौद्धिक, आध्यात्मिक क्रांति।\n\n3. विधियां: अहिंसक जन लामबंदी — छात्र, युवा, किसान, श्रमिक। शांतिपूर्ण प्रदर्शन, सविनय अवज्ञा।\n\n4. प्रभाव: आपातकाल (1975), जे.पी. की गिरफ्तारी, पहली गैर-कांग्रेस सरकार (1977)।\n\n5. लोकशक्ति बनाम राजशक्ति: जनता की शक्ति को राज्य की शक्ति के विरुद्ध सशक्त करना।"
        ]
      }
    ],
    quotes: [
      ["J.P. Narayan: \"Total revolution is a combination of seven revolutions — social, economic, political, cultural, ideological, educational, and spiritual.\"", "जे.पी. नारायण: \"संपूर्ण क्रांति सात क्रांतियों का संयोजन है — सामाजिक, आर्थिक, राजनीतिक, सांस्कृतिक, वैचारिक, शैक्षिक और आध्यात्मिक।\""],
      ["J.P. Narayan: \"I am not interested in either the stability of Indira Gandhi or her instability. I am interested in the stability of the country.\"", "जे.पी. नारायण: \"मुझे न तो इंदिरा गांधी की स्थिरता में रुचि है, न अस्थिरता में। मुझे देश की स्थिरता में रुचि है।\""],
      ["O.P. Gauba: \"J.P. Narayan represents the most systematic attempt to combine Gandhi's moral vision with the organizational methods of modern mass politics.\"", "ओ.पी. गाबा: \"जे.पी. नारायण गांधी की नैतिक दृष्टि को आधुनिक जन राजनीति के संगठनात्मक तरीकों के साथ जोड़ने का सबसे व्यवस्थित प्रयास प्रस्तुत करते हैं।\""],
      ["Dr. V.P. Verma: \"J.P.'s partyless democracy is a creative extension of Gandhian thought into the realm of modern democratic institutions.\"", "डॉ. वी.पी. वर्मा: \"जे.पी. का दलविहीन लोकतंत्र गांधीवादी विचार का आधुनिक लोकतांत्रिक संस्थाओं के क्षेत्र में रचनात्मक विस्तार है।\""],
    ],
    evaluation: [
      "J.P.'s ideas have been both influential and controversial. Strengths: (1) His critique of political parties anticipated the decline of party credibility and rise of anti-establishment sentiment. (2) Total Revolution successfully mobilized mass opposition to authoritarianism, defending Indian democracy during its gravest crisis (Emergency). (3) Partyless democracy addresses genuine problems of corruption, criminalization, and oligarchy in parties. Criticisms: (1) Partyless democracy is dismissed as impractical — modern mass democracy requires political parties for organization, interest aggregation, and accountability. (2) His movement lacked a clear alternative economic or governance program beyond opposition. (3) Some argue his movement inadvertently strengthened communal forces (RSS/Jana Sangh) that later challenged secularism. (4) His eclectic ideology — combining Marxism, Sarvodaya, and democratic socialism — lacks theoretical coherence. Yet J.P. remains a symbol of principled political opposition and the power of non-violent mass mobilization.",
      "जे.पी. के विचार प्रभावशाली और विवादास्पद दोनों। शक्तियां: (1) दल प्रणाली की आलोचना। (2) संपूर्ण क्रांति ने आपातकाल का विरोध कर लोकतंत्र बचाया। (3) दलविहीन लोकतंत्र भ्रष्टाचार की वास्तविक समस्याओं को संबोधित करता। आलोचनाएं: (1) दलविहीन लोकतंत्र अव्यावहारिक — आधुनिक जन लोकतंत्र में दल आवश्यक। (2) आंदोलन में स्पष्ट वैकल्पिक कार्यक्रम का अभाव। (3) सांप्रदायिक ताकतों को मजबूत किया। (4) सैद्धांतिक सुसंगतता का अभाव। फिर भी, जे.पी. सैद्धांतिक विपक्ष और अहिंसक जन लामबंदी के प्रतीक हैं।"
    ],
    conclusion: [
      "Jay Prakash Narayan's political thought represents a bridge between Gandhian idealism and modern democratic practice. His critique of centralized power — whether in parties, the state, or the economy — remains urgently relevant in an era of growing democratic deficits, political corruption, and citizen alienation. The concept of Total Revolution, while utopian in its comprehensiveness, reminds us that genuine democracy requires transformation beyond electoral politics — in social relations, economic structures, and moral values. J.P.'s life demonstrates that ideas, combined with courageous action, can challenge and change the course of a nation's political history.",
      "जय प्रकाश नारायण का राजनीतिक विचार गांधीवादी आदर्शवाद और आधुनिक लोकतांत्रिक व्यवहार के बीच सेतु है। केंद्रीकृत शक्ति की उनकी आलोचना आज बढ़ते लोकतांत्रिक घाटे, राजनीतिक भ्रष्टाचार और नागरिक अलगाव के युग में अत्यंत प्रासंगिक है। संपूर्ण क्रांति हमें याद दिलाती है कि वास्तविक लोकतंत्र के लिए चुनावी राजनीति से परे — सामाजिक संबंधों, आर्थिक संरचनाओं और नैतिक मूल्यों में रूपांतरण आवश्यक है। जे.पी. का जीवन दर्शाता है कि विचार, साहसिक कार्रवाई के साथ मिलकर, राष्ट्र के राजनीतिक इतिहास की दिशा बदल सकते हैं।"
    ],
    shortQ: [
      ["Explain J.P. Narayan's concept of Partyless Democracy.", "जे.पी. नारायण की दलविहीन लोकतंत्र की अवधारणा समझाएं।"],
      ["What is Total Revolution (Sampoorna Kranti)?", "संपूर्ण क्रांति क्या है?"],
      ["What are the seven dimensions of Total Revolution?", "संपूर्ण क्रांति के सात आयाम क्या हैं?"],
      ["Distinguish between Lokshakti and Rajshakti in J.P.'s thought.", "जे.पी. के विचार में लोकशक्ति और राजशक्ति में अंतर करें।"],
      ["What was J.P.'s role during the Emergency (1975-77)?", "आपातकाल (1975-77) में जे.पी. की भूमिका क्या थी?"],
    ],
    longQ: [
      ["Critically examine J.P. Narayan's concept of Partyless Democracy.", "जे.पी. नारायण की दलविहीन लोकतंत्र की अवधारणा का आलोचनात्मक परीक्षण करें।"],
      ["Discuss J.P. Narayan's Total Revolution and its impact on Indian politics.", "जे.पी. नारायण की संपूर्ण क्रांति और भारतीय राजनीति पर इसके प्रभाव पर चर्चा करें।"],
      ["Compare J.P. Narayan's political ideas with those of Gandhi and Lohia.", "जे.पी. नारायण के राजनीतिक विचारों की गांधी और लोहिया से तुलना करें।"],
      ["Analyze the relevance of J.P.'s ideas in contemporary Indian politics.", "समकालीन भारतीय राजनीति में जे.पी. के विचारों की प्रासंगिकता का विश्लेषण करें।"],
      ["Discuss J.P. Narayan's contribution to Indian democracy.", "भारतीय लोकतंत्र में जे.पी. नारायण के योगदान पर चर्चा करें।"],
    ],
    mcqs: [
      { q: ["J.P. Narayan's 'Total Revolution' was launched in:", "जे.पी. नारायण की 'संपूर्ण क्रांति' कब शुरू हुई?"], opts: [["1972", "1972"], ["1973", "1973"], ["1974", "1974"], ["1975", "1975"]], correct: 2 },
      { q: ["J.P. Narayan's concept of democracy is called:", "जे.पी. नारायण की लोकतंत्र अवधारणा कहलाती है:"], opts: [["Parliamentary Democracy", "संसदीय"], ["Presidential Democracy", "राष्ट्रपति"], ["Party-less Democracy", "दलविहीन"], ["Direct Democracy", "प्रत्यक्ष"]], correct: 2 },
      { q: ["J.P. Narayan was influenced by which Gandhian concept?", "जे.पी. नारायण किस गांधीवादी अवधारणा से प्रभावित थे?"], opts: [["Satyagraha", "सत्याग्रह"], ["Sarvodaya", "सर्वोदय"], ["Swadeshi", "स्वदेशी"], ["Trusteeship", "ट्रस्टीशिप"]], correct: 1 },
      { q: ["J.P. Narayan formed which organization in 1948?", "जे.पी. नारायण ने 1948 में कौन सा संगठन बनाया?"], opts: [["Congress Socialist Party", "कांग्रेस सोशलिस्ट"], ["Praja Socialist Party", "प्रजा सोशलिस्ट"], ["Socialist Party", "सोशलिस्ट पार्टी"], ["Janata Party", "जनता पार्टी"]], correct: 1 },
      { q: ["J.P. Narayan's movement led to the formation of which government?", "जे.पी. के आंदोलन से कौन सी सरकार बनी?"], opts: [["Congress (I)", "कांग्रेस (I)"], ["Janata Party (1977)", "जनता पार्टी (1977)"], ["BJP", "BJP"], ["United Front", "संयुक्त मोर्चा"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• J.P.'s ideological journey: Marxist → Socialist → Sarvodaya → Total Revolution\n• Congress Socialist Party (CSP, 1934) — J.P. as founder member\n• Socialist Party (1948), Praja Socialist Party (PSP, 1952)\n• Bhoodan-Gramdan movement with Vinoba Bhave — J.P. as 'first sarvodaya worker'\n• Total Revolution (Sampoorna Kranti) — launched June 1974, Patna\n• Emergency (1975-77) — J.P.'s arrest, formation of Janata Party\n• Partyless Democracy — critique of party system, consensus-based governance\n• Lokniti (people's politics) vs Rajniti (state politics)\n• Key works: 'Why Socialism?' (1936), 'From Socialism to Sarvodaya' (1957), 'Prison Diary'",
      "UGC NET फोकस:\n• वैचारिक यात्रा: मार्क्सवादी → समाजवादी → सर्वोदय → संपूर्ण क्रांति\n• CSP (1934), सोशलिस्ट पार्टी (1948), PSP (1952)\n• भूदान-ग्रामदान आंदोलन\n• संपूर्ण क्रांति (जून 1974, पटना)\n• आपातकाल — जनता पार्टी गठन\n• दलविहीन लोकतंत्र\n• लोकनीति बनाम राजनीति\n• 'Why Socialism?' (1936), 'प्रिज़न डायरी'"
    ],
    ugcQ: [
      ["Q: J.P. Narayan's 'From Socialism to Sarvodaya' was published in? A: 1957.", "प्र: 'From Socialism to Sarvodaya' कब प्रकाशित? उ: 1957।"],
      ["Q: What is the difference between Lokniti and Rajniti? A: Lokniti = people's politics (decentralized, participatory); Rajniti = state politics (centralized, party-based).", "प्र: लोकनीति और राजनीति में अंतर? उ: लोकनीति = जनता की राजनीति (विकेंद्रित, सहभागी); राजनीति = राज्य की राजनीति।"],
      ["Q: Emergency was declared in which year? A: June 25, 1975 (to March 21, 1977).", "प्र: आपातकाल कब घोषित? उ: 25 जून 1975 (से 21 मार्च 1977)।"],
    ],
  },

  // TOPIC 8: B.R. Ambedkar
  {
    id: 't8', num: 8,
    title: ["B.R. Ambedkar: Social Democracy, Annihilation of Caste", "बी.आर. अंबेडकर: सामाजिक लोकतंत्र, जाति का विनाश"],
    introduction: [
      "Dr. Bhimrao Ramji Ambedkar (1891-1956), the chief architect of the Indian Constitution, is one of the most profound political thinkers of modern India. Born into an 'untouchable' Mahar family, Ambedkar's life was a struggle against caste oppression. Educated at Columbia University (PhD, 1927) and the London School of Economics (DSc, 1923), he combined rigorous Western scholarship with deep engagement with Indian social realities. Ambedkar's political thought centers on three interconnected concepts: (1) Social Democracy — political democracy must be accompanied by social and economic democracy, (2) Annihilation of Caste — the caste system must be destroyed for India to become a genuine nation, and (3) Constitutionalism — the Constitution as an instrument of social transformation protecting the rights of the marginalized. His famous statement — 'Political democracy cannot last unless there lies at the base of it social democracy' — encapsulates his entire political philosophy.",
      "डॉ. भीमराव रामजी आंबेडकर (1891-1956), भारतीय संविधान के प्रमुख निर्माता, आधुनिक भारत के सबसे गहन राजनीतिक विचारकों में से एक हैं। एक 'अछूत' महार परिवार में जन्मे, उनका जीवन जाति उत्पीड़न के विरुद्ध संघर्ष था। कोलंबिया विश्वविद्यालय (PhD, 1927) और लंदन स्कूल ऑफ इकोनॉमिक्स (DSc, 1923) से शिक्षित, उन्होंने पश्चिमी विद्वत्ता को भारतीय सामाजिक वास्तविकताओं से जोड़ा। आंबेडकर का राजनीतिक विचार तीन अवधारणाओं पर केंद्रित: (1) सामाजिक लोकतंत्र — राजनीतिक लोकतंत्र के साथ सामाजिक-आर्थिक लोकतंत्र, (2) जाति का विनाश, (3) संविधानवाद — हाशिए के लोगों के अधिकारों की रक्षा करने वाला सामाजिक परिवर्तन का उपकरण।"
    ],
    concepts: [
      {
        heading: ["Social Democracy", "सामाजिक लोकतंत्र"],
        body: [
          "Ambedkar's most important political concept is that democracy must be three-dimensional — political, social, and economic.\n\n1. TRINITY OF DEMOCRACY: 'Political democracy cannot last unless there lies at the base of it social democracy. What does social democracy mean? It means a way of life which recognizes liberty, equality and fraternity as the principles of life.'\n\n2. CRITIQUE OF MERE POLITICAL DEMOCRACY: India adopted political democracy (one person, one vote) but retained social and economic inequality. Without social democracy — the abolition of caste hierarchy and untouchability — political democracy is a 'sham.'\n\n3. ECONOMIC DEMOCRACY: Ambedkar advocated state socialism, nationalization of key industries, and land reforms. He included Directive Principles (Art 38, 39) in the Constitution to guide the State toward economic justice.\n\n4. FRATERNITY: Ambedkar emphasized fraternity (borrowed from the French Revolution: Liberty, Equality, Fraternity) as essential for social cohesion. Without fraternity, liberty and equality become 'shallow.' Caste destroys fraternity.\n\n5. CONSTITUTIONAL MORALITY: Respect for constitutional values — rule of law, fundamental rights, democratic procedures — must become part of the national ethos. 'Constitutional morality is not a natural sentiment. It has to be cultivated.'",
          "1. लोकतंत्र की त्रिमूर्ति: राजनीतिक, सामाजिक और आर्थिक लोकतंत्र।\n\n2. केवल राजनीतिक लोकतंत्र की आलोचना: सामाजिक लोकतंत्र — जाति पदानुक्रम और अस्पृश्यता का उन्मूलन — के बिना राजनीतिक लोकतंत्र 'ढोंग'।\n\n3. आर्थिक लोकतंत्र: राज्य समाजवाद, प्रमुख उद्योगों का राष्ट्रीयकरण। DPSP (अनु. 38, 39)।\n\n4. बंधुता: स्वतंत्रता, समानता, बंधुता — फ्रांसीसी क्रांति से। जाति बंधुता को नष्ट करती है।\n\n5. संवैधानिक नैतिकता: संवैधानिक मूल्यों का सम्मान राष्ट्रीय लोकाचार बनना चाहिए।"
        ]
      },
      {
        heading: ["Annihilation of Caste", "जाति का विनाश"],
        body: [
          "Ambedkar's 'Annihilation of Caste' (1936) is one of the most powerful critiques of the caste system ever written.\n\n1. CASTE AS A SYSTEM: Caste is not merely a division of labor but a 'division of laborers' — a graded hierarchy where each caste is assigned a fixed status. It is maintained through endogamy (marriage within caste) and the 'closed door' policy.\n\n2. CASTE AND HINDUISM: Ambedkar argued that caste is integral to Hinduism, not an aberration. The Vedas and Smritis (especially Manusmriti) sanctify caste. Reform of Hinduism is impossible without destroying the religious sanction for caste. He publicly burned the Manusmriti (1927).\n\n3. CRITIQUE OF GANDHI: Ambedkar sharply disagreed with Gandhi. For Gandhi, caste reform meant 'uplifting' untouchables (Harijans) within the varna system. For Ambedkar, the varna system itself must be abolished. The Poona Pact (1932), where Gandhi fasted against separate electorates for depressed classes, was seen by Ambedkar as a betrayal.\n\n4. CONVERSION TO BUDDHISM: In 1956, Ambedkar converted to Buddhism along with 500,000 followers. He chose Buddhism because it rejected caste, emphasized reason and morality, and was indigenous to India. This was 'liberation theology' in action.\n\n5. CONSTITUTIONAL REMEDIES: Ambedkar ensured constitutional protections: Art 17 (abolition of untouchability), Art 15 (prohibition of discrimination), Art 16 (equal opportunity in public employment), reservation in legislatures and education (Art 330, 332, 335).",
          "1. जाति एक प्रणाली: 'श्रमिकों का विभाजन' — क्रमबद्ध पदानुक्रम। अंतर्विवाह और 'बंद दरवाजा'।\n\n2. जाति और हिंदू धर्म: जाति हिंदू धर्म का अभिन्न अंग। मनुस्मृति का सार्वजनिक दहन (1927)।\n\n3. गांधी की आलोचना: वर्ण व्यवस्था का उत्थान नहीं, उन्मूलन। पूना पैक्ट (1932) — विश्वासघात।\n\n4. बौद्ध धर्म में रूपांतरण (1956): 5 लाख अनुयायियों के साथ। कारण: जाति अस्वीकार, तर्क और नैतिकता।\n\n5. संवैधानिक संरक्षण: अनु. 17 (अस्पृश्यता उन्मूलन), 15, 16, आरक्षण (330, 332, 335)।"
        ]
      }
    ],
    quotes: [
      ["Ambedkar: \"Political democracy cannot last unless there lies at the base of it social democracy.\" — Constituent Assembly Speech, Nov 25, 1949", "आंबेडकर: \"राजनीतिक लोकतंत्र तब तक नहीं टिक सकता जब तक उसके आधार पर सामाजिक लोकतंत्र न हो।\""],
      ["Ambedkar: \"I like the religion that teaches liberty, equality and fraternity.\"", "आंबेडकर: \"मुझे वह धर्म पसंद है जो स्वतंत्रता, समानता और बंधुता सिखाता है।\""],
      ["Ambedkar: \"Caste is not a physical object like a wall of bricks... Caste is a notion; it is a state of the mind.\" — Annihilation of Caste", "आंबेडकर: \"जाति ईंटों की दीवार जैसी भौतिक वस्तु नहीं... जाति एक धारणा है; यह मन की अवस्था है।\""],
      ["O.P. Gauba: \"Ambedkar's greatness lies in synthesizing the role of a social revolutionary with that of a constitutional architect.\"", "ओ.पी. गाबा: \"आंबेडकर की महानता सामाजिक क्रांतिकारी और संवैधानिक निर्माता की भूमिका के संश्लेषण में निहित है।\""],
    ],
    evaluation: [
      "Ambedkar's legacy is immense. Strengths: (1) His theoretical analysis of caste as a system of graded inequality remains unmatched. (2) He provided the constitutional framework for social justice — reservation, anti-discrimination laws, SC/ST Commission. (3) His critique of Hinduism's sanction of caste sparked necessary self-reflection. (4) His emphasis on fraternity and constitutional morality offers a counter to majoritarian nationalism. Criticisms: (1) Some argue his conversion to Buddhism was essentially political, not spiritual. (2) His advocacy of state socialism is seen as outdated in the era of liberalization. (3) Critics on the right accuse him of being anti-Hindu; critics on the left argue his constitutionalism was too moderate. However, Ambedkar's vision of social democracy — that formal political equality means nothing without substantive social equality — remains the most powerful moral and political challenge facing Indian democracy today.",
      "आंबेडकर की विरासत विशाल। शक्तियां: (1) जाति का सैद्धांतिक विश्लेषण। (2) सामाजिक न्याय का संवैधानिक ढांचा। (3) हिंदू धर्म की आलोचना। (4) बंधुता और संवैधानिक नैतिकता। आलोचनाएं: (1) रूपांतरण राजनीतिक। (2) राज्य समाजवाद पुराना। (3) बहुत उदारवादी। फिर भी, आंबेडकर की सामाजिक लोकतंत्र की दृष्टि — कि औपचारिक राजनीतिक समानता सामाजिक समानता के बिना अर्थहीन — भारतीय लोकतंत्र की सबसे शक्तिशाली चुनौती है।"
    ],
    conclusion: [
      "B.R. Ambedkar is not merely a Dalit icon but one of India's greatest political philosophers. His synthesis of Western liberal democracy with the Indian struggle for social justice created a unique framework — constitutionalism as an instrument of social revolution. His insistence that democracy requires the 'annihilation of caste' — the destruction of the graded inequality that denies fraternity — remains the unfinished agenda of the Indian Republic. As India grapples with persistent caste violence, rising inequality, and challenges to constitutional values, Ambedkar's thought provides both a moral compass and a political program. His famous warning — 'We are going to enter into a life of contradictions... we must remove this contradiction at the earliest possible moment' — echoes with urgent relevance today.",
      "बी.आर. आंबेडकर केवल दलित प्रतीक नहीं बल्कि भारत के महानतम राजनीतिक दार्शनिकों में से एक हैं। पश्चिमी उदारवादी लोकतंत्र और भारतीय सामाजिक न्याय संघर्ष का उनका संश्लेषण एक अद्वितीय ढांचा बनाता है — सामाजिक क्रांति के उपकरण के रूप में संविधानवाद। लोकतंत्र के लिए 'जाति का विनाश' आवश्यक है — यह भारतीय गणतंत्र का अधूरा एजेंडा है। लगातार जाति हिंसा, बढ़ती असमानता और संवैधानिक मूल्यों की चुनौतियों से जूझते भारत में, आंबेडकर का विचार नैतिक दिशा और राजनीतिक कार्यक्रम दोनों प्रदान करता है।"
    ],
    shortQ: [
      ["What is Ambedkar's concept of Social Democracy?", "आंबेडकर की सामाजिक लोकतंत्र की अवधारणा क्या है?"],
      ["Why did Ambedkar call for the 'Annihilation of Caste'?", "आंबेडकर ने 'जाति का विनाश' क्यों कहा?"],
      ["What is Constitutional Morality according to Ambedkar?", "आंबेडकर के अनुसार संवैधानिक नैतिकता क्या है?"],
      ["Why did Ambedkar convert to Buddhism?", "आंबेडकर ने बौद्ध धर्म क्यों अपनाया?"],
      ["Differentiate between Ambedkar's and Gandhi's views on caste.", "जाति पर आंबेडकर और गांधी के विचारों में अंतर करें।"],
    ],
    longQ: [
      ["Discuss Ambedkar's concept of Social Democracy and its relevance in contemporary India.", "आंबेडकर की सामाजिक लोकतंत्र की अवधारणा और समकालीन भारत में इसकी प्रासंगिकता पर चर्चा करें।"],
      ["Critically examine Ambedkar's 'Annihilation of Caste' as a political text.", "एक राजनीतिक पाठ के रूप में आंबेडकर के 'जाति का विनाश' का आलोचनात्मक परीक्षण करें।"],
      ["Compare and contrast the political ideas of Ambedkar and Gandhi.", "आंबेडकर और गांधी के राजनीतिक विचारों की तुलना और विरोध करें।"],
      ["Discuss Ambedkar's contribution to Indian constitutionalism.", "भारतीय संविधानवाद में आंबेडकर के योगदान पर चर्चा करें।"],
      ["Analyze Ambedkar's views on the relationship between caste, democracy, and social justice.", "जाति, लोकतंत्र और सामाजिक न्याय के संबंध पर आंबेडकर के विचारों का विश्लेषण करें।"],
    ],
    mcqs: [
      { q: ["'Annihilation of Caste' was written in:", "'जाति का विनाश' कब लिखा गया?"], opts: [["1932", "1932"], ["1936", "1936"], ["1942", "1942"], ["1947", "1947"]], correct: 1 },
      { q: ["Ambedkar converted to Buddhism in:", "आंबेडकर ने बौद्ध धर्म कब अपनाया?"], opts: [["1947", "1947"], ["1950", "1950"], ["1956", "1956"], ["1960", "1960"]], correct: 2 },
      { q: ["Which Article abolishes untouchability?", "कौन सा अनुच्छेद अस्पृश्यता समाप्त करता है?"], opts: [["Art 14", "अनु. 14"], ["Art 15", "अनु. 15"], ["Art 16", "अनु. 16"], ["Art 17", "अनु. 17"]], correct: 3 },
      { q: ["Ambedkar called which Article the 'heart and soul' of the Constitution?", "आंबेडकर ने किसे संविधान का 'हृदय और आत्मा' कहा?"], opts: [["Art 14", "अनु. 14"], ["Art 21", "अनु. 21"], ["Art 32", "अनु. 32"], ["Art 368", "अनु. 368"]], correct: 2 },
      { q: ["Poona Pact (1932) was between:", "पूना पैक्ट (1932) किनके बीच हुआ?"], opts: [["Gandhi and Nehru", "गांधी-नेहरू"], ["Gandhi and Ambedkar", "गांधी-आंबेडकर"], ["Ambedkar and Nehru", "आंबेडकर-नेहरू"], ["Gandhi and Jinnah", "गांधी-जिन्ना"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Annihilation of Caste (1936) — undelivered speech for Jat-Pat-Todak Mandal\n• Who Were the Shudras? (1946), The Untouchables (1948), Buddha and His Dhamma (1957)\n• Social Democracy — liberty, equality, fraternity as principles of life\n• Constitutional morality — cultivated, not natural\n• Art 32 — 'heart and soul' of the Constitution\n• Poona Pact (1932) — separate electorates vs reserved seats\n• Mahad Satyagraha (1927) — right to access public water\n• Conversion to Buddhism (Oct 14, 1956) — Deekshabhoomi, Nagpur\n• Ambedkar vs Gandhi: caste, varna, separate electorates debate\n• Ambedkar's role in Constitution: Chairman of Drafting Committee\n• Hindu Code Bill (1951-56) — women's rights in Hindu personal law",
      "UGC NET फोकस:\n• जाति का विनाश (1936)\n• हू वर द शूद्राज? (1946), द अनटचेबल्स (1948)\n• सामाजिक लोकतंत्र\n• संवैधानिक नैतिकता\n• अनु. 32 — 'हृदय और आत्मा'\n• पूना पैक्ट (1932)\n• महाड़ सत्याग्रह (1927)\n• बौद्ध धर्म रूपांतरण (14 अक्टूबर 1956)\n• मसौदा समिति अध्यक्ष\n• हिंदू कोड बिल"
    ],
    ugcQ: [
      ["Q: Which body did Ambedkar chair in the Constituent Assembly? A: The Drafting Committee.", "प्र: आंबेडकर ने संविधान सभा में किस समिति की अध्यक्षता की? उ: मसौदा समिति।"],
      ["Q: Mahad Satyagraha (1927) was for? A: Right of untouchables to access public water (Chavdar Lake).", "प्र: महाड़ सत्याग्रह (1927) किस लिए? उ: अछूतों का सार्वजनिक जल (चवदार तालाब) तक पहुंच का अधिकार।"],
      ["Q: Ambedkar's last book? A: 'The Buddha and His Dhamma' (1957, posthumous).", "प्र: आंबेडकर की अंतिम पुस्तक? उ: 'द बुद्धा एंड हिज़ धम्मा' (1957)।"],
    ],
  },
];

export default function DetailedNotesF102() {
  const { language } = useAppStore();
  const t = (en: string, hi: string) => language === 'en' ? en : hi;
  const [expanded, setExpanded] = useState<Set<string>>(new Set(['t1']));
  const [showMCQAnswer, setShowMCQAnswer] = useState<Set<string>>(new Set());

  const toggle = (id: string) => setExpanded(prev => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });

  const toggleMCQ = (tid: string, idx: number) => {
    const key = `${tid}-${idx}`;
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
              PSC-C-102: Indian Political Thought
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t('PG Semester I — Detailed Bilingual Notes', 'PG सेमेस्टर I — विस्तृत द्विभाषी नोट्स')}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl p-5 text-white mb-8">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">{t('Paper Code: PSC-C-102', 'पेपर कोड: PSC-C-102')}</span>
          </div>
          <p className="text-sm text-white/80">
            {t('5 Credits | 60 Lectures + 15 Tutorials | Full Marks: 100 | 8 Topics — Kautilya to Ambedkar', '5 क्रेडिट | 60 लेक्चर + 15 ट्यूटोरियल | पूर्णांक: 100 | 8 विषय — कौटिल्य से आंबेडकर')}
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
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {topic.num}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold text-gray-900 dark:text-white text-base md:text-lg text-justify">{t(topic.title[0], topic.title[1])}</h2>
                  <span className="text-xs text-gray-400">{t('5-part structure | MCQs | UGC NET Prep', '5-भाग संरचना | MCQ | UGC NET')}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${expanded.has(topic.id) ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {expanded.has(topic.id) && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-gray-100 dark:border-gray-800">
                    <div className="p-5 space-y-6">

                      <section>
                        <h3 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-xs">1</span>
                          {t('INTRODUCTION', 'परिचय')}
                        </h3>
                        <p className="text-base text-justify text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                          {t(topic.introduction[0], topic.introduction[1])}
                        </p>
                      </section>

                      <section>
                        <h3 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-xs">2</span>
                          {t('CORE CONCEPTS', 'मुख्य सिद्धांत')}
                        </h3>
                        {topic.concepts.map((c, i) => (
                          <div key={i} className="mb-4 last:mb-0">
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">{t(c.heading[0], c.heading[1])}</h4>
                            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-sm leading-relaxed whitespace-pre-line text-gray-700 dark:text-gray-300">
                              {t(c.body[0], c.body[1])}
                            </div>
                          </div>
                        ))}
                      </section>

                      <section>
                        <h3 className="text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-xs">3</span>
                          {t('SCHOLARLY QUOTES & BOOK REFERENCES', 'विद्वत उद्धरण और पुस्तक संदर्भ')}
                        </h3>
                        <div className="space-y-2">
                          {topic.quotes.map((q, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/20">
                              <Quote className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                              <p className="text-sm text-purple-900 dark:text-purple-200 italic">{t(q[0], q[1])}</p>
                            </div>
                          ))}
                        </div>
                      </section>

                      <section>
                        <h3 className="text-sm font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-xs">4</span>
                          {t('CRITICAL EVALUATION', 'आलोचनात्मक मूल्यांकन')}
                        </h3>
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/20">
                          <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">{t(topic.evaluation[0], topic.evaluation[1])}</p>
                        </div>
                      </section>

                      <section>
                        <h3 className="text-sm font-bold text-green-600 dark:text-green-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-xs">5</span>
                          {t('CONCLUSION', 'निष्कर्ष')}
                        </h3>
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-800/20">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-green-900 dark:text-green-200 leading-relaxed">{t(topic.conclusion[0], topic.conclusion[1])}</p>
                        </div>
                      </section>

                      <section className="border-2 border-dashed border-orange-300 dark:border-orange-700 rounded-2xl p-5">
                        <h3 className="text-sm font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4" />
                          {t('REVISION BOOSTER', 'रिवीजन बूस्टर')}
                        </h3>
                        <div className="mb-4">
                          <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-2">{t('Expected Short-Answer Questions (5)', 'अपेक्षित लघु-उत्तरीय प्रश्न (5)')}</h4>
                          <ol className="list-decimal list-inside space-y-1">
                            {topic.shortQ.map((q, i) => <li key={i} className="text-base text-justify text-gray-700 dark:text-gray-300">{t(q[0], q[1])}</li>)}
                          </ol>
                        </div>
                        <div className="mb-4">
                          <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-2">{t('Expected Long-Answer Questions (5)', 'अपेक्षित दीर्घ-उत्तरीय प्रश्न (5)')}</h4>
                          <ol className="list-decimal list-inside space-y-1">
                            {topic.longQ.map((q, i) => <li key={i} className="text-base text-justify text-gray-700 dark:text-gray-300">{t(q[0], q[1])}</li>)}
                          </ol>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-2">{t('Multiple Choice Questions (5)', 'बहुविकल्पीय प्रश्न (5)')}</h4>
                          <div className="space-y-2">
                            {topic.mcqs.map((mcq, i) => {
                              const key = `${topic.id}-${i}`;
                              const revealed = showMCQAnswer.has(key);
                              return (
                                <div key={i} className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                                  <p className="text-base font-medium text-gray-900 dark:text-white mb-2">Q{i+1}. {t(mcq.q[0], mcq.q[1])}</p>
                                  <div className="grid grid-cols-2 gap-1 mb-2">
                                    {mcq.opts.map((opt, j) => (
                                      <span key={j} className={`text-xs px-2 py-1 rounded ${j === mcq.correct && revealed ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-semibold' : 'text-gray-600 dark:text-gray-400'}`}>
                                        {String.fromCharCode(65+j)}. {t(opt[0], opt[1])}
                                      </span>
                                    ))}
                                  </div>
                                  <button onClick={() => toggleMCQ(topic.id, i)} className="text-xs text-primary-600 dark:text-primary-400 hover:underline">
                                    {revealed ? t('Hide Answer', 'उत्तर छुपाएं') : t('Show Answer', 'उत्तर देखें')}
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </section>

                      <section className="rounded-2xl p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 border border-indigo-100 dark:border-indigo-800/20">
                        <h3 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <GraduationCap className="w-4 h-4" />
                          {t('UGC NET/JRF PREPARATION', 'UGC NET/JRF तैयारी')}
                        </h3>
                        <div className="p-4 rounded-xl bg-white/60 dark:bg-gray-900/50 mb-3">
                          <p className="text-base text-justify text-indigo-900 dark:text-indigo-200 leading-relaxed whitespace-pre-line">{t(topic.ugcNotes[0], topic.ugcNotes[1])}</p>
                        </div>
                        <h4 className="text-xs font-bold text-indigo-500 uppercase mb-2 flex items-center gap-1.5">
                          <ClipboardList className="w-3.5 h-3.5" />
                          {t('Quick Revision Q&A', 'त्वरित रिवीजन प्रश्नोत्तर')}
                        </h4>
                        <div className="space-y-1.5">
                          {topic.ugcQ.map((q, i) => (
                            <div key={i} className="text-xs text-indigo-800 dark:text-indigo-300 p-2 rounded-lg bg-white/40 dark:bg-gray-900/30">{t(q[0], q[1])}</div>
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
            {t('✅ All 8 Topics Complete! Full PSC-C-102 notes with 5-part structure, MCQs & UGC NET Prep.', '✅ सभी 8 विषय पूर्ण! 5-भाग संरचना, MCQ और UGC NET तैयारी के साथ संपूर्ण PSC-C-102 नोट्स।')}
          </p>
        </div>
      </div>
    </div>
  );
}
