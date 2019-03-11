/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewSectionLayoutDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    sectionLayout_itemStateForItemAtIndex_withFrame<R = number, P0 = cocoa.NSTouchBarCustomizationPreviewSectionLayout, P1 = number, P2 = cocoa.CGRect>(_sectionLayout: P0, _itemStateForItemAtIndex: P1, _withFrame: P2): R;
    sectionLayout_descriptionForItemAtIndex<R = cocoa.NSTouchBarCustomizationPreviewSectionLayoutItemDescription, P0 = cocoa.NSTouchBarCustomizationPreviewSectionLayout, P1 = number>(_sectionLayout: P0, _descriptionForItemAtIndex: P1): R;
    sectionLayoutIsVisible<R = boolean, P0 = cocoa.NSTouchBarCustomizationPreviewSectionLayout>(_sectionLayoutIsVisible: P0): R;
    paddingForSectionLayout<R = cocoa.NSEdgeInsets, P0 = cocoa.NSTouchBarCustomizationPreviewSectionLayout>(_paddingForSectionLayout: P0): R;
    containmentRectForSectionLayout<R = cocoa.CGRect, P0 = cocoa.NSTouchBarCustomizationPreviewSectionLayout>(_containmentRectForSectionLayout: P0): R;
    numberOfItemsForSectionLayout<R = number, P0 = cocoa.NSTouchBarCustomizationPreviewSectionLayout>(_numberOfItemsForSectionLayout: P0): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPreviewSectionLayoutDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSTouchBarCustomizationPreviewSectionLayoutDelegateProtocol: cocoa.classes.NSTouchBarCustomizationPreviewSectionLayoutDelegateProtocol;
