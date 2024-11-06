document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skillsList = document.getElementById('skills-list') as HTMLUListElement;

    let skillsVisible = true;

    toggleButton.addEventListener('click', () => {
        skillsVisible = !skillsVisible;
        skillsList.style.display = skillsVisible ? 'grid' : 'none';
        toggleButton.textContent = skillsVisible ? 'Hide Skills' : 'Show Skills';
    });
});
