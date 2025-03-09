# Twitter Clone Frontend Guidelines

## Build Commands
- `npm start` - Start dev server
- `npm test` - Run tests
- `npm test -- --testPathPattern=ComponentName` - Run specific test
- `npm run build` - Build for production
- `npm run eject` - Eject from CRA (avoid if possible)
- `npx typescript --noEmit` - Type check

## Code Style
- **TypeScript**: Use strict typing (no `any` unless necessary)
- **Imports**: Group by: 1) React/libraries 2) Components 3) Types 4) Styles
- **Components**: Functional components with explicit return types
- **Props**: Define interfaces in types directory
- **Naming**: PascalCase for components/interfaces, camelCase for functions/variables
- **CSS**: Component-scoped CSS files or styled-components
- **Theme**: Use context API for theming
- **Error handling**: Try/catch with user-friendly messages
- **State**: Prefer useState/useContext, keep state close to where it's used

## Directory Structure
- `/src/Components` - Reusable UI components
- `/src/Pages` - Full page components
- `/src/contexts` - React contexts
- `/src/types` - TypeScript interfaces/types
- `/src/Styles` - CSS files for components