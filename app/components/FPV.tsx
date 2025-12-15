"use client";

import { PointerLockControls } from "@react-three/drei";
import { useEffect, useRef } from "react";

export const FPV = () => {
	const controlsRef = useRef<any>(null);

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			// If the click is inside any element with class "ui-block", ignore
			if ((e.target as HTMLElement).closest(".ui-block")) return;

			controlsRef.current?.lock();
		};

		document.addEventListener("click", handleClick);
		return () => document.removeEventListener("click", handleClick);
	}, []);

	return <PointerLockControls ref={controlsRef} />;
};
