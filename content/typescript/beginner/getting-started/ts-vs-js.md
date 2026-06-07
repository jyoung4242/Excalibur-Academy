---
track: typescript
level: beginner
module: getting-started
lesson: ts-vs-js
title: TypeScript vs JavaScript
duration: 10
---

# TypeScript vs JavaScript

TypeScript is a superset of JavaScript — every valid JavaScript file is already a valid TypeScript file. Understanding the relationship between the two helps you know what TypeScript is actually doing.

## The Core Difference: Types

JavaScript is **dynamically typed**. Types are determined at runtime.

```javascript
// JavaScript
let score = 100;      // number
score = "Game Over";  // string — totally fine, no error
score = true;         // boolean — still fine!
```

TypeScript is **statically typed**. Types are checked at compile time.

```typescript
// TypeScript
let score: number = 100;
score = "Game Over";  // ✗ Error: Type 'string' is not assignable to type 'number'
```

## Side by Side Comparison

| Feature | JavaScript | TypeScript |
|---|---|---|
| Types | Dynamic (runtime) | Static (compile-time) |
| Error detection | Runtime | Compile-time |
| Interfaces | ✗ | ✓ |
| Enums | ✗ | ✓ |
| Generics | ✗ | ✓ |
| Runs in browser | ✓ | Compiles to JS |
| Learning curve | Lower | Higher |

## What TypeScript Adds

TypeScript adds syntax on top of JavaScript that disappears at compile time:

```typescript
// TypeScript source
function getScore(player: Player): number {
  return player.score;
}

// Compiled JavaScript output
function getScore(player) {
  return player.score;
}
```

The `: Player` and `: number` type annotations are completely removed. The resulting JavaScript is identical to what you'd write by hand — but you got the benefit of type checking while writing it.

## When to Use Which

**Use TypeScript when:**
- Building anything with more than one file
- Working on a project that will grow over time
- Collaborating with other developers
- Building anything you'll maintain for months or years

**Plain JavaScript is fine for:**
- Quick one-off scripts
- Very small utilities
- Prototyping before committing to a structure

For game development — which this course focuses on — TypeScript is almost always the right choice. Your actor configurations, component interfaces, and system APIs benefit enormously from types.

## TypeScript in the Excalibur Ecosystem

ExcaliburJS is written in TypeScript and ships with full type definitions. When you use Excalibur, TypeScript tells you exactly what properties each `Actor`, `Scene`, and `Engine` accepts:

```typescript
import * as ex from 'excalibur';

const player = new ex.Actor({
  pos: ex.vec(300, 300),
  width: 32,
  height: 32,
  color: ex.Color.Red,
  // Try typing any other property — TypeScript will warn you if it's invalid
});
```

In the next module, we'll start working with TypeScript variables and types directly.
