# Habit Tracker

This is a simple Habit Tracker application built with SvelteKit and TypeScript. It allows users to track their habits
daily, weekly, or monthly. The project includes progress visualization, habit completion, and a minimalist UI to manage
and view habits.

## Features

- Add, remove, and manage habits with customizable frequency (daily, weekly, monthly).
- Mark habits as completed for each day and view progress.
- Visualize habit progress with a progress ring component.
- Organized codebase with reusable components and SCSS styling.

## Technologies Used

- **SvelteKit**: Frontend framework.
- **TypeScript**: Type safety and enhanced development experience.
- **SCSS**: Styling with Sass for modular and reusable styles.
- **Vite**: Fast build tool.
- **Playwright**: For end-to-end testing (configured for testing habit flows).

## Project Structure

```
habit-tracker/
├── public/                 # Public assets (favicon, images)
├── src/
│   ├── app.d.ts            # Type definitions for SvelteKit
│   ├── routes/             # SvelteKit pages
│   │   ├── +layout.svelte  # Global layout
│   │   ├── +page.svelte    # Main dashboard page for habits
│   │   └── habits/
│   │       ├── +page.svelte  # Page to add and manage habits
│   │       └── [id].svelte   # Detail page for each habit
│   ├── lib/                # Library of reusable components and utilities
│   │   ├── components/
│   │   │   ├── HabitCard.svelte    # Component for each habit display
│   │   │   ├── HabitList.svelte    # List of all habits
│   │   │   └── ProgressRing.svelte # Visual progress ring for habits
│   │   └── styles/         # Global SCSS styles
│   ├── stores/             # Svelte stores for global state
│   │   └── habitsStore.ts  # Store for managing habit data
│   ├── utils/              # Utility functions
│   │   └── formatDate.ts   # Function to format dates
│   └── app.html            # Main HTML template
├── svelte.config.js        # Svelte configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies and scripts
```

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/antoinegreuzard/habit-tracker.git
   ```

2. Navigate into the project directory:
   ```bash
   cd habit-tracker
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

### Development

Start the development server:

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`.

### Building for Production

To build the project for production, run:

```bash
pnpm build
```

### Testing

To run end-to-end tests with Playwright:

```bash
pnpm test:e2e
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.
