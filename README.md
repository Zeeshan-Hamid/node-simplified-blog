# Node Simplified Blog

Welcome to the Node Simplified Blog project! This is a simple blog application built using Node.js, Express, and Mongoose for the backend, and EJS for the frontend. It allows users to write, edit, and delete blog posts in markdown format and displays them on the frontend.

## Features

- **Create, Read, Update, Delete (CRUD)**: Basic operations for managing blog posts.
- **Markdown Support**: Write your articles in markdown.
- **Slug-based URLs**: Friendly URLs for each article.
- **Sanitized HTML**: Ensures safe rendering of markdown content.
- **Friendly User Interface**: Simple and intuitive interface for managing blog posts.
- **Date and Time Stamps**: Automatically adds creation date and time to each blog post.
- **Error Handling**: Graceful error handling and user feedback.

## Technologies Used

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **EJS**: Embedded JavaScript templates.
- **Marked**: A markdown parser and compiler.
- **DOMPurify**: A DOM-only, super-fast, uber-tolerant XSS sanitizer for HTML, MathML, and SVG.
- **Slugify**: A library to generate URL-friendly slugs.

## How the App Works

1. **Homepage**: Displays a list of all blog articles sorted by the creation date.
2. **Create New Article**: Users can create a new article by navigating to `/articles/new`, where they can fill out a form with the title, description, and markdown content.
3. **Edit Article**: Users can edit an existing article by navigating to `/articles/edit/:id`, where they can update the article's details.
4. **View Article**: Each article can be viewed on a separate page accessible via its unique slug-based URL, e.g., `/articles/:slug`.
5. **Delete Article**: Users can delete an article by clicking the delete button, which removes the article from the database.
6. **Sanitization and Slug Generation**: When an article is created or edited, its markdown content is sanitized to prevent XSS attacks, and a URL-friendly slug is generated from the title.

Enjoy building your own simplified blog with Node.js!
