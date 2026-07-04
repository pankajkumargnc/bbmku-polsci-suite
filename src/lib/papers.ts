// BBMKU Paper Registry — all papers across 4 semesters
// Type: F=Foundation, C=Core, S=SEC, A=Open Elective, E=DCE, D=Dissertation

export interface PaperMeta {
  code: string;
  type: 'F' | 'C' | 'S' | 'A' | 'E' | 'D';
  typeLabel: string;
  credits: string;
  lectures: string;
  fullMarks: number;
  endSem: number;
  internal: number;
  semId: string;
  title: string;
  titleHi: string;
  detailedSlug: string | null; // null = no detailed notes yet
  topicsCount: number;
}

export const papers: PaperMeta[] = [
  // ─── SEMESTER I ───
  { code:'PSC-F-101', type:'F', typeLabel:'Foundation', credits:'5 Credits', lectures:'60 Lectures + 15 Tutorials', fullMarks:100, endSem:70, internal:30, semId:'sem1',
    title:'Elementary Political Science', titleHi:'एलिमेंट्री पॉलिटिकल साइंस', detailedSlug:'/syllabus/f101', topicsCount:9 },
  { code:'PSC-C-102', type:'C', typeLabel:'Core', credits:'5 Credits', lectures:'60 Lectures + 15 Tutorials', fullMarks:100, endSem:70, internal:30, semId:'sem1',
    title:'Indian Political Thought', titleHi:'भारतीय राजनीतिक विचार', detailedSlug:'/syllabus/f102', topicsCount:8 },
  { code:'PSC-C-103', type:'C', typeLabel:'Core', credits:'5 Credits', lectures:'60 Lectures + 15 Tutorials', fullMarks:100, endSem:70, internal:30, semId:'sem1',
    title:'Political Theory', titleHi:'पॉलिटिकल थ्योरी', detailedSlug:'/syllabus/f103', topicsCount:9 },
  { code:'PSC-C-104', type:'C', typeLabel:'Core', credits:'5 Credits', lectures:'60 Lectures + 15 Tutorials', fullMarks:100, endSem:70, internal:30, semId:'sem1',
    title:'Indian Government and Politics', titleHi:'इंडियन गवर्नमेंट एंड पॉलिटिक्स', detailedSlug:'/syllabus/f104', topicsCount:9 },

  // ─── SEMESTER II ───
  { code:'PSC-S-205', type:'S', typeLabel:'SEC', credits:'5 Credits', lectures:'60 Lectures + 15 Tutorials', fullMarks:100, endSem:70, internal:30, semId:'sem2',
    title:'Academic Writing & Communication Skill', titleHi:'अकादमिक लेखन और संचार कौशल', detailedSlug:'/syllabus/s205', topicsCount:8 },
  { code:'PSC-C-206', type:'C', typeLabel:'Core', credits:'5 Credits', lectures:'60 Lectures + 15 Tutorials', fullMarks:100, endSem:70, internal:30, semId:'sem2',
    title:'Theories of International Politics', titleHi:'थ्योरीज़ ऑफ इंटरनेशनल पॉलिटिक्स', detailedSlug:'/syllabus/c206', topicsCount:9 },
  { code:'PSC-C-207', type:'C', typeLabel:'Core', credits:'5 Credits', lectures:'60 Lectures + 15 Tutorials', fullMarks:100, endSem:70, internal:30, semId:'sem2',
    title:'Public Administration', titleHi:'पब्लिक एडमिनिस्ट्रेशन', detailedSlug:'/syllabus/c207', topicsCount:8 },
  { code:'PSC-C-208', type:'C', typeLabel:'Core', credits:'5 Credits', lectures:'60 Lectures + 15 Tutorials', fullMarks:100, endSem:70, internal:30, semId:'sem2',
    title:'Western Political Thought', titleHi:'वेस्टर्न पॉलिटिकल थॉट', detailedSlug:'/syllabus/c208', topicsCount:10 },

  // ─── SEMESTER III ───
  { code:'PSC-A-309', type:'A', typeLabel:'Open Elective', credits:'5 Credits', lectures:'60 Lectures + 15 Tutorials', fullMarks:100, endSem:70, internal:30, semId:'sem3',
    title:'Human Rights', titleHi:'मानवाधिकार (ह्यूमन राइट्स)', detailedSlug:'/syllabus/a309', topicsCount:8 },
  { code:'PSC-C-310', type:'C', typeLabel:'Core', credits:'5 Credits', lectures:'60 Lectures + 15 Tutorials', fullMarks:100, endSem:70, internal:30, semId:'sem3',
    title:'Politics of Jharkhand', titleHi:'पॉलिटिक्स ऑफ झारखंड', detailedSlug:'/syllabus/c310', topicsCount:8 },
  { code:'PSC-C-311', type:'C', typeLabel:'Core', credits:'5 Credits', lectures:'60 Lectures + 15 Tutorials', fullMarks:100, endSem:70, internal:30, semId:'sem3',
    title:'Political Sociology', titleHi:'पॉलिटिकल सोशियोलॉजी', detailedSlug:'/syllabus/c311', topicsCount:8 },
  { code:'PSC-C-312', type:'C', typeLabel:'Core', credits:'5 Credits', lectures:'60 Lectures + 15 Tutorials', fullMarks:100, endSem:70, internal:30, semId:'sem3',
    title:'Contemporary Political Issues', titleHi:'कंटेम्पररी पॉलिटिकल इश्यूज़', detailedSlug:'/syllabus/c312', topicsCount:8 },

  // ─── SEMESTER IV ───
  { code:'PSC-E-413A', type:'E', typeLabel:'Group A', credits:'5 Credits', lectures:'60 Lectures + 15 Tutorials', fullMarks:100, endSem:70, internal:30, semId:'sem4',
    title:'International Organization', titleHi:'अंतर्राष्ट्रीय संगठन', detailedSlug:'/syllabus/e413a', topicsCount:9 },
  { code:'PSC-E-413B', type:'E', typeLabel:'Group B', credits:'5 Credits', lectures:'60 Lectures + 15 Tutorials', fullMarks:100, endSem:70, internal:30, semId:'sem4',
    title:'Indian Foreign Policy', titleHi:'भारतीय विदेश नीति', detailedSlug:'/syllabus/e413b', topicsCount:8 },
  { code:'PSC-E-413C', type:'E', typeLabel:'Group C', credits:'5 Credits', lectures:'60 Lectures + 15 Tutorials', fullMarks:100, endSem:70, internal:30, semId:'sem4',
    title:'Politics of Developing Countries', titleHi:'विकासशील देशों की राजनीति', detailedSlug:'/syllabus/e413c', topicsCount:8 },
  { code:'PSCE-414A', type:'E', typeLabel:'Group A', credits:'5 Credits', lectures:'60 Lectures + 15 Tutorials', fullMarks:100, endSem:70, internal:30, semId:'sem4',
    title:'International Law', titleHi:'अंतर्राष्ट्रीय कानून', detailedSlug:'/syllabus/e414a', topicsCount:8 },
  { code:'PSCE-414B', type:'E', typeLabel:'Group B', credits:'5 Credits', lectures:'60 Lectures + 15 Tutorials', fullMarks:100, endSem:70, internal:30, semId:'sem4',
    title:'Foreign Policy of Major Powers', titleHi:'प्रमुख शक्तियों की विदेश नीति', detailedSlug:'/syllabus/e414b', topicsCount:8 },
  { code:'PSCE-414C', type:'E', typeLabel:'Group C', credits:'5 Credits', lectures:'60 Lectures + 15 Tutorials', fullMarks:100, endSem:70, internal:30, semId:'sem4',
    title:'Contemporary Issues of Indian Politics', titleHi:'भारतीय राजनीति के समकालीन मुद्दे', detailedSlug:'/syllabus/e414c', topicsCount:8 },
  { code:'PSC-C-415', type:'C', typeLabel:'Core', credits:'5 Credits', lectures:'60 Lectures + 15 Tutorials', fullMarks:100, endSem:70, internal:30, semId:'sem4',
    title:'Comparative Government and Politics', titleHi:'कम्पेरेटिव गवर्नमेंट एंड पॉलिटिक्स', detailedSlug:'/syllabus/c415', topicsCount:7 },
  { code:'PSC-D-416', type:'D', typeLabel:'Dissertation', credits:'5 Credits', lectures:'150 Lectures', fullMarks:100, endSem:70, internal:30, semId:'sem4',
    title:'Research Methodology — Dissertation/Project', titleHi:'रिसर्च मेथडोलॉजी — शोध प्रबंध/प्रोजेक्ट', detailedSlug:'/syllabus/d416', topicsCount:6 },
];

export const semesterMeta = [
  { id:'sem1', name:'Semester I', nameHi:'सेमेस्टर I', icon:'📘', color:'from-blue-600 to-indigo-700' },
  { id:'sem2', name:'Semester II', nameHi:'सेमेस्टर II', icon:'📗', color:'from-emerald-600 to-teal-700' },
  { id:'sem3', name:'Semester III', nameHi:'सेमेस्टर III', icon:'📙', color:'from-orange-600 to-amber-700' },
  { id:'sem4', name:'Semester IV', nameHi:'सेमेस्टर IV', icon:'📕', color:'from-rose-600 to-pink-700' },
];
