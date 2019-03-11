/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSManagedObjectModel<T = any> {}
  namespace classes {
    export interface NSManagedObjectModel<T = any> {  }
  }
}

declare const NSManagedObjectModel: cocoa.classes.NSManagedObjectModel;
