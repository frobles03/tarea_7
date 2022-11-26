export function getStudent(req, res) {
	// student string Nombre y apellido  del estudiante que desarrolló esta API
	// title string Nombre de su  proyecto

	const estudiante={
			student: "Fernando Robles",
			title: "Título del proyecto: Hama beads"
	}

	return res.status(201).send(estudiante);
}

