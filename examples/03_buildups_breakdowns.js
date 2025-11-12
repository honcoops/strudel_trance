// ============================================
// BUILD-UPS & BREAKDOWNS FOR TRANCE
// ============================================
// The most important elements for creating tension and release!
// Copy and paste these examples and feel the energy build.

setcpm(138/4)  // Classic trance tempo


// ============================================
// EXAMPLE 1: Classic Breakdown (No Kick)
// Remove kick, keep melody and pads
// ============================================

stack(
  // NO KICK during breakdown - this creates tension!
  // s("bd*4").gain(0.8),  // <-- Commented out

  // Sustained pad chords
  note("<a3 f3 c4 g3>").sound("sawtooth")
    .lpf(2000)
    .room(1.2)         // Lots of reverb
    .gain(0.4)
    .release(3),

  // Emotional lead melody
  note("e5 c5 d5 e5 g5 e5 c5 d5".slow(2))
    .sound("sawtooth")
    .lpf(3000)
    .room(0.9)
    .delay(0.6)
    .gain(0.6)
    .release(0.5),

  // Minimal percussion (optional)
  s("hh*8").gain(0.2)
)


// ============================================
// EXAMPLE 2: Filter Sweep Build-Up
// Gradually opening low-pass filter
// ============================================

stack(
  // Kick
  s("bd*4").gain(0.8),

  // Bass with rising filter
  note("a2*8").sound("sawtooth")
    .lpf(sine.range(200, 2000).slow(8))  // 8-bar sweep
    .gain(0.6)
    .release(0.1),

  // Pad with same filter sweep
  note("<a3 f3 c4 g3>").sound("sawtooth")
    .lpf(sine.range(400, 3000).slow(8))
    .room(0.8)
    .gain(0.35)
    .release(2),

  // Increasing hi-hat density
  s("hh*<8 12 16 24>").gain(0.3),  // Gets faster!

  // Clap
  s("~ cp ~ cp").gain(0.5)
)


// ============================================
// EXAMPLE 3: Snare Roll Into Drop
// Classic trance roll building tension
// ============================================

stack(
  // Kick (remove on last bar before drop)
  s("bd*<4 4 4 0>").gain(0.8),  // Silent on 4th cycle

  // Accelerating snare roll
  s("cp*<4 8 16 32>")   // Doubles each cycle
    .gain("<0.4 0.5 0.6 0.7>")  // Gets louder
    .room(0.5),

  // Rising pitch effect
  note(saw.range(20, 80).slow(4))  // Riser
    .sound("sawtooth")
    .lpf(4000)
    .gain(0.3),

  // Pad building
  note("<a3 f3 c4 g3>").sound("sawtooth")
    .lpf(sine.range(1000, 4000).slow(4))
    .gain("<0.3 0.35 0.4 0.45>")
    .room(0.9)
)

// After this, bring everything back for THE DROP!


// ============================================
// EXAMPLE 4: White Noise Swell
// Building tension with noise
// ============================================

stack(
  // Rhythm fading out
  s("bd*4").gain("<0.8 0.6 0.4 0.2>"),

  // White noise getting louder
  s("white*4")
    .lpf(sine.range(200, 8000).slow(4))  // Filter sweep
    .gain(sine.range(0.0, 0.6).slow(4))  // Volume swell
    .room(0.5),

  // Pad sustained
  note("a3 c4 e4").sound("sawtooth")
    .lpf(2500)
    .room(1.0)
    .gain(0.4),

  // Hi-hats getting faster
  s("hh*<8 16 24 32>").gain(0.25)
)


// ============================================
// EXAMPLE 5: Progressive Layer Build
// Adding elements one by one
// ============================================

stack(
  // Kick (constant)
  s("bd*4").gain(0.8),

  // Bass (comes in cycle 2)
  note("<~ a2*8 a2*8 a2*8>")
    .sound("sawtooth")
    .lpf(700)
    .gain(0.5),

  // Hi-hats (comes in cycle 3)
  s("<~ ~ hh*16 hh*16>").gain(0.3),

  // Clap (comes in cycle 3)
  s("<~ ~ [~ cp ~ cp] [~ cp ~ cp]>").gain(0.5),

  // Lead (comes in cycle 4)
  note("<~ ~ ~ [e5 c5 d5 e5]>")
    .sound("sawtooth")
    .lpf(3000)
    .room(0.8)
    .gain(0.5)
)


// ============================================
// EXAMPLE 6: Reverse Cymbal Build
// Cymbal crash played backwards for tension
// ============================================

stack(
  // Building rhythm
  s("bd*4").gain(0.8),
  note("a2*8").sound("sawtooth").lpf(600).gain(0.5),

  // Simulating reverse cymbal with rising noise
  s("~ ~ ~ crash")     // Crash on last beat
    .gain(0.7)
    .room(0.8),

  // Rising white noise (simulates reverse)
  s("white*16")
    .gain(saw.range(0, 0.4).slow(1))  // Rises over 1 cycle
    .lpf(sine.range(1000, 8000).slow(1))
    .room(0.6),

  // Pad
  note("<a3 f3 c4 g3>").sound("sawtooth")
    .lpf(2000)
    .gain(0.3)
    .room(0.9)
)


// ============================================
// EXAMPLE 7: Tension & Release Structure
// 16-bar cycle: build (8) → break (4) → drop (4)
// ============================================

stack(
  // Kick pattern: full → reduced → full power
  s("bd*<4 4 0 0 4 4 4 4>").gain(0.8),

  // Bass: active → silent → active
  note("<[a2*8] [a2*8] ~ ~ [a2*8] [a2*8] [a2*8] [a2*8]>")
    .sound("sawtooth")
    .lpf(700)
    .gain(0.5),

  // Build elements: increasing density
  s("hh*<8 16 4 2 16 16 16 16>").gain(0.3),

  // Snare roll in breakdown section
  s("<~ ~ [cp*16] [cp*32] ~ ~ ~ ~>")
    .gain(0.6)
    .room(0.5),

  // Melodic elements throughout
  note("<[e5 c5] [e5 c5] [e5 ~ c5 ~] [e5 ~ ~ ~] [e5 c5 d5 e5]*2>".slow(2))
    .sound("sawtooth")
    .lpf(3000)
    .room(0.8)
    .gain(0.5)
)


// ============================================
// EXAMPLE 8: Filtered Chord Stabs
// Rhythmic chord hits with filter automation
// ============================================

stack(
  // Minimal rhythm
  s("bd*<4 2 0 0>").gain(0.8),  // Kick fades out

  // Chord stabs with evolving filter
  note("<a3 f3 c4 g3>*4")
    .sound("sawtooth")
    .lpf(sine.range(300, 3000).slow(4))
    .resonance(10)
    .gain(0.6)
    .release(0.2)
    .room(0.7),

  // Additional rhythm on stabs
  s("~ rim ~ rim").gain(0.4)
)


// ============================================
// EXAMPLE 9: High-Pass Filter Build
// Remove lows gradually, then bring back
// ============================================

stack(
  // Kick
  s("bd*4").gain(0.8),

  // Bass with high-pass creeping up
  note("a2*8").sound("sawtooth")
    .lpf(800)
    .hpf(sine.range(0, 1500).slow(8))  // Removes low end
    .gain(0.6),

  // Pads also filtered
  note("<a3 f3 c4 g3>").sound("sawtooth")
    .lpf(3000)
    .hpf(sine.range(0, 1000).slow(8))
    .room(0.9)
    .gain(0.35),

  // Percussion constant
  s("hh*16").gain(0.3),
  s("~ cp ~ cp").gain(0.5)
)

// When you remove high-pass filter = instant energy boost!


// ============================================
// EXAMPLE 10: Complete Breakdown to Drop
// Full 32-bar structure
// ============================================

// PART 1: Breakdown (no kick)
stack(
  // Pad chords only
  note("<a3 f3 c4 g3>").sound("sawtooth")
    .lpf(sine.range(1500, 2500).slow(8))
    .room(1.2)
    .gain(0.4)
    .release(3),

  // Emotional melody
  note("e5 c5 d5 e5 g5 a5 g5 e5".slow(2))
    .sound("sawtooth")
    .lpf(3000)
    .room(0.9)
    .delay(0.6)
    .gain(0.6)
    .release(0.5),

  // Minimal hats
  s("hh*4").gain(0.2)
)

// PART 2: Build with snare roll (add this after breakdown)
// stack(
//   // Rising snare roll
//   s("cp*<16 24 32 64>")
//     .gain("<0.5 0.6 0.7 0.8>")
//     .room(0.6),
//
//   // White noise rising
//   s("white*4")
//     .gain(sine.range(0.2, 0.7).slow(4))
//     .lpf(sine.range(2000, 10000).slow(4)),
//
//   // Pads building
//   note("<a3 f3 c4 g3>").sound("sawtooth")
//     .lpf(sine.range(2000, 4000).slow(4))
//     .gain("<0.4 0.45 0.5 0.6>")
//     .room(0.9)
// )

// PART 3: THE DROP (all elements return)
// stack(
//   // KICK IS BACK!
//   s("bd*4").gain(0.85),
//
//   // Rolling bass
//   note("a2*8").sound("sawtooth")
//     .lpf(700)
//     .gain(0.6)
//     .release(0.1),
//
//   // Full percussion
//   s("hh*16").gain(0.35),
//   s("~ oh ~ oh").gain(0.3),
//   s("~ cp ~ cp").gain(0.5).room(0.4),
//
//   // Euphoric lead
//   note("e5 c5 d5 e5 g5 e5 a5 g5")
//     .sound("sawtooth")
//     .lpf(3500)
//     .room(0.8)
//     .delay(0.5)
//     .gain(0.6)
//     .release(0.4),
//
//   // Pad layer
//   note("<a3 f3 c4 g3>").sound("sawtooth")
//     .lpf(2500)
//     .room(0.9)
//     .gain("0.25 0.35 0.3 0.4")  // Pumping
//     .release(2)
// )


// ============================================
// EXAMPLE 11: Pumping Sidechain Breakdown
// Subtle pump even without kick
// ============================================

stack(
  // No kick, but ghost rhythm with volume

  // Pad with pumping feel
  note("<a3 f3 c4 g3>").sound("sawtooth")
    .lpf(2000)
    .room(1.0)
    .gain("0.25 0.35 0.3 0.4")  // Creates pulse
    .release(2),

  // Lead with emotion
  note("a4 c5 e5 c5".slow(2))
    .sound("sawtooth")
    .lpf(3000)
    .room(0.9)
    .delay(0.6)
    .gain(0.5)
    .release(0.6),

  // Subtle metronome (ghost kick feel)
  s("~ ~ ~ ~").gain(0)  // Silent but keeps time
)


// ============================================
// EXAMPLE 12: Energy Level Controller
// Use angle brackets to control intensity
// ============================================

stack(
  // Kick with varying density
  s("bd*<4 4 2 0 0 0 4 4>").gain(0.8),

  // Bass with changing complexity
  note("<[a2*8] [a2*8] [a2*4] ~ ~ ~ [a2*8] [a2*8]>")
    .sound("sawtooth")
    .lpf(700)
    .gain(0.5),

  // Hi-hats: simple → complex → minimal → full
  s("hh*<8 16 4 0 0 8 16 16>").gain(0.3),

  // Melodic intensity changes
  note("<[e5*4] [e5 c5 d5 e5] [e5 ~ ~ ~] ~ ~ [e5] [e5 c5 d5 e5]*2>")
    .sound("sawtooth")
    .lpf(3000)
    .room(0.8)
    .gain(0.5),

  // Build effects in breakdown
  s("white*<0 0 0 4 8 16 0 0>")
    .gain("<0 0 0 0.2 0.3 0.5 0 0>")
)


// ============================================
// PRO TIPS FOR BUILDS & BREAKDOWNS:
// ============================================
// 1. Remove kick = instant breakdown feeling
// 2. Filter sweeps: closed → open (200 → 4000 Hz)
// 3. Snare rolls: start slow, accelerate (4→8→16→32)
// 4. White noise: volume and filter both rise
// 5. High-pass filter removes energy (reverse = boost!)
// 6. Layer elements: add one instrument per 4-8 bars
// 7. The drop: ALL elements return at once
// 8. Leave space before drop (pause/silence)
// 9. Gain automation: quiet → loud
// 10. Use angle brackets < > for evolving patterns

// ============================================
// BREAKDOWN STRUCTURE GUIDE:
// ============================================
// Bars 1-4:   Remove kick, keep melody
// Bars 5-8:   Develop melody, add pads
// Bars 9-12:  Build tension (filters, noise)
// Bars 13-15: Heavy build (snare roll, risers)
// Bar 16:     Drop! (all elements return)

// ============================================
// BUILD-UP TECHNIQUES:
// ============================================
// 1. Filter sweep (LPF from low to high)
// 2. High-pass filter (remove lows gradually)
// 3. Add percussion layers incrementally
// 4. Increase rhythm density (8th → 16th → 32nd)
// 5. Rising pitch effects (risers)
// 6. White noise swells
// 7. Reverse cymbals
// 8. Accelerating snare rolls
// 9. Volume automation (quiet → loud)
// 10. Reverb increase (creates distance then proximity)

// ============================================
// EXPERIMENT IDEAS:
// ============================================
// - Try different breakdown lengths (8, 16, 32 bars)
// - Combine multiple build techniques
// - Use .slow() to extend tension
// - Create drops at different energy levels
// - Remove different elements (try no bass, no melody)
// - Layer multiple filter sweeps
// - Experiment with silence before drops
// - Try fake drops (build then back to breakdown)
