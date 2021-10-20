// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // ===========================================================================
  // ABND
  // ===========================================================================
  let abndProjects = [
    {
      title: `ABND-P1 Single Screen App`,
      description: `ABND-P1 Single Screen App`,
      stack: ["Android"],
      languages: ["Java", "XML"],
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
      stack: ["Android"],
      languages: ["Java", "XML"],
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
      stack: ["Android"],
      languages: ["Java", "XML"],
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
      stack: ["Android"],
      languages: ["Java", "XML"],
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
      stack: ["Android"],
      languages: ["Java", "XML"],
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
      stack: ["Android"],
      languages: ["Java", "XML"],
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
      stack: ["Android"],
      languages: ["Java", "XML"],
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
      stack: ["Android"],
      languages: ["Java", "XML"],
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
      stack: ["Android"],
      languages: ["Java", "XML"],
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
      stack: ["Android"],
      languages: ["Java", "XML"],
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
      stack: ["ROS"],
      languages: ["Python", "C++"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [],
          videos: ["https://www.youtube.com/embed/WJ2f8S_dswg"],
        },
      },
      dependencies: ["ROS"],
      repo: "https://github.com/moe-elsadig/RoboND-P1",
    },
    {
      title: `Deep Learning Project`,
      description: `In this project, you will train a deep neural network to identify and track a target in simulation. So-called “follow me” applications like this are key to many fields of robotics and the very same techniques you apply here could be extended to scenarios like advanced cruise control in autonomous vehicles or human-robot collaboration in industry.`,
      stack: ["ROS"],
      languages: ["Python", "C++"],
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
      languages: ["Python", "C++"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: ["/projects/robo3-desktop.svg"],
          videos: [],
        },
      },
      dependencies: ["ROS"],
      repo: "https://github.com/moe-elsadig/RoboND-Perception-Project",
    },
    {
      title: `Robotic arm - Pick & Place project`,
      description: `Robotic arm - Pick & Place project. I program the inverse kinematics pipeline as a python node for a robotic arm to pick and place cans between different shelves.`,
      stack: ["ROS", "Gazebo"],
      languages: ["Python", "C++"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: ["/projects/robo1-desktop.svg"],
          videos: [],
        },
      },
      dependencies: ["ROS", "gazebo", "sympy", "mpmath"],
      repo: "https://github.com/moe-elsadig/RoboND-Kinematics-Project",
    },
  ];

  // ===========================================================================
  // FSND
  // ===========================================================================
  let fnsdProjects = [
    {
      title: `Item Catalogue App`,
      description: `FSND-P2 Item Catalogue App. The following tool is a web application that catalogues items under different categories. Each item added is secured with authentication and authorisation measures.`,
      stack: ["Python", "PostgreSQL"],
      languages: ["Python", "HTML", "CSS", "Javascript"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: ["/projects/catalogue-desktop.svg"],
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
      languages: ["Python", "HTML", "CSS", "Javascript"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: ["/projects/newsLogs-desktop.svg"],
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
      stack: ["Python", "PostgreSQL"],
      languages: ["Python", "HTML", "CSS", "Javascript"],
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
      title: `Lane Lines Detection`,
      description: `Utilized the OpenCV library within a Python Jupyter notebook to design a simple image-processing pipeline for detecting, recognizing, and identifying highway lane lines in an image or video.`,
      stack: ["Jupyter Notebook", "OpenCV"],
      languages: ["Python"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: ["/projects/sdc1-desktop.svg"],
          videos: [],
        },
      },
      dependencies: [],
      repo: "https://github.com/moe-elsadig/CarND-P1",
    },
    {
      title: `Traffic Sign Classification Program`,
      description: `The traffic sign classification program uses a deep learning model (DL) implemented on Tensorflow using Python to train a classifier on the German traffic sign dataset (GTSRB). This project also utilized image pre-processing strategy to augment the training dataset for more accureate classifications 95%+`,
      stack: ["Jupyter Notebook", "Tensorflow"],
      languages: ["Python"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: ["/projects/sdc2-desktop.svg"],
          videos: [],
        },
      },
      dependencies: [
        "random",
        "pickle",
        "tensorflow",
        "PIL",
        "matplotlib",
        "cv2",
        "scipy",
        "numpy",
        "sklearn",
        "pandas",
      ],
      repo: "https://github.com/moe-elsadig/CarND-P2",
    },
    {
      title: `Behavioral Cloning`,
      description: `Clone the way you drive around any track in a car using a model built with the Keras deep learning framework and OpenCV computer vision framework in Python to train the model. Achieved full performance in the training environment/track, as well as a previously unseen environment/track, through intricate data selection/augmentation strategy and neural network tuning.`,
      stack: ["Jupyter Notebook", "Keras", "OpenCV"],
      languages: ["Python"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [],
          videos: ["https://youtube.com/embed/rFSvEyR4iOU"],
        },
      },
      dependencies: [],
      repo: "https://github.com/moe-elsadig/CarND-P3",
    },
    {
      title: `Advanced Lane Line Finding`,
      description: `Developed a computer vision pipeline for detecting lane lines, highlight the current lane, estimate lane curvature using coefficients of polynomial fit, and estimate vehicle position within the lane.`,
      stack: ["Jupyter Notebook", "OpenCV"],
      languages: ["Python"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [],
          videos: ["https://www.youtube.com/embed/LSJiRFwC6XE"],
        },
      },
      dependencies: [],
      repo: "https://github.com/moe-elsadig/CarND-P4",
    },
    {
      title: `Vehicle Detection`,
      description: `Created a vehicle detection and tracking pipeline with OpenCV, histogram of oriented gradients (HOG), and support vector machines (SVM). Optimized and evaluated the model on video data from a front mounter vehicle camera taken on a highway driving trip.`,
      stack: ["Jupyter Notebook"],
      languages: ["Python"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [],
          videos: ["https://www.youtube.com/embed/QrMnXIpXMjc"],
        },
      },
      dependencies: [],
      repo: "https://github.com/moe-elsadig/CarND-P5",
    },
    {
      title: `Extended Kalman Filter`,
      description: `Implemented extended Kalman filter sensor fusion algorithm in C++ based on LiDAR and radar data to localize a pedestrian given a constant velocity motion model.`,
      stack: ["Simulator"],
      languages: ["Python", "C++"],
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
      title: `Unscented Kalman Filter`,
      description: `Use an unscented Kalman filter to estimate the state of a moving object of interest with noisy lidar and radar measurements. Implemented unscented Kalman filter sensor fusion algorithm in C++ based on LiDAR and radar data to localize a bicyclist given a constant turn rate and velocity (CTRV) motion model.`,
      stack: ["Simulator"],
      languages: ["Python", "C++"],
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
      title: `Particle Filter 'Kidnapped Vehicle'`,
      description: `Implemented a two-dimensional particle filter in C++ capable of localizing a vehicle within desired accuracy and time.
      Combined known map waypoints with simulated LiDAR data and vehicle pose transformations to achieve accurate localization.`,
      stack: ["Simulator"],
      languages: ["Python", "C++"],
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
      title: `PID Vehicle Controller`,
      description: `Implemented a PID steering controller in C++ to maneuver a vehicle around a track in a simulator.
      Also implemented an additional PID throttle controller to optimize performance.`,
      stack: ["Simulator"],
      languages: ["Python", "C++"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [],
          videos: ["https://youtube.com/embed/izlENH4_QFw"],
        },
      },
      dependencies: [],
      repo: "https://github.com/moe-elsadig/CarND-P9",
    },
    {
      title: `Model Predictive Controller`,
      description: `Implemented Model Predictive Control to drive a vehicle around a track using IPOPT and CPPAD packages to determine optimal trajectory. Achieved reliable performance even at high speeds and with additional latency between commands.`,
      stack: ["Jupyter Notebook", "Simulator", "Keras"],
      languages: ["Python"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [],
          videos: ["https://youtube.com/embed/oJA1XanzMYs"],
        },
      },
      dependencies: [],
      repo: "https://github.com/moe-elsadig/CarND-P10",
    },
    {
      title: `Path-Planning Project`,
      description: `Built a path planner in C++ that autonomously navigates a vehicle through traffic on a highway. Employed environmental prediction, behavioral planning, and trajectory generation to achieve over 20 miles of smooth, incident-free driving.`,
      stack: ["C++"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: [],
          videos: ["https://www.youtube.com/embed/eFdlfFKR01U"],
        },
      },
      dependencies: ["C++"],
      repo: "https://github.com/moe-elsadig/CarND-P11",
    },
    {
      title: `1 Semantic Segmentation for Road and Obstacles`,
      description: `Identified pixel-wise navigable road area in car dash cam images using TensorFlow and a Fully Convolutional Network (FCN) based on the VGG-16 image classifier architecture (trained and tested on the KITTI data set). Achieved near perfect identification of road area on holdout test dataset, as a qualitative measure.`,
      stack: ["Python"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: ["/projects/sdc12-desktop.svg"],
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
          images: ["/projects/sdc13-desktop.svg"],
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
      title: `Rick & Morty Encyclopedia`,
      description:
        "A Rick & Morty Encyclopedia that consumes the rickandmortyapi.com API. Server-side generated pages, dark mode, search and filter features all included.",
      stack: ["NextJs", "ReactJS", "TailwindCSS", "React-Icons"],
      dependencies: [
        "@heroicons/react",
        "next",
        "react",
        "react-dom",
        "react-icons",
        "@badrap/bar-of-progress",
      ],
      media: {
        mobile: {
          images: ["/projects/r&m-mobile.svg"],
          videos: [],
        },
        desktop: {
          images: ["/projects/r&m-desktop.svg"],
          videos: ["https://youtube.com/embed/n3T5pPkKq5I"],
        },
      },
      repo: "https://github.com/moe-elsadig/rick-and-morty-profiles",
    },
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
          videos: ["https://youtube.com/embed/F5kTB3HaEDo"],
        },
      },
      repo: "https://github.com/moe-elsadig/portfolio-nextjs",
    },
    {
      title: `Uber Clone`,
      description:
        "An Uber UI clone with working search and routing functionalities powered by the Maps APIs from Google. Built using React Native for its cross-platform deployment and mobile first approach.",
      stack: ["React Native", "Expo", "Redux"],
      media: {
        mobile: {
          images: ["/projects/tlprt-mobile.svg"],
          videos: [],
        },
        desktop: {
          images: [],
          videos: ["https://youtube.com/embed/0POCh7EJgh0"],
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
        "A Whatsapp messenger UI clone with working Google authentication and messaging functionalities.",
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
          videos: ["https://youtube.com/embed/wGFK8GQTsrQ"],
        },
      },
      repo: "https://github.com/moe-elsadig/jawab",
      demo: "",
    },
    {
      title: `Signal Clone`,
      description:
        "A Signal messenger UI clone working across web and mobile. Available functionality includes email authentication, real-time message updates, and group chat rooms.",
      stack: ["React Native", "Expo", "Firebase", "react-navigation"],
      media: {
        mobile: {
          images: ["/projects/jawab2-mobile.svg"],
          videos: [],
        },
        desktop: {
          images: ["/projects/jawab2-desktop.svg"],
          videos: ["https://youtube.com/embed/eLOjPGPgTK0"],
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
      description:
        "An Airbnb UI clone with working date range selection, navigation transitions, Map view with pinned results and fully responsive UI.",
      stack: ["NextJS", "MapBox", "TailwindCSS"],
      media: {
        mobile: {
          images: ["/projects/earthbnb-mobile.svg"],
          videos: [],
        },
        desktop: {
          images: ["/projects/earthbnb-desktop.svg"],
          videos: ["https://youtube.com/embed/rsE8X5kw0WI"],
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
      description:
        "A fully responsive Google Docs clone built  with DraftJS, a WYSIWYG rich text editor tool. The deployment utilizes Firebase authorization options for user authentication.",
      stack: ["NextJS", "DraftJS", "TailwindCSS", "Firebase", "Next-Auth"],
      media: {
        mobile: {
          images: ["/projects/kitabat-mobile.svg"],
          videos: [],
        },
        desktop: {
          images: ["/projects/kitabat-desktop.svg"],
          videos: ["https://youtube.com/embed/4J9DLUdq4gA"],
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
          videos: ["https://youtube.com/embed/zRS3nDmJxf4"],
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
        "A crowdsourced gas station finding app. During a time of extreme fuel shortages, this app was deployed to source and spread information regarding the location and availability of fuel across the country. This app was deployed as a PWA for speed of deployment and cross platform support to over 10,000 users.",
      stack: [
        "React",
        "Material UI",
        "NodeJS",
        "Express",
        "NGINX",
        "PM2",
        "MongoDB",
      ],
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
      dependencies: [
        "@material-ui/core",
        "@material-ui/icons",
        "@testing-library/jest-dom",
        "@testing-library/react",
        "@testing-library/user-event",
        "aws-sdk",
        "axios",
        "body-parser",
        "chart.js",
        "cors",
        "dayjs",
        "encoding",
        "faunadb",
        "jwt-decode",
        "material-icons",
        "mongoose",
        "nodemon",
        "react",
        "react-dom",
        "react-redux",
        "react-router-dom",
        "react-scripts",
        "redux",
        "redux-thunk",
        "serve",
        "serverless-http",
        "socket.io",
        "web-push",
        "workbox-build",
      ],
      repo: "https://github.com/moe-elsadig/altulumba-web-app",
    },
    {
      title: `Personal Portfolio - HTML,CSS,Javascript`,
      description:
        "A personal portfolio built using pure HTML, CSS and Javascript.",
      stack: ["HTML", "CSS", "Javascript"],
      media: {
        mobile: {
          images: ["/projects/mysite-mobile.svg"],
          videos: [],
        },
        desktop: {
          images: ["/projects/mysite-desktop.svg"],
          videos: ["https://youtube.com/embed/eeucdAwVq9o"],
        },
      },
      dependencies: ["HTML", "CSS", "Javascript"],
      repo: "https://github.com/moe-elsadig/my_site",
    },
    {
      title: `Python Flask eCommerce Site`,
      description: "An eCommerce site build on the Flask technology stack.",
      stack: [
        "Python",
        "Flask",
        "Postgres",
        "SQLAlchemy",
        "HTML",
        "Javascript",
        "CSS",
      ],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: ["/projects/esudani-desktop.svg"],
          videos: ["https://youtube.com/embed/cBnhvd7iJzk"],
        },
      },
      dependencies: [
        "Python",
        "Flask",
        "Postgres",
        "SQLAlchemy",
        "HTML",
        "Javascript",
        "CSS",
      ],
      repo: "https://github.com/moe-elsadig/esudani-shopping-app",
    },
    {
      title: `Cat Clicker App (octopus mental model)`,
      description: `Click a cat picture till you get bored. A demonstration of the octopus mental model for accessing variables and updating their values and refreshing the rendered views.`,
      stack: ["HTML", "CSS", "Javascript"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: ["/projects/catclicker-desktop.svg"],
          videos: ["https://youtube.com/embed/royt3ySaE84"],
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
          images: ["/projects/friendlychat-mobile.svg"],
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
      description: `CLI and IPYNB Scripts for the Didi Challenge (Team: Transformers!!) to extract obstacle features from a Lidar sensor for use in Autonomous driving. I wrote scripts to manipulate and extract information from the given datasets in the rosbag format. Scripts for extracting images in grayscale/RGB, video in grayscale/RGB, Lidar pointclouds to frames, pointclouds to visual hiRes plots, NPY plots to images, rosbag to CSV, rosbag topic extractor, Deep learning classification training images extractor and finally the obstacle feature detection pipeline from input.
      Built a ROS node in C++ to consume and process real-world LiDAR point cloud data and publish top-view images of point clusters with pose information in a custom ROS message type.
Built a Keras convolutional neural network classifier and another ROS node in Python to consume the cluster images and determine whether or not each is a vehicle.
Achieved a top-50 (44th) score on the Udacity DiDi Challenge leaderboard, from among thousands of entrants.`,
      stack: ["Python", "Jupyter Notebook", "Keras"],
      media: {
        mobile: {
          images: [],
          videos: [],
        },
        desktop: {
          images: ["/projects/didi-desktop.svg"],
          videos: ["https://www.youtube.com/embed/I5KmNEkAm40"],
        },
      },
      dependencies: ["Python", "Jupyter Notebook", "Matlab"],
      repo: "https://github.com/moe-elsadig/DidiChallengeHelperScripts",
    },
  ];

  let projectData = [
    ...otherWebProjects,
    ...otherProjects,
    ...fnsdProjects,
    ...sdcndProjects, // TODO
    ...roboProjects, // TODO
    ...otherAndroidProjects, // TODO
    ...abndProjects, // TODO
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
