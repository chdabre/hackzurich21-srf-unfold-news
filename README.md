
![GitHub Logo](./docs/logo_unfold.png)

Made at [HackZurich 2021](https://hackzurich.com/)

:gem: Devpost: https://devpost.com/software/unfold-f09npq

:collision: Demo (Mobile): https://unfold-news.web.app

## What is UNFOLD News?

Staying informed can be a hassle.

We wanted to find a way to make getting the news more pleasant and prevent people from getting overwhelmed by the sheer flood of information.

A way that invites readers to dive deep or also just get caught up on headlines.

With _UNFOLD_, every news story is split into manageable chunks that can be accessed step by step. Each user gets to decide which pieces of information matter to them most and access them without scrolling endlessly. Things the user isn't interested in don't clog up the feed.

The data SRF already delivered allowed for smooth linking between multiple sources of media and subtopics and allowed us to create a data-driven UX answer to the question "How will news be consumed in the future?".

## Technology

This [functional prototype](https://unfold-news.web.app) is built with [Vue.js](https://vuejs.org/), [Vuetify](https://vuetifyjs.com/en/) and hosted on [Google Firebase](https://firebase.google.com/).

Features:
- Recursive Node-Tree REST API design with full mock implementation
- On-demand loading of media/content based on reader's choices
- Dynamic transitions make use of new, fast web rendering to create a smooth experience
- Rich inline media experience

## Project setup

### Requirements
- Node 12

```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```
