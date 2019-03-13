/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserActivityDelegateProtocol<T = any> extends NSObjectProtocol {
    userActivity_didReceiveInputStream_outputStream<R = void, P0 = NSUserActivity, P1 = NSInputStream, P2 = NSOutputStream>(_userActivity: P0, _didReceiveInputStream: P1, _outputStream: P2): R;
    userActivityWasContinued<R = void, P0 = NSUserActivity>(_userActivityWasContinued: P0): R;
    userActivityWillSave<R = void, P0 = NSUserActivity>(_userActivityWillSave: P0): R;
  }
  namespace classes {
    export interface NSUserActivityDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
