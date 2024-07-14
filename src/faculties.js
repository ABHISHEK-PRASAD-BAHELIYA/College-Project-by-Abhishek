// Create menu section
const createFacultiesPage = () => {
    const body = document.body;
    
    const menuSection = document.createElement('section');
    menuSection.id = 'menu';
    const containerMenu = document.createElement('div');
    containerMenu.className = 'container';
    const h2Menu = document.createElement('h2');
    h2Menu.textContent = 'FACILITIES';
    const menuGrid = document.createElement('div');
    menuGrid.className = 'menu-grid';
    const dishes = [
        { name: 'Transport', img: './assets/f1.jpg' },
        { name: 'Computer Labs', img: './assets/f2.jpg' },
        { name: 'Communication Development', img: './assets/f3.jpeg' },
        { name: ' Big Library', img: './assets/f4.jpg'},
        { name: 'Training & Innovation', img: './assets/f5.jpg' },
        { name: 'Vibrant Campus', img: './assets/f6.jpg'},
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

export default createFacultiesPage;