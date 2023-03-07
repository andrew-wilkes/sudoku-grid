# Dev Log

## Initial setup
2023-03-06

I scaffolded a VueJS project and edited the components to get to a starting point for the project.

Also I went ahead and started to edit the template code and styles to create the Cell and Grid components.

To get a deep understabding of modern CSS using the Grid and Flex Box, I studied [Web.dev Learn CSS](https://web.dev/learn/css) which is a great tutorial site.

I considered all of the presentation needs that I wanted to be able to produce in a grid cell such as:

* One big number
* A pair or one candidate number
* A grid of 9 candidate numbers
* A sum value for a Killer Sudoku group
* Coloring the elements

At this stage, all of these requirements have been realized, and I can move onto thinking about how to control the cell and implement the reactive data for the state of the puzzle.

Also, I need to initialze GIT and create a repository for the code.

## State considerations
2023-03-07

There is a lot of state data to be represented such as the numbers on the grid and color highlighting. This data may be updated by the user or the solver. Also, the cells on the grid need to react to changes in the data.

Let's say that any number may have a color and candidate numbers, a background color. The colors could be defined in a palette of colors. So a color index could point to a color.

Main objects to store state data:

* numbers
* config

### numbers

This stores lists of:

* numbers in the grid
* number candidates for each grid cell
* solution numbers
* number groups to apply colors to
* sum number values (for Killer Sudoku)

Numbers are encoded as n (1..9) for Entered numbers and n + 10 (11..19) for Given numbers.

Number candidates will be represented as a string of digits for each cell.

Logic will be used to apply colors to numbers based on these factors:

* the number is the selected number
* the number is a peer of the selected number
* the number is a Given number
* the number is correct
* the number is incorrect
* the number is in a set of particular numbers

Logic will be used to apply colors to cell backgrounds based on these factors:

* the cell is selected
* the cell is a peer of the selected cell
* the cell is in a particular group of cells

### config

This stores:

* the color palette
* the selected cell data
* options that affect how the numbers are displayed
* cell group data
