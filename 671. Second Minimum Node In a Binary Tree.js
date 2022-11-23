var findSecondMinimumValue = function(x) {
    // push all values to array using dfs 
     v = [];
    if (x === null) return v;
    
     p = [x];
    
    while (p.length !== 0) {
        
         o = p.pop();
        
        if (o.right != null) p.push(o.right);
        if (o.left != null) p.push(o.left);
        
        
        v.push(o.val)
    }
    z=Array.from(new Set(v));
    z.sort((a,b)=>a-b);
    if(z.length===1)return -1;
    return z[1]
    
};

//one line:
findSecondMinimumValue=x=>{v=[];if(x===null)return v;p=[x];while(p.length!==0){o=p.pop();if(o.right!=null)p.push(o.right);if(o.left!=null)p.push(o.left);v.push(o.val)}z=Array.from(new Set(v));z.sort((a,b)=>a-b);if(z.length===1)return-1;return z[1]}