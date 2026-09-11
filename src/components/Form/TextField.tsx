const TextField = (props) => {
  // console.log(props)
  const { name, label, textFieldSize, register, errors } = props;
  return (
    <div className={`field ${textFieldSize == 'FULL' ? 'full' : ''}`}>
      <label htmlFor="f-name">{label}</label>
      <input {...register(name)} name={name} type="text" />
      {errors[name] && <p className="route-tag">{errors[name].message}</p>}
    </div>
  );
};
export default TextField;
