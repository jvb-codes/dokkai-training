# UI Color Assignment Chart: Inkwell vs Accent

| UI Element / State | Use **Inkwell** (brand) | Use **Accent** (teal) | Notes / Tailwind examples |
|---|---|---|---|
| App background | ✅ (50 / 100) |  | `bg-inkwell-50`, `bg-inkwell-100` |
| Cards / panels | ✅ (100 / 200) |  | `bg-inkwell-100 border border-inkwell-300` |
| Dividers / borders | ✅ (300–400) |  | `border-inkwell-300 hover:border-inkwell-400` |
| Body text | ✅ (600, 800–900) |  | `text-inkwell-800`, `text-inkwell-600` |
| Headings | ✅ (800–900) |  | `text-inkwell-900` |
| Links (default) |  | ✅ (500 → 600 hover) | `text-accent-500 hover:text-accent-600` |
| Primary buttons | ✅ (700 → 600 hover) |  | `bg-inkwell-700 hover:bg-inkwell-600 text-white` |
| Secondary / CTA buttons |  | ✅ (500 → 600 hover) | `bg-accent-500 hover:bg-accent-600 text-white` |
| Ghost / outline buttons | ✅ border/text (600–700) | Accent for focus only | `border-inkwell-300 text-inkwell-700 focus:ring-accent-500` |
| Icons (default) | ✅ (500–700) |  | Accent only if call-to-action |
| Focus rings | ✅ (700) or Accent | ✅ (500–600) | `focus:ring-inkwell-700` or `focus:ring-accent-500` |
| Inputs (text, select) | ✅ bg (100), border (300), text (800) | Accent for focus ring | `bg-inkwell-100 border-inkwell-300 focus:border-inkwell-700 focus:ring-accent-500` |
| Textarea | ✅ bg (100), border (300), text (800) | Accent/Inkwell for focus | `focus-visible:border-inkwell-700 focus-visible:ring-accent-500` |
| Toggles / switches | Inkwell track (200–300) | Accent thumb/active | `data-[state=checked]:bg-accent-500` |
| Badges / pills (neutral) | ✅ (200/300 text 700) |  | `bg-inkwell-200 text-inkwell-700` |
| Badges / pills (highlight) |  | ✅ | `bg-accent-500/10 text-accent-600` |
| Charts (lines/bars) | ✅ grid/axes (300–400) | ✅ series highlights | `stroke-inkwell-300`, `fill-accent-500` |
| Empty states / skeletons | ✅ (100/200) |  | Accent avoided to reduce noise |
| Inline emphasis text |  | ✅ (500) | Use sparingly for metrics/keywords |
| Notifications (info) | Inkwell frame | Accent accent | Info title `text-accent-600`, link `text-accent-500` |
| Gradients / hero | ✅ start (900/800 → 700) | ✅ end (500/600) | `bg-gradient-to-br from-inkwell-800 via-inkwell-700 to-accent-500` |
