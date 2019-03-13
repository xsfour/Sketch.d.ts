/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFunctionRowCustomizationFloatingDFRItem<T = any> extends _NSFunctionRowCustomizationDFRItem {
    isPending<R = boolean>(): R;
    representedItem<R = NSTouchBarItem>(): R;
    setRepresentedItem<R = void, P0 = NSTouchBarItem>(_v: P0): R;
  }
  namespace classes {
    export interface _NSFunctionRowCustomizationFloatingDFRItem<T = any> extends _NSFunctionRowCustomizationDFRItem {
      alloc<R = _NSFunctionRowCustomizationFloatingDFRItem>(): R;
      new: <R = _NSFunctionRowCustomizationFloatingDFRItem>() => R;
    }
  }
}
