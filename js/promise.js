const promise = new Promise((res, rej) => {
  setTimeout(() => {
    res();
  }, 3000);
});

//!=========================================

function onFullfield() {
  console.log(`ням, ням!!!`);
}
function onRejected() {
  console.log(`поверніть мої гроші!!!`);
}

promise.then(onFullfield, onRejected);
