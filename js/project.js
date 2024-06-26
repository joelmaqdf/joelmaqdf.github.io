const PROJECTS = [
    {
        id: 'cake_design',
        name: 'Cake Design Project',
        description: 'CakeJF is a web project dedicated to the art of custom cakes. By blending Bootstrap’s elegance with the creativity of a cake designer, this site provides a delightful experience for visitors.This project was created to explore the bootstrap framework and practice code development and design.',
        technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP'],
        link: 'https://whimsical-fox-436c32.netlify.app/',
        imgPath:'img/projects/cake_design/cake_page.png',
    },
    {
        id: 'flower_design',
        name: 'Flower Design Project',
        description: 'This project was created to explore the bootstrap framework and practice code development and design.',
        technologies: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
        link: '',
        imgPath:'img/projects/flower/flower_page.png',    
    }
]

const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('name');
const descriptionRef = document.getElementById('description');
const technologiesRef = document.getElementById('technologies');
const linkRef = document.getElementById('projectLink');
const imgPathRef = document.getElementById('projectImage'); 
const technologyGradients= {
    'HTML': 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,52,1) 0%, rgba(180,5,5,1) 0%, rgba(204,28,8,1) 100%, rgba(234,88,48,1) 100%, rgba(252,116,62,1) 100%, rgba(252,176,69,1) 100%)',
    'CSS': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(16,111,204,1) 0%, rgba(47,61,215,1) 0%, rgba(38,75,212,1) 0%, rgba(20,139,232,1) 100%, rgba(7,186,247,1) 100%, rgba(0,212,255,0.11257002801120453) 100%)',
    'JAVASCRIPT': 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,52,1) 0%, rgba(238,222,60,1) 0%, rgba(218,193,16,1) 100%, rgba(252,176,69,1) 100%)',
    'BOOTSTRAP': 'linear-gradient(135deg, #6a0dad, #8a2be2, #6a0dad)'
};


function startUpPage() {
    const selectedProject = PROJECTS.find((project) => project.id === projectId);
    descriptionRef.textContent = selectedProject.description;
    imgPathRef.setAttribute('src', selectedProject.imgPath);

    // Add the technology tags:
    selectedProject.technologies.forEach((technologia) => {
        const tech = technologia.toUpperCase();
        const tagElement = document.createElement('p');
        tagElement.classList.add('tag'); 
        tagElement.textContent = tech; 
        tagElement.style.background = technologyGradients[tech] || '#CCCCCC'; 
        technologiesRef.appendChild(tagElement);
    });

    linkRef.href = selectedProject.link;
    linkRef.textContent = selectedProject.link ? 'Project Link' : 'No Link Available';
    
}

startUpPage();

   