let x = window.matchMedia("(max-width: 650px)");

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
    bubblesData: [],
    contentAnim: "fade-down",
  },
  {
    id: 2,
    pageId: "events",
    sectionHeading: "Events & Fun Activities",
    sectionPara: (
      <p>
        {" "}
        Skills Nights strongly believes in pi-shaped learning, and one of the
        best ways is through organising engaging events and informative hands-on
        workshops. Have a look at what all comes your way next.
      </p>
    ),
    sectionButtonName: "Upcoming Events",
    sectionButtonStyle: "btn-black",
    sectionBg: "whiteBg",
    hasModal: true,
    isEvent: true,
    isReversed: true,
    bubblesData: [
      {
        size: "150px",
        marginLeft: "40rem",
        marginTop: "3rem",
      },
      {
        size: x.matches ? "90px" : "130px",
        marginLeft: x.matches ? "14rem" : "12rem",
        marginTop: x.matches ? "6rem" : "18rem",
      },
      // {
      //   size: "100px",
      //   marginLeft: "38rem",
      //   marginTop: "-2rem",
      // },
    ],
    contentAnim: "fade-up",
  },
  {
    id: 3,
    pageId: "archives",
    sectionHeading: "Archives",
    sectionPara: (
      <p>
        {" "}
        History has a lot to say about our club. We organize monthly mentor
        programs, skills development sessions by industry experts, flagship
        events. Check out our past events and interviews.
      </p>
    ),
    sectionButtonName: "Our Past",
    sectionButtonStyle: "btn-white",
    sectionBg: "blackBg",
    isArchives: true,
    bubblesData: [
      {
        size: "110px",
        marginLeft: "60rem",
        marginTop: "3rem",
      },
      // {
      //   size: "150px",
      //   marginLeft: "35rem",
      //   marginTop: "10rem",
      // },
      {
        size: x.matches ? "100px" : "150px",
        marginLeft: x.matches ? "13rem" : "5rem",
        marginTop: x.matches ? "30rem" : "20rem",
      },
    ],
    contentAnim: "fade-up",
  },
  {
    id: 4,
    pageId: "our-team",
    sectionHeading: "Our Team",
    sectionPara: (
      <p>
        {" "}
        We are a team of thinkers, developers, explorers and what not. We
        approach work and play with curiosity and experimentation, using out
        experiences and knowledge to provide guidance to newbies who are taking
        on their journey to the industrial world.
      </p>
    ),
    sectionButtonName: "Core-Team Members",
    sectionButtonStyle: "btn-black",
    sectionBg: "whiteBg",
    isReversed: true,
    isTeam: true,
    bubblesData: [
      {
        size: "110px",
        marginLeft: "20rem",
        marginTop: "8rem",
      },
      // {
      //   size: "150px",
      //   marginLeft: "35rem",
      //   marginTop: "10rem",
      // },
      {
        size: "130px",
        marginLeft: "50rem",
        marginTop: "20rem",
      },
    ],
    contentAnim: "fade-up",
  },
];
