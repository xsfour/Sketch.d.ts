/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNormalInspector<T = any> extends cocoa.NSViewController, cocoa.MSStackViewScrollViewDelegateProtocol, cocoa.MSStylePartInspectorDelegateProtocol, cocoa.MSInspectorChildControllerProtocol {
    cxx_destruct<R = void>(): R;
    fixNextResponder<R = void>(): R;
    scheduleNextResponderFixing<R = void>(): R;
    throttleNextResponderFixing<R = boolean>(): R;
    setThrottleNextResponderFixing<R = void, P0 = boolean>(_v: P0): R;
    hasScheduledNextResponderFixing<R = boolean>(): R;
    setHasScheduledNextResponderFixing<R = void, P0 = boolean>(_v: P0): R;
    scrollViewBottomConstraint<R = cocoa.NSLayoutConstraint>(): R;
    setScrollViewBottomConstraint<R = void, P0 = cocoa.NSLayoutConstraint>(_v: P0): R;
    storedPreferences<R = cocoa.NSMutableDictionary>(): R;
    standardInspectors<R = cocoa.MSStandardInspectorViewControllers>(): R;
    footerView<R = cocoa.NSStackView>(): R;
    setFooterView<R = void, P0 = cocoa.NSStackView>(_v: P0): R;
    scrollView<R = cocoa.NSScrollView>(): R;
    setScrollView<R = void, P0 = cocoa.NSScrollView>(_v: P0): R;
    eventHandler<R = cocoa.MSEventHandler>(): R;
    setEventHandler<R = void, P0 = cocoa.MSEventHandler>(_v: P0): R;
    layers<R = cocoa.MSLayerArray>(): R;
    setLayers<R = void, P0 = cocoa.MSLayerArray>(_v: P0): R;
    stackView<R = cocoa.MSInspectorStackView>(): R;
    setStackView<R = void, P0 = cocoa.MSInspectorStackView>(_v: P0): R;
  }
  namespace classes {
    export interface MSNormalInspector<T = any> extends cocoa.classes.NSViewController, cocoa.classes.MSStackViewScrollViewDelegateProtocol, cocoa.classes.MSStylePartInspectorDelegateProtocol, cocoa.classes.MSInspectorChildControllerProtocol {
      alloc<R = MSNormalInspector>(): R;
      new: <R = MSNormalInspector>() => R;
    }
  }
}

declare const MSNormalInspector: cocoa.classes.MSNormalInspector;
