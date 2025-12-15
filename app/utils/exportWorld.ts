export const exportWorld = (cubes: any[]) => {
	if (typeof window === "undefined") return;

	const data = JSON.stringify(cubes, null, 2); // pretty print JSON
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
