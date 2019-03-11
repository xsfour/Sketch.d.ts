/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerTileContainerView<T = any> extends cocoa.NSView, cocoa.NSVisualTabPickerNewTabViewDelegateProtocol, cocoa.NSVisualTabPickerThumbnailDataSourceProtocol, cocoa.NSVisualTabPickerThumbnailDelegateProtocol {
    cxx_destruct<R = void>(): R;
    _tile3DTransform<R = cocoa.CATransform3D>(): R;
    _tileFrameForTileWithIndex<R = cocoa.CGRect, P0 = number>(__tileFrameForTileWithIndex: P0): R;
    _updateTilesLayout<R = void>(): R;
    _createTileAtIndex<R = void, P0 = number>(__createTileAtIndex: P0): R;
    _containerTileFrame<R = cocoa.CGRect>(): R;
    _setUpTiles<R = void>(): R;
    _setUp3DContainerForTiles<R = void>(): R;
    _createNewTabContainerView<R = void>(): R;
    _createTitleTextField<R = unknown>(): R;
    _setUpTitleView<R = void>(): R;
    _showCloseButtonAndExposeBorderIfNeededWithMouseLocation<R = void, P0 = cocoa.CGPoint>(__showCloseButtonAndExposeBorderIfNeededWithMouseLocation: P0): R;
    cleanupAnimationsForThumbnailAtIndex<R = void, P0 = number>(_cleanupAnimationsForThumbnailAtIndex: P0): R;
    animateToolbarForThumbnailAtIndex_image_height_gridAnimation<R = void, P0 = number, P1 = unknown, P2 = number, P3 = number>(_animateToolbarForThumbnailAtIndex: P0, _image: P1, _height: P2, _gridAnimation: P3): R;
    animateSidebarForThumbnailAtIndex_image_width_gridAnimation<R = void, P0 = number, P1 = unknown, P2 = number, P3 = number>(_animateSidebarForThumbnailAtIndex: P0, _image: P1, _width: P2, _gridAnimation: P3): R;
    willStartAnimationExitAtIndex<R = void, P0 = number>(_willStartAnimationExitAtIndex: P0): R;
    thumbnailContainerFrameForThumbnailAtIndex<R = cocoa.CGRect, P0 = number>(_thumbnailContainerFrameForThumbnailAtIndex: P0): R;
    _startStackFoldingAnimation_animationDuration_indexOfSelectedTile<R = void, P0 = number, P1 = number, P2 = number>(__startStackFoldingAnimation: P0, _animationDuration: P1, _indexOfSelectedTile: P2): R;
    startTiltAnimation_animationDuration_indexOfSelectedTile<R = void, P0 = number, P1 = number, P2 = number>(_startTiltAnimation: P0, _animationDuration: P1, _indexOfSelectedTile: P2): R;
    willStartExitAnimation<R = void>(): R;
    entryAnimationHasFinished<R = void>(): R;
    hideCloseButtons<R = void>(): R;
    numberOfTilesInContainer<R = number>(): R;
    reloadTileAtIndex<R = void, P0 = number>(_reloadTileAtIndex: P0): R;
    removeTileAtIndex<R = void, P0 = number>(_removeTileAtIndex: P0): R;
    addTileAtIndex<R = void, P0 = number>(_addTileAtIndex: P0): R;
    setHidden<R = void, P0 = boolean>(_setHidden: P0): R;
    setFrame<R = void, P0 = cocoa.CGRect>(_setFrame: P0): R;
    initWithFrame_visualTabPickerGridView_containerType<R = unknown, P0 = cocoa.CGRect, P1 = unknown, P2 = number>(_initWithFrame: P0, _visualTabPickerGridView: P1, _containerType: P2): R;
    tileContainerType<R = number>(): R;
    setTileContainerType<R = void, P0 = number>(_v: P0): R;
    visualTabPickerGridView<R = cocoa.NSVisualTabPickerGridView>(): R;
    setVisualTabPickerGridView<R = void, P0 = cocoa.NSVisualTabPickerGridView>(_v: P0): R;
    delegate<R = cocoa.NSVisualTabPickerTileContainerDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSVisualTabPickerTileContainerDelegate>(_v: P0): R;
    dataSource<R = cocoa.NSVisualTabPickerTileContainerDataSource>(): R;
    setDataSource<R = void, P0 = cocoa.NSVisualTabPickerTileContainerDataSource>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSVisualTabPickerTileContainerView<T = any> extends cocoa.classes.NSView, cocoa.classes.NSVisualTabPickerNewTabViewDelegateProtocol, cocoa.classes.NSVisualTabPickerThumbnailDataSourceProtocol, cocoa.classes.NSVisualTabPickerThumbnailDelegateProtocol {
      alloc<R = NSVisualTabPickerTileContainerView>(): R;
      new: <R = NSVisualTabPickerTileContainerView>() => R;
      offsetBetweenStackedThumbnails<R = cocoa.CGPoint>(): R;
      thumbnailYOffset<R = number>(): R;
    }
  }
}

declare const NSVisualTabPickerTileContainerView: cocoa.classes.NSVisualTabPickerTileContainerView;
