
//restaurant.js

const createRestaurantHomePage = () => {
    const body = document.body;
      
      // Create hero section
      const heroSection = document.createElement('section');
      heroSection.id = 'hero';
      const containerHero = document.createElement('div');
      containerHero.className = 'container';
      const h2Hero = document.createElement('h2');
      h2Hero.textContent = 'Welcome to Bansal college of Engineering';
      const pHero = document.createElement('p');
      pHero.textContent = 'Providing quality education and excellent placements for over 20 years';
      const aHero = document.createElement('a');
      aHero.href = '#menu';
      aHero.className = 'btn';
      aHero.textContent = 'View Department';
      containerHero.appendChild(h2Hero);
      containerHero.appendChild(pHero);
      containerHero.appendChild(aHero);
      heroSection.appendChild(containerHero);
      body.appendChild(heroSection);
    }
    
    export default createRestaurantHomePage;
    