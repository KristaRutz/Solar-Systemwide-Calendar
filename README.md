# Solar System Calendar Converter

#### An application to convert between planetary years, hosted on [GitHub Pages](https://kristarutz.github.io/Solar-Systemwide-Calendar/), where a user can calculate their age on all of the planets in our solar system.


### _By **Krista Rutz**. Last updated February 7, 2020_

## Description

This JavaScript application allows the user to convert time in Earth years to years on other planets, based on the speed of each planet's orbit of the sun in Earth years.

## Installation / Set-up

This app is ready to run at this url:
https://kristarutz.github.io/Solar-Systemwide-Calendar/

You can also download the repository to run this program locally.

**Download ZIP:**

* Select "Download" on the [GitHub Repository](https://github.com/KristaRutz/Solar-Systemwide-Calendar.git) site 
* Download ZIP: Open the ZIP download and extract files. The new folder will be created as "Solar-Systemwide-Calendar"
* In this folder, select the index.html document.
* Choose "Open With" > Google Chrome or another browser of your choice.
* The website is now ready to use!

**Clone:**

* Clone from command line: ```git clone https://github.com/KristaRutz/Solar-Systemwide-Calendar.git```
* Install packages from command line:
  * ```npm install```
  * ```npm run build```
  * ```npm run start```
* Upon success, this will create a local server for the site which will reflect the current state of the program and accept user modifications.

## Technologies Used

* **JavaScript** and **jQuery**
* **Node.js** Package Manager
  * **webpack** bundler
  * **Jest** testing
  * **ESLint**
* Custom **CSS** and responsive design using Bootstrap framework
* **HTML**

## Specifications
<details>
  <summary>Expand specs for this project</summary>

| Spec | Example Input | Expected Output |
| :-------------     | :------------- | :------------- |
| User begins with an empty form | "Example" | "Example" |
| When user clicks on cart, the contents of the cart are displayed | click <kbd>View cart</kbd>| "nothing in the cart" message, <kbd>new</kbd> button |
| User selects "new" ice cream creation | click <kbd>new</kbd> | new creation form appears |
| User selects "Kid's Scoop" option | Size: <kbd>Kid's</kbd> | Price updates to $2.50 but user cannot add to cart |
| User adds to cart | click <kbd>Add to cart</kbd> | Cart size increases to 1, form is reset, and <kbd>Add another creation</kbd> button appears |


</details>

## Known Bugs

No known bugs.

## Support and contact details

Please contact me if you run into any issues or have questions, ideas or concerns.  I can be contacted at <krista.rutz@pomona.edu>. Feel free to create a pull request for updates - _contributions to the code are encouraged!_

## Usage and Licensing

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Krista Rutz_**

<details>
  <summary>View license details</summary>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
</details>