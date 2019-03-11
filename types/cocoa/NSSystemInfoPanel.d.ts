/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSystemInfoPanel<T = any> extends cocoa.NSObject, cocoa.NSTextViewDelegateProtocol {
    windowWillClose<R = void, P0 = unknown>(_windowWillClose: P0): R;
    sizeCopyrightView<R = void>(): R;
    sizeCreditsView<R = void>(): R;
    versionString<R = unknown>(): R;
    credits<R = unknown>(): R;
    copyright<R = unknown>(): R;
    backgroundImage<R = unknown>(): R;
    applicationName<R = unknown>(): R;
    applicationIcon<R = unknown>(): R;
    updateNib<R = void>(): R;
    unloadNib<R = void, P0 = boolean>(_unloadNib: P0): R;
    loadNib<R = void>(): R;
    setOptionsDictionary<R = void, P0 = unknown>(_setOptionsDictionary: P0): R;
    showInfoPanel<R = void, P0 = unknown>(_showInfoPanel: P0): R;
    dealloc<R = void>(): R;
    creditScrollViewWidthConstraint<R = cocoa.NSLayoutConstraint>(): R;
    setCreditScrollViewWidthConstraint<R = void, P0 = cocoa.NSLayoutConstraint>(_v: P0): R;
    copyrightScrollView<R = cocoa.NSScrollView>(): R;
    setCopyrightScrollView<R = void, P0 = cocoa.NSScrollView>(_v: P0): R;
    copyrightField<R = cocoa.NSTextField>(): R;
    setCopyrightField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    versionField<R = cocoa.NSTextField>(): R;
    setVersionField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    copyrightView<R = cocoa.NSTextView>(): R;
    setCopyrightView<R = void, P0 = cocoa.NSTextView>(_v: P0): R;
    creditView<R = cocoa.NSTextView>(): R;
    setCreditView<R = void, P0 = cocoa.NSTextView>(_v: P0): R;
    appNameField<R = cocoa.NSTextField>(): R;
    setAppNameField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    appIconView<R = cocoa.NSImageView>(): R;
    setAppIconView<R = void, P0 = cocoa.NSImageView>(_v: P0): R;
    infoPanel<R = cocoa.NSPanel>(): R;
    setInfoPanel<R = void, P0 = cocoa.NSPanel>(_v: P0): R;
    creditScrollView<R = cocoa.NSScrollView>(): R;
    setCreditScrollView<R = void, P0 = cocoa.NSScrollView>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSSystemInfoPanel<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSTextViewDelegateProtocol {
      alloc<R = NSSystemInfoPanel>(): R;
      new: <R = NSSystemInfoPanel>() => R;
      updateOptionsWithVersion<R = void, P0 = unknown>(_updateOptionsWithVersion: P0): R;
      updateOptionsWithMarketingVersion<R = void, P0 = unknown>(_updateOptionsWithMarketingVersion: P0): R;
      updateOptionsWithCredits<R = void, P0 = unknown>(_updateOptionsWithCredits: P0): R;
      updateOptionsWithCopyright<R = void, P0 = unknown>(_updateOptionsWithCopyright: P0): R;
      updateOptionsWithApplicationName<R = void, P0 = unknown>(_updateOptionsWithApplicationName: P0): R;
      updateOptionsWithApplicationIcon<R = void, P0 = unknown>(_updateOptionsWithApplicationIcon: P0): R;
      updateOptions<R = void, P0 = unknown>(_updateOptions: P0): R;
      sharedInfoPanel<R = unknown>(): R;
    }
  }
}

declare const NSSystemInfoPanel: cocoa.classes.NSSystemInfoPanel;
