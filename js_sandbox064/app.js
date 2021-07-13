let windowVariableCannotReachScopeFunction = true;
let windowVariable = true;
while (windowVariable) {
  let scopeFunction = () => {
    console.log(`inside this arrow function, and inside this while loop, it\'s ${windowVariable} that it can access windowVariable`);
  }
  scopeFunction();
  break;
}