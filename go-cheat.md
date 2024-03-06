# Go Programming Language (Introduction)

Go is a procedural programming language.It was developed in 2007 by Robert Griesemer, Rob Pike, and Ken Thompson at Google but launched in 2009 as an open-source programming language. 


## Hello World in Golang

```go
// First Go program
package main

import "fmt"

// Main function
func main() {

	fmt.Println("!... Hello World ...!")
}
```

# Identifiers in Go Language
identifiers are used for identification purposes. Or in other words, identifiers are the user-defined name of the program components.

In Go language, an identifier can be a 
	
	1. variable name, 
	2. function name, 
	3. constant, 
	4. statement labels, 
	5. package name, or 
	6. types.
	
### Rules for Defining Identifiers:

The name of the identifier must begin with a letter or an underscore(_). And the names may contain the letters ‘a-z’ or ’A-Z’ or digits 0-9 as well as the character ‘_’.

For Constants:
	true, false, iota, nil

For Types:
	int, int8, int16, int32, int64, uint,
	uint8, uint16, uint32, uint64, uintptr,
	float32, float64, complex128, complex64,
	bool, byte, rune, string, error

For Functions:
	make, len, cap, new, append, copy, close, 
	delete, complex, real, imag, panic, recover

## Go Keywords
	Keywords or Reserved words	
	
```
break
case
chan
const
continue
default
defer
else
fallthrough
for
func
go
goto
if
import
interface
map
package
range
return
select
struct
switch
type
var
```
	
## Data Types in Go

The Basic Data Types

	1. Numbers
	2. Booleans
	3. Strings


### 1. Number:
```
int8	8-bit signed integer
int16	16-bit signed integer
int32	32-bit signed integer
int64	64-bit signed integer
uint8	8-bit unsigned integer
uint16	16-bit unsigned integer
uint32	32-bit unsigned integer
uint64	64-bit unsigned integer
int	Both in and uint contain same size, either 32 or 64 bit.
uint	Both in and uint contain same size, either 32 or 64 bit.
rune	It is a synonym of int32 and also represent Unicode code points.
byte	It is a synonym of int8.
uintptr	It is an unsigned integer type. Its width is not defined, but its can hold all the bits of a pointer value.

float32	32-bit IEEE 754 floating-point number
float64	64-bit IEEE 754 floating-point number

complex64	Complex numbers which contain float32 as a real and imaginary component.
complex128	Complex numbers which contain float64 as a real and imaginary component.
```
## Go Variables

var str string= "mainul"
var intval int32= 12
var floatval float32 = 32.5
var boolvar bool = true



var str string= "mainul"
var intval int32= 12
var floatval float32 = 32.5
var boolvar bool = true



str := "mainul"
intval := 12
floatval := 32.5
boolvar := true
	
var str,intval,floatval= "mainul",12,34.5

## Constants- Go Language
CONSTANTS suggests means fixed

 
## Go Operators

	
	Arithmetic Operators:
		Result of p + q = 54
		Result of p - q = 14
		Result of p * q = 680
		Result of p / q = 1
		Result of p % q = 14
		
	Relational Operators
	Logical Operators
	Bitwise Operators
	Assignment Operators
	Misc Operators

## Go Decision Making (if, if-else, Nested-if, if-else-if)

```go

// Go program to illustrate the
// use of if statement
package main
 
import "fmt"
 
func main() {
     
   // taking a local variable
   var v int = 700
  
   // using if statement for
   // checking the condition
   if(v < 1000) {
        
      // print the following if
      // condition evaluates to true
      fmt.Printf("v is less than 1000\n")
   }
    
   fmt.Printf("Value of v is : %d\n", v)
    
}
```

### If else

```go
// Go program to illustrate the
// use of if...else statement
package main

import "fmt"

func main() {
	
// taking a local variable
var v int = 1200

// using if statement for
// checking the condition
if(v < 1000) {
		
	// print the following if
	// condition evaluates to true
	fmt.Printf("v is less than 1000\n")
	
} else {
		
	// print the following if
	// condition evaluates to true
	fmt.Printf("v is greater than 1000\n")
}
	
}

```

### If elae ladder

```go
// Go program to illustrate the
// use of if..else..if ladder
package main
import "fmt"

func main() {
	
// taking a local variable
var v1 int = 700

// checking the condition
if(v1 == 100) {
		
	// if condition is true then
	// display the following */
	fmt.Printf("Value of v1 is 100\n")
	
} else if(v1 == 200) {
		
	fmt.Printf("Value of a is 20\n")
	
} else if(v1 == 300) {
		
	fmt.Printf("Value of a is 300\n")
	
} else {
		
	// if none of the conditions is true
	fmt.Printf("None of the values is matching\n")
}
}
```

## Loops in Go Language

Go language contains only a single loop that is for-loop.

```go
// Go program to illustrate the
// use of simple for loop
package main

import "fmt"

// Main function
func main() {
	
	// for loop
	// This loop starts when i = 0
	// executes till i<4 condition is true
	// post statement is i++
	for i := 0; i < 4; i++{
	fmt.Printf("GeeksforGeeks\n")
	}
	
}

```

### Infinite loop

```go
// Go program to illustrate the
// use of an infinite loop
package main

import "fmt"

// Main function
func main() {
	
	// Infinite loop
	for {
	fmt.Printf("GeeksforGeeks\n")
	}
	
}

```

### 3. for loop as while Loop:

```go
// Go program to illustrate the
// the for loop as while Loop
package main

import "fmt"

// Main function
func main() {
	
	// while loop
	// for loop executes till
	// i < 3 condition is true
	i:= 0
	for i < 3 {
	i += 2
	}
fmt.Println(i)
}

```
### 4. Simple range in for loop:

```go
// Go program to illustrate the
// use of simple range loop
package main

import "fmt"

// Main function
func main() {
	
	// Here rvariable is a array
	rvariable:= []string{"GFG", "Geeks", "GeeksforGeeks"}
	
	// i and j stores the value of rvariable
	// i store index number of individual string and
	// j store individual string of the given array
	for i, j:= range rvariable {
	fmt.Println(i, j)
	}
	
}
```
### Switch Statement in Go

A switch statement is a multiway branch statement. 

```go
// Go program to illustrate the
// concept of Expression switch
// statement
package main

import "fmt"

func main() {
	
	// Switch statement with both
	// optional statement, i.e, day:=4
	// and expression, i.e, day
	switch day:=4; day{
	case 1:
	fmt.Println("Monday")
	case 2:
	fmt.Println("Tuesday")
	case 3:
	fmt.Println("Wednesday")
	case 4:
	fmt.Println("Thursday")
	case 5:
	fmt.Println("Friday")
	case 6:
	fmt.Println("Saturday")
	case 7:
	fmt.Println("Sunday")
	default:
	fmt.Println("Invalid")
}
	
}
```

```go
// Go program to illustrate the
// concept of Expression switch
// statement
package main

import "fmt"

func main() {
	var value int = 2
	
	// Switch statement without an	
	// optional statement and
	// expression
switch {
	case value == 1:
	fmt.Println("Hello")
	case value == 2:
	fmt.Println("Bonjour")
	case value == 3:
	fmt.Println("Namstay")
	default:
	fmt.Println("Invalid")
}

}
```
## Functions in Go Language

Functions are generally the block of codes or statements

```go
// Go program to illustrate the
// use of function
package main
import "fmt"

// area() is used to find the
// area of the rectangle
// area() function two parameters,
// i.e, length and width
func area(length, width int)int{
	
	Ar := length* width
	return Ar
}

// Main function
func main() {

// Display the area of the rectangle
// with method calling
fmt.Printf("Area of rectangle is : %d", area(12, 10))
}

```
## Variadic Functions in Go
The function that called with the varying number of arguments is known as variadic function. 
```go

// Go program to illustrate the
// concept of variadic function
package main

import(
	"fmt"
	"strings"
)

// Variadic function to join strings
func joinstr(element...string)string{
	return strings.Join(element, "-")
}

func main() {

// zero argument
fmt.Println(joinstr())
	
// multiple arguments
fmt.Println(joinstr("GEEK", "GFG"))
fmt.Println(joinstr("Geeks", "for", "Geeks"))
fmt.Println(joinstr("G", "E", "E", "k", "S"))
	
}
```
## Anonymous function in Go Language

```go
// Go program to illustrate how
// to create an anonymous function
package main

import "fmt"

func main() {
	
	// Anonymous function
func(){

	fmt.Println("Welcome! to GeeksforGeeks")
}()
	
}
```
## main and init function in Golang

 the main package is a special package which is used with the programs that are executable and this package contains main() function.
```go
// Go program to illustrate the
// concept of main() function

// Declaration of the main package
package main

// Importing packages
import (
	"fmt"
	"sort"
	"strings"
	"time"
)

// Main function
func main() {

	// Sorting the given slice
	s := []int{345, 78, 123, 10, 76, 2, 567, 5}
	sort.Ints(s)
	fmt.Println("Sorted slice: ", s)

	// Finding the index
	fmt.Println("Index value: ", strings.Index("GeeksforGeeks", "ks"))

	// Finding the time
	fmt.Println("Time: ", time.Now().Unix())

}
```
## init() Function

init() function is just like the main function, does not take any argument nor return anything. This function is present in every package and this function is called when the package is initialized.

// Go program to illustrate the
// concept of init() function

// Declaration of the main package
package main

// Importing package
import "fmt"

// Multiple init() function
func init() {
	fmt.Println("Welcome to init() function")
}

func init() {
	fmt.Println("Hello! init() function")
}

// Main function
func main() {
	fmt.Println("Welcome to main() function")
}

## What is Blank Identifier(underscore) in Golang?
```go
// Golang program to show the compiler
// throws an error if a variable is
// declared but not used

package main

import "fmt"

// Main function
func main() {

	// calling the function
	// function returns two values which are
	// assigned to mul and div identifier
	mul, div := mul_div(105, 7)

	// only using the mul variable
	// compiler will give an error
	fmt.Println("105 x 7 = ", mul)
}

// function returning two
// values of integer type
func mul_div(n1 int, n2 int) (int, int) {

	// returning the values
	return n1 * n2, n1 / n2
}
```

Second Program


```go
// Golang program to the use of Blank identifier

package main

import "fmt"

// Main function
func main() {

	// calling the function
	// function returns two values which are
	// assigned to mul and blank identifier
	mul, _ := mul_div(105, 7)

	// only using the mul variable
	fmt.Println("105 x 7 = ", mul)
}

// function returning two
// values of integer type
func mul_div(n1 int, n2 int) (int, int) {

	// returning the values
	return n1 * n2, n1 / n2
}
```

## Defer Keyword in Golang

```go
// Go program to illustrate the
// concept of the defer statement
package main

import "fmt"

// Functions
func mul(a1, a2 int) int {

	res := a1 * a2
	fmt.Println("Result: ", res)
	return 0
}

func show() {
	fmt.Println("Hello!, GeeksforGeeks")
}

// Main function
func main() {

	// Calling mul() function
	// Here mul function behaves
	// like a normal function
	mul(23, 45)

	// Calling mul()function
	// Using defer keyword
	// Here the mul() function
	// is defer function
	defer mul(23, 56)

	// Calling show() function
	show()
}
```

```go
// Go program to illustrate
// multiple defer statements, to illustrate LIFO policy
package main

import "fmt"

// Functions
func add(a1, a2 int) int {
	res := a1 + a2
	fmt.Println("Result: ", res)
	return 0
}

// Main function
func main() {

	fmt.Println("Start")

	// Multiple defer statements
	// Executes in LIFO order
	defer fmt.Println("End")
	defer add(34, 56)
	defer add(10, 10)
}
```
