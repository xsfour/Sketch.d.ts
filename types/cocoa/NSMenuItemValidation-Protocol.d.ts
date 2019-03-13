/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMenuItemValidationProtocol<T = any> extends NSObjectProtocol {
    validateMenuItem<R = boolean, P0 = NSMenuItem>(_validateMenuItem: P0): R;
  }
  namespace classes {
    export interface NSMenuItemValidationProtocol<T = any> extends NSObjectProtocol {  }
  }
}
