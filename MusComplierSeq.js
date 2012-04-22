var sumDuration = function(musexpr) {
    if(musexpr.tag === 'note') {
        return (musexpr.dur);
    }
    val = (sumDuration(musexpr.left) + sumDuration(musexpr.right));
    return(val);
};
var compileT = function (musexpr, time) {
    if(musexpr.tag === 'note') {
        var ret = { tag: musexpr.tag, pitch: musexpr.pitch, start: time, dur: musexpr.dur };
        return ([ret]);
    }
    // pass along time to each half for recursion
    var notes = [];
    //alert(time + " " + sumDuration(musexpr.left));
    notes = notes.concat(compileT(musexpr.left,time));
    notes = notes.concat(compileT(musexpr.right,sumDuration(musexpr.left) + time));
    //alert(notes.length);
    return notes;
};
var compile = function (musexpr) {
    var retval = compileT(musexpr,0);
//alert('compile ' + retval.length);
    return(retval);       
};
