import React, { useState } from 'react';

export default function App() {
	const [texto, setTexto] = useState("Meu lindo texto");

	return (
		<h1 className="titulo">Meu lindo site</h1>
	);
}
