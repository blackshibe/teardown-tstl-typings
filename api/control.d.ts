/*
    Typings for Teardown Lua API 1.5
    by blackshibe, written 26/06/2024
*/

declare type TInputKey =
	| "esc"
	| "tab"
	| "lmb"
	| "rmb"
	| "mmb"
	| "uparrow"
	| "downarrow"
	| "leftarrow"
	| "rightarrow"
	| "f1"
	| "f2"
	| "f3"
	| "f4"
	| "f5"
	| "f6"
	| "f7"
	| "f8"
	| "f9"
	| "f10"
	| "f11"
	| "f12"
	| "alt"
	| "delete"
	| "home"
	| "end"
	| "pgup"
	| "pgdown"
	| "insert"
	| "space"
	| "shift"
	| "ctrl"
	| "return"
	| "any"
	| "a"
	| "b"
	| "c"
	| "d"
	| "e"
	| "f"
	| "g"
	| "h"
	| "i"
	| "j"
	| "k"
	| "l"
	| "m"
	| "n"
	| "o"
	| "p"
	| "q"
	| "r"
	| "s"
	| "t"
	| "u"
	| "v"
	| "w"
	| "x"
	| "y"
	| "z"
	| "0"
	| "1"
	| "2"
	| "3"
	| "4"
	| "5"
	| "6"
	| "7"
	| "8"
	| "9"
	| "mousedx"
	| "mousedy"
	| "mousewheel"
	| "up"
	| "down"
	| "left"
	| "right"
	| "interact"
	| "flashlight"
	| "jump"
	| "crouch"
	| "usetool"
	| "grab"
	| "handbrake"
	| "map"
	| "pause"
	| "vehicleraise"
	| "vehiclelower"
	| "vehicleaction"
	| "camerax"
	| "cameray"
	| "tool_group_prev"
	| "tool_group_next"
	| "extra0"
	| "extra1"
	| "extra2"
	| "extra3"
	| "extra4"
	| "extra5"
	| "extra6"
	| "photomode"
	| "zoom"
	| "menu_left"
	| "menu_right"
	| "menu_up"
	| "menu_down"
	| "menu_next"
	| "menu_prev"
	| "menu_accept"
	| "menu_cancel";

declare type TTransition = "linear" | "cosine" | "easein" | "easeout" | "bounce";

declare function GetVersion(this: void): string;
declare function HasVersion(this: void, version: string): boolean;

declare function GetTime(): number;
declare function GetTimeStep(): number;

declare function InputLastPressedKey(this: void): string;
declare function InputPressed(this: void, key: TInputKey): boolean;
declare function InputReleased(this: void, key: TInputKey): boolean;
declare function InputDown(this: void, key: TInputKey): boolean;
declare function InputValue(this: void, key: TInputKey): number;
declare function InputClear(this: void, key: TInputKey): void;
declare function InputResetOnTransition(this: void): void;
declare function LastInputDevice(this: void): string;

declare function SetValue(this: void, value: string, transition: TTransition, time: number): string;
declare function SetValueInTable(this: void, t: object, value: string, transition: TTransition, time: number): string;

declare function PauseMenuButton(this: void, title: string): boolean;
