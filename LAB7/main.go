package main

import (
	"fmt"

	"kiartisak.com/LAB7/structs"
)

func main() {

	const fname = "Kiartisak"
	var age = 20

	fmt.Printf("Hello...Go %s : %v \n", fname, age)

	if age > 20 {
		fmt.Println(" > 20")
	} else {
		fmt.Println(" < 20")
	}

	switch age {
	case 20:
		fmt.Println("Age is 20")
	case 25:
		fmt.Println("Age is 25")
	}

	for count := 0; count < 10; count++ {
		fmt.Printf("%v ", count)
	}
	result := add(10, 20)
	fmt.Printf("\n%d", result)

	var ptr *int
	fmt.Printf("\n%v\n", &ptr)

	city := "Burirum"
	var cityP *string
	cityP = &city
	fmt.Printf(*cityP)

	structs.Lean()
}

func add(a int, b int) int {
	c := a + b
	return c
}
