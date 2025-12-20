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

## ⚠️ Important Notes

- Do **NOT** open `index.html` using `file://`
- The site uses `fetch()` and requires GitHub Pages (or a web server)
- If the layout loads but content is missing:
  - Check `data.json` for syntax errors
  - Verify `data.json` is accessible at:
    `https://<your-username>.github.io/Traumatic-News/data.json`

---

## 🔄 Updating Content

1. Edit `data.json`
2. Commit and push changes
3. Refresh the site (hard refresh if needed)

GitHub Pages will redeploy automatically.

---

## 📜 License & Author
**Author:** BlackSword  

This project is released for educational and creative use.
You are free to use, modify, and adapt this project for non-commercial and personal projects.

For contact, attribution, or collaboration inquiries, visit:
🔗 https://drivesave01plm-gif.github.io/My-bio/

