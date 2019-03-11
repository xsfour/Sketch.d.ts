/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarFinderObserverProtocol<T = any> extends cocoa.NSObjectProtocol {
    touchBarFinder_updatedTouchBars<R = void, P0 = cocoa.NSTouchBarFinder, P1 = cocoa.NSArray>(_touchBarFinder: P0, _updatedTouchBars: P1): R;
    touchBarFinder_touchBarProvidersForProviderContainer<R = cocoa.NSArray, P0 = cocoa.NSTouchBarFinder, P1 = cocoa.NSTouchBarProviderContainer>(_touchBarFinder: P0, _touchBarProvidersForProviderContainer: P1): R;
  }
  namespace classes {
    export interface NSTouchBarFinderObserverProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSTouchBarFinderObserverProtocol: cocoa.classes.NSTouchBarFinderObserverProtocol;
