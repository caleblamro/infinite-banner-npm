# Rotate Component

A versatile React component for creating smooth, infinite animations in any direction. The `InfiniteBanner` component utilizes `framer-motion` to animate elements seamlessly either horizontally or vertically, with customizable speed and spacing.

## Example

https://6559630251cc1b51bb3ba42f--rococo-starlight-9cc7fc.netlify.app/

## Repo

https://github.com/caleblamro/infinite-banner-npm

## Installation

To install the InfiniteBanner component, use npm or yarn:

```bash
npm install react-infinite-banner
```

or

```bash
yarn add react-infinite-banner
```

## Usage

Import the `Rotate` component in your React application:

```javascript
import { InfiniteBanner } from 'react-infinite-banner';
```

Then use it in your component:

```jsx
<InfiniteBanner
  direction={{ axis: 'X', direction: 'normal' }}
  gap={10}
  duration={5}
  children={[/* array of React nodes */]}
/>
```

## Props

The `InfiniteBanner` component accepts the following props:

- `direction`: An object specifying the animation direction.
  - `axis`: A string that can be either 'X' or 'Y' indicating the horizontal or vertical axis.
  - `direction`: A string that can be either 'normal' or 'reverse' indicating the animation direction.
- `gap`: A number representing the gap in pixels between each element.
- `duration`: An optional number representing the duration of one complete cycle of the animation in seconds.
- `children`: An array of `React.ReactNode` elements that will be animated.

## Example

Here's an example of how to use the `InfiniteBanner` component:

```jsx
<InfiniteBanner
  direction={{ axis: 'X', direction: 'normal' }}
  gap={10}
  duration={10}
  children={[
    <div>Element 1</div>,
    <div>Element 2</div>,
    // More elements...
  ]}
/>
```

This example will create a horizontal animation of the provided elements.

## License

See LICENSE.txt