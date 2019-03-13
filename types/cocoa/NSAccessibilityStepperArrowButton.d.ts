/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityStepperArrowButton<T = any> extends NSAccessibilityMockUIElement {
    increments<R = boolean>(): R;
    initWithIncrements_parent<R = unknown, P0 = boolean, P1 = unknown>(_initWithIncrements: P0, _parent: P1): R;
  }
  namespace classes {
    export interface NSAccessibilityStepperArrowButton<T = any> extends NSAccessibilityMockUIElement {
      alloc<R = NSAccessibilityStepperArrowButton>(): R;
      new: <R = NSAccessibilityStepperArrowButton>() => R;
      decrementButtonWithParent<R = unknown, P0 = unknown>(_decrementButtonWithParent: P0): R;
      incrementButtonWithParent<R = unknown, P0 = unknown>(_incrementButtonWithParent: P0): R;
    }
  }
}

declare const NSAccessibilityStepperArrowButton: cocoa.classes.NSAccessibilityStepperArrowButton;
