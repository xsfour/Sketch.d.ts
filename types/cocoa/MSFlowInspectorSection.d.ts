/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowInspectorSection<T = any> extends MSBaseInspectorSection, MSCollapsibleHeaderInspectorItemTargetProtocol {
    shouldShowFixedLayerView<R = boolean>(): R;
    isInFlowEventHandler<R = boolean>(): R;
    addFlowAction<R = void, P0 = unknown>(_addFlowAction: P0): R;
    fixedLayerItem<R = MSFlowFixLayerInspectorItem>(): R;
    setFixedLayerItem<R = void, P0 = MSFlowFixLayerInspectorItem>(_v: P0): R;
    flowItem<R = MSFlowInspectorItem>(): R;
    setFlowItem<R = void, P0 = MSFlowInspectorItem>(_v: P0): R;
    headerItem<R = MSFlowHeaderInspectorItem>(): R;
    setHeaderItem<R = void, P0 = MSFlowHeaderInspectorItem>(_v: P0): R;
    initialHeaderItem<R = MSHeaderInspectorItem>(): R;
    setInitialHeaderItem<R = void, P0 = MSHeaderInspectorItem>(_v: P0): R;
  }
  namespace classes {
    export interface MSFlowInspectorSection<T = any> extends MSBaseInspectorSection, MSCollapsibleHeaderInspectorItemTargetProtocol {
      alloc<R = MSFlowInspectorSection>(): R;
      new: <R = MSFlowInspectorSection>() => R;
    }
  }
}

declare const MSFlowInspectorSection: cocoa.classes.MSFlowInspectorSection;
