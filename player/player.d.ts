/*
    Typings for Teardown Lua API 1.5
    by blackshibe, written 26/06/2024
*/

// GetPlayerPos
declare function GetPlayerTransform(this: void): TTransform;
declare function SetPlayerTransform(this: void, transform: TTransform): void;
// SetPlayerZoom
// SetPlayerGroundVelocity
// GetPlayerCameraTransform
// SetPlayerCameraOffsetTransform
// SetPlayerSpawnTransform
// SetPlayerSpawnHealth
// SetPlayerSpawnTool
// GetPlayerVelocity
// SetPlayerVehicle
// SetPlayerVelocity
declare function GetPlayerVehicle(this: void): number;
// IsPlayerGrounded
// GetPlayerGrabShape
// GetPlayerGrabBody
// ReleasePlayerGrab
// GetPlayerPickShape
// GetPlayerPickBody
// GetPlayerInteractShape
// GetPlayerInteractBody
// SetPlayerScreen
// GetPlayerScreen
// SetPlayerHealth
// GetPlayerHealth
// SetPlayerRegenerationState
// RespawnPlayer
// GetPlayerWalkingSpeed
// SetPlayerWalkingSpeed
// GetPlayerParam
// SetPlayerParam
declare function RegisterTool(this: void, name: string, toolName: string, modelPath: string): void;
// GetToolBody
// SetToolTransform
