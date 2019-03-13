/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCSketchFileMigratorError<T = any> extends NSError {}
  namespace classes {
    export interface BCSketchFileMigratorError<T = any> extends NSError {
      alloc<R = BCSketchFileMigratorError>(): R;
      new: <R = BCSketchFileMigratorError>() => R;
      errorWithCode_underlyingCode_missingFonts<R = unknown, P0 = number, P1 = number, P2 = unknown>(_errorWithCode: P0, _underlyingCode: P1, _missingFonts: P2): R;
      errorWithCode<R = unknown, P0 = number>(_errorWithCode: P0): R;
    }
  }
}

declare const BCSketchFileMigratorError: cocoa.classes.BCSketchFileMigratorError;
