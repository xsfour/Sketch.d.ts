/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowHeaderInspectorItem<T = any> extends MSCollapsibleHeaderInspectorItem, MSInspectorFlowHandlerDelegateProtocol {
    isInFlowEventHandler<R = boolean>(): R;
    validateHeaderButtonsForFlow<R = void, P0 = unknown>(_validateHeaderButtonsForFlow: P0): R;
    convertFlowToHotspotAction<R = void, P0 = unknown>(_convertFlowToHotspotAction: P0): R;
    flowHandler<R = MSInspectorFlowHandler>(): R;
    setFlowHandler<R = void, P0 = MSInspectorFlowHandler>(_v: P0): R;
    followFlowButton<R = NSButton>(): R;
    setFollowFlowButton<R = void, P0 = NSButton>(_v: P0): R;
    convertToHotspotButton<R = NSButton>(): R;
    setConvertToHotspotButton<R = void, P0 = NSButton>(_v: P0): R;
    removeFlowButton<R = NSButton>(): R;
    setRemoveFlowButton<R = void, P0 = NSButton>(_v: P0): R;
    addFlowButton<R = NSButton>(): R;
    setAddFlowButton<R = void, P0 = NSButton>(_v: P0): R;
  }
  namespace classes {
    export interface MSFlowHeaderInspectorItem<T = any> extends MSCollapsibleHeaderInspectorItem, MSInspectorFlowHandlerDelegateProtocol {
      alloc<R = MSFlowHeaderInspectorItem>(): R;
      new: <R = MSFlowHeaderInspectorItem>() => R;
    }
  }
}

declare const MSFlowHeaderInspectorItem: cocoa.classes.MSFlowHeaderInspectorItem;
