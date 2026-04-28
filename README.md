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

## Publish (GitHub Pages)

This repository is configured to deploy automatically with GitHub Actions using:

- `.github/workflows/deploy-pages.yml`

### Steps

1. Open **GitHub repository Settings -> Pages**.
2. Under **Source**, select **GitHub Actions**.
3. Push changes to `master` (or run the workflow manually) to trigger deployment.

### Default Page URL

Once deployment succeeds, the site URL is:

https://CentralBankTexts.github.io/monetary-policy-statement-database-website/

## Custom Domain (`mpsd.io`)

If you own `mpsd.io`, you can map it to GitHub Pages:

1. In **Settings -> Pages**, set **Custom domain** to `mpsd.io`.
2. Add these DNS A records for the apex (`@`):
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
3. (Optional) Add `www` CNAME -> `CentralBankTexts.github.io`.
4. Enable **Enforce HTTPS** after DNS is verified.

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
  "link": "https://..."
}
```

## License

Repository license text: [LICENSE.txt](LICENSE.txt)

## Citation

Baird, C., Benchimol, J., Vyshnevska, V., Sohn, W., & Vyshnevskyi, I. (2026). The Monetary Policy Statement Database. In *Data Science in Central Banking*, IFC Bulletin No. 67, Chapter 14. Bank for International Settlements.
