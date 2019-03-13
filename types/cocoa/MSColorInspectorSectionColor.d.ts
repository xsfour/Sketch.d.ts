/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorSectionColor<T = any> extends MSColorInspectorSection {
    hasAdvancedSettingsNib<R = boolean>(): R;
    setStyleParts<R = void, P0 = unknown>(_setStyleParts: P0): R;
    highlightCurrentColor_forPicker<R = void, P0 = unknown, P1 = unknown>(_highlightCurrentColor: P0, _forPicker: P1): R;
    highlightCurrentColor<R = void>(): R;
    pickedColor<R = MSColor>(): R;
    setPickedColor<R = void, P0 = MSColor>(_v: P0): R;
  }
  namespace classes {
    export interface MSColorInspectorSectionColor<T = any> extends MSColorInspectorSection {
      alloc<R = MSColorInspectorSectionColor>(): R;
      new: <R = MSColorInspectorSectionColor>() => R;
    }
  }
}

declare const MSColorInspectorSectionColor: cocoa.classes.MSColorInspectorSectionColor;
