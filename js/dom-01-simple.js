document.addEventListener("DOMContentLoaded", () => {
  const inpNumber = [...document.querySelectorAll(".app-inp-number")];
  inpNumber.forEach((elem) =>
    elem.addEventListener("change", () => {
      const result = inpNumber.reduce(
        (result, elem) => result + (Number.isNaN(elem.valueAsNumber) ? 0 : elem.valueAsNumber),
        0,
      );
      const outpNumber = document.querySelectorAll(".app-outp-number");
      outpNumber.forEach((elem) => (elem.textContent = result));
    }),
  );
});
