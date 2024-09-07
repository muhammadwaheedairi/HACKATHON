const toggleSkillsBtn = document.getElementById('toggleSkillsBtn') as HTMLButtonElement;
const skillsSection = document.getElementById('skills-section') as HTMLElement;

toggleSkillsBtn.addEventListener('click', () => {
  const isHidden = skillsSection.classList.contains('hidden');
  if (isHidden) {
    skillsSection.classList.remove('hidden');
    toggleSkillsBtn.textContent = "Hide Skills";
  } else {
    skillsSection.classList.add('hidden');
    toggleSkillsBtn.textContent = "Show Skills";
  }
});
