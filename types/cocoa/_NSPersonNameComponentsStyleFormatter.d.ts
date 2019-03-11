/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPersonNameComponentsStyleFormatter<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    _releaseIvars<R = void>(): R;
    annotatedStringFromPersonNameComponents<R = unknown, P0 = unknown>(_annotatedStringFromPersonNameComponents: P0): R;
    _formattedStringFromOrderedKeys_components_attributesByRange<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__formattedStringFromOrderedKeys: P0, _components: P1, _attributesByRange: P2): R;
    _delimiterBetweenString_andString_isPhonetic<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean>(__delimiterBetweenString: P0, _andString: P1, _isPhonetic: P2): R;
    _orderedNonEmptyKeysFromComponents<R = unknown, P0 = unknown>(__orderedNonEmptyKeysFromComponents: P0): R;
    stringFromComponents_attributesByRange<R = unknown, P0 = unknown, P1 = unknown>(_stringFromComponents: P0, _attributesByRange: P1): R;
    fullComponentsAreValid<R = boolean, P0 = unknown>(_fullComponentsAreValid: P0): R;
    initWithMasterFormatter<R = unknown, P0 = unknown>(_initWithMasterFormatter: P0): R;
    fallbackStyleFormatter<R = cocoa._NSPersonNameComponentsStyleFormatter>(): R;
    setFallbackStyleFormatter<R = void, P0 = cocoa._NSPersonNameComponentsStyleFormatter>(_v: P0): R;
    masterFormatter<R = cocoa.NSPersonNameComponentsFormatter>(): R;
    fallbackDescriptor<R = cocoa.NSArray>(): R;
    orderedTemplate<R = cocoa.NSArray>(): R;
    ordering<R = number>(): R;
    setOrdering<R = void, P0 = number>(_v: P0): R;
    orderedKeysOfInterest<R = cocoa.NSArray>(): R;
    isEnabled<R = boolean>(): R;
    shouldIgnoreComponentsContainingSpecialCharacters<R = boolean>(): R;
    shouldFallBack<R = boolean>(): R;
    keysOfInterest<R = cocoa.NSSet>(): R;
    abbreviatedKeys<R = cocoa.NSSet>(): R;
  }
  namespace classes {
    export interface _NSPersonNameComponentsStyleFormatter<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSPersonNameComponentsStyleFormatter>(): R;
      new: <R = _NSPersonNameComponentsStyleFormatter>() => R;
    }
  }
}
