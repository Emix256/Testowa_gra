const przycisk = document.getElemntById("btn");
const tekst = document.getElementById("zdanie");

przycisk.addEventListener('click', () => {
  playText(tekst.value)
});

function playText(tekst) {
  const utterance = new SpeechSynthesistUtterance(tekst)
  utterance.rate = 1
  speechSynthesist.speak(utterance)
};
