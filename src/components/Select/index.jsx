import { forwardRef, useRef } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const Select = forwardRef(({ label, errors, children, ...rest }, ref) => {
	return (
		<div className="inputContainer">
			<label className="headline">{label}</label>
			<div className="selectContainer">
				<select className="paragraph" {...rest} ref={ref}>
					{children}
				</select>
				<FaAngleDown />
			</div>
			<p>{errors?.message}</p>
		</div>
	);
});

export default Select;
