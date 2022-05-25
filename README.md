# Etch-A-Sketch

1. Understanding
2. Planning
3. Pseudocode
4. Divide and conquer

## Understanding
I need an interface. That interface requires a square in the middle with 16x16 grid of square divs.

With these divs, whenever I hover while 'pressing' my touchpad, it should set the background-color to the value that I have set the color to.

it should be smooth and feel as though im drawing or coloring.

I need an options interface. Preferably on either side of the main square. It requires a button to set the color of the bg-color.

It also needs to have a few options such as the square grid size? Perhaps a scroll to increase or decrease from 16x16. It also needs a clear button to reset the bg-color to white.

## Planning

Frontend (try to make it a mobile-first design)
1. Setup main container that will center all items in the center of the view width
2. In this container, you will have a div.boxesContainer. This will be your container for holding all the 16x16 boxes.
3. The user should be able to hover onto these boxes and upon press, the bg-color would change.
4. There should be another div.settingsBar. This would be the settings area, there should a button to clear and reset bg-color to white. 
5. There should also have scroll for users to increase or decrease the grid size. Default should be 16x16.
6. There should be a button to trigger the color input settings. Upon clicking the colors, it should update the value of bg-color.

## Pseudocode
 HTML
 1. Setup html, link required styles and script DONE
 2. Have a div.main - this would be your main container. set it to flex and center everything. The vw should be 100%, then set paddings accordingly. DONE
 3. Have another div.container. this will hold two divs, one for the settingsBar and the boxesContainer DONE
 4. Have a another div.boxesContainer. Set the width and height - this will hold all of your small boxes. In your JS file, it should target this as the parent div to append all the boxes to fill up this boxesContainer.DONE
 4. Another div.settingsBar. this one to hold the buttons for changing colors, rainbow mode, eraser and clearing the boxes completely, and resizing DONE
 
 JS
1. declare all the elements from the document.
2. declare all the initial values such as input_bg_color, grid-size?, .....
3. Create element div.box and use grid to fill the boxesContainer div.???? Not fully sure about this part.
    You can set the grid-template-column and row settings according to the size, then just apend size x size number of div.box to the boxesContainer DONE
4. it should have a width and height starting with 16px and 16px. it should have an initial bg-color of white. It should have a border setting set to intial none. DONE
5. Set event listeners - hover while press.

DOM Manipulation JS functions
1. function to fill the bg-color of the boxes upon pressing and hovering. DONE
2. function to reset boxes to clear DONE
3. function to set color to white (eraser mode) DONE
4. function to set the input color DONE
5. function to change border settings
6. function to edit the grid-template-row and column, if its 16 then its 16 for row and column DONE
7. function to append correct number of boxes, if user inputs 16, then append 16*16 boxes. DONE
