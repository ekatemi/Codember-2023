const str = "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&"
//console.log(str[1]);

function mini_compilador(str)
{
    let result = 0;
    let i = 0;
    let res = "";
    while (i < str.length) {
        if (str[i] === '#')
            result += 1;
        else if (str[i] === '@')
            result -= 1;
        else if (str[i] === '*')
            result *= result;
        else if (str[i] === '&')
            res += result;
    i++;
  }
  return res;
}
console.log(mini_compilador(str));