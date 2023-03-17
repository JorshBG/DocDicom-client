export const Input = ({text, placeholder='', colspan = 1, type, id}) => {

    return (
        <>
            <div className={`mb-2 pt-0.5 rounded bg-gray-200 md:col-span-${colspan}`}>
                <label className={'block text-gray-700 text-sm font-bold mb-2 ml-3'} htmlFor={id}>{text}</label>
                <input type={type} id={id}
                       placeholder={placeholder}
                       className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"/>
            </div>
        </>
    )
}