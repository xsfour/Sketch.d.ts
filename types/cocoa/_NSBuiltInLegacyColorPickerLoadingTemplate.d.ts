/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBuiltInLegacyColorPickerLoadingTemplate<T = any> extends cocoa.NSObject, cocoa._NSColorPickerTemplateProtocol {
    initWithClass<R = unknown, P0 = unknown>(_initWithClass: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSBuiltInLegacyColorPickerLoadingTemplate<T = any> extends cocoa.classes.NSObject, cocoa.classes._NSColorPickerTemplateProtocol {
      alloc<R = _NSBuiltInLegacyColorPickerLoadingTemplate>(): R;
      new: <R = _NSBuiltInLegacyColorPickerLoadingTemplate>() => R;
    }
  }
}
