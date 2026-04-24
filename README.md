# MPSD Website

This repository contains the standalone website for the Monetary Policy Statement Database (MPSD).

## Local Preview

From this repository root:

```bash
python -m http.server 8000
```

Open: http://localhost:8000/site/

## Structure

- site/index.html
- site/papers.html
- site/methodology.html
- site/contact.html
- site/assets/styles.css
- site/assets/main.js
- site/assets/data/papers.json

## Update Papers List

Edit `site/assets/data/papers.json`.
