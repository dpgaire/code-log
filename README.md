# Code Log

A React-based web application for logging and managing code snippets. This app allows users to create, read, update, and delete code logs, each with a title, description, and code. The logs can also be exported as a JSON file for further use or sharing.

## Features

- **CRUD Operations**:
  - Create new code logs with a title, description, and code snippet.
  - Read and view logs in an organized format.
  - Update existing logs with new information.
  - Delete logs that are no longer needed.
- **Export to JSON**:
  - Export your logs as a JSON file for backup or sharing.
- **Responsive Interface**:
  - Built with React for a seamless, user-friendly experience across devices.

## Installation

To get started with the project locally, follow the steps below.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (Package Manager)

### Clone the Repository

```bash
git clone https://github.com/dpgaire/code-log.git
cd code-log
```

### Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### Run the Development Server

To start the app in development mode:

```bash
npm start
```

Or with yarn:

```bash
yarn start
```

The application should now be running at `http://localhost:3000`.

## Usage

### Logging Code

Once the app is running, you can:

- **Create a New Log**: Use the provided form to add a title, description, and the code snippet.
- **View Logs**: All logs will be displayed in a list format. You can click on any log to view the full details.
- **Edit Logs**: Update any log by clicking the "Edit" button next to the log entry.
- **Delete Logs**: Remove unwanted logs by clicking the "Delete" button.

### Exporting to JSON

You can export all of your code logs to a JSON file:

1. Click the "Export" button.
2. The logs will be downloaded as a `YYYY-MM-DD-code-log.json` file.

## Technologies Used

- **React**: For building the user interface and managing state.
- **React Hooks**: For handling component lifecycle and state management.
- **CSS**: For styling the application.
- **Local Storage (optional)**: For persisting logs on the client-side.

## Contributing

We welcome contributions! If you'd like to help improve this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push your branch to your forked repository (`git push origin feature-name`).
5. Open a pull request to the `main` branch of this repository.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/dpgaire/code-log/blob/main/LICENSE) file for details.

---

### Notes:

- Replace `main` with the appropriate branch name if your default branch is named differently.
- Feel free to customize the contributing section further based on how you'd like contributions to be handled (e.g., adding issue templates, pull request guidelines, etc.).
