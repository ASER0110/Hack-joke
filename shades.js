setTimeout(() => {
  const p = document.querySelector('p');
  if (p) {
    p.innerHTML = "i'm joking";
  }

  const url = "https://server6.mp3quran.net/download/qtm/039.mp3";
  window.open(url, '_self');
}, 2000);
