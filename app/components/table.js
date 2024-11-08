'use client';
import React, { useState, useEffect } from 'react';
import { useFetchData } from '../hooks/useFetchData';
import Menu from './menu/menu';

export default function Table() {
	const [error, data, loading] = useFetchData('/api/table');
	console.log(error, data, loading);
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
	console.log(users);
	return (
		<div>
			<table>
				<tbody>
					{users?.map(({ id, firstName, lastName, gender, age }) => (
						<tr key={id}>
							<td
								onContextMenu={(e) => {
									e.preventDefault();
									console.log(e);
									setDisplayMenu(true);
									setEditing(false);
									setPosition({ top: e.clientY, left: e.clientX });
									setEditId(id);
									setColumn('firstName');
								}}
							>
								{editing && editId == id && column === 'firstName' ? (
									<input
										type='text'
										name='name'
										style={{ border: '2px solid red' }}
										value={firstName}
										onChange={(e) => handleUserUpdate(e.target.value)}
										onBlur={(e) => setEditing(false)}
									/>
								) : (
									firstName
								)}
							</td>
							<td>{lastName}</td>
							<td>{gender}</td>
							<td>{age}</td>
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
