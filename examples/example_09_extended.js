// ============================================
// EXTENDED VERSION: PROGRESSIVE TRANCE PLUCKS
// ============================================
// Based on Example 9 from 02_euphoric_leads.js
// 10+ minute progressive trance journey
// Key: D minor
// BPM: 138

setcpm(138/4)

// ============================================
// STRUCTURE OVERVIEW
// ============================================
// This track progressively builds over 10+ minutes
// with evolving melodies, filters, and layers.
// The structure creates tension and release through
// multiple breakdowns and builds.

stack(
  // ============================================
  // DRUMS - Progressive patterns
  // ============================================

  // Kick drum - enters after intro
  s("bd*4")
    .gain("0 0 0 0  0.3 0.3 0.3 0.3  0.5 0.5 0.5 0.5  <0.8 0.8 [0.8 0] 0.8>".slow(16))
    .room(0.1),

  // Hi-hats - building complexity
  s("hh*16")
    .gain("<0 0.1 0.2 0.3>".slow(8))
    .hpf(8000),

  // Open hi-hats - evolving pattern
  s("<~ ~ [~ oh] [~ oh]>".fast(2))
    .gain(0.35)
    .room(0.3)
    .delay(0.25),

  // Clap - entering gradually
  s("~ cp ~ cp")
    .gain("<0 0 0.3 0.5>".slow(8))
    .room(0.4),

  // Percussion fills - adds interest
  s("[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ shaker*4]".slow(4))
    .gain(0.4),

  // ============================================
  // BASS - Rolling trance bass
  // ============================================

  // Main rolling bass
  note("d2*8")
    .sound("supersaw")
    .lpf("<400 500 600 700>".slow(16))
    .gain("<0 0.3 0.45 0.55>".slow(8))
    .release(0.1)
    .room(0.05),

  // Sub bass layer - foundation
  note("<d1 d1 d1 [d1 f1]>".slow(4))
    .sound("sine")
    .gain("<0 0 0.3 0.4>".slow(8))
    .release(0.2),

  // Bass variation in later sections
  note("<d2*8 [d2*6 f2*2] [d2*4 f2*2 g2*2] d2*8>".slow(16))
    .sound("supersaw")
    .lpf(650)
    .gain("0 0 0 0  0 0 0 0  0 0 0.4 0.45".slow(8))
    .release(0.1),

  // ============================================
  // PAD LAYERS - Atmospheric foundation
  // ============================================

  // Main pad - D minor tonality
  note("<d4 f4 a4>")
    .sound("supersaw")
    .lpf("<1200 1400 1600 1800>".slow(32))
    .room(0.9)
    .gain("<0 0.15 0.25 0.3>".slow(16))
    .release(2)
    .attack(0.2),

  // Second pad voice - harmonic richness
  note("<f4 a4 d5>")
    .sound("supersaw")
    .lpf("<1400 1600 1800 2000>".slow(32))
    .room(1.0)
    .gain("<0 0 0.2 0.25>".slow(16))
    .release(2.5)
    .attack(0.3),

  // Evolving pad chord
  note("<[d4 f4 a4] [d4 f4 a4] [c4 e4 g4] [d4 f4 a4]>".slow(8))
    .sound("supersaw")
    .lpf(2000)
    .room(1.2)
    .gain("0 0 0 0  0 0 0.2 0.25".slow(8))
    .release(3)
    .attack(0.5),

  // ============================================
  // PLUCK MELODY - The star of the show
  // ============================================

  // Main pluck pattern - original theme
  note("d5 ~ f5 ~ a5 ~ f5 ~ d5 ~ e5 ~ f5 ~ e5 ~")
    .sound("triangle")
    .lpf(sine.range(3000, 5000).slow(32))
    .hpf(800)
    .room(0.8)
    .delay(0.5)
    .gain("<0 0 0.4 0.6>".slow(8))
    .release(0.05)
    .attack(0.001),

  // Variation 1 - octave higher
  note("[~ ~ ~ ~] [~ ~ ~ ~] [d6 ~ f6 ~ a6 ~ f6 ~] [d6 ~ e6 ~ f6 ~ e6 ~]".slow(4))
    .sound("triangle")
    .lpf(4500)
    .hpf(1200)
    .room(0.9)
    .delay(0.5)
    .gain("0 0 0 0  0 0 0 0  0 0.4 0.5 0.5".slow(8))
    .release(0.04)
    .attack(0.001),

  // Variation 2 - different rhythm
  note("[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [d5 f5 e5 f5 a5 f5 e5 d5]".slow(4))
    .sound("triangle")
    .lpf(4000)
    .hpf(900)
    .room(0.85)
    .delay(0.4)
    .gain("0 0 0 0  0 0 0 0  0 0 0 0  0 0 0.45 0.5".slow(8))
    .release(0.06)
    .attack(0.001),

  // Harmony pluck - thirds
  note("[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]  [f5 ~ a5 ~ c6 ~ a5 ~] [f5 ~ g5 ~ a5 ~ g5 ~]".slow(8))
    .sound("triangle")
    .lpf(4200)
    .hpf(850)
    .room(0.8)
    .delay(0.6)
    .gain("0 0 0 0  0 0 0 0  0 0 0 0  0 0 0 0  0 0 0.35 0.4".slow(8))
    .release(0.05)
    .attack(0.001),

  // Doubled plucks - thickness in climax
  note("d5 ~ f5 ~ a5 ~ f5 ~ d5 ~ e5 ~ f5 ~ e5 ~")
    .add(0.05) // Slightly detuned
    .sound("triangle")
    .lpf(4000)
    .hpf(800)
    .room(0.8)
    .delay(0.5)
    .gain("0 0 0 0  0 0 0 0  0 0 0 0  0 0 0 0  0 0 0 0  0.3 0.35".slow(16))
    .release(0.05)
    .attack(0.001),

  // ============================================
  // ARPEGGIO LAYERS - Movement and energy
  // ============================================

  // Fast arpeggio - enters in main section
  note("<[d4 f4 a4]*8 [d4 f4 a4]*8 [c4 e4 g4]*8 [d4 f4 a4]*8>".slow(4))
    .sound("square")
    .lpf(sine.range(2500, 3500).slow(16))
    .room(0.7)
    .delay(0.5)
    .gain("0 0 0 0  0 0 0 0  0 0.3 0.35 0.4".slow(16))
    .release(0.08)
    .attack(0.001),

  // Slower arpeggio - counter melody
  note("<[d5 a5 f5 a5] [d5 a5 f5 a5] [c5 g5 e5 g5] [d5 a5 f5 a5]>".slow(2))
    .sound("square")
    .lpf(3800)
    .room(0.8)
    .delay(0.6)
    .gain("0 0 0 0  0 0 0 0  0 0 0 0  0 0.3 0.35 0.4".slow(16))
    .release(0.12)
    .attack(0.001),

  // ============================================
  // LEAD SYNTH - Emotional top line
  // ============================================

  // Sustained lead melody - enters in breakdown
  note("[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]  [a5 ~ ~ ~ c6 ~ ~ ~] [g5 ~ ~ ~ f5 ~ ~ ~]".slow(8))
    .sound("supersaw")
    .lpf(3000)
    .resonance(2)
    .room(0.7)
    .delay(0.6)
    .gain("0 0 0 0  0 0 0 0  0 0 0.45 0.5".slow(16))
    .release(0.8)
    .attack(0.05),

  // Lead variation - different phrase
  note("[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]  [~ ~ ~ ~] [~ ~ ~ ~]  [d6 ~ ~ ~ f6 ~ ~ ~] [e6 ~ ~ ~ d6 ~ ~ ~]".slow(8))
    .sound("supersaw")
    .lpf(3200)
    .resonance(2)
    .room(0.75)
    .delay(0.5)
    .gain("0 0 0 0  0 0 0 0  0 0 0 0  0 0 0 0  0 0 0.4 0.5".slow(16))
    .release(1.0)
    .attack(0.06),

  // ============================================
  // SWEEP EFFECTS - Builds and transitions
  // ============================================

  // White noise sweep - for builds
  s("~!15 white")
    .lpf(sine.range(200, 8000).slow(4))
    .hpf(sine.range(100, 4000).slow(4))
    .gain(saw.range(0, 0.5).slow(4))
    .room(0.6),

  // Crash cymbal - section transitions
  s("~!63 crash")
    .gain(0.7)
    .room(0.8)
    .delay(0.3),

  // ============================================
  // FILTER SWEEPS - Automation movement
  // ============================================

  // Filtered noise for texture
  s("~ ~ ~ ~ ~ ~ white ~".slow(2))
    .lpf(sine.range(1000, 3000).slow(16))
    .hpf(sine.range(800, 2000).slow(16))
    .gain("<0 0 0.15 0.2>".slow(8))
    .room(0.8)
    .release(0.5),

  // ============================================
  // STAB CHORDS - Rhythmic accents
  // ============================================

  // Power chord stabs - climax section
  note("[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]  [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]  [[d4 f4 a4]*4 ~ ~ ~]".slow(8))
    .sound("supersaw")
    .lpf(2500)
    .room(0.6)
    .gain("0 0 0 0  0 0 0 0  0 0 0 0  0 0 0 0  0 0 0.5".slow(16))
    .release(0.1)
    .attack(0.001),

  // ============================================
  // BREAKDOWN ELEMENTS
  // ============================================

  // Soft piano-like sound for breakdown
  note("[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]  [d5 ~ f5 ~ a5 ~ ~ ~]".slow(4))
    .sound("sine")
    .lpf(2000)
    .room(1.2)
    .gain("0 0 0 0  0 0 0.4 0.45".slow(16))
    .release(2)
    .attack(0.1),

  // Vocal-like pad
  note("[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]  [a4 ~ ~ ~ ~ ~ ~ ~]".slow(4))
    .sound("triangle")
    .lpf(1800)
    .room(1.5)
    .gain("0 0 0 0  0 0 0.25 0.3".slow(16))
    .release(4)
    .attack(1),

  // ============================================
  // BACKGROUND TEXTURES
  // ============================================

  // Subtle background shimmer
  note("d6 f6 a6 d7".fast(8))
    .sound("sine")
    .lpf(6000)
    .hpf(4000)
    .room(1.0)
    .gain("<0 0 0 0.15>".slow(16))
    .release(0.03)
    .attack(0.001),
)

// ============================================
// PERFORMANCE NOTES
// ============================================
// This track evolves over approximately 10-12 minutes
//
// Rough timeline:
// 0:00-1:00   - Intro: pads and filtered elements fade in
// 1:00-3:00   - Build: drums enter, plucks establish theme
// 3:00-5:00   - Main section: full energy, arpeggios join
// 5:00-6:30   - Breakdown: stripped to pads and soft plucks
// 6:30-7:30   - Build: tension increases, layers return
// 7:30-10:00  - Climax: all elements, maximum energy
// 10:00-11:30 - Outro: gradual fade, return to atmosphere
//
// The slow() values create long-form evolution
// Each pattern cycles at different rates creating
// organic variation throughout the journey

// ============================================
// CUSTOMIZATION IDEAS
// ============================================
// 1. Adjust the .slow() values to make sections longer/shorter
// 2. Change the gain patterns to create different dynamics
// 3. Modify the lpf ranges for more/less filter movement
// 4. Add your own melody variations in the gaps
// 5. Change the key by transposing all notes
// 6. Add .phaser() or .chorus() for different textures
// 7. Experiment with different waveforms (sawtooth/square/triangle)
// 8. Adjust delay times for different rhythmic feels
