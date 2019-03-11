/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataTableCellView<T = any> extends cocoa.NSTableCellView {
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    awakeFromNib<R = void>(): R;
    revealButton<R = cocoa.NSButton>(): R;
    setRevealButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    previewContainer<R = cocoa.MSDataPreview>(): R;
    setPreviewContainer<R = void, P0 = cocoa.MSDataPreview>(_v: P0): R;
    dataPreferencePane<R = cocoa.MSDataPreferencePane>(): R;
    setDataPreferencePane<R = void, P0 = cocoa.MSDataPreferencePane>(_v: P0): R;
    secondaryTextField<R = cocoa.NSTextField>(): R;
    setSecondaryTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    primaryTextField<R = cocoa.NSTextField>(): R;
    setPrimaryTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    dataPreferenceItem<R = cocoa.MSDataPreferenceItem>(): R;
  }
  namespace classes {
    export interface MSDataTableCellView<T = any> extends cocoa.classes.NSTableCellView {
      alloc<R = MSDataTableCellView>(): R;
      new: <R = MSDataTableCellView>() => R;
    }
  }
}

declare const MSDataTableCellView: cocoa.classes.MSDataTableCellView;
