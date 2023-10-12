function run() {
  console.log("Excution after 2s");
}

console.log("Start");
setTimeout(run, 2000);
console.log("End");

function runRun() {
  console.log("Excution after 1s");
}

console.log("Start");
setTimeout(runRun, 1000);
console.log("End");

// 하나만 내보낼 경우
export default run;

// 여러개 내보낼 경우
export { run, runRun };
