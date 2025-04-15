# Character Generator Frontend

A Svelte-based frontend application for generating characters and their images using the Character Server API.

## Features

- Character description input
- Real-time character generation
- Image generation and display
- Detailed character information display
- Responsive design

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Character Server running (default: http://localhost:18002)

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Configure the environment:
   - Copy `.env.example` to `.env`
   - Update `VITE_CHARACTER_SERVER` if your Character Server is running on a different URL

## Development

Run the development server:

```bash
npm run dev
```

The app will be available at http://localhost:5173

## Building for Production

Build the production version:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

1. Enter a character description in the text area
2. Click "Generate Character"
3. Wait for the character and image to be generated
4. View the generated character details and image

## Environment Variables

- `VITE_CHARACTER_SERVER`: URL of the Character Server (default: http://localhost:18002)
