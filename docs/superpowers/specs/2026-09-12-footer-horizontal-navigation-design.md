# Footer Horizontal Navigation Design

## Goal

Replace the vertical footer navigation stack with a compact horizontal link group.

## Approved layout

- Keep the existing brand, navigation labels, destinations, contact block and legal notice.
- Desktop navigation links display inline with consistent horizontal gaps.
- When a viewport cannot fit every link, the group wraps to additional lines instead of overflowing.
- The footer remains responsive and uses only existing native CSS and design tokens.

## Scope

Only `src/styles/components.css` and its focused regression test change. No content, routes, data or visual assets change.
