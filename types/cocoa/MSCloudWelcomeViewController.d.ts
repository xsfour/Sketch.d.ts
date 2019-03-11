/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudWelcomeViewController<T = any> extends cocoa.MSCloudBaseViewController {
    learnMore<R = void, P0 = unknown>(_learnMore: P0): R;
    signIn<R = void, P0 = unknown>(_signIn: P0): R;
    signUp<R = void, P0 = unknown>(_signUp: P0): R;
    actionView<R = unknown>(): R;
    edgeInsets<R = cocoa.NSEdgeInsets>(): R;
    buttonStackView<R = cocoa.NSStackView>(): R;
    setButtonStackView<R = void, P0 = cocoa.NSStackView>(_v: P0): R;
    infoButton<R = cocoa.MSCursorButton>(): R;
    signupButton<R = cocoa.NSButton>(): R;
    signinButton<R = cocoa.NSButton>(): R;
  }
  namespace classes {
    export interface MSCloudWelcomeViewController<T = any> extends cocoa.classes.MSCloudBaseViewController {
      alloc<R = MSCloudWelcomeViewController>(): R;
      new: <R = MSCloudWelcomeViewController>() => R;
    }
  }
}

declare const MSCloudWelcomeViewController: cocoa.classes.MSCloudWelcomeViewController;
