/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDictionaryController<T = any> extends cocoa.NSArrayController {
    _noteKeyValuePairChangedValue<R = void, P0 = unknown>(__noteKeyValuePairChangedValue: P0): R;
    _noteKeyValuePairChangedKey<R = void, P0 = unknown>(__noteKeyValuePairChangedKey: P0): R;
    _buildAndAssignNewContentDictionary<R = void>(): R;
    _setArrayContentInBackground<R = void, P0 = unknown>(__setArrayContentInBackground: P0): R;
    _newObject<R = unknown>(): R;
    _updateLocalizedDictionaryForNewLocalizedKeyTable<R = void>(): R;
    _recomputeLocalizedKeys<R = void>(): R;
    deepCopiesValues<R = boolean>(): R;
    setDeepCopiesValues<R = void, P0 = boolean>(_setDeepCopiesValues: P0): R;
    _keyValuePairArrayForDictionary_reuseKeyValuePairsFromArray<R = unknown, P0 = unknown, P1 = unknown>(__keyValuePairArrayForDictionary: P0, _reuseKeyValuePairsFromArray: P1): R;
    _dictionaryForKeyValuePairArray_pullExcludedKeysFromDictionary<R = unknown, P0 = unknown, P1 = unknown>(__dictionaryForKeyValuePairArray: P0, _pullExcludedKeysFromDictionary: P1): R;
    _insertionKeyForDictionary_minimumIndex<R = unknown, P0 = unknown, P1 = number>(__insertionKeyForDictionary: P0, _minimumIndex: P1): R;
    _keyForLocalizedKey<R = unknown, P0 = unknown>(__keyForLocalizedKey: P0): R;
    _localizedKeyForKey<R = unknown, P0 = unknown>(__localizedKeyForKey: P0): R;
    _transformationForString_dictionary<R = unknown, P0 = unknown, P1 = unknown>(__transformationForString: P0, _dictionary: P1): R;
    _keyForLocalizedKeyDictionary<R = unknown>(): R;
    setFetchPredicate<R = void, P0 = unknown>(_setFetchPredicate: P0): R;
    setEntityName<R = void, P0 = unknown>(_setEntityName: P0): R;
    localizedKeyTable<R = cocoa.NSString>(): R;
    setLocalizedKeyTable<R = void, P0 = cocoa.NSString>(_v: P0): R;
    localizedKeyDictionary<R = cocoa.NSDictionary>(): R;
    setLocalizedKeyDictionary<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    excludedKeys<R = cocoa.NSArray>(): R;
    setExcludedKeys<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    includedKeys<R = cocoa.NSArray>(): R;
    setIncludedKeys<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    initialValue<R = unknown>(): R;
    setInitialValue<R = void, P0 = unknown>(_v: P0): R;
    initialKey<R = cocoa.NSString>(): R;
    setInitialKey<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSDictionaryController<T = any> extends cocoa.classes.NSArrayController {
      alloc<R = NSDictionaryController>(): R;
      new: <R = NSDictionaryController>() => R;
    }
  }
}

declare const NSDictionaryController: cocoa.classes.NSDictionaryController;
