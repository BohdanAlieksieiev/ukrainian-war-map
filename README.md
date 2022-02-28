# Overview

This is a small [react](https://ru.reactjs.org/) that was created to display a map of hostilities taking place in Ukraine

Since I am a resident of Ukraine, I would like to thank all the countries that have supported us, thank you for your help, we are one!

# Usage

Install the component via npm: npm install ukrainian-war-map.

## Map

```
import Map from "ukrainian-war-map";
<Map
    width={640}
    height={480}
/>
```

Here you can see an [example](https://www.google.com/maps/d/u/0/viewer?mid=1ROxxPyw0nPAa5HDAABCBU-IDECabGw3-&ll=49.97040835671173%2C36.42398397206311&z=6) of the work

| Name   | Type   | Description                     | Required | Default |
| ------ | ------ | ------------------------------- | -------- | ------- |
| width  | number | Specifies the width of the map  | false    | 640     |
| height | number | Indicates the height of the map | false    | 480     |

## Unchain

[Unchain](https://unchain.fund/) is a charity project created by blockchain activists to support people in Ukraine during this crisis time.
Your support helps us raise and quickly distribute money for humanitarian needs. So that the people of Ukraine could get help where they need it the most. We’re always open for cooperation.
This component looks like [this](https://meold.github.io/stopwar/img/stop-war-in-ukraine.png)

```
import { Unchain } from "ukrainian-war-map";
<Unchain
    openLink={true}
/>
```

| Name     | Type    | Description                                                               | Required | Default |
| -------- | ------- | ------------------------------------------------------------------------- | -------- | ------- |
| openLink | boolean | indicates whether the link will be opened when you click on the component | false    | true    |
