# TypeScript Type Error: Type 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript error and its solution. The error occurs when providing a string argument to a function expecting a number.

## Bug

The `add` function is defined to accept two numbers and return their sum. However, the code attempts to call the function with a string argument, resulting in the following TypeScript error:

```
Type 'string' is not assignable to type 'number'.
```

## Solution

The solution involves using type guards to check for string arguments and converting them to numbers before performing calculations. Alternatively, improving the function parameters to accept both numbers and strings will handle different cases more comprehensively.