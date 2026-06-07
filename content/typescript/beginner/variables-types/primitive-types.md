---
track: typescript
level: beginner
module: variables-types
lesson: primitive-types
title: Primitive Types
duration: 12
---

# Primitive Types

TypeScript has three foundational primitive types that you'll use constantly: `number`, `string`, and `boolean`. Let's explore each through a game development lens.

## number

In TypeScript, all numbers are `number` — there's no separate `int` or `float` type.

```typescript
let playerHealth: number = 100;
let playerX: number = 320.5;
let score: number = 0;
let level: number = 1;
```

Numbers support all the operations you'd expect:

```typescript
playerHealth -= 25;       // 75
score += 100;             // 100
const damage = Math.floor(Math.random() * 20) + 1;  // 1–20
```

## string

Strings hold text. In games, you'll use them for player names, dialog, item descriptions, and UI labels.

```typescript
let playerName: string = "Hero";
let itemDescription: string = "A sword forged in dragon fire.";
let dialogLine: string = `Welcome, ${playerName}. Your quest begins now.`;
```

Notice the **template literal** (backtick) syntax on the last line — it lets you embed expressions inside strings with `${}`.

## boolean

Booleans are simple: `true` or `false`. They're the backbone of game state logic.

```typescript
let isAlive: boolean = true;
let hasKey: boolean = false;
let isGrounded: boolean = true;
let isBossDefeated: boolean = false;
```

Used in conditions:

```typescript
if (isAlive && hasKey) {
  openDoor();
}

if (!isBossDefeated) {
  showBossHealthBar();
}
```

## Type Annotations Are Optional (But Useful)

TypeScript can **infer** the type from the assigned value:

```typescript
let health = 100;        // TypeScript infers: number
let name = "Warrior";    // TypeScript infers: string
let alive = true;        // TypeScript infers: boolean
```

Explicit annotations are most useful when:
- A variable starts uninitialized
- You want to document intent clearly
- The inferred type isn't specific enough

```typescript
let currentTarget: string;  // no initial value, explicit annotation required
currentTarget = "Goblin";
```

## The `undefined` and `null` Primitives

Two additional primitives exist for "no value":

```typescript
let lastEnemy: string | undefined;  // might not exist yet
let savedScore: number | null = null;  // intentionally empty
```

We'll cover union types (`string | undefined`) in detail in the Custom Types module.

## Try It Live

The playground below lets you experiment with primitive types in a real Excalibur game context. The example tracks a player's stats — try modifying the health, name, and other values to see how TypeScript responds.

<!-- playground: src="https://excaliburjs.com/samples/animation/" caption="Excalibur live demo — variables power the actor's position and color" -->

## Challenge

Declare three variables with explicit type annotations:

1. `enemyCount` — the number of enemies on screen (start at 5)
2. `levelName` — the name of the current level
3. `isPaused` — whether the game is currently paused

Then write an `if` statement that logs `"Game Over"` if `enemyCount` is 0 and `isPaused` is false.
