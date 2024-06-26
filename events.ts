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
	export function ConnectInit(TSTL_Init: () => void) {
		if (forceHas(globalThis, "init")) throw new Error("[TSTL] init function already connected");
		forceWrite(globalThis, "init", TSTL_Init);
	}

	export function ConnectTick(TSTL_Tick: (dt: number) => void) {
		if (forceHas(globalThis, "init")) throw new Error("[TSTL] tick function already connected");
		forceWrite(globalThis, "init", TSTL_Tick);
	}

	export function ConnectUpdate(TSTL_Update: (dt: number) => void) {
		if (forceHas(globalThis, "init")) throw new Error("[TSTL] update function already connected");
		forceWrite(globalThis, "init", TSTL_Update);
	}

	export function ConnectDraw(TSTL_Draw: () => void) {
		if (forceHas(globalThis, "init")) throw new Error("init function already connected");
		forceWrite(globalThis, "init", TSTL_Draw);
	}
}
