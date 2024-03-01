[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/E1vcEWuv)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

For $n \ge 3:$   --->   $3T(n/3)$
For $n < 2:$     --->   1

T(n) = 3T(n/3)
     = 3(3T(n/9) = 9T(n/9)
     = 9(3T(n/27) = 27T(n/27)
 ... = $3^iT(n/3^i)$    i = log n
     = nT(1) => $n \in \Theta(n)$

The algorithm I've made splits the array into 3 different lists for input sizes greater 
than 2 and then adds them to a total variable. Everything except for the recursion is 
constant as it does all of those operations in constant time and no matter the input size. 
The complexity I have found makes sense as the algorithm runs a bunch of operations in 
constant time and then 3 operations that solely depend on the amount of elements.
