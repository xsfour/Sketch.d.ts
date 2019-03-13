/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarFinderObserverProtocol<T = any> extends NSObjectProtocol {
    touchBarFinder_updatedTouchBars<R = void, P0 = NSTouchBarFinder, P1 = NSArray>(_touchBarFinder: P0, _updatedTouchBars: P1): R;
    touchBarFinder_touchBarProvidersForProviderContainer<R = NSArray, P0 = NSTouchBarFinder, P1 = NSTouchBarProviderContainer>(_touchBarFinder: P0, _touchBarProvidersForProviderContainer: P1): R;
  }
  namespace classes {
    export interface NSTouchBarFinderObserverProtocol<T = any> extends NSObjectProtocol {  }
  }
}
