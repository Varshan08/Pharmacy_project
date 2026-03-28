import sqlite3

conn = sqlite3.connect("database.db")
cursor = conn.cursor()

cursor.execute("DELETE FROM medicines WHERE quantity=''")

conn.commit()
conn.close()

print("cleaned")