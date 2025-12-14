"use client";

import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

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
			</Canvas>
		</>
	);
}
