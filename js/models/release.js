// Generated by CoffeeScript 1.7.1
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require, exports, module) {
  var Backbone, Release;
  Backbone = require('backbone');
  return Release = (function(_super) {
    __extends(Release, _super);

    function Release() {
      return Release.__super__.constructor.apply(this, arguments);
    }

    Release.prototype.url = 'api/releases';

    Release.prototype.initialize = function(slug) {
      return this.url += "/" + slug;
    };

    Release.prototype.parseDbCells = function(data) {
      var key, num, release, val;
      for (num in data) {
        release = data[num];
        for (key in release) {
          val = release[key];
          if (this.isJson(val)) {
            release[key] = JSON.parse(val);
          }
        }
      }
      return data;
    };

    Release.prototype.isJson = function(str) {
      var e;
      try {
        JSON.parse(str);
      } catch (_error) {
        e = _error;
        return false;
      }
      return true;
    };

    return Release;

  })(Backbone.Model);
});
