const PROJECTS = [
    {
        id: 'cake_design',
        name: 'Cake Design Project',
        description: 'This project was created to explore the bootstrap framework and practice code development and design.',
        tecnologies: ['HTML', 'Css', 'Javascript', 'Bootstrap'],
        link: ''
    }
]

const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('name');


function startUpPage() {
    const selectedProject = PROJECTS.find((project) => {
        project.id === projectId;
    });

}