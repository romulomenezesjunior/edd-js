import {Stack} from "./class-stack.js"

const s = new Stack()

console.log(s.isEmpty())
s.push(4)
s.push("dog")
console.log(s.peek())
s.push(true)
console.log(s.size())
s.push(8.4)
console.log(s.pop())
console.log(s.pop())
console.log(s.pop())
console.log(s.size())