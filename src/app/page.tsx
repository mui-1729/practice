'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
export default function Home() {
  const [board, setBoard] = useState(0);

  // ボタンを押すとboard + 1
  const click = () => {
    setBoard(board + 1);
    console.log(board + 1);
  };
  // 1からnまで足す
  useEffect(() => {
    const n = window.prompt('入力してください');
    const input: number = Number(n);
    let sum = 0;
    for (let i = 1; i <= input; i++) {
      sum += i;
    }
    console.log(sum);
  }, []);

  useEffect(() => {
    const n = window.prompt('入力してください');
    const input: number = Number(n);
    const sumToN = (n: number): number =>
      Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a + b, 0);
    console.log(sumToN(input));
  }, []);

  // (s + sep) *3
  const repeatWithSep = (s: string, n: number, sep: string): string => {
    const parts: string[] = [];
    for (let i = 1; i <= n; i++) {
      parts.push(s);
    }
    return parts.join(sep);
  };
  console.log(repeatWithSep('h', 3, '-'));

  // thresholdを超えたらtrue
  const anyOver = (num: number[], threshold: number): boolean => {
    return num.some((num) => num > threshold);
  };
  console.log(anyOver([1, 5, 3], 4));
  console.log(anyOver([1, 2, 3], 4));

  // 配列の中の文字列にsufを足す
  const addSuffix = (words: string[], suf: string): string[] => {
    const result = [];
    for (let i = 0; i < words.length; i++) {
      result.push(words[i] + suf);
    }
    return result;
  };
  console.log(addSuffix(['cat', 'dog'], 's'));

  // 偶数を出すやつ
  const filterEven = (nums: number[]): number[] => {
    const result = nums.filter((x) => x % 2 === 0);
    return result;
  };
  console.log(filterEven([10, 15, 20, 25]));

  // wordsにchが何個入っているか
  const countChar = (words: string[], ch: string): number => {
    let num = 0;
    for (const word of words) {
      for (const c of word) {
        if (c === ch) {
          num += 1;
        }
      }
    }
    return num;
  };
  console.log(countChar(['hello', 'world'], 'l'));

  // 2次元配列を1次元に
  const flatten = (matrix: number[][]): number[] => {
    return matrix.flat();
  };
  console.log(flatten([[1, 2], [3], [4, 5]]));

  const flatten2 = (matrix: number[][]): number[] => {
    return matrix.reduce((acc, row) => acc.concat(row), []);
  };
  console.log(flatten2([[1, 2], [3], [4, 5]]));

  return (
    <div className={styles.container}>
      <button onClick={click}> ボタン </button>
    </div>
  );
}
