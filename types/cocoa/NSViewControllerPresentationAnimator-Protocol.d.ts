/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewControllerPresentationAnimatorProtocol<T = any> {
    animateDismissalOfViewController_fromViewController<R = void, P0 = NSViewController, P1 = NSViewController>(_animateDismissalOfViewController: P0, _fromViewController: P1): R;
    animatePresentationOfViewController_fromViewController<R = void, P0 = NSViewController, P1 = NSViewController>(_animatePresentationOfViewController: P0, _fromViewController: P1): R;
  }
  namespace classes {
    export interface NSViewControllerPresentationAnimatorProtocol<T = any> {  }
  }
}
