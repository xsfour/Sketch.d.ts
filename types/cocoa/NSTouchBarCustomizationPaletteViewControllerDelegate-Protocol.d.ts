/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteViewControllerDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    controllerAccessibilityResetTouchBar<R = void, P0 = cocoa.NSTouchBarCustomizationPaletteViewController>(_controllerAccessibilityResetTouchBar: P0): R;
    controller_accessibilityAddItem<R = void, P0 = cocoa.NSTouchBarCustomizationPaletteViewController, P1 = cocoa.NSTouchBarItem>(_controller: P0, _accessibilityAddItem: P1): R;
    controllerDidEndDragging<R = void, P0 = cocoa.NSTouchBarCustomizationPaletteViewController>(_controllerDidEndDragging: P0): R;
    controllerWillBeginDragging<R = void, P0 = cocoa.NSTouchBarCustomizationPaletteViewController>(_controllerWillBeginDragging: P0): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPaletteViewControllerDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSTouchBarCustomizationPaletteViewControllerDelegateProtocol: cocoa.classes.NSTouchBarCustomizationPaletteViewControllerDelegateProtocol;
