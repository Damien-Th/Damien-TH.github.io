import { Slider } from './components/Slider.js';
import { HamburgerDisplay } from './components/HamburgerDisplay.js';
// import { ScrollListener } from './components/ScrollListener.js';
import { UpdateYear } from './components/UpdateYear.js';
import { Websites } from './components/Websites.js';
import { Skills } from './components/Skills.js';

function init() {
    new Slider();
    new HamburgerDisplay();
    // new ScrollListener();
    new UpdateYear();
    new Websites();
    new Skills();
    AOS.init();
}

init();