const TextField = (props) => {
  // console.log(props)
  return (
    <div className={`field ${props.textFieldSize == 'FULL' ? 'full' : ''}`}>
      <label htmlFor="f-name">{props.label}</label>
      <input name={props.name} type="text" required />
    </div>
  );
};
export default TextField;
