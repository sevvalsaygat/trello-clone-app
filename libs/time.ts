function wait(ms: number, fn: Function) {
  setTimeout(fn, ms);
}

export default { wait };
