# Headless E-Commerce with Vendure and Astro 

Welcome to our headless e-commerce project! This project utilizes Vendure as the Product Information Management (PIM) system and Astro for the storefront. Both the back-end and front-end are housed within the same repository.

## Repository Structure
- `pim`: Contains the back-end code powered by Vendure.
- `storefronts`: Holds the front-end code built with Astro.

## Prerequisites
To run this project locally, you'll need:
- PostgreSQL database.
- Node.js v20 or higher.

### Setup
1. Pull this repo locally
2. CD into `pim` and run `npm install`
3. CD into `storefront` and run `npm install`
4. Create a new database called `vendure` in your PostgreSQL server.
5. CD into `pim`
6. Run `npm run populate` to fill the database with sample data.
7. Rename `.env.example` in `pim` to `.env` and change values for your local PostgreSQL database.
8. Rename `.env.example` in `storefront` to `.env` and change values for your local Vendure server.

### Running Locally
Ensure your PostgreSQL database is up and running. Then, follow these steps:
1. Start the Vendure server from the `pim` directory by running `npm run dev`.
2. Start the Astro server from the `storefronts` directory by running `npm run dev`.

## Vendure Admin
You can log in to the Vendure admin panel by visiting `http://localhost:3000/admin` with the following credentials: `superadmin`/`superadmin`

Happy coding!