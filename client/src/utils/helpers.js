const sortByDate = (arr) => {
    return arr.sort((a, b) => {
        let aa = a.timestamp.slice(0, 10).replace(/-/gi, '');
        let ab = a.timestamp.slice(11, 19).replace(/:/gi, '');
        let ba = b.timestamp.slice(0, 10).replace(/-/gi, '');
        let bb = b.timestamp.slice(11, 19).replace(/:/gi, '');
        let A = aa.concat(ab);
        let B = ba.concat(bb);
    
        return A - B;
    });
};

module.exports = { sortByDate };