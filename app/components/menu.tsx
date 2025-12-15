"use client";

import { useStore } from "@/app/hooks/useStore";
import { exportWorld } from "@/app/utils/exportWorld";
import { importWorld } from "@/app/utils/importWorld";

export const Menu = () => {
	const saveWorld = useStore((state) => state.saveWorld);
	const resetWorld = useStore((state) => state.resetWorld);
	const cubes = useStore((state) => state.cubes);

	const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) importWorld(file);
	};

	return (
		<div className="ui-block fixed top-4 left-4 z-9999 flex flex-col gap-2 bg-black bg-opacity-70 p-4 rounded-lg shadow-lg text-white">
			<button
				onClick={saveWorld}
				className="px-4 py-2 text-sm border rounded hover:bg-gray-700 cursor-pointer"
			>
				Save
			</button>
			<button
				onClick={resetWorld}
				className="px-4 py-2 text-sm border rounded hover:bg-gray-700 cursor-pointer"
			>
				Reset
			</button>
			<button
				onClick={() => exportWorld(cubes)}
				className="px-4 py-2 text-sm border rounded hover:bg-gray-700 cursor-pointer"
			>
				Export
			</button>
			<label className="px-4 py-2 text-sm border rounded hover:bg-gray-700 cursor-pointer">
				Import
				<input
					type="file"
					accept=".json"
					className="hidden"
					onChange={handleFile}
				/>
			</label>
		</div>
	);
};
