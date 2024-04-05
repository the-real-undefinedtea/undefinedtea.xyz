---
layout: '../../layouts/article.astro'
topic: 'Stream of consciousness'
description: 'Time to get some things out of my head, to make room for more things.'
publish: 'Apr 05 2024'
draft: false
tag: ['']
author: 'undefinedtea'
image: ''
---

Should I write some introduction? Nah.

### Zero Knowledge Proof
Actually, this is so interesting... I stumbled upon this whilst looking a bit more into blockchain development (more on that in the future perhaps), and honestly, it is a topic like this that I need right now. Let me explain.

You meet a person with two identically shaped objects. One object is green, and the other yellow. The person is color blind, so to them these are absolutely identical, yet you argue that they are in fact different. How can you convince that person that you are not telling a lie?

<span class="text-sm text-italic">--- If you are not going 'woah!!!' right now, do yourself a favor and stop reading ---</span>

Here we go. You tell the person to put both objects behind their back, and show you one. At this point you do not have to say anything about the object at all. You tell them to put both objects behind their back again and now they have a choice. They can show you the same object again, or decide to switch and show you the other. Once they have made their choice and show you an object again, you will be able to tell if they choose to make a switch or not, thus proving to them that there is in fact a distinguishable difference between the objects. This can be repeated as many times as it takes for the person to trust that you are truthful.

##### Is this not awesome?
When applied to cryptography, this provides means of establishing trust between parties without either party having to reveal anything at all about the 'object' in question. In our example it is made clear that any intrinsic characteristic of the object is entirely irrelevant - it could be a sheet of paper, a mug, or a phone and it would make no difference at all.

##### It is awesome! But why does it matter?
Well, I am glad you are still reading this. The reason this does matter in blockchain development is the ability to outsource verifiable computation. In essence, with the zero knowledge protocol, you can verify a claim to be truthful without knowing the underlying properties. In blockchain development specifically, this means that you can offload block verification to happen off the chain, while still retaining confidence in the correctness of said verification.

Naturally, this protocol has a vast amount of application potential outside of blockchain development. Consider identity protection for instance: If I ask you to prove to me that you are allowed to drive a car - the only way currently for you to do that is to show me your driver license. By doing so, you would reveal personal information to me, such as your date of birth. With the zero knowledge protocol, you could prove to me that you are allowed to drive a car, simply by presenting the zero knowledge proof to me without the need for me to know 'why' that claim is valid.

Anyway, this topic is fascinating to me at the moment, so there surely will be more to come...

### Community
In the mid 90s when I first was introduced to a computer, one fascination that soon emerged was the connection to interesting topics, people and communities it allowed me to make. Nearly 3 decades later, I have to say that I feel a bit lonely on the internet.
I am not sure why. Of course there is more content than ever available, interaction has - arguably - improved and participation is more accessible. Yet I can not seem to find 'the' place for me. Perhaps there is simply too much of everything?

### Roadmap
I want for these sort of random thoughts to have a low barrier to be published - meaning I do not want every post to be titled 'stream of consciousness' going forward.
Currently I think that social media (<a href="https://" target="_blank" rel="noreferrer">bluesky</a> to be more specific) would be an appropriate place for those. Since I have no following there really, and I would also like to publish content here, I'll implement a feed of sorts to display these ?tweets? (I have no idea what to call a 'micro post') here.
