export default function Menu({ position, setEditing, setDisplayMenu }) {
	const { top, left } = position;
	return (
		<div
			style={{
				position: 'absolute',
				top,
				left,
				border: '2px solid red',
				padding: '20px',
				backgroundColor: 'white',
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
