function* SagaData(){

}

export default SagaData;











/*
1️⃣ function* ka matlab

function* generator function create karta hai.

Generator function ka syntax me * lagta hai:

function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}


Ye function ek iterable object return karta hai jise .next() call karke step by step execute kar sakte ho.


3️⃣ Redux-Saga me * kyun use hota hai

Saga me async tasks step by step execute hote hain.

yield ka use karke aap Saga ko pause kar ke wait karte ho async action complete hone tak.

Example:
import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchDataSuccess, fetchDataFail } from './actions';
import { fetchDataAPI } from './api';

function* SagaData(action) {      // <-- function* ka matlab generator
  try {
    const data = yield call(fetchDataAPI, action.payload); // pause until API returns
    yield put(fetchDataSuccess(data));  // dispatch action after data received
  } catch (error) {
    yield put(fetchDataFail(error));
  }
}

export default SagaData;



4️⃣ Simple analogy

Normal function → ek saath kaam kar ke return kar deta hai

Generator → ek ek step kar ke kaam karta hai, pause/resume possible
function* numbers() {
  yield 1; // pause
  yield 2; // pause
  yield 3; // pause
}

const iter = numbers();
console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next()); // { value: undefined, done: true }

* = generator function

Generator = function that can pause & resume

Redux-Saga uses it to handle async tasks step by step

yield = pause & wait for async effect (call, put)
*/