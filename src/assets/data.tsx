import blokpartylogo from "./exps/blokparty.png";
import vclalogo from "./exps/vcla.png";
import devxlogo from "./exps/devx.png";
import trclogo from "./exps/trc.png";
import dropboxlogo from "./exps/dropbox.png";
import brexlogo from "./exps/brex.png";

// Below are project logos
import pulplogo from "./projs/pulplogo.png";
import recruitmeLogo from "./projs/recruitme.png";
import RLlogo from "./projs/rl-research.png";
import loanlogo from "./projs/loan.png";

export var experiences = [
  {
    company: "Brex",
    title: "Incoming Software Engineer",
    startdate: new Date(2022, 4),
    enddate: null,
    bullets: [],
    logo: brexlogo,
    link: "https://brex.com/",
  },
  {
    company: "Dropbox",
    title: "Software Engineering Intern",
    startdate: new Date(2021, 5),
    enddate: new Date(2021, 8),
    bullets: [
      "Top Performing Intern, re-designed Filesystem and Passwords supportability libraries using gRPC, Protobufs, Python, and Dropbox's in-house microservices framework.",
    ],
    logo: dropboxlogo,
    link: "https://dropbox.com/",
  },
  {
    company: "The Routing Company",
    title: "Software Engineering Intern",
    startdate: new Date(2020, 6),
    enddate: new Date(2020, 9),
    bullets: [
      "Developing microservices using Golang, GraphQL, and InfluxDB for Routable AI's route optimization API.",
    ],
    logo: trclogo,
    link: "https://theroutingcompany.com/",
  },
  {
    company: "Center for Vision, Cognition, Learning, and Autonomy",
    title: "Research Intern",
    startdate: new Date(2020, 3),
    enddate: null,
    bullets: [
      "Research in Reinforcement Learning for path planning for self-driving vehicles under simulated environments.",
      "Simulate and improve behaviors of reinforcement learning agents in unknown environments with PyTorch.",
      "Contributed to an open-source vehicle simulation and data collection tool in C++ under GTA environment.",
    ],
    logo: vclalogo,
    link: "https://vcla.stat.ucla.edu/",
  },
  {
    company: "Blok Party",
    title: "Software Engineering Intern",
    startdate: new Date(2019, 5),
    enddate: new Date(2019, 8),
    bullets: [
      "Designed and updated PlayTable’s user interface to a more friendly and modern UI using Android Studio.",
      "Created Profile caching mechanism to store user’s profile information locally and updates every 24 hours.",
      "Implemented a payment flow that enables users to purchase games and smart pieces and a SetupWizard that guides users through the device setup process.",
    ],
    logo: blokpartylogo,
    link: "https://blok.party/",
  },

  {
    company: "UCLA DevX",
    title: "Frontend Lead @ Pulp",
    startdate: new Date(2019, 4),
    enddate: new Date(2019, 7),
    bullets: [
      "Led the frontend development of Pulp, an experience recommendation app for college students.",
      "Created with log-in page, map view, and recommendation list page in native iOS (Swift) along with Cocoapods.",
      "Created the work flow and led a team of 3 frontend developers and collaborated with backend developers.",
    ],
    logo: devxlogo,
    link: "https://www.notion.so/devxteams/Pulp-bfe290f0dead47698d99cdfef9abacc1",
  },
];

export var projs = [
  {
    title: "RecruitMe",
    pic: recruitmeLogo,
    desc: "RecruitMe seeks to provide an end-to-end solution for campus organization recruitment pipeline management. It is a single platform to manage the entire process from marketing, candidate application, to automated acceptance & rejection.",
    link: "https://github.com/camm73/ClubRecruiter",
  },
  {
    title: "Reinforcement Learning Research",
    pic: RLlogo,
    desc: "Python implementation of Q-learning, SARSA, SARSA-n, Monte Carlo, and a few other policy evaluation reinforcement learning algorithms",
    link: "https://github.com/AndyJCai/rl-research/blob/master/assignment-2/assignment2.ipynb",
  },

  {
    title: "SF Bay Area Loans Website",
    pic: loanlogo,
    desc: "Website for a Bay Area loan manager to collect the financial information from a client and send it in a formatted email to the manager. Developed with React.js and Flask. Deployed on Heroku.",
    link: "http://www.sfbayarealoan.com/",
  },
  {
    title: "Pulp",
    pic: pulplogo,
    desc: "pulp provides personalized recommendations to help you find your next destination. Designed for all kinds of travelers from all walks of life, finding things to do in an old or new city is easy with pulp.",
    link: "https://github.com/AndyJCai/pulp-frontend",
  },
];
