
    // Create header
    const createTabs = () => {
        const body = document.body;
    
        const header = document.createElement('header');
        const containerHeader = document.createElement('div');
        containerHeader.className = 'container';
        const logo = document.createElement('img');
        const login = document.createElement('img');
        logo.src = './assets/logo.png';
        logo.alt = 'BGI logo';
        logo.style.width = '20%';
        logo.style.height = 'auto';
        login.src = './assets/profiile_image.jpeg';
        login.alt = 'profile_image';
        login.style.width = '12%';
        login.style.borderRadius = '50%';
        login.style.height = 'auto';
        const nav = document.createElement('nav');
        const ul = document.createElement('ul');
        ['Home', 'Department', 'About', 'Contact', 'Faculties', 'Our Campuses'].forEach(text => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${text.toLowerCase()}`;
            a.textContent = text;
            li.appendChild(a);
            ul.appendChild(li);
        });
        nav.appendChild(ul);
        containerHeader.appendChild(logo);
        containerHeader.appendChild(nav);
        containerHeader.appendChild(login);
        header.appendChild(containerHeader);
        body.appendChild(header);
    };
    
    export default createTabs;
    