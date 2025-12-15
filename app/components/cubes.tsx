"use client";
import { useStore } from "@/app/hooks/useStore";
import { Cube } from "./cube";
import { useBlockTextures } from "./textures";

export const Cubes = () => {
	const cubes = useStore((state) => state.cubes);
	const textures = useBlockTextures();

	return (
		<>
			{cubes.map(({ key, position, texture }) => (
				<Cube
					key={key}
					position={position}
					texture={texture}
					textures={textures}
				/>
			))}
		</>
	);
};
