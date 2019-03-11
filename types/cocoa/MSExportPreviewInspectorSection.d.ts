/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportPreviewInspectorSection<T = any> extends cocoa.MSBaseInspectorSection, cocoa.MSInspectorItemDelegateProtocol {
    addExportFormat<R = void, P0 = unknown>(_addExportFormat: P0): R;
    exportSelectedItem<R = cocoa.MSExportSelectedInspectorItem>(): R;
    setExportSelectedItem<R = void, P0 = cocoa.MSExportSelectedInspectorItem>(_v: P0): R;
    formatsItem<R = cocoa.MSExportInspectorViewController>(): R;
    setFormatsItem<R = void, P0 = cocoa.MSExportInspectorViewController>(_v: P0): R;
    footerItems<R = cocoa.NSArray>(): R;
    setFooterItems<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    sliceHeader<R = cocoa.MSHeader2InspectorItem>(): R;
    setSliceHeader<R = void, P0 = cocoa.MSHeader2InspectorItem>(_v: P0): R;
    headerItem<R = cocoa.MSExportPreviewHeaderInspectorItem>(): R;
    setHeaderItem<R = void, P0 = cocoa.MSExportPreviewHeaderInspectorItem>(_v: P0): R;
    initialHeaderItem<R = cocoa.MSExportInitialHeaderItem>(): R;
    setInitialHeaderItem<R = void, P0 = cocoa.MSExportInitialHeaderItem>(_v: P0): R;
    colorItem<R = cocoa.MSSliceBackgroundColorInspectorItem>(): R;
    setColorItem<R = void, P0 = cocoa.MSSliceBackgroundColorInspectorItem>(_v: P0): R;
    groupContentsItem<R = cocoa.MSSliceExportGroupContentsOnlyInspectorItem>(): R;
    setGroupContentsItem<R = void, P0 = cocoa.MSSliceExportGroupContentsOnlyInspectorItem>(_v: P0): R;
    trimTransparencyItem<R = cocoa.MSSliceTrimTransparencyInspectorItem>(): R;
    setTrimTransparencyItem<R = void, P0 = cocoa.MSSliceTrimTransparencyInspectorItem>(_v: P0): R;
    imagesItem<R = cocoa.MSExportPreviewImagesInspectorItem>(): R;
    setImagesItem<R = void, P0 = cocoa.MSExportPreviewImagesInspectorItem>(_v: P0): R;
    hasContent<R = boolean>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSExportPreviewInspectorSection<T = any> extends cocoa.classes.MSBaseInspectorSection, cocoa.classes.MSInspectorItemDelegateProtocol {
      alloc<R = MSExportPreviewInspectorSection>(): R;
      new: <R = MSExportPreviewInspectorSection>() => R;
    }
  }
}

declare const MSExportPreviewInspectorSection: cocoa.classes.MSExportPreviewInspectorSection;
