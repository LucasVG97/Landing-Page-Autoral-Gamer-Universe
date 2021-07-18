//Contagem Regressiva
const secsContainer = document.querySelector("#seconds")
const minContainer = document.querySelector("#minutes")
const hoursContainer = document.querySelector("#hours")
const daysContainer = document.querySelector("#days")
const loading = document.querySelector("#loading")
const countContainer = document.querySelector("#countdown")

const newBlack = new Date(" 26 November 2021 00:00:00")

const getTimeUnit = unit => unit < 10 ? "0" + unit : unit

const countValues = ({ days, hours, min, sec }) => {
  secsContainer.textContent = getTimeUnit(sec)
  minContainer.textContent = getTimeUnit(min)
  hoursContainer.textContent = getTimeUnit(hours)
  daysContainer.textContent = getTimeUnit(days)
}
const updateCountdown = () => {
  const currentTime = new Date()
  const difference = newBlack - currentTime
  const days = Math.floor(difference / 1000 / 60 / 60 / 24)
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24
  const min = Math.floor(difference / 1000 / 60) % 60
  const sec = Math.floor(difference / 1000) % 60
  countValues({ days, hours, min, sec })
}

const countDisplay = () => {
  loading.remove()
  countContainer.style.display = "flex"
}
setTimeout(countDisplay, 1000)

setInterval(updateCountdown, 1000)


//armazenando no local storage


const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nome = document.getElementById("name").value;
  let email = document.getElementById("mail").value;
  let data = {
    nome,
    email
  }

  let convertData = JSON.stringify(data);

  localStorage.setItem("lead", convertData)


  let content = document.getElementById("content")

  let carregando = `<p> Você está quase lá ...</p>`

  let concluido = `<p> Agora você já está apto a receber as melhores promos em primeira mão!!</p>`

  content.innerHTML = carregando

  setTimeout(() => {
    content.innerHTML = concluido
  }, 1500)

})