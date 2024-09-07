var toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
var skillsSection = document.getElementById('skills-section');
toggleSkillsBtn.addEventListener('click', function () {
    var isHidden = skillsSection.classList.contains('hidden');
    if (isHidden) {
        skillsSection.classList.remove('hidden');
        toggleSkillsBtn.textContent = "Hide Skills";
    }
    else {
        skillsSection.classList.add('hidden');
        toggleSkillsBtn.textContent = "Show Skills";
    }
});
