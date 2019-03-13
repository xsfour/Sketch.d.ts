/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNibAXRelationshipConnector<T = any> extends NSNibConnector {
    _isAXConnector<R = boolean>(): R;
  }
  namespace classes {
    export interface NSNibAXRelationshipConnector<T = any> extends NSNibConnector {
      alloc<R = NSNibAXRelationshipConnector>(): R;
      new: <R = NSNibAXRelationshipConnector>() => R;
    }
  }
}

declare const NSNibAXRelationshipConnector: cocoa.classes.NSNibAXRelationshipConnector;
