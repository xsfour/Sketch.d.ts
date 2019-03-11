/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityCustomAction<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    _accessibilityCustomActionIdentifier<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithName_target_selector<R = unknown, P0 = unknown, P1 = unknown, P2 = string>(_initWithName: P0, _target: P1, _selector: P2): R;
    initWithName_handler<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_initWithName: P0, _handler: P1): R;
    selector<R = string>(): R;
    setSelector<R = void, P0 = string>(_v: P0): R;
    handler<R = cocoa.CDUnknownBlockType>(): R;
    setHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    name<R = cocoa.NSString>(): R;
    setName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    target<R = cocoa.NSObject>(): R;
    setTarget<R = void, P0 = cocoa.NSObject>(_v: P0): R;
  }
  namespace classes {
    export interface NSAccessibilityCustomAction<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSAccessibilityCustomAction>(): R;
      new: <R = NSAccessibilityCustomAction>() => R;
    }
  }
}

declare const NSAccessibilityCustomAction: cocoa.classes.NSAccessibilityCustomAction;
