/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDirInfoDeserializer<T = any> extends cocoa.NSAKDeserializer {}
  namespace classes {
    export interface NSDirInfoDeserializer<T = any> extends cocoa.classes.NSAKDeserializer {
      alloc<R = NSDirInfoDeserializer>(): R;
      new: <R = NSDirInfoDeserializer>() => R;
    }
  }
}

declare const NSDirInfoDeserializer: cocoa.classes.NSDirInfoDeserializer;
