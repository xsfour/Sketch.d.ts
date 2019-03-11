/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportSheetItem<T = any> extends cocoa.NSCollectionViewItem {
    subTitle<R = unknown>(): R;
    exportPreviewOperationDidFinish<R = void, P0 = unknown>(_exportPreviewOperationDidFinish: P0): R;
    loadUI<R = void>(): R;
    awakeFromNib<R = void>(): R;
    showWarningLabel<R = boolean>(): R;
    setShowWarningLabel<R = void, P0 = boolean>(_v: P0): R;
    exportSheet<R = cocoa.MSExportSheet>(): R;
    setExportSheet<R = void, P0 = cocoa.MSExportSheet>(_v: P0): R;
    warningView<R = cocoa.NSImageView>(): R;
    setWarningView<R = void, P0 = cocoa.NSImageView>(_v: P0): R;
    checkBox<R = cocoa.NSButton>(): R;
    setCheckBox<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    subTitleField<R = cocoa.NSTextField>(): R;
    setSubTitleField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    titleField<R = cocoa.NSTextField>(): R;
    setTitleField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    previewContainer<R = cocoa.NSView>(): R;
    setPreviewContainer<R = void, P0 = cocoa.NSView>(_v: P0): R;
    isExportable<R = boolean>(): R;
    setIsExportable<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface MSExportSheetItem<T = any> extends cocoa.classes.NSCollectionViewItem {
      alloc<R = MSExportSheetItem>(): R;
      new: <R = MSExportSheetItem>() => R;
    }
  }
}

declare const MSExportSheetItem: cocoa.classes.MSExportSheetItem;
