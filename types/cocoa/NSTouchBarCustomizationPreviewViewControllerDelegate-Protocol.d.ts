/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewViewControllerDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    controller_didSelectSection<R = void, P0 = cocoa.NSTouchBarCustomizationPreviewViewController, P1 = number>(_controller: P0, _didSelectSection: P1): R;
    controller_didResetBarNode_inItemTree<R = void, P0 = cocoa.NSTouchBarCustomizationPreviewViewController, P1 = cocoa.NSTouchBarItemTreeParentNode, P2 = cocoa.NSTouchBarItemTree>(_controller: P0, _didResetBarNode: P1, _inItemTree: P2): R;
    controller_didUpdateBarNode_inItemTree<R = void, P0 = cocoa.NSTouchBarCustomizationPreviewViewController, P1 = cocoa.NSTouchBarItemTreeParentNode, P2 = cocoa.NSTouchBarItemTree>(_controller: P0, _didUpdateBarNode: P1, _inItemTree: P2): R;
    controller_didRemoveQuickTypeFromBarNode_inItemTree<R = void, P0 = cocoa.NSTouchBarCustomizationPreviewViewController, P1 = cocoa.NSTouchBarItemTreeParentNode, P2 = cocoa.NSTouchBarItemTree>(_controller: P0, _didRemoveQuickTypeFromBarNode: P1, _inItemTree: P2): R;
    controllerDidComplete<R = void, P0 = cocoa.NSTouchBarCustomizationPreviewViewController>(_controllerDidComplete: P0): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPreviewViewControllerDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSTouchBarCustomizationPreviewViewControllerDelegateProtocol: cocoa.classes.NSTouchBarCustomizationPreviewViewControllerDelegateProtocol;
