// Create about section

const createContentPage = () => {
    const body = document.body;
    const aboutSection = document.createElement('section');
    aboutSection.id = 'about';
    const containerAbout = document.createElement('div');
    containerAbout.className = 'container';
    const h2About = document.createElement('h2');
    h2About.textContent = 'About Us';
    const pAbout = document.createElement('p');
    pAbout.textContent = 'Bansal College of Engineering Mandideep has been laboriously thriving for the past 20 years. It established itself as the premier engineering college in Mandideep and commenced with only 240 students. This glorious institute holds its affiliation with RGPV and provides fine-quality education.';
    containerAbout.appendChild(h2About);
    containerAbout.appendChild(pAbout);
    aboutSection.appendChild(containerAbout);
    body.appendChild(aboutSection);
};

export default createContentPage;