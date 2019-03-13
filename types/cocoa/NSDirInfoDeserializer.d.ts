/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDirInfoDeserializer<T = any> extends NSAKDeserializer {}
  namespace classes {
    export interface NSDirInfoDeserializer<T = any> extends NSAKDeserializer {
      alloc<R = NSDirInfoDeserializer>(): R;
      new: <R = NSDirInfoDeserializer>() => R;
    }
  }
}

declare const NSDirInfoDeserializer: cocoa.classes.NSDirInfoDeserializer;
