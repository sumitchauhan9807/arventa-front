const DropdownField = (props) => {
  // console.log(props);
  const { name, label, dropdownFieldSize, register, errors } = props;

  return (
    <div className={`field ${dropdownFieldSize == 'FULL' ? 'full' : ''}`}>
      <label>{label}</label>
      <select {...register(name)} name={name}>
        {props.options.map((option, index) => {
          return <option key={index} value={option.value}>{option.label}</option>;
        })}
      </select>
    </div>
  );
};
export default DropdownField;
