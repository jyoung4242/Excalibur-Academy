---
track: excalibur
level: foundations
module: core-concepts
lesson: engine-setup
title: Engine Setup
duration: 10
---

# Engine Setup

Every Excalibur game starts with a single object: the `Engine`. It manages the game loop, the canvas, and everything that runs inside your game.

## Creating an Engine

```typescript
import * as ex from 'excalibur';

const game = new ex.Engine({
  width: 800,
  height: 600,
  backgroundColor: ex.Color.fromHex('#1a1a2e'),
  displayMode: ex.DisplayMode.FitScreen,
});

game.start();
```

That's a complete (if empty) game. The engine creates a canvas, starts the loop, and begins rendering.

## Engine Configuration

The `Engine` constructor accepts a configuration object. Here are the most important options:

| Property | Type | Description |
|---|---|---|
| `width` | `number` | Canvas width in pixels |
| `height` | `number` | Canvas height in pixels |
| `backgroundColor` | `ex.Color` | Background fill color |
| `displayMode` | `ex.DisplayMode` | How the canvas scales |
| `antialiasing` | `boolean` | Pixel smoothing (disable for pixel art) |
| `fixedUpdateFps` | `number` | Target update rate |

## Display Modes

```typescript
ex.DisplayMode.Fixed         // Exact pixel size, no scaling
ex.DisplayMode.FitScreen     // Scale to fit, maintain aspect ratio
ex.DisplayMode.FillScreen    // Fill entire viewport
ex.DisplayMode.FitScreenAndFill  // Best of both
```

For most games, `FitScreen` is the right choice — it keeps your game looking correct on any screen size.

## Pixel Art Settings

If you're making a pixel art game, disable antialiasing to keep pixels crisp:

```typescript
const game = new ex.Engine({
  width: 320,
  height: 180,
  antialiasing: false,
  displayMode: ex.DisplayMode.FitScreen,
});
```

## Starting the Engine

`game.start()` returns a Promise that resolves when the engine is ready:

```typescript
game.start().then(() => {
  console.log('Engine started!');
});

// Or with async/await:
await game.start();
console.log('Engine started!');
```

You can load resources before start resolves by passing a `Loader`:

```typescript
const loader = new ex.Loader([spriteSheet, soundtrack]);
await game.start(loader);
```

## Try It Live

Experiment with the engine configuration in the playground. Try changing the background color, dimensions, and display mode.

<!-- playground: src="https://excaliburjs.com/samples/animation/" caption="A minimal Excalibur engine setup" -->
