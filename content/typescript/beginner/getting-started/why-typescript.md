---
track: typescript
level: beginner
module: getting-started
lesson: why-typescript
title: Why TypeScript?
duration: 8
---

# Why TypeScript?

Before learning the *how*, let's understand the *why*. TypeScript exists because JavaScript, while incredibly flexible, has a serious problem at scale: **it lets you make mistakes that only appear at runtime**.

## The Runtime Error Problem

Imagine you're building a game. You have a function that spawns an enemy:

```javascript
// JavaScript
function spawnEnemy(config) {
  return {
    x: config.posiiton.x,  // typo: "posiiton" instead of "position"
    y: config.position.y,
    health: config.health,
  };
}
```

That typo won't cause any error when the code is written or when the game loads. It only crashes **when the enemy spawns** — maybe mid-playtest, maybe in production.

## TypeScript Catches Errors Early

```typescript
// TypeScript
interface EnemyConfig {
  position: { x: number; y: number };
  health: number;
}

function spawnEnemy(config: EnemyConfig) {
  return {
    x: config.posiiton.x,  // ✗ Error: Property 'posiiton' does not exist
    y: config.position.y,
    health: config.health,
  };
}
```

TypeScript catches this **as you type** — before you ever run the code. No more mystery crashes at 2am during a playtest.

## Three Reasons TypeScript Wins

### 1. Autocomplete That Actually Works

When TypeScript knows the shape of your data, your editor can suggest the right properties and methods as you type. No more guessing what fields an object has.

### 2. Refactoring Confidence

Rename a property across your entire codebase? TypeScript shows you every place that needs updating. In plain JavaScript, you'd have to search and hope you didn't miss anything.

### 3. Self-Documenting Code

```typescript
function movePlayer(
  direction: 'up' | 'down' | 'left' | 'right',
  speed: number
): void {
  // ...
}
```

Anyone reading this function signature immediately knows what values are valid. No need to read the implementation or check documentation.

## TypeScript Compiles Away

One important thing to understand: **TypeScript is not a different runtime**. TypeScript code compiles down to regular JavaScript. The type annotations you write are a *development tool* — they help you write the code, but they're stripped out before the code runs in the browser.

This means:
- TypeScript runs everywhere JavaScript runs
- There's no performance overhead from types
- All existing JavaScript libraries work with TypeScript
