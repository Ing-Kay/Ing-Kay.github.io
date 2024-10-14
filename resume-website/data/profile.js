const profileData = {
  title: "Resume",
  name: "George Tawiah",
  sub_title: "DevOps Engineer",
  logoURL: "assets/images/dp.jpg",
  about: {
    intro: `Welcome to my website. I'm an accomplished and result-oriented professional with 5+ years of experience in the IT Industry. A DevOps Engineer with hands-on experience supporting, automating, and optimising deployments in cloud infrastructure. Building, deploying, source code management, leveraging configuration management, CI/CD, and DevOps processes.`,
    contact: {
      email: "george.tawiah@ahoo.com",
      phone: "+233 541733989",
      address: "Ghana",
    },
  },
  links: [
    {
      title: "LinkedIn",
      src: "https://www.linkedin.com/in/kay-tawiah/",
      iconClass: "fa-brands fa-linkedin-in",
    },
    {
      title: "Github",
      src: "https://github.com/KayKloud24",
      iconClass: "fa-brands fa-github",
    },
  ],
  skills: [
    {
      title: "Operating System",
      value: "Linux, Windows",
    },
    {
      title: "Languages",
      value: "Bash, Java,JavaScript,C++ & Python Scripting",
    },
    {
      title: "Version Control",
      value: "Git, GitHub",
    },
    {
      title: "CI-CD",
      value: "Jenkins, GitHub Actions",
    },
    {
      title: "Container & Orchestration",
      value: "Docker, Kubernetes",
    },
    {
      title: "Monitoring & Observability",
      value: "Prometheus, Grafana",
    },
    {
      title: "Cloud Computing",
      value: "AWS",
    },
    {
      title: "Infrastructure-as-Code & Configuration Mgt.",
      value: "Terraform, Ansible",
    },
  ],
  experiences: [
    {
      organization: "Jomacs IT Inc",
      title: "DevOps Engineer",
      date: "October 2020 - present",
      details: [
        `As part of the <strong>RummyCulture App</strong> team, worked on the development of core features like <strong>TDS summary & certificate</strong>, <strong>game join & re-join flow</strong> improvements,
        <strong>scorecard</strong>, <strong>withdrawal flow</strong>, <strong>user referral flow</strong>, and <strong>game bubble state</strong> optimizations.
        I ensured end-to-end responsibility, focusing on <strong>pixel-perfect UI</strong>, smooth UX, user testing, <strong>A/B experiments</strong>, cross-platform compatibility,
        and timely delivery.`,
        `Implemented the <strong>FT/UX</strong> (First Time User Experience) flow, boosting day1 metrics of Registration to Add Cash and Registration to Cash Game by around <strong>5%</strong>.`,
        `Integrated in-house <strong>help center SDK</strong>, offering self-help features like guided app core flows and callback scheduling for users, leading to a <strong>reduction in customer call volume</strong>.`,
        `Initiated the standardization of a React-Native <strong>custom UI library</strong>, encompassing reusable components, utilities, higher-order components, hooks, and animations for versatile project needs.`,
        `Addressed live issues such as App crashes, JS crashes, and ANRs using <strong>Sentry</strong> and <strong>Firebase Crashlytics</strong>. Mentored juniors through knowledge-sharing and code-review sessions to ensure bug-free code and optimal performance.`,
      ],
    },
    {
      organization: "Parbtech Solutions",
      title: `Cloud Engineer`,
      date: "2018 -2020",
      details: [
        `As part of the <strong>Pricing and Promotion Team</strong>, worked on the migration of legacy projects from <strong>AngularJS to React-Redux</strong>, implementing a new design. I developed a React-based UI component library and utilities, now utilized across multiple projects.`,
        `Other responsibilities include implementing new features, as well as patching and resolving bugs in existing features, while also addressing on-call issues promptly.`,
      ],
    },
    {
      organization: "Geotech Solutions",
      title: `Linux Administrator`,
      date: "2016 - 2018",
      details: [
        `Created feature-specific modules within the internal CRM to enhance team operations. Utilized <strong>ReactJS</strong> with <strong>SCSS</strong> and <strong>Redux</strong> for frontend development, alongside <strong>NodeJS-Express</strong> with protobuf for backend functionality.`,
        `Developed a tailored <strong>Content Management System (CMS) for MPL's website</strong>, enabling seamless content and image updates across various pages in real-time.`,
      ],
    },
],
  projects: [
    {
      title: "Restaurant Review",
      duration: "Jun - Nov 2018",
      link: "https://github.com/imvpn22/restaurant-review-pwa",
      desc: `A web app to list, view and add reviews of restaurants.
      The app includes filtering based on location, cuisine, and rating.
      This project was a part of Udacity's <strong>Mobile Web Specialist</strong> nano degree program.
      Developed using <strong>HTML5</strong>, <strong>CSS3</strong> and <strong>JavaScript</strong>
      with Progressive Web-Application standards including full-responsiveness,
      offline support, and improved accessibility.`,
    },
    {
      title: "WhiteBoard",
      duration: "Jun - Aug 2017",
      link: "https://github.com/imvpn22/whiteboard",
      desc: `A simple <strong>web-app for collaborative brainstorming sessions</strong>.
      The app includes a real-time messaging and sketching platform for collaboration with Peers.
      It also has features to create groups(teams) and add/remove members.
      Developed using <strong>Node.js-Express</strong> with server-side-templating (EJS),
      <strong>CSS</strong>, <strong>JavaScript</strong> and <strong>Socket.io</strong>.`,
    },
  ],
  education: [
    {
      alma: "FET, GKV, Haridwar",
      duration: "2014 - 2018",
      std: "B.Tech. (Computer Science & Engineering)",
      score: "71.00%",
    },
    {
      alma: "Jwala Devi SVMIC, Prayagraj",
      duration: "2011 - 2013",
      std: "Class XI-XII (PCM)",
      score: "89.80%",
    },
  ],
  certifications: [
    {
      desc: `<strong>Mobile Web Specialist Nanodegree</strong> by <strong>Udacity</strong>.
      (<a target='_blank' rel='noreferrer' href='https://confirm.udacity.com/RLMHXAWZ'>https://goo.gl/RGRzVn</a>)`,
      date: "May - Nov 2018",
    },
    {
      desc: `<strong>Introduction to Modern Application Development</strong>, a MOOC by <em> NPTEL (IIT Madras)
      and Hasura</em>. Ranked at <strong> top 10 percentile </strong> among more than 2500 candidates.
       (<a target='_blank' rel='noreferrer' href='https://nptel.ac.in/noc/E_Certificate/linkedin/noc17-cs06/NPTEL17CS0626270067AN.jpg'>
       https://goo.gl/X3HEdR</a>)`,
      date: "Jan - Mar 2017",
    },
  ],
  events: [],
};