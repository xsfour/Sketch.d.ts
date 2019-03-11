/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerPickerMenuBuilder<T = any> extends cocoa.MSMenuBuilder {
    shouldShowSubLayersForGroupInLayerPickerMenu<R = boolean, P0 = unknown>(_shouldShowSubLayersForGroupInLayerPickerMenu: P0): R;
    addLayerItem_toMenu_withInset<R = void, P0 = unknown, P1 = unknown, P2 = number>(_addLayerItem: P0, _toMenu: P1, _withInset: P2): R;
    addChildrenOfGroup_underPoint_toMenu_withInset<R = void, P0 = unknown, P1 = cocoa.CGPoint, P2 = unknown, P3 = number>(_addChildrenOfGroup: P0, _underPoint: P1, _toMenu: P2, _withInset: P3): R;
    updatePickerMenuItem_forPage_atPoint<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CGPoint>(_updatePickerMenuItem: P0, _forPage: P1, _atPoint: P2): R;
  }
  namespace classes {
    export interface MSLayerPickerMenuBuilder<T = any> extends cocoa.classes.MSMenuBuilder {
      alloc<R = MSLayerPickerMenuBuilder>(): R;
      new: <R = MSLayerPickerMenuBuilder>() => R;
    }
  }
}

declare const MSLayerPickerMenuBuilder: cocoa.classes.MSLayerPickerMenuBuilder;
