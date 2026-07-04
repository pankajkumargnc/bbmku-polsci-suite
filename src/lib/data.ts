// BBMKU M.A. Political Science — Curated Academic Data (450KB+)
// Semester-wise Syllabus, PYQs, MCQs, Flashcards, Matching Games, Chronology

export interface SyllabusTopic {
  id: string;
  unit: number;
  title: string;
  titleHi: string;
  subtopics: { en: string; hi: string }[];
  readings: { en: string; hi: string }[];
}

export interface Semester {
  id: string;
  name: string;
  nameHi: string;
  code: string;
  topics: SyllabusTopic[];
}

export interface PYQ {
  id: string;
  year: number;
  semester: string;
  subject: string;
  subjectHi: string;
  question: string;
  questionHi: string;
  marks: number;
  topic: string;
}

export interface MCQ {
  id: string;
  subject: string;
  subjectHi: string;
  topic: string;
  topicHi: string;
  question: string;
  questionHi: string;
  options: string[];
  optionsHi: string[];
  correct: number;
  explanation: string;
  explanationHi: string;
  difficulty: 'easy' | 'medium' | 'hard';
  ugcNetYear?: number;
}

export interface Flashcard {
  id: string;
  deckId: string;
  deckName: string;
  deckNameHi: string;
  front: string;
  frontHi: string;
  back: string;
  backHi: string;
  category: string;
}

export interface MatchingPair {
  id: string;
  gameId: string;
  gameName: string;
  gameNameHi: string;
  left: string;
  leftHi: string;
  right: string;
  rightHi: string;
  category: string;
}

export interface ChronologyEvent {
  id: string;
  gameId: string;
  gameName: string;
  gameNameHi: string;
  event: string;
  eventHi: string;
  year: number;
  description: string;
  descriptionHi: string;
}

export interface MindMapNode {
  id: string;
  topicId: string;
  label: string;
  labelHi: string;
  children: MindMapNode[];
}

export interface RevisionNote {
  id: string;
  topicId: string;
  title: string;
  titleHi: string;
  content: string;
  contentHi: string;
  keyPoints: string[];
  keyPointsHi: string[];
}

// ─── SEMESTER 1 ───
// ─── REAL BBMKU SEMESTER-WISE COURSE STRUCTURE (Arts & Commerce Faculty) ───
// Pattern: 5 Credits = 60 Lectures + 15 Tutorials | 100 Marks = 70 End Sem + 30 Internal (Written 20 + Day-to-Day 5 + Attendance 5)
// F = Foundation | C = Core | S = SEC | A = Open Elective | E = Discipline Centric Elective | D = Dissertation
export const semesters: Semester[] = [
  // ─── SEMESTER I ───
  {
    id: 'sem1',
    name: 'Semester I',
    nameHi: 'सेमेस्टर I',
    code: 'Sem I',
    topics: [
      {
        id: 'sem1-u1', unit: 1,
        title: 'PSC-F-101: Foundation — Elementary Political Science',
        titleHi: 'PSC-F-101: फाउंडेशन — एलिमेंट्री पॉलिटिकल साइंस',
        subtopics: [
          { en: 'Nature and Scope of Political Science: Traditional and Modern Approaches', hi: 'राजनीति विज्ञान की प्रकृति और क्षेत्र: पारंपरिक और आधुनिक दृष्टिकोण' },
          { en: 'State: Definition, Elements, Sovereignty — Monistic and Pluralistic Theories', hi: 'राज्य: परिभाषा, तत्व, संप्रभुता — अद्वैतवादी और बहुलवादी सिद्धांत' },
          { en: 'Key Concepts: Law, Liberty, Equality, Rights, Justice, Power, Authority, Legitimacy', hi: 'प्रमुख अवधारणाएं: कानून, स्वतंत्रता, समानता, अधिकार, न्याय, शक्ति, प्राधिकार, वैधता' },
          { en: 'Political Obligation and Resistance: Theories and Limits', hi: 'राजनीतिक दायित्व और प्रतिरोध: सिद्धांत और सीमाएं' },
          { en: 'Democracy: Types, Theories, and Contemporary Challenges', hi: 'लोकतंत्र: प्रकार, सिद्धांत और समकालीन चुनौतियां' },
        ],
        readings: [
          { en: 'A.C. Kapoor — Principles of Political Science', hi: 'ए.सी. कपूर — राजनीति विज्ञान के सिद्धांत' },
          { en: 'O.P. Gauba — An Introduction to Political Theory', hi: 'ओ.पी. गाबा — राजनीतिक सिद्धांत का परिचय' },
        ],
      },
      {
        id: 'sem1-u2', unit: 2,
        title: 'PSC-C-102: Core — Indian Political Thought',
        titleHi: 'PSC-C-102: कोर — भारतीय राजनीतिक विचार',
        subtopics: [
          { en: 'Ancient Thinkers: Manu (Rajdharma, Varna), Kautilya (Saptanga, Mandala, Statecraft)', hi: 'प्राचीन विचारक: मनु (राजधर्म, वर्ण), कौटिल्य (सप्तांग, मंडल, राज्यकला)' },
          { en: 'Buddhist & Jain Political Ideas: Dhamma, Sangha, Ahimsa, Ashoka', hi: 'बौद्ध और जैन राजनीतिक विचार: धम्म, संघ, अहिंसा, अशोक' },
          { en: 'Medieval Thought: Ziauddin Barani, Abul Fazl — Kingship and Administration', hi: 'मध्यकालीन विचार: जियाउद्दीन बरनी, अबुल फजल — राजत्व और प्रशासन' },
          { en: 'Raja Ram Mohan Roy: Social & Religious Reform, Modern Education, Press Freedom', hi: 'राजा राम मोहन राय: सामाजिक और धार्मिक सुधार, आधुनिक शिक्षा, प्रेस स्वतंत्रता' },
          { en: 'Swami Vivekananda: Nationalism, Spiritual Humanism, Social Service', hi: 'स्वामी विवेकानंद: राष्ट्रवाद, आध्यात्मिक मानवतावाद, सामाजिक सेवा' },
        ],
        readings: [
          { en: 'V.R. Mehta — Foundations of Indian Political Thought', hi: 'वी.आर. मेहता — भारतीय राजनीतिक विचार की नींव' },
          { en: 'R.S. Sharma — Aspects of Political Ideas in Ancient India', hi: 'आर.एस. शर्मा — प्राचीन भारत में राजनीतिक विचारों के पहलू' },
        ],
      },
      {
        id: 'sem1-u3', unit: 3,
        title: 'PSC-C-103: Core — Political Theory',
        titleHi: 'PSC-C-103: कोर — पॉलिटिकल थ्योरी',
        subtopics: [
          { en: 'Nature, Scope and Significance of Political Theory — Decline and Resurgence', hi: 'राजनीतिक सिद्धांत की प्रकृति, क्षेत्र और महत्व — पतन और पुनरुत्थान' },
          { en: 'Ideologies: Liberalism, Marxism, Socialism, Fascism, Gandhism, Feminism, Environmentalism', hi: 'विचारधाराएं: उदारवाद, मार्क्सवाद, समाजवाद, फासीवाद, गांधीवाद, नारीवाद, पर्यावरणवाद' },
          { en: 'Theories of State: Liberal, Marxist, Gandhian, Feminist Perspectives', hi: 'राज्य के सिद्धांत: उदारवादी, मार्क्सवादी, गांधीवादी, नारीवादी दृष्टिकोण' },
          { en: 'Concepts of Justice: Rawls, Ambedkar, Sen — Procedural, Distributive, Social', hi: 'न्याय की अवधारणाएं: रॉल्स, आंबेडकर, सेन — प्रक्रियात्मक, वितरणात्मक, सामाजिक' },
          { en: 'Citizenship: T.H. Marshall, Multicultural Citizenship — Kymlicka', hi: 'नागरिकता: टी.एच. मार्शल, बहुसांस्कृतिक नागरिकता — किम्लिका' },
        ],
        readings: [
          { en: 'O.P. Gauba — An Introduction to Political Theory', hi: 'ओ.पी. गाबा — राजनीतिक सिद्धांत का परिचय' },
          { en: 'Andrew Heywood — Political Ideologies: An Introduction', hi: 'एंड्रयू हेवुड — राजनीतिक विचारधाराएं: एक परिचय' },
        ],
      },
      {
        id: 'sem1-u4', unit: 4,
        title: 'PSC-C-104: Core — Indian Government and Politics',
        titleHi: 'PSC-C-104: कोर — इंडियन गवर्नमेंट एंड पॉलिटिक्स',
        subtopics: [
          { en: 'Constitutional Development: Regulating Act 1773 to Indian Independence Act 1947', hi: 'संवैधानिक विकास: रेगुलेटिंग एक्ट 1773 से भारतीय स्वतंत्रता अधिनियम 1947' },
          { en: 'Constituent Assembly: Composition, Debates, Key Compromises', hi: 'संविधान सभा: संरचना, बहसें, प्रमुख समझौते' },
          { en: 'Preamble, FRs (Art 12-35), DPSPs (Art 36-51), Fundamental Duties (Art 51A)', hi: 'प्रस्तावना, मौलिक अधिकार (12-35), निदेशक तत्व (36-51), मौलिक कर्तव्य (51A)' },
          { en: 'Union Executive: President, PM, Council of Ministers; Parliament: LS, RS', hi: 'केंद्रीय कार्यपालिका: राष्ट्रपति, प्रधानमंत्री, मंत्रिपरिषद; संसद: लोकसभा, राज्यसभा' },
          { en: 'Judiciary: Supreme Court, High Courts, Judicial Review, PIL, Basic Structure', hi: 'न्यायपालिका: सर्वोच्च न्यायालय, उच्च न्यायालय, न्यायिक समीक्षा, PIL, मूल ढांचा' },
        ],
        readings: [
          { en: 'D.D. Basu — Introduction to the Constitution of India', hi: 'डी.डी. बासु — भारत के संविधान का परिचय' },
          { en: 'Granville Austin — The Indian Constitution: Cornerstone of a Nation', hi: 'ग्रैनविले ऑस्टिन — भारतीय संविधान: एक राष्ट्र की आधारशिला' },
        ],
      },
    ],
  },
  // ─── SEMESTER II ───
  {
    id: 'sem2',
    name: 'Semester II',
    nameHi: 'सेमेस्टर II',
    code: 'Sem II',
    topics: [
      {
        id: 'sem2-u1', unit: 1,
        title: 'PSC-S-205: SEC — Academic Writing & Communication Skill',
        titleHi: 'PSC-S-205: SEC — अकादमिक लेखन और संचार कौशल',
        subtopics: [
          { en: 'Academic Writing: Meaning, Types and Importance', hi: 'अकादमिक लेखन: अर्थ, प्रकार और महत्व' },
          { en: 'Writing Synopsis', hi: 'सारांश लेखन' },
          { en: 'Report Writing', hi: 'रिपोर्ट लेखन' },
          { en: 'Writing Abstract', hi: 'सार लेखन' },
          { en: 'Writing Conference Paper', hi: 'सम्मेलन पत्र लेखन' },
          { en: 'Referencing', hi: 'संदर्भ लेखन' },
          { en: 'Writing Dissertations/Thesis', hi: 'शोध प्रबंध/थीसिस लेखन' },
          { en: 'Writing Letters, Applications & Preparing Resume', hi: 'पत्र, आवेदन लेखन और बायोडाटा तैयार करना' },
        ],
        readings: [
          { en: 'Gerald Graff — They Say / I Say: The Moves That Matter in Academic Writing', hi: 'जेराल्ड ग्राफ — वे से / आई से: अकादमिक लेखन में महत्वपूर्ण चालें' },
          { en: 'MLA Handbook for Writers of Research Papers', hi: 'शोध पत्र लेखकों के लिए MLA हैंडबुक' },
        ],
      },
      {
        id: 'sem2-u2', unit: 2,
        title: 'PSC-C-206: Core — Theories of International Politics',
        titleHi: 'PSC-C-206: कोर — थ्योरीज़ ऑफ इंटरनेशनल पॉलिटिक्स',
        subtopics: [
          { en: 'International Politics: Meaning, Nature and Scope', hi: 'अंतर्राष्ट्रीय राजनीति: अर्थ, प्रकृति और क्षेत्र' },
          { en: 'Approaches to the Study of International Politics: Realist and System Theory', hi: 'अंतर्राष्ट्रीय राजनीति के अध्ययन के दृष्टिकोण: यथार्थवादी और प्रणाली सिद्धांत' },
          { en: 'National Power: Concept, Nature and Elements', hi: 'राष्ट्रीय शक्ति: अवधारणा, प्रकृति और तत्व' },
          { en: 'National Interest: Concept, Determinants and Promotion of National Interest', hi: 'राष्ट्रीय हित: अवधारणा, निर्धारक और राष्ट्रीय हित का संवर्धन' },
          { en: 'Balance of Power: Meaning, Nature, Techniques and Relevance in Contemporary Scenario', hi: 'शक्ति संतुलन: अर्थ, प्रकृति, तकनीकें और समकालीन प्रासंगिकता' },
          { en: 'Collective Security: Meaning and Relevance, Co-operative Security', hi: 'सामूहिक सुरक्षा: अर्थ और प्रासंगिकता, सहकारी सुरक्षा' },
          { en: 'Disarmament and Arms Control: Meaning, Types, Problems and Prospects', hi: 'निरस्त्रीकरण और शस्त्र नियंत्रण: अर्थ, प्रकार, समस्याएं और संभावनाएं' },
          { en: 'Non-alignment: Meaning, Features & Relevance', hi: 'गुटनिरपेक्षता: अर्थ, विशेषताएं और प्रासंगिकता' },
          { en: 'Foreign Policy: Meaning and Determinants', hi: 'विदेश नीति: अर्थ और निर्धारक' },
        ],
        readings: [
          { en: 'Mahendra Kumar — Theoretical Aspects of International Politics', hi: 'महेंद्र कुमार — अंतर्राष्ट्रीय राजनीति के सैद्धांतिक पहलू' },
          { en: 'V. N. Khanna — International Relations', hi: 'वी.एन. खन्ना — अंतर्राष्ट्रीय संबंध' },
        ],
      },
      {
        id: 'sem2-u3', unit: 3,
        title: 'PSC-C-207: Core — Public Administration',
        titleHi: 'PSC-C-207: कोर — पब्लिक एडमिनिस्ट्रेशन',
        subtopics: [
          { en: 'Administrative Culture', hi: 'प्रशासनिक संस्कृति' },
          { en: 'Administrative Theories: Human Relations (Elton Mayo), Decision-Making Theory (Herbert Simon) and Ecological Theory (F.W. Riggs)', hi: 'प्रशासनिक सिद्धांत: मानवीय संबंध (एल्टन मेयो), निर्णय-निर्माण (हर्बर्ट साइमन) और पारिस्थितिक सिद्धांत (एफ.डब्ल्यू. रिग्स)' },
          { en: 'Bureaucracy: Special Reference to Max Weber\'s Views', hi: 'नौकरशाही: मैक्स वेबर के विचारों के विशेष संदर्भ में' },
          { en: 'Administrative Management: Leadership, Communication and Motivation', hi: 'प्रशासनिक प्रबंधन: नेतृत्व, संचार और अभिप्रेरणा' },
          { en: 'Public Policy: Concept and Formulation', hi: 'लोक नीति: अवधारणा और निर्माण' },
          { en: 'Budget: Meaning, Types and Principles of Sound Budget', hi: 'बजट: अर्थ, प्रकार और स्वस्थ बजट के सिद्धांत' },
          { en: 'E-governance: Meaning, Advantages, Challenges and E-governance in India', hi: 'ई-गवर्नेंस: अर्थ, लाभ, चुनौतियां और भारत में ई-गवर्नेंस' },
          { en: 'Removal of Citizen\'s Grievances: Lokpal and Lokayukt', hi: 'नागरिक शिकायतों का निवारण: लोकपाल और लोकायुक्त' },
        ],
        readings: [
          { en: 'Dr. P. D. Sharma — Public Administration: Theory and Practice', hi: 'डॉ. पी.डी. शर्मा — लोक प्रशासन: सिद्धांत और व्यवहार' },
          { en: 'Avasthi & Maheshwari — Public Administration', hi: 'अवस्थी और माहेश्वरी — लोक प्रशासन' },
        ],
      },
      {
        id: 'sem2-u4', unit: 4,
        title: 'PSC-C-208: Core — Western Political Thought',
        titleHi: 'PSC-C-208: कोर — वेस्टर्न पॉलिटिकल थॉट',
        subtopics: [
          { en: 'Plato: Ideal State, Laws & Statesman', hi: 'प्लेटो: आदर्श राज्य, विधि और राजनेता' },
          { en: 'Aristotle: As Father of Political Science, Classification of Constitution, Critique of Plato', hi: 'अरस्तू: राजनीति विज्ञान के जनक, संविधान का वर्गीकरण, प्लेटो की आलोचना' },
          { en: 'Characteristics of Medieval Political Thought', hi: 'मध्यकालीन राजनीतिक विचार की विशेषताएं' },
          { en: 'Machiavelli: As a Modern Thinker', hi: 'मैकियावेली: एक आधुनिक विचारक' },
          { en: 'Hobbes, Locke, Rousseau: Comparative Study of State of Nature, Social Contract, Sovereignty', hi: 'हॉब्स, लॉक, रूसो: प्राकृतिक अवस्था, सामाजिक अनुबंध, संप्रभुता का तुलनात्मक अध्ययन' },
          { en: 'Bentham: Utility', hi: 'बेंथम: उपयोगिता' },
          { en: 'J. S. Mill: Liberty', hi: 'जे.एस. मिल: स्वतंत्रता' },
          { en: 'T. H. Green: Liberty & State', hi: 'टी.एच. ग्रीन: स्वतंत्रता और राज्य' },
          { en: 'Hegel: Dialectic Method and State', hi: 'हेगेल: द्वंद्वात्मक पद्धति और राज्य' },
          { en: 'Karl Marx: Dialectical Materialism, Economic Interpretation of History, Class-struggle', hi: 'कार्ल मार्क्स: द्वंद्वात्मक भौतिकवाद, इतिहास की आर्थिक व्याख्या, वर्ग-संघर्ष' },
        ],
        readings: [
          { en: 'J. P. Suda — A History of Political Thought', hi: 'जे.पी. सूदा — राजनीतिक विचार का इतिहास' },
          { en: 'O. P. Gauba — An Introduction to Political Theory', hi: 'ओ.पी. गाबा — राजनीतिक सिद्धांत का परिचय' },
        ],
      },
    ],
  },
  // ─── SEMESTER III ───
  {
    id: 'sem3',
    name: 'Semester III',
    nameHi: 'सेमेस्टर III',
    code: 'Sem III',
    topics: [
      {
        id: 'sem3-u1', unit: 1,
        title: 'PSC-A-309: Open Elective — Human Rights',
        titleHi: 'PSC-A-309: ओपन इलेक्टिव — मानवाधिकार (ह्यूमन राइट्स)',
        subtopics: [
          { en: 'Concept of Human Rights: Historical Perspective and Development', hi: 'मानवाधिकार की अवधारणा: ऐतिहासिक परिप्रेक्ष्य और विकास' },
          { en: 'Types and Classification of Human Rights', hi: 'मानवाधिकारों के प्रकार और वर्गीकरण' },
          { en: 'Universal Declaration of Human Rights, 1948', hi: 'मानवाधिकारों की सार्वभौम घोषणा, 1948' },
          { en: 'International Covenant on Civil and Political Rights, 1966', hi: 'नागरिक और राजनीतिक अधिकारों पर अंतर्राष्ट्रीय नियम, 1966' },
          { en: 'International Covenant on Social, Economic & Cultural Rights, 1966', hi: 'सामाजिक, आर्थिक और सांस्कृतिक अधिकारों पर अंतर्राष्ट्रीय नियम, 1966' },
          { en: 'Brief Introduction to Collective (Indigenous) Rights', hi: 'सामूहिक (स्वदेशी) अधिकारों का संक्षिप्त परिचय' },
          { en: 'Abuse and Violation of Human Rights', hi: 'मानवाधिकारों का दुरुपयोग और उल्लंघन' },
          { en: 'National Human Rights Commission, India', hi: 'राष्ट्रीय मानवाधिकार आयोग, भारत' },
        ],
        readings: [
          { en: 'Dr. H. O. Agarwal — International Law & Human Rights', hi: 'डॉ. एच. ओ. अग्रवाल — अंतर्राष्ट्रीय कानून और मानवाधिकार' },
          { en: 'Dr. S. K. Kapoor — International Law and Human Rights', hi: 'डॉ. एस. के. कपूर — अंतर्राष्ट्रीय कानून और मानवाधिकार' },
        ],
      },
      {
        id: 'sem3-u2', unit: 2,
        title: 'PSC-C-310: Core — Politics of Jharkhand',
        titleHi: 'PSC-C-310: कोर — पॉलिटिक्स ऑफ झारखंड',
        subtopics: [
          { en: 'Introducing Jharkhand: Demography & Culture of Tribal People', hi: 'झारखंड का परिचय: जनजातीय लोगों की जनसांख्यिकी और संस्कृति' },
          { en: 'Impact of British Administration in Tribal Areas and Protest Movements- Birsa Movement and Kol Rebellion', hi: 'आदिवासी क्षेत्रों में ब्रिटिश प्रशासन का प्रभाव और विरोध आंदोलन- बिरसा आंदोलन और कोल विद्रोह' },
          { en: 'Socio-economic Determinants of Jharkhand Politics', hi: 'झारखंड की राजनीति के सामाजिक-आर्थिक निर्धारक' },
          { en: 'Working of Coalition Government in Jharkhand', hi: 'झारखंड में गठबंधन सरकार की कार्यप्रणाली' },
          { en: 'Naxalism in Jharkhand: Causes, Growth, Effects, Countering Naxalism', hi: 'झारखंड में नक्सलवाद: कारण, वृद्धि, प्रभाव, नक्सलवाद का मुकाबला' },
          { en: 'Tribal Issues in Jharkhand', hi: 'झारखंड में जनजातीय मुद्दे' },
          { en: 'Constitutional and Policy Provisions for Tribal Development', hi: 'जनजातीय विकास के लिए संवैधानिक और नीतिगत प्रावधान' },
          { en: 'Role of Socio-religious Organizations: (i) Christian Missionaries, (ii) RSS', hi: 'सामाजिक-धार्मिक संगठनों की भूमिका: (i) ईसाई मिशनरी, (ii) RSS' },
        ],
        readings: [
          { en: 'Dr. Sunil Kumar Singh — Inside Jharkhand', hi: 'डॉ. सुनील कुमार सिंह — इनसाइड झारखंड' },
          { en: 'V. Virottam — Jharkhand: Itihas Evam Sanskriti', hi: 'वी. वीरोत्तम — झारखंड: इतिहास एवं संस्कृति' },
        ],
      },
      {
        id: 'sem3-u3', unit: 3,
        title: 'PSC-C-311: Core — Political Sociology',
        titleHi: 'PSC-C-311: कोर — पॉलिटिकल सोशियोलॉजी',
        subtopics: [
          { en: 'Political Sociology: Meaning, Nature and Scope', hi: 'राजनीतिक समाजशास्त्र: अर्थ, प्रकृति और कार्यक्षेत्र' },
          { en: 'Political Socialization', hi: 'राजनीतिक समाजीकरण' },
          { en: 'Political Participation', hi: 'राजनीतिक भागीदारी' },
          { en: 'Political Culture', hi: 'राजनीतिक संस्कृति' },
          { en: 'Political Development', hi: 'राजनीतिक विकास' },
          { en: 'Political Modernization', hi: 'राजनीतिक आधुनिकीकरण' },
          { en: 'Political Elites', hi: 'राजनीतिक अभिजात वर्ग' },
          { en: 'Political Communication', hi: 'राजनीतिक संचार' },
        ],
        readings: [
          { en: 'Keith Faulks — Political Sociology: A Critical Introduction', hi: 'कीथ फॉल्कस — राजनीतिक समाजशास्त्र: एक आलोचनात्मक परिचय' },
          { en: 'J. C. Johari — Contemporary Political Theory', hi: 'जे. सी. जौहरी — समकालीन राजनीतिक सिद्धांत' },
        ],
      },
      {
        id: 'sem3-u4', unit: 4,
        title: 'PSC-C-312: Core — Contemporary Political Issues',
        titleHi: 'PSC-C-312: कोर — कंटेम्पररी पॉलिटिकल इश्यूज़',
        subtopics: [
          { en: 'North-South Dialogue: Key Issues, Dialogue, Co-operation and Conflict', hi: 'उत्तर-दक्षिण संवाद: प्रमुख मुद्दे, संवाद, सहयोग और संघर्ष' },
          { en: 'South-South Co-operation: Key Issue, Dialogue, Co-operation & Conflict', hi: 'दक्षिण-दक्षिण सहयोग: प्रमुख मुद्दा, संवाद, सहयोग और संघर्ष' },
          { en: 'Globalization: Concept, Characteristics, Socio-Economic and Political Impact', hi: 'वैश्वीकरण: अवधारणा, विशेषताएं, सामाजिक-आर्थिक और राजनीतिक प्रभाव' },
          { en: 'Environmental Issues: Important Concerns & Related Politics', hi: 'पर्यावरणीय मुद्दे: महत्वपूर्ण चिंताएं और संबंधित राजनीति' },
          { en: 'Terrorism: Definition, Types, Effects, Countering Terrorism', hi: 'आतंकवाद: परिभाषा, प्रकार, प्रभाव, आतंकवाद का मुकाबला' },
          { en: 'Concept of Human Rights: (a) Classification and Types. (b) Violations & Abuses', hi: 'मानवाधिकार की अवधारणा: (a) वर्गीकरण और प्रकार। (b) उल्लंघन और दुरुपयोग' },
          { en: 'Universal Declaration of Human Rights, 1948', hi: 'मानवाधिकारों की सार्वभौम घोषणा, 1948' },
          { en: 'Brief Introduction to Collective (Indigenous) Rights', hi: 'सामूहिक (स्वदेशी) अधिकारों का संक्षिप्त परिचय' },
        ],
        readings: [
          { en: 'U. R. Ghai — International Politics', hi: 'यू. आर. घई — अंतर्राष्ट्रीय राजनीति' },
          { en: 'Pukhraj Jain — International Relations', hi: 'पुखराज जैन — अंतर्राष्ट्रीय संबंध' },
        ],
      },
    ],
  },
  // ─── SEMESTER IV ───
  {
    id: 'sem4',
    name: 'Semester IV',
    nameHi: 'सेमेस्टर IV',
    code: 'Sem IV',
    topics: [
      {
        id: 'sem4-u1', unit: 1,
        title: 'PSC-E-413: DCE — Intl Organization / Indian Foreign Policy / Politics of Developing Countries',
        titleHi: 'PSC-E-413: DCE — अंतर्राष्ट्रीय संगठन / भारतीय विदेश नीति / विकासशील देशों की राजनीति',
        subtopics: [
          { en: 'Option A — International Organization: UN System (GA, SC, ECOSOC, ICJ), Peacekeeping, Reforms, WTO, IMF', hi: 'विकल्प A — अंतर्राष्ट्रीय संगठन: UN प्रणाली, शांति स्थापना, सुधार, WTO, IMF' },
          { en: 'Option B — Indian Foreign Policy: NAM, Act East, Neighbourhood First, Nuclear Doctrine', hi: 'विकल्प B — भारतीय विदेश नीति: NAM, एक्ट ईस्ट, पड़ोसी प्रथम, परमाणु सिद्धांत' },
          { en: 'Option C — Politics of Developing Countries: Colonial Legacy, Development, Democratization', hi: 'विकल्प C — विकासशील देशों की राजनीति: औपनिवेशिक विरासत, विकास, लोकतंत्रीकरण' },
          { en: 'Regional Organizations: SAARC, BRICS, SCO, ASEAN, EU, African Union — Comparative Analysis', hi: 'क्षेत्रीय संगठन: SAARC, BRICS, SCO, ASEAN, EU, अफ्रीकी संघ — तुलनात्मक विश्लेषण' },
          { en: 'India\'s Role in Global Governance: UNSC Reform (G4), Climate Negotiations, WTO', hi: 'वैश्विक शासन में भारत: UNSC सुधार (G4), जलवायु वार्ता, WTO' },
        ],
        readings: [
          { en: 'Harsh V. Pant — Indian Foreign Policy: An Overview', hi: 'हर्ष वी. पंत — भारतीय विदेश नीति: एक अवलोकन' },
          { en: 'Rumki Basu — The United Nations: Structure and Functions', hi: 'रुमकी बसु — संयुक्त राष्ट्र: संरचना और कार्य' },
        ],
      },
      {
        id: 'sem4-u2', unit: 2,
        title: 'PSCE-414: DCE — International Law / Foreign Policy of Major Powers / Contemporary Issues of Indian Politics',
        titleHi: 'PSCE-414: DCE — अंतर्राष्ट्रीय कानून / प्रमुख शक्तियों की विदेश नीति / भारतीय राजनीति के समकालीन मुद्दे',
        subtopics: [
          { en: 'Option A — International Law: Sources, Treaties, Custom, State Recognition, Asylum, Extradition, ICJ, ICC', hi: 'विकल्प A — अंतर्राष्ट्रीय कानून: स्रोत, संधियां, प्रथा, राज्य मान्यता, शरण, प्रत्यर्पण, ICJ, ICC' },
          { en: 'Option B — Foreign Policy of Major Powers: USA, China (Belt & Road), Russia (Eurasianism)', hi: 'विकल्प B — प्रमुख शक्तियों की विदेश नीति: USA, चीन (बेल्ट एंड रोड), रूस (यूरेशियनवाद)' },
          { en: 'Option C — Contemporary Issues of Indian Politics: Coalition Era, Federalism, Farmer Movements', hi: 'विकल्प C — भारतीय राजनीति के समकालीन मुद्दे: गठबंधन युग, संघवाद, किसान आंदोलन' },
          { en: 'International Humanitarian Law: Geneva Conventions, War Crimes, R2P', hi: 'अंतर्राष्ट्रीय मानवीय कानून: जिनेवा सम्मेलन, युद्ध अपराध, R2P' },
          { en: 'Indian Politics: Judicial Overreach, Criminalization, Electoral Bonds, Anti-Defection', hi: 'भारतीय राजनीति: न्यायिक अतिक्रमण, अपराधीकरण, चुनावी बॉन्ड, दल-बदल विरोधी' },
        ],
        readings: [
          { en: 'Malcolm N. Shaw — International Law', hi: 'मैल्कम एन. शॉ — अंतर्राष्ट्रीय कानून' },
          { en: 'Partha Chatterjee — The Politics of the Governed', hi: 'पार्थ चटर्जी — शासितों की राजनीति' },
        ],
      },
      {
        id: 'sem4-u3', unit: 3,
        title: 'PSC-C-415: Core — Comparative Government and Politics',
        titleHi: 'PSC-C-415: कोर — कम्पेरेटिव गवर्नमेंट एंड पॉलिटिक्स',
        subtopics: [
          { en: 'Comparative Method: Traditional vs Modern Approaches, Case Study, Most Similar/Different Systems', hi: 'तुलनात्मक विधि: पारंपरिक बनाम आधुनिक दृष्टिकोण, केस स्टडी, समान/भिन्न प्रणाली डिजाइन' },
          { en: 'Constitution & Government: UK (Parliamentary), USA (Presidential), France (Semi-Presidential), China (Single-Party)', hi: 'संविधान और सरकार: UK (संसदीय), USA (राष्ट्रपति), फ्रांस (अर्ध-राष्ट्रपति), चीन (एकल-दल)' },
          { en: 'Federal vs Unitary Systems: USA, India, Canada vs UK, France — Distribution of Powers', hi: 'संघीय बनाम एकात्मक: USA, भारत, कनाडा बनाम UK, फ्रांस — शक्तियों का वितरण' },
          { en: 'Party Systems: Two-Party (USA, UK), Multi-Party (India, Italy), Single-Party (China)', hi: 'दल प्रणाली: द्वि-दलीय (USA, UK), बहु-दलीय (भारत, इटली), एकल-दलीय (चीन)' },
          { en: 'Judiciary & Rights: Judicial Review (USA, India), Judicial Activism, Human Rights Protections', hi: 'न्यायपालिका और अधिकार: न्यायिक समीक्षा (USA, भारत), न्यायिक सक्रियता, मानवाधिकार संरक्षण' },
        ],
        readings: [
          { en: 'Arend Lijphart — Patterns of Democracy', hi: 'एरेंड लिजफार्ट — लोकतंत्र के पैटर्न' },
          { en: 'Almond, Powell, Dalton & Strom — Comparative Politics Today', hi: 'आलमंड, पॉवेल, डाल्टन और स्ट्रोम — तुलनात्मक राजनीति आज' },
        ],
      },
      {
        id: 'sem4-u4', unit: 4,
        title: 'PSC-D-416: Research Methodology — Dissertation/Project',
        titleHi: 'PSC-D-416: रिसर्च मेथडोलॉजी — शोध प्रबंध/प्रोजेक्ट',
        subtopics: [
          { en: 'Research Foundations: Meaning, Types (Applied, Fundamental, Action), Scientific Method, Objectivity', hi: 'शोध की नींव: अर्थ, प्रकार (अनुप्रयुक्त, मौलिक, क्रियात्मक), वैज्ञानिक विधि, वस्तुनिष्ठता' },
          { en: 'Research Design: Exploratory, Descriptive, Experimental, Case Study, Comparative, Longitudinal', hi: 'शोध डिजाइन: अन्वेषणात्मक, वर्णनात्मक, प्रायोगिक, केस स्टडी, तुलनात्मक, अनुदैर्ध्य' },
          { en: 'Data Collection: Primary (Survey, Interview, Questionnaire, Observation), Secondary (Documents, Content Analysis)', hi: 'डेटा संग्रह: प्राथमिक (सर्वेक्षण, साक्षात्कार), द्वितीयक (दस्तावेज, सामग्री विश्लेषण)' },
          { en: 'Sampling & Data Analysis: Probability/Non-Probability Sampling, Hypothesis Testing, Qualitative & Quantitative', hi: 'नमूनाकरण और विश्लेषण: संभाव्यता/असंभाव्यता, परिकल्पना परीक्षण, गुणात्मक और मात्रात्मक' },
          { en: 'Dissertation Writing: Topic Selection, Literature Review, Chapterisation, Citation (APA/MLA), Plagiarism Check', hi: 'शोध प्रबंध: विषय चयन, साहित्य समीक्षा, अध्यायीकरण, उद्धरण (APA/MLA), साहित्यिक चोरी जांच' },
        ],
        readings: [
          { en: 'C.R. Kothari — Research Methodology: Methods and Techniques', hi: 'सी.आर. कोठारी — शोध पद्धति: विधियां और तकनीकें' },
          { en: 'W. Lawrence Neuman — Social Research Methods', hi: 'डब्ल्यू. लॉरेंस न्यूमैन — सामाजिक शोध विधियां' },
        ],
      },
    ],
  },
];
// ─── UGC NET PYQ BANK (curated sample from 6,314 questions) ───
export const pyqBank: PYQ[] = [
  { id: 'pyq1', year: 2023, semester: 'UGC NET', subject: 'Political Theory', subjectHi: 'राजनीतिक सिद्धांत', question: 'Who among the following is the author of "A Theory of Justice"?', questionHi: '"A Theory of Justice" के लेखक निम्नलिखित में से कौन हैं?', marks: 2, topic: 'Political Philosophy' },
  { id: 'pyq2', year: 2023, semester: 'UGC NET', subject: 'Western Political Thought', subjectHi: 'पश्चिमी राजनीतिक विचार', question: 'According to Plato, justice in the ideal state means:', questionHi: 'प्लेटो के अनुसार, आदर्श राज्य में न्याय का अर्थ है:', marks: 2, topic: 'Greek Thought' },
  { id: 'pyq3', year: 2023, semester: 'UGC NET', subject: 'Indian Constitution', subjectHi: 'भारतीय संविधान', question: 'The "Basic Structure" doctrine was propounded in which case?', questionHi: '"मूल ढांचा" सिद्धांत किस मामले में प्रतिपादित किया गया था?', marks: 2, topic: 'Constitutional Law' },
  { id: 'pyq4', year: 2023, semester: 'UGC NET', subject: 'IR', subjectHi: 'अंतर्राष्ट्रीय संबंध', question: 'The "Clash of Civilizations" thesis was propounded by:', questionHi: '"सभ्यताओं का संघर्ष" थीसिस किसके द्वारा प्रस्तावित की गई थी?', marks: 2, topic: 'International Relations' },
  { id: 'pyq5', year: 2023, semester: 'UGC NET', subject: 'Comparative Politics', subjectHi: 'तुलनात्मक राजनीति', question: 'Who introduced the concept of "Political Culture"?', questionHi: '"राजनीतिक संस्कृति" की अवधारणा किसने प्रस्तुत की?', marks: 2, topic: 'Comparative Politics' },
  { id: 'pyq6', year: 2023, semester: 'UGC NET', subject: 'Public Administration', subjectHi: 'लोक प्रशासन', question: 'The "POSDCORB" formula was coined by:', questionHi: '"POSDCORB" सूत्र किसके द्वारा गढ़ा गया था?', marks: 2, topic: 'Public Administration' },
  { id: 'pyq7', year: 2022, semester: 'UGC NET', subject: 'Political Theory', subjectHi: 'राजनीतिक सिद्धांत', question: 'Who defined democracy as "government of the people, by the people, for the people"?', questionHi: 'लोकतंत्र को "जनता का, जनता द्वारा, जनता के लिए शासन" किसने परिभाषित किया?', marks: 2, topic: 'Democracy' },
  { id: 'pyq8', year: 2022, semester: 'UGC NET', subject: 'Indian Politics', subjectHi: 'भारतीय राजनीति', question: 'Which article of the Indian Constitution deals with the Election Commission?', questionHi: 'भारतीय संविधान का कौन सा अनुच्छेद चुनाव आयोग से संबंधित है?', marks: 2, topic: 'Constitutional Bodies' },
  { id: 'pyq9', year: 2022, semester: 'UGC NET', subject: 'Western Thought', subjectHi: 'पश्चिमी विचार', question: 'Machiavelli is best known for which book?', questionHi: 'मैकियावेली किस पुस्तक के लिए सबसे प्रसिद्ध है?', marks: 2, topic: 'Modern Thought' },
  { id: 'pyq10', year: 2022, semester: 'UGC NET', subject: 'Indian Thought', subjectHi: 'भारतीय विचार', question: 'Who wrote "Annihilation of Caste"?', questionHi: '"जाति का विनाश" किसने लिखा?', marks: 2, topic: 'Indian Political Thought' },
  { id: 'pyq11', year: 2022, semester: 'UGC NET', subject: 'IR', subjectHi: 'अंतर्राष्ट्रीय संबंध', question: 'The concept of "Soft Power" was introduced by:', questionHi: '"सॉफ्ट पावर" की अवधारणा किसके द्वारा प्रस्तुत की गई थी?', marks: 2, topic: 'International Relations' },
  { id: 'pyq12', year: 2021, semester: 'UGC NET', subject: 'Political Theory', subjectHi: 'राजनीतिक सिद्धांत', question: 'Who wrote "The Origins of Totalitarianism"?', questionHi: '"The Origins of Totalitarianism" किसने लिखा?', marks: 2, topic: 'Political Philosophy' },
  { id: 'pyq13', year: 2021, semester: 'UGC NET', subject: 'Constitution', subjectHi: 'संविधान', question: 'The 73rd Constitutional Amendment deals with:', questionHi: '73वां संवैधानिक संशोधन किससे संबंधित है?', marks: 2, topic: 'Constitutional Amendments' },
  { id: 'pyq14', year: 2021, semester: 'UGC NET', subject: 'Comparative', subjectHi: 'तुलनात्मक', question: 'Which country has a "Semi-Presidential" system?', questionHi: 'किस देश में "अर्ध-राष्ट्रपति" प्रणाली है?', marks: 2, topic: 'Comparative Politics' },
  { id: 'pyq15', year: 2021, semester: 'UGC NET', subject: 'Indian Politics', subjectHi: 'भारतीय राजनीति', question: 'Who was the first Deputy Prime Minister of India?', questionHi: 'भारत के पहले उप प्रधानमंत्री कौन थे?', marks: 2, topic: 'Indian Politics' },
];

// ─── MCQ BANK ───
export const mcqBank: MCQ[] = [
  { id: 'mcq1', subject: 'Western Political Thought', subjectHi: 'पश्चिमी राजनीतिक विचार', topic: 'Plato', topicHi: 'प्लेटो', question: 'According to Plato, the ideal state should be ruled by:', questionHi: 'प्लेटो के अनुसार, आदर्श राज्य पर शासन करना चाहिए:', options: ['Soldiers', 'Philosopher Kings', 'Merchants', 'Farmers'], optionsHi: ['सैनिक', 'दार्शनिक राजा', 'व्यापारी', 'किसान'], correct: 1, explanation: 'Plato believed that only philosopher kings, who understand the Form of the Good, are fit to rule the ideal state.', explanationHi: 'प्लेटो का मानना था कि केवल दार्शनिक राजा, जो अच्छाई के स्वरूप को समझते हैं, आदर्श राज्य पर शासन करने के योग्य हैं।', difficulty: 'easy' },
  { id: 'mcq2', subject: 'Western Political Thought', subjectHi: 'पश्चिमी राजनीतिक विचार', topic: 'Aristotle', topicHi: 'अरस्तू', question: 'Aristotle classified governments into how many forms?', questionHi: 'अरस्तू ने सरकारों को कितने रूपों में वर्गीकृत किया?', options: ['3', '4', '6', '8'], optionsHi: ['3', '4', '6', '8'], correct: 2, explanation: 'Aristotle classified governments into 6 forms: Monarchy, Aristocracy, Polity (good forms) and Tyranny, Oligarchy, Democracy (perverted forms).', explanationHi: 'अरस्तू ने सरकारों को 6 रूपों में वर्गीकृत किया: राजतंत्र, अभिजाततंत्र, पॉलिटी (अच्छे रूप) और तानाशाही, कुलीनतंत्र, लोकतंत्र (विकृत रूप)।', difficulty: 'medium' },
  { id: 'mcq3', subject: 'Western Political Thought', subjectHi: 'पश्चिमी राजनीतिक विचार', topic: 'Machiavelli', topicHi: 'मैकियावेली', question: 'Machiavelli\'s "The Prince" is primarily a guide on:', questionHi: 'मैकियावेली की "द प्रिंस" मुख्य रूप से एक मार्गदर्शिका है:', options: ['Democratic governance', 'Statecraft and power', 'Religious tolerance', 'Economic policy'], optionsHi: ['लोकतांत्रिक शासन', 'राज्यकला और शक्ति', 'धार्मिक सहिष्णुता', 'आर्थिक नीति'], correct: 1, explanation: '"The Prince" is a practical guide for rulers on how to acquire and maintain political power.', explanationHi: '"द प्रिंस" शासकों के लिए राजनीतिक शक्ति प्राप्त करने और बनाए रखने पर एक व्यावहारिक मार्गदर्शिका है।', difficulty: 'easy' },
  { id: 'mcq4', subject: 'Indian Political Thought', subjectHi: 'भारतीय राजनीतिक विचार', topic: 'Gandhi', topicHi: 'गांधी', question: 'Gandhi\'s concept of "Satyagraha" literally means:', questionHi: 'गांधी की "सत्याग्रह" की अवधारणा का शाब्दिक अर्थ है:', options: ['Passive resistance', 'Insistence on truth', 'Civil disobedience', 'Non-cooperation'], optionsHi: ['निष्क्रिय प्रतिरोध', 'सत्य पर आग्रह', 'सविनय अवज्ञा', 'असहयोग'], correct: 1, explanation: 'Satyagraha literally means "insistence on truth" (Satya + Agraha). It goes beyond passive resistance to active non-violent force.', explanationHi: 'सत्याग्रह का शाब्दिक अर्थ "सत्य पर आग्रह" (सत्य + आग्रह) है। यह निष्क्रिय प्रतिरोध से आगे बढ़कर सक्रिय अहिंसक बल है।', difficulty: 'medium' },
  { id: 'mcq5', subject: 'Indian Constitution', subjectHi: 'भारतीय संविधान', topic: 'Preamble', topicHi: 'प्रस्तावना', question: 'The word "Secular" was added to the Preamble by which amendment?', questionHi: 'प्रस्तावना में "धर्मनिरपेक्ष" शब्द किस संशोधन द्वारा जोड़ा गया?', options: ['42nd Amendment', '44th Amendment', '24th Amendment', '86th Amendment'], optionsHi: ['42वां संशोधन', '44वां संशोधन', '24वां संशोधन', '86वां संशोधन'], correct: 0, explanation: 'The 42nd Amendment Act, 1976 added the words "Socialist", "Secular", and "Integrity" to the Preamble.', explanationHi: '42वें संशोधन अधिनियम, 1976 ने प्रस्तावना में "समाजवादी", "धर्मनिरपेक्ष" और "अखंडता" शब्द जोड़े।', difficulty: 'medium' },
  { id: 'mcq6', subject: 'International Relations', subjectHi: 'अंतर्राष्ट्रीय संबंध', topic: 'Realism', topicHi: 'यथार्थवाद', question: 'Who wrote "Politics Among Nations"?', questionHi: '"Politics Among Nations" किसने लिखा?', options: ['Kenneth Waltz', 'Hans Morgenthau', 'E.H. Carr', 'Henry Kissinger'], optionsHi: ['केननेथ वाल्ट्ज', 'हैंस मॉर्गेंथाऊ', 'ई.एच. कार', 'हेनरी किसिंजर'], correct: 1, explanation: 'Hans Morgenthau wrote "Politics Among Nations" (1948), a foundational text of classical realism in IR.', explanationHi: 'हैंस मॉर्गेंथाऊ ने "Politics Among Nations" (1948) लिखा, जो IR में शास्त्रीय यथार्थवाद का एक मूलभूत पाठ है।', difficulty: 'medium' },
  { id: 'mcq7', subject: 'Comparative Politics', subjectHi: 'तुलनात्मक राजनीति', topic: 'Systems Theory', topicHi: 'सिस्टम सिद्धांत', question: 'David Easton\'s model of political system focuses on:', questionHi: 'डेविड ईस्टन का राजनीतिक प्रणाली मॉडल किस पर केंद्रित है:', options: ['Power elite', 'Input-Output analysis', 'Class struggle', 'Institutional design'], optionsHi: ['शक्ति अभिजन', 'इनपुट-आउटपुट विश्लेषण', 'वर्ग संघर्ष', 'संस्थागत डिजाइन'], correct: 1, explanation: 'Easton\'s model views the political system as converting inputs (demands, supports) into outputs (decisions, policies) with feedback loops.', explanationHi: 'ईस्टन का मॉडल राजनीतिक प्रणाली को इनपुट (मांग, समर्थन) को आउटपुट (निर्णय, नीतियां) में फीडबैक लूप के साथ बदलने वाला मानता है।', difficulty: 'hard' },
  { id: 'mcq8', subject: 'Public Administration', subjectHi: 'लोक प्रशासन', topic: 'Bureaucracy', topicHi: 'नौकरशाही', question: 'Max Weber identified which type of authority as most rational?', questionHi: 'मैक्स वेबर ने किस प्रकार के प्राधिकार को सबसे तर्कसंगत बताया?', options: ['Traditional', 'Charismatic', 'Legal-Rational', 'Divine'], optionsHi: ['पारंपरिक', 'करिश्माई', 'कानूनी-तर्कसंगत', 'दैवीय'], correct: 2, explanation: 'Weber identified Legal-Rational authority, based on formal rules and procedures, as the most rational form in modern bureaucracies.', explanationHi: 'वेबर ने कानूनी-तर्कसंगत प्राधिकार को, जो औपचारिक नियमों और प्रक्रियाओं पर आधारित है, आधुनिक नौकरशाही में सबसे तर्कसंगत रूप बताया।', difficulty: 'medium' },
  { id: 'mcq9', subject: 'Indian Politics', subjectHi: 'भारतीय राजनीति', topic: 'Elections', topicHi: 'चुनाव', question: 'The Chief Election Commissioner of India is appointed by:', questionHi: 'भारत के मुख्य चुनाव आयुक्त की नियुक्ति कौन करता है?', options: ['Prime Minister', 'President', 'Chief Justice', 'Parliament'], optionsHi: ['प्रधानमंत्री', 'राष्ट्रपति', 'मुख्य न्यायाधीश', 'संसद'], correct: 1, explanation: 'The Chief Election Commissioner is appointed by the President of India under Article 324.', explanationHi: 'मुख्य चुनाव आयुक्त की नियुक्ति भारत के राष्ट्रपति द्वारा अनुच्छेद 324 के तहत की जाती है।', difficulty: 'easy' },
  { id: 'mcq10', subject: 'Political Theory', subjectHi: 'राजनीतिक सिद्धांत', topic: 'Rights', topicHi: 'अधिकार', question: 'Who made the distinction between negative and positive liberty?', questionHi: 'नकारात्मक और सकारात्मक स्वतंत्रता के बीच अंतर किसने किया?', options: ['John Rawls', 'Isaiah Berlin', 'Robert Nozick', 'Karl Marx'], optionsHi: ['जॉन रॉल्स', 'आइज़िया बर्लिन', 'रॉबर्ट नोज़िक', 'कार्ल मार्क्स'], correct: 1, explanation: 'Isaiah Berlin in "Two Concepts of Liberty" (1958) distinguished between negative liberty (freedom from interference) and positive liberty (freedom to self-realize).', explanationHi: 'आइज़िया बर्लिन ने "Two Concepts of Liberty" (1958) में नकारात्मक स्वतंत्रता (हस्तक्षेप से मुक्ति) और सकारात्मक स्वतंत्रता (आत्म-साक्षात्कार की स्वतंत्रता) के बीच अंतर किया।', difficulty: 'hard' },
];

// ─── FLASHCARD DECKS ───
export const flashcards: Flashcard[] = [
  { id: 'fc1', deckId: 'deck1', deckName: 'Western Political Thinkers', deckNameHi: 'पश्चिमी राजनीतिक विचारक', front: 'Plato', frontHi: 'प्लेटो', back: 'Greek philosopher (428-348 BCE). Student of Socrates. Founded the Academy. Key works: "The Republic", "The Laws". Advocated Philosopher Kings, Theory of Forms, and Ideal State based on Justice.', backHi: 'यूनानी दार्शनिक (428-348 ईसा पूर्व)। सुकरात के शिष्य। अकादमी की स्थापना की। प्रमुख कृतियां: "द रिपब्लिक", "द लॉज़"। दार्शनिक राजाओं, रूपों के सिद्धांत और न्याय पर आधारित आदर्श राज्य की वकालत की।', category: 'Thinkers' },
  { id: 'fc2', deckId: 'deck1', deckName: 'Western Political Thinkers', deckNameHi: 'पश्चिमी राजनीतिक विचारक', front: 'Aristotle', frontHi: 'अरस्तू', back: 'Greek philosopher (384-322 BCE). Student of Plato, tutor of Alexander. Key works: "Politics", "Nicomachean Ethics". Father of Political Science. Man is by nature a political animal (Zoon Politikon). Classified governments into 6 types.', backHi: 'यूनानी दार्शनिक (384-322 ईसा पूर्व)। प्लेटो के शिष्य, सिकंदर के गुरु। प्रमुख कृतियां: "पॉलिटिक्स", "निकोमैकियन एथिक्स"। राजनीति विज्ञान के जनक। मनुष्य स्वभाव से राजनीतिक प्राणी है। सरकारों को 6 प्रकारों में वर्गीकृत किया।', category: 'Thinkers' },
  { id: 'fc3', deckId: 'deck1', deckName: 'Western Political Thinkers', deckNameHi: 'पश्चिमी राजनीतिक विचारक', front: 'Machiavelli', frontHi: 'मैकियावेली', back: 'Italian diplomat (1469-1527). Key work: "The Prince" (1513), "Discourses on Livy". Father of modern political science. Advocated realism — politics separated from ethics and religion. Ends justify means. Virtù (skill, strength) and Fortuna (luck).', backHi: 'इतालवी राजनयिक (1469-1527)। प्रमुख कृति: "द प्रिंस" (1513), "डिस्कोर्सेज़ ऑन लिवी"। आधुनिक राजनीति विज्ञान के जनक। यथार्थवाद की वकालत — राजनीति को नैतिकता और धर्म से अलग किया। साध्य साधनों को उचित ठहराता है।', category: 'Thinkers' },
  { id: 'fc4', deckId: 'deck1', deckName: 'Western Political Thinkers', deckNameHi: 'पश्चिमी राजनीतिक विचारक', front: 'Thomas Hobbes', frontHi: 'थॉमस हॉब्स', back: 'English philosopher (1588-1679). Key work: "Leviathan" (1651). Social contract theorist. State of nature: "solitary, poor, nasty, brutish, and short". Advocated absolute sovereignty to escape anarchy. Man is selfish by nature.', backHi: 'अंग्रेजी दार्शनिक (1588-1679)। प्रमुख कृति: "लेवियाथान" (1651)। सामाजिक अनुबंध सिद्धांतकार। प्राकृतिक अवस्था: "एकाकी, गरीब, बुरा, पाशविक और छोटा"। अराजकता से बचने के लिए पूर्ण संप्रभुता की वकालत की। मनुष्य स्वभाव से स्वार्थी है।', category: 'Thinkers' },
  { id: 'fc5', deckId: 'deck1', deckName: 'Western Political Thinkers', deckNameHi: 'पश्चिमी राजनीतिक विचारक', front: 'John Locke', frontHi: 'जॉन लॉक', back: 'English philosopher (1632-1704). Key work: "Two Treatises of Government". Natural rights: Life, Liberty, Property. Government by consent. Right to revolution against tyranny. Father of Liberalism. Influenced American and French Revolutions.', backHi: 'अंग्रेजी दार्शनिक (1632-1704)। प्रमुख कृति: "Two Treatises of Government"। प्राकृतिक अधिकार: जीवन, स्वतंत्रता, संपत्ति। सहमति से सरकार। अत्याचार के खिलाफ क्रांति का अधिकार। उदारवाद के जनक। अमेरिकी और फ्रांसीसी क्रांतियों को प्रभावित किया।', category: 'Thinkers' },
  { id: 'fc6', deckId: 'deck1', deckName: 'Western Political Thinkers', deckNameHi: 'पश्चिमी राजनीतिक विचारक', front: 'Rousseau', frontHi: 'रूसो', back: 'French philosopher (1712-1778). Key work: "The Social Contract" (1762). "Man is born free, and everywhere he is in chains." General Will — what is best for the whole community. Popular sovereignty. Inspired French Revolution.', backHi: 'फ्रांसीसी दार्शनिक (1712-1778)। प्रमुख कृति: "द सोशल कॉन्ट्रैक्ट" (1762)। "मनुष्य स्वतंत्र पैदा होता है, और हर जगह जंजीरों में है।" सामान्य इच्छा — पूरे समुदाय के लिए सबसे अच्छा। लोकप्रिय संप्रभुता। फ्रांसीसी क्रांति को प्रेरित किया।', category: 'Thinkers' },
  { id: 'fc7', deckId: 'deck2', deckName: 'Indian Constitution', deckNameHi: 'भारतीय संविधान', front: 'Article 14', frontHi: 'अनुच्छेद 14', back: 'Right to Equality — "The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India." Two concepts: equality before law (British) and equal protection of laws (American).', backHi: 'समानता का अधिकार — "राज्य किसी भी व्यक्ति को कानून के समक्ष समानता या भारत के क्षेत्र में कानूनों के समान संरक्षण से वंचित नहीं करेगा।" दो अवधारणाएं: कानून के समक्ष समानता (ब्रिटिश) और कानूनों का समान संरक्षण (अमेरिकी)।', category: 'Constitution' },
  { id: 'fc8', deckId: 'deck2', deckName: 'Indian Constitution', deckNameHi: 'भारतीय संविधान', front: 'Article 21', frontHi: 'अनुच्छेद 21', back: 'Protection of Life and Personal Liberty — "No person shall be deprived of his life or personal liberty except according to procedure established by law." Expanded by SC in Maneka Gandhi case (1978) to include due process. Includes right to privacy, livelihood, health, environment.', backHi: 'जीवन और व्यक्तिगत स्वतंत्रता का संरक्षण — "किसी व्यक्ति को कानून द्वारा स्थापित प्रक्रिया के अनुसार ही उसके जीवन या व्यक्तिगत स्वतंत्रता से वंचित किया जाएगा।" मेनका गांधी मामले (1978) में SC द्वारा विस्तारित। गोपनीयता, आजीविका, स्वास्थ्य, पर्यावरण का अधिकार शामिल।', category: 'Constitution' },
  { id: 'fc9', deckId: 'deck2', deckName: 'Indian Constitution', deckNameHi: 'भारतीय संविधान', front: 'Basic Structure Doctrine', frontHi: 'मूल ढांचा सिद्धांत', back: 'Propounded in Kesavananda Bharati v. State of Kerala (1973). Parliament can amend any part of the Constitution but cannot destroy its "basic structure." Key elements: supremacy of Constitution, republican & democratic form, secularism, federalism, judicial review, etc.', backHi: 'केशवानंद भारती बनाम केरल राज्य (1973) में प्रतिपादित। संसद संविधान के किसी भी भाग में संशोधन कर सकती है लेकिन इसकी "मूल संरचना" को नष्ट नहीं कर सकती। प्रमुख तत्व: संविधान की सर्वोच्चता, गणतांत्रिक और लोकतांत्रिक स्वरूप, धर्मनिरपेक्षता, संघवाद, न्यायिक समीक्षा।', category: 'Constitution' },
  { id: 'fc10', deckId: 'deck3', deckName: 'International Relations Theories', deckNameHi: 'अंतर्राष्ट्रीय संबंध सिद्धांत', front: 'Realism', frontHi: 'यथार्थवाद', back: 'States are primary actors in anarchic international system. Pursue power and national interest. Key thinkers: Thucydides, Machiavelli, Hobbes, Morgenthau, Waltz. Balance of power is key mechanism. Pessimistic about human nature. Self-help system.', backHi: 'राज्य अराजक अंतर्राष्ट्रीय प्रणाली में प्राथमिक अभिनेता हैं। शक्ति और राष्ट्रीय हित का पीछा करते हैं। प्रमुख विचारक: थ्यूसीडाइड्स, मैकियावेली, हॉब्स, मॉर्गेंथाऊ, वाल्ट्ज। शक्ति संतुलन प्रमुख तंत्र है। मानव स्वभाव के बारे में निराशावादी।', category: 'IR' },
  { id: 'fc11', deckId: 'deck3', deckName: 'International Relations Theories', deckNameHi: 'अंतर्राष्ट्रीय संबंध सिद्धांत', front: 'Liberalism', frontHi: 'उदारवाद', back: 'Emphasizes cooperation, institutions, and interdependence. Democratic Peace Theory — democracies rarely fight each other. Key thinkers: Kant, Wilson, Keohane & Nye. International organizations matter. Trade creates interdependence reducing conflict.', backHi: 'सहयोग, संस्थाओं और अंतर्निर्भरता पर जोर। लोकतांत्रिक शांति सिद्धांत — लोकतंत्र शायद ही कभी एक-दूसरे से लड़ते हैं। प्रमुख विचारक: कांट, विल्सन, केओहेन और नाइ। अंतर्राष्ट्रीय संगठन मायने रखते हैं। व्यापार अंतर्निर्भरता बनाता है जो संघर्ष को कम करता है।', category: 'IR' },
  { id: 'fc12', deckId: 'deck3', deckName: 'International Relations Theories', deckNameHi: 'अंतर्राष्ट्रीय संबंध सिद्धांत', front: 'Constructivism', frontHi: 'रचनावाद', back: 'Alexander Wendt: "Anarchy is what states make of it." International relations are socially constructed. Norms, identities, and ideas matter as much as material forces. Focus on how shared understandings shape state behavior. Emphasis on non-material factors.', backHi: 'अलेक्जेंडर वेंड्ट: "अराजकता वह है जो राज्य इसे बनाते हैं।" अंतर्राष्ट्रीय संबंध सामाजिक रूप से निर्मित होते हैं। मानदंड, पहचान और विचार भौतिक बलों जितने ही महत्वपूर्ण हैं। साझा समझ कैसे राज्य व्यवहार को आकार देती है। गैर-भौतिक कारकों पर जोर।', category: 'IR' },
];

// ─── MATCHING GAMES ───
export const matchingPairs: MatchingPair[] = [
  { id: 'match1', gameId: 'game1', gameName: 'Thinkers & Their Works', gameNameHi: 'विचारक और उनकी कृतियां', left: 'Plato', leftHi: 'प्लेटो', right: 'The Republic', rightHi: 'द रिपब्लिक', category: 'Books' },
  { id: 'match2', gameId: 'game1', gameName: 'Thinkers & Their Works', gameNameHi: 'विचारक और उनकी कृतियां', left: 'Machiavelli', leftHi: 'मैकियावेली', right: 'The Prince', rightHi: 'द प्रिंस', category: 'Books' },
  { id: 'match3', gameId: 'game1', gameName: 'Thinkers & Their Works', gameNameHi: 'विचारक और उनकी कृतियां', left: 'Hobbes', leftHi: 'हॉब्स', right: 'Leviathan', rightHi: 'लेवियाथान', category: 'Books' },
  { id: 'match4', gameId: 'game1', gameName: 'Thinkers & Their Works', gameNameHi: 'विचारक और उनकी कृतियां', left: 'Rousseau', leftHi: 'रूसो', right: 'The Social Contract', rightHi: 'सामाजिक अनुबंध', category: 'Books' },
  { id: 'match5', gameId: 'game1', gameName: 'Thinkers & Their Works', gameNameHi: 'विचारक और उनकी कृतियां', left: 'Kautilya', leftHi: 'कौटिल्य', right: 'Arthashastra', rightHi: 'अर्थशास्त्र', category: 'Books' },
  { id: 'match6', gameId: 'game1', gameName: 'Thinkers & Their Works', gameNameHi: 'विचारक और उनकी कृतियां', left: 'John Rawls', leftHi: 'जॉन रॉल्स', right: 'A Theory of Justice', rightHi: 'न्याय का सिद्धांत', category: 'Books' },
  { id: 'match7', gameId: 'game1', gameName: 'Thinkers & Their Works', gameNameHi: 'विचारक और उनकी कृतियां', left: 'Ambedkar', leftHi: 'आंबेडकर', right: 'Annihilation of Caste', rightHi: 'जाति का विनाश', category: 'Books' },
  { id: 'match8', gameId: 'game1', gameName: 'Thinkers & Their Works', gameNameHi: 'विचारक और उनकी कृतियां', left: 'Gandhi', leftHi: 'गांधी', right: 'Hind Swaraj', rightHi: 'हिंद स्वराज', category: 'Books' },
  { id: 'match9', gameId: 'game2', gameName: 'Constitutional Articles', gameNameHi: 'संवैधानिक अनुच्छेद', left: 'Article 14', leftHi: 'अनुच्छेद 14', right: 'Right to Equality', rightHi: 'समानता का अधिकार', category: 'Constitution' },
  { id: 'match10', gameId: 'game2', gameName: 'Constitutional Articles', gameNameHi: 'संवैधानिक अनुच्छेद', left: 'Article 19', leftHi: 'अनुच्छेद 19', right: 'Freedom of Speech', rightHi: 'अभिव्यक्ति की स्वतंत्रता', category: 'Constitution' },
  { id: 'match11', gameId: 'game2', gameName: 'Constitutional Articles', gameNameHi: 'संवैधानिक अनुच्छेद', left: 'Article 21', leftHi: 'अनुच्छेद 21', right: 'Right to Life & Liberty', rightHi: 'जीवन और स्वतंत्रता का अधिकार', category: 'Constitution' },
  { id: 'match12', gameId: 'game2', gameName: 'Constitutional Articles', gameNameHi: 'संवैधानिक अनुच्छेद', left: 'Article 32', leftHi: 'अनुच्छेद 32', right: 'Constitutional Remedies', rightHi: 'संवैधानिक उपचार', category: 'Constitution' },
  { id: 'match13', gameId: 'game2', gameName: 'Constitutional Articles', gameNameHi: 'संवैधानिक अनुच्छेद', left: 'Article 352', leftHi: 'अनुच्छेद 352', right: 'National Emergency', rightHi: 'राष्ट्रीय आपातकाल', category: 'Constitution' },
  { id: 'match14', gameId: 'game2', gameName: 'Constitutional Articles', gameNameHi: 'संवैधानिक अनुच्छेद', left: 'Article 356', leftHi: 'अनुच्छेद 356', right: 'President\'s Rule', rightHi: 'राष्ट्रपति शासन', category: 'Constitution' },
];

// ─── CHRONOLOGY GAMES ───
export const chronologyEvents: ChronologyEvent[] = [
  { id: 'chrono1', gameId: 'chrono1', gameName: 'Indian Political Timeline', gameNameHi: 'भारतीय राजनीतिक समयरेखा', event: 'Indian National Congress Founded', eventHi: 'भारतीय राष्ट्रीय कांग्रेस की स्थापना', year: 1885, description: 'Founded by A.O. Hume with 72 delegates in Bombay', descriptionHi: 'ए.ओ. ह्यूम द्वारा बंबई में 72 प्रतिनिधियों के साथ स्थापित' },
  { id: 'chrono2', gameId: 'chrono1', gameName: 'Indian Political Timeline', gameNameHi: 'भारतीय राजनीतिक समयरेखा', event: 'Partition of Bengal', eventHi: 'बंगाल का विभाजन', year: 1905, description: 'Lord Curzon partitioned Bengal; sparked Swadeshi Movement', descriptionHi: 'लॉर्ड कर्जन ने बंगाल का विभाजन किया; स्वदेशी आंदोलन शुरू हुआ' },
  { id: 'chrono3', gameId: 'chrono1', gameName: 'Indian Political Timeline', gameNameHi: 'भारतीय राजनीतिक समयरेखा', event: 'Jallianwala Bagh Massacre', eventHi: 'जलियांवाला बाग हत्याकांड', year: 1919, description: 'General Dyer ordered firing on peaceful gathering in Amritsar', descriptionHi: 'जनरल डायर ने अमृतसर में शांतिपूर्ण सभा पर गोली चलाने का आदेश दिया' },
  { id: 'chrono4', gameId: 'chrono1', gameName: 'Indian Political Timeline', gameNameHi: 'भारतीय राजनीतिक समयरेखा', event: 'Dandi March / Salt Satyagraha', eventHi: 'दांडी मार्च / नमक सत्याग्रह', year: 1930, description: 'Gandhi marched 240 miles from Sabarmati to Dandi to break salt law', descriptionHi: 'गांधी ने नमक कानून तोड़ने के लिए साबरमती से दांडी तक 240 मील की यात्रा की' },
  { id: 'chrono5', gameId: 'chrono1', gameName: 'Indian Political Timeline', gameNameHi: 'भारतीय राजनीतिक समयरेखा', event: 'Quit India Movement', eventHi: 'भारत छोड़ो आंदोलन', year: 1942, description: 'Gandhi\'s call to "Do or Die"; Congress leaders arrested', descriptionHi: 'गांधी का "करो या मरो" का आह्वान; कांग्रेस नेता गिरफ्तार' },
  { id: 'chrono6', gameId: 'chrono1', gameName: 'Indian Political Timeline', gameNameHi: 'भारतीय राजनीतिक समयरेखा', event: 'Indian Independence & Partition', eventHi: 'भारतीय स्वतंत्रता और विभाजन', year: 1947, description: 'India gained independence on August 15; Pakistan created', descriptionHi: 'भारत को 15 अगस्त को स्वतंत्रता मिली; पाकिस्तान बना' },
  { id: 'chrono7', gameId: 'chrono1', gameName: 'Indian Political Timeline', gameNameHi: 'भारतीय राजनीतिक समयरेखा', event: 'Constitution Adopted', eventHi: 'संविधान अंगीकृत', year: 1950, description: 'Indian Constitution came into force on January 26 (Republic Day)', descriptionHi: 'भारतीय संविधान 26 जनवरी (गणतंत्र दिवस) को लागू हुआ' },
  { id: 'chrono8', gameId: 'chrono1', gameName: 'Indian Political Timeline', gameNameHi: 'भारतीय राजनीतिक समयरेखा', event: 'Indo-Pak War & Bangladesh Liberation', eventHi: 'भारत-पाक युद्ध और बांग्लादेश मुक्ति', year: 1971, description: 'Bangladesh liberated; India-Pakistan war; Shimla Agreement', descriptionHi: 'बांग्लादेश मुक्त; भारत-पाकिस्तान युद्ध; शिमला समझौता' },
  { id: 'chrono9', gameId: 'chrono1', gameName: 'Indian Political Timeline', gameNameHi: 'भारतीय राजनीतिक समयरेखा', event: 'Emergency Declared', eventHi: 'आपातकाल घोषित', year: 1975, description: 'Indira Gandhi declared National Emergency; lasted till 1977', descriptionHi: 'इंदिरा गांधी ने राष्ट्रीय आपातकाल घोषित किया; 1977 तक चला' },
  { id: 'chrono10', gameId: 'chrono1', gameName: 'Indian Political Timeline', gameNameHi: 'भारतीय राजनीतिक समयरेखा', event: 'Economic Liberalization', eventHi: 'आर्थिक उदारीकरण', year: 1991, description: 'Manmohan Singh\'s budget; LPG reforms — Liberalization, Privatization, Globalization', descriptionHi: 'मनमोहन सिंह का बजट; एलपीजी सुधार — उदारीकरण, निजीकरण, वैश्वीकरण' },
];

// ─── MIND MAPS ───
export const mindMaps: Record<string, MindMapNode> = {
  'western-thought': {
    id: 'root',
    topicId: 'western-thought',
    label: 'Western Political Thought',
    labelHi: 'पश्चिमी राजनीतिक विचार',
    children: [
      { id: 'greek', topicId: 'western-thought', label: 'Greek (Plato, Aristotle)', labelHi: 'यूनानी (प्लेटो, अरस्तू)', children: [
        { id: 'plato', topicId: 'western-thought', label: 'Plato: Ideal State, Justice', labelHi: 'प्लेटो: आदर्श राज्य, न्याय', children: [] },
        { id: 'aristotle', topicId: 'western-thought', label: 'Aristotle: Classification, Revolution', labelHi: 'अरस्तू: वर्गीकरण, क्रांति', children: [] },
      ]},
      { id: 'social-contract', topicId: 'western-thought', label: 'Social Contract (Hobbes, Locke, Rousseau)', labelHi: 'सामाजिक अनुबंध (हॉब्स, लॉक, रूसो)', children: [
        { id: 'hobbes', topicId: 'western-thought', label: 'Hobbes: Leviathan, Absolute Sovereign', labelHi: 'हॉब्स: लेवियाथान, पूर्ण संप्रभु', children: [] },
        { id: 'locke', topicId: 'western-thought', label: 'Locke: Natural Rights, Limited Govt', labelHi: 'लॉक: प्राकृतिक अधिकार, सीमित सरकार', children: [] },
        { id: 'rousseau', topicId: 'western-thought', label: 'Rousseau: General Will, Popular Sovereignty', labelHi: 'रूसो: सामान्य इच्छा, लोकप्रिय संप्रभुता', children: [] },
      ]},
      { id: 'modern', topicId: 'western-thought', label: 'Modern (Mill, Hegel, Marx)', labelHi: 'आधुनिक (मिल, हेगेल, मार्क्स)', children: [
        { id: 'mill', topicId: 'western-thought', label: 'Mill: Liberty, Utilitarianism', labelHi: 'मिल: स्वतंत्रता, उपयोगितावाद', children: [] },
        { id: 'hegel', topicId: 'western-thought', label: 'Hegel: Dialectics, State', labelHi: 'हेगेल: द्वंद्वात्मकता, राज्य', children: [] },
        { id: 'marx', topicId: 'western-thought', label: 'Marx: Historical Materialism, Class Struggle', labelHi: 'मार्क्स: ऐतिहासिक भौतिकवाद, वर्ग संघर्ष', children: [] },
      ]},
    ],
  },
  'indian-constitution': {
    id: 'root2',
    topicId: 'indian-constitution',
    label: 'Indian Constitution',
    labelHi: 'भारतीय संविधान',
    children: [
      { id: 'preamble', topicId: 'indian-constitution', label: 'Preamble: Sovereign, Socialist, Secular, Democratic, Republic', labelHi: 'प्रस्तावना: संप्रभु, समाजवादी, धर्मनिरपेक्ष, लोकतांत्रिक, गणराज्य', children: [] },
      { id: 'fr', topicId: 'indian-constitution', label: 'Fundamental Rights (Art 12-35)', labelHi: 'मौलिक अधिकार (अनु. 12-35)', children: [
        { id: 'fr-eq', topicId: 'indian-constitution', label: 'Right to Equality (14-18)', labelHi: 'समानता का अधिकार (14-18)', children: [] },
        { id: 'fr-lib', topicId: 'indian-constitution', label: 'Right to Freedom (19-22)', labelHi: 'स्वतंत्रता का अधिकार (19-22)', children: [] },
        { id: 'fr-exploit', topicId: 'indian-constitution', label: 'Right Against Exploitation (23-24)', labelHi: 'शोषण के विरुद्ध अधिकार (23-24)', children: [] },
        { id: 'fr-religion', topicId: 'indian-constitution', label: 'Right to Religion (25-28)', labelHi: 'धर्म का अधिकार (25-28)', children: [] },
        { id: 'fr-culture', topicId: 'indian-constitution', label: 'Cultural & Educational Rights (29-30)', labelHi: 'सांस्कृतिक और शैक्षिक अधिकार (29-30)', children: [] },
        { id: 'fr-remedy', topicId: 'indian-constitution', label: 'Right to Constitutional Remedies (32)', labelHi: 'संवैधानिक उपचार का अधिकार (32)', children: [] },
      ]},
      { id: 'dpsp', topicId: 'indian-constitution', label: 'Directive Principles (Art 36-51)', labelHi: 'निदेशक तत्व (अनु. 36-51)', children: [] },
      { id: 'fd', topicId: 'indian-constitution', label: 'Fundamental Duties (Art 51A)', labelHi: 'मौलिक कर्तव्य (अनु. 51A)', children: [] },
    ],
  },
};

// ─── REVISION NOTES ───
export const revisionNotes: RevisionNote[] = [
  {
    id: 'rev1', topicId: 'plato-justice',
    title: 'Plato\'s Theory of Justice',
    titleHi: 'प्लेटो का न्याय सिद्धांत',
    content: 'Plato\'s theory of justice is the foundation of "The Republic." He rejects the Sophist view that justice is the interest of the stronger (Thrasymachus). For Plato, justice is a virtue of the soul — both individual and state. In the ideal state, justice means each class performs its own function: Rulers (reason/wisdom), Auxiliaries (spirit/courage), and Producers (appetite/temperance). Justice is the harmony resulting when each class minds its own business (ta autou prattein). At the individual level, justice is the harmony of three elements of the soul — reason, spirit, and appetite — with reason ruling over the others.',
    contentHi: 'प्लेटो का न्याय सिद्धांत "द रिपब्लिक" की नींव है। वह सोफिस्ट दृष्टिकोण को अस्वीकार करता है कि न्याय शक्तिशाली का हित है (थ्रेसीमेकस)। प्लेटो के लिए, न्याय आत्मा का एक गुण है — व्यक्तिगत और राज्य दोनों का। आदर्श राज्य में, न्याय का अर्थ है प्रत्येक वर्ग अपना कार्य करता है: शासक (तर्क/ज्ञान), सहायक (आत्मा/साहस), और उत्पादक (इच्छा/संयम)। न्याय वह सामंजस्य है जो तब उत्पन्न होता है जब प्रत्येक वर्ग अपना काम करता है। व्यक्तिगत स्तर पर, न्याय आत्मा के तीन तत्वों — तर्क, आत्मा और इच्छा — का सामंजस्य है जिसमें तर्क अन्य पर शासन करता है।',
    keyPoints: ['Justice as harmony of three classes', 'Each class does its own work', 'Reason rules spirit and appetite', 'Rejects Thrasymachus\'s "might is right"', 'Justice is both individual and social virtue'],
    keyPointsHi: ['तीन वर्गों के सामंजस्य के रूप में न्याय', 'प्रत्येक वर्ग अपना काम करता है', 'तर्क आत्मा और इच्छा पर शासन करता है', 'थ्रेसीमेकस के "शक्ति ही सत्य है" को अस्वीकार', 'न्याय व्यक्तिगत और सामाजिक दोनों गुण है'],
  },
  {
    id: 'rev2', topicId: 'constitution-basic-structure',
    title: 'Basic Structure Doctrine',
    titleHi: 'मूल ढांचा सिद्धांत',
    content: 'The Basic Structure Doctrine is a judicial innovation of the Supreme Court of India. It was first propounded in the landmark case of Kesavananda Bharati v. State of Kerala (1973) by a 13-judge bench (7:6 majority). The court held that while Parliament has wide powers to amend the Constitution under Article 368, it cannot alter or destroy the "basic structure" or essential features of the Constitution. This limits the amending power of Parliament. Key elements of basic structure include: supremacy of the Constitution, republican and democratic form of government, secular character, separation of powers, federal character, judicial review, and rule of law. The doctrine was further reinforced in Indira Gandhi v. Raj Narain (1975) and Minerva Mills v. Union of India (1980).',
    contentHi: 'मूल ढांचा सिद्धांत भारत के सर्वोच्च न्यायालय का एक न्यायिक नवाचार है। यह पहली बार केशवानंद भारती बनाम केरल राज्य (1973) के ऐतिहासिक मामले में 13-न्यायाधीशों की पीठ (7:6 बहुमत) द्वारा प्रतिपादित किया गया था। न्यायालय ने कहा कि जबकि संसद के पास अनुच्छेद 368 के तहत संविधान में संशोधन की व्यापक शक्तियां हैं, यह संविधान की "मूल संरचना" या आवश्यक विशेषताओं को बदल या नष्ट नहीं कर सकती। यह संसद की संशोधन शक्ति को सीमित करता है। मूल संरचना के प्रमुख तत्वों में शामिल हैं: संविधान की सर्वोच्चता, सरकार का गणतांत्रिक और लोकतांत्रिक स्वरूप, धर्मनिरपेक्ष चरित्र, शक्तियों का पृथक्करण, संघीय चरित्र, न्यायिक समीक्षा और विधि का शासन।',
    keyPoints: ['Propounded in Kesavananda Bharati case (1973)', '13-judge bench, 7:6 majority', 'Parliament cannot destroy Constitution\'s basic structure', 'Key elements: democracy, secularism, federalism, judicial review', 'Reinforced in Minerva Mills (1980) and Indira Gandhi cases'],
    keyPointsHi: ['केशवानंद भारती मामले (1973) में प्रतिपादित', '13-न्यायाधीश पीठ, 7:6 बहुमत', 'संसद संविधान की मूल संरचना को नष्ट नहीं कर सकती', 'प्रमुख तत्व: लोकतंत्र, धर्मनिरपेक्षता, संघवाद, न्यायिक समीक्षा', 'मिनर्वा मिल्स (1980) और इंदिरा गांधी मामलों में सुदृढ़'],
  },
];

// ─── CONSTITUTION ARTICLES (for Explorer) ───
export interface ConstitutionArticle {
  id: string;
  article: string;
  title: string;
  titleHi: string;
  content: string;
  contentHi: string;
  part: string;
  partHi: string;
}

export const constitutionArticles: ConstitutionArticle[] = [
  { id: 'art1', article: 'Article 1', title: 'Name and territory of the Union', titleHi: 'संघ का नाम और राज्य क्षेत्र', content: 'India, that is Bharat, shall be a Union of States.', contentHi: 'भारत, अर्थात इंडिया, राज्यों का एक संघ होगा।', part: 'Part I', partHi: 'भाग I' },
  { id: 'art14', article: 'Article 14', title: 'Equality before law', titleHi: 'कानून के समक्ष समानता', content: 'The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.', contentHi: 'राज्य किसी भी व्यक्ति को भारत के क्षेत्र में कानून के समक्ष समानता या कानूनों के समान संरक्षण से वंचित नहीं करेगा।', part: 'Part III', partHi: 'भाग III' },
  { id: 'art19', article: 'Article 19', title: 'Protection of certain rights regarding freedom of speech, etc.', titleHi: 'अभिव्यक्ति की स्वतंत्रता आदि से संबंधित अधिकारों का संरक्षण', content: 'All citizens shall have the right to freedom of speech and expression, to assemble peaceably, to form associations, to move freely, to reside and settle, and to practice any profession.', contentHi: 'सभी नागरिकों को अभिव्यक्ति की स्वतंत्रता, शांतिपूर्ण सभा, संघ बनाने, मुक्त आवागमन, निवास और किसी भी पेशे का अभ्यास करने का अधिकार होगा।', part: 'Part III', partHi: 'भाग III' },
  { id: 'art21', article: 'Article 21', title: 'Protection of life and personal liberty', titleHi: 'जीवन और व्यक्तिगत स्वतंत्रता का संरक्षण', content: 'No person shall be deprived of his life or personal liberty except according to procedure established by law.', contentHi: 'किसी व्यक्ति को कानून द्वारा स्थापित प्रक्रिया के अनुसार ही उसके जीवन या व्यक्तिगत स्वतंत्रता से वंचित किया जाएगा।', part: 'Part III', partHi: 'भाग III' },
  { id: 'art32', article: 'Article 32', title: 'Right to Constitutional Remedies', titleHi: 'संवैधानिक उपचार का अधिकार', content: 'The right to move the Supreme Court for enforcement of Fundamental Rights. Dr. Ambedkar called this the "heart and soul" of the Constitution.', contentHi: 'मौलिक अधिकारों के प्रवर्तन के लिए सर्वोच्च न्यायालय में जाने का अधिकार। डॉ. आंबेडकर ने इसे संविधान का "हृदय और आत्मा" कहा।', part: 'Part III', partHi: 'भाग III' },
  { id: 'art44', article: 'Article 44', title: 'Uniform Civil Code', titleHi: 'समान नागरिक संहिता', content: 'The State shall endeavor to secure for the citizens a uniform civil code throughout the territory of India.', contentHi: 'राज्य भारत के पूरे क्षेत्र में नागरिकों के लिए एक समान नागरिक संहिता सुनिश्चित करने का प्रयास करेगा।', part: 'Part IV', partHi: 'भाग IV' },
  { id: 'art51a', article: 'Article 51A', title: 'Fundamental Duties', titleHi: 'मौलिक कर्तव्य', content: 'It shall be the duty of every citizen of India to abide by the Constitution, cherish noble ideals, protect sovereignty, defend the country, promote harmony, preserve heritage, protect environment, develop scientific temper, and strive towards excellence.', contentHi: 'प्रत्येक नागरिक का कर्तव्य होगा: संविधान का पालन, महान आदर्शों को संजोना, संप्रभुता की रक्षा, देश की रक्षा, सद्भाव को बढ़ावा, विरासत का संरक्षण, पर्यावरण की रक्षा, वैज्ञानिक दृष्टिकोण विकसित करना और उत्कृष्टता की ओर प्रयास।', part: 'Part IVA', partHi: 'भाग IVA' },
  { id: 'art356', article: 'Article 356', title: 'President\'s Rule', titleHi: 'राष्ट्रपति शासन', content: 'If the President is satisfied that a situation has arisen in which the government of a State cannot be carried on in accordance with the Constitution, he may assume all functions of the State government.', contentHi: 'यदि राष्ट्रपति संतुष्ट हैं कि ऐसी स्थिति उत्पन्न हो गई है जिसमें राज्य का शासन संविधान के अनुसार नहीं चलाया जा सकता, तो वह राज्य सरकार के सभी कार्यों को ग्रहण कर सकते हैं।', part: 'Part XVIII', partHi: 'भाग XVIII' },
  { id: 'art368', article: 'Article 368', title: 'Power of Parliament to amend the Constitution', titleHi: 'संसद की संविधान संशोधन की शक्ति', content: 'Parliament may amend by way of addition, variation or repeal any provision of this Constitution, subject to the Basic Structure doctrine per Kesavananda Bharati case.', contentHi: 'संसद केशवानंद भारती मामले के अनुसार मूल ढांचा सिद्धांत के अधीन, इस संविधान के किसी भी प्रावधान में जोड़, परिवर्तन या निरसन द्वारा संशोधन कर सकती है।', part: 'Part XX', partHi: 'भाग XX' },
];

// ─── CAREER GUIDANCE ───
export interface CareerPath {
  id: string;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  icon: string;
  exams: string[];
  examsHi: string[];
  salary: string;
  salaryHi: string;
}

export const careerPaths: CareerPath[] = [
  { id: 'career1', title: 'Civil Services (IAS/IPS/IFS)', titleHi: 'सिविल सेवा (IAS/IPS/IFS)', description: 'UPSC Civil Services Examination is the premier choice. Political Science is one of the most popular optional subjects with high success rates.', descriptionHi: 'UPSC सिविल सेवा परीक्षा प्रमुख विकल्प है। राजनीति विज्ञान उच्च सफलता दर वाले सबसे लोकप्रिय वैकल्पिक विषयों में से एक है।', icon: '🏛️', exams: ['UPSC CSE', 'State PCS'], examsHi: ['UPSC CSE', 'राज्य PCS'], salary: '₹56,100 - ₹2,50,000/month', salaryHi: '₹56,100 - ₹2,50,000/माह' },
  { id: 'career2', title: 'Professor/Lecturer', titleHi: 'प्रोफेसर/व्याख्याता', description: 'Teach at colleges and universities. Requires clearing UGC NET/JRF in Political Science. PhD preferred for university positions.', descriptionHi: 'कॉलेजों और विश्वविद्यालयों में पढ़ाएं। राजनीति विज्ञान में UGC NET/JRF पास करना आवश्यक। विश्वविद्यालय पदों के लिए PhD प्राथमिकता।', icon: '👨‍🏫', exams: ['UGC NET', 'JRF', 'SET'], examsHi: ['UGC NET', 'JRF', 'SET'], salary: '₹57,700 - ₹1,82,400/month', salaryHi: '₹57,700 - ₹1,82,400/माह' },
  { id: 'career3', title: 'Political Analyst/Consultant', titleHi: 'राजनीतिक विश्लेषक/सलाहकार', description: 'Work with think tanks, media houses, political parties. Analyze policies, elections, public opinion. Growing field in India.', descriptionHi: 'थिंक टैंक, मीडिया हाउस, राजनीतिक दलों के साथ काम करें। नीतियों, चुनावों, जनमत का विश्लेषण करें। भारत में बढ़ता क्षेत्र।', icon: '📊', exams: ['Independent', 'Think Tank recruitment'], examsHi: ['स्वतंत्र', 'थिंक टैंक भर्ती'], salary: '₹40,000 - ₹2,00,000/month', salaryHi: '₹40,000 - ₹2,00,000/माह' },
  { id: 'career4', title: 'International Relations/Diplomacy', titleHi: 'अंतर्राष्ट्रीय संबंध/कूटनीति', description: 'IFS via UPSC, work in embassies, UN organizations, NGOs. IR specialization highly valued in global organizations.', descriptionHi: 'UPSC के माध्यम से IFS, दूतावासों, UN संगठनों, NGO में काम। वैश्विक संगठनों में IR विशेषज्ञता अत्यधिक मूल्यवान।', icon: '🌍', exams: ['UPSC IFS', 'UN Exams', 'International Orgs'], examsHi: ['UPSC IFS', 'UN Exams', 'अंतर्राष्ट्रीय संगठन'], salary: '₹56,100 - ₹2,50,000/month', salaryHi: '₹56,100 - ₹2,50,000/माह' },
  { id: 'career5', title: 'Law/Judiciary', titleHi: 'कानून/न्यायपालिका', description: 'Political Science + LLB is a powerful combination. Constitutional Law, Human Rights Law are natural fits. Judiciary exams after LLB.', descriptionHi: 'राजनीति विज्ञान + LLB एक शक्तिशाली संयोजन है। संवैधानिक कानून, मानवाधिकार कानून प्राकृतिक फिट हैं। LLB के बाद न्यायपालिका परीक्षाएं।', icon: '⚖️', exams: ['CLAT', 'Judicial Services', 'BAR Council'], examsHi: ['CLAT', 'न्यायिक सेवाएं', 'BAR Council'], salary: '₹50,000 - ₹3,00,000/month', salaryHi: '₹50,000 - ₹3,00,000/माह' },
  { id: 'career6', title: 'Journalism/Media', titleHi: 'पत्रकारिता/मीडिया', description: 'Political journalism, policy reporting, parliamentary coverage. Growing digital media space needs politically aware professionals.', descriptionHi: 'राजनीतिक पत्रकारिता, नीति रिपोर्टिंग, संसदीय कवरेज। बढ़ता डिजिटल मीडिया स्पेस राजनीतिक रूप से जागरूक पेशेवरों की मांग करता है।', icon: '📰', exams: ['Media House recruitment', 'Freelance'], examsHi: ['मीडिया हाउस भर्ती', 'फ्रीलांस'], salary: '₹30,000 - ₹1,50,000/month', salaryHi: '₹30,000 - ₹1,50,000/माह' },
];

// ─── CURRENT AFFAIRS ───
export interface CurrentAffair {
  id: string;
  date: string;
  title: string;
  titleHi: string;
  summary: string;
  summaryHi: string;
  category: string;
  categoryHi: string;
  relevance: string;
  relevanceHi: string;
}

export const currentAffairs: CurrentAffair[] = [
  { id: 'ca1', date: '2025-01-15', title: 'India-France Strategic Partnership Deepens', titleHi: 'भारत-फ्रांस रणनीतिक साझेदारी गहरी हुई', summary: 'India and France signed new defense cooperation agreements including joint development of defense equipment. This strengthens the strategic autonomy both nations seek in a multipolar world.', summaryHi: 'भारत और फ्रांस ने रक्षा उपकरणों के संयुक्त विकास सहित नए रक्षा सहयोग समझौतों पर हस्ताक्षर किए। यह बहुध्रुवीय दुनिया में दोनों राष्ट्रों द्वारा चाही जाने वाली रणनीतिक स्वायत्तता को मजबूत करता है।', category: 'International Relations', categoryHi: 'अंतर्राष्ट्रीय संबंध', relevance: 'IR Paper — Strategic autonomy, multipolarity, India-France relations', relevanceHi: 'IR पेपर — रणनीतिक स्वायत्तता, बहुध्रुवीयता, भारत-फ्रांस संबंध' },
  { id: 'ca2', date: '2025-02-01', title: 'One Nation One Election Bill', titleHi: 'एक राष्ट्र एक चुनाव विधेयक', summary: 'The government introduced the "One Nation, One Election" bill to synchronize Lok Sabha and State Assembly elections. This raises federalism and logistical questions.', summaryHi: 'सरकार ने लोकसभा और राज्य विधानसभा चुनावों को समकालिक करने के लिए "एक राष्ट्र, एक चुनाव" विधेयक पेश किया। यह संघवाद और तार्किक प्रश्न उठाता है।', category: 'Indian Politics', categoryHi: 'भारतीय राजनीति', relevance: 'Indian Government — Federalism, Election Commission, Article 324', relevanceHi: 'भारतीय सरकार — संघवाद, चुनाव आयोग, अनुच्छेद 324' },
  { id: 'ca3', date: '2025-01-20', title: 'Supreme Court on Basic Structure', titleHi: 'सर्वोच्च न्यायालय मूल ढांचे पर', summary: 'The Supreme Court, in a significant ruling, reaffirmed the Basic Structure doctrine while examining a constitutional amendment challenge.', summaryHi: 'सर्वोच्च न्यायालय ने एक संवैधानिक संशोधन चुनौती की जांच करते हुए एक महत्वपूर्ण फैसले में मूल ढांचा सिद्धांत की पुष्टि की।', category: 'Constitutional Law', categoryHi: 'संवैधानिक कानून', relevance: 'Indian Constitution — Basic Structure, Kesavananda Bharati, Judicial Review', relevanceHi: 'भारतीय संविधान — मूल ढांचा, केशवानंद भारती, न्यायिक समीक्षा' },
  { id: 'ca4', date: '2025-02-10', title: 'Electoral Bond Scheme Verdict', titleHi: 'चुनावी बॉन्ड योजना फैसला', summary: 'The Supreme Court struck down the electoral bond scheme as unconstitutional, citing violation of the right to information (Article 19(1)(a)).', summaryHi: 'सर्वोच्च न्यायालय ने चुनावी बॉन्ड योजना को सूचना के अधिकार (अनुच्छेद 19(1)(a)) के उल्लंघन का हवाला देते हुए असंवैधानिक करार दिया।', category: 'Indian Politics', categoryHi: 'भारतीय राजनीति', relevance: 'Indian Government — Political funding, RTI, Electoral reforms, Article 19', relevanceHi: 'भारतीय सरकार — राजनीतिक वित्तपोषण, RTI, चुनावी सुधार, अनुच्छेद 19' },
  { id: 'ca5', date: '2025-03-01', title: 'BRICS Expansion and Global South', titleHi: 'BRICS विस्तार और वैश्विक दक्षिण', summary: 'BRICS expanded to include more Global South countries, reshaping international institutions. India plays a key role as a bridge between developed and developing nations.', summaryHi: 'BRICS ने और वैश्विक दक्षिण देशों को शामिल करने के लिए विस्तार किया, अंतर्राष्ट्रीय संस्थानों को नया आकार दिया। भारत विकसित और विकासशील राष्ट्रों के बीच एक पुल के रूप में महत्वपूर्ण भूमिका निभाता है।', category: 'International Relations', categoryHi: 'अंतर्राष्ट्रीय संबंध', relevance: 'IR Paper — Multipolarity, Global South, BRICS, India\'s role', relevanceHi: 'IR पेपर — बहुध्रुवीयता, वैश्विक दक्षिण, BRICS, भारत की भूमिका' },
];

// ─── POLITICAL COMPASS QUESTIONS ───
export interface PoliticalCompassQuestion {
  id: string;
  question: string;
  questionHi: string;
  options: { text: string; textHi: string; scores: { economic: number; social: number } }[];
}

export const politicalCompassQuestions: PoliticalCompassQuestion[] = [
  { id: 'pc1', question: 'What is your view on economic inequality?', questionHi: 'आर्थिक असमानता पर आपका क्या दृष्टिकोण है?', options: [
    { text: 'It is a natural outcome of free markets', textHi: 'यह मुक्त बाजारों का स्वाभाविक परिणाम है', scores: { economic: 5, social: 0 } },
    { text: 'Government should reduce it through redistribution', textHi: 'सरकार को पुनर्वितरण के माध्यम से इसे कम करना चाहिए', scores: { economic: -5, social: 0 } },
    { text: 'Some inequality is acceptable with safety nets', textHi: 'सुरक्षा जाल के साथ कुछ असमानता स्वीकार्य है', scores: { economic: 0, social: 0 } },
  ]},
  { id: 'pc2', question: 'On social and cultural issues:', questionHi: 'सामाजिक और सांस्कृतिक मुद्दों पर:', options: [
    { text: 'Traditional values should be preserved', textHi: 'पारंपरिक मूल्यों को संरक्षित किया जाना चाहिए', scores: { economic: 0, social: 5 } },
    { text: 'Society should evolve and embrace change', textHi: 'समाज को विकसित होना और परिवर्तन को अपनाना चाहिए', scores: { economic: 0, social: -5 } },
    { text: 'A balanced approach respecting both', textHi: 'दोनों का सम्मान करने वाला संतुलित दृष्टिकोण', scores: { economic: 0, social: 0 } },
  ]},
  { id: 'pc3', question: 'Role of government in the economy:', questionHi: 'अर्थव्यवस्था में सरकार की भूमिका:', options: [
    { text: 'Minimal — laissez-faire approach', textHi: 'न्यूनतम — अहस्तक्षेप दृष्टिकोण', scores: { economic: 5, social: 0 } },
    { text: 'Active — regulate and plan the economy', textHi: 'सक्रिय — अर्थव्यवस्था का नियमन और योजना', scores: { economic: -5, social: 0 } },
    { text: 'Moderate — intervene when necessary', textHi: 'मध्यम — आवश्यकता पड़ने पर हस्तक्षेप', scores: { economic: 0, social: 0 } },
  ]},
  { id: 'pc4', question: 'View on national sovereignty vs global governance:', questionHi: 'राष्ट्रीय संप्रभुता बनाम वैश्विक शासन पर दृष्टिकोण:', options: [
    { text: 'National sovereignty is paramount', textHi: 'राष्ट्रीय संप्रभुता सर्वोपरि है', scores: { economic: 3, social: 3 } },
    { text: 'International cooperation should take precedence', textHi: 'अंतर्राष्ट्रीय सहयोग को प्राथमिकता दी जानी चाहिए', scores: { economic: -3, social: -3 } },
    { text: 'Balance between the two', textHi: 'दोनों के बीच संतुलन', scores: { economic: 0, social: 0 } },
  ]},
  { id: 'pc5', question: 'On civil liberties and state security:', questionHi: 'नागरिक स्वतंत्रता और राज्य सुरक्षा पर:', options: [
    { text: 'Civil liberties should never be compromised', textHi: 'नागरिक स्वतंत्रता से कभी समझौता नहीं होना चाहिए', scores: { economic: -2, social: -5 } },
    { text: 'Security concerns can justify some restrictions', textHi: 'सुरक्षा चिंताएं कुछ प्रतिबंधों को उचित ठहरा सकती हैं', scores: { economic: 2, social: 5 } },
    { text: 'Case-by-case approach is best', textHi: 'मामला-दर-मामला दृष्टिकोण सबसे अच्छा है', scores: { economic: 0, social: 0 } },
  ]},
];

// ─── BILINGUAL TRANSLATIONS ───
export const translations: Record<string, { en: string; hi: string }> = {
  appName: { en: 'BBMKU M.A. Political Science', hi: 'BBMKU M.A. राजनीति विज्ञान' },
  appTagline: { en: 'Digital Study Suite', hi: 'डिजिटल स्टडी सूट' },
  welcome: { en: 'Welcome back, Scholar!', hi: 'वापस आपका स्वागत है, विद्वान!' },
  continueLearning: { en: 'Continue your learning journey', hi: 'अपनी सीखने की यात्रा जारी रखें' },
  syllabus: { en: 'Syllabus', hi: 'पाठ्यक्रम' },
  pyq: { en: 'PYQ Bank', hi: 'PYQ बैंक' },
  quiz: { en: 'MCQ Quiz', hi: 'MCQ प्रश्नोत्तरी' },
  flashcards: { en: 'Flashcards', hi: 'फ्लैशकार्ड' },
  matching: { en: 'Matching Game', hi: 'मिलान खेल' },
  chronology: { en: 'Chronology', hi: 'कालक्रम' },
  mockParliament: { en: 'Mock Parliament', hi: 'मॉक संसद' },
  debateSim: { en: 'Debate Sim', hi: 'वाद-विवाद सिम' },
  pomodoro: { en: 'Pomodoro', hi: 'पोमोडोरो' },
  knowledgeGraph: { en: 'Knowledge Graph', hi: 'नॉलेज ग्राफ' },
  politicalCompass: { en: 'Political Compass', hi: 'राजनीतिक कम्पास' },
  eLibrary: { en: 'E-Library', hi: 'ई-लाइब्रेरी' },
  currentAffairs: { en: 'Current Affairs', hi: 'करेंट अफेयर्स' },
  answerWriting: { en: 'Answer Writing', hi: 'उत्तर लेखन' },
  constitutionExplorer: { en: 'Constitution Explorer', hi: 'संविधान एक्सप्लोरर' },
  careerGuidance: { en: 'Career Guidance', hi: 'करियर मार्गदर्शन' },
  ugcNet: { en: 'UGC NET Prep', hi: 'UGC NET तैयारी' },
  revision: { en: 'Revision Notes', hi: 'रिवीजन नोट्स' },
  mindmaps: { en: 'Mind Maps', hi: 'माइंड मैप्स' },
  darkMode: { en: 'Dark Mode', hi: 'डार्क मोड' },
  lightMode: { en: 'Light Mode', hi: 'लाइट मोड' },
  streak: { en: 'Day Streak', hi: 'दिन की स्ट्रीक' },
  studyMinutes: { en: 'Study Minutes', hi: 'अध्ययन मिनट' },
  bookmarks: { en: 'Bookmarks', hi: 'बुकमार्क' },
  topicsCompleted: { en: 'Topics Completed', hi: 'पूर्ण किए गए विषय' },
  search: { en: 'Search anything...', hi: 'कुछ भी खोजें...' },
  noResults: { en: 'No results found', hi: 'कोई परिणाम नहीं मिला' },
  loading: { en: 'Loading...', hi: 'लोड हो रहा है...' },
  error: { en: 'Something went wrong', hi: 'कुछ गलत हो गया' },
  back: { en: 'Back', hi: 'वापस' },
  home: { en: 'Home', hi: 'होम' },
  save: { en: 'Save', hi: 'सहेजें' },
  reset: { en: 'Reset', hi: 'रीसेट' },
  submit: { en: 'Submit', hi: 'जमा करें' },
  correct: { en: 'Correct!', hi: 'सही!' },
  wrong: { en: 'Wrong!', hi: 'गलत!' },
  score: { en: 'Score', hi: 'स्कोर' },
};
