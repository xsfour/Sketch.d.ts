/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNull<T = any> {
    // + NSNull(NSAccessibility,NSKeyValueCoding,NSNull,NSNullPortCoding,NSScriptAppleEventConversion,NSScriptingInternalCommandHandling,NSScriptingInternalCounting,NSScriptingInternalDeleting,NSScriptingInternalExisting,NSScriptingInternalSetting):
    accessibilityDidEndScrolling<R = void>(): R;
    valueForKey<R = unknown, P0 = unknown>(_valueForKey: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    _scriptingNullDescriptor<R = unknown>(): R;
    _scriptingCanHandleCommand<R = boolean, P0 = unknown>(__scriptingCanHandleCommand: P0): R;
    _scriptingMightHandleCommand<R = boolean, P0 = unknown>(__scriptingMightHandleCommand: P0): R;
    _scriptingCountOfValueForKey<R = number, P0 = unknown>(__scriptingCountOfValueForKey: P0): R;
    _scriptingCount<R = number>(): R;
    _scriptingRemoveValueForSpecifier<R = void, P0 = unknown>(__scriptingRemoveValueForSpecifier: P0): R;
    _scriptingExists<R = boolean>(): R;
    _scriptingSetValue_forSpecifier<R = unknown, P0 = unknown, P1 = unknown>(__scriptingSetValue: P0, _forSpecifier: P1): R;
  }
  namespace classes {
    export interface NSNull<T = any> {
      // + NSNull(NSAccessibility,NSKeyValueCoding,NSNull,NSNullPortCoding,NSScriptAppleEventConversion,NSScriptingInternalCommandHandling,NSScriptingInternalCounting,NSScriptingInternalDeleting,NSScriptingInternalExisting,NSScriptingInternalSetting):
      scriptingMissingValueWithDescriptor<R = unknown, P0 = unknown>(_scriptingMissingValueWithDescriptor: P0): R;
    }
  }
}

declare const NSNull: cocoa.classes.NSNull;
