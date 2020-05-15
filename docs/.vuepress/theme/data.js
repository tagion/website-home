const teamMembers = [
  {
    name: "Theis Simonsen",
    title: "CEO, Co-founder",
    image: "/team/t-simonsen.jpg",
    about: `Strategist, developer, lecturer and executive. Before Tagion, Theis served as a senior consultant at KPMG and an external lecturer at Copenhagen Business School.`,
    link: "https://www.linkedin.com/in/theis-simonsen-32035313/"
  },
  {
    name: "Carsten Bleser Rasmussen",
    title: "CTO, Co-founder",
    image: "/team/c-rasmussen.jpg",
    about: `Low-level architecture and core network concepts. Before Tagion, co-founded Polaric Semiconductor as a CTO, leading team that was engineering NFC and Bluetooth chips.`,
    link: "https://www.linkedin.com/in/carsten-bleser-rasmussen-80699915/"
  },
  {
    name: "Kristian Verstergaard",
    title: "CCO, Co-founder",
    image: "/team/k-vestergaard.jpg",
    about: `Software architect and leader. Before Tagion, was a Director, Digital Strategist and Architect in Jabra. Before that, a tutor and consultant for IBM and PwC and GDPR consultant at Ørsted`,
    link: "https://www.linkedin.com/in/kristian-vestergaard-a59b4a/"
  },
  {
    name: "Tobias Ambs-Thomsen",
    title: "CMO, part owner",
    image: "/team/t-thomsen.jpg",
    about: `Over 20 years in visual communication and marketing in both advertising agencies and large companies. Was Marketing Director at ACT.Global leading them to seven new international markets.`,
    link: "https://www.linkedin.com/in/tambsthomsen/"
  },
  {
    name: "James Godfrey",
    title: "Chief Investment Officer",
    image: "/team/j-godfrey.jpg",
    about: `Over 30 years of management experience in the banking sector. Leading in Union Bank of Switzerland, Mizuho International and Nomura International plc.`,
    link: "https://www.linkedin.com/in/james-godfrey-9248754a/"
  },
  {
    name: "Roxana Nasoi",
    title: "Cheif Strategy Officer",
    image: "/team/r-nasoi.jpg",
    about: `Over 10 years of experience in online business. Co-chairman and Head of Community at Hong Kong Israel Trade Association, partner at Aimedis, a board member at Impulse4women, and advisor for Ideagist Blockchain Incubator. Before that - Elance / Upwork ambassador for 6 years. Roxana wears many hats, literally.`,
    link: "https://www.linkedin.com/in/roxananasoi/"
  },
  {
    name: "Carsten Keutmann",
    title: "Core Developer, Digital Trust Protocol",
    image: "/team/c-keutmann.jpg",
    about: `Over 20 years of experience working with software architecture and development. Specialized on the SharePoint platform working as an independent consultant, awarded six times Microsoft SharePoint MVP. Worked with open-source digital trust protocol for the last 3 years.`,
    link: "https://www.linkedin.com/in/keutmann/"
  },
  {
    name: "Shane McQuillan",
    title: "Chief Growth Officer​",
    image: "/team/s-mcquillan.jpg",
    about: `Over 25 years of experience working with startups in all aspects and stages. Has been at the forefront of development with Blockchain based startups. CEO and founder at TrustedIn Trading.`,
    link: "https://www.linkedin.com/in/startupadviser/"
  },
  {
    name: "Leif Bloch Rasmussen",
    title: "Economic Governance Advisor",
    image: "/team/l-rasmussen.jpg",
    about: `Associate professor at Copenhagen Business School. Spent his career as an academic worked with Commons, IT Governance, cybernetics information systems and converging of technologies.`,
    link: "https://www.linkedin.com/in/leif-bloch-rasmussen-38663a4/"
  },
  {
    name: "Richard Kastelein",
    title: "Communications, Marketing & Strategy",
    image: "/team/r-kastalein.jpg",
    about: `Honorary Ph.D. at Jiangxi Ahead Institute of Software & Technology (Blockchain Faculty) in China. Publisher Blockchain News, Director Token. Agency, Blockchain Partners.`,
    link: "https://www.linkedin.com/in/expathos/"
  },

  {
    name: "Michael Harboe",
    title: "Strategic Advisor",
    image: "/team/m-harboe.jpg",
    about: `The main focus is the exploration of business opportunities in the utilization of augmented, virtual and mixed reality technologies. Skilled enterprise strategist, with solid cross function experience of business management, sales, IT, marketing and communication.`,
    link: "https://www.linkedin.com/in/michaelharboedk/"
  },
  {
    name: "Michael Avital",
    title: "External Advisor",
    image: "/team/m-avital.jpg",
    about: `Specializing in blockchain transformation and development, he is constructing a generative and open path of knowledge work. Michael has a PhD from a Case Western Reserve University. Now, a professor at Copenhagen Business School.`,
    link: "https://www.linkedin.com/in/michelavital/"
  },
  {
    name: "Vlad Pazych",
    title: "Product Owner",
    image: "/team/v-pazych.jpg",
    about: `He is experienced in UI design, full-stack web development and contributed to multiple high-stake commercial and open-source projects. Vlad is managing the development of apps that will drive adoption of the Tagion Network.`,
    link: "https://www.linkedin.com/in/vladpazych/"
  },
  {
    name: "Oleksandr Sushko",
    title: "System Engineer",
    image: "/team/a-sushko.jpg",
    about: `Alex brings years of experience in application and system-level engineering to Tagion Core team. Prior to Tagion, he was leading the development of multiple vital in-house enterprise solutions.`,
    link: "https://www.linkedin.com/in/oleksandr-sushko-691b0313a/"
  },
  {
    name: "Anton Labensky",
    title: "Mobile Developer",
    image: "/team/a-labenskyi.jpg",
    about: `Years of experience in mobile app development and server solutions. Anton fulfils his passion for user experience design, creating well-thought-out user interfaces that users will love to face.`,
    link: "https://www.linkedin.com/in/labenskiyantondev/"
  },
  {
    name: "Oksana Perederii",
    title: "Marketer",
    image: "/team/o-perederii.jpg",
    about: `Oksana is a truly talented talent hunter. Apart from that, she contributes a lot to marketing and business development. Before Tagion, Oksana was Project Manager and took various marketing roles in Together Networks, Kyiv Post, and MIZOL. Oksana has a Master's degree in Enterprise Economics.`,
    link: "https://www.linkedin.com/in/oksana-perederii-a0237942/"
  },
];

const seo = {
  domain: 'https://tagion.org',
  title: "Tagion",
  headline: "Universal Token Protocol",
  tagline: "Inclusive. Elastic. Decentralized. Distributed.",
  description:
    "Tagion is a universal token protocol, that enables digital peer-to-peer cryptocurrency and a decentralized exchange, governed by its users. By design, Tagion network has no central authority and belongs to all its users. It will be open-sourced and open for everyone to join once the software is ready."
};

module.exports = {
  teamMembers,
  seo
};
