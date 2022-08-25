const FormRadio = ({title, option1, option2}) => {
    return (
        <div className="form-radio">
            <span>{title}</span>
            <div className="form-radio-items">
                <label>
                    <input type="radio" name={title}/>
                    <div className="fr-bullet"></div>
                    {option1}.
                </label>
                <label>
                    <input type="radio" name={title} />
                    <div className="fr-bullet"></div>
                    {option2}.
                </label>
            </div>
        </div>
    );
}
export default FormRadio;