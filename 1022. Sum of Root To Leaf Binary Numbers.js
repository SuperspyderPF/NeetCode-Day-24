sumRootToLeaf = x=> {
    
    function z(t, j) {
        if(!t) return 0;
        j += t.val
        if(!t.left && !t.right) return parseInt(j, 2);
        return z(t.right, j) + z(t.left, j);
    };
    return z(x, '');
};

//one line:
sumRootToLeaf=x=>{var z=(t,j)=>{if(!t)return 0;j+=t.val;if(!t.left&&!t.right)return parseInt(j,2);return z(t.right,j)+z(t.left,j);};return z(x,'');}