# Design System Document: The Maritime Editorial

## 1. Overview & Creative North Star
The Creative North Star for this system is **"The Coastal Curator."** 

We are moving away from the "seafood shack" cliché and toward a high-end, editorial digital experience that feels like a luxury lifestyle magazine. This system rejects the rigid, boxy constraints of standard web templates in favor of **Organic Asymmetry**. By utilizing expansive white space, overlapping imagery, and sophisticated tonal layering, we evoke the fluid motion of the Atlantic and the refined serenity of a high-end dining room. The goal is to make the user feel the salt air and the weight of fine linen before they even see a menu.

---

## 2. Colors: The Depth of the Deep
Our palette is a sophisticated interplay of deep ocean tones (`primary`), sun-bleached sands (`secondary`), and the crispness of a coastal morning (`background`).

*   **Primary (`#004370`):** The deep Atlantic. Used for core brand moments and high-contrast typography.
*   **Secondary (`#735c00`):** The Gold Accent. Used sparingly to denote "Premium" offerings or signature "Chef’s Choice" items.
*   **Tertiary (`#404230`):** The Kelp Forest. A muted, organic green-grey used to ground the lighter sand tones.

### The "No-Line" Rule
**Explicit Instruction:** Traditional 1px solid borders are strictly prohibited for sectioning. Boundaries must be defined through background color shifts. To separate a testimonial section from a gallery, transition from `surface` to `surface-container-low`. The eye should perceive a change in "atmosphere," not a structural fence.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine stationery.
*   **Base:** `surface` (#f8f9fa)
*   **Raised Content:** Place `surface-container-lowest` (#ffffff) cards on top of `surface-container` (#edeeef) backgrounds to create a soft, natural lift.

### Signature Textures (Glass & Gradient)
To avoid a flat, "digital" feel, use a subtle linear gradient on primary action areas:
*   **CTA Backgrounds:** Transition from `primary` (#004370) at the bottom-right to `primary_container` (#005b96) at the top-left. This mimics the way light hits water.
*   **Glassmorphism:** For floating navigation or over-image labels, use `surface` with 80% opacity and a `20px` backdrop-blur.

---

## 3. Typography: The Editorial Voice
We use a high-contrast pairing to balance heritage and modernity.

*   **Display & Headlines (Noto Serif):** This is our "Editorial" voice. Use `display-lg` for evocative, short phrases (e.g., "The Catch of the Day"). The serif conveys authority and gastronomy.
*   **Body & Labels (Manrope):** A clean, geometric sans-serif that ensures legibility. Use `body-lg` for descriptions of dishes to maintain a premium feel.
*   **Hierarchy:** Always lead with Noto Serif for storytelling, but use Manrope `label-md` in all-caps with `0.1rem` letter-spacing for functional UI elements like "RESERVE A TABLE."

---

## 4. Elevation & Depth: Tonal Layering
We eschew the "Material" drop-shadow in favor of **Ambient Light.**

*   **The Layering Principle:** Depth is achieved by stacking. A `surface-container-highest` element should only exist inside a `surface-container-low` parent.
*   **Ambient Shadows:** If a floating reservation card is required, use a shadow with a 40px blur, 0px spread, and 6% opacity using a tint of `primary` (rather than black). This feels like a soft shadow cast on a bright day.
*   **The "Ghost Border" Fallback:** If a divider is essential for forms, use `outline_variant` at 15% opacity. It should be felt, not seen.

---

## 5. Components

### Buttons: The "Inlay" Style
*   **Primary:** Solid `primary` with `on_primary` (white) text. Use the `md` (0.375rem) roundedness for a modern but stable feel.
*   **Secondary (Gold):** Use `secondary_container` with `on_secondary_container` text. This is reserved for "Book Now" or "VIP" actions.
*   **Hover State:** Shift the background to `primary_container`. No sudden movements; use a 300ms ease-in-out transition.

### Cards: The Gallery Card
*   **Rule:** Forbid divider lines.
*   **Structure:** A large, high-resolution food image with a 0.25rem (`DEFAULT`) corner radius. The text sits on a `surface-container-lowest` area below. 
*   **Spacing:** Use `2rem` of vertical padding between the image and the dish title to create an "airy" boutique feel.

### Forms: The "Invisible" Input
*   **Style:** Inputs should have no background; only a bottom "Ghost Border" (`outline_variant` at 20%). 
*   **Focus:** On focus, the bottom border transitions to `primary` (2px thickness) and the label (Manrope) floats upward using `label-sm`.

### High-End Components (Specialty)
*   **The "Overlapping Hero":** A component where a `display-md` headline in `primary` overlaps a high-res image by 15%, creating a layered, magazine-style layout.
*   **Floating Navigation:** A `surface` glassmorphic bar that sits 24px from the top of the viewport, using `surface-tint` for the active state indicator.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins. If the left side has a 10% margin, try a 15% margin on the right for a bespoke, non-grid feel.
*   **Do** allow food photography to "bleed" off the edge of the screen in mobile views to emphasize freshness.
*   **Do** use `secondary_fixed` (Sand Beige) as a background for sections containing "Our History" or "Sustainability" to warm up the cold ocean blues.

### Don't:
*   **Don't** use pure black (#000000) for text. Use `on_surface` (#191c1d) to maintain the soft coastal lighting.
*   **Don't** use standard "heavy" shadows. If the element looks like it's hovering more than 2mm off the page, it's too high.
*   **Don't** use 100% opaque borders. They break the fluid, maritime "flow" of the site.
*   **Don't** overcrowd the menu. Use the Spacing Scale to give every dish "room to breathe."