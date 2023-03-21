Using the [Next.js](https://nextjs.org/) template recommended when reporting a [bug in the Next.js repository](https://github.com/vercel/next.js/issues).

## Steps to reproduce 
- Make sure to delete the /build folder if you have one. 
- Run ```yarn dev``` and open "localhost:3000", it should be an empty page with "Hello world".
- In the IDE, open `/build/testing/text.txt` and make sure it's populated with the string ", one, two, three, four".
- Kill the ```yarn dev``` and re-run it. Re-check `/build/testing/text.txt` - it should be an empty file. /!\ You might need to do this step a couple of times as the issue appears randomly and not necessarily on the second run. 

## Workaround
As a workaround for now, we have use `useCache: false` into our Webpack config and this seems to have fixed the issue. Another solution was to delete the `/build` folder between each ```yarn dev```.
