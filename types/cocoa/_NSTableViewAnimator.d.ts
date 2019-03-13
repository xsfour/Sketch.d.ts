/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTableViewAnimator<T = any> extends _NSViewAnimator {
    selectRowIndexes_byExtendingSelection<R = void, P0 = unknown, P1 = boolean>(_selectRowIndexes: P0, _byExtendingSelection: P1): R;
  }
  namespace classes {
    export interface _NSTableViewAnimator<T = any> extends _NSViewAnimator {  }
  }
}
