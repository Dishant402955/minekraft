export const exportWorld = (
	cubes: {
		position: [x: number, y: number, z: number];
		texture: string;
		key: string;
	}[]
) => {
	if (typeof window === "undefined") return;

	const data = JSON.stringify(cubes, null, 2);
	const blob = new Blob([data], { type: "application/json" });
	const url = URL.createObjectURL(blob);

	const link = document.createElement("a");
	link.href = url;
	link.download = "world.json";
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);

	URL.revokeObjectURL(url);
};
