(function() {
  var Model, Path, fs;

  fs = require('fs');

  Path = require('path');

  module.exports = Model = (function() {
    function Model(currentFile) {
      this.currentFile = currentFile;
    }

    Model.prototype.path = function() {
      if (this.currentFile.match(/_controller\.rb$/)) {
        return this.getModelForController(this.currentFile);
      } else if (this.currentFile.match(/views\//)) {
        return this.getModelForView(this.currentFile);
      }
    };

    Model.prototype.getModelForController = function(currentFile) {
      var end, file, path, pathToReplace, start;
      if (currentFile.indexOf("s_controller") !== -1) {
        currentFile = currentFile.replace(/s_controller\.rb$/, '.rb');
        path = this.replaceControllerPath(currentFile, /s_controller\.rb$/);
        if (fs.existsSync(path)) {
          return path;
        } else {
          file = currentFile.replace(/^.*[\\\/]/, '');
          start = currentFile.indexOf("controllers");
          end = currentFile.indexOf(file);
          pathToReplace = currentFile.substr(start, end);
          path = currentFile.replace(pathToReplace, 'models/' + file);
          if (fs.existsSync(path)) {
            return path;
          }
        }
      } else {
        path = this.replaceControllerPath(currentFile, /_controller\.rb$/);
        if (fs.existsSync(path)) {
          return path;
        }
      }
    };

    Model.prototype.getModelForView = function(currentFile) {
      var file, path;
      file = currentFile.replace(/^.*[\\\/]/, '');
      path = currentFile.replace(/views\//, 'models/');
      path = path.replace('/' + file, '.rb');
      path = this.singularise(path);
      if (fs.existsSync(path)) {
        return path;
      }
    };

    Model.prototype.singularise = function(pluralPath) {
      return pluralPath.replace(/s\.rb$/, '.rb');
    };

    Model.prototype.replaceControllerPath = function(currentFile, matcher) {
      currentFile = currentFile.replace(matcher, '.rb');
      return currentFile.replace('controllers', 'models');
    };

    return Model;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLGVBQUE7O0FBQUEsRUFBQSxFQUFBLEdBQUssT0FBQSxDQUFRLElBQVIsQ0FBTCxDQUFBOztBQUFBLEVBQ0EsSUFBQSxHQUFPLE9BQUEsQ0FBUSxNQUFSLENBRFAsQ0FBQTs7QUFBQSxFQUdBLE1BQU0sQ0FBQyxPQUFQLEdBQ007QUFDUyxJQUFBLGVBQUUsV0FBRixHQUFBO0FBQWdCLE1BQWYsSUFBQyxDQUFBLGNBQUEsV0FBYyxDQUFoQjtJQUFBLENBQWI7O0FBQUEsb0JBRUEsSUFBQSxHQUFNLFNBQUEsR0FBQTtBQUNKLE1BQUEsSUFBRyxJQUFDLENBQUEsV0FBVyxDQUFDLEtBQWIsQ0FBbUIsa0JBQW5CLENBQUg7ZUFDRSxJQUFDLENBQUEscUJBQUQsQ0FBdUIsSUFBQyxDQUFBLFdBQXhCLEVBREY7T0FBQSxNQUVLLElBQUcsSUFBQyxDQUFBLFdBQVcsQ0FBQyxLQUFiLENBQW1CLFNBQW5CLENBQUg7ZUFDSCxJQUFDLENBQUEsZUFBRCxDQUFpQixJQUFDLENBQUEsV0FBbEIsRUFERztPQUhEO0lBQUEsQ0FGTixDQUFBOztBQUFBLG9CQVFBLHFCQUFBLEdBQXVCLFNBQUMsV0FBRCxHQUFBO0FBQ3JCLFVBQUEscUNBQUE7QUFBQSxNQUFBLElBQUcsV0FBVyxDQUFDLE9BQVosQ0FBb0IsY0FBcEIsQ0FBQSxLQUF1QyxDQUFBLENBQTFDO0FBQ0UsUUFBQSxXQUFBLEdBQWMsV0FBVyxDQUFDLE9BQVosQ0FBb0IsbUJBQXBCLEVBQXlDLEtBQXpDLENBQWQsQ0FBQTtBQUFBLFFBRUEsSUFBQSxHQUFPLElBQUMsQ0FBQSxxQkFBRCxDQUF1QixXQUF2QixFQUFvQyxtQkFBcEMsQ0FGUCxDQUFBO0FBR0EsUUFBQSxJQUFHLEVBQUUsQ0FBQyxVQUFILENBQWMsSUFBZCxDQUFIO0FBQ0UsaUJBQU8sSUFBUCxDQURGO1NBQUEsTUFBQTtBQUdFLFVBQUEsSUFBQSxHQUFPLFdBQVcsQ0FBQyxPQUFaLENBQW9CLFdBQXBCLEVBQWlDLEVBQWpDLENBQVAsQ0FBQTtBQUFBLFVBQ0EsS0FBQSxHQUFRLFdBQVcsQ0FBQyxPQUFaLENBQW9CLGFBQXBCLENBRFIsQ0FBQTtBQUFBLFVBRUEsR0FBQSxHQUFNLFdBQVcsQ0FBQyxPQUFaLENBQW9CLElBQXBCLENBRk4sQ0FBQTtBQUFBLFVBR0EsYUFBQSxHQUFnQixXQUFXLENBQUMsTUFBWixDQUFtQixLQUFuQixFQUEwQixHQUExQixDQUhoQixDQUFBO0FBQUEsVUFJQSxJQUFBLEdBQU8sV0FBVyxDQUFDLE9BQVosQ0FBb0IsYUFBcEIsRUFBbUMsU0FBQSxHQUFZLElBQS9DLENBSlAsQ0FBQTtBQUtBLFVBQUEsSUFBZSxFQUFFLENBQUMsVUFBSCxDQUFjLElBQWQsQ0FBZjtBQUFBLG1CQUFPLElBQVAsQ0FBQTtXQVJGO1NBSkY7T0FBQSxNQUFBO0FBY0UsUUFBQSxJQUFBLEdBQU8sSUFBQyxDQUFBLHFCQUFELENBQXVCLFdBQXZCLEVBQW9DLGtCQUFwQyxDQUFQLENBQUE7QUFDQSxRQUFBLElBQWUsRUFBRSxDQUFDLFVBQUgsQ0FBYyxJQUFkLENBQWY7QUFBQSxpQkFBTyxJQUFQLENBQUE7U0FmRjtPQURxQjtJQUFBLENBUnZCLENBQUE7O0FBQUEsb0JBMEJBLGVBQUEsR0FBaUIsU0FBQyxXQUFELEdBQUE7QUFDZixVQUFBLFVBQUE7QUFBQSxNQUFBLElBQUEsR0FBTyxXQUFXLENBQUMsT0FBWixDQUFvQixXQUFwQixFQUFpQyxFQUFqQyxDQUFQLENBQUE7QUFBQSxNQUNBLElBQUEsR0FBTyxXQUFXLENBQUMsT0FBWixDQUFvQixTQUFwQixFQUErQixTQUEvQixDQURQLENBQUE7QUFBQSxNQUVBLElBQUEsR0FBTyxJQUFJLENBQUMsT0FBTCxDQUFhLEdBQUEsR0FBTSxJQUFuQixFQUF5QixLQUF6QixDQUZQLENBQUE7QUFBQSxNQUdBLElBQUEsR0FBTyxJQUFDLENBQUEsV0FBRCxDQUFhLElBQWIsQ0FIUCxDQUFBO0FBSUEsTUFBQSxJQUFlLEVBQUUsQ0FBQyxVQUFILENBQWMsSUFBZCxDQUFmO0FBQUEsZUFBTyxJQUFQLENBQUE7T0FMZTtJQUFBLENBMUJqQixDQUFBOztBQUFBLG9CQWlDQSxXQUFBLEdBQWEsU0FBQyxVQUFELEdBQUE7YUFDWCxVQUFVLENBQUMsT0FBWCxDQUFtQixRQUFuQixFQUE2QixLQUE3QixFQURXO0lBQUEsQ0FqQ2IsQ0FBQTs7QUFBQSxvQkFvQ0EscUJBQUEsR0FBdUIsU0FBQyxXQUFELEVBQWMsT0FBZCxHQUFBO0FBQ3JCLE1BQUEsV0FBQSxHQUFjLFdBQVcsQ0FBQyxPQUFaLENBQW9CLE9BQXBCLEVBQTZCLEtBQTdCLENBQWQsQ0FBQTthQUNBLFdBQVcsQ0FBQyxPQUFaLENBQW9CLGFBQXBCLEVBQW1DLFFBQW5DLEVBRnFCO0lBQUEsQ0FwQ3ZCLENBQUE7O2lCQUFBOztNQUxGLENBQUE7QUFBQSIKfQ==
//# sourceURL=/Users/sytze/.atom/packages/atom-rails/lib/model.coffee