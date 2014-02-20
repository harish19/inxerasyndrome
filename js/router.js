// Generated by CoffeeScript 1.7.1
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require, exports, module) {
  var Backbone, Contact, DownloadsView, Release, ReleaseView, Router;
  Backbone = require('backbone');
  DownloadsView = require('views/downloads');
  ReleaseView = require('views/release');
  Contact = require('views/contact');
  Release = require('models/release');
  return Router = (function(_super) {
    __extends(Router, _super);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.routes = {
      '': 'showDownloads',
      'downloads/*slug': 'showRelease',
      'page/:page': 'renderPage',
      'play/*playlist': 'showPlayer',
      'filter/*filter': 'filterProjects',
      'contact': 'showContact',
      '*path': 'default'
    };

    Router.prototype.initialize = function() {
      this.downloadsView = new DownloadsView({
        model: new Release
      });
      this.releaseView = new ReleaseView({
        model: new Release
      });
      return Backbone.history.start();
    };

    Router.prototype.showDownloads = function() {
      return this.downloadsView.render();
    };

    Router.prototype.showRelease = function(slug) {
      if (!slug) {
        return this.downloadsView.render();
      }
      if (this.downloadsView.rendered) {
        return this.releaseView.render(slug);
      } else {
        this.downloadsView.render();
        return this.releaseView.render(slug);
      }
    };

    Router.prototype.renderPage = function(page) {
      return this.downloadsView.render(page - 1);
    };

    Router.prototype.showPlayer = function(playlist) {
      if (this.downloadsView.rendered) {
        return this.releaseView.player(playlist);
      } else {
        this.releaseView.player(playlist);
        return this.downloadsView.render();
      }
    };

    Router.prototype.filterProjects = function(filter) {
      return this.downloadsView.render(0, filter);
    };

    Router.prototype.showContact = function() {
      var contact;
      contact = new Contact();
      return contact.render();
    };

    Router.prototype["default"] = function(path) {
      return this.downloadsView.render();
    };

    return Router;

  })(Backbone.Router);
});
