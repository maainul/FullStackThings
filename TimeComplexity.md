# Time Complexity:

## 1. Constant Time O(1):

```.java
package timeComplexity;

public class _1_ConstantTimeComplexity {

	public static void main(String[] args) {
		// variable deceleration 
		int n1;
		int n2;
		int result; 
		// assign operator
		n1 = 100;
		n2 = 200;
		// Arithmetic operation
		result = n1 + n2;
		// print function
		System.out.println(result);

	}
}

// 300
```

1. This is a constant time complexity. Because what ever you input the timewill not effected.

2. number of operator and operation will remain same thought you change the value of n1 and n2...

### Another example of Constant time complexity:

```.java
package timeComplexity;

public class _1_AnotherExamleOfConstantTimeComplexity {

	public static void main(String[] args) {

		int n = 5;

		int result = n * (n + 1) / 2;

		System.out.println(result);

	}

}
```

## 2. Linear Time Complexity O(n):

An algorithm is said to take linear time, or O(n) time,if its time complexity is O(n). 

Informally, this means that the running time increases at most linearly with the size of the input.

Linear time is the best possible time complexity in situations where the algorithm has to sequentially read its entire input.

```.java
package timeComplexity;

public class _LineraTimeComplexity {

	public static void main(String[] args) {
		int result = 0;
		int n = 100;
		for (int i = 0; i < n; i++) {
			result = result + i;
		}
		System.out.println(result);
	}
}

```
```
Linear Time Complexity : O(2n) = 2 * O(n) = O(n)

...............
Inputs .  Time. 
...............
1      .  2   .
...............
2      .  4   .
...............
4      .  8   .
...............
10     .  20  .
...............
100    . 200  .
...............
```
## 3. Order of N:

```.java
package timeComplexity;

public class _3_OofNSquare {
	public static void main(String[] args) {
		int n = 5;
		int result = 0;
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				result = result+1;
			}
		}
		System.out.println(n +" - "+result);
	}
}
```
Linear Time Complexity : O(n*n) = O(n^2) 

```
...............
Inputs .  Time. 
...............
1      .  2   .
...............
2      .  4   .
...............
4      .  16  .
...............
10     .  100 .
...............
100    . 10000.
...............
```

## Graph Of Different Complexity

![Screenshot from 2020-07-16 19-47-20](https://user-images.githubusercontent.com/37740006/87690297-17272d80-c7ab-11ea-8228-9a56a6a80916.png)


### What is the time complexity of this program

```.java
package timeComplexity;

public class _4_OrderOfNSecond {

	public static void main(String[] args) {
		int n = 5;
		int count = 0;
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				count = count + 1;
			}
		}

		for (int i = 0; i < n; i++) {
			count = count + 1;
		}

		System.out.println(count);
	}

}
```
Time complexity is : O(n^2)
