// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // ===========================================================================
  // ABND
  // ===========================================================================
  let abndProjects = [
    {
      title: `Single Screen App`,
      description: `ABND-P1 Single Screen App`,
      stack: [],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [],
          videos: [],
        },
      },
      dependencies: [],
      repo: "https://github.com/moe-elsadig/Project1-Udacity-ABND",
    },
  ];

  // ===========================================================================
  // ROBOND
  // ===========================================================================
  let roboProjects = [
    {
      title: `RoboND P1 Search and Sample Return Project`,
      description: `Search and Sample Return Project`,
      stack: [],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [
            "https://github.com/moe-elsadig/RoboND-P1/raw/master/misc/rover_image.jpg",
          ],
          videos: [],
        },
      },
      dependencies: [],
      repo: "https://github.com/moe-elsadig/RoboND-P1",
    },
    {
      title: `Deep Learning Project`,
      description: `In this project, you will train a deep neural network to identify and track a target in simulation. So-called “follow me” applications like this are key to many fields of robotics and the very same techniques you apply here could be extended to scenarios like advanced cruise control in autonomous vehicles or human-robot collaboration in industry.`,
      stack: [],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [
            "https://github.com/moe-elsadig/RoboND-DeepLearning-Project/raw/master/docs/misc/sim_screenshot.png",
          ],
          videos: [],
        },
      },
      dependencies: [],
      repo: "https://github.com/moe-elsadig/RoboND-DeepLearning-Project",
    },
    {
      title: `3D Perception`,
      description: `RoboND 3D Perception Project. A PR2 Robot has been outfitted with an RGB-D sensor, this sensor however is a bit noisy, much like real sensors.

      Given the cluttered tabletop scenario, I have implement a perception pipeline to identify target objects from a so-called “Pick-List” in that particular order, pick up those objects and place them in corresponding dropboxes.`,
      stack: ["ROS"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [
            "https://user-images.githubusercontent.com/20687560/28748231-46b5b912-7467-11e7-8778-3095172b7b19.png",
          ],
          videos: [],
        },
      },
      dependencies: ["ROS"],
      repo: "https://github.com/moe-elsadig/RoboND-Perception-Project",
    },
    {
      title: `Robotic arm - Pick & Place project`,
      description: `Robotic arm - Pick & Place project`,
      stack: ["ROS"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [
            "https://github.com/moe-elsadig/RoboND-Kinematics-Project/blob/master/misc_images/misc1.png",
            "https://github.com/moe-elsadig/RoboND-Kinematics-Project/blob/master/misc_images/misc2.png",
          ],
          videos: [],
        },
      },
      dependencies: ["ROS"],
      repo: "https://github.com/moe-elsadig/RoboND-Kinematics-Project",
    },
    {
      title: `Robotic arm - Pick & Place project`,
      description: `In this project, I train a deep neural network to identify and track a target in simulation. So-called “follow me” applications like this are key to many fields of robotics and the very same techniques you apply here could be extended to scenarios like advanced cruise control in autonomous vehicles or human-robot collaboration in industry.`,
      stack: [
        "Python 3.x",
        "Tensorflow 1.2.1",
        "NumPy 1.11",
        "SciPy 0.17.0",
        "eventlet",
        "Flask",
        "h5py",
        "PIL",
        "python-socketio",
        "scikit-image",
        "transforms3d",
        "PyQt4/Pyqt5",
      ],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [""],
          videos: [],
        },
      },
      dependencies: [
        "Python 3.x",
        "Tensorflow 1.2.1",
        "NumPy 1.11",
        "SciPy 0.17.0",
        "eventlet",
        "Flask",
        "h5py",
        "PIL",
        "python-socketio",
        "scikit-image",
        "transforms3d",
        "PyQt4/Pyqt5",
      ],
      repo: "",
    },
  ];

  // ===========================================================================
  // FSND
  // ===========================================================================
  let fnsdProjects = [
    {
      title: `Item Catalogue App`,
      description: `FSND-P2 Item Catalogue App. The following tool is a web application that catalogues items under different categories. Each item added is secured with authentication and authorisation measures.`,
      stack: ["Python"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [],
          videos: [],
        },
      },
      dependencies: [
        "Terminal Application",
        "VirtualBox",
        "vagrant",
        "Vagrant configuration file as provided by Udacity",
        "Python",
        "PostgreSQL",
        "pyscopg2 library",
      ],
      repo: "https://github.com/moe-elsadig/FSND-P2",
    },
    {
      title: `News Website Statistics`,
      description: `FSND-P1 The following tool is an internal reporting tool for a newspaper site. A database is setup using PostgreSQL to record data on the site's articles as well as the web server log for the site. Using that information the Python script newsdb.py takes advantage of the psycopg2 library to query the data and extract some useful information to answering the following questions:

      Question 1: What are the most popular three articles?
      
      Question 2: Who are the most popular article authors?
      
      Question 3: On which days did more than 1% of requests lead to errors?
      
      `,
      stack: ["Python", "PostgreSQL"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [],
          videos: [],
        },
      },
      dependencies: [
        "Terminal Application",
        "VirtualBox",
        "vagrant",
        "Vagrant configuration file as provided by Udacity",
        "Python",
        "PostgreSQL",
        "pyscopg2 library",
      ],
      repo: "https://github.com/moe-elsadig/FSND-P1",
    },
    {
      title: `Restaurants and Menus Project`,
      description: `FSND Restaurants and Menus Project`,
      stack: ["Python"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [],
          videos: [],
        },
      },
      dependencies: ["Python"],
      repo: "https://github.com/moe-elsadig/FSND-Restaurant-App",
    },
  ];

  // ===========================================================================
  // SDCND
  // ===========================================================================
  let sdcndProjects = [
    {
      title: `CarND-P1 Lane Lines Detection`,
      description: `CarND-P1 Lane Lines Detection`,
      stack: [],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [
            "https://github.com/moe-elsadig/CarND-P1/raw/master/laneLines_thirdPass.jpg",
          ],
          videos: [],
        },
      },
      dependencies: [],
      repo: "https://github.com/moe-elsadig/CarND-P1",
    },
    {
      title: `CarND-P2 Traffic Sign Recognition Program`,
      description: `Traffic Sign Recognition Program uses what I've learned about deep neural networks and convolutional neural networks to classify traffic signs. I trained and validated a model so it can classify traffic sign images using the German Traffic Sign Dataset.`,
      stack: [],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [
            "https://github.com/moe-elsadig/CarND-P2/blob/master/visualize_cnn.png?raw=true",
          ],
          videos: [],
        },
      },
      dependencies: [],
      repo: "https://github.com/moe-elsadig/CarND-P2",
    },
    {
      title: `CarND-P8 Kidnapped-Vehicle-Project`,
      description: `CarND-P8 Kidnapped-Vehicle-Project`,
      stack: ["C++"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [],
          videos: [],
        },
      },
      dependencies: ["C++"],
      repo: "https://github.com/moe-elsadig/CarND-P8",
    },
    {
      title: `CarND-P11 Path-Planning Project`,
      description: `CarND-P11 Path-Planning Project`,
      stack: ["C++"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [],
          videos: [],
        },
      },
      dependencies: ["C++"],
      repo: "https://github.com/moe-elsadig/CarND-P11",
    },
    {
      title: `CarND-P12-1 Semantic Segmentation for Road and Obstacles`,
      description: `CarND-P12-1 Semantic Segmentation for Road and Obstacles`,
      stack: ["Python"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [],
          videos: [],
        },
      },
      dependencies: ["Python"],
      repo: "https://github.com/moe-elsadig/CarND-P12-1",
    },
    {
      title: `Capstone Project | Team OSCAR`,
      description: `This project is the culmination of five team members who share a bold vision, to create safe autonomous vehicles the world over. Using the Robot Operating System (ROS), each team member has developed and maintained a core component of the infrastructure that is demanded by a truly autonomous vehicle.`,
      stack: ["ROS"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [
            "https://github.com/bdschrisk/CarND-Capstone-Project/raw/master/imgs/udacity-carla.jpg",
          ],
          videos: [],
        },
      },
      dependencies: ["ROS"],
      repo: "https://github.com/moe-elsadig/CarND-Capstone-Project",
    },
  ];

  // ===========================================================================
  // WEB
  // ===========================================================================
  let otherWebProjects = [
    {
      title: `Portfolio Site - NextJs`,
      description:
        "This is a personal porfolio site built with NextJs on React and styled with the Tailwind CSS.",
      stack: ["NextJs", "ReactJS", "TailwindCSS", "Hero-Icons", "React-Icons"],
      dependencies: [
        "@heroicons/react",
        "next",
        "react",
        "react-dom",
        "react-icons",
        "three",
      ],
      media: {
        mobile: {
          images: ["/mobile-placeholder.png"],
          videos: [],
        },
        desktop: {
          images: [],
          videos: [],
        },
      },
      repo: "https://github.com/moe-elsadig/portfolio-nextjs",
    },
    {
      title: `Uber Clone`,
      description:
        "An Uber UI Clone with working search and routing functionality powered by the Maps APIs from Google. Built using React Native for its cross-platform deployment and mobile first approach.",
      stack: ["React Native"],
      media: {
        mobile: {
          images: ["/projects/tlprt-mobile.gif"],
          videos: [],
        },
        desktop: {
          images: [],
          videos: [],
        },
      },
      repo: "https://github.com/moe-elsadig/tlprt",
    },
    {
      title: `Whatsapp Clone`,
      description:
        "A Whatsapp Messenger UI Clone with working functionalty as Sign up, Google authentication, Messaging.",
      stack: ["NextJS", "ReactJS", "Firebase", "Styled Components"],
      dependencies: [
        "@material-ui/core",
        "@material-ui/icons",
        "better-react-spinkit",
        "email-validator",
        "firebase",
        "moment",
        "next",
        "react",
        "react-dom",
        "react-firebase-hooks",
        "styled-components",
        "timeago-react",
      ],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [
            "/projects/jawab-desktop.gif",
            // "/projects/jawab-desktop.png",
          ],
          videos: [],
        },
      },
      repo: "https://github.com/moe-elsadig/jawab",
      demo: "",
    },
    {
      title: `Signal Clone`,
      description: "A Signal Messenger UI Clone with working functionalty...",
      stack: ["React Native", "Expo", "Firebase", "react-navigation"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [],
          videos: [],
        },
      },
      dependencies: [
        "@react-native-community/masked-view",
        "@react-navigation/native",
        "@react-navigation/stack",
        "expo",
        "expo-status-bar",
        "react",
        "react-dom",
        "react-native",
        "react-native-elements",
        "react-native-gesture-handler",
        "react-native-reanimated",
        "react-native-safe-area-context",
        "react-native-screens",
        "react-native-web",
        "firebase",
      ],
      repo: "https://github.com/moe-elsadig/jawab-2",
    },
    {
      title: `Airbnb Clone`,
      description: "An Airbnb site UI Clone with working functionalty...",
      stack: ["NextJS", "MapBox", "TailwindCSS"],
      media: {
        mobile: {
          images: ["/projects/earthbnb-mobile.gif"],
          videos: [],
        },
        desktop: {
          images: ["/projects/earthbnb-desktop.gif"],
          videos: [],
        },
      },
      dependencies: [
        "@badrap/bar-of-progress",
        "@heroicons/react",
        "date-fns",
        "geolib",
        "next",
        "react",
        "react-date-range",
        "react-dom",
        "react-map-gl",
        "tailwind-scrollbar-hide",
      ],
      repo: "https://github.com/moe-elsadig/earthbnb",
    },
    {
      title: `Google Docs Clone`,
      description: "A Google Docs site UI Clone with working functionalty...",
      stack: ["NextJS", "DraftJS", "TailwindCSS", "Firebase", "Next-Auth"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: ["/projects/kitabat-desktop.gif"],
          videos: [],
        },
      },
      dependencies: [
        "@material-tailwind/react",
        "@next-auth/firebase-adapter",
        "draft-js",
        "firebase",
        "next",
        "next-auth",
        "react",
        "react-dom",
        "react-draft-wysiwyg",
        "react-firebase-hooks",
      ],
      repo: "https://github.com/moe-elsadig/kitabat",
    },
    {
      title: `alSa3i.com eCommerce`,
      description:
        "A local eCommerce platform developed and deployed in Sudan for Sai eServices.",
      stack: ["React"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [],
          videos: [],
        },
      },
      dependencies: [],
      repo: "",
      demo: "https://alsa3i.com/?r=portfolio",
    },
    {
      title: `Altulumba Station Status App`,
      description:
        "A crowd sourced gas station finding app. During a time of extreme fuel shortages, this app was deployed to source and spread the word on information regarding the location and availability of fuel across the country. This app was deployed as a PWA for speed of deployment and cross platform support",
      stack: ["React"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [],
          videos: [],
        },
      },
      dependencies: [],
      repo: "https://github.com/moe-elsadig/altulumba-web-app",
    },
    {
      title: `Personal Portfolio - HTML,CSS,Javascript`,
      description:
        "A personal portfolio built using pure HTML, CSS and Javascript.",
      stack: ["HTML", "CSS", "Javascript"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [],
          videos: [],
        },
      },
      dependencies: ["HTML", "CSS", "Javascript"],
      repo: "https://github.com/moe-elsadig/my_site",
    },
    {
      title: `Python Flask eCommerce Site`,
      description: "An eCommerce site build on the Flask technology stack.",
      stack: ["Flask", "Postgres"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [],
          videos: [],
        },
      },
      dependencies: ["Flask", "Postgres"],
      repo: "https://github.com/moe-elsadig/esudani-shopping-app",
    },
    {
      title: `Cat Clicker App`,
      description: ``,
      stack: ["HTML", "CSS", "Javascript"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [],
          videos: [],
        },
      },
      dependencies: ["HTML", "CSS", "Javascript"],
      repo: "https://github.com/moe-elsadig/cat-clicker-app",
    },
  ];

  // ===========================================================================
  // ANDROID
  // ===========================================================================
  let otherAndroidProjects = [
    {
      title: `Friendly Chat App`,
      description: `Android Messaging App built on Firebase. Supports instant messaging, images, and multiple sign-in options using email/password or a Google Acct.`,
      stack: [],
      media: {
        mobile: {
          images: [
            "https://github.com/moe-elsadig/FriendlyChatProject/blob/master/Screenshot%202018-12-24%20at%2013.20.36.png",
          ],
          videos: [],
        },
        desktop: {
          images: [],
          videos: [],
        },
      },
      dependencies: [],
      repo: "https://github.com/moe-elsadig/FriendlyChatProject",
    },
  ];

  // ===========================================================================
  // OTHER
  // ===========================================================================
  let otherProjects = [];

  let projectData = [
    ...abndProjects,
    ...roboProjects,
    ...fnsdProjects,
    ...sdcndProjects,
    ...otherWebProjects,
    ...otherAndroidProjects,
    ...otherProjects,
  ];

  res.status(200).json(projectData);
}
