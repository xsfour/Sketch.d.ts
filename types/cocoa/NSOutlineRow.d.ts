/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOutlineRow<T = any> extends cocoa.NSTableRow {
    _accessibilityDisplaysDisclosureTriangleForRow<R = boolean, P0 = number>(__accessibilityDisplaysDisclosureTriangleForRow: P0): R;
    _outlineTableColumnIndex<R = number>(): R;
    accessibilityIsDisclosureLevelAttributeSettable<R = boolean>(): R;
    accessibilityDisclosureLevelAttribute<R = unknown>(): R;
    accessibilityIsDisclosedByRowAttributeSettable<R = boolean>(): R;
    accessibilityDisclosedByRowAttribute<R = unknown>(): R;
    accessibilityIsDisclosedRowsAttributeSettable<R = boolean>(): R;
    accessibilityDisclosedRowsAttribute<R = unknown>(): R;
    accessibilitySetDisclosingAttribute<R = void, P0 = unknown>(_accessibilitySetDisclosingAttribute: P0): R;
    accessibilityIsDisclosingAttributeSettable<R = boolean>(): R;
    accessibilityDisclosingAttribute<R = unknown>(): R;
  }
  namespace classes {
    export interface NSOutlineRow<T = any> extends cocoa.classes.NSTableRow {
      alloc<R = NSOutlineRow>(): R;
      new: <R = NSOutlineRow>() => R;
    }
  }
}

declare const NSOutlineRow: cocoa.classes.NSOutlineRow;
