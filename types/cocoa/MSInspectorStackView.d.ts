/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorStackView<T = any> extends NSView {
    cxx_destruct<R = void>(): R;
    enclosingStackView<R = unknown>(): R;
    isFlipped<R = boolean>(): R;
    reloadWithViewControllers<R = void, P0 = unknown>(_reloadWithViewControllers: P0): R;
    subViewFrameDidChange<R = void, P0 = unknown>(_subViewFrameDidChange: P0): R;
    stack<R = void>(): R;
    recalculateHeight<R = void, P0 = unknown>(_recalculateHeight: P0): R;
    reloadSubviews<R = void>(): R;
    sectionViews<R = NSArray>(): R;
    setSectionViews<R = void, P0 = NSArray>(_v: P0): R;
    sectionViewControllers<R = NSArray>(): R;
    setSectionViewControllers<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface MSInspectorStackView<T = any> extends NSView {
      alloc<R = MSInspectorStackView>(): R;
      new: <R = MSInspectorStackView>() => R;
    }
  }
}

declare const MSInspectorStackView: cocoa.classes.MSInspectorStackView;
