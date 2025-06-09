type Project = {
  path: string;
  title: string;
  description: string;
};

export const PROJECTS: Project[] = [
  {
    path: "coach",
    title: "Hello Kat ",
    description:
      "The design and experimental evaluation of a mobile application for exercise habit formation using behavioural changes techniques"
  },
  {
    path: "two",
    title: "Project Two",
    description:
      "The design and experimental evaluation of a mobile application for exercise habit formation using behavioural changes techniques"
  },
  {
    path: "three",
    title: "Project Three",
    description:
      "The design and experimental evaluation of a mobile application for exercise habit formation using behavioural changes techniques"
  },
  {
    path: "four",
    title: "Project Four",
    description:
      "The design and experimental evaluation of a mobile application for exercise habit formation using behavioural changes techniques"
  }
];

export type TimelineElement = {
  title: string;
  description: string;
  date: string;
};

export const TIMELINE: TimelineElement[] = [
  {
    title: "BSc Psychology",
    description: "Wilfrid Laurier University, Canada",
    date: "2013"
  },
  {
    title: "Started First Job",
    description: "Began working as a UX researcher.",
    date: "2014"
  },
  {
    title: "Promoted to Senior UX Researcher",
    description: "Advanced to a senior position, leading research projects.",
    date: "2015"
  },
  {
    title: "Not quite yet",
    description: "Took on a leadership role in the UX design team.",
    date: "2016"
  }
];
