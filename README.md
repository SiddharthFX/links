# Siddharth's Personal links

Welcome to my personal website! This project showcases my social links, and contact information in a modern and responsive design.

## Features

-   **Modern UI/UX**: Clean and visually appealing design with smooth animations.
-   **Responsive Design**: Optimized for both desktop and mobile devices.
-   **Glassmorphism Effect**: Stylish glass-like effect on social link boxes.
-   **Dynamic Background**: Subtle animated gradient orbs in the background.
-   **Social Links Integration**: Easy access to various social profiles.

## Technologies Used

This project is built with:

-   **React**: A JavaScript library for building user interfaces.
-   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
-   **Vite**: A fast front-end build tool.
-   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
-   **lucide-react**: A collection of beautiful open-source icons.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:

-   Node.js (LTS version recommended)
-   npm (Node Package Manager)

### Installation

1.  **Clone the repository**:

    ```bash
    git clone <YOUR_REPO_URL>
    cd <YOUR_REPO_NAME>
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

### Running the Development Server

To start the development server with auto-reloading and an instant preview:

```bash
npm run dev
```

The application will be accessible at `http://localhost:8080` (or another port if 8080 is in use).

## Project Structure

-   `public/`: Static assets like images and `robots.txt`.
-   `src/`: Main application source code.
    -   `components/`: Reusable React components.
        -   `ProfileHeader.tsx`: Handles the profile banner and picture.
        -   `SocialLink.tsx`: Renders individual social media links with effects.
        -   `GradientOrbs.tsx`: Renders the animated background orbs.
        -   Other UI components.
    -   `pages/`: Top-level components for different routes.
        -   `Index.tsx`: The main landing page.
        -   `NotFound.tsx`: Page displayed for invalid routes.
    -   `App.tsx`: Main application component, sets up routing.
    -   `main.tsx`: Entry point for the React application.
    -   `index.css`: Global styles and Tailwind CSS directives.
-   `vite.config.ts`: Vite configuration file.
-   `package.json`: Project dependencies and scripts.

## Customization

-   **Profile Information**: Edit `src/pages/Index.tsx` to update your name, titles, and social links.
-   **Images**: Replace `public/profile-banner.jpeg` and `public/profile-picture.jpg` with your own images. Ensure the filenames and extensions match those referenced in `src/components/ProfileHeader.tsx`.
-   **Styling**: Modify `tailwind.config.ts` for Tailwind CSS configuration, and `src/index.css` for global styles or custom animations.

## Deployment

This project can be deployed to any static site hosting service (e.g., Vercel, Netlify, GitHub Pages) by building the project:

```bash
npm run build
```

The build output will be generated in the `dist` directory.
