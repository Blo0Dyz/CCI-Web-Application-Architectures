### HTML Structure




#### Lists

```<nav>``` Create a unordered list <br>
```<a>``` Holds a link <br>

#
#### Unordered lists

```<ul>``` Defines a unordered bullet list, use with ``` <li>``` to create a unoerdered list.<br>
``` <li> ``` Create a line in list.

##### Examples:

A simple list with bullets
```
<ul style="list-style-type:circle">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

A bullet list inside another list

```
<ul>
  <li>Coffe</li>
  <li>Tea
    <ul>
      <li>Green Tea</li>
      <li>Black Tea</li>
    </ul>
  </li>
  <li>Macha</li>
</ul>
```

Complex list

```
<ul>
  <li>Coffe</li>
  <li>Tea
    <ul>
      <li>Green Tea</li>
      <li>Black Tea
        <ul>
          <li>China</li>
          <li>Africa</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Macha</li>
</ul>
```
#
#### CSS Sources

```list-style:``` Use to modify lists style, to remove bullets or anything else, use <strong>none</strong> value.

``` text-decoration: ``` Use to modify text deco, to remove links ```<a>``` underline, use value <strong>none</strong>.