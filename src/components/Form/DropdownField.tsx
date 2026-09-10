const DropdownField = (props) => {
  // console.log(props);
  return (
    <div className={`field ${props.dropdownFieldSize == 'FULL' ? 'full' : ''}`}>
      <label>{props.label}</label>
      <select name={props.name}>
        {props.options.map((option, index) => {
          return <option key={index} value={option.value}>{option.label}</option>;
        })}
      </select>
    </div>
  );
};
export default DropdownField;
