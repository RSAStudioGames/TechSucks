+++
title = "Adventure Gaming With LLMs"
date = "2025-12-23T15:07:24Z"
author = "RSA"
cover = ""
tags = ["AI", "Gaming"]
keywords = ["Gaming", "AI"]
description = "Backup of a rentry. Using LLMs for TTRPG-styled adventure gaming."
showFullContent = false
readingTime = false
hideComments = false
+++

Ripped from: https://rentry.co/llmadventurersguide
Just keeping here as a mirror because I liked the guide. I didn't write this. Props to whoever did.

# Proper Adventure Gaming With LLMs
<p style="text-align:center">
A huge, brief guide on how I made exactly what I want, and you can, too.
By that, I mean you can reproduce exactly what I want.
You're on your own if you want to make exactly what you want. Sorry.
</p>

*Note: This guide is exclusively for people who have a lot of memory available. Whether you run on a CPU with lots of RAM, a 4090 (or better), or a hosted service/api - the key to doing this the right way is context, context, context. This guide thrives on running any model you can run with an **absolute bare minimum of 30k context**. More is *always* better.*

## Preface
*Preface /ˈprɛf.əs/ (noun): The tragically overlooked introduction to a document, painstakingly written to explain its purpose, significance, and backstory, which nobody is going to read because you've already scrolled down to get to the good stuff. Often mistaken for a speed bump on the way to the *actual* content.*

Like many of you, I got my start with this method of entertaining myself on slow days through the introduction and my subsequent discovery of [Latitude's AI Dungeon.](https://latitude.io/) Like many of you, I stopped using it because of... reasons. We all have our own. But for what it's worth, they made mistakes, acknowledged their mistakes, and seem to be trying to regain trust in earnest. I applaud that. In fact, if it weren't for their efforts to do that, I wouldn't be writing this right now. However, I'm not sure that I'll ever go back to hosted services after turning to locally hosted LLMs and tools like [SillyTavern](https://github.com/SillyTavern/SillyTavern), [oobabooga's textgenwebui](https://github.com/oobabooga/text-generation-webui), [koboldcpp](https://github.com/LostRuins/koboldcpp)... and many others. Some of which I've made quiet little semi-anonymous contributions to over the years.

Even though I went to local hosting, it wasn't quite the fixation the original AI Dungeon was for me. There was some secret sauce up in that thang that just handled a funky narrative adventure just right. Weird shit would happen. That guy in the black cloak would show up out of nowhere. My character's impressive penis would jump out of his frock and batter the enemies of the kingdom relentlessly before exploding in a sea of cake-batter flavored... Well, you get the idea. It got weird. And it was right about the time of that latter experience that their version of what we'd now call Lorebooks came about, and I realized they could be handy for smoothing out an experience.

And then things happened, and I deleted all of my content and my account and never went back. C'est la vie.

But I still wanted that adventure experience, and I chased it for years. *YEARS* I tell you. It's mostly revolved around trying to get SillyTavern's "character card" system to believe it's a dynamic and interesting Game Master instead of a mewling anime cat girl, and I'll be honest - I've been fairly successful at times doing just that. SillyTavern's Lorebooks facilitated some pretty impressive shenanigans, and with high context models, better system and instruct prompting, more parameters to tinker with, and token bans, I've been able to occasionally have some neat experiences. But nothing quite got me to the same point as AI Dungeon did... There was always, I felt, something missing. Whatever the hell Latitude's *secret sauce* was.

And so, we came back around to where we started: Latitude. About a week ago (maybe it's been longer, who knows, I'm an unemployed webdev), Latitude dropped their [Wayfarer-12B model](https://huggingface.co/LatitudeGames/Wayfarer-12B) on HF. I read through the details. I felt a little wellspring of hope. I decided, after a bit of time not interacting much with LLMs at all, that I'd get back to trying to recreate the magic - this time with something straight from the initial source of my interest in LLM-based gaming.

And what do you know: All it took for me to find that missing ingredient, that *secret sauce* I felt was lacking, was a model released by the *secret sauce chefs* themselves. And here we are.

### TL;DR

In case you just want to know what this guide is, here's TL;DR: This is the lengthy, comprehensive, exhaustive necronomicon of the culmination of years of trying to reproduce coherent text-based adventure style gaming on my local machine. If you're super lazy and don't care about the configuration and are okay with maybe getting a not-so-great experience, I guess I can't stop you from just mindlessly copy/pasting everything I'm going to provide, but I'd encourage you to go through at least the Adventure Setup part if you'd like to customize things. Don't come whining to me if you don't read anything, try to change a bunch of stuff, convert everything to p-lists to cram it in to the 4k context micro LLM your 980 Ti can run, etc., and it doesn't work like I say it works. I can't and won't help. Sorry.

### Disclaimer
This is how *I, personally* have things set up to achieve the style of text-based adventure gaming that *I, personally* enjoy. You're obviously free to tinker with things to your heart's content, but I make no guarantees that this is what *you* will personally enjoy. If you want to know what I'm in to and see if it vibes, go ahead and peek the DEMO section first.

## The Setup
You probably know how to do all this stuff, but for the sake of argument, let's pretend you don't. If you do, skip ahead to Creating an Adventure. This isn't a comprehensive guide, but should be fine for most people who may not have messed with this stuff before and want to try it out. If you have issues, there's plenty of help out there.

### Backend: text-generation-webui

#### Step 1: Acquire your Backend Client
*For the experienced: We're using text-gen-webui and SillyTavern, and assuming you're running locally. You can skip the initial setup stuff if you have everything running and have the Wayfarer model (or your chosen, inferior alternative, you heathen). You're on your own if you want to use anything else.*

We're using text-generation-webui for our backend setup. It's probably fine if you use koboldcpp or some hosted/api solution, so long as you can meet the context minimum for this.

- Back End: [oobabooga's textgenwebui](https://github.com/oobabooga/text-generation-webui)

I won't clutter this up any more than it already is by telling you how to install these text-gen-webui, because by now, there are much more comprehensive guides - usually in the readmes. But once you have these two clients up and running, you may proceed.

The main things you want to make sure of is that you run text-generation-webui with the `--api` flag (or tick it and save it in the options and restart if you're lazy) so that SillyTavern can connect to it.

Helpful Note: I do LLM stuff in a browser totally independent of my main web browsing choice, just for convenience. I use Brave, and I cut it off from all internet access so whatever API it probably phones home to in the background doesn't get to sell my adventures with catgirls to OpenAI. But you can handle this however you want.

#### Step 2: Acquire your Model(s)
*Short version: I'm using [Wayfarer-12B model](https://huggingface.co/LatitudeGames/Wayfarer-12B) almost exclusively for this guide, and for this style of gameplay*

1. The Model: [Wayfarer-12B](https://huggingface.co/LatitudeGames/Wayfarer-12B)
2. The GGUF Model:  [Wayfarer-12B-GGUF](https://huggingface.co/LatitudeGames/Wayfarer-12B-GGUF)

You'll need both these links, probably; I run `llamacpp_HF` and I suggest you do, too.

You could probably get this kind of thing running, with the style of character cards and prompting, with just about any model out there that you can load in to your GPU/host with an adequate amount of context, and believe me, I've tried to do the same. But I believe the unique way Wayfarer was that aforementioned *secret sauce* that I've been looking for, for quite a while.

Download whatever quant you want/can fit alongside a boatload of context. You'll want **a bare minimum of 30k context** so keep that in mind when deciding on a quant (or just running it raw).

**You will see me using Wayfarer-12B-Q8_0 for the rest of this guide. Your results may vary if you use lower quants, but it should be... fine.**

#### Step 2.5: llama_HF-ify the Model (optional*)

I've typically done this out of habit in the past. It works well enough, so I just didn't do anything different here than I've done for other models. It's pretty easy:

1. Download your chosen GGUF in to your `/text-gen-webui/models` folder.
2. Start text-gen-webui.
3. Go to the `llama_hf creator` tab on the right hand side of the Model page.
4. Select `Wayfarer-12b-Q8_0` (or whatever quant you grabbed).
5. Paste `LatitudeGames/Wayfarer-12B` in to the URL field.
6. Click `Submit`
7. Go heat up some Hot Pockets.
8. You now have a llama_HF model.

(*\*probably*)

#### Step 3: Load the Model
From there, you'll need to tick a few boxes. If you're running locally on a 4090 or simialr, the setup should look exactly like this:

![text-gen-webui settings](https://i.imgur.com/KgBRKs3.png)

This is assuming you're running on a local GPU, want 81k of context, 1024 n_batch, and have the Q8_0 quant. You can change those parameters based on your preference/hardware. But again... **bare minimum of 30k context**.

Don't forget to SAVE SETTINGS so you don't have to fiddle with this every time you load the model.

From there, hit the magic button. For the unaware, the magic button is the one that says LOAD. If you get some kind of error, you'll have to figure that out on your own.

### Front-End: SillyTavern
You can try to use other front-ends for this, but be warned, it probably won't work or won't work right. I make extensive use of lorebooks, author's notes, and other features that SillyTavern has and your choice of front-end may not. By all means, try it if you really hate ST, but you're on your own if you do.

#### Step 1: Acquire SillyTavern
As before, I don't need to tell you how to install this - the documentation covers it well.

- [SillyTavern](https://github.com/SillyTavern/SillyTavern)

#### Step 2: Start SillyTavern
Configure what you want (as per the ReadMe). I might suggest not running it via `UpdateAndStart.bat` so you don't get any weird, unexpected new stuff, and maybe enabling external connections so you can, say, play around with it on your phone while you poop, but you do you. If you do open it up to external connections, USE A WHITELIST and ASSIGN A STATIC IP TO YOUR DEVICE(S). Otherwise if your grandma on the wifi happens to be a pro hacker, she's going to find your shit and read it all.

Other than that, you literally just start SillyTavern.

#### Step 3: Initial Configuration of SillyTavern
You feel that? We're getting close. You're in the front-end client and a model is loaded. You could technically just go to the prompt on the main homepage and type something and it'll respond. Go on, try it. I bet you didn't know you could do that.

But before we get to creating epic adventures, we'll want to configure and set up a few things. Most of this is personalization. You can fuss with it how you will. Default settings in a lot of cases are fine, but the main thing is to quickly ensure it's connecting to text-gen-webui or whatever you're using. As of the writing of this, it has `AI Horde` selected by default when you first load it up.

Default Settings:
![SillyTavern Default API Settings](https://i.imgur.com/SFh8AQx.png)

You don't want that (or maybe you do, but good luck). You'll want to set up SillyTavern to connect to text-gen-webui.

1. Change API to `Text Completion` and Verify API Type is `Text Generation WebUI (oobabooga)` - it should default to this.
2. Enter ServerURL; It is `http://127.0.0.1:5000` for me, but could be different for you. Check in text-gen-webui's settings to find out for sure.
3. Click `Connect` - it should show your chosen model (in this case, `Wayfarer-12B-Q8_0-HF`
4. Optionally check `Auto-connect to Last Server` if you want to.

And that should do it. Go ahead, chat with the default homepage. It talks back.
![Chatting with the default Assistant](https://i.imgur.com/5lNJV5G.png)

### Setup Conclusion
Thar be lots of settings in both text-gen-webui and sillytavern, and you can fiddle with them for hours. Check out the Mobile UI, or different color themes. Whatever! But you're not here for a mini-ST guide. You're here for adventure. Or maybe a bit of lazy slice-of-life. I won't judge. If you were one of the four people that read my comment on /r/SillyTavern, some of this has changed, so it's worthwhile going through it again.

## The Framework
There's lots of generic stuff we can set up to streamline the process and run the games. We'll knock this out - it will provide general guidelines for how an adventure game should run so that you don't have to retread that ground in later steps.

### Templates and System Prompts
The Context and Instruct templates are largely unchanged from defaults present with SillyTavern, with one minor exception. However, the style I've adopted for System Prompts may not be exactly what you're used to. Read on for more.

#### Context and Instruct Templates
I started with the `Dreamgen Role-Play V1 ChatML` templates that come by default with a fresh SillyTavern install here, for both Context and Instruct templates - Wayfarer is trained on ChatML format, so this is a good base. The only change I made is to the Context Template:

!!! info Context Template
	<|im_start|>system
	{{#if system}}{{system}}
	{{/if}}## Overall plot description:
	
	{{#if scenario}}{{scenario}}{{else}}You are the game master of a text-based RPG called {{char}}. You are running the game for the user, who plays {{user}} as their character.{{/if}}{{#if wiBefore}}
	
	{{wiBefore}}{{/if}}
	\## Characters:
	\### {{char}}
	{{#if description}}{{description}}
	{{/if}}{{#if personality}}{{personality}}
	{{/if}}### {{user}}
	{{#if persona}}{{persona}}{{else}}{{user}} is the protagonist of the role-play.{{/if}}{{#if wiAfter}}
	{{wiAfter}}{{/if}}{{#if mesExamples}}
	{{mesExamples}}{{/if}}


The only change hers is the default Scenario definition. Since I usually don't fill in scenarios (or anything in the advanced character description for that matter - more on that later), this will essentially set up the base instructions for the game. This is the first time you'll see something that will soon become a pattern: **I don't tell the LLM it's running a game for {{user}}, I tell the LLM it's running a game for the player, who plays {{user}}.** I feel like this better emphasizes that {{user}}, the character, is controlled by the human.

!!! Important!
	The Instruct Template is off by default, which means Instruct is off by default. That's bad. Check the little button that looks like a power button before you move on:

	This is off. Off is bad!
	![This is bad!](https://i.imgur.com/Stiemfi.png)

	This is on. On is good!
	![This is good!](https://i.imgur.com/zgsLKOo.png)


#### System Prompt

If everything so far has seemed pretty standard to you, this might be where we start to diverge. This is loosely based on other templates, but essentially, I've written all of these instructions to create a solid, base-level set of instructions for our soon-to-be-created adventure modules to start with as a foundation. I've been working on the idea of a consistent text-based adventure game for years (well before Wayfarer dropped), so this is the culmination of a lot of trial and error and tweaking - but the most changes have certainly happened since trying out Wayfarer. At the moment, here is the very base level set of instructions I give the model:

!!! info System Prompt:
	Your goal is to play the part of Game Master in an open-ended, text-based adventure RPG where the player portrays the main character, {{user}}. You will guide the user through a compelling and engaging story that challenges the player and puts {{user}} in to interesting, sometimes dangerous, situations.
	
	Your guiding principal should be as follows: Guide, don't dictate. Always suggest what the player might do rather than doing things for them. Describe the way the world reacts to the player's choices.
	
	\## Describe Scenes
	  \- Your most important duty is to describe the world around the user's main character, {{user}}.
	  \- Whenever entering a new area, set the scene, describe any interesting people or objects the character might notice, and other details as they become relevant (weather, temperature, lighting level, etc.)
	  \- Keep track of and pay attention to changes in the scene, such as doors being left open or closed, weather changing, or other important details.
	
	\## Portray Characters and NPCs
	  \- Draw from both {{user}}'s description and history, and other established knowledge, to portray characters in {{user}}'s life accurately.
	  \- When necessary, create and keep track of new, interesting characters that are or might become important to {{user}}.
	  \- These characters should be considered a part of the scenes they're present in, and you should describe their actions, dialogue, and behavior appropriately.
	
	\## Narrate Risks, Violence, and Consequences
	  \- When the player, as {{user}}, does something dangerous, you are free to narrate consequences up to and including harm, injury, or death.
	  \- Risky or skill-based activities may fail.
	  \- Narrate in a present-tense, second-person format.

Note that I use markdown for pretty much everything because... I always have. Other people always have. It's a habit and, for me, just a way of organizing text that I'm accustomed to (even when it's not formatted by a front end). You probably don't *have* to use markdown, but you might find it helps.

Anyways, you can see that there are some super basic instructions here. You can add to these if you please. It wouldn't be a stretch to add `- All characters should be over the age of 55` if you're planning on doing adventures exclusively in nursing homes and retirement communities. LLMs are a little finicky about doing things like that consistently, but if you want to impose rules like that, this is the first place to try it. Everything else is pretty self-explanatory, plain text. No tricks here. You write what you want, and maybe what you don't.

Caveats:
- LLMs don't handle negative instructions particularly well. If you say "Unicorns should not exist in this world," the LLM is going to see that instruction and eventually be like "Hey, someone said 'unicorn,' I guess that means I need to mention a unicorn!" and it will probably bring up unicorns if you wander in to a nice meadow.
- The more specific the instructions, the less likely the LLM is to follow them the way you want. If you say "Encourage fights and conflict" it'll probably do fine, but if you say "The only fights that happen should be one on one fights with katanas at dawn" it's not really going to follow that instruction very well.
- You can override these instructions in play. If you're doing your Nursing Home Adventure and have a line that everyone has to be 55+, but you specifically write that a young, hip, 51 year old shows up and drops phat rizz on the old folks home, the LLM will probably run with it. It'll generally follow your instructions, but if won't fight you if you violate them yourself.

### Parameters
I started with Universal-Creative as a base. Based on Wayfarer's model card suggestions, I changed the following to start from:
- Temperature: 0.8
- Min P: 0.025
- Repetition Penalty: 1.05

This will probably work for you as a baseline, but I've tweaked it a bit, and the current changes that I'm happy with are pictured here:
![Parameters](https://i.imgur.com/ao5wEar.png)

The key updates vs. Universal-Creative and Wayfarer's suggestions are:
- Temperature: 0.85
- Min P: 0.025
- Repetition Penalty: 1.1
- Smoothing Factor: 0.3

I've been experimenting with XTC and in general, these settings have given me good results:
- Threshold: 0.2
- Probability 0.5

Of course, feel free to wiggle these around to your liking, but these settings have performed admirably for me fairly consistently.

#### Banning Tokens (In Theory)
As we all know, LLMs are fixated on certain ideas and words. A perfect example is one of the things I hate the most: Tall, muscular men. Not that I mind actual tall, muscular men, what I mind is the rampant overuse of that particular descriptor to describe *every man that enters a scene*. XTC and Smoothing do help with this to some extent, you'll still run in to tall, muscular men who tower over you more frequently than I would personally like, particularly if they're more antagonist-leaning. This is where banning tokens can help.

There's a particular way to go about doing this correctly and, since we're not set up and I can't demonstrate yet, I'll cover this more in-depth during the demo.

#### Other Features
DRY? Dynamic Temperature? Seeds, Logit Bias, CFG, Grammars?

I don't really know enough about these things to use them consistently, outside of minor prodding at DRY to change things up a little bit. The rest, for our purposes, isn't needed. Play with them at your own risk.

## Creating Adventures
So you want to be a hero?

We all know this is the part you skipped to. And that's just fine. If you think the rest of the stuff is below you, more power to you! If you don't get the same sorts of results that I demo later, maybe you should check out the other stuff. But at long last, here's the real *meat* of this guide: How to make your GPU take you to far away lands, meet exotic new people, and have s... Uh... Adventures with them!

### Core Concepts
This is where I really do things differently than a lot of people may be used to. And why I insist on using a high context model, even if it means using a smaller model to fit in to your hardware. We're gonna start with a hot take.

#### P-Lists, Ali-Chat, etc., are Outdated.
The people who came up with these concepts are true pioneers. They weren't misguided or misinformed; they were clever and creative people who were working with what they had at the time. They found something that clicked, stuck with it, and now these methods of describing (mostly) characters are fairly well established... they work. Right? Right. But it's long since time we evolved. These methods were developed for models that could barely break 4k context. Maybe 8k if you're lucky. But we routinely have models (and methods of wrangling them) that allow for *far, far, far more context* than we could ever dream of years ago. Because of that, we need new methods. But maybe not as new as you think.

#### Plain Text is... King?
What, another hot take?

I've been using mostly plain text(ish) bios for characters and scenes for a while now. My style has evolved over time, but in general, if I want a character, that character will be described as such:

!!! info Character Bio
	\# Full Name
	(Brief bio, one paragraph.)
	
	\### Basic Physical Stats
	\- \*\*Age:\*\*
	\- \*\*Gender:\*\*
	\- \*\*Height:\*\*
	\- \*\*Weight:\*\*
	\- \*\*Hair Color:\*\*
	\- \*\*Eye Color:\*\*
	\- \*\*Skin Color:\*\*
	\- \*\*Race/Species:\*\*
	\- \*\*Occupation:\*\*
	
	\### Appearance
	(Physical appearance, one or two paragraphs)
	
	\### Clothing
	(Typical clothing, one or two paragraphs)
	
	\### Personality and Behavior
	(Personality and behavior, one paragraph)
	
	\### Unique Attributes
	(Unique attributes, unordered list, title and short description.)

If properly filled out, this can be around 1000 tokens or so. This is why I like context so much! You can write as much or as little as you like, or make ChatGPT write as much or as little as it likes, and have a fairly well fleshed-out character for yourself. This can be used if you still want to have one-on-one sessions with individual characters, and it can be used for your player characters. It's versatile, and in my experience, very *very* effective. It's something I've tweaked a lot, but I've used this particular format for probably over a year.

The basic physical stats is pretty open to adding more detail if you like. Maybe a vampire is 1102 years old, but needs an Apparent Age of 29. Prefer a body type over concrete height/weight numbers? Go for it. Want to add your character's cup size? Why the hell not. Go nuts.

For the other info, you can add more headers if you want other information, behaviors, etc. to factor in to the character, but you don't have to. Be creative with this if you'd like.  Sure, why not. An example of something I'll add is an Equipment section, with a list of important items they always have on their person. I'll provide two examples in the next section - which will serve as our player characters in the ongoing example and demo.

I feel like you probably  *could* get too detailed in the info here, and the LLM might lose some of it, but in the examples below, you'll see profiles at about the length that I usually use. I find that they work just fine.

### Draft an Adventure Idea
What do you want to be? Where do you want to go? So far, I've experimented with three genres:
- Cthulhu Noir: A detective/mystery drama set in the 1920s with supernatural elements.
- Generic Fantasy Adventure: D&D-style setting, with all the expected tropes.
- Modern Slice-of-Life: Just a regular person living in a regular city.

Wayfarer (and my methods) handle all three well enough, but I will note that it is especially keen on fantasy settings. The weirder you make things, the more it might not perform well.

Either way, think of a place where you want to explore and do stuff, and think of who you want to be. Let's go through this process with an example:

> I want to be an adventurer in a swords-and-sorcery fantasy world where anything can happen.

It's as good a start as any.

### User Character (You - the player)
Who do you want to play? There are no limits here, but you do have to start somewhere, and I usually start with the player character before coming up with the Character Card, just because the player character *tends to be* a bit more complex. You want to define yourself fairly well so that your sense of identity in the adventure remains consistent, normalized, and known by you. If you use the shorter formats, you may notice details you can't adequately describe with that method changing from session to session.

So let's run with the idea that we want to be an adventurer in a swords-and-sorcery fantasy world where anything can happen. Great! We need characters. Normally, I like to fill out the template above and write things out to my own taste and my own liking, but for our purposes, I'm just going to get ChatGPT to whip up something relatively generic.

You have two choices. Meet your generic adventurers!

Elira Thalwyn | Darrin Valthorne
------ | ------
![Elira Thalwyn](https://i.imgur.com/j35kN2V.png){%5:%5} | ![Darrin Valthorne](https://i.imgur.com/A9MIVN5.png){%5:%5}

Note: These aren't proper SillyTavern character cards; you can't import cards as User personas (yet).

!!! info Elira's Bio
	\# Elira Thalwyn

	Elira Thalwyn was born in a small, bustling village nestled in the shadow of the Verdant Mountains. Raised by a blacksmith father and a herbalist mother, she grew up surrounded by the heat of the forge and the soothing aromas of medicinal plants. Her humble upbringing instilled in her a strong work ethic and a deep respect for nature. As she grew older, she discovered an innate talent for archery and tracking, skills that made her invaluable as a hunter and protector of her village. Despite her skill and courage, Elira remains grounded, driven by a fierce loyalty to her community and an unshakable determination to make her own way in the world.

	\### Basic Physical Stats:
	\- \*\*Age:\*\* 27  
	\- \*\*Gender:\*\* Female  
	\- \*\*Height:\*\* 5'7"  
	\- \*\*Weight:\*\* 135 lbs  
	\- \*\*Hair Color:\*\* Chestnut brown, often tied back in a loose braid  
	\- \*\*Eye Color:\*\* Hazel-green  
	\- \*\*Skin Color:\*\* Light tan with freckles across her nose and cheeks  
	\- \*\*Race/Species:\*\* Human  
	\- \*\*Occupation:\*\* Hunter and tracker  

	\### Appearance:
	Elira has a lean, athletic build honed by years of trekking through forests and scaling rocky hillsides. Her chestnut-brown hair is sun-streaked and usually tied back in a practical braid, though a few loose strands often escape to frame her freckled face. Her hazel-green eyes are sharp and alert, constantly scanning her surroundings. Her skin carries a healthy tan, with faint scars on her arms and hands—testaments to her time spent in the wilderness. Despite her practical lifestyle, she exudes a quiet, natural beauty and carries herself with a confident, no-nonsense demeanor.

	\### Clothing:
	Elira typically wears practical, well-worn leather armor reinforced with plates on her shoulders and bracers on her arms. Her tunic is made of sturdy linen, dyed a deep forest green, and her boots are tall, laced, and built for endurance. Over her armor, she wears a hooded cloak that doubles as camouflage in the woods, dyed in mottled greens and browns. A belt around her waist holds pouches for herbs, small tools, and a sheathed hunting knife. Her quiver and longbow are always slung over her back, a testament to her role as a hunter.

	\### Personality and Behavior:
	Elira is pragmatic, resourceful, and fiercely independent. Her upbringing has made her self-sufficient, and she takes pride in her ability to solve problems on her own. She’s naturally observant and prefers action over words, often speaking only when she has something important to say. However, she is deeply loyal and protective of those she cares about, willing to risk her life for her village or friends. 

	While generally calm and patient, Elira’s temper can flare if someone endangers her loved ones or disrespects her values. Beneath her tough exterior, she has a warm, nurturing side, often helping the injured or sharing her knowledge of herbal remedies. She occasionally struggles with feelings of inadequacy, particularly when comparing herself to wealthier or more accomplished individuals.

	\### Unique Attributes:
	\- \*\*Master Tracker:\*\* Elira can identify and follow even the faintest trails, whether it’s footprints in soft dirt or a snapped twig in a dense forest. This skill makes her invaluable when hunting or searching for lost travelers.  
	\- \*\*Expert Archer:\*\* Years of practice have made Elira a crack shot with her longbow, able to hit distant or moving targets with remarkable precision.  
	\- \*\*Herbal Knowledge:\*\* Thanks to her mother’s teachings, Elira can identify and use various plants for medicinal purposes. She’s often called upon to treat minor injuries and ailments.  
	\- \*\*Stubborn Resolve:\*\* Once Elira has set her mind on something, she’s nearly impossible to deter. While this can be an asset, it sometimes leads her into dangerous or reckless situations.  
	\- \*\*Limited Social Grace:\*\* Elira’s bluntness and preference for solitude can make her seem aloof or unapproachable, particularly to strangers or in formal settings.  
	\- \*\*Overprotective Nature:\*\* Her loyalty to her loved ones sometimes causes her to be overbearing, inadvertently stifling others’ independence.  

!!! info Darrin Valthorne's Bio
	\# Darrin Valthorne

    Darrin Valthorne was born in the bustling trade city of Elmshade, nestled in the heart of the kingdom of Ardell. Raised as the son of a blacksmith, he spent his youth forging weapons and armor, dreaming of the adventures they might see. When war swept across the land, Darrin enlisted in the city guard, quickly earning a reputation as a stalwart and honorable warrior. After years of service, he left the military to roam the land as a sellsword, offering his blade to those in need. Now, he wanders the kingdoms, seeking both purpose and a chance to leave a lasting legacy.

    \### Basic Physical Stats:
    \- \*\*Age:\*\* 32  
    \- \*\*Gender:\*\* Male 
    \- \*\*Height:\*\* 6'2" 
    \- \*\*Weight:\*\* 210 lbs  
    \- \*\*Hair Color:\*\* Dark brown 
    \- \*\*Eye Color:\*\* Steel gray  
    \- \*\*Skin Color:\*\* Lightly tanned 
    \- \*\*Race/Species:\*\* Human  
    \- \*\*Occupation:\*\* Sellsword, former city guard 
	
    \### Appearance:
    Darrin is a ruggedly handsome man, with a square jaw, high cheekbones, and a faint scar running diagonally from his left brow to his cheekbone. His broad shoulders and muscular build reflect years of combat training and hard labor. His dark brown hair is cropped short, but often tousled from travel, and a neatly trimmed beard frames his jawline. His steel-gray eyes have a piercing intensity, hinting at a man who has seen both the horrors and triumphs of battle. 
	
    \### Clothing:
    Darrin typically wears a well-worn leather jerkin over a chainmail hauberk, practical for both protection and mobility. His traveling boots are scuffed but sturdy, and a dark green woolen cloak drapes over his shoulders, pinned with a simple iron clasp. At his side hangs a longsword with a plain but reliable steel hilt, and a dagger is strapped to his thigh. His clothes bear the marks of a traveler: dirt-stained hems, small patches of repair, and an aura of functionality over style.
	
    \### Personality and Behavior:
    Darrin is pragmatic and focused, with a strong sense of justice that sometimes gets him into trouble. Though he’s fiercely loyal to those he trusts, he often keeps people at arm’s length, wary of betrayal. He has a dry sense of humor and a knack for lightening tense situations, though his brooding demeanor can make others see him as overly serious. Darrin holds himself to a high moral standard and struggles with guilt when he feels he’s failed. While his past experiences have made him cautious, he often finds himself unable to ignore a call for help, even when it’s inconvenient or dangerous.

    \### Unique Attributes:
    \- \*\*Skilled Swordsman:\*\* Years of service in the city guard have honed Darrin's swordsmanship. He’s particularly skilled in defensive combat, often using calculated moves to outlast his opponents. 
    \- \*\*Iron Will:\*\* Darrin has an unyielding determination and rarely backs down from a challenge. This mental toughness allows him to endure situations where others might falter. 
    \- \*\*Scarred Past:\*\* Despite his exterior of stoicism, Darrin carries emotional scars from his time in the military. He occasionally struggles with nightmares and self-doubt, which can affect his focus in critical moments.  
    \- \*\*Tactical Thinking:\*\* Darrin excels at reading situations and planning combat strategies, but his caution can sometimes make him hesitate in high-pressure scenarios.

They're both such bold, daring choices. Shit, is that another tall, muscular man? GOD DAM-

Anyways, slap the images and info in to your User Personas. You can add one, or both, but the LLM will get confused if you switch between them mid-game. Do you want to be Darrin and have Elira as a GM-controlled adventuring companion? Well, stay tuned, I'll tell you how to do that later! You don't necessarily *need* the Personality and Behavior section (since that's more for use as a one-on-one character card), but it doesn't hurt to have it.

Onward, to generic adventure with our generic characters! But seriously, make up your own if you want. In fact, you should.

### Character Card (LLM - the Game Master)
Here's where we tell the LLM how our little game really works. The Character Card, surprisingly enough, isn't really where a lot of the worldbuilding context takes place. It's a lesson for the LLM on how to be a proper Game Master, above all else. I suppose, in essence, we really are creating a character here - but that character is the Game Master for our adventure, not a "scene" (Oh god, how I've tried...) or an individual as so many people are used to. The following contents will show you how we accomplish that.

#### Description
Okay, this is going to look a little familiar, but trust me: works.

!!! info Description
	You are a long-term roleplaying partner serving as a Game Master, narrating the events, scenes, and relationships in {{user}}'s life in an endless, adventure style roleplay for the player, who plays {{char}}.
	
	Fresh Adventure is a text-based adventure game set in the fictional land of Malythos, spefically in the Shattered Kingdoms part of the continent. The world is based on fantasy-medieval tropes, with most of the races, concepts, and settings one can expect in that setting. Magic exists, but is relatively rare, and there have been a few interesting feats of engineering and technological progress, though the world remains mostly in a swords-and-sorcery state.
	
	The Shattered Kingdoms are a loose collection of realms that co-exist along the coast of Malythos. It is mostly occupied by humans, with a few isolated camps, tribes, and settlements belonging to other fantasy races.
	
	Your primary tasks are:
	
	\## Narrating the Scene
	  \- Describe the locations and people {{user}} visits in detail, using full paragraphs. Always ensure the scene is set before focusing on character and object interactions.
	  \- Smoothly transition from scene to scene as {{user}} moves through the world.
	  \- Narrate the scene in second-person, present-tense format at all times.
	  \- Never skip events, even if they seem trivial. Provide opportunities for {{user}} to interact with the world and its characters.
	
	\## Controlling NPCs and Other Characters
	  \- Populate the world with side characters, NPCs, animals, creatures, monsters, mythical creatures, and other living beings where appropriate.
	  \- Maintain consistent personalities and behavior for characters and creatures, especially reoccurring ones.
	  \- Most humanoid characters {{user}} interacts with should be friendly or neutral.
	
	\## Consistent and Detailed Narration Without Shortcuts
	  \- Narrate the scene without skipping over important events and details.
	  \- Always follow the cadence of {{user}}'s posts. {{user}}'s post will indicate whether or not a scene should be skipped. 
	  \- If {{user}}'s post doesn't specify, always choose not to skip or fast forward any scenes.
	  \- Narrate in a present tense, second-person format.
	  \- Avoid narrating {{user}}'s dialogue. Instead, allow for a natural back and forth between {{user}} and whoever {{user}} is talking to.

Look a bit familiar? It should. It's basically the same format I use for the System Prompt when we were setting up the Context/Instruct/System stuff! Where it differs, it should be obvious, is that it's a bit more specific in the sort of setting and game we want to have. This, for example, is suited for a fantasy adventure in a magical land. But if we're doing modern slice-of-life, maybe you want to specify that the world should be populated with regular, average folks instead of monsters and mythical creatures. Or maybe you do want monsters and mythical creatures in your modern world. You have that freedom here!

Use the concepts demonstrated here to fine tune how each individual adventure is going to play out. This is pretty simple, really. You don't necessarily have to add anything else to this, but making little changes here will narrow down the scope as we get closer in the context to the actual gameplay/prompts. Trust me - I've tried multiple ways of setting this stuff up, and this is what usually works best. It's fine if it's a bit redundant - it feels like sometimes, it needs to be.

#### First Message
I want to preface this by saying that much of what you are about to see is pure deception.

But I'm not deceiving you here; we're deceiving the AI. I've tried a lot of things for a first message, but in the past few years, I've figured one thing out: If you want the LLM to behave a certain way, the first message is one of the most impactful ways of setting those guidelines out there. The same holds true for what we're working on here.

So here it is:

!!! info First Message
	\# Welcome to Fresh Adventure!
	\## \*A Text-Based Adventure Roleplaying Game.\*
	©2025, SAI Entertainment, LLC.

	\---

	Welcome, user!
	
	It is my pleasure to be your game master as you play {{user}} as you navigate the world of Malythos!
	
	Fresh Adventure is text-based adventure RPG set in the fictional realm of Malythos, where you play the role of the adventurer, {{user}}. I have the honor of being your game master, helping to set the scene and describe events and dialogue as you experience {{user}}'s adventures. You have the freedom to do what you want and go where you please; I will fill in all the details, and play all the side characters needed to ensure you have a fun, fulfilling experience!
	
	\*Disclaimer: This game may feature graphic themes such as violence toward {{user}}, combat, dungeons, monster encounters, war, blood, and gore. {{user}} can, and will, encounter dangerous situations, fights, bandit attacks, and hostile creatures! If you are under the age of 18, or do not wish to experience mature and violent content, please try one of our more wholesome titles!\*
	
	\---
	
	\### Instructions
	
	Fresh Adventure begins wherever you'd like! You can choose to wake up either in a wilderness camp, or in an inn in a city, or along a road. Just state where and how you want to begin, and I'll set the scene! When you are ready to begin, tell me how the adventure should begin by typing \`!start (brief description of the staring conditions),\` and I will do the rest. From there, just tell me what you (as {{user}}) want to do, and I'll make sure you get to experience every detail!
	
	Then, just play and have fun, and try to immerse yourself in the role of {{user}}.
	
	\---

And here's what it looks like if you copy/paste correctly (and I escaped the markdown correctly):

![Deception!](https://i.imgur.com/O6isOhU.png)

Let's break down what we're doing here bit by bit.

!!! info The Title/Subtitle
	\# Welcome to Fresh Adventure!
	\## \*A Text-Based Adventure Roleplaying Game.\*
	©2025, SAI Entertainment, LLC.

This is purely thematic. Maybe it helps, maybe it doesn't. I think it looks cool, though. SAI Entertainment, LLC. is an entirely made up company. At least, I think it is. If it's not, and there's a real one, I have nothing to do with it. Either way, I think this kind of sets the mood (maybe more for the player) that this is a text-based adventure game, not just a jury-rigged LLM pretending to be one. Immersion helps!

!!! info Greeting
	Welcome, user!
	
	It is my pleasure to be your game master as you play {{user}} as you navigate the world of Malythos!
	
	Fresh Adventure is text-based adventure RPG set in the fictional realm of Malythos, where you play the role of the adventurer, {{user}}. I have the honor of being your game master, helping to set the scene and describe events and dialogue as you experience {{user}}'s adventures. You have the freedom to do what you want and go where you please; I will fill in all the details, and play all the side characters needed to ensure you have a fun, fulfilling experience!

Describing the world the game is set in and how the game is going to proceed. This is not for the user, but for the LLM, of course. You know what card you clicked. But this gives the LLM some solid instructions on what the coming interactions should be like.

!!! info Disclaimer
	\*Disclaimer: This game may feature graphic themes such as violence toward {{user}}, combat, dungeons, monster encounters, war, blood, and gore. {{user}} can, and will, encounter dangerous situations, fights, bandit attacks, and hostile creatures! If you are under the age of 18, or do not wish to experience mature and violent content, please try one of our more wholesome titles!\*

Safety tools! But... not really. More deception here. This isn't a disclaimer for you. You know what you're getting in to. This is specifically designed to dictate what kinds of things are going to happen as the game proceeds. If you put in here that there will be monsters and bandits, there will be monsters and bandits in the game. If you put in a disclaimer that there will be horror elements, there will be horror elements. If your disclaimer says that there will be naked catgirl barmaids in every tavern, well, I think you can guess what you're going to find in ye olde tavern. Use this disclaimer to tailor the sort of stuff that will happen in this session. But remember the rules on being specific from above - the more specific you are, the less likely the LLM is to hit each note.

!!! info Instructions
	\### Instructions
	
	Fresh Adventure begins wherever you'd like! You can choose to wake up either in a wilderness camp, or in an inn in a city, or along a road. Just state where and how you want to begin, and I'll set the scene! When you are ready to begin, tell me how the adventure should begin by typing \`!start (brief description of the staring conditions),\` and I will do the rest. From there, just tell me what you (as {{user}}) want to do, and I'll make sure you get to experience every detail!
	
	Then, just play and have fun, and try to immerse yourself in the role of {{user}}.

The Instructions part leans a bit more in to some of the experimental aspects coming up later. For now, we set up a !start "command" that the LLM can recognize as a request to spin up the starting post. Using it looks a bit like this:

![It begins.](https://i.imgur.com/LNSlIFr.png)

This is where you'll likely need to do a swipe or ten to get things started right. Sometimes the model will have a little trouble latching on to the format, style, etc. But in general, it hits the mark fairly quickly and once it does, it'll stick to the correct style as the session goes on.

At the onset, here's how our output is looking: `Output generated in 4.28 seconds (49.56 tokens/s, 212 tokens, context 2232, seed 1104295997)`

"But you said you want *lots of context* and *the more the better* but that's only like 2k, this is just fine with an 8k context!*

NO! It's not! Or at least... It won't be. Because, you see, here's where I unleash upon you one of the secrets that really makes this experience damn near magical: This is just the start. This world is barely built, and we're going to spend *hours* or *days* adding to it. Or at least... we could. For my personal worlds, I do. I do it because that's what drives the immersion and spontaneity.

Do I still engage in roleplaying with actual humans? Of course. I play D&D all the time. I go on *those* websites. I love human interaction. But I also love to build, create, and adventure in ways that human partners don't necessarily facilitate. This, however, does facilitate that. A human partner has their own motivations and ideas, and that's great for some things. But sometimes, you just want to grab a set of Lego bricks and start snapping things together to see what you get. And that's how I describe this whole experience. That's what I liked about the O.G. AI Dungeon, and that's what I like about this. 

Creating a new world is just the beginning; now we're going to start filling it out.

#### Character Lore
We're going to touch on this more later, but using a Lorebook as Character Lore (character being the character card) is the bread and butter of continuous worldbuilding.

As you explore a newly created adventure, you're going to meet people, go to places, and do things. Some of those people and places and things will be things you don't want to forget, things that might change the world, or maybe people you want to meet again... or travel with, long-term.

With 80k context, there's a lot you can do in one session, but that session will have to end at some point. You can use the summarize extension, pretend you don't care if stuff scrolls out of context, etc., but eventually, you'll want to start fresh. Character Lore is how you take the meaningful experiences you've had in one session, in to another one.

As well as how you define constants and variables, of course, but... we'll get in to that in the Lorebook section. For now, create a new Lorebook and attach it to the Character via the Character Lorebook button, like so:

Create the Lorebook:
![Create Lorebook](https://i.imgur.com/iCH8ywx.png)

Add it to the Character Lorebook:
![Add Character Lore](https://i.imgur.com/JLvDz0M.png)

Make sure the globe icon is green and you're all set! Anything we add to that Lorebook later (and we will) will automatically trigger any time we use this character card.

#### Other Features (e.g. Advanced Definitions)
I don't typically mess with Advanced Definitions and haven't found a need for auxillary lorebooks (yet). Thus, all I really have to say here is that none of the other aspects of the Character Card are particularly important for this. That may change, but for now, that's how it is.

### Building a World With the Lorebook (The World Info)
Everything we've created so far is enough for us to start an adventure. The LLM will figure shit out just fine. But maybe you want a little bit of consistency in your sessions, or maybe you want things that happened in prior sessions to have lasting consequences or leave memories. Maybe you don't want the world to forget that you won the big archery contest in that town you were just in. Maybe you don't want to lose that nifty NPC you encountered. Or you want a traveling companion, or even a full party. Well, the Lorebook is how you do that - and more.

I'll admit that I'm no Lorebook guru, but I can certainly show you how to utilize it to keep adding to your world.

#### Established Information
When you're creating a fresh adventure, you might want to add some established information that will stay the same from session to session. For example, our little adventure is set in the land of Malythos. What is Malythos? Where is it? When is it? If you try to figure that out in Sesson 1, the model will give you some information. If you try to figure it out in Session 2, the game will give you totally different information. So maybe we want to store some information so that any time we ask about Malythos, we get (more or less) the same information every time.

Let's say for the sake of argument, Malythos is a continent, not a whole planet. And it's an arid desert continent. We could, of course, put that in to the Description, or maybe the AN, or elsewhere... but why not the Lorebook? This is another case of "This is the way it's worked for me most consistently," so that's why I advise doing it. The Lorebook is basically your memory from session to session - think of like taking notes in a D&D session. You may not have perfect recall of the whole entire session, but you have the important stuff. Same basic idea.

So let's add a new entry to our Lorebook, which we already created:

![Add Lorebook Entry](https://i.imgur.com/BHT1Rz4.png)

The Primary Keywords are what terms and words will trigger this entry to inject its self in to the context, if it's not there already. For now, none of the other settings need to be changed.

Here is the text:

!!! info Malythos
	Malythos is a vast, barren desert continent with patches of fertile land here and there. It is surrounded entirely by the Rybold Sea. Most major cities are along the Fertile Coast and Cloud River, with oceanic and river shipping being a main source of trade and transportation. Beyond the gates of settlements, towns, and cities, the climate and terrain are rocky, sandy, hot, and unforgiving. Rumors of vast riches in these desolate lands tempt adventurers to explore them.

This establishes Malythos as a desert continent with some settlements along the coast and a river. There are a few names; Rybold Sea, Fertile Coast, Cloud River. All of these things could be Lorebook Entries as well to help build an interesting, established world, but this is fine for now.

This will get us a different start if we start all over again:

![A new start?](https://i.imgur.com/zwxTvbI.png)

Now that's a bit more specific a climate and setting to start in. But it still fits or fantasy world vibe; now it's just in a more arid and desolate location.

But here's the fun part: What if you don't give, say, the Cloud River a lorebook entry and start poking around and trying to learn about it? Well, AI is going to do what AI does best. It's going to make some shit up. And sometimes... that's how you get new lorebook entries. I know I do.

![New info? That's going in the Lorebook](https://i.imgur.com/VplOkuD.png)

Here, you can see I'm asking a bartender about the Cloud River. The model is making shit up to answer my questions. But it's not bad info; it's compelling and there's mystery behind it. It's something to explore. Or maybe I don't explore it. But I can still add a lorebook entry with that new info if I like it. Also, the reason he's pissed that I'm not reaching for my coin purse is because he previously insisted asking questions wasn't free. What a jerk.

The point is, you can define as much as you want in the Lorebook, and fill in the blanks with stuff you learn during the adventure. It's like magic!

#### Everything Else

The Lorebook can store pretty much anything in it, for the most part. It's almost entirely taken the place of the Author's Note for me for many things. I'll throw NPCs in there, cities, timelines of events, things a character did that was cool, etc., etc. It's a Todd Howard situation. It just works, and you generally don't have to fuss with the more advanced settings if you don't want to. But there are some instances where those settings make sense to play with.

For example:
- **Non-recursable**: Useful if you don't want other Lorebook entries to trigger this one. If I were to add a Cloud River entry, and didn't want it to trigger every time the Malythos entry triggers (because that entry mentions the Cloud River), I could check this box.
- **Prevent further recursion**: Useful for the opposite case. If I don't want anything (like Cloud RIver) in the Malythos entry to trigger other Lorebook entries, I could check this.

These two settings are a little situational and can help you save a bit of context space by avoiding redundant/unnecessary triggers. Just because I'm in Malythose doesn't mean I need to know all about the Cloud River, after all.

I'll be coming back to the Lorebook and some of the more advanced features in the Experimental Stuff and Demonstration sections, but for now, you should have a solid baseline for building out your world.

### Author's Note
I used to have lots and lots and lots of stuff in here. But anymore, this is more of a testbed for stuff I might put in the Lorebook or System Prompt. Anything worth being in here all the time is worth being in a Lorebook constant or the System Prompt or Character Card. But by all means, use it as you please.

### Experimental Stuff
I've played with a few concepts over the past week or so to see if I can implement them in to the gameplay. I may update this section if I come upon anything else interesting, but for now, it's a little sparse. I did try to implement some way of calling for and reacting to dice rolls, but it was too inconsistent and the model was either overbearing with it or didn't utilize it enough, with no good in between.

#### Meta Commands
I have had an unusually high amount of success with adding Meta Commands in to my modules. What's a Meta Command? Don't worry if you've never heard of these before, because I made the name up. But it turns out, you're familiar with one already.

`!start` is technically a Meta Command. The first one I made, for example, which is why it's baked in to my First Message template. Lately, the definitions for them them go in to a Lorebook Constant, preferably in a dedicated Global lorebook (just a lorebook I created that's on all the time). But I've had enough success with it that I'll probably add it to the system prompt later as a permanent addition to adventure gameplay. Here's what I have for Meta Commands right now, in my Lorebook:

![Settings](https://i.imgur.com/cwwKRdS.png)

!!! info Content:
	\## Commands
	Game Master instructions for player commands. When a command (typically a word preceded by a question mark, such as \`!start\`) is issued, the game will be paused and you will respond as per the instructions of each command. Do not continue the game until the player posts an action for {{user}}. All commands are considered OOC interactions and do not effect the game world if used during play.
	
	 \- \`!start (Starting conditions - optional)\`: Start a new game. Use provided conditions or, if none are given, generate a random start to the game. Can only be used if there is not already a game in progress.
	 \- \`!info (Information requested)\`: Pause the game and provide the information requested by the player to the best of your ability.
	 \- \`!bio (Character)\`: When the player uses this command to request a character bio, fill out the following template, preserving all markdown:
	\```
	\# Full Name
	
	(Brief bio, one paragraph.)
	
	\### Basic Physical Stats
	\- \*\*Age:\*\*
	\- \*\*Gender:\*\*
	\- \*\*Height:\*\*
	\- \*\*Weight:\*\*
	\- \*\*Hair Color:\*\*
	\- \*\*Eye Color:\*\*
	\- \*\*Skin Color:\*\*
	\- \*\*Race:\*\*
	\- \*\*Occupation:\*\*
	
	\### Appearance
	(Physical appearance, one or two paragraphs)
	
	\### Clothing
	(Typical clothing, one or two paragraphs)
	
	\### Personality and Behavior
	(Personality and behavior, one paragraph)
	
	\### Unique Attributes
	(Unique attributes, unordered list, title and short description.)
	\```

For the settings, I have the strategy set to `Constant` and Position set to `At Depth: System` at a depth of 3. That keeps the required knowledge fairly fresh.

The `!info` command does a fantastic job, however. Here you can see the results, which are fairly typical (though sometimes a swipe or two is required):

![Cloud River Lore?](https://i.imgur.com/2K8MUGO.png)

Note: I didn't add the prior Cloud River lore to the Lorebook so the model is just making shit up again. `!info` as it happens is a great way to get content for new Lorebook entries.

As for `!bio`, well... Hey, that template looks familiar... That part is definitely experimental (it doesn't always work right) but I wanted to add some way to quickly capture an NPC for the purposes of creating a new bio for them. It facilitates my laziness. When it works, it's great and I'll usually try a couple of swipes to get something I can use as a basis for adding a fixed NPC/traveling companion to the Lorebook.

![When it works...](https://i.imgur.com/jdvfWSf.png)
Close enough!


## Demonstration
Put all that together and what've you got? An adventure game, baby! Is it perfect? Hell no. Is it fun? Usually. Is it going to get me employed if I put it on my resume? The jury is still out on that one.

But let's start fresh. Here we are, as Elira, ready to take our first (real, non-example) steps in to this world. It's a fantasy adventure, that's kinda sorta been given some Wild West vibes because I randomly decided the continent is mostly desert. A world of possibilities awaits us.

![Starting fresh.](https://i.imgur.com/lr16scx.png)

This will be an unfiltered demo; if I have to swipe or regenerate, I'll say so. If I don't say so, assume I didn't have to! Everything is set up in a fresh clone of SillyTavern, as written in these instructions. All that's left to do is see if it works.


### Starting a Game
You should be fairly confident in how to kick this off by now if you've read through at least the last section. If you're still confused, well, uh... It's right there in the first message. You use the !start Meta Command and tell the model where we're starting off. Though based on the description we have set in the global constant Lorebook entry, I'm sure we could just type `!start` alone and get something serviceable. Let's start with Elira on the trail of a wounded bandit who has a treasure map. That's a good way to dive right in, right?

![On the trail...](https://i.imgur.com/LL3EVbl.png)

Not a bad start. It's a bit lacking in details, but we can roll with it. You may have noted that I have the token limit for responses set to around 400 tokens. I find that this keeps things moving at a good pace for me. You can raise it or lower it as you please. But it's my turn! I need to *do some stuff*. And it looks like we're going to find the guy pretty quickly. But... Hmmm, I want some info about this first.

The `!info` meta command usually gives me good results, so let's try it out:
![Can I hit him?](https://i.imgur.com/FIl5duW.png)

That's a tough shot. I could try it, but I'm not sure I'd make it and if I miss... I might alert him to how close I am. Elira is an expert archer, but it still feels like a gamble. Maybe I should get closer...

### Doing Stuff
We're in the thick of it now. The way we have things set up, this adventure runs a lot like classic adventure games do:

- You state, in first person, what you want to do.
- The narrator states, in second person, what happens.

And so on and so forth in perpetuity. Only here, there aren't any fancy stat tracking systems. You won't have to worry about whether you have the right dexterity or stealth values (though... keep an eye on the experimental section).

I think we're going to try to get closer. We could shoot, but we might miss at this range.

![Closer...](https://i.imgur.com/qP5pAKK.png)

Not bad. He's more alert, but he didn't directly see us. We need to get closer, though, to make sure we don't miss. A cornered bandit could be dangerous.

![And closer...](https://i.imgur.com/xl5eGzY.png)

We're close enough to get a good look at him and... wait... Oh, god, no...

### Shit! It's a tall, muscular man!
Dammit! I'm sick of this bullshit!

#### Banning Tokens (In Practice)
Okay, so I obviously edited that last response to make the model look like it wrote that he's a tall, muscular figure. But it's all for a good cause: Banning tokens. Any time you come across a theme the model insists on treading/retreading, some word you just don't like, some way of describing people or characters, instead of trying to tell the model not to do that anymore, consider banning tokens. In this case, I never want to see another tall, muscular man again.

This works great if you incorporate positive prompts that encourage more of the things you do like. For example, I might put in to the Author's Note that most people I meet should be of average build and height (a fairly decent use case for the Author's Note over the Lorebook), in addition to banning tokens. Combined, that *should* keep most people relatively normal as opposed to dotting the landscape with giant huge hulking monster muscle men.

Anyways, to ban tokens, it's fairly straightforward. For some reason, I'm getting mixed results using SillyTavern's built-in method of getting token IDs, but text-generation-webui can handle it, so I've been using that lately. First, you copy the offending text to the clipboard. Then, in text-generation-webui, go to the Notebook and paste it there, like so:

![Damn you, mountain men](https://i.imgur.com/voen70R.png)

And then, click on the Tokens tab and hit the button at the top to get a list of token IDs:

![There it is.](https://i.imgur.com/KWwllTO.png)

**It's important to paste in a fragment as opposed to just a single word you don't like** because the token for "muscular" (without a space) is different from the token for " muscular" with the latter being what you'll find in the middle of a sentence. Ban the token as you find it *in situ* rather than just typing it in to the Notebook and getting the token. Also keep in mind that " muscular" and " Muscular" are two different tokens. If the word you're pissed at comes at the beginning of a sentence, you'll want to remember that. So in this case, I want to ban both " tall" and " muscular" to make sure I just get normal sized people from now on. This means that my token list in SillyTavern under Banned Tokens in the Paramaters is going to be \[18260, 51403]. If it starts using these words at the start of sentences, I can ban those, too, but this will do for now:

![Git on outta here... git!](https://i.imgur.com/i5CBCIV.png)

Oh shit. I don't like scars, either? Well if I decide, later, I don't want the " scar" token to be in my game, I just throw it on to the end of the existing list, like so:

![No scars for me.](https://i.imgur.com/7sqQwgO.png)

And we're set. No tall, muscular, scarred people in MY adventure.

Sometimes, some models will try to duck these bans and may describe a "tall, mus cular guy with a large Scar" or something like that, but I have found Wayfarer at least to be fairly adverse to doing this. Your mileage may vary, and it will probably depend on what tokens you ban. If you do a game set in a murder mystery hotel and ban " hotel" it's going to try to get around it, for example. Okay, now that's out of the way, let's regenerate and get our damn map.

![Much better!](https://i.imgur.com/TKnFtlg.png)

The adventure continues, sans giant muscle man, and we wind up in a fight. Aside from the slight edit to demonstrate token banning, none of this require any swipes or regens. You'll likely require a few over a longer adventure, but this kind of gameplay is fairly normal. In general, it's following the disclaimer text and the other guidelines well enough. It is, still, a little player biased... I'm unlikely to lose this fight. But it at least adds some elements of danger and not everything I do works perfectly, exactly as I intended it. Which, in my opinion, is what makes this particular method and model so good!

If you want to see what happens, you'll just have to try it for yourself.

### Adding to the World
As I mentioned above, ideally for me, this world is always growing. There's always some new thing or place or person I don't want to lose when I eventually move on to the next session. That is, once again, where the Lorebook and some of the more advanced features come in clutch.

#### Companions and NPCs
Remember Isara? She seemed pretty cool. Let's say I want to work together with her for a while and have her join me on my travels. If you'll recall, we already used the experimental `!bio` command to generate a decent little character bio for her - similar to the one we use for player characters. And there's a very effective way of adding that character bio to any new scene we create with the Lorebook.

First, I'll format the bio that we generated earlier so it's got the proper markdown. As I said previously, I don't think the markdown really matters for the sake of the model, but it does help me stay consistent and organized with anything I put to text. Here she is:

!!! info Isara Thornscale
	\# Isara Thornscale
	
	A former student of your father's and experienced hunter, Isara has a reputation for being skilled yet unpredictable. Her red hair is shorter now, cut to shoulder-length and streaked with silver, while the scar that mars her jawline tells the story of a close call during a hunt gone wrong. Tension lines her face, marking her as someone who lives life at high alert, always ready for what the wild throws next. Years of surviving in dangerous territory have left her with an aura of readiness that seems permanently etched onto her features. Though she's never explicitly stated why she left, many whisper about something dark driving her away - some secret buried deep enough to leave permanent shadows in her gaze. Despite the air of danger surrounding her, she speaks calmly and quietly, which suggests that the surface-level aggression belies a deeper complexity to her character that hasn't fully revealed itself to the wider world yet. Isara's connection to you stems from her time learning alongside your father, cementing her as one of the few people you still hold in esteem after his passing. However, even you struggle to understand exactly what drives her these days, making her an enigmatic companion with hidden depths and unknown loyalties.
	
	\## Basic Physical Stats
	 \- \*\*Age\*\*: 36
	 \- \*\*Gender\*\*: Female
	 \- \*\*Height\*\*: 5'9"
	 \- \*\*Weight\*\*: 160lbs
	 \- \*\*Hair color\*\*: Red with streaks of gray
	 \- \*\*Eye color\*\*: Emerald green
	 \- \*\*Skin color\*\*: Pale complexion, lightly tanned
	 \- \*\*Race\*\*: Human
	
	\## Appearace
	Isara is tall and athletic, built solidly from years of physical labor and survival in the wilderness. Her body bears several visible scars, proof of the dangers she has faced, while her keen green eyes scan her surroundings constantly. A prominent jagged scar runs down the left side of her jawline, marking a past ordeal she rarely mentions.
	
	\## Clothing
	Wearing a mix of leather and cloth garments designed for comfort and mobility, she sports a pair of worn, sturdy leather leggings and a forest green shirt with reinforced elbows and shoulders. A dark cloak hangs loosely from her broad frame, useful for blending in with the forest shadows when necessary. Around her hips, she keeps a wide utility belt holding various tools, a flask of water, and her trusted hunting knife secured in a sheath within easy reach.

	\## Personality and Behavior
	Steadfast and calculating, Isara approaches most situations with caution, weighing every option before taking action. Her wit is quick, and her tongue sharper; she rarely pulls punches, preferring brutal honesty. Despite this, she shows a softer side when it comes to protecting the innocent, though she's unlikely to admit it openly. She trusts very few people, but maintains an odd fondness for you due to your shared connections. Loyalty isn't easily earned, and she expects the same from anyone who claims alliance with her.

	\## Unique Attributes
	 \- \*\*Expert Hunter\*\*: Years of tracking experience and survival skills make Isara invaluable for hunting or exploring the untamed wilderness.
	 \- \*\*Quick thinking in combat\*\*: Whether armed or unarmed, she can adapt swiftly to any situation and counter accordingly.
	 \- \*\*Recognized by her distinctive voice\*\*: Even in a crowd, her voice is unmistakably hers, carrying an edge that reflects her personality.
	 \- \*\*Intuitive understanding of the natural world\*\*: Long-term exposure to nature has given Isara a sixth sense for approaching storms, animal behavior, and environmental hazards.

Now, we take this and we open up the Lorebook for our adventure and slap it in there, with these settings:

![Isara](https://i.imgur.com/AIPH08x.png)

Strategy is set to Constant. Contstants don't need keywords; they'll just hang out where they get put forever. And just to be safe, for added NPCs, I usually check Prevent further recursion - it's not really necessary for an NPC.

So this gets her in to a new game just fine, but what if we want all future games to assume she's *always* traveling with us? Even if we don't mention her by name when we use `!start`, she should be there. There are any number of ways to handle this, but I usually just tack some info on to the content of the Lorebook entry, e.g. a `\## Companion` category. Something like this:

!!! info Companion
	\## Companion
	Isara has been traveling with you for three weeks now as you track down the person who stole Redcliff Town's infamous llama statue. She camps with you every night and you rotate keeping watch. She has taken on the role of hunting and cooking, while you clean and tend to the fire.

You can add more detail to this, but this should work... let's find out if it does.

![There she is!](https://i.imgur.com/4ONwNXZ.png)

It took a couple regens, but it eventually set the scene with Isara nearby. In the other attempts, I'm sure it would have mentioned her if I got up and started poking around. If you find it's having a hard time placing your NPCs/Companions, you can reinforce the idea with a blurb in the Author's Note, I've found, but that's usually not necessary.

I've had some *mild* difficulty with the model trying to track more than one companion, but it seems to handle a single companion just fine. More than that and it sometimes loses track of who is who.

#### Events
Sometimes a thing happens that you want to be fully realized in the history of your world. Let's say, for example, that Isara and I once got in to a huge brawl at the local tavern in Silver Oak Settlement, and we were subsequently banned from the tavern and the town its self. Well, maybe I'd want that to factor in to things if our travels take us back around Silver Oak Settlement.

You can make up your own history and events, or just commit things that actually happen in the game to the Lorebook - either way, the model will usually remember them. For my purposes, I will usually create another Constant in the card's lorebook that includes a timeline of things that have happened. In that same entry, I'll devise some basic calendar system that the world uses just so it can track things in chronological order.

Let's throw the Silver Oak incident in to the Lorebook as an event on a timeline.

!!! info Timeline Lorebook Entry
	\## Calendar
	Malythos operates on a standard calendar that includes 30 days to a week, 3 weeks to a month, 10 months to a year, and 100 years to a King's Age. 
	
	It is currently Year 3 of the 9th King's Age.
	
	\## Timeline of Events
	\- Year 3, 9th King's, 2nd month: {{char}} and Isara began traveling together, sharing a common interest.
	\- Year 3, 9th King's, 3rd month: {{char}} and Isara were involved in a brawl in the tavern of Silver Oak Settlement, the Rusty Mule. The brawl resulted in several injuries, including a Isara sustaining a broken finger and {{char}} bruising a rib. As a result of the brawl, {{char}} and Isara were banned from both the tavern, as well as the entire town of Silver Oak Settlement and threatened with imprisonment if they ever returned.

Basic, but it'll work for now. I added this to the Lorebook as a constant just like Isara (Timeline of events and NPC companions so far are the only thing I generally add as constants), but after the Author's Note so it's a bit further down, and we'll see how she reacts when I suggest we swing by and say hello!

![Not a great idea...](https://i.imgur.com/Jj6QGeG.png)

Oh. Looks like she's still a little sore, a little pissed, and overall not too keen on the idea of going back to Silver Oak. Imagine that.

The possibilities here are limitless. Nothing can stop you from populating your world with events and characters. Well... Unless you manage to overflow the context. Don't do that.

### When to Stop/Start Over
So you're going through an adventure and things are going great, but you're starting to butt up to whatever context limit you're running with.... which I hope is fairly high, for your sake.

What I've found thus far with this model and method is that, for the most part, the adventures will have fairly well-defined beginnings, middles, and ends. You'll generally start off, maybe a bit aimless. Maybe you find your own goal, maybe the model puts one in front of you. You pursue the goal, you accomplish the goal, and you resolve the aftermath... and then you're kind of in a situation where a bunch of stuff happened, but you're on the verge of that "starting a new thing" situation.

It's usually at about that point where I'll decide what was important, if anything, and start compiling it in to the Lorebook entries. Perfection is truly the enemy of good here. Use D&D session note rules. Remember the important stuff and don't sweat the details. Maybe record the fact that you stormed the castle and saved the prince, but don't worry about each sword blow, minor injury, or victory you scored as you made your way to him. Totally appropriate to remember the huuuuuuuge... tracts of land, though.

Once you've got things documented, start fresh and adeventure onward! The world will remember your deeds (if you recorded them) and you'll have a whole bunch of context available for the next adventure.

## Conclusion

**Not one single thing in this guide** is set in stone. It should serve as an example of what you *can* do, without telling you what you *should* do. It is the culmination of years of screwing around, trying different models, seeing what works and what doesn't, what feels good and what doesn't, and adapting my own thoughts and methods in to something that (once found that *secret sauce* again) has become the thing I was looking for in running a LLM as an adventure game master.

All of the content herein was created by me or some AI. The images are AI generated and the character bios are AI generated. I'd encourage you to create your own rather than relying on AI-generated content; it's more fun when you're taking a character you made just for yourself in to a fresh adventure. But do what you have to do to have fun.

Edit, tweak, improvise, adapt, change, manipulate, experiment, and *fuck with* this. All of it. Make it your own. The process detailed here creates something I can spend a quiet evening enjoying, and if you create something with this process that you can enjoy, cool! If not, mess with it til you do enjoy it.

That's it. That's all. Really. Go kill some bandits.

*(I may at some point include everything I created in a fresh install of ST in a zip file or something for ease of just downloading it and jumping right in but for now, copy/paste will get you there)*

This work is licensed under CC0 1.0 Universal (CC0 1.0) Public Domain Dedication.
To view a copy of this license, visit https://creativecommons.org/publicdomain/zero/1.0/.