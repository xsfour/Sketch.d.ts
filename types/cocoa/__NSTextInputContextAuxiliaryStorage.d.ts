/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSTextInputContextAuxiliaryStorage<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    initWithTextInputContext<R = unknown, P0 = unknown>(_initWithTextInputContext: P0): R;
    trackpadHandwritingPopoverTouchBarItem<R = NSPopoverTouchBarItem>(): R;
    setTrackpadHandwritingPopoverTouchBarItem<R = void, P0 = NSPopoverTouchBarItem>(_v: P0): R;
    pressAndHoldPopoverTouchBarItem<R = NSPopoverTouchBarItem>(): R;
    setPressAndHoldPopoverTouchBarItem<R = void, P0 = NSPopoverTouchBarItem>(_v: P0): R;
    characterPickerViewController<R = NSViewController>(): R;
    setCharacterPickerViewController<R = void, P0 = NSViewController>(_v: P0): R;
    keyboardInputSourceViewController<R = NSViewController>(): R;
    setKeyboardInputSourceViewController<R = void, P0 = NSViewController>(_v: P0): R;
    functionRowItemIdentifiers<R = NSArray>(): R;
    setFunctionRowItemIdentifiers<R = void, P0 = NSArray>(_v: P0): R;
    inputContext<R = NSTextInputContext>(): R;
    trackpadHandwritingTouchBarItemViewController<R = NSViewController>(): R;
    setTrackpadHandwritingTouchBarItemViewController<R = void, P0 = NSViewController>(_v: P0): R;
    pressAndHoldTouchBarItemViewController<R = NSViewController>(): R;
    setPressAndHoldTouchBarItemViewController<R = void, P0 = NSViewController>(_v: P0): R;
    keyboardInputSourcePopoverTouchBarItem<R = NSPopoverTouchBarItem>(): R;
    characterPickerPopoverTouchBarItem<R = NSPopoverTouchBarItem>(): R;
    setCharacterPickerPopoverTouchBarItem<R = void, P0 = NSPopoverTouchBarItem>(_v: P0): R;
  }
  namespace classes {
    export interface __NSTextInputContextAuxiliaryStorage<T = any> extends NSObject {
      alloc<R = __NSTextInputContextAuxiliaryStorage>(): R;
      new: <R = __NSTextInputContextAuxiliaryStorage>() => R;
    }
  }
}
