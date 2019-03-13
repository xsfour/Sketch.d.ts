/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNibBindingConnector<T = any> extends NSNibConnector, NSCodingProtocol {
    description<R = unknown>(): R;
    _previousNibBindingConnector<R = unknown>(): R;
    _setPreviousNibBindingConnector<R = void, P0 = unknown>(__setPreviousNibBindingConnector: P0): R;
    options<R = unknown>(): R;
    setOptions<R = void, P0 = unknown>(_setOptions: P0): R;
    keyPath<R = unknown>(): R;
    setKeyPath<R = void, P0 = unknown>(_setKeyPath: P0): R;
    binding<R = unknown>(): R;
    setBinding<R = void, P0 = unknown>(_setBinding: P0): R;
    _updateLabel<R = void>(): R;
    _updateForVersion<R = void, P0 = number>(__updateForVersion: P0): R;
  }
  namespace classes {
    export interface NSNibBindingConnector<T = any> extends NSNibConnector, NSCodingProtocol {
      alloc<R = NSNibBindingConnector>(): R;
      new: <R = NSNibBindingConnector>() => R;
    }
  }
}

declare const NSNibBindingConnector: cocoa.classes.NSNibBindingConnector;
