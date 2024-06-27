/*
    Typings for Teardown Lua API 1.5
    by blackshibe, written 26/06/2024
*/

// FindBody
// FindBodies
// GetBodyTransform
// SetBodyTransform
// GetBodyMass
// IsBodyDynamic
// SetBodyDynamic
// SetBodyVelocity
// GetBodyVelocity
// GetBodyVelocityAtPos
// SetBodyAngularVelocity
// GetBodyAngularVelocity
// IsBodyActive
// SetBodyActive
// ApplyBodyImpulse
declare function GetBodyShapes(this: void, body: number): number[];
// GetBodyVehicle
// GetBodyBounds
// GetBodyCenterOfMass
// IsBodyVisible
// IsBodyBroken
// IsBodyJointedToStatic
// DrawBodyOutline
// DrawBodyHighlight
// GetBodyClosestPoint
// ConstrainVelocity
// ConstrainAngularVelocity
// ConstrainPosition
// ConstrainOrientation
// GetWorldBody
