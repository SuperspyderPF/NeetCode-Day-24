var postorder = function(x) {
     z = [];
    traverse(x);
    return z;
    
    function traverse(m) {
        if (!m) return;
        for(c of m.children) {
            traverse(c);
        }
        z.push(m.val);
    } 
};