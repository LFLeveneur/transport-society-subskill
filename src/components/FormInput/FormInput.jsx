// props default value type:

const FormInput = ({ title, id }) => {

    return (
        <div className="form-input" {...(id && (id={id})) || (null)}>
            <span>{title}</span>
            <input type='text' />
        </div>
    );
}
export default FormInput;