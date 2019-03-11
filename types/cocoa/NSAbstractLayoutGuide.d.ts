/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAbstractLayoutGuide<T = any> extends cocoa.NSObject, cocoa.NSLayoutItemProtocol, cocoa.NSISVariableDelegateProtocol, cocoa.NSCodingProtocol {
    nsis_shouldIntegralizeVariable<R = boolean, P0 = unknown>(_nsis_shouldIntegralizeVariable: P0): R;
    _isDescendantOf<R = boolean, P0 = unknown>(__isDescendantOf: P0): R;
    _snipReferencingConstraints<R = void>(): R;
    dealloc<R = void>(): R;
    initWithConcreteLayoutGuide<R = unknown, P0 = unknown>(_initWithConcreteLayoutGuide: P0): R;
    heightVariable<R = cocoa.NSISVariable>(): R;
    widthVariable<R = cocoa.NSISVariable>(): R;
    minYVariable<R = cocoa.NSISVariable>(): R;
    minXVariable<R = cocoa.NSISVariable>(): R;
    layoutFrame<R = cocoa.CGRect>(): R;
    identifier<R = cocoa.NSString>(): R;
    setIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
    frame<R = cocoa.CGRect>(): R;
    owningView<R = cocoa.NSLayoutItem>(): R;
    setOwningView<R = void, P0 = cocoa.NSLayoutItem>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    nsli_piercingToken<R = number>(): R;
    setNsli_piercingToken<R = void, P0 = number>(_v: P0): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSAbstractLayoutGuide<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSLayoutItemProtocol, cocoa.classes.NSISVariableDelegateProtocol, cocoa.classes.NSCodingProtocol {
      alloc<R = NSAbstractLayoutGuide>(): R;
      new: <R = NSAbstractLayoutGuide>() => R;
    }
  }
}

declare const NSAbstractLayoutGuide: cocoa.classes.NSAbstractLayoutGuide;
