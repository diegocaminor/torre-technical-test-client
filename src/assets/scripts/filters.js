import numeral from "numeral";

const salaryFilter = function(value) {
  if (!value) {
    return "$ 0";
  }

  return numeral(value).format("(0.00a)");
};

const capitalizeFilter = function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export { salaryFilter, capitalizeFilter };
