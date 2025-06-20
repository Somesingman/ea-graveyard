# EA Graveyard [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](/LICENSE)

Project similar to www.killedbygoogle.com or the google graveyard site.

A graveyard for video game developers that EA has killed, along with other beloved game studios that we've lost along the way.

# 🚧 Still Under Construction 🚧

# Contributing

To add a game developer studio, gather the following information:

- `name`: Name of the game developer studio
- `ownedBy`: Parent company that owns the studio (not all studios were founded independently)
- `acquiredBy`: Company that acquired the studio (not all studios were acquired)
- `dateFounded`: Date of founding
- `dateAcquired`: Date when acquired (when applicable)
- `description`: Short description about the studio and their most popular video games and game series
- `dateClosed`: Date when studio was closed (when applicable)
- `link`: A link with the latest relevant information about the studio
- `logo`: A path (or link) to a high quality image of the studio's logo. An SVG is preferable, otherwise have a minimum height and width of 255px
- `status`: One out of CLOSED, REVIVED, DECLINING
- `searchTags`: List of searchable tags based on company names and video game series 

## Through Github Issue

If you are not familiar or do not want to use `git`, please submit a [github issue](https://github.com/Somesingman/ea-graveyard/issues/new) requesting a change or addition.

## Through Git

1. Fork this repository
2. Create a new branch in your forked version of the repository. Preferably name it with the game studio name you intend to include
3. Switch to that branch and open the `studios.json` file and add a new entry
4. Commit your work in git and [create a Pull Request (PR)](https://help.github.com/en/articles/creating-a-pull-request) using the newly created branch.


## Guidelines

### Description

The description should be about 40 words or less that describes the studio's impact on the video game industry and game series that it's widely recognized for.

Please be respectful and refer to closed studios in the past tense.

### Status

The status can only be either `closed`, `declining`, or `revived` as a string.

### Link

The link should be to a resource that announces the closure of the studio along with additional informationa about the game studio and the games it is known for developing. Links to a news organization is preferable. Sites that require a subscription will be rejected. **Please do not use links from the studio or parent company itself, it is common for these links to go dead after the studio's closure.**

Also please avoid the following news sources if possible as the link-checker workflow cannot check it's validity:
- www.ign.com
- www.financialpost.com

### Logo

It is preferable for the studio logo to be a file that is uploaded to this project rather than a link. An SVG is also preferred over other formats, otherwise it must have a minimum height and width of 255px.

If uploading a file, place it inside the `ea-graveyard/public/logos` folder and the string path should start with `./logos/`.


### Search Tags

Include the name of the game studio and parent company. Instead of listing individual video games, list prominent video game series the game studio is known for developing or heavily associated with.

## Any Issues? Suggestions?

If you have an issues or suggestions, please [open a new issue](https://github.com/Somesingman/ea-graveyard/issues/new) describing the improvement or feature you would like to see.
