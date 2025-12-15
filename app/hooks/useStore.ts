import { nanoid } from "nanoid";
import { create } from "zustand";

type Cube = {
	key: string;
	position: [number, number, number];
	texture: string;
};

type Store = {
	texture: string;
	cubes: Cube[];
	addCube: (x: number, y: number, z: number) => void;
	removeCube: (x: number, y: number, z: number) => void;
	setTexture: (texture: string) => void;
	loadWorld: () => void;
	saveWorld: () => void;
	resetWorld: () => void;
};

export const useStore = create<Store>((set, get) => ({
	texture: "dirt",
	cubes: [],

	addCube: (x, y, z) => {
		const { cubes, texture } = get();
		set({
			cubes: [
				...cubes,
				{
					key: nanoid(),
					position: [x, y, z],
					texture,
				},
			],
		});
	},

	removeCube: (x, y, z) =>
		set((state) => ({
			cubes: state.cubes.filter(
				(c) => c.position[0] !== x || c.position[1] !== y || c.position[2] !== z
			),
		})),

	setTexture: (texture) => set({ texture }),

	loadWorld: () => {
		if (typeof window === "undefined") return;
		const saved = localStorage.getItem("cubes");
		if (saved) {
			set({ cubes: JSON.parse(saved) });
		}
	},

	saveWorld: () => {
		if (typeof window === "undefined") return;
		localStorage.setItem("cubes", JSON.stringify(get().cubes));
	},

	resetWorld: () => {
		set({ cubes: [] });
		localStorage.setItem("cubes", JSON.stringify(get().cubes));
	},
}));
