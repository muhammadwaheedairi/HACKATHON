// Get form and resume display elements
const form = document.getElementById('resumeForm') as HTMLFormElement;
const displayName = document.getElementById('displayName') as HTMLElement;
const displayContact = document.getElementById('displayContact') as HTMLElement;
const displayEducation = document.getElementById('displayEducation') as HTMLElement;
const displayWork = document.getElementById('displayWork') as HTMLElement;
const displaySkills = document.getElementById('displaySkills') as HTMLElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  // Get form data
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const contact = (document.getElementById('contact') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLInputElement).value;
  const work = (document.getElementById('work') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.split(',');

  // Update resume display with form data
  displayName.textContent = name;
  displayContact.textContent = contact;
  displayEducation.textContent = education;
  displayWork.textContent = work;

  // Clear skills list and repopulate
  displaySkills.innerHTML = '';
  skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill.trim();
    displaySkills.appendChild(li);
  });
});

// Make resume sections editable and reflect changes
[displayName, displayContact, displayEducation, displayWork, displaySkills].forEach(section => {
  section.addEventListener('blur', () => {
    if (section === displaySkills) {
      const skillsArray = section.innerText.split('\n').map(skill => skill.trim());
      displaySkills.innerHTML = '';
      skillsArray.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        displaySkills.appendChild(li);
      });
    }
  });
});
