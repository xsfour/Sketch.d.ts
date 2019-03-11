/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberSelectionLayoutAxis<T = any> extends cocoa.NSObject, cocoa.NSScrubberSelectionLayoutProtocol {
    itemAlignment<R = number>(): R;
    setItemAlignment<R = void, P0 = number>(_v: P0): R;
    floatingSelection<R = boolean>(): R;
    setFloatingSelection<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSScrubberSelectionLayoutAxis<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSScrubberSelectionLayoutProtocol {
      alloc<R = NSScrubberSelectionLayoutAxis>(): R;
      new: <R = NSScrubberSelectionLayoutAxis>() => R;
    }
  }
}

declare const NSScrubberSelectionLayoutAxis: cocoa.classes.NSScrubberSelectionLayoutAxis;
