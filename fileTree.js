import { openFile } from './editor.js';

export function renderFileTree(treeData) {
  // Recursively render file/folder structure in sidebar
}

export function onFileClick(filePath) {
  openFile(filePath);
}

export function onFolderToggle(folderPath) {
  // Expand/collapse folder in tree
}