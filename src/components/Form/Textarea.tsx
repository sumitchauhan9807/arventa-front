const Textarea = (props) => {
  return (
    <div className={`field ${props.addressFieldSize == 'FULL' ? 'full' : ''}`}>
      <label htmlFor="f-msg">{props.label}</label>
      <textarea name={props.name} />
    </div>
  );
};
export default Textarea
