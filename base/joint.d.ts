/*
    Typings for Teardown Lua API 1.5
    by blackshibe, written 26/06/2024
*/

declare function GetShapeJoints(this: void, body: number): number[];

// FindJoint
// FindJoints
// IsJointBroken
// GetJointType
// GetJointOtherShape
declare function GetJointShapes(this: void, joint: number): number[];
declare function SetJointMotor(this: void, joint: number, velocity: number, strength?: number): void;
// SetJointMotorTarget
// GetJointLimits
// GetJointMovement
declare function GetJointedBodies(this: void, joint: number): number[];
// DetachJointFromShape
// GetRopeNumberOfPoints
// GetRopePointPosition
// GetRopeBounds
// BreakRope
