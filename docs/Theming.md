---
id: Theming
title: Theming and customizing styles
sidebar_label: Theming
---

Generally, if you stick to the Bootstrap defined classes and variants, there isn't anything you need to do to use a custom theme with React-Bootstrap. It just works. But we also make coloring outside the lines easy to do.

## New variants and sizes

Custom variants and sizes should follow the pattern of the default bootstrap variants, and define css classes matching: component-*. React bootstrap builds the component classNames in a consistent way that you can rely on. For instance this custom Button.

```
<>
  <style type="text/css">
    {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>

  <Button variant="flat" size="xxl">
    flat button
  </Button>
</>
```

## Prefixing components

In some cases you may need to change the base class "prefix" of one or more Components. You can control how a Component prefixes its classes locally by changing the bsPrefix prop. Or globally via the ThemeProvider Component.

> Changing prefixes is an escape hatch and generally shouldn't be used.

```
<>
  {/* Hint: inspect the markup to see how the classes differ */}
  <ThemeProvider prefixes={{ btn: 'my-btn' }}>
    <Button variant="primary">My Button</Button>
  </ThemeProvider>{' '}
  <Button bsPrefix="super-btn" variant="primary">
    Super button
  </Button>
</>
```