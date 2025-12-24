# Traumatic News 📰

Traumatic News is a static, newspaper-style website rendered from structured data.
The project is designed to run **exclusively on GitHub Pages**.

---

## 🚀 How to Run (GitHub Pages Only)

This project is intended to be deployed on **GitHub Pages**.

### Steps

1. Fork or clone this repository
2. Ensure the repository structure is:

```
Traumatic-News/
├─ index.html
├─ data.json
└─ images/
```

3. Open **Repository Settings → Pages**
4. Under **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
5. Save the settings

After a short build process, your site will be live at:

```
https://<your-username>.github.io/Traumatic-News/
```

---

## 📰 Editing Articles – `data.json` Guide

The entire newspaper is powered by a single file: **`data.json`**.

You do **not** need to edit HTML or JavaScript.
Updating this file will automatically update the website (and Discord, if automation is enabled).

---

### 📁 File Structure Overview

```json
{
  "masthead": "",
  "issue": "",
  "weather": "",
  "footer": "",
  "columns": {
    "left": [],
    "middle": [],
    "right": []
  }
}
```

---

### 🏷 Header Fields

```json
"masthead": "Traumatic News",
"issue": "VOL. II – The New Age",
"weather": "Weather: Optimal for Blasting",
"footer": "The Traumatic News is printed weekly (or whenever we feel like it)."
```

- **masthead** – Newspaper name (do not remove)
- **issue** – Issue number / era
- **weather** – Flavor text (RP / meme friendly)
- **footer** – Footer text at the bottom of the page

⚠️ Keep the keys unchanged. Only edit the text values.

---

### 🧱 Columns Layout

The page is split into **three columns**:

- **left** → Main headlines, major stories
- **middle** → Official notices, decrees, analysis
- **right** → Breaking news, images, short snippets

---

### 📰 Article Block

```json
{
  "type": "article",
  "title": "ARTICLE TITLE",
  "paragraphs": [
    "First paragraph.",
    "Second paragraph."
  ]
}
```

---

### ⭐ Major Headline Article

```json
{
  "type": "article",
  "major": true,
  "title": "MAIN HEADLINE",
  "subhead": "Optional subheading text.",
  "image": {
    "src": "https://example.com/image.jpg",
    "alt": "Image description"
  },
  "paragraphs": [
    "Main story paragraph one.",
    "Main story paragraph two."
  ]
}
```

- **major: true** → Large headline style
- **subhead** → Optional
- **image** → Must be a **public URL** (GitHub Pages or Discord CDN)

---

### 📜 Official Decree Block

```json
{
  "type": "decree",
  "title": "OFFICIAL DECREE TITLE",
  "paragraphs": [
    "Official message line one.",
    "Official message line two."
  ]
}
```

Used for:
- Server rules
- Admin announcements
- Official notices

---

### 📡 Snippets Block (Short News)

```json
{
  "type": "snippets",
  "items": [
    "Short news item one.",
    "Short news item two.",
    "Short news item three."
  ]
}
```

Used for:
- Gossip
- Minor events
- Humor / flavor text

---

## ⚠️ Important Notes

- Only supported `type` values:
  - `article`
  - `decree`
  - `snippets`
- `paragraphs` must always be an array
- Do **not** remove `left`, `middle`, or `right`
- JSON does **not** allow comments
- Always check commas and closing brackets

### Cache Issues

If changes do not appear after updating files:

- Press **Ctrl + Shift + R** (Windows / Linux)
- Press **Cmd + Shift + R** (macOS)

This forces a hard refresh and clears cached files.

---

## 🔄 Updating Content

1. Edit `data.json`
2. Commit and push changes to `main`
3. Hard refresh the site (**Ctrl + Shift + R**)

GitHub Pages will redeploy automatically.

---

## 📜 License & Author

**Author:** BlackSword

This project is released for educational and creative use.
You are free to use, modify, and adapt this project for non-commercial and personal projects.

For contact, attribution, or collaboration inquiries:

🔗 https://drivesave01plm-gif.github.io/My-bio/

---

> A newspaper is not just information —  
> it is atmosphere, bias, rumor, and memory.
