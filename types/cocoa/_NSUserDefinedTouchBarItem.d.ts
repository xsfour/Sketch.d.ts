/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSUserDefinedTouchBarItem<T = any> extends cocoa.NSTouchBarItem, cocoa.NSValidatedUserInterfaceItemProtocol {
    _validateUserDefinedTouchBarItem<R = void>(): R;
    _handleAction<R = void, P0 = unknown>(__handleAction: P0): R;
    _longPress<R = void, P0 = unknown>(__longPress: P0): R;
    _click<R = void, P0 = unknown>(__click: P0): R;
    view<R = unknown>(): R;
    customizationLabel<R = unknown>(): R;
    initWithDictionaryRepresentation<R = unknown, P0 = unknown>(_initWithDictionaryRepresentation: P0): R;
    tag<R = number>(): R;
    setTag<R = void, P0 = number>(_v: P0): R;
    imageName<R = cocoa.NSString>(): R;
    setImageName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    label<R = cocoa.NSString>(): R;
    setLabel<R = void, P0 = cocoa.NSString>(_v: P0): R;
    actionName<R = cocoa.NSString>(): R;
    setActionName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    effectiveTarget<R = unknown>(): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
  }
  namespace classes {
    export interface _NSUserDefinedTouchBarItem<T = any> extends cocoa.classes.NSTouchBarItem, cocoa.classes.NSValidatedUserInterfaceItemProtocol {
      alloc<R = _NSUserDefinedTouchBarItem>(): R;
      new: <R = _NSUserDefinedTouchBarItem>() => R;
    }
  }
}
