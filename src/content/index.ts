export type TimelineElement = {
  title: string;
  subtitle: string;
  bullets: string[];
  outcome: string;
  date: string;
};

export const TIMELINE: TimelineElement[] = [
  {
    title: 'MSc User Experience Design',
    subtitle: 'Kingston University | London, UK',
    bullets: [
      'Dissertation: The design and experimental evaluation of a mobile application for habit formation using tested behavioural changetechniques',
    ],
    outcome:
      'Confidence in qualitative data collection and analysis, as well as prototype design from low-fidelity sketches  to high-fidelity, responsive prototypes.',
    date: '2023',
  },
  {
    title: 'Victim Liaison Officer',
    subtitle: 'HM Prison and Probation Service | London, UK',
    bullets: [
      'Communicated complex policy and sensitive information to a diverse group of service users, while listening and respondingempathetically to their concerns and needs',
      'Managed a large caseload requiring prioritisation and flexibility',
    ],
    outcome:
      'Active listening to understand user needs and the ability to advocate for users.',
    date: '2022',
  },
  {
    title: 'Assistant Psychologist',
    subtitle: 'BEH Mental Health NHS Trust | London, UK',
    bullets: [
      'Coordinated and co-delivered therapeutic interventions',
      'Facilitated focus groups and analysed date to inform the service',
      'Assisted to develop a database of community resources',
    ],
    outcome:
      'Used supervision with a clinical psychologist to reflect on experience with service users to improve my approach to working with the public.',
    date: '2021',
  },
  {
    title: 'Graduate Researcher',
    subtitle: 'Douglas Mental Health Institute | Montreal, Canada',
    bullets: [
      'Taught research methodology to early researchers',
      'Collected and statistically analysed quantitative data collected from four distinct research methods',
    ],
    outcome:
      'Learned how to synthesise findings from multiple sourcesand clearly communicate findings and opportunities for future research.',
    date: '2021',
  },
  {
    title: 'MSc Neuroscience',
    subtitle: 'McGill University | Montreal, Canada',
    bullets: [
      'Dissertation: A longitudinal, multi-method, quantitative study of early Alzheimer’s progression',
      'An independent, research-based, multi-year postgraduate degree',
    ],
    outcome:
      'Confidence in asking for advice from senior researchers and in conducting independent research projects withmultiple research methods.',
    date: '2020',
  },
  {
    title: 'Research Assistant',
    subtitle: 'Jordan Lab and Servos Lab | Waterloo, Canada',
    bullets: [
      'Conducted research in social psychology and cognitive neuroscience labs',
      'Manage in-person and remote experiments, including user interviews and survey distribution',
    ],
    outcome:
      'Learned how to conduct research, including the collection and analysis of qualitative and quantitative data.',
    date: '2013',
  },
  {
    title: 'BSc Psychology',
    subtitle: 'Wilfrid Laurier University | Waterloo, Canada',
    bullets: [
      'Dissertation: A qualitative and quantitative investigation into the positive effects of interpersonal touch',
      'Semester abroad at the University of Dundee',
    ],
    outcome:
      'Developed a foundational understanding of how people behave and make decisions, and the neuroscience behind this.',
    date: '2013',
  },
];
