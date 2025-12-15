import { useStore } from "../hooks/useStore";

export const importWorld = (file: File) => {
	const reader = new FileReader();

	reader.onload = (event) => {
		try {
			const text = event.target?.result;
			if (!text) throw new Error("File is empty");
			const data = JSON.parse(text as string);

			if (!Array.isArray(data)) throw new Error("Invalid world file");

			// Update Zustand store
			const setCubes = useStore.getState().resetWorld; // optional: clears first
			const addCubes = useStore.getState().addCube;

			// Clear existing cubes
			setCubes();

			// Add cubes from file
			data.forEach((cube: any) => {
				const [x, y, z] = cube.position;
				// Use the store’s addCube function so textures are respected
				addCubes(x, y, z);
			});
		} catch (err) {
			console.error("Failed to import world:", err);
		}
	};

	reader.onerror = () => {
		console.error("Error reading file:", reader.error);
	};

	reader.readAsText(file);
};
