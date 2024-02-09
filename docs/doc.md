# Setup and Configuration
## Initial Setup

### Requirements:
- Node.js installed on your system. (Look at nvm.md)
- pnpm installed globally using npm install -g pnpm.

### Installation:
- Run pnpm install at the root to install dependencies for all workspaces.

### Microfrontend Setup

Host and Remote Applications: Both applications are created using Create React App and configured to run independently and together. The host application can dynamically load components from the remote application using module federation.
Shared Components: Located under cra/sharedcomponent, these components can be imported and used in both host and remote applications, ensuring consistency and reducing code duplication.

### Vitest for Unit Testing

Configuration: A vitest.config.ts file is created to configure the testing environment, specifying jsdom as the environment to simulate browser behavior in tests.
Writing Tests: Tests are written using .test.jsx files alongside the components they test, using Vitest and Testing Library to simulate user interaction and verify component behavior.
API Integration

Fetching Data: Both the host and remote applications demonstrate how to fetch data from an external API (e.g., Pokémon API) and render it. This is done using React's useState and useEffect hooks to handle asynchronous data fetching and state management.
Running the Applications
Development Mode: Run pnpm start to concurrently start both host and remote applications in development mode. The host application is typically available on localhost:3001, and the remote on localhost:3002.
Building for Production: Run pnpm build to generate production builds for both applications.
Testing
Running Tests: Execute pnpm test to run unit tests across the applications, utilizing Vitest as the test runner.
API Integration Example
Implementation: The documentation details how to integrate with external APIs, using the Pokémon API as an example. It explains the process of fetching data and rendering it within the React components.

# Docker 

- Run `docker compose up -d`
