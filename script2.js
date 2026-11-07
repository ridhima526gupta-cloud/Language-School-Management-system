function showTab(sectionId, clickedButton) {
    let allSections = document.querySelectorAll('.tab-content');
    for (let i = 0; i < allSections.length; i++) {
        allSections[i].classList.remove('active');
    }
    let allButtons = document.querySelectorAll('.nav-button');
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove('active');
    }

    document.getElementById(sectionId).classList.add('active');
    clickedButton.classList.add('active');
}
function addNewCourse() {
    let courseName = document.getElementById('course-name-input').value;
    let courseLevel = document.getElementById('course-level-select').value;
    let courseDuration = document.getElementById('course-duration-input').value;

    if (courseName === '' || courseDuration === '') {
        alert('Please fill out all fields');
        return;
    }
 let tableBody = document.getElementById('courses-table-body');
    let newRow = document.createElement('tr');

    newRow.innerHTML = '<td>' + courseName + '</td>' +
                       '<td>' + courseLevel + '</td>' +
                       '<td>' + courseDuration + ' Weeks</td>' +
                       '<td><button class="delete-btn" onclick="removeRow(this)">Delete</button></td>';

    tableBody.appendChild(newRow);

    document.getElementById('course-name-input').value = '';
    document.getElementById('course-duration-input').value = '';
}
function addNewInstructor() {
    let teacherName = document.getElementById('teacher-name-input').value;
    let teacherCourse = document.getElementById('teacher-course-input').value;

    if (teacherName === '' || teacherCourse === '') {
        alert('Please fill out all fields');
        return;
    }

    let tableBody = document.getElementById('teachers-table-body');
    let newRow = document.createElement('tr');

    newRow.innerHTML = '<td>' + teacherName + '</td>' +
                       '<td>' + teacherCourse + '</td>' +
                       '<td><button class="delete-btn" onclick="removeRow(this)">Delete</button></td>';

    tableBody.appendChild(newRow);
      document.getElementById('teacher-name-input').value = '';
    document.getElementById('teacher-course-input').value = '';
}

function addNewBatch() {
    let batchName = document.getElementById('batch-name-input').value;
    let batchTime = document.getElementById('batch-time-input').value;

    if (batchName === '' || batchTime === '') {
        alert('Please fill out all fields');
        return;
    }
   let tableBody = document.getElementById('batches-table-body');
    let newRow = document.createElement('tr');

    newRow.innerHTML = '<td>' + batchName + '</td>' +
                       '<td>' + batchTime + '</td>' +
                       '<td><button class="delete-btn" onclick="removeRow(this)">Delete</button></td>';

    tableBody.appendChild(newRow);

    document.getElementById('batch-name-input').value = '';
    document.getElementById('batch-time-input').value = '';
}
function enrollNewStudent() {
    let studentName = document.getElementById('student-name-input').value;
    let studentCourse = document.getElementById('student-course-input').value;
    let studentBatch = document.getElementById('student-batch-input').value;

    if (studentName === '' || studentCourse === '' || studentBatch === '') {
        alert('Please fill out all fields');
        return;
    }

    let tableBody = document.getElementById('students-table-body');
    let newRow = document.createElement('tr');

    newRow.innerHTML = '<td>' + studentName + '</td>' +
                       '<td>' + studentCourse + '</td>' +
                       '<td>' + studentBatch + '</td>' +
                       '<td><button class="delete-btn" onclick="removeRow(this)">Delete</button></td>';

    tableBody.appendChild(newRow);
      document.getElementById('student-name-input').value = '';
    document.getElementById('student-course-input').value = '';
    document.getElementById('student-batch-input').value = '';
}

function addAssessment() {
    let studentName = document.getElementById('assessment-student-input').value;
    let assessmentTitle = document.getElementById('assessment-title-input').value;
    let score = document.getElementById('assessment-score-input').value;

    if (studentName === '' || assessmentTitle === '' || score === '') {
        alert('Please fill out all fields');
        return;
    }
     let tableBody = document.getElementById('assessments-table-body');
    let newRow = document.createElement('tr');

    newRow.innerHTML = '<td>' + studentName + '</td>' +
                       '<td>' + assessmentTitle + '</td>' +
                       '<td>' + score + '%</td>' +
                       '<td><button class="delete-btn" onclick="removeRow(this)">Delete</button></td>';

    tableBody.appendChild(newRow);

    document.getElementById('assessment-student-input').value = '';
    document.getElementById('assessment-title-input').value = '';
    document.getElementById('assessment-score-input').value = '';
}
function removeRow(buttonElement) {
    let row = buttonElement.parentElement.parentElement;
    row.remove();
}