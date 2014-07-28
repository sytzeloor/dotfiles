(function() {
  module.exports = {
    activate: function() {
      return atom.workspaceView.command("hashy:convert", (function(_this) {
        return function() {
          return _this.convert();
        };
      })(this));
    },
    convert: function() {
      var editor, replace_reg_exp, replacement, selection;
      editor = atom.workspace.activePaneItem;
      selection = editor.getSelection().getText();
      replace_reg_exp = new RegExp(":([a-z_\d]+) =>", "g");
      replacement = selection.replace(replace_reg_exp, "$1:");
      return editor.insertText(replacement);
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxFQUFBLE1BQU0sQ0FBQyxPQUFQLEdBQ0U7QUFBQSxJQUFBLFFBQUEsRUFBVSxTQUFBLEdBQUE7YUFDUixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQW5CLENBQTJCLGVBQTNCLEVBQTRDLENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFBLEdBQUE7aUJBQUcsS0FBQyxDQUFBLE9BQUQsQ0FBQSxFQUFIO1FBQUEsRUFBQTtNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBNUMsRUFEUTtJQUFBLENBQVY7QUFBQSxJQUdBLE9BQUEsRUFBUyxTQUFBLEdBQUE7QUFDUCxVQUFBLCtDQUFBO0FBQUEsTUFBQSxNQUFBLEdBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUF4QixDQUFBO0FBQUEsTUFDQSxTQUFBLEdBQVksTUFBTSxDQUFDLFlBQVAsQ0FBQSxDQUFxQixDQUFDLE9BQXRCLENBQUEsQ0FEWixDQUFBO0FBQUEsTUFFQSxlQUFBLEdBQXNCLElBQUEsTUFBQSxDQUFPLGlCQUFQLEVBQXlCLEdBQXpCLENBRnRCLENBQUE7QUFBQSxNQUdBLFdBQUEsR0FBYyxTQUFTLENBQUMsT0FBVixDQUFrQixlQUFsQixFQUFrQyxLQUFsQyxDQUhkLENBQUE7YUFLQSxNQUFNLENBQUMsVUFBUCxDQUFrQixXQUFsQixFQU5PO0lBQUEsQ0FIVDtHQURGLENBQUE7QUFBQSIKfQ==
//# sourceURL=/Users/sytze/.atom/packages/hashy/lib/hashy.coffee