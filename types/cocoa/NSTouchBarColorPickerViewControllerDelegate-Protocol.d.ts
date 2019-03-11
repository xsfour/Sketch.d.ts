/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerViewControllerDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    colorPickerViewController_didSelectColor<R = void, P0 = cocoa.NSTouchBarColorPickerViewController, P1 = cocoa.NSColor>(_colorPickerViewController: P0, _didSelectColor: P1): R;
    colorPicker_didChangeCurrentModeFrom_to<R = void, P0 = cocoa.NSTouchBarColorPickerViewController, P1 = number, P2 = number>(_colorPicker: P0, _didChangeCurrentModeFrom: P1, _to: P2): R;
    colorPickerViewControllerDidCancel<R = void, P0 = cocoa.NSTouchBarColorPickerViewController>(_colorPickerViewControllerDidCancel: P0): R;
    colorPickerViewControllerDidEnd<R = void, P0 = cocoa.NSTouchBarColorPickerViewController>(_colorPickerViewControllerDidEnd: P0): R;
    colorPickerViewControllerWillBegin<R = void, P0 = cocoa.NSTouchBarColorPickerViewController>(_colorPickerViewControllerWillBegin: P0): R;
  }
  namespace classes {
    export interface NSTouchBarColorPickerViewControllerDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSTouchBarColorPickerViewControllerDelegateProtocol: cocoa.classes.NSTouchBarColorPickerViewControllerDelegateProtocol;
