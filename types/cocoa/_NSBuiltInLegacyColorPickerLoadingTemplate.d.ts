/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBuiltInLegacyColorPickerLoadingTemplate<T = any> extends NSObject, _NSColorPickerTemplateProtocol {
    initWithClass<R = unknown, P0 = unknown>(_initWithClass: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSBuiltInLegacyColorPickerLoadingTemplate<T = any> extends NSObject, _NSColorPickerTemplateProtocol {
      alloc<R = _NSBuiltInLegacyColorPickerLoadingTemplate>(): R;
      new: <R = _NSBuiltInLegacyColorPickerLoadingTemplate>() => R;
    }
  }
}
