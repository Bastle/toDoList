import React, { useEffect, useState } from "react";
import * as R from "ramda";

const Fp = () => {
  const add = R.curry((x, y) => x + y);
  const addOne = add(1);
  const addTen = add(10);
  const match = R.curry((what, str) => str.match(what));
  const replace = R.curry((what, replacement, str) =>
    str.repalce(what, replacement)
  );
  const filter = R.curry((f, ary) => ary.filter(f));
  const map = R.curry((f, ary) => ary.map(f));
  const hasSpace = match(/\s+/);
  const findSpace = filter(hasSpace);
  console.log(findSpace(["dad des", "deaeefd", "Hal le lu jah"]));
  const fakeIterator = () => {
    const obj = {
      data: ["hello", "world"],
      [Symbol.iterator]() {
        const self = this;
        let index = 0;
        return {
          next() {
            if (index < self.data.length) {
              return {
                value: self.data[index++],
                done: false,
              };
            } else {
              return {
                value: undefined,
                done: true,
              };
            }
          },
        };
      },
    };
    for (let o of obj) {
      console.log(o);
    }

    console.log(Array.from(obj));
    const url = new URLSearchParams("a=1&b=2");
  };
  useEffect(() => {
    const p = () =>
      new Promise((resolve, reject) => {
        const ran = Math.random() * 10;
        if (ran < 1) {
          resolve(ran);
        } else {
          reject(0);
        }
      });
    fakeIterator();
    const obj = new Proxy({} as { count?: number }, {
      get: function (target, propKey, receiver) {
        console.log(`getting ${String(propKey)}!`);
        console.log(target);
        console.log(receiver);
        return Reflect.get(target, propKey, receiver);
      },
      set: function (target, propKey, value, receiver) {
        console.log(`setting ${String(propKey)}!`);
        console.log(target);
        console.log(receiver);
        return Reflect.set(target, propKey, value, receiver);
      },
    });
    obj.count = 1;
    ++obj.count;
    console.log(123);
  }, []);

  return (
    <div>
      functional programming
      <p>{addOne(2)}</p>
      <p>{addTen(2)}</p>
    </div>
  );
};

export default Fp;
