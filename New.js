//cricketAvg
cricketData.forEach((team) => {
    team.batsman.sort((a, b) => {
        if (a.formats.test.avg < b.formats.test.avg) {
            return -1;
        } else if (a.formats.test.avg > b.formats.test.avg) {
            return 1;
        } else {
            return 0;
        }
    });
});

cricketData.forEach((team) => {
    team.batsman.sort((a, b) => {
        if (a.formats.test.avg > b.formats.test.avg) {
            return -1;
        } else if (a.formats.test.avg < b.formats.test.avg) {
            return 1;
        } else {
            return 0;
        }
    });
});
