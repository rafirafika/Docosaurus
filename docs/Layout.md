---
id: Layout
title: Grid system
sidebar_label: Grid
---

Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.

New to or unfamiliar with flexbox? [Read this CSS Tricks flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background) for background, terminology, guidelines, and code snippets.


## Container
Containers provide a means to center and horizontally pad your site’s contents. Use Container for a responsive pixel width.

```
<Container>
  <Row>
    <Col>1 of 1</Col>
  </Row>
</Container>
```

### Fluid Container
You can use <Container fluid /> for width: 100% across all viewport and device sizes.

```
<Container fluid>
  <Row>
    <Col>1 of 1</Col>
  </Row>
</Container>
```

You can set breakpoints for the fluid prop. Setting it to a breakpoint (sm, md, lg, xl) will set the Container as fluid until the specified breakpoint.

```
<Container fluid="md">
  <Row>
    <Col>1 of 1</Col>
  </Row>
</Container>
```

## Auto-layout columns
When no column widths are specified the Col component will render equal width columns

### Setting one column width
Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.

### Variable width content
Set the column value (for any breakpoint size) to "auto" to size columns based on the natural width of their content.

## [More](https://react-bootstrap.github.io/layout/grid/#responsive-grids)