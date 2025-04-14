# ic-menu-item



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                 | Description                                                                                                                                  | Type                                                                                                                                                                                                  | Default     |
| ----------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `checked`               | `checked`                 | If `true`, the menu item will be in a checked state. This is only applicable when variant is set to `toggle`.                                | `boolean \| undefined`                                                                                                                                                                                | `false`     |
| `description`           | `description`             | The description displayed in the menu item, below the label.                                                                                 | `string \| undefined`                                                                                                                                                                                 | `undefined` |
| `disabled`              | `disabled`                | If `true`, the menu item will be in disabled state.                                                                                          | `boolean \| undefined`                                                                                                                                                                                | `false`     |
| `href`                  | `href`                    | The URL that the link points to. This will render the menu item as an "a" tag.                                                               | `string \| undefined`                                                                                                                                                                                 | `undefined` |
| `hreflang`              | `hreflang`                | The human language of the linked URL.                                                                                                        | `string \| undefined`                                                                                                                                                                                 | `undefined` |
| `keyboardShortcutLabel` | `keyboard-shortcut-label` | The label describing the keyboard shortcut for a menu item's action.                                                                         | `string \| undefined`                                                                                                                                                                                 | `undefined` |
| `label` _(required)_    | `label`                   | The label to display in the menu item.                                                                                                       | `string`                                                                                                                                                                                              | `undefined` |
| `referrerpolicy`        | `referrerpolicy`          | How much of the referrer to send when following the link.                                                                                    | `"" \| "no-referrer" \| "no-referrer-when-downgrade" \| "origin" \| "origin-when-cross-origin" \| "same-origin" \| "strict-origin" \| "strict-origin-when-cross-origin" \| "unsafe-url" \| undefined` | `undefined` |
| `rel`                   | `rel`                     | The relationship of the linked URL as space-separated link types.                                                                            | `string \| undefined`                                                                                                                                                                                 | `undefined` |
| `submenuTriggerFor`     | `submenu-trigger-for`     | This references the popover menu instance that the menu item is a trigger for. If this prop is set, then the variant will always be default. | `string \| undefined`                                                                                                                                                                                 | `undefined` |
| `target`                | `target`                  | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).                                          | `string \| undefined`                                                                                                                                                                                 | `undefined` |
| `variant`               | `variant`                 | The variant of the menu item.                                                                                                                | `"default" \| "destructive" \| "toggle" \| undefined`                                                                                                                                                 | `"default"` |


## Events

| Event             | Description                                                                 | Type                                 |
| ----------------- | --------------------------------------------------------------------------- | ------------------------------------ |
| `icToggleChecked` | Emitted when the user clicks a menu item that is set to the toggle variant. | `CustomEvent<{ checked: boolean; }>` |


## Slots

| Slot     | Description                                                |
| -------- | ---------------------------------------------------------- |
| `"icon"` | Content will be placed to the left of the menu item label. |


## Dependencies

### Used by

 - [ic-popover-menu](../ic-popover-menu)

### Depends on

- [ic-typography](../ic-typography)
- [ic-button](../ic-button)

### Graph
```mermaid
graph TD;
  ic-menu-item --> ic-typography
  ic-menu-item --> ic-button
  ic-button --> ic-typography
  ic-button --> ic-loading-indicator
  ic-button --> ic-tooltip
  ic-loading-indicator --> ic-typography
  ic-tooltip --> ic-typography
  ic-popover-menu --> ic-menu-item
  style ic-menu-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


