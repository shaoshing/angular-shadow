angular-shadow
==============

This module has two directives to help show top / bottom shadow easily.

![Examples](/examples.png?raw=true)

# Usage

1. Download and include 'angular-shadow.js' in your project.
2. Use the ``ss-top-shadow`` directive on any elemnt to cast a top shadow.
3. Likewise ``ss-bottom-shadow`` to cast a bottom shadow.

## Example

```html
<div ss-top-shadow>Title 1</div>
<div ss-bottom-shadow>Title 2</div>
<!-- or both top and bottom shadow -->
<div ss-top-shadow ss-bottom-shadow>Title 3</div>
```

## Customization

```html
<style type="text/css">
  .my-bottom-shadow:after{
      /* default shadow style:
            box-shadow: 0px 0px 3px 1px #ccc;  */
    box-shadow: 0 0 3px 1px #red;
  }
</style>
<div ss-bottom-shadow="my-bottom-shadow">Title 3</div>
```
**Note** Checkout the examples.html for more details

# Licence

MIT
