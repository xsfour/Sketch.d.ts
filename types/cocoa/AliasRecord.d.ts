/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AliasRecord<T = any> {}
  namespace classes {
    export interface AliasRecord<T = any> {  }
  }
}

declare const AliasRecord: cocoa.classes.AliasRecord;
