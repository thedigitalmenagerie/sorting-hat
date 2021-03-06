const studentArray = []; // empty array that will hold domString elements from createStudentCards

const expelledStudentArray = [];

const hogHouse = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw']; // array that will be looped over and assigned at random with math funciton in handleSortEvent event handler 

const printToDom = (divId, textToPrint) => { // print to dom function that will be called in various functions to dynamically display elements on the DOM
  const selectedDiv = document.querySelector(divId) // targets the div to display
  selectedDiv.innerHTML = textToPrint; // with the text we wanna display!
};

function formFunction () { // this is called onclick to toggle display from none (in css) to block display style below
  document.querySelector("#hiddenForm").style.display = 'block';
  }; 

const handleSortEvent = (e) => { // event handler function that contains the sort event and form validation function
  e.preventDefault(); // prevents the default of the page reloading
  const studentName = document.querySelector('#studentName').value; // declares studentName as equal to the value of what user entered
  const uniqueIds = studentArray.map((firstyears) => firstyears.id) // declaring unique ids as equal to the student array that is pushed in the createStudent function, creating a new array 
   // array method that creates a new array from existing studentArray & applies a function to each of the elements

  const id = uniqueIds.length ? uniqueIds[uniqueIds.length -1] + 1: 1; // tenerary operator that assigns an id that is +1 of the last item in the array but makes an empty array's id 1

  const formValidation = () => { // function that will add the bootstrap alert to the domString in empty formValidation div if studentName is left empty 
    let domString =
    `<div class="alert alert-warning alert-dismissible" role="alert">
      <strong>Name, please!</strong> Press that x and try again!
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    printToDom('#formValidation', domString);
  };

  if (studentName === '') {
    formValidation();
  } else { // but will print this object (containing key value pairs) to the dom as defined in createStudentCards function if it is not empty
    const nameIntoObj = {
      studentName: studentName,
      house: hogHouse[Math.floor(Math.random() * hogHouse.length)], // value hogHouse array with math floor math random multiplied by the length of the array to return one of the four items in the array
      id,
    };
    studentArray.push(nameIntoObj); // pushes this object as an item in the studentArray array
    createStudentCards(uniqueIds); // 
    document.querySelector('form').reset();
  }
  
};


const createStudentCards = () => { // function that prints each nameIntoObj key value pair to student array and prints to dom in the empty studentCard div by calling a function on each element in an array in order and cannot be executed on an array elements without values
  let domString = '';
  studentArray.forEach((item, i) => { 
  domString += `<div class="card mt-4 mb-4 ${item.house.toLowerCase()}" style="width: 18rem;" id=${item.id}> 
    <div class="card-body">
    <h3 class="card-title">First-Year Student: ${item.studentName}</h3>
    <p class="card-text" id="house">Hogwarts House: ${item.house}</p>
    <button href="#" class="btn" type="button" id=${item.id}>Expel!</button>
  </div>
</div>`; // ${string/value.key}
  })

  printToDom('#studentCard', domString);
};//

const expelStudent = (e) => {
  const targetType = e.target.type;
  const targetId = Number(e.target.id);
  if (targetType === 'button') {
    const indexOfStudent = studentArray.findIndex((studentArray) => studentArray.id === targetId);
    expelledStudentArray.push(...studentArray.splice(indexOfStudent, 1));
  }  
  createExpelledStudentCards(expelledStudentArray);
  createStudentCards(studentArray);
}

  const createExpelledStudentCards = () => { // function that prints each nameIntoObj key value pair to student array and prints to dom in the empty studentCard div by calling a function on each element in an array in order and cannot be executed on an array elements without values
    let domString = '';
    expelledStudentArray.forEach((item, i) => { 
    domString += `<div class="card mt-4 mb-4 voldemort" style="width: 18rem;" id=${item.id}> 
      <div class="card-body">
      <h3 class="card-title">Expelled Student: ${item.studentName}</h3>
      <p class="card-text" id="house">Previous Hogwarts House: ${item.house}</p>
      <p class="card-text" id="house">Now: Voldemort's Army</p>
    </div>
  </div>`; // ${string/value.key}
    })
  
    printToDom('#expelledStudentCard', domString);
  };

  const sortHouseButton = (e) => {
    const buttonId = e.target.id;
    if (buttonId === 'organizeHouseButton') {
      studentArray.sort((a, b) => (a.house.toUpperCase() < b.house.toUpperCase() ? -1 : 1));
      createStudentCards(studentArray);
    } 
  }

  const sortNameButton = (e) => {
    const buttonId = e.target.id;
    if (buttonId === 'organizeNameButton') {
      studentArray.sort((a, b) => (a.studentName.toUpperCase() < b.studentName.toUpperCase() ? -1 : 1));
      createStudentCards(studentArray);
    }
  }



const sortEvent = (e) => {
  document.querySelector('#sortButton').addEventListener('click', handleSortEvent);
};

const expelStudentEvent = (e) => {
  document.querySelector('#studentCard').addEventListener('click', expelStudent);
};

const sortButtonEvent = (e) => {
  document.querySelector('#organizeHouseButton').addEventListener('click', sortHouseButton);
  document.querySelector('#organizeNameButton').addEventListener('click', sortNameButton);
}

const init = () => {
  sortEvent();
  expelStudentEvent();
  sortButtonEvent();
};

init();
