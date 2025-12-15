"use client";

import { PointerLockControls } from "@react-three/drei";
import { useEffect, useRef } from "react";

export const FPV = () => {
	const controlsRef = useRef<any>(null);

	useEffect(() => {
		const handleClick = () => {
			controlsRef.current?.lock();
		};

		document.addEventListener("click", handleClick);
		return () => document.removeEventListener("click", handleClick);
	}, []);

	return <PointerLockControls ref={controlsRef} />;
};
