import { ChildDom } from 'vanjs-core';
import { _getCurrentNode, _setCurrentNode } from './currentNode';
import { FC, Node, Props } from './types';

export function createComponent<T extends Props, Children = ChildDom>(
  fn: FC<T, Children>,
  { name }: { name?: string } = {}
) {
  const Component = (props?: T, children?: Children) => {
    const current = _getCurrentNode();
    const node: Node = {
      name: name || fn.name || 'Anonymous',
      isRoot: !current,
      children: [],
      parent: null,
    };

    if (current) {
      current.children.push(node);
      node.parent = current;
    }

    _setCurrentNode(node);

    const dom = fn(props || ({} as T), children);

    _setCurrentNode(node.parent);

    return dom;
  };

  return Component;
}
