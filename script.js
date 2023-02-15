const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", (ev) => {
    ev.preventDefault();
    const toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
  });
}

const toastTrigger2 = document.getElementById("liveToastBtn2");
const toastLiveExample2 = document.getElementById("liveToast");
if (toastTrigger2) {
  toastTrigger2.addEventListener("click", (ev) => {
    ev.preventDefault();
    const toast = new bootstrap.Toast(toastLiveExample2);

    toast.show();
  });
}

const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const date = setInterval(function updateDate() {
  let dateToday = new Date();

  let days = dateToday.getUTCDate();
  days = days.toString().padStart(2, "0");

  let months = dateToday.getUTCMonth() + 1;
  months = months.toString().padStart(2, "0");

  let years = dateToday.getFullYear();

  let hour = dateToday.getHours();

  let minute = dateToday.getUTCMinutes();
  minute = minute.toString().padStart(2, "0");

  let second = dateToday.getUTCSeconds();
  second = second.toString().padStart(2, "0");

  day.textContent = days;
  month.textContent = months;
  year.textContent = years;
  hours.textContent = hour;
  minutes.textContent = minute;
  seconds.textContent = second;
});

const menu = document.getElementById("menu");
const elements = document.querySelectorAll("#elements-header2");

let timer;
menu.addEventListener("click", function () {
  clearTimeout(timer);
  for (i = 0; i < elements.length; i += 1) {
    if (elements[i].style.visibility == "hidden") {
      elements[i].style.visibility = "visible";
      elements[i].style.opacity = 1;
    } else {
      elements[i].style.opacity = 0;
      elements[i].style.visibility = "hidden";
    }
  }
  timer = setTimeout(function () {
    for (i = 0; i < elements.length; i += 1) {
      elements[i].style.visibility = "hidden";
      elements[i].style.opacity = 0;
    }
  }, 4000);
});

//translate page
let translated = false;
const translateBtn = document.getElementById("translate");
translateBtn.addEventListener("click", function () {
  if (translated) {
    // revert the translations to the original state
    translateBtn.innerText = "EN";
    const i1 = document.createElement("i");
    i1.className = "fa-solid" + " " + "fa-earth-americas";
    i1.style.marginLeft = "5px";
    translateBtn.appendChild(i1);

    const contactHeader = document.getElementById("liveToastBtn");
    contactHeader.innerText = "Contato";
    const i = document.createElement("i");
    i.className = "fa-solid" + " " + "fa-phone";
    i.style.marginLeft = "5px";
    contactHeader.appendChild(i);

    const aboutTitle = document.getElementById("aboutTitle");
    aboutTitle.innerText = "Sobre";


    const aboutText = document.getElementById("aboutText");
    aboutText.innerHTML =
    "Olá, meu nome é Gabriel Cardia e eu tenho 20 anos. Atualmente, estou no 3º semestre do curso de Análise e Desenvolvimento de Sistemas e sou apaixonado por programação. Estou em constante aprendizado e pretendo me tornar um desenvolvedor FullStack. <br/><br/> Faço cursos online para aprimorar minhas habilidades, sendo eles:<br/><strong>- Udemy: Desenvolvimento Web Completo - 20 cursos + 20 projetos</strong><br/><strong>- FullStack da OneBitCode</strong>";
    
    const titleSkills = document.getElementById("titleSkills");

    titleSkills.innerText = "Minhas Skills";

    const titleProjects = document.getElementById("titleProjects");

    titleProjects.innerText = "Projetos";

    const calculator = document.getElementById("calculator");
    calculator.innerText = "Calculadora";

    const clock = document.getElementById("clock");
    clock.innerText = "Relógio Digital";

    const killRick = document.getElementById("killRick");
    killRick.innerText = "Jogo - Mate Rick";

    const projectLinks = document.querySelectorAll(".projectLink");

    projectLinks.forEach((link) => {
      link.textContent = "Link do Projeto";
    });

    const underConstruction = document.querySelectorAll(".underConstruction");

    underConstruction.forEach((text) => {
      text.textContent = "Em construção";
    });

    const contacInformation = document.getElementById("contacInformation");
    contacInformation.innerText = "Informaçãoes de contato:";

    const name = document.getElementById("name");
    name.innerText = "Nome: Gabriel Cardia";

    translated = false;
  } else {
    // translate to English
    translateBtn.innerText = "PT";
    const i1 = document.createElement("i");
    i1.className = "fa-solid" + " " + "fa-earth-americas";
    i1.style.marginLeft = "5px";
    translateBtn.appendChild(i1);
    const contactHeader = document.getElementById("liveToastBtn");
    contactHeader.innerText = "Contact";
    const i = document.createElement("i");
    i.className = "fa-solid" + " " + "fa-phone";
    i.style.marginLeft = "5px";
    contactHeader.appendChild(i);

    const aboutTitle = document.getElementById("aboutTitle");
    aboutTitle.innerText = "About";

    const aboutText = document.getElementById("aboutText");
   aboutText.innerHTML = "Hello, my name is Gabriel Cardia and I'm 20 years old. Currently, I'm in the 3rd semester of the Analysis and Development of Systems course and I'm passionate about programming. I'm constantly learning and aiming to become a FullStack developer.<br><br>I take online courses to improve my skills, including:<br/><strong>- Udemy: Complete Web Development - 20 courses + 20 projects</strong><br/><strong>- OneBitCode's FullStack course</strong>";



    titleSkills.innerText = "My skills";

    const titleProjects = document.getElementById("titleProjects");

    titleProjects.innerText = "Projects";

    const calculator = document.getElementById("calculator");
    calculator.innerText = "Calculator";

    const clock = document.getElementById("clock");
    clock.innerText = "Digital Watch";

    const killRick = document.getElementById("killRick");
    killRick.innerText = "Game - Kill Rick";

    const projectLinks = document.querySelectorAll(".projectLink");

    projectLinks.forEach((link) => {
      link.textContent = "Project Link";
    });

    const underConstruction = document.querySelectorAll(".underConstruction");

    underConstruction.forEach((text) => {
      text.textContent = "Under Constuction";
    });

    const contacInformation = document.getElementById("contacInformation");
    contacInformation.innerText = "Contact information:";

    const name = document.getElementById("name");
    name.innerText = "Name: Gabriel Cardia";
    translated = true;
  }
});

let translated2 = false;
const translateBtn2 = document.getElementById("translate2");
translateBtn2.addEventListener("click", function () {
  if (translated2) {
    // revert the translations to the original state
    translateBtn2.innerText = "EN";
    const i1 = document.createElement("i");
    i1.className = "fa-solid" + " " + "fa-earth-americas";
    i1.style.marginLeft = "5px";
    translateBtn2.appendChild(i1);

    const contactHeader = document.getElementById("liveToastBtn");
    contactHeader.innerText = "Contato";
    const i = document.createElement("i");
    i.className = "fa-solid" + " " + "fa-phone";
    i.style.marginLeft = "5px";
    contactHeader.appendChild(i);

    const aboutTitle = document.getElementById("aboutTitle");
    aboutTitle.innerText = "Sobre";
    
    const aboutText = document.getElementById("aboutText");
    aboutText.innerHTML =
    "Olá, meu nome é Gabriel Cardia e eu tenho 20 anos. Atualmente, estou no 3º semestre do curso de Análise e Desenvolvimento de Sistemas e sou apaixonado por programação. Estou em constante aprendizado e pretendo me tornar um desenvolvedor FullStack. <br/><br/> Faço cursos online para aprimorar minhas habilidades, sendo eles:<br/><strong>- Udemy: Desenvolvimento Web Completo - 20 cursos + 20 projetos</strong><br/><strong>- FullStack da OneBitCode</strong>";
    
      
    const titleSkills = document.getElementById("titleSkills");

    titleSkills.innerText = "Minhas Skills";

    const titleProjects = document.getElementById("titleProjects");

    titleProjects.innerText = "Projetos";

    const calculator = document.getElementById("calculator");
    calculator.innerText = "Calculadora";

    const clock = document.getElementById("clock");
    clock.innerText = "Relógio Digital";

    const killRick = document.getElementById("killRick");
    killRick.innerText = "Jogo - Mate Rick";

    const projectLinks = document.querySelectorAll(".projectLink");

    projectLinks.forEach((link) => {
      link.textContent = "Link do Projeto";
    });

    const underConstruction = document.querySelectorAll(".underConstruction");

    underConstruction.forEach((text) => {
      text.textContent = "Em construção";
    });

    const contacInformation = document.getElementById("contacInformation");
    contacInformation.innerText = "Informaçãoes de contato:";

    const name = document.getElementById("name");
    name.innerText = "Nome: Gabriel Cardia";

    translated2 = false;
  } else {
    // translate to English
    translateBtn2.innerText = "PT";
    const i1 = document.createElement("i");
    i1.className = "fa-solid" + " " + "fa-earth-americas";
    i1.style.marginLeft = "5px";
    translateBtn2.appendChild(i1);
    const contactHeader = document.getElementById("liveToastBtn");
    contactHeader.innerText = "Contact";
    const i = document.createElement("i");
    i.className = "fa-solid" + " " + "fa-phone";
    i.style.marginLeft = "5px";
    contactHeader.appendChild(i);

    const aboutTitle = document.getElementById("aboutTitle");
    aboutTitle.innerText = "About";

    const aboutText = document.getElementById("aboutText");
    aboutText.innerHTML = "Hello, my name is Gabriel Cardia and I'm 20 years old. Currently, I'm in the 3rd semester of the Analysis and Development of Systems course and I'm passionate about programming. I'm constantly learning and aiming to become a FullStack developer.<br><br>I take online courses to improve my skills, including:<br/><strong>- Udemy: Complete Web Development - 20 courses + 20 projects</strong><br/><strong>- OneBitCode's FullStack course</strong>";
 
 
    const titleSkills = document.getElementById("titleSkills");

    titleSkills.innerText = "My skills";

    const titleProjects = document.getElementById("titleProjects");

    titleProjects.innerText = "Projects";

    const calculator = document.getElementById("calculator");
    calculator.innerText = "Calculator";

    const clock = document.getElementById("clock");
    clock.innerText = "Digital Watch";

    const killRick = document.getElementById("killRick");
    killRick.innerText = "Game - Kill Rick";

    const projectLinks = document.querySelectorAll(".projectLink");

    projectLinks.forEach((link) => {
      link.textContent = "Project Link";
    });

    const underConstruction = document.querySelectorAll(".underConstruction");

    underConstruction.forEach((text) => {
      text.textContent = "Under Constuction";
    });

    const contacInformation = document.getElementById("contacInformation");
    contacInformation.innerText = "Contact information:";

    const name = document.getElementById("name");
    name.innerText = "Name: Gabriel Cardia";
    translated2 = true;
  }
});
