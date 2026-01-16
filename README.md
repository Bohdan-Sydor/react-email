# React Email Sandbox

A proof-of-concept sandbox for adopting [react-email](https://react.email/) with custom reusable email components and Storybook integration.

## Features

- **Custom Email Components**: Pre-built Header, Footer, and Button components
- **Storybook Integration**: Visual documentation and interactive playground for email components
- **Live Preview Sandbox**: Real-time email preview with configurable props
- **Tailwind CSS Support**: Modern styling with email-safe Tailwind classes

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the email preview sandbox.

### Storybook

Launch Storybook for component development:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to view the component library.

## Project Structure

```
src/
├── components/
│   └── email/
│       ├── Header.tsx      # Email header with logo and navigation
│       ├── Footer.tsx      # Email footer with social links and legal
│       ├── Button.tsx      # CTA button with multiple variants
│       └── index.ts        # Component exports
├── emails/
│   └── WelcomeEmail.tsx    # Example email template
├── App.tsx                 # Preview sandbox application
└── main.tsx

stories/
├── EmailPreview.tsx        # Storybook email preview wrapper
├── Header.stories.tsx      # Header component stories
├── Footer.stories.tsx      # Footer component stories
└── Button.stories.tsx      # Button component stories
```

## Custom Components

### Header

```tsx
import { Header } from "./components/email";

<Header
  companyName="Acme Inc"
  logoUrl="https://example.com/logo.png"
  links={[
    { label: "Products", href: "https://example.com/products" },
    { label: "Support", href: "https://example.com/support" },
  ]}
/>
```

**Props:**
- `companyName` (required): Company or brand name
- `logoUrl`: URL to logo image
- `logoAlt`: Alt text for logo
- `links`: Array of navigation links
- `backgroundColor`: Background color (default: white)

### Footer

```tsx
import { Footer } from "./components/email";

<Footer
  companyName="Acme Inc"
  address="123 Main St, San Francisco, CA"
  socialLinks={[
    { platform: "twitter", href: "https://twitter.com/acme" },
    { platform: "linkedin", href: "https://linkedin.com/company/acme" },
  ]}
  privacyUrl="https://example.com/privacy"
  unsubscribeUrl="https://example.com/unsubscribe"
/>
```

**Props:**
- `companyName` (required): Company name
- `address`: Physical address
- `socialLinks`: Array of social media links
- `unsubscribeUrl`: Unsubscribe link
- `privacyUrl`: Privacy policy link
- `termsUrl`: Terms of service link
- `year`: Copyright year

### Button

```tsx
import { Button } from "./components/email";

<Button href="https://example.com" variant="primary" size="lg">
  Get Started
</Button>
```

**Props:**
- `href` (required): Button link URL
- `variant`: `"primary"` | `"secondary"` | `"outline"` | `"ghost"`
- `size`: `"sm"` | `"md"` | `"lg"`
- `fullWidth`: Make button full width
- `children`: Button label

## Creating New Email Templates

1. Create a new file in `src/emails/`:

```tsx
// src/emails/NewsletterEmail.tsx
import { Html, Head, Body, Container } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import { Header, Footer, Button } from "../components/email";

export const NewsletterEmail = () => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-gray-100">
          <Container className="mx-auto max-w-xl bg-white">
            <Header companyName="My Company" />
            {/* Your email content */}
            <Footer companyName="My Company" />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
```

2. Add it to the sandbox in `App.tsx` or create a story in `stories/`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run storybook` | Start Storybook |
| `npm run build-storybook` | Build Storybook static site |
| `npm run lint` | Run ESLint |

## Technologies

- [React Email](https://react.email/) - Email component framework
- [Vite](https://vite.dev/) - Build tool
- [Storybook](https://storybook.js.org/) - Component documentation
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS

## License

MIT
