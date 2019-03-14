/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataSupplierDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    dataSupplierDataChanged<R = void, P0 = MSLocalDataSupplier>(_dataSupplierDataChanged: P0): R;
    dataSupplierMenuItemImage<R = NSImage, P0 = MSDataSupplier>(_dataSupplierMenuItemImage: P0): R;
  }
  namespace MSDataSupplierDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
