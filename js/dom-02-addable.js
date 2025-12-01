function createInputComponent() {
  const inpNumber = [...document.querySelectorAll(".app-inp-number")];
  const labelElem = document.createElement("label");
  const bElem = document.createElement("b");
  bElem.textContent = `Number ${inpNumber.length + 1}:`;
  const inpElem = document.createElement("input");
  inpElem.setAttribute("type", "number");
  inpElem.classList.add("app-inp-number");
  const brElem = document.createElement("br");
  labelElem.appendChild(bElem);
  labelElem.appendChild(inpElem);
  labelElem.appendChild(brElem);

  inpElem.addEventListener("change", () => {
    const inpNumber = [...document.querySelectorAll(".app-inp-number")];
    const result = inpNumber.reduce(
      (result, elem) =>
        result + (Number.isNaN(elem.valueAsNumber) ? 0 : elem.valueAsNumber),
      0,
    );
    const outpNumber = document.querySelectorAll(".app-outp-number");
    outpNumber.forEach((elem) => (elem.textContent = result));
  });
  const container = document.querySelector(".app-cmp-number-list");
  if (container) {
    container.appendChild(labelElem);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const btnAdd = [...document.querySelectorAll(".app-btn-add")];
  btnAdd.forEach((elem) =>
    elem.addEventListener("click", () => {
      createInputComponent();
    }),
  );
  createInputComponent();
});
