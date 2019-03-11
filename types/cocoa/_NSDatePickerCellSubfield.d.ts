/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDatePickerCellSubfield<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    dealloc<R = void>(): R;
    initWithElement_frame_dateFormat_stringValue<R = unknown, P0 = number, P1 = cocoa.CGRect, P2 = unknown, P3 = unknown>(_initWithElement: P0, _frame: P1, _dateFormat: P2, _stringValue: P3): R;
    stringValue<R = cocoa.NSString>(): R;
    setStringValue<R = void, P0 = cocoa.NSString>(_v: P0): R;
    dateFormat<R = cocoa.NSString>(): R;
    frame<R = cocoa.CGRect>(): R;
    element<R = number>(): R;
  }
  namespace classes {
    export interface _NSDatePickerCellSubfield<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = _NSDatePickerCellSubfield>(): R;
      new: <R = _NSDatePickerCellSubfield>() => R;
    }
  }
}
