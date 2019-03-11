/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOwningObserverProtocol<T = any> extends cocoa.NSObserverProtocol {
    setObservation<R = void, P0 = cocoa.NSObservation>(_setObservation: P0): R;
  }
  namespace classes {
    export interface NSOwningObserverProtocol<T = any> extends cocoa.classes.NSObserverProtocol {  }
  }
}

declare const NSOwningObserverProtocol: cocoa.classes.NSOwningObserverProtocol;
