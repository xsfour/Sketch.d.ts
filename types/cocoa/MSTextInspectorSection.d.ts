/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextInspectorSection<T = any> extends cocoa.MSBaseInspectorSection, cocoa.MSTextHeaderInspectorItemDelegateProtocol {
    paragraphStyleItem<R = cocoa.MSParagraphStyleItem>(): R;
    setParagraphStyleItem<R = void, P0 = cocoa.MSParagraphStyleItem>(_v: P0): R;
    missingFontItem<R = cocoa.MSMissingFontItem>(): R;
    setMissingFontItem<R = void, P0 = cocoa.MSMissingFontItem>(_v: P0): R;
    textItem<R = cocoa.MSTextLayerItem>(): R;
    setTextItem<R = void, P0 = cocoa.MSTextLayerItem>(_v: P0): R;
    headerItem<R = cocoa.MSTextHeaderInspectorItem>(): R;
    setHeaderItem<R = void, P0 = cocoa.MSTextHeaderInspectorItem>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSTextInspectorSection<T = any> extends cocoa.classes.MSBaseInspectorSection, cocoa.classes.MSTextHeaderInspectorItemDelegateProtocol {
      alloc<R = MSTextInspectorSection>(): R;
      new: <R = MSTextInspectorSection>() => R;
    }
  }
}

declare const MSTextInspectorSection: cocoa.classes.MSTextInspectorSection;
