/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataSupplierManager<T = any> extends NSObject, MSDataSupplierDelegateProtocol {
    cxx_destruct<R = void>(): R;
    loadPluginData<R = void>(): R;
    localDataForDefaultsKey<R = unknown, P0 = unknown>(_localDataForDefaultsKey: P0): R;
    postDataSupplierChangeNotification<R = void>(): R;
    hasLocalDataSupplierWithDataIdentifier<R = boolean, P0 = unknown>(_hasLocalDataSupplierWithDataIdentifier: P0): R;
    firstPluginDataSupplierWithIdentifier<R = unknown, P0 = unknown>(_firstPluginDataSupplierWithIdentifier: P0): R;
    firstDataSupplierInArray_dataIdentifier<R = unknown, P0 = unknown, P1 = unknown>(_firstDataSupplierInArray: P0, _dataIdentifier: P1): R;
    imageForTextLocalDataSupplier_forSize<R = unknown, P0 = unknown, P1 = CGSize>(_imageForTextLocalDataSupplier: P0, _forSize: P1): R;
    imageForImageLocalDataSupplier<R = unknown, P0 = unknown>(_imageForImageLocalDataSupplier: P0): R;
    removePluginDataSuppliersNotIdentifiedWithIdentifiers<R = void, P0 = unknown>(_removePluginDataSuppliersNotIdentifiedWithIdentifiers: P0): R;
    removeLocalDataSupplier<R = void, P0 = unknown>(_removeLocalDataSupplier: P0): R;
    loadBuiltinData<R = void>(): R;
    loadLocalData<R = void>(): R;
    hasLocalDataSupplierWithURL<R = boolean, P0 = unknown>(_hasLocalDataSupplierWithURL: P0): R;
    addLocalData<R = void, P0 = unknown>(_addLocalData: P0): R;
    resetSketchBuiltinData<R = void>(): R;
    loadDataSuppliersWithResetBuiltin<R = void, P0 = boolean>(_loadDataSuppliersWithResetBuiltin: P0): R;
    localDataSuppliers<R = unknown>(): R;
    useableDataSupplierWithIdentifier<R = unknown, P0 = unknown>(_useableDataSupplierWithIdentifier: P0): R;
    dataSupplierWithIdentifier<R = unknown, P0 = unknown>(_dataSupplierWithIdentifier: P0): R;
    supplyData_atIndex_forKey<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_supplyData: P0, _atIndex: P1, _forKey: P2): R;
    supplyData_forKey<R = void, P0 = unknown, P1 = unknown>(_supplyData: P0, _forKey: P1): R;
    requestDataFromPluginDataSupplier_dataContext_applierBlock<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_requestDataFromPluginDataSupplier: P0, _dataContext: P1, _applierBlock: P2): R;
    deregisterDataSuppliersForPluginWithIdentifier<R = void, P0 = unknown>(_deregisterDataSuppliersForPluginWithIdentifier: P0): R;
    registerPluginDataSupplier_withName_dataType_pluginIdentifier_commandIdentifier<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown>(_registerPluginDataSupplier: P0, _withName: P1, _dataType: P2, _pluginIdentifier: P3, _commandIdentifier: P4): R;
    setPluginDataReplyContext_forDataKey<R = void, P0 = unknown, P1 = unknown>(_setPluginDataReplyContext: P0, _forDataKey: P1): R;
    initWithDelegate<R = unknown, P0 = unknown>(_initWithDelegate: P0): R;
    replyContexts<R = NSMutableDictionary>(): R;
    setReplyContexts<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    builtinData<R = NSMutableArray>(): R;
    setBuiltinData<R = void, P0 = NSMutableArray>(_v: P0): R;
    localData<R = NSMutableArray>(): R;
    setLocalData<R = void, P0 = NSMutableArray>(_v: P0): R;
    pluginData<R = NSMutableArray>(): R;
    setPluginData<R = void, P0 = NSMutableArray>(_v: P0): R;
    objectID<R = NSString>(): R;
    delegate<R = MSDataSupplierManagerDelegate>(): R;
    dataSuppliers<R = NSArray>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSDataSupplierManager<T = any> extends NSObject, MSDataSupplierDelegateProtocol {
      alloc<R = MSDataSupplierManager>(): R;
      new: <R = MSDataSupplierManager>() => R;
      validLocalDataFileSystemURL<R = boolean, P0 = unknown>(_validLocalDataFileSystemURL: P0): R;
      URLForBuiltinDataNamed<R = unknown, P0 = unknown>(_URLForBuiltinDataNamed: P0): R;
      builtinDataFolder<R = unknown>(): R;
      sketchBuiltinLocalData<R = unknown>(): R;
      makeObjectID<R = unknown>(): R;
    }
  }
}

declare const MSDataSupplierManager: cocoa.classes.MSDataSupplierManager;
