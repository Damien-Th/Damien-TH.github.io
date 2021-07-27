/*------Update-Year-----------*/
const foot = document.getElementById('foot');
let now = new Date();
let year = now.getFullYear();
foot.innerHTML = "© " + year + " Développé Par Damien THERY<br> Designed from scratch";

/*------Hamburger-Display-----------*/

hamburger.onclick = () => {
    hamburger.classList.toggle('open')
    navbar.classList.toggle('hide')
}

/*-----------writing-simulator-----------*/

const slidetext = document.getElementById('slidetext');
const phrases = ['Développeur Web', 'curieux', 'passionné'];

let iPhrase = 0
let index = 0
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop() {

    isEnd = false
    slidetext.innerHTML = 'Je suis ' + currentPhrase.join('')

    if (index == phrases[iPhrase].length) {
        isDeleting = true
        isEnd = true
    }

    if (!isDeleting) {
        currentPhrase.push(phrases[iPhrase][index])
        index++
    }

    if (isDeleting) {
        currentPhrase.pop(phrases[iPhrase][index])
        index--

        if (index == 0) {
            isDeleting = false
            currentPhrase = []
            iPhrase++

            if (iPhrase == phrases.length) iPhrase = 0

        }
    }

    const speedUp = Math.random() * (100 - 80) + 80
    const normalSpeed = Math.random() * (200 - 150) + 150
    let time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed

    setTimeout(loop, time)
}

loop()

/*-------------------Scroll-listener--------------------------*/

var lastScrollTop = 0;
let Position = null;
let ColorSwitch = false;

//check if we scroll down or up and hide the nav bar
document.addEventListener("scroll", function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    st > lastScrollTop ? Position = 'down' : Position = 'up';
    ColorSwitch && Position === 'down' ? navbar.classList.add("hideNavbar") : navbar.classList.remove("hideNavbar");
    lastScrollTop = st <= 0 ? 0 : st;
}, false);

const navbar = document.querySelector('.navbar');
const homeSection = document.getElementById('head');
const faders = document.querySelectorAll('.fade_in');

const homeSectionOptions = {
    rootMargin: "-50px 0px 0px 0px"
};

// switch navbar color
const homeSectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navbar.classList.add("blueModeBar");
            ColorSwitch = true;
        } else {
            navbar.classList.remove("blueModeBar");
            ColorSwitch = false;
        }
    })
}, homeSectionOptions);

homeSectionObserver.observe(homeSection);

/*------------fade-in_animation---------------*/

let isMobile = false;

if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    isMobile = true;
}

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnscroll = new IntersectionObserver(function (entries, appearOnscroll) {
    entries.forEach(entry => {

        if (isMobile) {
            if (!entry.isIntersecting) {
                return
            } else {
                entry.target.classList.add("appear");
                appearOnscroll.unobserve(entry.target);
            }
        } else {
            !entry.isIntersecting && !ColorSwitch ? entry.target.classList.remove("appear") : entry.target.classList.add("appear");
        }

    })
}, appearOptions);

faders.forEach(fader => {
    appearOnscroll.observe(fader);
});

/*-----------------------------------------------------------*/
