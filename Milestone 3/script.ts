// Function to handle form submission and generate the resume
document.getElementById('resume-form')!.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission

    // Capture form data
    const formData = new FormData(event.target as HTMLFormElement);
    const resumeData = {
        name: formData.get('name') as string,
        title: formData.get('title') as string,
        email: formData.get('email') as string,
        location: formData.get('location') as string,
        summary: formData.get('summary') as string,
        experience: (formData.get('experience') as string).split(',').map((exp: string) => exp.trim()),
        education: (formData.get('education') as string).split(',').map((edu: string) => edu.trim()),
        skills: (formData.get('skills') as string).split(',').map((skill: string) => skill.trim()),
    };

    // Hide the form section
    document.getElementById('form-section')!.style.display = 'none';

    // Display the resume section
    document.getElementById('resume-section')!.style.display = 'block';

    // Insert dynamic data into the resume
    document.getElementById('resume-name')!.textContent = resumeData.name;
    document.getElementById('resume-title')!.textContent = resumeData.title;
    document.getElementById('resume-email')!.textContent = `Email: ${resumeData.email}`;
    document.getElementById('resume-location')!.textContent = `Location: ${resumeData.location}`;
    document.getElementById('resume-summary')!.textContent = resumeData.summary;

    // Generate Work Experience
    const experienceContainer = document.getElementById('resume-experience')!;
    resumeData.experience.forEach((job) => {
        const jobElement = document.createElement('div');
        jobElement.classList.add('job');
        jobElement.innerHTML = `<p>${job}</p>`;
        experienceContainer.appendChild(jobElement);
    });

    // Generate Education
    const educationContainer = document.getElementById('resume-education')!;
    resumeData.education.forEach((edu) => {
        const eduElement = document.createElement('div');
        eduElement.classList.add('education-item');
        eduElement.innerHTML = `<p>${edu}</p>`;
        educationContainer.appendChild(eduElement);
    });

    // Generate Skills
    const skillsList = document.getElementById('resume-skills')!;
    resumeData.skills.forEach((skill) => {
        const skillElement = document.createElement('li');
        skillElement.textContent = skill;
        skillsList.appendChild(skillElement);
    });
});
