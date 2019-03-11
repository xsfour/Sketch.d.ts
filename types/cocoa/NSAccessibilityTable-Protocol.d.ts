/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityTableProtocol<T = any> extends cocoa.NSAccessibilityGroupProtocol {
    accessibilityRows<R = cocoa.NSArray>(): R;
    accessibilityLabel<R = cocoa.NSString>(): R;
    accessibilityColumnHeaderUIElements<R = cocoa.NSArray>(): R;
    accessibilityRowHeaderUIElements<R = cocoa.NSArray>(): R;
    accessibilityVisibleCells<R = cocoa.NSArray>(): R;
    accessibilitySelectedCells<R = cocoa.NSArray>(): R;
    accessibilityHeaderGroup<R = cocoa.NSString>(): R;
    accessibilitySelectedColumns<R = cocoa.NSArray>(): R;
    accessibilityVisibleColumns<R = cocoa.NSArray>(): R;
    accessibilityColumns<R = cocoa.NSArray>(): R;
    accessibilityVisibleRows<R = cocoa.NSArray>(): R;
    setAccessibilitySelectedRows<R = void, P0 = cocoa.NSArray>(_setAccessibilitySelectedRows: P0): R;
    accessibilitySelectedRows<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface NSAccessibilityTableProtocol<T = any> extends cocoa.classes.NSAccessibilityGroupProtocol {  }
  }
}

declare const NSAccessibilityTableProtocol: cocoa.classes.NSAccessibilityTableProtocol;
