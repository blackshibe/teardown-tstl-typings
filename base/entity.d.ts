/*
    Typings for Teardown Lua API 1.5
    by blackshibe, written 26/06/2024
*/

// FindEntity
// FindEntities
// GetEntityChildren
// GetEntityParent
// SetTag
// RemoveTag
declare function HasTag(this: void, entity: number, tag: string): boolean;
declare function GetTagValue(this: void, entity: number, tag: string): string;
// ListTags
// GetDescription
// SetDescription
// Delete
// IsHandleValid
// GetEntityType
// GetProperty
// SetProperty
