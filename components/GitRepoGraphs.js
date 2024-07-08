import React, { useEffect, useState } from "react";

function GitRepoGraphs({ projectData, workData, educationData }) {
    // const projectData = [
    //   {
    //     title: `Uber Clone`,
    //     description:
    //       "An Uber UI Clone with working search and routing functionality powered by the Maps APIs from Google. Built using React Native for its cross-platform deployment and mobile first approach.",
    //     stack: ["React Native", "Expo", "Redux"],
    //     media: {
    //       mobile: {
    //         images: ["/projects/tlprt-mobile.svg"],
    //         videos: [],
    //       },
    //       desktop: {
    //         images: [],
    //         videos: ["https://youtube.com/embed/0POCh7EJgh0"],
    //       },
    //     },
    //     dependencies: [
    //       "@react-navigation/native",
    //       "@react-navigation/native-stack",
    //       "@reduxjs/toolkit",
    //       "expo",
    //       "expo-status-bar",
    //       "intl",
    //       "react",
    //       "react-dom",
    //       "react-native",
    //       "react-native-dotenv",
    //       "react-native-elements",
    //       "react-native-gesture-handler",
    //       "react-native-google-places-autocomplete",
    //       "react-native-maps",
    //       "react-native-maps-directions",
    //       "react-native-reanimated",
    //       "react-native-safe-area-context",
    //       "react-native-screens",
    //       "react-native-vector-icons",
    //       "react-native-web",
    //       "react-redux",
    //       "tailwind-react-native-classnames",
    //     ],
    //     repo: "https://github.com/moe-elsadig/tlprt",
    //   },
    // ];
    const [chartStacks, setChartStacks] = useState({});
    const [chartLanguages, setChartLanguages] = useState({});

    useEffect(() => {
        let newStacks = {};
        let newLanguages = {};

        projectData?.forEach((project, index) => {
            project.stack?.forEach((tech, index) => {
                newStacks[tech] = newStacks[tech] ? newStacks[tech] + 1 : 1;
            });

            project.languages?.forEach((language, index) => {
                newLanguages[language] = newLanguages[language]
                    ? newLanguages[language] + 1
                    : 1;
            });

            if (index + 1 === projectData.length) {
                setChartStacks(newStacks);
                setChartLanguages(newLanguages);
            }
        });
    }, [projectData]);

    const stacksRowsMarkup = chartStacks
        ? Object.keys(chartStacks).map((itemKey, index) => (
              <div
                  id={itemKey}
                  key={itemKey}
                  className="flex flex-row w-full px-5 pt-4"
              >
                  <h4>{itemKey}-</h4>
                  <h4
                      className={`bg-green-300 w-[${
                          chartStacks[itemKey] * 2 + "px"
                      }]`}
                  >
                      {chartStacks[itemKey]}
                  </h4>
              </div>
          ))
        : "nothing to show here. move along.";

    const languagesRowsMarkup = chartLanguages
        ? Object.keys(chartLanguages).map((itemKey, index) => (
              <div
                  id={itemKey}
                  key={itemKey}
                  className="flex flex-row w-full px-5 pt-4"
              >
                  <h4>{itemKey}-</h4>
                  <h4
                      className={`bg-green-300 w-[${
                          chartLanguages[itemKey] * 2 + "px"
                      }]`}
                  >
                      {chartLanguages[itemKey]}
                  </h4>
              </div>
          ))
        : "nothing to show here. move along.";

    return (
        <div className="h-screen bg-white w-full">
            {languagesRowsMarkup}
            {stacksRowsMarkup}
        </div>
    );
}

export default GitRepoGraphs;
