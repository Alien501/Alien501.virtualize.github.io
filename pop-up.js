const readButton = document.getElementById('read1');
const readButton1 = document.getElementById('read2');
const readButton2 = document.getElementById('read3');
const closeButton = document.getElementById('p-close');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('pop-up');
const popuptitle = document.getElementById('p-title');
const popuprule = document.getElementById('p-rules');

readButton1.onclick = () => {
    overlay.classList.toggle('active');
    popup.classList.toggle('active');
    popuptitle.innerText = 'Breaking Bad!';
    popuprule.innerHTML = "<span style=\"font-weight: bold;\">Rules & Regulation</span><br>You must treat all team members, competitors, judges, coaches, volunteers, etc, with respect and courtesy, abiding by the UQ code of conduct.<br>    Hackathon teams will be a maximum of 5 people   <br> All prizes are to be shared between all team members   <br> Teams should be made up exclusively of students or EMCRs who are not organizers, volunteers, judges, sponsors, or in any other privileged position at the event.<br>    All team members should be present at the event. Leaving the venue for some time to hack elsewhere is fine.<br>    Teams can of course gain advice and support from organizers, volunteers, sponsors, and others.<br>    All work on a project should be done during the hackathon.<br>    Teams can use an idea they had before the event."
}

readButton2.onclick = () => {
    overlay.classList.toggle('active');
    popup.classList.toggle('active');
    popuptitle.innerText = 'Touch me if you can!';
    popuprule.innerHTML = "<span style=\"font-weight: bold;\">Rules & Regulation</span><br>This is the event curated for blackhat hackers.<br> In this event the participant is required to steal the data from given data set (which is protected) without knowing that it's happening.<br> The application data to be breached will be announced in Arena!"
}

readButton.onclick = () => {
    overlay.classList.toggle('active');
    popup.classList.toggle('active');
    popuptitle.innerText = 'Copy Cat!';
    popuprule.innerHTML = "<span style=\"font-weight: bold;\">Rules & Regulation</span><br>The emphasis of the competition is to create an original website.<br>We encourage you to submit projects only prepared in the duration of the contest.<br>Any team found to be cheating, interfering with another team, or the competition in any form, will be punished with severe point deductions and or can be immediately    disqualified from the competition.<br>Plagiarism of any form will not be tolerated.<br>    Your first commit should be your html boilerplate with empty css and js files attached.<br>Your commits will be monitored so please make your first commit after commencement of the competition.<br>Any submission with irregularities in commit history or utilization of premade content will lead to disqualification.";
}

closeButton.onclick = () => {
    overlay.classList.toggle('active');
    popup.classList.toggle('active');
}