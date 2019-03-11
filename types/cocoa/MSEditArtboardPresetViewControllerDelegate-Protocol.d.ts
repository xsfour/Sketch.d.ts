/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSEditArtboardPresetViewControllerDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    editArtboardPresetViewController_savePreset<R = void, P0 = cocoa.MSEditArtboardPresetViewController, P1 = cocoa.MSArtboardPreset>(_editArtboardPresetViewController: P0, _savePreset: P1): R;
  }
  namespace classes {
    export interface MSEditArtboardPresetViewControllerDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSEditArtboardPresetViewControllerDelegateProtocol: cocoa.classes.MSEditArtboardPresetViewControllerDelegateProtocol;
