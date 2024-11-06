document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggle-skills');
    var skillsList = document.getElementById('skills-list');
    var skillsVisible = true;
    toggleButton.addEventListener('click', function () {
        skillsVisible = !skillsVisible;
        skillsList.style.display = skillsVisible ? 'grid' : 'none';
        toggleButton.textContent = skillsVisible ? 'Hide Skills' : 'Show Skills';
    });
});
