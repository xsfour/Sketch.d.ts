/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewControllerPrivateData<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    constrainServiceScreenFrameBlock<R = cocoa.CDUnknownBlockType>(): R;
    setConstrainServiceScreenFrameBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    segueDestinationOptions<R = cocoa.NSDictionary>(): R;
    setSegueDestinationOptions<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    topLevelObjectsToKeepAliveFromStoryboard<R = cocoa.NSArray>(): R;
    setTopLevelObjectsToKeepAliveFromStoryboard<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    externalObjectEntryTableForViewLoading<R = cocoa.NSDictionary>(): R;
    setExternalObjectEntryTableForViewLoading<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    storyboard<R = cocoa.NSStoryboard>(): R;
    setStoryboard<R = void, P0 = cocoa.NSStoryboard>(_v: P0): R;
    segueTemplates<R = cocoa.NSArray>(): R;
    setSegueTemplates<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    identifier<R = cocoa.NSString>(): R;
    setIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
    appearanceTransitionCount<R = number>(): R;
    setAppearanceTransitionCount<R = void, P0 = number>(_v: P0): R;
    presentedViewControllers<R = cocoa.NSMutableArray>(): R;
    setPresentedViewControllers<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    childViewControllers<R = cocoa.NSMutableArray>(): R;
    setChildViewControllers<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    modalSessionForPresentedViewController<R = cocoa._NSModalSession>(): R;
    setModalSessionForPresentedViewController<R = void, P0 = cocoa._NSModalSession>(_v: P0): R;
    parentViewController<R = cocoa.NSViewController>(): R;
    setParentViewController<R = void, P0 = cocoa.NSViewController>(_v: P0): R;
  }
  namespace classes {
    export interface _NSViewControllerPrivateData<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSViewControllerPrivateData>(): R;
      new: <R = _NSViewControllerPrivateData>() => R;
    }
  }
}
