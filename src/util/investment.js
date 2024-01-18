export function calculateInvestmentValue({
  investmentValue,
  annaulInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let initialValue = investmentValue;

  for (let i = 0; i < duration; i++) {
    const interestEarnedYear = initialValue * (expectedReturn / 100);
    initialValue += interestEarnedYear + annaulInvestment;

    annualData.push({
      year: i + 1,
      investment: interestEarnedYear,
      valueEndOfYear: initialValue,
      annualInvestment: annaulInvestment,
    });
  }
  return annualData;
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
