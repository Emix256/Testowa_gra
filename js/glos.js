let x;

x = document.getElementById("zdanie").value;
document.getElementById("btn").onclick = function(){
  var msg = x;
  const utterance = new SpeechSynthesisUtterance(msg);
  SpeechSynthesis.speak(utterance);
}
