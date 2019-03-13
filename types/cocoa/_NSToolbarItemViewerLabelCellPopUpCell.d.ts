/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarItemViewerLabelCellPopUpCell<T = any> extends NSPopUpButtonCell {
    indexOfSelectedItem<R = number>(): R;
    _setTextShadow<R = void, P0 = boolean>(__setTextShadow: P0): R;
    _drawRealTitleWithFrame_inView<R = void, P0 = CGRect, P1 = unknown>(__drawRealTitleWithFrame: P0, _inView: P1): R;
    alignment<R = number>(): R;
    finishUsingMenuRepresentation<R = void>(): R;
    beginUsingMenuFormRepresentation<R = void, P0 = unknown>(_beginUsingMenuFormRepresentation: P0): R;
    _setRealTitle<R = void, P0 = unknown>(__setRealTitle: P0): R;
    itemViewer<R = unknown>(): R;
    setItemViewer<R = void, P0 = unknown>(_setItemViewer: P0): R;
    _accessibilityMenuFormRepresentationHasSubmenuAndOwnTargetAction<R = boolean>(): R;
    _accessibilityMenuFormRepresentationHasOwnTargetAction<R = boolean>(): R;
    _accessibilityMenuFormRepresentationHasSubmenu<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSToolbarItemViewerLabelCellPopUpCell<T = any> extends NSPopUpButtonCell {
      alloc<R = _NSToolbarItemViewerLabelCellPopUpCell>(): R;
      new: <R = _NSToolbarItemViewerLabelCellPopUpCell>() => R;
    }
  }
}
