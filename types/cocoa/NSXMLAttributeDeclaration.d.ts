/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLAttributeDeclaration<T = any> extends NSXMLDTDNode {
    enumerations<R = unknown>(): R;
    addEnumeration<R = void, P0 = unknown>(_addEnumeration: P0): R;
    defaultType<R = number>(): R;
    setDefaultType<R = void, P0 = number>(_setDefaultType: P0): R;
    elementName<R = unknown>(): R;
    setElementName<R = void, P0 = unknown>(_setElementName: P0): R;
  }
  namespace classes {
    export interface NSXMLAttributeDeclaration<T = any> extends NSXMLDTDNode {
      alloc<R = NSXMLAttributeDeclaration>(): R;
      new: <R = NSXMLAttributeDeclaration>() => R;
    }
  }
}

declare const NSXMLAttributeDeclaration: cocoa.classes.NSXMLAttributeDeclaration;
