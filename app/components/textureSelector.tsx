"use client";

import { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore";

export const TextureSelector = () => {
	const [visible, setVisible] = useState(false);
	// @ts-ignore
	const activeTexture = useStore((state) => state.texture);

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
