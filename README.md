This little snippet of code allows you to embed YouTube videos into your repsonsive site and have them scale to your site (no more fixed widths!).

REQUIRED:
You need to have jquery installed on your site for this to work.

HOW TO USE:
1. Find the Youtube Video you want to use on your site.
2. Note the dimensions that YouTube gives you in the embed code (the width="xxx" and height="xxx").
3. Copy and paste this code into your site.
4. Change the code.  Where it says:

	width="xxx" height="xxx"
	
Change to:
	
	class="video" width="100%" data-width="xxx" data-height="yyy"
	
	where xxx is the width and yyy is the height from the dimensions you noted in step 2.
	
5. add the youtube-responsive jquery into your site.
6. Set the two variables, pause and breakbpoint.
7. Save the page and it should work correctly.