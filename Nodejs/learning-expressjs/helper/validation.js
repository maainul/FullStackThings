const formValidation = (vdata) => {
  let validations = [];
  for (let i = 0; i < vdata.length; i++) {
    const parts = vdata[i].split("|").map((part) => part.trim());
    let [name, required] = parts;
    let obj = {
      key: `${name}`,
      value: `${name} is ${required}`,
    };
    validations.push(obj);
  }
  return validations;
};

module.exports = { formValidation };
