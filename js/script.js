var link = document.querySelector(".index-search__popup-btn");
var popup = document.querySelector(".index-search__form");
var form = document.querySelector("form");
var startdate = document.querySelector("[name=startdate]");
var enddate = document.querySelector("[name=enddate]");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("index-search__form-toggle");
  startdate.focus();
});

form.addEventListener("submit", function (evt) {
  if (!startdate.value || !enddate.value) {
    evt.preventDefault();
    console.log("введите даты");
  }
  else {
    evt.preventDefault();
    console.log("startdate", startdate.value);
    console.log("enddate", enddate.value);
  }
});
