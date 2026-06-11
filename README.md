# Code Snippet App

A simple and modern Code Snippet Manager built with Next.js, Prisma ORM, SQLite, and shadcn/ui.

Users can create, view, edit, and manage code snippets in a clean and responsive interface.

---

## Features

* Create code snippets
* View all saved snippets
* Edit existing snippets
* Delete snippets
* SQLite database integration
* Prisma ORM for database operations
* Server Actions with Next.js
* Responsive UI using shadcn/ui
* TypeScript support

---

## Tech Stack

### Frontend

* Next.js 16
* React
* TypeScript
* Tailwind CSS
* shadcn/ui

### Backend

* Next.js Server Actions
* Prisma ORM

### Database

* SQLite

---

## Project Structure

```text
src/
│
├── app/
│   ├── page.tsx
│   ├── snippet/
│   │   ├── new/
│   │   ├── [id]/
│   │   └── edit/
│
├── components/
│   └── ui/
│
├── lib/
│   ├── prisma.ts
│   └── generated/
│
prisma/
│   └── schema.prisma
│
.env
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/code-snippet-app.git

cd code-snippet-app
```

### Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
DATABASE_URL="file:./dev.db"
```

---

## Prisma Setup

Generate Prisma Client:

```bash
npx prisma generate
```

Create SQLite Database:

```bash
npx prisma db push
```

(Optional) Open Prisma Studio:

```bash
npx prisma studio
```

---

## Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Database Schema

```prisma
model Snippet {
  id    Int    @id @default(autoincrement())
  title String
  code  String
}
```

---

## Available Commands

```bash
npm run dev
```

Start development server.

```bash
npm run build
```

Create production build.

```bash
npm run start
```

Start production server.

```bash
npx prisma generate
```

Generate Prisma Client.

```bash
npx prisma db push
```

Push schema changes to database.

```bash
npx prisma studio
```

Open Prisma Studio.

---

## Future Improvements

* Syntax highlighting
* Authentication
* User-specific snippets
* Search functionality
* Categories and tags
* Dark mode
* Copy-to-clipboard support
* Code formatting

---

## Author

Pratham Suthar

GitHub: https://github.com/your-github-username

---

## License

This project is licensed under the MIT License.


To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button";
```
