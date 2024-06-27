/*
    Typings for Teardown Lua API 1.5
    by blackshibe, written 26/06/2024
*/

// FindVehicle
declare function FindVehicles(this: void, tag: string, global?: boolean): number[];
// GetVehicleTransform
// GetVehicleExhaustTransforms
// GetVehicleVitalTransforms
// GetVehicleBodies
declare function GetVehicleBody(this: void, vehicle_id: number): number;
// GetVehicleHealth
// GetVehicleParams
// SetVehicleParam
// GetVehicleDriverPos
// DriveVehicle
