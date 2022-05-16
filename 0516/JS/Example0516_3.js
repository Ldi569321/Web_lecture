const calculator = {
    add: function (numA, numB) {
        return numA+numB;
    },
    minus: function (numA, numB) {
        if ((numA-numB) < 0) {
            return -1*(numA-numB);
        } else {
            return numA-numB;
        }
    },
    multiply: function (numA, numB) {
        return numA*numB;
    },
    division: function (numA, numB) {
        return numA/numB;
    },
    squared: function (numA, numB) {
        return numA**numB;
    },
    mod: function (numA, numB) {
        return numA%numB;
    },

};

const player = {
    name: "전사",
    great: function() {
        console.log(`내 직업은 전사입니다.`);
    }
}