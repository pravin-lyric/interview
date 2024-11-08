'use client';
import React, { useState, useEffect } from 'react';
import { useFetchData } from '../hooks/useFetchData';
import Menu from './menu/menu';
import Td from './td';

export default function Table() {
	const [error, data, loading] = useFetchData('/api/table');
	console.log(error, data);
	const [displayMenu, setDisplayMenu] = useState(false);
	const [position, setPosition] = useState({});
	const [editId, setEditId] = useState();
	const [column, setColumn] = useState();
	const [editing, setEditing] = useState(false);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		setUsers(data.users);
	}, [data]);

	const handleUserUpdate = (text) => {
		setUsers((users) =>
			users.map((user) => {
				if (user.id === editId) user[column] === text;
				return user;
			}),
		);
	};

	const args = { setPosition, setDisplayMenu, editing, setEditing };

	return (
		<div>
			<table>
				<tbody>
					{users?.map(({ id, firstName, lastName, gender, age }) => (
						<tr key={id}>
							<Td data={{ id, key: 'firstName', value: firstName }} {...args} />
							<Td data={{ id, key: 'lastName', value: lastName }} {...args} />
							<Td data={{ id, key: 'gender', value: gender }} {...args} />
							<Td data={{ id, key: 'age', value: age }} {...args} />
						</tr>
					))}
				</tbody>
			</table>
			{displayMenu && (
				<Menu
					position={position}
					setEditing={setEditing}
					setDisplayMenu={setDisplayMenu}
				/>
			)}
		</div>
	);
}
