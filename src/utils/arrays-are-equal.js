// in practice would normally use lodash.isEqual
// but want to avoid adding libraries in this circumstance
const arraysAreEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  let referenceObj = {};

  for (let entry of arr1) {
    referenceObj[entry]
      ? (referenceObj[entry] += 1)
      : (referenceObj[entry] = 1);
  }

  for (let entry of arr2) {
    if (referenceObj[entry]) referenceObj[entry] -= 1;
    else if (!referenceObj[entry]) return false;
  }

  return true;
};

export default arraysAreEqual;
