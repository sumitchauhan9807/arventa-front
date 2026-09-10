const FormButton = (props) => {
  return (
    <div className="full submit-row">
      <button type="submit" className="btn btn-fill" style={{ width: '100%' }}>
        {props.label}
      </button>
    </div>
  );
};
export default FormButton
