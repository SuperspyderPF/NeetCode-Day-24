function getTargetCopy(o, c, t) {
    var z = b => {
      if (b) {
        if (b.val === t.val) return b;
        return z(b.left) || z(b.right);
      }
      return null;
    }
    return z(c);
  };

  //one line:
  getTargetCopy=(o,c,t)=>{var z=b=>{if(b){if(b.val===t.val)return b;return z(b.left)||z(b.right);};return null;};return z(c);}