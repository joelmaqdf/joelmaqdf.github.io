const PROJECTS = [
    {
        id: 'cake_design',
        name: 'Cake Design Project',
        description: ' CakeJF is a web project dedicated to the art of custom cakes. By blending Bootstrap’s elegance with the creativity of a cake designer, this site provides a delightful experience for visitors.This project was created to explore the bootstrap framework and practice code development and design.',
        technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP'],
        link: ''
    },
    {
        id: 'flower_design',
        name: 'Flower Design Project',
        description: 'This project was created to explore the bootstrap framework and practice code development and design.',
        technologies: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
        link: ''
    }
]

const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('name');
const descriptionRef = document.getElementById('description');
const technologiesRef = document.getElementById('technologies');
const linkRef = document.getElementById('link');


function startUpPage() {
    const selectedProject = PROJECTS.find((project) => project.id === projectId);
    console.log(selectedProject);
    descriptionRef.textContent = selectedProject.description;
    technologiesRef.innerHTML = '';

    // Add the technology tags:
    selectedProject.technologies.forEach((technologia) => {
        const tagElement = document.createElement('p');
        tagElement.classList.add('tag'); 
        tagElement.textContent = technologia; 
        technologiesRef.appendChild(tagElement);
    });

    linkRef.href = selectedProject.link;
    linkRef.textContent = selectedProject.link ? 'Project Link' : 'No Link Available';
    
}

startUpPage();

   