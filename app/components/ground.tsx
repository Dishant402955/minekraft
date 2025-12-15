"use client";

import { usePlane } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";
import { useBlockTextures } from "./textures";
import { NearestFilter, RepeatWrapping } from "three";
import { useStore } from "../hooks/useStore";

export const Ground = () => {
	const [ref] = usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0],
		position: [0, -0.5, 0],
	}));

	// @ts-ignore
	const addCube = useStore((state) => state.addCube);
	const { grass } = useBlockTextures();

	const handleClick = (e: any) => {
		e.stopPropagation();

		const x = Math.round(e.point.x);
		const y = Math.round(e.point.y + 0.5);
		const z = Math.round(e.point.z);

		addCube(x, y, z);
	};

	return (
		<mesh ref={ref} receiveShadow onClick={handleClick}>
			<planeGeometry args={[300, 300]} />
			<meshStandardMaterial map={grass} />
		</mesh>
	);
};
