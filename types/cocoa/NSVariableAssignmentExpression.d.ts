/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVariableAssignmentExpression<T = any> extends NSExpression {
    hash<R = number>(): R;
    variable<R = unknown>(): R;
    assignmentVariable<R = unknown>(): R;
    initWithAssignmentExpression_expression<R = unknown, P0 = unknown, P1 = unknown>(_initWithAssignmentExpression: P0, _expression: P1): R;
    initWithAssignmentVariable_expression<R = unknown, P0 = unknown, P1 = unknown>(_initWithAssignmentVariable: P0, _expression: P1): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSVariableAssignmentExpression<T = any> extends NSExpression {
      alloc<R = NSVariableAssignmentExpression>(): R;
      new: <R = NSVariableAssignmentExpression>() => R;
    }
  }
}

declare const NSVariableAssignmentExpression: cocoa.classes.NSVariableAssignmentExpression;
