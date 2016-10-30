var organizer = organizer || (function($) {
  var init = function(selector) {
    $(selector).text("Testing loading a Javascript file");
  },

  /**
   * @param {string} title - The plaintext title of the article.
   * @param {date}   date  - The date that the article was published.
   * @param {string} summary - A short description of the article.
   * @param {string} url     - The URL of the article.
   */
  addArticle = function(title, date, summary, url) {
    var newInstance = $('.template').clone();
    newInstance.removeClass('template');
    newInstance.find('.title-text').text(title);
    newInstance.find('.date').text(date);
    newInstance.find('.content').text(summary);
    newInstance.find('.link').attr('href', url);
    newInstance.appendTo('.masonry');
    newInstance.show();
  };

  return {
    addArticle: addArticle
  }
})(jQuery);
