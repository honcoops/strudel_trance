// ============================================
// EUPHORIC LEADS & ARPEGGIOS FOR TRANCE
// ============================================
// Copy and paste any of these examples directly into Strudel!
// These melodies will give you that uplifting trance feeling.

setcpm(138/4)  // Classic trance tempo


// ============================================
// EXAMPLE 1: Simple Uplifting Melody
// Major scale, optimistic and bright
// ============================================

stack(
  // Basic rhythm section
  s("bd*4").gain(0.8),
  note("a2*8").sound("sawtooth").lpf(600).gain(0.5),
  s("hh*16").gain(0.3),

  // Euphoric lead melody (C major)
  note("c5 e5 g5 e5 c5 d5 e5 g5")
    .sound("sawtooth")
    .lpf(2500)         // Bright filter
    .resonance(3)
    .room(0.7)         // Reverb for space
    .delay(0.4)        // Delay for depth
    .gain(0.5)
    .release(0.3)
)


// ============================================
// EXAMPLE 2: Classic Arpeggio Pattern
// Fast 16th note arpeggio for shimmer
// ============================================

stack(
  // Rhythm section
  s("bd*4").gain(0.8),
  note("a2*8").sound("sawtooth").lpf(650).gain(0.5),
  s("hh*16").gain(0.3),
  s("~ cp ~ cp").gain(0.5),

  // Fast arpeggio (Am chord: A-C-E)
  note("a4 c5 e5 a5".fast(4))  // 16th notes
    .sound("square")
    .lpf(3000)
    .room(0.8)
    .delay(0.5)
    .gain(0.4)
    .release(0.1)      // Short release for plucky sound
)


// ============================================
// EXAMPLE 3: Chord Progression with Lead
// I-V-vi-IV (C-G-Am-F) - most uplifting progression
// ============================================

stack(
  // Rhythm
  s("bd*4").gain(0.8),
  s("hh*16").gain(0.3),
  s("~ cp ~ cp").gain(0.5),

  // Bass following chord progression
  note("<c2 g2 a2 f2>*4").sound("sawtooth")
    .lpf(600).gain(0.6).release(0.1),

  // Pad chords (sustained)
  note("<c4 g4 a4 f4>").sound("sawtooth")
    .lpf(2000)
    .room(0.9)
    .gain(0.3)
    .release(2),

  // Lead melody on top
  note("<[e5 g5 c6 g5] [d5 g5 b5 g5] [c5 e5 a5 e5] [c5 f5 a5 f5]>")
    .sound("sawtooth")
    .lpf(3500)
    .room(0.7)
    .delay(0.5)
    .gain(0.5)
    .release(0.3)
)


// ============================================
// EXAMPLE 4: Gated Pad (Rhythmic Chords)
// Creates rhythmic chord stabs
// ============================================

stack(
  // Rhythm section
  s("bd*4").gain(0.8),
  note("d2*8").sound("sawtooth").lpf(600).gain(0.5),
  s("hh*16").gain(0.3),

  // Gated pad - short stabs on 8th notes
  note("<d4 f4 a4>")  // Dm chord tones
    .sound("sawtooth")
    .lpf(2000)
    .gain("0.5 0.3 0.5 0.3 0.5 0.3 0.5 0.3")  // Volume pattern
    .release(0.15)     // Short release for gate effect
    .room(0.6),

  // High lead notes
  note("d5 ~ f5 ~ a5 ~ f5 ~").sound("square")
    .lpf(3000)
    .delay(0.6)
    .gain(0.4)
)


// ============================================
// EXAMPLE 5: Layered Supersaw Lead
// Multiple detuned saws for thick sound
// ============================================

stack(
  // Rhythm
  s("bd*4").gain(0.8),
  note("a2*8").sound("sawtooth").lpf(650).gain(0.5),
  s("hh*16").gain(0.3),

  // Lead layer 1 (centered)
  note("a4 c5 e5 c5 a4 g4 a4 c5")
    .sound("sawtooth")
    .lpf(2800)
    .room(0.8)
    .gain(0.4)
    .release(0.3),

  // Lead layer 2 (slightly detuned up)
  note("a4 c5 e5 c5 a4 g4 a4 c5").add(0.05)  // Slight detune
    .sound("sawtooth")
    .lpf(2800)
    .room(0.8)
    .gain(0.3)
    .release(0.3),

  // Lead layer 3 (slightly detuned down)
  note("a4 c5 e5 c5 a4 g4 a4 c5").add(-0.05)
    .sound("sawtooth")
    .lpf(2800)
    .room(0.8)
    .gain(0.3)
    .release(0.3)
)


// ============================================
// EXAMPLE 6: Pentatonic Melody (Always Works!)
// A minor pentatonic for instant emotion
// ============================================

stack(
  // Groove
  s("bd*4").gain(0.8),
  note("a2*8").sound("sawtooth").lpf(600).gain(0.5),
  s("hh*16").gain(0.3),
  s("~ cp ~ cp").gain(0.5),

  // Pentatonic melody (A-C-D-E-G)
  note("a4 c5 d5 e5 g5 e5 d5 c5".slow(2))
    .sound("sawtooth")
    .lpf(3000)
    .room(0.8)
    .delay(0.5)
    .gain(0.5)
    .release(0.4)
)


// ============================================
// EXAMPLE 7: Octave-Spanning Arpeggio
// Covers wide frequency range
// ============================================

stack(
  // Rhythm
  s("bd*4").gain(0.8),
  note("e2*8").sound("sawtooth").lpf(650).gain(0.5),
  s("hh*16").gain(0.3),

  // Wide arpeggio (E minor chord across octaves)
  note("e3 g3 b3 e4 g4 b4 e5 b4".fast(2))
    .sound("square")
    .lpf(3500)
    .room(0.9)
    .delay(0.6)
    .gain(0.45)
    .release(0.12),

  // Sustained pad underneath
  note("e3 g3 b3").sound("sawtooth")
    .lpf(1500)
    .room(0.9)
    .gain(0.25)
    .release(3)
)


// ============================================
// EXAMPLE 8: Two-Voice Harmony
// Lead melody with harmony line
// ============================================

stack(
  // Rhythm section
  s("bd*4").gain(0.8),
  note("c2*8").sound("sawtooth").lpf(600).gain(0.5),
  s("hh*16").gain(0.3),

  // Main melody (higher voice)
  note("c5 d5 e5 g5 e5 d5 c5 d5")
    .sound("sawtooth")
    .lpf(3000)
    .room(0.7)
    .delay(0.4)
    .gain(0.5)
    .release(0.3),

  // Harmony (third below)
  note("a4 b4 c5 e5 c5 b4 a4 b4")
    .sound("sawtooth")
    .lpf(3000)
    .room(0.7)
    .delay(0.4)
    .gain(0.4)
    .release(0.3)
)


// ============================================
// EXAMPLE 9: Progressive Trance Plucks
// Bell-like pluck sounds
// ============================================

stack(
  // Groove
  s("bd*4").gain(0.8),
  note("d2*8").sound("sawtooth").lpf(650).gain(0.5),
  s("hh*16").gain(0.3),

  // Pluck melody
  note("d5 ~ f5 ~ a5 ~ f5 ~ d5 ~ e5 ~ f5 ~ e5 ~")
    .sound("triangle")
    .lpf(4000)
    .hpf(800)          // Remove low frequencies
    .room(0.8)
    .delay(0.5)
    .gain(0.6)
    .release(0.05)     // Very short for pluck
    .attack(0.001),

  // Pad layer
  note("<d4 f4 a4>").sound("sawtooth")
    .lpf(1800)
    .room(0.9)
    .gain(0.3)
)


// ============================================
// EXAMPLE 10: Full Uplifting Arrangement
// Complete trance section with all elements
// ============================================

stack(
  // Kick
  s("bd*4").gain(0.8),

  // Rolling bass
  note("a2*8").sound("sawtooth")
    .lpf(700).gain(0.55).release(0.1),

  // Hi-hats
  s("hh*16").gain(0.3),
  s("~ oh ~ oh").gain(0.35),

  // Clap
  s("~ cp ~ cp").gain(0.5).room(0.4),

  // Pad chords (Am-F-C-G)
  note("<a3 f3 c4 g3>").sound("sawtooth")
    .lpf(2000)
    .room(0.9)
    .gain("0.2 0.3 0.25 0.35")  // Pumping
    .release(2),

  // Arpeggio
  note("<[a4 c5 e5]*4 [f4 a4 c5]*4 [c4 e4 g4]*4 [g4 b4 d5]*4>")
    .sound("square")
    .lpf(3500)
    .room(0.8)
    .delay(0.5)
    .gain(0.35)
    .release(0.1),

  // Lead melody
  note("<[e5 ~ c5 ~] [c5 ~ d5 ~] [e5 ~ g5 ~] [d5 ~ b4 ~]>")
    .sound("sawtooth")
    .lpf(3000)
    .room(0.7)
    .delay(0.6)
    .gain(0.5)
    .release(0.4)
)


// ============================================
// EXAMPLE 11: Filter Sweep Lead
// Lead with automated filter movement
// ============================================

stack(
  // Rhythm
  s("bd*4").gain(0.8),
  note("a2*8").sound("sawtooth").lpf(650).gain(0.5),
  s("hh*16").gain(0.3),

  // Lead with slow filter sweep
  note("a4 c5 e5 a5".slow(2))
    .sound("sawtooth")
    .lpf(sine.range(800, 4000).slow(8))  // Sweeping filter
    .resonance(8)      // Emphasize sweep
    .room(0.8)
    .gain(0.5)
    .release(0.5)
)


// ============================================
// EXAMPLE 12: Emotional String Section
// Orchestral-style trance strings
// ============================================

stack(
  // Rhythm
  s("bd*4").gain(0.8),
  note("c2*8").sound("sawtooth").lpf(600).gain(0.5),
  s("hh*16").gain(0.25),

  // String section (multiple voices)
  note("<c4 g3 a3 f3>").sound("sawtooth")
    .lpf(2500)
    .room(1.2)         // Lots of reverb
    .gain(0.3)
    .release(2)
    .attack(0.3),      // Slow attack for strings

  note("<e4 b3 c4 a3>").sound("sawtooth")
    .lpf(2500)
    .room(1.2)
    .gain(0.28)
    .release(2)
    .attack(0.3),

  note("<g4 d4 e4 c4>").sound("sawtooth")
    .lpf(2500)
    .room(1.2)
    .gain(0.26)
    .release(2)
    .attack(0.3)
)


// ============================================
// PRO TIPS FOR LEADS & MELODIES:
// ============================================
// 1. Use major/pentatonic scales for uplifting feel
// 2. Layer 2-3 synths with slight detuning for thickness
// 3. High lpf values (2500-4000) for brightness
// 4. Always add reverb (.room) and delay for space
// 5. Longer release (0.3-0.5) for sustained leads
// 6. Short release (0.05-0.15) for plucks and arps
// 7. Use .delay(0.5) for eighth note delay
// 8. Pentatonic scales never sound wrong!
// 9. Thirds and fifths create instant harmony
// 10. Keep melodies simple and repetitive

// ============================================
// MELODY WRITING TIPS:
// ============================================
// - Start with chord tones (root, third, fifth)
// - Add passing notes between chord tones
// - Repeat phrases with slight variations
// - Use space - rests are powerful
// - Octave jumps create excitement
// - Stepwise motion creates smooth flow
// - End phrases on stable notes (root or fifth)
// - Call and response: question then answer

// ============================================
// EXPERIMENT IDEAS:
// ============================================
// - Try different scales: major, minor, dorian
// - Change .slow() and .fast() for rhythm variations
// - Layer multiple octaves of same melody
// - Add .phaser() for movement
// - Use angle brackets < > for evolving patterns
// - Combine arpeggios with sustained pads
// - Add filter automation with sine/saw LFOs
