"use client";

import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Ground } from "./components/ground";
import { Player } from "./components/player";
import { FPV } from "./components/FPV";

export default function Home() {
	return (
		<>
			<Canvas>
				<Sky
					// turbidity={0.9}
					// azimuth={0.8}
					// inclination={0.5}
					// rayleigh={0.4}
					sunPosition={[100, 100, 20]}
				/>
				<ambientLight intensity={2} />
				<FPV />
				<Physics>
					<Player />
					<Ground />
				</Physics>
			</Canvas>
			<div className="absolute top-[50%] left-[50%] text-2xl">+</div>
		</>
	);
}
