import { calculateInvestmentValue, formatter } from "../util/investment.js";

export default function Result({ input }) {
  const resultData = calculateInvestmentValue(input);
  console.log(resultData);
  const intialInvest =
    resultData[0].investment -
    resultData[0].valueEndOfYear -
    resultData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th> Year</th>
          <th> Inventment Value </th>
          <th> intresrt (Year)</th>
          <th>Total intrest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map(yearData => {
          const totalIntrest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            intialInvest;
          const totalIntrestAmount = totalIntrest - yearData.valueEndOfYear;
          return (
            <tr key={yearData.year}>
              <td>{formatter.format(yearData.year)}</td>
              <td>{formatter.format(yearData.investment)}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(totalIntrest)}</td>
              <td>{formatter.format(totalIntrestAmount)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
