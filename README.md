# EA Graveyard

Project similar to www.killedbygoogle.com or the google graveyard site.

A graveyard for video game developers that EA has killed, along with other beloved game studios that we've lost along the way.

# 🚧 Still Under Construction🚧

# Contributing

To add a game developer studio, gather the following information:

- `name`: Name of the game developer studio
- `ownedBy`: Parent company that owns the studio (not all studios were founded independently)
- `acquiredBy`: Company that acquired the studio (not all studios were acquired)
- `dateFounded`: Date of founding
- `dateAcquired`: Date when acquired (when applicable)
- `dateClosed`: Date when studio was closed (when applicable)
- `link`: A link with the latest relevant information about the studio
- `status`: One out of CLOSED, REVIVED, DECLINING
- `searchTags`: List of searchable tags based on company names and video game series 

## Through Github Issue

If you are not familiar or do not want to use `git`, please submit a [github issue](https://github.com/Somesingman/ea-graveyard/issues/new) requesting a change or addition.

## Through Git

1. Fork this repository
2. Create a new branch in your forked version of the repository. Preferably name it with the game studio name you intend to include
3. Switch to that branch and open the `studios.json` file
4. WIP

## Guidelines

### Description

The description should be about 40 words or less that describes the studio's impact on the video game industry and game series that it's widely recognized for.

Please be respectful and refer to closed studios in the past tense.

### Status

The status can only be either `closed`, `declining`, or `revived` as a string.

### Link

The link should be to a resource that announces the closure of the studio along with additional informationa about the game studio and the games it is known for developing. Links to a news organization is preferable. **Please do not use links from the studio or parent company itself, it is common for these links to go dead after the studio's closure.**

### Search Tags

Include the name of the game studio and parent company. Instead of listing individual video games, list prominent video game series the game studio is known for developing or heavily associated with.

## Any Issues? Suggestions?

If you have an issues or suggestions, please [open a new issue](https://github.com/Somesingman/ea-graveyard/issues/new) describing the improvement or feature you would like to see.

# TODO:
- Create github action that checks links are still valid
- Create pull request template
- Script to add new game studios
- Nice to haves:
  - Apply additional sort on studios that have null for a particular sorting field. (ie studio that has not closed, should be sorted by acquired date or date founded when sorting by date closed)