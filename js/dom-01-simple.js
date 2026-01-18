document.addEventListener("DOMContentLoaded", () => {
  // ดึงข้อมูลจาก input ที่มี class app-inp-number
  const inpNumber = [...document.querySelectorAll(".app-inp-number")];
  // ทำการวนลูปเพื่อเพิ่ม event listener ให้กับแต่ละ input
  inpNumber.forEach((elem) =>
    elem.addEventListener("change", () => {
      // คำนวนผลรวมของ input
      const result = inpNumber.reduce(
        (result, elem) => result + (Number.isNaN(elem.valueAsNumber) ? 0 : elem.valueAsNumber),
        0,
      );
      const outpNumber = document.querySelectorAll(".app-outp-number");
      // ทำการวนลูปเพื่อเพิ่ม event listener ให้กับแต่ละ output
      outpNumber.forEach((elem) => (elem.textContent = result));
    }),
  );
});
