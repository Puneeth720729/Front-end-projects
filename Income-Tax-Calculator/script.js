document.getElementById("taxform").addEventListener("submit", (e) => {
  e.preventDefault();

  
  const income = parseFloat(document.getElementById("income").value);
 
  const taxPayer = document.getElementById("taxpayer").value;


  let exemption = 250000;

  if (taxPayer === "senior") {
    exemption = 300000;
  } else if (taxPayer === "superSenior") {
    exemption = 500000;
  }

  let tax = 0;
  const taxableIncome = income - exemption;

  if (taxableIncome <= 0) {
    tax = 0;
  } else if (income <= 500000) {
    tax = taxableIncome * 0.05;
  } else if (income <= 1000000) {
    tax = (250000 * 0.05) + ((income - 500000) * 0.2);
  } else {
    tax = (250000 * 0.05) + (500000 * 0.2) + ((income - 1000000) * 0.3);
  }

  document.getElementById("result").innerText = `Estimated Tax: ₹${tax.toFixed(2)}`;
});
