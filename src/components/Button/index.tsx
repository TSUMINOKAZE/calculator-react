import { FC, PropsWithChildren, ButtonHTMLAttributes, ReactNode } from 'react';
import cn from 'clsx';

import styles from './Button.module.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant: 'dark' | 'primary';
}

const Button: FC<PropsWithChildren<IButton>> = ({ children, variant, className, ...otherProps }) => {
	return (
		<button
			className={cn(styles.btn, styles['btn-' + variant], { className: !!className })}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;
