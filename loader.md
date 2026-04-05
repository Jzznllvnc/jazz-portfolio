**Build a full-screen preloader animation using HTML, CSS, and
JavaScript. Here are the specific requirements:**

1.  **Styling & Layout:**

    -   The background should be solid black (#000000).

    -   The text should be solid white (#FFFFFF) and perfectly centered
        on the screen.

    -   Use the font \"Bugaki\" for the text.

    -   The text string is exactly: JZZNLLVNC. (with a period at the
        end).

    -   Ensure the letters and the period are wrapped in individual
        \<span\> tags so they can be animated separately.

2.  **Animation Phase 1: Typewriter Effect**

    -   Initially, all text is hidden.

    -   Animate each letter of JZZNLLVNC appearing one by one in
        chronological order (like a typewriter).

3.  **Animation Phase 2: The Dot Expansion**

    -   Right after the last letter appears, the period (.) should
        appear.

    -   Immediately after appearing, animate the period to scale up
        dramatically (zoom in) as a perfect white circle until it
        completely covers the entire screen, creating a white wipe
        transition.

4.  **Animation Phase 3: Transition**

    -   Once the white circle completely covers the screen, fade out the
        entire preloader container so the main website content
        underneath is revealed. Ensure pointer-events: none or display:
        none is applied to the loader after the transition so it
        doesn\'t block interactions.

5.  **First-Visit Only Logic (JavaScript sessionStorage):**

    -   Implement a check using sessionStorage on page load.

    -   If a key (e.g., hasSeenLoader) exists, instantly set the
        preloader container to display: none (skipping all animations)
        so the user immediately sees the main website.

    -   If the key does *not* exist, play the animation sequence
        described above, and upon completion, set the hasSeenLoader key
        in sessionStorage so it doesn\'t play again if they refresh or
        navigate back to the home page.

**Please use CSS keyframes or GSAP (whichever is smoother) for the
animations.**
