# CD_MEAN_QuotingDojo
Troy Center troycenter1@gmail.com July 2017
Coding Dojo MEAN stack, mongodb, Quoting Dojo assignment. 

<h3>Assignment: Quoting Dojo</h3>
In this assignment, you are going to build a simple app that allows users to add quotes to a database and display them on a separate page.

The <strong>'add my quote'</strong> button should add the user's quote to the database, but the 'skip to quotes' button should take the user directly to the main page.  

Use the following URLs for your project:

<ul>
<li><strong>GET ' / '</strong>  for the screen on the left.</li>
<li><strong>POST '/quotes'</strong>  for the method of the form to make a new quote.</li>
<li><strong>GET '/quotes'</strong>  for the screen on the right (where all the quotes are rendered.</li>
</ul>

The mock-up below says to use $_SESSION for this exercise. Since we're using a framework, we don't have to do this with session. Instead, when you create a new quote if there are errors in the .save() method, you should render a view and pass errors to that view instead of redirecting. That way we won't lose our data and thereby not need to use a session variable!

<img src="http://s3.amazonaws.com/General_V88/boomyeah/company_209/chapter_3720/handouts/chapter3720_6362_mockup-quotingdojo.png" alt="Coding Dojo Assignment Image">
