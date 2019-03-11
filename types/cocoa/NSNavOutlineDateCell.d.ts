/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNavOutlineDateCell<T = any> extends cocoa.NSTextFieldCell {
    minimumWidth<R = number>(): R;
    _interiorBoundsToDrawWithFrame<R = cocoa.CGRect, P0 = cocoa.CGRect>(__interiorBoundsToDrawWithFrame: P0): R;
    _stringToDraw<R = unknown>(): R;
    _isValidDate<R = boolean, P0 = unknown>(__isValidDate: P0): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    _dateStringToDraw<R = unknown>(): R;
    _todayStringToDrawForDate<R = unknown, P0 = unknown>(__todayStringToDrawForDate: P0): R;
    _yesterdayStringToDrawForDate<R = unknown, P0 = unknown>(__yesterdayStringToDrawForDate: P0): R;
    _updateDetailLevel<R = void>(): R;
    _updateDetailLevelWidths<R = void>(): R;
    resetDateFormats<R = void>(): R;
    _dateFormatterForDetailLevel<R = unknown, P0 = number>(__dateFormatterForDetailLevel: P0): R;
    useRelativeDates<R = boolean>(): R;
    setUseRelativeDates<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSNavOutlineDateCell<T = any> extends cocoa.classes.NSTextFieldCell {
      alloc<R = NSNavOutlineDateCell>(): R;
      new: <R = NSNavOutlineDateCell>() => R;
    }
  }
}

declare const NSNavOutlineDateCell: cocoa.classes.NSNavOutlineDateCell;
