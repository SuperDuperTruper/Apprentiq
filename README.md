# ApprentIQ

A modern apprenticeship assessment platform built with Next.js.

## Features

- Logical Reasoning Tests
- Numerical Reasoning Tests
- Situational Judgment Tests
- CV Builder with Industry-Specific Templates
- Real-time Progress Tracking
- Instant Feedback and Explanations

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SuperDuperTruper/apprentiq.git
cd apprentiq
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Deployment

### GitHub Pages

The project is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. Update the `homepage` field in `package.json` with your GitHub username:
```json
{
  "homepage": "https://[your-github-username].github.io/apprentiq"
}
```

2. Push your changes to the main branch:
```bash
git push origin main
```

The GitHub Action will automatically build and deploy your site to GitHub Pages.

### Manual Deployment

You can also deploy manually using:

```bash
npm run deploy
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_BASE_URL=https://[your-github-username].github.io/apprentiq
```

## Built With

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 