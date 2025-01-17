// import wasm from './main.wasm';
// import "./wasm_exec.js"

// const go = new Go(); // Defined in wasm_exec.js. Don't forget to add this in your index.html.


// console.log(wasm)
// debugger
// const runWasmAdd = async () => {
//     // Get the importObject from the go instance.
//     const importObject = go.importObject;

//     // Instantiate our wasm module
//     const wasmModule = await wasmBrowserInstantiate("./main.wasm", importObject);

//     // Allow the wasm_exec go instance, bootstrap and execute our wasm module
//     go.run(wasmModule.instance);

//     // Call the Add function export from wasm, save the result
//     const addResult = wasmModule.instance.exports.add(24, 24);

//     // Set the result onto the body
//     document.body.textContent = `Hello World! addResult: ${addResult}`;
// };
// runWasmAdd();

import sample from './main.wasm';

sample().then(({ instance }) => {
    console.log(instance.exports.main());
});
