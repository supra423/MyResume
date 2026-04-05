# Entry #1
Tool Used: DeepSeek
Prompt (copy-paste exactly): 

I currently made a video element in my html file5

```html
<video src="assets/sizeof.mp4" controls muted id="projectVideo" type='video/mp4'></video>
```

why can't I seek it?

AI Output (summary or screenshot reference):


This is a frustrating issue, but don't worry—it's usually fixable. The seeking functionality in HTML5 video can be broken by a few common culprits, ranging from your video file itself to conflicts with your browser's settings.

Here are the most likely reasons and how to fix them.

The Most Likely Culprit: Your Video File
The most common reason a video won't seek is how it was encoded. Think of it like a book: a "seekable" video has a table of contents (index) at the beginning or end. Without it, the player has to download the whole file from the start to find a specific chapter.

Missing Index (Fast Start): This is the #1 cause. If the video's metadata (the "table of contents") is at the end of the file, the browser can't jump to a later point without downloading everything that comes before it first.

Large Keyframe Interval: Keyframes are full snapshots of the video. If your video only has one every 5 seconds, you can only seek to those specific 5-second marks. If the interval is huge (e.g., 10 seconds), seeking feels clunky or broken .

The Solution: The best fix is to re-encode your video using a tool like FFmpeg to ensure it's web-optimized. Run this command in your terminal:

```bash
ffmpeg -i your_video.mp4 -c copy -movflags +faststart output.mp4
```
How I used/modified it in my project:
--------------------------------------------
The problem was still present even after doing the command to re-encode the video.
So I decided to ignore it since it seems to be working fine when the website is deployed
on github pages, I only had the problem when I was testing it on my local server.

# Entry #2
Tool Used: DeepSeek
Prompt (copy-paste exactly): 

how do i make \<nav> follow as you scroll?
AI Output (summary or screenshot reference):

To make a <nav> follow as you scroll, you need to use CSS positioning. Here are the most common approaches:

Simplest Solution: position: sticky
This is the modern, pure-CSS way that requires no JavaScript:

```css
nav {
    position: sticky;
    top: 0;
    background: white;
    z-index: 1000;
}
```
How it works: The nav stays in normal flow until you scroll past it, then it "sticks" to the top.

How I used/modified it in my project:
--------------------------------------------
I used the position: sticky method to make my navigation bar follow as I scroll.
However, I encountered some issues with it not working as expected.

# Entry #3

Tool Used: DeepSeek

Prompt (copy-paste exactly):

why is it position:sticky not working? Are there factors affecting it?

AI Output (summary or screenshot reference):

Missing top Property
Sticky elements need at least one positioning offset:

```css
/* ❌ Won't work - missing position offset */
nav {
    position: sticky;
}

/* ✅ Works - has top value */
nav {
    position: sticky;
    top: 0;
}
```
The top, bottom, left, or right values tell the browser where to stick the element.

How I used/modified it in my project:
--------------------------------------------
I then added the mission top: 0; property to my nav element, and it started working as expected.
