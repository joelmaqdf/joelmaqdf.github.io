const skillsList = [
    {skillName: 'Flask', iconURL: 'https://img.icons8.com/nolan/64/flask.png'},
    {skillName: 'Javascript', iconURL: 'https://img.icons8.com/color/48/javascript--v1.png'},
    {skillName: 'Figma', iconURL: 'https://img.icons8.com/color/48/figma--v1.png'},
    {skillName: 'Html', iconURL: 'https://img.icons8.com/color/48/html-5.png'},
    {skillName: 'Css', iconURL: 'https://img.icons8.com/color/48/css3.png'},
];

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