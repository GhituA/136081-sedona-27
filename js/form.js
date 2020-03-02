var link = document.querySelector(".index-search__popup-btn");
var popup = document.querySelector(".index-search__form");
var form = document.querySelector("form");
var startdate = document.querySelector("[name=startdate]");
var enddate = document.querySelector("[name=enddate]");
var adults = document.querySelector("[name=adults]");
var children = document.querySelector("[name=children]");
var storageadults = localStorage.getItem("adults");
var storagechildren = localStorage.getItem("children");
var isStorageSupport = true;

try {
  storageadults = localStorage.getItem("adults");
} catch (err) {
  isStorageSupport = false;
}

try {
  storagechildren = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

popup.classList.add("index-search__form-toggle");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("index-search__form-toggle");
  popup.classList.remove("index-search__form-error");
  startdate.focus();
  if (storageadults) {
    adults.value = storageadults;
  }
  if (storagechildren) {
    children.value = storagechildren;
  }
});

form.addEventListener("submit", function (evt) {
  if (!startdate.value || !enddate.value) {
    evt.preventDefault();
    popup.classList.remove("index-search__form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("index-search__form-error");
  } else {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("children", children.value);
    }
});
