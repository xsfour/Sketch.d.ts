/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseInspectorSection<T = any> extends cocoa.NSViewController, cocoa.MSInspectorSectionProtocol, cocoa.MSInspectorItemDelegateProtocol {
    cxx_destruct<R = void>(): R;
    doUpdateDisplayedValues<R = void>(): R;
    scheduleUpdate<R = void>(): R;
    separatorInset<R = cocoa.NSEdgeInsets>(): R;
    assignItemLayers<R = void>(): R;
    updateItems<R = void>(): R;
    refreshIfNecessary<R = void, P0 = unknown>(_refreshIfNecessary: P0): R;
    changeTextLayerFont<R = void, P0 = unknown>(_changeTextLayerFont: P0): R;
    items<R = cocoa.NSArray>(): R;
    setItems<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    needsUpdate<R = boolean>(): R;
    setNeedsUpdate<R = void, P0 = boolean>(_v: P0): R;
    throttleUpdate<R = boolean>(): R;
    setThrottleUpdate<R = void, P0 = boolean>(_v: P0): R;
    delegate<R = cocoa.MSInspectorSectionDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSInspectorSectionDelegate>(_v: P0): R;
    layers<R = cocoa.MSLayerArray>(): R;
    setLayers<R = void, P0 = cocoa.MSLayerArray>(_v: P0): R;
    selectionContainsChildrenOfCompoundPath<R = boolean>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSBaseInspectorSection<T = any> extends cocoa.classes.NSViewController, cocoa.classes.MSInspectorSectionProtocol, cocoa.classes.MSInspectorItemDelegateProtocol {
      alloc<R = MSBaseInspectorSection>(): R;
      new: <R = MSBaseInspectorSection>() => R;
    }
  }
}

declare const MSBaseInspectorSection: cocoa.classes.MSBaseInspectorSection;
