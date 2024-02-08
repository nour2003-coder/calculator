



 let result = "";
let ans = 0;
const r = document.getElementsByClassName("result")[0];
const num1 = document.querySelectorAll(".num");
const clear = document.getElementsByClassName("clear")[0];

if (r.textContent === "Error") {
    result = "";
}

clear.addEventListener("click", (e) => {
    r.textContent = "";
    result = "";
});

const ansBtn = document.getElementsByClassName("ans")[0];
ansBtn.addEventListener("click", (e) => {
    result += String(ans);
    r.textContent = result;
});

num1.forEach((n) => {
    n.addEventListener("click", (e) => {
        const a = e.target.id;
        result += String(a);
        r.textContent = result;
    });
});

const operations = document.querySelectorAll(".op");
operations.forEach((op) => {
    op.addEventListener("click", (e) => {
        result=r.textContent;
        const o = e.target.id;
        result += String(o);
        r.textContent = result;
    });
});

const egale = document.getElementsByClassName("egale")[0];
egale.addEventListener("click", (e) => {
    let res = 0;
    let i = 0;
    let j = 0;
    try {
        let ops = ["+", "*", "-", "/"];
        let myop = [];
        let array = [];
        
        // Parse the input string to extract numbers and operators
        while (i < result.length) {
            if (ops.includes(result[i])) {
                myop.push(result[i]);
                array.push(parseFloat(result.substring(j, i)));
                j = i + 1;
            }
            i++;
        }
        array.push(parseFloat(result.substring(j))); // Push the last number
        
        // Apply the operators to the operands
        res = array[0];
        for (let k = 0; k < myop.length; k++) {
            switch (myop[k]) {
                case "+":
                    res += array[k + 1];
                    break;
                case "*":
                    res *= array[k + 1];
                    break;
                case "-":
                    res -= array[k + 1];
                    break;
                case "/":
                    if (array[k + 1] === 0) {
                        throw "Division by zero";
                    }
                    res /= array[k + 1];
                    break;
            }
        }
        
        if (isNaN(res)) {
            throw "Result is not a number";
        }
        
        // Update the result
        r.textContent = res;
        ans = res; // Update the ans variable with the latest result
    } catch (error) {
        console.error("Error:", error);
        r.textContent = "Error"; // Display error message in the result field
    }
});
