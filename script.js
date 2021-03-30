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
const text = "Développeur Web Inscrit chez Openclassrooms Recherche un contrat Pro";

// créer un nombre compris entre 50 et 300
const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
}

let index = 0;

//Writing Animation
const play = () => {

    //Start Over
    if (index > text.length) return reset();
    //Display "développeur Web"
    if (index <= 15) return displayText(0);
    //Update index
    if (index <= 16 || (index > 43 && index <= 44)) return addOne();
    //Display "Inscrit chez Openclassrooms"
    if (index <= 43) return displayText(16);
    //Display "Recherche un contrat Pro"
    if (index <= 70) return displayText(44);
}

let timer = setInterval(play, getRandomArbitrary(80, 180));

const reset = () => setTimeout(() => index = 0, 650);
const addOne = () => setTimeout(() => index++, 650);

const displayText = (valeur) => {
    slidetext.innerText = text.slice(valeur, index);
    index++;
}
/*------------------------------------------------------------------*/
