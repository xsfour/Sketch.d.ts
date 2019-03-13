/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPredicateVisitorProtocol<T = any> {
    visitPredicateOperator<R = void, P0 = NSPredicateOperator>(_visitPredicateOperator: P0): R;
    visitPredicateExpression<R = void, P0 = NSExpression>(_visitPredicateExpression: P0): R;
    visitPredicate<R = void, P0 = NSPredicate>(_visitPredicate: P0): R;
  }
  namespace classes {
    export interface NSPredicateVisitorProtocol<T = any> {  }
  }
}
