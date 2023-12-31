//Accessing the buttons inside the sidebar.
const addStudentSidebarBtn = document.getElementById("addStudentSidebarBtn");
const addLessonSidebarBtn = document.getElementById("addLessonSidebarBtn");
const studentsOfLessonSidebarBtn = document.getElementById(
  "studentsOfLessonSidebarBtn"
);
const showAllStudentsSidebarBtn = document.getElementById(
  "showAllStudentsSidebarBtn"
);
const searchStudentSidebarBtn = document.getElementById(
  "searchStudentSidebarBtn"
);
const searchbyname = document.getElementById("searchbyname");

//Accessing the div they are in to determine when the tables will appear.
let addStudentSidebarBtnDiv = document.getElementById(
  "addStudentSidebarBtnDiv"
);
let addLessonSidebarBtnDiv = document.getElementById("addLessonSidebarBtnDiv");
let studentOfLessonSidebarBtnDiv = document.getElementById(
  "studentOfLessonSidebarBtnDiv"
);
let showAllStudentSidebarBtnDiv = document.getElementById(
  "showAllStudentSidebarBtnDiv"
);
let searchStudentsidebarBtnDiv = document.getElementById(
  "searchStudentsidebarBtnDiv"
);

//Accessing objects related to addStudents.
const addStudentTable = document.getElementById("addStudentTable");
let studentID = document.getElementById("studentID");
let fname = document.getElementById("name");
let surname = document.getElementById("surname");
let lesson = document.getElementById("lesson");
let midterm = document.getElementById("midterm");
let final = document.getElementById("final");
const addStudentSubBtn = document.getElementById("addStudentSubBtn");
const saveStudentBtn = document.getElementById("saveStudentBtn");

//Accessing objects related to addLessons.
const addLessonTable = document.getElementById("addLessonTable");
let lessonID = document.getElementById("lessonID");
let lessonName = document.getElementById("lessonName");
let pointScale = document.getElementById("pointScale");
const addLessonSubBtn = document.getElementById("addLessonSubBtn");
const saveLessonBtn = document.getElementById("saveLessonBtn");

//Accessing objects related to studentsOfLesson.
const studentsOfLessonTable = document.getElementById("studentsOfLessonTable");
let searchLesson = document.getElementById("searchLesson");
let rating = document.getElementById("rating");
const studentOfLessonSubBtn = document.getElementById("studentOfLessonSubBtn");
const saveStudentOfLessonBtn = document.getElementById(
  "saveStudentOfLessonBtn"
);

//Accessing objects related to allStudents.
const showAllStudenstsTable = document.getElementById("showAllStudenstsTable");
const saveAllStudentsBtn = document.getElementById("saveAllStudentsBtn");

//Accessing objects related to searchStudent.
const searchStudentTable = document.getElementById("searchStudentTable");
let searchStudentByID = document.getElementById("searchStudentByID");
const searchStudentSubBtn = document.getElementById("searchStudentSubBtn");
const saveSearchStudentBtn = document.getElementById("saveSearchStudentBtn");

//Accesing Objects Related to searchStudentByName
const searchStudentByNameTable = document.getElementById("searchStudentTable");
let searchStudentByName = document.getElementById("searchStudentByName");
const searchStudentByNameSubBtn = document.getElementById(
  "searchStudentByNameSubBtn"
);

//Lists
var studentList = []; //Student List
var lessonList = []; //Lesson list
let temporalInfoList = []; //This list created to temporarily hold the values of edited variables.
let saveCheck = false; //A value created to check the activity of the save button.
var sidebarBtnDivList = [
  addStudentSidebarBtnDiv,
  addLessonSidebarBtnDiv,
  studentOfLessonSidebarBtnDiv,
  showAllStudentSidebarBtnDiv,
  searchStudentsidebarBtnDiv,
]; //A list created to decide which table to display.

//When the buttons on the sidebar are clicked, it determines which functions should work.
addLessonSidebarBtn.addEventListener("click", addLessonSidebarBtnClick);
addStudentSidebarBtn.addEventListener("click", addStudentSidebarBtnClick);
studentsOfLessonSidebarBtn.addEventListener(
  "click",
  studentsOfLessonSidebarBtnClick
);
showAllStudentsSidebarBtn.addEventListener(
  "click",
  showAllStudentsSidebarBtnClick
); //top butona basınca
searchStudentSidebarBtn.addEventListener("click", searchStudentSidebarBtnClick);

//By clicking on the buttons on the sidebar, it is decided which table is visible from here.
function selectButton(button) {
  if (saveCheck) {
    //It's checking to see if there's processing going on here.
    alert("Please complete your ongoing transaction.");
  } else {
    for (let i = 0; i < sidebarBtnDivList.length; i++) {
      if (sidebarBtnDivList[i] == button) {
        sidebarBtnDivList[i].style.display = "inline-block"; //Makes the table visible
      } else {
        sidebarBtnDivList[i].style.display = "none";
      }
    }
  }
}
function addLessonSidebarBtnClick() {
  selectButton(addLessonSidebarBtnDiv);
}
function addStudentSidebarBtnClick() {
  selectButton(addStudentSidebarBtnDiv);
}
function studentsOfLessonSidebarBtnClick() {
  selectButton(studentOfLessonSidebarBtnDiv);
}
function searchStudentSidebarBtnClick() {
  selectButton(searchStudentsidebarBtnDiv);
}

//According to the entered information, it determines the functions that will work to edit the table.
addStudentSubBtn.addEventListener("click", addStudentSubBtnClick);
addLessonSubBtn.addEventListener("click", addLessonSubBtnClick);
studentOfLessonSubBtn.addEventListener("click", studentOfLessonSubBtnClick);
searchStudentSubBtn.addEventListener("click", searchStudentSubBtnClick);
searchStudentSubBtn.addEventListener("click", searchStudentSubBtnClick);

//According to the edited information, it determines the functions that will work to edit the table.
saveStudentBtn.addEventListener("click", saveAddStudentBtnClick);
saveLessonBtn.addEventListener("click", saveLessonBtnClick);
saveStudentOfLessonBtn.addEventListener("click", saveStudentOfLessonBtnClick);
saveAllStudentsBtn.addEventListener("click", saveAllStudentBtnClick);
searchbyname.addEventListener("click", searchStudentnameSubBtnClick);

//------GENERAL------//

class creatLesson {
  constructor(lessonID, lessonName, pointScale) {
    this.lessonID = lessonID;
    this.lessonName = lessonName;
    this.pointScale = pointScale;
  }
}

function addLessonSubBtnClick(e) {
  e.preventDefault(); // This method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
  let obj = new creatLesson(lessonID.value, lessonName.value, pointScale.value); //It creates a new lesson object.
  let error = addLessonCheckErrors(
    lessonID.value,
    lessonName.value,
    pointScale.value
  ); //It's checking to see if there are any errors.

  if (!error) {
    lessonList.push(obj);
    addOption(lessonName.value, lesson); //It adds the lesson as an option to be selected in other tables.
    addOption(lessonName.value, searchLesson); //It adds the lesson as an option to be selected in other tables.
    creatLessonTable(); //It is creating the lesson table.
    //It deletes the values in the input.
    lessonID.value = "";
    lessonName.value = "";
    pointScale.value = "";
  }
} //The function that works when you click the add lesson button in the table.

function creatLessonTable() {
  clearTable(addLessonTable); //It's cleaning table.
  for (let i = 0; i < lessonList.length; i++) {
    var row = addLessonTable.insertRow(-1);
    var tLessonID = row.insertCell(0);
    var tlessonName = row.insertCell(1);
    var tPointScale = row.insertCell(2);
    var tEditButton = row.insertCell(3);
    var tDeleteButton = row.insertCell(4);
    tLessonID.innerHTML = lessonList[i].lessonID;
    tlessonName.innerHTML = lessonList[i].lessonName;
    tPointScale.innerHTML = lessonList[i].pointScale;
    tEditButton.innerHTML =
      "<button class='btnInTable' id='editLessonBtn' onClick = 'editLessonBtnClick(this)';>Edit Lesson</button>";
    tDeleteButton.innerHTML =
      "<button class='btnInTable' id='deleteLessonBtn' onClick = 'deleteLessonBtnClick(this)';>Delete Lesson</button>";
  }
} //It is creating the lesson table.

function addLessonCheckErrors(lessonID, lessonName, pointScale) {
  let error = false;
  for (let i = 0; i < lessonList.length; i++) {
    if (lessonID == lessonList[i].lessonID) {
      //The same ID also checks if you have another lesson.
      alert("The lesson you want to add already exists.");
      error = true;
    }
  }
  if (lessonID == "" || lessonName == "" || pointScale == "") {
    //It is checking if there is an null value.
    alert("You entered incorrect information.");
    error = true;
  }
  return error; //if the error returns true, it means there is an error.
} //This function that checks if there are any problems before adding a lesson.
class creatStudent {
  constructor(
    studentID,
    fname,
    surname,
    lesson,
    midterm,
    final,
    grade,
    letterGrade
  ) {
    this.studentID = studentID;
    this.fname = fname;
    this.surname = surname;
    this.lesson = lesson;
    this.midterm = midterm;
    this.final = final;
    this.grade = grade;
    this.letterGrade = letterGrade;
  }
}

function addStudentSubBtnClick(e) {
  e.preventDefault(); // This method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
  let grade = calculateGrade(midterm.value, final.value); //It is calculating the student's grade.
  let letterGrade = calculateLetterGrade(
    lesson.value,
    midterm.value,
    final.value
  ); //It is calculating the student's letter grade.
  let obj = new creatStudent(
    studentID.value,
    fname.value,
    surname.value,
    lesson.value,
    midterm.value,
    final.value,
    grade,
    letterGrade
  ); //It creates a new student object.
  let error = addStudentCheckErrors(
    studentID.value,
    fname.value,
    surname.value,
    lesson.value,
    midterm.value,
    final.value
  ); //Is's checking to see if there are any errors.
  if (!error) {
    studentList.push(obj);
    creatStudentTable(); //It is creating the Student table.
    //It deletes the values in the input.
    studentID.value = "";
    fname.value = "";
    surname.value = "";
    lesson.value = "";
    midterm.value = "";
    final.value = "";
  }
} //The function that works when you click the add Student button in the table.

function calculateGrade(midterm, final) {
  ////It is calculating the student's grade.
  let grade = midterm * 0.4 + final * 0.6;
  return grade;
}

function calculateLetterGrade(lesson, midterm, final) {
  let letterGrade;
  let temporalPointScale;
  for (let i = 0; i < lessonList.length; i++) {
    if (lessonList[i].lessonName == lesson) {
      temporalPointScale = lessonList[i].pointScale;
    }
  }

  let localGrade = calculateGrade(midterm, final); //calculating students grade
  if (temporalPointScale == "7") {
    //The 7-point system calculates the letter grade
    if (localGrade < 101 && localGrade > 92) {
      letterGrade = "A";
    } else if (localGrade < 93 && localGrade > 84) {
      letterGrade = "B";
    } else if (localGrade < 85 && localGrade > 76) {
      letterGrade = "C";
    } else if (localGrade < 77 && localGrade > 68) {
      letterGrade = "D";
    } else {
      letterGrade = "F";
    }
  } else if (temporalPointScale == "10") {
    //The 10-point system calculates the  letter grade
    if (localGrade < 101 && localGrade > 89) {
      letterGrade = "A";
    } else if (localGrade < 90 && localGrade > 79) {
      letterGrade = "B";
    } else if (localGrade < 80 && localGrade > 69) {
      letterGrade = "C";
    } else if (localGrade < 70 && localGrade > 59) {
      letterGrade = "D";
    } else {
      letterGrade = "F";
    }
  }
  return letterGrade;
}

function calculateGPA(studentID) {
  let totalGrade = 0;
  let lessonCounter = 0;
  for (let i = 0; i < studentList.length; i++) {
    if (studentList[i].studentID == studentID) {
      totalGrade += studentList[i].grade;
      lessonCounter++;
    }
  }
  let GPA = totalGrade / lessonCounter;
  return GPA;
} //It calculates the  GPA.

function calculateGPAByName(studentName) {
  let totalGrade = 0;
  let lessonCounter = 0;
  for (let i = 0; i < studentList.length; i++) {
    if (studentList[i].fname == studentName) {
      totalGrade += studentList[i].grade;
      lessonCounter++;
    }
  }
  let GPA = totalGrade / lessonCounter;
  return GPA;
} //It calculates the  GPA.

function creatStudentTable() {
  clearTable(addStudentTable); // cleaning table.
  for (let i = 0; i < studentList.length; i++) {
    var row = generalStudentTable(addStudentTable, i); //It creat general student table.
    var tEditButton = row.insertCell(7);
    var tDeleteButton = row.insertCell(8);
    tEditButton.innerHTML =
      "<button class='btnInTable' id='editStudentBtn' onClick = 'editAddStudentBtnClick(this)';>Edit Student Lesson</button>";
    tDeleteButton.innerHTML =
      "<button class='btnInTable' id='deleteStudentBtn' onClick = 'deleteStudentBtnClick(this)';>Delete Student</button>";
    //It adds Edit and Delete Buttons to the last columns.
  }
} //It is creating the Student table.

function addStudentCheckErrors(
  studentID,
  fname,
  surname,
  lesson,
  midterm,
  final
) {
  let error = false;
  for (let i = 0; i < studentList.length; i++) {
    if (
      studentID == studentList[i].studentID &&
      studentList[i].lesson == lesson
    ) {
      alert("The student is already registered for this lesson.");
      error = true;
    } else if (
      studentID == studentList[i].studentID &&
      (fname != studentList[i].fname || surname != studentList[i].surname)
    ) {
      alert("Student ID and student name and surname do not match.");
      error = true;
    }
  }

  if (
    studentID == "" ||
    fname == "" ||
    surname == "" ||
    lesson == "" ||
    midterm == "" ||
    final == ""
  ) {
    //It is checking if there is an null value.
    alert("You entered incorrect information.");
    error = true;
  } else if (midterm > 100 || midterm < 0 || final > 100 || final < 0) {
    alert("Please enter a valid grade.");
    error = true;
  }
  return error;
} //This function that checks if there are any problems before adding a Student.

function studentOfLessonSubBtnClick(e) {
  e.preventDefault(); // This method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
  creatStudentOfLessonTable(); //It is creating the Student of Lesson table.
}

function creatStudentOfLessonTable() {
  clearTable(studentsOfLessonTable); //It's cleaning table.
  let totalGrade = 0;
  let error = studentOfLessonCheckErrors(searchLesson.value, rating.value); //It's checking to see if there are any errors.
  if (!error) {
    if (rating.value == "Passed") {
      for (let i = 0; i < studentList.length; i++) {
        if (
          studentList[i].lesson == searchLesson.value &&
          studentList[i].letterGrade != "F"
        ) {
          var row = generalStudentTable(studentsOfLessonTable, i); //It creat general student table.
          var tEditButton = row.insertCell(7);
          var tDeleteButton = row.insertCell(8);
          tEditButton.innerHTML =
            "<button class='btnInTable' id='editStudentBtn' onClick = 'editStudentOfLessonBtnClick(this)';>Edit Student Score</button>";
          tDeleteButton.innerHTML =
            "<button class='btnInTable' id='deleteStudentBtn' onClick = 'deleteStudentBtnClick(this)';>Delete Student</button>";
          totalGrade += studentList[i].grade;
        }
      }
    } else if (rating.value == "Failed") {
      for (let i = 0; i < studentList.length; i++) {
        if (
          studentList[i].lesson == searchLesson.value &&
          studentList[i].letterGrade == "F"
        ) {
          var row = generalStudentTable(studentsOfLessonTable, i); //It creat general student table.
          var tEditButton = row.insertCell(7);
          var tDeleteButton = row.insertCell(8);
          tEditButton.innerHTML =
            "<button class='btnInTable' id='editStudentBtn' onClick = 'editStudentOfLessonBtnClick(this)';>Edit Student Score</button>";
          tDeleteButton.innerHTML =
            "<button class='btnInTable' id='deleteStudentBtn' onClick = 'deleteStudentBtnClick(this)';>Delete Student</button>";
          totalGrade += studentList[i].grade;
        }
      }
    } else if (rating.value == "AllStudent") {
      for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].lesson == searchLesson.value) {
          var row = generalStudentTable(studentsOfLessonTable, i); //It creat general student table.
          var tEditButton = row.insertCell(7);
          var tDeleteButton = row.insertCell(8);
          tEditButton.innerHTML =
            "<button class='btnInTable' id='editStudentBtn' onClick = 'editStudentOfLessonBtnClick(this)';>Edit Student Score</button>";
          tDeleteButton.innerHTML =
            "<button class='btnInTable' id='deleteStudentBtn' onClick = 'deleteStudentBtnClick(this)';>Delete Student</button>";
          totalGrade += studentList[i].grade;
        }
      }
    }
    addClassAverageRow(totalGrade); //It is the function that calculates the class average and adds it to the table.
  }
} //It is creating the Student of Lesson table.

function calculateClassAverage(totalGrade, tableName) {
  let classAverage = totalGrade / (tableName.rows.length - 1);
  return classAverage;
} //It is a function of calculating the class average.

function addClassAverageRow(totalGrade) {
  let classAverage = calculateClassAverage(totalGrade, studentsOfLessonTable); //It is a function of calculating the class average.
  var row = studentsOfLessonTable.insertRow(-1);
  row.insertCell(0).innerHTML =
    "Number of student: " +
    (studentsOfLessonTable.rows.length - 2) +
    " Grade of selected students: " +
    classAverage;
  row.insertCell(0).colSpan = "8";
} //It is the function that calculates the class average and adds it to the table.

function studentOfLessonCheckErrors(lesson, rating) {
  let error = false;
  if (lesson == "" || rating == "") {
    alert("You entered incorrect information.");
    error = true;
  }
  let counter = 0;
  for (let i = 0; i < studentList.length; i++) {
    if (studentList[i].lesson == lesson) {
      counter++;
      break;
    }
  }
  if (counter == 0) {
    alert("There are no registered students for this lesson.");
    error = true;
  }
  return error;
}
////////////////////////////////////////////////////////////////////
function showAllStudentsSidebarBtnClick(e) {
  e.preventDefault(); // This method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
  creatAllStudentTable(); //It is creating the All Student table.
}

function creatAllStudentTable() {
  clearTable(showAllStudenstsTable); //It's cleaning table.
  let error = allStudentCheckErrors(); //It's checking to see if there are any errors.
  if (!error) {
    saveCheck = false;
    selectButton(showAllStudentSidebarBtnDiv); //It makes the table visible.
    var studentCheckList = []; //In the table, each student creates this list so that it can be added 1 time.
    for (let i = 0; i < studentList.length; i++) {
      studentCheckList.push(studentList[i].studentID); //It's adding the student to the list.
      let checkCounter = 0;
      for (let j = 0; j < studentCheckList.length; j++) {
        if (studentCheckList[j] == studentList[i].studentID) {
          checkCounter++; //It increases the variable by 1 to check how many times It has added the student.
        }
      }
      if (checkCounter == 1) {
        //It controls whether it adds the student more than 1 times.
        var GPA = calculateGPA(studentList[i].studentID); //It calculates the  GPA.
        var row = showAllStudenstsTable.insertRow(-1);
        var tStudentID = row.insertCell(0);
        var tfname = row.insertCell(1);
        var tlname = row.insertCell(2);
        var tGPA = row.insertCell(3);
        var tEditButton = row.insertCell(4);
        var tDeleteButton = row.insertCell(5);
        tStudentID.innerHTML = studentList[i].studentID;
        tfname.innerHTML = studentList[i].fname;
        tlname.innerHTML = studentList[i].surname;
        tGPA.innerHTML = GPA;
        tEditButton.innerHTML =
          "<button class='btnInTable' id='editStudentBtn' onClick = 'editAllStudentBtnClick(this)';>Edit studentID</button>";
        tDeleteButton.innerHTML =
          "<button class='btnInTable' id='deleteAllStudentBtn' onClick = 'deleteAllDetailsStudentBtnClick(this)';>Delete All Details of Student</button>";
      }
    }
  }
} //It is creating the All Student table.

function addGPASearchTable(studentID) {
  var GPA = calculateGPA(studentID); //It calculates the student's GPA.
  var row = searchStudentTable.insertRow(-1);
  row.insertCell(0).innerHTML = "Student's GPA : " + GPA;
  row.insertCell(0).colSpan = "8";
} //It adds the student's GPA to the end of the table.

function addGPASearchTableByName(studentName) {
  var GPA = calculateGPAByName(studentName); //It calculates the student's GPA.
  var row = searchStudentTable.insertRow(-1);
  row.insertCell(0).innerHTML = "Student's GPA : " + GPA;
  row.insertCell(0).colSpan = "8";
} //It adds the student's GPA to the end of the table.

function allStudentCheckErrors() {
  let error = false;
  if (studentList.length == 0) {
    alert("Öğrenci Bulunmamaktadır");
    error = true;
  }
  return error;
} //It's checking to see if there are any errors.
////////////////////////////////////////////////////////////////////
function searchStudentSubBtnClick(e) {
  e.preventDefault(); // This method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
  creatSearchStudentTable(); //It is creating the Search Student table.
}
function searchStudentnameSubBtnClick(e) {
  e.preventDefault(); // This method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
  creatSearchnameStudentTable(); //It is creating the Search Student table.
}
const searchvalue = document.getElementById("searchbynameval");
const searchStudent = () => {
  console.log(searchvalue.value);
  studentList.map((student) => {
    if (student.fname == searchvalue.value) {
      console.log(student);
    }
  });
};

searchbyname.addEventListener("click", searchStudent);

function creatSearchStudentTable() {
  clearTable(searchStudentTable); //It's cleaning table.
  let error = searchStudentCheckErrors(searchStudentByID.value); //It's checking to see if there are any errors.
  if (!error) {
    for (let i = 0; i < studentList.length; i++) {
      if (searchStudentByID.value == studentList[i].studentID) {
        var row = generalStudentTable(searchStudentTable, i); //It creat general student table.
        var tEditButton = row.insertCell(7);
        var tDeleteButton = row.insertCell(8);
        tEditButton.innerHTML =
          "<button class='btnInTable' id='editStudentBtn' onClick = 'editSearchStudentBtnClick(this)';>Edit Name and Surname</button>";
        tDeleteButton.innerHTML =
          "<button class='btnInTable' id='deleteStudentBtn' onClick = 'deleteStudentBtnClick(this)';>Delete Student</button>";
      }
    }
    addGPASearchTable(searchStudentByID.value); //It adds the student's GPA to the end of the table.
  }
} //It is creating the Search Student table.
function creatSearchnameStudentTable() {
  clearTable(searchStudentTable); //It's cleaning table.
  let error = searchStudentbynameCheckErrors(searchvalue.value); //It's checking to see if there are any errors.
  if (!error) {
    for (let i = 0; i < studentList.length; i++) {
      if (searchvalue.value == studentList[i].fname) {
        var row = generalStudentTable(searchStudentTable, i); //It creat general student table.
        var tEditButton = row.insertCell(7);
        var tDeleteButton = row.insertCell(8);
        tEditButton.innerHTML =
          "<button class='btnInTable' id='editStudentBtn' onClick = 'editSearchStudentBtnClick(this)';>Edit Name and Surname</button>";
        tDeleteButton.innerHTML =
          "<button class='btnInTable' id='deleteStudentBtn' onClick = 'deleteStudentBtnClick(this)';>Delete Student</button>";
      }
    }
    addGPASearchTableByName(searchvalue.value); //It adds the student's GPA to the end of the table.
  }
}

function searchStudentCheckErrors(studentID) {
  let error = false;
  if (studentID == "") {
    alert("You entered incorrect information.");
    error = true;
  } else if (studentList.length == 0) {
    alert("There are no registered Students.");
    error = true;
  } else {
    for (let i = 0; i < studentList.length; i++) {
      error = true;
      if (studentList[i].studentID == studentID) {
        //Eğer eşitse öğrenci var demek
        error = false;
        break;
      }
    }
    if (error) {
      alert("Student with this ID could not be found.");
    }
  }
  return error;
}
function searchStudentbynameCheckErrors(studentname) {
  let error = false;
  if (studentname == "") {
    alert("You entered incorrect information.");
    error = true;
  } else if (studentList.length == 0) {
    alert("There are no registered Students.");
    error = true;
  } else {
    for (let i = 0; i < studentList.length; i++) {
      error = true;
      if (studentList[i].fname == studentname) {
        //Eğer eşitse öğrenci var demek
        error = false;
        break;
      }
    }
    if (error) {
      alert("Student with this name could not be found.");
    }
  }
}
//It's checking to see if there are any errors.
////////////////////////////////////////////////////////////////////
function clearTable(tableName) {
  for (let x = tableName.rows.length; x > 1; x--) {
    tableName.deleteRow(-1);
  }
} //It's cleaning table.

function generalStudentTable(tableName, i) {
  var row = tableName.insertRow(-1);
  var tStudentID = row.insertCell(0);
  var tfname = row.insertCell(1);
  var tlname = row.insertCell(2);
  var tlesson = row.insertCell(3);
  var tmidterm = row.insertCell(4);
  var tfinal = row.insertCell(5);
  var tletterGrade = row.insertCell(6);
  tStudentID.innerHTML = studentList[i].studentID;
  tfname.innerHTML = studentList[i].fname;
  tlname.innerHTML = studentList[i].surname;
  tlesson.innerHTML = studentList[i].lesson;
  tmidterm.innerHTML = studentList[i].midterm;
  tfinal.innerHTML = studentList[i].final;
  tletterGrade.innerHTML = studentList[i].letterGrade;
  //Since the edit and delete button is different in each table, it adds it at the place where the function is called.
  return row; //row return to add buttons.
} //It creat general student table.

function calculateNewLetterAverage(pointScale, midterm, final) {
  let letterGrade;
  let localGrade = calculateGrade(midterm, final); //It is calculating the student's grade.
  if (pointScale == "7") {
    //The 7-point system calculates the student's letter grade.
    if (localGrade < 101 && localGrade > 92) {
      letterGrade = "A";
    } else if (localGrade < 93 && localGrade > 84) {
      letterGrade = "B";
    } else if (localGrade < 85 && localGrade > 76) {
      letterGrade = "C";
    } else if (localGrade < 77 && localGrade > 68) {
      letterGrade = "D";
    } else {
      letterGrade = "F";
    }
  } else if (pointScale == "10") {
    //The 10-point system calculates the student's letter grade.
    if (localGrade < 101 && localGrade > 89) {
      letterGrade = "A";
    } else if (localGrade < 90 && localGrade > 79) {
      letterGrade = "B";
    } else if (localGrade < 80 && localGrade > 69) {
      letterGrade = "C";
    } else if (localGrade < 70 && localGrade > 59) {
      letterGrade = "D";
    } else {
      letterGrade = "F";
    }
  }
  return letterGrade;
} //It is calculating the student's new letter grade.

function addOption(lessonName, optionTable) {
  var option = document.createElement("option");
  option.text = lessonName;
  optionTable.add(option);
} //It adds the lesson to the tables as an option.
/////////////////////////////////////////////////////////////////////
function removeOption(lessonName, optionTable) {
  for (var i = 0; i < optionTable.length; i++) {
    if (optionTable.options[i].value == lessonName) optionTable.remove(i);
  }
} //It deletes the lesson option from the tables.

function editLessonBtnClick(BTN) {
  if (!saveCheck) {
    //It finds the place where the button is.
    let lessonIDInTable = BTN.parentElement.parentElement.cells[0];
    let lessonNameInTable = BTN.parentElement.parentElement.cells[1];
    let pointScaleInTable = BTN.parentElement.parentElement.cells[2];
    temporalInfoList.push(lessonIDInTable.innerHTML); //It keeps the value temporarily because the value inside the box will change.
    temporalInfoList.push(lessonNameInTable.innerHTML); //It keeps the value temporarily because the value inside the box will change.
    //It adds inputs to the places to change.
    lessonIDInTable.innerHTML = "<input type='text' id='editLessonID'></input>";
    lessonNameInTable.innerHTML =
      "<input type='text' id='editLessonName'></input>";
    pointScaleInTable.innerHTML =
      "<select name='pointScale' id='editPointScale'></select>";
    //add option
    var select = document.getElementById("editPointScale");
    var option1 = document.createElement("option");
    option1.text = "7 Point Scale";
    option1.value = "7";
    select.add(option1);
    var option2 = document.createElement("option");
    option2.text = "10 Point Scale";
    option2.value = "10";
    select.add(option2);

    saveCheck = true;
  }
} //The function will work when you press the edit button in the lesson table.

function saveLessonBtnClick(e) {
  e.preventDefault(); //This method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
  if (saveCheck) {
    let newLessonID = document.getElementById("editLessonID");
    let newLessoName = document.getElementById("editLessonName");
    let newPointScale = document.getElementById("editPointScale");
    let error = errorCheckSaveAddLessonBtn(
      newLessonID.value,
      newLessoName.value,
      newPointScale.value
    ); //It's checking to see if there are any errors.
    if (!error) {
      for (let i = 0; i < lessonList.length; i++) {
        if (lessonList[i].lessonID == temporalInfoList[0]) {
          //It replaces new information with minus information.
          for (let j = 0; j < studentList.length; j++) {
            if (lessonList[i].lessonName == studentList[j].lesson) {
              studentList[j].lesson = newLessoName.value;
              let newletterGrade = calculateNewLetterAverage(
                newPointScale.value,
                studentList[j].midterm,
                studentList[j].final
              );
              studentList[j].letterGrade = newletterGrade;
            }
          }
          lessonList[i].lessonID = newLessonID.value;
          lessonList[i].lessonName = newLessoName.value;
          lessonList[i].pointScale = newPointScale.value;
        }
      }
      removeOption(temporalInfoList[1], lesson); //Deleting the changed course option from the tables.
      removeOption(temporalInfoList[1], searchLesson); //Deleting the changed course option from the tables.
      addOption(newLessoName.value, lesson); //It adds the lesson as an option to be selected in other tables.
      addOption(newLessoName.value, searchLesson); //It adds the lesson as an option to be selected in other tables.
      creatLessonTable(); //It is creating the lesson table.
      temporalInfoList = [];
      saveCheck = false;
    }
  }
} //The function will work when you press the Save button in the lesson table.

function errorCheckSaveAddLessonBtn(lessonID, lessonName, pointScale) {
  let error = false;
  for (let i = 0; i < lessonList.length; i++) {
    if (
      lessonID == lessonList[i].lessonID &&
      lessonName == lessonList[i].lessonName &&
      pointScale == lessonList[i].pointScale
    ) {
      alert("The lesson you want to add already exists.");
      error = true;
    }
  }
  if (lessonID == "" || lessonName == "" || pointScale == "") {
    alert("You entered incorrect information.");
    error = true;
  }
  return error;
} //It's checking to see if there are any errors.

function deleteLessonBtnClick(BTN) {
  //It finds the place where the button is.
  let lessonIDInTable = BTN.parentElement.parentElement.cells[0].innerHTML;
  let lessonNameInTable = BTN.parentElement.parentElement.cells[1].innerHTML;

  removeOption(lessonNameInTable, lesson); //Deleting the changed course option from the tables.
  removeOption(lessonNameInTable, searchLesson); //Deleting the changed course option from the tables.

  for (let i = 0; i < studentList.length; i++) {
    if (studentList[i].lesson == lessonNameInTable) {
      studentList.splice(i, 1); //Deleting the selected index.
    }
  }
  for (let i = 0; i < lessonList.length; i++) {
    if (lessonList[i].lessonID == lessonIDInTable) {
      lessonList.splice(i, 1); //Deleting the selected index.
    }
  }
  creatLessonTable(); //It is creating the lesson table.
} //The function works when you press the Delete button in the lesson table.
//////////////////////////////////////////////////////////////////////////////////////
function editAddStudentBtnClick(BTN) {
  if (!saveCheck) {
    //It finds the place where the button is.
    let studentIDInTable = BTN.parentElement.parentElement.cells[0];
    let lessonInTable = BTN.parentElement.parentElement.cells[3];
    temporalInfoList.push(studentIDInTable.innerHTML); //It keeps the value temporarily because the value inside the box will change.
    temporalInfoList.push(lessonInTable.innerHTML); //It keeps the value temporarily because the value inside the box will change.

    lessonInTable.innerHTML =
      "<select name='pointScale' id='editLesson'></select>";
    var select = document.getElementById("editLesson"); //Add option
    for (let i = 0; i < lessonList.length; i++) {
      var option1 = document.createElement("option");
      option1.text = lessonList[i].lessonName;
      select.add(option1);
    }
    saveCheck = true;
  }
} //The function will work when you press the edit button in the Student table.

function saveAddStudentBtnClick(e) {
  e.preventDefault(); //This method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
  if (saveCheck) {
    let newLesson = document.getElementById("editLesson");
    let error = errorCheckSaveAddStudentBtn(
      temporalInfoList[0],
      newLesson.value
    ); //It's checking to see if there are any errors.
    if (!error) {
      for (let i = 0; i < studentList.length; i++) {
        if (
          studentList[i].studentID == temporalInfoList[0] &&
          studentList[i].lesson == temporalInfoList[1]
        ) {
          //It replaces new information with minus information.
          studentList[i].lesson = newLesson.value;
          studentList[i].grade = calculateGrade(
            studentList[i].midterm,
            studentList[i].final
          ); //It is calculating the student's new grade.
          studentList[i].letterGrade = calculateLetterGrade(
            studentList[i].lesson,
            studentList[i].midterm,
            studentList[i].final
          ); //It is calculating the student's new letter grade.
        }
      }
      creatStudentTable(); //It is creating the Student table.
      saveCheck = false;
      temporalInfoList = [];
    }
  }
} //The function will work when you press the Save button in the Student table.

function errorCheckSaveAddStudentBtn(studentID, lesson) {
  let error = false;
  if (lesson == "") {
    alert("You entered incorrect information.");
    error = true;
  }
  for (let i = 0; i < studentList.length; i++) {
    if (
      studentID == studentList[i].studentID &&
      studentList[i].lesson == lesson
    ) {
      alert("The student is already registered for this lesson.");
      error = true;
    }
  }
  return error;
} //It's checking to see if there are any errors.
//////////////////////////////////////////////////////////////////////////////////////
function editStudentOfLessonBtnClick(BTN) {
  if (!saveCheck) {
    //It finds the place where the button is.
    let studentIDInTable = BTN.parentElement.parentElement.cells[0];
    let lessonInTable = BTN.parentElement.parentElement.cells[3];
    let midtermInTable = BTN.parentElement.parentElement.cells[4];
    let finalInTable = BTN.parentElement.parentElement.cells[5];
    temporalInfoList.push(studentIDInTable.innerHTML); //It keeps the value temporarily because the value inside the box will change.
    temporalInfoList.push(lessonInTable.innerHTML); //It keeps the value temporarily because the value inside the box will change.

    midtermInTable.innerHTML = "<input type='text' id='editMidterm'></input>";
    finalInTable.innerHTML = "<input type='text' id='editFinal'></input>";
    saveCheck = true;
  }
} //The function will work when you press the edit button in the Student of lesson table.

function saveStudentOfLessonBtnClick(e) {
  e.preventDefault(); //This method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
  if (saveCheck) {
    let newMidterm = document.getElementById("editMidterm");
    let newFinal = document.getElementById("editFinal");
    let error = errorCheckSaveStudentOfLessonBtn(newMidterm, newFinal); //It's checking to see if there are any errors.
    if (!error) {
      for (let i = 0; i < studentList.length; i++) {
        if (
          studentList[i].studentID == temporalInfoList[0] &&
          studentList[i].lesson == temporalInfoList[1]
        ) {
          //It replaces new information with minus information.
          studentList[i].midterm = newMidterm.value;
          studentList[i].final = newFinal.value;
          studentList[i].grade = calculateGrade(
            newMidterm.value,
            newFinal.value
          ); //It is calculating the student's new grade.
          studentList[i].letterGrade = calculateLetterGrade(
            studentList[i].lesson,
            newMidterm.value,
            newFinal.value
          ); //It is calculating the student's new letter grade.
        }
      }
      creatStudentOfLessonTable(); //It is creating the Student of Lesson table.
      saveCheck = false;
      temporalInfoList = [];
    }
  }
} //The function will work when you press the save button in the Student of lesson table.

function errorCheckSaveStudentOfLessonBtn(midterm, final) {
  let error = false;
  if (midterm == "" || final == "") {
    alert("You entered incorrect information.");
    error = true;
  } else if (midterm > 100 || midterm < 0 || final > 100 || final < 0) {
    alert("Please enter a valid grade.");
    error = true;
  }
  return error;
} //It's checking to see if there are any errors.
//////////////////////////////////////////////////////////////////////////////////////
function editSearchStudentBtnClick(BTN) {
  if (!saveCheck) {
    //It finds the place where the button is.
    let studentIDInTable = BTN.parentElement.parentElement.cells[0];
    let studentFnameInTable = BTN.parentElement.parentElement.cells[1];
    let studentSurnameInTable = BTN.parentElement.parentElement.cells[2];
    temporalInfoList.push(studentIDInTable.innerHTML); //It keeps the value temporarily because the value inside the box will change.

    studentFnameInTable.innerHTML =
      "<input type='text' id='editStudentFname'></input>";
    studentSurnameInTable.innerHTML =
      "<input type='text' id='editStudentSurname'></input>";
    saveCheck = true;
  }
} //The function will work when you press the edit button in the search Student table.

function saveSearchStudentBtnClick(e) {
  e.preventDefault(); //This method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
  if (saveCheck) {
    let newStudentFname = document.getElementById("editStudentFname");
    let newStudentLname = document.getElementById("editStudentSurname");
    let error = errorCheckSaveSearchStudentBtn(
      newStudentFname,
      newStudentLname
    ); //It's checking to see if there are any errors.
    if (!error) {
      for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].studentID == temporalInfoList[0]) {
          //It replaces new information with minus information.
          studentList[i].fname = newStudentFname.value;
          studentList[i].surname = newStudentLname.value;
        }
      }
      creatSearchStudentTable(); //It is creating the Search Student table.
      saveCheck = false;
      temporalInfoList = [];
    }
  }
} //The function will work when you press the Save button in the search Student table.

function errorCheckSaveSearchStudentBtn(fname, surname) {
  let error = false;
  if (fname == "" || surname == "") {
    alert("You entered incorrect information.");
    error = true;
  }
  return error;
} //It's checking to see if there are any errors.
//////////////////////////////////////////////////////////////////////////////////////
function deleteAllDetailsStudentBtnClick(BTN) {
  //It finds the place where the button is.
  let studentIDInTable = BTN.parentElement.parentElement.cells[0].innerHTML;
  for (let i = 0; i < studentList.length; i++) {
    if (studentIDInTable == studentList[i].studentID) {
      studentList.splice(i, 1); //Deleting the selected index.
    }
  }
  creatAllStudentTable(); //It is creating the All Student table.
} //The function works when you press the Delete button in the all student table.

function editAllStudentBtnClick(BTN) {
  if (!saveCheck) {
    //It finds the place where the button is.
    let studentIDInTable = BTN.parentElement.parentElement.cells[0];
    temporalInfoList.push(studentIDInTable.innerHTML); //It keeps the value temporarily because the value inside the box will change.

    studentIDInTable.innerHTML =
      "<input type='text' id='editStudentID'></input>";
    saveCheck = true;
  }
} //The function will work when you press the edit button in the All Student table.

function saveAllStudentBtnClick(e) {
  e.preventDefault(); //This method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
  if (saveCheck) {
    let newStudentID = document.getElementById("editStudentID");
    let error = errorCheckSaveAllStudentBtn(newStudentID.value); //It's checking to see if there are any errors.
    if (!error) {
      for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].studentID == temporalInfoList[0]) {
          //It replaces new information with minus information.
          studentList[i].studentID = newStudentID.value;
        }
      }
      creatAllStudentTable(); //It is creating the All Student table.
      saveCheck = false;
      temporalInfoList = [];
    }
  }
} //The function works when you press the Save button in the all student table.

function errorCheckSaveAllStudentBtn(studentID) {
  let error = false;
  if (studentID == "") {
    alert("You entered incorrect information.");
    error = true;
  }
  for (let i = 0; i < studentList.length; i++) {
    if (studentID == studentList[i].studentID) {
      alert("There is a student with the same ID.");
      error = true;
    }
  }
  return error;
} //It's checking to see if there are any errors.
//////////////////////////////////////////////////////////////////////////////////////

function deleteStudentBtnClick(BTN) {
  //It finds the place where the button is.
  let studentIDInTable = BTN.parentElement.parentElement.cells[0].innerHTML;
  let lessonInTable = BTN.parentElement.parentElement.cells[3].innerHTML;
  for (let i = 0; i < studentList.length; i++) {
    if (
      studentList[i].studentID == studentIDInTable &&
      studentList[i].lesson == lessonInTable
    ) {
      studentList.splice(i, 1); //Deleting the selected index.
    }
  }
  creatTableAgain(BTN); //After the delete operation, it recreates the table.
} //The function works when you press the Delete button in the student table.

function creatTableAgain(BTN) {
  //It finds the place where the button is.
  let tableID = BTN.parentElement.parentElement.parentElement.parentElement.id;
  if ("addStudentTable" == tableID) {
    creatStudentTable(); //It is creating the Student table.
  } else if ("studentsOfLessonTable" == tableID) {
    creatStudentOfLessonTable(); //It is creating the Student of Lesson table.
  } else if ("searchStudentTable" == tableID) {
    creatSearchStudentTable(); //It is creating the Search Student table.
  }
} //After the delete operation, it recreates the table.
