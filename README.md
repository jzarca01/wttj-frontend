# Kanban Board Project

A dynamic Kanban board application built with modern web technologies, featuring drag-and-drop functionality for task management.

## 🚀 Tech Stack

- **React** - JavaScript Framework
- **TypeScript** - Type Safety
- **Vite** - Build Tool & Development Server
- **Vitest** - Testing Framework
- **Tailwind CSS** - Utility-first CSS Framework
- **@dnd-kit** - Drag and Drop Functionality

## ✨ Features

- Drag and drop tasks between columns
- Clean and modern UI with Tailwind CSS
- Fully typed with TypeScript
- Test coverage with Vitest

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/jzarca01/wttj-frontend.git
cd wttj-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 📁 Project Structure

```
src/
├── assets/           # Static assets
├── components/       # React components
│   ├── Card          # Task card component
│   └── Column        # Column component
│   └── Header        # Header component
├── types/            # TypeScript type definitions
```

## 🧪 Running Tests

Run all tests:

```bash
npm run test
```

## 🛠️ Future improvements

- Handle collision when a task is dropped on another one in a different column
- Use sensors to improve tests (integration test)
- Make it responsive
- Create, edit and delete tasks (using API ?)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Testing Strategy

- **Unit Tests**: Components are tested in isolation using Vitest and React Testing Library
- **Snapshot Tests**: Ensuring UI consistency

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
