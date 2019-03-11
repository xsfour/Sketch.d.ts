/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSXMLElementWrapper<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    addChildWrapper<R = void, P0 = unknown>(_addChildWrapper: P0): R;
    addChild<R = void, P0 = unknown>(_addChild: P0): R;
    href<R = unknown>(): R;
    setHref<R = void, P0 = unknown>(_setHref: P0): R;
    setAttributeFloat_forKey<R = void, P0 = number, P1 = unknown>(_setAttributeFloat: P0, _forKey: P1): R;
    attributeFloatForKey<R = number, P0 = unknown>(_attributeFloatForKey: P0): R;
    setAttributeString_forKey<R = void, P0 = unknown, P1 = unknown>(_setAttributeString: P0, _forKey: P1): R;
    attributeStringForKey<R = unknown, P0 = unknown>(_attributeStringForKey: P0): R;
    svgAttributeNameForKey<R = unknown, P0 = unknown>(_svgAttributeNameForKey: P0): R;
    initWithElement<R = unknown, P0 = unknown>(_initWithElement: P0): R;
    initWithName<R = unknown, P0 = unknown>(_initWithName: P0): R;
    element<R = cocoa.NSXMLElement>(): R;
    setElement<R = void, P0 = cocoa.NSXMLElement>(_v: P0): R;
    style<R = cocoa.NSString>(): R;
    setStyle<R = void, P0 = cocoa.NSString>(_v: P0): R;
    svgClass<R = cocoa.NSString>(): R;
    setSvgClass<R = void, P0 = cocoa.NSString>(_v: P0): R;
    svgId<R = cocoa.NSString>(): R;
    setSvgId<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface MSXMLElementWrapper<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSXMLElementWrapper>(): R;
      new: <R = MSXMLElementWrapper>() => R;
      resolveInstanceMethod<R = boolean, P0 = string>(_resolveInstanceMethod: P0): R;
      element<R = unknown>(): R;
      elementName<R = unknown>(): R;
    }
  }
}

declare const MSXMLElementWrapper: cocoa.classes.MSXMLElementWrapper;
