export function CustomRadioButton({ id, label, checked, onChange }) {
    return (
      <label 
        className={`relative flex items-center p-3 rounded-full cursor-pointer ${checked ? 'bg-yellow-100' : 'bg-white-200'}`}
        htmlFor={id}
      >
        <input
          type="radio"
          id={id}
          checked={checked}
          onChange={onChange}
          className="hidden"
        />
        <div className="w-5 h-5 flex-shrink-0 mr-2 rounded-full border-2 border-red-500 flex items-center justify-center">
          {checked && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-red-500">
              <path fillRule="evenodd" d="M8.293 14.293a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414L9 11.586 5.707 8.293a1 1 0 00-1.414 1.414l4 4z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <span className="text-lg">{label}</span>
      </label>
    );
}