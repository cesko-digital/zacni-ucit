# How to publish code to this repository

Start with cloning official repository to your computer:

```
git clone git@github.com:cesko-digital/zacni-ucit.git

```

Every time you want to publish new feature or bugfix follow those steps please:

* Switch to `master` branch with `git checkout master`
* Create new branch `git checkout -b <your_name_or_nick>/<branch_name>-<issue_number>`.
  For example, if you want to build new scraper for Masarykova univerzita based on
  [Trello](https://trello.com/b/zrTT6Cdn/za%C4%8Dni-u%C4%8Dit) ticket \#123,
  your command will looks like `git checkout -b michal/mu-scraper-123`. If there is no Trello ticket
  you will name it like `michal/mu-scraper`.
* Implement your feature. Once you are done, publish it on Github with
  `git push origin/<your_name_or_nick>/<branch_name>-<issue_number>`, for example
  `git push origin michal/mu-scraper-123`
* Go to [GitHub](https://github.com/cesko-digital/zacni-ucit) and create Pull Request. Name it properly
  and provide basic description what your PR is about.
* Your Pull Request will be reviewed. Respond to questions & comments. Once Pull Request is reviewed,
  code is merged into master branch and your feature branch is deleted.
* Synchronise your local repository regularly.

Keep in mind, that each Pull Request should be reasonably small. Don't mix multiple features or
fixes together. Don't publish caches, compiled files, OS specific files, credentials.

Write your codebase, comments, docs, git commit messages in plain English.
