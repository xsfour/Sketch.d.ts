/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDirInfoSerializer<T = any> extends NSAKSerializer {}
  namespace classes {
    export interface NSDirInfoSerializer<T = any> extends NSAKSerializer {
      alloc<R = NSDirInfoSerializer>(): R;
      new: <R = NSDirInfoSerializer>() => R;
    }
  }
}

declare const NSDirInfoSerializer: cocoa.classes.NSDirInfoSerializer;
