const studentArray = [
];



const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId)
  selectedDiv.innerHTML = textToPrint;
}

function formFunction () {
  const formIsHidden = document.querySelector("#hiddenForm");
  if (formIsHidden.style.display === "none") {
    formIsHidden.style.display = "block";
  } else {
    formIsHidden.style.display = "none";
  }
}

const createStudentCards = () => {
  let domString = '';
  studentArray.forEach((item, i) => {
  domString += `<div class="card" style="width: 18rem;" id=${item.id}>
    <div class="card-body">
    <h5 class="card-title">First-Year Student: ${item.studentName}</h5>
    <p class="card-text" id="house">Hogwarts House: ${item.house}</p>
    <button href="#" class="btn btn-primary" type="button" id=${item.id}>Expel!</button>
  </div>
</div>`;
  })

  printToDom('#studentCard', domString);
}

const handleSortEvent = (e) => {
  e.preventDefault();
  const studentName = document.querySelector('#studentName').value;
  const hogHouse = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
  const house = hogHouse[Math.floor(Math.random() * hogHouse.length)];
  const id = 0;

  const nameIntoObj = {
    studentName,
    house,
    id,
  }
  studentArray.push(nameIntoObj);
  createStudentCards(studentArray);
}


const sortEvent = (e) => {
  document.querySelector('#sortButton').addEventListener('click', handleSortEvent);
}


const init = () => {
  sortEvent();
  createStudentCards(studentArray);
}

init();
