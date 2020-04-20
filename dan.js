function replacer(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
        a = 'yu-gi-oh;
      } else if (i % 2 === 0 && i % 3 === 0) {
        a = 'yu-gi';
      } else if (i % 2 === 0 && i % 5 === 0) {
        a = 'yu-oh';
      } else if (i % 3 === 0 && i % 5 === 0) {
        a = 'gi-oh';
      } else if (i % 2 === 0) {
        a = 'yu';
      } else if (i % 3 === 0) {
        a = 'gi';
      } else if (i % 5 === 0) {
        a = 'oh';
      } else {
        a = i;
      }
      result.push(a);
    }
    document.getElementById('show').innerHTML = result;
  }
  replacer(100);
  replacer(12);