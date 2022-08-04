
//   a b c b a
// a 1 1 1 1 1
// b 1 2 2 2 2
// c 1 2 3 3 3
// b 1 2 3 4 4
// c 1 2 3 4 4
// b 1 2 3 4 4
// a 1 2 3 4 5

function longestCommonSubsequence(s1, s2) {
  const dp = init2DMatrix(s1.length, s2.length, 0);

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        if (i > 0 && j > 0) {
          dp[i][j] = 1 + dp[i - 1][j - 1];
        } else {
          dp[i][j] = 1;
        }
      } else {
        if (i > 0 && j > 0) {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        } else if (i > 0) {
          dp[i][j] = dp[i - 1][j];
        } else if (j > 0) {
          dp[i][j] = dp[i][j - 1];
        }
      }
    }
  }

  return dp[s1.length - 1][s2.length - 1];
}

function init2DMatrix(rows, cols, value) {
  const dp = [];
  let row = [];
  for (let i = 0; i < cols; i++) {
    row.push(value);
  }
  for (let i = 0; i < rows; i++) {
    dp.push([...row]);
  }
  return dp;
}


const length = longestCommonSubsequence("abcbcba", "abcba");
console.log('longest subsequence length:', length );
