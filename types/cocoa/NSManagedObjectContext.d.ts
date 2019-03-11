/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSManagedObjectContext<T = any> {
    // + NSManagedObjectContext(NSEditorAndEditorRegistrationConformance):
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSManagedObjectContext<T = any> {
      // + NSManagedObjectContext(NSEditorAndEditorRegistrationConformance):
      
    }
  }
}

declare const NSManagedObjectContext: cocoa.classes.NSManagedObjectContext;
