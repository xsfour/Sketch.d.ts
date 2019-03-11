/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNextStepFrame<T = any> extends cocoa.NSView {
    _autosaveButtonSeparatorField<R = unknown>(): R;
    autosaveButton<R = unknown>(): R;
    fileButton<R = unknown>(): R;
    _maxTitlebarTitleRect<R = cocoa.CGRect>(): R;
    _titlebarTitleRect<R = cocoa.CGRect>(): R;
    _autosaveButtonOrigin<R = cocoa.CGPoint>(): R;
    _autosaveButtonSeparatorFieldOrigin<R = cocoa.CGPoint>(): R;
    _fileButtonOrigin<R = cocoa.CGPoint>(): R;
    _renamingDidEndNormally<R = void, P0 = boolean>(__renamingDidEndNormally: P0): R;
    _didEnd_renameWithTitle_editingRange_grantHandler<R = void, P0 = boolean, P1 = unknown, P2 = cocoa._NSRange, P3 = cocoa.CDUnknownBlockType>(__didEnd: P0, _renameWithTitle: P1, _editingRange: P2, _grantHandler: P3): R;
    _willStartRenameWithTitle_editingRange<R = void, P0 = unknown, P1 = cocoa._NSRange>(__willStartRenameWithTitle: P0, _editingRange: P1): R;
    _clearPressedButtons<R = void>(): R;
    styleMask<R = number>(): R;
    setStyleMask<R = void, P0 = number>(_setStyleMask: P0): R;
    aspectRatio<R = cocoa.CGSize>(): R;
    setAspectRatio<R = void, P0 = cocoa.CGSize>(_setAspectRatio: P0): R;
    resizeIncrements<R = cocoa.CGSize>(): R;
    setResizeIncrements<R = void, P0 = cocoa.CGSize>(_setResizeIncrements: P0): R;
    setDocumentEdited<R = void, P0 = boolean>(_setDocumentEdited: P0): R;
    _setNonactivatingPanel<R = void, P0 = boolean>(__setNonactivatingPanel: P0): R;
    _setUtilityWindow<R = void, P0 = boolean>(__setUtilityWindow: P0): R;
    _setCloseEnabled<R = void, P0 = boolean>(__setCloseEnabled: P0): R;
    tile<R = void>(): R;
    _resetDragMargins<R = void>(): R;
    _clearDragMargins<R = void>(): R;
    _calcTextRect<R = void, P0 = cocoa.CGRect>(__calcTextRect: P0): R;
    titlebarRect<R = cocoa.CGRect>(): R;
    isOpaque<R = boolean>(): R;
    fontSmoothingBackgroundColor<R = unknown>(): R;
    usesCustomDrawing<R = boolean>(): R;
    needsFill<R = boolean>(): R;
    contentAlpha<R = number>(): R;
    contentFill<R = unknown>(): R;
    _isHUDWindow<R = boolean>(): R;
    titleRect<R = cocoa.CGRect>(): R;
    setCloseAction<R = unknown, P0 = string>(_setCloseAction: P0): R;
    setCloseTarget<R = unknown, P0 = unknown>(_setCloseTarget: P0): R;
    title<R = unknown>(): R;
    titleFont<R = unknown>(): R;
    _resize<R = unknown, P0 = unknown>(__resize: P0): R;
    doClose<R = unknown, P0 = unknown>(_doClose: P0): R;
    setTitle_andDefeatWrap<R = void, P0 = unknown, P1 = boolean>(_setTitle: P0, _andDefeatWrap: P1): R;
    setTitle<R = void, P0 = unknown>(_setTitle: P0): R;
    _setFrameNeedsDisplay<R = void, P0 = boolean>(__setFrameNeedsDisplay: P0): R;
    _edgeResizingTrackingAreas<R = unknown>(): R;
    contentLayoutGuide<R = unknown>(): R;
    doIconify<R = unknown, P0 = unknown>(_doIconify: P0): R;
    zoomButton<R = unknown>(): R;
    minimizeButton<R = unknown>(): R;
    closeButton<R = unknown>(): R;
    _updateButtons<R = void>(): R;
    _validFrameForResizeFrame_fromResizeEdge<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = number>(__validFrameForResizeFrame: P0, _fromResizeEdge: P1): R;
    minFrameSizeForMinContentSize_styleMask<R = cocoa.CGSize, P0 = cocoa.CGSize, P1 = number>(_minFrameSizeForMinContentSize: P0, _styleMask: P1): R;
    contentRectForFrameRect_styleMask<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = number>(_contentRectForFrameRect: P0, _styleMask: P1): R;
    frameRectForContentRect_styleMask<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = number>(_frameRectForContentRect: P0, _styleMask: P1): R;
    opaqueAncestor<R = unknown>(): R;
    backgroundColorChanged<R = void, P0 = unknown>(_backgroundColorChanged: P0): R;
    shapeWindow<R = void>(): R;
    _createWindowOpaqueShape<R = cocoa.CGSRegionObject>(): R;
    _windowOpaqueRect<R = cocoa.CGRect>(): R;
    initWithFrame_styleMask_owner<R = unknown, P0 = cocoa.CGRect, P1 = number, P2 = unknown>(_initWithFrame: P0, _styleMask: P1, _owner: P2): R;
    setRepresentedFilename<R = void, P0 = unknown>(_setRepresentedFilename: P0): R;
    _distanceFromToolbarBaseToTitlebar<R = number>(): R;
    _hideToolbarWithAnimation<R = void, P0 = boolean>(__hideToolbarWithAnimation: P0): R;
    _showToolbarWithAnimation<R = void, P0 = boolean>(__showToolbarWithAnimation: P0): R;
    _toolbarIsManagedByExternalWindow<R = boolean>(): R;
    _toolbarIsHidden<R = boolean>(): R;
    _toolbarIsShown<R = boolean>(): R;
    _toolbarIsInTransition<R = boolean>(): R;
    _canHaveToolbar<R = boolean>(): R;
    dragRectForFrameRect<R = cocoa.CGRect, P0 = cocoa.CGRect>(_dragRectForFrameRect: P0): R;
  }
  namespace classes {
    export interface NSNextStepFrame<T = any> extends cocoa.classes.NSView {
      alloc<R = NSNextStepFrame>(): R;
      new: <R = NSNextStepFrame>() => R;
      _validateStyleMask<R = number, P0 = number>(__validateStyleMask: P0): R;
      minContentSizeForMinFrameSize_styleMask<R = cocoa.CGSize, P0 = cocoa.CGSize, P1 = number>(_minContentSizeForMinFrameSize: P0, _styleMask: P1): R;
      minFrameWidthWithTitle_styleMask<R = number, P0 = unknown, P1 = number>(_minFrameWidthWithTitle: P0, _styleMask: P1): R;
      load<R = void>(): R;
    }
  }
}

declare const NSNextStepFrame: cocoa.classes.NSNextStepFrame;
