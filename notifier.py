import tkinter as tk

def show_custom_notification(message, alert_type="normal"):

    root = tk.Tk()
    root.overrideredirect(True)  # remove title bar
    root.attributes("-topmost", True)

    # 🎨 COLORS
    if alert_type == "low":
        bg = "#3f1d1d"
        border = "#ef4444"
    elif alert_type == "expiry":
        bg = "#3f2f1d"
        border = "#f59e0b"
    else:
        bg = "#1e293b"
        border = "#22c55e"

    width = 320
    height = 120

    # 📍 position bottom-right
    screen_width = root.winfo_screenwidth()
    screen_height = root.winfo_screenheight()

    x = screen_width - width - 20
    y = screen_height - height - 60

    root.geometry(f"{width}x{height}+{x}+{y}")
    root.configure(bg=border)

    # CARD
    frame = tk.Frame(root, bg=bg)
    frame.place(x=3, y=3, width=width-6, height=height-6)

    # TITLE
    title = tk.Label(frame,
                     text="💊 Pharmacy Alert",
                     font=("Segoe UI", 12, "bold"),
                     bg=bg,
                     fg="white")
    title.pack(anchor="w", padx=10, pady=(10, 0))

    # MESSAGE
    msg = tk.Label(frame,
                   text=message,
                   font=("Segoe UI", 10),
                   bg=bg,
                   fg="#e5e7eb",
                   justify="left",
                   wraplength=280)
    msg.pack(anchor="w", padx=10, pady=5)

    # AUTO CLOSE
    root.after(5000, root.destroy)

    root.mainloop()