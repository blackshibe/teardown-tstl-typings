/*
    Typings for Teardown Lua API 1.5
    by blackshibe, written 26/06/2024
*/

// FindShape
// FindShapes
// GetShapeLocalTransform
// SetShapeLocalTransform
// GetShapeWorldTransform
// GetShapeBody
// GetShapeJoints
// GetShapeLights
// GetShapeBounds
// SetShapeEmissiveScale
// SetShapeDensity
// GetShapeMaterialAtPosition
// GetShapeMaterialAtIndex
// GetShapeSize
// GetShapeVoxelCount
// IsShapeVisible
// IsShapeBroken
// DrawShapeOutline
// DrawShapeHighlight
declare function SetShapeCollisionFilter(this: void, handle: number, layer: number, mask: number): void;
// CreateShape
// ClearShape
// ResizeShape
// SetShapeBody
// CopyShapeContent
// CopyShapePalette
// GetShapePalette
// GetShapeMaterial
// SetBrush
// DrawShapeLine
// DrawShapeBox
// ExtrudeShape
// TrimShape
// SplitShape
// MergeShape
// IsShapeDisconnected
// IsStaticShapeDetached
// GetShapeClosestPoint
// IsShapeTouching
