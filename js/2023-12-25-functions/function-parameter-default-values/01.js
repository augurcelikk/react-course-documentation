function calculateTaxIncludedPrice(price, tax) {
  if (!tax) {
    tax = 0.18;
  }

  return price + price * tax;
}

console.log(calculateTaxIncludedPrice(1200));

// default parameter values
function calculateTaxIncludedPrice2(price, tax = 0.18) {
  return price + price * tax;
}

function applyUserSettings(zoomLevel = 1.0, themeColor = "dark") {
  console.log(zoomLevel, themeColor);

  return true;
}

applyUserSettings();

const calculateCircumference = function (r, pi = 3.14, unit = "meter") {
  return 2 * r * pi + " " + unit;
};

console.log(calculateCircumference(12));




const calculateCircumference2 = (r, pi = 3.14, unit = "meter") => {
  return 2 * r * pi + " " + unit;
};

