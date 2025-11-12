# Strudel Tips & Tricks for Trance Production

Advanced techniques and hot tips to get the best trance sound out of Strudel!

## Essential Strudel Functions for Trance

### Tempo Control
```javascript
// Always set your tempo first!
setcpm(138/4)  // 138 BPM (cycles per minute ÷ 4)

// Common trance tempos:
setcpm(132/4)  // Progressive trance
setcpm(138/4)  // Classic uplifting trance
setcpm(140/4)  // Peak time trance
setcpm(145/4)  // Hard trance
```

### Pattern Speed Modifiers
```javascript
// Double speed (twice as fast)
note("a4 c5 e5 c5").fast(2)

// Half speed (twice as slow)
note("a4 c5 e5 c5").slow(2)

// Multiply individual elements
s("bd*4 sd*2 cp*8")  // Different speeds per sound

// Evolving speed with angle brackets
s("bd*<4 8 16 32>")  // Speed increases each cycle
```

## Sound Design Techniques

### 1. The Supersaw Lead (Classic Trance Sound)
```javascript
// Layer multiple detuned saws
stack(
  note("a4 c5 e5 c5").sound("sawtooth").gain(0.4),
  note("a4 c5 e5 c5").add(0.05).sound("sawtooth").gain(0.3),
  note("a4 c5 e5 c5").add(-0.05).sound("sawtooth").gain(0.3),
  note("a4 c5 e5 c5").add(0.1).sound("sawtooth").gain(0.2)
)
.lpf(3000).room(0.8).delay(0.5)
```

### 2. Sidechain Pumping Effect
```javascript
// Simulate sidechain compression with gain patterns
note("a2*8").sound("sawtooth")
  .gain("0.3 0.6 0.5 0.7")  // Duck on beat 1

// Apply to pads for breathing effect
note("<a3 f3 c4 g3>").sound("sawtooth")
  .gain("0.2 0.4 0.3 0.5")  // Pumps with kick
  .lpf(2000).room(0.9)
```

### 3. Filter Automation (The Heart of Trance)
```javascript
// Slow LPF sweep (builds tension)
note("a2*8").sound("sawtooth")
  .lpf(sine.range(200, 2000).slow(8))  // 8-bar sweep

// Fast LPF modulation (wobble)
note("a2*8").sound("sawtooth")
  .lpf(sine.range(400, 1200).slow(1))  // 1-bar cycle

// Saw wave LFO (rising sweep)
note("a3 c4 e4").sound("sawtooth")
  .lpf(saw.range(500, 3000).slow(4))   // Constant rise

// High-pass filter (removes bass)
note("a3 c4 e4").sound("sawtooth")
  .lpf(3000)
  .hpf(sine.range(0, 1500).slow(8))    // Thins out over time
```

### 4. Resonance for Character
```javascript
// Subtle resonance (warmth)
note("a2*8").sound("sawtooth")
  .lpf(800).resonance(5)

// High resonance (acid sound)
note("a2*8").sound("square")
  .lpf(1000).resonance(15)  // Emphasizes filter peak
```

### 5. Reverb & Delay (Space and Depth)
```javascript
// Room reverb (size of space)
note("e5 c5 d5 e5").sound("sawtooth")
  .room(0.8)   // 0 = dry, 1+ = huge space

// Delay (rhythmic echo)
note("e5 c5 d5 e5").sound("sawtooth")
  .delay(0.5)  // 0.5 = eighth note delay
  .delay(0.25) // 0.25 = sixteenth note

// Combine both for depth
note("e5 c5 d5 e5").sound("sawtooth")
  .room(0.8).delay(0.5).gain(0.5)
```

## Advanced Pattern Techniques

### 1. Euclidean Rhythms
```javascript
// Distribute N hits across M steps
s("bd").euclidean(3, 8)  // 3 kicks in 8 steps
s("cp").euclidean(5, 16) // 5 claps in 16 steps

// Creates organic, non-obvious patterns
```

### 2. Angle Brackets (Evolving Patterns)
```javascript
// Alternate every cycle
s("<bd hh, cp ~>")  // Cycle 1: bd+cp, Cycle 2: hh

// Build complexity
s("bd*<4 8 16 32>")  // Density increases

// Multiple options
note("<a4 c5 e5 g5>").sound("sawtooth")  // One note per cycle
```

### 3. Brackets for Grouping
```javascript
// Square brackets group sounds
s("bd [hh hh] cp [hh [bd cp]]")

// Creates subdivisions within beats
s("bd [hh hh hh hh]")  // Hi-hats fit within one beat
```

### 4. Pattern Multiplication
```javascript
// Repeat elements
s("bd*4")     // Four kicks
s("hh*16")    // Sixteen hi-hats
s("cp*2 sd*3") // Mixed multiplication

// Create rolls
s("cp*<4 8 16 32>")  // Accelerating roll
```

### 5. Rests and Silence
```javascript
// Tilde or hyphen for rests
s("bd ~ cp ~")   // Beat 1 and 3 only
s("bd - cp -")   // Same thing

// Create space
note("a4 ~ c5 ~ e5 ~ ~ ~").sound("sawtooth")
```

## Mixing & Leveling

### Gain Staging for Trance
```javascript
stack(
  s("bd*4").gain(0.8),              // Kick: loud but not clipping
  note("a2*8").sound("sawtooth")
    .lpf(700).gain(0.5),            // Bass: medium-high
  s("hh*16").gain(0.3),             // Hi-hats: subtle
  s("~ cp ~ cp").gain(0.5),         // Clap: medium
  note("e5 c5 d5 e5").sound("sawtooth")
    .lpf(3000).gain(0.5),           // Lead: medium
  note("<a3 f3 c4 g3>").sound("sawtooth")
    .lpf(2000).gain(0.3)            // Pad: background
)
```

**General Rules:**
- Kick: 0.7-0.85 (loudest element)
- Bass: 0.5-0.6 (locks with kick)
- Leads: 0.4-0.6 (sits on top)
- Pads: 0.2-0.4 (background)
- Hi-hats: 0.2-0.35 (subtle groove)
- Claps/Snares: 0.4-0.6 (cuts through)

### Frequency Balance
```javascript
// Low end: Kick + Bass (don't overlap!)
stack(
  s("bd*4").gain(0.8),              // Kick occupies 40-100 Hz
  note("a2*8").sound("sawtooth")
    .lpf(800).gain(0.6)             // Bass filtered to stay below 800 Hz
)

// Mid range: Leads + Claps (give space)
stack(
  note("e5 c5 d5 e5").sound("sawtooth")
    .lpf(3000).hpf(400).gain(0.5), // Lead: 400-3000 Hz
  s("~ cp ~ cp").gain(0.5)          // Clap has mid presence
)

// High end: Hi-hats + Air (sparkle)
stack(
  s("hh*16").gain(0.3),             // Hi-hats: 8kHz+
  note("a5 c6 e6").sound("square")
    .hpf(2000).gain(0.3)            // High plucks
)
```

## Arrangement Strategies

### Building Energy Over Time
```javascript
// Start minimal, add layers
stack(
  s("bd*4").gain(0.8),

  // Bass enters cycle 2
  note("<~ a2*8>").sound("sawtooth").lpf(700).gain(0.5),

  // Hi-hats enter cycle 3
  s("<~ ~ hh*16>").gain(0.3),

  // Lead enters cycle 4
  note("<~ ~ ~ [e5 c5 d5 e5]>").sound("sawtooth")
    .lpf(3000).room(0.8).gain(0.5)
)
```

### Structural Variation
```javascript
// 8-bar phrases with changes
stack(
  s("bd*4").gain(0.8),

  // Bassline changes every 8 bars
  note("<[a2*8] [c2*8]>".slow(8))
    .sound("sawtooth").lpf(700).gain(0.5),

  // Melody evolves
  note("<[e5 c5] [g5 d5]>".slow(8))
    .sound("sawtooth").lpf(3000).gain(0.5)
)
```

### Using .segment() for Transitions
```javascript
// Divide pattern into segments
note("a4 c5 e5 g5").segment(4)  // One note per quarter

// Useful for creating chord progressions
note("<a4 f4 c4 g4>").segment(1)  // One chord per bar
```

## Performance & Live Coding Tips

### 1. Comment Out Layers for Live Tweaking
```javascript
stack(
  s("bd*4").gain(0.8),
  // note("a2*8").sound("sawtooth").lpf(700).gain(0.5),  // Toggle bass
  s("hh*16").gain(0.3),
  // s("~ cp ~ cp").gain(0.5),  // Toggle clap
  note("e5 c5 d5 e5").sound("sawtooth").lpf(3000).gain(0.5)
)
```

### 2. Use Variables for Repeated Patterns
```javascript
// Define common patterns
const kick = s("bd*4").gain(0.8)
const hats = s("hh*16").gain(0.3)
const clap = s("~ cp ~ cp").gain(0.5)

// Combine easily
stack(kick, hats, clap)
```

### 3. Modular Sections
```javascript
// Define sections separately
const intro = stack(
  s("bd*4").gain(0.8),
  note("a2*8").sound("sawtooth").lpf(600).gain(0.5)
)

const breakdown = stack(
  note("<a3 f3 c4 g3>").sound("sawtooth").lpf(2000).room(1).gain(0.4),
  note("e5 c5 d5 e5").sound("sawtooth").lpf(3000).room(0.9).gain(0.6)
)

// Switch between them
intro  // Play this
// breakdown  // Or play this
```

### 4. Quick Filter Sweeps
```javascript
// Add instant builds to any pattern
note("a2*8").sound("sawtooth")
  .lpf(saw.range(200, 2000).slow(4))  // 4-bar rise
  .gain(0.6)

// Adjust .slow() value to change build length
```

## Sound Selection Tips

### Best Sounds for Trance in Strudel

**Bass:**
- `sawtooth` - Classic warm bass
- `square` - Acid-style bass
- `triangle` - Softer, rounder bass

**Leads:**
- `sawtooth` - Bright, cutting leads
- `square` - Plucky, aggressive leads
- `sine` - Pure, clean tones

**Pads:**
- `sawtooth` - Layered, filtered, with long release
- Multiple saws detuned slightly

**Effects:**
- Use `.lpf()` on everything for warmth
- `.room()` for space and atmosphere
- `.delay()` for rhythmic depth
- `.phaser()` for movement (subtle)

## Common Patterns & Templates

### Trance Foundation Template
```javascript
setcpm(138/4)

stack(
  // Kick
  s("bd*4").gain(0.8),

  // Bass
  note("a2*8").sound("sawtooth").lpf(700).gain(0.5).release(0.1),

  // Hi-hats
  s("hh*16").gain(0.3),
  s("~ oh ~ oh").gain(0.3),

  // Clap
  s("~ cp ~ cp").gain(0.5).room(0.4),

  // Ready to add leads and pads!
)
```

### Quick Breakdown
```javascript
// Just remove kick and add emotion
stack(
  // s("bd*4").gain(0.8),  // <-- Commented out!

  note("<a3 f3 c4 g3>").sound("sawtooth")
    .lpf(2000).room(1.2).gain(0.4).release(3),

  note("e5 c5 d5 e5 g5 e5 c5 d5".slow(2))
    .sound("sawtooth").lpf(3000).room(0.9)
    .delay(0.6).gain(0.6).release(0.5)
)
```

### Instant Drop
```javascript
// Everything comes back at once
stack(
  s("bd*4").gain(0.85),  // Kick returns!
  note("a2*8").sound("sawtooth").lpf(700).gain(0.6).release(0.1),
  s("hh*16").gain(0.35),
  s("~ oh ~ oh").gain(0.3),
  s("~ cp ~ cp").gain(0.5).room(0.4),
  note("e5 c5 d5 e5").sound("sawtooth").lpf(3500)
    .room(0.8).delay(0.5).gain(0.6).release(0.4),
  note("<a3 f3 c4 g3>").sound("sawtooth").lpf(2500)
    .room(0.9).gain("0.25 0.35 0.3 0.4").release(2)
)
```

## Troubleshooting

### Pattern Not Playing?
- Check for syntax errors (missing quotes, brackets)
- Make sure `.sound()` is specified
- Verify tempo is set: `setcpm(138/4)`

### Too Quiet?
- Increase `.gain()` values
- Remove conflicting high-pass filters
- Check if pattern is actually playing (add `.gain(1)`)

### Too Loud / Distorting?
- Lower `.gain()` values (keep under 0.85)
- Reduce resonance values
- Check for too many layered sounds

### No Bass Heard?
- Increase `.gain()` on bass
- Check `.lpf()` isn't too low (try 600-1000)
- Make sure `.hpf()` isn't removing lows

### Pattern Sounds Boring?
- Add filter modulation: `.lpf(sine.range(400,2000).slow(4))`
- Layer multiple sounds
- Add effects: `.room()`, `.delay()`
- Vary patterns with angle brackets: `<>`

## Resources & Learning

### Keyboard Shortcuts in Strudel
- `Ctrl/Cmd + Enter` - Play/Update pattern
- `Ctrl/Cmd + .` - Stop
- `Ctrl/Cmd + Shift + H` - Show help

### Learning More
- [Strudel Workshop](https://strudel.cc/workshop/getting-started/)
- [Strudel REPL](https://strudel.cc/) - Live editor
- [Strudel Discord](https://discord.com/invite/HGEdXmRkzT) - Community support

### Analysis Exercise
Listen to classic trance tracks and identify:
1. What happens in the breakdown?
2. How many bars until the drop?
3. What filter sweeps are used?
4. How does the bass pattern work?
5. What makes the lead sound euphoric?

## Final Pro Tips

1. **Repetition is hypnotic** - Don't change too much too fast
2. **Less is more** - A few elements done well beats many done poorly
3. **Filter everything** - Use .lpf() liberally
4. **Space is crucial** - Use .room() and .delay()
5. **Lock bass with kick** - They should work together
6. **Build and release** - Tension and release is the core of trance
7. **Experiment constantly** - Try different values, see what works
8. **Listen to references** - Study trance tracks you love
9. **Start simple** - Get the groove right first
10. **Have fun!** - This is about creativity and expression

---

**Now go create some epic trance! 🎵✨🔥**
