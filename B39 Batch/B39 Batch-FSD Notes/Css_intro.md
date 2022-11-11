### Types of color format
 
1. name
2. RGB - Red Green Blue
3. HSL - Hue Saturation Lightness - preffered
   1. 0 < Hue < 360 deg
   2. 0 < Saturation < 100% - pop
   3. (black) 0 < Lightness < 100% (white)
4. HEX - Hexadecimal - old
   1. usual - 6 letters
   2. alpha - 8 letters
5. HWBA - Hue White Blackness Alpha - trending
   1. Hue
   2. White - x-axis
   3. Blackness - y-axis
 
### Color formats
 
1. Hold shift + click -> to change color formats
2. Click -> Color tool
 
### CSS selector
 
1. element/tag
2. class - dot must added in css `.` - preffer
3. id - `#`
   1. must be unique in the document
 
### Specificity
 
Which style gets applied when there is clash of styles
 
> !important (UN) > inline style (PM) > #id (CM) > .class (dad) > element (you)
 

### Types of color format
 
1. name
2. RGB - Red Green Blue
3. HSL - Hue Saturation Lightness - preffered
   1. 0 < Hue < 360 deg
   2. 0 < Saturation < 100% - pop
   3. (black) 0 < Lightness < 100% (white)
4. HEX - Hexadecimal - old
   1. usual - 6 letters
   2. alpha - 8 letters
5. HWBA - Hue White Blackness Alpha - trending
   1. Hue
   2. White - x-axis
   3. Blackness - y-axis
 
### Color formats
 
1. Hold shift + click -> to change color formats
2. Click -> Color too

### Topics
 
1. Parent Inherit - ✅
2. Task - ✅
3. Box model - ✅
4. Pseudo classes - ✅
5. Flex
6. Grid
 
### `img`
 
1. Square - height === width
2. Circle - `border-radius: 50%`
3. `object-fit`
   1. cover - zoom in
   2. contain - zoom out
4. aspect-ratio
   1. height === width - `1/1`
   2. Youtube - 16/9
   3. Youtube - 21/9
   4. Old tv - 4/3
 
### Box model
 
1. margin - gap between elements/ pushing other elements
2. border - Its the divide between margin & padding
3. padding -gap between border & content
4. content - decided by its original height & width
 
### span
 
1. inline element
2. highlighting text - color, underline, bold, etc
 
### inline vs block vs inline-block
 
1. inline - height & width will not be respected
2. block - height & width will be respected
3. inline-block
   1. height & width will be respected
   2. Adjust with other elements
 
### Font Types
 
1. Serif - edges
   1. Trust-worthy - Bank
   2. Traditional
   3. Serious
2. San-serif - without edges
   1. Fun
   2. Trending
   3. Casual
3. Handwriting
4. Google fonts
   1. All free
   2. link must be added in head
   3. `font-family: Roboto, "Poppins", sans-serif;`
      1. multiple fonts is given as fallback
 

### Topics
 
1. Parent Inherit - ✅
2. Task - ✅
3. Box model - ✅
4. Pseudo classes - ✅
5. Flex
6. Grid
 
### `img`
 
1. Square - height === width
2. Circle - `border-radius: 50%`
3. `object-fit`
   1. cover - zoom in
   2. contain - zoom out
4. aspect-ratio
   1. height === width - `1/1`
   2. Youtube - 16/9
   3. Youtube - 21/9
   4. Old tv - 4/3


   ### Topics
 
1.  Pseudo classes - ✅
2.  Beast task - ✅
3.  overflow - ✅
4.  flex - ✅
5.  icons - ✅
6.  box shadow - ✅
7.  Measurements - CSS units
 
### Additional session
 
1. Grid
2. Position
3. Media query
 
### overflow
 
1. visible - overflowed content would be visible
2. scroll - both sides scroll-bar will be visible
3. auto - scroll-bar only in required axis
4. hidden - overflowed content would be cut-off
 
### flex
 
1. Layout
2. Distribute the space
3. References
   1. https://flexboxfroggy.com/
   2. https://www.flexboxgame.com/
   3. https://ragavkumarv.com/flex/
 
### icons
 
1. SVG - preferred format for icons
 
   1. Doesnot loose quality when zoomed in
   2. Light weight
 
2. References
   1. https://cdnjs.com/libraries/font-awesome
   2. https://fontawesome.com/icons
 
### box shadow
 
1. Highlighting content
2. eg: neon sites
3. https://cssgenerator.org/box-shadow-css-generator.html
 

### Topics
 
1.  Pseudo classes - ✅
2.  Beast task - ✅
3.  overflow - ✅
4.  flex - ✅
5.  icons - ✅
6.  box shadow - ✅
7.  Measurements - CSS units
 
### Additional session
 
1. Grid
2. Position
3. Media query
 
### overflow
 
1. visible - overflowed content would be visible
2. scroll - both sides scroll-bar will be visible
3. auto - scroll-bar only in required axis


### Topics
 
1. pseudo element selectors - ✅
2. Combinators - ✅
3. Position - ✅
4. Grid
5. Media query
 
### pseudo element
 
pseudo element vs pseudo class (:hover, :active) - fake element | fake class (on user action)
 
1. nth-child
   1. odd even
   2. n + 3
   3. nth-child(2)
2. first-child
3. last-child
4. after & before - decoration
 
### Combinators
 
Relationship
 
General syntax
 
`<selector1> <combinator> <selector2>`
 
selector1 & selector2 - id, class, element
 
1. Child `>`
2. Ancestor `<space>`
3. Next sibling `+`
4. Next all siblings `~`
 
### Position
 
top, left, right, bottom - to move the element
 
1. static - default - Usual document flow
2. relative
   1. ninja - no-one realizes he has moved
   2. relative starting position
   3. There will be no gap
3. absolute
   1. Bad thief - everyone notices he has moved
   2. absolute & relative - pair
   3. If there is no nearest `relative` then he starts from body
   4. There will be no gap
4. fixed - float - menu
5. sticky
   1. hybrid - static & fixed


### Topics
 
1. Grid - ✅
2. Css Units - ✅
3. Background - ✅
4. Media query - ✅
 
### Grid
 
1. 1fr - ratio
2. 2D layouts
3. Overlap layouts
4. Multiple rows & Multiple columns layouts
 
### Css Units
 
1. px
2. %
   1. 1% - 1% of parent container
3. fr
4. deg
5. vh, vw
   1. vh - view port height - 1vh - 1% of screen height
   2. vw - view port width - 1vw - 1% of screen width
6. rem
   1. 1rem - 16px
 
### Additional Units
 
1. em
2. ch
3. pt
 
### Media query
 
1. Responsive website - Adaptability
2. Mobile first approach
   1. Develop for mobile first
   