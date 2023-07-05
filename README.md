# Tagesschau-Scraper

This is an attempt to build a scraper for the Tagesschau website, and return news in a similar fashion to the already existing [Tageschau API](https://tagesschau.api.bund.dev/). This is, because the API is always a few hour behind and because some [other project](https://github.com/RedCommander735/topotest) of mine is dependat on said API and I'd like to change that. The target data will be limited to everything in the 'Ausland' ressort, because this is the only data that concerns my project, but that may change in the future.  

Feel free to contribute to this by creating a pull request.


TODO:
-
- [ ] Remove unneccessary spans from titles
- [ ] Check the date on every element / return it
- [ ] Return tags
- [ ] Return JSON Object