import {
  facebook,
  instagram,
  linkedin,
  twitter,
  send,
  shield,
  star,
  pathfindingvisualizer,
  expensetracker,
  dategenie,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  // {
  //   id: "about",
  //   title: "About",
  // },
  {
    id: "contact",
    title: "Contact",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Customisation",
    content:
      "We provide the extra ingredients you need to go from meh to YEAH!",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Satisfaction",
    content:
      "Life is too short for anything less than 100% satisfaction, let's work together to build what you need!",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Available",
    content:
      "We will respond within 24 hours of your inquiry, let's chat today!",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet.",
    name: "Peyton",
    title: "Co-Founder",
    img: "",
  },
  {
    id: "feedback-2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet.",
    name: "CK",
    title: "Co-Founder",
    img: "",
  },
  {
    id: "feedback-3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet.",
    name: "Brandon",
    title: "Co-Founder",
    img: "",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Happy Clients",
    value: "10+",
  },
  {
    id: "stats-2",
    title: "Projects Completed",
    value: "20+",
  },
  {
    id: "stats-3",
    title: "Consultants Available",
    value: "30+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Features",
        link: "http://localhost:5173/#features/",
      },
      {
        name: "Projects",
        link: "http://localhost:5173/#projects/",
      },
      {
        name: "Contact",
        link: "http://localhost:5173/#contact/",
      },
      {
        name: "Explore",
        link: "http://localhost:5173/explore/",
      },
      {
        name: "Terms & Services",
        link: "http://localhost:5173/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "http://localhost:5173/help-center/",
      },
      {
        name: "Partners",
        link: "http://localhost:5173/partners/",
      },
      {
        name: "Suggestions",
        link: "http://localhost:5173/suggestions/",
      },
      {
        name: "Blog",
        link: "http://localhost:5173/blog/",
      },
      {
        name: "Newsletters",
        link: "http://localhost:5173/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "http://localhost:5173/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "http://localhost:5173/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const projects = [
  {
    title: "Pathfinder Visualizer",
    description:
      "Utilizing djikstra's algorithm to find the shortest path from point A to point B",
    techstack: [
      { name: "css", color: "blue-text-gradient" },
      { name: "html", color: "orange-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
      { name: "jquery", color: "pink-text-gradient" },
    ],
    github: "https://github.com/jamesgayht/jamesgayht.github.io",
    deployment: "https://jamesgayht.github.io/",
    image: pathfindingvisualizer,
  },
  {
    title: "Expense Tracker",
    description:
      "Filter by overseas trips, categories and a dashboard for P3M comparison",
    techstack: [
      { name: "mongodb", color: "blue-text-gradient" },
      { name: "expressjs", color: "orange-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "nodejs", color: "pink-text-gradient" },
    ],
    github: "https://github.com/jamesgayht/expense-tracker",
    deployment: "https://pbj-mlm.vercel.app/",
    image: expensetracker,
  },
  {
    title: "DateGenie",
    description: "Generates ideas for dating spots in Singapore!",
    techstack: [
      { name: "angular", color: "blue-text-gradient" },
      { name: "java", color: "orange-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "aws-s3", color: "pink-text-gradient" },
    ],
    github: "https://github.com/jamesgayht/DateGenie",
    deployment: "",
    image: dategenie,
  },
];

export class Project {
  constructor(name, description, tags, image, source_code_link) {
    this.name = name;
    this.description = description;
    this.tags = tags;
    this.image = image;
    this.source_code_link = source_code_link;
  }
  name;
  description;
  tags;
  image;
  source_code_link;
}

export class Tag {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  name;
  color;
}

export const tagColors = [
  "blue-text-gradient",
  "orange-text-gradient",
  "green-text-gradient",
  "pink-text-gradient",
];
