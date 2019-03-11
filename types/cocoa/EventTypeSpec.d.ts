/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface EventTypeSpec<T = any> {}
  namespace classes {
    export interface EventTypeSpec<T = any> {  }
  }
}

declare const EventTypeSpec: cocoa.classes.EventTypeSpec;
