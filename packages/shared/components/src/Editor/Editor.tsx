import './Editor.scss';
import React from 'react';
import EditorJs from '@editorjs/editorjs';

export const Editor = () => {
  const editorjs = new EditorJs();
  return <div className="editor" id="editorjs"></div>;
};

export default Editor;
