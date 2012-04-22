var endTime = function (time, expr) {
    var newTime = 0;
    if(expr.tag === 'note') {
        if(time === -1) {
            return (expr.dur);
        }
        else {
            return (time + expr.dur);
        }
    }
    if(expr.left != "undefined") {
        
        newTime += endTime(-1, expr.left);
    }

    if(expr.right != "undefined") {
        newTime += endTime(-1, expr.right);
    }
    if(time === -1) 
        return (newTime);
    else
        return(newTime + time);
        
};