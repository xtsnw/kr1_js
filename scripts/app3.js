// Имеются две ёмкости: кубическая с ребром A, цилиндрическая с высотой H и радиусом основания R. Определить, поместится ли жидкость объёма M в первую ёмкость, во вторую, в обе.

function answer() {
  const m = document.querySelector(".M");
  const a = document.querySelector(".A");
  const h = document.querySelector(".H");
  const r = document.querySelector(".R");
  const cubeV = a.value ** 3;
  const cylinderV = 3.14 * r.value * 2 * h.value;
  if (m.value < cubeV && m.value < cylinderV) {
    document.querySelector(".result").innerText = `Ответ: поместится в обе`;
    document.querySelector(".hiddenResult").value = `обе`;
  } else if (m.value < cubeV && m.value > cylinderV) {
    document.querySelector(
      ".result"
    ).innerText = `Ответ: поместится только в куб`;
    document.querySelector(".hiddenResult").value = `куб`;
  } else if (m.value > cubeV && m.value < cylinderV) {
    document.querySelector(
      ".result"
    ).innerText = `Ответ: поместится только в цилиндр`;
    document.querySelector(".hiddenResult").value = `цилиндр`;
  } else {
    document.querySelector(".result").innerText = `Ответ: не поместится`;
    document.querySelector(".hiddenResult").value = `нет`;
  }
}
