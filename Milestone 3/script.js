// Function to handle form submission and generate the resume
document.getElementById('resume-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    // Capture form data
    var formData = new FormData(event.target);
    var resumeData = {
        name: formData.get('name'),
        title: formData.get('title'),
        email: formData.get('email'),
        location: formData.get('location'),
        summary: formData.get('summary'),
        experience: formData.get('experience').split(',').map(function (exp) { return exp.trim(); }),
        education: formData.get('education').split(',').map(function (edu) { return edu.trim(); }),
        skills: formData.get('skills').split(',').map(function (skill) { return skill.trim(); }),
    };
    // Hide the form section
    document.getElementById('form-section').style.display = 'none';
    // Display the resume section
    document.getElementById('resume-section').style.display = 'block';
    // Insert dynamic data into the resume
    document.getElementById('resume-name').textContent = resumeData.name;
    document.getElementById('resume-title').textContent = resumeData.title;
    document.getElementById('resume-email').textContent = "Email: ".concat(resumeData.email);
    document.getElementById('resume-location').textContent = "Location: ".concat(resumeData.location);
    document.getElementById('resume-summary').textContent = resumeData.summary;
    // Generate Work Experience
    var experienceContainer = document.getElementById('resume-experience');
    resumeData.experience.forEach(function (job) {
        var jobElement = document.createElement('div');
        jobElement.classList.add('job');
        jobElement.innerHTML = "<p>".concat(job, "</p>");
        experienceContainer.appendChild(jobElement);
    });
    // Generate Education
    var educationContainer = document.getElementById('resume-education');
    resumeData.education.forEach(function (edu) {
        var eduElement = document.createElement('div');
        eduElement.classList.add('education-item');
        eduElement.innerHTML = "<p>".concat(edu, "</p>");
        educationContainer.appendChild(eduElement);
    });
    // Generate Skills
    var skillsList = document.getElementById('resume-skills');
    resumeData.skills.forEach(function (skill) {
        var skillElement = document.createElement('li');
        skillElement.textContent = skill;
        skillsList.appendChild(skillElement);
    });
});
