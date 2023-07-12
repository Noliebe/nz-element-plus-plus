import { reactive } from 'vue';

let nodeIdSeed = 0;
export default class Node {
    nodeId

    level

    childNodes

    data

    parent

    constructor(options) {
      nodeIdSeed += 1;
      this.nodeId = nodeIdSeed;
      this.data = null;
      this.parent = null;
      // this.visible = true

      Object.keys(options).forEach((name) => {
        this[name] = options[name];
      });

      // internal
      this.level = 0;
      this.childNodes = [];

      if (this.parent) {
        this.level = this.parent.level + 1;
      }
    }

    initialize() {
      const { store } = this;
      store.registerNode(this);
      this.setData(this.data);
    }

    setData(data) {
      this.data = data;
      this.childNodes = [];

      let children;
      if (this.level === 0 && Array.isArray(this.data)) {
        children = this.data;
      } else {
        children = this.data.children || [];
      }
      for (let i = 0, j = children.length; i < j; i += 1) {
        this.insertChild({ data: children[i] });
      }
    }

    insertChild(item, index) {
      let child = item;
      if (!(child instanceof Node)) {
        Object.assign(child, {
          parent: this,
          store: this.store,
        });
        child = reactive(new Node(child));
        if (child instanceof Node) {
          child.initialize();
        }
      }

      child.level = this.level + 1;

      if (typeof index === 'undefined' || index < 0) {
        this.childNodes.push(child);
      } else {
        this.childNodes.splice(index, 0, child);
      }
    }
}
