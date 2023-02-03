export const withCode = [
    {
        "question": "What will be the output of the following code snippet?",
        "code": "\n<script type=\"text/javascript\">\n\n   a = 5 + \"9\";\n   document.write(a);\n\n</script>",
        "options": [
            {
                "isCorrect": false,
                "answer": "Compilation Error"
            },
            {
                "isCorrect": false,
                "answer": "14"
            },
            {
                "isCorrect": false,
                "answer": "Runtime Error"
            },
            {
                "isCorrect": true,
                "answer": "59"
            }
        ]
    },
    {
        "question": "What will be the output of the following code snippet?",
        "code": "\n<script type=\"text/javascript\" language=\"javascript\">\n  \n   var a = \"Scaler\";\n   var result = a.substring(2, 4);\n   document.write(result);\n  \n</script>",
        "options": [
            {
                "isCorrect": true,
                "answer": "al"
            },
            {
                "isCorrect": false,
                "answer": "ale"
            },
            {
                "isCorrect": false,
                "answer": "cal"
            },
            {
                "isCorrect": false,
                "answer": "caler"
            }
        ]
    },
    {
        "question": "What will be the output of the following code snippet?",
        "code": "\n<script type=\"text/javascript\" language=\"javascript\">\n \n   var x=12;\n   var y=8;\n   var res=eval(\"x+y\");\n   document.write(res);\n \n</script>",
        "options": [
            {
                "isCorrect": true,
                "answer": "20"
            },
            {
                "isCorrect": false,
                "answer": "x+y"
            },
            {
                "isCorrect": false,
                "answer": "128"
            },
            {
                "isCorrect": false,
                "answer": "None of the above"
            }
        ]
    },
    {
        "question": "What will be the output of the following code snippet?",
        "code": "\n(function(){\n   setTimeout(()=> console.log(1),2000);\n   console.log(2);\n   setTimeout(()=> console.log(3),0);\n   console.log(4);\n})();",
        "options": [
            {
                "isCorrect": false,
                "answer": "1 2 3 4"
            },
            {
                "isCorrect": false,
                "answer": "2 3 4 1"
            },
            {
                "isCorrect": true,
                "answer": "2 4 3 1"
            },
            {
                "isCorrect": false,
                "answer": "4 3 2 1"
            }
        ]
    },
    {
        "question": "What will be the output of the following code snippet?",
        "code": "\n(function(a){\n   return (function(){\n      console.log(a);\n      a = 6;\n   })()\n})(21);",
        "options": [
            {
                "isCorrect": false,
                "answer": "6"
            },
            {
                "isCorrect": false,
                "answer": "NaN"
            },
            {
                "isCorrect": true,
                "answer": "21"
            },
            {
                "isCorrect": false,
                "answer": "None of the above"
            }
        ]
    },
    {
        "question": "What will be the output of the following code snippet?",
        "code": "\nfunction solve(arr, rotations){\n   if(rotations == 0) return arr;\n   for(let i = 0; i < rotations; i++){\n      let element = arr.pop();\n      arr.unshift(element);\n   }\n   return arr;\n}\n// solve([44, 1, 22, 111], 5);",
        "options": [
            {
                "isCorrect": true,
                "answer": "[111, 44, 1, 22]"
            },
            {
                "isCorrect": false,
                "answer": "[44, 1, 22, 111]"
            },
            {
                "isCorrect": false,
                "answer": "[111, 44, 1, 22]"
            },
            {
                "isCorrect": false,
                "answer": "[1, 22, 111, 44]"
            }
        ]
    },
    {
        "question": "What will be the output for the following code snippet?",
        "code": "\n<p id=\"example\"></p>  \n<script>  \nfunction Func() {\n   const example = document.getElementById(\"example\")\n   example.innerHTML=Math.sqrt(81);  \n}  \n</script>",
        "options": [
            {
                "isCorrect": true,
                "answer": "9"
            },
            {
                "isCorrect": false,
                "answer": "81"
            },
            {
                "isCorrect": false,
                "answer": "Error"
            },
            {
                "isCorrect": false,
                "answer": "0"
            }
        ]
    },
    {
        "question": "What will be the output of the following code snippet?",
        "code": "\nvar a = 1;  \nvar b = 0;  \nwhile (a <= 3)  \n{  \n   a++;  \n   b += a * 2;  \n   print(b);\n}",
        "options": [
            {
                "isCorrect": true,
                "answer": "4 10 18"
            },
            {
                "isCorrect": false,
                "answer": "1 2 3"
            },
            {
                "isCorrect": false,
                "answer": "1 4 7"
            },
            {
                "isCorrect": false,
                "answer": "None of the above"
            }
        ]
    },
    {
        "question": "What will be the output of the following code snippet?",
        "code": "\nvar a = Math.max();\nvar b = Math.min();\nprint(a);\nprint(b);",
        "options": [
            {
                "isCorrect": true,
                "answer": "-Infinity Infinity"
            },
            {
                "isCorrect": false,
                "answer": "Infinity -Infinity"
            },
            {
                "isCorrect": false,
                "answer": "Infinity Infinity"
            },
            {
                "isCorrect": false,
                "answer": "-Infinity -Infinity"
            }
        ]
    },
    {
        "question": "What will be the output of the following code snippet?",
        "code": "\nvar a = Math.max() < Math.min();\nvar b = Math.max() > Math.min();\nprint(a);\nprint(b);",
        "options": [
            {
                "isCorrect": true,
                "answer": " true false"
            },
            {
                "isCorrect": false,
                "answer": "false true"
            },
            {
                "isCorrect": false,
                "answer": "true true"
            },
            {
                "isCorrect": false,
                "answer": "false false"
            }
        ]
    },
    {
        "question": "What will be the output of the following code snippet?",
        "code": "\nvar a = true + true + true * 3;\nprint(a)",
        "options": [
            {
                "isCorrect": false,
                "answer": "3"
            },
            {
                "isCorrect": false,
                "answer": "0"
            },
            {
                "isCorrect": false,
                "answer": "Error"
            },
            {
                "isCorrect": true,
                "answer": "5"
            }
        ]
    },
    {
        "question": "What will be the output of the following code snippet?",
        "code": "\nlet sum = 0; \nconst a = [1, 2, 3];\n\na.forEach(getSum);\nprint(sum);\n\nfunction getSum(ele) {\n   sum += ele;\n}",
        "options": [
            {
                "isCorrect": true,
                "answer": "6"
            },
            {
                "isCorrect": false,
                "answer": "1"
            },
            {
                "isCorrect": false,
                "answer": "2"
            },
            {
                "isCorrect": false,
                "answer": "None of the above"
            }
        ]
    },
    {
        "question": "What will be the output of the following code snippet?",
        "code": "\na = [1, 2, 3, 4, 5];\nprint(a.slice(2, 4));",
        "options": [
            {
                "isCorrect": true,
                "answer": "3, 4"
            },
            {
                "isCorrect": false,
                "answer": "2, 3"
            },
            {
                "isCorrect": false,
                "answer": "3, 4, 5"
            },
            {
                "isCorrect": false,
                "answer": "2, 3, 4"
            }
        ]
    },
    {
        "question": "What will be the output of the following code snippet?",
        "code": "\nprint(parseInt(\"123Hello\"));\nprint(parseInt(\"Hello123\"));",
        "options": [
            {
                "isCorrect": true,
                "answer": "123 NaN"
            },
            {
                "isCorrect": false,
                "answer": "123Hello Hello123"
            },
            {
                "isCorrect": false,
                "answer": "NaN NaN"
            },
            {
                "isCorrect": false,
                "answer": "123 123"
            }
        ]
    },
    {
        "question": "What will be the output of the following code snippet?",
        "code": "\nvar a = \"hello\";\nvar sum = 0;\nfor(var i = 0; i < a.length; i++) {\n   sum += (a[i] - 'a');\n}\nprint(sum);",
        "options": [
            {
                "isCorrect": false,
                "answer": "47"
            },
            {
                "isCorrect": true,
                "answer": "NaN"
            },
            {
                "isCorrect": false,
                "answer": "0"
            },
            {
                "isCorrect": false,
                "answer": "None of the above"
            }
        ]
    },
    {
        "question": "What will be the output of the following code snippet?",
        "code": "\nconst set = new Set();\nset.add(5);\nset.add('Hello');\nset.add({ name: 'Scaler' });\nfor (let item of set) {\n   console.log(item + 6);\n}",
        "options": [
            {
                "isCorrect": false,
                "answer": "11 NaN NaN"
            },
            {
                "isCorrect": false,
                "answer": "11 NaN [object Object]"
            },
            {
                "isCorrect": true,
                "answer": "11 Hello6 [object Object]6"
            },
            {
                "isCorrect": false,
                "answer": "None of the above"
            }
        ]
    },
    {
        "question": "What will be the output of the following code snippet?",
        "code": "\nconst example = ({ a, b, c }) => {\n   console.log(a, b, c);\n};\nexample(0, 1, 2);",
        "options": [
            {
                "isCorrect": false,
                "answer": "0 1 2"
            },
            {
                "isCorrect": false,
                "answer": "0 Undefined Undefined"
            },
            {
                "isCorrect": true,
                "answer": "Undefined Undefined Undefined"
            },
            {
                "isCorrect": false,
                "answer": "None of the above"
            }
        ]
    },
    {
        "question": "What will be the output of the following code snippet?",
        "code": "\nlet a = [1, 2, 3, 4, 5, 6];\nvar left = 0, right = 5;\nvar found = false;\nvar target = 5;\n\nwhile(left <= right) {\n   var mid = Math.floor((left + right) / 2);\n   if(a[mid] == target) {\n       found = true;\n       break;\n   }\n   else if(a[mid] < target) {\n       left = mid + 1;\n   }\n   else {\n       right = mid - 1;\n   }\n}\n\nif(found) {\n   print(\"YES\");\n}\nelse {\n   print(\"NO\");\n}",
        "options": [
            {
                "isCorrect": true,
                "answer": "YES"
            },
            {
                "isCorrect": false,
                "answer": "NO"
            },
            {
                "isCorrect": false,
                "answer": "Syntax Error"
            },
            {
                "isCorrect": false,
                "answer": "None of the above"
            }
        ]
    },
    {
        "question": "What will be the output of the following code snippet?",
        "code": "\nlet s = \"00000001111111\";\nlet l = 0, r = s.length - 1, ans = -1;\n\nwhile(l <= r) {\n   var mid = Math.floor((l + r) / 2);\n   if(s[mid] == '1') {\n       ans = mid;\n       r = mid - 1;\n   }\n   else {\n       l = mid + 1;\n   }\n}\n\nprint(ans);",
        "options": [
            {
                "isCorrect": false,
                "answer": "8"
            },
            {
                "isCorrect": true,
                "answer": "7"
            },
            {
                "isCorrect": false,
                "answer": "0"
            },
            {
                "isCorrect": false,
                "answer": "1"
            }
        ]
    },
    {
        "question": "What will be the output of the following code snippet?",
        "code": "\nlet n = 24;\nlet l = 0, r = 100, ans = n;\nwhile(l <= r) {\n   let mid = Math.floor((l + r) / 2);\n   if(mid * mid <= n) {\n       ans = mid;\n       l = mid + 1;\n   }\n   else {\n       r = mid - 1;\n   }\n}\nprint(ans);",
        "options": [
            {
                "isCorrect": false,
                "answer": "5"
            },
            {
                "isCorrect": true,
                "answer": "4"
            },
            {
                "isCorrect": false,
                "answer": "6"
            },
            {
                "isCorrect": false,
                "answer": "3"
            }
        ]
    },
    {
        "question": "What will be the output of the following code snippet?",
        "code": "\nconst obj1 = { Name: \"Hello\", Age: 16 };\nconst obj2 = { Name: \"Hello\", Age: 16 };\nprint(obj1 === obj2);",
        "options": [
            {
                "isCorrect": false,
                "answer": "true"
            },
            {
                "isCorrect": true,
                "answer": "false"
            },
            {
                "isCorrect": false,
                "answer": "Undefined"
            },
            {
                "isCorrect": false,
                "answer": "None of the above"
            }
        ]
    },
    {
        "question": "What happens when we run this code?",
        "code": "\n\nfunction dog() {\n   print(\"I am a dog.\");\n}\ndog.sound = \"Bark\";",
        "options": [
            {
                "isCorrect": false,
                "answer": "Syntax Error"
            },
            {
                "isCorrect": false,
                "answer": "“I am a dog” gets printed"
            },
            {
                "isCorrect": false,
                "answer": "ReferenceError"
            },
            {
                "isCorrect": true,
                "answer": "Nothing happens"
            }
        ]
    },
    {
        "question": "What will be the output of the following code snippet?",
        "code": "\nfunction test(...args) {\n   console.log(typeof args);\n}\ntest(12);",
        "options": [
            {
                "isCorrect": false,
                "answer": "NaN"
            },
            {
                "isCorrect": false,
                "answer": "Number"
            },
            {
                "isCorrect": true,
                "answer": "Object"
            },
            {
                "isCorrect": false,
                "answer": "Array"
            }
        ]
    },
    {
        "question": "What will be the output of the following code snippet?",
        "code": "\nconst obj1 = { first: 20, second: 30, first: 50 };\nconsole.log(obj1);",
        "options": [
            {
                "isCorrect": false,
                "answer": "{ first: 20, second: 30 }"
            },
            {
                "isCorrect": true,
                "answer": "{ first: 50, second: 30 }"
            },
            {
                "isCorrect": false,
                "answer": "{ first: 20, second: 30, first: 50 }"
            },
            {
                "isCorrect": false,
                "answer": "Syntax Error"
            }
        ]
    },
]