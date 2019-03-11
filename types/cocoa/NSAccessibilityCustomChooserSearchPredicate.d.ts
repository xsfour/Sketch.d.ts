/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityCustomChooserSearchPredicate<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    filterText<R = cocoa.NSString>(): R;
    setFilterText<R = void, P0 = cocoa.NSString>(_v: P0): R;
    searchDirection<R = number>(): R;
    setSearchDirection<R = void, P0 = number>(_v: P0): R;
    currentItem<R = cocoa.NSAccessibilityCustomChooserItemResult>(): R;
    setCurrentItem<R = void, P0 = cocoa.NSAccessibilityCustomChooserItemResult>(_v: P0): R;
  }
  namespace classes {
    export interface NSAccessibilityCustomChooserSearchPredicate<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSAccessibilityCustomChooserSearchPredicate>(): R;
      new: <R = NSAccessibilityCustomChooserSearchPredicate>() => R;
    }
  }
}

declare const NSAccessibilityCustomChooserSearchPredicate: cocoa.classes.NSAccessibilityCustomChooserSearchPredicate;
