// const nameInput = document.getElementById("name");
// const emailInput = document.getElementById("email");
// const phoneInput = document.getElementById("phone_number");
// const msgInput = document.getElementById("message");
// console.log(nameInput);

// const cancelBtn = document.getElementById("cancel_btn");
// const sendBtn = document.getElementById("cancel_btn");

// // function clearInput(){
// //     nameInput = "";
// //     emailInput = "";
// //     phoneInput = "";
// //     msgInput = "";
// // }

// sendBtn.addEventListener("click", function clearInput(){
//     nameInput = "";
//     emailInput = "";
//     phoneInput = "";
//     msgInput = "";
// });
const nameInputField = document.querySelector("#name");
const emailInputField = document.querySelector("#email");
const phoneInputField = document.querySelector("#phone");
const messageInputField = document.querySelector("#msg");

const cancelBtn = document.querySelector("#cancel-btn");
const sendBtn = document.querySelector("#send-btn");

function clearInputFields() {
  nameInputField.value = "";
  emailInputField.value = "";
  phoneInputField.value = "";
  messageInputField.value = "";
}

cancelBtn.addEventListener("click", clearInputFields);

sendBtn.addEventListener("click", () => {
  if (
    !nameInputField.value ||
    !emailInputField.value ||
    !phoneInputField.value ||
    !messageInputField.value
  ) {
    window.alert("all input boxes must be filled");
    return;
  }

  if (isNaN(phoneInputField.value)) {
    window.alert("phone number field must only contain numbers");
    return;
  }
});
