import React, { Component } from "react";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/snippets/python";
import "ace-builds/src-noconflict/theme-github";
class TextEditor extends Component {
  onChange(newValue) {
    console.log("change", newValue);
  }

  markers = [
    {
      startRow: 3,
      type: "text",
      className: "test-marker",
    },
  ];
  render() {
    return (
      <div style={{ textAlign: "center", margin: "0 25%" }}>
        <div className="container">
          <h1 style={{ margin: "50px 0" }}>Try Your Coding Skills</h1>
          <AceEditor
            placeholder="Placeholder Text"
            mode="javascript"
            theme="monokai"
            name="blah2"
            onLoad={this.onLoad}
            onChange={this.onChange}
            fontSize={20}
            showPrintMargin={true}
            showGutter={true}
            style={{ margin: "0 auto" }}
            highlightActiveLine={true}
            value={`function onLoad(editor) {
  console.log("i've loaded");
}`}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
        </div>
      </div>
    );
  }
}

export default TextEditor;
