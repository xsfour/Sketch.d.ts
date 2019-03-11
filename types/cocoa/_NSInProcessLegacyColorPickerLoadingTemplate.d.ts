/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSInProcessLegacyColorPickerLoadingTemplate<T = any> extends cocoa.NSObject, cocoa._NSColorPickerTemplateProtocol {
    dealloc<R = void>(): R;
    initWithBundle<R = unknown, P0 = unknown>(_initWithBundle: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSInProcessLegacyColorPickerLoadingTemplate<T = any> extends cocoa.classes.NSObject, cocoa.classes._NSColorPickerTemplateProtocol {
      alloc<R = _NSInProcessLegacyColorPickerLoadingTemplate>(): R;
      new: <R = _NSInProcessLegacyColorPickerLoadingTemplate>() => R;
    }
  }
}
