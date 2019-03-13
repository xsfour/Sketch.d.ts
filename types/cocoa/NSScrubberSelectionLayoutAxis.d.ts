/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberSelectionLayoutAxis<T = any> extends NSObject, NSScrubberSelectionLayoutProtocol {
    itemAlignment<R = number>(): R;
    setItemAlignment<R = void, P0 = number>(_v: P0): R;
    floatingSelection<R = boolean>(): R;
    setFloatingSelection<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSScrubberSelectionLayoutAxis<T = any> extends NSObject, NSScrubberSelectionLayoutProtocol {
      alloc<R = NSScrubberSelectionLayoutAxis>(): R;
      new: <R = NSScrubberSelectionLayoutAxis>() => R;
    }
  }
}

declare const NSScrubberSelectionLayoutAxis: cocoa.classes.NSScrubberSelectionLayoutAxis;
