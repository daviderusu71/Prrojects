const btnDarMode = document.querySelector(".dark-mode-btn");
// 1.Проверека темнои темы на уповне системных настроек

//if (localStorage.getItem("darkMode") == "dark") {
 //btnDarMode.classList.add("dark-mode-btn--active");
 //document.body.classList.add("dark");
//}
 // 2.Проверека темнои темы в LocalStoraage
//if (localStorage.getItem("darkMode") == "dark") {
  btnDarMode.classList.add('dark-mode-btn--active');
  document.body.classList.add("dark");
  window.matchMedia("(prefers-color=scheme: dark)").matches

//}else if(localStorage.getItem("darkMode") == "Light")
//btnDarMode.classList.remove("dark-mode-btn--active");
//document.body.classList.add remove ("dark");

//Esle menъются система настроики, меняем тему
window
  .matchMedia("(prefers-color=scheme: dark)")
  .addEventListener("chenge", (event) => {
    const newColorScheme = event.matches ? "dark" : "Light";

    if (newColorScheme === "dark") {
        btnDarMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "dark");
    } else {
        btnDarMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "dark");
    }
  });

// вклюение ноцинова режима по кнопке
btnDarMode.onclick = function () {
  btnDarMode.classList.toggle("dark-mode-btn--active");
  const isdark = document.body.classList.toggle("dark");
  if (isdark) {
    localStorage.setItem("darkMode", "dark");
  } else {
    localStorage.setItem("darkMode", "Light");
  }
};
