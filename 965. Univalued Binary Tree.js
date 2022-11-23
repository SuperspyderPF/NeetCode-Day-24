var isUnivalTree = function(x) {
    // push all values to array using dfs 
     v = [];
    if (x === null) return v;
    
     l = [x];
    
    while (l.length !== 0) {
        
         m = l.pop();
        
        if (m.right != null) l.push(m.right);
        if (m.left != null) l.push(m.left);
        
        
        v.push(m.val)
    }
    var z = Array.from(new Set(v))
    if(z.length===1)return true
    return false 
};

//one line:
isUnivalTree=x=>{v=[];if(x===null)return v;l=[x];while(l.length!==0){m=l.pop();if(m.right!=null)l.push(m.right);if(m.left!=null)l.push(m.left);v.push(m.val)}z=Array.from(new Set(v));if(z.length===1)return true;return false}