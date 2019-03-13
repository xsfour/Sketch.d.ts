/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptToOneRelationshipDescription<T = any> extends NSScriptAttributeDescription {
    shouldBecomeAETEPropertyDeclaration<R = boolean>(): R;
  }
  namespace classes {
    export interface NSScriptToOneRelationshipDescription<T = any> extends NSScriptAttributeDescription {
      alloc<R = NSScriptToOneRelationshipDescription>(): R;
      new: <R = NSScriptToOneRelationshipDescription>() => R;
    }
  }
}

declare const NSScriptToOneRelationshipDescription: cocoa.classes.NSScriptToOneRelationshipDescription;
