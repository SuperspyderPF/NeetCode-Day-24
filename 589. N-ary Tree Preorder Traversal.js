 preorder = (z)=> {
    if (!z) return [];
    
    return [z.val, ...(z.children || []).map(j => preorder(j)).flat()]
};