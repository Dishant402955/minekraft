"use client";

import { PointerLockControls } from "@react-three/drei";
import { useEffect, useRef } from "react";

export const FPV = () => {
	const controlsRef = useRef(null);

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			if ((e.target as HTMLElement).closest(".ui-block")) return;

			// @ts-expect-error because nothing works right now i will catch it up in future Promise
			controlsRef.current?.lock();
		};

		document.addEventListener("click", handleClick);
		return () => document.removeEventListener("click", handleClick);
	}, []);

	return <PointerLockControls ref={controlsRef} />;
};
