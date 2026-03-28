```markdown
# Design System: Technical Brutalism

## 1. Overview & Creative North Star

### The Creative North Star: "The Analog Digitalist"
This design system rejects the "soft" friendliness of modern SaaS interfaces in favor of a raw, industrial, and high-precision aesthetic. It is inspired by the transparency of hardware, the grit of dot-matrix printing, and the uncompromising clarity of technical documentation. 

To move beyond a "template" look, we utilize **Intentional Asymmetry**. Layouts should feel like a technical schematic—large areas of `surface_container_lowest` whitespace contrasted against hyper-dense clusters of information. Elements should overlap slightly or be offset to break the rigid web grid, creating a sense of "assembled components" rather than "rendered pixels."

---

## 2. Color & Surface Architecture

The palette is rooted in high-contrast monochrome, utilizing the red-spectrum `primary` tokens only for critical functional redirects and high-tension focus points.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. Structural boundaries are defined exclusively through:
*   **Tonal Shifts:** Placing a `surface_container_high` card against a `surface` background.
*   **Negative Space:** Using the `16` (5.5rem) or `20` (7rem) spacing tokens to create a psychological boundary.
*   **Texture:** Utilizing a subtle dot-matrix pattern overlay (using `outline_variant` at 5% opacity) to define a specific zone.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of technical materials. 
*   **Base:** `surface_dim` (#131313) is your workbench.
*   **Sub-sections:** Use `surface_container_low` (#1b1b1b) for secondary information clusters.
*   **Active Elements:** Use `surface_container_highest` (#353535) for components the user is currently interacting with.

### The "Glass & Gradient" Rule
While the aesthetic is industrial, we avoid "flatness." Floating elements (modals, dropdowns) must use **Glassmorphism**.
*   **Formula:** `surface_variant` at 60% opacity + `backdrop-blur(20px)`. 
*   **Gradients:** Use a subtle linear gradient from `primary` to `primary_container` for high-end CTAs to give them a "glowing filament" appearance.

---

## 3. Typography: The Digital Voice

Typography is the primary vehicle for the brand’s "Futuristic-Industrial" soul. We use two distinct voices: **Space Grotesk** (The Technical Voice) and **Inter** (The Functional Voice).

*   **Display & Headlines (Space Grotesk):** These should be treated as graphic elements. Use `display-lg` with tight letter-spacing (-0.05em) for a high-impact, technical feel.
*   **Body (Inter):** Reserved for long-form reading. The contrast between the geometric headers and the neutral body text creates an editorial, high-end feel.
*   **Labels (Space Grotesk):** All-caps labels (`label-sm`) are used for metadata, status indicators, and micro-copy, mimicking the "fine print" on industrial machinery.

---

## 4. Elevation & Depth

We achieve depth through **Tonal Layering** rather than traditional drop shadows.

*   **The Layering Principle:** To lift a card, do not add a shadow. Instead, transition the background from `surface_container_low` to `surface_container_high`.
*   **Ambient Shadows:** For floating "hardware" elements, use a "Ghost Shadow": `0px 20px 40px rgba(0, 0, 0, 0.4)`. It must feel like an ambient occlusion, not a "lift."
*   **The "Ghost Border" Fallback:** If a divider is mandatory for accessibility, use `outline_variant` at 15% opacity. It should be barely perceptible—a "whisper" of a line.
*   **Dot-Matrix Pattern:** Apply a repeating 2px dot pattern (using `on_surface_variant`) to `surface_container_highest` elements to signify a "tactile" or "gridded" area.

---

## 5. Components

### Buttons
*   **Primary:** Background `primary` (#ffb4a8), Text `on_primary`. Shape: `none` (square) or `sm` (0.125rem) for a raw look. 
*   **Secondary:** Background `surface_container_highest`, Text `on_surface`.
*   **Tertiary:** Ghost style. No background. Underline using a 2px `primary` dot-matrix pattern on hover.

### Input Fields
*   **Style:** No container. Only a bottom "Ghost Border" (`outline_variant` at 20%). 
*   **Focus:** The border transitions to `primary` (#ffb4a8) with a subtle `primary_container` outer glow.
*   **Typography:** Use `label-md` for labels, positioned above the input in all-caps.

### Cards & Lists
*   **Rule:** Forbid 1px dividers.
*   **Implementation:** Separate list items using `spacing-4` (1.4rem) and a subtle background hover state shift to `surface_container_low`. 
*   **Cards:** Use `roundedness-none`. Content should be "blocked" into technical quadrants.

### Technical Chips
*   **Style:** Monochromatic. `surface_container_high` background with `label-sm` text. Use for tags, versions, or statuses.

---

## 6. Do’s and Don’ts

### Do
*   **DO** use extreme whitespace (`spacing-24`) to separate major narrative beats.
*   **DO** use red accents (`primary`) sparingly—like a "Record" light on a camera.
*   **DO** lean into "monospaced-style" alignment (aligning text to a strict vertical axis even if it creates gaps).

### Don’t
*   **DON'T** use rounded corners above `sm` (0.125rem) unless for a "pill" chip. Industrial = Sharp.
*   **DON'T** use standard "blue" for links. Use `primary` or simply a weight change.
*   **DON'T** use "soft" shadows. If the depth isn't working, increase the tonal contrast of the surfaces.
*   **DON'T** center-align everything. Technical documents are left-aligned or justified to a grid.

---

## 7. Signature Pattern: The "Data-Density" Overlay
When displaying metrics or technical data, overlay a very faint grid (using `outline` at 5% opacity). This reinforces the "Nothing-esque" hardware aesthetic, making the software feel like it’s running on a high-spec industrial monitor.```