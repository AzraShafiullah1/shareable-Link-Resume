"use strict";
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the buttons and sections
    const changeBackgroundButton = document.getElementById('change-background');
    const changeFontButton = document.getElementById('change-font');
    const downloadResumeButton = document.getElementById('download-resume');
    const shareLinkButton = document.getElementById('share-link');
    const uniqueUrlDiv = document.getElementById('unique-url');
    const resumeUrlSpan = document.getElementById('resume-url');
    // Ensure jsPDF is available globally (from the CDN)
    const { jsPDF } = window.jspdf;
    // Change background color randomly
    if (changeBackgroundButton) {
        changeBackgroundButton.addEventListener('click', () => {
            const colors = ['#FFEB3B', '#8BC34A', '#00BCD4', '#9C27B0', '#F44336'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor;
        });
    }
    // Change font style randomly
    if (changeFontButton) {
        changeFontButton.addEventListener('click', () => {
            const fonts = ['Arial', 'Courier New', 'Verdana', 'Georgia', 'Times New Roman'];
            const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
            document.body.style.fontFamily = randomFont;
        });
    }
    // Download resume as PDF using jsPDF
    if (downloadResumeButton) {
        downloadResumeButton.addEventListener('click', () => {
            var _a, _b, _c, _d, _e, _f;
            const doc = new jsPDF();
            // Capture content from the editable fields
            const name = ((_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.textContent) || 'No name provided';
            const contactEmail = ((_b = document.getElementById('contact-email')) === null || _b === void 0 ? void 0 : _b.textContent) || 'No email provided';
            const contactPhone = ((_c = document.getElementById('contact-phone')) === null || _c === void 0 ? void 0 : _c.textContent) || 'No phone number provided';
            const education = ((_d = document.getElementById('education')) === null || _d === void 0 ? void 0 : _d.textContent) || 'No education provided';
            const skills = ((_e = document.getElementById('skills')) === null || _e === void 0 ? void 0 : _e.textContent) || 'No skills provided';
            const experience = ((_f = document.getElementById('experience')) === null || _f === void 0 ? void 0 : _f.textContent) || 'No experience provided';
            // Add text to PDF
            doc.text(name, 10, 10);
            doc.text(contactEmail, 10, 20);
            doc.text(contactPhone, 10, 30);
            doc.text(education, 10, 40);
            doc.text(skills, 10, 50);
            doc.text(experience, 10, 60);
            // Save the document as 'resume.pdf'
            doc.save('resume.pdf');
        });
    }
    // Generate unique URL for sharing
    if (shareLinkButton) {
        shareLinkButton.addEventListener('click', () => {
            const username = prompt("Enter your username for the unique URL") || "default";
            const uniqueUrl = `${username}.vercel.app/resume`;
            resumeUrlSpan.textContent = uniqueUrl;
            uniqueUrlDiv.style.display = 'block';
        });
    }
});
