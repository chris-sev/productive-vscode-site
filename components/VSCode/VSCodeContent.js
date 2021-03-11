import Editor from "@monaco-editor/react";

export default function VSCodeContent() {
  return (
    <div
      className="h-full py-4 px-5 text-gray-300"
      style={{ background: "#1e1e1e" }}
    >
      <Editor
        height="400px"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
    </div>
  );
}
