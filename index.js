const LogoOurTeam = () =>{
    const EVOSDIVINE = document.getElementById("EVOSDIVINE").addEventListener("click", () =>{
        function EVOSDIVINELOGO(){
            let text = "Press a button!\nOkay Or Cancel !";
            if (confirm(text) == true) {
              text = "EVOS DIVINE";
            } else {
              text = "Choice It";
            }
            document.getElementById("text").innerHTML = text;
        }
        EVOSDIVINELOGO()
    },)
    const RRQESPORT = document.getElementById("RRQESPORT").addEventListener("click", () =>{
        function RRQESPORTLOGO(){
            let text = "Press a button!\nOkay Or Cancel !";
            if (confirm(text) == true) {
              text = "RRQ KAZU";
            } else {
              text = "Choice It";
            }
            document.getElementById("text").innerHTML = text;
        }
        RRQESPORTLOGO()
    },)
    const ONICESPORT = document.getElementById("ONICESPORT").addEventListener("click", () =>{
        function ONICESPORTLOGO(){
            let text = "Press a button!\nOkay Or Cancel !";
            if (confirm(text) == true) {
              text = "ONIC ESPORT";
            } else {
              text = "Choice It";
            }
            document.getElementById("text").innerHTML = text;
        }
        ONICESPORTLOGO()
    },)
    const BTRESPORT = document.getElementById("BTRESPORT").addEventListener("click", () =>{
        function BTRESPORTLOGO(){
            let text = "Press a button!\nOkay Or Cancel !";
            if (confirm(text) == true) {
              text = "BTR ESPORT";
            } else {
              text = "Choice It";
            }
            document.getElementById("text").innerHTML = text;
        }
        BTRESPORTLOGO()
    },)
    const REBELIONESPORT = document.getElementById("REBELIONESPORT").addEventListener("click", () =>{
        function REBELIONESPORTLOGO(){
            let text = "Press a button!\nOkay Or Cancel !";
            if (confirm(text) == true) {
              text = "REBELION ESPORT";
            } else {
              text = "Choice It";
            }
            document.getElementById("text").innerHTML = text;
        }
        REBELIONESPORTLOGO()
    },)
    const DEWAUNITEDESPORT = document.getElementById("DEWAUNITEDESPORT").addEventListener("click", () =>{
        function DEWAUNITEDESPORTLOGO(){
            let text = "Press a button!\nOkay Or Cancel !";
            if (confirm(text) == true) {
              text = "DEWA UNITED";
            } else {
              text = "Choice It ";
            }
            document.getElementById("text").innerHTML = text;
        }
        DEWAUNITEDESPORTLOGO()
    },)
    const DGESPORT = document.getElementById("DGESPORT").addEventListener("click", () =>{
        function DGESPORTLOGO(){
            let text = "Press a button!\nOkay Or Cancel !";
            if (confirm(text) == true) {
              text = "DG ESPORT";
            } else {
              text = "Choice It ";
            }
            document.getElementById("text").innerHTML = text;
        }
        DGESPORTLOGO()
    },)
    const AURAESPORT = document.getElementById("AURAESPORT").addEventListener("click", () =>{
        function AURAESPORTLOGO(){
            let text = "Press a button!\nOkay Or Cancel !";
            if (confirm(text) == true) {
              text = "AURA ESPORT";
            } else {
              text = "Choice It";
            }
            document.getElementById("text").innerHTML = text;
        }
        AURAESPORTLOGO()
    },)
}

LogoOurTeam()

// End Logo Esport Team Free fire
// player esport window
const playerEsport = () =>{
  const EVOSCAPITAL = document.getElementById("EVOSCAPITAL");
  const LOUD = document.getElementById("LOUD");
  const EVOSTHAILAND = document.getElementById("EVOSTHAILAND");
  const MAQICSQUAD = document.getElementById("MAQICSQUAD");

  if(EVOSCAPITAL.addEventListener("click", () =>{
     window.location.href ="/WindowPlayerEsport/EVOSCAPITAL.html"
  })){
  }
  if(LOUD.addEventListener('click', () =>{
    window.location.href = "/WindowPlayerEsport/LOUD.html"
   })){
  }
  if(EVOSTHAILAND.addEventListener('click', () =>{
    window.location.href ="/WindowPlayerEsport/EVOSPHOENIX.html"
  })){}
  if(MAQICSQUAD.addEventListener('click'), () =>{
    window.location.href= "/WindowPlayerEsport/MAQICSQUAD.html"
  }){}
}

playerEsport()