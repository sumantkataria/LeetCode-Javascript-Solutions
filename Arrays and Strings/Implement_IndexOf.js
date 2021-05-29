/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if(needle.length === 0) return 0
    else if(haystack.length === 0) return -1
    else {
      let i = 0
      while(i <= haystack.length) {
        if((haystack.charAt(i) === needle.charAt(0)) && (haystack.substr(i, needle.length) === needle)) {
          return i
        }
        i++
      }
    }
    return -1
};