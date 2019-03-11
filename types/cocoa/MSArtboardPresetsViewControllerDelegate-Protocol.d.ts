/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPresetsViewControllerDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    artboardPresetsViewController_didSelectPreset<R = void, P0 = cocoa.MSArtboardPresetsViewController, P1 = cocoa.MSArtboardPreset>(_artboardPresetsViewController: P0, _didSelectPreset: P1): R;
    showCustomPresetSheet<R = void, P0 = cocoa.MSArtboardPresetsViewController>(_showCustomPresetSheet: P0): R;
    artboardPresetsViewController_didSelectOrientation<R = void, P0 = cocoa.MSArtboardPresetsViewController, P1 = number>(_artboardPresetsViewController: P0, _didSelectOrientation: P1): R;
  }
  namespace classes {
    export interface MSArtboardPresetsViewControllerDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSArtboardPresetsViewControllerDelegateProtocol: cocoa.classes.MSArtboardPresetsViewControllerDelegateProtocol;
