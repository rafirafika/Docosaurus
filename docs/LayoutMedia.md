---
id: LayoutMedia
title: Media objects
sidebar_label: Media
---

The media object helps build complex and repetitive components (e.g. blog comments, tweets, the like and more) where some media is positioned alongside content that doesn’t wrap around said media. Plus, it does this with only two required classes thanks to flexbox. Below is an example of a single media object. Only two classes are required—the wrapping Media and the Media.Body around your content. Optional padding and margin can be controlled through spacing utilities.

```
<Media>
  <img
    width={64}
    height={64}
    className="mr-3"
    src="holder.js/64x64"
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5>Media Heading</h5>
    <p>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
      Donec lacinia congue felis in faucibus.
    </p>
  </Media.Body>
</Media>
```

## Media Nesting

Media objects can be infinitely nested, though we suggest you stop at some point. Place nested Media within the Media.Body of a parent media object.

```
<Media>
  <img
    width={64}
    height={64}
    className="mr-3"
    src="holder.js/64x64"
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5>Media Heading</h5>
    <p>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
      Donec lacinia congue felis in faucibus.
    </p>

    <Media>
      <img
        width={64}
        height={64}
        className="mr-3"
        src="holder.js/64x64"
        alt="Generic placeholder"
      />
      <Media.Body>
        <h5>Media Heading</h5>
        <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
      </Media.Body>
    </Media>
  </Media.Body>
</Media>
```

## Media Alignment

Media in a media object can be aligned with flexbox utilities to the top (default), middle, or end of your Media.Body content.

```
<>
  <Media>
    <img
      width={64}
      height={64}
      className="align-self-start mr-3"
      src="holder.js/64x64"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>Media Heading</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>

      <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
    </Media.Body>
  </Media>

  <Media>
    <img
      width={64}
      height={64}
      className="align-self-center mr-3"
      src="holder.js/64x64"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>Media Heading</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>

      <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
    </Media.Body>
  </Media>

  <Media>
    <img
      width={64}
      height={64}
      className="align-self-end mr-3"
      src="holder.js/64x64"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>Media Heading</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>

      <p className="mb-0">
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
    </Media.Body>
  </Media>
</>
```

## Media Order

Change the order of content in media objects by modifying the HTML itself, or by adding some custom flexbox CSS to set the order property (to an integer of your choosing).

```
<Media>
  <Media.Body>
    <h5>Media Heading</h5>
    <p>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
      Donec lacinia congue felis in faucibus.
    </p>
  </Media.Body>
  <img
    width={64}
    height={64}
    className="ml-3"
    src="holder.js/64x64"
    alt="Generic placeholder"
  />
</Media>
```

## [More](https://react-bootstrap.github.io/layout/media/#media-list)
