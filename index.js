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
