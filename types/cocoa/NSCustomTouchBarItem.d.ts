/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCustomTouchBarItem<T = any> extends cocoa.NSTouchBarItem {
    setPreferredZOrder<R = void, P0 = number>(_setPreferredZOrder: P0): R;
    preferredPopoverTransposerClass<R = unknown>(): R;
    setPreferredPopoverTransposerClass<R = void, P0 = unknown>(_v: P0): R;
    preferredPopoverTransposerPriority<R = number>(): R;
    setPreferredPopoverTransposerPriority<R = void, P0 = number>(_v: P0): R;
    customizationLabel<R = cocoa.NSString>(): R;
    setCustomizationLabel<R = void, P0 = cocoa.NSString>(_v: P0): R;
    viewController<R = cocoa.NSViewController>(): R;
    setViewController<R = void, P0 = cocoa.NSViewController>(_v: P0): R;
    view<R = cocoa.NSView>(): R;
    setView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    preferredSizeForCustomizationPalette<R = cocoa.CGSize>(): R;
    setPreferredSizeForCustomizationPalette<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    viewForCustomizationPreview<R = cocoa.NSView>(): R;
    setViewForCustomizationPreview<R = void, P0 = cocoa.NSView>(_v: P0): R;
    viewForCustomizationPalette<R = cocoa.NSView>(): R;
    setViewForCustomizationPalette<R = void, P0 = cocoa.NSView>(_v: P0): R;
  }
  namespace classes {
    export interface NSCustomTouchBarItem<T = any> extends cocoa.classes.NSTouchBarItem {
      alloc<R = NSCustomTouchBarItem>(): R;
      new: <R = NSCustomTouchBarItem>() => R;
      automaticallyNotifiesObserversOfViewController<R = boolean>(): R;
      automaticallyNotifiesObserversOfView<R = boolean>(): R;
    }
  }
}

declare const NSCustomTouchBarItem: cocoa.classes.NSCustomTouchBarItem;
