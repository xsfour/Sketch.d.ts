/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSUserDefinedScrubberTouchBarItem<T = any> extends cocoa.NSTouchBarItem, cocoa.NSScrubberDataSourceProtocol, cocoa.NSScrubberDelegateProtocol {
    _validateUserDefinedTouchBarItem<R = void>(): R;
    customizationLabel<R = unknown>(): R;
    view<R = unknown>(): R;
    initWithDictionaryRepresentation<R = unknown, P0 = unknown>(_initWithDictionaryRepresentation: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSUserDefinedScrubberTouchBarItem<T = any> extends cocoa.classes.NSTouchBarItem, cocoa.classes.NSScrubberDataSourceProtocol, cocoa.classes.NSScrubberDelegateProtocol {
      alloc<R = _NSUserDefinedScrubberTouchBarItem>(): R;
      new: <R = _NSUserDefinedScrubberTouchBarItem>() => R;
    }
  }
}
