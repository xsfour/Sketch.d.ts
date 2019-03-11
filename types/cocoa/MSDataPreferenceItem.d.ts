/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataPreferenceItem<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    dataTypeString<R = unknown>(): R;
    initWithData<R = unknown, P0 = unknown>(_initWithData: P0): R;
    secondaryTitle<R = cocoa.NSString>(): R;
    setSecondaryTitle<R = void, P0 = cocoa.NSString>(_v: P0): R;
    modificationDate<R = cocoa.NSString>(): R;
    cellView<R = cocoa.MSDataTableCellView>(): R;
    setCellView<R = void, P0 = cocoa.MSDataTableCellView>(_v: P0): R;
    preview<R = cocoa.NSImage>(): R;
    setPreview<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    data<R = cocoa.MSDataSupplier>(): R;
    secondaryTextFieldColor<R = cocoa.NSColor>(): R;
    primaryTextFieldColor<R = cocoa.NSColor>(): R;
    pluginBundleIcon<R = cocoa.NSImage>(): R;
    pluginBundle<R = cocoa.MSPluginBundle>(): R;
    canRevealInFinder<R = boolean>(): R;
    namePlusPluginName<R = cocoa.NSString>(): R;
    enabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_v: P0): R;
    valid<R = boolean>(): R;
    name<R = cocoa.NSString>(): R;
    pluginData<R = cocoa.MSPluginDataSupplier>(): R;
    localData<R = cocoa.MSLocalDataSupplier>(): R;
  }
  namespace classes {
    export interface MSDataPreferenceItem<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSDataPreferenceItem>(): R;
      new: <R = MSDataPreferenceItem>() => R;
      keyPathsForValuesAffectingSecondaryTitle<R = unknown>(): R;
      keyPathsForValuesAffectingSecondaryTextFieldColor<R = unknown>(): R;
      keyPathsForValuesAffectingPrimaryTextFieldColor<R = unknown>(): R;
      preferenceItemForLocalData<R = unknown, P0 = unknown>(_preferenceItemForLocalData: P0): R;
    }
  }
}

declare const MSDataPreferenceItem: cocoa.classes.MSDataPreferenceItem;
