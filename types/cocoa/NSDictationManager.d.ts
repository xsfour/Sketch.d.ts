/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDictationManager<T = any> extends cocoa.NSObject, cocoa.NSMenuItemValidationProtocol {
    _inputSourceRef<R = cocoa.__TISInputSource>(): R;
    _dictationIsAllowed<R = boolean>(): R;
    _dictationIsEnabled<R = boolean>(): R;
    _dictationKeyChanged<R = void>(): R;
    _updateKeyEquivalentForMenuItem<R = void, P0 = unknown>(__updateKeyEquivalentForMenuItem: P0): R;
    validateUserInterfaceItem<R = boolean, P0 = unknown>(_validateUserInterfaceItem: P0): R;
    dictationItemSelected<R = void, P0 = unknown>(_dictationItemSelected: P0): R;
    dealloc<R = void>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSDictationManager<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSMenuItemValidationProtocol {
      alloc<R = NSDictationManager>(): R;
      new: <R = NSDictationManager>() => R;
      createDictationMenuItem<R = unknown>(): R;
      isDictationSupported<R = boolean>(): R;
      defaultManager<R = unknown>(): R;
    }
  }
}

declare const NSDictationManager: cocoa.classes.NSDictationManager;
