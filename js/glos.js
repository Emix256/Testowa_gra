let x;

x = document.getElementById("zdanie").value;
document.getElementById("btn").onclick = function(){
  var msg = "hello! Am i working?";
  const utterance = new SpeechSynthesisUtterance(msg);
  SpeechSynthesis.speak(utterance);
}
