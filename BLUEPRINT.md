# Project Blueprint: Lumen AI Solutions

This document provides a detailed blueprint of the Lumen AI Solutions website.

## 1. Project Overview

The project is a modern, single-page application (SPA) style marketing website for a company named "Lumen AI Solutions". The website showcases the company's services, features, success stories, and provides contact information. It is designed to be visually appealing and interactive, with scroll-based animations.

## 2. Tech Stack

- **Framework:** React
- **Build Tool:** Vite
- **Language:** TypeScript
- **UI Components:** shadcn/ui, built on top of Radix UI primitives.
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **State Management:** TanStack Query (for server state)
- **Forms:** React Hook Form with Zod for validation
- **Icons:** Lucide React, Phosphor React
- **Linting:** ESLint
- **Animations:** Intersection Observer API, CSS transitions

## 3. Project Structure

The project follows a standard React application structure:

```
lumen-ai-solutions-main/
├── public/               # Static assets (images, fonts, etc.)
├── src/
│   ├── assets/           # Images and other assets used in components
│   ├── components/
│   │   ├── sections/     # Large, reusable page sections (e.g., Hero, Features)
│   │   └── ui/           # Generic UI elements from shadcn/ui (Button, Card, etc.)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Top-level page components for each route
│   ├── App.tsx           # Main application component with routing
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── .eslintrc.cjs         # ESLint configuration
├── package.json          # Project dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 4. Routing

The application uses `react-router-dom` for client-side routing. The routes are defined in `src/App.tsx`:

-   `/`: The main landing page (`Index.tsx`)
-   `/about`: The "About Us" page (`About.tsx`)
-   `/contact`: The "Contact Us" page (`Contact.tsx`)
-   `/service`: The "Services" page (`Service.tsx`)
-   `/blog`: The "Blog" page (`Blog.tsx`)
-   `*`: A "Not Found" page for any other URL (`NotFound.tsx`)

## 5. Component Breakdown

This section will be expanded as I analyze more files.

### 5.1. `Index` Page (Landing Page)

The main landing page is composed of several modular sections, providing a comprehensive overview of Lumen AI Solutions.

-   **`Navigation`**: The main navigation bar, likely containing links to other pages.
-   **`HeroSection`**: The top-of-the-fold section, designed to grab the user's attention.
-   **`FeaturedSection`**: Highlights key features or partners.
-   **`TestimonialsSection`**: Displays customer testimonials.
-   **`HowItWorksSection`**: Explains the company's process or product workflow.
-   **`FeaturesSection`**: A more detailed look at the product's features.
-   **`MissionSection`**: Describes the company's mission and values.
-   **`SuccessStoriesSection`**: Showcases case studies or success stories.
-   **`FAQSection`**: A frequently asked questions section.
-   **`Footer`**: The website footer, containing contact information, links, and copyright notices.

### 5.2. `About` Page

The "About Us" page tells the story of the company and introduces its values and team.

-   **`Navigation`**: Consistent navigation bar.
-   **Hero Section**: Introduces the "About Lumen AI Solutions" page.
-   **Story Section**: Narrates the company's origin story, founded by "Battu Bharath Kumar" to serve small and medium-sized businesses. Includes an "Impact" card with key metrics.
-   **Values Section**: Highlights four core values: Customer First, Innovation, Accessibility, and Excellence.
-   **CTA Section**: A call-to-action to encourage users to get started.
-   **`Footer`**: Consistent footer.

### 5.3. `Service` Page

This page details the services offered by Lumen AI Solutions, divided into two main categories.

-   **`Navigation`**: Consistent navigation bar.
-   **Hero Section**: Introduces the "Our Services" page.
-   **Core Services Section**: Lists foundational services like "AI-Powered Customer Service Agents", "SEO", "Business Growth Development", and "Marketing".
-   **Premium Services Section**: Showcases advanced offerings such as "Detailed Market Research", "Business Strategy Development", and "Voice AI Agents".
-   **CTA Section**: A call-to-action prompting users to make contact.
-   **`Footer`**: Consistent footer.

### 5.4. `Blog` Page

The blog page features articles related to AI, business, and industry trends.

-   **`Navigation`**: Consistent navigation bar.
-   **Hero Section**: Introduces the blog with the title "AI Insights & Stories".
-   **Categories**: A filter bar for blog categories.
-   **Featured Post**: A section for the main blog post.
-   **Blog Grid**: A grid of other blog articles.
-   **Newsletter**: A form for users to subscribe to the company newsletter.
-   **`Footer`**: Consistent footer.

### 5.5. `Contact` Page

The contact page provides multiple ways for users to get in touch with the company.

-   **`Navigation`**: Consistent navigation bar.
-   **Hero Section**: Introduces the page with the title "Get in Touch".
-   **Contact Form & Info**: A two-column layout with a contact form on one side and contact details (email, phone, address) and social media links on the other.
-   **FAQ Quick Links**: A link to the FAQ section on the home page.
-   **CTA Section**: A call-to-action prompting users to make contact.
-   **`Footer`**: Consistent footer.

