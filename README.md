# Automated Tests - Cancêr Ocupacional

## Presets

This repository includes `settings.json` and `extensions.json` to ensure a consistent development environment when writing automated tests.

### Workspace settings

The `settings.json` file defines workspace-specific configurations, overriding user settings and preventing further modifications. This ensures that formatting, linting, and other essential actions are consistently applied across all team members' local repositories.

### Required Extensions

To enhance the development experience while maintaining code consistency, the following extensions are required in your editor (preferably VSCode):

-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [Playwright](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
-   [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

> [!NOTE]
> The `extensions.json` file includes the extensions listed above. VSCode may prompt you with a notification to install them all at once.
