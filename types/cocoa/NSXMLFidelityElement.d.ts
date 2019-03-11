/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLFidelityElement<T = any> extends cocoa.NSXMLElement {
    setEndWhitespace<R = void, P0 = unknown>(_setEndWhitespace: P0): R;
    setWhitespace<R = void, P0 = unknown>(_setWhitespace: P0): R;
    fidelity<R = number>(): R;
    setFidelity<R = void, P0 = number>(_setFidelity: P0): R;
  }
  namespace classes {
    export interface NSXMLFidelityElement<T = any> extends cocoa.classes.NSXMLElement {
      alloc<R = NSXMLFidelityElement>(): R;
      new: <R = NSXMLFidelityElement>() => R;
    }
  }
}

declare const NSXMLFidelityElement: cocoa.classes.NSXMLFidelityElement;
