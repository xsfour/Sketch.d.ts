/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMultipleBorderInspectorViewController<T = any> extends cocoa.MSMultipleColorStylePartInspectorViewController, cocoa.BCPopoverDelegateProtocol {
    views<R = unknown>(): R;
    advancedOptionsApplicable<R = boolean>(): R;
    shouldHideAddStylePartButton<R = boolean>(): R;
    showAdvancedOptionsAction<R = void, P0 = unknown>(_showAdvancedOptionsAction: P0): R;
    addStylePartButton<R = cocoa.NSButton>(): R;
    setAddStylePartButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    thicknessLabel<R = cocoa.MSTextLabelForUpDownField>(): R;
    setThicknessLabel<R = void, P0 = cocoa.MSTextLabelForUpDownField>(_v: P0): R;
    borderOptionsController<R = cocoa.MSBorderOptionsInspectorViewController>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSMultipleBorderInspectorViewController<T = any> extends cocoa.classes.MSMultipleColorStylePartInspectorViewController, cocoa.classes.BCPopoverDelegateProtocol {
      alloc<R = MSMultipleBorderInspectorViewController>(): R;
      new: <R = MSMultipleBorderInspectorViewController>() => R;
    }
  }
}

declare const MSMultipleBorderInspectorViewController: cocoa.classes.MSMultipleBorderInspectorViewController;
