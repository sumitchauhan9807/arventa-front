const EmailField = (props) => {
  return (
    <div className={`field ${props.textFieldSize == 'FULL' ? 'full' : ''}`}>
      <label htmlFor="f-email">{props.label}</label>
      <input name={props.name} type="email" required />
    </div>
  );
};
export default EmailField;
