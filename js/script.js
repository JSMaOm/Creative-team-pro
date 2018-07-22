function moveToPrevImg() {
  let currentImg = document.querySelector(".c-active");
  items.forEach(item => {
    if(item === currentImg) {
      item.classList.replace("c-active", "c-position3");
    }
    else if(item.classList.contains("c-position1")) {
      item.classList.replace("c-position1", "c-active");
    }
    else {
      for (let i = 0; i < item.classList.length; i++) {
        if(/c-position\d/.test(item.classList[i])) {


          let newClass = item.classList[i].replace(/\d/, n => {
            return (n === 1)? n : --n;
          });


          item.classList.replace(item.classList[i],newClass);
          console.log(currentImg);
          break;
        }
      }
    }
  });
}


function moveToNextImg() {
  let currentImg = document.querySelector(".c-active");
  items.forEach(item => {
    if(item === currentImg) {
      item.classList.replace("c-active", "c-position1");
    }
    else if(item.classList.contains("c-position3")) {
      item.classList.replace("c-position3", "c-active");
    }
    else {
      for (let i = 0; i < item.classList.length; i++) {
        if(/c-position\d/.test(item.classList[i])) {


          let newClass = item.classList[i].replace(/\d/, n => {
            return (n === 1)? n : ++n;
          });
          item.classList.replace(item.classList[i],newClass);
          break;
        }
      }
    }
  });
}


let items = document.querySelectorAll(".c-item");


let prevButton = document.querySelector(".btn-arrow-l");
prevButton.addEventListener("click", moveToPrevImg, false);




let nextButton = document.querySelector(".btn-arrow-r");
nextButton.addEventListener("click", moveToNextImg);

