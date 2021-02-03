const studentArray = [
  {
    studentName: 'Ben',
    house: 'Ravenclaw',
  },
  {
    studentName: 'Nathan',
    house: 'Gryffindor',
  },
  {
    studentName: 'Honey-Rae',
    house: 'Slytherin',
  },
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId)
  selectedDiv.innerHTML = textToPrint;
}

const createStudentCards = () => {
  let domString = '';
  studentArray.forEach((item, i) => {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${item.studentName}</h5>
    <p class="card-text">${item.house}</p>
    <a href="#" class="btn btn-primary">Expel!</a>
  </div>
</div>`;
  })

  printToDom('#studentcard', domString);
}

const handleSortEvent = (e) => {
  e.preventDefault();
  const studentName = document.querySelector('#studentName').value;
  console.log(studentName);

  const nameIntoObj = {
    studentName,
  }
  studentArray.push(nameIntoObj);
  createStudentCards();
}


const sortEvent = (e) => {
  document.querySelector('#sortButton').addEventListener('click', handleSortEvent);
}

const init = () => {
  createStudentCards();
  sortEvent();
  
}

init();
