import { TextureLoader } from "three";

import { dirtImg, glassImg, grassImg, logImg, woodImg } from "@/public/images";

const dirtTexture = new TextureLoader().load(dirtImg.src);
const grassTexture = new TextureLoader().load(grassImg.src);
const glassTexture = new TextureLoader().load(glassImg.src);
const woodTexture = new TextureLoader().load(woodImg.src);
const logTexture = new TextureLoader().load(logImg.src);
const groundTexture = new TextureLoader().load(grassImg.src);

export {
	dirtTexture,
	grassTexture,
	glassTexture,
	groundTexture,
	logTexture,
	woodTexture,
};
