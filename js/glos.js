const przycisk = document.getElemntById("btn");
const tekst = document.getElementById("zdanie");

przycisk.addEventListener('click', () => {
  playText(tekst.value)
});

function playText(zdanie) {
  const utterance = new SpeechSynthesistUtterance(zdanie)
  utterance.rate = 1
  speechSynthesist.speak(utterance)
};
