export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Investment Value</label>
          <input
            type="number"
            required
            value={userInput.investmentValue}
            onChange={event => onChange("investmentValue", event.target.value)}
          />
        </p>
        <p>
          <label>annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annaulInvestment}
            onChange={event => onChange("annaulInvestment", event.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={event => onChange("investmentValue", event.target.value)}
          />
        </p>
        <p>
          <label>Duration </label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={event => onChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
