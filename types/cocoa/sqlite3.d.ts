/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface sqlite3<T = any> {}
  namespace classes {
    export interface sqlite3<T = any> {  }
  }
}

declare const sqlite3: cocoa.classes.sqlite3;
