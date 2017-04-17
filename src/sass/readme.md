
## BEM

Informations

## ITCSS Structure

### SETTINGS

*  Settings store all variables, config switches, etc.
*  Split up into logical sections, the smaller and simpler the better.


### TOOLS

*  Tools store all programic Sass functionality.
*  If your tooling is simplistic enough, you can do something like:
*  tools.mixins
*  If your tooling is more complex you can split it up like:
*  tools.grid
*  tools.typography
*  etc.

### GENERIC

*  Generic rules are project-agnostic.
*  These can be copied from any project to the next

### ELEMENTS / BASE

*  Elements are rules for classless HTML tags.
*  There can exist no classes at this layer, only further into our triangle.

### OBJECTS

*  Objects are "formless", in other words invisible to the user, no cosmetics
*  Eg. wrappers, grid systems, etc.
*  This is the first layer of classes and should be agnostically named
*  Eg. list-inline, ui-list, etc.

### COMPONENTS

*  Components are the stuff of UI. Eg. buttons, special titles, etc.
*  These get much more explicitly named: eg. products-list, etc.

### UTILITIES

* Utilities are overrides, helpers & other utilities. They should only affect
* one piece of DOM at a time and usually carry !important
