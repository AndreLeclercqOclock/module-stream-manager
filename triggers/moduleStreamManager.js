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

const type = "CLASSIC"; //  CLASSIC / THROTTLE / QUEUE / QUEUE_LOCK / THROTTLE_LOCK

const locker = null; // Only required for QUEUE_LOCK & THROTTLE_LOCK types

const conditions = {
  "evntboard-click": ({ payload }) => payload.slug !== "",
};

async function reaction(eventData) {
  const slugPrefix = eventData.payload.slug.split("?")[0];

  if (slugPrefix) {
    switch (slugPrefix) {
      case "scn":
        await SCENE(eventData);
        break;
      case "src":
        await SOURCE(eventData);
        break;
      default:
        console.log("Slug Prefix not found");
    }
  }
}
