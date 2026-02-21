import { useEffect, useState } from "react";

function Calculator() {
  navigator.vibrate?.(200);
  const [number, setNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState("");
  const [newNumber, setNewNumber] = useState(false);
  const [operator, setOperator] = useState(null);

  // const secondNumber = Number(number) === 0 ? "" : number;
  useEffect(()=>{
    document.title="Calculator DK"
  })
    const handleNumber = (num) => {
    if (newNumber) {
      setNumber(num);
      setNewNumber(false);
    } else {
      setNumber(number === "0" ? num : number + num);
    }
  };
  const handleSymbol = (opr) => {
    setFirstNumber(+number);
    setOperator(opr);
    setNewNumber(true);
  };

  const handleEquals = () => {
    const num1 = Number(firstNumber);
    const num2 = Number(number);
    let result = 0;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "%":
        if (num2 === 0) {
          result=0;
        } else result = num1 % num2;
        break;
      case "÷":
        if (num2 === 0) {
          result = "Cannot divide by zero";
        } else result = num1 / num2;
        break;
    }
    setNumber(String(result));
    setFirstNumber("");
    setOperator("");
    setNewNumber(true);
  };

  const handleClear = () => {
    setNumber("0");
    setFirstNumber("");
    setOperator("");
    setNewNumber(true);
  };
  const handleDelete = () => {
    if (number.length === 1) {
      setNumber("0");
      setNewNumber(true);
    } else {
      setNumber(number.slice(0, -1));
    }
  };
  const handleDecimal = () => {
    if (newNumber) {
      setNumber("0.");
      setNewNumber(false);
    } else if (!number.includes(".")) {
      setNumber(number + ".");
    }
  };
  return (
    <>
      <section
        className="max-w-md mx-auto
       bg-[#0e1117]/93  text-white
        border border-slate-500
        shadow-xl
        md:p-10 p-6 rounded-2xl "
      >
        
        <h1
          className="text-center mb-6 text-[2.5rem] font-extrabold text-transparent bg-clip-text
          bg-linear-to-r from-cyan-400 via-pink-500 to-purple-500
          drop-shadow-[0_0_20px_rgba(34,11,23,0.8)]
          hover:scale-110 transition-all duration-600 tracking-widest
          cursor-pointer ease-in-out uppercase"
        >
          Calculator 
        </h1>
        <div>
          <h1 className="w-full p-4 mb-6 text-right text-3xl rounded-lg bg-white/10 text-white drop-shadow-[0_0_20px_rgba(34,11,23,0.8)]">
            <span className="text-xl text-white/50 block">{firstNumber} {operator}</span>
            <span className="text-cyan-300">{number}</span>
          </h1>
        </div>
        <div>
          

      
          <div className="grid grid-cols-4 gap-4 mt-3">
            <button
              onClick={handleClear}
              className="bg-green-500 text-white 
              p-4 rounded-xl hover:scale-110 md:px-8
              transition-all duration-300 ease-in-out
              hover:bg-yellow-500
              hover:text-white"
            >
              AC
            </button>
            <button
              onClick={handleDelete}
              className="bg-pink-500/20 hover:bg-pink-500/40
            hover:text-white text-white
              p-4 rounded-lg
              hover:scale-110 
              transition-all 
              duration-300 ease-in-out;"
            >
              DEL
            </button>
            <button
              onClick={() => handleSymbol("%")}
              className="bg-pink-500/20 hover:bg-pink-500/40
            hover:text-white text-white
            p-4 rounded-lg
            hover:scale-110 
            transition-all 
            duration-300 ease-in-out;"
            >
              %
            </button>
            <button
              onClick={() => handleSymbol("÷")}
              className="bg-pink-500/20 hover:bg-pink-500/40
              hover:text-white text-white
                p-4 rounded-lg
                hover:scale-110 
                transition-all 
                duration-300 ease-in-out;"
              >
              ÷
            </button>
          </div>


          <div className="grid grid-cols-4 gap-3 mt-4 md:text-xl">
            {["7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+"].map(
              (btn) => (
                <button
                  key={btn}
                  onClick={
                    isNaN(btn)
                      ? () => handleSymbol(btn)
                      : () => handleNumber(btn)
                  }
                  className="bg-white/10 shadow-lg 
              shadow-cyan-500/20 hover:bg-cyan-400/30
                text-white p-4 rounded-lg hover:scale-110 
                transition-all duration-300 ease-in-out"
                >
                  {btn === "*" ? "×" : btn}
                </button>
              ),
            )}
          </div>
          <div className="grid grid-cols-3 gap-3 mt-4 md:text-xl">
            <button
              onClick={handleDecimal}
              className="bg-white/10 shadow-lg 
            shadow-cyan-500/20 hover:bg-cyan-400/30
              text-white p-4 rounded-lg hover:scale-110 
              transition-all duration-300 ease-in-out"
            >
              .
            </button>
            <button
              onClick={() => handleNumber("0")}
              className=" bg-white/30 shadow-lg 
              shadow-cyan-500/20 hover:bg-cyan-400/30
                text-white p-4 rounded-lg
                hover:scale-110
                  transition-all
                  duration-300 ease-in-out;"
            >
              0
            </button>
            <button
              onClick={handleEquals}
              className="h-16 rounded-2xl bg-linear-to-br from-cyan-400 to-indigo-600
              text-white/90 text-2xl font-bold hover:bg-indigo-600 active:scale-95
              transition-transform duration-100 ease-in-out"
            >
              =
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Calculator;
