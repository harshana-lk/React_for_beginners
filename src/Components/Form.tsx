const Form = () => {
  return (
    <form>
      <div className="mb-4">
        <label htmlFor="fullName" className="form-label">
          Full Name
        </label>
        <input type="color" id="fullName" className="form-control" />
      </div>
    </form>
  );
};

export default Form;