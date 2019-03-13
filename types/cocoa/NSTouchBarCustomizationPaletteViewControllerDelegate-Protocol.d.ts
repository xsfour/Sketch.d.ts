/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteViewControllerDelegateProtocol<T = any> extends NSObjectProtocol {
    controllerAccessibilityResetTouchBar<R = void, P0 = NSTouchBarCustomizationPaletteViewController>(_controllerAccessibilityResetTouchBar: P0): R;
    controller_accessibilityAddItem<R = void, P0 = NSTouchBarCustomizationPaletteViewController, P1 = NSTouchBarItem>(_controller: P0, _accessibilityAddItem: P1): R;
    controllerDidEndDragging<R = void, P0 = NSTouchBarCustomizationPaletteViewController>(_controllerDidEndDragging: P0): R;
    controllerWillBeginDragging<R = void, P0 = NSTouchBarCustomizationPaletteViewController>(_controllerWillBeginDragging: P0): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPaletteViewControllerDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
