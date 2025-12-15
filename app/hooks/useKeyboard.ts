import { useCallback, useEffect, useState } from "react";

const actionByKey = (key: string) => {
	const keyActionMap: Record<string, string> = {
		ArrowUp: "moveForward",
		ArrowDown: "moveBackward",
		ArrowLeft: "moveLeft",
		ArrowRight: "moveRight",
		KeyW: "moveForward",
		KeyS: "moveBackward",
		KeyA: "moveLeft",
		KeyD: "moveRight",
		Space: "jump",

		Digit1: "texture1",
		Digit2: "texture2",
		Digit3: "texture3",
		Digit4: "texture4",
		Digit5: "texture5",

		Numpad1: "texture1",
		Numpad2: "texture2",
		Numpad3: "texture3",
		Numpad4: "texture4",
		Numpad5: "texture5",
	};

	return keyActionMap[key];
};

export const useKeyboard = () => {
	const [actions, setActions] = useState({
		moveForward: false,
		moveBackward: false,
		moveLeft: false,
		moveRight: false,
		jump: false,
		texture1: false,
		texture2: false,
		texture3: false,
		texture4: false,
	});

	const handleKeydown = useCallback((e: KeyboardEvent) => {
		const action = actionByKey(e.code);
		if (action) {
			setActions((prev) => ({ ...prev, [action]: true }));
		}
	}, []);

	const handleKeyUp = useCallback((e: KeyboardEvent) => {
		const action = actionByKey(e.code);
		if (action) {
			setActions((prev) => ({ ...prev, [action]: false }));
		}
	}, []);

	useEffect(() => {
		document.addEventListener("keydown", handleKeydown);
		document.addEventListener("keyup", handleKeyUp);
		return () => {
			document.removeEventListener("keydown", handleKeydown);
			document.removeEventListener("keyup", handleKeyUp);
		};
	}, [handleKeydown, handleKeyUp]);

	return actions;
};
