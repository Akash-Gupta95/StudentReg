const inputField = document.getElementsByTagName("input");
const SaveBtn = document.querySelector("#saveBtn");
const showDetails = document.querySelector(".details");

// Student Details Array
const studentDetails = [
  {
    studentName: "Student1",
    studentId: "ab125",
    stuentClass: "12th",
    roll: 365,
    address: "Delhi",
    contact: "8434381886",
  },
  {
    studentName: "Student2",
    studentId: "ab126",
    stuentClass: "11th",
    roll: 3222,
    address: "Delhi",
    contact: "8434381887",
  },
  {
    studentName: "Student2",
    studentId: "ab126",
    stuentClass: "11th",
    roll: 3222,
    address: "Delhi",
    contact: "8434381887",
  },
  {
    studentName: "Student2",
    studentId: "ab126",
    stuentClass: "11th",
    roll: 3222,
    address: "Delhi",
    contact: "8434381887",
  },

  {
    studentName: "Student2",
    studentId: "ab126",
    stuentClass: "11th",
    roll: 3222,
    address: "Delhi",
    contact: "8434381887",
  },
  {
    studentName: "Student2",
    studentId: "ab126",
    stuentClass: "11th",
    roll: 3222,
    address: "Delhi",
    contact: "8434381887",
  },
  {
    studentName: "Student2",
    studentId: "ab126",
    stuentClass: "11th",
    roll: 3222,
    address: "Delhi",
    contact: "8434381887",
  },
  {
    studentName: "Student2",
    studentId: "ab126",
    stuentClass: "11th",
    roll: 3222,
    address: "Delhi",
    contact: "8434381887",
  },
  {
    studentName: "Student2",
    studentId: "ab126",
    stuentClass: "11th",
    roll: 3222,
    address: "Delhi",
    contact: "8434381887",
  },
  {
    studentName: "Student2",
    studentId: "ab126",
    stuentClass: "11th",
    roll: 3222,
    address: "Delhi",
    contact: "8434381887",
  },

   {
    studentName: "Student2",
    studentId: "ab126",
    stuentClass: "11th",
    roll: 3222,
    address: "Delhi",
    contact: "8434381887",
  },
  {
    studentName: "Student2",
    studentId: "ab126",
    stuentClass: "11th",
    roll: 3222,
    address: "Delhi",
    contact: "8434381887",
  },
  {
    studentName: "Student2",
    studentId: "ab126",
    stuentClass: "11th",
    roll: 3222,
    address: "Delhi",
    contact: "8434381887",
  },
  {
    studentName: "Student2",
    studentId: "ab126",
    stuentClass: "11th",
    roll: 3222,
    address: "Delhi",
    contact: "8434381887",
  },
  {
    studentName: "Student2",
    studentId: "ab126",
    stuentClass: "11th",
    roll: 3222,
    address: "Delhi",
    contact: "8434381887",
  },
  {
    studentName: "Student2",
    studentId: "ab126",
    stuentClass: "11th",
    roll: 3222,
    address: "Delhi",
    contact: "8434381887",
  },

];

SaveBtn.addEventListener("click", () => {
  // details Selections
  const studentName = inputField[0].value;
  const studentId = inputField[1].value;
  const stuentClass = inputField[2].value;
  const roll = inputField[3].value;
  const address = inputField[4].value;
  const contact = inputField[5].value;

  // Validation

  if (!studentName) {
    alert("Enter name");
    return;
  }
  if (!studentId) {
    alert("Enter Your Id");
    return;
  }

  if (!stuentClass) {
    alert("Enter Your Class");
    return;
  }
  if (!roll) {
    alert("Enter Your Roll");
    return;
  }
  if (!address) {
    alert("Enter Your Roll");
    return;
  }
  if (!contact) {
    alert("Enter Your Roll");
    return;
  }

  

  const obj = {
    studentName,
    studentId,
    stuentClass,
    roll,
    address,
    contact
  };

  // For clear data
  inputField[0].value = ""
  inputField[1].value = ""
  inputField[2].value = ""
  inputField[3].value = ""
  inputField[4].value = ""
  inputField[5].value = ""

  studentDetails.push(obj);
  dd();
});

// delete Row
const deleteRow = (index) => {
  const newAr = studentDetails.splice(index, 1);
  dd();
};

const dd = () => {

  const Data = studentDetails;

  const tableRows = Data
    .map(
      (details, index) => `
      <tr>
        <td style="display:${bool != index ? 1 : "none"}" >${details.studentName} </td>
        <td style="display:${bool != index ? "none" : 1}"><input id=input${index + 110} value=${details.studentName} ></td>

        <td style="display:${bool != index ? 1 : "none"}" >${details.studentId} </td>
        <td style="display:${bool != index ? "none" : 1}"><input id=input${index + 120} value=${ details.studentId} ></td>
        
        <td style="display:${bool != index ? 1 : "none"}" >${details.stuentClass} </td>
        <td style="display:${bool != index ? "none" : 1}"><input id=input${index + 130} value=${details.stuentClass} ></td>
        
      <td style="display:${bool != index ? 1 : "none"}" >${
        details.roll
      } </td>
        <td style="display:${bool != index ? "none" : 1}"><input id=input${index + 140} value=${
        details.roll
      } ></td>
    
        <td style="display:${bool != index ? 1 : "none"}" >${details.address} </td>
        <td style="display:${bool != index ? "none" : 1}"><input id=input${index + 150} value=${details.address} ></td>
      
        <td style="display:${bool != index ? 1 : "none"}" >${
        details.contact
      } </td>
        <td style=" display:${bool != index ? "none" : 1}"><input id=input${index + 160} value=${
        details.contact
      } ></td>

        <td><button Class="editBtn"  onclick="editRow(${index})">${
        bool != index ? "Edit" : "Save"
      }</button></td>
        <td><button Class="delBtn" onclick="deleteRow(${index})">Delete</button></td>
      </tr>
    `
    )
    .join(""); // Join the array elements into a single string

  const tableHTML = `
      <table>
        <tr>
          <th>Name</th>
          <th>ID</th>
          <th>Class</th>
          <th>Roll</th>
          <th>Address</th>
          <th>Contact</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>

         ${tableRows}

      </table>
    `;

  // Assuming showDetails is an element where you want to display the table
  showDetails.innerHTML = tableHTML;

};
let bool = null;

// Edit function for edit each field of Row
function editRow(index) {
  if (bool != index) {
    bool = index;
    saveEdit(index);
   
  } else {
    bool = null;
    saveEdit(index);
  }
  dd();
}

//   saveEdit();
let saveEdit = (index) => {
  const newObj = studentDetails[index];
  const studname = document.querySelector(`#input${index + 110}`).value;
  const studentId = document.querySelector(`#input${index + 120}`).value;
  const studClass = document.querySelector(`#input${index + 130}`).value;
  const studentRoll = document.querySelector(`#input${index + 140}`).value;
  const stuentAddre = document.querySelector(`#input${index + 150}`).value;
  const studentContact = document.querySelector(`#input${index + 160}`).value;

  newObj.studentName = studname;
  newObj.studentId = studentId;
  newObj.stuentClass = studClass;
  newObj.roll = studentRoll;
  newObj.address = stuentAddre;
  newObj.contact = studentContact;
};




dd();
