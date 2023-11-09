import { ChildDom } from 'vanjs-core';

type Props = Record<string, unknown>;

type FC<T extends Props> = (props: T, children?: ChildDom) => any;

type Node = {
  name: string;
  isRoot: boolean;
  children: Node[];
  parent: Node | null;
};

export type { Props, FC, Node };
