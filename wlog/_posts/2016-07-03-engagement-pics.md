---
layout: post
title: 'Engagement Photos'
date: 2016-07-03 21:14:34
tags: b+m, origin story
lead_text: 'A glimpse at some of the pictures'
---
{% for file in site.static_files %}
     {{ file.url }}
{% endfor %}

{% for file in site.static_files %}
  {% assign pageurl = page.url | replace: 'index.html', '' %}
  {% if file.path contains pageurl %}
    {% if file.extname == '.jpg' or file.extname == '.jpeg' or file.extname == '.JPG' or file.extname == '.JPEG' %}
    <img src="{{ file.path }}" />
    {% endif %}
  {% endif %}
{% endfor %}