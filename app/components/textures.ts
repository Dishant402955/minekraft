import { useTexture } from "@react-three/drei";
import { NearestFilter, RepeatWrapping } from "three";
import { dirtImg, grassImg, glassImg, logImg, woodImg } from "@/public/images";

export const useBlockTextures = () => {
	const textures = useTexture({
		dirt: dirtImg.src,
		grass: grassImg.src,
		glass: glassImg.src,
		log: logImg.src,
		wood: woodImg.src,
	});

	Object.values(textures).forEach((t) => {
		t.magFilter = NearestFilter;
		t.wrapS = RepeatWrapping;
		t.wrapT = RepeatWrapping;
		t.repeat.set(1, 1);
	});

	textures.grass.repeat.set(130, 130);

	return textures;
};
