const studentArray = [];

const hogHouse = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId)
  selectedDiv.innerHTML = textToPrint;
}

function formFunction () {
  document.querySelector("#hiddenForm").style.display = 'block';
  }

const handleSortEvent = (e) => {
  e.preventDefault();
  const studentName = document.querySelector('#studentName').value;
  const house = hogHouse[Math.floor(Math.random() * hogHouse.length)];
  const uniqueIds = studentArray
  .map((student) => student.id)

  const id = uniqueIds.length ? uniqueIds[uniqueIds.length -1] + 1: 1;

  const nameIntoObj = {
    studentName,
    house,
    id,
  }
  studentArray.push(nameIntoObj);
  createStudentCards(uniqueIds);
  document.querySelector('#hiddenForm').reset();
}

const createStudentCards = () => {
  let domString = '';
  studentArray.forEach((item, i) => {
  domString += `<div class="card mt-4 mb-4" style="width: 18rem;" id=${item.id}>
    <div class="card-body">
    <h5 class="card-title text-warning">First-Year Student: ${item.studentName}</h5>
    <p class="card-text text-warning" id="house">Hogwarts House: ${item.house}</p>
    <button href="#" class="btn btn-warning" type="button" id=${item.id}>Expel!</button>
  </div>
</div>`;
  })

  printToDom('#studentCard', domString);
}




const expelStudent = (e) => {
  const targetType = e.target.type;
  const targetId = Number(e.target.id);

    if (targetType === "button") { 
      const indexOfStudent = studentArray.findIndex((studentArray) => studentArray.id === targetId);
      studentArray.splice(indexOfStudent, 1);
    }

    createStudentCards(studentArray);
  }


const sortEvent = (e) => {
  document.querySelector('#sortButton').addEventListener('click', handleSortEvent);
}

const expelStudentEvent = (e) => {
  document.querySelector('#studentCard').addEventListener('click', expelStudent);
}

const init = () => {
  sortEvent();
  expelStudentEvent();
}

init();
