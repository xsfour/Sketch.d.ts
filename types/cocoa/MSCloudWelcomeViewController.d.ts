/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudWelcomeViewController<T = any> extends MSCloudBaseViewController {
    learnMore<R = void, P0 = unknown>(_learnMore: P0): R;
    signIn<R = void, P0 = unknown>(_signIn: P0): R;
    signUp<R = void, P0 = unknown>(_signUp: P0): R;
    actionView<R = unknown>(): R;
    edgeInsets<R = NSEdgeInsets>(): R;
    buttonStackView<R = NSStackView>(): R;
    setButtonStackView<R = void, P0 = NSStackView>(_v: P0): R;
    infoButton<R = MSCursorButton>(): R;
    signupButton<R = NSButton>(): R;
    signinButton<R = NSButton>(): R;
  }
  namespace classes {
    export interface MSCloudWelcomeViewController<T = any> extends MSCloudBaseViewController {
      alloc<R = MSCloudWelcomeViewController>(): R;
      new: <R = MSCloudWelcomeViewController>() => R;
    }
  }
}

declare const MSCloudWelcomeViewController: cocoa.classes.MSCloudWelcomeViewController;
