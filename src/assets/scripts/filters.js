import numeral from "numeral";

const salaryFilter = function(value) {
  if (!value) {
    return "$ 0";
  }

  return numeral(value).format("(0.00a)");
};

export { salaryFilter };
