
var max = function(left, right) {
    if(left > right) return left;
    return right;
};
var endTime = function(musexpr) {
    if(musexpr.tag === 'note') {
        return musexpr.dur;
    }
    if(musexpr.tag === 'par') {
        var a = endTime(musexpr.left);
        var b = endTime(musexpr.right);
        return(max(a,b));
    }
    if(musexpr.tag === 'seq') {
        return(endTime(musexpr.left) + endTime(musexpr.left));
    }
};

var compileT = function(musexpr, time) {
    if(musexpr.tag === 'note') {
        var ret = { tag: musexpr.tag, pitch: musexpr.pitch, start: time, dur: musexpr.dur };
        var note = [];
        note.push(ret);
        return note;
    }
    if(musexpr.tag === 'par') {
        var notes2 =[];
        notes2 = notes2.concat(compileT(musexpr.left, time));
        notes2 = notes2.concat(compileT(musexpr.right, time));
        return notes2;
    }
    if(musexpr.tag === 'seq') {
        var notes =[];
        notes = notes.concat(compileT(musexpr.left, time));
        notes = notes.concat(compileT(musexpr.right, time + endTime(musexpr.left)));
        return notes;
    }
};
var compile = function (musexpr) {
    return(compileT(musexpr,0));        
};