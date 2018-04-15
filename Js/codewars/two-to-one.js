/*

Description:
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```

*/
// Minha Solução

function longest(s1, s2) {

  let longest = [];

  let bigger = s1.length < s2.length ? s2.length : s1.length;

  for (let count = 0; count < bigger; count++) {

    if (count < s1.length) {
      longest[s1[count].charCodeAt() - 97] = s1[count];
    }

    if (count < s2.length) {
      longest[s2[count].charCodeAt() - 97] = s2[count];
    }
  }

  return longest.toString().replace(/,/gi, "");
}

//Melhor solucao

function longest2(s1, s2){
  
    const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('')

  return longest
}

console.time("Minha solucao");

longest("aretheyhere", "yestheyarehere")//, "aehrsty"
longest("loopingisfunbutdangerous", "lessdangerousthancoding")//, "abcdefghilnoprstu"
longest("inmanylanguages", "theresapairoffunctions")//, "acefghilmnoprstuy"
longest("inmanylanguages", "theresapairoffunctions") === "acefghilmnoprstuy"

console.timeEnd("Minha solucao");
console.time("Melhor solucao");

longest2("aretheyhere", "yestheyarehere")//, "aehrsty"
longest2("loopingisfunbutdangerous", "lessdangerousthancoding")//, "abcdefghilnoprstu"
longest2("inmanylanguages", "theresapairoffunctions")//, "acefghilmnoprstuy"
longest2("inmanylanguages", "theresapairoffunctions")// "acefghilmnoprstuy"

console.timeEnd("Melhor solucao");
