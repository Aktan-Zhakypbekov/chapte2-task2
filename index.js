let networkData = "";
let button = document.querySelector(".button");
let networkDataContainer = document.querySelector(".network-data-container");

let getData = function () {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      networkData = res;
      setData(networkData);
      button.textContent = "Убрать данные";
    });
};
let setData = function (data) {
  let networkDataList = document.createElement("div");
  networkDataList.className = "network-data-list";
  networkDataList.style.cssText = "width: 750px; margin: 1rem;";
  for (let i = 0; i < data.length; i++) {
    let dataElement = document.createElement("div");
    dataElement.className = "data-element";
    dataElement.textContent = "id: " + data[i].id + ", title: " + data[i].title;
    networkDataList.appendChild(dataElement);
  }
  networkDataContainer.appendChild(networkDataList);
};

button.addEventListener("click", () => {
  if (networkData === "") {
    getData();
  } else {
    document.querySelector(".network-data-list").remove();
    networkData = "";
    button.textContent = "Получить данные";
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let gif = document.querySelector(".gif");
let gifUrlFirstPart =
  "https://api.giphy.com/v1/gifs/translate?api_key=tk8TYgww0V6LrOw7N7UQWh72qThBDX3R&s=";
let gifUrlSearchTerm = "";

let button2 = document.querySelector(".button2");
button2.addEventListener("click", (e) => {
  e.preventDefault();
  gifUrlSearchTerm = document.querySelector(".search-text").value;
  fetch(gifUrlFirstPart + gifUrlSearchTerm, { mode: "cors" })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      gif.src = res.data.images.original.url;
    })
    .catch((error) => {
      alert(error);
    });
});
