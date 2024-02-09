# Northcoders News Web App

Hosted version: https://nc-news-tj-jack.netlify.app/

NC News or Northcoders News WebApp is a frontend counterpart to my backend NC News API project found below.

BE repo: https://github.com/tjejack/be-nc-news

BE hosted: https://nc-news-o4bo.onrender.com/api

This project aims to generate a functional web application for a user-centric news website complete with user articles, comments, and a rating system.

# Navigating the app

To change user and access user-specific features such as deleting comments, click the 'Change User' link in the navigation bar and choose any of the available accounts, no log in required.

The 'Home' link in the navigation bar will return you to the home page, where all available articles are listed.

Use the search function on the home page to toggle which topics you would like to see, what you would like them to be sorted by, and what order you would like them sorted in.

To read, comment on, and vote on an article, click the 'read' button on its article card.

Vote on articles by clicking the buttons on its dedicated page, or leave a comment for other users to read.

# Styling considerations

This app was styled with a focus on accessibility and mobile-first design.

All colour schemes have been contrast-tested, images have alt text assigned, navigation has been streamlined for keyboard users and screen readers.

For ease of demonstration, login requires only the click of a button, rather than password verification, and defaults to anonymous browsing.

# If you wish to explore this application yourself:

# 1. Clone the Repository
In the terminal on your device, cd into the directory where you wish to keep this repository, then,

```git clone https://github.com/tjejack/fe-nc-news.git```

Or, if you have already forked this repo, copy the HTTPS link from the green 'Code' dropdown and replace the url.

# 2. Install the necessary dependencies
This repository uses npm, react, axios, and react-bootstrap.

Before working with the repository, you're going to need to install npm to your newly downloaded repo by typing the following command into your terminal while inside the git repository

```npm install```

To find out more about the packages used, see the documentation below.

React: https://react.dev/

Axios: https://axios-http.com/

Bootstrap: https://react-bootstrap.github.io/

# 3. File Setup
Once you have cloned the repository and installed all of the necessary dependencies, you will need to deploy your app using the following command

```npm run dev```

Then, simply follow the link provided in your terminal, which should look something like

```http://localhost:5173```

# This repository requires node v21.2.0.
