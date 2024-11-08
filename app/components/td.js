import { useState } from 'react';
import Menu from './menu/menu';

export default function Td({
	data,
	setPosition,
	setDisplayMenu,
	setEditing,
	editing,
}) {
	const { id, key, value } = data;
	const [local, setLocal] = useState(value);
	const [editId, setEditId] = useState();

	return (
		<>
			<td
				onContextMenu={(e) => {
					e.preventDefault();
					console.log(e);
					setDisplayMenu(true);
					setEditing(false);
					setPosition({ top: e.clientY, left: e.clientX });
					setEditId(id);
				}}
				style={{
					padding: '5px',
					width: '200px',
					padding: '10px 0',
					backgroundColor: `#ffffff`,
					borderBottom: '2px solid #000000',
				}}
			>
				{editing && editId === id ? (
					<input
						autoFocus
						type='text'
						name='name'
						style={{ border: '2px solid red' }}
						value={local}
						onChange={(e) => setLocal(e.target.value)}
						onBlur={(e) => {
							setEditing(false);
							setEditId(null);
						}} // dispatch change save here as well
					/>
				) : (
					local
				)}
			</td>
		</>
	);
}
