/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowInspectorItem<T = any> extends cocoa.MSInspectorItem, cocoa.MSInspectorFlowHandlerDelegateProtocol {
    flowAnimationButtons<R = unknown>(): R;
    flowAnimationTypes<R = unknown>(): R;
    validateFlowAnimationButtonForFlow<R = void, P0 = unknown>(_validateFlowAnimationButtonForFlow: P0): R;
    followFlowAction<R = void, P0 = unknown>(_followFlowAction: P0): R;
    changeFlowAnimationAction<R = void, P0 = unknown>(_changeFlowAnimationAction: P0): R;
    flowHandler<R = cocoa.MSInspectorFlowHandler>(): R;
    setFlowHandler<R = void, P0 = cocoa.MSInspectorFlowHandler>(_v: P0): R;
    flowAnimationSlideFromTopButton<R = cocoa.NSButton>(): R;
    setFlowAnimationSlideFromTopButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    flowAnimationSlideFromLeftButton<R = cocoa.NSButton>(): R;
    setFlowAnimationSlideFromLeftButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    flowAnimationSlideFromBottomButton<R = cocoa.NSButton>(): R;
    setFlowAnimationSlideFromBottomButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    flowAnimationSlideFromRightButton<R = cocoa.NSButton>(): R;
    setFlowAnimationSlideFromRightButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    flowAnimationInstantButton<R = cocoa.NSButton>(): R;
    setFlowAnimationInstantButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    flowDestinationButton<R = cocoa.NSPopUpButton>(): R;
    setFlowDestinationButton<R = void, P0 = cocoa.NSPopUpButton>(_v: P0): R;
  }
  namespace classes {
    export interface MSFlowInspectorItem<T = any> extends cocoa.classes.MSInspectorItem, cocoa.classes.MSInspectorFlowHandlerDelegateProtocol {
      alloc<R = MSFlowInspectorItem>(): R;
      new: <R = MSFlowInspectorItem>() => R;
    }
  }
}

declare const MSFlowInspectorItem: cocoa.classes.MSFlowInspectorItem;
