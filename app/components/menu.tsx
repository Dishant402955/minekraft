import { useStore } from "../hooks/useStore";

export const Menu = () => {
	// @ts-ignore
	const saveWorld = useStore((state) => state.saveWorld);
	// @ts-ignore
	const resetWorld = useStore((state) => state.resetWorld);

	return (
		<div className="absolute top-2.5 left-2.5 ">
			<button onClick={() => saveWorld()}>Save</button>
			<button onClick={() => resetWorld()}>Reset</button>
		</div>
	);
};
