const sizeArray = ["200px", "130px", "300px", "150px", "180px"];
// const marginLeftArray = ["1rem", "5rem", "10rem", "15rem", "20rem"];
// const marginTopArray = ["1rem", "5rem", "10rem", "15rem", "20rem"];
const animationArray = [
  "fade-up",
  "fade-in",
  "fade-right",
  "fade-left",
  "fade-up-right",
  "fade-down-right",
  "flip-left",
  "flip-right",
  "slide-up",
  "slide-down",
  "slide-left",
  "slide-right",
  "zoom-in",
  "zoom-in-up",
  "zoom-in-left",
  "zoom-in-right",
  "zoom-out",
  "zoom-out-up",
  "zoom-out-left",
  "zoom-out-right"
];

export default [
  {
    id: 1,
    pageId: "about-us",
    sectionHeading: "About Us",
    sectionPara: (
      <p>
        {" "}
        Skills Nights is an ambitious student club that primarily aims at
        providing a beginner-friendly platform, making it an ideal starting
        point for the freshers to join and begin their journey of learning or
        exploring new technologies in their field of interest, building
        projects, and collaborating with their fellow batchmates to make awesome
        projects that help them stand out.
      </p>
    ),
    sectionButtonName: "Intro",
    sectionButtonStyle: "btn-intro",
    sectionBg: "blackBg",
    hasVideo: true,
    isAbout: true,
    bubblesData: [
      {
        size: "200px",
        marginLeft: "20rem",
        marginTop: "30rem",
      },
    ],
  },
  {
    id: 2,
    pageId: "events",
    sectionHeading: "Events & Fun Activities",
    sectionPara: (
      <p>
        {" "}
        Skills Nights is an ambitious student club that primarily aims at
        providing a beginner-friendly platform, making it an ideal starting
        point for the freshers to join and begin their journey of learning or
        exploring new technologies in their field of interest, building
        projects, and collaborating with their fellow batchmates to make awesome
        projects that help them stand out.
      </p>
    ),
    sectionButtonName: "Upcoming Events",
    sectionButtonStyle: "btn-black",
    sectionBg: "whiteBg",
    hasModal: true,
    bubblesData: [
      {
        size: "150px",
        marginLeft: "35rem",
        marginTop: "10rem",
      },
      {
        size: "130px",
        marginLeft: "10rem",
        marginTop: "2rem",
        animation: "fade-left",
      },
    ],
  },
  {
    id: 3,
    pageId: "archives",
    sectionHeading: "Archives",
    sectionPara: (
      <p>
        {" "}
        This guide is designed to give you a better understanding of what a noob
        is, how to recognize them, some details about them, and how to avoid or
        get rid of them. It mostly applies to online forums, which are the main
        targets of migrating noobs.
      </p>
    ),
    sectionButtonName: "Our Past",
    sectionButtonStyle: "btn-white",
    sectionBg: "blackBg",
    hasArchives: true,
    bubblesData: [
      {
        size: "110px",
        marginLeft: "20rem",
        marginTop: "8rem",
      },
      {
        size: "150px",
        marginLeft: "35rem",
        marginTop: "10rem",
      },
      {
        size: "200px",
        marginLeft: "10rem",
        marginTop: "7rem",
      },
    ],
  },
  {
    id: 4,
    pageId: "our-team",
    sectionHeading: "Our Team",
    sectionPara: (
      <p>
        {" "}
        This guide is designed to give you a better understanding of what a noob
        is, how to recognize them, some details about them, and how to avoid or
        get rid of them. It mostly applies to online forums, which are the main
        targets of migrating noobs.
      </p>
    ),
    sectionButtonName: "Core-Team Members",
    sectionButtonStyle: "btn-black",
    sectionBg: "whiteBg",
    isTeam: true,
    bubblesData: [
      {
        size: "110px",
        marginLeft: "20rem",
        marginTop: "8rem",
      },
      {
        size: "150px",
        marginLeft: "35rem",
        marginTop: "10rem",
      },
      {
        size: "130px",
        marginLeft: "10rem",
        marginTop: "2rem",
        animation: "fade-left",
      },
    ],
  },
];
