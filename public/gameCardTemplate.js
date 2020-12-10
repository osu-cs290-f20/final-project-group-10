(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['gameCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"post\" matchCard=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"cardName") || (depth0 != null ? lookupProperty(depth0,"cardName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cardName","hash":{},"data":data,"loc":{"start":{"line":1,"column":35},"end":{"line":1,"column":47}}}) : helper)))
    + "\">\r\n        <div class=\"post-contents\">\r\n          <div class=\"post-image-container\">\r\n            <img class = \"turn-card\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":4,"column":42},"end":{"line":4,"column":49}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"cardName") || (depth0 != null ? lookupProperty(depth0,"cardName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cardName","hash":{},"data":data,"loc":{"start":{"line":4,"column":56},"end":{"line":4,"column":68}}}) : helper)))
    + "\">\r\n          </div>\r\n        </div>\r\n      </div>";
},"useData":true});
})();