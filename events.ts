/*
    Typings for Teardown Lua API 1.5
    by blackshibe, written 26/06/2024

    This file is included because these functions must be assigned globally by force. TSTL makes them local functions by default
    and minifiers may break the code even more.
*/

type forceIndex = { [index: string]: any };

function forceWrite<T>(obj: forceIndex, key: string, value: T) {
	obj[key] = value;
}

function forceHas(obj: forceIndex, key: string) {
	return key in obj;
}

export namespace TeardownBindings {
	/**
	 * @param Init The function to be called when the game is initialized
	 * This can only run once as it overwrites the global init function directly! Please use your own logic to manage several connections.
	 */
	export function ConnectInit(Init: () => void) {
		if (forceHas(globalThis, "init")) throw new Error("[TypeScriptToLua] init function already connected");
		forceWrite(globalThis, "init", Init);
	}

	/**
	 * @param Tick The function to be called when the game is initialized
	 * This can only run once as it overwrites the global init function directly! Please use your own logic to manage several connections.
	 */
	export function ConnectTick(Tick: (dt: number) => void) {
		if (forceHas(globalThis, "init")) throw new Error("[TypeScriptToLua] tick function already connected");
		forceWrite(globalThis, "init", Tick);
	}

	/**
	 * @param Update The function to be called when the game is initialized
	 * This can only run once as it overwrites the global init function directly! Please use your own logic to manage several connections.
	 */
	export function ConnectUpdate(Update: (dt: number) => void) {
		if (forceHas(globalThis, "init")) throw new Error("[TypeScriptToLua] update function already connected");
		forceWrite(globalThis, "init", Update);
	}

	/**
	 * @param Draw The function to be called when the game is initialized
	 * This can only run once as it overwrites the global init function directly! Please use your own logic to manage several connections.
	 */
	export function ConnectDraw(Draw: () => void) {
		if (forceHas(globalThis, "init")) throw new Error("[TypeScriptToLua] init function already connected");
		forceWrite(globalThis, "init", Draw);
	}
}
