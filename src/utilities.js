const utilities = {
  toCurrency: (num) => parseFloat(num.toFixed(2)),
  toCurr: (value) => {
    return value.toFixed(2).toLocaleString("pl-PL", {
      style: "currency",
      currency: "PLN"
    });
  }
};

export default utilities;
