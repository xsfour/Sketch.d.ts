/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSOutOfProcessLegacyColorPickerLoadingTemplate<T = any> extends NSObject, _NSColorPickerTemplateProtocol {
    dealloc<R = void>(): R;
    initWithBundle_requiresSandboxExtension<R = unknown, P0 = unknown, P1 = boolean>(_initWithBundle: P0, _requiresSandboxExtension: P1): R;
    initWithBundle<R = unknown, P0 = unknown>(_initWithBundle: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSOutOfProcessLegacyColorPickerLoadingTemplate<T = any> extends NSObject, _NSColorPickerTemplateProtocol {
      alloc<R = _NSOutOfProcessLegacyColorPickerLoadingTemplate>(): R;
      new: <R = _NSOutOfProcessLegacyColorPickerLoadingTemplate>() => R;
    }
  }
}
