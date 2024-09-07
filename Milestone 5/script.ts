// Ensure you are using the jsPDF correctly
const { jsPDF } = window.jspdf;

// Get form and resume display elements
const form = document.getElementById('resumeForm') as HTMLFormElement;
const displayName = document.getElementById('displayName') as HTMLElement;
const displayContact = document.getElementById('displayContact') as HTMLElement;
const displayEducation = document.getElementById('displayEducation') as HTMLElement;
const displayWork = document.getElementById('displayWork') as HTMLElement;
const displaySkills = document.getElementById('displaySkills') as HTMLElement;
const shareSection = document.getElementById('shareSection') as HTMLElement;
const resumeLink = document.getElementById('resumeLink') as HTMLElement;
const downloadButton = document.getElementById('downloadButton') as HTMLElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Get form data
    const username = (document.getElementById('username') as HTMLInputElement).value;
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

    // Show the resume section
    document.getElementById('resume')!.style.display = 'block';

    // Generate unique URL for resume
    const uniqueURL = `${username}.vercel.app/resume`;
    resumeLink.textContent = uniqueURL;
    shareSection.style.display = 'block';
});

// Download resume as PDF
downloadButton.addEventListener('click', () => {
    const pdf = new jsPDF();
    pdf.setFontSize(22);
    pdf.text('Resume', 20, 20);
    pdf.setFontSize(16);
    pdf.text(`Name: ${displayName.textContent}`, 20, 40);
    pdf.text(`Contact: ${displayContact.textContent}`, 20, 50);
    pdf.text(`Education: ${displayEducation.textContent}`, 20, 60);
    pdf.text(`Work Experience: ${displayWork.textContent}`, 20, 70);
    
    const skillsText = Array.from(displaySkills.children).map(li => li.textContent).join(', ');
    pdf.text(`Skills: ${skillsText}`, 20, 80);
    
    pdf.save(`${displayName.textContent}_Resume.pdf`);
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
