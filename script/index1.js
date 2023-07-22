document.querySelectorAll('.dev-title').forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        document.querySelectorAll('.dev-title').forEach(element=>{
            element.classList.remove('active');
        });

        item.classList.add('active');

        let container = document.querySelectorAll('.dev-container');
        container.forEach(item=>{
            if(item.classList.contains('active')){
                item.classList.remove('active');
            }
        });

        container[index].classList.add('active');
    });
});

const skills = ['html', 'css', 'javascript', 'react', 'react native', 'node js', 'express js', 
'socket.io', 'electron js', 'symfony', 'vanilla php', 'django', 'django restframework', 'python',
'flutter', 'mysql', 'adobe photoshop', 'adobe after effect', 'adobe illustrator'];

const projects = [
    {
        title: 'Nike Landing Page',
        tools: 'React JS, HTML, CSS, JavaScript',
        description: "This is the landing page of Nike(prototype) and I developed this using REACT JS",
        image: './images/nike.png',
        buttons: [
            {name: 'View', btnClass:'visit', link:'https://yumusapp.herokuapp.com/'},
            {name: 'Github', btnClass:'visit github margin-left-10', link:'https://github.com/muscoff/yumus_web'},
        ]
    },
    {
        title: 'Muchat - A web version of WhatsApp using Socket.io and NodeJS',
        tools: 'HTML, CSS, JAVASCRIPT, Socket.io, NodeJS',
        description: "Muchat is a web version of WhatsApp except you only need a username and password to register and use the application. The application has the same features as WhatsApp and supports private chat conversations. Users are able to send video, audio, images and documents do their Muchat contacts. This application was developed using socket.io, nodejs and express js.<br /><br />To register on the app, click on the muchat button and create an account with a username and password. Click on the watch button to watch the youtube presentation of this application<br /><br />Muchat is not backed by any database but your informations are safely stored and protected<br />The application is currently hosted on amazon elasticbeanstalk service.<br />",
        image: './images/muchat.png',
        buttons: [
            {name: 'Muchat', btnClass:'visit', link:'http://muchat-env.eba-gzktp4f7.us-east-2.elasticbeanstalk.com/'},
            {name: 'Watch', btnClass:'visit youtube margin-left-10', link:'https://www.youtube.com/watch?v=RHkSoYt4tec&t=198s'},
        ]
    },
    {
        title: 'Chat-App with Socket.io and NodeJS',
        tools: 'HTML, CSS, JAVASCRIPT, Socket.io, NodeJS',
        description: "This is a simple chat application developed using socket.io and nodejs that enable users that are currently online to exchange messages. The application is in two folds. General and Private chat.<br /><br />To have a general chat, click on the General button, enter your username and start to send messages to anyone online.<br /><br />To have a private chat with a user, click on the Private button <br />Login with your name or nickname. Under the online users, click on any user to start a private chat with them",
        image: './images/chatapp.png',
        buttons: [
            {name: 'General', btnClass:'visit', link:'https://my-socket-io-chat-app.herokuapp.com/'},
            {name: 'Private', btnClass:'visit github margin-left-10', link:'https://my-socket-io-chat-app.herokuapp.com/login'},
        ]
    },
    {
        title: 'Airbnb Landing Page',
        tools: 'HTML, CSS, JAVASCRIPT',
        description: "Airbnb landing page prototype using HTM, CSS, JAVASCRIPT",
        image: './images/airbnb.png',
        buttons: [
            {name: 'View', btnClass:'visit', link:'./airbnb/index.htm'},
            {name: 'Github', btnClass:'visit github margin-left-10', link:'https://www.github.com/muscoff/airbnb'},
        ]
    },
    {
        title: 'Starbucks Landing Page',
        tools: 'HTML, CSS, JAVASCRIPT',
        description: "Starbucks landing page prototype using HTM, CSS, JAVASCRIPT",
        image: './images/starbucks.png',
        buttons: [
            {name: 'View', btnClass:'visit', link:'./starbucks/index.htm'},
            {name: 'Github', btnClass:'visit github margin-left-10', link:'https://www.github.com/muscoff/starbucks'},
        ]
    },
    {
        title: 'Burgerking Landing Page',
        tools: 'HTML, CSS, JAVASCRIPT',
        description: "Burgerking landing page prototype using HTM, CSS, JAVASCRIPT",
        image: './images/burgerking.png',
        buttons: [
            {name: 'View', btnClass:'visit', link:'./burgerking/index.htm'},
            {name: 'Github', btnClass:'visit github margin-left-10', link:'https://www.github.com/muscoff/burgerking'},
        ]
    },
    {
        title: 'Netflix Landing Page',
        tools: 'HTML, CSS, JAVASCRIPT',
        description: "Netflix landing page prototype using HTM, CSS, JAVASCRIPT",
        image: './images/netflix.png',
        buttons: [
            {name: 'View', btnClass:'visit', link:'./netflix/index.htm'},
            {name: 'Github', btnClass:'visit github margin-left-10', link:'https://www.github.com/muscoff/netflix'},
        ]
    },
    {
        title: 'Dunkin Donuts Landing Page',
        tools: 'HTML, CSS, JAVASCRIPT',
        description: "Dunkindonuts landing page prototype using HTM, CSS, JAVASCRIPT",
        image: './images/dunkindonuts.png',
        buttons: [
            {name: 'View', btnClass:'visit', link:'./dunkindonuts/index.htm'},
            {name: 'Github', btnClass:'visit github margin-left-10', link:'https://www.github.com/muscoff/dunkindonuts'},
        ]
    },
    {
        title: 'Current Profile',
        tools: 'HTML, CSS, JAVASCRIPT',
        description: "I developed my current profile using HTML, CSS, Javascript to traditional flex my frontend development skills",
        image: './images/profile.png',
        buttons: [
            {name: 'View', btnClass:'visit', link:'./index.htm'},
        ]
    },
]

const summary = {
    intro: 'Motivated Software Engineer eager to apply my technical and organisational skills in various environments to bring about productive solutions. I am experienced in developing websites, web applications and desktop applications. I also have experience in graphic designing using abode suite products. Currently seeking opportunities to apply and expand my skills and portfolio while facilitating company growth',
    location: 'Remote, WorldWide - Open to relocation',
    linkedin: 'https://www.linkedin.com/in/mustapha-muhammed-botchway-45aa7834/',
    dob: '',
    github: 'https://www.github.com/muscoff',
    youtube: 'https://www.youtube.com/channel/UCVCFIE0D5b_34816vYi5G4g'
}

const personal = {
    name: 'Mustapha Muhammed Botchway',
    bg: './images/bg1.png',
    image: './images/mussy.png',
    twitter: '@muscoff',
    email: 'muscoff2008@gmail.com'
}

document.querySelectorAll('div').forEach(item=>{
    if(item.hasAttribute('data-skills')){
        let string = '';
        skills.forEach(item=>string+=`<div class="dev-list">${item}</div>`);
        item.innerHTML = string;
    }else if(item.hasAttribute('data-projects')){
        let string = ''
        projects.forEach(({title, tools, description, image, buttons})=>{
            string+=`
                <div class="card">
                    <div class="row align-items-center">
                        <div class="dev-container-title">${title}</div>
                        <div class="font-roboto">${tools}</div>
                    </div><br>
                    <div class="font-circular">${description}</div><br>
                    <div>
                        <img src="${image}" alt="" class="img img-round-10">
                    </div><br><br>
                    <div>
            `

            buttons.forEach(({name, btnClass, link})=>string+=`<a href="${link}" target="_blank" class="${btnClass}">${name}</a>`)

            string+=`
                    </div><br /><br />
                </div><br /><br />
            `
        })
        item.innerHTML = string
    }else if(item.hasAttribute('data-summary')){
        let string = ''
        let {intro, location, linkedin, dob, github, youtube} = summary
        string += `
            <div class="font-helvetica">${intro}</div><br>
            <div class="font-roboto"><i class="fi fi-rr-marker font-12"></i> ${location}</div>
            <div class="font-roboto row">
                <div><i class="fi fi-rr-link font-12"></i><a target="blank" href="${linkedin}" class="link"> LinkedIn</a></div>
                ${dob ? `<div class="margin-left-10"><i class="fi fi-rr-infinity font-12"></i> Born ${dob}</div>` : `<div></div>`}
            </div>
            <div class="font-roboto row">
                <div><i class="fi fi-rr-link font-12"></i><a target="blank" href="${github}" class="link"> Github</a></div>
                <div class="margin-left-10">
                    <i class="fi fi-rr-link font-12"></i>
                    <a target="blank" href="${youtube}" class="link"> YouTube</a>
                </div>
            </div><br>
        `
        item.innerHTML = string
    }else if(item.hasAttribute('data-personal')){
        let string = ''
        let {name, bg, image, twitter, email} = personal

        string += `
            <div class="padding-all-20 padding-s-all-10">
                <div class="font-circular truncate">${name}</div>
                <div class="font-jsans"></div>
            </div>
            <div>
                <div><img src="${bg}" alt="" class="img"></div>
            </div>
            <div class="padding-all-2"></div>
            <div class="padding-all-20 padding-s-all-10">
                <div class="row justify-content-space-between relative">
                    <div class="relative">
                        <div class="absolute translate-y-50-up col-m-8 col-s-8 z-index-1">
                            <div class="profile-img blue-bg"><img src="${image}" alt="" class="img"></div>
                            <div class="truncate font-helvetica bold-text font-20 black-text">${name}</div>
                            <div class="truncate font-roboto at-text">${twitter}</div>
                        </div>
                    </div>
                    <div>
                        <a target="blank" href="mailto:${email}" class="mail">Contact</a>
                    </div>
                    <div class="col-12">
                        <div class="padding-all-20"></div>
                    </div>
                </div>
            </div><br>
        `

        item.innerHTML = string
    }
});