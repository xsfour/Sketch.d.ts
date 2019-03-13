/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSManagedObjectContext<T = any> {
    // + NSManagedObjectContext(NSEditorAndEditorRegistrationConformance):
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
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
