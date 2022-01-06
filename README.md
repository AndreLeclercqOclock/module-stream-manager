# Module Stream Manager

**This module will allow you to create automated buttons for OBS management with the Board module of the EvntBoard project.**

[EvntBoard Project](https://github.com/EvntBoard)

## Install

**Require**

- [Module Board](https://github.com/EvntBoard/module-board)
- [Module OBS](https://github.com/EvntBoard/module-obs)

Install Module from EvntBoard [read documentation](https://www.evntboard.io/docs/getting-started/install-module) with the repo url : https://github.com/AndreLeclercq/module-stream-manager

## Quick start

- Edit the board module from EvntBoard dashboard.
- Create new button.
- Into the slug write this `scn?scene-name` The 'scene-name' must be strictly identical to the name of the scene on obs.
- Save and try your new button ;)

## Slugs List

**Please note that all scene and sources names must be strictly identical to those of OBS, including capitalization. So I advise you to rename all your sources and scenes in lower case with a - between each word. For example: my-scene**

### Scenes

Should start with `scn?`

**-> Change Scene**

After the `?` write the obs scene name.

Example:
`scn?waiting-screen`

---

### Sources

Should start with `src?`
After the `?` write the obs source name.

**-> Show/Hide Source**

After the source name add `&show`

Example:
`src?webcam&show`

**-> Mute/Unmute Audio Source**

After the source name add `&mute`

Example:
`src?Mic&mute`


---

### Say

Should start with `say?`
After the `?` write the command name.

**-> Use a predefined message (into shared/config.js)**

Add the message into `shared/config.js` on "messages"

```
"command_name": "My message"
```

And use command name into slug

Example:
`say?command_name`

You can use it into the chat twitch like this : `!command_name`.

**-> Define message into the slug**

After the command name add `&msg=My message`

Example:
`say?new_command&msg=This my new message`

## Advanced

### Colors

If you want you can change the colors of the buttons from the `shared/config.js` file.

### Messages

Define messages for the chat into the `shared/config.js` file.

## TODO

- Add Start and Stop streaming managment
- Add action with countdown
