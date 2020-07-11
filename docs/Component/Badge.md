---
id: Badge
title: Badge
sidebar_label: Badge
---

Badges scale to match the size of the immediate parent element by using relative font sizing and em units.

```
<div>
  <h1>
    Example heading <Badge variant="secondary">New</Badge>
  </h1>
  <h2>
    Example heading <Badge variant="secondary">New</Badge>
  </h2>
  <h3>
    Example heading <Badge variant="secondary">New</Badge>
  </h3>
  <h4>
    Example heading <Badge variant="secondary">New</Badge>
  </h4>
  <h5>
    Example heading <Badge variant="secondary">New</Badge>
  </h5>
  <h6>
    Example heading <Badge variant="secondary">New</Badge>
  </h6>
</div>
```

Badges can be used as part of links or buttons to provide a counter.

```
<Button variant="primary">
  Profile <Badge variant="light">9</Badge>
  <span className="sr-only">unread messages</span>
</Button>
```

Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button. Unless the context is clear, consider including additional context with a visually hidden piece of additional text.

## Contextual variations
Add any of the below mentioned modifier classes to change the appearance of a badge.
```
<div>
  <Badge variant="primary">Primary</Badge>{' '}
  <Badge variant="secondary">Secondary</Badge>{' '}
  <Badge variant="success">Success</Badge>{' '}
  <Badge variant="danger">Danger</Badge>{' '}
  <Badge variant="warning">Warning</Badge> <Badge variant="info">Info</Badge>{' '}
  <Badge variant="light">Light</Badge> <Badge variant="dark">Dark</Badge>
</div>
```

## Pill
badges Use the pill modifier class to make badges more rounded (with a larger border-radius and additional horizontal padding). Useful if you miss the badges from v3.

```
<div>
  <Badge pill variant="primary">
    Primary
  </Badge>{' '}
  <Badge pill variant="secondary">
    Secondary
  </Badge>{' '}
  <Badge pill variant="success">
    Success
  </Badge>{' '}
  <Badge pill variant="danger">
    Danger
  </Badge>{' '}
  <Badge pill variant="warning">
    Warning
  </Badge>{' '}
  <Badge pill variant="info">
    Info
  </Badge>{' '}
  <Badge pill variant="light">
    Light
  </Badge>{' '}
  <Badge pill variant="dark">
    Dark
  </Badge>
</div>
```

## [More](https://react-bootstrap.github.io/components/badge/#api)
