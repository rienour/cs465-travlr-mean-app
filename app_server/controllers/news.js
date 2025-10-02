const { Logger } = require("../../logger/logger")
const { news, tips } = require("../../app_api/endpoints")

/**
 * GET News page.
 *
 * @param req Express Request object
 * @param res Express Response object
 * @param next Express next function
 */
const newsController = async (req, res, next) => {
  let story = null;
  await fetch(`${news.url}/kayaking_experience`, news.options)
    .then((res) => res.json())
    .then((json) => {
      let message = null;
      if (!(json instanceof Array)) {
        message = "News Lookup error";
      } else if (json.length === 0) {
        message = "News not found";
      } else {
        story = json
      }
    })
    .catch((err) => {
      Logger.error(err instanceof Error ? err.message : err);
      return res.status(500).send("Unable to process news article");
    });

  let recents = null;
  await fetch(news.url, news.options)
    .then((res) => res.json())
    .then((json) => {
      let message = null;
      if (!(json instanceof Array)) {
        message = "Recents Lookup error";
      } else if (json.length === 0) {
        message = "No recents found";
      } else {
        recents = json
      }
    })
    .catch((err) => {
      Logger.error(err instanceof Error ? err.message : err);
      return res.status(500).send("Unable to process recent news");
    });

  let tipList = null;
  await fetch(tips.url, tips.options)
    .then((res) => res.json())
    .then((json) => {
      let message = null;
      if (!(json instanceof Array)) {
        message = "Tips Lookup error";
      } else if (json.length === 0) {
        message = "No tips found";
      } else {
        tipList = json
      }
    })
    .catch((err) => {
      Logger.error(err instanceof Error ? err.message : err);
      return res.status(500).send("Unable to process tips");
    });

  res.render("news", { title: "Travlr Getaways", story, recents, tips: tipList });
};

module.exports = {
  newsController,
};
