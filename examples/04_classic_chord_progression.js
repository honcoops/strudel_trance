// ============================================
// CLASSIC CHORD PROGRESSION: I-V-vi-IV
// ============================================
// Copy and paste any of these examples directly into Strudel!
// The I-V-vi-IV progression is one of the most popular and
// uplifting chord progressions in trance music.
// In C major: C-G-Am-F

setcpm(138/4)  // Classic trance tempo


// ============================================
// EXAMPLE 1: Basic I-V-vi-IV Arpeggio
// Simple ascending arpeggio pattern
// ============================================

stack(
  // Rhythm section
  s("bd*4").gain(0.8),
  s("hh*16").gain(0.3),
  s("~ cp ~ cp").gain(0.5),

  // Bass following chord roots
  note("<c2 g2 a2 f2>*4").sound("sawtooth")
    .lpf(600).gain(0.6).release(0.1),

  // Classic I-V-vi-IV arpeggio (C-G-Am-F)
  note("<[c4 e4 g4]*4 [g3 b3 d4]*4 [a3 c4 e4]*4 [f3 a3 c4]*4>")
    .sound("square")
    .lpf(3000)
    .room(0.8)
    .delay(0.5)
    .gain(0.4)
    .release(0.1)
)


// ============================================
// EXAMPLE 2: Fast 16th Note Arpeggio
// High-energy shimmer effect
// ============================================

stack(
  // Rhythm
  s("bd*4").gain(0.8),
  s("hh*16").gain(0.3),

  // Bass
  note("<c2 g2 a2 f2>*4").sound("sawtooth")
    .lpf(650).gain(0.6).release(0.1),

  // Fast 16th note arpeggios
  note("<[c4 e4 g4 c5]*4 [g3 b3 d4 g4]*4 [a3 c4 e4 a4]*4 [f3 a3 c4 f4]*4>")
    .sound("triangle")
    .lpf(3500)
    .room(0.8)
    .delay(0.4)
    .gain(0.35)
    .release(0.08)
)


// ============================================
// EXAMPLE 3: Octave-Spanning Arpeggio
// Covers wide frequency range for drama
// ============================================

stack(
  // Rhythm
  s("bd*4").gain(0.8),
  s("hh*16").gain(0.3),
  s("~ cp ~ cp").gain(0.5),

  // Bass
  note("<c2 g2 a2 f2>*8").sound("sawtooth")
    .lpf(600).gain(0.55),

  // Wide arpeggio pattern
  note("<[c3 e3 g3 c4 e4 g4 c5 g4] [g2 b2 d3 g3 b3 d4 g4 d4] [a2 c3 e3 a3 c4 e4 a4 e4] [f2 a2 c3 f3 a3 c4 f4 c4]>")
    .sound("square")
    .lpf(3800)
    .room(0.85)
    .delay(0.5)
    .gain(0.38)
    .release(0.1)
)


// ============================================
// EXAMPLE 4: Layered Arpeggios with Pad
// Full harmonic texture
// ============================================

stack(
  // Rhythm
  s("bd*4").gain(0.8),
  s("hh*16").gain(0.3),
  s("~ cp ~ cp").gain(0.5),

  // Bass
  note("<c2 g2 a2 f2>*4").sound("sawtooth")
    .lpf(650).gain(0.6),

  // Sustained pad chords
  note("<c4 g4 a4 f4>").sound("sawtooth")
    .lpf(2000)
    .room(0.95)
    .gain(0.28)
    .release(2.5)
    .attack(0.2),

  // Mid-range arpeggio
  note("<[e4 g4 c5]*4 [b3 d4 g4]*4 [c4 e4 a4]*4 [a3 c4 f4]*4>")
    .sound("square")
    .lpf(3200)
    .room(0.8)
    .delay(0.5)
    .gain(0.35)
    .release(0.12),

  // High sparkle layer
  note("<g5 d5 e5 c5>*2").sound("triangle")
    .lpf(4500)
    .room(0.7)
    .delay(0.6)
    .gain(0.25)
    .release(0.08)
)


// ============================================
// EXAMPLE 5: Progressive Arpeggio Build
// Starts simple, adds complexity
// ============================================

stack(
  // Rhythm
  s("bd*4").gain(0.8),
  s("hh*16").gain(0.3),

  // Bass
  note("<c2 g2 a2 f2>*4").sound("sawtooth")
    .lpf(600).gain(0.6),

  // Evolving arpeggio pattern (gets faster)
  note("<[c4 e4 g4] [g3 b3 d4]*2 [a3 c4 e4]*3 [f3 a3 c4]*4>")
    .sound("square")
    .lpf(3300)
    .room(0.8)
    .delay(0.5)
    .gain(0.4)
    .release(0.1)
)


// ============================================
// EXAMPLE 6: Descending Arpeggio
// Creates a falling, dreamy effect
// ============================================

stack(
  // Rhythm
  s("bd*4").gain(0.8),
  s("hh*16").gain(0.3),
  s("~ cp ~ cp").gain(0.5),

  // Bass
  note("<c2 g2 a2 f2>*4").sound("sawtooth")
    .lpf(650).gain(0.6),

  // Descending arpeggios
  note("<[c5 g4 e4 c4]*2 [g4 d4 b3 g3]*2 [a4 e4 c4 a3]*2 [f4 c4 a3 f3]*2>")
    .sound("square")
    .lpf(3500)
    .room(0.85)
    .delay(0.5)
    .gain(0.4)
    .release(0.12)
)


// ============================================
// EXAMPLE 7: Arpeggio with Lead Melody
// Combining arpeggio and melodic line
// ============================================

stack(
  // Rhythm
  s("bd*4").gain(0.8),
  s("hh*16").gain(0.3),
  s("~ cp ~ cp").gain(0.5),

  // Bass
  note("<c2 g2 a2 f2>*8").sound("sawtooth")
    .lpf(600).gain(0.55),

  // Background arpeggio
  note("<[c4 e4 g4]*4 [g3 b3 d4]*4 [a3 c4 e4]*4 [f3 a3 c4]*4>")
    .sound("triangle")
    .lpf(2800)
    .room(0.9)
    .gain(0.3)
    .release(0.1),

  // Lead melody on top
  note("<[e5 ~ g5 ~] [d5 ~ g5 ~] [c5 ~ e5 ~] [c5 ~ f5 ~]>")
    .sound("sawtooth")
    .lpf(3500)
    .room(0.7)
    .delay(0.6)
    .gain(0.5)
    .release(0.35)
)


// ============================================
// EXAMPLE 8: Syncopated Arpeggio
// Off-beat pattern for groove
// ============================================

stack(
  // Rhythm
  s("bd*4").gain(0.8),
  s("hh*16").gain(0.3),
  s("~ cp ~ cp").gain(0.5),

  // Bass
  note("<c2 g2 a2 f2>*4").sound("sawtooth")
    .lpf(650).gain(0.6),

  // Syncopated arpeggio (accents off-beats)
  note("<[~ e4 ~ g4 c5 ~ g4 ~] [~ b3 ~ d4 g4 ~ d4 ~] [~ c4 ~ e4 a4 ~ e4 ~] [~ a3 ~ c4 f4 ~ c4 ~]>")
    .sound("square")
    .lpf(3400)
    .room(0.8)
    .delay(0.5)
    .gain(0.4)
    .release(0.1)
)


// ============================================
// EXAMPLE 9: Arpeggio with Filter Sweep
// Automated filter movement
// ============================================

stack(
  // Rhythm
  s("bd*4").gain(0.8),
  s("hh*16").gain(0.3),

  // Bass
  note("<c2 g2 a2 f2>*4").sound("sawtooth")
    .lpf(600).gain(0.6),

  // Arpeggio with sweeping filter
  note("<[c4 e4 g4]*4 [g3 b3 d4]*4 [a3 c4 e4]*4 [f3 a3 c4]*4>")
    .sound("square")
    .lpf(sine.range(1000, 4000).slow(8))  // Slow filter sweep
    .resonance(6)      // Emphasize the sweep
    .room(0.8)
    .gain(0.45)
    .release(0.12)
)


// ============================================
// EXAMPLE 10: Full Uplifting Arrangement
// Complete trance track section with I-V-vi-IV
// ============================================

stack(
  // Kick
  s("bd*4").gain(0.85),

  // Rolling bass
  note("<c2 g2 a2 f2>*8").sound("sawtooth")
    .lpf(700).gain(0.55).release(0.1),

  // Hi-hats
  s("hh*16").gain(0.3),
  s("~ oh ~ oh").gain(0.35),

  // Clap
  s("~ cp ~ cp").gain(0.5).room(0.4),

  // Sustained pad (I-V-vi-IV chords)
  note("<c4 g4 a4 f4>").sound("sawtooth")
    .lpf(2200)
    .room(1.0)
    .gain("<0.25 0.3 0.28 0.32>")  // Slight pumping
    .release(2.5)
    .attack(0.15),

  // Main arpeggio
  note("<[c4 e4 g4 c5]*4 [g3 b3 d4 g4]*4 [a3 c4 e4 a4]*4 [f3 a3 c4 f4]*4>")
    .sound("square")
    .lpf(3500)
    .room(0.8)
    .delay(0.5)
    .gain(0.38)
    .release(0.1),

  // High melody
  note("<[e5 ~ ~ ~] [d5 ~ ~ ~] [c5 ~ ~ ~] [f5 ~ ~ ~]>")
    .sound("sawtooth")
    .lpf(3200)
    .room(0.7)
    .delay(0.6)
    .gain(0.48)
    .release(0.5),

  // Extra high sparkle
  note("<g5 d5 e5 c5>*2").sound("triangle")
    .lpf(5000)
    .hpf(2000)     // Remove low frequencies
    .room(0.6)
    .gain(0.2)
    .release(0.05)
)


// ============================================
// EXAMPLE 11: Minimal Arpeggio Build
// Starts sparse, gradually adds notes
// ============================================

stack(
  // Rhythm
  s("bd*4").gain(0.8),
  s("hh*16").gain(0.3),

  // Bass
  note("<c2 g2 a2 f2>*4").sound("sawtooth")
    .lpf(650).gain(0.6),

  // Progressive arpeggio (adds notes each bar)
  note("<[c4 ~ ~ ~] [g3 ~ b3 ~] [a3 c4 ~ e4] [f3 a3 c4 f4]>*2")
    .sound("square")
    .lpf(3300)
    .room(0.85)
    .delay(0.5)
    .gain(0.42)
    .release(0.12)
)


// ============================================
// EXAMPLE 12: Triplet Arpeggio
// 3/4 feel over 4/4 time signature
// ============================================

stack(
  // Rhythm
  s("bd*4").gain(0.8),
  s("hh*16").gain(0.3),
  s("~ cp ~ cp").gain(0.5),

  // Bass
  note("<c2 g2 a2 f2>*4").sound("sawtooth")
    .lpf(600).gain(0.6),

  // Triplet-based arpeggio
  note("<[c4 e4 g4]*3 [g3 b3 d4]*3 [a3 c4 e4]*3 [f3 a3 c4]*3>")
    .sound("triangle")
    .lpf(3600)
    .room(0.8)
    .delay(0.5)
    .gain(0.4)
    .release(0.09)
)


// ============================================
// WHY I-V-vi-IV WORKS SO WELL:
// ============================================
// 1. Creates strong emotional movement
// 2. The vi (minor) chord adds depth and emotion
// 3. IV to I resolution feels satisfying
// 4. Used in countless hit songs across genres
// 5. Easy to improvise melodies over
// 6. Works in any key - just transpose!

// ============================================
// PRO TIPS FOR ARPEGGIOS:
// ============================================
// 1. Fast arpeggios (16th notes) create shimmer
// 2. Slow arpeggios (8th notes) create space
// 3. Use .delay(0.5) for rhythmic echo
// 4. Layer multiple octaves for thickness
// 5. Short release (0.08-0.12) keeps it tight
// 6. High lpf values (3000+) for brightness
// 7. Triangle wave = softer, square wave = brighter
// 8. Add a sustained pad underneath for fullness
// 9. Ascending = uplifting, descending = dreamy
// 10. Syncopation adds groove and interest

// ============================================
// TRANSPOSING TO OTHER KEYS:
// ============================================
// Just add .add(n) to all notes to transpose:
// .add(2)   -> D major (C-G-Am-F becomes D-A-Bm-G)
// .add(-3)  -> A major (C-G-Am-F becomes A-E-F#m-D)
// .add(5)   -> F major (C-G-Am-F becomes F-C-Dm-Bb)

// ============================================
// EXPERIMENT IDEAS:
// ============================================
// - Try different speeds with .fast() and .slow()
// - Add .phaser() for movement and shimmer
// - Use .hpf() to remove low frequencies from high arps
// - Layer 2-3 arpeggios at different octaves
// - Alternate ascending and descending patterns
// - Add .resonance() for emphasis on filtered sounds
// - Try different wave types: sawtooth, square, triangle
// - Create call-and-response between two arp patterns
// - Add automation with sine.range() for evolving sound
// - Combine with melodic leads from 02_euphoric_leads.js
