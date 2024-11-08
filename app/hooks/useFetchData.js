'use client';
import { useState, useEffect } from 'react';

export const useFetchData = (url) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		setLoading(true);
		fetch(url)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('some error');
			})
			.then((data) => {
				setData(data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
			});
	}, [url]);
	return [error, data, loading];
};
