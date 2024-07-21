//go:build js && wasm
// +build js,wasm

package main

import (
	"syscall/js"

	"github.com/containerman17/tokenvm-proof-of-work-faucet/challenge"
)

func searchWrapper() js.Func {
	return js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		handler := js.FuncOf(func(this js.Value, args []js.Value) interface{} {
			resolve := args[0]
			reject := args[1]
			_ = reject

			go func() {
				salt := []byte(args[0].String())
				difficulty := uint16(args[1].Int())
				cores := args[2].Int()

				solution, attempted := challenge.Search(salt, difficulty, cores)

				result := map[string]interface{}{
					"solution":  solution,
					"attempted": attempted,
				}

				resolve.Invoke(js.ValueOf(result))
			}()

			return nil
		})

		promiseConstructor := js.Global().Get("Promise")
		return promiseConstructor.New(handler)
	})
}

func main() {
	c := make(chan struct{}, 0)

	js.Global().Set("search", searchWrapper())

	<-c
}
