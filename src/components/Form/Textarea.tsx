const Textarea = (props) => {
  const { name, label, addressFieldSize, register, errors } = props;

  return (
    <div className={`field ${addressFieldSize == 'FULL' ? 'full' : ''}`}>
      <label htmlFor="f-msg">{label}</label>
      <textarea {...register(name)} name={name} />
      {errors[name] && <p className="route-tag">{errors[name].message}</p>}
    </div>
  );
};
export default Textarea;
