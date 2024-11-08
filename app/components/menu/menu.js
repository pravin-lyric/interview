export default function Menu({ position, setEditing, setDisplayMenu }) {
	const { top, left } = position;
	return (
		<div
			style={{
				position: 'absolute',
				top,
				left,
				border: '2px solid red',
				padding: '5px',
				backgroundColor: '#f3f3f3',
				zIndex: '10',
			}}
			onClick={() => {
				setEditing(true);
				setDisplayMenu(false);
			}}
		>
			Edit
		</div>
	);
}
