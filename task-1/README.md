# Teyzix Core Backend Internship: Task BE-1
## Project: Library Book CRUD API

### 📖 Project Overview
This project is a RESTful API designed to transition a public library's inventory from manual spreadsheets to a digital system[cite: 13, 14]. The system allows for full CRUD (Create, Read, Update, Delete) operations with built-in data validation and pagination support[cite: 11, 16].

### 🛠️ Tech Stack
- Runtime: Node.js [cite: 40]
- Framework: Express.js [cite: 40]
- Database: MongoDB Atlas [cite: 43]
- ODM: Mongoose
- Testing: Postman [cite: 50]

### ⚙️ Installation & Setup
1. PREPARE THE DIRECTORY: Ensure all project files are in a folder named "task-1"[cite: 46].
2. INSTALL DEPENDENCIES: Open your terminal in the project folder and run:
   npm install [cite: 52]
3. CONFIGURE ENVIRONMENT: Create a file named ".env" in the root directory and add your MongoDB connection string:
   PORT=5000
   MONGO_URI=your_mongodb_connection_string_here [cite: 52]

### 🚀 How to Run the Server
- Development Mode (with Nodemon): npm run dev [cite: 53]
- Production Mode: npm start [cite: 53]
The server will be live at http://localhost:5000.

### 📂 API Endpoints & Usage Examples

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | /api/books | Add a new book [cite: 20] |
| GET | /api/books | Get all books with pagination [cite: 18, 36] |
| GET | /api/books/:id | Get book by ID [cite: 19] |
| PUT | /api/books/:id | Update a book record [cite: 24] |
| DELETE | /api/books/:id | Delete a book record [cite: 25] |

#### Request Body Example (POST/PUT)
The API requires the following fields for book records [cite: 26-32]:
- Title
- Author
- ISBN
- Genre
- Available copies

Example JSON:
{
    "title": "Atomic Habits",
    "author": "James Clear",
    "isbn": "978-0735211292",
    "genre": "Self-Help",
    "availableCopies": 12
}

#### Pagination Support
Use query parameters to navigate the library inventory[cite: 37]:
- Example: /api/books?page=1&limit=5

### 🧪 Testing & Deliverables
A Postman collection is included in the project folder:
- File: Teyzix Library API.postman_collection.json [cite: 50]
- Automated tests are included to verify 200/201 status codes[cite: 50, 60].

### 🏛️ Project Architecture
The project follows a modular and clean structure [cite: 45-47]:
- config/: Database setup.
- controllers/: API logic.
- models/: Data schemas and validation.
- routes/: Endpoint definitions.
- server.js/: Main entry point.