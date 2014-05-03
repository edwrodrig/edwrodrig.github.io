---
layout: post
description: "In this article is explained how to add social metadata for a html page. This metadata is used for showing nice description boxes in social networks when you share a link on them."
category : lessons
tags : [html, social, english]
---
{% include base/setup %}

In this article is explained how to add social metadata for a html page. This metadata is used for showing nice description boxes in social networks when you share a link on them.

##Code
Paste the following code in the html head section. You may replace the contents like author data and page descriptions by your own ones.

~~~~~~ html
<html itemscope itemtype="http://schema.org/WebApplication">

<!-- Google data-->
<meta name="description" content="Page description." />
<meta name="keywords" content="a few keywords" />
<meta name="author" content="Edwin Rodríguez" />
<meta name="application-name" content="Page name" />

<!-- Google+ data -->
<meta itemprop="name" content="Page name" />
<meta itemprop="description" content="Page description." />
<meta itemprop="image" content="http://page/url/image1.jpg" />

<!-- Twitter Card data -->
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="Page name" />
<meta name="twitter:description" content="Page description." />
<meta name="twitter:creator" content="@edwrodrig" />
<meta name="twitter:image:src" content="http://page/url/image2.jpg" />
<meta name="twitter:image:width" content="640" />
<meta name="twitter:image:height" content="480" />

<!-- Open Graph data -->
<meta property="og:title" content="Page name" />
<meta property="og:type" content="website" />
<meta property="og:url" content="http://page/url" />
<meta property="og:image" content="http://page/url/image3.jpg" />
<meta property="og:image:width" content="640" />
<meta property="og:image:height" content="480" />

<meta property="og:description" content="Page description." />
~~~~~~

##Validation tools
There are links to validation tools for the main social meta tags.

* [Facebook Open Graph](https://developers.facebook.com/tools/debug/)
* [Twitter Card Validator](https://dev.twitter.com/docs/cards/validation/validator)
* [Google](http://www.google.com/webmasters/tools/richsnippets)

##Notes
When you make a change of some meta tag content it's recommended to re-test it with the validation tools. At least Facebook recognizes new metadata if you reload a page with its validation tool. 
