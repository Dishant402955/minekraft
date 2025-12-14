import { useBox } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";
import { textureUrls } from "./textures";
import { NearestFilter, RepeatWrapping } from "three";
import { useStore } from "../hooks/useStore";
import { useState } from "react";

export const Cube = ({
	position,
	texture,
}: {
	position: any;
	texture: string;
}) => {
	const [ref] = useBox(() => ({
		type: "Static",
		position,
	}));

	const [isHovered, setIsHovered] = useState(false);
	// @ts-ignore
	const addCube = useStore((state) => state.addCube);
	// @ts-ignore
	const removeCube = useStore((state) => state.removeCube);

	const textureMap = {
		dirt: textureUrls.dirt,
		glass: textureUrls.glass,
		grass: textureUrls.grass,
		log: textureUrls.log,
		wood: textureUrls.wood,
	};

	// @ts-ignore
	const currentTexture = useTexture(textureMap[texture]);

	currentTexture.magFilter = NearestFilter;
	currentTexture.wrapS = RepeatWrapping;
	currentTexture.wrapT = RepeatWrapping;
	currentTexture.repeat.set(1, 1);

	return (
		<>
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

					// @ts-ignore
					const clickedFace = Math.floor(e.faceIndex / 2);

					const [x, y, z] = ref.current.position;

					if (e.ctrlKey) {
						removeCube(x, y, z);
						return;
					} else if (clickedFace === 0) {
						addCube(x + 1, y, z);
						return;
					} else if (clickedFace === 1) {
						addCube(x - 1, y, z);
						return;
					} else if (clickedFace === 2) {
						addCube(x, y + 1, z);
						return;
					} else if (clickedFace === 3) {
						addCube(x, y - 1, z);
						return;
					} else if (clickedFace === 4) {
						addCube(x, y, z + 1);
						return;
					} else if (clickedFace === 5) {
						addCube(x, y, z - 1);
						return;
					}
				}}
			>
				<boxGeometry attach={"geometry"} />
				<meshStandardMaterial
					attach={"material"}
					map={currentTexture}
					color={isHovered ? "grey" : "white"}
					transparent={true}
					opacity={texture === "glass" ? 0.9 : 1}
				/>
			</mesh>
		</>
	);
};
