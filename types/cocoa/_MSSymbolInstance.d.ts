/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSSymbolInstance<T = any> extends cocoa.MSStyledLayer {
    moveOverrideValueIndex_toIndex<R = void, P0 = number, P1 = number>(_moveOverrideValueIndex: P0, _toIndex: P1): R;
    removeAllOverrideValues<R = void>(): R;
    removeOverrideValuesAtIndexes<R = void, P0 = unknown>(_removeOverrideValuesAtIndexes: P0): R;
    removeOverrideValueAtIndex<R = void, P0 = number>(_removeOverrideValueAtIndex: P0): R;
    removeOverrideValue<R = void, P0 = unknown>(_removeOverrideValue: P0): R;
    insertOverrideValues_afterOverrideValue<R = void, P0 = unknown, P1 = unknown>(_insertOverrideValues: P0, _afterOverrideValue: P1): R;
    insertOverrideValue_afterOverrideValue<R = void, P0 = unknown, P1 = unknown>(_insertOverrideValue: P0, _afterOverrideValue: P1): R;
    insertOverrideValues_beforeOverrideValue<R = void, P0 = unknown, P1 = unknown>(_insertOverrideValues: P0, _beforeOverrideValue: P1): R;
    insertOverrideValue_beforeOverrideValue<R = void, P0 = unknown, P1 = unknown>(_insertOverrideValue: P0, _beforeOverrideValue: P1): R;
    insertOverrideValue_atIndex<R = void, P0 = unknown, P1 = number>(_insertOverrideValue: P0, _atIndex: P1): R;
    addOverrideValues<R = void, P0 = unknown>(_addOverrideValues: P0): R;
    addOverrideValue<R = void, P0 = unknown>(_addOverrideValue: P0): R;
    overrideValues<R = cocoa.NSArray>(): R;
    setOverrideValues<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    verticalSpacing<R = number>(): R;
    setVerticalSpacing<R = void, P0 = number>(_v: P0): R;
    symbolID<R = cocoa.NSString>(): R;
    setSymbolID<R = void, P0 = cocoa.NSString>(_v: P0): R;
    scale<R = number>(): R;
    setScale<R = void, P0 = number>(_v: P0): R;
    horizontalSpacing<R = number>(): R;
    setHorizontalSpacing<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSSymbolInstance<T = any> extends cocoa.classes.MSStyledLayer {
      alloc<R = _MSSymbolInstance>(): R;
      new: <R = _MSSymbolInstance>() => R;
    }
  }
}
