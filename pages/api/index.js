export default  function handler(req, res) {
    const data=[{
            Cn: "Alcohol, Drugs, and Baby Boomers: Are you ready?",
            Cc: "As the baby boomer generation ages, the impacts of alcohol and drug use among this generation will become an increasingly important public health issue. This 5-week course will provide primary care givers and health care providers with an overview of thi…",
            Cl: "/course/babyboomersanddrugs-2194",
            Cp: "Coursera",
            Cd: "3-5 hours a week",
            Cpp: "Free Online Course (Audit)",
        },
        {
            Cn: "80045742 - 35th Annual Medical and Surgical Gastroenterology: A Multidisciplinary Approach - EM",
            Cc: "Johns Hopkins University , 35th Annual Medical and Surgical Gastroenterology: A Multidisciplinary Approach - EM, 4/13/2018 12:00:00 AM - 4/13/2021 12:00:00 AM, Online activity from the Live activity held January 2018 in Vail, ColoradoFor course content,…",
            Cl: "/course/80045742-35th-annual-medical-surgical-gastroenter-106356",
            Cp: "Independent",
            Cd: "2-3 hours a week, 5 weeks long",
            Cpp: "Free Certificate",
        },
    ]
    console.log("hello");
    res.status(200).json(data);
  
}