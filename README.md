# YP Multiservices Landing

Professional services landing page for YP Multiservices in San Marcos, TX.

## Services

- **Tax Services**: Personal, business, and self-employed tax preparation
- **ITIN & SSN Assistance**: Complete assistance for ITIN and SSN applications
- **Wedding Officiant**: Bilingual personalized wedding ceremonies
- **Error Correction**: Review and correction of previous tax returns

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- GSAP + ScrollTrigger
- Zod validation

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

```env
NEXT_PUBLIC_DOMAIN=pending
NEXT_PUBLIC_WHATSAPP_NUMBER=+15205850085
NEXT_PUBLIC_INSTAGRAM=ypmultiservicesusa
NEXT_PUBLIC_EMAIL=yperezservices@yahoo.com
NEXT_PUBLIC_PHONE=520-585-0085
```

## Project Structure

```
src/
├── app/
│   ├── [lang]/          # Dynamic route for i18n
│   │   ├── page.tsx      # Homepage
│   │   ├── services/     # Services page
│   │   └── contact/     # Contact page
│   └── api/contact/      # Contact form API
├── features/
│   ├── home/           # Homepage components
│   ├── services/        # Services components
│   ├── contact/        # Contact components
│   └── shared/         # Shared components (Navbar, Footer)
└── shared/
    └── lib/            # Utilities (i18n, schema)
```

## Deployment

Ready for Cloudflare Pages deployment.