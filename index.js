let jobs = [
    { id: 1, company: "Mobile First Corp", pos: "React Native Developer", loc: "Remote", type: "Full-time", sal: "$130,000 - $175,000", desc: "Build cross-platform mobile applications using React Native. Work on products used by millions.", status: "all" },
    { id: 2, company: "WebFlow Agency", pos: "Web Design & Developer", loc: "Los Angeles, CA", type: "Part-time", sal: "$80,000 - $120,000", desc: "Create stunning web experiences for high-profile clients. Portfolio required.", status: "all" },
    { id: 3, company: "DataViz Solutions", pos: "Data Visualization Specialist", loc: "Boston, MA", type: "Full-time", sal: "$125,000 - $165,000", desc: "Transform complex data into compelling visualizations using D3.js and React.", status: "all" },
    { id: 4, company: "CloudFirst Inc", pos: "Backend Developer", loc: "Seattle, WA", type: "Full-time", sal: "$140,000 - $190,000", desc: "Design and maintain scalable backend systems using Python and AWS infrastructure.", status: "all" },
    { id: 5, company: "Innovation Labs", pos: "UI/UX Engineer", loc: "Austin, TX", type: "Full-time", sal: "$110,000 - $150,000", desc: "Create beautiful and functional user interfaces for our suite of software products.", status: "all" },
    { id: 6, company: "MegaCorp Solutions", pos: "JavaScript Developer", loc: "New York, NY", type: "Full-time", sal: "$130,000 - $170,000", desc: "Build enterprise applications with JavaScript and modern frameworks.", status: "all" },
    { id: 7, company: "StartupXYZ", pos: "Full Stack Engineer", loc: "Remote", type: "Full-time", sal: "$120,000 - $160,000", desc: "Join our fast-growing startup and work on our core platform using Node.js.", status: "all" },
    { id: 8, company: "TechCorp Industries", pos: "Senior Frontend Developer", loc: "San Francisco, CA", type: "Full-time", sal: "$130,000 - $175,000", desc: "Experienced developer needed for scalable web apps using React and TypeScript.", status: "all" }
];

let filterType = "all";

function renderJobs() {
    let box = document.getElementById("job-container");
    let empty = document.getElementById("empty-state");
    box.innerHTML = "";

    let total = 0;
    let interviewCount = 0;
    let rejectedCount = 0;
    let showingCount = 0;

    for (let i = 0; i < jobs.length; i++) {
        total = total + 1;

        if (jobs[i].status === "interview") {
            interviewCount = interviewCount + 1;
        }
        if (jobs[i].status === "rejected") {
            rejectedCount = rejectedCount + 1;
        }

        let shouldShow = false;
        if (filterType === "all") {
            shouldShow = true;
        } else {
            if (jobs[i].status === filterType) {
                shouldShow = true;
            }
        }

        if (shouldShow === true) {
            showingCount = showingCount + 1;

            let name = jobs[i].company;
            let jobTitle = jobs[i].pos;
            let place = jobs[i].loc;
            let jobType = jobs[i].type;
            let money = jobs[i].sal;
            let info = jobs[i].desc;
            let stat = jobs[i].status;

            let tagText = "";
            if (stat === "all") {
                tagText = "NOT APPLIED";
            } else if (stat === "interview") {
                tagText = "INTERVIEW";
            } else {
                tagText = "REJECTED";
            }

            let intBtnColor = "bg-white";
            if (stat === "interview") {
                intBtnColor = "bg-[#10b981FF] text-white";
            }

            let rejBtnColor = "bg-white";
            if (stat === "rejected") {
                rejBtnColor = "bg-[#ef4444FF] text-white";
            }

            let myHtml = '<div class="bg-white rounded p-7 text-[#64748bFF] border border-gray-200 flex justify-between items-start">' +
                '<div>' +
                '<h3 class="text-[#002C5C] font-semibold text-xl">' + name + '</h3>' +
                '<p class="font-medium">' + jobTitle + '</p>' +
                '<p class="my-3 text-sm">' + place + ' • ' + jobType + ' • ' + money + '</p>' +
                '<div class="bg-[#eef4ffFF] inline-block px-3 py-1.5 rounded text-[#002C5C] font-bold text-xs mt-1.5">' + tagText + '</div>' +
                '<p class="my-2 text-sm leading-relaxed">' + info + '</p>' +
                '<div class="flex gap-3 mt-4">' +
                '<button onclick="changeStatus(' + jobs[i].id + ', \'interview\')" class="px-5 py-2.5 rounded text-[#10b981FF] font-bold text-sm border-2 border-[#10b981FF] transition-all hover:bg-[#10b981FF] hover:text-white ' + intBtnColor + '">INTERVIEW</button>' +
                '<button onclick="changeStatus(' + jobs[i].id + ', \'rejected\')" class="px-5 py-2.5 rounded text-[#ef4444FF] font-bold text-sm border-2 border-[#ef4444FF] transition-all hover:bg-[#ef4444FF] hover:text-white ' + rejBtnColor + '">REJECTED</button>' +
                '</div>' +
                '</div>' +
                '<button onclick="removeJob(' + jobs[i].id + ')" class="border-2 border-gray-100 rounded-full px-2 py-[5px] md:w-10 md:h-10 flex justify-center items-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">' +
                '<i class="ri-delete-bin-6-line"></i>' +
                '</button>' +
                '</div>';

            box.innerHTML = box.innerHTML + myHtml;
        }
    }

    document.getElementById("total-number").innerText = total;
    document.getElementById("interview-number").innerText = interviewCount;
    document.getElementById("rejected-number").innerText = rejectedCount;
    document.getElementById("available-jobs-count").innerText = showingCount + " jobs";

    if (showingCount === 0) {
        empty.classList.remove("hidden");
    } else {
        empty.classList.add("hidden");
    }
}

function filterBy(what) {
    filterType = what;
    let b1 = document.getElementById("btn-all");
    let b2 = document.getElementById("btn-interview");
    let b3 = document.getElementById("btn-rejected");

    b1.classList.remove("active-tab");
    b2.classList.remove("active-tab");
    b3.classList.remove("active-tab");

    if (what === "all") {
        b1.classList.add("active-tab");
    }
    if (what === "interview") {
        b2.classList.add("active-tab");
    }
    if (what === "rejected") {
        b3.classList.add("active-tab");
    }

    renderJobs();
}

function changeStatus(theId, theNewStatus) {
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].id === theId) {
            if (jobs[i].status === theNewStatus) {
                jobs[i].status = "all";
            } else {
                jobs[i].status = theNewStatus;
            }
        }
    }
    renderJobs();
}

function removeJob(theId) {
    let temporaryArray = [];
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].id !== theId) {
            temporaryArray.push(jobs[i]);
        }
    }
    jobs = temporaryArray;
    renderJobs();
}

renderJobs();