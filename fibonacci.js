
// Big O of O(fib)2
function nthfib(num){
  if (num < 2) return num;
  return nthfib(num-1) + nthfib(num-2)
}

// ###########################

// Unfolded variation (up to 7)
function fib01(num) {
	if (num < 2) return num;
}

let _fib2_memo = null;
function fib2(num) {
	if (_fib2_memo !== null) return _fib2_memo;
	const oneless = fib01(num - 1); // fib01(1) => 1
	const twoless = fib01(num - 2); // fib01(0) => 0
	_fib2_memo = oneless + twoless; // returns 1
	return _fib2_memo;
}

let _fib3_memo = null;
function fib3(num) {
	if (_fib3_memo !== null) return _fib3_memo;
	const oneless = fib2(num - 1);  // fib2(2) => 1
	const twoless = fib01(num - 2); // fib01(1) => 1
	_fib3_memo = oneless + twoless; // returns 2
	return _fib3_memo;
}

let _fib4_memo = null;
function fib4(num) {
	if (_fib4_memo !== null) return _fib4_memo;
	const oneless = fib3(num - 1);
	const twoless = fib2(num - 2);
	_fib4_memo = oneless + twoless;
	return _fib4_memo;
}

let _fib5_memo = null;
function fib5(num) {
	if (_fib5_memo !== null) return _fib5_memo;
	const oneless = fib4(num - 1);
	const twoless = fib3(num - 2);
	_fib5_memo = oneless + twoless;
	return _fib5_memo;
}

let _fib6_memo = null;
function fib6(num) {
	if (_fib6_memo !== null) return _fib6_memo;
	const oneless = fib5(num - 1);
	const twoless = fib4(num - 2);
	_fib6_memo = oneless + twoless;
	return _fib6_memo;
}

let _fib7_memo = null;
function fib7(num) {
	if (_fib7_memo !== null) return _fib7_memo;
	const oneless = fib6(num - 1);
	const twoless = fib5(num - 2);
	_fib7_memo = oneless + twoless;
	return _fib7_memo;
}

//console.log(fib7(7));

// ###########################
// A recursive version with better O(n) using memoization
function rfib(number) {
  // see https://en.wikipedia.org/wiki/Memoization
  const memos = {}
  function fib(num) {
    if (memos[num] !== undefined) return memos[num];
    if (num < 2) return num;
    memos[num] = fib(num - 1) + fib(num - 2);
    return memos[num];
  }
  return fib(number);
}

//console.log(rfib(7));


// ###########################
// Inline version O(n)
function ifib(num){
  let a = 0, b = 1, next = null;
  for (let i = 0; i < num; i++) {
    let next = a + b;
    a = b;
    b = next;
  }
  return next;
}

console.log('ifib', ifib(7));
