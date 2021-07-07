# Steps to complete

1. Display a static date in the required format
2. Make the date dynamic
    - Give the date element an id
    - Create `main.js`
    - link `main.js` to `index.html`
    - Create a map of integers to days of the week
    - Create a map of integers to months of the year
    - Use JavaScript to generate the current date
    - Use the current date object to get the formatted day of the week, month of the year, date, and year
    - Insert the current date into the DOM via the date id

3. Display a static time in the required format
    - Use an `h2` with `span`'s for the seconds, minutes, and hours
4. Display the time in seconds dynamically
    - Create some kind of tick function to update the time every second
    - Give the `span` for the seconds an id of `seconds`
    - Get the current seconds from the curent time
    - Insert the current seconds into the `seconds` element
5. Display the time in minutes dynamically
    - Give the `span` for the seconds an id of `minute`
    - Get the current seconds from the curent time
    - Insert the current seconds into the `minute` element
6. Display the time in hours dynamically
    - Give the `span` for the seconds an id of `hour`
    - Get the current seconds from the curent time
    - Insert the current seconds into the `hour` element
7. Display the meridian dynamically
    - Give the `span` for the seconds an id of `meridian`
    - Get the current seconds from the curent time
    - Insert the current seconds into the `meridian` element
8. Styling
    - I don't have a plan for this . . . ?

## Things I didn't plan for
- Getting the ordinal indicator for the day.
- Displaying the meridian indicator for the time of day.

## Googled
`mdn javascript time`  
`working with javascript time`  
`calculate day superscript` 
`javascript setInterval`   

## Resources
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates  
https://stackoverflow.com/questions/4011075/how-do-you-format-the-day-of-the-month-to-say-11th-21st-or-23rd-ordinal  
https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/  