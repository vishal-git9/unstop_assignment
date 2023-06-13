import "../styles/input.css"
export const Input = ({onchange,count,submitTicket}) => {
  return (
    <div className="input-group">
      <input
        type="number"
        className="input"
        id="tickets"
        name="tickets"
        value={count || ""}
        placeholder="Enter Tickets Count"
        autoComplete="off"
        onChange={onchange}
      />
      <input className="button--submit" value="BOOK" type="submit" onClick={submitTicket} />
    </div>
  );
};
