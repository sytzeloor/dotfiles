(function() {
  var Path, Related, fs;

  fs = require('fs');

  Path = require('path');

  module.exports = Related = (function() {
    function Related(currentFile) {
      this.currentFile = currentFile;
    }

    Related.prototype.path = function() {
      var file, path;
      file = this.currentFile.replace(/^.*[\\\/]/, '');
      if (this.currentFile.match(/models\//)) {
        path = Path.join(atom.project.getPath(), 'db/schema.rb');
        if (fs.existsSync(path)) {
          return path;
        }
      }
      if (this.currentFile.match(/controllers\//)) {
        path = this.currentFile.replace(/controller/g, 'helper');
        if (fs.existsSync(path)) {
          return path;
        }
      }
      if (this.currentFile.match(/views\//)) {
        path = this.currentFile.replace(/views/g, 'controllers');
        path = path.replace('/' + file, '_controller.rb');
        if (fs.existsSync(path)) {
          return path;
        }
      }
    };

    return Related;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLGlCQUFBOztBQUFBLEVBQUEsRUFBQSxHQUFLLE9BQUEsQ0FBUSxJQUFSLENBQUwsQ0FBQTs7QUFBQSxFQUNBLElBQUEsR0FBTyxPQUFBLENBQVEsTUFBUixDQURQLENBQUE7O0FBQUEsRUFHQSxNQUFNLENBQUMsT0FBUCxHQUNNO0FBQ1MsSUFBQSxpQkFBRSxXQUFGLEdBQUE7QUFBZ0IsTUFBZixJQUFDLENBQUEsY0FBQSxXQUFjLENBQWhCO0lBQUEsQ0FBYjs7QUFBQSxzQkFFQSxJQUFBLEdBQU0sU0FBQSxHQUFBO0FBRUosVUFBQSxVQUFBO0FBQUEsTUFBQSxJQUFBLEdBQU8sSUFBQyxDQUFBLFdBQVcsQ0FBQyxPQUFiLENBQXFCLFdBQXJCLEVBQWtDLEVBQWxDLENBQVAsQ0FBQTtBQUNBLE1BQUEsSUFBRyxJQUFDLENBQUEsV0FBVyxDQUFDLEtBQWIsQ0FBbUIsVUFBbkIsQ0FBSDtBQUNFLFFBQUEsSUFBQSxHQUFPLElBQUksQ0FBQyxJQUFMLENBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFiLENBQUEsQ0FBVixFQUFrQyxjQUFsQyxDQUFQLENBQUE7QUFDQSxRQUFBLElBQWUsRUFBRSxDQUFDLFVBQUgsQ0FBYyxJQUFkLENBQWY7QUFBQSxpQkFBTyxJQUFQLENBQUE7U0FGRjtPQURBO0FBSUEsTUFBQSxJQUFHLElBQUMsQ0FBQSxXQUFXLENBQUMsS0FBYixDQUFtQixlQUFuQixDQUFIO0FBQ0UsUUFBQSxJQUFBLEdBQU8sSUFBQyxDQUFBLFdBQVcsQ0FBQyxPQUFiLENBQXFCLGFBQXJCLEVBQW9DLFFBQXBDLENBQVAsQ0FBQTtBQUNBLFFBQUEsSUFBZSxFQUFFLENBQUMsVUFBSCxDQUFjLElBQWQsQ0FBZjtBQUFBLGlCQUFPLElBQVAsQ0FBQTtTQUZGO09BSkE7QUFPQSxNQUFBLElBQUcsSUFBQyxDQUFBLFdBQVcsQ0FBQyxLQUFiLENBQW1CLFNBQW5CLENBQUg7QUFDRSxRQUFBLElBQUEsR0FBTyxJQUFDLENBQUEsV0FBVyxDQUFDLE9BQWIsQ0FBcUIsUUFBckIsRUFBK0IsYUFBL0IsQ0FBUCxDQUFBO0FBQUEsUUFDQSxJQUFBLEdBQU8sSUFBSSxDQUFDLE9BQUwsQ0FBYyxHQUFBLEdBQU0sSUFBcEIsRUFBMkIsZ0JBQTNCLENBRFAsQ0FBQTtBQUVBLFFBQUEsSUFBZSxFQUFFLENBQUMsVUFBSCxDQUFjLElBQWQsQ0FBZjtBQUFBLGlCQUFPLElBQVAsQ0FBQTtTQUhGO09BVEk7SUFBQSxDQUZOLENBQUE7O21CQUFBOztNQUxGLENBQUE7QUFBQSIKfQ==
//# sourceURL=/Users/sytze/.atom/packages/atom-rails/lib/related.coffee