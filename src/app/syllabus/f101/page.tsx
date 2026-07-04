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

/* ─── ALL 9 TOPIC NOTES ─── */
const NOTES: TopicNote[] = [
  // TOPIC 1
  {
    id: 't1', num: 1,
    title: ["Characteristics and Preamble of the Indian Constitution", "भारतीय संविधान की विशेषताएं और प्रस्तावना"],
    introduction: [
      "The Constitution of India, adopted on 26th November 1949 and enforced on 26th January 1950, is the supreme law of the land. It is the longest written constitution in the world, originally containing 395 Articles, 22 Parts, and 8 Schedules. The Preamble, described as the \"soul of the Constitution\" by Pandit Thakur Das Bhargava and as the \"identity card\" by N.A. Palkhivala, encapsulates the philosophy and objectives of the Constitution. It was inspired by the \"Objectives Resolution\" moved by Jawaharlal Nehru on December 13, 1946. The Constitution establishes India as a Sovereign, Socialist, Secular, Democratic Republic.",
      "भारत का संविधान, 26 नवंबर 1949 को अंगीकृत और 26 जनवरी 1950 को लागू, देश का सर्वोच्च कानून है। यह दुनिया का सबसे लंबा लिखित संविधान है। प्रस्तावना, जिसे पंडित ठाकुर दास भार्गव ने \"संविधान की आत्मा\" और एन.ए. पालखीवाला ने \"पहचान पत्र\" कहा, संविधान के दर्शन और उद्देश्यों को समाहित करती है। यह 13 दिसंबर 1946 को जवाहरलाल नेहरू द्वारा प्रस्तुत \"उद्देश्य प्रस्ताव\" से प्रेरित थी।"
    ],
    concepts: [
      {
        heading: ["Salient Features of the Indian Constitution", "भारतीय संविधान की प्रमुख विशेषताएं"],
        body: [
          "1. Lengthiest Written Constitution: Originally 395 Articles, now over 470 Articles with 25 Parts and 12 Schedules.\n2. Drawn from Various Sources: Parliamentary system (UK), Fundamental Rights & Judicial Review (USA), DPSPs (Ireland), Federal structure (Canada), Emergency provisions (Germany), Procedure established by law (Japan).\n3. Parliamentary Form of Government: Based on Westminster model — nominal head (President) and real executive (PM).\n4. Unique Blend of Rigidity and Flexibility: Article 368 provides a balanced amendment procedure.\n5. Fundamental Rights (Part III, Art 12-35): Originally 7 rights; Right to Property (Art 31) removed by 44th Amendment, now a constitutional right under Art 300A.\n6. Directive Principles of State Policy (Part IV, Art 36-51): Non-justiciable guidelines for the State, inspired by the Irish Constitution.\n7. Fundamental Duties (Part IVA, Art 51A): Added by 42nd Amendment, 1976, on recommendation of Swaran Singh Committee.\n8. Independent Judiciary: Supreme Court at apex; integrated single judicial system.\n9. Universal Adult Franchise (Art 326): Voting right for all citizens aged 18+ (61st Amendment, 1989).\n10. Single Citizenship.\n11. Secular State: \"Secular\" added to Preamble by 42nd Amendment. No state religion.\n12. Emergency Provisions (Part XVIII): National Emergency (Art 352), President's Rule (Art 356), Financial Emergency (Art 360).",
          "1. सबसे लंबा लिखित संविधान: मूलतः 395 अनुच्छेद, अब 470+ अनुच्छेद, 25 भाग और 12 अनुसूचियां।\n2. विभिन्न स्रोतों से लिया गया: संसदीय प्रणाली (UK), मौलिक अधिकार (USA), DPSP (आयरलैंड), संघीय ढांचा (कनाडा), आपातकाल (जर्मनी)।\n3. संसदीय शासन प्रणाली: वेस्टमिंस्टर मॉडल पर आधारित।\n4. लचीलापन और कठोरता का अनूठा मिश्रण: अनुच्छेद 368।\n5. मौलिक अधिकार (भाग III, अनु. 12-35): मूलतः 7 अधिकार, 44वें संशोधन से 6।\n6. राज्य के नीति निदेशक तत्व (भाग IV, अनु. 36-51): आयरिश संविधान से प्रेरित।\n7. मौलिक कर्तव्य (भाग IVA, अनु. 51A): 42वें संशोधन द्वारा जोड़े गए।\n8. स्वतंत्र न्यायपालिका: सर्वोच्च न्यायालय के साथ एकीकृत प्रणाली।\n9. सार्वभौमिक वयस्क मताधिकार: अनुच्छेद 326।\n10. एकल नागरिकता।\n11. धर्मनिरपेक्ष राज्य।\n12. आपातकालीन प्रावधान (भाग XVIII): अनु. 352, 356, 360।"
        ]
      },
      {
        heading: ["The Preamble: Text, Significance & Key Words", "प्रस्तावना: पाठ, महत्व और प्रमुख शब्द"],
        body: [
          "TEXT: \"WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and to secure to all its citizens: JUSTICE, social, economic and political; LIBERTY of thought, expression, belief, faith and worship; EQUALITY of status and of opportunity; and to promote among them all FRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation...\"\n\nKEY WORDS:\n• Sovereign: India is independent; not a dependency of any other nation.\n• Socialist: Added by 42nd Amendment (1976). Democratic socialism, not state socialism.\n• Secular: Added by 42nd Amendment. All religions treated equally. S.R. Bommai v. Union of India (1994): Secularism is Basic Structure.\n• Democratic: Representative parliamentary democracy based on universal adult franchise.\n• Republic: Head of state (President) is elected, not hereditary.\n\nIS THE PREAMBLE PART OF THE CONSTITUTION?\n• Berubari Union Case (1960): SC held Preamble is NOT part of the Constitution.\n• Kesavananda Bharati Case (1973): SC reversed — Preamble IS part of the Constitution.\n• LIC of India Case (1995): SC reaffirmed Preamble is integral part of the Constitution.\n\nCAN THE PREAMBLE BE AMENDED?\n• Yes, under Article 368, provided Basic Structure is not destroyed.\n• 42nd Amendment (1976) added three words: \"Socialist\", \"Secular\", and \"Integrity\".",
          "पाठ: \"हम, भारत के लोग, भारत को एक संप्रभु समाजवादी धर्मनिरपेक्ष लोकतांत्रिक गणराज्य बनाने के लिए...\"\n\nप्रमुख शब्द:\n• संप्रभु: भारत स्वतंत्र है, किसी अन्य राष्ट्र पर निर्भर नहीं।\n• समाजवादी: 42वें संशोधन द्वारा जोड़ा। लोकतांत्रिक समाजवाद।\n• धर्मनिरपेक्ष: 42वें संशोधन द्वारा जोड़ा। एस.आर. बोम्मई (1994): धर्मनिरपेक्षता मूल ढांचा।\n• लोकतांत्रिक: सार्वभौमिक वयस्क मताधिकार पर आधारित।\n• गणराज्य: राज्य प्रमुख निर्वाचित।\n\nक्या प्रस्तावना संविधान का भाग है?\n• बेरुबारी केस (1960): नहीं।\n• केशवानंड भारती (1973): हाँ।\n• LIC केस (1995): हाँ, अभिन्न अंग।"
        ]
      }
    ],
    quotes: [
      ["Dr. B.R. Ambedkar: \"The Constitution is not a mere lawyers' document, it is a vehicle of Life.\"", "डॉ. आंबेडकर: \"संविधान केवल वकीलों का दस्तावेज नहीं, यह जीवन का वाहन है।\""],
      ["Granville Austin: \"The Indian Constitution is first and foremost a social document.\" — The Indian Constitution: Cornerstone of a Nation (1966)", "ग्रैनविले ऑस्टिन: \"भारतीय संविधान सबसे पहले एक सामाजिक दस्तावेज है।\""],
      ["N.A. Palkhivala: \"The Preamble is the identity card of the Constitution.\"", "एन.ए. पालखीवाला: \"प्रस्तावना संविधान का पहचान पत्र है।\""],
      ["Dr. B.L. Fadia: \"The basic philosophy of the Constitution is reflected in the Preamble.\" — Indian Government and Politics (Sahitya Bhawan)", "डॉ. बी.एल. फाडिया: \"संविधान का मूल दर्शन प्रस्तावना में परिलक्षित होता है।\""],
      ["J.C. Johari: \"The Indian Constitution is a unique blend of borrowed provisions and indigenous elements.\" — Indian Political System", "जे.सी. जौहरी: \"भारतीय संविधान उधार प्रावधानों और देशी तत्वों का अनूठा मिश्रण है।\""],
    ],
    evaluation: [
      "While praised for its comprehensive nature and forward-looking vision, the Indian Constitution faces several criticisms. Critics argue it is too lengthy and detailed, making it cumbersome. The extensive borrowing from foreign constitutions has led some to call it a \"bag of borrowings.\" Emergency provisions (Art 352, 356) were misused during the 1975 Emergency. However, the Constitution has shown remarkable resilience through 105+ amendments. The Basic Structure doctrine (Kesavananda Bharati, 1973) serves as an effective check on unlimited amending power. The Preamble, though non-justiciable, has guided judicial interpretation as the moral compass of the nation.",
      "यद्यपि भारतीय संविधान की व्यापकता और दूरदर्शिता के लिए प्रशंसा होती है, इसकी आलोचनाएं भी हैं। आलोचक इसे बहुत लंबा और जटिल मानते हैं। विदेशी संविधानों से व्यापक उधारी के कारण इसे \"उधार का थैला\" कहा गया। 1975 के आपातकाल में अनु. 352 और 356 का दुरुपयोग हुआ। फिर भी, संविधान ने 105+ संशोधनों के माध्यम से लचीलापन दिखाया है। मूल ढांचा सिद्धांत (केशवानंद भारती) असीमित संशोधन शक्ति पर प्रभावी नियंत्रण करता है।"
    ],
    conclusion: [
      "The Indian Constitution stands as a testament to the vision of the founding fathers. The Preamble serves as the guiding light embodying the aspirations of \"We, the People of India.\" As a living document, the Constitution continues to evolve through amendments and judicial interpretations, adapting to changing needs while preserving its basic structure and fundamental values.",
      "भारतीय संविधान संस्थापकों की दृष्टि का प्रमाण है। प्रस्तावना \"हम, भारत के लोग\" की आकांक्षाओं को मूर्त रूप देती है। एक जीवंत दस्तावेज के रूप में, संविधान संशोधनों और न्यायिक व्याख्याओं से विकसित होता रहता है।"
    ],
    shortQ: [
      ["What is the significance of the Preamble to the Indian Constitution?", "भारतीय संविधान की प्रस्तावना का क्या महत्व है?"],
      ["List any five salient features of the Indian Constitution.", "भारतीय संविधान की पांच प्रमुख विशेषताएं बताएं।"],
      ["Is the Preamble a part of the Constitution? Discuss with case laws.", "क्या प्रस्तावना संविधान का भाग है? केस कानूनों से चर्चा करें।"],
      ["What is the importance of Fundamental Duties?", "मौलिक कर्तव्यों का क्या महत्व है?"],
      ["Which case established the Basic Structure doctrine?", "किस मामले ने मूल ढांचा सिद्धांत स्थापित किया?"],
    ],
    longQ: [
      ["Discuss in detail the salient features of the Indian Constitution.", "भारतीय संविधान की प्रमुख विशेषताओं पर विस्तार से चर्चा करें।"],
      ["Explain the significance of the Preamble. Is it a part of the Constitution? Discuss with reference to Supreme Court judgments.", "प्रस्तावना के महत्व को समझाएं। क्या यह संविधान का भाग है? SC निर्णयों से चर्चा करें।"],
      ["Critically examine: \"The Indian Constitution is a bag of borrowings.\"", "\"भारतीय संविधान उधार का थैला है\" — आलोचनात्मक परीक्षण करें।"],
      ["Discuss the amendment procedure under Article 368.", "अनुच्छेद 368 के तहत संशोधन प्रक्रिया पर चर्चा करें।"],
      ["\"The Preamble is the key to the minds of the framers.\" Elucidate.", "\"प्रस्तावना निर्माताओं के मन की कुंजी है।\" व्याख्या करें।"],
    ],
    mcqs: [
      { q: ["The word 'Socialist' was added to the Preamble by:", "प्रस्तावना में 'समाजवादी' शब्द किस संशोधन से जोड़ा गया?"], opts: [["24th Amendment", "24वां संशोधन"], ["42nd Amendment", "42वां संशोधन"], ["44th Amendment", "44वां संशोधन"], ["73rd Amendment", "73वां संशोधन"]], correct: 1 },
      { q: ["In which case was the Preamble declared part of the Constitution?", "किस मामले में प्रस्तावना संविधान का भाग घोषित हुई?"], opts: [["Berubari Union (1960)", "बेरुबारी यूनियन"], ["Golaknath (1967)", "गोलकनाथ"], ["Kesavananda Bharati (1973)", "केशवानंद भारती"], ["Minerva Mills (1980)", "मिनर्वा मिल्स"]], correct: 2 },
      { q: ["Fundamental Duties are borrowed from which country?", "मौलिक कर्तव्य किस देश से लिए गए?"], opts: [["USA", "USA"], ["UK", "UK"], ["USSR", "USSR"], ["France", "फ्रांस"]], correct: 2 },
      { q: ["How many times has the Preamble been amended?", "प्रस्तावना में कितनी बार संशोधन हुआ?"], opts: [["Never", "कभी नहीं"], ["Once", "एक बार"], ["Twice", "दो बार"], ["Three times", "तीन बार"]], correct: 1 },
      { q: ["Which Article provides Universal Adult Franchise?", "कौन सा अनुच्छेद सार्वभौमिक वयस्क मताधिकार देता है?"], opts: [["Art 324", "अनु. 324"], ["Art 325", "अनु. 325"], ["Art 326", "अनु. 326"], ["Art 327", "अनु. 327"]], correct: 2 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Preamble amendability — 42nd Amendment\n• Kesavananda Bharati (1973) — Basic Structure\n• Berubari (1960) vs Kesavananda on Preamble status\n• Objectives Resolution (Nehru, Dec 13, 1946)\n• S.R. Bommai (1994) — Secularism as Basic Structure\n• Maneka Gandhi (1978) — Art 21 expansion\n• I.R. Coelho (2007) — 9th Schedule judicial review\n• Key books: D.D. Basu, Granville Austin\n• Swaran Singh Committee — Fundamental Duties",
      "UGC NET फोकस:\n• प्रस्तावना संशोधनीयता — 42वां संशोधन\n• केशवानंद भारती (1973) — मूल ढांचा\n• बेरुबारी बनाम केशवानंद — प्रस्तावना स्थिति\n• उद्देश्य प्रस्ताव (नेहरू, 1946)\n• एस.आर. बोम्मई (1994) — धर्मनिरपेक्षता\n• मेनका गांधी (1978) — अनु. 21\n• स्वर्ण सिंह समिति — मौलिक कर्तव्य"
    ],
    ugcQ: [
      ["Q: Which case held Preamble is NOT part of the Constitution? A: Berubari Union Case, 1960.", "प्र: किस मामले में प्रस्तावना संविधान का भाग नहीं? उ: बेरुबारी यूनियन, 1960।"],
      ["Q: \"Fraternity\" in the Preamble is inspired by which country? A: France.", "प्र: प्रस्तावना में 'बंधुता' किस देश से प्रेरित? उ: फ्रांस।"],
      ["Q: How many words were added to the Preamble by 42nd Amendment? A: Three — Socialist, Secular, Integrity.", "प्र: 42वें संशोधन से प्रस्तावना में कितने शब्द जोड़े गए? उ: तीन।"],
      ["Q: Constitution adopted on? A: Nov 26, 1949 (Constitution Day).", "प्र: संविधान कब अंगीकृत? उ: 26 नवंबर 1949।"],
      ["Q: Constitution enforced on? A: Jan 26, 1950 (Republic Day).", "प्र: संविधान कब लागू? उ: 26 जनवरी 1950।"],
    ],
  },

  // TOPIC 2
  {
    id: 't2', num: 2,
    title: ["Federalism in India", "भारत में संघवाद"],
    introduction: [
      "Federalism is a system of governance in which power is constitutionally divided between a central authority and constituent political units (states). Article 1 declares: \"India, that is Bharat, shall be a Union of States.\" The term \"Union\" was deliberately chosen over \"Federation\" to emphasize the indestructible nature of the Indian Union. Dr. Ambedkar clarified that no state has the right to secede. K.C. Wheare described the Indian Constitution as \"quasi-federal\" while Granville Austin called it \"cooperative federalism.\"",
      "संघवाद शासन की एक प्रणाली है जिसमें शक्ति संवैधानिक रूप से केंद्र और राज्यों के बीच विभाजित होती है। अनुच्छेद 1 घोषित करता है: \"भारत, अर्थात इंडिया, राज्यों का एक संघ होगा।\" डॉ. आंबेडकर ने स्पष्ट किया कि किसी राज्य को अलग होने का अधिकार नहीं है। के.सी. व्हीयर ने भारतीय संविधान को \"अर्ध-संघीय\" और ग्रैनविले ऑस्टिन ने \"सहकारी संघवाद\" कहा।"
    ],
    concepts: [
      {
        heading: ["Federal Features", "संघीय विशेषताएं"],
        body: [
          "1. Dual Polity: Centre and States with defined jurisdictions (Art 245-255).\n2. Written Constitution: Division of powers requires a written, supreme document.\n3. Division of Powers: Seventh Schedule — Union List (100 subjects), State List (61), Concurrent List (52).\n4. Supremacy of the Constitution: Both Centre and States derive authority from it.\n5. Independent Judiciary: Supreme Court as final arbiter of Centre-State disputes (Art 131).\n6. Bicameral Legislature: Rajya Sabha represents States (Art 80).\n7. Rigid Amendment: Some provisions require ratification by half the state legislatures.",
          "1. दोहरी राजनीति: केंद्र और राज्य — परिभाषित अधिकार क्षेत्र।\n2. शक्तियों का विभाजन: सातवीं अनुसूची — संघ सूची (100), राज्य सूची (61), समवर्ती सूची (52)।\n3. संविधान की सर्वोच्चता।\n4. स्वतंत्र न्यायपालिका: SC केंद्र-राज्य विवादों का अंतिम मध्यस्थ।\n5. द्विसदनीय विधायिका: राज्यसभा (अनु. 80)।\n6. कठोर संशोधन प्रक्रिया: आधे राज्यों का अनुसमर्थन।"
        ]
      },
      {
        heading: ["Unitary Features / Non-Federal Features", "एकात्मक/गैर-संघीय विशेषताएं"],
        body: [
          "1. Strong Centre: Union List more important; residual powers with Centre (Art 248).\n2. Single Constitution and Single Citizenship.\n3. Emergency Provisions (Art 352, 356, 360): Structure becomes virtually unitary.\n4. Appointment of Governor by President (Art 155): Governor acts as agent of Centre.\n5. Parliament can legislate on State subjects under certain conditions (Art 249, 250, 252, 253).\n6. All-India Services (IAS, IPS, IFS) controlled by Centre.\n7. Integrated Judiciary: Single hierarchy from SC to subordinate courts.",
          "1. मजबूत केंद्र: अवशिष्ट शक्तियां केंद्र के पास (अनु. 248)।\n2. एकल संविधान और एकल नागरिकता।\n3. आपातकाल प्रावधान: संरचना लगभग एकात्मक बन जाती है।\n4. राज्यपाल की नियुक्ति राष्ट्रपति द्वारा (अनु. 155)।\n5. संसद राज्य विषयों पर कानून बना सकती है (अनु. 249-253)।\n6. अखिल भारतीय सेवाएं केंद्र द्वारा नियंत्रित।\n7. एकीकृत न्यायपालिका।"
        ]
      },
      {
        heading: ["Centre-State Relations", "केंद्र-राज्य संबंध"],
        body: [
          "A. Legislative (Art 245-255): Parliament can legislate on State subjects — Art 249 (RS resolution), Art 250 (Emergency), Art 252 (State request), Art 253 (international treaty). Repugnancy — Union law prevails (Art 254).\n\nB. Administrative (Art 256-263): States must comply with Union laws. Centre gives directions. Inter-State Council (Art 263) established 1990 on Sarkaria Commission recommendation.\n\nC. Financial (Art 264-293): Finance Commission every 5 years (Art 280). GST Council (Art 279A — 101st Amendment, 2016). Grants-in-aid (Art 275).",
          "A. विधायी: संसद राज्य विषयों पर कानून बना सकती है — अनु. 249, 250, 252, 253। प्रतिकूलता पर संघ कानून प्रभावी (अनु. 254)।\n\nB. प्रशासनिक: अंतर-राज्य परिषद (अनु. 263, सरकारिया आयोग पर 1990 में स्थापित)।\n\nC. वित्तीय: वित्त आयोग हर 5 वर्ष (अनु. 280)। GST परिषद (अनु. 279A, 101वां संशोधन 2016)।"
        ]
      }
    ],
    quotes: [
      ["K.C. Wheare: \"The Indian Constitution establishes a system which is at the most quasi-federal.\"", "के.सी. व्हीयर: \"भारतीय संविधान अधिकतम अर्ध-संघीय प्रणाली स्थापित करता है।\""],
      ["Dr. Ambedkar: \"The Constitution is a Federal Constitution... States are not mere administrative agencies.\"", "डॉ. आंबेडकर: \"संविधान एक संघीय संविधान है... राज्य मात्र प्रशासनिक एजेंसियां नहीं।\""],
      ["Dr. B.L. Fadia: \"Federalism in India is not a static concept but has evolved through judicial interpretations.\"", "डॉ. बी.एल. फाडिया: \"भारत में संघवाद स्थिर नहीं, न्यायिक व्याख्याओं से विकसित हुआ है।\""],
      ["Granville Austin: \"Indian federalism is a functional response to the needs of a diverse and plural society.\"", "ग्रैनविले ऑस्टिन: \"भारतीय संघवाद विविध समाज की आवश्यकताओं की प्रतिक्रिया है।\""],
    ],
    evaluation: [
      "The strong central bias is necessary for national unity in a diverse country with a history of partition. However, misuse of Article 356, Governors as 'agents of the Centre,' and financial dependence of States indicate over-centralization. Coalition politics (1989-2014) strengthened federalism. The Supreme Court in S.R. Bommai (1994) limited misuse of Article 356, declaring federalism part of the Basic Structure. GST reform, while unifying economically, reduced States' fiscal autonomy. The balance between central coordination and state autonomy remains a vital constitutional dynamic.",
      "मजबूत केंद्रीय पूर्वाग्रह राष्ट्रीय एकता के लिए आवश्यक है, पर अनु. 356 का दुरुपयोग और राज्यों की वित्तीय निर्भरता अति-केंद्रीकरण दर्शाते हैं। गठबंधन राजनीति (1989-2014) ने संघवाद मजबूत किया। एस.आर. बोम्मई (1994) में SC ने अनु. 356 के दुरुपयोग को सीमित किया और संघवाद को मूल ढांचा घोषित किया।"
    ],
    conclusion: [
      "Indian federalism is a unique experiment blending federal and unitary features. It has accommodated regional aspirations while maintaining national integrity. The dynamics continue evolving through political developments, judicial pronouncements, and constitutional reforms like GST.",
      "भारतीय संघवाद संघीय और एकात्मक विशेषताओं का अनूठा मिश्रण है। इसने क्षेत्रीय आकांक्षाओं को समायोजित कर राष्ट्रीय अखंडता बनाए रखी।"
    ],
    shortQ: [
      ["Why is India described as 'quasi-federal'?", "भारत को 'अर्ध-संघीय' क्यों कहा जाता है?"],
      ["What are the legislative relations between Centre and States?", "केंद्र-राज्य विधायी संबंध क्या हैं?"],
      ["Explain the role of the Finance Commission.", "वित्त आयोग की भूमिका समझाएं।"],
      ["Significance of S.R. Bommai case?", "एस.आर. बोम्मई मामले का महत्व?"],
      ["What is the GST Council?", "GST परिषद क्या है?"],
    ],
    longQ: [
      ["Discuss federal and unitary features. Is India a true federation?", "संघीय-एकात्मक विशेषताओं पर चर्चा करें। क्या भारत सच्चा संघ है?"],
      ["Critically examine Centre-State relations in India.", "भारत में केंद्र-राज्य संबंधों का आलोचनात्मक परीक्षण करें।"],
      ["Role of Governor in Indian federalism.", "भारतीय संघवाद में राज्यपाल की भूमिका।"],
      ["Impact of emergency provisions on federalism.", "संघवाद पर आपातकाल प्रावधानों का प्रभाव।"],
      ["Role of Finance Commission and GST Council.", "वित्त आयोग और GST परिषद की भूमिका।"],
    ],
    mcqs: [
      { q: ["Who called Indian Constitution 'quasi-federal'?", "भारतीय संविधान को 'अर्ध-संघीय' किसने कहा?"], opts: [["Granville Austin", "ग्रैनविले ऑस्टिन"], ["K.C. Wheare", "के.सी. व्हीयर"], ["Ivor Jennings", "आइवर जेनिंग्स"], ["D.D. Basu", "डी.डी. बासु"]], correct: 1 },
      { q: ["Inter-State Council is under which Article?", "अंतर-राज्य परिषद किस अनुच्छेद में?"], opts: [["Art 262", "अनु. 262"], ["Art 263", "अनु. 263"], ["Art 264", "अनु. 264"], ["Art 280", "अनु. 280"]], correct: 1 },
      { q: ["Sarkaria Commission related to:", "सरकारिया आयोग संबंधित:"], opts: [["Electoral Reforms", "चुनाव सुधार"], ["Centre-State Relations", "केंद्र-राज्य संबंध"], ["Judicial Reforms", "न्यायिक सुधार"], ["Police Reforms", "पुलिस सुधार"]], correct: 1 },
      { q: ["Federalism is Basic Structure per which case?", "संघवाद मूल ढांचा किस मामले में?"], opts: [["Kesavananda Bharati", "केशवानंद भारती"], ["S.R. Bommai", "एस.आर. बोम्मई"], ["Golaknath", "गोलकनाथ"], ["Minerva Mills", "मिनर्वा मिल्स"]], correct: 1 },
      { q: ["Residual powers vest with:", "अवशिष्ट शक्तियां किसके पास?"], opts: [["States", "राज्य"], ["Centre", "केंद्र"], ["Both", "दोनों"], ["Supreme Court", "सर्वोच्च न्यायालय"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• \"Union\" vs \"Federation\" — Art 1\n• K.C. Wheare — quasi-federal\n• S.R. Bommai (1994) — Art 356 limits, federalism as Basic Structure\n• Sarkaria Commission (1983), Punchhi Commission (2007)\n• Art 249, 250, 252, 253 — Parliament legislating on State subjects\n• 42nd Amendment — 5 subjects shifted to Concurrent List\n• 101st Amendment, 2016 — GST, Art 246A, 279A\n• Finance Commission Art 280 — 15th FC (N.K. Singh)",
      "UGC NET फोकस:\n• \"संघ\" बनाम \"फेडरेशन\" — अनु. 1\n• के.सी. व्हीयर — अर्ध-संघीय\n• एस.आर. बोम्मई (1994)\n• सरकारिया आयोग, पुंछी आयोग\n• 42वां संशोधन — 5 विषय समवर्ती सूची में\n• 101वां संशोधन — GST\n• वित्त आयोग अनु. 280"
    ],
    ugcQ: [
      ["Q: 42nd Amendment shifted 5 subjects from which List to which? A: State List to Concurrent List.", "प्र: 42वें संशोधन ने 5 विषय कहां से कहां स्थानांतरित? उ: राज्य सूची से समवर्ती सूची।"],
      ["Q: Inter-State Council established on whose recommendation? A: Sarkaria Commission.", "प्र: अंतर-राज्य परिषद किसकी सिफारिश पर? उ: सरकारिया आयोग।"],
      ["Q: Art 250 allows Parliament to legislate on State subjects during? A: National Emergency.", "प्र: अनु. 250 संसद को राज्य विषयों पर कब कानून बनाने देता है? उ: राष्ट्रीय आपातकाल में।"],
    ],
  },

  // TOPIC 3
  {
    id: 't3', num: 3,
    title: ["State: Definition, Elements and Nature", "राज्य: परिभाषा, तत्व और प्रकृति"],
    introduction: [
      "The State is the central concept of Political Science. Derived from Latin 'status,' it refers to a politically organized community under a single government. The modern nation-state system emerged from the Treaty of Westphalia (1648). Aristotle: \"Man is by nature a political animal.\" Woodrow Wilson defined State as \"a people organized for law within a definite territory.\" Max Weber: \"a human community that claims the monopoly of the legitimate use of physical force within a given territory.\" Harold Laski: \"a territorial society divided into government and subjects.\"",
      "राज्य राजनीति विज्ञान की केंद्रीय अवधारणा है। लैटिन 'status' से व्युत्पन्न। आधुनिक राष्ट्र-राज्य प्रणाली वेस्टफेलिया संधि (1648) से उभरी। अरस्तू: \"मनुष्य स्वभाव से राजनीतिक प्राणी है।\" वुडरो विल्सन: \"एक निश्चित क्षेत्र में कानून के लिए संगठित लोग।\" मैक्स वेबर: \"किसी क्षेत्र में वैध शारीरिक बल के एकाधिकार का दावा करने वाला समुदाय।\""
    ],
    concepts: [
      {
        heading: ["Four Essential Elements", "चार आवश्यक तत्व"],
        body: [
          "1. POPULATION: The State is a human institution. No fixed minimum or maximum — Plato (5,040 ideal), Rousseau (10,000). Ranges from Tuvalu (~11K) to India (~1.4B). Population must be settled, not nomadic.\n\n2. TERRITORY: Definite demarcated area — land, water, airspace. Russia largest, Vatican City smallest. Nomads without fixed territory cannot constitute a State.\n\n3. GOVERNMENT: The agency through which State will is expressed/enforced. Three branches: Legislature, Executive, Judiciary. Government is an element of State, not the State itself.\n\n4. SOVEREIGNTY: Supreme power of the State over all within its territory. Internal sovereignty (supremacy within) and External sovereignty (independence from foreign control). Most essential distinguishing element.",
          "1. जनसंख्या: राज्य मानव संस्था है। न्यूनतम/अधिकतम तय नहीं — प्लेटो (5,040), रूसो (10,000)। तुवालु (~11K) से भारत (~1.4B)।\n\n2. क्षेत्र: निश्चित सीमांकित क्षेत्र — भूमि, जल, वायु। रूस सबसे बड़ा, वेटिकन सबसे छोटा।\n\n3. सरकार: राज्य इच्छा की अभिव्यक्ति/क्रियान्वयन की एजेंसी। तीन शाखाएं। सरकार राज्य का तत्व है, राज्य नहीं।\n\n4. संप्रभुता: राज्य की सर्वोच्च शक्ति। आंतरिक और बाह्य। सबसे आवश्यक तत्व।"
        ]
      },
      {
        heading: ["Theories of State Nature", "राज्य की प्रकृति के सिद्धांत"],
        body: [
          "1. Liberal/Individualist (Locke, Adam Smith): State as necessary evil — night-watchman state, minimal functions.\n2. Idealist (Hegel): \"State is the march of God on Earth\" — highest expression of reason and morality.\n3. Marxist (Marx, Engels): State is instrument of class domination. \"The executive of the modern State is but a committee for managing the common affairs of the whole bourgeoisie.\" State will \"wither away\" in classless society.\n4. Welfare State: Positive agent for social welfare — guaranteed minimum living standards (Ref: Indian Constitution Art 38, 39, 41, 43).\n5. Pluralist (Laski, Robert Dahl): Power dispersed among groups; State is one among many associations.\n6. Gandhian: Ram Rajya ideal — Gram Swaraj, decentralization, minimal state.",
          "1. उदारवादी (लॉक, स्मिथ): राज्य आवश्यक बुराई — न्यूनतम राज्य।\n2. आदर्शवादी (हेगेल): राज्य पृथ्वी पर ईश्वर का मार्च।\n3. मार्क्सवादी: राज्य वर्ग प्रभुत्व का उपकरण — वर्गहीन समाज में सूख जाएगा।\n4. कल्याणकारी राज्य: सामाजिक कल्याण का सकारात्मक एजेंट।\n5. बहुलवादी (लास्की, डाहल): शक्ति समूहों में बिखरी, राज्य एक संघ मात्र।\n6. गांधीवादी: राम राज्य — ग्राम स्वराज, विकेंद्रीकरण।"
        ]
      }
    ],
    quotes: [
      ["Aristotle: \"He who is without a state is either a beast or a god.\"", "अरस्तू: \"जो राज्य के बिना है, वह या तो पशु है या भगवान।\""],
      ["Max Weber: \"The state is a relation of men dominating men, supported by legitimate violence.\"", "मैक्स वेबर: \"राज्य पुरुषों का पुरुषों पर वैध हिंसा द्वारा समर्थित प्रभुत्व का संबंध है।\""],
      ["J.C. Johari: \"Without sovereignty, the state would be like a body without a soul.\"", "जे.सी. जौहरी: \"संप्रभुता के बिना राज्य आत्मा के बिना शरीर जैसा।\""],
      ["Dr. B.L. Fadia: \"The state is the most comprehensive and coercive of all social institutions.\"", "डॉ. बी.एल. फाडिया: \"राज्य सभी सामाजिक संस्थाओं में सबसे व्यापक और बलपूर्वक है।\""],
    ],
    evaluation: [
      "The classical four-element definition faces challenges: globalization, MNCs, NGOs, and the internet erode territorial sovereignty. Non-state actors challenge the Weberian monopoly on violence. Climate change and pandemics transcend boundaries. Yet the State remains the primary political unit — COVID-19 demonstrated states still exercise sovereign powers (border closures, lockdowns). The concept evolves rather than disappears.",
      "शास्त्रीय चार-तत्व परिभाषा को चुनौतियां: वैश्वीकरण, MNCs, NGO, इंटरनेट। गैर-राज्य अभिकर्ता वेबर के एकाधिकार को चुनौती। जलवायु परिवर्तन, महामारियां सीमाओं से परे। फिर भी राज्य प्राथमिक राजनीतिक इकाई — COVID-19 ने दिखाया। अवधारणा लुप्त नहीं, विकसित हो रही।"
    ],
    conclusion: [
      "The State remains the most fundamental concept in Political Science. Despite challenges to its sovereignty and functions, it continues as the primary locus of political authority, law-making, and welfare provision. Understanding its definition, elements, and nature is essential for grasping political organization.",
      "राज्य राजनीति विज्ञान की सबसे मौलिक अवधारणा बना हुआ है। संप्रभुता और कार्यों के लिए चुनौतियों के बावजूद, यह राजनीतिक प्राधिकार का प्राथमिक केंद्र बना हुआ है।"
    ],
    shortQ: [
      ["Define State. Name its four essential elements.", "राज्य परिभाषित करें। इसके चार तत्व बताएं।"],
      ["Distinguish between State and Society.", "राज्य और समाज में अंतर करें।"],
      ["What is the Marxist theory of State?", "राज्य का मार्क्सवादी सिद्धांत क्या है?"],
      ["What is a Welfare State?", "कल्याणकारी राज्य क्या है?"],
      ["Differentiate State and Government.", "राज्य और सरकार में अंतर करें।"],
    ],
    longQ: [
      ["Define State and discuss its essential elements in detail.", "राज्य परिभाषित करें और तत्वों पर विस्तार से चर्चा करें।"],
      ["Discuss various theories regarding the nature of State.", "राज्य की प्रकृति के विभिन्न सिद्धांतों पर चर्चा करें।"],
      ["'State is a necessary evil.' Discuss with Liberal and Marxist perspectives.", "'राज्य आवश्यक बुराई है' — उदारवादी और मार्क्सवादी दृष्टिकोण से चर्चा।"],
      ["How has globalization challenged traditional State sovereignty?", "वैश्वीकरण ने राज्य संप्रभुता को कैसे चुनौती दी?"],
      ["Critically examine the Pluralist theory of State.", "राज्य के बहुलवादी सिद्धांत का आलोचनात्मक परीक्षण करें।"],
    ],
    mcqs: [
      { q: ["Who defined State as 'people organized for law within a territory'?", "राज्य को 'क्षेत्र में कानून के लिए संगठित लोग' किसने कहा?"], opts: [["Aristotle", "अरस्तू"], ["Woodrow Wilson", "वुडरो विल्सन"], ["Max Weber", "मैक्स वेबर"], ["Harold Laski", "हेरोल्ड लास्की"]], correct: 1 },
      { q: ["Which is NOT an essential element of State?", "राज्य का आवश्यक तत्व कौन नहीं?"], opts: [["Population", "जनसंख्या"], ["Territory", "क्षेत्र"], ["Religion", "धर्म"], ["Sovereignty", "संप्रभुता"]], correct: 2 },
      { q: ["'State is march of God on Earth' — who said?", "'राज्य पृथ्वी पर ईश्वर का मार्च' — किसने कहा?"], opts: [["Plato", "प्लेटो"], ["Aristotle", "अरस्तू"], ["Hegel", "हेगेल"], ["Marx", "मार्क्स"]], correct: 2 },
      { q: ["Treaty of Westphalia was in:", "वेस्टफेलिया की संधि कब हुई?"], opts: [["1618", "1618"], ["1648", "1648"], ["1713", "1713"], ["1789", "1789"]], correct: 1 },
      { q: ["Marxist theory: State is instrument of:", "मार्क्सवादी सिद्धांत: राज्य उपकरण है:"], opts: [["Divine will", "दैवी इच्छा"], ["Class domination", "वर्ग प्रभुत्व"], ["Social contract", "सामाजिक अनुबंध"], ["General will", "सामान्य इच्छा"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Organic Theory (Spencer), Social Contract, Marxist, Pluralist theories\n• Monistic vs Pluralistic sovereignty\n• \"Withering away of State\" — Engels, Lenin\n• Weber's monopoly of legitimate violence\n• De Jure vs De Facto sovereignty\n• \"Failed state\" and \"rogue state\" concepts\n• Post-colonial state theory — Fanon, Said",
      "UGC NET फोकस:\n• जैविक सिद्धांत, सामाजिक अनुबंध, मार्क्सवादी, बहुलवादी\n• अद्वैतवादी बनाम बहुलवादी संप्रभुता\n• राज्य का सूख जाना — एंगेल्स, लेनिन\n• वेबर का वैध हिंसा का एकाधिकार\n• डी ज्यूर बनाम डी फैक्टो\n• असफल राज्य, बदमाश राज्य"
    ],
    ugcQ: [
      ["Q: Who coined 'withering away of the state'? A: Friedrich Engels.", "प्र: 'राज्य का सूख जाना' किसने कहा? उ: फ्रेडरिक एंगेल्स।"],
      ["Q: De Jure vs De Facto sovereignty? A: De Jure = legal right; De Facto = actual exercise of power.", "प्र: डी ज्यूर और डी फैक्टो? उ: डी ज्यूर = कानूनी अधिकार; डी फैक्टो = वास्तविक शक्ति प्रयोग।"],
      ["Q: 'Night Watchman State' meaning? A: Minimal state limited to protecting citizens from violence, theft, fraud.", "प्र: 'रात्रि प्रहरी राज्य' अर्थ? उ: न्यूनतम राज्य — केवल नागरिकों की हिंसा, चोरी से रक्षा।"],
    ],
  },

  // TOPIC 4
  {
    id: 't4', num: 4,
    title: ["Sovereignty: Meaning, Characteristics and Types", "संप्रभुता: अर्थ, विशेषताएं और प्रकार"],
    introduction: [
      "Sovereignty is the most essential attribute of the modern State. Derived from Latin 'superanus' (supreme), it was first systematically developed by Jean Bodin in 'Six Books of the Republic' (1576) as \"the absolute and perpetual power of a commonwealth.\" Thomas Hobbes in 'Leviathan' (1651) argued for absolute sovereignty to escape the State of Nature. John Austin defined law as \"the command of the sovereign backed by sanctions.\" Sovereignty is internal (supremacy within) and external (independence from foreign control). It is what distinguishes the State from all other associations.",
      "संप्रभुता आधुनिक राज्य की सबसे आवश्यक विशेषता है। लैटिन 'superanus' (सर्वोच्च) से व्युत्पन्न। जीन बोडिन ने 'Six Books of the Republic' (1576) में पहली बार व्यवस्थित रूप से विकसित किया। थॉमस हॉब्स ने 'लेवियाथान' (1651) में निरपेक्ष संप्रभुता का तर्क दिया। जॉन ऑस्टिन: \"कानून प्रतिबंधों द्वारा समर्थित संप्रभु का आदेश है।\" संप्रभुता आंतरिक (भीतर सर्वोच्चता) और बाह्य (विदेशी नियंत्रण से मुक्ति) दोनों है।"
    ],
    concepts: [
      {
        heading: ["Characteristics of Sovereignty", "संप्रभुता की विशेषताएं"],
        body: [
          "1. Absoluteness: Unlimited power; no legal limitation (Bodin, Hobbes). In modern states, limited by constitution and morality.\n2. Permanence: Continues as long as the State exists. \"The King is dead, long live the King.\"\n3. Universality: Extends to all persons, groups, and associations within territory.\n4. Inalienability: Cannot be transferred or surrendered without destroying the State.\n5. Indivisibility: Cannot be divided. Bodin: divided sovereignty = \"body with two heads.\"\n6. Exclusiveness: Only one sovereign per State.\n7. Originality: Not derived from any other authority.\n8. Imprescriptibility: Cannot be lost by non-use over time.",
          "1. निरपेक्षता: असीमित शक्ति। आधुनिक राज्यों में संविधान और नैतिकता द्वारा सीमित।\n2. स्थायित्व: राज्य के अस्तित्व तक बनी रहती है।\n3. सार्वभौमिकता: सभी व्यक्तियों, समूहों पर।\n4. अहस्तांतरणीयता: हस्तांतरण से राज्य नष्ट।\n5. अविभाज्यता: बोडिन — विभाजित संप्रभुता = \"दो सिर वाला शरीर।\"\n6. अनन्यता: प्रति राज्य एक संप्रभु।\n7. मौलिकता: किसी अन्य से व्युत्पन्न नहीं।\n8. अप्रतिधारणीयता: उपयोग न करने से समाप्त नहीं।"
        ]
      },
      {
        heading: ["Types of Sovereignty", "संप्रभुता के प्रकार"],
        body: [
          "1. LEGAL SOVEREIGNTY: Authority with legal right to issue final commands. In India — Parliament with President. Determinate, expressed through law.\n\n2. POLITICAL SOVEREIGNTY: Power behind the legal sovereign — electorate, public opinion. A.V. Dicey's distinction. In democracy, the people.\n\n3. POPULAR SOVEREIGNTY: Rousseau — sovereignty in the 'General Will.' Preamble: 'We, the People of India.'\n\n4. DE JURE vs DE FACTO: De Jure = legal right based on law/constitution. De Facto = actual exercise of power without legal title (e.g., military coup).\n\n5. TITULAR vs ACTUAL: Titular = constitutional head (President/King). Actual = those who exercise power (PM and Cabinet). Reflects the Parliamentary system.",
          "1. कानूनी: अंतिम आदेश का कानूनी अधिकार। भारत में संसद (राष्ट्रपति सहित)।\n\n2. राजनीतिक: कानूनी संप्रभु के पीछे की शक्ति — जनमत, मतदाता। डायसी।\n\n3. लोकप्रिय: रूसो — सामान्य इच्छा। प्रस्तावना — \"हम, भारत के लोग।\"\n\n4. डी ज्यूर बनाम डी फैक्टो: डी ज्यूर = कानूनी अधिकार। डी फैक्टो = बिना कानूनी आधार के वास्तविक शक्ति।\n\n5. नाममात्र बनाम वास्तविक: नाममात्र = राष्ट्रपति/राजा। वास्तविक = PM और मंत्रिमंडल।"
        ]
      }
    ],
    quotes: [
      ["Jean Bodin: \"Sovereignty is the absolute and perpetual power of a commonwealth.\"", "जीन बोडिन: \"संप्रभुता राष्ट्रमंडल की निरपेक्ष और शाश्वत शक्ति है।\""],
      ["John Austin: \"Law is the command of the sovereign backed by sanctions.\"", "जॉन ऑस्टिन: \"कानून प्रतिबंधों द्वारा समर्थित संप्रभु का आदेश है।\""],
      ["Harold Laski: \"It would benefit political science if the whole concept of sovereignty were surrendered.\"", "हेरोल्ड लास्की: \"राजनीति विज्ञान को लाभ होगा यदि संप्रभुता की संपूर्ण अवधारणा त्याग दी जाए।\""],
      ["A.V. Dicey: \"Behind the legal sovereign there is the political sovereign — the electorate.\"", "ए.वी. डायसी: \"कानूनी संप्रभु के पीछे राजनीतिक संप्रभु — मतदाता है।\""],
      ["J.C. Johari: \"Sovereignty is the life and soul of the state.\"", "जे.सी. जौहरी: \"संप्रभुता राज्य का जीवन और आत्मा है।\""],
    ],
    evaluation: [
      "The Austinian concept of absolute sovereignty has been modified by constitutionalism (rule of law, fundamental rights, judicial review). International organizations (UN, WTO, EU) involve voluntary surrender of sovereignty aspects. Globalization, MNCs, climate change erode exclusive territorial sovereignty. The Pluralist critique (Laski) argues power is dispersed, not concentrated in the sovereign. However, sovereignty has transformed, not disappeared — 'pooled sovereignty' (EU) represents new forms. COVID-19 showed States still exercise sovereign powers in crises.",
      "ऑस्टिन की निरपेक्ष संप्रभुता संविधानवाद (कानून का शासन, मौलिक अधिकार, न्यायिक समीक्षा) द्वारा संशोधित हुई। अंतर्राष्ट्रीय संगठन (UN, WTO, EU) में संप्रभुता के पहलुओं का स्वैच्छिक समर्पण। वैश्वीकरण, MNCs, जलवायु परिवर्तन क्षेत्रीय संप्रभुता को क्षीण करते हैं। बहुलवादी आलोचना — शक्ति बिखरी हुई है। फिर भी, संप्रभुता रूपांतरित हुई, लुप्त नहीं। COVID-19 ने दिखाया — राज्य अब भी संप्रभु शक्तियों का प्रयोग करते हैं।"
    ],
    conclusion: [
      "Sovereignty remains the defining characteristic of the State, though evolved from absolute authority to constitutional and shared sovereignty. In a globalized world, neither absolute internal nor absolute external sovereignty exists. Yet sovereignty endures as the legitimizing principle of state authority. Understanding its dimensions — legal, political, popular — is fundamental to Political Science.",
      "संप्रभुता राज्य की परिभाषित विशेषता बनी हुई है, यद्यपि निरपेक्ष प्राधिकार से संवैधानिक और साझा संप्रभुता में विकसित। वैश्वीकृत दुनिया में न पूर्ण आंतरिक, न पूर्ण बाह्य संप्रभुता। फिर भी संप्रभुता राज्य प्राधिकार का वैधीकरण सिद्धांत बनी हुई।"
    ],
    shortQ: [
      ["Define sovereignty and list its main characteristics.", "संप्रभुता परिभाषित करें और मुख्य विशेषताएं बताएं।"],
      ["Distinguish Legal and Political Sovereignty.", "कानूनी और राजनीतिक संप्रभुता में अंतर करें।"],
      ["What is Popular Sovereignty per Rousseau?", "रूसो के अनुसार लोकप्रिय संप्रभुता क्या है?"],
      ["Explain the Pluralist critique of sovereignty.", "संप्रभुता की बहुलवादी आलोचना समझाएं।"],
      ["Difference between De Jure and De Facto?", "डी ज्यूर और डी फैक्टो में अंतर?"],
    ],
    longQ: [
      ["Define sovereignty and discuss its essential characteristics.", "संप्रभुता परिभाषित करें और आवश्यक विशेषताओं पर चर्चा करें।"],
      ["Discuss various types of sovereignty with examples.", "विभिन्न प्रकार की संप्रभुता पर उदाहरण सहित चर्चा करें।"],
      ["Critically examine Pluralist theory of sovereignty.", "संप्रभुता के बहुलवादी सिद्धांत का आलोचनात्मक परीक्षण करें।"],
      ["'Sovereignty is the supreme will of the State.' Discuss (Bodin & Austin).", "'संप्रभुता राज्य की सर्वोच्च इच्छा है' — बोडिन और ऑस्टिन से चर्चा।"],
      ["How has globalization affected State sovereignty? Discuss with examples.", "वैश्वीकरण ने राज्य संप्रभुता को कैसे प्रभावित किया? उदाहरण सहित।"],
    ],
    mcqs: [
      { q: ["Father of modern sovereignty theory?", "आधुनिक संप्रभुता सिद्धांत के जनक?"], opts: [["Hobbes", "हॉब्स"], ["Jean Bodin", "जीन बोडिन"], ["John Austin", "जॉन ऑस्टिन"], ["Harold Laski", "हेरोल्ड लास्की"]], correct: 1 },
      { q: ["'Sovereignty is indivisible' — associated with:", "'संप्रभुता अविभाज्य' — किससे संबंधित:"], opts: [["Pluralists", "बहुलवादी"], ["Anarchists", "अराजकतावादी"], ["Monists (Bodin, Austin)", "अद्वैतवादी"], ["Marxists", "मार्क्सवादी"]], correct: 2 },
      { q: ["Legal vs Political Sovereignty distinction by:", "कानूनी बनाम राजनीतिक संप्रभुता — किसने?"], opts: [["Jean Bodin", "बोडिन"], ["John Austin", "ऑस्टिन"], ["A.V. Dicey", "डायसी"], ["Harold Laski", "लास्की"]], correct: 2 },
      { q: ["Rousseau: sovereignty resides in:", "रूसो: संप्रभुता निहित:"], opts: [["King", "राजा"], ["Parliament", "संसद"], ["General Will", "सामान्य इच्छा"], ["Judiciary", "न्यायपालिका"]], correct: 2 },
      { q: ["'Law is command of the sovereign' — whose definition?", "'कानून संप्रभु का आदेश' — किसकी परिभाषा?"], opts: [["Bodin", "बोडिन"], ["Austin", "ऑस्टिन"], ["Dicey", "डायसी"], ["Hobbes", "हॉब्स"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Austin: law = sovereign's command + sanctions\n• Monist vs Pluralist theories\n• Rousseau — General Will, Popular Sovereignty\n• Hobbes — absolute sovereignty, escape State of Nature\n• Dicey — Legal vs Political sovereignty, Rule of Law\n• Bodin — first systematic theorist\n• EU — pooled sovereignty\n• UN Charter Art 2(1): sovereign equality\n• R2P as challenge to sovereignty",
      "UGC NET फोकस:\n• ऑस्टिन: कानून = संप्रभु आदेश + प्रतिबंध\n• अद्वैतवादी बनाम बहुलवादी\n• रूसो — सामान्य इच्छा\n• हॉब्स — निरपेक्ष संप्रभुता\n• डायसी — कानूनी बनाम राजनीतिक\n• बोडिन — पहले व्यवस्थित सिद्धांतकार\n• EU — साझा संप्रभुता\n• UN चार्टर 2(1)\n• R2P"
    ],
    ugcQ: [
      ["Q: Austin's definition of law? A: 'Command of the sovereign backed by sanctions.'", "प्र: ऑस्टिन की कानून परिभाषा? उ: 'प्रतिबंधों द्वारा समर्थित संप्रभु का आदेश।'"],
      ["Q: What is 'pooled sovereignty'? A: EU states pool sovereignty in common institutions for collective benefit.", "प्र: साझा संप्रभुता? उ: EU राज्य सामूहिक लाभ हेतु सामान्य संस्थाओं में संप्रभुता साझा करते हैं।"],
      ["Q: Bodin's work on sovereignty? A: 'Six Books of the Republic' (1576).", "प्र: बोडिन की कृति? उ: 'Six Books of the Republic' (1576)।"],
    ],
  },

  // ──────────────────────────────────────
  // TOPIC 5: Democracy — Meaning and Theories
  // ──────────────────────────────────────
  {
    id: 't5', num: 5,
    title: ["Democracy: Meaning and Theories", "लोकतंत्र: अर्थ और सिद्धांत"],
    introduction: [
      "Democracy, derived from Greek 'demos' (people) and 'kratos' (rule), literally means 'rule by the people.' Abraham Lincoln famously defined it as \"government of the people, by the people, for the people.\" Aristotle classified democracy as a perverted form of government (rule by the many in their own interest), but modern understanding has elevated it as the most legitimate form of governance. Democracy rests on core principles: popular sovereignty, political equality, majority rule with minority rights, free and fair elections, rule of law, and protection of fundamental rights. The Universal Declaration of Human Rights (Art 21) declares: \"The will of the people shall be the basis of the authority of government.\"",
      "लोकतंत्र ग्रीक 'demos' (जनता) और 'kratos' (शासन) से बना है, जिसका शाब्दिक अर्थ 'जनता का शासन' है। अब्राहम लिंकन ने प्रसिद्ध रूप से इसे \"जनता का, जनता द्वारा, जनता के लिए शासन\" के रूप में परिभाषित किया। अरस्तू ने लोकतंत्र को सरकार के विकृत रूप के रूप में वर्गीकृत किया, लेकिन आधुनिक समझ ने इसे शासन के सबसे वैध रूप के रूप में ऊंचा किया है। लोकतंत्र मूल सिद्धांतों पर आधारित है: लोकप्रिय संप्रभुता, राजनीतिक समानता, अल्पसंख्यक अधिकारों के साथ बहुमत शासन, स्वतंत्र और निष्पक्ष चुनाव, कानून का शासन और मौलिक अधिकारों का संरक्षण।"
    ],
    concepts: [
      {
        heading: ["Types of Democracy", "लोकतंत्र के प्रकार"],
        body: [
          "1. DIRECT DEMOCRACY: Citizens directly participate in decision-making without representatives. Practiced in ancient Greek city-states (Athens). Modern examples: Switzerland (referendums), Gram Sabha in India (73rd Amendment). Devices: Referendum, Initiative, Recall, Plebiscite.\n\n2. INDIRECT/REPRESENTATIVE DEMOCRACY: Citizens elect representatives who make decisions on their behalf. Most modern democracies follow this model. Features: periodic elections, political parties, parliamentary or presidential systems.\n\n3. PRESIDENTIAL DEMOCRACY: Executive (President) is directly elected and independent of the legislature. Fixed term. USA is the classic example. Features: separation of powers, checks and balances.\n\n4. PARLIAMENTARY DEMOCRACY: Executive (PM and Cabinet) is drawn from and responsible to the legislature. India and UK follow this model. Features: fusion of powers, collective responsibility, no fixed term for executive.\n\n5. DELIBERATIVE DEMOCRACY: Emphasizes reasoned discussion and consensus-building over mere voting. Jurgen Habermas is a key theorist. Focus on public reason and democratic deliberation.",
          "1. प्रत्यक्ष लोकतंत्र: नागरिक बिना प्रतिनिधियों के सीधे निर्णय में भाग लेते हैं। प्राचीन एथेंस, स्विट्जरलैंड (जनमत संग्रह), भारत में ग्राम सभा। उपकरण: जनमत संग्रह, पहल, वापस बुलाना, जनमत।\n\n2. अप्रत्यक्ष/प्रतिनिधि लोकतंत्र: नागरिक प्रतिनिधि चुनते हैं। अधिकांश आधुनिक लोकतंत्र।\n\n3. राष्ट्रपति लोकतंत्र: कार्यपालिका सीधे निर्वाचित, विधायिका से स्वतंत्र। USA।\n\n4. संसदीय लोकतंत्र: कार्यपालिका विधायिका से ली गई और उसके प्रति उत्तरदायी। भारत, UK।\n\n5. विचार-विमर्श लोकतंत्र: तर्कपूर्ण चर्चा और सहमति निर्माण पर जोर। जुर्गन हेबरमास।"
        ]
      },
      {
        heading: ["Theories of Democracy", "लोकतंत्र के सिद्धांत"],
        body: [
          "1. CLASSICAL/LIBERAL THEORY (Locke, Mill, Bentham): Democracy as protection of individual rights, limited government, free market, rule of law. Focus on liberty and constitutional constraints.\n\n2. ELITIST THEORY (Pareto, Mosca, Michels, Schumpeter): Democracy is a method for selecting leaders through competitive elections. \"The democratic method is that institutional arrangement for arriving at political decisions in which individuals acquire the power to decide by means of a competitive struggle for the people's vote\" (Schumpeter). Iron Law of Oligarchy (Michels): all organizations inevitably become oligarchic.\n\n3. PLURALIST THEORY (Robert Dahl): Democracy as 'Polyarchy' — rule by multiple minorities rather than a single majority. Power is dispersed among competing interest groups. Key conditions: elected officials, free elections, freedom of expression, associational autonomy, inclusive citizenship.\n\n4. MARXIST/SOCIALIST THEORY: Bourgeois democracy is a sham — real power lies with the capitalist class. True democracy requires economic equality, not just political rights. Emphasis on social and economic democracy.\n\n5. PARTICIPATORY THEORY (Rousseau, Pateman, Macpherson): Democracy requires active citizen participation beyond voting. Emphasizes workplace democracy, local self-governance, and decentralized decision-making.",
          "1. शास्त्रीय/उदारवादी सिद्धांत (लॉक, मिल, बेंथम): व्यक्तिगत अधिकारों की रक्षा, सीमित सरकार, मुक्त बाजार।\n\n2. अभिजनवादी सिद्धांत (पारेतो, मोस्का, मिशेल्स, शुम्पीटर): लोकतंत्र प्रतिस्पर्धी चुनावों के माध्यम से नेता चुनने की विधि है।\n\n3. बहुलवादी सिद्धांत (रॉबर्ट डाहल): लोकतंत्र 'पॉलीआर्की' — एकल बहुमत के बजाय कई अल्पसंख्यकों का शासन।\n\n4. मार्क्सवादी/समाजवादी सिद्धांत: बुर्जुआ लोकतंत्र एक ढोंग है — वास्तविक शक्ति पूंजीपति वर्ग के पास।\n\n5. सहभागी सिद्धांत (रूसो): लोकतंत्र में मतदान से परे सक्रिय नागरिक भागीदारी आवश्यक।"
        ]
      },
      {
        heading: ["Essential Conditions for Democracy", "लोकतंत्र के लिए आवश्यक शर्तें"],
        body: [
          "1. Free and Fair Elections: Independent election commission, secret ballot, universal adult franchise.\n2. Rule of Law: No one is above the law; equality before law.\n3. Fundamental Rights: Freedom of speech, press, assembly, association.\n4. Independent Judiciary: Judicial review as protector of constitutional values.\n5. Political Parties and Opposition: Vibrant multi-party system with legitimate opposition.\n6. Civil Society and Free Media: Watchdog role, informed citizenry.\n7. Education and Literacy: Informed participation requires educated citizens.\n8. Economic Development and Equality: Extreme inequality undermines democratic participation (Lipset's thesis).",
          "1. स्वतंत्र और निष्पक्ष चुनाव: स्वतंत्र चुनाव आयोग, गुप्त मतदान, सार्वभौमिक वयस्क मताधिकार।\n2. कानून का शासन: कोई कानून से ऊपर नहीं।\n3. मौलिक अधिकार: अभिव्यक्ति, प्रेस, सभा की स्वतंत्रता।\n4. स्वतंत्र न्यायपालिका।\n5. राजनीतिक दल और विपक्ष।\n6. नागरिक समाज और स्वतंत्र मीडिया।\n7. शिक्षा और साक्षरता।\n8. आर्थिक विकास और समानता।"
        ]
      }
    ],
    quotes: [
      ["Abraham Lincoln: \"Democracy is government of the people, by the people, for the people.\"", "अब्राहम लिंकन: \"लोकतंत्र जनता का, जनता द्वारा, जनता के लिए शासन है।\""],
      ["Joseph Schumpeter: \"The democratic method is that institutional arrangement for arriving at political decisions in which individuals acquire the power to decide by means of a competitive struggle for the people's vote.\" — Capitalism, Socialism and Democracy (1942)", "जोसेफ शुम्पीटर: \"लोकतांत्रिक विधि वह संस्थागत व्यवस्था है जिसमें व्यक्ति जनता के वोट के लिए प्रतिस्पर्धी संघर्ष के माध्यम से निर्णय की शक्ति प्राप्त करते हैं।\""],
      ["Robert Dahl: \"Democracy is the 'polyarchy' — a system in which multiple groups compete for power.\" — Polyarchy (1971)", "रॉबर्ट डाहल: \"लोकतंत्र 'पॉलीआर्की' है — वह प्रणाली जिसमें कई समूह सत्ता के लिए प्रतिस्पर्धा करते हैं।\""],
      ["J.C. Johari: \"Democracy is not just a form of government; it is a way of life.\"", "जे.सी. जौहरी: \"लोकतंत्र केवल शासन का रूप नहीं; यह जीवन का एक तरीका है।\""],
      ["Dr. B.L. Fadia: \"The success of democracy depends on the active participation of an informed and vigilant citizenry.\"", "डॉ. बी.एल. फाडिया: \"लोकतंत्र की सफलता जागरूक और सतर्क नागरिकों की सक्रिय भागीदारी पर निर्भर करती है।\""],
    ],
    evaluation: [
      "Democracy is widely regarded as the most legitimate form of government, but faces significant challenges. Advantages: protects individual rights, ensures accountability through elections, promotes peaceful transfer of power, encourages public participation, and fosters human development (Amartya Sen — no famine has occurred in a functioning democracy). Criticisms: 'tyranny of the majority' (Tocqueville, Mill), slow decision-making, vulnerability to populism and demagoguery, influence of money in politics (corruption of democratic process), and low voter turnout in many democracies. In India, criminalization of politics, caste-based voting, and electoral malpractices remain challenges. Yet, as Churchill noted, \"Democracy is the worst form of government, except for all those other forms that have been tried from time to time.\"",
      "लोकतंत्र को व्यापक रूप से शासन का सबसे वैध रूप माना जाता है, लेकिन महत्वपूर्ण चुनौतियों का सामना करता है। लाभ: व्यक्तिगत अधिकारों की रक्षा, चुनावों के माध्यम से जवाबदेही, सत्ता का शांतिपूर्ण हस्तांतरण, सार्वजनिक भागीदारी (अमर्त्य सेन — किसी कार्यशील लोकतंत्र में अकाल नहीं हुआ)। आलोचनाएं: 'बहुमत का अत्याचार' (टॉकविल, मिल), धीमा निर्णय, धन का प्रभाव, कम मतदान। भारत में राजनीति का अपराधीकरण और चुनावी कदाचार चुनौतियां हैं। चर्चिल के अनुसार, \"लोकतंत्र शासन का सबसे खराब रूप है, सिवाय उन सभी अन्य रूपों के जो समय-समय पर आजमाए गए हैं।\""
    ],
    conclusion: [
      "Democracy is not merely a procedural mechanism for electing governments but a substantive ideal of human dignity, freedom, and equality. Its strength lies in its ability to self-correct through institutional mechanisms like free press, independent judiciary, and regular elections. In the Indian context, democracy has proved remarkably resilient despite vast diversity, poverty, and illiteracy — a phenomenon described as 'India's democratic miracle.' The challenge for the 21st century is to deepen democracy by making it more inclusive, participatory, and accountable.",
      "लोकतंत्र केवल सरकार चुनने की प्रक्रियात्मक व्यवस्था नहीं बल्कि मानव गरिमा, स्वतंत्रता और समानता का मूल आदर्श है। इसकी ताकत आत्म-सुधार की क्षमता में निहित है। भारतीय संदर्भ में, विशाल विविधता, गरीबी और निरक्षरता के बावजूद लोकतंत्र उल्लेखनीय रूप से लचीला साबित हुआ — 'भारत का लोकतांत्रिक चमत्कार।' 21वीं सदी की चुनौती लोकतंत्र को अधिक समावेशी, सहभागी और जवाबदेह बनाकर गहरा करना है।"
    ],
    shortQ: [
      ["Define democracy and explain its essential features.", "लोकतंत्र को परिभाषित करें और इसकी आवश्यक विशेषताएं समझाएं।"],
      ["Distinguish between Direct and Indirect Democracy.", "प्रत्यक्ष और अप्रत्यक्ष लोकतंत्र में अंतर करें।"],
      ["What is Schumpeter's elitist theory of democracy?", "शुम्पीटर का अभिजनवादी लोकतंत्र सिद्धांत क्या है?"],
      ["Explain Robert Dahl's concept of Polyarchy.", "रॉबर्ट डाहल की पॉलीआर्की अवधारणा समझाएं।"],
      ["What are the essential conditions for a successful democracy?", "सफल लोकतंत्र के लिए आवश्यक शर्तें क्या हैं?"],
    ],
    longQ: [
      ["Define democracy. Discuss its various types and theories in detail.", "लोकतंत्र को परिभाषित करें। इसके विभिन्न प्रकारों और सिद्धांतों पर विस्तार से चर्चा करें।"],
      ["Critically examine the Elitist theory of democracy.", "लोकतंत्र के अभिजनवादी सिद्धांत का आलोचनात्मक परीक्षण करें।"],
      ["'Democracy is the best form of government.' Discuss with arguments for and against.", "'लोकतंत्र शासन का सर्वोत्तम रूप है।' पक्ष और विपक्ष में तर्कों के साथ चर्चा करें।"],
      ["Discuss the Pluralist theory of democracy with special reference to Robert Dahl.", "रॉबर्ट डाहल के विशेष संदर्भ में लोकतंत्र के बहुलवादी सिद्धांत पर चर्चा करें।"],
      ["Analyze the challenges faced by Indian democracy and suggest reforms.", "भारतीय लोकतंत्र की चुनौतियों का विश्लेषण करें और सुधार सुझाएं।"],
    ],
    mcqs: [
      { q: ["Who defined democracy as 'government of the people, by the people, for the people'?", "'जनता का, जनता द्वारा, जनता के लिए शासन' किसने कहा?"], opts: [["Abraham Lincoln", "लिंकन"], ["Winston Churchill", "चर्चिल"], ["Aristotle", "अरस्तू"], ["Rousseau", "रूसो"]], correct: 0 },
      { q: ["Who wrote 'Capitalism, Socialism and Democracy' (1942)?", "'Capitalism, Socialism and Democracy' (1942) किसने लिखा?"], opts: [["Robert Dahl", "डाहल"], ["Joseph Schumpeter", "शुम्पीटर"], ["C.B. Macpherson", "मैकफर्सन"], ["Carole Pateman", "पेटमैन"]], correct: 1 },
      { q: ["Robert Dahl's concept of democracy is called:", "रॉबर्ट डाहल की लोकतंत्र अवधारणा कहलाती है:"], opts: [["Participatory", "सहभागी"], ["Elitist", "अभिजनवादी"], ["Polyarchy", "पॉलीआर्की"], ["Deliberative", "विचार-विमर्शी"]], correct: 2 },
      { q: ["'Iron Law of Oligarchy' was propounded by:", "'कुलीनतंत्र का लौह नियम' किसने प्रतिपादित किया?"], opts: [["Pareto", "पारेतो"], ["Mosca", "मोस्का"], ["Michels", "मिशेल्स"], ["Schumpeter", "शुम्पीटर"]], correct: 2 },
      { q: ["Referendum, Initiative, Recall and Plebiscite are devices of:", "जनमत संग्रह, पहल, वापस बुलाना और जनमत किसके उपकरण हैं?"], opts: [["Indirect Democracy", "अप्रत्यक्ष"], ["Direct Democracy", "प्रत्यक्ष"], ["Parliamentary Democracy", "संसदीय"], ["Presidential Democracy", "राष्ट्रपति"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Aristotle's classification — Democracy as perverted form vs Polity\n• Schumpeter's procedural/elitist democracy — competitive elitism\n• Robert Dahl — Polyarchy (7 conditions)\n• C.B. Macpherson — Participatory Democracy\n• Lincoln's Gettysburg Address definition\n• Direct democracy devices — Referendum, Initiative, Recall, Plebiscite\n• Gram Sabha under 73rd Amendment — direct democracy example\n• Amartya Sen — Democracy and Development (no famine in democracy)\n• Michels — Iron Law of Oligarchy\n• Tocqueville — 'Tyranny of the Majority' (Democracy in America)\n• Huntington — Third Wave of Democratization",
      "UGC NET फोकस:\n• अरस्तू का वर्गीकरण — पॉलिटी बनाम लोकतंत्र\n• शुम्पीटर — प्रक्रियात्मक/अभिजनवादी लोकतंत्र\n• रॉबर्ट डाहल — पॉलीआर्की (7 शर्तें)\n• मैकफर्सन — सहभागी लोकतंत्र\n• प्रत्यक्ष लोकतंत्र उपकरण\n• 73वां संशोधन — ग्राम सभा\n• अमर्त्य सेन — लोकतंत्र और विकास\n• मिशेल्स — कुलीनतंत्र का लौह नियम\n• हंटिंगटन — लोकतंत्रीकरण की तीसरी लहर"
    ],
    ugcQ: [
      ["Q: Schumpeter's definition of democracy? A: 'Institutional arrangement for arriving at political decisions in which individuals acquire power through competitive struggle for votes.'", "प्र: शुम्पीटर की लोकतंत्र परिभाषा? उ: 'राजनीतिक निर्णयों तक पहुंचने की संस्थागत व्यवस्था जिसमें व्यक्ति वोट के लिए प्रतिस्पर्धा से शक्ति प्राप्त करते हैं।'"],
      ["Q: What is 'Polyarchy'? A: Dahl's concept — rule by multiple minorities competing in an open system.", "प्र: पॉलीआर्की क्या है? उ: डाहल की अवधारणा — खुली प्रणाली में प्रतिस्पर्धा करते कई अल्पसंख्यकों का शासन।"],
      ["Q: Who said 'no famine has ever occurred in a functioning democracy'? A: Amartya Sen.", "प्र: 'किसी कार्यशील लोकतंत्र में कभी अकाल नहीं हुआ' — किसने? उ: अमर्त्य सेन।"],
      ["Q: Direct democracy devices? A: Referendum, Initiative, Recall, Plebiscite.", "प्र: प्रत्यक्ष लोकतंत्र उपकरण? उ: जनमत संग्रह, पहल, वापस बुलाना, जनमत।"],
      ["Q: 'Third Wave of Democratization' author? A: Samuel P. Huntington (1991).", "प्र: 'तीसरी लहर' लेखक? उ: सैमुअल पी. हंटिंगटन (1991)।"],
    ],
  },

  // ──────────────────────────────────────
  // TOPIC 6: Political Parties — Definition, Types and Importance
  // ──────────────────────────────────────
  {
    id: 't6', num: 6,
    title: ["Political Parties: Definition, Types and Importance", "राजनीतिक दल: परिभाषा, प्रकार और महत्व"],
    introduction: [
      "Political parties are indispensable institutions of modern democracy. They serve as the primary link between citizens and government, aggregating interests, mobilizing voters, and forming governments. Edmund Burke defined a political party as \"a body of men united for promoting by their joint endeavors the national interest, upon some particular principle in which they are all agreed.\" In the Indian context, Article 324-329 of the Constitution deal with elections, and the Representation of People Act, 1951 provides for registration and recognition of political parties. The Election Commission of India (under Art 324) recognizes parties as National or State parties based on electoral performance.",
      "राजनीतिक दल आधुनिक लोकतंत्र की अपरिहार्य संस्थाएं हैं। वे नागरिकों और सरकार के बीच प्राथमिक कड़ी के रूप में कार्य करते हैं। एडमंड बर्क ने राजनीतिक दल को \"किसी विशेष सिद्धांत पर एकजुट पुरुषों का समूह जो अपने संयुक्त प्रयासों से राष्ट्रीय हित को बढ़ावा देता है\" के रूप में परिभाषित किया। भारतीय संदर्भ में, अनुच्छेद 324-329 चुनावों से संबंधित हैं और जन प्रतिनिधित्व अधिनियम, 1951 राजनीतिक दलों के पंजीकरण और मान्यता का प्रावधान करता है।"
    ],
    concepts: [
      {
        heading: ["Functions / Importance of Political Parties", "राजनीतिक दलों के कार्य / महत्व"],
        body: [
          "1. Interest Aggregation and Articulation: Parties aggregate diverse societal demands into coherent policy platforms.\n2. Political Recruitment: Parties identify, train, and nominate candidates for public office.\n3. Government Formation: In parliamentary systems, the majority party forms the government; in presidential systems, parties organize legislative support.\n4. Policy Formulation: Parties develop manifestos and policy programs that guide governance.\n5. Political Socialization and Education: Parties educate citizens about political issues, rights, and duties.\n6. Opposition and Accountability: Opposition parties critique government policies, ensuring accountability.\n7. Political Stability: Parties channel political conflict through institutional mechanisms, preventing anarchy.\n8. Linkage between Government and Citizens: Parties serve as two-way communication channels.\n9. Representation of Diverse Groups: In plural societies like India, parties represent regional, caste, and linguistic interests.",
          "1. हित एकत्रीकरण और अभिव्यक्ति: दल विविध सामाजिक मांगों को सुसंगत नीति मंचों में एकत्रित करते हैं।\n2. राजनीतिक भर्ती: दल सार्वजनिक पद के लिए उम्मीदवारों की पहचान, प्रशिक्षण और नामांकन करते हैं।\n3. सरकार गठन: संसदीय प्रणालियों में बहुमत दल सरकार बनाता है।\n4. नीति निर्माण: दल घोषणापत्र और नीति कार्यक्रम विकसित करते हैं।\n5. राजनीतिक समाजीकरण और शिक्षा: नागरिकों को राजनीतिक मुद्दों के बारे में शिक्षित करते हैं।\n6. विपक्ष और जवाबदेही: विपक्षी दल सरकार की नीतियों की आलोचना करते हैं।\n7. राजनीतिक स्थिरता।\n8. सरकार-नागरिक संपर्क।\n9. विविध समूहों का प्रतिनिधित्व।"
        ]
      },
      {
        heading: ["Types of Political Parties", "राजनीतिक दलों के प्रकार"],
        body: [
          "A. BASED ON ORGANIZATIONAL STRUCTURE (Maurice Duverger):\n1. Cadre/Elite Parties: Small membership of influential persons; loose organization; focuses on elections. Example: Congress party in its early years, Republican/Democratic parties in USA.\n2. Mass Parties: Large membership; formal organization; grassroots presence; ideological orientation. Example: BJP, CPM in India, Labour Party in UK.\n3. Catch-All Parties (Otto Kirchheimer): Broad appeal; ideologically flexible; aim to attract maximum voters. Example: Congress (I) under Indira, modern centrist parties.\n\nB. BASED ON PARTY SYSTEM (Giovanni Sartori):\n1. One-Party System: Single legal party; no opposition. Example: China (CPC), USSR (CPSU).\n2. Two-Party System: Two major parties alternate in power. Example: USA (Democrats & Republicans), UK (Conservatives & Labour).\n3. Multi-Party System: Several parties compete; often leads to coalition governments. Example: India, Italy, France.\n\nC. IN THE INDIAN CONTEXT (Election Commission Classification):\n• National Party: Recognized in 4+ states; reserved symbol across India. Examples: BJP, Congress, CPM, BSP, NPP, AAP.\n• State Party: Recognized in 1-3 states; reserved symbol in those states.\n• Registered (Unrecognized) Party: Registered with EC but no reserved symbol.",
          "A. संगठनात्मक संरचना के आधार पर (मॉरिस दुवर्जे):\n1. कैडर/अभिजन दल: प्रभावशाली व्यक्तियों की छोटी सदस्यता।\n2. जन दल: बड़ी सदस्यता; औपचारिक संगठन; जमीनी उपस्थिति।\n3. कैच-ऑल दल (ओटो किर्खाइमर): व्यापक अपील; वैचारिक लचीलापन।\n\nB. दल प्रणाली के आधार पर (सार्तोरी):\n1. एक-दलीय प्रणाली: एक कानूनी दल। चीन।\n2. द्वि-दलीय प्रणाली: दो प्रमुख दल। USA, UK।\n3. बहु-दलीय प्रणाली: कई दल। भारत।\n\nC. भारतीय संदर्भ में (चुनाव आयोग वर्गीकरण):\n• राष्ट्रीय दल: 4+ राज्यों में मान्यता। BJP, कांग्रेस।\n• राज्य दल: 1-3 राज्यों में मान्यता।\n• पंजीकृत (अमान्यता प्राप्त) दल।"
        ]
      }
    ],
    quotes: [
      ["Edmund Burke: \"Party is a body of men united for promoting by their joint endeavors the national interest, upon some particular principle.\"", "एडमंड बर्क: \"दल किसी विशेष सिद्धांत पर एकजुत पुरुषों का समूह है जो संयुक्त प्रयासों से राष्ट्रीय हित को बढ़ावा देता है।\""],
      ["Maurice Duverger: \"Without political parties, democracy is unthinkable.\" — Political Parties (1951)", "मॉरिस दुवर्जे: \"राजनीतिक दलों के बिना लोकतंत्र अकल्पनीय है।\""],
      ["Dr. B.L. Fadia: \"Political parties are the lifeblood of democratic politics.\"", "डॉ. बी.एल. फाडिया: \"राजनीतिक दल लोकतांत्रिक राजनीति की जीवनरेखा हैं।\""],
      ["J.C. Johari: \"In a representative democracy, parties are the instruments through which the sovereign electorate expresses its will.\"", "जे.सी. जौहरी: \"प्रतिनिधि लोकतंत्र में दल वे उपकरण हैं जिनके माध्यम से संप्रभु मतदाता अपनी इच्छा व्यक्त करता है।\""],
    ],
    evaluation: [
      "Political parties face a crisis of legitimacy worldwide. Criticisms include: oligarchic tendencies (Michels' Iron Law), criminalization of politics (especially in India — 43% of MPs had pending criminal cases in 2019), dynastic politics, erosion of ideological differences (catch-all convergence), excessive focus on elections rather than governance, and influence of money/corporate funding. In India, the Anti-Defection Law (10th Schedule, 1985) has weakened intra-party democracy. However, parties remain essential — no modern democracy functions without them. Reforms suggested: state funding of elections, inner-party democracy, transparency in funding, and stronger anti-defection provisions.",
      "राजनीतिक दल विश्वभर में वैधता के संकट का सामना कर रहे हैं। आलोचनाएं: कुलीनतंत्रीय प्रवृत्तियां (मिशेल्स), राजनीति का अपराधीकरण (2019 में 43% सांसदों पर आपराधिक मामले), वंशवादी राजनीति, वैचारिक भिन्नताओं का क्षरण, धन का प्रभाव। भारत में दल-बदल विरोधी कानून (10वीं अनुसूची, 1985) ने अंतः-दलीय लोकतंत्र को कमजोर किया। फिर भी, दल आवश्यक बने हुए हैं। सुझाए गए सुधार: चुनावों का राज्य वित्तपोषण, आंतरिक लोकतंत्र, वित्तपोषण में पारदर्शिता।"
    ],
    conclusion: [
      "Political parties are indispensable for democratic governance. Despite their shortcomings, they remain the primary mechanism for political representation, government formation, and policy-making. Strengthening party democracy — both within parties (inner-party democracy) and the party system (level playing field) — is essential for deepening democracy in the 21st century. As India's multi-party system matures, the challenge is to ensure that parties serve as instruments of democratic accountability rather than vehicles of personal ambition.",
      "राजनीतिक दल लोकतांत्रिक शासन के लिए अपरिहार्य हैं। अपनी कमियों के बावजूद, वे राजनीतिक प्रतिनिधित्व, सरकार गठन और नीति-निर्माण का प्राथमिक तंत्र बने हुए हैं। दलीय लोकतंत्र को मजबूत करना — दलों के भीतर और दल प्रणाली दोनों स्तरों पर — 21वीं सदी में लोकतंत्र को गहरा करने के लिए आवश्यक है।"
    ],
    shortQ: [
      ["Define political party and list any four functions.", "राजनीतिक दल परिभाषित करें और चार कार्य बताएं।"],
      ["Distinguish between Cadre parties and Mass parties.", "कैडर दलों और जन दलों में अंतर करें।"],
      ["What is a National Party in India? Give two examples.", "भारत में राष्ट्रीय दल क्या है? दो उदाहरण दें।"],
      ["Explain Duverger's classification of political parties.", "दुवर्जे के राजनीतिक दलों के वर्गीकरण को समझाएं।"],
      ["What is the Anti-Defection Law (10th Schedule)?", "दल-बदल विरोधी कानून (10वीं अनुसूची) क्या है?"],
    ],
    longQ: [
      ["Define political parties. Discuss their functions and importance in a democracy.", "राजनीतिक दलों को परिभाषित करें। लोकतंत्र में उनके कार्य और महत्व पर चर्चा करें।"],
      ["Discuss the various types of political parties and party systems with suitable examples.", "उपयुक्त उदाहरणों के साथ राजनीतिक दलों और दल प्रणालियों के विभिन्न प्रकारों पर चर्चा करें।"],
      ["Critically examine the role of political parties in Indian democracy.", "भारतीय लोकतंत्र में राजनीतिक दलों की भूमिका का आलोचनात्मक परीक्षण करें।"],
      ["What are the major challenges faced by political parties in India? Suggest reforms.", "भारत में राजनीतिक दलों की प्रमुख चुनौतियां क्या हैं? सुधार सुझाएं।"],
      ["Discuss the classification of political parties in India as per the Election Commission.", "चुनाव आयोग के अनुसार भारत में राजनीतिक दलों के वर्गीकरण पर चर्चा करें।"],
    ],
    mcqs: [
      { q: ["Who defined party as 'a body of men united for promoting national interest'?", "'राष्ट्रीय हित को बढ़ावा देने के लिए एकजुट पुरुषों का समूह' — किसने?"], opts: [["Edmund Burke", "बर्क"], ["Maurice Duverger", "दुवर्जे"], ["Sartori", "सार्तोरी"], ["MacIver", "मैकाइवर"]], correct: 0 },
      { q: ["'Political Parties' (1951) written by:", "'Political Parties' (1951) — किसने लिखा?"], opts: [["Sartori", "सार्तोरी"], ["Duverger", "दुवर्जे"], ["Kirchheimer", "किर्खाइमर"], ["Michels", "मिशेल्स"]], correct: 1 },
      { q: ["Catch-all party concept was given by:", "कैच-ऑल दल अवधारणा किसने दी?"], opts: [["Duverger", "दुवर्जे"], ["Sartori", "सार्तोरी"], ["Otto Kirchheimer", "किर्खाइमर"], ["Robert Dahl", "डाहल"]], correct: 2 },
      { q: ["Anti-Defection Law in India is under which Schedule?", "दल-बदल विरोधी कानून किस अनुसूची में?"], opts: [["8th Schedule", "8वीं"], ["9th Schedule", "9वीं"], ["10th Schedule", "10वीं"], ["11th Schedule", "11वीं"]], correct: 2 },
      { q: ["As per EC, National Party must be recognized in minimum how many states?", "EC अनुसार राष्ट्रीय दल को न्यूनतम कितने राज्यों में मान्यता?"], opts: [["2 states", "2"], ["3 states", "3"], ["4 states", "4"], ["5 states", "5"]], correct: 2 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Duverger's classification: Cadre vs Mass parties, Duverger's Law (single-member plurality favors two-party system)\n• Otto Kirchheimer — Catch-all parties\n• Sartori — Polarized pluralism, centripetal vs centrifugal competition\n• Michels — Iron Law of Oligarchy (all organizations become oligarchic)\n• Anti-Defection Law — 52nd Amendment (1985), 10th Schedule, Kihoto Hollohan case (1992)\n• Election Commission — Art 324, recognition of parties, Election Symbols Order 1968\n• State funding of elections debate\n• Electoral bonds and transparency\n• Inner-party democracy",
      "UGC NET फोकस:\n• दुवर्जे — कैडर बनाम जन दल, दुवर्जे का नियम\n• किर्खाइमर — कैच-ऑल दल\n• सार्तोरी — ध्रुवीकृत बहुलवाद\n• मिशेल्स — कुलीनतंत्र का लौह नियम\n• दल-बदल विरोधी — 52वां संशोधन, किहोटो होलोहन (1992)\n• चुनाव आयोग — अनु. 324\n• राज्य वित्तपोषण बहस\n• चुनावी बॉन्ड\n• आंतरिक दलीय लोकतंत्र"
    ],
    ugcQ: [
      ["Q: Duverger's Law? A: Single-member plurality electoral systems tend to favor a two-party system.", "प्र: दुवर्जे का नियम? उ: एकल-सदस्य बहुलता प्रणालियां द्वि-दलीय प्रणाली को बढ़ावा देती हैं।"],
      ["Q: Anti-Defection Law added by which Amendment? A: 52nd Amendment, 1985 (10th Schedule).", "प्र: दल-बदल विरोधी कानून किस संशोधन से? उ: 52वां संशोधन, 1985 (10वीं अनुसूची)।"],
      ["Q: Who decides disqualification under 10th Schedule? A: Speaker/Chairman (subject to judicial review per Kihoto Hollohan, 1992).", "प्र: 10वीं अनुसूची के तहत अयोग्यता कौन तय करता है? उ: अध्यक्ष/सभापति (न्यायिक समीक्षा के अधीन, किहोटो होलोहन, 1992)।"],
    ],
  },

  // ──────────────────────────────────────
  // TOPIC 7: Public Administration — Meaning, Nature and Scope
  // ──────────────────────────────────────
  {
    id: 't7', num: 7,
    title: ["Public Administration: Meaning, Nature and Scope", "लोक प्रशासन: अर्थ, प्रकृति और दायरा"],
    introduction: [
      "Public Administration is a critical field that deals with the organization and management of public policies and programs. Woodrow Wilson, regarded as the 'Father of Public Administration,' articulated its importance in his seminal essay 'The Study of Administration' (1887), advocating for a science of administration separate from politics. L.D. White defined it as \"the management of men and materials in the accomplishment of the purposes of the state.\" In modern terms, Public Administration encompasses all activities of the executive branch of government — from policy implementation to service delivery. In India, the study of Public Administration has gained prominence due to the expanding role of the state as a welfare provider under the Directive Principles (Art 38-43).",
      "लोक प्रशासन सार्वजनिक नीतियों और कार्यक्रमों के संगठन और प्रबंधन से संबंधित एक महत्वपूर्ण क्षेत्र है। 'लोक प्रशासन के जनक' वुडरो विल्सन ने अपने निबंध 'The Study of Administration' (1887) में राजनीति से अलग प्रशासन के विज्ञान की वकालत की। एल.डी. व्हाइट ने इसे \"राज्य के उद्देश्यों की पूर्ति में पुरुषों और सामग्रियों का प्रबंधन\" के रूप में परिभाषित किया। भारत में, नीति निदेशक तत्वों (अनु. 38-43) के तहत कल्याणकारी राज्य के रूप में राज्य की विस्तारित भूमिका के कारण लोक प्रशासन का अध्ययन महत्वपूर्ण हो गया है।"
    ],
    concepts: [
      {
        heading: ["Meaning and Definitions", "अर्थ और परिभाषाएं"],
        body: [
          "• Woodrow Wilson (1887): \"Public Administration is the detailed and systematic execution of public law.\"\n\n• L.D. White: \"Public Administration consists of all those operations having for their purpose the fulfillment or enforcement of public policy.\"\n\n• Luther Gulick: \"Public Administration is that part of the science of administration which has to do with government.\" He coined POSDCORB — Planning, Organizing, Staffing, Directing, Coordinating, Reporting, Budgeting.\n\n• Dwight Waldo: \"Public Administration is the art and science of management as applied to the affairs of state.\"\n\n• F.A. Nigro: \"Public Administration is a cooperative group effort in a public setting covering all three branches and has an important role in the formulation of public policy.\"",
          "• वुडरो विल्सन (1887): \"लोक प्रशासन सार्वजनिक कानून का विस्तृत और व्यवस्थित निष्पादन है।\"\n\n• एल.डी. व्हाइट: \"लोक प्रशासन में वे सभी कार्य शामिल हैं जिनका उद्देश्य सार्वजनिक नीति की पूर्ति या प्रवर्तन है।\"\n\n• लूथर गुलिक: POSDCORB — नियोजन, संगठन, कर्मचारी, निदेशन, समन्वय, रिपोर्टिंग, बजटिंग।\n\n• ड्वाइट वाल्डो: \"लोक प्रशासन राज्य के मामलों पर लागू प्रबंधन की कला और विज्ञान है।\"\n\n• एफ.ए. नाइग्रो: \"लोक प्रशासन सार्वजनिक सेटिंग में सहकारी समूह प्रयास है।\""
        ]
      },
      {
        heading: ["Nature of Public Administration", "लोक प्रशासन की प्रकृति"],
        body: [
          "1. INTEGRAL VIEW (L.D. White, Dimock): Public Administration includes ALL activities — manual, clerical, managerial, and technical — performed to achieve governmental objectives. Administration is the sum total of all operations from top to bottom.\n\n2. MANAGERIAL VIEW (Luther Gulick, Herbert Simon): Public Administration consists of only MANAGERIAL activities — the work of top-level administrators who plan, organize, direct, and control. It excludes clerical and manual work.\n\n3. ART or SCIENCE Debate: As an ART — it requires practical skills and creativity in applying knowledge. As a SCIENCE — it has developed principles, theories, and methods. Most scholars today view it as BOTH — a 'social science' applying scientific methods to practical governance.\n\n4. PUBLIC vs PRIVATE: Public Administration operates in a political environment, is accountable to the public, and is bound by law and constitution. It is characterized by: public interest orientation, constitutional accountability, consistency and equity, public scrutiny, and political direction.",
          "1. समग्र दृष्टिकोण (एल.डी. व्हाइट): सरकारी उद्देश्यों को प्राप्त करने के लिए सभी गतिविधियां शामिल — मैनुअल, लिपिकीय, प्रबंधकीय, तकनीकी।\n\n2. प्रबंधकीय दृष्टिकोण (गुलिक, साइमन): केवल प्रबंधकीय गतिविधियां — शीर्ष-स्तरीय प्रशासकों का कार्य।\n\n3. कला या विज्ञान: कला के रूप में — व्यावहारिक कौशल। विज्ञान के रूप में — सिद्धांत और विधियां। आज अधिकांश विद्वान इसे दोनों मानते हैं।\n\n4. सार्वजनिक बनाम निजी: लोक प्रशासन राजनीतिक वातावरण में कार्य करता है, जनता के प्रति जवाबदेह।"
        ]
      },
      {
        heading: ["Scope of Public Administration", "लोक प्रशासन का क्षेत्र"],
        body: [
          "A. POSDCORB VIEW (Luther Gulick): Planning, Organizing, Staffing, Directing, Coordinating, Reporting, Budgeting.\n\nB. SUBJECT-MATTER VIEW (Pfiffner):\n1. Organization: Structure, hierarchy, span of control.\n2. Personnel Administration: Recruitment, training, promotion, morale.\n3. Financial Administration: Budget, accounting, auditing.\n4. Administrative Law: Delegated legislation, tribunals, judicial control.\n5. Comparative Administration: Cross-national study of administrative systems.\n\nC. MODERN BROAD SCOPE (includes):\n1. Public Policy Formulation, Implementation and Evaluation.\n2. Development Administration — administration for socio-economic change.\n3. New Public Management (NPM) — efficiency, privatization, competition.\n4. E-Governance and Digital Administration.\n5. Good Governance — transparency, accountability, participation, rule of law.",
          "A. POSDCORB दृष्टिकोण (गुलिक): नियोजन, संगठन, कर्मचारी, निदेशन, समन्वय, रिपोर्टिंग, बजटिंग।\n\nB. विषय-वस्तु दृष्टिकोण (फिफनर): संगठन, कार्मिक प्रशासन, वित्तीय प्रशासन, प्रशासनिक कानून, तुलनात्मक प्रशासन।\n\nC. आधुनिक व्यापक क्षेत्र: सार्वजनिक नीति, विकास प्रशासन, नव लोक प्रबंधन (NPM), ई-गवर्नेंस, सुशासन।"
        ]
      }
    ],
    quotes: [
      ["Woodrow Wilson: \"It is the object of administrative study to discover, first, what government can properly and successfully do, and, secondly, how it can do these proper things with the utmost possible efficiency.\" — The Study of Administration (1887)", "वुडरो विल्सन: \"प्रशासनिक अध्ययन का उद्देश्य यह खोजना है कि सरकार उचित रूप से क्या कर सकती है और अधिकतम दक्षता से कैसे कर सकती है।\""],
      ["Luther Gulick: \"POSDCORB\" — seven functions of the chief executive (Papers on the Science of Administration, 1937).", "लूथर गुलिक: POSDCORB — मुख्य कार्यकारी के सात कार्य।"],
      ["Dr. B.L. Fadia: \"Public Administration is the executive arm of the state that translates policies into reality.\" — Public Administration (Sahitya Bhawan)", "डॉ. बी.एल. फाडिया: \"लोक प्रशासन राज्य की कार्यकारी भुजा है जो नीतियों को वास्तविकता में अनुवादित करती है।\""],
      ["J.C. Johari: \"The scope of public administration is as wide as the activities of the modern welfare state.\"", "जे.सी. जौहरी: \"लोक प्रशासन का क्षेत्र आधुनिक कल्याणकारी राज्य की गतिविधियों जितना व्यापक है।\""],
    ],
    evaluation: [
      "Public Administration has evolved from the classical 'politics-administration dichotomy' (Wilson, Goodnow) to a more nuanced understanding where policy and administration are intertwined. The New Public Management (NPM) paradigm of the 1980s-90s introduced market principles into public service, emphasizing efficiency, privatization, and 'steering not rowing' (Osborne & Gaebler, 'Reinventing Government'). However, NPM faces criticism for undermining public service ethos, equity, and democratic accountability. In India, Public Administration is challenged by bureaucratic red-tape, corruption, political interference, and lack of citizen-centricity. Reforms like Right to Information (RTI, 2005), e-Governance, and Citizen Charters aim to make administration more transparent and responsive.",
      "लोक प्रशासन शास्त्रीय 'राजनीति-प्रशासन द्विभाजन' (विल्सन, गुडनाउ) से विकसित होकर अधिक सूक्ष्म समझ तक पहुंचा है। NPM ने सार्वजनिक सेवा में बाजार सिद्धांत पेश किए। हालांकि, NPM की लोक सेवा लोकाचार, समानता और जवाबदेही को कमजोर करने के लिए आलोचना होती है। भारत में लोक प्रशासन लालफीताशाही, भ्रष्टाचार, राजनीतिक हस्तक्षेप से चुनौतीपूर्ण है। RTI (2005), ई-गवर्नेंस और नागरिक चार्टर जैसे सुधार प्रशासन को पारदर्शी और उत्तरदायी बनाने का लक्ष्य रखते हैं।"
    ],
    conclusion: [
      "Public Administration is the engine of governance that converts political promises into tangible public services. Its scope has expanded dramatically with the evolution of the modern welfare state, covering everything from law and order to social welfare, infrastructure, and digital services. In the 21st century, Public Administration faces new challenges — climate governance, digital transformation, pandemic response, and growing citizen expectations. The future of Public Administration lies in blending traditional values of integrity and impartiality with modern tools of technology, participatory governance, and performance management.",
      "लोक प्रशासन शासन का इंजन है जो राजनीतिक वादों को मूर्त सार्वजनिक सेवाओं में बदलता है। आधुनिक कल्याणकारी राज्य के विकास के साथ इसका दायरा नाटकीय रूप से विस्तारित हुआ है। 21वीं सदी में जलवायु शासन, डिजिटल रूपांतरण और महामारी प्रतिक्रिया जैसी चुनौतियां हैं। लोक प्रशासन का भविष्य सत्यनिष्ठा और निष्पक्षता के पारंपरिक मूल्यों को प्रौद्योगिकी, सहभागी शासन और प्रदर्शन प्रबंधन के आधुनिक उपकरणों के साथ मिश्रित करने में है।"
    ],
    shortQ: [
      ["Define Public Administration as per Woodrow Wilson.", "वुडरो विल्सन के अनुसार लोक प्रशासन परिभाषित करें।"],
      ["What is POSDCORB? Who coined it?", "POSDCORB क्या है? इसे किसने गढ़ा?"],
      ["Distinguish between Integral and Managerial views of Public Administration.", "लोक प्रशासन के समग्र और प्रबंधकीय दृष्टिकोण में अंतर करें।"],
      ["Is Public Administration an Art or Science?", "क्या लोक प्रशासन कला है या विज्ञान?"],
      ["What is New Public Management (NPM)?", "नव लोक प्रबंधन (NPM) क्या है?"],
    ],
    longQ: [
      ["Define Public Administration and discuss its nature in detail.", "लोक प्रशासन को परिभाषित करें और इसकी प्रकृति पर विस्तार से चर्चा करें।"],
      ["Discuss the scope of Public Administration with reference to POSDCORB and the modern view.", "POSDCORB और आधुनिक दृष्टिकोण के संदर्भ में लोक प्रशासन के क्षेत्र पर चर्चा करें।"],
      ["Critically examine the evolution of Public Administration as a discipline.", "एक अनुशासन के रूप में लोक प्रशासन के विकास का आलोचनात्मक परीक्षण करें।"],
      ["Discuss the New Public Management paradigm and its impact on public service.", "नव लोक प्रबंधन प्रतिमान और सार्वजनिक सेवा पर इसके प्रभाव पर चर्चा करें।"],
      ["Analyze the major challenges faced by Public Administration in India.", "भारत में लोक प्रशासन की प्रमुख चुनौतियों का विश्लेषण करें।"],
    ],
    mcqs: [
      { q: ["Who is the 'Father of Public Administration'?", "'लोक प्रशासन के जनक' कौन हैं?"], opts: [["Woodrow Wilson", "विल्सन"], ["Luther Gulick", "गुलिक"], ["L.D. White", "व्हाइट"], ["F.W. Taylor", "टेलर"]], correct: 0 },
      { q: ["POSDCORB was coined by:", "POSDCORB किसने गढ़ा?"], opts: [["Woodrow Wilson", "विल्सन"], ["Luther Gulick", "गुलिक"], ["Herbert Simon", "साइमन"], ["Fayol", "फेयोल"]], correct: 1 },
      { q: ["'The Study of Administration' (1887) was written by:", "'The Study of Administration' (1887) किसने लिखा?"], opts: [["Gulick", "गुलिक"], ["Wilson", "विल्सन"], ["Goodnow", "गुडनाउ"], ["White", "व्हाइट"]], correct: 1 },
      { q: ["Which view holds that PA includes all activities from top to bottom?", "कौन सा दृष्टिकोण कहता है कि लोक प्रशासन ऊपर से नीचे तक सभी गतिविधियां शामिल है?"], opts: [["Managerial View", "प्रबंधकीय"], ["Integral View", "समग्र"], ["Scientific View", "वैज्ञानिक"], ["Systems View", "प्रणाली"]], correct: 1 },
      { q: ["New Public Management emphasizes:", "नव लोक प्रबंधन जोर देता है:"], opts: [["Red tape", "लालफीता"], ["Efficiency & privatization", "दक्षता और निजीकरण"], ["Bureaucratic hierarchy", "नौकरशाही पदानुक्रम"], ["Central planning", "केंद्रीय योजना"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Wilson — Politics-Administration Dichotomy\n• Goodnow — 'Politics and Administration' (1900)\n• Gulick — POSDCORB, Urwick — principles of organization\n• F.W. Taylor — Scientific Management\n• Henry Fayol — 14 Principles of Management\n• Max Weber — Ideal-type Bureaucracy\n• Herbert Simon — decision-making, 'Administrative Behavior' (1947), bounded rationality\n• New Public Administration (1968, Minnowbrook) — relevance, values, equity\n• NPM — Osborne & Gaebler 'Reinventing Government' (1992)\n• Good Governance — World Bank (1989), 8 characteristics\n• Right to Information Act 2005 — Art 19(1)(a)",
      "UGC NET फोकस:\n• विल्सन — राजनीति-प्रशासन द्विभाजन\n• गुलिक — POSDCORB\n• टेलर — वैज्ञानिक प्रबंधन\n• फेयोल — 14 सिद्धांत\n• वेबर — आदर्श-प्रकार नौकरशाही\n• हर्बर्ट साइमन — सीमित तर्कसंगतता\n• नव लोक प्रशासन (मिनोब्रुक, 1968)\n• NPM\n• सुशासन — विश्व बैंक\n• RTI अधिनियम 2005"
    ],
    ugcQ: [
      ["Q: Wilson's key argument in 'The Study of Administration'? A: Politics-Administration dichotomy — administration should be separate from politics.", "प्र: विल्सन का मुख्य तर्क? उ: राजनीति-प्रशासन द्विभाजन।"],
      ["Q: What does 'S' stand for in POSDCORB? A: Staffing.", "प्र: POSDCORB में 'S' का अर्थ? उ: स्टाफिंग (कर्मचारी नियुक्ति)।"],
      ["Q: Who wrote 'Administrative Behavior'? A: Herbert Simon (1947).", "प्र: 'Administrative Behavior' किसने लिखा? उ: हर्बर्ट साइमन (1947)।"],
    ],
  },

  // ──────────────────────────────────────
  // TOPIC 8: Difference between Public and Private Administration
  // ──────────────────────────────────────
  {
    id: 't8', num: 8,
    title: ["Difference between Public and Private Administration", "सार्वजनिक और निजी प्रशासन के बीच अंतर"],
    introduction: [
      "The distinction between Public and Private Administration is fundamental to understanding the unique character of governmental management. While both involve organization, management of resources, and achievement of goals, they differ significantly in their environment, objectives, accountability, and methods. Paul H. Appleby argued that 'government is different' — its decisions carry the coercive power of the state, its accountability is political through elected representatives, and its performance is judged by equity and justice, not merely efficiency. Sir Josiah Stamp noted that public administration is 'private administration tempered by public scrutiny.' Understanding these differences is crucial for administrators, citizens, and scholars of Political Science.",
      "सार्वजनिक और निजी प्रशासन के बीच अंतर सरकारी प्रबंधन के अद्वितीय चरित्र को समझने के लिए मौलिक है। पॉल एच. एपलबी ने तर्क दिया कि 'सरकार अलग है' — इसके निर्णयों में राज्य की बलपूर्वक शक्ति होती है, इसकी जवाबदेही निर्वाचित प्रतिनिधियों के माध्यम से राजनीतिक होती है। सर जोसिया स्टैम्प ने कहा कि लोक प्रशासन 'सार्वजनिक जांच से संयमित निजी प्रशासन' है।"
    ],
    concepts: [
      {
        heading: ["Key Differences between Public and Private Administration", "सार्वजनिक और निजी प्रशासन के बीच मुख्य अंतर"],
        body: [
          "1. OBJECTIVE/PURPOSE:\n• Public: Public welfare, social justice, common good. Motive is SERVICE, not profit.\n• Private: Profit maximization, business growth, shareholder value. Motive is PROFIT.\n\n2. LEGAL FRAMEWORK:\n• Public: Bound by constitutional provisions, administrative law, RTI, judicial review. Actions must be legally authorized.\n• Private: Governed by company law, contract law, but with greater flexibility. 'Anything not prohibited is permitted.'\n\n3. ACCOUNTABILITY:\n• Public: Multiple accountability — political (to ministers/Parliament), legal (to courts), financial (to CAG), public (to citizens/media).\n• Private: Primarily accountable to owners/shareholders and market. Less public scrutiny.\n\n4. NATURE OF AUTHORITY:\n• Public: Exercises sovereign power of the State; decisions backed by coercive authority (police, law).\n• Private: Authority derived from ownership and contract; no sovereign power.\n\n5. SCOPE AND SCALE:\n• Public: Vast and comprehensive — covers entire population within territory. Monopolistic nature (e.g., police, defense).\n• Private: Limited to specific business activities. Competitive environment.\n\n6. DECISION-MAKING:\n• Public: Often slower, multi-layered (file movement), rule-bound, political considerations.\n• Private: Usually quicker, goal-oriented, flexible, focused on market dynamics.\n\n7. FINANCE:\n• Public: Tax-funded; budget approved by Parliament; subject to CAG audit and PAC scrutiny.\n• Private: Revenue from sales/services; internal financial control; subject to company audit.\n\n8. MEASUREMENT OF PERFORMANCE:\n• Public: Difficult to measure quantitatively; success measured by social impact, equity, citizen satisfaction.\n• Private: Easily measurable — profit, market share, ROI, shareholder value.\n\n9. TRANSPARENCY:\n• Public: High transparency required — RTI, public disclosure, open meetings.\n• Private: Limited transparency — trade secrets, competitive confidentiality.\n\n10. PERSONNEL:\n• Public: Recruitment by UPSC/SPSC for All-India/Central/State Services; security of tenure; constitutional protection (Art 311).\n• Private: Contract-based employment; at-will termination; performance-based.",
          "1. उद्देश्य: सार्वजनिक = लोक कल्याण, सेवा। निजी = लाभ।\n\n2. कानूनी ढांचा: सार्वजनिक = संविधान, प्रशासनिक कानून से बंधा। निजी = अधिक लचीलापन।\n\n3. जवाबदेही: सार्वजनिक = बहु-स्तरीय (राजनीतिक, कानूनी, वित्तीय, सार्वजनिक)। निजी = मालिकों/शेयरधारकों के प्रति।\n\n4. प्राधिकार की प्रकृति: सार्वजनिक = राज्य की संप्रभु शक्ति। निजी = स्वामित्व और अनुबंध।\n\n5. दायरा: सार्वजनिक = विशाल, एकाधिकारवादी। निजी = सीमित, प्रतिस्पर्धी।\n\n6. निर्णय: सार्वजनिक = धीमा, बहु-स्तरीय। निजी = तेज, लक्ष्य-उन्मुख।\n\n7. वित्त: सार्वजनिक = कर-वित्तपोषित, संसदीय स्वीकृति। निजी = बिक्री राजस्व।\n\n8. प्रदर्शन मापन: सार्वजनिक = सामाजिक प्रभाव। निजी = लाभ, बाजार हिस्सा।\n\n9. पारदर्शिता: सार्वजनिक = उच्च (RTI)। निजी = सीमित।\n\n10. कार्मिक: सार्वजनिक = UPSC, अनु. 311 सुरक्षा। निजी = अनुबंध-आधारित।"
        ]
      },
      {
        heading: ["Similarities between Public and Private Administration", "सार्वजनिक और निजी प्रशासन में समानताएं"],
        body: [
          "Despite differences, there are significant similarities:\n1. Both involve management of men (human resources), materials, and money (3 Ms).\n2. Both require planning, organizing, staffing, directing, and controlling (POSDCORB functions).\n3. Both face problems of hierarchy, coordination, communication, and delegation.\n4. Both use techniques of budgeting, accounting, and statistical analysis.\n5. Both increasingly adopt technology (e-governance / e-business).\n6. Both aim at efficiency and effectiveness in achieving organizational goals.\n7. Both are influenced by the external environment — political, economic, social factors.\n\nHowever, as Paul Appleby argued, the differences are qualitative, not merely quantitative. The publicness of public administration makes it fundamentally distinct.",
          "महत्वपूर्ण समानताएं:\n1. दोनों में पुरुषों, सामग्रियों और धन का प्रबंधन शामिल।\n2. दोनों POSDCORB कार्यों की आवश्यकता।\n3. दोनों पदानुक्रम, समन्वय, संचार की समस्याओं का सामना करते हैं।\n4. दोनों बजट, लेखांकन तकनीकों का उपयोग।\n5. दोनों प्रौद्योगिकी अपनाते हैं।\n6. दोनों का लक्ष्य दक्षता और प्रभावशीलता।\n\nफिर भी, जैसा पॉल एपलबी ने कहा, अंतर गुणात्मक हैं, केवल मात्रात्मक नहीं।"
        ]
      }
    ],
    quotes: [
      ["Paul H. Appleby: \"Government is different because government is politics.\" — Big Democracy (1945)", "पॉल एच. एपलबी: \"सरकार अलग है क्योंकि सरकार राजनीति है।\""],
      ["Sir Josiah Stamp: \"Public administration is private administration tempered by public scrutiny.\"", "सर जोसिया स्टैम्प: \"लोक प्रशासन सार्वजनिक जांच से संयमित निजी प्रशासन है।\""],
      ["Luther Gulick: \"The fundamental difference between public and private administration lies in the character of authority.\"", "लूथर गुलिक: \"सार्वजनिक और निजी प्रशासन के बीच मूलभूत अंतर प्राधिकार के चरित्र में निहित है।\""],
      ["Dr. B.L. Fadia: \"While private administration is single-dimensional (profit-oriented), public administration is multi-dimensional (service, law, equity, and development-oriented).\"", "डॉ. बी.एल. फाडिया: \"निजी प्रशासन एक-आयामी (लाभ-उन्मुख) है, जबकि लोक प्रशासन बहु-आयामी (सेवा, कानून, समानता और विकास-उन्मुख) है।\""],
    ],
    evaluation: [
      "The traditional sharp distinction between public and private administration has blurred in recent decades due to: 1) Privatization and outsourcing of public services (Public-Private Partnerships), 2) Adoption of private sector management techniques in government (NPM), 3) Increasing social responsibility demands on private corporations (CSR under Companies Act 2013 in India), 4) Growth of the 'third sector' (NGOs, voluntary organizations) that combines public purpose with private methods. However, the fundamental distinction remains — public administration operates within the framework of constitutionalism, rule of law, and democratic accountability that no private organization can replicate. The coercive power of the State and the imperative of equity make public administration unique.",
      "हाल के दशकों में सार्वजनिक और निजी प्रशासन के बीच पारंपरिक तीव्र अंतर धुंधला हुआ है: निजीकरण, PPP, NPM, CSR (कंपनी अधिनियम 2013), तीसरा क्षेत्र (NGO)। फिर भी, मूलभूत अंतर बना हुआ है — लोक प्रशासन संविधानवाद, कानून के शासन और लोकतांत्रिक जवाबदेही के ढांचे में काम करता है। राज्य की बलपूर्वक शक्ति और समानता की अनिवार्यता लोक प्रशासन को अद्वितीय बनाती है।"
    ],
    conclusion: [
      "Public and Private Administration are two sides of the management coin — each with distinct characteristics, yet increasingly borrowing from each other. The key to effective governance lies not in making public administration identical to private management, but in understanding and leveraging their differences. Public administration must remain anchored in constitutional values of justice, equity, and accountability while adopting the efficiency and innovation of private management. The 'publicness' of public administration — its obligation to serve all citizens equally and fairly — is its defining strength and challenge.",
      "सार्वजनिक और निजी प्रशासन प्रबंधन के दो पहलू हैं — प्रत्येक की विशिष्ट विशेषताएं हैं, फिर भी एक-दूसरे से उधार ले रहे हैं। प्रभावी शासन की कुंजी लोक प्रशासन को निजी प्रबंधन के समान बनाने में नहीं, बल्कि उनके अंतरों को समझने और लाभ उठाने में है। लोक प्रशासन की 'सार्वजनिकता' — सभी नागरिकों की समान और निष्पक्ष सेवा का दायित्व — इसकी परिभाषित ताकत और चुनौती है।"
    ],
    shortQ: [
      ["List any five differences between Public and Private Administration.", "सार्वजनिक और निजी प्रशासन में कोई पांच अंतर बताएं।"],
      ["Explain Paul Appleby's statement: 'Government is different.'", "पॉल एपलबी का कथन 'सरकार अलग है' समझाएं।"],
      ["Write any three similarities between Public and Private Administration.", "सार्वजनिक और निजी प्रशासन में कोई तीन समानताएं लिखें।"],
      ["Why is public accountability higher in Public Administration?", "लोक प्रशासन में सार्वजनिक जवाबदेही अधिक क्यों है?"],
      ["How has NPM blurred the line between Public and Private Administration?", "NPM ने सार्वजनिक और निजी प्रशासन के बीच रेखा कैसे धुंधली की है?"],
    ],
    longQ: [
      ["Distinguish between Public Administration and Private Administration in detail.", "लोक प्रशासन और निजी प्रशासन के बीच विस्तार से अंतर करें।"],
      ["'Public Administration is fundamentally different from Private Administration.' Discuss with reference to Paul Appleby.", "'लोक प्रशासन मूलतः निजी प्रशासन से भिन्न है।' पॉल एपलबी के संदर्भ में चर्चा करें।"],
      ["Discuss the similarities between Public and Private Administration. Can they be treated alike?", "लोक और निजी प्रशासन में समानताओं पर चर्चा करें। क्या उन्हें समान माना जा सकता है?"],
      ["Critically examine the view that the distinction between Public and Private Administration is diminishing.", "इस दृष्टिकोण का आलोचनात्मक परीक्षण करें कि सार्वजनिक और निजी प्रशासन के बीच अंतर कम हो रहा है।"],
      ["Analyze the impact of privatization on Public Administration in India.", "भारत में लोक प्रशासन पर निजीकरण के प्रभाव का विश्लेषण करें।"],
    ],
    mcqs: [
      { q: ["Who said 'Government is different'?", "'सरकार अलग है' — किसने कहा?"], opts: [["Woodrow Wilson", "विल्सन"], ["Paul H. Appleby", "एपलबी"], ["Luther Gulick", "गुलिक"], ["Max Weber", "वेबर"]], correct: 1 },
      { q: ["The main objective of Private Administration is:", "निजी प्रशासन का मुख्य उद्देश्य है:"], opts: [["Public welfare", "लोक कल्याण"], ["Service", "सेवा"], ["Profit maximization", "लाभ अधिकतमीकरण"], ["Social justice", "सामाजिक न्याय"]], correct: 2 },
      { q: ["Public Administration is funded primarily by:", "लोक प्रशासन मुख्यतः किससे वित्तपोषित होता है?"], opts: [["Donations", "दान"], ["Sales revenue", "बिक्री"], ["Taxation", "कर"], ["Loans only", "केवल ऋण"]], correct: 2 },
      { q: ["Which Article provides security of tenure to civil servants?", "कौन सा अनुच्छेद सिविल सेवकों को कार्यकाल सुरक्षा देता है?"], opts: [["Art 309", "अनु. 309"], ["Art 310", "अनु. 310"], ["Art 311", "अनु. 311"], ["Art 312", "अनु. 312"]], correct: 2 },
      { q: ["'Public administration is private administration tempered by public scrutiny' — who said?", "'लोक प्रशासन सार्वजनिक जांच से संयमित निजी प्रशासन है' — किसने?"], opts: [["Appleby", "एपलबी"], ["Sir Josiah Stamp", "स्टैम्प"], ["Gulick", "गुलिक"], ["Wilson", "विल्सन"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Paul Appleby — 'Government is different' (1945), 'Big Democracy'\n• Sir Josiah Stamp — public scrutiny distinction\n• Similarities: 3 Ms (Men, Materials, Money), POSDCORB, hierarchy, decision-making\n• Differences: objective (service vs profit), accountability (multiple vs limited), authority (sovereign vs contractual), finance (tax vs revenue), transparency (high vs low)\n• Constitutional provisions for civil servants — Art 309 (recruitment), 310 (tenure during pleasure of President), 311 (dismissal protection)\n• Impact of NPM, privatization, PPP, CSR on the distinction\n• RTI Act 2005 — enhanced transparency in public administration",
      "UGC NET फोकस:\n• पॉल एपलबी — 'सरकार अलग है'\n• अंतर: उद्देश्य, जवाबदेही, प्राधिकार, वित्त, पारदर्शिता\n• अनु. 309, 310, 311 — सिविल सेवक\n• NPM, निजीकरण, PPP, CSR\n• RTI अधिनियम 2005"
    ],
    ugcQ: [
      ["Q: Paul Appleby's famous statement? A: 'Government is different.' (Big Democracy, 1945).", "प्र: पॉल एपलबी का प्रसिद्ध कथन? उ: 'सरकार अलग है।' (Big Democracy, 1945)।"],
      ["Q: Art 311 provides protection against? A: Dismissal, removal or reduction in rank without inquiry.", "प्र: अनु. 311 सुरक्षा देता है? उ: बिना जांच के बर्खास्तगी, हटाने या पदावनति के विरुद्ध।"],
    ],
  },

  // ──────────────────────────────────────
  // TOPIC 9: Constitutionalism — Concept and Characteristics
  // ──────────────────────────────────────
  {
    id: 't9', num: 9,
    title: ["Constitutionalism: Concept and Characteristics", "संविधानवाद: अवधारणा और विशेषताएं"],
    introduction: [
      "Constitutionalism is a political philosophy asserting that government authority is derived from and limited by a body of fundamental law — the Constitution. It goes beyond merely having a constitution to ensuring that the constitution effectively limits governmental power, protects individual rights, and upholds the rule of law. Giovanni Sartori defined constitutionalism as \"a system of restrained and regulated government.\" The concept is rooted in Western political thought — Magna Carta (1215), the Glorious Revolution (1688), the American Constitution (1787), and the French Declaration of the Rights of Man (1789). In the Indian context, constitutionalism is embedded in the Basic Structure doctrine (Kesavananda Bharati, 1973), which ensures that even the amending power of Parliament cannot destroy the essential features of the Constitution.",
      "संविधानवाद एक राजनीतिक दर्शन है जो कहता है कि सरकारी प्राधिकार मौलिक कानून — संविधान — से प्राप्त और सीमित होता है। यह केवल संविधान होने से आगे बढ़कर यह सुनिश्चित करता है कि संविधान प्रभावी रूप से सरकारी शक्ति को सीमित करे, व्यक्तिगत अधिकारों की रक्षा करे और कानून का शासन बनाए रखे। जियोवानी सार्तोरी ने संविधानवाद को \"संयमित और विनियमित सरकार की प्रणाली\" के रूप में परिभाषित किया। भारतीय संदर्भ में, संविधानवाद मूल ढांचा सिद्धांत (केशवानंद भारती, 1973) में अंतर्निहित है।"
    ],
    concepts: [
      {
        heading: ["Core Elements / Characteristics of Constitutionalism", "संविधानवाद के मूल तत्व / विशेषताएं"],
        body: [
          "1. SUPREMACY OF THE CONSTITUTION: The Constitution is the highest law. All organs of the State — Legislature, Executive, Judiciary — derive their authority from and are bound by the Constitution. Article 13 declares any law inconsistent with Fundamental Rights void.\n\n2. RULE OF LAW (A.V. Dicey): Three principles: (a) No man is punishable except for a distinct breach of law, (b) Equality before law — no one is above the law, (c) The Constitution is the result of judicial decisions determining individual rights. Art 14 (Equality before law) embodies this principle.\n\n3. LIMITED GOVERNMENT: Government powers are defined, limited, and enumerated by the Constitution. Government cannot act arbitrarily. The doctrine of ultra vires applies — actions beyond legal authority are void.\n\n4. SEPARATION OF POWERS: Legislative, Executive, and Judicial powers should be vested in separate organs to prevent concentration and abuse of power (Montesquieu). In India, the separation is functional rather than absolute (broad separation).\n\n5. JUDICIAL REVIEW: The power of courts to examine the constitutionality of legislative and executive actions. In India, Articles 13, 32, 136, 226, and 227 provide for judicial review. The Supreme Court can strike down unconstitutional laws.\n\n6. PROTECTION OF FUNDAMENTAL RIGHTS: Constitutional guarantee of basic rights that cannot be violated by the State. Part III (Art 12-35) of the Indian Constitution provides justiciable Fundamental Rights.\n\n7. INDEPENDENT JUDICIARY: An impartial and independent judiciary is essential to enforce constitutional limitations. Judicial independence is secured through: appointment process, security of tenure, fixed service conditions, and separation from executive (Art 50).\n\n8. ACCOUNTABILITY AND TRANSPARENCY: The government must be accountable to the people through regular elections, parliamentary oversight (Question Hour, Committees), CAG audit, and RTI. Constitutionalism requires open, transparent governance.",
          "1. संविधान की सर्वोच्चता: संविधान सर्वोच्च कानून है। सभी अंग संविधान से बंधे। अनु. 13 — असंगत कानून शून्य।\n\n2. कानून का शासन (डायसी): कानून का स्पष्ट उल्लंघन ही दंडनीय; कानून के समक्ष समानता; संविधान न्यायिक निर्णयों का परिणाम। अनु. 14।\n\n3. सीमित सरकार: सरकारी शक्तियां परिभाषित और सीमित। अधिकारातीत कार्य शून्य।\n\n4. शक्तियों का पृथक्करण: विधायिका, कार्यपालिका, न्यायपालिका — पृथक अंग (मोंटेस्क्यू)। भारत में कार्यात्मक पृथक्करण।\n\n5. न्यायिक समीक्षा: विधायी और कार्यकारी कार्यों की संवैधानिकता की जांच। अनु. 13, 32, 226।\n\n6. मौलिक अधिकारों का संरक्षण: भाग III (अनु. 12-35) — न्यायोचित मौलिक अधिकार।\n\n7. स्वतंत्र न्यायपालिका: निष्पक्ष और स्वतंत्र न्यायपालिका आवश्यक। अनु. 50 — कार्यपालिका से पृथक्करण।\n\n8. जवाबदेही और पारदर्शिता: नियमित चुनाव, संसदीय निगरानी, CAG, RTI।"
        ]
      },
      {
        heading: ["Constitutionalism vs Constitution", "संविधानवाद बनाम संविधान"],
        body: [
          "• HAVING A CONSTITUTION does not necessarily mean having constitutionalism. Many authoritarian states have constitutions but lack constitutionalism.\n\n• A Constitution is a DOCUMENT — a set of rules, structures, and procedures.\n\n• Constitutionalism is a CULTURE — a commitment to limited government, rule of law, and protection of rights.\n\n• Example: The USSR had a constitution (1936) with fundamental rights on paper, but lacked constitutionalism (no judicial review, no free elections, no rule of law).\n\n• India: The presence of independent judiciary, judicial review, free press, regular elections, and fundamental rights enforcement through writs (Art 32) demonstrates constitutionalism in practice.\n\n• Key Test: Can citizens challenge government actions in court? Does the State obey court orders? If yes, constitutionalism exists.",
          "• संविधान होना ≠ संविधानवाद होना। कई सत्तावादी राज्यों में संविधान है, संविधानवाद नहीं।\n\n• संविधान = दस्तावेज — नियम, संरचना, प्रक्रिया।\n\n• संविधानवाद = संस्कृति — सीमित सरकार, कानून का शासन, अधिकारों की रक्षा।\n\n• USSR (1936) — कागज पर मौलिक अधिकार, पर संविधानवाद का अभाव।\n\n• भारत: स्वतंत्र न्यायपालिका, न्यायिक समीक्षा, स्वतंत्र प्रेस, नियमित चुनाव, रिट (अनु. 32) — संविधानवाद का प्रमाण।\n\n• मुख्य परीक्षण: क्या नागरिक सरकार को न्यायालय में चुनौती दे सकते हैं? यदि हां, संविधानवाद मौजूद।"
        ]
      }
    ],
    quotes: [
      ["Giovanni Sartori: \"Constitutionalism is a system of restrained and regulated government whose powers are limited by a fundamental law.\"", "जियोवानी सार्तोरी: \"संविधानवाद संयमित और विनियमित सरकार की प्रणाली है जिसकी शक्तियां मौलिक कानून द्वारा सीमित हैं।\""],
      ["A.V. Dicey: \"Wherever there is discretion, there is room for arbitrariness.\" — Law of the Constitution (1885)", "ए.वी. डायसी: \"जहां विवेकाधिकार है, वहां मनमानी की गुंजाइश है।\""],
      ["Friedrich Hayek: \"The Constitution is an instrument for the protection of individual liberty against the powers of government.\"", "फ्रेडरिक हायेक: \"संविधान सरकार की शक्तियों के विरुद्ध व्यक्तिगत स्वतंत्रता की रक्षा का उपकरण है।\""],
      ["Dr. B.L. Fadia: \"Constitutionalism implies not just a written constitution but a system of effective limitations on governmental power.\"", "डॉ. बी.एल. फाडिया: \"संविधानवाद का अर्थ केवल लिखित संविधान नहीं बल्कि सरकारी शक्ति पर प्रभावी सीमाओं की प्रणाली है।\""],
      ["J.C. Johari: \"The essence of constitutionalism lies in the subordination of power to law.\"", "जे.सी. जौहरी: \"संविधानवाद का सार कानून के अधीन शक्ति के अधीनता में निहित है।\""],
    ],
    evaluation: [
      "India's record with constitutionalism is mixed. Strong points: an independent judiciary that has repeatedly checked executive overreach (Kesavananda Bharati, S.R. Bommai, Maneka Gandhi), a vibrant civil society and free press, the RTI Act empowering citizens, and regular free elections. Weaknesses: frequent misuse of Article 356 (President's Rule) — over 125 times since 1950, though reduced after S.R. Bommai (1994); delays in judicial processes (3+ crore pending cases); weak legislative oversight (declining parliamentary sittings and debates); erosion of institutional autonomy (CBI, ED, RBI); and the use of ordinances and money bills to bypass parliamentary scrutiny. Constitutionalism requires constant vigilance — it is a 'living culture' that must be nurtured, defended, and strengthened through active citizen engagement.",
      "भारत का संविधानवाद रिकॉर्ड मिश्रित है। मजबूत पक्ष: स्वतंत्र न्यायपालिका (केशवानंद, बोम्मई, मेनका गांधी), जीवंत नागरिक समाज और प्रेस, RTI, नियमित चुनाव। कमजोरियां: अनु. 356 का दुरुपयोग (125+ बार), न्यायिक विलंब (3+ करोड़ लंबित मामले), कमजोर विधायी निगरानी, संस्थागत स्वायत्तता का क्षरण (CBI, ED, RBI), अध्यादेश और धन विधेयकों का दुरुपयोग। संविधानवाद को निरंतर सतर्कता की आवश्यकता है — यह एक 'जीवंत संस्कृति' है जिसे सक्रिय नागरिक भागीदारी के माध्यम से पोषित, संरक्षित और मजबूत करना होगा।"
    ],
    conclusion: [
      "Constitutionalism is the bedrock of democratic governance. It transforms a constitution from a mere document into a living framework that protects citizens from arbitrary power. In India, constitutionalism has been strengthened through landmark judicial pronouncements, institutional innovations, and active citizen engagement. The Basic Structure doctrine serves as the ultimate safeguard against constitutional subversion. However, constitutionalism is not self-executing — it depends on 'constitutional morality' (Ambedkar), an alert citizenry, independent institutions, and a political culture that respects constitutional boundaries. As Granville Austin noted, the success of Indian constitutionalism lies not just in the text but in 'working' the Constitution democratically.",
      "संविधानवाद लोकतांत्रिक शासन की आधारशिला है। यह संविधान को मात्र दस्तावेज से एक जीवंत ढांचे में बदलता है जो नागरिकों को मनमानी शक्ति से बचाता है। भारत में संविधानवाद ऐतिहासिक न्यायिक निर्णयों, संस्थागत नवाचारों और सक्रिय नागरिक भागीदारी से मजबूत हुआ है। मूल ढांचा सिद्धांत संवैधानिक विध्वंस के विरुद्ध अंतिम सुरक्षा कवच है। फिर भी, संविधानवाद स्वतः क्रियान्वित नहीं होता — यह 'संवैधानिक नैतिकता' (आंबेडकर), सतर्क नागरिक, स्वतंत्र संस्थाओं और संवैधानिक सीमाओं का सम्मान करने वाली राजनीतिक संस्कृति पर निर्भर है।"
    ],
    shortQ: [
      ["Define constitutionalism. How is it different from a constitution?", "संविधानवाद को परिभाषित करें। यह संविधान से कैसे भिन्न है?"],
      ["Explain the Rule of Law as propounded by A.V. Dicey.", "ए.वी. डायसी द्वारा प्रतिपादित कानून के शासन की व्याख्या करें।"],
      ["What is judicial review and why is it important for constitutionalism?", "न्यायिक समीक्षा क्या है और संविधानवाद के लिए क्यों महत्वपूर्ण है?"],
      ["What is the relationship between constitutionalism and limited government?", "संविधानवाद और सीमित सरकार के बीच क्या संबंध है?"],
      ["How does the Basic Structure doctrine promote constitutionalism in India?", "मूल ढांचा सिद्धांत भारत में संविधानवाद को कैसे बढ़ावा देता है?"],
    ],
    longQ: [
      ["Define constitutionalism and discuss its essential characteristics in detail.", "संविधानवाद को परिभाषित करें और इसकी आवश्यक विशेषताओं पर विस्तार से चर्चा करें।"],
      ["'A constitution without constitutionalism is merely a document.' Discuss with examples.", "'संविधानवाद के बिना संविधान मात्र एक दस्तावेज है।' उदाहरणों के साथ चर्चा करें।"],
      ["Discuss the role of judicial review in promoting constitutionalism in India.", "भारत में संविधानवाद को बढ़ावा देने में न्यायिक समीक्षा की भूमिका पर चर्चा करें।"],
      ["Critically examine the challenges to constitutionalism in contemporary India.", "समकालीन भारत में संविधानवाद की चुनौतियों का आलोचनात्मक परीक्षण करें।"],
      ["How does the separation of powers contribute to constitutionalism? Discuss with reference to India.", "शक्तियों का पृथक्करण संविधानवाद में कैसे योगदान देता है? भारत के संदर्भ में चर्चा करें।"],
    ],
    mcqs: [
      { q: ["Constitutionalism means:", "संविधानवाद का अर्थ है:"], opts: [["Having a written constitution", "लिखित संविधान"], ["Limited government under rule of law", "कानून शासन में सीमित सरकार"], ["Parliamentary supremacy", "संसदीय सर्वोच्चता"], ["Absolute monarchy", "निरपेक्ष राजतंत्र"]], correct: 1 },
      { q: ["Who wrote 'Law of the Constitution' (1885)?", "'Law of the Constitution' (1885) — किसने लिखा?"], opts: [["Dicey", "डायसी"], ["Jennings", "जेनिंग्स"], ["Sartori", "सार्तोरी"], ["Hayek", "हायेक"]], correct: 0 },
      { q: ["The principle of judicial review in India is derived from:", "भारत में न्यायिक समीक्षा का सिद्धांत कहां से लिया गया?"], opts: [["UK", "UK"], ["USA", "USA"], ["USSR", "USSR"], ["France", "फ्रांस"]], correct: 1 },
      { q: ["Which Article declares laws inconsistent with FRs void?", "कौन सा अनुच्छेद मौलिक अधिकारों से असंगत कानून शून्य घोषित करता है?"], opts: [["Art 12", "अनु. 12"], ["Art 13", "अनु. 13"], ["Art 14", "अनु. 14"], ["Art 32", "अनु. 32"]], correct: 1 },
      { q: ["'Where there is discretion, there is room for arbitrariness' — who said?", "'जहां विवेकाधिकार, वहां मनमानी' — किसने?"], opts: [["Sartori", "सार्तोरी"], ["Dicey", "डायसी"], ["Montesquieu", "मोंटेस्क्यू"], ["Hayek", "हायेक"]], correct: 1 },
    ],
    ugcNotes: [
      "UGC NET FOCUS:\n• Difference: Constitution (document) vs Constitutionalism (culture/philosophy)\n• A.V. Dicey — Rule of Law: 3 principles\n• Montesquieu — Separation of Powers\n• Judicial Review: Art 13, 32, 226, Marbury v. Madison (USA, 1803)\n• Basic Structure (Kesavananda Bharati, 1973) — ultimate constitutionalism safeguard\n• Art 368 — Amendment power limited by Basic Structure\n• Key cases: Golaknath (1967 — FRs cannot be amended), Kesavananda (1973 — Basic Structure), Minerva Mills (1980 — harmony between FRs and DPSPs), I.R. Coelho (2007 — 9th Schedule subject to judicial review)\n• 'Constitutional morality' — Ambedkar's concept\n• Art 50 — separation of judiciary from executive (DPSP)",
      "UGC NET फोकस:\n• संविधान बनाम संविधानवाद\n• डायसी — कानून का शासन (3 सिद्धांत)\n• मोंटेस्क्यू — शक्तियों का पृथक्करण\n• न्यायिक समीक्षा: अनु. 13, 32, 226\n• मारबरी बनाम मैडिसन (USA, 1803)\n• मूल ढांचा (केशवानंद भारती)\n• गोलकनाथ (1967), मिनर्वा मिल्स (1980), आई.आर. कोएल्हो (2007)\n• 'संवैधानिक नैतिकता' — आंबेडकर\n• अनु. 50 — कार्यपालिका से न्यायपालिका का पृथक्करण"
    ],
    ugcQ: [
      ["Q: Constitution vs Constitutionalism? A: Constitution = document; Constitutionalism = doctrine of limited government under rule of law.", "प्र: संविधान बनाम संविधानवाद? उ: संविधान = दस्तावेज; संविधानवाद = कानून शासन में सीमित सरकार का सिद्धांत।"],
      ["Q: Dicey's 3 principles of Rule of Law? A: (1) No arbitrary punishment, (2) Equality before law, (3) Constitution as result of judicial decisions.", "प्र: डायसी के कानून शासन के 3 सिद्धांत? उ: कोई मनमाना दंड नहीं; कानून के समक्ष समानता; संविधान न्यायिक निर्णयों का परिणाम।"],
      ["Q: Marbury v. Madison (1803) established which principle? A: Judicial Review — power of courts to strike down unconstitutional laws.", "प्र: मारबरी बनाम मैडिसन (1803) ने कौन सा सिद्धांत स्थापित किया? उ: न्यायिक समीक्षा।"],
      ["Q: 'Constitutional morality' concept by? A: Dr. B.R. Ambedkar.", "प्र: 'संवैधानिक नैतिकता' अवधारणा किसकी? उ: डॉ. बी.आर. आंबेडकर।"],
      ["Q: Art 50 of Indian Constitution provides for? A: Separation of judiciary from executive in public services.", "प्र: भारतीय संविधान का अनु. 50 क्या प्रदान करता है? उ: सार्वजनिक सेवाओं में कार्यपालिका से न्यायपालिका का पृथक्करण।"],
    ],
  },
];

/* ─── COMPONENT ─── */
export default function DetailedNotesPage() {
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
              PSC-F-101: Elementary Political Science
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t('PG Semester I — Detailed Bilingual Notes', 'PG सेमेस्टर I — विस्तृत द्विभाषी नोट्स')}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-5 text-white mb-8">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">{t('Paper Code: PSC-F-101', 'पेपर कोड: PSC-F-101')}</span>
          </div>
          <p className="text-sm text-white/80">
            {t('5 Credits | 60 Lectures + 15 Tutorials | Full Marks: 100 (End Sem: 70 + Internal: 30) | 9 Topics', '5 क्रेडिट | 60 लेक्चर + 15 ट्यूटोरियल | पूर्णांक: 100 (सेमेस्टर: 70 + आंतरिक: 30) | 9 विषय')}
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
            {t('All 9 Topics Complete! Full PSC-F-101 notes with 5-part structure, MCQs & UGC NET Prep ready.', 'सभी 9 विषय पूर्ण! 5-भाग संरचना, MCQ और UGC NET तैयारी के साथ संपूर्ण PSC-F-101 नोट्स तैयार।')}
          </p>
        </div>
      </div>
    </div>
  );
}
