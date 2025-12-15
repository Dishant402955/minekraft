"use client";

import { usePlane } from "@react-three/cannon";
import { ThreeEvent } from "@react-three/fiber";
import { useBlockTextures } from "@/app/components/textures";
import { useStore } from "@/app/hooks/useStore";

export const Ground = () => {
	const [ref] = usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0],
		position: [0, -0.5, 0],
	}));

	const addCube = useStore((state) => state.addCube);
	const { grass } = useBlockTextures();

	const handleClick = (e: ThreeEvent<globalThis.MouseEvent>) => {
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
