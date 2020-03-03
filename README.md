<center><a href="https://tagion.org"><img alt="tagion logo" src="https://github.com/tagion/resources/raw/master/branding/logomark.svg?sanitize=true" alt="tagion.org" height="60"></a></center>

<center><h1>Welcome to Tagion!</h1></center>

![Release](https://github.com/tagion/homepage/workflows/Release/badge.svg?branch=release) ![Stage](https://github.com/tagion/homepage.stage/workflows/Stage/badge.svg?branch=stage)

[Tagion.org](https://tagion.org) is a primary online resource for the Tagion community. It is improved and changed over time through the contributions of community members who submit content, give feedback, or volunteer their time to managing its evolution.

If you’re interested in helping to improve [tagion.org](https://tagion.org), start here. This contribution guide will help you get started.

**Tagion.org is a hub for:**

- Explanatory articles;
- Collections of related resources;
- Developer manuals & API references.

Since we all are interested in growth of our community, the landing page of tagion.org is made in promotional style, pointing out the main features of Tagion. It serves as an entry point, highlighting the main values of Tagion, with the goal to convert visitors to the new members of community.

## How can I contribute?

There are many ways you can get involved in improving the website:

- Check out the issues page and see if you can help with some of them;
- Identify out-of-date information on tagion.org and submit a pull-request;
- Suggest improvements for promotional page by opening an issue;
- Suggest improvements on existing content by opening an issue;
- Suggest ideas for new wiki articles, new collections by opening an issue;
- Suggest any other improvements by opening an issue;

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

You can suggest changes by submitting a pull request. If the PR integrates well, it will be approved and the website automatically rebuilt thanks to Travis CI.

You should always make a pull request to the `stage` branch.

### Structure

Branch `gh-pages` contains built version of the website, while `release` and `stage` branches contain the source code.

The stage.tagion.org is hosted in [another repo](https://github.com/tagion/homepage.stage/), built from `stage` branch.

Site content (except promo pages) is in `/docs` folder. Everything else in `/docs/.vuepress`.

We don't use `master` branch since it is indexable by search engines, which makes duplicate content, which is bad for SEO.
