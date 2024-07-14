// Create menu section
const createMenuPage = () => {
    const body = document.body;
    
    const menuSection = document.createElement('section');
    menuSection.id = 'menu';
    const containerMenu = document.createElement('div');
    containerMenu.className = 'container';
    const h2Menu = document.createElement('h2');
    h2Menu.textContent = 'OUR DEPARTMENT';
    const menuGrid = document.createElement('div');
    menuGrid.className = 'menu-grid';
    const dishes = [
        { name: 'Computer science Engineering', description: 'The Computer Science & Engineering (CSE) department at Bansal College of Engineering is dedicated to providing students with a solid foundation in computer science principles and practices.',img: './assets/cs.png' },
        { name: 'Mechanical Enginnering', description: 'The Mechanical Engineering department at Bansal College of Engineering offers a comprehensive education in the principles of mechanics, thermodynamics, materials science, and structural analysis. ', img: './assets/me.png' },
        { name: 'civil Enginnering', description: 'The Civil Engineering department at Bansal College of Engineering focuses on educating students in the planning, design, construction, and maintenance of infrastructure projects such as buildings, roads, bridges, and water systems.', img: './assets/ce.png' },
        { name: 'Electrical Electronic Enginneering', description: 'The Electrical & Electronics Engineering (EEE) department at Bansal College of Engineering provides a robust education in the fields of electrical circuits, electronics, power systems, control systems, and telecommunications.', img: './assets/ee.png' },
        { name: 'Electronic & communication Engineering', description: 'The Electronics and Communication Engineering (ECE) department at Bansal College of Engineering offers an in-depth education in electronic devices, circuits, communication systems, and signal processing.', img: './assets/ec.png' },
        { name: '1st year Engineering', description: 'The First Year Engineering program at Bansal College of Engineering provides a strong foundation in basic engineering principles and sciences. Students are introduced to core subjects such as mathematics, physics, chemistry, and basic engineering disciplines like mechanical, electrical, and computer science.', img: './assets/ml.png' },
    ];
    dishes.forEach(dish => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        const img = document.createElement('img');
        img.src = dish.img;
        img.alt = dish.name;
        const menuContent = document.createElement('div');
        menuContent.className = 'menu-content';
        const h3 = document.createElement('h3');
        h3.textContent = dish.name;
        const p = document.createElement('p');
        p.textContent = dish.description;
        menuContent.appendChild(h3);
        menuContent.appendChild(p);
        menuItem.appendChild(img);
        menuItem.appendChild(menuContent);
        menuGrid.appendChild(menuItem);
    });
    containerMenu.appendChild(h2Menu);
    containerMenu.appendChild(menuGrid);
    menuSection.appendChild(containerMenu);
    body.appendChild(menuSection);
};

export default createMenuPage;