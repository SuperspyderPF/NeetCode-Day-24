var leafSimilar = function(x, z) {
     n = [];

    l(x);
     c = n.join('-');
    n = [];
    l(z);
     a = n.join('-');
    return c == a;
    
    function l(o){
        if(!o)   return;
        if(!o.left && !o.right){
            n.push(o.val);
        }
        l(o.left);
        l(o.right);
    }

};

//one line:
leafSimilar=(x,z)=>{n=[];l(x);c=n.join('-');n=[];l(z);a=n.join('-');return c==a;function l(o){if(!o)return;if(!o.left&&!o.right){n.push(o.val);}l(o.left);l(o.right);};}