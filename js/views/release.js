// Generated by CoffeeScript 1.7.1
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require, exports, module) {
  var $, Backbone, Release, ReleaseTpl, ReleaseView, _;
  $ = require('jquery');
  _ = require('underscore');
  Backbone = require('backbone');
  Release = require('models/release');
  ReleaseTpl = require('text!templates/release.tpl');
  return ReleaseView = (function(_super) {
    __extends(ReleaseView, _super);

    function ReleaseView() {
      return ReleaseView.__super__.constructor.apply(this, arguments);
    }

    ReleaseView.prototype.el = '.modal-content';

    ReleaseView.prototype.render = function(slug) {
      var release;
      release = new Release(slug);
      return release.fetch({
        success: (function(_this) {
          return function(model, data) {
            var template;
            template = _.template(ReleaseTpl);
            data = _this.model.parseDbCells(data);
            _this.$el.find('.modal-body').html(template({
              release: data[0]
            }));
            _this.$el.find('.modal-title').html("" + data[0].project + " - " + data[0].title + " (" + data[0].year + ")");
            return $('#myModal').modal('show');
          };
        })(this)
      });
    };

    return ReleaseView;

  })(Backbone.View);
});
