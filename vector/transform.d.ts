/*
    Typings for Teardown Lua API 1.5
    by blackshibe, written 26/06/2024
*/

declare type TTransform = { __NOMINAL_TTRANSFORM: true; pos: TVec; rot: TVec };

declare function Transform(this: void, pos: TVec, rot: TVec): TTransform;
declare function TransformToParentPoint(this: void, parent: TTransform, point: TVec): TVec;

// Transform;
// TransformCopy;
// TransformStr;
// TransformToParentTransform;
// TransformToLocalTransform;
// TransformToParentVec;
// TransformToLocalVec;
// TransformToParentPoint;
// TransformToLocalPoint;
