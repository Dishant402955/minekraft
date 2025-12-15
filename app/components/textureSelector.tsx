"use client";

import { useStore } from "../hooks/useStore";

export const TextureSelector = () => {
	const texture = useStore((s) => s.texture);
	const setTexture = useStore((s) => s.setTexture);
	const deleteMode = useStore((s) => s.deleteMode);

	const textures = ["dirt", "glass", "wood", "log"];

	return (
		<div className="fixed top-4 right-4 z-9999 flex flex-col gap-2 bg-black bg-opacity-70 p-4 rounded-lg text-white">
			{textures.map((t, idx) => (
				<button
					key={t}
					onClick={() => setTexture(t)}
					className={`px-3 py-1 border rounded text-sm ${
						texture === t ? "bg-gray-700" : ""
					}`}
				>
					{t} (Press {idx + 1})
				</button>
			))}

			<div
				className={`px-3 py-1 border rounded text-sm text-center ${
					deleteMode ? "bg-red-700" : "bg-gray-800"
				}`}
			>
				{deleteMode
					? "Delete Mode (Release Delete)"
					: "Build Mode (Press Delete)"}
			</div>
		</div>
	);
};
