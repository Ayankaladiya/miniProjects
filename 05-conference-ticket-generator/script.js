const dropArea = document.querySelector(".drop-area");
const inputFile = document.querySelector("#input-file");
const imageView = document.querySelector(".img-view");
const main_img = document.querySelector(".main-img");
const img_btn = document.querySelector(".img-btn");
const remove_btn = document.querySelector(".remove-btn");

document.querySelectorAll(".error").forEach((ele) => {
  ele.style.display = "none";
});
document
  .querySelector(".data_1")
  .lastElementChild.classList.remove("form-control");
document
  .querySelector(".data_2")
  .lastElementChild.classList.remove("form-control");
document
  .querySelector(".data_3")
  .lastElementChild.classList.remove("form-control");
document.querySelector(".img-view").classList.remove("upload_border");

document.querySelector(".formSubmit").addEventListener("click", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const githubUsername = document.getElementById("githubUsername").value;
  const error = document.querySelectorAll(".error");

  // Regular Expression
  const usernameRegex = /^[A-za-z09 ]{3,20}$/;
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

  if (error) {
    document.querySelector(".main-background").style.height = "135%";
    document.querySelector(".main-container").style.top = "14vh";
    document.querySelector(
      ".pattern-squiggly-line-bottom-desktop"
    ).style.bottom = "-35%";
  }

  // clear previous errors
  document.querySelectorAll(".error").forEach((curElem) => {
    curElem.style.display = "none";
  });

  let isValid = true;
  let userData = [];

  if (isValid) {
    document
      .querySelector(".data_1")
      .lastElementChild.classList.remove("form-control");
    document
      .querySelector(".data_2")
      .lastElementChild.classList.remove("form-control");
    document
      .querySelector(".data_3")
      .lastElementChild.classList.remove("form-control");
    document.querySelector(".img-view").classList.remove("upload_border");
  }

  if (!usernameRegex.test(username)) {
    document.getElementById("usernameError").style.display = "flex";
    document
      .querySelector(".data_1")
      .lastElementChild.classList.add("form-control");
    isValid = false;
  }
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").style.display = "flex";
    document
      .querySelector(".data_2")
      .lastElementChild.classList.add("form-control");
    isValid = false;
  }
  if (!githubUsername) {
    document.getElementById("githubusernameError").style.display = "flex";
    document
      .querySelector(".data_3")
      .lastElementChild.classList.add("form-control");
    isValid = false;
  }
  if (!inputFile.value) {
    document.querySelector(".img-view").classList.add("upload_border");
    isValid = false;
  }

  if (isValid) {
    document.querySelector(".first").style.display = "none";
    document.querySelector(".form-container").style.display = "none";
    document.querySelector(".second").style.display = "block";
    document.querySelector(".ticket-container").style.display = "block";

    document.querySelector(".main-background").style.height = "100%";
    document.querySelector("main").style.overflow = "hidden";
    document.querySelector(".main-container").style.top = "0";
    document.querySelector(
      ".pattern-squiggly-line-bottom-desktop"
    ).style.bottom = "0";

    document.querySelector(".user").innerHTML = username;
    document.querySelector(".name").innerHTML = username;
    document.querySelector(".github_id").innerHTML = githubUsername;
    document.querySelector(".email").innerHTML = email;

    let imgLink = inputFile.files[0];
    document.querySelector(".user_image").src = URL.createObjectURL(imgLink);

    let formClass = document.getElementsByClassName("form-control");
    Array.from(formClass).forEach((curElem) => userData.push(curElem));
    Array.from(formClass).forEach((curElem) => (curElem.value = ""));

    console.log(userData);
    // alert("Successful");
  }
});

inputFile.addEventListener("change", uploadImage);

function uploadImage() {
  let imgLink = inputFile.files[0];

  main_img.src = URL.createObjectURL(imgLink);
  main_img.classList.remove("view-img");
  main_img.classList.add("user-img");
  imageView.children[1].style.display = "none";
  img_btn.style.display = "block";
}

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
});
dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  inputFile.files = e.dataTransfer.files;
  uploadImage();
});

remove_btn.addEventListener("click", () => {
  main_img.src = "assets/images/icon-upload.svg";
  img_btn.style.display = "none";
  imageView.children[1].style.display = "block";
  main_img.classList.add("view-img");
  main_img.classList.remove("user-img");
});
