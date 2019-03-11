/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStylePartInspectorViewController<T = any> extends cocoa.NSViewController, cocoa.MSInspectorSectionProtocol, cocoa.NSWindowDelegateProtocol {
    cxx_destruct<R = void>(): R;
    updateDisplayedValues<R = void>(): R;
    closePopover<R = void>(): R;
    didGetAddedToInspector<R = void>(): R;
    hasEnabledStyle<R = boolean>(): R;
    prepare<R = void>(): R;
    supportedActionsForLayers<R = number, P0 = unknown>(_supportedActionsForLayers: P0): R;
    awakeFromNib<R = void>(): R;
    initWithDelegate<R = unknown, P0 = unknown>(_initWithDelegate: P0): R;
    prepareForReuse<R = void>(): R;
    index<R = number>(): R;
    setIndex<R = void, P0 = number>(_v: P0): R;
    delegate<R = cocoa.MSStylePartInspectorDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSStylePartInspectorDelegate>(_v: P0): R;
    arrayController<R = cocoa.NSArrayController>(): R;
    setArrayController<R = void, P0 = cocoa.NSArrayController>(_v: P0): R;
    styleParts<R = cocoa.NSArray>(): R;
    setStyleParts<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    layers<R = cocoa.NSArray>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSStylePartInspectorViewController<T = any> extends cocoa.classes.NSViewController, cocoa.classes.MSInspectorSectionProtocol, cocoa.classes.NSWindowDelegateProtocol {
      alloc<R = MSStylePartInspectorViewController>(): R;
      new: <R = MSStylePartInspectorViewController>() => R;
      reusableControllerArray<R = unknown>(): R;
      stylePartViewController<R = unknown>(): R;
    }
  }
}

declare const MSStylePartInspectorViewController: cocoa.classes.MSStylePartInspectorViewController;
