/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSegmentItemLabelCell<T = any> extends cocoa.NSTextFieldCell {
    _usesBezeledSelectionStyle<R = boolean>(): R;
    set_usesBezeledSelectionStyle<R = void, P0 = boolean>(_v: P0): R;
    widgetName<R = cocoa.NSString>(): R;
    setWidgetName<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSSegmentItemLabelCell<T = any> extends cocoa.classes.NSTextFieldCell {
      alloc<R = NSSegmentItemLabelCell>(): R;
      new: <R = NSSegmentItemLabelCell>() => R;
      _getParentSegmentedControlViewFromView<R = unknown, P0 = unknown>(__getParentSegmentedControlViewFromView: P0): R;
    }
  }
}

declare const NSSegmentItemLabelCell: cocoa.classes.NSSegmentItemLabelCell;
