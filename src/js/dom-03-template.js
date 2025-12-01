function createInputComponent() {
  const inpNumber = [...document.querySelectorAll(".app-inp-number")];

  const template = document.querySelector(".app-tmp-number-component");

  if (template) {
    const inputContainer = template.content.cloneNode(true).firstElementChild;
    [...inputContainer.querySelectorAll(".app-title-number")].forEach(
      (elem) => (elem.textContent = `${inpNumber.length + 1}`),
    );
    const inpElem = inputContainer.querySelector(".app-inp-number");
    
    inpElem?.addEventListener("change", () => {
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
      container.appendChild(inputContainer);
    }
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
