import { useStore } from "@/app/hooks/useStore";

export const importWorld = (file: File) => {
	const reader = new FileReader();

	reader.onload = (event) => {
		try {
			const text = event.target?.result;
			if (!text) throw new Error("File is empty");
			const data = JSON.parse(text as string);

			if (!Array.isArray(data)) throw new Error("Invalid world file");

			const setCubes = useStore.getState().resetWorld;
			const addCubes = useStore.getState().addCube;

			setCubes();

			data.forEach(
				(cube: {
					position: [x: number, y: number, z: number];
					texture: string;
					key: string;
				}) => {
					const [x, y, z] = cube.position;

					addCubes(x, y, z);
				}
			);
		} catch (err) {
			console.error("Failed to import world:", err);
		}
	};

	reader.onerror = () => {
		console.error("Error reading file:", reader.error);
	};

	reader.readAsText(file);
};
