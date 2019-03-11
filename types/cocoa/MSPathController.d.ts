/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPathController<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    remove<R = void, P0 = unknown>(_remove: P0): R;
    changeCurveMode<R = void, P0 = number>(_changeCurveMode: P0): R;
    currentCurveMode<R = unknown>(): R;
    selectPrevious<R = void, P0 = unknown>(_selectPrevious: P0): R;
    selectNext<R = void, P0 = unknown>(_selectNext: P0): R;
    invalidateChangeContext<R = void>(): R;
    runChange_context<R = void, P0 = unknown, P1 = unknown>(_runChange: P0, _context: P1): R;
    runChange<R = void, P0 = unknown>(_runChange: P0): R;
    didChangeSelection<R = void>(): R;
    setSelectionIndexPath<R = void, P0 = unknown>(_setSelectionIndexPath: P0): R;
    content<R = cocoa.NSArray>(): R;
    setContent<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    changeContext<R = cocoa.MSShapeChangeContext>(): R;
    selectedObjects<R = cocoa.NSArray>(): R;
    selectionIndexPaths<R = cocoa.NSArray>(): R;
    setSelectionIndexPaths<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface MSPathController<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSPathController>(): R;
      new: <R = MSPathController>() => R;
      keyPathsForValuesAffectingSelectedObjects<R = unknown>(): R;
    }
  }
}

declare const MSPathController: cocoa.classes.MSPathController;
