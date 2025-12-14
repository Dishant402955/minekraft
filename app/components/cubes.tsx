"use client";
import { useStore } from "@/app/hooks/useStore";
import { Cube } from "./cube";

export const Cubes = () => {
	// @ts-ignore
	const cubes = useStore((state) => state.cubes);

	return (
		<>
			{cubes.map(({ key, position, texture }: any) => {
				return <Cube position={position} key={key} texture={texture} />;
			})}
		</>
	);
};
