// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const projectData = [];

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
