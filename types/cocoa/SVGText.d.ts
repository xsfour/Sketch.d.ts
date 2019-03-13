/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGText<T = any> extends _SVGText {
    doubleValueFromXML_attributeWithName_orParent<R = number, P0 = unknown, P1 = unknown, P2 = unknown>(_doubleValueFromXML: P0, _attributeWithName: P1, _orParent: P2): R;
  }
  namespace classes {
    export interface SVGText<T = any> extends _SVGText {
      alloc<R = SVGText>(): R;
      new: <R = SVGText>() => R;
    }
  }
}

declare const SVGText: cocoa.classes.SVGText;
