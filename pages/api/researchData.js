export function getResearchData() {
    const researchData = [
        {
            title: "Performance Optimization in Next.js Applications",
            journal: "Journal of Web Engineering",
            authors: "Mohammed E. B. Abdalla, John Doe",
            abstract: "This paper explores various techniques for optimizing the performance of Next.js applications, including server-side rendering, static site generation, and efficient image loading.",
            link: "https://example.com/research1",
            dateStart: "2023",
            dateEnd: "2023",
            companyLogo: "/work/sai-logo.png"
        },
        {
            title: "Integration of Mechatronics in Renewable Energy Systems",
            journal: "International Journal of Renewable Energy Research",
            authors: "Jane Smith, Mohammed E. B. Abdalla",
            abstract: "An analysis of how mechatronic systems can improve the efficiency and reliability of renewable energy sources such as wind and solar power.",
            link: "https://example.com/research2",
            dateStart: "2022",
            dateEnd: "2022",
            companyLogo: "/work/auc-logo.png"
        }
    ];

    return researchData;
}

export default function handler(req, res) {
    res.status(200).json(getResearchData());
}
