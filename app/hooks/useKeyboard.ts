import { useCallback, useEffect, useState } from "react";

// @ts-ignore
const actionByKey = (key) => {
	const keyActionMap = {
		ArrowUp: "moveForward",
		ArrowDown: "moveBackward",
		ArrowLeft: "moveLeft",
		ArrowRight: "moveRight",
		KeyW: "moveForward",
		KeyS: "moveBackward",
		KeyA: "moveLeft",
		KeyD: "moveRight",
		Space: "jump",
		Digit1: "dirt",
		Digit2: "grass",
		Digit3: "glass",
		Digit4: "wood",
		Digit5: "log",
		Numpad1: "dirt",
		Numpad2: "grass",
		Numpad3: "glass",
		Numpad4: "wood",
		Numpad5: "log",
	};

	// @ts-ignore
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
		texture5: false,
	});

	const handleKeydown = useCallback((e: KeyboardEvent) => {
		const action = actionByKey(e.code);

		if (action) {
			setActions((prev) => {
				return {
					...prev,
					[action]: true,
				};
			});
		}
	}, []);

	const handleKeyUp = useCallback((e: KeyboardEvent) => {
		const action = actionByKey(e.code);

		if (action) {
			setActions((prev) => {
				return {
					...prev,
					[action]: false,
				};
			});
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
