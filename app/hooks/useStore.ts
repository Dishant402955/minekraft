import { nanoid } from "nanoid";
import { create } from "zustand";

export const useStore = create((set) => ({
	texture: "dirt",
	cubes: [],
	addCube: (x: Number, y: Number, z: Number) => {
		// @ts-ignore
		set((prev) => ({
			cubes: [
				...prev.cubes,
				{
					key: nanoid(),
					position: [x, y, z],
					texture: prev.texture,
				},
			],
		}));
	},
	removeCube: (x: Number, y: Number, z: Number) => {
		// @ts-ignore
		set((prev) => ({
			cubes: prev.cubes.filter((cube: any) => {
				const [X, Y, Z] = cube.position;
				return X !== x || Y !== y || Z !== z;
			}),
		}));
	},
	setTexture: (texture: string) => {
		set(() => ({
			texture: texture,
		}));
	},
	saveWorld: () => {},
	resetWorld: () => {},
}));
