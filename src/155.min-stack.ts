/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 *
 * https://leetcode.com/problems/min-stack/description/
 *
 * algorithms
 * Easy (35.22%)
 * Total Accepted:    266.2K
 * Total Submissions: 749.9K
 * Testcase Example:  '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]'
 *
 *
 * Design a stack that supports push, pop, top, and retrieving the minimum
 * element in constant time.
 *
 *
 * push(x) -- Push element x onto stack.
 *
 *
 * pop() -- Removes the element on top of the stack.
 *
 *
 * top() -- Get the top element.
 *
 *
 * getMin() -- Retrieve the minimum element in the stack.
 *
 *
 *
 *
 * Example:
 *
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> Returns -3.
 * minStack.pop();
 * minStack.top();      --> Returns 0.
 * minStack.getMin();   --> Returns -2.
 *
 *
 */

namespace $155_min_stack {
  export class MinStack {
    private stack = new Stack<[number, number]>();
    pop() {
      const val = this.stack.pop();
      if (val) {
        return val[0];
      }
      return val;
    }
    push(val: number) {
      if (this.stack.empty()) {
        this.stack.push([val, val]);
      } else {
        const top = this.stack.top!;
        const min = top[1] > val ? val : top[1];
        this.stack.push([val, min]);
      }
    }
    top() {
      return this.stack.top && this.stack.top[0];
    }
    getMin() {
      return this.stack.top && this.stack.top[1];
    }
  }
}

mountNsToGlobal($155_min_stack);

// include (./utils/stack.ts)
// include (./utils/mount-to-global.ts)
