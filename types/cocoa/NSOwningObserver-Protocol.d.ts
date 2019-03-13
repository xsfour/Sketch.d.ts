/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOwningObserverProtocol<T = any> extends NSObserverProtocol {
    setObservation<R = void, P0 = NSObservation>(_setObservation: P0): R;
  }
  namespace classes {
    export interface NSOwningObserverProtocol<T = any> extends NSObserverProtocol {  }
  }
}
