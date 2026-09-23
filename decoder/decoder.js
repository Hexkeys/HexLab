// HexLab decoder/category module.
// This keeps the classification logic separate from the main UI.
// Note: a browser-delivered JavaScript file is still visible to visitors;
// this is organization/obscurity, not security.
window.detect=function(c){
  const s=c.toLowerCase();
  if(/\\b(import|from)\\s+react|jsx|use(state|effect)|<\\/?[a-z]+/.test(s)&&/react/.test(s))return'React';
  if(/<(!doctype|html|div|section|button|body)/.test(s))return'HTML';
  if(/\\b(const|let|var|function|=>|console\\.log|document\\.)/.test(s))return'JavaScript';
  if(/\\b(def|import|from|print\\(|elif|async def|pip)\\b/.test(s))return'Python';
  if(/\\b(public|private|class|static void|System\\.out)\\b/.test(s))return'Java';
  if(/\\b(fn main|println!|let mut|use std::)\\b/.test(s))return'Rust';
  if(/\\b(SELECT|FROM|INSERT INTO|CREATE TABLE|UPDATE)\\b/i.test(s))return'SQL';
  if(/[#.]?[a-zA-Z][\\w-]*\\s*\\{[^}]*:[^}]*\\}/.test(s))return'CSS';
  if(/^\\s*(#!\\/bin\\/|echo\\s|sudo\\s|apt\\s|cd\\s)/m.test(s))return'Shell';
  return'Other';
};