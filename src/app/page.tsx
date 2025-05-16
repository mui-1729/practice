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
    const n = prompt('入力してください');
    const input: number = Number(n);
    let sum = 0;
    for (let i = 1; i <= input; i++) {
      sum += i;
    }
    console.log(sum);

    const x = prompt('入力してください');
    const input2: number = Number(n);
    const sumToN = (x: number): number =>
      Array.from({ length: x }, (_, i) => i + 1).reduce((a, b) => a + b, 0);
    console.log(sumToN(input2));

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

    // フィボナッチ数列
    const fibSeq = (n: number): number[] => {
      if (n === 1) return [1];
      const result = [1, 1];
      for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
      }
      return result;
    };
    console.log(fibSeq(1));
    console.log(fibSeq(5));
    console.log(fibSeq(10));

    // aとbを合体して配列
    const zip = <T, U>(a: T[], b: U[]): [T, U][] => {
      const length = Math.min(a.length, b.length);
      const result: [T, U][] = [];
      for (let i = 0; i < length; i++) {
        result.push([a[i], b[i]]);
      }
      return result;
    };
    console.log(zip([1, 2, 3], ['a', 'b']));
    console.log(zip([true, false], [10, 20, 30]));

    // n次元配列を1次元配列に
    type NestedArray<T> = Array<T | NestedArray<T>>;
    const deepFlatten = <T,>(arr: NestedArray<T>): T[] => {
      const result: T[] = [];
      for (const el of arr) {
        if (Array.isArray(el)) {
          result.push(...deepFlatten(el));
        } else {
          result.push(el);
        }
      }
      return result;
    };
    console.log(deepFlatten([1, [2, [3, 4], 5], 6]));

    const factirual = (n: number): number => {
      let result = 1;
      for (let i = 1; i <= n; i++) {
        result *= i;
      }
      return result;
    };
    console.log(factirual(5));

    const longest = (length: string[]): string => {
      let result = '';
      for (const i of length) {
        if (i.length > result.length) result = i;
      }
      return result;
    };
    console.log(longest(['foo', 'alphabet', 'bar']));

    const longest2 = (arr: string[]): string =>
      arr.reduce((a, b) => (b.length > a.length ? b : a), '');
    console.log(longest2(['foo', 'alphabet', 'bar']));
  }, []);

  return (
    <div className={styles.container}>
      <button onClick={click}> ボタン </button>
    </div>
  );
}
