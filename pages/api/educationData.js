export default function handler(req, res) {
  const educationData = [
    {
      dateStart: "Jan 2019",
      dateEnd: "May 2019",
      course: "Full Stack Web Developer Nanodegree",
      institution: "Udacity",
      location: "Remote, US",
      institutionLogo: "/work/udacity-logo.png",
      relatedProjects: [],
    },
    {
      dateStart: "Nov 2016",
      dateEnd: "Oct 2017",
      course: "Self Driving Car Engineer Nanodegree",
      institution: "Udacity",
      location: "Remote, US",
      institutionLogo: "/work/udacity-logo.png",
      relatedProjects: [],
    },
    {
      dateStart: "TBA",
      dateEnd: "TBA",
      course: "MSc Renewable Energy",
      institution: "University of Jordan",
      location: "Amman, JO",
      institutionLogo: "/education/ju-logo.png",
      relatedProjects: [],
    },
    {
      dateStart: "Jun 2016",
      dateEnd: "Jul 2016",
      course: "Android Basics Nanodegree",
      institution: "Udacity",
      location: "Remote, US",
      institutionLogo: "/work/udacity-logo.png",
      relatedProjects: [],
    },
    {
      dateStart: "Jan 2010",
      dateEnd: "Dec 2015",
      course: "BEng (Hons) Mechatronics Engineering",
      institution: "UCSI University",
      location: "Kuala Lumpur, MY",
      institutionLogo: "/education/ucsi-logo.png",
      relatedProjects: [],
    },
    {
      dateStart: "Jan 2010",
      dateEnd: "Dec 2010",
      course: "Science Foundation",
      institution: "UCSI University",
      location: "Kuala Lumpur, MY",
      institutionLogo: "/education/ucsi-logo.png",
      relatedProjects: [],
    },
    {
      dateStart: "Sep 2007",
      dateEnd: "May 2008",
      course: "IGCSE/O-Levels",
      institution: "Unity Highschool",
      location: "Khartoum, SD",
      institutionLogo: "/education/uhs-logo.jpg",
      relatedProjects: [],
    },
  ];

  res.status(200).json(educationData);
}
