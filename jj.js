const arr2 = [];
stats.forEach((value) => {
    value.batsman.forEach((item) => {
        // console.log(item);
        arr2.push(item);

        // arr.forEach((batsman) => {
        //     console.log("Name:", batsman.name, "Avg:", batsman.formats.test.avg);
        // });
    })
    // arr.push(value.batsman);
})
// console.log(arr2);

arr2.sort((a, b) => b.formats.test.avg - a.formats.test.avg);
arr2.forEach((batsman) => {
    console.log("Name:", batsman.name, "Avg:", batsman.formats.test.avg);
});
