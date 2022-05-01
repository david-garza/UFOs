# Overview of Project

Used javascript to build and interactive searchable database that allows the public to learn about UFO sightings. A user can create a query combination of date, city, state, country, and / or UFO shape and return UFO sightings that meet those parameters. This database my allow us to finally answer the question, are we alone?

The interactive website is deployed [here](https://david-garza.github.io/UFOs/).

# Results

When the website is first visited, it will display all the table data and the filters will have greyed out place holders showing example entries.

![unfiltered table](/resources/base.PNG)

A user will use the filter panel to filter the data table on the right.

![filter field](/resources/filter_panel.PNG)

The user can filter by one or all filters to reduce the number of entries on the right. The user enters query then can either press enter, click on the next filter, or anywhere on the webpage to apply the filter to the data.

The following search applied the date 1/8/2010 to the table and returned 4 entries.

![one filter](/resources/one_filter.PNG)

The user can apply both date (1/8/2010) and further filter the data by setting state to tx. In the example, tx is added to the state filter and applied. This now returns only two entries for 1/8/2010 in the state of Texas.

![tow filter](/resources/two_filter.PNG)

To reset the page, the user can either refresh or click "UFO Sightings" link at the top of the page.

![reset](/resources/reset.PNG)

# Summary

## Drawbacks

1. The filters equal to instead of greater or less then for dates. A user might want to look at UFO sightings over a period of time in an area.
2. The filter values are case sensitive. For example, TX for Texas will return no sightings. A user will have to know to use lower case.

## Improvements / Further development

1. Modify the date filter to allow searches by date ranges. Greater than, less, than, or between dates.
2. Remove the case sensitivity so Houston and houston are searchable.
3. Provide a drop down of possivle values instead of letting the user guess. For example, it took trial and error to determine that the database only has sightings for the us. No other country data is in the database.