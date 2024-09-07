// Get form and resume display elements
var form = document.getElementById('resumeForm');
var displayName = document.getElementById('displayName');
var displayContact = document.getElementById('displayContact');
var displayEducation = document.getElementById('displayEducation');
var displayWork = document.getElementById('displayWork');
var displaySkills = document.getElementById('displaySkills');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form data
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;
    var education = document.getElementById('education').value;
    var work = document.getElementById('work').value;
    var skills = document.getElementById('skills').value.split(',');
    // Update resume display with form data
    displayName.textContent = name;
    displayContact.textContent = contact;
    displayEducation.textContent = education;
    displayWork.textContent = work;
    // Clear skills list and repopulate
    displaySkills.innerHTML = '';
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill.trim();
        displaySkills.appendChild(li);
    });
});
// Make resume sections editable and reflect changes
[displayName, displayContact, displayEducation, displayWork, displaySkills].forEach(function (section) {
    section.addEventListener('blur', function () {
        if (section === displaySkills) {
            var skillsArray = section.innerText.split('\n').map(function (skill) { return skill.trim(); });
            displaySkills.innerHTML = '';
            skillsArray.forEach(function (skill) {
                var li = document.createElement('li');
                li.textContent = skill;
                displaySkills.appendChild(li);
            });
        }
    });
});
