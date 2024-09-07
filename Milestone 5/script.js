// Ensure you are using the jsPDF correctly
var jsPDF = window.jspdf.jsPDF;
// Get form and resume display elements
var form = document.getElementById('resumeForm');
var displayName = document.getElementById('displayName');
var displayContact = document.getElementById('displayContact');
var displayEducation = document.getElementById('displayEducation');
var displayWork = document.getElementById('displayWork');
var displaySkills = document.getElementById('displaySkills');
var shareSection = document.getElementById('shareSection');
var resumeLink = document.getElementById('resumeLink');
var downloadButton = document.getElementById('downloadButton');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form data
    var username = document.getElementById('username').value;
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
    // Show the resume section
    document.getElementById('resume').style.display = 'block';
    // Generate unique URL for resume
    var uniqueURL = "".concat(username, ".vercel.app/resume");
    resumeLink.textContent = uniqueURL;
    shareSection.style.display = 'block';
});
// Download resume as PDF
downloadButton.addEventListener('click', function () {
    var pdf = new jsPDF();
    pdf.setFontSize(22);
    pdf.text('Resume', 20, 20);
    pdf.setFontSize(16);
    pdf.text("Name: ".concat(displayName.textContent), 20, 40);
    pdf.text("Contact: ".concat(displayContact.textContent), 20, 50);
    pdf.text("Education: ".concat(displayEducation.textContent), 20, 60);
    pdf.text("Work Experience: ".concat(displayWork.textContent), 20, 70);
    var skillsText = Array.from(displaySkills.children).map(function (li) { return li.textContent; }).join(', ');
    pdf.text("Skills: ".concat(skillsText), 20, 80);
    pdf.save("".concat(displayName.textContent, "_Resume.pdf"));
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
