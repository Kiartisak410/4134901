package main

import (
	"fmt"
	"net/http"
	"time"
	"github.com/gorilla/mux"
)

func main() {
	fmt.Println("Go Hello")
	fmt.Println(time.Now())

	router := mux.NewRouter()

	router.HandleFunc("/",index)

	http.ListenAndServe(":4000",router)
}

func index(res http.ResponseWriter,req *http.Request) {
	fmt.Println("Go Hello")
	fmt.Println(time.Now())
}