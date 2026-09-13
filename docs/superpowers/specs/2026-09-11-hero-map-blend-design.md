# Hero map blend design

## Goal

Make the supplied global network map feel integrated into the homepage Hero, following the approved visual reference, rather than appearing as a separate right-column image.

## Scope

- Retain the existing Hero copy, links and EN/JP content data.
- Keep the map as a semantic image with its current alt text.
- Replace the two-column Hero layout with a single, full-width Hero canvas.
- Display the complete map at its native aspect ratio on the right; do not crop it with a fixed-height image box.
- Keep Hero copy on an opaque white left-side field.
- Use a 45/55 desktop split: a left copy field occupying 45% of the Hero and a right map layer occupying 55%, with no blue map features beneath the copy.
- Do not apply a CSS fade or opacity mask over the map. The transition must use only the supplied image's pale blue edge background, so blue continents retain their original contrast.
- Build the delivered Hero image from the supplied map on a larger white canvas. Do not generate, redraw, crop or recolor the continents, labels, network lines or Japan highlight.
- Use the added white canvas margin and a background-only edge feather to remove the rectangular image edge around the supplied pale-blue background. The feather must never reduce the opacity or contrast of high-saturation blue continent pixels.
- Keep the desktop Hero vertically compact enough that the complete map occupies most of its available height, without stretching or cropping the artwork.
- At desktop width, set the English Hero title to no more than five lines without letting it overlap the map artwork.
- At desktop width, set the English Hero title to four lines and its summary to two or three lines. Allow the title and summary to use up to `25rem` and `30rem` respectively, extending into the map's pale transition background without covering blue continent artwork.
- Store the four approved English title lines with the Hero content data, rather than relying on an unstable browser-dependent natural wrap. Japanese retains its ordinary title rendering.
- Increase the desktop map layer's usable height relative to the Hero while retaining the complete map and the white copy field.
- Keep all text and actions above the map fade.
- At tablet and mobile widths, reduce the map's visual prominence and place it below the copy rather than allowing it to overlap or reduce text readability.

## Acceptance criteria

- The complete map is visible at desktop width without cropped continents.
- Hero copy remains on a white background and does not overlap blue map features.
- Blue continent features retain their original contrast through the transition area.
- The committed map asset is an original-source derivative with white outer margins; no blue continent pixels are faded to produce those margins.
- Hero copy remains readable over a stable pale blue background.
- The English desktop Hero title wraps to four or five lines, never six or more.
- The English desktop Hero title wraps to four lines and the summary to two or three lines.
- The visible map artwork occupies at least two thirds of the compact desktop Hero height.
- The image remains loaded from `/images/home/global-network-map.png`.
- EN and JP use the same responsive component and styling.
- Existing homepage section order is unchanged.
