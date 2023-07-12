import Node from './node';

export default class StoreTree {
    root

    nodesMap = {}

    constructor(options) {
      this.root = new Node({
        data: options.data,
        store: this,
      });
      this.root.initialize();
    }

    registerNode(node) {
      this.nodesMap[node.key] = node;
    }
}
