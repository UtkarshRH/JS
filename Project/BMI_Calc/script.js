const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const weightGuide = document.querySelector("#weight-guide");

  // Reset previous results
  results.innerHTML = "";

  // Apply checks for height and weight
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please provide a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please provide a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    // Display weight guide based on BMI
    if (bmi <= 18.6) {
      weightGuide.innerHTML =
        "<h3>BMI Weight Guide</h3><p>Under Weight = Less than 18.6</p>";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      weightGuide.innerHTML =
        "<h3>BMI Weight Guide</h3><p>Normal Range = 18.6 and 24.9</p>";
    } else {
      weightGuide.innerHTML =
        "<h3>BMI Weight Guide</h3><p>Overweight = Greater than 24.9</p>";
    }
  }
});
