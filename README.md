## React-sahna-app

- npx create-react-app ./
- npm install @material-ui/core
- npm install @material-ui/icons
- npm i react-scroll
- npm install react-awesome-reveal@latest
- npm i react-slick
- npm install slick-carousel

- Importing roboto and rightous google fonts

### Initial setup

1. Deleting unnecessary files
2. Cleanup
3. Importing resources files

### Components

1. Header component
2. Footer component
3. SideDrawer component
4. Footer component
5. Carousel component
6. TimeTill component
7. Highlights component
8. utils/MyButton component
9. Pricing component
10. Location component

### Header component

1. Importing several material-ui elements
2. Creating header
3. Applying some style
4. Importing SideDrawer component as child component
5. Passing states as props to SideDrawer child component
6. Configuring header visible/invisible upon scrolling

### SideDrawer component

1. Importing Drawer,List,ListItem element from material ui
2. Configuring logic for opening/closing drawer
3. Passing list items in drawer by iterating through array of objects
4. Importing scroller from 'react-scroll' library
5. Configuring it with some props such as duration, delay, smooth and offset

### Footer component

1. Creating footer layout
2. Attaching fading effect from react-awesome-reveal library

### Carousel component

1. Importing and creating carousel component from react-slick
2. Applying external style
3. Importing images and placing them in divs with inline styles

### TimeTill component

1. Importing and creating slider component from react-awesome-reveal
2. Creating layout for timer
3. Composing logic of timer calculation
4. Using useCallback hook for performance optimization

### Highlights component

1. Rendering description and discount components
2. Descrption component:
   2.1. Some dummy data
   2.2. Applying style on the data
3. Discount component:
   3.1. Fade and Slide components from react-awesome-reveal
   3.2. Configuring recurring discount value till end value
   3.3. Importing MyButton comonent and passing props as children

### MyButton component

1. Importing Button element from material-ui
2. Configuring button that can receive props for reusibility purpose
3. Applyig conditional statement on size and style

### Pricing component

1. Importing MyButton component from utils
2. Importing Zoom from react-awesome-reveal
3. Creating object of delay, price,desc,linkto,position arrays
4. Looping through those created object of arrays and rendering them with applying inline style

### Location component

1. Location location on digital map app(google/yandex/etc.)
2. Importing iframe element, tweaking width and height
3. Implementing some style
