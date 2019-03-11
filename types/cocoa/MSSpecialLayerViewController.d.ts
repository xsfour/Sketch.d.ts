/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSpecialLayerViewController<T = any> extends cocoa.MSNestedInspectorSection, cocoa.MSSymbolInstanceSectionDelegateProtocol, cocoa.NSMenuDelegateProtocol {
    regularLayerInspectorSections<R = unknown>(): R;
    externalLayerInspectorSections<R = unknown>(): R;
    inspectorsWithProperContent<R = unknown>(): R;
    layerOrContentsOfLayer_ifKindOfClass<R = unknown, P0 = unknown, P1 = unknown>(_layerOrContentsOfLayer: P0, _ifKindOfClass: P1): R;
    sectionInterfaceCache<R = cocoa.NSCache>(): R;
    setSectionInterfaceCache<R = void, P0 = cocoa.NSCache>(_v: P0): R;
    layerInspectorSections<R = cocoa.NSArray>(): R;
    setLayerInspectorSections<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    symbolInstanceSection<R = cocoa.MSSymbolInstanceSection>(): R;
    setSymbolInstanceSection<R = void, P0 = cocoa.MSSymbolInstanceSection>(_v: P0): R;
    textSection<R = cocoa.MSBaseInspectorSection>(): R;
    setTextSection<R = void, P0 = cocoa.MSBaseInspectorSection>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSSpecialLayerViewController<T = any> extends cocoa.classes.MSNestedInspectorSection, cocoa.classes.MSSymbolInstanceSectionDelegateProtocol, cocoa.classes.NSMenuDelegateProtocol {
      alloc<R = MSSpecialLayerViewController>(): R;
      new: <R = MSSpecialLayerViewController>() => R;
      sectionOrder<R = unknown>(): R;
    }
  }
}

declare const MSSpecialLayerViewController: cocoa.classes.MSSpecialLayerViewController;
