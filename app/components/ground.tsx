"use client";

import { usePlane } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";
import { textureUrls } from "./textures";
import { NearestFilter, RepeatWrapping } from "three";
import { useStore } from "../hooks/useStore";

export const Ground = () => {
	const [ref] = usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0],
		position: [0, -0.5, 0],
	}));

	// @ts-ignore
	const addCube = useStore((state) => state.addCube);

	const grassTexture = useTexture(textureUrls.grass);

	grassTexture.magFilter = NearestFilter;
	grassTexture.wrapS = RepeatWrapping;
	grassTexture.wrapT = RepeatWrapping;
	grassTexture.repeat.set(300, 300);

	return (
		<mesh
			ref={ref}
			receiveShadow
			onClick={(e) => {
				e.stopPropagation();
				const [x, y, z] = Object.values(e.point).map((val) => Math.ceil(val));
				addCube(x, y, z);
			}}
		>
			<planeGeometry args={[300, 300]} />
			<meshStandardMaterial map={grassTexture} />
		</mesh>
	);
};
