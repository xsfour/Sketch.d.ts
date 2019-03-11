/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDecimalNumber<T = any> extends cocoa.NSNumber {
    boolValue<R = boolean>(): R;
    floatValue<R = number>(): R;
    unsignedLongLongValue<R = number>(): R;
    longLongValue<R = number>(): R;
    unsignedLongValue<R = number>(): R;
    longValue<R = number>(): R;
    unsignedIntValue<R = number>(): R;
    intValue<R = number>(): R;
    unsignedShortValue<R = number>(): R;
    shortValue<R = number>(): R;
    unsignedCharValue<R = number>(): R;
    charValue<R = boolean>(): R;
    decimalNumberByRoundingAccordingToBehavior<R = unknown, P0 = unknown>(_decimalNumberByRoundingAccordingToBehavior: P0): R;
    decimalNumberByMultiplyingByPowerOf10_withBehavior<R = unknown, P0 = number, P1 = unknown>(_decimalNumberByMultiplyingByPowerOf10: P0, _withBehavior: P1): R;
    decimalNumberByMultiplyingByPowerOf10<R = unknown, P0 = number>(_decimalNumberByMultiplyingByPowerOf10: P0): R;
    decimalNumberByRaisingToPower_withBehavior<R = unknown, P0 = number, P1 = unknown>(_decimalNumberByRaisingToPower: P0, _withBehavior: P1): R;
    decimalNumberByRaisingToPower<R = unknown, P0 = number>(_decimalNumberByRaisingToPower: P0): R;
    decimalNumberByDividingBy_withBehavior<R = unknown, P0 = unknown, P1 = unknown>(_decimalNumberByDividingBy: P0, _withBehavior: P1): R;
    decimalNumberByDividingBy<R = unknown, P0 = unknown>(_decimalNumberByDividingBy: P0): R;
    decimalNumberByMultiplyingBy_withBehavior<R = unknown, P0 = unknown, P1 = unknown>(_decimalNumberByMultiplyingBy: P0, _withBehavior: P1): R;
    decimalNumberByMultiplyingBy<R = unknown, P0 = unknown>(_decimalNumberByMultiplyingBy: P0): R;
    decimalNumberBySubtracting_withBehavior<R = unknown, P0 = unknown, P1 = unknown>(_decimalNumberBySubtracting: P0, _withBehavior: P1): R;
    decimalNumberBySubtracting<R = unknown, P0 = unknown>(_decimalNumberBySubtracting: P0): R;
    decimalNumberBySubstracting_withBehavior<R = unknown, P0 = unknown, P1 = unknown>(_decimalNumberBySubstracting: P0, _withBehavior: P1): R;
    decimalNumberBySubstracting<R = unknown, P0 = unknown>(_decimalNumberBySubstracting: P0): R;
    decimalNumberByAdding_withBehavior<R = unknown, P0 = unknown, P1 = unknown>(_decimalNumberByAdding: P0, _withBehavior: P1): R;
    decimalNumberByAdding<R = unknown, P0 = unknown>(_decimalNumberByAdding: P0): R;
    initWithString_locale<R = unknown, P0 = unknown, P1 = unknown>(_initWithString: P0, _locale: P1): R;
    initWithString<R = unknown, P0 = unknown>(_initWithString: P0): R;
    initWithDecimal<R = unknown, P0 = unknown>(_initWithDecimal: P0): R;
    initWithMantissa_exponent_isNegative<R = unknown, P0 = number, P1 = number, P2 = boolean>(_initWithMantissa: P0, _exponent: P1, _isNegative: P2): R;
    copy<R = unknown>(): R;
    doubleValue<R = number>(): R;
    objCType<R = string>(): R;
    decimalValue<R = unknown>(): R;
  }
  namespace classes {
    export interface NSDecimalNumber<T = any> extends cocoa.classes.NSNumber {
      alloc<R = NSDecimalNumber>(): R;
      new: <R = NSDecimalNumber>() => R;
      defaultBehavior<R = unknown>(): R;
      setDefaultBehavior<R = void, P0 = unknown>(_setDefaultBehavior: P0): R;
      notANumber<R = unknown>(): R;
      one<R = unknown>(): R;
      zero<R = unknown>(): R;
      maximumDecimalNumber<R = unknown>(): R;
      minimumDecimalNumber<R = unknown>(): R;
      decimalNumberWithString_locale<R = unknown, P0 = unknown, P1 = unknown>(_decimalNumberWithString: P0, _locale: P1): R;
      decimalNumberWithString<R = unknown, P0 = unknown>(_decimalNumberWithString: P0): R;
      decimalNumberWithDecimal<R = unknown, P0 = unknown>(_decimalNumberWithDecimal: P0): R;
      decimalNumberWithMantissa_exponent_isNegative<R = unknown, P0 = number, P1 = number, P2 = boolean>(_decimalNumberWithMantissa: P0, _exponent: P1, _isNegative: P2): R;
    }
  }
}

declare const NSDecimalNumber: cocoa.classes.NSDecimalNumber;
