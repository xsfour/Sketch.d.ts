/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSVectorCanvasDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    vectorCanvasDidEditPoints<R = void, P0 = cocoa.MSVectorCanvas>(_vectorCanvasDidEditPoints: P0): R;
    vectorCanvas_didSelectLayers<R = void, P0 = cocoa.MSVectorCanvas, P1 = cocoa.NSArray>(_vectorCanvas: P0, _didSelectLayers: P1): R;
    vectorCanvasDidFinishInteractiveSelection<R = void, P0 = cocoa.MSVectorCanvas>(_vectorCanvasDidFinishInteractiveSelection: P0): R;
    vectorCanvas_didDeselectHandlesAtIndexPaths<R = void, P0 = cocoa.MSVectorCanvas, P1 = cocoa.NSArray>(_vectorCanvas: P0, _didDeselectHandlesAtIndexPaths: P1): R;
    vectorCanvas_didSelectHandlesAtIndexPaths<R = void, P0 = cocoa.MSVectorCanvas, P1 = cocoa.NSArray>(_vectorCanvas: P0, _didSelectHandlesAtIndexPaths: P1): R;
    vectorCanvas_didUnhighlightHandleAtIndexPath<R = void, P0 = cocoa.MSVectorCanvas, P1 = cocoa.NSIndexPath>(_vectorCanvas: P0, _didUnhighlightHandleAtIndexPath: P1): R;
    vectorCanvas_didHighlightHandleAtIndexPath<R = void, P0 = cocoa.MSVectorCanvas, P1 = cocoa.NSIndexPath>(_vectorCanvas: P0, _didHighlightHandleAtIndexPath: P1): R;
  }
  namespace classes {
    export interface MSVectorCanvasDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSVectorCanvasDelegateProtocol: cocoa.classes.MSVectorCanvasDelegateProtocol;
