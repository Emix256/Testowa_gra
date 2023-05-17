let x = document.getElementById("zdanie").value;

document.getElementById("btn").onclick = function(){
  let utterance = new SpeechSynthesisUtterance(x);
  SpeechSynthesis.speak(utterance);
}
