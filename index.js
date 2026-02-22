const jobSectionButton1 = document.querySelector("#job-section-btn-1")
const jobSectionButton2 = document.querySelector("#job-section-btn-2")
const jobSectionButton3 = document.querySelector("#job-section-btn-3")


const allDiv = document.querySelector("#all-div")
const interviewDiv = document.querySelector("#interview-div")
const rejectedDiv = document.querySelector("#rejected-div")

let interviewElement = document.querySelector("#interview-number")

let rejectedElement = document.querySelector("#rejected-number")



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
    const interviewCountElement = document.getElementById('interview-number');
    const rejectedCountElement = document.getElementById('rejected-number');

    if (selected.innerText === 'INTERVIEW') {
        return;
    }

    if (selected.innerText === 'REJECTED') {
        let rejectedNumber = Number(rejectedCountElement.innerText);
        if (rejectedNumber > 0) rejectedCountElement.innerText = rejectedNumber - 1;
    }

    let interviewNumber = Number(interviewCountElement.innerText);
    interviewCountElement.innerText = interviewNumber + 1;

    selected.innerText = 'INTERVIEW';
    selected.style.backgroundColor = '#e7f8f2';
    selected.style.color = '#10b981';
}

function rejected(id) {
    const selected = document.getElementById(id);
    const interviewCountElement = document.getElementById('interview-number');
    const rejectedCountElement = document.getElementById('rejected-number');

    if (selected.innerText === 'REJECTED') {
        return;
    }

    if (selected.innerText === 'INTERVIEW') {
        let interviewNumber = Number(interviewCountElement.innerText);
        if (interviewNumber > 0) interviewCountElement.innerText = interviewNumber - 1;
    }

    let rejectedNumber = Number(rejectedCountElement.innerText);
    rejectedCountElement.innerText = rejectedNumber + 1;

    selected.innerText = 'REJECTED';
    selected.style.backgroundColor = '#fef2f2';
    selected.style.color = '#ef4444';
}

function deleteJob(id) {
    const selected = document.getElementById(id);
    selected.style.display = 'none';

    const totalCountElement = document.getElementById('total-number');
    const availableJobsCount = document.getElementById('available-jobs-count');

    let totalNumber = Number(totalCountElement.innerText);
    newNumber = totalNumber - 1;

    totalCountElement.innerHTML = newNumber;
    availableJobsCount.innerHTML = newNumber + " jobs";
}

function allSection(id) {
    const selected = document.getElementById(id);
    const totalCountElement = document.getElementById('total-number');
    let totalNumber = Number(totalCountElement.innerText);
    selected.innerHTML = totalNumber + " jobs";

}

function interviewSection(id) {
    const selected = document.getElementById(id);
    const totalCountElement = document.getElementById('total-number');
    let totalNumber = Number(totalCountElement.innerText);
    selected.innerHTML = 0 + " of " + totalNumber + " jobs";

}

function rejectedSection(id) {
    const selected = document.getElementById(id);
    const totalCountElement = document.getElementById('total-number');
    let totalNumber = Number(totalCountElement.innerText);
    selected.innerHTML = 1 + " of " + totalNumber + " jobs";

}




