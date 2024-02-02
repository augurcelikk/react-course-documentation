let operationType = "addition";

// *** operation type'ı ayarla ***
const selectEl = document.querySelector("select[name='operation-type']");

const formEl = document.getElementById("frm-calculator-101");

selectEl.addEventListener("change", handleOperationTypeChange);


formEl.addEventListener("submit", handleFrmSubmit);


function handleOperationTypeChange(e) {
  const target = e.target;
  const value = target.value;
  operationType = value;
}


function handleFrmSubmit(e) {
  e.preventDefault();
  //sayı 1'i al ve geçerli olup olmadığını test et
  const validatedOp1 = validateOperand(getOperandValue("op1"));
  //sayı 2'i al ve geçerli olup olmadığını test et
  const validatedOp2 = validateOperand(getOperandValue("op2"));

  if (validatedOp1 && validatedOp2) {
    switch (operationType) {
      case "addition": {
        //addNumbers(validatedOp1, validatedOp2);
        console.log(addNumbers(validatedOp1, validatedOp2));
        break;
      }
      case "multiplication": {
        break;
      }
      default:
        throw new Error("Operation not found");
    }
  } else {
    alert("Girdi alanlarını kontrol edin");
  }
}

function getOperandValue(id) {
  const inputEl = document.getElementById(id);
  return inputEl.value;
}

function validateOperand(val) {
  /*
    if(val && typeof val === "number"){
        return true;
    }
    */

  const rVal = Number(val);
  if (rVal) {
    return rVal;
  }

  return false;
}

//toplama function
function addNumbers(op1, op2) {
  return op1 + op2;
}

//çarpma function

//çıkartma

//bölme

//operand girdi kutusunun değerini kontrol et

//kullanıcı mesajı verebilen bir function
