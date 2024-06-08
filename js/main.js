//cards Images

const skillsList = [
    {skillName: 'Flask', iconURL: 'https://img.icons8.com/nolan/64/flask.png'},
    {skillName: 'Javascript', iconURL: 'https://img.icons8.com/color/48/javascript--v1.png'},
    {skillName: 'Figma', iconURL: 'https://img.icons8.com/color/48/figma--v1.png'},
    {skillName: 'Html', iconURL: 'https://img.icons8.com/color/48/html-5.png'},
    {skillName: 'Css', iconURL: 'https://img.icons8.com/color/48/css3.png'},
];

// function cried cards
function createSkillsCards() {
    const skillListRef = document.getElementById('skillsList');
    skillsList.forEach((skill) => {
        const cardContentHTML = `
            <div class="skill-icon">
                <img src=${skill.iconURL}>
            </div>
            <p>${skill.skillName}</p>
        `;
        const card = document.createElement('div');
        card.className = "skill-card";
        card.innerHTML = cardContentHTML;
        skillListRef.appendChild(card);
    })
};

createSkillsCards();

// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}

//  Scroll section-Selecione as seções e os links de navegação
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

// Function to check if the section is visible on the screen
function isSectionVisible(section) {
    const top = window.scrollY;
    const offset = section.offsetTop - 100;
    const height = section.offsetHeight;
    return top >= offset && top < offset + height;
}

// Activate the navigation links as the user scrolls the page
function activateNavLinks() {
    sections.forEach((sec) => {
        if (isSectionVisible(sec)) {
            const id = sec.getAttribute('id');
            navLinks.forEach((link) => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });
}

//Add a scroll event to call the function
window.addEventListener('scroll', activateNavLinks);

// Add "sticky" class to header when user scrolls more than 100 pixels
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 100);

//remove toggle icon and navbar when click navbar links (scroll)
menuIcon.classList.remove('bx-x');
navBar.classList.remove('active');
});

    
  

    

     
           