(function() {
  var Model, Related;

  Model = require('./model');

  Related = require('./related');

  module.exports = {
    atomRailsView: null,
    activate: function(state) {
      atom.workspaceView.command("atom-rails:switch-to-model", (function(_this) {
        return function() {
          return _this.switchToModel();
        };
      })(this));
      return atom.workspaceView.command("atom-rails:related", (function(_this) {
        return function() {
          return _this.related();
        };
      })(this));
    },
    switchToModel: function() {
      var currentFile, file;
      currentFile = atom.workspace.getActiveEditor().getPath();
      file = new Model(currentFile).path();
      if (file != null) {
        return atom.workspaceView.open(file);
      }
    },
    related: function() {
      var currentFile, file;
      currentFile = atom.workspace.getActiveEditor().getPath();
      file = new Related(currentFile).path();
      if (file != null) {
        return atom.workspaceView.open(file);
      }
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLGNBQUE7O0FBQUEsRUFBQSxLQUFBLEdBQVEsT0FBQSxDQUFRLFNBQVIsQ0FBUixDQUFBOztBQUFBLEVBQ0EsT0FBQSxHQUFVLE9BQUEsQ0FBUSxXQUFSLENBRFYsQ0FBQTs7QUFBQSxFQUdBLE1BQU0sQ0FBQyxPQUFQLEdBQ0U7QUFBQSxJQUFBLGFBQUEsRUFBZSxJQUFmO0FBQUEsSUFFQSxRQUFBLEVBQVUsU0FBQyxLQUFELEdBQUE7QUFDUixNQUFBLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBbkIsQ0FBMkIsNEJBQTNCLEVBQXlELENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFBLEdBQUE7aUJBQUcsS0FBQyxDQUFBLGFBQUQsQ0FBQSxFQUFIO1FBQUEsRUFBQTtNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBekQsQ0FBQSxDQUFBO2FBQ0EsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFuQixDQUEyQixvQkFBM0IsRUFBaUQsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUEsR0FBQTtpQkFBRyxLQUFDLENBQUEsT0FBRCxDQUFBLEVBQUg7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFqRCxFQUZRO0lBQUEsQ0FGVjtBQUFBLElBTUEsYUFBQSxFQUFlLFNBQUEsR0FBQTtBQUNiLFVBQUEsaUJBQUE7QUFBQSxNQUFBLFdBQUEsR0FBYyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWYsQ0FBQSxDQUFnQyxDQUFDLE9BQWpDLENBQUEsQ0FBZCxDQUFBO0FBQUEsTUFDQSxJQUFBLEdBQVcsSUFBQSxLQUFBLENBQU0sV0FBTixDQUFrQixDQUFDLElBQW5CLENBQUEsQ0FEWCxDQUFBO0FBRUEsTUFBQSxJQUFpQyxZQUFqQztlQUFBLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBQTtPQUhhO0lBQUEsQ0FOZjtBQUFBLElBV0EsT0FBQSxFQUFTLFNBQUEsR0FBQTtBQUNQLFVBQUEsaUJBQUE7QUFBQSxNQUFBLFdBQUEsR0FBYyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWYsQ0FBQSxDQUFnQyxDQUFDLE9BQWpDLENBQUEsQ0FBZCxDQUFBO0FBQUEsTUFDQSxJQUFBLEdBQVcsSUFBQSxPQUFBLENBQVEsV0FBUixDQUFvQixDQUFDLElBQXJCLENBQUEsQ0FEWCxDQUFBO0FBRUEsTUFBQSxJQUFpQyxZQUFqQztlQUFBLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBQTtPQUhPO0lBQUEsQ0FYVDtHQUpGLENBQUE7QUFBQSIKfQ==
//# sourceURL=/Users/sytze/.atom/packages/atom-rails/lib/atom-rails.coffee