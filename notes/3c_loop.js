var arrays = [1, 2, 3, 4, 5, 6, 7];
for (var i in arrays) {
    console.log(arrays[i]);
}
for (var _i = 0, arrays_1 = arrays; _i < arrays_1.length; _i++) {
    var i = arrays_1[_i];
    console.log(i);
}
// Above both codes result same which is similar to below code:
for (var i = 0; i < arrays.length; i++) {
    console.log(arrays[i]);
}
