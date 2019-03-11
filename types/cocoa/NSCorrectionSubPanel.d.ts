/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCorrectionSubPanel<T = any> extends cocoa.NSPanel {
    accessibilityIsHelpAttributeSettable<R = boolean>(): R;
    accessibilityHelpAttribute<R = unknown>(): R;
    accessibilityIsTopLevelUIElementAttributeSettable<R = boolean>(): R;
    accessibilityTopLevelUIElementAttribute<R = unknown>(): R;
    panelAccessibilityParent<R = unknown>(): R;
    setPanelAccessibilityParent<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface NSCorrectionSubPanel<T = any> extends cocoa.classes.NSPanel {
      alloc<R = NSCorrectionSubPanel>(): R;
      new: <R = NSCorrectionSubPanel>() => R;
    }
  }
}

declare const NSCorrectionSubPanel: cocoa.classes.NSCorrectionSubPanel;
