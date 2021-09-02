// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // ===========================================================================
  // ABND
  // ===========================================================================
  let abndProjects = [
    {
      title: `ABND-P1 Single Screen App`,
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
    {
      title: `ABND-P2 Court Game Score Counter`,
      description: `ABND-P2 Court Game Score Counter`,
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
      repo: "https://github.com/moe-elsadig/Project2-Udacity-ABND",
    },
    {
      title: `ABND-P3 Quiz App`,
      description: `ABND-P3 Quiz App`,
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
      repo: "https://github.com/moe-elsadig/Project3-Udacity-ABND",
    },
    {
      title: `ABND-P4 Music Player UI App`,
      description: `ABND-P4 Music Player UI App`,
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
      repo: "https://github.com/moe-elsadig/Project4-Udacity-ABND",
    },
    {
      title: `ABND-P5 Tour Guide App`,
      description: `ABND-P5 Tour Guide App`,
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
      repo: "https://github.com/moe-elsadig/Project5-Udacity-ABND",
    },
    {
      title: `ABND-P6 Tour Guide App`,
      description: `ABND-P6 Tour Guide App`,
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
      repo: "https://github.com/moe-elsadig/Project6-Udacity-ABND",
    },
    {
      title: `ABND-P7 Book Listing App`,
      description: `ABND-P7 Book Listing App`,
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
      repo: "https://github.com/moe-elsadig/Project7-Udacity-ABND",
    },
    {
      title: `ABND-P8 News App`,
      description: `ABND-P8 News App`,
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
      repo: "https://github.com/moe-elsadig/Project8-Udacity-ABND",
    },
    {
      title: `ABND-P9 Habit Tracker App`,
      description: `ABND-P9 Habit Tracker App`,
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
      repo: "https://github.com/moe-elsadig/Project9-Udacity-ABND",
    },
    {
      title: `ABND-P10 Items Inventory App`,
      description: `ABND-P10 Items Inventory App`,
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
      repo: "https://github.com/moe-elsadig/Project10-Udacity-ABND",
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
            "https://raw.githubusercontent.com/moe-elsadig/RoboND-Kinematics-Project/master/misc_images/misc2.png",
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
          images: [],
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
      title: `CarND-P3 Behavioral Cloning`,
      description: `Use a visual AI model to clone the way you drive around any track in a car`,
      stack: [],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [],
          videos: ["https://youtu.be/rFSvEyR4iOU"],
        },
      },
      dependencies: [],
      repo: "https://github.com/moe-elsadig/CarND-P3",
    },
    {
      title: `CarND-P4 Advanced Lane Line Finding`,
      description: `Use computer vision methods to detect lane lines, highlight the current lane, estimate the curvature of the road, and estimate your position within the lane.`,
      stack: [],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [],
          videos: [
            "https://youtu.be/9qt3eyzOiHA",
            "https://youtu.be/7a-cL1uQD3M",
          ],
        },
      },
      dependencies: [],
      repo: "https://github.com/moe-elsadig/CarND-P4",
    },
    {
      title: `CarND-P6 Extended Kalman Filter`,
      description: ``,
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
      repo: "https://github.com/moe-elsadig/CarND-P6",
    },
    {
      title: `CarND-P7 Unscented Kalman Filter`,
      description: `Use an unscented Kalman filter to estimate the state of a moving object of interest with noisy lidar and radar measurements.`,
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
      repo: "https://github.com/moe-elsadig/CarND-P7",
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
      title: `CarND-P9 PID Vehicle Controller`,
      description: `CarND-P9 PID Vehicle Controller`,
      stack: [],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [],
          videos: ["https://youtu.be/izlENH4_QFw"],
        },
      },
      dependencies: [],
      repo: "https://github.com/moe-elsadig/CarND-P9",
    },
    {
      title: `CarND-P10 Model Predictive Controller`,
      description: `CarND-P10 Model Predictive Controller`,
      stack: [],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [],
          videos: ["https://youtu.be/oJA1XanzMYs"],
        },
      },
      dependencies: [],
      repo: "https://github.com/moe-elsadig/CarND-P10",
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
          images: ["/projects/portfolio-mobile.svg"],
          videos: [],
        },
        desktop: {
          images: [
            "/projects/portfolio-desktop.svg",
            // "/projects/portfolio-desktop-1.svg",
          ],
          videos: ["https://youtu.be/F5kTB3HaEDo"],
        },
      },
      repo: "https://github.com/moe-elsadig/portfolio-nextjs",
    },
    {
      title: `Uber Clone`,
      description:
        "An Uber UI Clone with working search and routing functionality powered by the Maps APIs from Google. Built using React Native for its cross-platform deployment and mobile first approach.",
      stack: ["React Native", "Expo", "Redux"],
      media: {
        mobile: {
          images: ["/projects/tlprt-mobile.svg"],
          videos: [],
        },
        desktop: {
          images: [],
          videos: ["https://youtu.be/0POCh7EJgh0"],
        },
      },
      dependencies: [
        "@react-navigation/native",
        "@react-navigation/native-stack",
        "@reduxjs/toolkit",
        "expo",
        "expo-status-bar",
        "intl",
        "react",
        "react-dom",
        "react-native",
        "react-native-dotenv",
        "react-native-elements",
        "react-native-gesture-handler",
        "react-native-google-places-autocomplete",
        "react-native-maps",
        "react-native-maps-directions",
        "react-native-reanimated",
        "react-native-safe-area-context",
        "react-native-screens",
        "react-native-vector-icons",
        "react-native-web",
        "react-redux",
        "tailwind-react-native-classnames",
      ],
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
          images: ["/projects/jawab-desktop.svg"],
          videos: ["https://youtu.be/wGFK8GQTsrQ"],
        },
      },
      repo: "https://github.com/moe-elsadig/jawab",
      demo: "",
    },
    {
      title: `Signal Clone`,
      description:
        "A Signal Messenger UI Clone working across web and mobile. Available functionality includes email authentication, real-time messages and updates, group chat rooms.",
      stack: ["React Native", "Expo", "Firebase", "react-navigation"],
      media: {
        mobile: {
          images: ["/projects/jawab2-mobile.svg"],
          videos: [],
        },
        desktop: {
          images: ["/projects/jawab2-desktop.svg"],
          videos: ["https://youtu.be/eLOjPGPgTK0"],
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
          images: ["/projects/earthbnb-mobile.svg"],
          videos: [],
        },
        desktop: {
          images: ["/projects/earthbnb-desktop.svg"],
          videos: ["https://youtu.be/rsE8X5kw0WI"],
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
          images: ["/projects/kitabat-mobile.svg"],
          videos: [],
        },
        desktop: {
          images: ["/projects/kitabat-desktop.svg"],
          videos: ["https://youtu.be/4J9DLUdq4gA"],
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
      stack: ["React", "NodeJS", "Express", "NGINX", "PM2", "MongoDB"],
      media: {
        mobile: {
          images: ["/projects/alsa3i-mobile.svg"],
          videos: ["https://youtu.be/zRS3nDmJxf4"],
        },
        desktop: {
          images: [],
          videos: [],
        },
      },
      dependencies: ["React", "NodeJS", "Express", "NGINX", "PM2", "MongoDB"],
      repo: "",
      demo: "https://alsa3i.com/?r=portfolio",
    },
    {
      title: `Altulumba Station Status App`,
      description:
        "A crowd sourced gas station finding app. During a time of extreme fuel shortages, this app was deployed to source and spread the word on information regarding the location and availability of fuel across the country. This app was deployed as a PWA for speed of deployment and cross platform support",
      stack: ["React", "NodeJS", "Express", "NGINX", "PM2", "MongoDB"],
      media: {
        mobile: {
          images: ["/projects/altulumba-mobile.svg"],
          videos: [],
        },
        desktop: {
          images: [],
          videos: [],
        },
      },
      dependencies: ["React", "NodeJS", "Express", "NGINX", "PM2", "MongoDB"],
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
          videos: ["https://youtu.be/dwGVXde5WaY"],
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
      description: `Click a cat picture till you get bored.`,
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
    {
      title: `ADND-P1 Popular Movies App`,
      description: `Popular Movies App powered by the popular movies API`,
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
      repo: "https://github.com/moe-elsadig/PopularMoviesApp",
    },
  ];

  // ===========================================================================
  // OTHER
  // ===========================================================================
  let otherProjects = [
    {
      title: `Didi Challenge Helper Scripts`,
      description: `Didi Challenge Helper Scripts`,
      stack: [],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [
            "https://github.com/moe-elsadig/DidiChallengeHelperScripts/raw/master/2d_plot.png",
          ],
          videos: [],
        },
      },
      dependencies: [],
      repo: "https://github.com/moe-elsadig/DidiChallengeHelperScripts",
    },
  ];

  let projectData = [
    ...otherWebProjects,
    // ...otherProjects,
    // ...otherAndroidProjects,
    // ...abndProjects,
    // ...roboProjects,
    // ...fnsdProjects,
    // ...sdcndProjects,
  ];
  let featuredProjectData = [
    // ...abndProjects,
    // ...roboProjects,
    // ...fnsdProjects,
    // ...sdcndProjects,
    // ...otherWebProjects,
    // ...otherAndroidProjects,
    // ...otherProjects,
  ];

  res.status(200).json([projectData, featuredProjectData]);
}
