/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataPreferenceItem<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    dataTypeString<R = unknown>(): R;
    initWithData<R = unknown, P0 = unknown>(_initWithData: P0): R;
    secondaryTitle<R = NSString>(): R;
    setSecondaryTitle<R = void, P0 = NSString>(_v: P0): R;
    modificationDate<R = NSString>(): R;
    cellView<R = MSDataTableCellView>(): R;
    setCellView<R = void, P0 = MSDataTableCellView>(_v: P0): R;
    preview<R = NSImage>(): R;
    setPreview<R = void, P0 = NSImage>(_v: P0): R;
    data<R = MSDataSupplier>(): R;
    secondaryTextFieldColor<R = NSColor>(): R;
    primaryTextFieldColor<R = NSColor>(): R;
    pluginBundleIcon<R = NSImage>(): R;
    pluginBundle<R = MSPluginBundle>(): R;
    canRevealInFinder<R = boolean>(): R;
    namePlusPluginName<R = NSString>(): R;
    enabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_v: P0): R;
    valid<R = boolean>(): R;
    name<R = NSString>(): R;
    pluginData<R = MSPluginDataSupplier>(): R;
    localData<R = MSLocalDataSupplier>(): R;
  }
  namespace classes {
    export interface MSDataPreferenceItem<T = any> extends NSObject {
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
