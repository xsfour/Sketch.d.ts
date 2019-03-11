/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFunctionRowCustomizationFloatingDFRItem<T = any> extends cocoa._NSFunctionRowCustomizationDFRItem {
    isPending<R = boolean>(): R;
    representedItem<R = cocoa.NSTouchBarItem>(): R;
    setRepresentedItem<R = void, P0 = cocoa.NSTouchBarItem>(_v: P0): R;
  }
  namespace classes {
    export interface _NSFunctionRowCustomizationFloatingDFRItem<T = any> extends cocoa.classes._NSFunctionRowCustomizationDFRItem {
      alloc<R = _NSFunctionRowCustomizationFloatingDFRItem>(): R;
      new: <R = _NSFunctionRowCustomizationFloatingDFRItem>() => R;
    }
  }
}
