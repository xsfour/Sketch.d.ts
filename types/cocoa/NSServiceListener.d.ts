/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSServiceListener<T = any> extends NSObject {
    _doInvokeServiceIn_msg_pb_userData_error_unhide<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = boolean>(__doInvokeServiceIn: P0, _msg: P1, _pb: P2, _userData: P3, _error: P4, _unhide: P5): R;
    providerRespondingToSelector<R = unknown, P0 = string>(_providerRespondingToSelector: P0): R;
    removeServiceProvider<R = void, P0 = unknown>(_removeServiceProvider: P0): R;
    addServiceProvider<R = void, P0 = unknown>(_addServiceProvider: P0): R;
  }
  namespace classes {
    export interface NSServiceListener<T = any> extends NSObject {
      alloc<R = NSServiceListener>(): R;
      new: <R = NSServiceListener>() => R;
    }
  }
}

declare const NSServiceListener: cocoa.classes.NSServiceListener;
