/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableLayer<T = any> extends cocoa.MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    frame<R = cocoa.MSImmutableRect>(): R;
    setFrame<R = void, P0 = cocoa.MSImmutableRect>(_v: P0): R;
    flow<R = cocoa.MSImmutableFlowConnection>(): R;
    setFlow<R = void, P0 = cocoa.MSImmutableFlowConnection>(_v: P0): R;
    exportOptions<R = cocoa.MSImmutableExportOptions>(): R;
    setExportOptions<R = void, P0 = cocoa.MSImmutableExportOptions>(_v: P0): R;
    userInfo<R = cocoa.NSDictionary>(): R;
    setUserInfo<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    shouldBreakMaskChain<R = boolean>(): R;
    setShouldBreakMaskChain<R = void, P0 = boolean>(_v: P0): R;
    rotation<R = number>(): R;
    setRotation<R = void, P0 = number>(_v: P0): R;
    resizingType<R = number>(): R;
    setResizingType<R = void, P0 = number>(_v: P0): R;
    resizingConstraint<R = number>(): R;
    setResizingConstraint<R = void, P0 = number>(_v: P0): R;
    originalObjectID<R = cocoa.NSString>(): R;
    setOriginalObjectID<R = void, P0 = cocoa.NSString>(_v: P0): R;
    nameIsFixed<R = boolean>(): R;
    setNameIsFixed<R = void, P0 = boolean>(_v: P0): R;
    name<R = cocoa.NSString>(): R;
    setName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    layerListExpandedType<R = number>(): R;
    setLayerListExpandedType<R = void, P0 = number>(_v: P0): R;
    isVisible<R = boolean>(): R;
    setIsVisible<R = void, P0 = boolean>(_v: P0): R;
    isLocked<R = boolean>(): R;
    setIsLocked<R = void, P0 = boolean>(_v: P0): R;
    isFlippedVertical<R = boolean>(): R;
    setIsFlippedVertical<R = void, P0 = boolean>(_v: P0): R;
    isFlippedHorizontal<R = boolean>(): R;
    setIsFlippedHorizontal<R = void, P0 = boolean>(_v: P0): R;
    isFixedToViewport<R = boolean>(): R;
    setIsFixedToViewport<R = void, P0 = boolean>(_v: P0): R;
    booleanOperation<R = number>(): R;
    setBooleanOperation<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableLayer<T = any> extends cocoa.classes.MSImmutableModelObject {
      alloc<R = _MSImmutableLayer>(): R;
      new: <R = _MSImmutableLayer>() => R;
    }
  }
}
