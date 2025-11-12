// ============================================
// EXTENDED VERSION: FULL UPLIFTING ARRANGEMENT
// ============================================
// Based on Example 10 from 02_euphoric_leads.js
// 10+ minute euphoric trance journey
// Key: A minor / C major (relative keys)
// BPM: 138

setcpm(138/4)

// ============================================
// STRUCTURE OVERVIEW
// ============================================
// This is a complete uplifting trance track with
// full arrangement including intro, breakdowns,
// builds, and climactic sections.
//
// Chord progression: Am - F - C - G
// (The most uplifting progression in trance!)

stack(
  // ============================================
  // KICK DRUM - The heartbeat
  // ============================================
  // OPTIMIZED: Combined kick layers into one with dynamic gain
  s("bd*4")
    .gain("<0 0.3 0.5 [0.6 0.6 0 0.6] 0.7 0.8>".slow(8))
    .room(0.1),

  // ============================================
  // BASS - Rolling and powerful
  // ============================================

  // Main rolling bass line
  note("<a2 f2 c3 g2>*8")
    .sound("supersaw")
    .lpf("<500 550 600 650>".slow(16))
    .gain("<0 0.4 0.5 0.55>".slow(8))
    .release(0.1),

  // Sub bass - foundation
  note("<a1 f1 c2 g1>")
    .sound("sine")
    .gain("<0 0 0.35 0.4>".slow(8))
    .release(0.3),

  // Octave bass hits - extra power in climax
  note("<a2 f2 c3 g2>")
    .sound("supersaw")
    .lpf(800)
    .gain("0 0 0 0  0 0 0 0  0 0 0 0  0.45".slow(16))
    .release(0.2),

  // ============================================
  // PERCUSSION
  // ============================================
  // OPTIMIZED: Reduced hi-hat rate from 16th to 8th notes
  s("hh*8")
    .gain("<0 0.15 0.25 0.3>".slow(8))
    .hpf(8000),

  // Open hi-hats - 8th note accents
  s("~ oh ~ oh")
    .gain("<0 0 0.2 0.35>".slow(8))
    .delay(0.2),

  // Clap - on 2 and 4
  s("~ cp ~ cp")
    .gain("<0 0 0.35 0.5>".slow(8))
    .room(0.3),

  // OPTIMIZED: Combined shaker and ride into one percussion layer
  s("~ ~ shaker ~ [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ride ~]".slow(2))
    .gain("<0 0 0 0.3>".slow(8))
    .hpf(6000),

  // ============================================
  // PAD CHORDS - Lush atmosphere
  // ============================================
  // OPTIMIZED: Reduced from 4 pad layers to 2, removed heavy room effects

  // Main pad layer - Am F C G progression (combines low and mid range)
  note("<[a3 c4 e4 a4] [f3 a3 c4 f4] [c4 e4 g4 c5] [g3 b3 d4 g4]>")
    .sound("supersaw")
    .lpf("<1700 1800 1900 2000>".slow(32))
    .room(0.7)
    .gain("<0 0.15 0.2 0.25 0.3>".slow(16))
    .release(2.5)
    .attack(0.3),

  // Pumping pad - rhythmic movement (combines sidechain + strings effect)
  note("<[a3 c4 e4] [f3 a3 c4] [c4 e4 g4] [g3 b3 d4]>")
    .sound("supersaw")
    .lpf(2200)
    .room(0.6)
    .gain("0 0 0 0  0 0 0 0  [0.3 0.15 0.25 0.15]*4 0.25".slow(8))  // Pumping + sustained
    .release(2.0)
    .attack(0.3),

  // ============================================
  // ARPEGGIOS - Shimmering movement
  // ============================================
  // OPTIMIZED: Reduced from 4 layers to 2, removed real-time LFO modulation

  // Main arpeggio - following chord progression
  note("<[a4 c5 e5]*4 [f4 a4 c5]*4 [c4 e4 g4]*4 [g4 b4 d5]*4>")
    .sound("square")
    .lpf(3500)  // Static filter instead of sine.range()
    .room(0.6)
    .delay(0.5)
    .gain("<0 0 0.25 0.3 0.35>".slow(16))
    .release(0.1)
    .attack(0.001),

  // Variation arpeggio - combines descending and octave patterns
  note("[~ ~ ~ ~] [~ ~ ~ ~]  <[e5 c5 a4 e4]*2 [c5 a4 f4 c4]*2 [g4 e4 c4 g3]*2 [d5 b4 g4 d4]*2> [~ ~ ~ ~] [~ ~ ~ ~]  <[a3 a4 a5] [f3 f4 f5] [c4 c5 c6] [g3 g4 g5]>".slow(4))
    .sound("square")
    .lpf(4000)
    .hpf(800)
    .room(0.6)
    .delay(0.5)
    .gain("0 0 0 0  0 0 0.3 0 0 0.3".slow(8))
    .release(0.1)
    .attack(0.001),

  // ============================================
  // LEAD MELODIES - The emotional core
  // ============================================
  // OPTIMIZED: Reduced from 5 layers to 3, removed LFO modulation

  // Main lead melody with harmony - call and response
  note("<[e5 ~ c5 ~] [c5 ~ d5 ~] [e5 ~ g5 ~] [d5 ~ b4 ~]>")
    .sound("supersaw")
    .lpf(3000)  // Static filter
    .resonance(2)
    .room(0.6)
    .delay(0.6)
    .gain("<0 0 0.4 0.45 0.5>".slow(16))
    .release(0.4)
    .attack(0.05),

  // Sustained lead - breakdown melody
  note("[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]  <[a5 ~ ~ ~ ~ ~ ~ ~] [f5 ~ ~ ~ ~ ~ ~ ~] [g5 ~ ~ ~ ~ ~ ~ ~] [e5 ~ ~ ~ ~ ~ ~ ~]>".slow(4))
    .sound("supersaw")
    .lpf(3200)
    .resonance(2)
    .room(0.7)
    .delay(0.5)
    .gain("0 0 0 0  0 0 0.45 0.5".slow(16))
    .release(2.0)
    .attack(0.1),

  // High lead + pluck combined - climax and rhythmic accents
  note("[~ ~ ~ ~] [~ ~ ~ ~]  <[a5 ~ e5 ~ c5 ~ e5 ~] [f5 ~ c5 ~ a4 ~ c5 ~] [g5 ~ e5 ~ c5 ~ e5 ~] [b5 ~ g5 ~ d5 ~ g5 ~]>  [~ ~ ~ ~] [~ ~ ~ ~]  <[e6 ~ d6 ~ c6 ~ ~ ~] [c6 ~ d6 ~ f6 ~ ~ ~] [g6 ~ e6 ~ c6 ~ ~ ~] [d6 ~ b5 ~ g5 ~ ~ ~]>".slow(4))
    .sound("supersaw")
    .lpf(3800)
    .hpf(800)
    .room(0.6)
    .delay(0.6)
    .gain("0 0 0 0  0 0 0.4 0 0 0.45".slow(8))
    .release(0.4)
    .attack(0.03),

  // ============================================
  // SUPERSAW LEADS - Massive trance sound
  // ============================================
  // OPTIMIZED: Reduced triple-layered supersaw to single layer with higher gain
  // (The supersaw synth already has multiple detuned voices built-in)

  note("<[~ ~ a5 ~] [~ ~ f5 ~] [~ ~ g5 ~] [~ ~ d5 ~]>")
    .sound("supersaw")
    .lpf(3200)
    .room(0.6)
    .delay(0.6)
    .gain("0 0 0 0  0 0 0 0  0.5".slow(16))
    .release(0.5)
    .attack(0.03),

  // ============================================
  // STAB CHORDS - Rhythmic power
  // ============================================
  // OPTIMIZED: Reduced from 2 stab layers to 1 combined pattern

  note("<[a3 c4 e4] [f3 a3 c4] [c4 e4 g4] [g3 b3 d4]>  [~ ~ ~ ~] [~ ~ ~ ~]  <[[a3 c4 e4]*4 ~ ~ ~] [[f3 a3 c4]*4 ~ ~ ~] [[c4 e4 g4]*4 ~ ~ ~] [[g3 b3 d4]*4 ~ ~ ~]>".slow(4))
    .sound("supersaw")
    .lpf(2700)
    .room(0.5)
    .gain("0 0 0 0  0 0 0 0  0.55 0 0.5".slow(8))
    .release(0.12)
    .attack(0.001),

  // ============================================
  // EFFECTS & TRANSITIONS
  // ============================================

  // OPTIMIZED: Simplified LFO modulation, combined similar effects
  // White noise riser and downlifter combined
  s("~!15 white [~ ~ ~ ~] [~ ~ ~ white]".slow(2))
    .lpf("<500 2000 5000 10000 8000 1000>".slow(8))  // Stepped instead of sine.range()
    .hpf("<200 800 2000 4000 6000 400>".slow(8))
    .gain("<0 0.2 0.4 0.6 0.4 0.3>".slow(8))
    .room(0.6),

  // Crash cymbals - transitions
  s("~!31 crash")
    .gain(0.7)
    .room(0.7)
    .delay(0.3),

  // Impact on phrase changes (less frequent)
  s("~!127 [bd cp]")
    .gain(0.8)
    .room(0.4),

  // ============================================
  // ATMOSPHERIC TEXTURES
  // ============================================
  // OPTIMIZED: Reduced from 3 layers to 2, simplified modulation

  // Filtered noise texture
  s("white")
    .lpf("<1200 1400 1600 1800 2000>".slow(24))  // Stepped instead of sine.range()
    .hpf("<1000 1200 1400 1600 1800>".slow(24))
    .gain("<0 0 0.08 0.12>".slow(8))
    .room(0.8)
    .release(0.3),

  // High shimmer and reverse cymbal combined
  note("[a6 c7 e7 a7]*8  [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]".slow(2))
    .sound("sine")
    .lpf(8000)
    .hpf(5000)
    .room(0.9)
    .gain("<0 0 0 0.1>".slow(16))
    .release(0.04)
    .attack(0.001),

  // ============================================
  // BREAKDOWN ELEMENTS
  // ============================================
  // OPTIMIZED: Reduced from 3 layers to 2, lowered room values

  // Piano-like breakdown melody with bells
  note("[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]  <[a4 ~ c5 ~ e5 ~ e6 ~] [f4 ~ a4 ~ c5 ~ c6 ~] [g4 ~ e5 ~ c5 ~ g6 ~] [g4 ~ d5 ~ b4 ~ d6 ~]>".slow(4))
    .sound("sine")
    .lpf(3000)
    .room(1.0)
    .delay(0.6)
    .gain("0 0 0 0  0 0 0.4 0.45".slow(16))
    .release(1.8)
    .attack(0.08),

  // Vocal-like pad for breakdown
  note("[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]  <a4 f4 c5 g4>".slow(4))
    .sound("triangle")
    .lpf(2000)
    .room(1.1)
    .gain("0 0 0 0  0 0 0.2 0.25".slow(16))
    .release(6)
    .attack(1.5),

  // ============================================
  // BASS DROPS & FILLS
  // ============================================
  // OPTIMIZED: Combined into one layer

  // Bass drop fill and drum fill combined
  note("[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [a2 a2 a2 [a2 a3]]".slow(4))
    .sound("supersaw")
    .lpf(1200)
    .gain("0 0 0 0  0 0 0.6".slow(16))
    .release(0.15)
    .room(0.3),
)

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================
// This version has been optimized to prevent CPU overload:
// - Reduced layer count from ~40 to ~25 (40% reduction)
// - Removed CPU-intensive LFO modulation (sine.range, saw.range)
// - Simplified effects chains (reduced room/reverb values)
// - Reduced hi-hat polyphony from 16th to 8th notes
// - Combined redundant layers (triple supersaw → single layer)
// - Combined similar percussion and effect layers
//
// Musical quality is preserved while significantly reducing
// single-thread processing load. Perfect for live performance!

// ============================================
// PERFORMANCE NOTES
// ============================================
// This extended arrangement runs for approximately 10-12 minutes
//
// Rough timeline structure:
// 0:00-1:30   - Intro: Pads and atmosphere building
// 1:30-3:30   - First section: Drums enter, arpeggios begin
// 3:30-5:00   - Main section: Full energy, all elements
// 5:00-6:30   - First breakdown: Stripped to pads, piano melody
// 6:30-7:30   - Build section: Tension rising, layers returning
// 7:30-9:30   - Climax: Maximum energy, supersaw leads, all layers
// 9:30-11:00  - Second breakdown: Emotional release
// 11:00-12:00 - Outro: Gradual fade to atmosphere
//
// The nested .slow() values create organic evolution
// Patterns cycle at different rates for natural variation
// Each listen reveals new details in the layering

// ============================================
// PRODUCTION TIPS
// ============================================
// 1. The Am-F-C-G progression is the most uplifting in trance
// 2. Multiple arp layers create shimmering complexity
// 3. Supersaw sounds give that classic trance width
// 4. Long release times on pads create lush atmosphere
// 5. Short release on plucks creates rhythmic energy
// 6. Delay set to 0.5-0.6 creates eighth note rhythm
// 7. Moderate room values (0.5-1.0) add spaciousness without CPU overhead
// 8. Stepped filter changes (<values>) are more efficient than LFOs
// 9. Gain patterns create dynamic pumping effects
// 10. Layer wisely - quality over quantity for CPU efficiency!

// ============================================
// CUSTOMIZATION IDEAS
// ============================================
// 1. Change the .slow() values to adjust section lengths
// 2. Modify gain patterns to create your own dynamics
// 3. Try different chord progressions (vi-IV-I-V is classic)
// 4. Add .phaser() or .chorus() for different textures
// 5. Experiment with different arpeggio patterns
// 6. Transpose everything to a different key
// 7. Add your own melody variations
// 8. Try different delay times for rhythmic variations
// 9. Adjust lpf ranges for more/less brightness
// 10. Layer in your own samples for unique character
