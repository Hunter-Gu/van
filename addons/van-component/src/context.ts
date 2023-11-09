import { getCurrentNode } from './currentNode';
import { createComponent } from './createComponent';
import { ChildDom } from 'vanjs-core';
import { Node } from './types';

interface ContextNode<T> extends Node {
  context?: {
    [name: symbol]: true;
    value: T;
  };
}

function findParent<T>(
  node: ContextNode<T>,
  contextId: symbol,
  defaultValue: T
) {
  let cur: ContextNode<T> | null = node;
  while (cur) {
    if (cur.context?.[contextId]) {
      return cur.context.value;
    }
    cur = cur.parent;
  }

  return defaultValue;
}

export function createContext<T>(value: T) {
  const contextId = Symbol();

  const Provider = createComponent<{ value: T }, () => ChildDom>(
    (props, children) => {
      const node = getCurrentNode() as ContextNode<T>;
      node.context = {
        value: props.value,
        [contextId]: true,
      };

      return children?.();
    },
    { name: 'Provider' }
  );

  function consume() {
    const node = getCurrentNode() as ContextNode<T>;
    return findParent(node, contextId, value);
  }

  return {
    Provider,
    consume,
  };
}
