/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMultipleFillInspectorViewController<T = any> extends cocoa.MSMultipleColorStylePartInspectorViewController, cocoa.MSInspectorSectionProtocol, cocoa.BCPopoverDelegateProtocol {
    traitsForAvancedOptions<R = number>(): R;
    shouldHideAddStylePartButton<R = boolean>(): R;
    showAdvancedOptionsAction<R = void, P0 = unknown>(_showAdvancedOptionsAction: P0): R;
    popover<R = cocoa.BCPopover>(): R;
    setPopover<R = void, P0 = cocoa.BCPopover>(_v: P0): R;
    advancedOptionsButton<R = cocoa.NSButton>(): R;
    setAdvancedOptionsButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    addStylePartButton<R = cocoa.NSButton>(): R;
    setAddStylePartButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    opacityLabel<R = cocoa.MSTextLabelForUpDownField>(): R;
    setOpacityLabel<R = void, P0 = cocoa.MSTextLabelForUpDownField>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSMultipleFillInspectorViewController<T = any> extends cocoa.classes.MSMultipleColorStylePartInspectorViewController, cocoa.classes.MSInspectorSectionProtocol, cocoa.classes.BCPopoverDelegateProtocol {
      alloc<R = MSMultipleFillInspectorViewController>(): R;
      new: <R = MSMultipleFillInspectorViewController>() => R;
    }
  }
}

declare const MSMultipleFillInspectorViewController: cocoa.classes.MSMultipleFillInspectorViewController;
