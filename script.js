const pl1 = prompt("nome do primeiro jogador");
const pl2 = prompt("nome do segundo jogador");

let turnName = pl1;

const turnPlayer = document.createElement("h1");
turnPlayer.innerText = "e a vez de " + turnName;

const turn = document.getElementById("turn");
turn.appendChild(turnPlayer);

function nameTurn() {
  if (turnName == pl1) {
    turnName = pl2;
    turnPlayer.innerText = "e a vez de " + turnName;
  } else {
    turnName = pl1;
    turnPlayer.innerText = "e a vez de " + turnName;
  }
}

document.querySelectorAll(".option").forEach(function (optionBtn) {
  optionBtn.addEventListener("click", function () {
    if (turnName == pl1) {
      optionBtn.innerText = "X";
    } else {
      optionBtn.innerText = "O";
    }
    const btn1 = document.getElementById("btn1").innerText;
    const btn2 = document.getElementById("btn2").innerText;
    const btn3 = document.getElementById("btn3").innerText;

    const btn4 = document.getElementById("btn4").innerText;
    const btn5 = document.getElementById("btn5").innerText;
    const btn6 = document.getElementById("btn6").innerText;

    const btn7 = document.getElementById("btn7").innerText;
    const btn8 = document.getElementById("btn8").innerText;
    const btn9 = document.getElementById("btn9").innerText;

    if (btn1 == btn2 && btn2 == btn3) {
      if (btn1 == "X") {
        alert("o vencedor e " + pl1);
      } else if (btn1 == "O") {
        alert("o vencedor e " + pl2);
      }
    }
    if (btn4 == btn5 && btn5 == btn6) {
      if (btn4 == "X") {
        alert("o vencedor e " + pl1);
      } else if (btn4 == "O") {
        alert("o vencedor e " + pl2);
      }
    }
    if (btn7 == btn8 && btn8 == btn9) {
      if (btn7 == "X") {
        alert("o vencedor e " + pl1);
      } else if (btn7 == "O") {
        alert("o vencedor e " + pl2);
      }
    }
    if (btn1 == btn4 && btn4 == btn7) {
      if (btn1 == "X") {
        alert("o vencedor e " + pl1);
      } else if (btn1 == "O") {
        alert("o vencedor e " + pl2);
      }
    }
    if (btn2 == btn5 && btn5 == btn8) {
      if (btn2 == "X") {
        alert("o vencedor e " + pl1);
      } else if (btn2 == "O") {
        alert("o vencedor e " + pl2);
      }
    }
    if (btn3 == btn6 && btn6 == btn9) {
      if (btn3 == "X") {
        alert("o vencedor e " + pl1);
      } else if (btn3 == "O") {
        alert("o vencedor e " + pl2);
      }
    }
    if (btn1 == btn5 && btn5 ==0 btn9) {
      if (btn1 == "X") {
        alert("o vencedor e " + pl1);
      } else if (btn1 == "O") {
        alert("o vencedor e " + pl2);
      }
    }

    nameTurn();
  });
});
