/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSUserDefinedScrubberTouchBarItem<T = any> extends NSTouchBarItem, NSScrubberDataSourceProtocol, NSScrubberDelegateProtocol {
    _validateUserDefinedTouchBarItem<R = void>(): R;
    customizationLabel<R = unknown>(): R;
    view<R = unknown>(): R;
    initWithDictionaryRepresentation<R = unknown, P0 = unknown>(_initWithDictionaryRepresentation: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSUserDefinedScrubberTouchBarItem<T = any> extends NSTouchBarItem, NSScrubberDataSourceProtocol, NSScrubberDelegateProtocol {
      alloc<R = _NSUserDefinedScrubberTouchBarItem>(): R;
      new: <R = _NSUserDefinedScrubberTouchBarItem>() => R;
    }
  }
}
