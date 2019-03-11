/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFilenamesPboardTypeConverter<T = any> extends cocoa._NSPboardTypeConverter {}
  namespace classes {
    export interface _NSFilenamesPboardTypeConverter<T = any> extends cocoa.classes._NSPboardTypeConverter {
      alloc<R = _NSFilenamesPboardTypeConverter>(): R;
      new: <R = _NSFilenamesPboardTypeConverter>() => R;
      _getConvertedDataFromPasteboard_securityScoped<R = unknown, P0 = unknown, P1 = boolean>(__getConvertedDataFromPasteboard: P0, _securityScoped: P1): R;
      _setConvertedData_pboard_generation_inItem<R = void, P0 = unknown, P1 = cocoa.__CFPasteboard, P2 = number, P3 = void>(__setConvertedData: P0, _pboard: P1, _generation: P2, _inItem: P3): R;
    }
  }
}
