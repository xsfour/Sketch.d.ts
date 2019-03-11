/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowInspectorSection<T = any> extends cocoa.MSBaseInspectorSection, cocoa.MSCollapsibleHeaderInspectorItemTargetProtocol {
    shouldShowFixedLayerView<R = boolean>(): R;
    isInFlowEventHandler<R = boolean>(): R;
    addFlowAction<R = void, P0 = unknown>(_addFlowAction: P0): R;
    fixedLayerItem<R = cocoa.MSFlowFixLayerInspectorItem>(): R;
    setFixedLayerItem<R = void, P0 = cocoa.MSFlowFixLayerInspectorItem>(_v: P0): R;
    flowItem<R = cocoa.MSFlowInspectorItem>(): R;
    setFlowItem<R = void, P0 = cocoa.MSFlowInspectorItem>(_v: P0): R;
    headerItem<R = cocoa.MSFlowHeaderInspectorItem>(): R;
    setHeaderItem<R = void, P0 = cocoa.MSFlowHeaderInspectorItem>(_v: P0): R;
    initialHeaderItem<R = cocoa.MSHeaderInspectorItem>(): R;
    setInitialHeaderItem<R = void, P0 = cocoa.MSHeaderInspectorItem>(_v: P0): R;
  }
  namespace classes {
    export interface MSFlowInspectorSection<T = any> extends cocoa.classes.MSBaseInspectorSection, cocoa.classes.MSCollapsibleHeaderInspectorItemTargetProtocol {
      alloc<R = MSFlowInspectorSection>(): R;
      new: <R = MSFlowInspectorSection>() => R;
    }
  }
}

declare const MSFlowInspectorSection: cocoa.classes.MSFlowInspectorSection;
