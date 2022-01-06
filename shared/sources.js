/**
 *
MIT License

Copyright (c) 2021 André LECLERCQ

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

 */

const SOURCE = async (eventData) => {
  const slug = eventData.payload.slug
  const source = slug.split("?")[1].split("&");
  const sourceName = source[0];
  const sourceAction = source[1];
  const currentScene = await module["obs"].sceneGetCurrent();

  switch (sourceAction) {
    case "show": {
      await module["obs"].sceneItemVisibilityToggle(currentScene, sourceName);
      break;
    }
    case "mute": {
      await module["obs"].sourceMuteToggle(sourceName);
      break;
    }
    default:
      console.log("Action not found !");
  };

  await SOURCE_STATUS(slug);
};

const SOURCE_STATUS = async (slug) => {
  const source = slug.split("?")[1].split("&");
  const sourceName = source[0];
  const sourceAction = source[1];
  const currentScene = await module["obs"].sceneGetCurrent();

  switch (sourceAction) {
    case "show": {
      const sourceSettings = await module["obs"].sceneItemGetSettings(currentScene, sourceName);
      sourceSettings.visible
        ? await BOARD.changeColor({ slug: slug, color: "SRC_ENABLE" })
        : await BOARD.changeColor({ slug: slug, color: "SRC_DISABLE" });
      break;
    }
    case "mute": {
      const audioMuteInfo = await module["obs"].sourceGetMute(sourceName);
      audioMuteInfo.muted
        ? await BOARD.changeColor({ slug: slug, color: "SRC_DISABLE" })
        : await BOARD.changeColor({ slug: slug, color: "SRC_ENABLE" });
      break;
    }
    default:
      console.log("Type incorrect !")
  }
}
