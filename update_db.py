import sqlite3

conn = sqlite3.connect("database.db")
cursor = conn.cursor()

cursor.execute("ALTER TABLE medicines ADD COLUMN barcode TEXT")

conn.commit()
conn.close()

print("Column added successfully")