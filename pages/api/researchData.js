export function getResearchData() {
    const parseYear = (value) => {
        const year = Number.parseInt(value, 10);
        return Number.isFinite(year) ? year : Number.NEGATIVE_INFINITY;
    };

    const researchData = [
        {
            title: "Global prediction of optimal solar panel tilt angles via machine learning",
            authors:
                "B Rinchi, R Dababseh, M Jubran, S Al-Dahidi, MEB Abdalla, O Ayadi",
            dateStart: "2025",
            dateEnd: "2025",
            link: "https://doi.org/10.1016/j.apenergy.2025.125322",
            journal: "Applied Energy",
            companyLogo: "/projects/applied-energy.jpg",
        },
        {
            title: "Techno-economic assessment of bifacial photovoltaic systems under desert climatic conditions",
            authors:
                "O Ayadi, B Rinchi, S Al-Dahidi, MEB Abdalla, M Al-Mahmodi",
            dateStart: "2024",
            dateEnd: "2024",
            link: "https://doi.org/10.3390/su16166982",
            journal: "Sustainability",
            companyLogo: "/projects/journal-sustainability.png",
        },
        {
            title: "The potential of agrivoltaic systems in Jordan",
            authors: "O Ayadi, JT Al-Bakri, MEB Abdalla, Q Aburumman",
            dateStart: "2024",
            dateEnd: "2024",
            link: "https://doi.org/10.1016/j.apenergy.2024.123841",
            journal: "Applied Energy",
            companyLogo: "/projects/applied-energy.jpg",
        },
        {
            title: "A pathway to food and energy security: Agrivoltaic potential in the MENA region",
            authors: "MEB Abdalla, O Ayadi, A Al Omari, B Rinchi, JT Al-Bakri",
            dateStart: "2026",
            dateEnd: "2026",
            link: "https://doi.org/10.1016/j.nexus.2025.100610",
            journal: "Energy Nexus",
            companyLogo: "/projects/journal-energy-nexus.jpg",
        },
        {
            title: "An Evolutionary Stacked Ensemble for Improving Accuracy and Computational Efficiency in Daily Photovoltaic Energy Prediction",
            authors: "B Rinchi, S Al-Dahidi, MEB Abdalla, O Ayadi, M Alrbai",
            dateStart: "2026",
            dateEnd: "2026",
            link: "https://doi.org/10.1109/ACCESS.2026.3666442",
            journal: "IEEE Access",
            companyLogo: "/projects/journal-ieee-access.svg",
        },
        {
            title: "Comparative Experimental Performance Assessment of Tilted and Vertical Bifacial Photovoltaic Configurations for Agrivoltaic Applications",
            authors:
                "O Ayadi, R Shadid, MA Hamdan, Q Aburumman, A Bani Abdullah, ...",
            dateStart: "2026",
            dateEnd: "2026",
            link: "https://doi.org/10.3390/su18020931",
            journal: "Sustainability",
            companyLogo: "/projects/journal-sustainability.png",
        },
        {
            title: "A Pathway to Food and Energy Security: Agrivoltaic Potential in the MENA Region",
            authors: "MEB Abdalla, O Ayadi, A Al Omari, B Rinchi, JT Al-Bakri",
            dateStart: "2025",
            dateEnd: "2025",
            link: "https://doi.org/10.1016/j.nexus.2025.100610",
            journal: "Energy Nexus",
            companyLogo: "/projects/journal-energy-nexus.jpg",
        },
        {
            title: "Modeling, Simulation and Experimental Validation of Fixed and Tracking Bifacial Photovoltaic Systems",
            authors:
                "Q Aburumman, O Ayadi, O Al-Oran, MEB Abdalla, M Al-Mahmodi",
            dateStart: "2025",
            dateEnd: "2025",
            link: "https://doi.org/10.30919/es1798",
            journal: "Engineered Science",
            companyLogo: "/projects/journal-engineered-science.jpg",
        },
        {
            title: "Economic and environmental analysis of forecasting errors in air conditioning energy demand under fixed and time-of-use tariffs: A case study",
            authors: "B Rinchi, S Al-Dahidi, MEB Abdalla, O Ayadi, A Al-Akhras",
            dateStart: "2025",
            dateEnd: "2025",
            link: "https://doi.org/10.1016/j.csite.2025.106409",
            journal: "Case Studies in Thermal Engineering",
            companyLogo:
                "/projects/journal-case-studies-thermal-engineering.jpg",
        },
        {
            title: "Tidal Energy Potential in Jordan’s Gulf of Aqaba Coast",
            authors: "MF Mryan, M Abdallah, A Al-Salaymeh",
            dateStart: null,
            dateEnd: null,
            link: "https://www.jeeng.net/",
            journal: "Journal of Ecological Engineering",
            companyLogo: "/projects/journal-ecological-engineering.jpg",
        },
    ];

    return researchData.sort((a, b) => {
        const aLatestYear = Math.max(
            parseYear(a?.dateStart),
            parseYear(a?.dateEnd),
        );
        const bLatestYear = Math.max(
            parseYear(b?.dateStart),
            parseYear(b?.dateEnd),
        );

        if (bLatestYear !== aLatestYear) {
            return bLatestYear - aLatestYear;
        }

        return (a?.title || "").localeCompare(b?.title || "");
    });
}

export default function handler(req, res) {
    res.status(200).json(getResearchData());
}
