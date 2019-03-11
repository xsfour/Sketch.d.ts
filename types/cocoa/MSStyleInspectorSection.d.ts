/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStyleInspectorSection<T = any> extends cocoa.MSNestedInspectorSection, cocoa.MSStylePartInspectorDelegateProtocol {
    showBorderOptionsAction<R = void, P0 = unknown>(_showBorderOptionsAction: P0): R;
    showFillOptionsAction<R = void, P0 = unknown>(_showFillOptionsAction: P0): R;
    restorePopover<R = void>(): R;
    closeAnyColorPopover<R = void>(): R;
    openPopoverForStylePart_atIndex<R = void, P0 = number, P1 = number>(_openPopoverForStylePart: P0, _atIndex: P1): R;
    indexOfPopoverToRestore<R = cocoa.NSNumber>(): R;
    setIndexOfPopoverToRestore<R = void, P0 = cocoa.NSNumber>(_v: P0): R;
    ownerOfPopoverToRestore<R = cocoa.MSMultipleColorStylePartInspectorViewController>(): R;
    setOwnerOfPopoverToRestore<R = void, P0 = cocoa.MSMultipleColorStylePartInspectorViewController>(_v: P0): R;
    currentControllers<R = cocoa.NSArray>(): R;
    setCurrentControllers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    colorControlsViewController<R = cocoa.MSColorControlsInspectorViewController>(): R;
    setColorControlsViewController<R = void, P0 = cocoa.MSColorControlsInspectorViewController>(_v: P0): R;
    blurViewController<R = cocoa.MSBlurInspectorViewController>(): R;
    setBlurViewController<R = void, P0 = cocoa.MSBlurInspectorViewController>(_v: P0): R;
    innerShadowViewController<R = cocoa.MSMultipleInnerShadowInspectorViewController>(): R;
    setInnerShadowViewController<R = void, P0 = cocoa.MSMultipleInnerShadowInspectorViewController>(_v: P0): R;
    shadowViewController<R = cocoa.MSMultipleShadowInspectorViewController>(): R;
    setShadowViewController<R = void, P0 = cocoa.MSMultipleShadowInspectorViewController>(_v: P0): R;
    borderViewController<R = cocoa.MSMultipleBorderInspectorViewController>(): R;
    setBorderViewController<R = void, P0 = cocoa.MSMultipleBorderInspectorViewController>(_v: P0): R;
    fillViewController<R = cocoa.MSMultipleFillInspectorViewController>(): R;
    setFillViewController<R = void, P0 = cocoa.MSMultipleFillInspectorViewController>(_v: P0): R;
    headerItem<R = cocoa.MSCollapsibleHeaderInspectorItem>(): R;
    setHeaderItem<R = void, P0 = cocoa.MSCollapsibleHeaderInspectorItem>(_v: P0): R;
    hasContent<R = boolean>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSStyleInspectorSection<T = any> extends cocoa.classes.MSNestedInspectorSection, cocoa.classes.MSStylePartInspectorDelegateProtocol {
      alloc<R = MSStyleInspectorSection>(): R;
      new: <R = MSStyleInspectorSection>() => R;
    }
  }
}

declare const MSStyleInspectorSection: cocoa.classes.MSStyleInspectorSection;
