/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMenuItemValidationProtocol<T = any> extends cocoa.NSObjectProtocol {
    validateMenuItem<R = boolean, P0 = cocoa.NSMenuItem>(_validateMenuItem: P0): R;
  }
  namespace classes {
    export interface NSMenuItemValidationProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSMenuItemValidationProtocol: cocoa.classes.NSMenuItemValidationProtocol;
