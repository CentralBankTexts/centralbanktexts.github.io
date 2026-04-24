# MPSD Website

Website for the **Monetary Policy Statement Database (MPSD)** — a standardized, machine-readable dataset of policy statements from 51 central banks (1990–2024), designed for research on communication trends, inflation dynamics, and global monetary policy transmission.

> **Version:** v0.1 Beta · **Data License:** CC BY-NC 4.0 · **Code License:** MIT · **DOI:** [IFC Bulletin No. 67](https://www.bis.org/ifc/publ/ifcb67_14.pdf)

## Pages

| Page | Content |
|------|---------|
| `index.html` | Hero, stats, key research findings, beta notice |
| `methodology.html` | Database features, pipeline, future updates |
| `papers.html` | Searchable/filterable list of papers using MPSD |
| `contact.html` | Access policy, citation (plain text + BibTeX), license, GitHub Issues |

## Local Preview

Requires a local HTTP server (browsers block `fetch()` on `file://` URLs).

```bash
python -m http.server 8000
```

Open: http://localhost:8000/site/

Alternatively, with Node.js:

```bash
npx serve site
```

## Collaborators

This is a **private repository**. Collaborators must be added via GitHub Settings → Collaborators. After cloning, run the server command above to view the site locally.

## Structure

```
site/
  index.html          # Home
  papers.html         # Papers list
  methodology.html    # Methodology & features
  contact.html        # Access, citation, license
  assets/
    styles.css        # All styles
    main.js           # Navigation toggle + papers page logic
    data/
      papers.json     # Papers data — edit this to add/update entries
```

## Update Papers List

Edit `site/assets/data/papers.json`. Each entry supports the following fields:

```json
{
  "title": "Paper title",
  "authors": "Author names",
  "journal": "Journal or venue",
  "year": "2026",
  "type": "journal | working-paper | policy-note",
  "tags": ["tag1", "tag2"],
  "url": "https://..."
}
```

## Citation

Baird, C., Benchimol, J., Vyshnevska, V., Sohn, W., & Vyshnevskyi, I. (2026). The Monetary Policy Statement Database. In *Data Science in Central Banking*, IFC Bulletin No. 67, Chapter 14. Bank for International Settlements.
