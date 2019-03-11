/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNibExternalObjectPlaceholder<T = any> extends cocoa.NSObject, cocoa.NSCodingProtocol {
    dealloc<R = void>(): R;
    externalObjectPlaceholderIdentifier<R = cocoa.NSString>(): R;
    setExternalObjectPlaceholderIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSNibExternalObjectPlaceholder<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCodingProtocol {
      alloc<R = NSNibExternalObjectPlaceholder>(): R;
      new: <R = NSNibExternalObjectPlaceholder>() => R;
      removeMappingsForCoder<R = void, P0 = unknown>(_removeMappingsForCoder: P0): R;
      mappedEntryForCoder_withIdentifier<R = unknown, P0 = unknown, P1 = unknown>(_mappedEntryForCoder: P0, _withIdentifier: P1): R;
      addMappings_forCoder<R = void, P0 = unknown, P1 = unknown>(_addMappings: P0, _forCoder: P1): R;
      addMappingFromIdentifier_toEntry_forCoder<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_addMappingFromIdentifier: P0, _toEntry: P1, _forCoder: P2): R;
      placeholderDecodingMap<R = cocoa.__CFDictionary>(): R;
    }
  }
}

declare const NSNibExternalObjectPlaceholder: cocoa.classes.NSNibExternalObjectPlaceholder;
