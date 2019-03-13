/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSForeignSymbol<T = any> extends _MSForeignSymbol {
    syncRemoteStyleOverrides<R = void, P0 = unknown>(_syncRemoteStyleOverrides: P0): R;
    remoteShareID<R = unknown>(): R;
    setLocalObject<R = void, P0 = unknown>(_setLocalObject: P0): R;
    localObject<R = unknown>(): R;
    tooltipForObject_MSAssetSyncSheetObject<R = unknown, P0 = MSModelObject>(_tooltipForObject_MSAssetSyncSheetObject: P0): R;
    type_MSAssetSyncSheetObject<R = number>(): R;
    remoteSymbolID<R = NSString>(): R;
  }
  namespace classes {
    export interface MSForeignSymbol<T = any> extends _MSForeignSymbol {
      alloc<R = MSForeignSymbol>(): R;
      new: <R = MSForeignSymbol>() => R;
      foreignSymbolWithMaster_inLibrary<R = unknown, P0 = unknown, P1 = unknown>(_foreignSymbolWithMaster: P0, _inLibrary: P1): R;
    }
  }
}

declare const MSForeignSymbol: cocoa.classes.MSForeignSymbol;
