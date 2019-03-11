/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataSupplierDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    dataSupplierDataChanged<R = void, P0 = cocoa.MSLocalDataSupplier>(_dataSupplierDataChanged: P0): R;
    dataSupplierMenuItemImage<R = cocoa.NSImage, P0 = cocoa.MSDataSupplier>(_dataSupplierMenuItemImage: P0): R;
  }
  namespace classes {
    export interface MSDataSupplierDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSDataSupplierDelegateProtocol: cocoa.classes.MSDataSupplierDelegateProtocol;
