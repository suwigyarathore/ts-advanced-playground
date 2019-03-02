interface TreeNode<T> {
  value: T;
  left: TreeNode<T>;
  right: TreeNode<T>;
}

interface LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T>;
}

let node: LinkedListNode<string>;

/*Redux dev states*/

interface Action {
  type: string;
}

interface ReduxNode<T> {
  value: T;
  next: ReduxNode<T> | null;
  prev: ReduxNode<T> | null;
}

let firstAction = { type: "LOGIN" };
let secondAction = { type: "LOAD_POSTS" };

let actionNode1: ReduxNode<Action> = {
  value: firstAction,
  next: null,
  prev: null
};

let actionNode2: ReduxNode<Action> = {
  value: secondAction,
  next: null,
  prev: actionNode1
};

actionNode1.next = actionNode2;
let currentNode: ReduxNode<Action> | null = actionNode2;
do {
  console.log(currentNode.value);
  currentNode = currentNode.prev;
} while (currentNode);
