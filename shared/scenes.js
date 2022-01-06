/**
 * MIT License

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

const SCENE = async (eventData) => {
  const sceneName = eventData.payload.slug.split("?")[1].split("&")[0];

  await module["obs"].sceneSetCurrent(sceneName);
  await MANAGE_BUTTONS();
};

const MANAGE_BUTTONS = async () => {
  const CACHE_FILENAME = "board/data.json";
  const data = JSON.parse(file.read(CACHE_FILENAME));
  const layout = data[0].layout;

  layout.forEach(async element => {
    const slugPrefix = element.slug.split("?")[0];
    if (slugPrefix) {
      switch (slugPrefix) {
        case "scn":
          await SCENE_STATUS(element.slug);
          break;
        case "src":
          await SOURCE_STATUS(element.slug);
          break;
        default:
          console.log("Slug Prefix not found");
      }
    }
  });
}

const SCENE_STATUS = async (slug) => {
  const currentScene = await module["obs"].sceneGetCurrent();
  const shortSlug = slug.split("?")[1].split("&")[0];

  shortSlug === currentScene.name
    ? await BOARD.changeColor({ slug: slug, color: "SCN_ENABLE" })
    : await BOARD.changeColor({ slug: slug, color: "SCN_DISABLE" });
}
