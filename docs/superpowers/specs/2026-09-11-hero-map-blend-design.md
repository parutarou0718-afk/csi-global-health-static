# Hero map blend design

## Goal

Make the supplied global network map feel integrated into the homepage Hero, following the approved visual reference, rather than appearing as a separate right-column image.

## Scope

- Retain the existing Hero copy, links, image file and EN/JP content data.
- Keep the map as a semantic image with its current alt text.
- Replace the two-column Hero layout with a single, full-width Hero canvas.
- Display the complete map at its native aspect ratio on the right; do not crop it with a fixed-height image box.
- Keep Hero copy on an opaque white left-side field.
- Use a long, multi-stop white-to-transparent fade between the content field and the complete map, so the copy does not visually sit on top of map details.
- Keep all text and actions above the map fade.
- At tablet and mobile widths, reduce the map's visual prominence and place it below the copy rather than allowing it to overlap or reduce text readability.

## Acceptance criteria

- The complete map is visible at desktop width without cropped continents.
- Hero copy remains on a visually white background and does not overlap visible map details.
- Hero copy remains readable over a stable pale blue background.
- The image remains loaded from `/images/home/global-network-map.png`.
- EN and JP use the same responsive component and styling.
- Existing homepage section order is unchanged.
