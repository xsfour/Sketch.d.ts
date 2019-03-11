/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface ECIODelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    closeInfoGroup<R = void>(): R;
    openInfoGroupWithKey<R = void, P0 = cocoa.NSString>(_openInfoGroupWithKey: P0): R;
    outputInfo_withKey<R = void, P0 = unknown, P1 = cocoa.NSString>(_outputInfo: P0, _withKey: P1): R;
    outputFormat<R = void, P0 = cocoa.NSString>(_outputFormat: P0): R;
    outputError<R = void, P0 = cocoa.NSError>(_outputError: P0): R;
    outputErrorWithDomain_code_info_format<R = void, P0 = cocoa.NSString, P1 = number, P2 = cocoa.NSDictionary, P3 = cocoa.NSString>(_outputErrorWithDomain: P0, _code: P1, _info: P2, _format: P3): R;
    urlOptionForKey_defaultingToWorkingDirectory<R = cocoa.NSURL, P0 = cocoa.NSString, P1 = boolean>(_urlOptionForKey: P0, _defaultingToWorkingDirectory: P1): R;
    doubleOptionForKey<R = number, P0 = cocoa.NSString>(_doubleOptionForKey: P0): R;
    arrayOptionForKey_separator<R = cocoa.NSArray, P0 = cocoa.NSString, P1 = cocoa.NSString>(_arrayOptionForKey: P0, _separator: P1): R;
    boolOptionForKey<R = boolean, P0 = cocoa.NSString>(_boolOptionForKey: P0): R;
    stringOptionForKey<R = cocoa.NSString, P0 = cocoa.NSString>(_stringOptionForKey: P0): R;
    optionForKey<R = unknown, P0 = cocoa.NSString>(_optionForKey: P0): R;
  }
  namespace classes {
    export interface ECIODelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const ECIODelegateProtocol: cocoa.classes.ECIODelegateProtocol;
