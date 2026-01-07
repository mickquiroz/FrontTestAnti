# SCL Consultores App - Design Specification

> **Source of Truth**: Derived from `app/globals.css` and `AVANCE_1.pdf` (referenced).

## 1. Brand Colors
| Token | Value | Fallback | Usage |
| :--- | :--- | :--- | :--- |
| `primary-blue` | `#0085B3` | Blue | Headings, Primary Actions, Brand |
| `accent-orange` | `#FF8600` | Orange | Accents, Highlights |
| `gray-text` | `#4A4A4A` | Dark Gray | Body Text |
| `white` | `#FFFFFF` | White | Backgrounds, Text on Dark |
| `footer-dark-1` | `#0B1F2A` | Dark Blue | Footer Gradient Start |
| `footer-dark-2` | `#06141C` | Black Blue | Footer Gradient End |

## 2. Typography
**Font Family**: `Montserrat` (Sans-serif)

| Level | Desktop Size | Mobile Size | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **H1** | `60px` | `40px` | Bold (700) | 1.1 | -0.02em |
| **H2** | `36px` | `28px` | SemiBold (600) | 1.1 | -0.02em |
| **Body** | `16px` | `16px` | Regular (400) | 1.7 | Normal |
| **Small** | `14px` | `14px` | Regular (400) | 1.5 | Normal |

## 3. Layout & Spacing
**Global Container**:
- **Constraint**: `max-w-7xl` (approx 1280px or 80rem)
- **Alignment**: Centered (`mx-auto`)
- **Padding**:
    - Mobile: `px-4`
    - Tablet: `px-6`
    - Desktop: `px-8`

**Vertical Spacing (Section Padding)**:
- **Desktop**: `py-28` (112px)
- **Mobile**: `py-16` (64px)

## 4. Components & UI Rules
### 4.1 Buttons
- **Radius**: `8px`
- **Shadow**: `shadow-card` (soft)

### 4.2 Cards
- **Radius**: `16px`
- **Shadow**: `shadow-card`
- **Hover**: `shadow-hover` (stronger)

### 4.3 Timeline
- **Style**: Horizontal preferred (or responsive vertical).
- **Alignment**: Centered content.
- **No Overlaps**: Elements must flow naturally without negative margin hacks that cause collisions.

## 5. Critical Constraints
1. **No Left-Sticking**: Content on >1440px screens must be centered.
2. **Readability**: Text lines should not be ultra-wide (use max-w constraints).
3. **Responsiveness**: Verify at 360, 768, 1024, 1440, 1920px.
