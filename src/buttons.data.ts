interface IButtons {
	value: string;
	variant: 'dark' | 'primary';
	title: string;
}

export const buttons: IButtons[] = [
	{
		value: 'C',
		variant: 'primary',
		title: 'Clear',
	},
	{
		value: 'CE',
		variant: 'primary',
		title: 'Clear entry',
	},
	{
		value: '%',
		variant: 'primary',
		title: 'Remainder',
	},
	{
		value: '/',
		variant: 'primary',
		title: 'Division',
	},
	{
		value: '7',
		variant: 'dark',
		title: 'Seven',
	},
	{
		value: '8',
		variant: 'dark',
		title: 'Eight',
	},
	{
		value: '9',
		variant: 'dark',
		title: 'Nine',
	},
	{
		value: '×',
		variant: 'primary',
		title: 'Multiplication',
	},
	{
		value: '4',
		variant: 'dark',
		title: 'Four',
	},
	{
		value: '5',
		variant: 'dark',
		title: 'Five',
	},
	{
		value: '6',
		variant: 'dark',
		title: 'Six',
	},
	{
		value: '-',
		variant: 'primary',
		title: 'Subtraction',
	},
	{
		value: '1',
		variant: 'dark',
		title: 'One',
	},
	{
		value: '2',
		variant: 'dark',
		title: 'Two',
	},
	{
		value: '3',
		variant: 'dark',
		title: 'Three',
	},
	{
		value: '+',
		variant: 'primary',
		title: 'Addition',
	},
	{
		value: '0',
		variant: 'dark',
		title: 'Zero',
	},
	{
		value: '.',
		variant: 'dark',
		title: 'Dot',
	},
	{
		value: '=',
		variant: 'primary',
		title: 'Result',
	},
];
