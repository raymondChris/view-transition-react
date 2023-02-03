# Some infos

This is an experimental project where I was testing the View-Transition API (previously called Shared Element Transitions)
When I created this project View-Transition API was an experimental API so some part of the content and documentation may be deprecated.

### Before you start

- Open [chrome://flags/#view-transition](chrome://flags/#view-transition)
- Enable viewTransition API
- In your terminal launch npm i (node version at least v14.18.2)
- Then npm start

### Target

My target in this app was to reproduce something similar to iphone's photo gallery app combining react and View-Transition API

NOTE: At the moment seems like View-Transition API is not working properly or is not working as it should as in documentation

In this project to detach the main-header from the root animation I added this portion of code:

```
::view-transition-old(main-header),
::view-transition-new(main-header) {
  animation: none;
}
```

But tecnically for View-Transition documentation

```
.main-header {
  view-transition-name: main-header;
  contain: layout;
}
```

should be enough!
In fact if I try to apply a particolar animation (instead of animation: none) to the main-header it will not work
