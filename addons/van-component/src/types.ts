import { ChildDom } from 'vanjs-core';

type Props = Record<string, unknown>;

type FC<T extends Props, Children = ChildDom> = (
  props: T,
  children?: Children
) => any;

type Node = {
  name: string;
  isRoot: boolean;
  children: Node[];
  parent: Node | null;
  [prop: string]: unknown;
};

export type { Props, FC, Node };
