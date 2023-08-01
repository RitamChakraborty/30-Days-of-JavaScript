import projects from "./projects";

const tbody = document.querySelector('tbody');

for (const project of projects) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${project.id}</td>
        <td>${project.projectName}</td>
        <td><a href="${project.codeLink}"><img src="https://img.icons8.com/?size=48&id=keI1M862UTP2&format=png" alt="${project.projectName} GitHub"</a></td>
        <td><a href="${project.gitHubPagesLink}" target="_blank"><img src="https://img.icons8.com/?size=48&id=AZOZNnY73haj&format=png" alt="${project.projectName} GitHub Pages" </a></td>
        <td><a href="${project.netlifyLink}" target="_blank"><img src="https://img.icons8.com/?size=48&id=sBo1RJ3rjbje&format=png" alt="${project.projectName} Netlify" /></a></td>
        <td>${project.timeline}</td>
    `;
    tbody.appendChild(tr);
}