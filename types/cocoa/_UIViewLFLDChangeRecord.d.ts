/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _UIViewLFLDChangeRecord<T = any> extends cocoa.NSObject {
    timestamp<R = number>(): R;
  }
  namespace classes {
    export interface _UIViewLFLDChangeRecord<T = any> extends cocoa.classes.NSObject {
      alloc<R = _UIViewLFLDChangeRecord>(): R;
      new: <R = _UIViewLFLDChangeRecord>() => R;
    }
  }
}
