---
id: Introduction
title: Introduction
sidebar_label: Introduction
---

Learn how to include React Bootstrap in your project.

## Installation

The best way to consume React-Bootstrap is via the npm package which you can install with npm (or yarn if you prefer).

If you plan on customizing the Bootstrap Sass files, or don't want to use a CDN for the stylesheet, it may be helpful to install vanilla Bootstrap as well.

```
npm install react-bootstrap bootstrap
```

## Importing Components

You should import individual components like: react-bootstrap/Button rather than the entire library. Doing so pulls in only the specific components that you use, which can significantly reduce the amount of code you end up sending to the client.

```
import Button from 'react-bootstrap/Button';

// or less ideally
import { Button } from 'react-bootstrap';
```

### Browser globals

We provide react-bootstrap.js and react-bootstrap.min.js bundles with all components exported on the window.ReactBootstrap object. These bundles are available on unpkg, as well as in the npm package.

```
<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>
```

## Examples

React-Bootstrap has started a repo with a few basic CodeSandbox examples. Click here to check them out.

## [More](https://react-bootstrap.github.io/getting-started/introduction#stylesheets)