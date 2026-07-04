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

/* ─── ALL 8 TOPIC NOTES FOR PSC-C-207 ─── */
const NOTES: TopicNote[] = [
  // TOPIC 1
  {
    id: 't1', num: 1,
    title: ["Constitution and Constitutionalism", "संविधान और संविधानवाद"],
    introduction: [
      "The concepts of 'Constitution' and 'Constitutionalism' are foundational to modern political science. A Constitution is a body of fundamental principles or established precedents according to which a state or organization is acknowledged to be governed. It can be written (like the USA, India) or unwritten (like the UK). Constitutionalism, on the other under, is a broader political philosophy that advocates for limited government. It asserts that government authority is derived from and limited by a body of fundamental law. While a dictatorial regime may have a constitution, it lacks constitutionalism because the power of the rulers is absolute. C.F. Strong defines a constitution as \"a collection of principles according to which the powers of the government, the rights of the governed, and the relations between the two are adjusted.\"",
      "'संविधान' और 'संविधानवाद' की अवधारणाएं आधुनिक राजनीति विज्ञान के लिए मूलभूत हैं। संविधान उन मौलिक सिद्धांतों या स्थापित मिसालों का एक निकाय है जिसके अनुसार किसी राज्य को शासित किया जाता है। यह लिखित (जैसे USA, भारत) या अलिखित (जैसे UK) हो सकता है। दूसरी ओर, संविधानवाद एक व्यापक राजनीतिक दर्शन है जो सीमित सरकार की वकालत करता है। इसका दावा है कि सरकारी अधिकार मौलिक कानून से प्राप्त होता है और उसी से सीमित होता है। एक तानाशाही शासन का संविधान हो सकता है, लेकिन उसमें संविधानवाद का अभाव होता है।"
    ],
    concepts: [
      {
        heading: ["Constitution: Meaning and Classification", "संविधान: अर्थ और वर्गीकरण"],
        body: [
          "Meaning of Constitution:\n• Supreme law of the land\n• Establishes the structure, powers, and limits of government\n• Defines the relationship between the state and the citizen\n\nClassification of Constitutions:\n1. Written vs. Unwritten:\n   • Written: Documented in a single formal text (USA, India, France). Enacted by a constituent assembly.\n   • Unwritten: Evolved over time, based on conventions, statutes, and judicial decisions (UK, New Zealand).\n2. Rigid vs. Flexible:\n   • Rigid: Requires a special procedure for amendment (USA requires 2/3rd majority in Congress and ratification by 3/4th states).\n   • Flexible: Can be amended by ordinary legislative process (UK Parliament can amend any law easily).\n3. Federal vs. Unitary:\n   • Federal: Division of powers between national and regional governments (USA, Canada, India).\n   • Unitary: All powers concentrated in the central government (UK, France).\n\nFunctions of a Constitution:\n• Power allocation and restriction\n• Protection of fundamental rights\n• Legitimizing the political system\n• Expressing national identity and goals",
          "संविधान का अर्थ:\n• देश का सर्वोच्च कानून\n• सरकार की संरचना, शक्तियों और सीमाओं को स्थापित करता है\n• राज्य और नागरिक के बीच संबंध को परिभाषित करता है\n\nवर्गीकरण:\n1. लिखित बनाम अलिखित:\n   • लिखित: एकल औपचारिक पाठ में प्रलेखित (USA, भारत)।\n   • अलिखित: सम्मेलनों, विधियों (UK) पर आधारित।\n2. कठोर बनाम लचीला:\n   • कठोर: संशोधन के लिए विशेष प्रक्रिया की आवश्यकता (USA)।\n   • लचीला: सामान्य विधायी प्रक्रिया द्वारा संशोधित (UK)।\n3. संघीय बनाम एकात्मक:\n   • संघीय: शक्तियों का विभाजन (USA, भारत)।\n   • एकात्मक: केंद्र सरकार में केंद्रित शक्तियां (UK)।"
        ]
      },
      {
        heading: ["Constitutionalism: Meaning and Features", "संविधानवाद: अर्थ और विशेषताएं"],
        body: [
          "Meaning of Constitutionalism:\n• The doctrine of 'Limited Government'.\n• It means that the exercise of political power must be bound by rules, which determine the validity of legislative and executive action.\n• Carl J. Friedrich: \"Constitutionalism is an institutionalized system of effective, regularized restraints upon governmental action.\"\n\nKey Features/Elements of Constitutionalism:\n1. Rule of Law: Supremacy of law over arbitrary power (A.V. Dicey).\n2. Separation of Powers: Distribution of power among executive, legislature, and judiciary (Montesquieu) to prevent tyranny.\n3. Checks and Balances: Each branch can limit the powers of the others (e.g., US system).\n4. Fundamental Rights: Protection of civil liberties (speech, religion, life).\n5. Independent Judiciary: Essential to interpret the constitution and strike down unconstitutional acts (Judicial Review).\n6. Periodic, Free and Fair Elections: Ensuring government remains accountable to the people.\n7. Civilian Control over Military: The armed forces must report to the elected civilian government.\n\nDifference between Constitution and Constitutionalism:\n• A country can have a Constitution but no Constitutionalism (e.g., Nazi Germany, Soviet Union had constitutions but absolute rule).\n• Constitutionalism is the *spirit* or *ideology* of limited government, while the constitution is the *legal tool* to achieve it.",
          "संविधानवाद का अर्थ:\n• 'सीमित सरकार' का सिद्धांत।\n• इसका अर्थ है कि राजनीतिक शक्ति का प्रयोग नियमों से बंधा होना चाहिए।\n• कार्ल जे. फ्रेडरिक: \"संविधानवाद सरकारी कार्रवाई पर प्रभावी, नियमित प्रतिबंधों की एक संस्थागत प्रणाली है।\"\n\nसंविधानवाद की विशेषताएं:\n1. कानून का शासन: मनमानी शक्ति पर कानून की सर्वोच्चता।\n2. शक्तियों का पृथक्करण: निरंकुशता को रोकने के लिए वितरण (मोंटेस्क्यू)।\n3. नियंत्रण और संतुलन: प्रत्येक शाखा दूसरों की शक्तियों को सीमित कर सकती है।\n4. मौलिक अधिकार: नागरिक स्वतंत्रता की रक्षा।\n5. स्वतंत्र न्यायपालिका: न्यायिक समीक्षा के लिए आवश्यक।\n6. स्वतंत्र और निष्पक्ष चुनाव।\n\nसंविधान और संविधानवाद में अंतर:\n• किसी देश में संविधान हो सकता है लेकिन संविधानवाद नहीं (जैसे नाजी जर्मनी)।\n• संविधानवाद सीमित सरकार की 'भावना' है, जबकि संविधान इसे प्राप्त करने का 'कानूनी उपकरण' है।"
        ]
      }
    ],
    quotes: [
      ["C.F. Strong: \"A true constitution will have the following facts: how the various agencies are organized, what power is entrusted to them and in what manner such power is to be exercised.\"", "सी.एफ. स्ट्रॉन्ग: \"एक सच्चे संविधान में निम्नलिखित तथ्य होंगे: विभिन्न एजेंसियों को कैसे व्यवस्थित किया जाता है, उन्हें कौन सी शक्ति सौंपी जाती है।\""],
      ["Carl J. Friedrich: \"Constitutionalism by dividing power provides a system of effective restraints upon governmental action.\"", "कार्ल जे. फ्रेडरिक: \"संविधानवाद शक्ति को विभाजित करके सरकारी कार्रवाई पर प्रभावी प्रतिबंधों की एक प्रणाली प्रदान करता है।\""],
      ["K.C. Wheare: \"Constitutionalism means limited government, government by rules and not by arbitrary power.\"", "के.सी. व्हीयर: \"संविधानवाद का अर्थ है सीमित सरकार, नियमों द्वारा सरकार न कि मनमानी शक्ति द्वारा।\""],
    ],
    evaluation: [
      "The concept of Constitutionalism has been one of the most successful exports of Western political thought. It has curbed the absolute power of monarchs and dictators, establishing democratic governance globally. However, in many developing nations, constitutionalism remains merely on paper (a 'facade constitution'). Rulers often manipulate constitutions to extend their power (e.g., changing term limits). Furthermore, Marxist critics argue that constitutionalism mainly protects the property rights of the bourgeoisie, ignoring economic equality. Despite these critiques, the principles of constitutionalism (Rule of Law, Independent Judiciary) remain the best defense against tyranny.",
      "संविधानवाद की अवधारणा पश्चिमी राजनीतिक विचार के सबसे सफल निर्यातों में से एक रही है। इसने दुनिया भर में पूर्ण शक्ति पर अंकुश लगाया है। हालांकि, कई विकासशील देशों में संविधानवाद केवल कागज पर बना हुआ है ('मुखौटा संविधान')। शासक अक्सर अपनी शक्ति बढ़ाने के लिए संविधानों में हेरफेर करते हैं। मार्क्सवादी आलोचकों का तर्क है कि यह मुख्य रूप से बुर्जुआ वर्ग के संपत्ति अधिकारों की रक्षा करता है। फिर भी, यह निरंकुशता के खिलाफ सबसे अच्छा बचाव बना हुआ है।"
    ],
    conclusion: [
      "Constitution and Constitutionalism are intertwined but distinct concepts. A Constitution provides the structural framework of the state, while Constitutionalism ensures that this framework operates within defined limits to prevent arbitrary rule. For a democracy to thrive, it requires not just a well-drafted Constitution, but a deeply ingrained political culture of Constitutionalism.",
      "संविधान और संविधानवाद गुंथे हुए लेकिन अलग अवधारणाएं हैं। संविधान राज्य का संरचनात्मक ढांचा प्रदान करता है, जबकि संविधानवाद यह सुनिश्चित करता है कि यह ढांचा मनमाने शासन को रोकने के लिए परिभाषित सीमाओं के भीतर काम करे। लोकतंत्र के पनपने के लिए संविधानवाद की राजनीतिक संस्कृति आवश्यक है।"
    ],
    shortQ: [
      ["Define Constitutionalism.", "संविधानवाद को परिभाषित करें।"],
      ["Differentiate between a flexible and rigid constitution.", "लचीले और कठोर संविधान के बीच अंतर करें।"],
      ["Can there be a Constitution without Constitutionalism? Give an example.", "क्या संविधानवाद के बिना संविधान हो सकता है? उदाहरण दें।"],
      ["What is the Rule of Law?", "कानून का शासन क्या है?"],
      ["Mention any four elements of Constitutionalism.", "संविधानवाद के किन्हीं चार तत्वों का उल्लेख करें।"],
    ],
    longQ: [
      ["Discuss the meaning and types of Constitutions.", "संविधान के अर्थ और प्रकारों पर चर्चा करें।"],
      ["What is Constitutionalism? Discuss its main features.", "संविधानवाद क्या है? इसकी मुख्य विशेषताओं पर चर्चा करें।"],
      ["Distinguish clearly between Constitution and Constitutionalism.", "संविधान और संविधानवाद के बीच स्पष्ट अंतर करें।"],
      ["Critically evaluate the relevance of Constitutionalism in developing countries.", "विकासशील देशों में संविधानवाद की प्रासंगिकता का आलोचनात्मक मूल्यांकन करें।"],
      ["Explain how Separation of Powers and Checks and Balances ensure Constitutionalism.", "समझाइए कि शक्तियों का पृथक्करण और नियंत्रण-संतुलन संविधानवाद कैसे सुनिश्चित करते हैं।"],
    ],
    mcqs: [
      { q: ["Which country is the best example of an unwritten constitution?", "अलिखित संविधान का सबसे अच्छा उदाहरण कौन सा देश है?"], opts: [["USA", "USA"], ["India", "भारत"], ["UK", "UK"], ["France", "फ्रांस"]], correct: 2 },
      { q: ["Constitutionalism fundamentally means:", "संविधानवाद का मूल अर्थ है:"], opts: [["Rule of the majority", "बहुमत का शासन"], ["Limited government", "सीमित सरकार"], ["Unwritten constitution", "अलिखित संविधान"], ["Dictatorship", "तानाशाही"]], correct: 1 },
      { q: ["The concept of 'Separation of Powers' was given by:", "'शक्तियों का पृथक्करण' की अवधारणा किसने दी?"], opts: [["Montesquieu", "मोंटेस्क्यू"], ["Rousseau", "रूसो"], ["John Locke", "जॉन लॉक"], ["Dicey", "डायसी"]], correct: 0 },
      { q: ["Rule of Law is associated with which scholar?", "कानून का शासन किस विद्वान से जुड़ा है?"], opts: [["Karl Marx", "कार्ल मार्क्स"], ["A.V. Dicey", "ए.वी. डायसी"], ["Hegel", "हेगेल"], ["Carl J. Friedrich", "कार्ल जे. फ्रेडरिक"]], correct: 1 },
      { q: ["Which of the following implies a rigid constitution?", "निम्नलिखित में से कौन सा कठोर संविधान का तात्पर्य है?"], opts: [["Cannot be amended", "संशोधित नहीं किया जा सकता"], ["Amended by ordinary law", "सामान्य कानून द्वारा संशोधित"], ["Requires special procedure for amendment", "संशोधन के लिए विशेष प्रक्रिया की आवश्यकता"], ["Written in one day", "एक दिन में लिखा गया"]], correct: 2 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Constitutionalism = Limited Government (Key concept)\n• A.V. Dicey — Rule of Law (Introduction to the Study of the Law of the Constitution, 1885)\n• Montesquieu — Separation of Powers (The Spirit of the Laws, 1748)\n• K.C. Wheare — Classification of constitutions (Federal/Unitary, Rigid/Flexible)\n• Carl J. Friedrich — Constitutional Government and Democracy\n• US Constitution: Most rigid (requires 3/4 states ratification)\n• UK Constitution: Most flexible (Parliamentary sovereignty)",
      "UGC NET फोकस:\n• संविधानवाद = सीमित सरकार\n• ए.वी. डायसी — कानून का शासन (1885)\n• मोंटेस्क्यू — शक्तियों का पृथक्करण (1748)\n• US संविधान: सबसे कठोर; UK संविधान: सबसे लचीला"
    ],
    ugcQ: [
      ["Q: Who authored 'The Spirit of the Laws'? A: Montesquieu (1748).", "प्र: 'द स्पिरिट ऑफ द लॉज़' के लेखक? उ: मोंटेस्क्यू (1748)।"],
      ["Q: What is the core principle of Constitutionalism? A: Limited Government and Rule of Law.", "प्र: संविधानवाद का मूल सिद्धांत क्या है? उ: सीमित सरकार और कानून का शासन।"],
    ],
  },

  // TOPIC 2
  {
    id: 't2', num: 2,
    title: ["UK: Historical background, Crown, Cabinet, Parliament, Judiciary", "यूके: ऐतिहासिक पृष्ठभूमि, क्राउन, कैबिनेट, संसद, न्यायपालिका"],
    introduction: [
      "The political system of the United Kingdom is unique as it lacks a single, codified written document. It is the mother of all parliaments and the birthplace of parliamentary democracy. The UK system has evolved continuously over centuries, from the Magna Carta (1215) to the present day, maintaining a balance between tradition (The Crown) and democracy (Parliament). It operates on the principles of Parliamentary Sovereignty, Constitutional Monarchy, and the Rule of Law. Understanding the UK system requires examining its historical evolution and its key institutions: the Crown, the Cabinet, the Parliament, and the Judiciary.",
      "यूनाइटेड किंगडम की राजनीतिक प्रणाली अद्वितीय है क्योंकि इसमें कोई एक संहिताबद्ध लिखित दस्तावेज नहीं है। यह सभी संसदों की जननी और संसदीय लोकतंत्र का जन्मस्थान है। UK प्रणाली सदियों से विकसित हुई है, जिसमें परंपरा (क्राउन) और लोकतंत्र (संसद) के बीच संतुलन बनाए रखा गया है। यह संसदीय संप्रभुता, संवैधानिक राजतंत्र और कानून के शासन के सिद्धांतों पर काम करती है।"
    ],
    concepts: [
      {
        heading: ["Historical Background and The Crown", "ऐतिहासिक पृष्ठभूमि और क्राउन (ताज)"],
        body: [
          "Historical Evolution:\n• Magna Carta (1215): King John forced to limit his powers. Foundation of Rule of Law.\n• Petition of Right (1628): Restricted king's taxation powers.\n• Glorious Revolution (1688): Established parliamentary supremacy over the monarch without bloodshed.\n• Bill of Rights (1689): Solidified Parliament's power.\n• Act of Settlement (1701): Ensured Protestant succession and judicial independence.\n\nThe Crown vs. The Monarch:\n• Distinction: The Monarch is the physical person (King/Queen); the Crown is the institution (the Executive). \"The King is dead, long live the King\" (person dies, institution continues).\n• Role of Monarch: Constitutional Monarchy. The Monarch reigns but does not rule.\n• Powers (Prerogative Powers): Appointing the PM, summoning/dissolving Parliament, giving Royal Assent to bills, declaring war. \n• Reality: All powers are exercised on the advice of the Prime Minister and Cabinet. Walter Bagehot defined the monarch's rights as: \"the right to be consulted, the right to encourage, the right to warn.\"",
          "ऐतिहासिक विकास:\n• मैग्ना कार्टा (1215): राजा जॉन ने अपनी शक्तियों को सीमित किया।\n• शानदार क्रांति (1688): रक्तपात के बिना राजा पर संसदीय सर्वोच्चता स्थापित।\n• बिल ऑफ राइट्स (1689): संसद की शक्ति को मजबूत किया।\n\nक्राउन बनाम सम्राट:\n• अंतर: सम्राट भौतिक व्यक्ति (राजा/रानी) है; क्राउन संस्था (कार्यपालिका) है।\n• सम्राट की भूमिका: संवैधानिक राजतंत्र। सम्राट राज करता है लेकिन शासन नहीं करता।\n• शक्तियां: PM की नियुक्ति, संसद बुलाना, विधेयकों को शाही स्वीकृति।\n• वास्तविकता: सभी शक्तियां PM और कैबिनेट की सलाह पर प्रयोग की जाती हैं। वाल्टर बैजहॉट: \"परामर्श देने का अधिकार, प्रोत्साहित करने का अधिकार, चेतावनी देने का अधिकार।\""
        ]
      },
      {
        heading: ["Cabinet, Parliament, and Judiciary", "कैबिनेट, संसद और न्यायपालिका"],
        body: [
          "The Cabinet and Prime Minister:\n• Real Executive: The PM is the head of government. The Cabinet is the core decision-making body.\n• Primus inter pares: PM was traditionally 'first among equals', but modern PMs act more like presidents (Presidentialization of UK politics).\n• Collective Responsibility: The Cabinet acts as a team; all ministers must publicly support cabinet decisions or resign.\n\nThe Parliament:\n• Parliamentary Sovereignty: Parliament can make or unmake any law. No body can override its laws.\n• Bicameralism:\n  1. House of Commons: Lower house, 650 directly elected members. Real center of power.\n  2. House of Lords: Upper house, unelected (life peers, hereditary peers, bishops). Has limited delaying powers (cannot block money bills).\n\nThe Judiciary:\n• Rule of Law: A.V. Dicey's concept that all are equal before the law.\n• Evolution: Until 2009, the highest court was the Appellate Committee of the House of Lords. \n• Constitutional Reform Act (2005): Created an independent UK Supreme Court (started in 2009), formally separating the judiciary from the legislature.\n• No Judicial Review of Primary Legislation: Unlike the USA, UK courts cannot strike down Acts of Parliament as 'unconstitutional' (due to Parliamentary Sovereignty). They can only interpret them.",
          "कैबिनेट और प्रधानमंत्री:\n• वास्तविक कार्यपालिका: PM सरकार का प्रमुख है।\n• सामूहिक जिम्मेदारी: कैबिनेट एक टीम के रूप में काम करती है; सभी मंत्रियों को सार्वजनिक रूप से फैसलों का समर्थन करना चाहिए।\n\nसंसद:\n• संसदीय संप्रभुता: संसद कोई भी कानून बना या हटा सकती है।\n• द्विसदनीयता:\n  1. हाउस ऑफ कॉमन्स: निचला सदन, 650 निर्वाचित सदस्य। वास्तविक शक्ति।\n  2. हाउस ऑफ लॉर्ड्स: ऊपरी सदन, अनिर्वाचित। सीमित शक्तियां।\n\nन्यायपालिका:\n• कानून का शासन: ए.वी. डायसी की अवधारणा (सभी कानून के समक्ष समान)।\n• विकास: 2009 तक सर्वोच्च न्यायालय हाउस ऑफ लॉर्ड्स था। 2005 के अधिनियम ने स्वतंत्र सुप्रीम कोर्ट (2009) बनाया।\n• कोई न्यायिक समीक्षा नहीं: UK की अदालतें संसद के अधिनियमों को 'असंवैधानिक' घोषित नहीं कर सकतीं।"
        ]
      }
    ],
    quotes: [
      ["Walter Bagehot: \"The sovereign has, under a constitutional monarchy such as ours, three rights—the right to be consulted, the right to encourage, the right to warn.\" — The English Constitution (1867)", "वाल्टर बैजहॉट: \"हमारे जैसे संवैधानिक राजतंत्र के तहत संप्रभु के पास तीन अधिकार हैं—परामर्श का अधिकार, प्रोत्साहित करने का अधिकार, चेतावनी का अधिकार।\""],
      ["A.V. Dicey: \"Parliament has the right to make or unmake any law whatever; and no person or body is recognised by the law of England as having a right to override or set aside the legislation of Parliament.\"", "ए.वी. डायसी: \"संसद को किसी भी कानून को बनाने या रद्द करने का अधिकार है; और किसी भी व्यक्ति को इसे रद्द करने का अधिकार नहीं है।\""],
      ["William Gladstone: \"The Cabinet is the threefold hinge that connects together for action the British constitution - the King, the Lords and the Commons.\"", "विलियम ग्लैडस्टोन: \"कैबिनेट वह तिहरा काज है जो ब्रिटिश संविधान—राजा, लॉर्ड्स और कॉमन्स—को कार्रवाई के लिए जोड़ता है।\""],
    ],
    evaluation: [
      "The UK system's greatest strength is its adaptability. Its unwritten nature has allowed it to peacefully evolve from an absolute monarchy to a modern democracy. However, critics argue this flexibility is a weakness, as fundamental rights are not entrenched in a higher law and could technically be repealed by a simple majority in Parliament. The House of Lords remains controversial as an unelected body in a democracy. Furthermore, the rise of the Supreme Court and the impact of devolution (Scottish/Welsh parliaments) are slowly transforming the traditional doctrine of absolute Parliamentary Sovereignty.",
      "UK प्रणाली की सबसे बड़ी ताकत इसकी अनुकूलन क्षमता है। इसकी अलिखित प्रकृति ने इसे पूर्ण राजतंत्र से लोकतंत्र में शांतिपूर्वक विकसित होने दिया है। हालांकि, आलोचकों का तर्क है कि मौलिक अधिकार उच्च कानून में निहित नहीं हैं। हाउस ऑफ लॉर्ड्स एक अनिर्वाचित निकाय के रूप में विवादास्पद बना हुआ है। इसके अलावा, सुप्रीम कोर्ट का उदय और शक्तियों का हस्तांतरण संसदीय संप्रभुता के पारंपरिक सिद्धांत को धीरे-धीरे बदल रहा है।"
    ],
    conclusion: [
      "The British political system is a fascinating blend of historical tradition and modern democratic practice. While the Crown symbolizes continuity, real power lies in the elected House of Commons and the Cabinet. The recent creation of the Supreme Court marks a significant shift towards clearer separation of powers, yet Parliamentary Sovereignty remains the system's defining characteristic.",
      "ब्रिटिश राजनीतिक प्रणाली ऐतिहासिक परंपरा और आधुनिक लोकतांत्रिक व्यवहार का एक आकर्षक मिश्रण है। जबकि क्राउन निरंतरता का प्रतीक है, वास्तविक शक्ति निर्वाचित हाउस ऑफ कॉमन्स और कैबिनेट में निहित है। संसदीय संप्रभुता इस प्रणाली की परिभाषित विशेषता बनी हुई है।"
    ],
    shortQ: [
      ["What is the difference between the Crown and the Monarch?", "क्राउन और सम्राट के बीच क्या अंतर है?"],
      ["Define the doctrine of Parliamentary Sovereignty.", "संसदीय संप्रभुता के सिद्धांत को परिभाषित करें।"],
      ["What was the significance of the Glorious Revolution (1688)?", "शानदार क्रांति (1688) का क्या महत्व था?"],
      ["When was the UK Supreme Court established?", "UK सुप्रीम कोर्ट की स्थापना कब हुई थी?"],
      ["What are the three rights of the Monarch according to Bagehot?", "बैजहॉट के अनुसार सम्राट के तीन अधिकार क्या हैं?"],
    ],
    longQ: [
      ["Discuss the historical evolution of the UK Constitution.", "UK संविधान के ऐतिहासिक विकास पर चर्चा करें।"],
      ["'The Monarch reigns but does not rule.' Explain the position of the Crown in the UK.", "'सम्राट राज करता है लेकिन शासन नहीं करता।' UK में क्राउन की स्थिति की व्याख्या करें।"],
      ["Examine the powers and functions of the UK Prime Minister and the Cabinet.", "UK के प्रधानमंत्री और कैबिनेट की शक्तियों और कार्यों का परीक्षण करें।"],
      ["Explain the concept of Parliamentary Sovereignty. Is it declining?", "संसदीय संप्रभुता की अवधारणा की व्याख्या करें। क्या इसका पतन हो रहा है?"],
      ["Discuss the structure and role of the Judiciary in the UK.", "UK में न्यायपालिका की संरचना और भूमिका पर चर्चा करें।"],
    ],
    mcqs: [
      { q: ["The UK Supreme Court began operating in:", "UK सुप्रीम कोर्ट ने कब काम करना शुरू किया?"], opts: [["1999", "1999"], ["2005", "2005"], ["2009", "2009"], ["2015", "2015"]], correct: 2 },
      { q: ["Which document was signed by King John in 1215?", "1215 में राजा जॉन ने किस दस्तावेज पर हस्ताक्षर किए?"], opts: [["Bill of Rights", "बिल ऑफ राइट्स"], ["Magna Carta", "मैग्ना कार्टा"], ["Petition of Right", "पिटीशन ऑफ राइट"], ["Act of Settlement", "एक्ट ऑफ सेटलमेंट"]], correct: 1 },
      { q: ["In the UK, the upper house of Parliament is the:", "UK में, संसद का ऊपरी सदन है:"], opts: [["House of Commons", "हाउस ऑफ कॉमन्स"], ["Senate", "सीनेट"], ["House of Lords", "हाउस ऑफ लॉर्ड्स"], ["Diet", "डाइट"]], correct: 2 },
      { q: ["Who authored 'The English Constitution' (1867)?", "'द इंग्लिश कॉन्स्टीट्यूशन' (1867) किसने लिखा?"], opts: [["A.V. Dicey", "ए.वी. डायसी"], ["Walter Bagehot", "वाल्टर बैजहॉट"], ["John Locke", "जॉन लॉक"], ["Edmund Burke", "एडमंड बर्क"]], correct: 1 },
      { q: ["Can the UK Supreme Court strike down an Act of Parliament?", "क्या UK सुप्रीम कोर्ट संसद के अधिनियम को रद्द कर सकता है?"], opts: [["Yes, always", "हां, हमेशा"], ["Only if it violates human rights", "केवल अगर यह मानवाधिकारों का उल्लंघन करता है"], ["No, due to Parliamentary Sovereignty", "नहीं, संसदीय संप्रभुता के कारण"], ["Yes, with PM's permission", "हां, PM की अनुमति से"]], correct: 2 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• A.V. Dicey: Rule of Law & Parliamentary Sovereignty\n• Walter Bagehot: \"First among equals\" (Primus inter pares), 3 rights of monarch\n• Magna Carta (1215), Glorious Revolution (1688), Bill of Rights (1689)\n• Shadow Cabinet: The opposition party's alternative cabinet (unique UK feature)\n• Constitutional Reform Act 2005: Created Supreme Court (ended appellate jurisdiction of House of Lords), reformed Lord Chancellor's role\n• Lord Chancellor: Previously held roles in all three branches, now reformed.",
      "UGC NET फोकस:\n• ए.वी. डायसी: कानून का शासन और संसदीय संप्रभुता\n• वाल्टर बैजहॉट: सम्राट के 3 अधिकार\n• शैडो कैबिनेट: विपक्षी दल का वैकल्पिक कैबिनेट\n• संवैधानिक सुधार अधिनियम 2005: सुप्रीम कोर्ट बनाया"
    ],
    ugcQ: [
      ["Q: What is a Shadow Cabinet? A: A feature of UK politics where the main opposition party appoints MPs to shadow (mirror) actual cabinet ministers.", "प्र: शैडो कैबिनेट क्या है? उ: मुख्य विपक्षी दल द्वारा नियुक्त MPs जो वास्तविक कैबिनेट मंत्रियों की छाया (नकल) करते हैं।"],
      ["Q: When did the UK Supreme Court come into existence? A: Established by the Constitutional Reform Act 2005, became operational in October 2009.", "प्र: UK सुप्रीम कोर्ट कब अस्तित्व में आया? उ: 2005 के अधिनियम द्वारा स्थापित, अक्टूबर 2009 में चालू।"],
    ],
  },

  // TOPIC 3
  {
    id: 't3', num: 3,
    title: ["UK: Party System", "यूके: दलीय प्रणाली"],
    introduction: [
      "Political parties are the lifeblood of British parliamentary democracy. The UK party system is traditionally characterized as a stable two-party system, largely due to its 'First-Past-The-Post' (FPTP) electoral system. Historically, power has alternated between the Conservative Party (Tories) and the Labour Party. The presence of a strong, institutionalized opposition (Her Majesty's Loyal Opposition) is a defining feature of the system. While the two major parties dominate Westminster, recent decades have seen the rise of third parties like the Liberal Democrats, Scottish National Party (SNP), and UKIP/Reform UK, shifting the dynamic slightly towards a multi-party reality, especially in regional elections.",
      "राजनीतिक दल ब्रिटिश संसदीय लोकतंत्र की जीवनरेखा हैं। UK की पार्टी प्रणाली को पारंपरिक रूप से एक स्थिर द्वि-दलीय प्रणाली के रूप में जाना जाता है, जो मुख्य रूप से इसकी 'फर्स्ट-पास्ट-द-पोस्ट' (FPTP) चुनावी प्रणाली के कारण है। ऐतिहासिक रूप से, सत्ता कंजर्वेटिव पार्टी और लेबर पार्टी के बीच बदलती रही है। हालांकि दो प्रमुख दल हावी हैं, हाल के दशकों में लिबरल डेमोक्रेट्स और SNP जैसे तीसरे दलों का उदय हुआ है।"
    ],
    concepts: [
      {
        heading: ["Evolution and Major Parties", "विकास और प्रमुख दल"],
        body: [
          "Historical Evolution:\n• 17th-18th Century: Tories (Royalists/Conservatives) and Whigs (Parliamentarians/Liberals).\n• Late 19th Century: Emergence of the modern Conservative Party and Liberal Party.\n• 20th Century: The Labour Party (founded 1900) replaced the Liberals as one of the two major parties, representing the working class and trade unions.\n\nMajor Political Parties:\n1. The Conservative Party (Tories):\n   • Ideology: Center-right, conservatism, economic liberalism, British unionism.\n   • Voter Base: Historically middle/upper class, business owners, rural areas.\n2. The Labour Party:\n   • Ideology: Center-left, social democracy, democratic socialism.\n   • Voter Base: Historically working class, trade unions, urban centers, youth.\n3. Liberal Democrats:\n   • Ideology: Centrism, social liberalism, pro-European.\n   • Position: Often the 'third party', acts as a kingmaker in hung parliaments (e.g., 2010 coalition).\n4. Regional Parties:\n   • Scottish National Party (SNP): Center-left, advocates Scottish independence.\n   • Plaid Cymru: Welsh nationalism.\n   • DUP / Sinn Féin: Northern Ireland politics.",
          "ऐतिहासिक विकास:\n• 17वीं-18वीं सदी: टोरीज़ और व्हिग्स।\n• 20वीं सदी: लेबर पार्टी (1900 में स्थापित) ने लिबरल पार्टी की जगह ली।\n\nप्रमुख राजनीतिक दल:\n1. कंजर्वेटिव पार्टी (टोरीज़): केंद्र-दक्षिणपंथी, रूढ़िवाद, आर्थिक उदारवाद।\n2. लेबर पार्टी: केंद्र-वामपंथी, सामाजिक लोकतंत्र, ट्रेड यूनियन।\n3. लिबरल डेमोक्रेट्स: केंद्रवाद, सामाजिक उदारवाद, अक्सर तीसरे दल के रूप में।\n4. क्षेत्रीय दल: SNP (स्कॉटिश स्वतंत्रता), Plaid Cymru (वेल्श)।"
        ]
      },
      {
        heading: ["Features of the UK Party System", "UK पार्टी प्रणाली की विशेषताएं"],
        body: [
          "Key Features:\n1. Two-Party Dominance: Driven by the single-member plurality (FPTP) electoral system (Duverger's Law).\n2. Strong Party Discipline: MPs rarely vote against their party line (whipped votes) because the government's survival depends on maintaining a majority.\n3. Centralized Organization: Parties are highly organized with clear leadership hierarchies.\n4. Her Majesty's Loyal Opposition: The second largest party is officially recognized, funded by the state (Short Money), and forms a 'Shadow Cabinet' to critique the government.\n5. Class-Based Voting (Historically): Class alignment was strong (working-class for Labour, middle-class for Conservatives), though class dealignment has occurred recently.\n\nRecent Trends:\n• Rise of Multi-partism: Increased vote share for SNP and UKIP/Reform UK.\n• Hung Parliaments: Occurred in 2010 (Con-Lib Dem coalition) and 2017 (Con-DUP confidence and supply), showing cracks in the two-party dominance.\n• Brexit Realignment: The Brexit referendum (2016) fractured traditional party lines, creating new political divides based on identity rather than class.",
          "प्रमुख विशेषताएं:\n1. द्वि-दलीय प्रभुत्व: FPTP चुनावी प्रणाली (डुवर्जर का नियम) द्वारा संचालित।\n2. मजबूत पार्टी अनुशासन: MPs शायद ही कभी पार्टी लाइन के खिलाफ वोट करते हैं (व्हिप)।\n3. केंद्रीकृत संगठन।\n4. विपक्ष की मान्यता: दूसरी सबसे बड़ी पार्टी आधिकारिक रूप से मान्यता प्राप्त है और 'शैडो कैबिनेट' बनाती है।\n5. वर्ग-आधारित मतदान: ऐतिहासिक रूप से मजबूत था, हालांकि अब कम हो रहा है।\n\nहाल के रुझान:\n• बहु-दलीय प्रणाली का उदय: SNP और अन्य का बढ़ता प्रभाव।\n• त्रिशंकु संसद: 2010 और 2017 में, दो-दलीय प्रभुत्व में दरार।\n• ब्रेक्सिट पुनर्गठन: ब्रेक्सिट (2016) ने वर्ग के बजाय पहचान के आधार पर नए विभाजन पैदा किए।"
        ]
      }
    ],
    quotes: [
      ["Maurice Duverger: \"The simple-majority single-ballot system favours the two-party system.\" (Duverger's Law)", "मौरिस डुवर्जर: \"साधारण-बहुमत एकल-मतपत्र प्रणाली द्वि-दलीय प्रणाली का पक्ष लेती है।\" (डुवर्जर का नियम)"],
      ["Herman Finer: \"To create a government, the British electorate acts through the party system.\"", "हरमन फाइनर: \"सरकार बनाने के लिए, ब्रिटिश मतदाता पार्टी प्रणाली के माध्यम से कार्य करते हैं।\""],
      ["Richard Rose: \"The British party system is the most centralized and disciplined in the democratic world.\"", "रिचर्ड रोज़: \"ब्रिटिश पार्टी प्रणाली लोकतांत्रिक दुनिया में सबसे केंद्रीकृत और अनुशासित है।\""],
    ],
    evaluation: [
      "The UK's two-party system provides strong, stable, single-party governments, avoiding the instability often seen in proportional representation systems (like Italy). The strong opposition ensures accountability. However, the FPTP system is criticized for being undemocratic, as it creates 'safe seats' and often results in a party winning a majority of seats with only 35-40% of the national vote. Smaller parties (like Lib Dems or Reform) suffer from massive under-representation. While the system remains technically two-party at Westminster, the voting behavior of the British public has become increasingly fragmented.",
      "UK की द्वि-दलीय प्रणाली मजबूत, स्थिर सरकारें प्रदान करती है। हालांकि, FPTP प्रणाली की अलोकतांत्रिक होने के लिए आलोचना की जाती है, क्योंकि यह अक्सर किसी पार्टी को केवल 35-40% राष्ट्रीय वोट के साथ बहुमत की सीटें देती है। छोटे दलों को कम प्रतिनिधित्व मिलता है। जबकि प्रणाली तकनीकी रूप से द्वि-दलीय बनी हुई है, ब्रिटिश जनता का मतदान व्यवहार बहु-दलीय हो गया है।"
    ],
    conclusion: [
      "The UK party system is the engine of its parliamentary democracy. Dominated historically by the Conservatives and Labour due to the FPTP electoral system, it ensures strong governments and clear accountability through the official opposition. Despite recent trends of political fragmentation and the rise of regional parties, the fundamental two-party dynamic at the national level largely persists.",
      "UK पार्टी प्रणाली इसके संसदीय लोकतंत्र का इंजन है। FPTP चुनावी प्रणाली के कारण कंजर्वेटिव और लेबर के प्रभुत्व वाली यह प्रणाली मजबूत सरकारें सुनिश्चित करती है। राजनीतिक विखंडन के हालिया रुझानों के बावजूद, राष्ट्रीय स्तर पर मूलभूत द्वि-दलीय गतिशीलता काफी हद तक बनी हुई है।"
    ],
    shortQ: [
      ["Name the two major political parties in the UK.", "UK के दो प्रमुख राजनीतिक दलों के नाम बताएं।"],
      ["What is Duverger's Law?", "डुवर्जर का नियम क्या है?"],
      ["What is Her Majesty's Loyal Opposition?", "विपक्ष की भूमिका (Loyal Opposition) क्या है?"],
      ["What electoral system is used for the UK House of Commons?", "UK हाउस ऑफ कॉमन्स के लिए कौन सी चुनावी प्रणाली का उपयोग किया जाता है?"],
      ["Mention one regional political party of the UK.", "UK के एक क्षेत्रीय राजनीतिक दल का उल्लेख करें।"],
    ],
    longQ: [
      ["Discuss the main features of the UK Party System.", "UK पार्टी प्रणाली की मुख्य विशेषताओं पर चर्चा करें।"],
      ["Trace the evolution of political parties in the UK.", "UK में राजनीतिक दलों के विकास का पता लगाएं।"],
      ["How does the FPTP electoral system sustain the two-party system in the UK?", "FPTP चुनावी प्रणाली UK में द्वि-दलीय प्रणाली को कैसे बनाए रखती है?"],
      ["Analyze the role of the Opposition in the UK parliamentary system.", "UK संसदीय प्रणाली में विपक्ष की भूमिका का विश्लेषण करें।"],
      ["'The UK is moving from a two-party to a multi-party system.' Critically examine this statement.", "'UK द्वि-दलीय से बहु-दलीय प्रणाली की ओर बढ़ रहा है।' इस कथन का आलोचनात्मक परीक्षण करें।"],
    ],
    mcqs: [
      { q: ["Which electoral system is used in UK General Elections?", "UK आम चुनावों में किस चुनावी प्रणाली का उपयोग किया जाता है?"], opts: [["Proportional Representation", "आनुपातिक प्रतिनिधित्व"], ["First-Past-The-Post (FPTP)", "FPTP"], ["Mixed Member Proportional", "MMP"], ["Single Transferable Vote", "STV"]], correct: 1 },
      { q: ["The Labour Party was founded in:", "लेबर पार्टी की स्थापना कब हुई थी?"], opts: [["1832", "1832"], ["1900", "1900"], ["1924", "1924"], ["1945", "1945"]], correct: 1 },
      { q: ["The Scottish National Party (SNP) primarily operates in:", "स्कॉटिश नेशनल पार्टी (SNP) मुख्य रूप से काम करती है:"], opts: [["Wales", "वेल्स"], ["Northern Ireland", "उत्तरी आयरलैंड"], ["Scotland", "स्कॉटलैंड"], ["England", "इंग्लैंड"]], correct: 2 },
      { q: ["The alternative cabinet formed by the opposition is called:", "विपक्ष द्वारा बनाए गए वैकल्पिक कैबिनेट को कहा जाता है:"], opts: [["Kitchen Cabinet", "किचन कैबिनेट"], ["Shadow Cabinet", "शैडो कैबिनेट"], ["War Cabinet", "वॉर कैबिनेट"], ["Inner Cabinet", "इनर कैबिनेट"]], correct: 1 },
      { q: ["Which law links FPTP to the two-party system?", "कौन सा नियम FPTP को द्वि-दलीय प्रणाली से जोड़ता है?"], opts: [["Dicey's Law", "डायसी का नियम"], ["Michels' Iron Law", "मिशेल्स का लौह नियम"], ["Duverger's Law", "डुवर्जर का नियम"], ["Moore's Law", "मूर का नियम"]], correct: 2 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Duverger's Law: Simple majority (FPTP) leads to two-party systems.\n• Whipping System: Three-line whip is the strictest instruction for MPs to vote according to party line.\n• Shadow Cabinet is officially recognized and salaried.\n• Conservative Party (Tories): Center-right, traditionalism.\n• Labour Party (founded 1900, Clause IV socialism): Center-left.\n• Realignment vs Dealignment: Class dealignment (voters no longer vote strictly by social class) is a key concept in UK psephology.",
      "UGC NET फोकस:\n• डुवर्जर का नियम: FPTP = द्वि-दलीय प्रणाली\n• शैडो कैबिनेट आधिकारिक है\n• क्लास डीलअलाइनमेंट (वर्ग आधार का कमजोर होना)"
    ],
    ugcQ: [
      ["Q: What is a 'Three-line whip'? A: A strict instruction given to MPs by their party leaders to vote in a specific way; defying it can lead to expulsion from the party.", "प्र: 'थ्री-लाइन व्हिप' क्या है? उ: MPs को पार्टी लाइन के अनुसार वोट करने का सख्त निर्देश; इसका उल्लंघन करने पर पार्टी से निष्कासन हो सकता है।"],
    ],
  },

  // TOPIC 4
  {
    id: 't4', num: 4,
    title: ["USA: Historical Background, President, Congress, Supreme Court", "यूएसए: ऐतिहासिक पृष्ठभूमि, राष्ट्रपति, कांग्रेस, सर्वोच्च न्यायालय"],
    introduction: [
      "The United States of America possesses the oldest written national constitution currently in use (drafted in 1787, effective 1789). It established a federal republic based on the principles of Separation of Powers and Checks and Balances, heavily influenced by Montesquieu. Unlike the UK's parliamentary fusion of powers, the US system strictly separates the Executive (President), Legislative (Congress), and Judicial (Supreme Court) branches. This design was deliberately crafted by the Founding Fathers (like James Madison) to prevent any single entity from gaining tyrannical power. The US Constitution is famously brief and extremely rigid, having been amended only 27 times in over 200 years.",
      "संयुक्त राज्य अमेरिका के पास वर्तमान में उपयोग में आने वाला सबसे पुराना लिखित राष्ट्रीय संविधान है (1787 में तैयार, 1789 में प्रभावी)। इसने मोंटेस्क्यू से काफी प्रभावित होकर शक्तियों के पृथक्करण और नियंत्रण-संतुलन के सिद्धांतों पर आधारित एक संघीय गणराज्य की स्थापना की। UK की संसदीय प्रणाली के विपरीत, US प्रणाली कार्यपालिका (राष्ट्रपति), विधायिका (कांग्रेस) और न्यायपालिका (सुप्रीम कोर्ट) को सख्ती से अलग करती है। इस डिजाइन को किसी एक इकाई को निरंकुश शक्ति प्राप्त करने से रोकने के लिए बनाया गया था।"
    ],
    concepts: [
      {
        heading: ["Historical Background and The President", "ऐतिहासिक पृष्ठभूमि और राष्ट्रपति"],
        body: [
          "Historical Background:\n• 1776: Declaration of Independence from Britain.\n• 1781: Articles of Confederation (weak central government).\n• 1787: Philadelphia Convention drafted the new Constitution to create a stronger federal government.\n• 1791: Bill of Rights (First 10 Amendments) added to protect individual liberties.\n\nThe US President (The Executive):\n• Real Head of State and Government (unlike the UK or India where the roles are split).\n• Election: Elected indirectly through the Electoral College for a 4-year term.\n• Term Limit: 22nd Amendment (1951) limits a president to two terms.\n• Powers: \n  - Commander-in-Chief of Armed Forces.\n  - Veto power over Congressional bills (can be overridden by 2/3rd majority in Congress).\n  - Power to appoint Supreme Court judges, ambassadors, and cabinet members (requires Senate approval).\n  - Conducts foreign policy and negotiates treaties (requires 2/3rd Senate ratification).\n• Impeachment: Can be removed by Congress for \"Treason, Bribery, or other high Crimes and Misdemeanors.\"",
          "ऐतिहासिक पृष्ठभूमि:\n• 1776: ब्रिटेन से स्वतंत्रता की घोषणा।\n• 1787: फिलाडेल्फिया सम्मेलन ने नया संविधान तैयार किया।\n• 1791: बिल ऑफ राइट्स (पहले 10 संशोधन) जोड़े गए।\n\nUS राष्ट्रपति (कार्यपालिका):\n• राज्य और सरकार दोनों का वास्तविक प्रमुख।\n• चुनाव: इलेक्टोरल कॉलेज के माध्यम से 4 साल के कार्यकाल के लिए अप्रत्यक्ष चुनाव।\n• कार्यकाल सीमा: 22वें संशोधन (1951) द्वारा अधिकतम दो कार्यकाल।\n• शक्तियां: सशस्त्र बलों का कमांडर-इन-चीफ, वीटो शक्ति, न्यायाधीशों की नियुक्ति (सीनेट की मंजूरी आवश्यक), विदेशी संधियां।\n• महाभियोग: कांग्रेस द्वारा हटाया जा सकता है।"
        ]
      },
      {
        heading: ["The Congress and The Supreme Court", "कांग्रेस और सुप्रीम कोर्ट"],
        body: [
          "The Congress (The Legislature):\nBicameral structure established by the 'Great Compromise':\n1. House of Representatives (Lower House):\n   • 435 members, elected for 2-year terms.\n   • Representation based on state population.\n   • Originates all revenue (tax) bills.\n2. The Senate (Upper House):\n   • 100 members (2 from each state, ensuring equality of states regardless of size), elected for 6-year terms.\n   • The most powerful upper house in the world.\n   • Special powers: Ratifies treaties (2/3 majority), confirms presidential appointments (simple majority), acts as the jury in impeachment trials.\n\nThe Supreme Court (The Judiciary):\n• Composition: 9 Justices appointed for life by the President with Senate approval.\n• Marbury v. Madison (1803): Chief Justice John Marshall established the principle of Judicial Review.\n• Judicial Review: The power to declare Acts of Congress or Executive orders unconstitutional. \n• Role: It acts as the guardian of the Constitution and the ultimate arbiter in federal-state disputes. The US Supreme Court is arguably the most powerful judiciary in the world due to its expansive use of judicial review.",
          "कांग्रेस (विधायिका):\nद्विसदनीय संरचना:\n1. हाउस ऑफ रिप्रेजेंटेटिव्स (निचला सदन): 435 सदस्य, 2 साल का कार्यकाल। राज्य की जनसंख्या पर आधारित।\n2. सीनेट (ऊपरी सदन): 100 सदस्य (प्रत्येक राज्य से 2), 6 साल का कार्यकाल। दुनिया का सबसे शक्तिशाली ऊपरी सदन। संधियों की पुष्टि करता है।\n\nसुप्रीम कोर्ट (न्यायपालिका):\n• संरचना: 9 न्यायाधीश, राष्ट्रपति द्वारा जीवन भर के लिए नियुक्त (सीनेट की मंजूरी से)।\n• मार्बरी बनाम मैडिसन (1803): मुख्य न्यायाधीश जॉन मार्शल ने 'न्यायिक समीक्षा' का सिद्धांत स्थापित किया।\n• न्यायिक समीक्षा: कांग्रेस के अधिनियमों को असंवैधानिक घोषित करने की शक्ति। यह दुनिया की सबसे शक्तिशाली न्यायपालिका मानी जाती है।"
        ]
      }
    ],
    quotes: [
      ["James Madison: \"The accumulation of all powers, legislative, executive, and judiciary, in the same hands... may justly be pronounced the very definition of tyranny.\" (Federalist No. 47)", "जेम्स मैडिसन: \"विधायी, कार्यकारी और न्यायिक—सभी शक्तियों का एक ही हाथ में संचय... तानाशाही की परिभाषा है।\""],
      ["Woodrow Wilson: \"The President is at liberty, both in law and conscience, to be as big a man as he can.\"", "वुडरो विल्सन: \"राष्ट्रपति कानून और विवेक दोनों में उतना बड़ा आदमी बनने के लिए स्वतंत्र है जितना वह बन सकता है।\""],
      ["Chief Justice John Marshall: \"It is emphatically the province and duty of the judicial department to say what the law is.\" (Marbury v. Madison)", "मुख्य न्यायाधीश जॉन मार्शल: \"यह निश्चित रूप से न्यायिक विभाग का कर्तव्य है कि वह बताए कि कानून क्या है।\""],
    ],
    evaluation: [
      "The US Constitution's system of checks and balances brilliantly prevents authoritarianism, fulfilling the Founders' goals. However, in modern times, this exact feature often leads to 'gridlock' (policy paralysis), especially when different parties control the Presidency and Congress (divided government). The Electoral College is criticized as undemocratic because a candidate can win the presidency while losing the national popular vote. Additionally, the lifetime appointment of Supreme Court justices has heavily politicized the judicial confirmation process, making the Court a highly ideological battleground.",
      "US संविधान की नियंत्रण और संतुलन प्रणाली तानाशाही को रोकती है। हालांकि, आधुनिक समय में, यह अक्सर नीतिगत गतिरोध (gridlock) की ओर ले जाती है, खासकर जब विभिन्न दल राष्ट्रपति और कांग्रेस को नियंत्रित करते हैं। इलेक्टोरल कॉलेज की आलोचना अलोकतांत्रिक होने के लिए की जाती है। इसके अतिरिक्त, सुप्रीम कोर्ट के न्यायाधीशों की आजीवन नियुक्ति ने न्यायिक प्रक्रिया का भारी राजनीतिकरण कर दिया है।"
    ],
    conclusion: [
      "The US political system is the world's archetypal presidential democracy and federal republic. Built on a rigid constitution and strict separation of powers, it creates a dynamic tension between the President, Congress, and the Supreme Court. While prone to gridlock, its enduring stability over two centuries highlights the genius of its constitutional design.",
      "US राजनीतिक प्रणाली दुनिया का मूल अध्यक्षीय लोकतंत्र और संघीय गणराज्य है। कठोर संविधान और शक्तियों के सख्त पृथक्करण पर निर्मित, यह राष्ट्रपति, कांग्रेस और सुप्रीम कोर्ट के बीच एक तनाव पैदा करता है। गतिरोध की संभावना के बावजूद, दो सदियों से इसकी स्थायी स्थिरता इसके डिजाइन की प्रतिभा को उजागर करती है।"
    ],
    shortQ: [
      ["What is the significance of Marbury v. Madison (1803)?", "मार्बरी बनाम मैडिसन (1803) का क्या महत्व है?"],
      ["How is the US Senate composed?", "US सीनेट की संरचना कैसे होती है?"],
      ["What is the term limit for a US President?", "US राष्ट्रपति के लिए कार्यकाल की सीमा क्या है?"],
      ["Explain the concept of 'Checks and Balances'.", "'नियंत्रण और संतुलन' की अवधारणा की व्याख्या करें।"],
      ["What is the Bill of Rights in the US context?", "US संदर्भ में बिल ऑफ राइट्स क्या है?"],
    ],
    longQ: [
      ["Discuss the main features of the US Constitution.", "US संविधान की मुख्य विशेषताओं पर चर्चा करें।"],
      ["Explain the system of Separation of Powers and Checks and Balances in the US.", "US में शक्तियों के पृथक्करण और नियंत्रण-संतुलन की प्रणाली की व्याख्या करें।"],
      ["Evaluate the powers and position of the US President.", "US राष्ट्रपति की शक्तियों और स्थिति का मूल्यांकन करें।"],
      ["'The US Senate is the most powerful upper house in the world.' Discuss.", "'US सीनेट दुनिया का सबसे शक्तिशाली ऊपरी सदन है।' चर्चा करें।"],
      ["Analyze the role of the US Supreme Court with special reference to Judicial Review.", "न्यायिक समीक्षा के विशेष संदर्भ में US सुप्रीम कोर्ट की भूमिका का विश्लेषण करें।"],
    ],
    mcqs: [
      { q: ["The US Constitution was drafted at the convention in:", "US संविधान का मसौदा किस सम्मेलन में तैयार किया गया था?"], opts: [["Washington", "वाशिंगटन"], ["Philadelphia", "फिलाडेल्फिया"], ["New York", "न्यूयॉर्क"], ["Boston", "बोस्टन"]], correct: 1 },
      { q: ["Which Amendment limits the US President to two terms?", "कौन सा संशोधन US राष्ट्रपति को दो कार्यकालों तक सीमित करता है?"], opts: [["1st Amendment", "पहला"], ["10th Amendment", "10वां"], ["22nd Amendment", "22वां"], ["25th Amendment", "25वां"]], correct: 2 },
      { q: ["Total number of members in the US Senate is:", "US सीनेट में कुल सदस्यों की संख्या:"], opts: [["50", "50"], ["100", "100"], ["435", "435"], ["538", "538"]], correct: 1 },
      { q: ["The principle of Judicial Review was established by Chief Justice:", "न्यायिक समीक्षा का सिद्धांत किस मुख्य न्यायाधीश द्वारा स्थापित किया गया था?"], opts: [["John Marshall", "जॉन मार्शल"], ["Earl Warren", "अर्ल वॉरेन"], ["John Roberts", "जॉन रॉबर्ट्स"], ["William Howard Taft", "विलियम हॉवर्ड टैफ्ट"]], correct: 0 },
      { q: ["Presidential appointments to the Cabinet must be approved by:", "कैबिनेट में राष्ट्रपति की नियुक्तियों को किसके द्वारा अनुमोदित किया जाना चाहिए?"], opts: [["House of Representatives", "हाउस ऑफ रिप्रेजेंटेटिव्स"], ["Supreme Court", "सुप्रीम कोर्ट"], ["The Senate", "सीनेट"], ["State Governors", "राज्यों के गवर्नर"]], correct: 2 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Marbury v. Madison (1803) - Judicial Review origin.\n• Article I (Legislature), Article II (Executive), Article III (Judiciary).\n• 22nd Amendment (1951) limits President to 2 terms.\n• Senate powers: Treaties (2/3 majority), Appointments (simple majority).\n• Filibuster: A tactic used in the Senate to delay or block a vote by extending debate (cloture requires 60 votes).\n• Pocket Veto: If Congress adjourns within 10 days of passing a bill and the President doesn't sign it, the bill dies.",
      "UGC NET फोकस:\n• मार्बरी बनाम मैडिसन (1803) - न्यायिक समीक्षा\n• 22वां संशोधन - 2 कार्यकाल सीमा\n• फिलीबस्टर (Filibuster): सीनेट में वोट टालने की रणनीति\n• पॉकेट वीटो (Pocket Veto): राष्ट्रपति की शक्ति"
    ],
    ugcQ: [
      ["Q: What is a Filibuster? A: A procedure in the US Senate to delay or prevent a vote on a bill by talking it to death.", "प्र: फिलीबस्टर क्या है? उ: US सीनेट में एक विधेयक पर मतदान को टालने या रोकने की एक प्रक्रिया।"],
      ["Q: What is Gerrymandering? A: The manipulation of electoral district boundaries to favor a specific political party.", "प्र: गेरीमैंडरिंग (Gerrymandering) क्या है? उ: किसी विशिष्ट राजनीतिक दल के पक्ष में चुनावी जिला सीमाओं में हेरफेर।"],
    ],
  },

  // TOPIC 5
  {
    id: 't5', num: 5,
    title: ["USA: Party System", "यूएसए: दलीय प्रणाली"],
    introduction: [
      "The political landscape of the United States is dominated by a deeply entrenched two-party system, comprising the Democratic Party and the Republican Party. Unlike European political parties, which are often strictly ideological and highly centralized, US political parties have historically been loose, decentralized coalitions of diverse interest groups ('big tents'). The two-party dominance is sustained by the Single-Member District Plurality (FPTP) electoral system and state laws that make it difficult for third parties to get on the ballot. While George Washington famously warned against the \"baneful effects of the spirit of party,\" political parties quickly became the indispensable mechanism for organizing elections and running the government.",
      "संयुक्त राज्य अमेरिका के राजनीतिक परिदृश्य में द्वि-दलीय प्रणाली का वर्चस्व है, जिसमें डेमोक्रेटिक पार्टी और रिपब्लिकन पार्टी शामिल हैं। यूरोपीय दलों के विपरीत, US राजनीतिक दल ऐतिहासिक रूप से विविध हित समूहों के ढीले, विकेंद्रीकृत गठबंधन रहे हैं। द्वि-दलीय प्रभुत्व FPTP चुनावी प्रणाली द्वारा कायम है। हालांकि जॉर्ज वाशिंगटन ने पार्टी की भावना के खिलाफ चेतावनी दी थी, लेकिन राजनीतिक दल जल्दी ही चुनाव आयोजित करने के लिए अपरिहार्य तंत्र बन गए।"
    ],
    concepts: [
      {
        heading: ["The Major Parties and their Ideologies", "प्रमुख दल और उनकी विचारधाराएं"],
        body: [
          "1. The Democratic Party (Founded 1828):\n   • Symbol: Donkey. Color: Blue.\n   • Ideology: Modern liberalism, center-left.\n   • Core Stances: Supports strong federal government intervention in the economy, social welfare programs (healthcare), labor unions, environmental protection, and progressive social issues (LGBTQ+ rights, reproductive rights).\n   • Base: Urban areas, younger voters, minorities, college-educated professionals, West Coast and Northeast.\n\n2. The Republican Party (Grand Old Party / GOP) (Founded 1854):\n   • Symbol: Elephant. Color: Red.\n   • Ideology: Conservatism, center-right to right-wing.\n   • Core Stances: Advocates for free-market capitalism, lower taxes, deregulation, strong national defense, 2nd Amendment rights (gun ownership), and traditional/socially conservative values.\n   • Base: Rural areas, older voters, white working-class, evangelical Christians, South and Midwest.\n\nThird Parties:\n• Examples: Libertarian Party, Green Party.\n• Role: Rarely win elections but can act as 'spoilers' by drawing votes away from a major candidate (e.g., Ralph Nader in 2000).",
          "1. डेमोक्रेटिक पार्टी (1828 में स्थापित):\n   • प्रतीक: गधा। रंग: नीला।\n   • विचारधारा: आधुनिक उदारवाद, केंद्र-वाम।\n   • मुख्य रुख: अर्थव्यवस्था में मजबूत संघीय सरकारी हस्तक्षेप, सामाजिक कल्याण, पर्यावरण संरक्षण और प्रगतिशील सामाजिक मुद्दों का समर्थन।\n   • आधार: शहरी क्षेत्र, युवा मतदाता, अल्पसंख्यक।\n\n2. रिपब्लिकन पार्टी (GOP) (1854 में स्थापित):\n   • प्रतीक: हाथी। रंग: लाल।\n   • विचारधारा: रूढ़िवाद, केंद्र-दक्षिणपंथी।\n   • मुख्य रुख: मुक्त बाजार पूंजीवाद, कम कर, मजबूत राष्ट्रीय रक्षा और पारंपरिक/सामाजिक रूप से रूढ़िवादी मूल्य।\n   • आधार: ग्रामीण क्षेत्र, पुराने मतदाता, दक्षिण और मध्य-पश्चिम।\n\nतीसरे दल: लिबरटेरियन, ग्रीन पार्टी। शायद ही कभी जीतते हैं, लेकिन वोट काट सकते हैं।"
        ]
      },
      {
        heading: ["Features of the US Party System", "US पार्टी प्रणाली की विशेषताएं"],
        body: [
          "1. Decentralized Organization: Parties are highly decentralized. State and local party organizations operate independently of the national committee.\n2. Lack of Strict Party Discipline: Unlike the UK, US lawmakers often vote against their party leadership based on the interests of their specific state/district or personal ideology.\n3. The Primary System: Candidates are not chosen by party bosses in smoke-filled rooms, but by ordinary voters in primary elections. This weakens party control over candidates.\n4. Ideological Polarization: Historically, parties overlapped in the center (conservative Democrats, liberal Republicans). Today, they are deeply polarized and ideologically sorted.\n5. Role of Money and PACs: Campaigns are extremely expensive. Political Action Committees (PACs) and Super PACs play a massive role in funding outside of official party structures.\n6. Spoiler Effect: Due to the winner-take-all electoral college and FPTP voting, voting for a third party is often seen as a \"wasted vote.\"",
          "1. विकेंद्रीकृत संगठन: पार्टियां अत्यधिक विकेंद्रीकृत हैं।\n2. सख्त पार्टी अनुशासन का अभाव: UK के विपरीत, US सांसद अक्सर अपने राज्य के हितों के आधार पर पार्टी नेतृत्व के खिलाफ मतदान करते हैं।\n3. प्राइमरी प्रणाली: उम्मीदवारों को पार्टी आकाओं द्वारा नहीं, बल्कि प्राइमरी चुनावों में आम मतदाताओं द्वारा चुना जाता है।\n4. वैचारिक ध्रुवीकरण: ऐतिहासिक रूप से, पार्टियां केंद्र में ओवरलैप होती थीं। आज, वे गहराई से ध्रुवीकृत हैं।\n5. धन और PAC की भूमिका: अभियान अत्यधिक महंगे हैं। PAC और सुपर PAC फंडिंग में बड़ी भूमिका निभाते हैं।\n6. स्पॉइलर प्रभाव: तीसरे पक्ष के लिए वोट करना अक्सर \"बर्बाद वोट\" के रूप में देखा जाता है।"
        ]
      }
    ],
    quotes: [
      ["George Washington: \"The alternate domination of one faction over another, sharpened by the spirit of revenge, is itself a frightful despotism.\" (Farewell Address, 1796)", "जॉर्ज वाशिंगटन: \"प्रतिशोध की भावना से तेज होकर, एक गुट का दूसरे पर वैकल्पिक प्रभुत्व, अपने आप में एक भयानक तानाशाही है।\""],
      ["Richard Hofstadter: \"The United States was the first nation to have a party system... and the first to accept the idea that an opposition party can be loyal to the nation.\"", "रिचर्ड हॉफस्टैडटर: \"संयुक्त राज्य अमेरिका पार्टी प्रणाली रखने वाला पहला राष्ट्र था... और यह स्वीकार करने वाला पहला कि विपक्षी दल राष्ट्र के प्रति वफादार हो सकता है।\""],
    ],
    evaluation: [
      "The US two-party system provides clarity of choice and typically produces stable majorities (though divided government is common). However, it is increasingly criticized for hyper-polarization, which leads to legislative gridlock. The primary system tends to reward extreme candidates, pushing both parties away from the moderate center. Furthermore, the immense cost of US elections makes parties heavily reliant on wealthy donors and corporations, leading to accusations that the system represents an oligarchy rather than a true democracy. Third parties face insurmountable systemic barriers.",
      "US द्वि-दलीय प्रणाली स्थिर बहुमत पैदा करती है। हालांकि, इसकी ध्रुवीकरण के लिए आलोचना की जाती है, जिससे विधायी गतिरोध पैदा होता है। प्राइमरी प्रणाली चरम उम्मीदवारों को पुरस्कृत करती है। इसके अलावा, US चुनावों की भारी लागत पार्टियों को धनी दाताओं पर निर्भर बनाती है। तीसरे दलों को दुर्गम प्रणालीगत बाधाओं का सामना करना पड़ता है।"
    ],
    conclusion: [
      "The US party system is fundamentally different from European models. While historically characterized by weak discipline and broad, decentralized coalitions, recent decades have witnessed intense ideological polarization. The dominance of the Democrats and Republicans remains absolute, deeply entrenched by the electoral system and campaign finance structures.",
      "US पार्टी प्रणाली यूरोपीय मॉडल से मौलिक रूप से भिन्न है। हालांकि ऐतिहासिक रूप से इसमें कमजोर अनुशासन था, हाल के दशकों में तीव्र वैचारिक ध्रुवीकरण देखा गया है। चुनावी प्रणाली द्वारा डेमोक्रेट्स और रिपब्लिकन का प्रभुत्व पूर्ण बना हुआ है।"
    ],
    shortQ: [
      ["What is a 'Primary Election' in the US?", "US में 'प्राइमरी चुनाव' क्या है?"],
      ["Name the two main political parties in the US and their symbols.", "US के दो मुख्य राजनीतिक दलों और उनके प्रतीकों के नाम बताएं।"],
      ["What is the Grand Old Party (GOP)?", "ग्रैंड ओल्ड पार्टी (GOP) क्या है?"],
      ["Why do third parties struggle in the US system?", "US प्रणाली में तीसरे दल क्यों संघर्ष करते हैं?"],
      ["What is a PAC?", "PAC क्या है?"],
    ],
    longQ: [
      ["Discuss the main features of the US Party System.", "US पार्टी प्रणाली की मुख्य विशेषताओं पर चर्चा करें।"],
      ["Compare and contrast the ideologies of the Democratic and Republican parties.", "डेमोक्रेटिक और रिपब्लिकन पार्टियों की विचारधाराओं की तुलना करें।"],
      ["Explain the role and significance of primary elections in the US.", "US में प्राइमरी चुनावों की भूमिका और महत्व की व्याख्या करें।"],
      ["Compare the US Party System with the UK Party System.", "US पार्टी प्रणाली की UK पार्टी प्रणाली से तुलना करें।"],
      ["Critically examine the impact of polarization on US politics.", "US राजनीति पर ध्रुवीकरण के प्रभाव का आलोचनात्मक परीक्षण करें।"],
    ],
    mcqs: [
      { q: ["The symbol of the Republican Party is:", "रिपब्लिकन पार्टी का प्रतीक है:"], opts: [["Donkey", "गधा"], ["Elephant", "हाथी"], ["Eagle", "चील"], ["Star", "तारा"]], correct: 1 },
      { q: ["Which party is generally associated with political conservatism in the US?", "US में राजनीतिक रूढ़िवाद से आम तौर पर कौन सी पार्टी जुड़ी है?"], opts: [["Democratic Party", "डेमोक्रेटिक"], ["Libertarian Party", "लिबरटेरियन"], ["Green Party", "ग्रीन"], ["Republican Party", "रिपब्लिकन"]], correct: 3 },
      { q: ["Elections held within a party to choose its candidate for the general election are called:", "आम चुनाव के लिए उम्मीदवार चुनने के लिए पार्टी के भीतर होने वाले चुनावों को क्या कहा जाता है?"], opts: [["Mid-terms", "मिड-टर्म्स"], ["By-elections", "उप-चुनाव"], ["Primary elections", "प्राइमरी चुनाव"], ["Recall elections", "रिकॉल चुनाव"]], correct: 2 },
      { q: ["PAC stands for:", "PAC का अर्थ है:"], opts: [["Public Affairs Committee", "पब्लिक अफेयर्स कमेटी"], ["Political Action Committee", "पॉलिटिकल एक्शन कमेटी"], ["Party Action Council", "पार्टी एक्शन काउंसिल"], ["People's Alliance Congress", ""]], correct: 1 },
      { q: ["Who warned against the 'spirit of party' in his farewell address?", "अपने विदाई भाषण में 'पार्टी की भावना' के खिलाफ किसने चेतावनी दी?"], opts: [["Abraham Lincoln", "अब्राहम लिंकन"], ["Thomas Jefferson", "थॉमस जेफरसन"], ["George Washington", "जॉर्ज वाशिंगटन"], ["James Madison", "जेम्स मैडिसन"]], correct: 2 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Democratic Party: Liberalism (Donkey, Blue).\n• Republican Party (GOP): Conservatism (Elephant, Red).\n• Primaries and Caucuses: Methods of selecting presidential nominees.\n• PACs and Super PACs: Campaign finance vehicles (Citizens United v. FEC 2010 Supreme Court case allowed unlimited corporate spending).\n• Gerrymandering: Drawing electoral districts to benefit a specific party.\n• Swing States (Purple states): States that do not consistently vote for one party (e.g., Pennsylvania, Florida).",
      "UGC NET फोकस:\n• डेमोक्रेटिक (उदारवाद, नीला), रिपब्लिकन (रूढ़िवाद, लाल)\n• PACs और सुपर PACs: अभियान वित्त\n• स्विंग स्टेट्स (पर्पल स्टेट्स): जो राज्य लगातार एक पार्टी को वोट नहीं देते।"
    ],
    ugcQ: [
      ["Q: What was the impact of the Citizens United (2010) Supreme Court ruling? A: It ruled that corporate funding of independent political broadcasts cannot be limited, leading to the creation of Super PACs.", "प्र: सिटिजन्स यूनाइटेड (2010) के फैसले का क्या प्रभाव था? उ: इसने स्वतंत्र राजनीतिक प्रसारणों के कॉर्पोरेट वित्तपोषण की सीमा हटा दी, जिससे सुपर PACs का निर्माण हुआ।"],
    ],
  },

  // TOPIC 6
  {
    id: 't6', num: 6,
    title: ["Switzerland: Legislature, Executive, Direct Democracy", "स्विट्जरलैंड: विधायिका, कार्यपालिका, प्रत्यक्ष लोकतंत्र"],
    introduction: [
      "Switzerland offers one of the most unique and successful political models in the world. It is the textbook example of a multi-ethnic, multi-lingual society governed through a highly decentralized federal structure (Cantons) and consensus democracy. The Swiss constitution (totally revised in 1999) establishes a system that is neither purely parliamentary (like the UK) nor purely presidential (like the US). Its most distinguishing feature is a plural executive (Federal Council) and the extensive use of Direct Democracy devices (Referendum and Initiative), allowing citizens to directly participate in law-making, making Switzerland the closest modern equivalent to ancient Athenian democracy.",
      "स्विट्जरलैंड दुनिया के सबसे अनोखे और सफल राजनीतिक मॉडलों में से एक है। यह अत्यधिक विकेंद्रीकृत संघीय संरचना (कैंटन) और सर्वसम्मति लोकतंत्र के माध्यम से शासित बहु-जातीय समाज का एक उदाहरण है। स्विस प्रणाली न तो विशुद्ध रूप से संसदीय है और न ही अध्यक्षीय। इसकी सबसे विशिष्ट विशेषता बहुल कार्यपालिका (फेडरल काउंसिल) और प्रत्यक्ष लोकतंत्र उपकरणों (जनमत संग्रह और पहल) का व्यापक उपयोग है, जो नागरिकों को सीधे कानून बनाने में भाग लेने की अनुमति देता है।"
    ],
    concepts: [
      {
        heading: ["The Legislature and Plural Executive", "विधायिका और बहुल कार्यपालिका"],
        body: [
          "The Federal Assembly (Legislature):\nBicameral parliament with absolutely equal powers for both houses:\n1. National Council (Lower House): 200 members elected by proportional representation, representing the population.\n2. Council of States (Upper House): 46 members (2 from each full canton, 1 from half-cantons), representing the cantons.\n• The Federal Assembly elects the members of the Executive and the Judiciary.\n\nThe Federal Council (Plural Executive):\n• Unique Feature: Instead of one Prime Minister or President, the executive consists of a 7-member council.\n• Elected by the Federal Assembly for a fixed 4-year term. They cannot be removed by a vote of no-confidence.\n• Collegiality: All 7 members have equal status and make decisions collectively.\n• 'Magic Formula' (Zauberformel): Since 1959, the 7 seats are distributed among the 4 largest parties (currently 2-2-2-1) to ensure multi-party consensus.\n• Swiss President: The title rotates annually among the 7 councilors. The President is merely \"first among equals\" and chairs the meetings, possessing no special executive powers.",
          "संघीय सभा (विधायिका):\nद्विसदनीय संसद (दोनों सदनों की समान शक्तियां):\n1. राष्ट्रीय परिषद (निचला सदन): 200 सदस्य, जनसंख्या का प्रतिनिधित्व।\n2. राज्यों की परिषद (ऊपरी सदन): 46 सदस्य, कैंटन का प्रतिनिधित्व।\n\nसंघीय परिषद (बहुल कार्यपालिका):\n• अनूठी विशेषता: एक PM या राष्ट्रपति के बजाय, कार्यपालिका में 7 सदस्यीय परिषद होती है।\n• 4 साल के निश्चित कार्यकाल के लिए चुनी जाती है। अविश्वास प्रस्ताव द्वारा हटाया नहीं जा सकता।\n• 'मैजिक फॉर्मूला': 7 सीटें 4 सबसे बड़ी पार्टियों के बीच बांटी जाती हैं।\n• स्विस राष्ट्रपति: 7 पार्षदों के बीच प्रतिवर्ष घूमता है। कोई विशेष शक्ति नहीं।"
        ]
      },
      {
        heading: ["Direct Democracy", "प्रत्यक्ष लोकतंत्र"],
        body: [
          "Switzerland is famous for practicing Direct Democracy alongside representative democracy. Citizens have the ultimate word on constitutional and legislative matters.\n\nKey Devices of Direct Democracy:\n1. Mandatory Referendum:\n   • All constitutional amendments passed by the Federal Assembly MUST be submitted to a popular vote.\n   • Requires a \"double majority\" to pass (majority of total voters nationally + majority in more than half of the cantons).\n2. Optional (Facultative) Referendum:\n   • Citizens can challenge any ordinary law passed by the parliament.\n   • Requires gathering 50,000 signatures within 100 days of the law's publication. If successful, the law is put to a national vote.\n3. Popular Initiative:\n   • Citizens can propose a completely new amendment to the Constitution.\n   • Requires gathering 100,000 signatures within 18 months.\n   • Parliament cannot block it; it must go to a national vote (requires double majority to pass).\n4. Landsgemeinde:\n   • Open-air public assemblies held in a few small cantons (Appenzell Innerrhoden and Glarus) where citizens vote on laws by a show of hands. The purest form of direct democracy.",
          "प्रत्यक्ष लोकतंत्र के प्रमुख उपकरण:\n1. अनिवार्य जनमत संग्रह: सभी संवैधानिक संशोधनों को लोकप्रिय वोट के लिए प्रस्तुत किया जाना चाहिए। (दोहरा बहुमत आवश्यक)।\n2. वैकल्पिक जनमत संग्रह: नागरिक संसद द्वारा पारित किसी भी सामान्य कानून को चुनौती दे सकते हैं। (100 दिनों में 50,000 हस्ताक्षर)।\n3. लोकप्रिय पहल: नागरिक संविधान में नए संशोधन का प्रस्ताव कर सकते हैं। (18 महीने में 100,000 हस्ताक्षर)।\n4. लैंड्सगेमाइंड (Landsgemeinde): छोटे कैंटनों में खुली हवा में सार्वजनिक सभाएं जहां नागरिक हाथ उठाकर वोट करते हैं।"
        ]
      }
    ],
    quotes: [
      ["Lord Bryce: \"Switzerland is the only country in the world where direct democracy operates effectively at the national level.\"", "लॉर्ड ब्राइस: \"स्विट्जरलैंड दुनिया का एकमात्र देश है जहां राष्ट्रीय स्तर पर प्रत्यक्ष लोकतंत्र प्रभावी ढंग से काम करता है।\""],
      ["A.V. Dicey: \"The Referendum is the people's veto.\"", "ए.वी. डायसी: \"जनमत संग्रह जनता का वीटो है।\""],
    ],
    evaluation: [
      "The Swiss model of direct democracy creates a highly politically engaged citizenry and ensures that laws have strong public legitimacy. The plural executive creates stability and forces political consensus rather than adversarial zero-sum politics. However, direct democracy has drawbacks: frequent voting causes 'voter fatigue' (low turnout); it slows down the legislative process significantly; and popular initiatives can sometimes be used by populist groups to pass discriminatory laws (e.g., the 2009 ban on minarets). Despite this, it remains a highly stable and prosperous model.",
      "स्विस मॉडल अत्यधिक राजनीतिक रूप से लगे हुए नागरिक बनाता है और सुनिश्चित करता है कि कानूनों की मजबूत सार्वजनिक वैधता हो। बहुल कार्यपालिका स्थिरता पैदा करती है। हालांकि, कमियां हैं: बार-बार मतदान से 'मतदाता थकान' होती है; यह विधायी प्रक्रिया को धीमा करता है; और कभी-कभी भेदभावपूर्ण कानून पारित करने के लिए इसका दुरुपयोग किया जा सकता है। इसके बावजूद, यह एक अत्यधिक स्थिर मॉडल है।"
    ],
    conclusion: [
      "Switzerland's political system is a triumph of institutional design. By combining a plural, consensus-based executive with powerful tools of direct democracy, it has managed to unite a diverse population into a highly stable and prosperous federal state. It challenges the conventional wisdom that executive power must be concentrated in a single individual or that lawmaking must be left entirely to elected representatives.",
      "स्विट्जरलैंड की राजनीतिक प्रणाली संस्थागत डिजाइन की जीत है। बहुल कार्यपालिका को प्रत्यक्ष लोकतंत्र के शक्तिशाली उपकरणों के साथ जोड़कर, इसने एक विविध आबादी को एक अत्यधिक स्थिर संघीय राज्य में एकजुट किया है।"
    ],
    shortQ: [
      ["What is the Plural Executive in Switzerland called?", "स्विट्जरलैंड में बहुल कार्यपालिका को क्या कहा जाता है?"],
      ["What is the 'Magic Formula' in Swiss politics?", "स्विस राजनीति में 'मैजिक फॉर्मूला' क्या है?"],
      ["How many signatures are needed for a popular initiative?", "लोकप्रिय पहल के लिए कितने हस्ताक्षरों की आवश्यकता होती है?"],
      ["What is a Landsgemeinde?", "लैंड्सगेमाइंड क्या है?"],
      ["What is a 'double majority' in a Swiss referendum?", "स्विस जनमत संग्रह में 'दोहरा बहुमत' क्या है?"],
    ],
    longQ: [
      ["Discuss the composition and unique features of the Swiss Federal Council.", "स्विस संघीय परिषद की संरचना और अनूठी विशेषताओं पर चर्चा करें."],
      ["Explain the devices of Direct Democracy used in Switzerland.", "स्विट्जरलैंड में प्रयुक्त प्रत्यक्ष लोकतंत्र के उपकरणों की व्याख्या करें।"],
      ["Evaluate the merits and demerits of direct democracy in Switzerland.", "स्विट्जरलैंड में प्रत्यक्ष लोकतंत्र के गुणों और दोषों का मूल्यांकन करें।"],
      ["'The Swiss President is merely first among equals.' Discuss.", "'स्विस राष्ट्रपति केवल समानों में प्रथम है।' चर्चा करें।"],
      ["Analyze the structure and powers of the Swiss Federal Assembly.", "स्विस संघीय सभा की संरचना और शक्तियों का विश्लेषण करें।"],
    ],
    mcqs: [
      { q: ["The Swiss Federal Council consists of how many members?", "स्विस संघीय परिषद में कितने सदस्य होते हैं?"], opts: [["5", "5"], ["7", "7"], ["9", "9"], ["11", "11"]], correct: 1 },
      { q: ["Which of the following is a direct democracy tool used in Switzerland?", "स्विट्जरलैंड में प्रत्यक्ष लोकतंत्र का कौन सा उपकरण उपयोग किया जाता है?"], opts: [["Filibuster", "फिलीबस्टर"], ["Referendum", "जनमत संग्रह"], ["Impeachment", "महाभियोग"], ["Judicial Review", "न्यायिक समीक्षा"]], correct: 1 },
      { q: ["How is the President of Switzerland elected?", "स्विट्जरलैंड का राष्ट्रपति कैसे चुना जाता है?"], opts: [["Directly by the people", "जनता द्वारा प्रत्यक्ष"], ["Rotates annually among Federal Council members", "संघीय परिषद के सदस्यों के बीच प्रतिवर्ष घूमता है"], ["Elected by the cantons", "कैंटन द्वारा"], ["Appointed by the Supreme Court", "सुप्रीम कोर्ट द्वारा"]], correct: 1 },
      { q: ["The open-air public assembly in Swiss cantons is known as:", "स्विस कैंटन में खुली हवा में सार्वजनिक सभा को जाना जाता है:"], opts: [["Bundestag", "बुंडेस्टाग"], ["Diet", "डाइट"], ["Landsgemeinde", "लैंड्सगेमाइंड"], ["Duma", "ड्यूमा"]], correct: 2 },
      { q: ["An Optional Referendum requires how many signatures?", "एक वैकल्पिक जनमत संग्रह के लिए कितने हस्ताक्षरों की आवश्यकता होती है?"], opts: [["10,000", "10,000"], ["50,000", "50,000"], ["100,000", "100,000"], ["500,000", "500,000"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Direct Democracy devices: Referendum (Mandatory & Optional), Initiative, Recall (at canton level only).\n• Plural Executive: Federal Council (7 members, 4-year term, cannot be removed by no-confidence).\n• Magic Formula (Zauberformel): Power-sharing agreement (2:2:2:1 ratio of major parties).\n• Landsgemeinde: Open-air assembly (purest direct democracy form).\n• Double Majority: Required for constitutional changes (Majority of people + Majority of Cantons).",
      "UGC NET फोकस:\n• प्रत्यक्ष लोकतंत्र उपकरण: जनमत संग्रह, पहल।\n• बहुल कार्यपालिका: 7 सदस्य, 4 साल।\n• मैजिक फॉर्मूला: सत्ता-साझाकरण।\n• दोहरा बहुमत: संवैधानिक परिवर्तनों के लिए आवश्यक।"
    ],
    ugcQ: [
      ["Q: What is Collegiality in the Swiss Executive? A: All 7 members of the Federal Council bear collective responsibility for decisions and present a united front, regardless of their individual party affiliations.", "प्र: स्विस कार्यपालिका में कॉलेजियलिटी क्या है? उ: सभी 7 सदस्य निर्णयों के लिए सामूहिक जिम्मेदारी लेते हैं और संयुक्त मोर्चा प्रस्तुत करते हैं।"],
    ],
  },

  // TOPIC 7
  {
    id: 't7', num: 7,
    title: ["Switzerland: Party System", "स्विट्जरलैंड: दलीय प्रणाली"],
    introduction: [
      "The Swiss party system is an integral part of its consensus democracy (Konkordanzdemokratie). Unlike the adversarial two-party systems found in the UK or USA, Switzerland has a highly fragmented multi-party system. No single party ever wins an absolute majority, necessitating permanent coalition governments. This system is deeply influenced by the country's diverse linguistic (German, French, Italian) and religious (Catholic, Protestant) fault lines, as well as its proportional representation electoral system. Political parties in Switzerland are relatively weak at the national level but very strong at the cantonal (regional) level.",
      "स्विस पार्टी प्रणाली इसके सर्वसम्मति लोकतंत्र का एक अभिन्न अंग है। UK या USA में पाई जाने वाली द्वि-दलीय प्रणालियों के विपरीत, स्विट्जरलैंड में एक अत्यधिक खंडित बहु-दलीय प्रणाली है। कोई भी एक दल कभी पूर्ण बहुमत नहीं जीतता है, जिससे स्थायी गठबंधन सरकारों की आवश्यकता होती है। राजनीतिक दल राष्ट्रीय स्तर पर अपेक्षाकृत कमजोर लेकिन कैंटोनल (क्षेत्रीय) स्तर पर बहुत मजबूत होते हैं।"
    ],
    concepts: [
      {
        heading: ["Major Political Parties", "प्रमुख राजनीतिक दल"],
        body: [
          "The 'Big Four' Parties (which make up the Federal Council via the Magic Formula):\n1. Swiss People's Party (SVP):\n   • Ideology: Right-wing, national conservatism, Euroscepticism, strict immigration policies.\n   • Status: Currently the largest party in Switzerland.\n2. Social Democratic Party (SP):\n   • Ideology: Center-left, social democracy, pro-European, strong welfare state.\n3. The Liberals (FDP):\n   • Ideology: Center-right, classical liberalism, pro-business, free market.\n4. The Center (Die Mitte) (Formerly Christian Democratic People's Party):\n   • Ideology: Centrism, Christian democracy, moderate conservatism.\n\nOther Significant Parties:\n• The Green Party: Left-wing, environmentalism.\n• The Green Liberal Party: Center, environmentalism combined with free-market economics.",
          "'बिग फोर' पार्टियां (जो मैजिक फॉर्मूला के माध्यम से संघीय परिषद बनाती हैं):\n1. स्विस पीपुल्स पार्टी (SVP): दक्षिणपंथी, राष्ट्रीय रूढ़िवाद, सख्त आव्रजन नीतियां। सबसे बड़ी पार्टी।\n2. सोशल डेमोक्रेटिक पार्टी (SP): केंद्र-वाम, सामाजिक लोकतंत्र, समर्थक-यूरोपीय।\n3. द लिबरल्स (FDP): केंद्र-दक्षिणपंथी, व्यापार समर्थक, मुक्त बाजार।\n4. द सेंटर (पूर्व में क्रिश्चियन डेमोक्रेट्स): केंद्रवाद, ईसाई लोकतंत्र।\n\nअन्य महत्वपूर्ण पार्टियां: ग्रीन पार्टी, ग्रीन लिबरल पार्टी।"
        ]
      },
      {
        heading: ["Features of the Swiss Party System", "स्विस पार्टी प्रणाली की विशेषताएं"],
        body: [
          "Key Features:\n1. Extreme Multi-Partism: Proportional representation ensures many parties enter parliament. A fragmented landscape.\n2. Permanent Coalition (Consensus Democracy): Since 1959, the 4 largest parties have governed together in the Federal Council based on the 'Magic Formula'. There is no traditional 'Government vs. Opposition' dynamic.\n3. Weak National Party Organization: Parties are organized as federations of highly autonomous cantonal parties. Cantonal sections are much more powerful than the national headquarters.\n4. Muted Polarization: Because parties must constantly cooperate in the executive and navigate direct democracy, extreme polarization is structurally discouraged (though the rise of the SVP has challenged this).\n5. Impact of Direct Democracy: Parties cannot simply pass laws; they must constantly convince the public to win referendums. Often, interest groups and civic organizations are as powerful as political parties during referendum campaigns.",
          "प्रमुख विशेषताएं:\n1. अत्यधिक बहु-दलीय प्रणाली: आनुपातिक प्रतिनिधित्व यह सुनिश्चित करता है कि कई दल संसद में प्रवेश करें।\n2. स्थायी गठबंधन (सर्वसम्मति लोकतंत्र): मैजिक फॉर्मूला के आधार पर 4 सबसे बड़ी पार्टियां एक साथ शासन करती हैं। कोई 'सरकार बनाम विपक्ष' नहीं है।\n3. कमजोर राष्ट्रीय संगठन: कैंटोनल शाखाएं राष्ट्रीय मुख्यालय की तुलना में अधिक शक्तिशाली हैं।\n4. म्यूटेड ध्रुवीकरण: क्योंकि पार्टियों को कार्यपालिका में सहयोग करना चाहिए, ध्रुवीकरण हतोत्साहित होता है।\n5. प्रत्यक्ष लोकतंत्र का प्रभाव: पार्टियां केवल कानून पारित नहीं कर सकतीं; उन्हें जनमत संग्रह जीतने के लिए जनता को मनाना होगा।"
        ]
      }
    ],
    quotes: [
      ["Arend Lijphart: \"Switzerland is the most perfect example of a consensus democracy in the world.\"", "आरेंड लिजफार्ट: \"स्विट्जरलैंड दुनिया में सर्वसम्मति लोकतंत्र का सबसे आदर्श उदाहरण है।\""],
      ["Hanspeter Kriesi: \"Direct democracy forces Swiss political parties to be constantly in campaign mode, but also forces them into broad compromises.\"", "हंसपीटर क्रिसी: \"प्रत्यक्ष लोकतंत्र स्विस राजनीतिक दलों को लगातार अभियान मोड में रहने के लिए मजबूर करता है, लेकिन उन्हें व्यापक समझौते के लिए भी मजबूर करता है।\""],
    ],
    evaluation: [
      "The Swiss party system excels at integrating diverse societal groups into the political process, ensuring political stability in a country divided by language and religion. The consensus model prevents the \"tyranny of the majority.\" However, the system has drawbacks. The permanent coalition makes it difficult for voters to effect rapid political change—elections rarely result in major policy shifts. Furthermore, the lack of a strong parliamentary opposition means there is less critical oversight of the executive. Recently, the populist right (SVP) has utilized direct democracy to bypass the consensus model, creating new tensions.",
      "स्विस पार्टी प्रणाली विविध सामाजिक समूहों को राजनीतिक प्रक्रिया में एकीकृत करने में उत्कृष्ट है। सर्वसम्मति मॉडल \"बहुमत की तानाशाही\" को रोकता है। हालांकि, स्थायी गठबंधन के कारण मतदाताओं के लिए तेजी से राजनीतिक परिवर्तन लाना मुश्किल होता है—चुनावों के परिणामस्वरूप शायद ही कभी बड़े नीतिगत बदलाव होते हैं। मजबूत विपक्ष के अभाव का मतलब है कि कार्यपालिका की कम आलोचनात्मक निगरानी होती है।"
    ],
    conclusion: [
      "The Swiss party system is dictated by the rules of proportional representation, federalism, and direct democracy. It relies on the principle of concordance (Concordance Democracy), where major parties share power rather than compete for absolute dominance. While this makes the system slow to change, it provides unmatched stability and broad representation.",
      "स्विस पार्टी प्रणाली आनुपातिक प्रतिनिधित्व, संघवाद और प्रत्यक्ष लोकतंत्र के नियमों द्वारा निर्धारित की जाती है। यह कॉनकॉर्डेंस (Concordance) के सिद्धांत पर निर्भर करती है, जहां प्रमुख दल पूर्ण प्रभुत्व के लिए प्रतिस्पर्धा करने के बजाय सत्ता साझा करते हैं।"
    ],
    shortQ: [
      ["Which is currently the largest political party in Switzerland?", "वर्तमान में स्विट्जरलैंड की सबसे बड़ी राजनीतिक पार्टी कौन सी है?"],
      ["What does the term 'Concordance Democracy' mean?", "'कॉनकॉर्डेंस डेमोक्रेसी' शब्द का क्या अर्थ है?"],
      ["Why is there no traditional 'opposition' in the Swiss Federal Assembly?", "स्विस संघीय सभा में कोई पारंपरिक 'विपक्ष' क्यों नहीं है?"],
      ["Name two major Swiss political parties.", "दो प्रमुख स्विस राजनीतिक दलों के नाम बताएं।"],
      ["How does direct democracy affect Swiss political parties?", "प्रत्यक्ष लोकतंत्र स्विस राजनीतिक दलों को कैसे प्रभावित करता है?"],
    ],
    longQ: [
      ["Discuss the main features of the Swiss Party System.", "स्विस पार्टी प्रणाली की मुख्य विशेषताओं पर चर्चा करें।"],
      ["Explain the concept of Consensus Democracy in the context of Switzerland.", "स्विट्जरलैंड के संदर्भ में सर्वसम्मति लोकतंत्र की अवधारणा की व्याख्या करें।"],
      ["Analyze the impact of the 'Magic Formula' on Swiss political parties.", "स्विस राजनीतिक दलों पर 'मैजिक फॉर्मूला' के प्रभाव का विश्लेषण करें।"],
      ["Why are Swiss political parties considered weak at the national level?", "राष्ट्रीय स्तर पर स्विस राजनीतिक दलों को कमजोर क्यों माना जाता है?"],
      ["Evaluate the role of political parties in a direct democracy like Switzerland.", "स्विट्जरलैंड जैसे प्रत्यक्ष लोकतंत्र में राजनीतिक दलों की भूमिका का मूल्यांकन करें।"],
    ],
    mcqs: [
      { q: ["Which party is currently the largest in the Swiss National Council?", "वर्तमान में स्विस नेशनल काउंसिल में कौन सी पार्टी सबसे बड़ी है?"], opts: [["Social Democratic Party", "सोशल डेमोक्रेटिक"], ["Swiss People's Party (SVP)", "स्विस पीपुल्स पार्टी"], ["The Liberals", "द लिबरल्स"], ["Green Party", "ग्रीन पार्टी"]], correct: 1 },
      { q: ["Switzerland's political system is often described as a:", "स्विट्जरलैंड की राजनीतिक प्रणाली को अक्सर इस रूप में वर्णित किया जाता है:"], opts: [["Majoritarian democracy", "बहुमत लोकतंत्र"], ["Consensus democracy", "सर्वसम्मति लोकतंत्र"], ["Presidential system", "अध्यक्षीय प्रणाली"], ["One-party state", "एक-दलीय राज्य"]], correct: 1 },
      { q: ["The electoral system used for the Swiss National Council is:", "स्विस नेशनल काउंसिल के लिए किस चुनावी प्रणाली का उपयोग किया जाता है?"], opts: [["First-Past-The-Post", "FPTP"], ["Proportional Representation", "आनुपातिक प्रतिनिधित्व"], ["Two-round system", "टू-राउंड सिस्टम"], ["Alternative Vote", "वैकल्पिक वोट"]], correct: 1 },
      { q: ["The 'Magic Formula' distributes seats among how many major parties?", "'मैजिक फॉर्मूला' कितनी प्रमुख पार्टियों के बीच सीटें बांटता है?"], opts: [["Two", "दो"], ["Three", "तीन"], ["Four", "चार"], ["Five", "पांच"]], correct: 2 },
      { q: ["In Switzerland, political parties are stronger at the:", "स्विट्जरलैंड में, राजनीतिक दल किस स्तर पर अधिक मजबूत होते हैं?"], opts: [["National level", "राष्ट्रीय स्तर"], ["Cantonal level", "कैंटोनल स्तर"], ["European level", "यूरोपीय स्तर"], ["Municipal level", "नगरपालिका स्तर"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Consensus Democracy (Arend Lijphart): Switzerland is the prime example, contrasting with the Westminster (Majoritarian) model.\n• Key feature: Permanent grand coalition instead of alternating government/opposition.\n• SVP (Swiss People's Party): Right-wing populist party that has grown significantly, often using referendums (e.g., against minarets, immigration).\n• Decentralization: Cantonal party organizations are stronger than the national party.",
      "UGC NET फोकस:\n• सर्वसम्मति लोकतंत्र (Consensus Democracy): आरेंड लिजफार्ट की अवधारणा।\n• SVP (स्विस पीपुल्स पार्टी): दक्षिणपंथी लोकलुभावन पार्टी।\n• विकेंद्रीकरण: कैंटोनल पार्टियां राष्ट्रीय पार्टी से अधिक मजबूत।"
    ],
    ugcQ: [
      ["Q: What distinguishes a Consensus Democracy from a Majoritarian Democracy? A: Majoritarian (UK) relies on 51% ruling the 49%; Consensus (Swiss) aims to include as many groups as possible in the decision-making process.", "प्र: सर्वसम्मति लोकतंत्र को बहुमत लोकतंत्र से क्या अलग करता है? उ: बहुमत (UK) 51% शासन पर निर्भर करता है; सर्वसम्मति (स्विस) निर्णय प्रक्रिया में यथासंभव अधिक समूहों को शामिल करने का लक्ष्य रखता है।"],
    ],
  },

  // TOPIC 8
  {
    id: 't8', num: 8,
    title: ["France: Fifth Republic, President, Prime Minister, Parliament, Party System", "फ्रांस: पांचवां गणराज्य, राष्ट्रपति, प्रधानमंत्री, संसद, दलीय प्रणाली"],
    introduction: [
      "The current political system of France, known as the Fifth Republic, was established in 1958 by Charles de Gaulle to cure the chronic political instability of the parliamentary Fourth Republic. The Fifth Republic introduced a unique 'Semi-Presidential' system—a hybrid model that combines a powerful, directly elected President (head of state) with a Prime Minister (head of government) who is accountable to the Parliament. This system was designed to provide strong executive leadership. Understanding French politics requires analyzing the dynamic balance of power between the President and the Prime Minister, a phenomenon that changes depending on whether they belong to the same political party (Cohabitation).",
      "फ्रांस की वर्तमान राजनीतिक प्रणाली, जिसे पांचवें गणराज्य के रूप में जाना जाता है, 1958 में चार्ल्स डी गॉल द्वारा चौथे गणराज्य की अस्थिरता को दूर करने के लिए स्थापित की गई थी। इसने एक अनूठी 'अर्ध-अध्यक्षीय' प्रणाली पेश की—एक हाइब्रिड मॉडल जो एक शक्तिशाली, सीधे निर्वाचित राष्ट्रपति को एक प्रधानमंत्री के साथ जोड़ता है जो संसद के प्रति जवाबदेह है। फ्रांसीसी राजनीति को समझने के लिए राष्ट्रपति और प्रधानमंत्री के बीच शक्ति संतुलन का विश्लेषण करना आवश्यक है।"
    ],
    concepts: [
      {
        heading: ["The Semi-Presidential System and The Executive", "अर्ध-अध्यक्षीय प्रणाली और कार्यपालिका"],
        body: [
          "The Semi-Presidential System (Dual Executive):\n• The President: Directly elected by the people for a 5-year term (reduced from 7 years in 2000). Highly powerful. Directs foreign policy and defense.\n• The Prime Minister: Appointed by the President but must have the support of the National Assembly. Directs domestic policy and daily government operations.\n\nPowers of the President:\n1. Appoints the Prime Minister.\n2. Can dissolve the National Assembly (lower house) and call fresh elections.\n3. Commander-in-Chief of the Armed Forces (controls the nuclear button).\n4. Can assume emergency dictatorial powers under Article 16 of the Constitution.\n5. Can bypass Parliament and submit laws directly to the people via Referendum (Article 11).\n\nCohabitation:\n• When the President and the majority in the National Assembly belong to opposing political parties.\n• In this scenario, the President must appoint a Prime Minister from the opposing party.\n• Result: The President's domestic powers shrink, and the Prime Minister becomes the dominant figure in domestic affairs, while the President focuses on foreign policy.",
          "अर्ध-अध्यक्षीय प्रणाली (दोहरी कार्यपालिका):\n• राष्ट्रपति: 5 साल के कार्यकाल के लिए जनता द्वारा सीधे निर्वाचित। शक्तिशाली। विदेश नीति का निर्देशन।\n• प्रधानमंत्री: राष्ट्रपति द्वारा नियुक्त लेकिन नेशनल असेंबली का समर्थन आवश्यक। घरेलू नीति का निर्देशन।\n\nराष्ट्रपति की शक्तियां:\n1. प्रधानमंत्री की नियुक्ति।\n2. नेशनल असेंबली को भंग कर सकता है।\n3. आपातकालीन शक्तियां (अनुच्छेद 16)।\n4. जनमत संग्रह (अनुच्छेद 11)।\n\nकोहैबिटेशन (सहवास):\n• जब राष्ट्रपति और नेशनल असेंबली में बहुमत विरोधी राजनीतिक दलों के हों।\n• राष्ट्रपति को विरोधी दल से PM नियुक्त करना पड़ता है।\n• परिणाम: घरेलू मामलों में PM हावी हो जाता है।"
        ]
      },
      {
        heading: ["Parliament, Judiciary, and Party System", "संसद, न्यायपालिका और पार्टी प्रणाली"],
        body: [
          "The Parliament (Bicameral):\n1. National Assembly (Lower House): 577 members directly elected for 5 years. Powerful house; can overthrow the government via a vote of no-confidence.\n2. The Senate (Upper House): 348 members indirectly elected by local officials for 6 years. Weaker than the Assembly.\n• Rationalized Parliament: The 1958 Constitution deliberately weakened Parliament to strengthen the Executive. E.g., Article 49.3 allows the government to force a bill through the Assembly without a vote unless a no-confidence motion is passed.\n\nConstitutional Council (Judiciary substitute):\n• France does not have a traditional Supreme Court for judicial review.\n• Constitutional Council (9 members, 9-year terms) checks if laws conform to the Constitution *before* they are promulgated (Abstract/a priori review).\n\nThe Party System:\n• Multi-party system, polarized historically into Left and Right blocs.\n• Two-Round Electoral System: If no candidate wins 50%+1 in the first round, a run-off election is held between the top candidates. This encourages alliances.\n• Major Forces (Historically): Socialists (Left) vs. Republicans/Gaullists (Right).\n• Recent Realignment: The traditional parties collapsed in 2017. Emmanuel Macron created a centrist movement (En Marche), while the far-right (National Rally/Le Pen) and far-left (France Unbowed) became dominant forces.",
          "संसद (द्विसदनीय):\n1. नेशनल असेंबली (निचला सदन): 577 सदस्य। अविश्वास प्रस्ताव ला सकती है।\n2. सीनेट (ऊपरी सदन): 348 सदस्य (अप्रत्यक्ष चुनाव)।\n• युक्तिसंगत संसद: 1958 के संविधान ने कार्यपालिका को मजबूत करने के लिए संसद को कमजोर किया (जैसे अनुच्छेद 49.3)।\n\nसंवैधानिक परिषद:\n• न्यायिक समीक्षा के लिए कोई पारंपरिक सुप्रीम कोर्ट नहीं।\n• संवैधानिक परिषद कानून लागू होने से पहले जांच करती है।\n\nपार्टी प्रणाली:\n• बहु-दलीय प्रणाली।\n• टू-राउंड (दो-चरणीय) चुनावी प्रणाली।\n• हालिया पुनर्गठन: पारंपरिक दल ढह गए हैं; केंद्रवादी (मैक्रॉन) और धुर-दक्षिणपंथी (ले पेन) हावी हैं।"
        ]
      }
    ],
    quotes: [
      ["Maurice Duverger: \"The political regime of the Fifth Republic is a semi-presidential system.\"", "मौरिस डुवर्जर: \"पांचवें गणराज्य का राजनीतिक शासन एक अर्ध-अध्यक्षीय प्रणाली है।\""],
      ["Charles de Gaulle: \"The indivisible authority of the State is confided in its entirety to the President.\"", "चार्ल्स डी गॉल: \"राज्य का अविभाज्य अधिकार पूरी तरह से राष्ट्रपति में निहित है।\""],
    ],
    evaluation: [
      "The Fifth Republic successfully cured the instability of the past, providing France with strong leadership and continuity. The semi-presidential system offers a safety valve: when the President loses public support, parliamentary elections can force a change in government (Cohabitation) without removing the head of state. However, the system is criticized for being overly centralized (often called a 'Republican Monarchy' under a strong President). Article 49.3 is frequently criticized as undemocratic because it allows the executive to bypass parliamentary voting.",
      "पांचवें गणराज्य ने अतीत की अस्थिरता को सफलतापूर्वक ठीक किया। अर्ध-अध्यक्षीय प्रणाली एक सुरक्षा वाल्व प्रदान करती है (कोहैबिटेशन)। हालांकि, इसकी अत्यधिक केंद्रीकृत होने (राष्ट्रपति के अधीन 'गणतंत्रीय राजतंत्र') के लिए आलोचना की जाती है। अनुच्छेद 49.3 की अक्सर अलोकतांत्रिक होने के लिए आलोचना की जाती है क्योंकि यह कार्यपालिका को संसदीय मतदान को बायपास करने की अनुमति देता है।"
    ],
    conclusion: [
      "France's Fifth Republic represents a unique constitutional engineering feat. By blending presidential power with parliamentary accountability, it created a flexible yet robust executive. The current party system is undergoing massive transformation, moving away from traditional Left-Right divisions towards a battle between centrism, far-right nationalism, and radical leftism.",
      "फ्रांस का पांचवां गणराज्य एक अनूठी संवैधानिक इंजीनियरिंग का प्रतिनिधित्व करता है। राष्ट्रपति शक्ति को संसदीय जवाबदेही के साथ मिलाकर, इसने एक मजबूत कार्यपालिका बनाई। वर्तमान पार्टी प्रणाली बड़े पैमाने पर परिवर्तन के दौर से गुजर रही है।"
    ],
    shortQ: [
      ["Who founded the French Fifth Republic?", "फ्रांसीसी पांचवें गणराज्य की स्थापना किसने की?"],
      ["What is a 'Semi-Presidential' system?", "'अर्ध-अध्यक्षीय' प्रणाली क्या है?"],
      ["Explain the concept of 'Cohabitation' in French politics.", "फ्रांसीसी राजनीति में 'कोहैबिटेशन' की अवधारणा की व्याख्या करें।"],
      ["What is the significance of Article 49.3 in the French Constitution?", "फ्रांसीसी संविधान में अनुच्छेद 49.3 का क्या महत्व है?"],
      ["What electoral system does France use for presidential elections?", "फ्रांस राष्ट्रपति चुनावों के लिए किस चुनावी प्रणाली का उपयोग करता है?"],
    ],
    longQ: [
      ["Discuss the powers and position of the President in the French Fifth Republic.", "फ्रांसीसी पांचवें गणराज्य में राष्ट्रपति की शक्तियों और स्थिति पर चर्चा करें।"],
      ["Analyze the relationship between the President and the Prime Minister in France.", "फ्रांस में राष्ट्रपति और प्रधानमंत्री के बीच संबंधों का विश्लेषण करें।"],
      ["What is Cohabitation? How does it alter the balance of power in France?", "कोहैबिटेशन क्या है? यह फ्रांस में शक्ति संतुलन को कैसे बदलता है?"],
      ["Evaluate the role of the French Parliament under the Fifth Republic.", "पांचवें गणराज्य के तहत फ्रांसीसी संसद की भूमिका का मूल्यांकन करें।"],
      ["Discuss the recent trends and transformations in the French Party System.", "फ्रांसीसी पार्टी प्रणाली में हाल के रुझानों और परिवर्तनों पर चर्चा करें।"],
    ],
    mcqs: [
      { q: ["The French Fifth Republic was established in the year:", "फ्रांसीसी पांचवां गणराज्य किस वर्ष स्थापित किया गया था?"], opts: [["1789", "1789"], ["1945", "1945"], ["1958", "1958"], ["2000", "2000"]], correct: 2 },
      { q: ["Who is considered the architect of the Fifth Republic?", "पांचवें गणराज्य का वास्तुकार किसे माना जाता है?"], opts: [["Emmanuel Macron", "इमैनुएल मैक्रॉन"], ["Francois Mitterrand", "फ्रांस्वा मिटर्रैंड"], ["Charles de Gaulle", "चार्ल्स डी गॉल"], ["Napoleon Bonaparte", "नेपोलियन बोनापार्ट"]], correct: 2 },
      { q: ["The term of the French President is currently:", "फ्रांसीसी राष्ट्रपति का कार्यकाल वर्तमान में है:"], opts: [["4 years", "4 साल"], ["5 years", "5 साल"], ["6 years", "6 साल"], ["7 years", "7 साल"]], correct: 1 },
      { q: ["Which institution reviews laws for constitutionality in France?", "फ्रांस में संवैधानिकता के लिए कानूनों की समीक्षा कौन सी संस्था करती है?"], opts: [["Supreme Court", "सुप्रीम कोर्ट"], ["Council of State", "काउंसिल ऑफ स्टेट"], ["Constitutional Council", "संवैधानिक परिषद"], ["National Assembly", "नेशनल असेंबली"]], correct: 2 },
      { q: ["When the President and PM of France belong to opposing parties, it is called:", "जब फ्रांस के राष्ट्रपति और PM विरोधी दलों के हों, तो इसे कहा जाता है:"], opts: [["Gridlock", "ग्रिडलॉक"], ["Cohabitation", "कोहैबिटेशन"], ["Coalition", "गठबंधन"], ["Divided government", "विभाजित सरकार"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Semi-Presidentialism (Maurice Duverger coined the term): Dual executive.\n• Article 16: Grants emergency powers to the President.\n• Article 49.3: Allows PM to push legislation without a vote; only defeated by a no-confidence motion.\n• Cohabitation: Happened 3 times historically (Mitterrand-Chirac, Mitterrand-Balladur, Chirac-Jospin).\n• Two-round ballot system (Run-off voting) shapes the party system by forcing alliances in the second round.",
      "UGC NET फोकस:\n• अर्ध-अध्यक्षीय प्रणाली: मौरिस डुवर्जर ने शब्द गढ़ा।\n• अनुच्छेद 16: आपातकालीन शक्तियां।\n• कोहैबिटेशन: ऐतिहासिक रूप से 3 बार हुआ।\n• टू-राउंड (दो-चरणीय) चुनावी प्रणाली।"
    ],
    ugcQ: [
      ["Q: What is Rationalized Parliament in France? A: Constitutional design in the Fifth Republic to limit the powers of parliament (curb its ability to easily topple governments) to ensure executive stability.", "प्र: फ्रांस में युक्तिसंगत संसद क्या है? उ: कार्यपालिका की स्थिरता सुनिश्चित करने के लिए संसद की शक्तियों को सीमित करने का संवैधानिक डिजाइन।"],
    ],
  }
];

/* ─── COMPONENT ─── */
export default function C207DetailedNotesPage() {
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
              PSC-C-207: Major Political System
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t('PG Semester II — Detailed Bilingual Notes', 'PG सेमेस्टर II — विस्तृत द्विभाषी नोट्स')}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-5 text-white mb-8">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">{t('Paper Code: PSC-C-207', 'पेपर कोड: PSC-C-207')}</span>
          </div>
          <p className="text-sm text-white/80">
            {t('5 Credits | 60 Lectures + 15 Tutorials | Full Marks: 100 (End Sem: 70 + Internal: 30) | 8 Topics | Ref: UK, USA, Switzerland, France', '5 क्रेडिट | 60 लेक्चर + 15 ट्यूटोरियल | पूर्णांक: 100 | 8 विषय | संदर्भ: UK, USA, स्विट्जरलैंड, फ्रांस')}
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
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
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
            {t('All 8 Topics Complete! Full PSC-C-207 notes with 5-part structure, MCQs & UGC NET Prep ready.','सभी 8 विषय पूर्ण! 5-भाग संरचना, MCQ और UGC NET तैयारी के साथ संपूर्ण PSC-C-207 नोट्स तैयार।')}
          </p>
        </div>
      </div>
    </div>
  );
}
