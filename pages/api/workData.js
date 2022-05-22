export default function handler(req, res) {
  const workData = [
    {
      dateStart: "Jan 2022",
      dateEnd: "Present",
      position: "Full-stack Javascript Developer",
      company: "Upland Software",
      location: "Remote, US",
      companyLogo: "/work/uplandsoftware-logo.png",
      description: [],
      relatedProjects: [],
    },
    {
      dateStart: "July 2019",
      dateEnd: "Present",
      position: "Founder/Developer",
      company: "Sai eServices",
      location: "Khartoum, SD",
      companyLogo: "/work/sai-logo.png",
      description: [
        "Founded and developed a local eCommerce platform aimed at improving and empowering entrepreneurs in a unique national economic landscape, alSa3i.coms",
      ],
      relatedProjects: [],
    },
    {
      dateStart: "May 2018",
      dateEnd: "Jul 2019",
      position: "AUYVC/Data & Systems Admin.",
      company: "African Union Commission",
      location: "Addis Ababa, ET",
      companyLogo: "/work/auc-logo.png",
      description: [
        "Responsible for the Data, Systems and Integrated Geoportal of the Project Mgmt. Team of GMES & Africa",
        "Lead the early development of the project’s platforms (Web platform, eLearning, GeoPortal, Forum)",
        "Admin for IT related matters of the program as an ICT Expert",
      ],
      relatedProjects: [],
      technologies: ["Python", "GIS"],
      otherKeywords: ["GIS", "Remote Sensing", "Project Management"],
      achievements: [""], // quantifiable only
    },
    {
      dateStart: "Oct 2017",
      dateEnd: "Jan 2019",
      position: "Independent Consulting",
      company: "Udacity",
      location: "Remote, US",
      companyLogo: "/work/udacity-logo.png",
      description: [
        "I utilized my specialized knowledge in the fields of Android Development (Java) & Self-Driving (autonomous) Cars and my strong communication skills to provide project reviews, code reviews and other student support services",
      ],
      relatedProjects: [],
    },
    {
      dateStart: "Sep 2014",
      dateEnd: "Dec 2014",
      position: "Electrical/Mechanical Design (Intern)",
      company: "Alfaid Engineering",
      location: "Amman, JO",
      companyLogo: "/work/meco-logo.jpeg",
      description: [
        "Designed full electrical schematics and assisted with mechanical schematics for residential buildings",
      ],
      relatedProjects: [],
    },
    {
      dateStart: "Sep 2012",
      dateEnd: "Dec 2012",
      position: "Maintenance Eng. (Intern)",
      company: "Petronas Sudan",
      location: "Khartoum, SD",
      companyLogo: "/work/petronas-logo.jpg",
      description: [
        "Administered the full setup and initialization of a computerised maintenance management system",
      ],
      relatedProjects: [],
    },
  ];

  res.status(200).json(workData);
}
