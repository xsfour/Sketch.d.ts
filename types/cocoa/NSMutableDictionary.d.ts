/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMutableDictionary<T = any> {
    // + NSMutableDictionary(NSDeprecatedKeyValueCoding,NSKeyValueCoding,NSMutableDictionary,NSURLExtras):
    takeValue_forKey<R = void, P0 = unknown, P1 = unknown>(_takeValue: P0, _forKey: P1): R;
    takeStoredValue_forKey<R = void, P0 = unknown, P1 = unknown>(_takeStoredValue: P0, _forKey: P1): R;
    setValue_forKey<R = void, P0 = unknown, P1 = unknown>(_setValue: P0, _forKey: P1): R;
    initWithContentsOfURL<R = unknown, P0 = unknown>(_initWithContentsOfURL: P0): R;
    initWithContentsOfFile<R = unknown, P0 = unknown>(_initWithContentsOfFile: P0): R;
    classForCoder<R = unknown>(): R;
    _web_setObject_forUncopiedKey<R = void, P0 = unknown, P1 = unknown>(__web_setObject: P0, _forUncopiedKey: P1): R;
    _web_setBool_forKey<R = void, P0 = boolean, P1 = unknown>(__web_setBool: P0, _forKey: P1): R;
    _web_setInt_forKey<R = void, P0 = number, P1 = unknown>(__web_setInt: P0, _forKey: P1): R;
  }
  namespace classes {
    export interface NSMutableDictionary<T = any> {
      // + NSMutableDictionary(NSDeprecatedKeyValueCoding,NSKeyValueCoding,NSMutableDictionary,NSURLExtras):
      
    }
  }
}

declare const NSMutableDictionary: cocoa.classes.NSMutableDictionary;
