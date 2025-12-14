import { nanoid } from "nanoid";
import { create } from "zustand";

// @ts-ignore
const getLocaleStorage = (key) => JSON.parse(window.localStorage.getItem(key));
// @ts-ignore
const setLocaleStorage = (key: string, value) =>
	window.localStorage.setItem(key, JSON.stringify(value));

export const useStore = create((set) => ({
	texture: "dirt",
	cubes: getLocaleStorage("cubes") || [],
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
	saveWorld: () => {
		// @ts-ignore
		set((prev) => {
			setLocaleStorage("cubes", prev.cubes);
		});
	},
	resetWorld: () => {
		set(() => ({
			cubes: [],
		}));
	},
}));
