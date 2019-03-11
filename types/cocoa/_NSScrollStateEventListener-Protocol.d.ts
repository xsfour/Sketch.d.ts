/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollStateEventListenerProtocol<T = any> extends cocoa.NSObjectProtocol {
    scrollStateEvent_sender<R = void, P0 = number, P1 = unknown>(_scrollStateEvent: P0, _sender: P1): R;
  }
  namespace classes {
    export interface _NSScrollStateEventListenerProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}
