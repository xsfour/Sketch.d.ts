/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserActivityDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    userActivity_didReceiveInputStream_outputStream<R = void, P0 = cocoa.NSUserActivity, P1 = cocoa.NSInputStream, P2 = cocoa.NSOutputStream>(_userActivity: P0, _didReceiveInputStream: P1, _outputStream: P2): R;
    userActivityWasContinued<R = void, P0 = cocoa.NSUserActivity>(_userActivityWasContinued: P0): R;
    userActivityWillSave<R = void, P0 = cocoa.NSUserActivity>(_userActivityWillSave: P0): R;
  }
  namespace classes {
    export interface NSUserActivityDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSUserActivityDelegateProtocol: cocoa.classes.NSUserActivityDelegateProtocol;
