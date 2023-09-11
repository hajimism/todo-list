export function getInitial(name: string) {
  const names = name.split(" ");
  // 3文字以上のfallbackは表示が崩れるので最初の2単語からイニシャルを生成する
  const [first, second] = names;
  const initials = [first, second].map((name) => name?.charAt(0).toUpperCase());
  return initials.join("");
}
