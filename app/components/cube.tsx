import { useBox } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";
import { textureUrls } from "./textures";
import { NearestFilter, RepeatWrapping } from "three";

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
			<mesh ref={ref}>
				<boxGeometry attach={"geometry"} />
				<meshStandardMaterial attach={"material"} map={currentTexture} />
			</mesh>
		</>
	);
};
