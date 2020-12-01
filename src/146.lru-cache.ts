/*
 * @lc app=leetcode id=146 lang=typescript
 *
 * [146] LRU Cache
 */

// include (./utils/mount-to-global.ts)
// include (./utils/double-list-node.ts)

namespace $146 {
  type LRUListNode = DoubleListNode<{ key: number; value: number }>;

  // @lc code=start
  export class LRUCache {
    private head: Nullable<LRUListNode> = null;
    private end: Nullable<LRUListNode> = null;
    private map = new Map<number, LRUListNode>();
    private readonly capacity: number;
    constructor(capacity: number) {
      this.capacity = capacity;
    }

    get(key: number): number {
      if (this.map.has(key)) {
        const node = this.map.get(key)!;
        this.$internal_put_to_head(node);
        return node.val.value;
      }
      return -1;
    }

    put(key: number, value: number): void {
      if (this.map.has(key)) {
        const node = this.map.get(key)!;
        node.val.value = value;
        this.$internal_put_to_head(node);
      } else {
        const node = new DoubleListNode({ key, value });
        this.$internal_put_to_head(node);
        this.map.set(key, node);
        if (this.map.size > this.capacity) {
          this.map.delete(this.end!.val.key);
          this.end = this.end!.pre;
          this.end!.next = null;
        }
      }
    }

    private $internal_put_to_head(node: LRUListNode) {
      if (node === this.head) {
        return;
      }

      const pre = node.pre;
      const next = node.next;

      if (this.end === node) {
        this.end = pre;
      }

      if (this.end === null) {
        this.end = node;
      }

      node.pre = null;
      node.next = this.head;

      if (pre) {
        pre.next = next;
      }

      if (next) {
        next.pre = pre;
      }

      if (this.head) {
        this.head.pre = node;
      }

      this.head = node;
    }
  }
}
mountNsToGlobal($146);

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
