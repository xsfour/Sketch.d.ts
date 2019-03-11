/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSServiceActionProtocol<T = any> extends cocoa.NSObjectProtocol {
    resetToDefaultAvailability<R = void>(): R;
    resetToDefaultKeyboardShortcut<R = void>(): R;
    validateWithResponder_completionHandler<R = void, P0 = cocoa.NSResponder, P1 = cocoa.CDUnknownBlockType>(_validateWithResponder: P0, _completionHandler: P1): R;
    invokeWithPasteboard<R = boolean, P0 = cocoa.NSPasteboard>(_invokeWithPasteboard: P0): R;
    invokeWithResponder<R = boolean, P0 = cocoa.NSResponder>(_invokeWithResponder: P0): R;
    loadBackgroundColorOnQueue_completionHandler<R = void, P0 = cocoa.NSOperationQueue, P1 = cocoa.CDUnknownBlockType>(_loadBackgroundColorOnQueue: P0, _completionHandler: P1): R;
    loadImageOnQueue_completionHandler<R = void, P0 = cocoa.NSOperationQueue, P1 = cocoa.CDUnknownBlockType>(_loadImageOnQueue: P0, _completionHandler: P1): R;
    isSpellChecker<R = boolean>(): R;
    isAvailableInServicesMenu<R = boolean>(): R;
    setIsAvailableInServicesMenu<R = void, P0 = boolean>(_v: P0): R;
    isAvailableInContextMenu<R = boolean>(): R;
    setIsAvailableInContextMenu<R = void, P0 = boolean>(_v: P0): R;
    isRestricted<R = boolean>(): R;
    isWorkflow<R = boolean>(): R;
    bundleIdentifier<R = cocoa.NSString>(): R;
    serviceUUID<R = cocoa.NSUUID>(): R;
    keyEquivalent<R = cocoa.NSString>(): R;
    setKeyEquivalent<R = void, P0 = cocoa.NSString>(_v: P0): R;
    keyboardShortcut<R = cocoa.NSKeyboardShortcut>(): R;
    setKeyboardShortcut<R = void, P0 = cocoa.NSKeyboardShortcut>(_v: P0): R;
    defaultKeyboardShortcut<R = cocoa.NSKeyboardShortcut>(): R;
    returnTypes<R = cocoa.NSArray>(): R;
    sendFileTypes<R = cocoa.NSArray>(): R;
    combinedSendTypes<R = cocoa.NSArray>(): R;
    hasBackgroundColor<R = boolean>(): R;
    hasCustomIcon<R = boolean>(): R;
    availablePresentationModes<R = cocoa.NSSet>(): R;
    defaultPresentationModes<R = cocoa.NSSet>(): R;
    presentationModes<R = cocoa.NSSet>(): R;
    setPresentationModes<R = void, P0 = cocoa.NSSet>(_v: P0): R;
    localizedServiceDescription<R = cocoa.NSString>(): R;
    bundlePath<R = cocoa.NSString>(): R;
    localizedCategoryTitle<R = cocoa.NSString>(): R;
    categoryTitle<R = cocoa.NSString>(): R;
    localizedTitle<R = cocoa.NSString>(): R;
    title<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface _NSServiceActionProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}
