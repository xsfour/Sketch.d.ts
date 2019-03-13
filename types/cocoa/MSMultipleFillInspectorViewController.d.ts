/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMultipleFillInspectorViewController<T = any> extends MSMultipleColorStylePartInspectorViewController, MSInspectorSectionProtocol, BCPopoverDelegateProtocol {
    traitsForAvancedOptions<R = number>(): R;
    shouldHideAddStylePartButton<R = boolean>(): R;
    showAdvancedOptionsAction<R = void, P0 = unknown>(_showAdvancedOptionsAction: P0): R;
    popover<R = BCPopover>(): R;
    setPopover<R = void, P0 = BCPopover>(_v: P0): R;
    advancedOptionsButton<R = NSButton>(): R;
    setAdvancedOptionsButton<R = void, P0 = NSButton>(_v: P0): R;
    addStylePartButton<R = NSButton>(): R;
    setAddStylePartButton<R = void, P0 = NSButton>(_v: P0): R;
    opacityLabel<R = MSTextLabelForUpDownField>(): R;
    setOpacityLabel<R = void, P0 = MSTextLabelForUpDownField>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSMultipleFillInspectorViewController<T = any> extends MSMultipleColorStylePartInspectorViewController, MSInspectorSectionProtocol, BCPopoverDelegateProtocol {
      alloc<R = MSMultipleFillInspectorViewController>(): R;
      new: <R = MSMultipleFillInspectorViewController>() => R;
    }
  }
}

declare const MSMultipleFillInspectorViewController: cocoa.classes.MSMultipleFillInspectorViewController;
