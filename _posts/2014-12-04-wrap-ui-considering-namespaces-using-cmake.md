---
layout: post
description: "There is a macro for wrap Qt ui files considering namespace."
category : lessons
tags : [qt, cmake, english]
---
{% include base/setup %}

It's common to organize code in folders, usually representing namespaces to avoid name clashes. But when using ui Qt files cmake, the `qt5_wrap_ui` macro only consider filenames ignoring folder path. Ui files with the same name and different folder overlaps in the build dirrectory generating compilation problems. The following code is a replacement of `qt5_wrap_ui` macro that consider filepath fixing the exposed problem.

##Code

The awesome macro:

<script src="https://gist.github.com/edwrodrig/0270beff55a675fa35c4.js"></script>

