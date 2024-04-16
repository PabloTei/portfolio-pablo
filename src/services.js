const antiquity = (startDateString) => {
  const startDate = new Date(startDateString);
  const currentDate = new Date();

  const difference = currentDate - startDate;

  const years = difference / (1000 * 60 * 60 * 24 * 365);
  const months = (years - Math.floor(years)) * 12;

  const yearsRounded = Math.floor(years);
  const monthsRounded = Math.floor(months);

  let message = "";
  if (yearsRounded > 0) {
    message += `${yearsRounded} año${yearsRounded !== 1 ? "s" : ""}`;
    if (monthsRounded > 0) {
      message += ` y ${monthsRounded} mes${monthsRounded !== 1 ? "es" : ""}`;
    }
  } else {
    message += `${monthsRounded} mes${monthsRounded !== 1 ? "es" : ""}`;
  }

  return message;
};

export default antiquity;
