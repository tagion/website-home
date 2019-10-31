<a href="https://tagion.org"><img alt="tagion logo" src="./docs/.vuepress/public/wordmark-dark.svg" alt="tagion.org" height="60"></a>

# Welcome to Tagion!

[Tagion.org](https://tagion.org) is a primary online resource for the Tagion community. It is improved and changed over time through the contributions of community members who submit content, give feedback, or volunteer their time to managing its evolution.

If you’re interested in helping to improve [tagion.org](https://tagion.org), start here. This contribution guide will help you get started.

**Tagion.org should serve as:**

- Accessible entry point for newcomers
- Collection of explanatory articles
- Collection of useful resources for our community

Since we all are interested in growth of our community, the landing page of tagion.org is made in promotional style, pointing out the main features of Tagion. The goal of the landing page is to convert visitors to the new members of community: investors, developers, experts or any other interested parties.

## How can I contribute?

There are many ways you can get involved in improving the website:

- Check out the issues page and see if you can help with some of them
- Identify out-of-date information on tagion.org and submit a pull-request
- Suggest improvements for promotional page by opening an issue
- Suggest improvements on existing content by opening an issue
- Suggest ideas for new wiki articles, new collections by opening an issue
- Suggest any other improvements by opening an issue

## How are decisions about the site made?

Decisions about individual PRs, design evolution, and major upgrades to the website are made by a team of people from across the Tagion ecosystem. This team includes project managers, developers, designers, marketing and communications, and subject matter experts. Community input informs every decision: raising questions in issues, submitting PRs, or contacting the team at support@tagion.org is helpful!

This website team currently includes:

- Tobias Ambs-Thomsen (Tagion Team)
- Vlad Pazych (Tagion Team)

## Development

### Run in dev mode

```bash
# Install dependencies:
npm install

# Run in dev mode:
npm run dev
```

### Deployment

```
# In the root folder:
./deploy.sh
```

### Structure

Branch `gh-pages` contains built version of the website, while `source` branch contains the source code.

Site content is in `/docs` folder. Everything else in `/docs/.vuepress`.

We don't use `master` branch since it is indexable by search engines, which makes duplicate content and this is bad for SEO.
