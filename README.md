# Headless E-Commerce with Vendure and Astro 

Welcome to our headless e-commerce project! This project utilizes Vendure as the Product Information Management (PIM) system and Astro for the storefront. Both the back-end and front-end are housed within the same repository.

## Repository Structure
- `pim`: Contains the back-end code powered by Vendure.
- `storefronts`: Holds the front-end code built with Astro.

## Prerequisites
To run this project locally, you'll need:
- PostgreSQL database.
- Node.js v20 or higher.

### Setup db
1. Create a new database called `vendure` in your PostgreSQL server.
2. Restore the backup `sampledata.sql.gz` from the `pim` directory.
 
### Configure Vendure and Storefront
1. Rename `.env.example` in `pim` to `.env` and change values for your local PostgreSQL database.
2. Rename `.env.example` in `storefront` to `.env` and change values for your local Vendure server.

### Running Locally
Ensure your PostgreSQL database is up and running. Then, follow these steps:
1. Start the Vendure server from the `pim` directory by running `npm run dev`.
2. Start the Astro server from the `storefronts` directory by running `npm run dev`.

## Vendure Admin
You can log in to the Vendure admin panel by visiting `http://localhost:3000/admin` with the following credentials: `superadmin`/`superadmin`

Happy coding!