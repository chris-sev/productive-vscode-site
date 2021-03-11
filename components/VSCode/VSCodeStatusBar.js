export default function VSCodeStatusBar() {
  return (
    <div
      style={{ background: "#007acc" }}
      className="rounded-b flex items-center justify-between p-2 text-blue-100 text-sm"
    >
      {/* left side ======================================================= */}
      <div className="flex space-x-4">
        <div>main</div>
        <div>
          <span>0 down</span>
          <span>1 up</span>
        </div>
      </div>

      {/* right side ======================================================= */}
      <div className="flex space-x-4">
        <div>Ln 18, Col 20</div>
        <div>Spaces: 2</div>
        <div>UTF-8</div>
        <div>LF</div>
        <div>JavaScript</div>
        <div>Prettier</div>
        <div>BELL ICON</div>
      </div>
    </div>
  );
}
