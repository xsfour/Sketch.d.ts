/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedStyle<T = any> extends cocoa._MSSharedStyle, cocoa.MSSharedObjectStylingProtocol, cocoa.MSSharedStylePastingProtocol {
    initWithName_style<R = unknown, P0 = unknown, P1 = unknown>(_initWithName: P0, _style: P1): R;
    shareableObjectReferenceClass_bc<R = unknown>(): R;
    generateTextPreviewForSyncSheettWithSize_backingScale_colorSpace_completionBlock<R = void, P0 = cocoa.CGSize, P1 = number, P2 = unknown, P3 = cocoa.CDUnknownBlockType>(_generateTextPreviewForSyncSheettWithSize: P0, _backingScale: P1, _colorSpace: P2, _completionBlock: P3): R;
    updateToMatch<R = void, P0 = cocoa.MSModelObject>(_updateToMatch: P0): R;
    resetReferencingInstances<R = void>(): R;
    allInstances<R = unknown>(): R;
    allLayersInstances<R = unknown>(): R;
    style<R = cocoa.MSStyle>(): R;
    currentObjectID_MSSharedStylePasting<R = cocoa.NSString>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSSharedStyle<T = any> extends cocoa.classes._MSSharedStyle, cocoa.classes.MSSharedObjectStylingProtocol, cocoa.classes.MSSharedStylePastingProtocol {
      alloc<R = MSSharedStyle>(): R;
      new: <R = MSSharedStyle>() => R;
    }
  }
}

declare const MSSharedStyle: cocoa.classes.MSSharedStyle;
