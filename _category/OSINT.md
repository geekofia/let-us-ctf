---
folder: OSINT
permalink: /categories/OSINT/
---

## What is OSINT ?

Open-source intelligence (OSINT) is data collected from publicly available sources to be used in an intelligence context. In the intelligence community, the term "open" refers to overt, publicly available sources (as opposed to covert or clandestine sources). It is not related to open-source software or collective intelligence.

## OSINT Techniques and Resources

While there are a lot of OSINT techniques and mechanisms, not all of them will work for your target. First, warm up by asking yourself a couple of questions:

- What am I looking for?
- What is my main research goal?
- What or who is my target?
- How am I going to conduct my research?

Try to find the answer to these questions, and that will be the first step in your OSINT investigation.

Let's take a look into the most popular OSINT techniques used in cybersecurity:

- Collect employee full names, job roles, as well as the software they use.
- Review and monitor search engine information from Google, Bing, Yahoo, and others.
- Monitoring personal and corporate blogs, as well as review user activity on digital forums.
- Identify all social networks used by the target user or company.
- Review content available on social networks like Facebook, Twitter, Google Plus, or Linkedin.
- Access old cached data from Google – often reveals interesting information.
- Identify mobile phone numbers, as well as mail addresses from social networks, or Google results.
- Search for photographs and videos on common social photo sharing sites, such as Flickr, Google Photos, etc.
- Use Google Maps and other open satellite imagery sources to retrieve images of users' geographic location.

## How to Start ?

Quite simply, it all starts with Google. The hacking techniques commonly referred to as `Google Dorks` are simple yet effective ways to use the most popular search engine on earth for OSINT purposes. This is done thanks to users exposing sensitive information by accident, leaving unprotected data, variables, databases and codes ready for crawling by Google.

Therefore, the only thing we need is to begin querying Google with a few basic search operators. For example if we use `site:<website_name>`, we'll find all the results related to a specific website. If we use `filetype:<file_type>`, it will show only the results from specific types of files. We can also combine both search.

To search for `.sql` databases, for example, we can do this:

```txt
filetype:sql site:<website_name>
```

And we'll get precise results like shown below:

{: .centered-image-wrapper} 
![Google Dorking for SQL DB](https://res.cloudinary.com/chankruze/image/upload/v1589583031/LUC/Category/OSINT/Screenshot_20200516_041515.png){: .img-fluid}

Read OSINT history and more details on:
[Securitytrails.com](https://securitytrails.com/blog/what-is-osint-how-can-i-make-use-of-it) |
[Wikipedia](https://en.wikipedia.org/wiki/Open-source_intelligence)