let users = [];
let count = 1;
function showEmployees() {
  let btn = document.getElementById("btn");
  let name = document.getElementById("name").value;
  let profession = document.getElementById("profession").value;
  let age = document.getElementById("age").value;
  let container = document.getElementById("container");
  let alert = document.getElementById("alert");
  alert.firstChild.remove();

  if (name === "" || profession === "" || age === "") {
    let error = (document.createElement("p").textContent =
      "Error : Please Make sure All the fields are filled before adding in an employee !");
    let alert = document.getElementById("alert");
    alert.append(error);
    alert.style.color = "#FF4343";
  } else {
    let success = (document.createElement("p").textContent =
      "Success : Employee Added!");
    let alert = document.getElementById("alert");
    alert.append(success);
    alert.style.color = "#43FF78";

    let user = { id: count, name: name, profession: profession, age: age };
    users.unshift(user);
    let userContainer = document.createElement("div");
    userContainer.className = "userContainer";
    userContainer.innerHTML += `
    <div class="main-div" id="user-${user.id}" >
    <div class="user-div">
    <span class="span1">${user.id}.</span>
    <span class="span2">Name: ${name}</span>
    <span class="span3">Profession: ${profession}</span>
    <span class="span4">Age: ${age}</span>
    </div>
    <div class="delete-button">
    <button type="button" onclick="deleteUser(${user.id})">Delete User</button>
    </div>
    </div>
    `;
    
    container.appendChild(userContainer);
    count++;
    document.getElementById("name").value = "";
    document.getElementById("profession").value = "";
    document.getElementById("age").value = "";
    let p = container.querySelector("p");
    p.textContent = "";
    
}
}
function deleteUser(id) {
    let userDiv = document.getElementById(`user-${id}`);
    if (userDiv) {
        userDiv.remove();
        
        // Remove the user from the 'users' array
        users = users.filter(user => user.id !== id);
      }
  }
// function deleteUser(){
//     let container = document.getElementById("container");
//     let user = document.getElementsByClassName("main-div");
//     container.removeChild(user ,user.firstChild);
// }


 