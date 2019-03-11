/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataSupplier<T = any> extends cocoa.NSObject, cocoa.NSCodingProtocol {
    cxx_destruct<R = void>(): R;
    dataForItem<R = unknown, P0 = unknown>(_dataForItem: P0): R;
    resetMenuItemImage<R = void>(): R;
    isEqualToDataSupplier<R = boolean, P0 = unknown>(_isEqualToDataSupplier: P0): R;
    hash<R = number>(): R;
    imageFileURLForDataItem<R = unknown, P0 = unknown>(_imageFileURLForDataItem: P0): R;
    generateDataForOverrides_dataSupplierManager_dataApplier<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(_generateDataForOverrides: P0, _dataSupplierManager: P1, _dataApplier: P2): R;
    generateDataForLayers_dataSupplierManager_dataApplier<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(_generateDataForLayers: P0, _dataSupplierManager: P1, _dataApplier: P2): R;
    applyDataAtIndex_datum_dataApplier<R = void, P0 = number, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(_applyDataAtIndex: P0, _datum: P1, _dataApplier: P2): R;
    applyDataWithCount_data_dataApplier<R = void, P0 = number, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(_applyDataWithCount: P0, _data: P1, _dataApplier: P2): R;
    initWithDataIdentifier_dataName_dataType<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_initWithDataIdentifier: P0, _dataName: P1, _dataType: P2): R;
    inAGroup<R = boolean>(): R;
    dataNameWithoutGroup<R = unknown>(): R;
    inGroupWithName<R = boolean, P0 = unknown>(_inGroupWithName: P0): R;
    menuItemImage<R = cocoa.NSImage>(): R;
    setMenuItemImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    enabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_v: P0): R;
    dataIdentifier<R = cocoa.NSString>(): R;
    dataType<R = number>(): R;
    dataName<R = cocoa.NSString>(): R;
    setDataName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    delegate<R = cocoa.MSDataSupplierDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSDataSupplierDelegate>(_v: P0): R;
    valid<R = boolean>(): R;
  }
  namespace classes {
    export interface MSDataSupplier<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCodingProtocol {
      alloc<R = MSDataSupplier>(): R;
      new: <R = MSDataSupplier>() => R;
    }
  }
}

declare const MSDataSupplier: cocoa.classes.MSDataSupplier;
