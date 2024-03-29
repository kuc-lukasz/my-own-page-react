let data = [
    {
        id: "19",
        title: "React Memory Game",
        img: "/projectsImgs/reactMemoryGame.png",
        language: ["react", "typescript", "styled-components"],
        describe:
            "I created a well-known game where we have to remember the positions of the cards and match them in pairs. \n\n A game entirely written in React. This is my first project entirely written with typescript. \n\nTest the game by clicking on TRY IT.",
        videoSrc: "https://www.youtube.com/embed/jw8KFewK7Ag",
        github: "https://github.com/kuc-lukasz/react-memory-game",
        githubIcon: "/img/github-blue.png",
        netflify: "https://kuclukasz-react-memory-game.netlify.app/",
        netflifyIcon: "/img/tryIcon.png",
    },
    {
        id: "18",
        title: "Your blog",
        img: "/projectsImgs/reactBlog.png",
        language: ["react", "styled-components", "React - Router@6", ".json"],
        describe:
            "Working on a .json file.  \nControl form implemented, where you can add and remove posts from the main page and directly from the given post.  \nThe styled-components library was used for styles. Additionally, a react-router @ 6 was used for navigation ",
        videoSrc: "https://www.youtube.com/embed/jw8KFewK7Ag",
        github: "https://github.com/kuc-lukasz/react-blog-app",
        githubIcon: "/img/github-blue.png",
    },
    {
        id: "17",
        title: "My own website in React",
        img: "/projectsImgs/myownpage.png",
        language: ["css", "javascript", "react", ".map()", ".find()"],
        describe:
            "I try to improve my code every day. That's why I decided to create a page about myself from scratch, where I put all my projects and introduce myself. The website has two versions, first it was prepared with a .json file where I use useEffect (). \nGithub link: github.com/kuc-lukasz/training/tree/main/react-about-me-page. \nAnd the one that is visible where the data is displayed from the file. The site was created in the React library where I used my own CSS styles. Additionally, I used React Router v.6.",
        videoSrc: "https://www.youtube.com/embed/029DX9AUQd8",
        github: "https://github.com/kuc-lukasz/my-own-page-react",
        githubIcon: "/img/github-blue.png",
    },
    {
        id: "16",
        title: "React App - external server",
        img: "/projectsImgs/ReactAppWithExternalServer.png",
        language: [
            "react",
            "router",
            "css",
            "javascript",
            ".map()",
            ".filter()",
            ".json",
        ],
        describe:
            "The task is to implement a Web app using the React, which will present data downloaded using REST API from an external server available at the URL: https://gorest.co.in/public/ The full description of the application can find in the github repository below.",
        videoSrc: "https://www.youtube.com/embed/DGMsMshGrMQ",
        github: "https://github.com/kuc-lukasz/training/tree/main/recruting-task",
        githubIcon: "/img/github-blue.png",
    },
    {
        id: "15",
        title: "Find a Movie",
        img: "/projectsImgs/findMovie.png",
        language: [
            "react",
            "html",
            "css",
            "javascript",
            ".map()",
            ".filter()",
            ".json",
            ".sort()",
        ],
        describe:
            "Application created in the REACT library. The main aim was to work on a JSON database (movies). Displayed all movies and created a movie search               engine. Additionally, the option of sorting by movie date has been added.",
        videoSrc: "https://www.youtube.com/embed/rUyWNGUY688",
        github: "https://github.com/kuc-lukasz/movies-library-react",
        githubIcon: "/img/github-blue.png",
    },
    {
        id: "14",
        title: "Guides App",
        img: "/projectsImgs/guideApp.png",
        language: ["html", "javascript", "firebase", "CSS-Materialize"],
        describe:
            "It is an application based on a firebase database. It is an appfor sharing guides with other users. We have ability to create an account, log in, create a guide and display them on the home page. The guides are available only to logged in users. I used firebase - firestore and authentication for the application and used the ready CSS Materialize library.",
        videoSrc: "https://www.youtube.com/embed/FZ34ALkspkw",
        github: "https://github.com/kuc-lukasz/training/tree/main/Firebase/Firebase%20Auth%20project",
        githubIcon: "/img/github-blue.png",
    },
    {
        id: "13",
        title: "Cloud Tourist Places App",
        img: "/projectsImgs/cloudFirestore.png",
        language: ["html", "css", "javascript", "firebase"],
        describe:
            "It is an application based on a firestore database. In the application, we can add the name of the place and the city where this place is. Then the added place is displayed on the list. We can also delete selected places. The list is constantly updated from the firestore database. All code available below.",
        videoSrc: "https://www.youtube.com/embed/ceUf2XPpZko",
        github: "https://github.com/kuc-lukasz/training/tree/main/Firebase/Firebase%20Firestore%20projekt",
        githubIcon: "/img/github-blue.png",
    },
    {
        id: "12",
        title: "My own library",
        img: "/projectsImgs/MyOwnLibery.png",
        language: ["html", "css", "javascript", "local storage", "form"],
        describe:
            "It is your own book library. Book data is entered in the form and then displayed below. The form and the list of books are connected to the local storage and is constantly updated. Additionally, the validation for the form has been applied.",
        videoSrc: "https://www.youtube.com/embed/pdvi29j2DOk",
        github: "https://github.com/kuc-lukasz/training/tree/main/Task%20-%20IT.Group/Forms%20Task",
        githubIcon: "/img/github-blue.png",
    },
    {
        id: "11",
        title: "Working with JSON files",
        img: "/projectsImgs/project.png",
        language: [
            "html",
            "css",
            "javascript",
            "promise.all",
            ".map()",
            ".filter()",
            ".json",
        ],
        describe:
            "It was a project / task where you had to display data from .json files. Data had to be displayed in columns, additionally calculate the average of numbers for each element. Finally, the second .json file had to be implemented, which was not an array, so it had to be transformed and then implemented.",
        videoSrc: "https://www.youtube.com/embed/wqbdb8QtqTY",
        github: "https://github.com/kuc-lukasz/training/tree/main/Academy%20Task",
        githubIcon: "/img/github-blue.png",
    },
    {
        id: "10",
        title: "Generate random 20 numbers",
        img: "/projectsImgs/randomNumbersGenerator.png",
        language: ["html", "javascript", ".filter()", ".sort()"],
        describe:
            "The task is to write a script that, after clicking the button, generates 20 random numbers and puts them in two columns even and odd. Additionally, the columns are to be sorted by ascending.",
        videoSrc: "https://www.youtube.com/embed/gIzZUG408XU",
        github: "https://github.com/kuc-lukasz/training/tree/main/Task%20-%20IT.Group/Task%20with%20browser",
        githubIcon: "/img/github-blue.png",
    },
    {
        id: "9",
        title: "Find a city - searching bar",
        img: "/projectsImgs/find a city.png",
        language: [
            "html",
            "css",
            "javascript",
            ".filter()",
            ".json",
            ".sort()",
            "form",
        ],
        describe:
            "The task was to create a city search engine that would find the right city from the .json file in real time. In the form you entered your data, the search engine checks the .json file and displays the entered data. The functions .filter () and .sort () were used in the task.",
        videoSrc: "www.youtube.com/embed/au3mRcxbvb0",
        github: "https://github.com/kuc-lukasz/training/tree/main/Filter%20Task%20Keyup",
        githubIcon: "/img/github-blue.png",
    },
    {
        id: "8",
        title: "Website commercial project",
        img: "/projectsImgs/VisionforFuture.png",
        language: ["html", "css", "javascript"],
        describe:
            "This is a commercial website project. In the background, I put in video, gradient, and image. Instead of scrolling website, I added a slider with animations. The website is responsive.",
        videoSrc: "https://www.youtube.com/embed/LdeA9_JHe8Q",
        github: "https://github.com/kuc-lukasz/website-comm-project",
        githubIcon: "/img/github-blue.png",
    },
    {
        id: "7",
        title: "ToDo App",
        img: "/projectsImgs/toDo.png",
        language: ["html", "css", "javascript"],
        describe:
            "ToDo App is an application for creating daily to-do tasks. We can add new tasks, mark the current ones and delete them. The app helps you keep track of your daily tasks.",
        videoSrc: "https://www.youtube.com/embed/XFVHrCM0fKQ",
        github: "https://github.com/kuc-lukasz/toDo-list",
        githubIcon: "/img/github-blue.png",
    },
    {
        id: "6",
        title: "Slider",
        img: "/projectsImgs/slider.png",
        language: ["html", "css", "javascript", ".json"],
        describe:
            "This is a project where I am using a JSON file. The main aim of the project was to download data from a JSON file and then implement it in the project and create a slider. Additionally, we have setIterval which can be interrupted by any button. Pictures can also be selected individually via the bottom buttons.",
        videoSrc: "https://www.youtube.com/embed/b43Y-_Cxm0g",
        github: "https://github.com/kuc-lukasz/Slider-InfoshareAcademy-Task",
        githubIcon: "/img/github-blue.png",
    },
    {
        id: "5",
        title: "Website single page project",
        img: "/projectsImgs/antax.png",
        language: ["html", "css", "javascript"],
        describe:
            "This is the first page of the website. I created this to practice positioning and responsiveness. The website is in the mobile version.",
        videoSrc: "https://www.youtube.com/embed/szwD6FDjwH0",
        github: "https://github.com/kuc-lukasz/brand-project-one-page",
        githubIcon: "/img/github-blue.png",
    },
    {
        id: "4",
        title: "Form with validation",
        img: "/projectsImgs/formWithValid.png",
        language: ["html", "css", "javascript"],
        describe:
            "It is a login panel with data validation. The panel uses a key-up to verify that we have entered an e-mail address. Additionally, password verification is implemented, where we receive a message if the password is below 5 characters. The data entered finally is displayed in a new window.",
        videoSrc: "https://www.youtube.com/embed/-TVWDichFAs",
        github: "https://github.com/kuc-lukasz/Form-With-Validation",
        githubIcon: "/img/github-blue.png",
    },
    {
        id: "3",
        title: "Choose Animal App",
        img: "/projectsImgs/chooseAnimal.png",
        language: ["html", "css", "javascript"],
        describe:
            "This is one of my first applications where we choose our favorite animal. We can add animals and choose our favorites, which then appear in the main window.",
        videoSrc: "https://www.youtube.com/embed/0HJDnDezHSc",
        github: "https://github.com/kuc-lukasz/Choose-your-animal-app",
        githubIcon: "/img/github-blue.png",
    },
    {
        id: "2",
        title: "Duplicate website training",
        img: "/projectsImgs/blogduplicate.png",
        language: ["html", "css"],
        describe:
            "This is a duplicate version of the website. The project aimed to reproduce an already existing website. It was one of the first projects, mainly for flexbox and CSS exercises.",
        videoSrc: "https://www.youtube.com/embed/-ocPApucir8",
        github: "https://github.com/kuc-lukasz/Website-mapping-homework-task",
        githubIcon: "/img/github-blue.png",
    },
    {
        id: "1",
        title: "Traning folder github",
        img: "/projectsImgs/training.png",
        language: ["html", "css", "javascript"],
        describe:
            "This is the github training code folder. We have a lot of little training tasks here. Exercise mainly Javascript, but also CSS and html. Animations, array tasks, multimedia, promises, asynchronousness and positioning (flexbox and grid)",
        videoSrc: "",
        github: "https://github.com/kuc-lukasz/training",
        githubIcon: "/img/github-blue.png",
    },
    {
        id: "0",
        title: "My own website",
        img: "/projectsImgs/firstpageAboutme.png",
        language: ["html", "css", "javascript"],
        describe:
            "My first page, where I was using html, css and JS. The website introduce my projects until January 2022. ",
        videoSrc: "https://www.youtube.com/embed/9O_7ysdtqg4",
        github: "https://github.com/kuc-lukasz/training/tree/main/first-page-aboutme",
        githubIcon: "/img/github-blue.png",
    },
];

export const AllProjects = () => data;

export const getProject = (number) => {
    return data.find((project) => project.id === number);
};
