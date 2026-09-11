# Hero map blend design

## Goal

Make the supplied global network map feel integrated into the homepage Hero, following the approved visual reference, rather than appearing as a separate right-column image.

## Scope

- Retain the existing Hero copy, links, image file and EN/JP content data.
- Keep the map as a semantic image with its current alt text.
- Replace the two-column Hero layout with a single, full-width Hero canvas.
- Position the map on the right side of that canvas behind the content layer.
- Use a left-to-right opaque-to-transparent background fade over the map so it blends into the pale blue Hero background.
- Keep all text and actions above the map fade.
- At tablet and mobile widths, reduce the map's visual prominence and place it below the copy rather than allowing it to overlap or reduce text readability.

## Acceptance criteria

- The map does not have a visible rectangular edge inside the desktop Hero.
- Hero copy remains readable over a stable pale blue background.
- The image remains loaded from `/images/home/global-network-map.png`.
- EN and JP use the same responsive component and styling.
- Existing homepage section order is unchanged.
