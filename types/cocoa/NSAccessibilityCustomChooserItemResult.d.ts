/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityCustomChooserItemResult<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    initWithTargetElement_targetRange<R = unknown, P0 = unknown, P1 = unknown>(_initWithTargetElement: P0, _targetRange: P1): R;
    descriptionOverride<R = cocoa.NSString>(): R;
    setDescriptionOverride<R = void, P0 = cocoa.NSString>(_v: P0): R;
    targetRange<R = cocoa.NSValue>(): R;
    setTargetRange<R = void, P0 = cocoa.NSValue>(_v: P0): R;
    targetElement<R = cocoa.NSObject>(): R;
    setTargetElement<R = void, P0 = cocoa.NSObject>(_v: P0): R;
  }
  namespace classes {
    export interface NSAccessibilityCustomChooserItemResult<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSAccessibilityCustomChooserItemResult>(): R;
      new: <R = NSAccessibilityCustomChooserItemResult>() => R;
    }
  }
}

declare const NSAccessibilityCustomChooserItemResult: cocoa.classes.NSAccessibilityCustomChooserItemResult;
