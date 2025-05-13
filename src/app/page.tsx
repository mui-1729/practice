'use client';

import styles from './page.module.css';

export default function Home() {
  // 1からnまで足す
  const n = prompt('入力してください');
  const input: number = Number(n);
  let sum = 0;
  for (let i = 1; i <= input; i++) {
    sum += i;
  }
  console.log(sum);

  // (s + sep) *3
  const repeatWithSep = (s: string, n: number, sep: string): string => {
    const parts: string[] = [];
    for (let i = 1; i <= n; i++) {
      parts.push(s);
    }
    return parts.join(sep);
  };
  console.log(repeatWithSep('h', 3, '-'));

  const anyOver = (nums: number[], threshold: number): boolean => {
    for (let i = 0; (i = nums.length); i++) {
      if (i > threshold) {
        return true;
      }
    }
    return false;
  };
  console.log(anyOver([1, 5, 3], 4));
  console.log(anyOver([1, 2, 3], 4));
  return (
    <div className={styles.container}>
      <button> ボタン </button>
    </div>
  );
}
