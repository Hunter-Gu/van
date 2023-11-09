import { Node } from "./types";

let current: Node | null;

/* public api */
export function getCurrentNode() {
  if (!current){
    throw new Error('Can only call getCurrentNode at top of a functional component')
  }
  return current;
}

/* internal API */
export function _getCurrentNode() {
  return current;
}

export function _setCurrentNode(node: Node | null) {
  current = node;
}
