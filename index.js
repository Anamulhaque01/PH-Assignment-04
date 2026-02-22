const jobSectionButton1 = document.querySelector("#job-section-btn-1")
const jobSectionButton2 = document.querySelector("#job-section-btn-2")
const jobSectionButton3 = document.querySelector("#job-section-btn-3")


const allDiv = document.querySelector("#all-div")
const interviewDiv = document.querySelector("#interview-div")
const rejectedDiv = document.querySelector("#rejected-div")



allDiv.classList.remove("hidden")
jobSectionButton1.style.backgroundColor = '#3b82f6FF';
jobSectionButton1.style.color = '#ffffff';



function buttonColor(id) {
    jobSectionButton1.style.backgroundColor = '#ffffff';
    jobSectionButton1.style.color = '#64748bFF';
    jobSectionButton2.style.backgroundColor = '#ffffff';
    jobSectionButton2.style.color = '#64748bFF';
    jobSectionButton3.style.backgroundColor = '#ffffff';
    jobSectionButton3.style.color = '#64748bFF';


    const selected = document.getElementById(id);
    selected.style.backgroundColor = '#3b82f6FF';
    selected.style.color = '#ffffff';
}

function showSection(id) {
    allDiv.classList.add("hidden")
    interviewDiv.classList.add("hidden")
    rejectedDiv.classList.add("hidden")

    const selected = document.getElementById(id);
    selected.classList.remove("hidden")
}

function interview(id) {
    const selected = document.getElementById(id);
    selected.innerText = 'INTERVIEW';
    selected.style.backgroundColor = '#e7f8f2';
    selected.style.color = '#10b981FF';
}

function rejected(id) {
    const selected = document.getElementById(id);
    selected.innerText = 'REJECTED';
    selected.style.backgroundColor = '#fef2f2';
    selected.style.color = '#ef4444FF';
}