# Masjid Time

Masjid Time is a web application built with Next.js, TypeScript, Prisma ORM, and Tailwind CSS. It allows users to manage and receive notifications for prayer timings of their nearest masjids.

## Features

- **User Authentication:** Only registered users can add and edit masjids.
- **Masjid Management:** Users can add new masjids and edit details of masjids they've added.
- **Search Functionality:** Users can search for their nearest masjids based on location.
- **Notification System:** Users can turn on notifications to receive reminders for prayer timings.

## Tech Stack

- **Next.js:** React framework for building the application.
- **TypeScript:** Adds static typing to JavaScript for improved development.
- **Prisma ORM:** Database toolkit for interacting with the database.
- **Tailwind CSS:** Utility-first CSS framework for styling.

## Getting Started

### Prerequisites

- Node.js: Make sure you have Node.js installed.
- PostgreSQL: Masjid Time uses PostgreSQL as the database. Make sure you have it installed.

### Installation

# Clone the repository
git clone https://github.com/sohail-313/masjid-time.git

# Navigate to the project directory
cd masjid-time

# Install dependencies
npm install

# Set up the database
npm run prisma:apply

# Run the development server
npm run dev
