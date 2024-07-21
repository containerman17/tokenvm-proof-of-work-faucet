#!/bin/bash
set -exu
cp $(tinygo env TINYGOROOT)/targets/wasm_exec.js .
npm run build
tinygo build -o main.wasm -opt=2 -no-debug -target wasm main.go