/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNumber<T = any> extends cocoa.NSValue {
    _getCString_length_multiplier<R = boolean, P0 = string, P1 = number, P2 = number>(__getCString: P0, _length: P1, _multiplier: P2): R;
    initWithBool<R = unknown, P0 = boolean>(_initWithBool: P0): R;
    initWithDouble<R = unknown, P0 = number>(_initWithDouble: P0): R;
    initWithFloat<R = unknown, P0 = number>(_initWithFloat: P0): R;
    initWithUnsignedLongLong<R = unknown, P0 = number>(_initWithUnsignedLongLong: P0): R;
    initWithLongLong<R = unknown, P0 = number>(_initWithLongLong: P0): R;
    initWithUnsignedLong<R = unknown, P0 = number>(_initWithUnsignedLong: P0): R;
    initWithLong<R = unknown, P0 = number>(_initWithLong: P0): R;
    initWithUnsignedInteger<R = unknown, P0 = number>(_initWithUnsignedInteger: P0): R;
    initWithInteger<R = unknown, P0 = number>(_initWithInteger: P0): R;
    initWithUnsignedInt<R = unknown, P0 = number>(_initWithUnsignedInt: P0): R;
    initWithInt<R = unknown, P0 = number>(_initWithInt: P0): R;
    initWithUnsignedShort<R = unknown, P0 = number>(_initWithUnsignedShort: P0): R;
    initWithShort<R = unknown, P0 = number>(_initWithShort: P0): R;
    initWithUnsignedChar<R = unknown, P0 = number>(_initWithUnsignedChar: P0): R;
    initWithChar<R = unknown, P0 = boolean>(_initWithChar: P0): R;
    _allowsDirectEncoding<R = boolean>(): R;
    redactedDescription<R = unknown>(): R;
    descriptionWithLocale<R = unknown, P0 = unknown>(_descriptionWithLocale: P0): R;
    isEqualToNumber<R = boolean, P0 = unknown>(_isEqualToNumber: P0): R;
    compare<R = number, P0 = unknown>(_compare: P0): R;
    _reverseCompare<R = number, P0 = unknown>(__reverseCompare: P0): R;
    _getValue_forType<R = number, P0 = void, P1 = number>(__getValue: P0, _forType: P1): R;
    _cfNumberType<R = number>(): R;
    _cfTypeID<R = number>(): R;
    isNSNumber__<R = boolean>(): R;
    _scriptingTypeDescriptor<R = unknown>(): R;
    _scriptingRealDescriptor<R = unknown>(): R;
    _scriptingNumberDescriptor<R = unknown>(): R;
    _scriptingIntegerDescriptor<R = unknown>(): R;
    _scriptingBooleanDescriptor<R = unknown>(): R;
    _scriptingAlternativeValueRankWithDescriptor<R = number, P0 = unknown>(__scriptingAlternativeValueRankWithDescriptor: P0): R;
    stringValue<R = cocoa.NSString>(): R;
    unsignedLongLongValue<R = number>(): R;
    longLongValue<R = number>(): R;
    floatValue<R = number>(): R;
    doubleValue<R = number>(): R;
    unsignedLongValue<R = number>(): R;
    longValue<R = number>(): R;
    unsignedIntValue<R = number>(): R;
    intValue<R = number>(): R;
    unsignedShortValue<R = number>(): R;
    shortValue<R = number>(): R;
    unsignedCharValue<R = number>(): R;
    charValue<R = boolean>(): R;
    unsignedIntegerValue<R = number>(): R;
    integerValue<R = number>(): R;
    boolValue<R = boolean>(): R;
    decimalValue<R = unknown>(): R;
    // + NSNumber(OverrideInspector,TreeAsDictionarySupport):
    treeAsDictionary<R = unknown>(): R;
    overrideRepresentation<R = cocoa.MSOverrideRepresentation>(): R;
    placeholderIdentifier<R = cocoa.NSNumber>(): R;
  }
  namespace classes {
    export interface NSNumber<T = any> extends cocoa.classes.NSValue {
      alloc<R = NSNumber>(): R;
      new: <R = NSNumber>() => R;
      numberWithBool<R = unknown, P0 = boolean>(_numberWithBool: P0): R;
      numberWithDouble<R = unknown, P0 = number>(_numberWithDouble: P0): R;
      numberWithFloat<R = unknown, P0 = number>(_numberWithFloat: P0): R;
      numberWithUnsignedLongLong<R = unknown, P0 = number>(_numberWithUnsignedLongLong: P0): R;
      numberWithLongLong<R = unknown, P0 = number>(_numberWithLongLong: P0): R;
      numberWithUnsignedLong<R = unknown, P0 = number>(_numberWithUnsignedLong: P0): R;
      numberWithLong<R = unknown, P0 = number>(_numberWithLong: P0): R;
      numberWithUnsignedInteger<R = unknown, P0 = number>(_numberWithUnsignedInteger: P0): R;
      numberWithInteger<R = unknown, P0 = number>(_numberWithInteger: P0): R;
      numberWithUnsignedInt<R = unknown, P0 = number>(_numberWithUnsignedInt: P0): R;
      numberWithInt<R = unknown, P0 = number>(_numberWithInt: P0): R;
      numberWithUnsignedShort<R = unknown, P0 = number>(_numberWithUnsignedShort: P0): R;
      numberWithShort<R = unknown, P0 = number>(_numberWithShort: P0): R;
      numberWithUnsignedChar<R = unknown, P0 = number>(_numberWithUnsignedChar: P0): R;
      numberWithChar<R = unknown, P0 = boolean>(_numberWithChar: P0): R;
      _scriptingTypeWithDescriptor<R = unknown, P0 = unknown>(__scriptingTypeWithDescriptor: P0): R;
      _scriptingRealWithDescriptor<R = unknown, P0 = unknown>(__scriptingRealWithDescriptor: P0): R;
      _scriptingNumberWithDescriptor<R = unknown, P0 = unknown>(__scriptingNumberWithDescriptor: P0): R;
      _scriptingIntegerWithDescriptor<R = unknown, P0 = unknown>(__scriptingIntegerWithDescriptor: P0): R;
      _scriptingBooleanWithDescriptor<R = unknown, P0 = unknown>(__scriptingBooleanWithDescriptor: P0): R;
      // + NSNumber(OverrideInspector,TreeAsDictionarySupport):
      subtleSeparator<R = unknown>(): R;
      padding2<R = unknown>(): R;
      padding1<R = unknown>(): R;
    }
  }
}

declare const NSNumber: cocoa.classes.NSNumber;
