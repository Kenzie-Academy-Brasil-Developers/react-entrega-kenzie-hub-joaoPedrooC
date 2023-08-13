import { forwardRef } from 'react';

const Input = forwardRef(({ label, errors, ...rest }, ref) => {
	return (
		<div className="inputContainer">
			<label className="headline">{label}</label>
			<input className="paragraph" ref={ref} {...rest} />
			<p className="errorMessage headline notBold">{errors?.message}</p>
		</div>
	);
});

export default Input;
