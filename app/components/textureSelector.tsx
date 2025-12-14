"use client";

import { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore";
import { useKeyboard } from "../hooks/useKeyboard";

export const TextureSelector = () => {
	const [visible, setVisible] = useState(false);

	// @ts-ignore
	const activeTexture = useStore((state) => state.texture);
	// @ts-ignore
	const setTexture = useStore((state) => state.setTexture);

	const { texture1, texture2, texture3, texture4 } = useKeyboard();

	useEffect(() => {
		if (texture1) setTexture("dirt");
		else if (texture2) setTexture("glass");
		else if (texture3) setTexture("wood");
		else if (texture4) setTexture("log");
	}, [texture1, texture2, texture3, texture4, setTexture]);

	useEffect(() => {
		setVisible(true);
		const timeout = setTimeout(() => setVisible(false), 2000);
		return () => clearTimeout(timeout);
	}, [activeTexture]);

	return (
		visible && (
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				{activeTexture}
			</div>
		)
	);
};
