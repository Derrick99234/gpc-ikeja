# Modern Church Website: UI Design Specification & Stitch Prompt

A comprehensive prompt and design guide for generating an alive, warm, modern, and community-centric church website mockup.

---

## 1. Copy-and-Paste Stitch / UI Generator Prompt

```text
Design a vibrant, warm, and highly engaging modern homepage for a community-centric church.

Aesthetic & Tone:
- Atmosphere: Joyful, welcoming, and authentic—feels like a thriving community family rather than a formal corporate institution.
- Color Palette:
  * Canvas: Soft warm alabaster / cream (#FAF7F2) to feel organic and warm.
  * Typography & Headings: Deep navy slate (#1E293B) for crisp contrast.
  * Primary Accent / CTA: Warm terracotta / amber (#E07A5F) for energetic action.
  * Secondary Accent: Muted sage green (#819B88) for peace and growth indicators.
- Typography:
  * Headings: Elegant modern display serif (e.g., Fraunces or Playfair Display).
  * Body & Navigation: Crisp, approachable sans-serif (e.g., Plus Jakarta Sans or Inter).
- Card & Container Language:
  * Generous whitespace with 16px–24px rounded corners (`rounded-2xl`).
  * Delicate ambient shadows and 1px borders (`rgba(0,0,0,0.06)`).

Page Architecture & Key Components:

1. Navigation Bar (Translucent Frosted Glass):
   - Church brand identity with minimalist warm emblem.
   - Primary links: About, Messages, Ministries, Events, Give.
   - Live Badge CTA: "Watch Live" with a pulsing crimson dot indicator.
   - Action Button: "Plan Your Visit" pill button.

2. Hero Section (Dynamic & Inviting):
   - Bold Headline: "Faith for Real Life. A Family for Everyone."
   - Subtitle: "Join us this Sunday in-person or live-streaming from anywhere."
   - Floating Service Countdown Card: "Next Gathering: Sunday 10:00 AM" with a real-time countdown badge (Hours : Mins : Secs).
   - Primary CTAs: "Plan Your Visit" (solid terracotta) and "Listen to Latest Message" (ghost pill with audio icon).
   - Visual Focus: High-resolution carousel of real community moments—candid worship, smiling conversations in the lobby, and vibrant youth.

3. "New Here?" Interactive Journey:
   - 3-card tabbed switcher:
     * Card 1: "What to Expect" (Music style, casual dress, run-of-service timeline).
     * Card 2: "Kids & Youth" (Safe check-in kiosk, background-checked staff, age-appropriate fun).
     * Card 3: "Location & Coffee" (Free parking guides, campus map, lobby welcome cafe).

4. Featured Sermon / Media Spotlight:
   - Split card featuring the current sermon series graphic.
   - Floating media bar with play/pause button, progress scrubber, and sermon notes PDF download link.

5. "Find Your Circle" (Ministries & Small Groups Grid):
   - Modular grid showcasing Life Groups, Young Adults, Creative Arts, and City Outreach.
   - Interactive hover cards highlighting meeting times, leader avatars, and "Join Group" quick links.

6. Interactive Events Calendar:
   - Horizontal date cards with bold calendar badges (e.g., "OCT 14 - Night of Worship", "OCT 20 - Community Food Drive").
   - 1-click "Add to Calendar" (Google / Apple) and RSVP buttons.

7. Community Generosity & Impact:
   - Uplifting Giving banner with a transparent impact breakdown (local shelters, missions, community support).
   - Quick-select donation pills: $25, $50, $100, Custom, and "Give Online" button.

8. Comprehensive Footer:
   - Campus addresses, Sunday service hours, interactive location preview.
   - Newsletter signup with instant confirmation, social media icons, and copyright details.
```

---

## 2. Design Decisions: Why This Makes The Site Feel "Alive"

| Component | Psychological & UX Impact |
| :--- | :--- |
| **Next Service Countdown** | Replaces static text with urgency and anticipation; visitors immediately know when the next opportunity to connect is. |
| **Pulsing "Live" Indicator** | Mimics modern streaming platforms, indicating active, real-time community engagement. |
| **Tabbed "New Here" Walkthrough** | Lowers the intimidation barrier for newcomers by answering common first-time visit questions interactively. |
| **Warm Earth-Toned Palette** | Steers away from clinical, cold corporate blues in favor of warm creams and terracottas that communicate hospitality. |
| **Integrated Media Scrubber** | Allows instant preview of messages without navigating away or opening external YouTube links. |

---

## 3. Recommended Design System Tokens

```json
{
  "colors": {
    "background": "#FAF7F2",
    "surface": "#FFFFFF",
    "surfaceAlt": "#F3EFEA",
    "textPrimary": "#1E293B",
    "textSecondary": "#64748B",
    "accentPrimary": "#E07A5F",
    "accentHover": "#D0694E",
    "accentSecondary": "#819B88",
    "liveIndicator": "#EF4444"
  },
  "typography": {
    "headingFont": "Fraunces, serif",
    "bodyFont": "Plus Jakarta Sans, sans-serif"
  },
  "borderRadius": {
    "card": "16px",
    "button": "9999px"
  }
}
```
