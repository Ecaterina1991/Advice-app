const resDiv = document.querySelector("#results");
const resBtn = document.querySelector("#getData");
const resId = document.querySelector("#id");

resBtn.addEventListener("click", () => {
  getAdvice();
});

window.onload = () => {
  getAdvice();
};

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const Adviceobj = adviceData.slip;
      resDiv.innerHTML = `<p>"${Adviceobj.advice}"</p>`;

      resId.innerHTML = `<p>ADVICE #${Adviceobj.id}</p>`;
    })
    .catch((error) => {
      console.log(error);
    });
}
