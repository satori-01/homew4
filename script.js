// let previousText = ''; 
// function handleClick(){
// const userInput = prompt ( 'Введите текст: ');

// if (userInput !== null  ){
//     previousText = userInput ; 
//     document.getElementById('Text').innerText = previousText;
 
// }

// }
// document.getElementById('Button').onclick = handleClick;

document.addEventListener("DOMContentLoaded", function () {
    const lights = document.querySelectorAll(".light");
  
    function toggleLightColor(light, color) {
      lights.forEach(light => light.classList.remove("active"));
      light.classList.add(color);
    }
  
    function showStatusMessage(status) {
      const statusMessage = document.createElement("div");
      statusMessage.classList.add("status-message");
      statusMessage.textContent = status;
  
      document.body.appendChild(statusMessage);
  
      setTimeout(function () {
        document.body.removeChild(statusMessage);
      }, 2000);
    }
  
    function handleClick() {
      const userInput = prompt("Введите текст (Красный или Зеленый):");
      const lowerCaseUserInput = userInput ? userInput.toLowerCase() : "";
  
      switch (lowerCaseUserInput) {
        case "красный":
          toggleLightColor(lights[0], "red");
          showStatusMessage("STOP");
          break;
        case "зеленый":
          toggleLightColor(lights[2], "green");
          showStatusMessage("GO");
          break;
        default:
          alert("Введено неправильное значение!");
      }
    }
  
    document.addEventListener("click", handleClick);
  });
  