const slider = document.getElementById("slider");
const pageViews = document.querySelector(".page-views");
const money = document.querySelector(".money");
const yearlyBilling = document.querySelector(".yearly-billing");
let amount = "1";
let moneyAmount;
let pageViewsAmount;
discount = false;
slider.oninput = function () {
  amount = this.value.toString();

  render(amount, discount);
};
yearlyBilling.addEventListener("change", () => {
  discount = yearlyBilling.checked;
  amount = slider.value;
  render(amount, discount);
});

function render(amount, discount) {
  switch (amount) {
    case "1":
      pageViewsAmount = 10 + "K";
      moneyAmount = 8;
      break;

    case "2":
      pageViewsAmount = 50 + "K";
      moneyAmount = 12;
      break;
    case "3":
      pageViewsAmount = 100 + "K";
      moneyAmount = 16;
      break;
    case "4":
      pageViewsAmount = 500 + "K";
      moneyAmount = 24;
      break;
    case "5":
      pageViewsAmount = 1 + "M";
      moneyAmount = 36;
      break;
  }
  if (discount) {
    moneyAmount = moneyAmount - moneyAmount * 0.25;
  }
  console.log(moneyAmount);
  money.textContent = "$" + moneyAmount + ".00";
  console.log(pageViewsAmount);
  pageViews.textContent = pageViewsAmount + " pageviews";
}

function updateSlider(slider) {
  const min = slider.min;
  const max = slider.max;
  const value = slider.value;
  const percentage = ((value - min) / (max - min)) * 100;
  slider.style.background = `linear-gradient(to right,hsl(174, 86%, 45%)  ${percentage}%, hsl(174, 77%, 80%) ${percentage}%)`;
}

slider.addEventListener("input", () => {
  updateSlider(slider);
});
render(amount, discount);
updateSlider(slider);
