function change() {
  if (document.querySelector(".surname").innerText == "НИКОЛЮК") {
    document.querySelector(".surname").innerText = "NIKOLYUK";
    document.querySelector(".name").innerText = "TATIANA";
    document.querySelector(".middleName").innerText = "NIKOLAEVNA";
    document.querySelector(".birthday").innerText = "XXI.I.MMVI";
    return;
  }
  document.querySelector(".surname").innerText = "НИКОЛЮК";
  document.querySelector(".name").innerText = "ТАТЬЯНА";
  document.querySelector(".middleName").innerText = "НИКОЛАЕВНА";
  document.querySelector(".birthday").innerText = "21.01.2006";
}
