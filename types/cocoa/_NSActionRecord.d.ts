/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSActionRecord<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    initWithAction_target_sender<R = unknown, P0 = string, P1 = unknown, P2 = unknown>(_initWithAction: P0, _target: P1, _sender: P2): R;
    fromMainMenu<R = boolean>(): R;
    canUseResponderChain<R = boolean>(): R;
    actionTitle<R = cocoa.NSString>(): R;
    tag<R = number>(): R;
    action<R = string>(): R;
  }
  namespace classes {
    export interface _NSActionRecord<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSActionRecord>(): R;
      new: <R = _NSActionRecord>() => R;
    }
  }
}
