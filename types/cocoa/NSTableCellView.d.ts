/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableCellView<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    _setIsSourceList_legacy<R = void, P0 = boolean, P1 = boolean>(__setIsSourceList: P0, _legacy: P1): R;
    _doStandardRowSizeStyleLayout<R = void>(): R;
    _updateSourceListAttributesIfNecessary<R = void>(): R;
    _enclosingRowView<R = unknown>(): R;
    _updateSourceListAttributesInRowView<R = void, P0 = unknown>(__updateSourceListAttributesInRowView: P0): R;
    _updateSourceListGroupRowAttributesInRowView<R = void, P0 = unknown>(__updateSourceListGroupRowAttributesInRowView: P0): R;
    _enclosingTableView<R = unknown>(): R;
    _textFieldFrame<R = cocoa.CGRect>(): R;
    _updateFont<R = void>(): R;
    _imageViewFrame<R = cocoa.CGRect>(): R;
    isOpaque<R = boolean>(): R;
    _markAsNeedingLayoutOrViewWillDraw<R = void>(): R;
    _shouldUseLayoutAndNotViewWillDraw<R = boolean>(): R;
    preservesContentDuringLiveResize<R = boolean>(): R;
    _autounbinder<R = unknown>(): R;
    objectValue<R = unknown>(): R;
    setObjectValue<R = void, P0 = unknown>(_v: P0): R;
    draggingImageComponents<R = cocoa.NSArray>(): R;
    rowSizeStyle<R = number>(): R;
    setRowSizeStyle<R = void, P0 = number>(_v: P0): R;
    backgroundStyle<R = number>(): R;
    setBackgroundStyle<R = void, P0 = number>(_v: P0): R;
    imageView<R = cocoa.NSImageView>(): R;
    setImageView<R = void, P0 = cocoa.NSImageView>(_v: P0): R;
    textField<R = cocoa.NSTextField>(): R;
    setTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
  }
  namespace classes {
    export interface NSTableCellView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSTableCellView>(): R;
      new: <R = NSTableCellView>() => R;
    }
  }
}

declare const NSTableCellView: cocoa.classes.NSTableCellView;
