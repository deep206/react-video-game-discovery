# Introduction

I worked on this project to learn React basics and gain an understanding on the functionality of React under the hood. I am very interested in getting myself familiar with NextJS, so while reading up about it, I figured knowing React will be helpful before I jump on to learning NextJS.

`react-video-game-discovery` helps you find new and interesting games to play.
You can filter games by platform, genre, and more. You can also search for game titles.

This project uses following dependencies:

-   Node v20.x
-   React v18.x
-   ChakraUI v2.8.x - used as a React UI component library for designing the web app
-   Axios v1.6.x
-   ViteJS v4.x - for setting up and deploying the project

This project uses the **RAWG APIs**. RAWG has an incredible library and many APIs that you can use to build your own projects. (https://rawg.io)

[Click here](https://deep206.github.io/react-video-game-discovery/) for live demo.

# Getting Started

To get started with this project, follow these steps:

-   Node v18 or higher recommended. To install Node, visit https://nodejs.org/en/download
-   Clone this repository to your local machine.
-   Run npm install to install the required dependencies.
-   Get a RAWG API key at https://rawg.io/apidocs. Registration is required. Free for personal use (as of December 23, 2023).
-   Add the API key to `.env` file. Example: `VITE_RAWG_API_KEY="your personal rawg api key"`
-   Run `npm run dev` command to start the web server locally.

I used VSCode as my code editor for this project. Here are 2 recommended VSCode extensions that I found useful while working on this project:

-   [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
-   [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

# Project Takeaways

-   Build front-end app with React and TypeScript
-   Build reusable function components in React
-   Learn about different React hooks include state, ref and custom hooks.
-   Manage component state
-   Connecting React client to backend APIs
-   Deploying app on github pages using Github Actions
