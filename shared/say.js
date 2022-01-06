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

const SAY = async (eventData) => {
  const slug = eventData.payload.slug.split("?")[1].split("&");
  const command = slug[0];
  if(slug[1]) {
    const actions = slug[1].split("+");

    actions.forEach(async action => {
      const type = action.split("=")[0];
      const arg = action.split("=")[1]
      switch (type) {
        case "msg":
          await module['twitch'].say(arg);
          break;
        default:
          console.log("Type undefined !");
      }
    });
  }

  const message = CONFIG.messages[command];
  if(message) {
    await module['twitch'].say(message);
  }
};

const COMMAND = async (command) => {
  const message = CONFIG.messages[command];
  if(message) {
    await module['twitch'].say(message);
  }
}
