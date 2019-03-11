/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface ComponentInstanceRecord<T = any> {}
  namespace classes {
    export interface ComponentInstanceRecord<T = any> {  }
  }
}

declare const ComponentInstanceRecord: cocoa.classes.ComponentInstanceRecord;
