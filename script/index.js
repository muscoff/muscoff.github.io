window.addEventListener('scroll', e=>{
    const header = document.querySelector('.mustapha-header')
    let scroll = scrollY
    if (scroll > header.offsetHeight) {
        header.classList.add('height-15')
        header.classList.add('toggle')
        header.classList.remove('height-20')
    }else{
        header.classList.add('height-20')
        header.classList.remove('height-15')
        header.classList.remove('toggle')
    }
})

const skills = [
    {name: 'HTML', img: 'html.png'}, {name: 'CSS', img: 'css.png'}, {name: 'Javascript', img: 'javascript.png'},
    {name: 'React.Js', img: 'react.png'}, {name: 'React Native', img: 'react.png'}, {name: 'Node.Js', img: 'nodejs.png'}, 
    {name: 'Express.Js', img: 'expressjs.png'}, {name: 'PHP', img: 'php.png'}, {name: 'MySQL', img: 'mysql.png'},
    {name: 'Socket.io', img: 'socketio.png'}, {name: 'Electron JS', img: 'electronjs.png'}, {name: 'Firebase', img: 'firebase.png'},
    {name: 'MongoDB', img: 'mongodb.png'}, {name: 'Python', img: 'python.png'}, {name: 'Django', img: 'django.png'},
    {name: 'Django Rest-Framework', img: 'djangorestframework.png'}, {name: 'Flutter', img: 'flutter.png'}, 
    {name: 'Photoshop', img: 'photoshop.png'}
]

let skillString = ''
skills.forEach(({name, img}, index) => {
    skillString+= `
        <div class="col-2 col-l-3 col-m-4 col-s-6 padding-all-10">
            <div class="flex-column align-items-center">
                <img src="./images/skills/${img}" alt="" class="img" />
            </div>
            <br />
            <div class="center-text font-helvetica bold-text">${name}</div>
        </div>
    `
})
document.querySelector('#skills-images').innerHTML = skillString

const projects = [
    {
        title: 'Muchie - Restaurant Management App',
        description: "Muchie is a restaurant management app that enable restaurant business owners to setup an account and manage the business workflow and transactions from the comfort of their phone. Servers at the restaurant can take orders from customers using the app and also issue digital receipt to customers. Customers can also use the app to scan the menu and receipt of their purchase. This app was developed using React Native(Expo) and Firebase",
        youtube: 'https://www.youtube.com/watch?v=MOqtvvGS3Go',
    },
    {
        title: 'Nike Landing Page',
        description: "This is a clone of the landing page of Nike website and I developed this using REACT JS",
        youtube: 'https://www.youtube.com/watch?v=vSW2foxCzFc',
        // buttons: [
        //     {name: 'View', github: false, link:'https://yumusapp.herokuapp.com/'},
        //     {name: 'Github', github: true, link:'https://github.com/muscoff/yumus_web'},
        // ]
    },
    {
        title: 'Muchat - A web version of WhatsApp using Socket.io and NodeJS',
        description: "Muchat is a web version of WhatsApp except you only need a username and password to register and use the application. The application has the same features as WhatsApp and supports private chat conversations. Users are able to send video, audio, images and documents do their Muchat contacts. This application was developed using socket.io, nodejs and express js.<br /><br />To register on the app, click on the muchat button and create an account with a username and password. Click on the watch button to watch the youtube presentation of this application<br /><br />Muchat is not backed by any database but your informations are safely stored and protected<br />The application is currently hosted on amazon elasticbeanstalk service.<br />",
        youtube: 'https://www.youtube.com/watch?v=RHkSoYt4tec',
        // buttons: [
        //     {name: 'View', github: false, link:'http://muchat-env.eba-gzktp4f7.us-east-2.elasticbeanstalk.com/'}
        // ]
    },
    {
        title: 'Chat-App with Socket.io and NodeJS',
        description: "This is a simple chat application developed using socket.io and nodejs that enable users that are currently online to exchange messages. The application is in two folds. General and Private chat.<br /><br />To have a general chat, click on the General button, enter your username and start to send messages to anyone online.<br /><br />To have a private chat with a user, click on the Private button <br />Login with your name or nickname. Under the online users, click on any user to start a private chat with them",
        youtube: 'https://www.youtube.com/watch?v=Xn0oqA0dlRI',
        // buttons: [
        //     {name: 'View', github: false, link:'https://my-socket-io-chat-app.herokuapp.com/'}
        // ]
    },
    {
        title: 'Airbnb Landing Page',
        description: "Airbnb landing page prototype using HTM, CSS, JAVASCRIPT",
        youtube: 'https://www.youtube.com/watch?v=nF6sOzcKjTY',
        buttons: [
            {name: 'View', github: false, link:'./airbnb/index.htm'},
            {name: 'Github', github: true, link:'https://www.github.com/muscoff/airbnb'},
        ]
    },
    {
        title: 'Starbucks Landing Page',
        description: "Starbucks landing page prototype using HTM, CSS, JAVASCRIPT",
        youtube: 'https://www.youtube.com/watch?v=Iqmix-igNnY',
        buttons: [
            {name: 'View', github: false, link:'./starbucks/index.htm'},
            {name: 'Github', github: true, link:'https://www.github.com/muscoff/starbucks'},
        ]
    },
    {
        title: 'Burgerking Landing Page',
        description: "Burgerking landing page prototype using HTM, CSS, JAVASCRIPT",
        youtube: 'https://www.youtube.com/watch?v=AyhvOR2tv3c',
        buttons: [
            {name: 'View', github: false, link:'./burgerking/index.htm'},
            {name: 'Github', github: true, link:'https://www.github.com/muscoff/burgerking'},
        ]
    },
    {
        title: 'Netflix Landing Page',
        description: "Netflix landing page prototype using HTM, CSS, JAVASCRIPT",
        youtube: 'https://www.youtube.com/watch?v=Nm0W7ydQYdQ',
        buttons: [
            {name: 'View', github: false, link:'./netflix/index.htm'},
            {name: 'Github', github: true, link:'https://www.github.com/muscoff/netflix'},
        ]
    },
    {
        title: 'Dunkin Donuts Landing Page',
        description: "Dunkindonuts landing page prototype using HTM, CSS, JAVASCRIPT",
        youtube: 'https://www.youtube.com/watch?v=LYgYfPjtAw4',
        buttons: [
            {name: 'View', github: false, link:'./dunkindonuts/index.htm'},
            {name: 'Github', github: true, link:'https://www.github.com/muscoff/dunkindonuts'},
        ]
    }
]

let projectString = ''

projects.forEach(({title, description, youtube, buttons}, index) => {
    let youtubeLink = youtube.split('=')[1]
    projectString += `
        <div class="proj-div padding-all-20">
            <div class="width-100 height-55 margin-auto">
                <iframe src="https://www.youtube.com/embed/${youtubeLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            <br />
            <div class="white-text font-helvetica">
                <div class="center-text uppercase bold-text">${title}</div><br />
                <div>${description}</div><br />
                <div class="flex-row-reverse">
    `
    buttons ? buttons.forEach(({name, github, link}) => {
        projectString+= `
        <a href="${link}" target="_blank" style="margin-right: ${github ? '10px' : 'none'}" class="visit">${name}</a>
        `
    }) : null

    projectString += `
                </div>
            </div>
        </div><br /><br />
    `
})

document.querySelector('#project-items').innerHTML = projectString