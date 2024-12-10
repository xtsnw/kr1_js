// Имеются две ёмкости: кубическая с ребром A, цилиндрическая с высотой H и радиусом основания R. Определить, поместится ли жидкость объёма M в первую ёмкость, во вторую, в обе.

function answer() {
  const m = document.querySelector(".M").value;
  const a = document.querySelector(".A").value;
  const h = document.querySelector(".H").value;
  const r = document.querySelector(".R").value;
  const cubeV = a ** 3;
  const cylinderV = Math.PI * r * 2 * h;
  if (m < cubeV && m < cylinderV) {
    document.querySelector(".result").innerText = `Ответ: поместится в обе`;
    document.querySelector(".hiddenResult").value = `обе`;
  } else if (m < cubeV && m > cylinderV) {
    document.querySelector(
      ".result"
    ).innerText = `Ответ: поместится только в куб`;
    document.querySelector(".hiddenResult").value = `куб`;
  } else if (m > cubeV && m < cylinderV) {
    document.querySelector(
      ".result"
    ).innerText = `Ответ: поместится только в цилиндр`;
    document.querySelector(".hiddenResult").value = `цилиндр`;
  } else {
    document.querySelector(".result").innerText = `Ответ: не поместится`;
    document.querySelector(".hiddenResult").value = `нет`;
  }
}
