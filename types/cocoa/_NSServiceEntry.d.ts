/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSServiceEntry<T = any> extends cocoa.NSObject, cocoa._NSServiceActionProtocol {
    internalRunService_flags_cancelledHint<R = unknown, P0 = unknown, P1 = number, P2 = string>(_internalRunService: P0, _flags: P1, _cancelledHint: P2): R;
    enableStatus<R = number>(): R;
    compareServiceEntryByLocalizedTitle<R = number, P0 = unknown>(_compareServiceEntryByLocalizedTitle: P0): R;
    titleForTracking<R = unknown>(): R;
    menuItemTitle<R = unknown>(): R;
    flushCachedMenuItemTitle<R = void>(): R;
    applyServicesPreferences<R = void, P0 = unknown>(_applyServicesPreferences: P0): R;
    servicePreferences<R = unknown>(): R;
    serviceIdentifier<R = unknown>(): R;
    dealloc<R = void>(): R;
    hasKeyboardShortcut<R = boolean>(): R;
    hasSendOrReturnTypes<R = boolean>(): R;
    hasReturnTypes<R = boolean>(): R;
    hasSendTypes<R = boolean>(): R;
    typeCategory<R = number>(): R;
    _inferServiceCategory<R = number>(): R;
    combinedSendTypeCount<R = number>(): R;
    availablePresentationModes<R = cocoa.NSSet>(): R;
    defaultPresentationModes<R = cocoa.NSSet>(): R;
    presentationModes<R = cocoa.NSSet>(): R;
    setPresentationModes<R = void, P0 = cocoa.NSSet>(_v: P0): R;
    bundleIdentifier<R = cocoa.NSString>(): R;
    keyboardShortcut<R = cocoa.NSKeyboardShortcut>(): R;
    setKeyboardShortcut<R = void, P0 = cocoa.NSKeyboardShortcut>(_v: P0): R;
    defaultKeyboardShortcut<R = cocoa.NSKeyboardShortcut>(): R;
    bundlePath<R = cocoa.NSString>(): R;
    title<R = cocoa.NSString>(): R;
    hasBackgroundColor<R = boolean>(): R;
    hasCustomIcon<R = boolean>(): R;
    localizedTitle<R = cocoa.NSString>(): R;
    serviceUUID<R = cocoa.NSUUID>(): R;
    description<R = cocoa.NSString>(): R;
    keyEquivalent<R = cocoa.NSString>(): R;
    setKeyEquivalent<R = void, P0 = cocoa.NSString>(_v: P0): R;
    localizedCategoryTitle<R = cocoa.NSString>(): R;
    categoryTitle<R = cocoa.NSString>(): R;
    localizedServiceDescription<R = cocoa.NSString>(): R;
    isAvailableInServicesMenu<R = boolean>(): R;
    setIsAvailableInServicesMenu<R = void, P0 = boolean>(_v: P0): R;
    isAvailableInContextMenu<R = boolean>(): R;
    setIsAvailableInContextMenu<R = void, P0 = boolean>(_v: P0): R;
    isSpellChecker<R = boolean>(): R;
    isRestricted<R = boolean>(): R;
    isWorkflow<R = boolean>(): R;
    returnTypes<R = cocoa.NSArray>(): R;
    sendFileTypes<R = cocoa.NSArray>(): R;
    combinedSendTypes<R = cocoa.NSArray>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSServiceEntry<T = any> extends cocoa.classes.NSObject, cocoa.classes._NSServiceActionProtocol {
      alloc<R = _NSServiceEntry>(): R;
      new: <R = _NSServiceEntry>() => R;
    }
  }
}
