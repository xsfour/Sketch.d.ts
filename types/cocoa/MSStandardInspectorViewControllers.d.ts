/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStandardInspectorViewControllers<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    exportPreviewViewController<R = cocoa.MSExportPreviewInspectorSection>(): R;
    specialLayerViewController<R = cocoa.MSSpecialLayerViewController>(): R;
    appearanceInspectorSection<R = cocoa.MSAppearanceInspectorSection>(): R;
    flowInspectorViewController<R = cocoa.MSFlowInspectorSection>(): R;
    styleSection<R = cocoa.MSStyleInspectorSection>(): R;
    resizeSection<R = cocoa.MSResizeInspectorSection>(): R;
    geometryViewController<R = cocoa.MSGeometryInspectorSection>(): R;
  }
  namespace classes {
    export interface MSStandardInspectorViewControllers<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSStandardInspectorViewControllers>(): R;
      new: <R = MSStandardInspectorViewControllers>() => R;
    }
  }
}

declare const MSStandardInspectorViewControllers: cocoa.classes.MSStandardInspectorViewControllers;
