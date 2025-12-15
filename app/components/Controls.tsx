"use client";

import { useEffect } from "react";
import { useKeyboard } from "../hooks/useKeyboard";
import { useStore } from "../hooks/useStore";

export const Controls = () => {
	const { texture1, texture2, texture3, texture4 } = useKeyboard();
	const setTexture = useStore((s) => s.setTexture);

	useEffect(() => {
		if (texture1) setTexture("dirt");
		else if (texture2) setTexture("glass");
		else if (texture3) setTexture("wood");
		else if (texture4) setTexture("log");
	}, [texture1, texture2, texture3, texture4, setTexture]);

	return null;
};
