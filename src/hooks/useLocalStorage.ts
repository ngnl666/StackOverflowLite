import { useState, useEffect } from 'react';

type ValueOrFn<T> = T | (() => T);

export default function useLocalStorage<T>(
	key: string,
	defaultValue: ValueOrFn<T>,
): [T, React.Dispatch<React.SetStateAction<T>>] {
	const [value, setValue] = useState<T>(() => {
		const jsonValue = window.localStorage.getItem(key);
		if (jsonValue != null) return JSON.parse(jsonValue);

		/* If the value is not stored, check if the default value is a function. */
		if (typeof defaultValue === 'function') {
			/* If it is a function, call the function and return the value. */
			return (defaultValue as () => T)();
		} else {
			/* else, return the default value. */
			return defaultValue;
		}
	});

	useEffect(() => {
		/* If the value is undefined, remove the key from localStorage. */
		if (value === undefined) return window.localStorage.removeItem(key);
		window.localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}
