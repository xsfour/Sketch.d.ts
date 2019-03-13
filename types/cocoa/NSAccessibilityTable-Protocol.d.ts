/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityTableProtocol<T = any> extends NSAccessibilityGroupProtocol {
    accessibilityRows<R = NSArray>(): R;
    accessibilityLabel<R = NSString>(): R;
    accessibilityColumnHeaderUIElements<R = NSArray>(): R;
    accessibilityRowHeaderUIElements<R = NSArray>(): R;
    accessibilityVisibleCells<R = NSArray>(): R;
    accessibilitySelectedCells<R = NSArray>(): R;
    accessibilityHeaderGroup<R = NSString>(): R;
    accessibilitySelectedColumns<R = NSArray>(): R;
    accessibilityVisibleColumns<R = NSArray>(): R;
    accessibilityColumns<R = NSArray>(): R;
    accessibilityVisibleRows<R = NSArray>(): R;
    setAccessibilitySelectedRows<R = void, P0 = NSArray>(_setAccessibilitySelectedRows: P0): R;
    accessibilitySelectedRows<R = NSArray>(): R;
  }
  namespace classes {
    export interface NSAccessibilityTableProtocol<T = any> extends NSAccessibilityGroupProtocol {  }
  }
}
