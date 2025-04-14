## Download Node.js ->
1. Go to https://nodejs.org
2. Download the LTS version
3. Install it (just keep clicking "Next")
4. Restart your terminal (or your PC if needed)

## Check if it worked ->
Open a terminal (CMD or PowerShell) and run:  
```bash
node -v  
npm -v
```
If both show version numbers (like v20.0.0, 10.5.0), you’re okay👌.

## Run these commands (after you install Node.js) ->
Open a terminal:  
![image](https://github.com/user-attachments/assets/ef31e503-e100-456f-b12f-8d3f037625bd)
Then run
```bash
npm install
```
After installing run ->
```bash
node server.js
```
It should display something like this ->  
![image](https://github.com/user-attachments/assets/843a6544-0121-49dd-a960-0bfdab369a5a)



---

## 📁 Project Folder Structure

Here's how the project is organized:

- `server.js` 
- `db.js` 
- `package.json` 

**public/**
- `style.css` 
- `script.js` 

**views/**
- `index.html` 

**routes/**
- `index.js`
  
## 🧠 What Each File/Folder Does

### 📄 `server.js`
- This is the **main entry point** of the app.
- Sets up the Express server and connects the routes.
- Uses middleware to handle form data and static files.
- Starts the app on a port (usually 3000).

### 📁 `public/`
- Contains files that the browser can access directly.
- `style.css` → for styling the website.
- `script.js` → for client-side JavaScript (if you need interactivity).

### 📁 `views/`
- Holds the frontend HTML files.
- You can put `index.html` here, and later more pages like `sell.html` or `item.html`.

### 📄 `db.js`
- Handles the **connection to your MySQL database**.
- Exports the connection so it can be used in your route files.

### 📁 `routes/index.js`
- This is where your backend routes live.
- Each route does a specific task:
  - `GET /` → shows homepage
  - `POST /add-item` → adds item to the database
- This file keeps your logic separate and clean.

### 📄 `package.json`
- Automatically created with `npm init -y`
- Keeps track of your project info and dependencies (like `express`, `mysql`)
- Required to reinstall packages on another machine with `npm install`
