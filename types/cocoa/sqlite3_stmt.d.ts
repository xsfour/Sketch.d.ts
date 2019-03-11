/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface sqlite3_stmt<T = any> {}
  namespace classes {
    export interface sqlite3_stmt<T = any> {  }
  }
}

declare const sqlite3_stmt: cocoa.classes.sqlite3_stmt;
