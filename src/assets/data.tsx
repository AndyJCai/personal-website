import blokpartylogo from "./exps/blokparty.png";
import vclalogo from "./exps/vcla.png";
import devxlogo from './exps/devx.png';
import routablelogo from './exps/routableai.png';

// Below are project logos
import pulplogo from './projs/pulplogo.png';
import climalogo from './projs/Clima-Icon.png'

export var experiences = [
  {
    company: "Routable AI",
    title: "Software Engineering Intern",
    startdate: new Date(2020, 7),
    enddate: null,
    bullets: [
      "Developing microservices using Golang, GraphQL, and InfluxDB for Routable AI's route optimization API.",
    ],
    logo: routablelogo,
    link: "http://routable.ai/",
  },
  {
    company: "Center for Vision, Cognition, Learning, and Autonomy",
    title: "Research Intern",
    startdate: new Date(2020, 4),
    enddate: null,
    bullets: [
      "Research in Reinforcement Learning for path planning for self-driving vehicles under simulated environments.",
      "Simulate and improve behaviors of reinforcement learning agents in unknown environments with PyTorch.",
      "Contributed to an open-source vehicle simulation and data collection tool in C++ under GTA environment."
    ],
    logo: vclalogo,
    link: "https://vcla.stat.ucla.edu/",
  },
  {
    company: "Blok Party",
    title: "Software Engineering Intern",
    startdate: new Date(2019, 5),
    enddate: new Date(2019, 8),
    bullets: ["Designed and updated PlayTable’s user interface to a more friendly and modern UI using Android Studio.",
    "Created Profile caching mechanism to store user’s profile information locally and updates every 24 hours.",
    "Implemented a payment flow that enables users to purchase games and smart pieces and a SetupWizard that guides users through the device setup process."],
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
      "Created the work flow and led a team of 3 frontend developers and collaborated with backend developers."
  ],
    logo: devxlogo,
    link: "https://www.notion.so/devxteams/Pulp-bfe290f0dead47698d99cdfef9abacc1",
  },
];

export var projs = [
  {
    title: "Reinforcement Learning Research",
    pic: null,
    desc:
      "Python implementation of Q-learning, SARSA, SARSA-n, Monte Carlo, and a few other policy evaluation reinforcement learning algorithms",
    link: "https://github.com/AndyJCai/rl-research/blob/master/assignment-2/assignment2.ipynb",
  },

  {
    title: "SF Bay Area Loans Website",
    pic: null,
    desc:
      "Website for a Bay Area loan manager to collect the financial background and information from a client, and sends it in a formatted email to the manager. Developed with React.js frontend, Flask backend, and deployed on Heroku.",
    link: "http://www.sfbayarealoan.com/",
  },
  {
    title: "Pulp",
    pic: pulplogo,
    desc:
      "pulp provides personalized recommendations to help you find your next destination. Designed for all kinds of travelers from all walks of life, finding things to do in an old or new city is easy with pulp.",
    link: "https://github.com/AndyJCai/pulp-frontend",
  },
  {
    title: "Clima",
    pic: climalogo,
    desc:
      "Clima is a weather application that updates the weather data according to your current location. Developed this for fun and to learn basic iOS development.",
    link: "https://github.com/AndyJCai/Clima-iOS11",
  }
];