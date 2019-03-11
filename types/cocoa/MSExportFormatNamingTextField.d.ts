/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportFormatNamingTextField<T = any> extends cocoa.MSTextFieldWithDropDownMenu {
    applyNamingScheme<R = void, P0 = unknown>(_applyNamingScheme: P0): R;
    popupMenu<R = unknown>(): R;
    exportFormats<R = cocoa.NSArray>(): R;
    setExportFormats<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface MSExportFormatNamingTextField<T = any> extends cocoa.classes.MSTextFieldWithDropDownMenu {
      alloc<R = MSExportFormatNamingTextField>(): R;
      new: <R = MSExportFormatNamingTextField>() => R;
    }
  }
}

declare const MSExportFormatNamingTextField: cocoa.classes.MSExportFormatNamingTextField;
