---
id: Button
title: Buttons
sidebar_label: Buttons
---

Custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

## Examples
Use any of the available button style types to quickly create a styled button. Just modify the variant prop.

```
<>
  <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
  <Button variant="link">Link</Button>
</>
```

### Outline buttons
For a lighter touch, Buttons also come in outline-* variants with no background color.
```
<>
  <Button variant="outline-primary">Primary</Button>{' '}
  <Button variant="outline-secondary">Secondary</Button>{' '}
  <Button variant="outline-success">Success</Button>{' '}
  <Button variant="outline-warning">Warning</Button>{' '}
  <Button variant="outline-danger">Danger</Button>{' '}
  <Button variant="outline-info">Info</Button>{' '}
  <Button variant="outline-light">Light</Button>{' '}
  <Button variant="outline-dark">Dark</Button>
</>
```

## Button tags
Normally <Button> components will render a HTML <button> element. However you can render whatever you'd like, adding a href prop will automatically render an <a /> element. You can use the as prop to render whatever your heart desires. React Bootstrap will take care of the proper ARIA roles for you.

```
<>
  <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
  <Button as="input" type="button" value="Input" />{' '}
  <Button as="input" type="submit" value="Submit" />{' '}
  <Button as="input" type="reset" value="Reset" />
</>
```

## Sizes

```
<>
  <div className="mb-2">
    <Button variant="primary" size="lg">
      Large button
    </Button>{' '}
    <Button variant="secondary" size="lg">
      Large button
    </Button>
  </div>
  <div>
    <Button variant="primary" size="sm">
      Small button
    </Button>{' '}
    <Button variant="secondary" size="sm">
      Small button
    </Button>
  </div>
</>
```
Create block level buttons—those that span the full width of a parent—by adding block

```
<>
  <Button variant="primary" size="lg" block>
    Block level button
  </Button>
  <Button variant="secondary" size="lg" block>
    Block level button
  </Button>
</>
```

## [More](https://react-bootstrap.github.io/components/buttons/#active-state)
