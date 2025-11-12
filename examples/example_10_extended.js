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

  // Main kick - gradually building
  s("bd*4")
    .gain("<0 0.3 0.5 0.6 0.7 0.8>".slow(8))
    .room(0.1),

  // Kick variation - removes on beat 3 for breakdown
  s("bd*4")
    .gain("0 0 0 0  0 0 0 0  0 0 0 0  [0.8 0.8 0 0.8]".slow(16))
    .room(0.1),

  // ============================================
  // BASS - Rolling and powerful
  // ============================================

  // Main rolling bass line
  note("<a2 f2 c3 g2>*8")
    .sound("supersaw")
    .lpf("<500 550 600 650>".slow(16))
    .gain("<0 0.4 0.5 0.55>".slow(8))
    .release(0.1)
    .room(0.05),

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
    .release(0.2)
    .room(0.1),

  // ============================================
  // PERCUSSION
  // ============================================

  // Closed hi-hats - 16th note groove
  s("hh*16")
    .gain("<0 0.15 0.25 0.3>".slow(8))
    .hpf(8000)
    .room(0.1),

  // Open hi-hats - 8th note accents
  s("~ oh ~ oh")
    .gain("<0 0 0.2 0.35>".slow(8))
    .room(0.3)
    .delay(0.2),

  // Clap - on 2 and 4
  s("~ cp ~ cp")
    .gain("<0 0 0.35 0.5>".slow(8))
    .room(0.4),

  // Shaker - adds texture
  s("~ ~ shaker ~".fast(2))
    .gain("<0 0 0 0.3>".slow(8))
    .hpf(6000),

  // Ride cymbal - occasional accent
  s("[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ride ~]".slow(4))
    .gain(0.3)
    .room(0.5),

  // ============================================
  // PAD CHORDS - Lush atmosphere
  // ============================================

  // Main pad layer - Am F C G progression
  note("<[a3 c4 e4] [f3 a3 c4] [c4 e4 g4] [g3 b3 d4]>")
    .sound("supersaw")
    .lpf("<1600 1700 1800 1900>".slow(32))
    .room(0.9)
    .gain("<0 0.15 0.2 0.25 0.3>".slow(16))
    .release(2.5)
    .attack(0.3),

  // Second pad layer - higher octave
  note("<[a4 c5 e5] [f4 a4 c5] [c5 e5 g5] [g4 b4 d5]>")
    .sound("supersaw")
    .lpf("<1800 1900 2000 2100>".slow(32))
    .room(1.0)
    .gain("<0 0 0.15 0.2 0.25>".slow(16))
    .release(3)
    .attack(0.4),

  // Pumping sidechain pad - rhythmic movement
  note("<[a3 c4 e4] [f3 a3 c4] [c4 e4 g4] [g3 b3 d4]>")
    .sound("supersaw")
    .lpf(2200)
    .room(0.8)
    .gain("0 0 0 0  0 0 0 0  [0.3 0.15 0.25 0.15]*4".slow(16))  // Pumping effect
    .release(1.5)
    .attack(0.2),

  // Strings pad - emotional layer
  note("<a3 f3 c4 g3>")
    .sound("supersaw")
    .lpf(2500)
    .room(1.2)
    .gain("<0 0 0 0.25>".slow(16))
    .release(4)
    .attack(0.8),

  // ============================================
  // ARPEGGIOS - Shimmering movement
  // ============================================

  // Main arpeggio - following chord progression
  note("<[a4 c5 e5]*4 [f4 a4 c5]*4 [c4 e4 g4]*4 [g4 b4 d5]*4>")
    .sound("square")
    .lpf(sine.range(3000, 4000).slow(16))
    .room(0.8)
    .delay(0.5)
    .gain("<0 0 0.25 0.3 0.35>".slow(16))
    .release(0.1)
    .attack(0.001),

  // Fast arpeggio layer - 16th notes
  note("<[a4 c5 e5 a5]*4 [f4 a4 c5 f5]*4 [c4 e4 g4 c5]*4 [g4 b4 d5 g5]*4>")
    .sound("square")
    .lpf(4000)
    .hpf(1000)
    .room(0.85)
    .delay(0.6)
    .gain("0 0 0 0  0 0 0 0  0.25 0.3".slow(16))
    .release(0.08)
    .attack(0.001),

  // Descending arpeggio - variation
  note("[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]  <[e5 c5 a4 e4]*2 [c5 a4 f4 c4]*2 [g4 e4 c4 g3]*2 [d5 b4 g4 d4]*2>".slow(4))
    .sound("square")
    .lpf(3800)
    .room(0.8)
    .delay(0.5)
    .gain("0 0 0 0  0 0 0.3 0.35".slow(16))
    .release(0.09)
    .attack(0.001),

  // Octave-spanning arp - epic feel
  note("[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]  <[a3 a4 a5 a4] [f3 f4 f5 f4] [c4 c5 c6 c5] [g3 g4 g5 g4]>".slow(4))
    .sound("triangle")
    .lpf(4500)
    .hpf(800)
    .room(0.9)
    .delay(0.6)
    .gain("0 0 0 0  0 0 0 0  0 0 0.3 0.35".slow(16))
    .release(0.12)
    .attack(0.001),

  // ============================================
  // LEAD MELODIES - The emotional core
  // ============================================

  // Main lead melody - call and response
  note("<[e5 ~ c5 ~] [c5 ~ d5 ~] [e5 ~ g5 ~] [d5 ~ b4 ~]>")
    .sound("supersaw")
    .lpf(sine.range(2800, 3200).slow(32))
    .resonance(2)
    .room(0.7)
    .delay(0.6)
    .gain("<0 0 0.4 0.45 0.5>".slow(16))
    .release(0.4)
    .attack(0.05),

  // Second lead voice - harmony
  note("<[c5 ~ a4 ~] [a4 ~ f4 ~] [c5 ~ e5 ~] [b4 ~ g4 ~]>")
    .sound("supersaw")
    .lpf(sine.range(2600, 3000).slow(32))
    .resonance(2)
    .room(0.7)
    .delay(0.6)
    .gain("<0 0 0 0.3 0.35>".slow(16))
    .release(0.4)
    .attack(0.05),

  // Sustained lead - breakdown melody
  note("[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]  <[a5 ~ ~ ~ ~ ~ ~ ~] [f5 ~ ~ ~ ~ ~ ~ ~] [g5 ~ ~ ~ ~ ~ ~ ~] [e5 ~ ~ ~ ~ ~ ~ ~]>".slow(4))
    .sound("supersaw")
    .lpf(3000)
    .resonance(3)
    .room(0.9)
    .delay(0.5)
    .gain("0 0 0 0  0 0 0.45 0.5".slow(16))
    .release(2.0)
    .attack(0.1),

  // High lead - climax
  note("[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]  [~ ~ ~ ~]  <[e6 ~ d6 ~ c6 ~ ~ ~] [c6 ~ d6 ~ f6 ~ ~ ~] [g6 ~ e6 ~ c6 ~ ~ ~] [d6 ~ b5 ~ g5 ~ ~ ~]>".slow(8))
    .sound("supersaw")
    .lpf(3500)
    .resonance(2)
    .room(0.75)
    .delay(0.7)
    .gain("0 0 0 0  0 0 0 0  0 0 0.45 0.5".slow(16))
    .release(0.6)
    .attack(0.05),

  // Pluck lead - rhythmic accents
  note("[~ ~ ~ ~] [~ ~ ~ ~]  <[a5 ~ e5 ~ c5 ~ e5 ~] [f5 ~ c5 ~ a4 ~ c5 ~] [g5 ~ e5 ~ c5 ~ e5 ~] [b5 ~ g5 ~ d5 ~ g5 ~]>".slow(4))
    .sound("triangle")
    .lpf(4200)
    .hpf(1000)
    .room(0.8)
    .delay(0.5)
    .gain("0 0 0 0  0 0 0.4 0.45".slow(16))
    .release(0.08)
    .attack(0.001),

  // ============================================
  // SUPERSAW LEADS - Massive trance sound
  // ============================================

  // Triple-layered supersaw lead
  note("<[~ ~ a5 ~] [~ ~ f5 ~] [~ ~ g5 ~] [~ ~ d5 ~]>")
    .sound("supersaw")
    .lpf(3200)
    .room(0.7)
    .delay(0.6)
    .gain("0 0 0 0  0 0 0 0  0.45".slow(16))
    .release(0.5)
    .attack(0.03),

  // Detuned layer 1
  note("<[~ ~ a5 ~] [~ ~ f5 ~] [~ ~ g5 ~] [~ ~ d5 ~]>")
    .add(0.05)
    .sound("supersaw")
    .lpf(3200)
    .room(0.7)
    .delay(0.6)
    .gain("0 0 0 0  0 0 0 0  0.35".slow(16))
    .release(0.5)
    .attack(0.03),

  // Detuned layer 2
  note("<[~ ~ a5 ~] [~ ~ f5 ~] [~ ~ g5 ~] [~ ~ d5 ~]>")
    .add(-0.05)
    .sound("supersaw")
    .lpf(3200)
    .room(0.7)
    .delay(0.6)
    .gain("0 0 0 0  0 0 0 0  0.35".slow(16))
    .release(0.5)
    .attack(0.03),

  // ============================================
  // STAB CHORDS - Rhythmic power
  // ============================================

  // Chord stabs on the 1
  note("<[a3 c4 e4] [f3 a3 c4] [c4 e4 g4] [g3 b3 d4]>")
    .sound("supersaw")
    .lpf(2800)
    .room(0.5)
    .gain("0 0 0 0  0 0 0 0  0.55".slow(16))
    .release(0.15)
    .attack(0.001),

  // Syncopated stabs
  note("[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]  <[[a3 c4 e4]*4 ~ ~ ~] [[f3 a3 c4]*4 ~ ~ ~] [[c4 e4 g4]*4 ~ ~ ~] [[g3 b3 d4]*4 ~ ~ ~]>".slow(4))
    .sound("supersaw")
    .lpf(2500)
    .room(0.6)
    .gain("0 0 0 0  0 0 0 0  0 0 0.5".slow(16))
    .release(0.1)
    .attack(0.001),

  // ============================================
  // EFFECTS & TRANSITIONS
  // ============================================

  // White noise riser - builds tension
  s("~!15 white")
    .lpf(sine.range(500, 10000).slow(4))
    .hpf(sine.range(200, 5000).slow(4))
    .gain(saw.range(0, 0.6).slow(4))
    .room(0.7),

  // Crash cymbals - transitions
  s("~!31 crash")
    .gain(0.7)
    .room(0.9)
    .delay(0.3),

  // Impact on phrase changes
  s("~!63 [bd cp]")
    .gain(0.8)
    .room(0.5),

  // Downlifter - breakdown transitions
  s("[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ white] [~ ~ ~ ~]".slow(4))
    .lpf(sine.range(8000, 200).slow(2))
    .gain("0 0 0 0  0 0 0.4 0.5".slow(16)),

  // ============================================
  // ATMOSPHERIC TEXTURES
  // ============================================

  // Filtered noise texture
  s("white")
    .lpf(sine.range(1200, 2000).slow(24))
    .hpf(sine.range(1000, 1800).slow(24))
    .gain("<0 0 0.08 0.12>".slow(8))
    .room(1.0)
    .release(0.3),

  // High shimmer - background sparkle
  note("[a6 c7 e7 a7]*8")
    .sound("sine")
    .lpf(8000)
    .hpf(5000)
    .room(1.2)
    .gain("<0 0 0 0.1>".slow(16))
    .release(0.04)
    .attack(0.001),

  // Reverse cymbal sweeps
  s("[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ crashrev]".slow(4))
    .gain(0.5)
    .room(0.8),

  // ============================================
  // BREAKDOWN ELEMENTS
  // ============================================

  // Piano-like breakdown melody
  note("[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]  <[a4 ~ c5 ~ e5 ~ ~ ~] [f4 ~ a4 ~ c5 ~ ~ ~] [g4 ~ e5 ~ c5 ~ ~ ~] [g4 ~ d5 ~ b4 ~ ~ ~]>".slow(4))
    .sound("sine")
    .lpf(2500)
    .room(1.3)
    .delay(0.5)
    .gain("0 0 0 0  0 0 0.4 0.45".slow(16))
    .release(1.5)
    .attack(0.08),

  // Vocal-like pad for breakdown
  note("[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]  <a4 f4 c5 g4>".slow(4))
    .sound("triangle")
    .lpf(2000)
    .room(1.5)
    .gain("0 0 0 0  0 0 0.2 0.25".slow(16))
    .release(6)
    .attack(1.5),

  // Ambient bells
  note("[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]  <[e6 ~ ~ ~] [c6 ~ ~ ~] [g6 ~ ~ ~] [d6 ~ ~ ~]>".slow(4))
    .sound("triangle")
    .lpf(5000)
    .hpf(2000)
    .room(1.5)
    .delay(0.75)
    .gain("0 0 0 0  0 0 0.25 0.3".slow(16))
    .release(3)
    .attack(0.1),

  // ============================================
  // BASS DROPS & FILLS
  // ============================================

  // Bass drop fill - before drop
  note("[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [a2 a2 a2 [a2 a3]]".slow(4))
    .sound("supersaw")
    .lpf(1200)
    .gain("0 0 0 0  0 0 0.6".slow(16))
    .release(0.15)
    .room(0.3),

  // Drum fill - transitions
  s("[~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [bd cp bd [cp cp]]".slow(4))
    .gain("0 0 0 0  0 0 0.6".slow(8))
    .room(0.4),
)

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
// 7. High room values (0.7-1.5) add spaciousness
// 8. Filter automation (sine.range) creates movement
// 9. Gain patterns create dynamic pumping effects
// 10. Layer, layer, layer - trance is all about texture!

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
