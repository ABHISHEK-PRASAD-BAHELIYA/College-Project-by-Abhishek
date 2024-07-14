import createContentPage from './about.js';
import createMenuPage from './Department.js';
import createRestaurantHomePage from './Bansal.js';
import createTabs from './header.js';
import createHeaderPage from './footer.js';
import createFacultiesPage from './faculties.js';
import createourCompusPage from './ourCompus.js';
import './style.css';


function initialLoad() {
    createTabs();
    createRestaurantHomePage();
    createMenuPage();
    createFacultiesPage();
    createourCompusPage();
    createContentPage();
    createHeaderPage();
}

export default initialLoad;