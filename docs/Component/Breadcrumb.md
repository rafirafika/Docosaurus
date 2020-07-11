---
id: Breadcrumb
title: 
sidebar_label: Breadcrumb
---

## Breadcrumbs
Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS. Add active prop to active Breadcrumb.Item . Do not set both active and href attributes. active overrides href and span element is rendered instead of a.

### Example
```
<Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
```

## API
### Breadcrumb
```
import Breadcrumb from 'react-bootstrap/Breadcrumb'
```

### Breadcrumb.Item
```
import Breadcrumb from 'react-bootstrap/Breadcrumb
```


## [More](https://react-bootstrap.github.io/components/badge/#api)
