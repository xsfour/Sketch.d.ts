/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUpDownTextField<T = any> extends cocoa.NSTextField, cocoa.NSTextViewDelegateProtocol, cocoa.MSUpDownProtocolProtocol, cocoa.NSTouchBarDelegateProtocol {
    cxx_destruct<R = void>(): R;
    awakeFromNib<R = void>(): R;
    connectToValueAdapter_bindingOptions<R = void, P0 = unknown, P1 = unknown>(_connectToValueAdapter: P0, _bindingOptions: P1): R;
    connectToValueAdapter<R = void, P0 = unknown>(_connectToValueAdapter: P0): R;
    scrubberIndex<R = number>(): R;
    setScrubberIndex<R = void, P0 = number>(_v: P0): R;
    scrubberCount<R = number>(): R;
    setScrubberCount<R = void, P0 = number>(_v: P0): R;
    minimumIncrementValue<R = number>(): R;
    setMinimumIncrementValue<R = void, P0 = number>(_v: P0): R;
    preferredNextKeyView<R = cocoa.NSView>(): R;
    setPreferredNextKeyView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    ownMaximum<R = number>(): R;
    setOwnMaximum<R = void, P0 = number>(_v: P0): R;
    ownMinimum<R = number>(): R;
    setOwnMinimum<R = void, P0 = number>(_v: P0): R;
    hasMaximum<R = boolean>(): R;
    setHasMaximum<R = void, P0 = boolean>(_v: P0): R;
    hasMinimum<R = boolean>(): R;
    setHasMinimum<R = void, P0 = boolean>(_v: P0): R;
    upDownController<R = cocoa.MSUpDownController>(): R;
    setUpDownController<R = void, P0 = cocoa.MSUpDownController>(_v: P0): R;
    refreshDelegate<R = unknown>(): R;
    setRefreshDelegate<R = void, P0 = unknown>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSUpDownTextField<T = any> extends cocoa.classes.NSTextField, cocoa.classes.NSTextViewDelegateProtocol, cocoa.classes.MSUpDownProtocolProtocol, cocoa.classes.NSTouchBarDelegateProtocol {
      alloc<R = MSUpDownTextField>(): R;
      new: <R = MSUpDownTextField>() => R;
    }
  }
}

declare const MSUpDownTextField: cocoa.classes.MSUpDownTextField;
