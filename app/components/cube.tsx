"use client";
import { useBox } from "@react-three/cannon";
import { useStore } from "../hooks/useStore";
import { useState } from "react";
import { Texture } from "three";

export const Cube = ({
	position,
	texture,
	textures,
}: {
	position: [number, number, number];
	texture: string;
	textures: Record<string, Texture>;
}) => {
	const [ref] = useBox(() => ({
		type: "Static",
		position,
	}));

	const [isHovered, setIsHovered] = useState(false);
	const addCube = useStore((state) => state.addCube);
	const removeCube = useStore((state) => state.removeCube);
	const deleteMode = useStore((state) => state.deleteMode);

	return (
		<mesh
			ref={ref}
			onPointerMove={(e) => {
				e.stopPropagation();
				setIsHovered(true);
			}}
			onPointerOut={(e) => {
				e.stopPropagation();
				setIsHovered(false);
			}}
			onClick={(e) => {
				e.stopPropagation();
				const face = Math.floor(e.faceIndex! / 2);
				const [x, y, z] = ref.current!.position;

				if (deleteMode) {
					removeCube(x, y, z);
					return;
				}

				if (e.ctrlKey) return removeCube(x, y, z);
				if (face === 0) addCube(x + 1, y, z);
				if (face === 1) addCube(x - 1, y, z);
				if (face === 2) addCube(x, y + 1, z);
				if (face === 3) addCube(x, y - 1, z);
				if (face === 4) addCube(x, y, z + 1);
				if (face === 5) addCube(x, y, z - 1);
			}}
		>
			<boxGeometry />
			<meshStandardMaterial
				map={textures[texture]}
				color={isHovered ? "grey" : "white"}
				transparent
				opacity={texture === "glass" ? 0.7 : 1}
			/>
		</mesh>
	);
};
