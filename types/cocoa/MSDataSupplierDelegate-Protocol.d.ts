/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataSupplierDelegateProtocol<T = any> extends NSObjectProtocol {
    dataSupplierDataChanged<R = void, P0 = MSLocalDataSupplier>(_dataSupplierDataChanged: P0): R;
    dataSupplierMenuItemImage<R = NSImage, P0 = MSDataSupplier>(_dataSupplierMenuItemImage: P0): R;
  }
  namespace classes {
    export interface MSDataSupplierDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
