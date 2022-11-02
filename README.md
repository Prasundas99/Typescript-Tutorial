# TypeScript-Tutorial

This is a tutorial for TypeScript. It is a work in progress.
Official Documentation: https://www.typescriptlang.org/docs/home.html

## Table of Contents

- [TypeScript Global installation](#typescript-global-installation)
- [TypeScript Local installation](#typescript-local-installation)
- [TypeScript Compiler](#typescript-compiler)
- [TypeScript Compiler Options](#typescript-compiler-options)
- [Introduction to TS code](01.%20Intro/)
    - [01.Intro](01.%20Intro/01.intro.ts)
    - [02.Variables](01.%20Intro/02.variables.ts)
- [Basics](02.%20Basics/)
    - [01.Functions](02.%20Basics/01.functions.ts)
    - [02.Objects](02.%20Basics/02.objects.ts)
    - [03.Tuples](02.%20Basics/03.Tuples.ts)
    - [04.Interfaces](02.%20Basics/04.Interfaces.ts)
    - [Interface vs Types](#differences-between-interface-and-type)
    - [05.Getters and Setters](02.%20Basics/05.Getters_Setters.ts)
    - [06.Abstract Classes](02.%20Basics/06.AbstractClasses.ts)
    - [07. Generics](03.Generics/01.Generics.ts)


## TypeScript Global installation

```bash
via npm

npm install -g typescript
```

All of these dependency managers support lockfiles, ensuring that everyone on your team is using the same version of the language. You can then run the TypeScript compiler using one of the following commands:

```bash
npx tsc
```

## TypeScript Local installation

```bash
via npm

npm install typescript
```

## TypeScript Compiler

```bash
tsc --init
```

## TypeScript Compiler Options

```bash
tsc --help
```


## Differences between Interface and Type

### 1. Objects / Functions
Both can be used to describe the shape of an object or a function signature. But the syntax differs.

```ts
Interface

interface Point {
  x: number;
  y: number;
}

interface SetPoint {
  (x: number, y: number): void;
}
Type alias

type Point = {
  x: number;
  y: number;
};

type SetPoint = (x: number, y: number) => void;
```

### 2. Other Types
Unlike an interface, the type alias can also be used for other types such as primitives, unions, and tuples.

```ts
// primitive
type Name = string;

// object
type PartialPointX = { x: number; };
type PartialPointY = { y: number; };

// union
type PartialPoint = PartialPointX | PartialPointY;

// tuple
type Data = [number, string];
```

### 3. Extend
Both can be extended, but again, the syntax differs. Additionally, note that an interface and type alias are not mutually exclusive. An interface can extend a type alias, and vice versa.

```ts
Interface extends interface

interface PartialPointX { x: number; }
interface Point extends PartialPointX { y: number; }
Type alias extends type alias

type PartialPointX = { x: number; };
type Point = PartialPointX & { y: number; };
Interface extends type alias

type PartialPointX = { x: number; };
interface Point extends PartialPointX { y: number; }
Type alias extends interface

interface PartialPointX { x: number; }
type Point = PartialPointX & { y: number; };
```

### 4. Implements
A class can implement an interface or type alias, both in the same exact way. Note however that a class and interface are considered static blueprints. Therefore, they can not implement / extend a type alias that names a union type.

```ts
interface Point {
  x: number;
  y: number;
}

class SomePoint implements Point {
  x = 1;
  y = 2;
}

type Point2 = {
  x: number;
  y: number;
};

class SomePoint2 implements Point2 {
  x = 1;
  y = 2;
}

type PartialPoint = { x: number; } | { y: number; };

// FIXME: can not implement a union type
class SomePartialPoint implements PartialPoint {
  x = 1;
  y = 2;
}
```

### 5. Declaration merging
Unlike a type alias, an interface can be defined multiple times, and will be treated as a single interface (with members of all declarations being merged).

```ts
// These two declarations become:
// interface Point { x: number; y: number; }
interface Point { x: number; }
interface Point { y: number; }

const point: Point = { x: 1, y: 2 };
```

