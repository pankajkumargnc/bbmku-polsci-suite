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
  // TOPIC 1
  {
    id: 't1', num: 1,
    title: ["Academic Writing: Meaning, Types and Importance", "अकादमिक लेखन: अर्थ, प्रकार और महत्व"],
    introduction: [
      "Academic writing is a formal style of writing used in universities and scholarly publications. It is characterized by a clear focus, logical structure, evidence-based arguments, and formal tone. Unlike creative or informal writing, academic writing follows specific conventions regarding citation, objectivity, and precision. According to Murray & Moore (2006), academic writing is \"the process by which scholars communicate their research findings, ideas, and arguments to the academic community.\" It serves as the primary medium for knowledge production and dissemination in higher education institutions worldwide.",
      "अकादमिक लेखन विश्वविद्यालयों और विद्वतापूर्ण प्रकाशनों में उपयोग की जाने वाली एक औपचारिक लेखन शैली है। यह स्पष्ट फोकस, तार्किक संरचना, साक्ष्य-आधारित तर्कों और औपचारिक स्वर द्वारा विशेषीकृत है। रचनात्मक या अनौपचारिक लेखन के विपरीत, अकादमिक लेखन उद्धरण, निष्पक्षता और सटीकता के संबंध में विशिष्ट परंपराओं का पालन करता है। मरे और मूर (2006) के अनुसार, अकादमिक लेखन \"वह प्रक्रिया है जिसके द्वारा विद्वान अपने शोध निष्कर्षों, विचारों और तर्कों को अकादमिक समुदाय तक पहुंचाते हैं।\" यह उच्च शिक्षा संस्थानों में ज्ञान उत्पादन और प्रसार का प्राथमिक माध्यम है।"
    ],
    concepts: [
      {
        heading: ["Meaning and Definition of Academic Writing", "अकादमिक लेखन का अर्थ और परिभाषा"],
        body: [
          "Academic writing refers to writing produced in an academic setting for an academic audience. It is formal, structured, and evidence-based.\n\n• Bailey (2011): \"Academic writing is clear, concise, focused, structured and backed up by evidence.\"\n• Oshima & Hogue (2007): Define it as \"the kind of writing used in high school and college classes.\"\n\nKey Characteristics:\n1. Formality — Avoids slang, colloquialisms, and contractions\n2. Objectivity — Third-person perspective; avoids personal bias\n3. Precision — Uses specific and accurate language\n4. Evidence-Based — Claims supported by citations and data\n5. Hedging — Uses cautious language (may, might, suggests)\n6. Intertextuality — References and builds upon prior scholarship\n7. Structured — Follows conventions (Introduction-Body-Conclusion)",
          "अकादमिक लेखन अकादमिक सेटिंग में अकादमिक दर्शकों के लिए लिखित लेखन को संदर्भित करता है। यह औपचारिक, संरचित और साक्ष्य-आधारित है।\n\n• बेली (2011): \"अकादमिक लेखन स्पष्ट, संक्षिप्त, केंद्रित, संरचित और साक्ष्य द्वारा समर्थित है।\"\n• ओशिमा और होगु (2007): इसे \"हाई स्कूल और कॉलेज कक्षाओं में उपयोग की जाने वाली लेखन शैली\" के रूप में परिभाषित करते हैं।\n\nप्रमुख विशेषताएं:\n1. औपचारिकता — अपशब्द और संक्षिप्तीकरण से बचाव\n2. निष्पक्षता — तृतीय-पुरुष दृष्टिकोण; व्यक्तिगत पूर्वाग्रह से बचाव\n3. सटीकता — विशिष्ट और सही भाषा का उपयोग\n4. साक्ष्य-आधारित — दावे उद्धरणों और डेटा द्वारा समर्थित\n5. हेजिंग — सावधान भाषा (हो सकता है, संभवतः)\n6. अंतर-पाठ्यता — पूर्व शोध पर आधारित\n7. संरचित — परंपराओं का पालन (परिचय-मुख्य भाग-निष्कर्ष)"
        ]
      },
      {
        heading: ["Types of Academic Writing", "अकादमिक लेखन के प्रकार"],
        body: [
          "1. DESCRIPTIVE: Simplest form — provides facts and information. E.g., summarizing an article or reporting results.\n\n2. ANALYTICAL: Goes beyond description — reorganizes facts into categories, compares/contrasts, identifies relationships. E.g., comparing two theories.\n\n3. PERSUASIVE/ARGUMENTATIVE: Most common in university — takes a position on an issue and supports it with evidence. Includes a thesis statement. E.g., essays, research papers.\n\n4. CRITICAL: Highest level — evaluates, judges, and critiques existing works. Involves analysis of strengths, weaknesses, and implications. E.g., literature reviews, book critiques.\n\nOther Forms:\n• Essays (Narrative, Descriptive, Expository, Argumentative)\n• Research Papers and Dissertations\n• Book Reviews and Literature Reviews\n• Conference Papers and Journal Articles\n• Reports and Case Studies",
          "1. वर्णनात्मक: सबसे सरल रूप — तथ्य और जानकारी प्रदान करता है। जैसे, लेख का सारांश।\n\n2. विश्लेषणात्मक: वर्णन से आगे — तथ्यों को श्रेणियों में पुनर्गठित करता है, तुलना करता है। जैसे, दो सिद्धांतों की तुलना।\n\n3. प्रेरक/तर्कपूर्ण: विश्वविद्यालय में सबसे आम — किसी मुद्दे पर स्थिति लेता है और साक्ष्य से समर्थन करता है। जैसे, निबंध, शोध पत्र।\n\n4. आलोचनात्मक: उच्चतम स्तर — मौजूदा कार्यों का मूल्यांकन और आलोचना। शक्तियों, कमजोरियों और प्रभावों का विश्लेषण। जैसे, साहित्य समीक्षा।\n\nअन्य रूप:\n• निबंध (कथात्मक, वर्णनात्मक, व्याख्यात्मक, तर्कपूर्ण)\n• शोध पत्र और शोध प्रबंध\n• पुस्तक समीक्षा और साहित्य समीक्षा\n• सम्मेलन पत्र और जर्नल लेख\n• रिपोर्ट और केस स्टडी"
        ]
      },
      {
        heading: ["Importance of Academic Writing", "अकादमिक लेखन का महत्व"],
        body: [
          "1. Knowledge Production: Primary means of creating and sharing new knowledge in academia.\n2. Critical Thinking Development: Forces writers to analyze, evaluate, and synthesize information.\n3. Communication Skills: Develops ability to present complex ideas clearly and persuasively.\n4. Career Advancement: Publication record essential for academic promotions (Publish or Perish).\n5. Intellectual Discipline: Trains scholars in logical reasoning and evidence-based argumentation.\n6. Academic Assessment: Primary tool for evaluating student learning in universities.\n7. Research Documentation: Ensures reproducibility and transparency in research.\n8. Professional Development: Builds credibility and expertise in one's field.\n9. Contribution to Society: Translates research into policy recommendations and social change.\n10. Global Discourse: Enables participation in international academic conversations.",
          "1. ज्ञान उत्पादन: शिक्षा जगत में नया ज्ञान बनाने और साझा करने का प्राथमिक साधन।\n2. आलोचनात्मक सोच विकास: लेखकों को जानकारी का विश्लेषण और संश्लेषण करने के लिए बाध्य करता है।\n3. संचार कौशल: जटिल विचारों को स्पष्ट रूप से प्रस्तुत करने की क्षमता विकसित करता है।\n4. करियर उन्नति: अकादमिक पदोन्नति के लिए प्रकाशन रिकॉर्ड आवश्यक (Publish or Perish)।\n5. बौद्धिक अनुशासन: तार्किक तर्क और साक्ष्य-आधारित तर्क में प्रशिक्षण।\n6. अकादमिक मूल्यांकन: विश्वविद्यालयों में छात्र शिक्षा मूल्यांकन का प्राथमिक उपकरण।\n7. शोध प्रलेखन: शोध में पुनरुत्पादनीयता और पारदर्शिता सुनिश्चित करता है।\n8. पेशेवर विकास: अपने क्षेत्र में विश्वसनीयता और विशेषज्ञता बनाता है।\n9. समाज में योगदान: शोध को नीति सिफारिशों में परिवर्तित करता है।\n10. वैश्विक विमर्श: अंतर्राष्ट्रीय अकादमिक वार्तालापों में भागीदारी सक्षम करता है।"
        ]
      }
    ],
    quotes: [
      ["Murray & Moore (2006): \"Academic writing is a social practice embedded in institutional contexts.\" — How to Write in College", "मरे और मूर (2006): \"अकादमिक लेखन संस्थागत संदर्भों में अंतर्निहित एक सामाजिक प्रथा है।\""],
      ["Bailey (2011): \"Academic writing is clear, concise, focused, structured and backed up by evidence.\" — Academic Writing: A Handbook for International Students", "बेली (2011): \"अकादमिक लेखन स्पष्ट, संक्षिप्त, केंद्रित, संरचित और साक्ष्य द्वारा समर्थित है।\""],
      ["Creme & Lea (2008): \"Writing is central to learning in higher education.\" — Writing at University: A Guide for Students", "क्रीम और ली (2008): \"उच्च शिक्षा में सीखने के लिए लेखन केंद्रीय है।\""],
      ["Swales & Feak (2012): \"Academic writing is a set of conventions that scholars follow.\" — Academic Writing for Graduate Students", "स्वेल्स और फीक (2012): \"अकादमिक लेखन परंपराओं का एक समूह है जिसका विद्वान पालन करते हैं।\""],
    ],
    evaluation: [
      "Academic writing, while essential for scholarly communication, has been criticized for several limitations. Its emphasis on formality can make it inaccessible to the general public, creating an 'ivory tower' effect. The 'publish or perish' culture has led to quantity over quality in many cases. Non-native English speakers face additional barriers, as English dominates international academic publishing. Furthermore, the rigid structural conventions may stifle creativity and original thinking. However, academic writing remains indispensable for maintaining rigor, transparency, and accountability in knowledge production. Recent trends toward open access publishing and plain-language summaries are addressing some of these criticisms.",
      "अकादमिक लेखन, विद्वतापूर्ण संचार के लिए आवश्यक होते हुए भी, कई सीमाओं के लिए आलोचना का सामना करता है। इसकी औपचारिकता पर जोर इसे आम जनता के लिए दुर्गम बनाता है। 'प्रकाशित करो या नष्ट हो जाओ' संस्कृति ने गुणवत्ता पर मात्रा को प्राथमिकता दी है। गैर-अंग्रेजी भाषी को अतिरिक्त बाधाओं का सामना करना पड़ता है। कठोर संरचनात्मक परंपराएं रचनात्मकता को दबा सकती हैं। हालांकि, ज्ञान उत्पादन में कठोरता और पारदर्शिता बनाए रखने के लिए अकादमिक लेखन अपरिहार्य है। ओपन एक्सेस प्रकाशन की ओर हाल के रुझान इन आलोचनाओं को संबोधित कर रहे हैं।"
    ],
    conclusion: [
      "Academic writing is the cornerstone of scholarly communication and knowledge production. Its various types — descriptive, analytical, persuasive, and critical — serve different purposes in academic discourse. Mastering academic writing is essential for students and researchers to effectively communicate their ideas, contribute to their disciplines, and succeed in academic careers. While it has limitations, its importance in maintaining intellectual rigor and fostering critical thinking cannot be overstated.",
      "अकादमिक लेखन विद्वतापूर्ण संचार और ज्ञान उत्पादन की आधारशिला है। इसके विभिन्न प्रकार — वर्णनात्मक, विश्लेषणात्मक, प्रेरक और आलोचनात्मक — अकादमिक विमर्श में विभिन्न उद्देश्यों की पूर्ति करते हैं। अकादमिक लेखन में महारत हासिल करना छात्रों और शोधकर्ताओं के लिए आवश्यक है।"
    ],
    shortQ: [
      ["Define academic writing and its key characteristics.", "अकादमिक लेखन और इसकी प्रमुख विशेषताओं को परिभाषित करें।"],
      ["Differentiate between analytical and critical writing.", "विश्लेषणात्मक और आलोचनात्मक लेखन के बीच अंतर करें।"],
      ["Why is objectivity important in academic writing?", "अकादमिक लेखन में निष्पक्षता क्यों महत्वपूर्ण है?"],
      ["What is the significance of 'hedging' in academic writing?", "अकादमिक लेखन में 'हेजिंग' का क्या महत्व है?"],
      ["List any five types of academic writing.", "अकादमिक लेखन के किन्हीं पांच प्रकारों की सूची बनाएं।"],
    ],
    longQ: [
      ["Discuss the meaning, types and importance of academic writing in detail.", "अकादमिक लेखन के अर्थ, प्रकार और महत्व पर विस्तार से चर्चा करें।"],
      ["Critically evaluate the role of academic writing in knowledge production.", "ज्ञान उत्पादन में अकादमिक लेखन की भूमिका का आलोचनात्मक मूल्यांकन करें।"],
      ["Compare and contrast descriptive and argumentative academic writing.", "वर्णनात्मक और तर्कपूर्ण अकादमिक लेखन की तुलना करें।"],
      ["Explain the challenges faced by non-native English speakers in academic writing.", "अकादमिक लेखन में गैर-अंग्रेजी भाषियों द्वारा सामना की जाने वाली चुनौतियों को समझाएं।"],
      ["\"Academic writing is the backbone of higher education.\" Discuss.", "\"अकादमिक लेखन उच्च शिक्षा की रीढ़ है।\" चर्चा करें।"],
    ],
    mcqs: [
      { q: ["Which type of academic writing involves taking a position on an issue?", "किस प्रकार के अकादमिक लेखन में किसी मुद्दे पर स्थिति लेना शामिल है?"], opts: [["Descriptive", "वर्णनात्मक"], ["Analytical", "विश्लेषणात्मक"], ["Persuasive/Argumentative", "प्रेरक/तर्कपूर्ण"], ["Narrative", "कथात्मक"]], correct: 2 },
      { q: ["'Hedging' in academic writing refers to:", "अकादमिक लेखन में 'हेजिंग' का अर्थ है:"], opts: [["Using bold language", "बोल्ड भाषा"], ["Using cautious language", "सावधान भाषा"], ["Using informal tone", "अनौपचारिक स्वर"], ["Using slang", "अपशब्द"]], correct: 1 },
      { q: ["Who said 'Academic writing is clear, concise, focused, structured'?", "किसने कहा 'अकादमिक लेखन स्पष्ट, संक्षिप्त, केंद्रित, संरचित है'?"], opts: [["Murray", "मरे"], ["Bailey", "बेली"], ["Swales", "स्वेल्स"], ["Creme", "क्रीम"]], correct: 1 },
      { q: ["The highest level of academic writing is:", "अकादमिक लेखन का उच्चतम स्तर है:"], opts: [["Descriptive", "वर्णनात्मक"], ["Analytical", "विश्लेषणात्मक"], ["Persuasive", "प्रेरक"], ["Critical", "आलोचनात्मक"]], correct: 3 },
      { q: ["Which is NOT a characteristic of academic writing?", "अकादमिक लेखन की विशेषता कौन सी नहीं है?"], opts: [["Objectivity", "निष्पक्षता"], ["Formality", "औपचारिकता"], ["Use of slang", "अपशब्द का प्रयोग"], ["Evidence-based", "साक्ष्य-आधारित"]], correct: 2 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Types of academic writing: Descriptive, Analytical, Persuasive, Critical\n• Key characteristics: Formality, objectivity, precision, evidence-based\n• Difference between academic and non-academic writing\n• Importance of citation and referencing\n• Academic integrity and plagiarism\n• Research communication process\n• APA, MLA, Chicago citation styles\n• Structure: IMRAD (Introduction, Methods, Results, and Discussion)",
      "UGC NET फोकस:\n• अकादमिक लेखन के प्रकार: वर्णनात्मक, विश्लेषणात्मक, प्रेरक, आलोचनात्मक\n• प्रमुख विशेषताएं: औपचारिकता, निष्पक्षता, सटीकता\n• अकादमिक और गैर-अकादमिक लेखन में अंतर\n• उद्धरण और संदर्भ का महत्व\n• अकादमिक अखंडता और साहित्यिक चोरी\n• APA, MLA, शिकागो उद्धरण शैलियां"
    ],
    ugcQ: [
      ["Q: What are the four types of academic writing? A: Descriptive, Analytical, Persuasive, Critical.", "प्र: अकादमिक लेखन के चार प्रकार कौन से हैं? उ: वर्णनात्मक, विश्लेषणात्मक, प्रेरक, आलोचनात्मक।"],
      ["Q: What does IMRAD stand for? A: Introduction, Methods, Results, and Discussion.", "प्र: IMRAD का पूर्ण रूप? उ: Introduction, Methods, Results, and Discussion।"],
      ["Q: Name two citation styles used in academic writing. A: APA and MLA.", "प्र: अकादमिक लेखन में उपयोग की जाने वाली दो उद्धरण शैलियां? उ: APA और MLA।"],
    ],
  },

  // TOPIC 2
  {
    id: 't2', num: 2,
    title: ["Writing Synopsis", "सारांश (Synopsis) लेखन"],
    introduction: [
      "A synopsis is a brief, comprehensive summary of a proposed research work. It serves as a blueprint or outline of the research plan that a scholar intends to undertake. In academic settings, a research synopsis is typically submitted to a university or research committee for approval before the actual research begins. According to Kumar (2011), a synopsis is \"a preliminary plan of research that provides an overview of the proposed study, its objectives, methodology, and expected outcomes.\" It is a crucial document in the research process, particularly for M.Phil. and Ph.D. students.",
      "सारांश (Synopsis) एक प्रस्तावित शोध कार्य का संक्षिप्त, व्यापक सारांश है। यह शोध योजना के खाका या रूपरेखा के रूप में कार्य करता है जिसे एक विद्वान करने का इरादा रखता है। अकादमिक सेटिंग्स में, शोध सारांश आमतौर पर वास्तविक शोध शुरू होने से पहले विश्वविद्यालय या शोध समिति को अनुमोदन के लिए प्रस्तुत किया जाता है। कुमार (2011) के अनुसार, सारांश \"शोध की एक प्रारंभिक योजना है जो प्रस्तावित अध्ययन, इसके उद्देश्यों, कार्यप्रणाली और अपेक्षित परिणामों का अवलोकन प्रदान करती है।\" यह शोध प्रक्रिया में एक महत्वपूर्ण दस्तावेज है।"
    ],
    concepts: [
      {
        heading: ["Components of a Synopsis", "सारांश के घटक"],
        body: [
          "A well-structured synopsis contains the following components:\n\n1. TITLE: Clear, concise, and indicative of the research topic.\n2. INTRODUCTION/BACKGROUND: Contextualizes the research problem.\n3. REVIEW OF LITERATURE: Summary of existing research in the area.\n4. STATEMENT OF THE PROBLEM: Clearly defines what the research will address.\n5. OBJECTIVES: Specific, measurable goals of the research.\n6. HYPOTHESES: Tentative propositions to be tested.\n7. RESEARCH METHODOLOGY: Design, sample, tools, techniques of data collection.\n8. SIGNIFICANCE OF THE STUDY: Why the research is important.\n9. CHAPTER SCHEME: Tentative chapter division of the thesis.\n10. BIBLIOGRAPHY: Preliminary list of references.",
          "एक सुसंरचित सारांश में निम्नलिखित घटक होते हैं:\n\n1. शीर्षक: स्पष्ट, संक्षिप्त, शोध विषय का संकेत।\n2. परिचय/पृष्ठभूमि: शोध समस्या का संदर्भ।\n3. साहित्य समीक्षा: क्षेत्र में मौजूदा शोध का सारांश।\n4. समस्या का कथन: शोध क्या संबोधित करेगा।\n5. उद्देश्य: शोध के विशिष्ट, मापने योग्य लक्ष्य।\n6. परिकल्पनाएं: परीक्षण की जाने वाली अस्थायी प्रस्तावनाएं।\n7. शोध कार्यप्रणाली: डिज़ाइन, नमूना, उपकरण, डेटा संग्रह तकनीकें।\n8. अध्ययन का महत्व: शोध क्यों महत्वपूर्ण है।\n9. अध्याय योजना: थीसिस का अस्थायी अध्याय विभाजन।\n10. ग्रंथसूची: संदर्भों की प्रारंभिक सूची।"
        ]
      },
      {
        heading: ["Guidelines for Writing a Good Synopsis", "अच्छा सारांश लिखने के दिशा-निर्देश"],
        body: [
          "1. Be Clear and Specific: Avoid vague and general statements.\n2. Keep it Concise: Typically 5-15 pages; avoid unnecessary details.\n3. Focus on Research Gap: Clearly identify what is missing in existing literature.\n4. Feasibility: Ensure the proposed research is practical and achievable.\n5. Logical Flow: Maintain coherence between sections.\n6. Proper Formatting: Follow university guidelines for margins, fonts, spacing.\n7. Academic Language: Use formal, objective tone.\n8. Realistic Timeline: Include a tentative schedule for completion.\n9. Ethical Considerations: Address ethical issues if involving human subjects.\n10. Proofreading: Ensure no grammatical or factual errors.",
          "1. स्पष्ट और विशिष्ट रहें: अस्पष्ट कथनों से बचें।\n2. संक्षिप्त रखें: आमतौर पर 5-15 पृष्ठ।\n3. शोध अंतराल पर ध्यान दें: मौजूदा साहित्य में क्या कमी है।\n4. व्यवहार्यता: प्रस्तावित शोध व्यावहारिक हो।\n5. तार्किक प्रवाह: अनुभागों के बीच सुसंगतता।\n6. उचित स्वरूपण: विश्वविद्यालय दिशानिर्देशों का पालन।\n7. अकादमिक भाषा: औपचारिक, वस्तुनिष्ठ स्वर।\n8. यथार्थवादी समयरेखा: पूर्ण करने का अस्थायी कार्यक्रम।\n9. नैतिक विचार: मानव विषयों पर नैतिक मुद्दों का समाधान।\n10. प्रूफरीडिंग: कोई व्याकरणिक या तथ्यात्मक त्रुटि नहीं।"
        ]
      }
    ],
    quotes: [
      ["Kumar, R. (2011): \"A synopsis is a window to the proposed research; it must be precise, focused, and methodologically sound.\" — Research Methodology: A Step-by-Step Guide", "कुमार, आर. (2011): \"सारांश प्रस्तावित शोध की खिड़की है; यह सटीक, केंद्रित और कार्यप्रणाली से सुदृढ़ होना चाहिए।\""],
      ["Kothari, C.R. (2004): \"A good synopsis demonstrates the researcher's understanding of the problem and the methodology to solve it.\" — Research Methodology: Methods and Techniques", "कोठारी, सी.आर. (2004): \"एक अच्छा सारांश शोधकर्ता की समस्या और समाधान की कार्यप्रणाली की समझ को दर्शाता है।\""],
      ["Creswell, J.W. (2014): \"The research proposal must communicate the importance and viability of the study.\" — Research Design", "क्रेसवेल, जे.डब्ल्यू. (2014): \"शोध प्रस्ताव को अध्ययन के महत्व और व्यवहार्यता को संप्रेषित करना चाहिए।\""],
    ],
    evaluation: [
      "While the synopsis is an essential research planning tool, it faces criticism for being formulaic and restrictive. Some argue that rigid formats can limit exploratory or qualitative research approaches. In practice, many synopses become mere formalities rather than genuine planning documents. However, its value lies in forcing researchers to think systematically about their study before commencing it. The process of writing a synopsis helps clarify research questions, identify potential methodological issues, and establish a realistic timeline. In Indian universities, the synopsis defense (viva-voce) also provides valuable feedback from experts.",
      "सारांश एक आवश्यक शोध नियोजन उपकरण होते हुए भी, सूत्रबद्ध और प्रतिबंधात्मक होने की आलोचना का सामना करता है। कुछ का तर्क है कि कठोर प्रारूप खोजपूर्ण या गुणात्मक शोध दृष्टिकोणों को सीमित कर सकते हैं। व्यवहार में, कई सारांश वास्तविक नियोजन दस्तावेजों के बजाय औपचारिकता बन जाते हैं। हालांकि, इसका मूल्य शोधकर्ताओं को अध्ययन शुरू करने से पहले व्यवस्थित रूप से सोचने के लिए बाध्य करने में है। भारतीय विश्वविद्यालयों में सारांश रक्षा (मौखिक परीक्षा) विशेषज्ञों से मूल्यवान प्रतिक्रिया प्रदान करती है।"
    ],
    conclusion: [
      "A synopsis is a foundational document in the research process that provides a roadmap for the proposed study. A well-crafted synopsis demonstrates the researcher's clarity of thought, understanding of the research problem, and methodological preparedness. It serves as a contract between the researcher and the academic institution, guiding the entire research journey from inception to completion.",
      "सारांश शोध प्रक्रिया में एक आधारभूत दस्तावेज है जो प्रस्तावित अध्ययन के लिए रोडमैप प्रदान करता है। एक अच्छी तरह से तैयार किया गया सारांश शोधकर्ता की विचार स्पष्टता, शोध समस्या की समझ और कार्यप्रणाली की तैयारी को दर्शाता है।"
    ],
    shortQ: [
      ["What is a synopsis? Define with its purpose.", "सारांश क्या है? इसके उद्देश्य के साथ परिभाषित करें।"],
      ["List the essential components of a research synopsis.", "शोध सारांश के आवश्यक घटकों की सूची बनाएं।"],
      ["What is the role of 'Review of Literature' in a synopsis?", "सारांश में 'साहित्य समीक्षा' की भूमिका क्या है?"],
      ["How does a synopsis differ from an abstract?", "सारांश और सार में क्या अंतर है?"],
      ["What guidelines should be followed while writing a synopsis?", "सारांश लिखते समय किन दिशानिर्देशों का पालन करना चाहिए?"],
    ],
    longQ: [
      ["Discuss the meaning, components, and importance of writing a synopsis.", "सारांश लेखन के अर्थ, घटकों और महत्व पर चर्चा करें।"],
      ["Explain the process of writing a research synopsis with examples.", "उदाहरणों के साथ शोध सारांश लिखने की प्रक्रिया को समझाएं।"],
      ["What are the common mistakes in synopsis writing? How can they be avoided?", "सारांश लेखन में सामान्य गलतियां क्या हैं? इन्हें कैसे टाला जा सकता है?"],
      ["Critically evaluate the role of synopsis in research planning.", "शोध नियोजन में सारांश की भूमिका का आलोचनात्मक मूल्यांकन करें।"],
      ["Compare synopsis and research proposal.", "सारांश और शोध प्रस्ताव की तुलना करें।"],
    ],
    mcqs: [
      { q: ["A synopsis is primarily:", "सारांश मुख्य रूप से है:"], opts: [["A final research report", "अंतिम शोध रिपोर्ट"], ["A plan of proposed research", "प्रस्तावित शोध की योजना"], ["A literature review", "साहित्य समीक्षा"], ["A bibliography", "ग्रंथसूची"]], correct: 1 },
      { q: ["Which is NOT a component of a synopsis?", "सारांश का घटक कौन सा नहीं है?"], opts: [["Objectives", "उद्देश्य"], ["Methodology", "कार्यप्रणाली"], ["Final Results", "अंतिम परिणाम"], ["Review of Literature", "साहित्य समीक्षा"]], correct: 2 },
      { q: ["The ideal length of a synopsis is usually:", "सारांश की आदर्श लंबाई आमतौर पर होती है:"], opts: [["1-2 pages", "1-2 पृष्ठ"], ["5-15 pages", "5-15 पृष्ठ"], ["50-100 pages", "50-100 पृष्ठ"], ["200+ pages", "200+ पृष्ठ"]], correct: 1 },
      { q: ["Synopsis defense is also known as:", "सारांश रक्षा को कहा जाता है:"], opts: [["Written exam", "लिखित परीक्षा"], ["Viva-voce", "मौखिक परीक्षा"], ["Assignment", "असाइनमेंट"], ["Seminar", "सेमिनार"]], correct: 1 },
      { q: ["Who wrote 'Research Methodology: A Step-by-Step Guide'?", "Research Methodology: A Step-by-Step Guide किसने लिखी?"], opts: [["Kothari", "कोठारी"], ["Kumar", "कुमार"], ["Creswell", "क्रेसवेल"], ["Bailey", "बेली"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Synopsis vs Abstract vs Research Proposal — Key differences\n• Components of synopsis: Title, Introduction, Literature Review, Objectives, Methodology\n• Research gap identification\n• Hypothesis formulation\n• Kothari's Research Methodology — standard reference\n• Ethical considerations in research\n• ICSSR and UGC guidelines for research proposals",
      "UGC NET फोकस:\n• सारांश बनाम सार बनाम शोध प्रस्ताव — प्रमुख अंतर\n• सारांश के घटक\n• शोध अंतराल की पहचान\n• परिकल्पना निर्माण\n• कोठारी की शोध कार्यप्रणाली\n• शोध में नैतिक विचार"
    ],
    ugcQ: [
      ["Q: What is the difference between synopsis and thesis? A: Synopsis is the plan; thesis is the final product.", "प्र: सारांश और थीसिस में क्या अंतर है? उ: सारांश योजना है; थीसिस अंतिम उत्पाद है।"],
      ["Q: Name the book by C.R. Kothari on research methodology. A: Research Methodology: Methods and Techniques.", "प्र: शोध कार्यप्रणाली पर सी.आर. कोठारी की पुस्तक? उ: Research Methodology: Methods and Techniques।"],
      ["Q: What is a hypothesis? A: A tentative proposition to be tested through research.", "प्र: परिकल्पना क्या है? उ: शोध द्वारा परीक्षण की जाने वाली अस्थायी प्रस्तावना।"],
    ],
  },

  // TOPIC 3
  {
    id: 't3', num: 3,
    title: ["Report Writing", "रिपोर्ट लेखन"],
    introduction: [
      "Report writing is a formal method of presenting factual information, analysis, and recommendations based on investigation or research. A report is a structured document that communicates findings to a specific audience for a specific purpose. Reports are used extensively in academic, professional, and governmental settings. According to Lesikar & Flatley (2005), a report is \"an orderly and objective communication of factual information that serves some business or organizational purpose.\" In academic contexts, report writing trains students in systematic observation, analysis, and communication — skills essential for research and professional life.",
      "रिपोर्ट लेखन जांच या शोध पर आधारित तथ्यात्मक जानकारी, विश्लेषण और सिफारिशों को प्रस्तुत करने की एक औपचारिक विधि है। रिपोर्ट एक संरचित दस्तावेज है जो किसी विशिष्ट दर्शक को किसी विशिष्ट उद्देश्य के लिए निष्कर्ष संप्रेषित करता है। लेसिकर और फ्लैटली (2005) के अनुसार, रिपोर्ट \"तथ्यात्मक जानकारी का एक व्यवस्थित और वस्तुनिष्ठ संप्रेषण है।\" अकादमिक संदर्भों में, रिपोर्ट लेखन छात्रों को व्यवस्थित अवलोकन, विश्लेषण और संचार में प्रशिक्षित करता है।"
    ],
    concepts: [
      {
        heading: ["Types of Reports", "रिपोर्ट के प्रकार"],
        body: [
          "1. INFORMATIONAL REPORTS: Present facts without analysis. E.g., Annual reports, Progress reports.\n2. ANALYTICAL REPORTS: Include analysis, interpretations, and recommendations. E.g., Research reports, Feasibility studies.\n3. RESEARCH REPORTS: Based on systematic investigation using scientific methods.\n4. COMMITTEE REPORTS: Prepared by committees appointed for specific tasks (e.g., Sarkaria Commission, Mandal Commission).\n5. TECHNICAL REPORTS: Focus on technical subjects with specialized terminology.\n6. PROJECT REPORTS: Document project activities, outcomes, and evaluations.\n7. SURVEY REPORTS: Based on data collected through surveys/questionnaires.\n8. STATISTICAL REPORTS: Primarily use numerical data and statistical analysis.",
          "1. सूचनात्मक रिपोर्ट: बिना विश्लेषण के तथ्य प्रस्तुत करती है। जैसे, वार्षिक रिपोर्ट।\n2. विश्लेषणात्मक रिपोर्ट: विश्लेषण, व्याख्या और सिफारिशें शामिल। जैसे, शोध रिपोर्ट।\n3. शोध रिपोर्ट: वैज्ञानिक विधियों का उपयोग करते हुए व्यवस्थित जांच पर आधारित।\n4. समिति रिपोर्ट: विशिष्ट कार्यों के लिए नियुक्त समितियों द्वारा तैयार (जैसे सरकारिया आयोग)।\n5. तकनीकी रिपोर्ट: विशेष शब्दावली के साथ तकनीकी विषयों पर।\n6. परियोजना रिपोर्ट: परियोजना गतिविधियों और परिणामों का दस्तावेज।\n7. सर्वेक्षण रिपोर्ट: सर्वेक्षणों द्वारा एकत्र डेटा पर आधारित।\n8. सांख्यिकीय रिपोर्ट: मुख्य रूप से संख्यात्मक डेटा का उपयोग।"
        ]
      },
      {
        heading: ["Structure and Process of Report Writing", "रिपोर्ट लेखन की संरचना और प्रक्रिया"],
        body: [
          "STRUCTURE:\n• Title Page — Title, author, date, institution\n• Table of Contents — For longer reports\n• Executive Summary/Abstract — Brief overview of findings\n• Introduction — Background, purpose, scope\n• Methodology — How data was collected/analyzed\n• Findings/Results — Presentation of data\n• Discussion — Interpretation and analysis\n• Conclusions — Summary of key findings\n• Recommendations — Suggested actions\n• References/Bibliography\n• Appendices — Supplementary materials\n\nPROCESS:\n1. Define the purpose and audience\n2. Collect data through research\n3. Organize and analyze information\n4. Create an outline\n5. Write the first draft\n6. Revise and edit\n7. Format and finalize",
          "संरचना:\n• शीर्षक पृष्ठ — शीर्षक, लेखक, तिथि, संस्थान\n• विषय-सूची — लंबी रिपोर्ट के लिए\n• कार्यकारी सारांश — निष्कर्षों का संक्षिप्त अवलोकन\n• परिचय — पृष्ठभूमि, उद्देश्य, दायरा\n• कार्यप्रणाली — डेटा कैसे एकत्र/विश्लेषित किया गया\n• निष्कर्ष/परिणाम — डेटा की प्रस्तुति\n• चर्चा — व्याख्या और विश्लेषण\n• निष्कर्ष — प्रमुख निष्कर्षों का सारांश\n• सिफारिशें — सुझाए गए कार्य\n• संदर्भ/ग्रंथसूची\n• परिशिष्ट — पूरक सामग्री\n\nप्रक्रिया:\n1. उद्देश्य और दर्शक परिभाषित करें\n2. शोध द्वारा डेटा एकत्र करें\n3. जानकारी को व्यवस्थित और विश्लेषित करें\n4. रूपरेखा बनाएं\n5. पहला मसौदा लिखें\n6. संशोधन और संपादन करें\n7. स्वरूपण और अंतिम रूप दें"
        ]
      }
    ],
    quotes: [
      ["Lesikar & Flatley (2005): \"A report is an orderly and objective communication of factual information.\" — Basic Business Communication", "लेसिकर और फ्लैटली: \"रिपोर्ट तथ्यात्मक जानकारी का व्यवस्थित और वस्तुनिष्ठ संप्रेषण है।\""],
      ["Kothari, C.R.: \"The report is the final product of any research endeavour.\" — Research Methodology", "कोठारी, सी.आर.: \"रिपोर्ट किसी भी शोध प्रयास का अंतिम उत्पाद है।\""],
      ["Turabian, K.L.: \"Good report writing is the art of making complex information accessible.\" — A Manual for Writers", "तुराबियन: \"अच्छा रिपोर्ट लेखन जटिल जानकारी को सुलभ बनाने की कला है।\""],
    ],
    evaluation: [
      "Report writing is fundamental to academic and professional communication. However, the rigid format of reports can sometimes hinder creative expression. In many organizations, reports become bureaucratic formalities rather than genuine communication tools. The challenge lies in making reports both comprehensive and readable. Good report writing requires balancing detail with conciseness, objectivity with engagement. Despite limitations, reports remain the most effective medium for structured communication of findings, recommendations, and decisions in academic and professional contexts.",
      "रिपोर्ट लेखन अकादमिक और पेशेवर संचार के लिए मौलिक है। हालांकि, रिपोर्ट का कठोर प्रारूप कभी-कभी रचनात्मक अभिव्यक्ति में बाधा डालता है। कई संगठनों में रिपोर्ट वास्तविक संचार उपकरणों के बजाय नौकरशाही औपचारिकताएं बन जाती हैं। अच्छे रिपोर्ट लेखन के लिए विस्तार और संक्षिप्तता, निष्पक्षता और जुड़ाव के बीच संतुलन की आवश्यकता होती है। सीमाओं के बावजूद, रिपोर्ट निष्कर्षों और सिफारिशों के संरचित संचार के लिए सबसे प्रभावी माध्यम बनी हुई है।"
    ],
    conclusion: [
      "Report writing is an essential academic and professional skill. Whether in research, business, or government, reports provide a structured framework for presenting findings, analysis, and recommendations. Mastering report writing techniques equips students with the ability to communicate complex information effectively — a skill that serves them throughout their careers.",
      "रिपोर्ट लेखन एक आवश्यक अकादमिक और पेशेवर कौशल है। शोध, व्यवसाय या सरकार में, रिपोर्ट निष्कर्ष, विश्लेषण और सिफारिशों को प्रस्तुत करने के लिए एक संरचित ढांचा प्रदान करती है।"
    ],
    shortQ: [
      ["Define report writing and its objectives.", "रिपोर्ट लेखन और इसके उद्देश्यों को परिभाषित करें।"],
      ["Differentiate between informational and analytical reports.", "सूचनात्मक और विश्लेषणात्मक रिपोर्ट में अंतर करें।"],
      ["What are the essential components of a report?", "रिपोर्ट के आवश्यक घटक क्या हैं?"],
      ["List the steps in the report writing process.", "रिपोर्ट लेखन प्रक्रिया के चरणों की सूची बनाएं।"],
      ["What is the purpose of an executive summary in a report?", "रिपोर्ट में कार्यकारी सारांश का उद्देश्य क्या है?"],
    ],
    longQ: [
      ["Discuss the types, structure, and process of report writing.", "रिपोर्ट लेखन के प्रकार, संरचना और प्रक्रिया पर चर्चा करें।"],
      ["Explain the significance of report writing in academic research.", "अकादमिक शोध में रिपोर्ट लेखन के महत्व को समझाएं।"],
      ["What are the characteristics of a good report? Discuss with examples.", "अच्छी रिपोर्ट की विशेषताएं क्या हैं? उदाहरणों सहित चर्चा करें।"],
      ["Compare research reports with committee reports.", "शोध रिपोर्ट और समिति रिपोर्ट की तुलना करें।"],
      ["Discuss common pitfalls in report writing and how to avoid them.", "रिपोर्ट लेखन में सामान्य गलतियों और उन्हें कैसे टाला जाए, पर चर्चा करें।"],
    ],
    mcqs: [
      { q: ["Which type of report includes recommendations?", "किस प्रकार की रिपोर्ट में सिफारिशें शामिल हैं?"], opts: [["Informational", "सूचनात्मक"], ["Analytical", "विश्लेषणात्मक"], ["Progress", "प्रगति"], ["Routine", "नियमित"]], correct: 1 },
      { q: ["The first step in report writing is:", "रिपोर्ट लेखन में पहला कदम है:"], opts: [["Writing conclusion", "निष्कर्ष लिखना"], ["Defining purpose", "उद्देश्य परिभाषित करना"], ["Formatting", "स्वरूपण"], ["Proofreading", "प्रूफरीडिंग"]], correct: 1 },
      { q: ["Executive Summary appears:", "कार्यकारी सारांश कहां आता है:"], opts: [["At the end", "अंत में"], ["At the beginning", "शुरुआत में"], ["In appendix", "परिशिष्ट में"], ["In bibliography", "ग्रंथसूची में"]], correct: 1 },
      { q: ["A research report is based on:", "शोध रिपोर्ट आधारित है:"], opts: [["Opinions", "राय"], ["Systematic investigation", "व्यवस्थित जांच"], ["Rumors", "अफवाहें"], ["Assumptions", "धारणाएं"]], correct: 1 },
      { q: ["Who defined report as 'orderly and objective communication'?", "किसने रिपोर्ट को 'व्यवस्थित और वस्तुनिष्ठ संप्रेषण' कहा?"], opts: [["Kothari", "कोठारी"], ["Lesikar & Flatley", "लेसिकर और फ्लैटली"], ["Kumar", "कुमार"], ["Bailey", "बेली"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Types of reports: Informational, Analytical, Research, Committee\n• Structure: Title → Introduction → Methodology → Findings → Conclusion → Recommendations\n• Difference between report and essay\n• Committee reports in Indian context: Sarkaria, Mandal, Punchhi\n• Research report writing for Ph.D. scholars\n• Objectivity and factual accuracy in reports",
      "UGC NET फोकस:\n• रिपोर्ट के प्रकार: सूचनात्मक, विश्लेषणात्मक, शोध, समिति\n• संरचना: शीर्षक → परिचय → कार्यप्रणाली → निष्कर्ष → सिफारिशें\n• रिपोर्ट और निबंध में अंतर\n• भारतीय संदर्भ में समिति रिपोर्ट\n• शोध रिपोर्ट लेखन"
    ],
    ugcQ: [
      ["Q: What is the difference between a report and an essay? A: Report is structured with headings; essay flows continuously.", "प्र: रिपोर्ट और निबंध में क्या अंतर है? उ: रिपोर्ट शीर्षकों के साथ संरचित; निबंध निरंतर बहता है।"],
      ["Q: What are the key elements of a research report? A: Title, Abstract, Introduction, Literature Review, Methodology, Results, Discussion, Conclusion.", "प्र: शोध रिपोर्ट के प्रमुख तत्व? उ: शीर्षक, सार, परिचय, साहित्य समीक्षा, कार्यप्रणाली, परिणाम, चर्चा, निष्कर्ष।"],
    ],
  },

  // TOPIC 4
  {
    id: 't4', num: 4,
    title: ["Writing Abstract", "अमूर्त (Abstract) लेखन"],
    introduction: [
      "An abstract is a concise summary of a research paper, thesis, review, or conference paper. It provides a brief but comprehensive overview of the entire work, including the research purpose, methodology, key findings, and conclusions. Typically 150-300 words, an abstract enables readers to quickly determine the relevance of the work to their own research. The American Psychological Association (APA) defines an abstract as \"a brief, comprehensive summary of the contents of the article.\" It is often the most read part of any academic paper and serves as a gateway to the full text.",
      "सार (Abstract) एक शोध पत्र, थीसिस, समीक्षा या सम्मेलन पत्र का संक्षिप्त सारांश है। यह संपूर्ण कार्य का एक संक्षिप्त लेकिन व्यापक अवलोकन प्रदान करता है, जिसमें शोध उद्देश्य, कार्यप्रणाली, प्रमुख निष्कर्ष और निष्कर्ष शामिल हैं। आमतौर पर 150-300 शब्दों का, सार पाठकों को अपने शोध से कार्य की प्रासंगिकता जल्दी निर्धारित करने में सक्षम बनाता है। APA सार को \"लेख की सामग्री का संक्षिप्त, व्यापक सारांश\" के रूप में परिभाषित करता है।"
    ],
    concepts: [
      {
        heading: ["Types of Abstracts", "सार के प्रकार"],
        body: [
          "1. DESCRIPTIVE ABSTRACT (Indicative):\n• 50-100 words; describes what the paper covers\n• Does NOT include results or conclusions\n• Acts as a table of contents in paragraph form\n• Used in: Humanities, social science reviews\n\n2. INFORMATIVE ABSTRACT:\n• 150-300 words; summarizes all major sections\n• Includes: Purpose, methodology, results, and conclusions\n• Most common type in scientific research\n• Stands alone as a mini-version of the paper\n\n3. STRUCTURED ABSTRACT:\n• Uses distinct labeled sections: Background, Objective, Methods, Results, Conclusion\n• Common in medical and health science journals\n\n4. CRITICAL/EVALUATIVE ABSTRACT:\n• Rare; includes the author's judgment of the study's reliability and validity\n• Adds evaluative commentary",
          "1. वर्णनात्मक सार (संकेतक):\n• 50-100 शब्द; पत्र क्या कवर करता है\n• परिणाम या निष्कर्ष शामिल नहीं\n• विषय-सूची जैसा कार्य करता है\n\n2. सूचनात्मक सार:\n• 150-300 शब्द; सभी प्रमुख अनुभागों का सारांश\n• उद्देश्य, कार्यप्रणाली, परिणाम और निष्कर्ष शामिल\n• वैज्ञानिक शोध में सबसे आम\n\n3. संरचित सार:\n• लेबल किए गए अनुभाग: पृष्ठभूमि, उद्देश्य, विधियां, परिणाम, निष्कर्ष\n• चिकित्सा पत्रिकाओं में आम\n\n4. आलोचनात्मक/मूल्यांकनात्मक सार:\n• दुर्लभ; अध्ययन की विश्वसनीयता पर लेखक का निर्णय शामिल"
        ]
      },
      {
        heading: ["How to Write an Effective Abstract", "प्रभावी सार कैसे लिखें"],
        body: [
          "Steps:\n1. Write the abstract AFTER completing the paper\n2. Identify key elements: problem, method, results, conclusion\n3. Use past tense for completed research\n4. Avoid: abbreviations, citations, references, jargon\n5. Include keywords for database indexing\n6. Stay within word limit (usually 150-300 words)\n7. Write in a single paragraph (unless structured)\n8. Be objective — avoid personal opinions\n\nDo's:\n• Summarize all major sections proportionally\n• Use concise, clear language\n• Include 4-6 keywords\n• Self-contained — readable independently\n\nDon'ts:\n• Don't include information not in the paper\n• Don't use first person\n• Don't cite other works\n• Don't include figures or tables",
          "चरण:\n1. पत्र पूरा करने के बाद सार लिखें\n2. प्रमुख तत्वों की पहचान करें: समस्या, विधि, परिणाम, निष्कर्ष\n3. पूर्ण शोध के लिए भूतकाल का उपयोग करें\n4. बचें: संक्षिप्तीकरण, उद्धरण, शब्दजाल\n5. डेटाबेस अनुक्रमण के लिए कीवर्ड शामिल करें\n6. शब्द सीमा (150-300) में रहें\n7. एक अनुच्छेद में लिखें\n8. वस्तुनिष्ठ रहें\n\nक्या करें:\n• सभी प्रमुख अनुभागों का आनुपातिक सारांश\n• 4-6 कीवर्ड शामिल करें\n• स्वतंत्र रूप से पठनीय\n\nक्या न करें:\n• पत्र में नहीं है वह जानकारी न दें\n• प्रथम पुरुष का उपयोग न करें"
        ]
      }
    ],
    quotes: [
      ["APA (2020): \"An abstract is a brief, comprehensive summary of the contents of the article.\" — Publication Manual of the APA, 7th Edition", "APA (2020): \"सार लेख की सामग्री का संक्षिप्त, व्यापक सारांश है।\" — APA प्रकाशन मैनुअल, 7वां संस्करण"],
      ["Day & Gastel (2006): \"The abstract is the most important single paragraph in an article.\" — How to Write and Publish a Scientific Paper", "डे और गैस्टेल (2006): \"सार लेख में सबसे महत्वपूर्ण एकल अनुच्छेद है।\""],
      ["Swales & Feak (2009): \"Abstracts are increasingly important in a world of information overload.\" — Abstracts and the Writing of Abstracts", "स्वेल्स और फीक (2009): \"सूचना अधिभार की दुनिया में सार तेजी से महत्वपूर्ण हो रहे हैं।\""],
    ],
    evaluation: [
      "While abstracts are indispensable for academic communication, they have limitations. Compressing complex research into 150-300 words inevitably leads to oversimplification. Many abstracts fail to accurately represent the full paper's nuances. The increasing reliance on abstracts for literature screening can lead to superficial understanding. Furthermore, poorly written abstracts can cause good research to be overlooked. However, in an era of information overload, abstracts serve a crucial filtering function, helping researchers efficiently identify relevant literature.",
      "सार अकादमिक संचार के लिए अपरिहार्य होते हुए भी सीमाओं से मुक्त नहीं हैं। जटिल शोध को 150-300 शब्दों में संकुचित करना अनिवार्य रूप से अतिसरलीकरण की ओर ले जाता है। कई सार पूर्ण पत्र की बारीकियों का सटीक प्रतिनिधित्व नहीं करते। हालांकि, सूचना अधिभार के युग में, सार एक महत्वपूर्ण छानने का कार्य करते हैं।"
    ],
    conclusion: [
      "An abstract is a vital component of any academic paper, serving as both a summary and a marketing tool for the research. Writing an effective abstract requires the skill of condensing complex ideas into a brief, clear format while retaining the essential information. Whether descriptive, informative, or structured, a well-written abstract significantly increases the visibility and impact of academic work.",
      "सार किसी भी अकादमिक पत्र का एक महत्वपूर्ण घटक है, जो शोध के लिए सारांश और विपणन उपकरण दोनों के रूप में कार्य करता है। प्रभावी सार लिखने के लिए जटिल विचारों को संक्षिप्त, स्पष्ट प्रारूप में संघनित करने का कौशल आवश्यक है।"
    ],
    shortQ: [
      ["Define abstract and its purpose in academic writing.", "अकादमिक लेखन में सार और इसके उद्देश्य को परिभाषित करें।"],
      ["Differentiate between descriptive and informative abstracts.", "वर्णनात्मक और सूचनात्मक सार में अंतर करें।"],
      ["What are the key elements of an informative abstract?", "सूचनात्मक सार के प्रमुख तत्व क्या हैं?"],
      ["What is the ideal word limit for an abstract?", "सार के लिए आदर्श शब्द सीमा क्या है?"],
      ["List the don'ts of abstract writing.", "सार लेखन में क्या न करें, की सूची बनाएं।"],
    ],
    longQ: [
      ["Discuss the types, structure, and guidelines for writing an effective abstract.", "प्रभावी सार लिखने के लिए प्रकार, संरचना और दिशानिर्देशों पर चर्चा करें।"],
      ["Explain the importance of abstract in research publications.", "शोध प्रकाशनों में सार के महत्व को समझाएं।"],
      ["Compare abstract with synopsis. How do they differ?", "सार और सारांश की तुलना करें। वे कैसे भिन्न हैं?"],
      ["What are the common errors in abstract writing? How to avoid them?", "सार लेखन में सामान्य त्रुटियां क्या हैं? उन्हें कैसे टालें?"],
      ["\"The abstract is the gateway to a research paper.\" Elucidate.", "\"सार शोध पत्र का प्रवेश द्वार है।\" व्याख्या करें।"],
    ],
    mcqs: [
      { q: ["An informative abstract typically contains:", "सूचनात्मक सार में आमतौर पर होता है:"], opts: [["Only the title", "केवल शीर्षक"], ["Purpose, method, results, conclusion", "उद्देश्य, विधि, परिणाम, निष्कर्ष"], ["Only references", "केवल संदर्भ"], ["Only opinions", "केवल राय"]], correct: 1 },
      { q: ["The ideal length of an abstract is usually:", "सार की आदर्श लंबाई आमतौर पर है:"], opts: [["50 words", "50 शब्द"], ["150-300 words", "150-300 शब्द"], ["1000 words", "1000 शब्द"], ["5000 words", "5000 शब्द"]], correct: 1 },
      { q: ["Which type of abstract is most common in scientific research?", "वैज्ञानिक शोध में कौन सा प्रकार सबसे आम है?"], opts: [["Descriptive", "वर्णनात्मक"], ["Informative", "सूचनात्मक"], ["Critical", "आलोचनात्मक"], ["Evaluative", "मूल्यांकनात्मक"]], correct: 1 },
      { q: ["Abstract should be written:", "सार लिखना चाहिए:"], opts: [["Before the research", "शोध से पहले"], ["After completing the paper", "पत्र पूरा करने के बाद"], ["During data collection", "डेटा संग्रह के दौरान"], ["None", "कोई नहीं"]], correct: 1 },
      { q: ["Which should NOT be included in an abstract?", "सार में क्या शामिल नहीं होना चाहिए?"], opts: [["Purpose", "उद्देश्य"], ["Methodology", "कार्यप्रणाली"], ["Citations from other works", "अन्य कार्यों से उद्धरण"], ["Results", "परिणाम"]], correct: 2 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Types: Descriptive, Informative, Structured, Critical\n• APA guidelines for abstract writing\n• Abstract vs Synopsis vs Summary — Differences\n• Word limit conventions (150-300 words)\n• Keywords and database indexing\n• IMRAD structure in research papers\n• Importance in journal publication process",
      "UGC NET फोकस:\n• प्रकार: वर्णनात्मक, सूचनात्मक, संरचित, आलोचनात्मक\n• APA दिशानिर्देश\n• सार बनाम सारांश बनाम सारांश — अंतर\n• शब्द सीमा (150-300)\n• कीवर्ड और डेटाबेस अनुक्रमण"
    ],
    ugcQ: [
      ["Q: What does APA stand for? A: American Psychological Association.", "प्र: APA का पूर्ण रूप? उ: American Psychological Association।"],
      ["Q: Structured abstract is common in which field? A: Medical and health sciences.", "प्र: संरचित सार किस क्षेत्र में आम है? उ: चिकित्सा और स्वास्थ्य विज्ञान।"],
      ["Q: What are keywords in an abstract? A: Terms used for database indexing to help locate the paper.", "प्र: सार में कीवर्ड क्या हैं? उ: डेटाबेस अनुक्रमण के लिए उपयोग किए जाने वाले शब्द।"],
    ],
  },

  // TOPIC 5
  {
    id: 't5', num: 5,
    title: ["Writing Conference Paper", "सम्मेलन पेपर लेखन"],
    introduction: [
      "A conference paper is a scholarly article presented at an academic conference or seminar. It represents original research or analysis intended for discussion among peers in a specific discipline. Conference papers are a vital part of academic discourse, allowing researchers to share preliminary findings, receive feedback, and build professional networks. According to the University Grants Commission (UGC), participation in conferences and presentation of papers is an important criterion for academic career advancement in India. Conference papers often serve as precursors to journal articles and contribute to the advancement of knowledge in a field.",
      "सम्मेलन पत्र एक विद्वतापूर्ण लेख है जो अकादमिक सम्मेलन या सेमिनार में प्रस्तुत किया जाता है। यह मूल शोध या विश्लेषण का प्रतिनिधित्व करता है। विश्वविद्यालय अनुदान आयोग (UGC) के अनुसार, सम्मेलनों में भागीदारी और पत्रों की प्रस्तुति भारत में अकादमिक करियर उन्नति के लिए महत्वपूर्ण मानदंड है। सम्मेलन पत्र अक्सर जर्नल लेखों के अग्रदूत होते हैं।"
    ],
    concepts: [
      {
        heading: ["Structure of a Conference Paper", "सम्मेलन पत्र की संरचना"],
        body: [
          "1. TITLE: Specific, concise, and indicative of the content.\n2. ABSTRACT: 200-300 word summary submitted before the conference.\n3. INTRODUCTION: Background, research problem, significance, objectives.\n4. LITERATURE REVIEW: Summary of existing research on the topic.\n5. METHODOLOGY: Research design, data collection methods, analysis techniques.\n6. FINDINGS/RESULTS: Presentation of data with tables, graphs if needed.\n7. DISCUSSION: Interpretation of findings in relation to existing literature.\n8. CONCLUSION: Summary of key findings and their implications.\n9. REFERENCES: All cited works in the required citation style.\n\nPresentation Format:\n• Usually 15-20 minutes for oral presentation\n• PowerPoint/slides commonly used\n• Q&A session follows (5-10 minutes)\n• Poster presentations are an alternative format",
          "1. शीर्षक: विशिष्ट, संक्षिप्त, विषय का संकेत।\n2. सार: सम्मेलन से पहले प्रस्तुत 200-300 शब्द सारांश।\n3. परिचय: पृष्ठभूमि, शोध समस्या, महत्व, उद्देश्य।\n4. साहित्य समीक्षा: विषय पर मौजूदा शोध का सारांश।\n5. कार्यप्रणाली: शोध डिज़ाइन, डेटा संग्रह, विश्लेषण।\n6. निष्कर्ष/परिणाम: डेटा की प्रस्तुति।\n7. चर्चा: मौजूदा साहित्य के संबंध में निष्कर्षों की व्याख्या।\n8. निष्कर्ष: प्रमुख निष्कर्षों का सारांश।\n9. संदर्भ: सभी उद्धृत कार्य।\n\nप्रस्तुति प्रारूप:\n• मौखिक प्रस्तुति के लिए 15-20 मिनट\n• PowerPoint/स्लाइड का उपयोग\n• प्रश्नोत्तर सत्र (5-10 मिनट)"
        ]
      },
      {
        heading: ["Guidelines and Importance", "दिशानिर्देश और महत्व"],
        body: [
          "Writing Guidelines:\n• Follow the conference's submission guidelines strictly\n• Original and unpublished work\n• Adhere to word/page limits\n• Use appropriate citation style (APA/MLA/Chicago)\n• Proofread thoroughly\n• Submit before the deadline\n\nImportance:\n1. Knowledge Sharing: Platform to share research findings\n2. Peer Feedback: Receive constructive criticism from experts\n3. Networking: Build professional connections\n4. Academic Credit: UGC considers conference papers for API scores\n5. Publication: Many conferences publish proceedings (ISBN/ISSN)\n6. Career Growth: Essential for promotions in academia\n7. Skill Development: Improves research and presentation skills\n8. Collaboration: Opens doors for collaborative research",
          "लेखन दिशानिर्देश:\n• सम्मेलन के प्रस्तुति दिशानिर्देशों का कड़ाई से पालन करें\n• मौलिक और अप्रकाशित कार्य\n• शब्द/पृष्ठ सीमा का पालन\n• उचित उद्धरण शैली (APA/MLA/शिकागो)\n• अंतिम तिथि से पहले प्रस्तुत करें\n\nमहत्व:\n1. ज्ञान साझाकरण: शोध निष्कर्ष साझा करने का मंच\n2. सहकर्मी प्रतिक्रिया: विशेषज्ञों से रचनात्मक आलोचना\n3. नेटवर्किंग: पेशेवर संपर्क\n4. अकादमिक श्रेय: UGC API स्कोर में गणना\n5. प्रकाशन: कई सम्मेलन कार्यवाही प्रकाशित करते हैं\n6. करियर विकास: शिक्षा जगत में पदोन्नति के लिए आवश्यक\n7. कौशल विकास: शोध और प्रस्तुति कौशल में सुधार"
        ]
      }
    ],
    quotes: [
      ["UGC (2018): \"Participation in conferences and presentation of research papers is a key indicator of academic productivity.\" — UGC Regulations on API", "UGC (2018): \"सम्मेलनों में भागीदारी और शोध पत्रों की प्रस्तुति अकादमिक उत्पादकता का प्रमुख संकेतक है।\""],
      ["Day & Gastel (2006): \"A conference paper allows researchers to test ideas before formal publication.\" — How to Write and Publish a Scientific Paper", "डे और गैस्टेल: \"सम्मेलन पत्र शोधकर्ताओं को औपचारिक प्रकाशन से पहले विचारों का परीक्षण करने की अनुमति देता है।\""],
      ["Paltridge & Starfield (2007): \"Conference presentations bridge the gap between research and its dissemination.\" — Thesis and Dissertation Writing in a Second Language", "पैल्ट्रिज और स्टारफील्ड: \"सम्मेलन प्रस्तुतियां शोध और उसके प्रसार के बीच की खाई को पाटती हैं।\""],
    ],
    evaluation: [
      "Conference papers play a significant role in academic life but face several criticisms. The proliferation of 'predatory conferences' that charge fees without genuine peer review has diluted their academic value. Quality varies greatly across conferences. Time constraints (15-20 minutes) limit the depth of presentation. However, reputable conferences organized by UGC, ICSSR, and established universities maintain high standards. Conference papers remain essential for early-career researchers to gain visibility and for established scholars to share preliminary findings before journal publication.",
      "सम्मेलन पत्र अकादमिक जीवन में महत्वपूर्ण भूमिका निभाते हैं लेकिन कई आलोचनाओं का सामना करते हैं। 'शिकारी सम्मेलनों' के प्रसार ने उनके अकादमिक मूल्य को कम किया है। गुणवत्ता सम्मेलनों में बहुत भिन्न होती है। हालांकि, UGC, ICSSR द्वारा आयोजित प्रतिष्ठित सम्मेलन उच्च मानक बनाए रखते हैं। प्रारंभिक करियर शोधकर्ताओं के लिए सम्मेलन पत्र दृश्यता प्राप्त करने के लिए आवश्यक हैं।"
    ],
    conclusion: [
      "Writing and presenting conference papers is an integral part of academic life. It provides researchers with opportunities for knowledge sharing, peer review, professional networking, and career advancement. Mastering the art of conference paper writing — from abstract submission to oral presentation — is essential for any aspiring scholar in Political Science or any other discipline.",
      "सम्मेलन पत्र लिखना और प्रस्तुत करना अकादमिक जीवन का अभिन्न अंग है। यह शोधकर्ताओं को ज्ञान साझाकरण, सहकर्मी समीक्षा, पेशेवर नेटवर्किंग और करियर उन्नति के अवसर प्रदान करता है।"
    ],
    shortQ: [
      ["What is a conference paper?", "सम्मेलन पत्र क्या है?"],
      ["List the components of a conference paper.", "सम्मेलन पत्र के घटकों की सूची बनाएं।"],
      ["What is the role of UGC in conference participation?", "सम्मेलन भागीदारी में UGC की भूमिका क्या है?"],
      ["How does a conference paper differ from a journal article?", "सम्मेलन पत्र जर्नल लेख से कैसे भिन्न है?"],
      ["What are predatory conferences?", "शिकारी सम्मेलन क्या हैं?"],
    ],
    longQ: [
      ["Discuss the structure, process, and importance of writing conference papers.", "सम्मेलन पत्र लिखने की संरचना, प्रक्रिया और महत्व पर चर्चा करें।"],
      ["Explain the role of conference papers in academic career advancement.", "अकादमिक करियर उन्नति में सम्मेलन पत्रों की भूमिका समझाएं।"],
      ["What are the challenges in conference paper writing and presentation?", "सम्मेलन पत्र लेखन और प्रस्तुति में चुनौतियां क्या हैं?"],
      ["Compare conference papers with journal publications.", "सम्मेलन पत्रों की जर्नल प्रकाशनों से तुलना करें।"],
      ["\"Conference papers are the testing ground for research ideas.\" Discuss.", "\"सम्मेलन पत्र शोध विचारों का परीक्षण मैदान है।\" चर्चा करें।"],
    ],
    mcqs: [
      { q: ["Typical oral presentation time at a conference is:", "सम्मेलन में मौखिक प्रस्तुति का सामान्य समय:"], opts: [["5 minutes", "5 मिनट"], ["15-20 minutes", "15-20 मिनट"], ["60 minutes", "60 मिनट"], ["3 hours", "3 घंटे"]], correct: 1 },
      { q: ["Conference proceedings are published with:", "सम्मेलन कार्यवाही प्रकाशित होती है:"], opts: [["No number", "बिना नंबर"], ["ISBN/ISSN", "ISBN/ISSN"], ["PAN number", "PAN नंबर"], ["Aadhaar", "आधार"]], correct: 1 },
      { q: ["UGC considers conference papers for:", "UGC सम्मेलन पत्रों को मानता है:"], opts: [["Entertainment", "मनोरंजन"], ["API scores", "API स्कोर"], ["Leave benefits", "अवकाश लाभ"], ["Salary hike only", "केवल वेतन वृद्धि"]], correct: 1 },
      { q: ["The first step in conference paper writing is:", "सम्मेलन पत्र लेखन में पहला कदम:"], opts: [["Presentation", "प्रस्तुति"], ["Abstract submission", "सार प्रस्तुति"], ["Publication", "प्रकाशन"], ["Q&A session", "प्रश्नोत्तर सत्र"]], correct: 1 },
      { q: ["ICSSR stands for:", "ICSSR का पूर्ण रूप:"], opts: [["Indian Council of Social Science Research", "भारतीय सामाजिक विज्ञान अनुसंधान परिषद"], ["Indian Committee of Science", "भारतीय विज्ञान समिति"], ["International Council of Studies", "अंतर्राष्ट्रीय अध्ययन परिषद"], ["None", "कोई नहीं"]], correct: 0 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Conference paper vs journal article — differences\n• UGC API score criteria for conference participation\n• ICSSR-sponsored seminars and their significance\n• Peer review process in conferences\n• National vs International conferences — UGC classification\n• Predatory conferences — how to identify\n• ISBN vs ISSN for conference proceedings",
      "UGC NET फोकस:\n• सम्मेलन पत्र बनाम जर्नल लेख — अंतर\n• UGC API स्कोर मानदंड\n• ICSSR प्रायोजित सेमिनार\n• सहकर्मी समीक्षा प्रक्रिया\n• राष्ट्रीय बनाम अंतर्राष्ट्रीय सम्मेलन"
    ],
    ugcQ: [
      ["Q: What is API score? A: Academic Performance Indicator used by UGC for career advancement.", "प्र: API स्कोर क्या है? उ: करियर उन्नति के लिए UGC द्वारा उपयोग किया जाने वाला अकादमिक प्रदर्शन संकेतक।"],
      ["Q: Full form of ICSSR? A: Indian Council of Social Science Research.", "प्र: ICSSR का पूर्ण रूप? उ: Indian Council of Social Science Research।"],
    ],
  },

  // TOPIC 6
  {
    id: 't6', num: 6,
    title: ["Referencing", "संदर्भ (Referencing)"],
    introduction: [
      "Referencing is the systematic method of acknowledging the sources of information used in academic writing. It involves citing the works of other scholars within the text (in-text citations) and providing a detailed list of all cited sources at the end of the document (bibliography/reference list). Referencing serves multiple purposes: it gives credit to original authors, enables readers to locate sources, demonstrates the depth of research, and helps avoid plagiarism. As Pears & Shields (2019) state, \"Referencing is one of the most important aspects of academic writing — it demonstrates integrity, supports arguments, and connects your work to the wider body of knowledge.\"",
      "संदर्भ लेखन (Referencing) अकादमिक लेखन में उपयोग की गई जानकारी के स्रोतों को स्वीकार करने की व्यवस्थित विधि है। इसमें पाठ के भीतर अन्य विद्वानों के कार्यों का उद्धरण (इन-टेक्स्ट साइटेशन) और दस्तावेज़ के अंत में सभी उद्धृत स्रोतों की विस्तृत सूची (ग्रंथसूची/संदर्भ सूची) प्रदान करना शामिल है। पियर्स और शील्ड्स (2019): \"संदर्भ लेखन अकादमिक लेखन के सबसे महत्वपूर्ण पहलुओं में से एक है — यह ईमानदारी दर्शाता है, तर्कों का समर्थन करता है।\""
    ],
    concepts: [
      {
        heading: ["Major Referencing Styles", "प्रमुख संदर्भ शैलियां"],
        body: [
          "1. APA (American Psychological Association):\n• Author-date system: (Author, Year)\n• Used in: Psychology, Social Sciences, Education\n• Example: (Morgenthau, 1948, p. 25)\n• Reference: Morgenthau, H. (1948). Politics Among Nations. Knopf.\n\n2. MLA (Modern Language Association):\n• Author-page system: (Author Page)\n• Used in: Humanities, Literature, Languages\n• Example: (Sabine 45)\n• Works Cited entry format\n\n3. CHICAGO/TURABIAN:\n• Two systems: Notes-Bibliography (humanities) and Author-Date (sciences)\n• Uses footnotes/endnotes\n• Used in: History, Political Science\n\n4. HARVARD:\n• Author-date system, similar to APA\n• Used widely in UK and Australia\n\n5. VANCOUVER:\n• Numbered citation system\n• Used in: Medical and health sciences\n\n6. OSCOLA:\n• Used in: Law and legal studies",
          "1. APA (अमेरिकन साइकोलॉजिकल एसोसिएशन):\n• लेखक-तिथि प्रणाली: (लेखक, वर्ष)\n• उपयोग: मनोविज्ञान, सामाजिक विज्ञान, शिक्षा\n• उदाहरण: (मॉर्गेंथाऊ, 1948, पृ. 25)\n\n2. MLA (मॉडर्न लैंग्वेज एसोसिएशन):\n• लेखक-पृष्ठ प्रणाली: (लेखक पृष्ठ)\n• उपयोग: मानविकी, साहित्य\n\n3. शिकागो/तुराबियन:\n• दो प्रणालियां: नोट्स-ग्रंथसूची और लेखक-तिथि\n• फुटनोट/एंडनोट का उपयोग\n• उपयोग: इतिहास, राजनीति विज्ञान\n\n4. हार्वर्ड:\n• APA जैसी लेखक-तिथि प्रणाली\n• UK और ऑस्ट्रेलिया में व्यापक\n\n5. वैंकूवर:\n• संख्यांकित उद्धरण प्रणाली\n• चिकित्सा विज्ञान में उपयोग\n\n6. OSCOLA:\n• कानून और विधिक अध्ययन में उपयोग"
        ]
      },
      {
        heading: ["Importance and Principles of Referencing", "संदर्भ लेखन का महत्व और सिद्धांत"],
        body: [
          "Importance:\n1. Avoids Plagiarism: Gives due credit to original authors\n2. Academic Integrity: Demonstrates honesty in research\n3. Verifiability: Allows readers to check sources\n4. Depth of Research: Shows breadth of literature consulted\n5. Credibility: Strengthens arguments with authoritative support\n6. Legal Protection: Respects intellectual property rights\n\nPrinciples:\n• Consistency: Use one style throughout the document\n• Accuracy: Ensure all details (author, year, title, publisher) are correct\n• Completeness: Every in-text citation must have a corresponding reference\n• Currency: Use recent sources where possible\n• Relevance: Cite only sources that are directly related\n\nWhen to Reference:\n• Direct quotes\n• Paraphrased ideas\n• Data, statistics, tables from other sources\n• Images, diagrams, maps\n• Theories and concepts attributed to specific scholars",
          "महत्व:\n1. साहित्यिक चोरी से बचाव: मूल लेखकों को श्रेय\n2. अकादमिक अखंडता: शोध में ईमानदारी\n3. सत्यापनीयता: पाठकों को स्रोत जांचने की अनुमति\n4. शोध की गहराई: परामर्शित साहित्य की व्यापकता\n5. विश्वसनीयता: आधिकारिक समर्थन से तर्क मजबूत\n6. कानूनी सुरक्षा: बौद्धिक संपदा अधिकारों का सम्मान\n\nसिद्धांत:\n• एकरूपता: पूरे दस्तावेज़ में एक शैली\n• सटीकता: सभी विवरण सही हों\n• पूर्णता: हर इन-टेक्स्ट उद्धरण का संदर्भ हो\n• कब संदर्भ दें:\n• प्रत्यक्ष उद्धरण, व्याख्या किए गए विचार\n• डेटा, सांख्यिकी, छवियां"
        ]
      }
    ],
    quotes: [
      ["Pears & Shields (2019): \"Referencing demonstrates integrity, supports arguments, and connects work to the wider body of knowledge.\" — Cite Them Right", "पियर्स और शील्ड्स: \"संदर्भ ईमानदारी दर्शाता है, तर्कों का समर्थन करता है, और कार्य को व्यापक ज्ञान से जोड़ता है।\""],
      ["APA Manual (2020): \"Proper citation is the hallmark of scholarly work.\" — Publication Manual, 7th Ed.", "APA मैनुअल (2020): \"उचित उद्धरण विद्वतापूर्ण कार्य की पहचान है।\""],
      ["Neville, C. (2010): \"Effective referencing is a skill that undergraduates must develop to succeed in higher education.\" — The Complete Guide to Referencing and Avoiding Plagiarism", "नेविल: \"प्रभावी संदर्भ लेखन एक कौशल है जो स्नातक छात्रों को उच्च शिक्षा में सफलता के लिए विकसित करना चाहिए।\""],
    ],
    evaluation: [
      "Referencing is an indispensable part of academic writing, yet it poses challenges for many students and researchers. The multiplicity of citation styles can be confusing. Proper referencing is time-consuming and requires meticulous attention to detail. The rise of reference management tools (Zotero, Mendeley, EndNote) has eased the burden but also created dependency on technology. Despite challenges, referencing remains fundamental to academic integrity. The increasing emphasis on anti-plagiarism software (Turnitin, Urkund) has made accurate referencing more critical than ever.",
      "संदर्भ लेखन अकादमिक लेखन का अपरिहार्य हिस्सा है, फिर भी यह कई छात्रों और शोधकर्ताओं के लिए चुनौतीपूर्ण है। उद्धरण शैलियों की बहुलता भ्रामक हो सकती है। संदर्भ प्रबंधन उपकरणों (Zotero, Mendeley, EndNote) ने बोझ कम किया है। साहित्यिक चोरी विरोधी सॉफ्टवेयर (Turnitin) पर बढ़ते जोर ने सटीक संदर्भ को और अधिक महत्वपूर्ण बना दिया है।"
    ],
    conclusion: [
      "Referencing is a cornerstone of academic integrity and scholarly communication. Mastery of different citation styles — APA, MLA, Chicago, Harvard — is essential for academic success. Proper referencing not only prevents plagiarism but also strengthens arguments, demonstrates research depth, and contributes to the cumulative nature of knowledge production.",
      "संदर्भ लेखन अकादमिक अखंडता और विद्वतापूर्ण संचार की आधारशिला है। APA, MLA, शिकागो, हार्वर्ड जैसी विभिन्न उद्धरण शैलियों में महारत अकादमिक सफलता के लिए आवश्यक है।"
    ],
    shortQ: [
      ["What is referencing? Why is it important?", "संदर्भ लेखन क्या है? यह क्यों महत्वपूर्ण है?"],
      ["Differentiate between APA and MLA citation styles.", "APA और MLA उद्धरण शैलियों में अंतर करें।"],
      ["What is in-text citation?", "इन-टेक्स्ट उद्धरण क्या है?"],
      ["Name any three reference management tools.", "किन्हीं तीन संदर्भ प्रबंधन उपकरणों के नाम बताएं।"],
      ["When should you cite a source in academic writing?", "अकादमिक लेखन में स्रोत का उद्धरण कब देना चाहिए?"],
    ],
    longQ: [
      ["Discuss the major referencing styles used in academic writing with examples.", "उदाहरणों के साथ अकादमिक लेखन में उपयोग की जाने वाली प्रमुख संदर्भ शैलियों पर चर्चा करें।"],
      ["Explain the importance and principles of referencing in research.", "शोध में संदर्भ लेखन के महत्व और सिद्धांतों को समझाएं।"],
      ["How does referencing help in avoiding plagiarism?", "संदर्भ लेखन साहित्यिक चोरी से बचने में कैसे मदद करता है?"],
      ["Compare the APA, MLA, and Chicago referencing styles.", "APA, MLA और शिकागो संदर्भ शैलियों की तुलना करें।"],
      ["\"Referencing is the backbone of academic integrity.\" Critically evaluate.", "\"संदर्भ लेखन अकादमिक अखंडता की रीढ़ है।\" आलोचनात्मक मूल्यांकन करें।"],
    ],
    mcqs: [
      { q: ["APA citation style uses:", "APA उद्धरण शैली उपयोग करती है:"], opts: [["Author-page system", "लेखक-पृष्ठ"], ["Author-date system", "लेखक-तिथि"], ["Numbered system", "संख्यांकित"], ["Footnote system", "फुटनोट"]], correct: 1 },
      { q: ["MLA is primarily used in:", "MLA मुख्य रूप से उपयोग होती है:"], opts: [["Medical sciences", "चिकित्सा विज्ञान"], ["Humanities and Literature", "मानविकी और साहित्य"], ["Law", "कानून"], ["Engineering", "इंजीनियरिंग"]], correct: 1 },
      { q: ["Which is a reference management tool?", "कौन सा संदर्भ प्रबंधन उपकरण है?"], opts: [["Photoshop", "फोटोशॉप"], ["Zotero", "Zotero"], ["Excel", "एक्सेल"], ["AutoCAD", "ऑटोकैड"]], correct: 1 },
      { q: ["Turnitin is used for:", "Turnitin उपयोग होता है:"], opts: [["Image editing", "छवि संपादन"], ["Plagiarism detection", "साहित्यिक चोरी का पता"], ["Data analysis", "डेटा विश्लेषण"], ["Video making", "वीडियो बनाना"]], correct: 1 },
      { q: ["Chicago style commonly uses:", "शिकागो शैली आमतौर पर उपयोग करती है:"], opts: [["Author-page", "लेखक-पृष्ठ"], ["Footnotes/endnotes", "फुटनोट/एंडनोट"], ["Numbered citations", "संख्यांकित उद्धरण"], ["No citations", "कोई उद्धरण नहीं"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• APA 7th Edition — latest standard\n• MLA vs APA vs Chicago — comparison\n• Plagiarism: definition, types (verbatim, mosaic, self-plagiarism)\n• Reference management tools: Zotero, Mendeley, EndNote\n• Turnitin and Urkund — anti-plagiarism software\n• UGC guidelines on plagiarism (2018 regulations)\n• Academic integrity and research ethics",
      "UGC NET फोकस:\n• APA 7वां संस्करण\n• MLA बनाम APA बनाम शिकागो — तुलना\n• साहित्यिक चोरी: परिभाषा, प्रकार\n• संदर्भ प्रबंधन उपकरण: Zotero, Mendeley\n• Turnitin — साहित्यिक चोरी विरोधी\n• UGC दिशानिर्देश (2018)"
    ],
    ugcQ: [
      ["Q: What are the UGC regulations on plagiarism (2018)? A: Level 0-3 penalties based on similarity percentage.", "प्र: साहित्यिक चोरी पर UGC नियम (2018)? उ: समानता प्रतिशत पर आधारित स्तर 0-3 दंड।"],
      ["Q: Full form of MLA? A: Modern Language Association.", "प्र: MLA का पूर्ण रूप? उ: Modern Language Association।"],
      ["Q: Which referencing style uses footnotes? A: Chicago/Turabian.", "प्र: कौन सी संदर्भ शैली फुटनोट उपयोग करती है? उ: शिकागो/तुराबियन।"],
    ],
  },

  // TOPIC 7
  {
    id: 't7', num: 7,
    title: ["Writing Dissertations/Thesis", "शोध प्रबंध/थीसिस लेखन"],
    introduction: [
      "A dissertation (or thesis) is an extended piece of original research written as part of a postgraduate degree requirement, typically for M.Phil. or Ph.D. programs. It represents the culmination of years of study and research, demonstrating the candidate's ability to conduct independent scholarly work. According to Dunleavy (2003), a dissertation is \"the single most important piece of work that any academic will write.\" In the Indian university system, the UGC mandates a dissertation or project report in the final semester of M.A. programs. A Ph.D. thesis is expected to make an original contribution to knowledge in the chosen field of study.",
      "शोध प्रबंध (Dissertation/Thesis) स्नातकोत्तर डिग्री आवश्यकता के भाग के रूप में लिखा गया मौलिक शोध का एक विस्तारित अंश है। यह वर्षों के अध्ययन और शोध की परिणति है। डनलेवी (2003) के अनुसार, शोध प्रबंध \"सबसे महत्वपूर्ण कार्य है जो कोई भी अकादमिक लिखेगा।\" भारतीय विश्वविद्यालय प्रणाली में, UGC M.A. कार्यक्रमों के अंतिम सेमेस्टर में शोध प्रबंध या प्रोजेक्ट रिपोर्ट अनिवार्य करता है। Ph.D. थीसिस से ज्ञान में मौलिक योगदान अपेक्षित है।"
    ],
    concepts: [
      {
        heading: ["Structure of a Dissertation/Thesis", "शोध प्रबंध/थीसिस की संरचना"],
        body: [
          "1. PRELIMINARY PAGES: Title page, Declaration, Certificate, Acknowledgements, Table of Contents, List of Tables/Figures, List of Abbreviations\n\n2. CHAPTER I — INTRODUCTION: Background, Statement of the Problem, Objectives, Hypotheses, Significance, Scope and Limitations, Chapter Scheme\n\n3. CHAPTER II — REVIEW OF LITERATURE: Systematic survey of existing research, identification of research gaps, theoretical framework\n\n4. CHAPTER III — RESEARCH METHODOLOGY: Research design, Universe/Population, Sample, Tools of data collection (questionnaires, interviews), Data analysis techniques\n\n5. CHAPTER IV — DATA ANALYSIS & INTERPRETATION: Presentation of data (tables, graphs, charts), Statistical analysis, Interpretation of findings\n\n6. CHAPTER V — FINDINGS, CONCLUSIONS & SUGGESTIONS: Summary of major findings, Conclusions drawn, Recommendations for future research and policy\n\n7. BIBLIOGRAPHY/REFERENCES: Complete list of all cited works\n\n8. APPENDICES: Questionnaires, raw data, maps, supplementary material",
          "1. प्रारंभिक पृष्ठ: शीर्षक पृष्ठ, घोषणा, प्रमाण पत्र, आभार, विषय-सूची\n\n2. अध्याय I — परिचय: पृष्ठभूमि, समस्या कथन, उद्देश्य, परिकल्पनाएं, महत्व, दायरा\n\n3. अध्याय II — साहित्य समीक्षा: मौजूदा शोध का व्यवस्थित सर्वेक्षण, शोध अंतराल\n\n4. अध्याय III — शोध कार्यप्रणाली: शोध डिज़ाइन, जनसंख्या, नमूना, डेटा संग्रह उपकरण\n\n5. अध्याय IV — डेटा विश्लेषण और व्याख्या: डेटा प्रस्तुति, सांख्यिकीय विश्लेषण\n\n6. अध्याय V — निष्कर्ष और सुझाव: प्रमुख निष्कर्षों का सारांश, सिफारिशें\n\n7. ग्रंथसूची/संदर्भ: सभी उद्धृत कार्यों की सूची\n\n8. परिशिष्ट: प्रश्नावली, कच्चा डेटा, मानचित्र"
        ]
      },
      {
        heading: ["Guidelines and Process", "दिशानिर्देश और प्रक्रिया"],
        body: [
          "Process:\n1. Topic Selection — Choose a relevant, researchable topic\n2. Synopsis Preparation — Submit research plan for approval\n3. Literature Review — Comprehensive study of existing research\n4. Data Collection — Primary (surveys, interviews) or Secondary (books, journals)\n5. Data Analysis — Qualitative or quantitative techniques\n6. Writing — Chapter by chapter, under supervisor's guidance\n7. Revision — Multiple drafts with supervisor feedback\n8. Submission — Final submission to university\n9. Viva-Voce — Oral defense before an expert panel\n\nKey Guidelines:\n• Original and unpublished work\n• Follow university formatting guidelines\n• Minimum word count (usually 15,000-30,000 for M.A.; 60,000+ for Ph.D.)\n• Proper referencing throughout\n• Regular meetings with supervisor\n• Ethical compliance (ICSSR/UGC ethics guidelines)\n• Plagiarism check mandatory (Turnitin/Urkund)",
          "प्रक्रिया:\n1. विषय चयन — प्रासंगिक, शोध योग्य विषय चुनें\n2. सारांश तैयारी — अनुमोदन के लिए शोध योजना प्रस्तुत करें\n3. साहित्य समीक्षा — मौजूदा शोध का व्यापक अध्ययन\n4. डेटा संग्रह — प्राथमिक या द्वितीयक\n5. डेटा विश्लेषण — गुणात्मक या मात्रात्मक\n6. लेखन — पर्यवेक्षक मार्गदर्शन में\n7. संशोधन — कई मसौदे\n8. प्रस्तुति — विश्वविद्यालय को अंतिम प्रस्तुति\n9. मौखिक परीक्षा — विशेषज्ञ पैनल के समक्ष\n\nप्रमुख दिशानिर्देश:\n• मौलिक और अप्रकाशित कार्य\n• विश्वविद्यालय प्रारूपण दिशानिर्देशों का पालन\n• न्यूनतम शब्द गणना (M.A. 15,000-30,000; Ph.D. 60,000+)\n• साहित्यिक चोरी जांच अनिवार्य"
        ]
      }
    ],
    quotes: [
      ["Dunleavy, P. (2003): \"The dissertation is the single most important piece of work that any academic will write.\" — Authoring a PhD", "डनलेवी (2003): \"शोध प्रबंध सबसे महत्वपूर्ण कार्य है जो कोई अकादमिक लिखेगा।\""],
      ["Kothari, C.R.: \"A thesis must demonstrate the researcher's capacity for independent investigation.\" — Research Methodology", "कोठारी: \"थीसिस को शोधकर्ता की स्वतंत्र जांच की क्षमता प्रदर्शित करनी चाहिए।\""],
      ["Phillips & Pugh (2010): \"Getting a PhD is about demonstrating the ability to do research at the doctoral level.\" — How to Get a PhD", "फिलिप्स और पफ: \"Ph.D. प्राप्त करना डॉक्टरल स्तर पर शोध करने की क्षमता प्रदर्शित करने के बारे में है।\""],
    ],
    evaluation: [
      "Dissertation writing is a rigorous academic exercise that develops essential research skills. However, the process faces challenges: inadequate supervision, lack of resources in many Indian universities, time constraints, and the pressure to produce original work. Many students struggle with the isolation of long-term research projects. The quality of dissertations varies significantly across institutions. Despite these challenges, the dissertation remains the gold standard for assessing research capability at the postgraduate level. UGC's Shodhganga initiative (digital repository of theses) has improved accessibility and reduced duplication.",
      "शोध प्रबंध लेखन एक कठोर अकादमिक अभ्यास है जो आवश्यक शोध कौशल विकसित करता है। हालांकि, प्रक्रिया चुनौतियों का सामना करती है: अपर्याप्त पर्यवेक्षण, संसाधनों की कमी, समय की कमी। कई छात्र दीर्घकालिक शोध की एकांतता से जूझते हैं। UGC की शोधगंगा पहल (थीसिस का डिजिटल भंडार) ने पहुंच में सुधार किया है।"
    ],
    conclusion: [
      "Writing a dissertation or thesis is the most significant academic undertaking for postgraduate students. It demands rigorous research skills, sustained effort, and scholarly integrity. A well-written dissertation not only fulfills degree requirements but also contributes to the body of knowledge in the discipline, develops critical thinking abilities, and prepares students for academic careers.",
      "शोध प्रबंध या थीसिस लिखना स्नातकोत्तर छात्रों के लिए सबसे महत्वपूर्ण अकादमिक उपक्रम है। इसके लिए कठोर शोध कौशल, निरंतर प्रयास और विद्वतापूर्ण अखंडता की आवश्यकता है।"
    ],
    shortQ: [
      ["What is a dissertation? How does it differ from a thesis?", "शोध प्रबंध क्या है? यह थीसिस से कैसे भिन्न है?"],
      ["List the chapters of a standard dissertation.", "मानक शोध प्रबंध के अध्यायों की सूची बनाएं।"],
      ["What is the role of a research supervisor?", "शोध पर्यवेक्षक की भूमिका क्या है?"],
      ["What is Shodhganga?", "शोधगंगा क्या है?"],
      ["What is viva-voce in the context of dissertation?", "शोध प्रबंध के संदर्भ में मौखिक परीक्षा क्या है?"],
    ],
    longQ: [
      ["Discuss the structure and process of writing a dissertation.", "शोध प्रबंध लिखने की संरचना और प्रक्रिया पर चर्चा करें।"],
      ["Explain the significance of literature review in dissertation writing.", "शोध प्रबंध लेखन में साहित्य समीक्षा के महत्व को समझाएं।"],
      ["What are the challenges faced by research scholars in India?", "भारत में शोध विद्वानों द्वारा सामना की जाने वाली चुनौतियां क्या हैं?"],
      ["Compare M.A. dissertation with Ph.D. thesis.", "M.A. शोध प्रबंध और Ph.D. थीसिस की तुलना करें।"],
      ["Discuss the ethical considerations in dissertation research.", "शोध प्रबंध शोध में नैतिक विचारों पर चर्चा करें।"],
    ],
    mcqs: [
      { q: ["Shodhganga is:", "शोधगंगा है:"], opts: [["A river", "एक नदी"], ["UGC digital repository of theses", "UGC थीसिस डिजिटल भंडार"], ["A book", "एक पुस्तक"], ["A university", "एक विश्वविद्यालय"]], correct: 1 },
      { q: ["The final oral examination of dissertation is called:", "शोध प्रबंध की अंतिम मौखिक परीक्षा कहलाती है:"], opts: [["Written test", "लिखित परीक्षा"], ["Viva-voce", "मौखिक परीक्षा"], ["Seminar", "सेमिनार"], ["Quiz", "प्रश्नोत्तरी"]], correct: 1 },
      { q: ["Literature review is usually in:", "साहित्य समीक्षा आमतौर पर किसमें होती है:"], opts: [["Chapter I", "अध्याय I"], ["Chapter II", "अध्याय II"], ["Chapter V", "अध्याय V"], ["Appendix", "परिशिष्ट"]], correct: 1 },
      { q: ["Minimum word count for Ph.D. thesis is usually:", "Ph.D. थीसिस की न्यूनतम शब्द गणना:"], opts: [["5,000", "5,000"], ["15,000", "15,000"], ["60,000+", "60,000+"], ["500", "500"]], correct: 2 },
      { q: ["Who wrote 'Authoring a PhD'?", "Authoring a PhD किसने लिखी?"], opts: [["Kothari", "कोठारी"], ["Dunleavy", "डनलेवी"], ["Kumar", "कुमार"], ["Phillips", "फिलिप्स"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Dissertation vs Thesis — key differences\n• UGC Shodhganga — digital repository mandate\n• UGC PhD regulations (2009, 2016 amended)\n• Plagiarism check requirements\n• Research ethics — ICSSR/UGC guidelines\n• Viva-voce process\n• Chapter structure of dissertation\n• Supervisor-scholar relationship",
      "UGC NET फोकस:\n• शोध प्रबंध बनाम थीसिस — अंतर\n• UGC शोधगंगा — डिजिटल भंडार\n• UGC Ph.D. नियम (2009, 2016)\n• साहित्यिक चोरी जांच\n• शोध नैतिकता — ICSSR/UGC\n• मौखिक परीक्षा प्रक्रिया"
    ],
    ugcQ: [
      ["Q: What is Shodhganga? A: UGC's digital repository of Indian theses and dissertations (INFLIBNET).", "प्र: शोधगंगा क्या है? उ: भारतीय थीसिस और शोध प्रबंधों का UGC डिजिटल भंडार (INFLIBNET)।"],
      ["Q: What are the UGC PhD regulations? A: Guidelines covering admission, coursework, synopsis, thesis submission, and viva.", "प्र: UGC PhD नियम क्या हैं? उ: प्रवेश, पाठ्यक्रम, सारांश, थीसिस प्रस्तुति और मौखिक परीक्षा संबंधी दिशानिर्देश।"],
    ],
  },

  // TOPIC 8
  {
    id: 't8', num: 8,
    title: ["Writing Letters, Applications & Preparing Resume", "पत्र, आवेदन लिखना और बायोडाटा (Resume) तैयार करना"],
    introduction: [
      "Writing letters, applications, and resumes are essential communication skills for academic and professional success. A formal letter is a structured form of written communication used for official purposes. An application is a specific type of formal letter requesting something — a job, admission, leave, or other formal request. A resume (or Curriculum Vitae/CV) is a document that summarizes an individual's education, work experience, skills, and achievements for potential employers. According to Kitty O. Locker (2006), \"Business communication, including letters and resumes, is the key to professional success.\" These skills are crucial for Political Science graduates entering careers in civil services, academia, journalism, NGOs, and the private sector.",
      "पत्र, आवेदन और बायोडाटा लिखना अकादमिक और पेशेवर सफलता के लिए आवश्यक संचार कौशल हैं। औपचारिक पत्र आधिकारिक उद्देश्यों के लिए उपयोग किया जाने वाला लिखित संचार का एक संरचित रूप है। आवेदन अनुरोध करने वाला एक विशिष्ट प्रकार का औपचारिक पत्र है। बायोडाटा (CV) व्यक्ति की शिक्षा, कार्य अनुभव, कौशल और उपलब्धियों का सारांश प्रस्तुत करने वाला दस्तावेज है। किट्टी ओ. लॉकर (2006): \"व्यापार संचार, पत्रों और बायोडाटा सहित, पेशेवर सफलता की कुंजी है।\""
    ],
    concepts: [
      {
        heading: ["Letter and Application Writing", "पत्र और आवेदन लेखन"],
        body: [
          "TYPES OF LETTERS:\n1. Formal Letters: Official correspondence — to authorities, organizations\n2. Informal Letters: Personal communication — to friends, family\n3. Semi-Formal: To known officials — teachers, mentors\n\nFORMAT OF FORMAL LETTER:\n• Sender's Address (top right/left)\n• Date\n• Receiver's Name, Designation, Address\n• Subject Line\n• Salutation (Dear Sir/Madam)\n• Body: Introduction → Main content → Closing\n• Complimentary Close (Yours faithfully/sincerely)\n• Signature and Name\n\nTYPES OF APPLICATIONS:\n1. Job Application: For employment positions\n2. Leave Application: Requesting leave from institution/employer\n3. Admission Application: For university/course admission\n4. Complaint Application: Raising grievances\n5. Transfer Application: Requesting transfer\n\nKey Principles:\n• Clarity and conciseness\n• Formal and respectful tone\n• Specific and to the point\n• Proper formatting\n• Error-free writing",
          "पत्र के प्रकार:\n1. औपचारिक पत्र: अधिकारियों, संगठनों को\n2. अनौपचारिक पत्र: मित्रों, परिवार को\n3. अर्ध-औपचारिक: परिचित अधिकारियों को\n\nऔपचारिक पत्र का प्रारूप:\n• प्रेषक का पता\n• तिथि\n• प्राप्तकर्ता का नाम, पदनाम, पता\n• विषय पंक्ति\n• अभिवादन\n• मुख्य भाग\n• समापन अभिवादन\n• हस्ताक्षर और नाम\n\nआवेदन के प्रकार:\n1. नौकरी आवेदन\n2. अवकाश आवेदन\n3. प्रवेश आवेदन\n4. शिकायत आवेदन\n5. स्थानांतरण आवेदन\n\nप्रमुख सिद्धांत:\n• स्पष्टता और संक्षिप्तता\n• औपचारिक और सम्मानजनक स्वर\n• त्रुटि-मुक्त लेखन"
        ]
      },
      {
        heading: ["Resume/CV Preparation", "बायोडाटा/CV तैयारी"],
        body: [
          "RESUME vs CV:\n• Resume: 1-2 pages, focused, for job applications (common in USA)\n• CV: Comprehensive, no page limit, includes all academic achievements (common in India, academia)\n\nSECTIONS OF A RESUME/CV:\n1. Personal Information: Name, contact details, email, LinkedIn\n2. Career Objective/Summary: Brief professional goal statement\n3. Educational Qualifications: Degrees, institutions, years, percentages/CGPA\n4. Work Experience: Positions held, responsibilities, achievements\n5. Skills: Technical, language, software proficiency\n6. Publications: Research papers, articles (for academic CVs)\n7. Awards & Achievements: Scholarships, honors, recognitions\n8. Extracurricular Activities: Leadership roles, community service\n9. References: 2-3 professional references\n\nTIPS FOR EFFECTIVE RESUME:\n• Tailor to the specific job/position\n• Use action verbs (managed, developed, analyzed)\n• Quantify achievements where possible\n• Keep format clean and professional\n• Use reverse chronological order\n• Proofread multiple times\n• Include keywords from the job description\n• Keep it updated",
          "बायोडाटा बनाम CV:\n• बायोडाटा: 1-2 पृष्ठ, केंद्रित (USA में सामान्य)\n• CV: व्यापक, कोई पृष्ठ सीमा नहीं (भारत, शिक्षा जगत में सामान्य)\n\nबायोडाटा/CV के खंड:\n1. व्यक्तिगत जानकारी: नाम, संपर्क, ईमेल\n2. करियर उद्देश्य: संक्षिप्त पेशेवर लक्ष्य\n3. शैक्षिक योग्यताएं: डिग्री, संस्थान, वर्ष, प्रतिशत\n4. कार्य अनुभव: पद, जिम्मेदारियां, उपलब्धियां\n5. कौशल: तकनीकी, भाषा, सॉफ्टवेयर\n6. प्रकाशन: शोध पत्र (अकादमिक CV के लिए)\n7. पुरस्कार और उपलब्धियां\n8. पाठ्येतर गतिविधियां\n9. संदर्भ: 2-3 पेशेवर संदर्भ\n\nप्रभावी बायोडाटा के सुझाव:\n• विशिष्ट नौकरी के लिए अनुकूलित करें\n• क्रिया क्रियाओं का उपयोग करें\n• उपलब्धियों को मापें\n• स्वच्छ और पेशेवर प्रारूप\n• उल्टे कालक्रम में"
        ]
      }
    ],
    quotes: [
      ["Locker, K.O. (2006): \"Business communication, including letters and resumes, is the key to professional success.\" — Business and Administrative Communication", "लॉकर (2006): \"व्यापार संचार, पत्रों और बायोडाटा सहित, पेशेवर सफलता की कुंजी है।\""],
      ["Bovée & Thill (2014): \"A well-crafted resume opens doors; a poorly written one closes them.\" — Business Communication Today", "बोवी और थिल: \"एक अच्छी तरह से तैयार बायोडाटा दरवाजे खोलता है; खराब लिखा दरवाजे बंद करता है।\""],
      ["Murphy & Hildebrandt: \"Effective letters are clear, complete, concise, concrete, and courteous.\" — Effective Business Communications", "मर्फी और हिल्डेब्रांट: \"प्रभावी पत्र स्पष्ट, पूर्ण, संक्षिप्त, ठोस और विनम्र होते हैं।\""],
    ],
    evaluation: [
      "Letter writing, though considered a traditional skill, remains relevant in the digital age. While email has replaced many forms of correspondence, formal letters and applications are still required for official purposes in Indian administration. Resume writing has evolved significantly with online platforms (LinkedIn) and digital portfolios. The challenge lies in adapting traditional skills to digital formats while maintaining professional standards. Critics argue that standardized resume formats can disadvantage non-traditional candidates, but a well-prepared resume remains the most effective tool for career advancement.",
      "पत्र लेखन, पारंपरिक कौशल होते हुए भी, डिजिटल युग में प्रासंगिक है। ईमेल ने कई पत्राचार रूपों को बदल दिया है, लेकिन औपचारिक पत्र भारतीय प्रशासन में आवश्यक हैं। बायोडाटा लेखन ऑनलाइन प्लेटफॉर्मों (LinkedIn) के साथ काफी विकसित हुआ है। एक अच्छी तरह से तैयार बायोडाटा करियर उन्नति के लिए सबसे प्रभावी उपकरण बना हुआ है।"
    ],
    conclusion: [
      "Writing letters, applications, and resumes are fundamental skills for academic and professional communication. These skills enable individuals to present themselves effectively in formal settings, apply for opportunities, and communicate with authorities. For Political Science graduates, mastering these skills is crucial for careers in civil services, academia, international organizations, journalism, and the corporate sector.",
      "पत्र, आवेदन और बायोडाटा लिखना अकादमिक और पेशेवर संचार के लिए मौलिक कौशल हैं। ये कौशल व्यक्तियों को औपचारिक सेटिंग्स में प्रभावी ढंग से प्रस्तुत करने, अवसरों के लिए आवेदन करने और अधिकारियों से संवाद करने में सक्षम बनाते हैं।"
    ],
    shortQ: [
      ["What is the format of a formal letter?", "औपचारिक पत्र का प्रारूप क्या है?"],
      ["Differentiate between resume and CV.", "बायोडाटा और CV में अंतर करें।"],
      ["What are the key sections of a resume?", "बायोडाटा के प्रमुख खंड क्या हैं?"],
      ["List any five types of applications.", "किन्हीं पांच प्रकार के आवेदनों की सूची बनाएं।"],
      ["What is a career objective in a resume?", "बायोडाटा में करियर उद्देश्य क्या है?"],
    ],
    longQ: [
      ["Discuss the types, format, and principles of formal letter writing.", "औपचारिक पत्र लेखन के प्रकार, प्रारूप और सिद्धांतों पर चर्चा करें।"],
      ["Explain how to prepare an effective resume with examples.", "उदाहरणों सहित प्रभावी बायोडाटा कैसे तैयार करें, समझाएं।"],
      ["Compare formal and informal letter writing.", "औपचारिक और अनौपचारिक पत्र लेखन की तुलना करें।"],
      ["Write a job application letter for the post of Assistant Professor.", "सहायक प्रोफेसर पद के लिए नौकरी आवेदन पत्र लिखें।"],
      ["\"Communication skills are essential for career success.\" Discuss in the context of letter and resume writing.", "\"संचार कौशल करियर सफलता के लिए आवश्यक हैं।\" पत्र और बायोडाटा लेखन के संदर्भ में चर्चा करें।"],
    ],
    mcqs: [
      { q: ["A formal letter ends with:", "औपचारिक पत्र समाप्त होता है:"], opts: [["Bye bye", "बाय बाय"], ["Yours faithfully/sincerely", "भवदीय/सादर"], ["Take care", "ध्यान रखें"], ["XOXO", "XOXO"]], correct: 1 },
      { q: ["Resume is typically:", "बायोडाटा आमतौर पर होता है:"], opts: [["50 pages", "50 पृष्ठ"], ["1-2 pages", "1-2 पृष्ठ"], ["100 pages", "100 पृष्ठ"], ["No limit", "कोई सीमा नहीं"]], correct: 1 },
      { q: ["CV stands for:", "CV का पूर्ण रूप:"], opts: [["Curriculum Vitae", "Curriculum Vitae"], ["Current Version", "Current Version"], ["Career Value", "Career Value"], ["Central Vote", "Central Vote"]], correct: 0 },
      { q: ["Which is NOT a type of formal application?", "किस प्रकार का औपचारिक आवेदन नहीं है?"], opts: [["Job application", "नौकरी आवेदन"], ["Leave application", "अवकाश आवेदन"], ["Love letter", "प्रेम पत्र"], ["Complaint application", "शिकायत आवेदन"]], correct: 2 },
      { q: ["In resume, educational qualifications are listed in:", "बायोडाटा में शैक्षिक योग्यताएं किस क्रम में:"], opts: [["Random order", "यादृच्छिक"], ["Chronological order", "कालानुक्रमिक"], ["Reverse chronological order", "उल्टे कालानुक्रमिक"], ["Alphabetical order", "वर्णानुक्रम"]], correct: 2 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Formal vs Informal vs Semi-formal letters\n• Format: Block, Semi-block, Modified block\n• Resume vs CV — differences and contexts\n• 7 Cs of Communication: Clear, Concise, Concrete, Correct, Coherent, Complete, Courteous\n• Application writing for government jobs\n• Communication barriers in formal writing\n• Digital communication: Email etiquette",
      "UGC NET फोकस:\n• औपचारिक बनाम अनौपचारिक पत्र\n• प्रारूप: ब्लॉक, सेमी-ब्लॉक\n• बायोडाटा बनाम CV — अंतर\n• संचार के 7 C: स्पष्ट, संक्षिप्त, ठोस, सही, सुसंगत, पूर्ण, विनम्र\n• ईमेल शिष्टाचार"
    ],
    ugcQ: [
      ["Q: What are the 7 Cs of Communication? A: Clear, Concise, Concrete, Correct, Coherent, Complete, Courteous.", "प्र: संचार के 7 C? उ: स्पष्ट, संक्षिप्त, ठोस, सही, सुसंगत, पूर्ण, विनम्र।"],
      ["Q: Full form of CV? A: Curriculum Vitae (Latin for 'course of life').", "प्र: CV का पूर्ण रूप? उ: Curriculum Vitae (लैटिन: 'जीवन का मार्ग')।"],
    ],
  },
];

/* ─── COMPONENT ─── */
export default function S205DetailedNotesPage() {
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
              PSC-S-205: Academic Writing & Communication Skill
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t('PG Semester II — Detailed Bilingual Notes', 'PG सेमेस्टर II — विस्तृत द्विभाषी नोट्स')}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-600 to-orange-700 rounded-2xl p-5 text-white mb-8">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">{t('Paper Code: PSC-S-205', 'पेपर कोड: PSC-S-205')}</span>
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
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
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
            {t('All 8 Topics Complete! Full PSC-S-205 notes with 5-part structure, MCQs & UGC NET Prep ready.', 'सभी 8 विषय पूर्ण! 5-भाग संरचना, MCQ और UGC NET तैयारी के साथ संपूर्ण PSC-S-205 नोट्स तैयार।')}
          </p>
        </div>
      </div>
    </div>
  );
}
