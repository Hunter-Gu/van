import { ChildDom } from 'vanjs-core';
import { getCurrentNode, setCurrentNode } from './currentNode';
import { FC, Node, Props } from './types';

export function createComponent<T extends Props>(
  fn: FC<T>,
  { name }: { name?: string } = {}
) {
  const Component = (props: T, children?: ChildDom) => {
    const current = getCurrentNode();
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

    setCurrentNode(node);

    const result = fn(props, children);

    setCurrentNode(node.parent);

    return result;
  };

  return Component;
}
