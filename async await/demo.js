function guessNumber(guess) {
  return new Promise((resolve, reject) => {
    console.log("开始猜大小");
    setTimeout(() => {
      let n = parseInt(Math.random() * 10 + 1, 10);
      if (n > 5) {
        if (guess === "大") {
          resolve(n);
        } else {
          reject(n);
        }
      } else {
        if (guess === "小") {
          resolve(n);
        } else {
          reject(n);
        }
      }
    }, 1000);
  });
}

async function test() {
  try {
    // 猜一次
    // let n = await guessNumber("大");
    // 猜二次
    let n = await Promise.race([guessNumber("大"), guessNumber("大")]);
    console.log("猜对啦" + n);
  } catch (err) {
    console.log("输光了" + err);
  }
}

test();
