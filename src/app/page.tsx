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
    const input2: number = Number(x);
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
    console.log(fibSeq(10));

    // 再帰関数フィボナッチ数列
    const fib2 = (n: number): number => {
      if (n === 0) return 0;
      if (n === 1) return 1;
      return fib2(n - 1) + fib2(n - 2);
    };

    const fib2List = (n: number): number[] => {
      const result: number[] = [];
      for (let i = 0; i <= n; i++) {
        result.push(fib2(i));
      }
      return result;
    };
    console.log(fib2List(10));

    // aとbを合体して配列
    const zip = <T, U>(a: T[], b: U[]): [T, U][] => {
      const length = Math.min(a.length, b.length);
      const result: [T, U][] = [];
      for (let i = 0; i < length; i++) {
        result.push([a[i], b[i]]);
      }
      return result;
    };
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

    // 階乗
    const factirual = (n: number): number => {
      let result = 1;
      for (let i = 1; i <= n; i++) {
        result *= i;
      }
      return result;
    };
    console.log(factirual(5));

    // 文字列配列から最長の文字列を出す
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

    function unique<T>(array: T[]): T[] {
      return [...new Set(array)];
    }
    console.log(unique([1, 2, 2, 3, 1]));

    // 配列を指定サイズのチャンク（分割）に分ける
    const chunk = <T,>(array: T[], size: number): T[][] => {
      const result: T[][] = [];
      for (let i = 0; i < array.length; i++) {
        if (i % 2 === 1) continue;
        result.push(array.slice(i, i + size));
      }
      return result;
    };
    console.log(chunk([1, 2, 3, 4, 5], 2));

    // numにtargetがあったらインデックスを返す
    const binarySearch = (num: number[], target: number) => {
      for (let i = 0; i < num.length; i++) {
        if (num[i] === target) {
          return i;
        }
      }
      return -1;
    };
    console.log(binarySearch([1, 2, 4, 7, 9], 4));

    const binarySearch2 = (num: number[], target: number) => {
      const numIndex = num
        .map((value, index) => ({ value, index }))
        .filter((i) => i.value === target)
        .map((i) => i.index);

      return numIndex.length > 0 ? numIndex[0] : -1;
    };
    console.log(binarySearch2([1, 2, 4, 7, 9], 4));

    const binarySearch3 = (nums: number[], target: number): number => {
      return nums.indexOf(target);
    };
    console.log(binarySearch3([1, 2, 4, 7, 9], 4));

    const binarySearch4 = (nums: number[], target: number): number => {
      let low = 0,
        high = nums.length - 1;
      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) {
          return mid;
        } else if (nums[mid] < target) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }
      return -1;
    };
    console.log(binarySearch4([1, 2, 4, 7, 9], 5));

    const binarySearch5 = (nums: number[], target: number): number =>
      nums.findIndex((value) => value === target);
    console.log(binarySearch5([1, 2, 4, 7, 9], 5));

    // 1-n出力
    const printNumber = (n: number) => {
      for (let i = 1; i <= n; i++) {
        console.log(i);
      }
    };
    printNumber(5);

    // あいさつ
    const greet = (name: string): string => {
      return `Hello, ${name}!`;
    };
    console.log(greet('Alice'));

    // 二乗
    const squareList = (nums: number[]): number[] => {
      return nums.map((i) => i ** 2);
    };
    console.log(squareList([1, 2, 3]));

    // 奇数
    const filterOdds = (nums: number[]): number[] => {
      return nums.filter((nums) => nums % 2 === 1);
    };
    console.log(filterOdds([1, 2, 3, 4, 5]));

    // 区切り文字で連結
    const joinWithSep = (word: string[], sep: string) => {
      const result = [];
      for (const i of word) {
        result.push(i);
      }
      return result.join(sep);
    };
    console.log(joinWithSep(['a', 'b', 'c'], '-'));

    // 文字長さリスト
    const wordLengths = (words: string[]): number[] => {
      const result = [];
      for (const word of words) {
        result.push(word.length);
      }
      return result;
    };
    console.log(wordLengths(['hi', 'TypeScript', 'JS']));

    const wordLengths2 = (words: string[]): number[] => {
      return words.map((w) => w.length);
    };
    console.log(wordLengths2(['hi', 'TypeScript', 'JS']));

    const calc = (first: number, last: number): number => {
      return ((first + last) * (last - first + 1)) / 2;
    };
    console.log(calc(3, 10));

    // あいさつ
    const greet2 = (name: string): string => {
      return `こんにちは${name}さん！`;
    };
    console.log(greet2('鈴木'));

    // 税率計算
    const calcPriceWithTax = (price: number, taxRate: number = 0.1): number => {
      return price + price * taxRate;
    };
    console.log(calcPriceWithTax(1000));
    console.log(calcPriceWithTax(1000, 0.08));

    // ユーザ情報を整形
    interface User {
      id: number;
      name: string;
      email?: string;
    }
    const user: User = {
      id: 101,
      name: '山田太郎',
      email: 'yamada@example.com',
    };
    const formatUser = (User: User) => {
      return `「ID:[${User.id}], Name:[${User.name}]」`;
    };
    console.log(formatUser(user));

    //数値配列から偶数を抽出
    const originalNumbers = [1, 2, 3, 4, 5, 6];
    const filterEvenNumbers = (numbers: number[]): number[] => {
      return numbers.filter((num) => num % 2 === 0);
    };
    console.log(filterEvenNumbers(originalNumbers));

    //ユーザ名の配列作成
    interface User {
      id: number;
      name: string;
      email?: string;
    }
    const users: User[] = [
      { id: 1, name: '佐藤' },
      { id: 2, name: '鈴木' },
      { id: 3, name: '高橋' },
    ];
    const getUserNames = (users: User[]): string[] => {
      return users.map((user) => user.name);
    };
    console.log(getUserNames(users));

    //入力の型によって処理を分ける関数
    const processInput = (i: string | number): string | number => {
      if (typeof i === 'string') {
        return i.toUpperCase();
      } else if (typeof i === 'number') {
        return i * 2;
      } else return i;
    };
    console.log(processInput('hello'));
    console.log(processInput(123));

    interface Product {
      id: string;
      name: string;
      details?: {
        price?: number;
        description?: string;
      };
    }
    const productA: Product = {
      id: 'a-001',
      name: '高性能マウス',
      details: {
        price: 5000,
        description: '快適な操作性を提供します。',
      },
    };
    const productB: Product = {
      id: 'b-002',
      name: 'メカニカルキーボード',
      details: {
        description: '打鍵感が特徴です。', // priceがない
      },
    };
    const productC: Product = {
      id: 'c-003',
      name: '4Kモニター', // details自体がない
    };
    const getProductPrice = (product: Product): string => {
      if (product.details?.price !== undefined) {
        return `価格:[${product.details.price}]円`;
      } else {
        return '価格情報なし';
      }
    };
    console.log(getProductPrice(productA));
    console.log(getProductPrice(productB));
    console.log(getProductPrice(productC));

    // const isInArray = <T,>(array: T[], itemToFind: T): boolean => {
    //   for (let i = 0; i < array.length; i++) {
    //     if (array[i] === itemToFind) return true;
    //   }
    //   return false;
    // };
    const isInArray = <T,>(array: T[], itemToFind: T) => {
      return array.includes(itemToFind);
    };
    const numberArray: number[] = [1, 2, 3, 4, 5];
    const stringArray: string[] = ['apple', 'banana', 'cherry'];
    console.log(isInArray(numberArray, 3));
    console.log(isInArray(numberArray, 10));
    console.log(isInArray(stringArray, 'banana'));
    console.log(isInArray(stringArray, 'grape'));
  }, []);
  return (
    <div className={styles.container}>
      <button onClick={click}> ボタン </button>
    </div>
  );
}
