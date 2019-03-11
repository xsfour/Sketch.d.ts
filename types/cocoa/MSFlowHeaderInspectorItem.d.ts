/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowHeaderInspectorItem<T = any> extends cocoa.MSCollapsibleHeaderInspectorItem, cocoa.MSInspectorFlowHandlerDelegateProtocol {
    isInFlowEventHandler<R = boolean>(): R;
    validateHeaderButtonsForFlow<R = void, P0 = unknown>(_validateHeaderButtonsForFlow: P0): R;
    convertFlowToHotspotAction<R = void, P0 = unknown>(_convertFlowToHotspotAction: P0): R;
    flowHandler<R = cocoa.MSInspectorFlowHandler>(): R;
    setFlowHandler<R = void, P0 = cocoa.MSInspectorFlowHandler>(_v: P0): R;
    followFlowButton<R = cocoa.NSButton>(): R;
    setFollowFlowButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    convertToHotspotButton<R = cocoa.NSButton>(): R;
    setConvertToHotspotButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    removeFlowButton<R = cocoa.NSButton>(): R;
    setRemoveFlowButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    addFlowButton<R = cocoa.NSButton>(): R;
    setAddFlowButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
  }
  namespace classes {
    export interface MSFlowHeaderInspectorItem<T = any> extends cocoa.classes.MSCollapsibleHeaderInspectorItem, cocoa.classes.MSInspectorFlowHandlerDelegateProtocol {
      alloc<R = MSFlowHeaderInspectorItem>(): R;
      new: <R = MSFlowHeaderInspectorItem>() => R;
    }
  }
}

declare const MSFlowHeaderInspectorItem: cocoa.classes.MSFlowHeaderInspectorItem;
