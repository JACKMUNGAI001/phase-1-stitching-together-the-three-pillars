/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {}
// ...existing code...
function superbowlWin(record) {
  const win = record.find(game => game.result === "W");
  return win ? win.year : undefined;
}
// ...existing code...