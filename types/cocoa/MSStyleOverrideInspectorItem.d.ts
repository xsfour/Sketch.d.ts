/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStyleOverrideInspectorItem<T = any> extends cocoa.MSOverrideInspectorItem {
    setDisplaysLabel<R = void, P0 = boolean>(_setDisplaysLabel: P0): R;
    displaysLabel<R = boolean>(): R;
    buildMenu<R = void>(): R;
    menuObjectProvider<R = cocoa.MSForeignObjectProvider>(): R;
    overrideControl<R = cocoa.MSStyleOverridePopupButton>(): R;
    setOverrideControl<R = void, P0 = cocoa.MSStyleOverridePopupButton>(_v: P0): R;
    labelConstraint<R = cocoa.NSLayoutConstraint>(): R;
    setLabelConstraint<R = void, P0 = cocoa.NSLayoutConstraint>(_v: P0): R;
    labelView<R = cocoa.NSControl>(): R;
    setLabelView<R = void, P0 = cocoa.NSControl>(_v: P0): R;
  }
  namespace classes {
    export interface MSStyleOverrideInspectorItem<T = any> extends cocoa.classes.MSOverrideInspectorItem {
      alloc<R = MSStyleOverrideInspectorItem>(): R;
      new: <R = MSStyleOverrideInspectorItem>() => R;
    }
  }
}

declare const MSStyleOverrideInspectorItem: cocoa.classes.MSStyleOverrideInspectorItem;
