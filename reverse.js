var reverse = function(expr) {
    var copy = JSON.parse(JSON.stringify(expr));
    if(copy.tag === 'note') {
        return(copy);
    }
    var temp = copy.left;
    copy.left = reverse(copy.right);
    copy.right = reverse(temp);
    return (copy);
};
