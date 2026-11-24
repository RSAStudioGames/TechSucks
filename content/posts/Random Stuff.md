Uhhhh idk, this is for a bunch of stuff I've found so far that I haven't found a place to categorize them into yet. Probably gonna be a place for all this stuff in the future as I add more to the site, but for now here it is

## Removing minor annoyances

![](images/dtnsl7oicbaefxpxqbu88yvmeu1g29iwu8ck.png)

I hate that little thing showing up on youtube thumbnails on my home page. It's so easy to click on by accident if you're opening a few pages in new tabs to queue up your watch list when you wanna waste time. </br>
Here's how I got rid of it: </br>
- Step 1: Get [https://ublockorigin.com/](https://ublockorigin.com/) to block ads (https://adnauseam.io/ is a better option IMO because it poisons advertiser data collection on you) </br>

- Step 2: Go to the settings and into the "My Filters" tab and add the following: </br>
`www.youtube.com##div[class^='ytInlinePlayerControlsTopLeftControls']` </br>
`www.youtube.com##.ytm-paid-content-overlay-renderer` </br>
`www.youtube.com##a[href*="https://support.google.com/youtube?p=ppp"]` </br>
`www.youtube.com##.ytp-paid-content-overlay`

These four lines will completely remove that little pop-up garbage from youtube.
