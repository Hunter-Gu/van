import { Node } from "./types";

let current: Node | null;

export function getCurrentNode() {
  return current;
}

export function setCurrentNode(node: Node | null) {
  current = node;
}
