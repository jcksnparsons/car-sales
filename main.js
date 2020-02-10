import salesByWeek from "./salesData.js";

const salesReport = document.querySelector(".salesReport");
const searchInput = document.getElementById("searchInput");

salesByWeek.forEach(sale => {
  const keys = Object.keys(sale.vehicle);
  salesReport.innerHTML += `<section><h2>${sale[`sales_agent`][`first_name`]} ${
    sale[`sales_agent`][`last_name`]
  }</h2></section>`;
  for (const key of keys) {
    salesReport.innerHTML += `<div><p>${key}: ${sale.vehicle[key]}<p></div>`;
  }
  salesReport.innerHTML += `<h3>Gross Profit: $${sale[`gross_profit`]}</h3>`;
});

searchInput.addEventListener("keyup", event => {
  const keyCode = event.keyCode;
  if (keyCode === 13) {
    salesReport.innerHTML = "";
    const searchTerm = event.target.value;

    salesByWeek.forEach(sale => {
      const values = Object.values(sale.sales_agent);
      for (const value of values) {
        if (value.includes(searchTerm)) {
          salesReport.innerHTML += `<section><h2>${
            sale[`sales_agent`][`first_name`]
          } ${sale[`sales_agent`][`last_name`]}</h2></section>
                <p>Mobile: ${sale[`sales_agent`][`mobile`]}</p>
                <p>Email: ${sale[`sales_agent`][`email`]}
                <p>Profit: $${sale[`gross_profit`]}`;
        }
      }
    });
  }
});
