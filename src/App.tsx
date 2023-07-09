import { FC, useState, ChangeEvent } from 'react';

import TextField from './components/TextField';
import Button from './components/Button';

import { calculate } from './utils/calculate';
import { buttons } from './buttons.data';

import styles from './App.module.scss';

const App: FC = () => {
	const [values, setValues] = useState<[string, string, string]>(['0', '0', '0']); // result, value_1, value_2
	const [mathOperation, setMathOperation] = useState<string>('');
	const [mathExample, setMathExample] = useState<string>('0');

	const changeField = (e: ChangeEvent<HTMLInputElement>): void => {
		const value: string = e.currentTarget.value;

		if (isNaN(+value)) return;

		if (value.startsWith('0.')) return setValues(prev => [value, prev[1], prev[2]]);

		if (value.startsWith('0')) return setValues(prev => [value.replace('0', ''), prev[1], prev[2]]);

		if (mathExample === '0') return setValues(prev => [value, prev[1], prev[2]]);

		if (!mathExample.includes('=')) return setValues(prev => [value, prev[1], '0']);

		if (mathExample.includes('=')) {
			setMathExample('0');
			setValues(prev => [value, prev[1], prev[2]]);
		}
	};

	const handleOperation = (operation: string): void => {
		if (mathExample === '0') {
			setValues(prev => ['0', prev[0], '0']);
			return setMathExample(`${values[0]} ${operation} `);
		}

		if (!mathExample.includes('=')) {
			if (mathExample[mathExample.length - 2] !== operation)
				setMathExample(prev => `${prev.slice(0, prev.length - 2)} ${operation} `);

			setValues(prev => [
				calculate(mathOperation, +prev[1], +prev[0]).toString(),
				prev[1],
				prev[0],
			]);

			return setMathExample(prev => prev + values[0] + ' = ');
		}

		if (mathExample.includes('=')) {
			setMathExample(`${values[0]} ${operation} `);
			return setValues(prev => ['0', prev[0], '0']);
		}
	};

	const handleValue = (value: string): void => {
		if (isNaN(+values[0])) return;

		if (value === '.') return setValues(prev => [prev[0] + value, prev[1], prev[2]]);

		if (values[0].startsWith('0.')) return setValues(prev => [prev[0] + value, prev[1], prev[2]]);

		if (values[0].startsWith('0'))
			return setValues(prev => [values[0].replace('0', '') + value, prev[1], prev[2]]);

		setValues(prev => [prev[0] + value, prev[1], prev[2]]);
	};

	const handleResult = (): void => {
		if (!mathExample.includes('=') && mathExample !== '0') {
			setValues(prev => [
				calculate(mathOperation, +prev[1], +prev[0]).toString(),
				prev[1],
				prev[0],
			]);
			return setMathExample(prev => prev + values[0] + ' = ');
		}
	};

	const cleanEntry = (): void => {
		setValues(prev => ['0', prev[1], prev[2]]);
	};

	const clear = (): void => {
		setValues(['0', '0', '0']);
		setMathExample('0');
	};

	return (
		<div className={styles['board']}>
			<div className={styles['board-header']}>
				<span>{mathExample}</span>
				<TextField
					value={values[0]}
					pattern='[0-9.]*'
					onChange={(e: ChangeEvent<HTMLInputElement>) => changeField(e)}
				/>
			</div>
			<div className={styles['board-btn']}>
				{buttons.map(({ value, variant, title }, idx) => (
					<Button
						key={idx}
						title={title}
						variant={variant}
						onClick={() => {
							if (value === 'C') return clear();
							if (value === 'CE') return cleanEntry();
							if (value === '=') return handleResult();
							if (!isNaN(+value) || value === '.') return handleValue(value);
							handleOperation(value);
							setMathOperation(value);
						}}
					>
						{value}
					</Button>
				))}
			</div>
		</div>
	);
};

export default App;
