import blokpartylogo from "./exps/blokparty.png";
import vclalogo from "./exps/vcla.png";

export var experiences = [
  {
    company: "UCLA VCLA",
    title: "Research Intern",
    startdate: new Date(2020, 4),
    enddate: null,
    bullets: [
      "Developing Social LSTM Model in Autonomous Simulations for path prediction and planning",
    ],
    logo: vclalogo,
    link: "https://vcla.stat.ucla.edu/",
  },
  {
    company: "Blok Party",
    title: "Software Development Engineer Intern",
    startdate: new Date(2019, 6),
    enddate: new Date(2019, 9),
    bullets: ["Designed and updated PlayTable’s user interface to a more friendly and modern UI using Android Studio.",
    "Created Profile caching mechanism to store user’s profile information locally and updates every 24 hours.",
    "Implemented a payment flow that enables users to purchase games and smart pieces and a SetupWizard that guides users through the device setup process."],
    logo: blokpartylogo,
    link: "https://blok.party/",
  },
];

export var projs = [
  {
    title: "SF Bay Area Loans Website",
    pic: null,
    desc:
      "<em> Simulataneous Location and Mapping (SLAM). <em> Generates 3D scene by plotting points in free space triangulated by features extracted from MP4's.",
    link: "",
  },
];