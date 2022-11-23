var averageOfLevels = function(root) {
    
    let queue = [root];
    const average = []
    
    while(queue.length) {
        const next = []
        let sum = 0;
        
        for(let node of queue) {
            sum += node.val;
            if(node.left) next.push(node.left);
            if(node.right) next.push(node.right);
        }
        
        average.push(sum / queue.length)
        queue = next;
    }
    return average;
};