/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserInterfaceValidationsProtocol<T = any> {
    validateUserInterfaceItem<R = boolean, P0 = NSValidatedUserInterfaceItem>(_validateUserInterfaceItem: P0): R;
  }
  namespace classes {
    export interface NSUserInterfaceValidationsProtocol<T = any> {  }
  }
}
