const arrays = [1, 2, 3, 4, 5, 6, 7];
for (const i in arrays) {
  console.log(arrays[i]);
}

for (const i of arrays) {
  console.log(i);
}

// Above both codes result same which is similar to below code:
for (let i = 0; i < arrays.length; i++) {
  console.log(arrays[i]);
}
