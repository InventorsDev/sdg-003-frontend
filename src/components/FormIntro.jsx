const FormIntro = ({name, greet}) => {
    return (
      <div>
        <h2 className="form-name">{name}</h2>
        <p className="form-greet">{greet}</p>
      </div>
    );
}

export default FormIntro;