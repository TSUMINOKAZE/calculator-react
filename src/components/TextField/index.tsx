import { FC, InputHTMLAttributes } from 'react';
import cn from 'clsx';

import styles from './TextField.module.scss';

interface ITextField extends InputHTMLAttributes<HTMLInputElement> {}

const TextField: FC<ITextField> = ({ className, ...otherProps }) => {
	return (
		<input
			className={cn(styles['text-field'], { className: !!className })}
			{...otherProps}
			type='text'
		/>
	);
};

export default TextField;
