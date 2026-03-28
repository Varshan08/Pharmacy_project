import sqlite3

conn = sqlite3.connect("database.db")

cursor = conn.cursor()

# user table
cursor.execute("""
CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    password TEXT
)
""")

# medicine table
cursor.execute("""
CREATE TABLE IF NOT EXISTS medicines(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    quantity INTEGER,
    expiry TEXT,
    price REAL
)
""")

# default login
cursor.execute("INSERT INTO users (username,password) VALUES ('admin','admin')")

conn.commit()
conn.close()

print("Database created")