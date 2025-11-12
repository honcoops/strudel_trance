// ============================================
// DRIVING BASSLINE PATTERNS FOR TRANCE
// ============================================
// Copy and paste any of these examples directly into Strudel!
// Experiment with the values and make them your own.

// Set the tempo to classic trance BPM (138 BPM = 138/4 cycles per minute)
setcpm(138/4)


// ============================================
// EXAMPLE 1: Basic Trance Foundation
// Four-on-the-floor kick + rolling bassline
// ============================================

stack(
  // Kick drum on every beat (1, 2, 3, 4)
  s("bd*4").gain(0.8),

  // Rolling 8th note bassline (on and off-beat)
  note("a2*8").sound("sawtooth")
    .lpf(800)          // Low-pass filter for warmth
    .resonance(5)      // Slight resonance
    .gain(0.6),

  // Hi-hats for groove (16th notes)
  s("hh*16").gain("0.3 0.2").fast(1)
)


// ============================================
// EXAMPLE 2: Octave-Jumping Bass Pattern
// Classic trance bass movement
// ============================================

stack(
  // Kick
  s("bd*4").gain(0.8),

  // Bass jumping between root and octave
  note("<a2 a2 a3 a2>*2").sound("sawtooth")
    .lpf(600)
    .gain(0.6)
    .release(0.1),    // Short release for punchy sound

  // Closed hi-hats
  s("hh*8").gain(0.3),

  // Clap on beats 2 and 4
  s("~ cp ~ cp").gain(0.5).room(0.3)
)


// ============================================
// EXAMPLE 3: Progressive Rolling Bass
// Continuous 16th note pattern
// ============================================

stack(
  // Kick
  s("bd*4").gain(0.8),

  // 16th note rolling bass with pattern
  note("a2 a2 c3 a2 a2 g2 a2 c3".fast(2))
    .sound("sawtooth")
    .lpf(700)
    .resonance(8)
    .gain(0.5)
    .release(0.08),   // Very short for tight sound

  // Hi-hats
  s("hh*16").gain("0.4 0.2"),

  // Open hi-hat on off-beats
  s("~ oh ~ oh").gain(0.3)
)


// ============================================
// EXAMPLE 4: Acid-Style Trance Bass
// With filter modulation (TB-303 inspired)
// ============================================

stack(
  // Kick
  s("bd*4").gain(0.8),

  // Acid bassline with evolving filter
  note("a2 a2 c3 d3 c3 a2 g2 a2".fast(2))
    .sound("square")   // Square wave for acid sound
    .lpf(sine.range(300, 1200).slow(4))  // Slow filter sweep
    .resonance(15)     // High resonance for squelch
    .gain(0.55)
    .release(0.1),

  // Percussion
  s("hh*16").gain(0.3),
  s("~ cp ~ cp").gain(0.4)
)


// ============================================
// EXAMPLE 5: Pumping Sidechain Effect
// Simulating sidechain compression
// ============================================

stack(
  // Kick
  s("bd*4").gain(0.85),

  // Bass with volume ducking pattern (simulates sidechain)
  note("a2*8").sound("sawtooth")
    .lpf(800)
    .gain("0.3 0.6 0.5 0.7")  // Ducks on beat 1, rises between
    .resonance(6),

  // Pad with pumping (more dramatic)
  note("<a3 c4 e4 c4>")
    .sound("sawtooth")
    .lpf(2000)
    .gain("0.2 0.4 0.3 0.5")   // Pumping effect
    .room(0.8)                  // Reverb for space
    .release(1),

  // Percussion
  s("hh*16").gain(0.3),
  s("~ cp ~ cp").gain(0.5)
)


// ============================================
// EXAMPLE 6: Full Trance Groove
// Kick + Bass + Multiple Percussion Layers
// ============================================

stack(
  // Kick on every quarter note
  s("bd*4").gain(0.8),

  // Rolling bassline with variation every 2 bars
  note("<[a2*8] [a2 a2 c3 a2 a2 e3 a2 c3]>".fast(2))
    .sound("sawtooth")
    .lpf(700)
    .resonance(7)
    .gain(0.6)
    .release(0.1),

  // Closed hi-hats (16ths)
  s("hh*16").gain("0.4 0.2"),

  // Open hi-hat on off-beats
  s("~ oh ~ oh").gain(0.35),

  // Clap/snare on 2 and 4
  s("~ cp ~ cp").gain(0.5).room(0.4),

  // Subtle shaker for energy
  s("shaker*16").gain(0.15)
)


// ============================================
// EXAMPLE 7: Minimal Techno-Trance
// Less is more approach
// ============================================

setcpm(132/4)  // Slightly slower

stack(
  // Kick
  s("bd*4").gain(0.85),

  // Minimal bass (root note only, different rhythm)
  note("a2 ~ a2 ~ a2 ~ ~ a2").sound("sawtooth")
    .lpf(500)
    .gain(0.7)
    .release(0.15),

  // Sparse hi-hats
  s("hh ~ hh ~ hh ~ hh ~").gain(0.35),

  // Rim shot accent
  s("~ ~ ~ rim").gain(0.4)
)


// ============================================
// EXAMPLE 8: Layered Bass (Fat Sound)
// Multiple bass layers for thickness
// ============================================

setcpm(138/4)

stack(
  // Kick
  s("bd*4").gain(0.8),

  // Sub bass (sine wave, very low)
  note("a1*4").sound("sine")
    .gain(0.7)
    .release(0.2),

  // Mid bass (sawtooth, main drive)
  note("a2*8").sound("sawtooth")
    .lpf(700)
    .gain(0.5)
    .release(0.1),

  // High bass layer (brightness)
  note("a3*8").sound("square")
    .lpf(1200)
    .hpf(400)          // High-pass to remove low end
    .gain(0.3)
    .release(0.08),

  // Percussion
  s("hh*16").gain(0.3),
  s("~ cp ~ cp").gain(0.5)
)


// ============================================
// PRO TIPS FOR BASSLINES:
// ============================================
// 1. Keep it simple - repetition is hypnotic
// 2. Lock the bass with the kick rhythm
// 3. Use lpf (low-pass filter) between 400-1000 for warmth
// 4. Short release times (0.05-0.15) for tight sound
// 5. Layer different octaves for fullness
// 6. Add subtle resonance (5-10) for character
// 7. Sidechain pump effect: volume ducks with kick
// 8. Root note + fifth creates solid foundation
// 9. 16th notes = energy, 8th notes = groove
// 10. Less is more - don't over-complicate!

// ============================================
// EXPERIMENT IDEAS:
// ============================================
// - Change the root note: try "d2", "e2", "g2"
// - Modify .fast() to double/half the speed
// - Adjust lpf values to brighten/darken
// - Add .delay(0.5) for rhythmic echo
// - Try different waveforms: "square", "triangle"
// - Stack multiple bass patterns
// - Add filter automation with sine/saw waves
