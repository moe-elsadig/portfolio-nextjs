// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const projectData = [
    {
      title: `Portfolio Site - NextJs version`,
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
      repo: "",
      demo: "",
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
    },
  ];

  const placeholderText = "Lorem ispum. ";
  const limit = 20;
  for (let i = 0; i < limit; i++) {
    projectData.push({
      title: `Portfolio Site - NextJs version-${i}`,
      description:
        "This is a personal porfolio site built with NextJs on React and styled with the help of Tailwind.",
      stack: ["NextJs", "TailwindCSS", "ReactJS", "Hero-Icons", "React-Icons"],
      media: {
        mobile: {
          images: i % 3 ? ["/mobile-placeholder.png"] : [],
          videos: [],
        },
        desktop: {
          images: i % 2 ? ["/desktop-placeholder.png"] : [],
          videos: [],
        },
      },
    });
  }

  res.status(200).json(projectData);
}
