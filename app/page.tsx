"use client";

import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Ground } from "./components/ground";
import { Player } from "./components/player";
import { FPV } from "./components/FPV";
import { Cubes } from "./components/cubes";
import { TextureSelector } from "./components/textureSelector";
import { Menu } from "./components/menu";
import { useStore } from "./hooks/useStore";
import { useEffect } from "react";
import { Controls } from "./components/Controls";

export default function Home() {
	const loadWorld = useStore((s) => s.loadWorld);

	useEffect(() => {
		loadWorld();
	}, [loadWorld]);

	return (
		<>
			<Controls />
			<Canvas>
				<Sky sunPosition={[100, 100, 20]} />
				<ambientLight intensity={2} />
				<FPV />

				<Physics>
					<Player />
					<Ground />
					<Cubes />
				</Physics>
			</Canvas>
			<div className="absolute top-[50%] left-[50%] text-2xl text-white translate-x-[-50%] translate-y-[-50%]">
				+
			</div>
			<TextureSelector />
			<Menu />
		</>
	);
}
