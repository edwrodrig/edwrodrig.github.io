---
layout: post
description: "In this article is explained and alternative the organize yout Qt unit test in one main file using c++11 lambda functions."
category : lessons
tags : [qt, test, c++11,english]
---
{% include base/setup %}

I found problems to organize my Qt unit test in multiple classes. Some macros like `QTEST_APPLESS_MAIN` forces you to have one project per unit test class, and maintaining this could be a headache. If you are using c++11 you can take advantage of lambda functions to get rid of this problem with little code.

##Code

There is the magic:

<script src="https://gist.github.com/edwrodrig/5c84af39bc151f4cd815.js"></script>

##Alternative solutions

If you don't like my solution, try with these alternatives:

* [Included all](http://stackoverflow.com/questions/12194256/qt-how-to-organize-unit-test-with-more-than-one-class)
* [Using a library](http://qtcreator.blogspot.com/2009/10/running-multiple-unit-tests.html)