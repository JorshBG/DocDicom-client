export const Input = ({text, placeholder, colspan = 1, type}) => {
    return (
        <>
            <div className={`form-control md:col-span-${colspan}`}>
                <label className="label">
                    <span className="text-lg font-medium">{text}</span>
                </label>
                <input
                    type={type}
                    placeholder={placeholder}
                    className="input input-bordered w-12/12"
                />
            </div>
        </>
    )
}