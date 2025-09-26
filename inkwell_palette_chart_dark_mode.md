# UI Color Assignment Chart: Inkwell vs Accent (Dark Mode)

| UI Element / State | Use **Inkwell** (brand) | Use **Accent** (teal) | Notes / Tailwind examples |
|---|---|---|---|
| App background | ✅ (900 / 800) |  | `bg-inkwell-900`, `bg-inkwell-800` |
| Cards / panels | ✅ (800 / 700) |  | `bg-inkwell-800 border border-inkwell-700` |
| Dividers / borders | ✅ (700) |  | `border-inkwell-700` |
| Body text | ✅ (100 / 200) |  | `text-inkwell-100`, `text-inkwell-200` |
| Headings | ✅ (50 / 100) |  | `text-inkwell-50` |
| Links (default) |  | ✅ (400 → 300 hover) | `text-accent-400 hover:text-accent-300` |
| Primary buttons | ✅ (600 → 500 hover) |  | `bg-inkwell-600 hover:bg-inkwell-500 text-inkwell-50` |
| Secondary / CTA buttons |  | ✅ (500 → 400 hover) | `bg-accent-500 hover:bg-accent-400 text-white` |
| Ghost / outline buttons | ✅ border/text (200) | Accent for focus only | `border-inkwell-600 text-inkwell-200 focus:ring-accent-400` |
| Icons (default) | ✅ (200–300) |  | Accent only if call-to-action |
| Focus rings | ✅ (500) or Accent | ✅ (400–500) | `focus:ring-inkwell-500` or `focus:ring-accent-400` |
| Inputs (text, select) | ✅ bg (800), border (700), text (100) | Accent for focus ring | `bg-inkwell-800 border-inkwell-700 text-inkwell-100 focus:ring-accent-400` |
| Textarea | ✅ bg (800), border (700), text (100) | Accent/Inkwell for focus | `focus-visible:border-inkwell-500 focus-visible:ring-accent-400` |
| Toggles / switches | Inkwell track (700) | Accent thumb/active | `data-[state=checked]:bg-accent-400` |
| Badges / pills (neutral) | ✅ (700 bg / 200 text) |  | `bg-inkwell-700 text-inkwell-200` |
| Badges / pills (highlight) |  | ✅ | `bg-accent-500/20 text-accent-300` |
| Charts (lines/bars) | ✅ grid/axes (700) | ✅ series highlights | `stroke-inkwell-700`, `fill-accent-400` |
| Empty states / skeletons | ✅ (800/700) |  | Accent avoided to reduce noise |
| Inline emphasis text |  | ✅ (400) | Use sparingly for metrics/keywords |
| Notifications (info) | Inkwell frame | Accent accent | Info title `text-accent-400`, link `text-accent-300` |
| Gradients / hero | ✅ start (900/800 → 700) | ✅ end (400/500) | `bg-gradient-to-br from-inkwell-900 via-inkwell-800 to-accent-400` |

---

## Example Code Snippets (Dark Mode)

### Primary Button (Inkwell)
```html
<button class="bg-inkwell-600 hover:bg-inkwell-500 text-inkwell-50 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-accent-400">
  Save
</button>
```

### Secondary / CTA Button (Accent)
```html
<button class="bg-accent-500 hover:bg-accent-400 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-accent-400">
  Get Started
</button>
```

### Input / Textarea
```html
<textarea
  class="w-full bg-inkwell-800 text-inkwell-100 placeholder-inkwell-400
         border border-inkwell-700 rounded-md
         focus:border-inkwell-500 focus:ring-2 focus:ring-accent-400 focus:outline-none"
  rows="4"
  placeholder="Type here..."
></textarea>
```

### Link
```html
<a class="text-accent-400 hover:text-accent-300 underline-offset-4 hover:underline">
  Learn more
</a>
```
