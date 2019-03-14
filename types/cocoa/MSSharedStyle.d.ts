/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedStyle<T0 = void, T1 = void, T2 = void> extends _MSSharedStyle, MSSharedObjectStylingProtocol, MSSharedStylePastingProtocol {
    initWithName_style<R = unknown, P0 = unknown, P1 = unknown>(_initWithName: P0, _style: P1): R;
    shareableObjectReferenceClass_bc<R = unknown>(): R;
    generateTextPreviewForSyncSheettWithSize_backingScale_colorSpace_completionBlock<R = void, P0 = CGSize, P1 = number, P2 = unknown, P3 = CDUnknownBlockType>(_generateTextPreviewForSyncSheettWithSize: P0, _backingScale: P1, _colorSpace: P2, _completionBlock: P3): R;
    updateToMatch<R = void, P0 = MSModelObject>(_updateToMatch: P0): R;
    resetReferencingInstances<R = void>(): R;
    allInstances<R = unknown>(): R;
    allLayersInstances<R = unknown>(): R;
    style<R = MSStyle>(): R;
    currentObjectID_MSSharedStylePasting<R = NSString>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSSharedStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSSharedStyle, MSSharedObjectStylingProtocol, MSSharedStylePastingProtocol {
      alloc<R = MSSharedStyle>(): R;
      new: <R = MSSharedStyle>() => R;
    }
  }
}

declare const MSSharedStyle: cocoa.MSSharedStyle.CLASS;
