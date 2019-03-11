/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAboutWindowController<T = any> extends cocoa.NSWindowController {
    fetchRemoteUpdateExpiratonDate<R = void>(): R;
    unlinkDevice<R = void, P0 = unknown>(_unlinkDevice: P0): R;
    registerLicense<R = void, P0 = unknown>(_registerLicense: P0): R;
    showRenewLicensePage<R = void, P0 = unknown>(_showRenewLicensePage: P0): R;
    showPurchaseLicensePage<R = void, P0 = unknown>(_showPurchaseLicensePage: P0): R;
    showAcknowledgementsPage<R = void, P0 = unknown>(_showAcknowledgementsPage: P0): R;
    showAboutUsPage<R = void, P0 = unknown>(_showAboutUsPage: P0): R;
    refreshTrialNoteWithLicenseManager<R = void, P0 = unknown>(_refreshTrialNoteWithLicenseManager: P0): R;
    refreshLicenseStatusViewWithLicenseManager<R = void, P0 = unknown>(_refreshLicenseStatusViewWithLicenseManager: P0): R;
    refreshRegisteredToView<R = void, P0 = unknown>(_refreshRegisteredToView: P0): R;
    refresh<R = void>(): R;
    remoteUpdateExpirationDate<R = cocoa.NSDate>(): R;
    setRemoteUpdateExpirationDate<R = void, P0 = cocoa.NSDate>(_v: P0): R;
    versionTextField<R = cocoa.NSTextField>(): R;
    setVersionTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    variantNameTextField<R = cocoa.NSTextField>(): R;
    setVariantNameTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    unlinkDeviceButton<R = cocoa.NSButton>(): R;
    setUnlinkDeviceButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    trialNoteTextField<R = cocoa.NSTextField>(): R;
    setTrialNoteTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    renewLicenseButton<R = cocoa.NSButton>(): R;
    setRenewLicenseButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    registeredToTextField<R = cocoa.NSTextField>(): R;
    setRegisteredToTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    purchaseLicenseButton<R = cocoa.NSButton>(): R;
    setPurchaseLicenseButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    expirationDateTextField<R = cocoa.NSTextField>(): R;
    setExpirationDateTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    expirationTitleTextField<R = cocoa.NSTextField>(): R;
    setExpirationTitleTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    copyrightTextField<R = cocoa.NSTextField>(): R;
    setCopyrightTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    buildNumberTextField<R = cocoa.NSTextField>(): R;
    setBuildNumberTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    backgroundImageView<R = cocoa.MSThemeImageView>(): R;
    setBackgroundImageView<R = void, P0 = cocoa.MSThemeImageView>(_v: P0): R;
  }
  namespace classes {
    export interface MSAboutWindowController<T = any> extends cocoa.classes.NSWindowController {
      alloc<R = MSAboutWindowController>(): R;
      new: <R = MSAboutWindowController>() => R;
      showAboutWindow<R = void>(): R;
    }
  }
}

declare const MSAboutWindowController: cocoa.classes.MSAboutWindowController;
