var blockchain1=document.querySelector("#blockchain1");
var blockchainnonce1=document.querySelector("#blockchainnonce1");
var coinbase1=document.querySelector("#coinbase1");
var publickeycoinbase1=document.querySelector("#publickeycoinbase1");
var blockchainprev1=document.querySelector("#blockchainprev1");
var blockchainhash1=document.querySelector("#blockchainhash1");

var blockchain2=document.querySelector("#blockchain2");
var blockchainnonce2=document.querySelector("#blockchainnonce2");
var coinbase2=document.querySelector("#coinbase2");
var publickeycoinbase2=document.querySelector("#publickeycoinbase2");
var amount1transaction2=document.querySelector("#amount1transaction2");
var frompublickey1transaction2=document.querySelector("#frompublickey1transaction2");
var topublickey1transaction2=document.querySelector("#topublickey1transaction2");
var sequence1=document.querySelector("#sequence1");
var signature1=document.querySelector("#signature1");
var amount2transaction2=document.querySelector("#amount2transaction2");
var frompublickey2transaction2=document.querySelector("#frompublickey2transaction2");
var topublickey2transaction2=document.querySelector("#topublickey2transaction2");
var sequence2=document.querySelector("#sequence2");
var signature2=document.querySelector("#signature2");
var amount3transaction2=document.querySelector("#amount3transaction2");
var frompublickey3transaction2=document.querySelector("#frompublickey3transaction2");
var topublickey3transaction2=document.querySelector("#topublickey3transaction2");
var sequence3=document.querySelector("#sequence3");
var signature3=document.querySelector("#signature3");
var amount4transaction2=document.querySelector("#amount4transaction2");
var frompublickey4transaction2=document.querySelector("#frompublickey4transaction2");
var topublickey4transaction2=document.querySelector("#topublickey4transaction2");
var sequence4=document.querySelector("#sequence4");
var signature4=document.querySelector("#signature4");
var blockchainprev2=document.querySelector("#blockchainprev2");
var blockchainhash2=document.querySelector("#blockchainhash2");

var blockchain11=document.querySelector("#blockchain11");
var blockchainnonce11=document.querySelector("#blockchainnonce11");
var coinbase11=document.querySelector("#coinbase11");
var publickeycoinbase11=document.querySelector("#publickeycoinbase11");
var blockchainprev11=document.querySelector("#blockchainprev11");
var blockchainhash11=document.querySelector("#blockchainhash11");

var blockchain22=document.querySelector("#blockchain22");
var blockchainnonce22=document.querySelector("#blockchainnonce22");
var coinbase22=document.querySelector("#coinbase22");
var publickeycoinbase22=document.querySelector("#publickeycoinbase22");
var amount1transaction22=document.querySelector("#amount1transaction22");
var frompublickey1transaction22=document.querySelector("#frompublickey1transaction22");
var topublickey1transaction22=document.querySelector("#topublickey1transaction22");
var sequence21=document.querySelector("#sequence21");
var signature21=document.querySelector("#signature21");
var amount2transaction22=document.querySelector("#amount2transaction22");
var frompublickey2transaction22=document.querySelector("#frompublickey2transaction22");
var topublickey2transaction22=document.querySelector("#topublickey2transaction22");
var sequence22=document.querySelector("#sequence22");
var signature22=document.querySelector("#signature22");
var amount3transaction22=document.querySelector("#amount3transaction22");
var frompublickey3transaction22=document.querySelector("#frompublickey3transaction22");
var topublickey3transaction22=document.querySelector("#topublickey3transaction22");
var sequence23=document.querySelector("#sequence23");
var signature23=document.querySelector("#signature23");
var amount4transaction22=document.querySelector("#amount4transaction22");
var frompublickey4transaction22=document.querySelector("#frompublickey4transaction22");
var topublickey4transaction22=document.querySelector("#topublickey4transaction22");
var sequence24=document.querySelector("#sequence24");
var signature24=document.querySelector("#signature24");
var blockchainprev22=document.querySelector("#blockchainprev22");
var blockchainhash22=document.querySelector("#blockchainhash22");

var blockchain111=document.querySelector("#blockchain111");
var blockchainnonce111=document.querySelector("#blockchainnonce111");
var coinbase111=document.querySelector("#coinbase111");
var publickeycoinbase111=document.querySelector("#publickeycoinbase111");
var blockchainprev111=document.querySelector("#blockchainprev111");
var blockchainhash111=document.querySelector("#blockchainhash111");

var blockchain222=document.querySelector("#blockchain222");
var blockchainnonce222=document.querySelector("#blockchainnonce222");
var coinbase222=document.querySelector("#coinbase222");
var publickeycoinbase222=document.querySelector("#publickeycoinbase222");
var amount1transaction222=document.querySelector("#amount1transaction222");
var frompublickey1transaction222=document.querySelector("#frompublickey1transaction222");
var topublickey1transaction222=document.querySelector("#topublickey1transaction222");
var sequence31=document.querySelector("#sequence31");
var signature31=document.querySelector("#signature31");
var amount2transaction222=document.querySelector("#amount2transaction222");
var frompublickey2transaction222=document.querySelector("#frompublickey2transaction222");
var topublickey2transaction222=document.querySelector("#topublickey2transaction222");
var sequence32=document.querySelector("#sequence32");
var signature32=document.querySelector("#signature32");
var amount3transaction222=document.querySelector("#amount3transaction222");
var frompublickey3transaction222=document.querySelector("#frompublickey3transaction222");
var topublickey3transaction222=document.querySelector("#topublickey3transaction222");
var sequence33=document.querySelector("#sequence33");
var signature33=document.querySelector("#signature33");
var amount4transaction222=document.querySelector("#amount4transaction222");
var frompublickey4transaction222=document.querySelector("#frompublickey4transaction222");
var topublickey4transaction222=document.querySelector("#topublickey4transaction222");
var sequence34=document.querySelector("#sequence34");
var signature34=document.querySelector("#signature34");
var blockchainprev222=document.querySelector("#blockchainprev222");
var blockchainhash222=document.querySelector("#blockchainhash222");

var blockchainshell=document.querySelectorAll(".blockchainshell");
var blockrow=document.querySelectorAll(".blockrow");
var transactionrow=document.querySelectorAll(".transactionrow");

var mine1=document.querySelector("#mine1");
var mine2=document.querySelector("#mine2");
var mine11=document.querySelector("#mine11");
var mine22=document.querySelector("#mine22");
var mine111=document.querySelector("#mine111");
var mine222=document.querySelector("#mine222");

blockchain1.addEventListener("keyup", function() {
  for (var i = 0; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 0; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash1.value=SHA256(blockchain1.value+blockchainnonce1.value+coinbase1.value+publickeycoinbase1.value+blockchainprev1.value);
  blockchainprev2.value=blockchainhash1.value;
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

blockchainnonce1.addEventListener("keyup", function() {
  for (var i = 0; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 0; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash1.value=SHA256(blockchain1.value+blockchainnonce1.value+coinbase1.value+publickeycoinbase1.value+blockchainprev1.value);
  blockchainprev2.value=blockchainhash1.value;
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

coinbase1.addEventListener("keyup", function() {
  for (var i = 0; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 0; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash1.value=SHA256(blockchain1.value+blockchainnonce1.value+coinbase1.value+publickeycoinbase1.value+blockchainprev1.value);
  blockchainprev2.value=blockchainhash1.value;
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

publickeycoinbase1.addEventListener("keyup", function() {
  for (var i = 0; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 0; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash1.value=SHA256(blockchain1.value+blockchainnonce1.value+coinbase1.value+publickeycoinbase1.value+blockchainprev1.value);
  blockchainprev2.value=blockchainhash1.value;
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

mine1.addEventListener("click", function() {
  for (var i = 0; i <= 2147483647; i++) {
    var s=SHA256(blockchain1.value+i+coinbase1.value+publickeycoinbase1.value+blockchainprev1.value);
    if(s.substring(0,4)==="0000"){
      blockchainnonce1.value=i;
      blockchainhash1.value=s;
      blockchainprev2.value=blockchainhash1.value;
      blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
        amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
        amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
        amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
        amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
        blockchainprev2.value);
      for (var i = 0; i < 1; i++) {
        blockchainshell[i].style.background="#D1F2EB";
      }
      for (var i = 0; i < 5; i++) {
        blockrow[i].style.borderColor="#D1F2EB";
      }
      break;
    }
  }
});

blockchain2.addEventListener("keyup", function() {
  for (var i = 1; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 5; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

blockchainnonce2.addEventListener("keyup", function() {
  for (var i = 1; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 5; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

coinbase2.addEventListener("keyup", function() {
  for (var i = 1; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 5; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

publickeycoinbase2.addEventListener("keyup", function() {
  for (var i = 1; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 5; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

amount1transaction2.addEventListener("keyup", function() {
  signature1.style.color="red";
  for (var i = 1; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 5; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

frompublickey1transaction2.addEventListener("keyup", function() {
  for (var i = 1; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 5; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

topublickey1transaction2.addEventListener("keyup", function() {
  signature1.style.color="red";
  for (var i = 1; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 5; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

sequence1.addEventListener("keyup", function() {
  for (var i = 1; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 5; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

signature1.addEventListener("keyup", function() {
  for (var i = 1; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 5; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

amount2transaction2.addEventListener("keyup", function() {
  signature2.style.color="red";
  for (var i = 1; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 5; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

frompublickey2transaction2.addEventListener("keyup", function() {
  for (var i = 1; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 5; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

topublickey2transaction2.addEventListener("keyup", function() {
  signature2.style.color="red";
  for (var i = 1; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 5; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

sequence2.addEventListener("keyup", function() {
  for (var i = 1; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 5; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

signature2.addEventListener("keyup", function() {
  for (var i = 1; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 5; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

amount3transaction2.addEventListener("keyup", function() {
  signature3.style.color="red";
  for (var i = 1; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 5; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

frompublickey3transaction2.addEventListener("keyup", function() {
  for (var i = 1; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 5; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

topublickey3transaction2.addEventListener("keyup", function() {
  signature3.style.color="red";
  for (var i = 1; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 5; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

sequence3.addEventListener("keyup", function() {
  for (var i = 1; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 5; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

signature3.addEventListener("keyup", function() {
  for (var i = 1; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 5; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

amount4transaction2.addEventListener("keyup", function() {
  signature4.style.color="red";
  for (var i = 1; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 5; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

frompublickey4transaction2.addEventListener("keyup", function() {
  for (var i = 1; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 5; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

topublickey4transaction2.addEventListener("keyup", function() {
  signature4.style.color="red";
  for (var i = 1; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 5; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

sequence4.addEventListener("keyup", function() {
  for (var i = 1; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 5; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

signature4.addEventListener("keyup", function() {
  for (var i = 1; i < 2; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 5; i < 10; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 0; i < 4; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash2.value=SHA256(blockchain2.value+blockchainnonce2.value+coinbase2.value+publickeycoinbase2.value+
    amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
    amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
    amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
    amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
    blockchainprev2.value);
});

mine2.addEventListener("click", function() {
  for (var i = 0; i <= 2147483647; i++) {
    var s=SHA256(blockchain2.value+i+coinbase2.value+publickeycoinbase2.value+
      amount1transaction2.value+frompublickey1transaction2.value+topublickey1transaction2.value+sequence1.value+signature1.value+
      amount2transaction2.value+frompublickey2transaction2.value+topublickey2transaction2.value+sequence2.value+signature2.value+
      amount3transaction2.value+frompublickey3transaction2.value+topublickey3transaction2.value+sequence3.value+signature3.value+
      amount4transaction2.value+frompublickey4transaction2.value+topublickey4transaction2.value+sequence4.value+signature4.value+
      blockchainprev2.value);
    if(s.substring(0,4)==="0000"){
      blockchainnonce2.value=i;
      blockchainhash2.value=s;
      for (var i = 1; i < 2; i++) {
        blockchainshell[i].style.background="#D1F2EB";
      }
      for (var i = 5; i < 10; i++) {
        blockrow[i].style.borderColor="#D1F2EB";
      }
      for (var i = 0; i < 4; i++) {
        transactionrow[i].style.borderColor="#D1F2EB";
      }
      break;
    }
  }
});

blockchain11.addEventListener("keyup", function() {
  for (var i = 2; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 10; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash11.value=SHA256(blockchain11.value+blockchainnonce11.value+coinbase11.value+publickeycoinbase11.value+blockchainprev11.value);
  blockchainprev22.value=blockchainhash11.value;
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

blockchainnonce11.addEventListener("keyup", function() {
  for (var i = 2; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 10; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash11.value=SHA256(blockchain11.value+blockchainnonce11.value+coinbase11.value+publickeycoinbase11.value+blockchainprev11.value);
  blockchainprev22.value=blockchainhash11.value;
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

coinbase11.addEventListener("keyup", function() {
  for (var i = 2; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 10; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash11.value=SHA256(blockchain11.value+blockchainnonce11.value+coinbase11.value+publickeycoinbase11.value+blockchainprev11.value);
  blockchainprev22.value=blockchainhash11.value;
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

publickeycoinbase11.addEventListener("keyup", function() {
  for (var i = 2; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 10; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash11.value=SHA256(blockchain11.value+blockchainnonce11.value+coinbase11.value+publickeycoinbase11.value+blockchainprev11.value);
  blockchainprev22.value=blockchainhash11.value;
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

mine11.addEventListener("click", function() {
  for (var i = 0; i <= 2147483647; i++) {
    var s=SHA256(blockchain11.value+i+coinbase11.value+publickeycoinbase11.value+blockchainprev11.value);
    if(s.substring(0,4)==="0000"){
      blockchainnonce11.value=i;
      blockchainhash11.value=s;
      blockchainprev22.value=blockchainhash11.value;
      blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
        amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
        amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
        amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
        amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
        blockchainprev22.value);
      for (var i = 2; i < 3; i++) {
        blockchainshell[i].style.background="#D1F2EB";
      }
      for (var i = 10; i < 15; i++) {
        blockrow[i].style.borderColor="#D1F2EB";
      }
      break;
    }
  }
});

blockchain22.addEventListener("keyup", function() {
  for (var i = 3; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 15; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

blockchainnonce22.addEventListener("keyup", function() {
  for (var i = 3; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 15; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

coinbase22.addEventListener("keyup", function() {
  for (var i = 3; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 15; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

publickeycoinbase22.addEventListener("keyup", function() {
  for (var i = 3; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 15; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

amount1transaction22.addEventListener("keyup", function() {
  signature21.style.color="red";
  for (var i = 3; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 15; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

frompublickey1transaction22.addEventListener("keyup", function() {
  for (var i = 3; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 15; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

topublickey1transaction22.addEventListener("keyup", function() {
  signature21.style.color="red";
  for (var i = 3; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 15; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

sequence21.addEventListener("keyup", function() {
  for (var i = 3; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 15; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

signature21.addEventListener("keyup", function() {
  for (var i = 3; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 15; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

amount2transaction22.addEventListener("keyup", function() {
  signature22.style.color="red";
  for (var i = 3; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 15; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

frompublickey2transaction22.addEventListener("keyup", function() {
  for (var i = 3; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 15; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

topublickey2transaction22.addEventListener("keyup", function() {
  signature22.style.color="red";
  for (var i = 3; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 15; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

sequence22.addEventListener("keyup", function() {
  for (var i = 3; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 15; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

signature22.addEventListener("keyup", function() {
  for (var i = 3; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 15; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

amount3transaction22.addEventListener("keyup", function() {
  signature23.style.color="red";
  for (var i = 3; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 15; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

frompublickey3transaction22.addEventListener("keyup", function() {
  for (var i = 3; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 15; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

topublickey3transaction22.addEventListener("keyup", function() {
  signature23.style.color="red";
  for (var i = 3; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 15; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

sequence23.addEventListener("keyup", function() {
  for (var i = 3; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 15; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

signature23.addEventListener("keyup", function() {
  for (var i = 3; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 15; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

amount4transaction22.addEventListener("keyup", function() {
  signature24.style.color="red";
  for (var i = 3; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 15; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

frompublickey4transaction22.addEventListener("keyup", function() {
  for (var i = 3; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 15; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

topublickey4transaction22.addEventListener("keyup", function() {
  signature24.style.color="red";
  for (var i = 3; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 15; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

sequence24.addEventListener("keyup", function() {
  for (var i = 3; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 15; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

signature24.addEventListener("keyup", function() {
  for (var i = 3; i < 4; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 15; i < 20; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 4; i < 8; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash22.value=SHA256(blockchain22.value+blockchainnonce22.value+coinbase22.value+publickeycoinbase22.value+
    amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
    amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
    amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
    amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
    blockchainprev22.value);
});

mine22.addEventListener("click", function() {
  for (var i = 0; i <= 2147483647; i++) {
    var s=SHA256(blockchain22.value+i+coinbase22.value+publickeycoinbase22.value+
      amount1transaction22.value+frompublickey1transaction22.value+topublickey1transaction22.value+sequence21.value+signature21.value+
      amount2transaction22.value+frompublickey2transaction22.value+topublickey2transaction22.value+sequence22.value+signature22.value+
      amount3transaction22.value+frompublickey3transaction22.value+topublickey3transaction22.value+sequence23.value+signature23.value+
      amount4transaction22.value+frompublickey4transaction22.value+topublickey4transaction22.value+sequence24.value+signature24.value+
      blockchainprev22.value);
    if(s.substring(0,4)==="0000"){
      blockchainnonce22.value=i;
      blockchainhash22.value=s;
      for (var i = 3; i < 4; i++) {
        blockchainshell[i].style.background="#D1F2EB";
      }
      for (var i = 15; i < 20; i++) {
        blockrow[i].style.borderColor="#D1F2EB";
      }
      for (var i = 4; i < 8; i++) {
        transactionrow[i].style.borderColor="#D1F2EB";
      }
      break;
    }
  }
});

blockchain111.addEventListener("keyup", function() {
  for (var i = 4; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 20; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash111.value=SHA256(blockchain111.value+blockchainnonce111.value+coinbase111.value+publickeycoinbase111.value+blockchainprev111.value);
  blockchainprev222.value=blockchainhash111.value;
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

blockchainnonce111.addEventListener("keyup", function() {
  for (var i = 4; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 20; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash111.value=SHA256(blockchain111.value+blockchainnonce111.value+coinbase111.value+publickeycoinbase111.value+blockchainprev111.value);
  blockchainprev222.value=blockchainhash111.value;
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

coinbase111.addEventListener("keyup", function() {
  for (var i = 4; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 20; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash111.value=SHA256(blockchain111.value+blockchainnonce111.value+coinbase111.value+publickeycoinbase111.value+blockchainprev111.value);
  blockchainprev222.value=blockchainhash111.value;
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

publickeycoinbase111.addEventListener("keyup", function() {
  for (var i = 4; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 20; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash111.value=SHA256(blockchain111.value+blockchainnonce111.value+coinbase111.value+publickeycoinbase111.value+blockchainprev111.value);
  blockchainprev222.value=blockchainhash111.value;
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

mine111.addEventListener("click", function() {
  for (var i = 0; i <= 2147483647; i++) {
    var s=SHA256(blockchain111.value+i+coinbase111.value+publickeycoinbase111.value+blockchainprev111.value);
    if(s.substring(0,4)==="0000"){
      blockchainnonce111.value=i;
      blockchainhash111.value=s;
      blockchainprev222.value=blockchainhash111.value;
      blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
        amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
        amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
        amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
        amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
        blockchainprev222.value);
      for (var i = 4; i < 5; i++) {
        blockchainshell[i].style.background="#D1F2EB";
      }
      for (var i = 20; i < 25; i++) {
        blockrow[i].style.borderColor="#D1F2EB";
      }
      break;
    }
  }
});

blockchain222.addEventListener("keyup", function() {
  for (var i = 5; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 25; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

blockchainnonce222.addEventListener("keyup", function() {
  for (var i = 5; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 25; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

coinbase222.addEventListener("keyup", function() {
  for (var i = 5; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 25; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

publickeycoinbase222.addEventListener("keyup", function() {
  for (var i = 5; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 25; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

amount1transaction222.addEventListener("keyup", function() {
  signature31.style.color="red";
  for (var i = 5; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 25; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

frompublickey1transaction222.addEventListener("keyup", function() {
  for (var i = 5; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 25; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

topublickey1transaction222.addEventListener("keyup", function() {
  signature31.style.color="red";
  for (var i = 5; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 25; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

sequence31.addEventListener("keyup", function() {
  for (var i = 5; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 25; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

signature31.addEventListener("keyup", function() {
  for (var i = 5; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 25; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

amount2transaction222.addEventListener("keyup", function() {
  signature32.style.color="red";
  for (var i = 5; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 25; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

frompublickey2transaction222.addEventListener("keyup", function() {
  for (var i = 5; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 25; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

topublickey2transaction222.addEventListener("keyup", function() {
  signature32.style.color="red";
  for (var i = 5; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 25; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

sequence32.addEventListener("keyup", function() {
  for (var i = 5; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 25; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

signature32.addEventListener("keyup", function() {
  for (var i = 5; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 25; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

amount3transaction222.addEventListener("keyup", function() {
  signature33.style.color="red";
  for (var i = 5; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 25; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

frompublickey3transaction222.addEventListener("keyup", function() {
  for (var i = 5; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 25; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

topublickey3transaction222.addEventListener("keyup", function() {
  signature33.style.color="red";
  for (var i = 5; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 25; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

sequence33.addEventListener("keyup", function() {
  for (var i = 5; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 25; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

signature33.addEventListener("keyup", function() {
  for (var i = 5; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 25; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

amount4transaction222.addEventListener("keyup", function() {
  signature34.style.color="red";
  for (var i = 5; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 25; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

frompublickey4transaction222.addEventListener("keyup", function() {
  for (var i = 5; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 25; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

topublickey4transaction222.addEventListener("keyup", function() {
  signature34.style.color="red";
  for (var i = 5; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 25; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

sequence34.addEventListener("keyup", function() {
  for (var i = 5; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 25; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

signature34.addEventListener("keyup", function() {
  for (var i = 5; i < 6; i++) {
    blockchainshell[i].style.background="#EBDEF0";
  }
  for (var i = 25; i < 30; i++) {
    blockrow[i].style.borderColor="#EBDEF0";
  }
  for (var i = 8; i < 12; i++) {
    transactionrow[i].style.borderColor="#EBDEF0";
  }
  blockchainhash222.value=SHA256(blockchain222.value+blockchainnonce222.value+coinbase222.value+publickeycoinbase222.value+
    amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
    amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
    amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
    amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
    blockchainprev222.value);
});

mine222.addEventListener("click", function() {
  for (var i = 0; i <= 2147483647; i++) {
    var s=SHA256(blockchain222.value+i+coinbase222.value+publickeycoinbase222.value+
      amount1transaction222.value+frompublickey1transaction222.value+topublickey1transaction222.value+sequence31.value+signature31.value+
      amount2transaction222.value+frompublickey2transaction222.value+topublickey2transaction222.value+sequence32.value+signature32.value+
      amount3transaction222.value+frompublickey3transaction222.value+topublickey3transaction222.value+sequence33.value+signature33.value+
      amount4transaction222.value+frompublickey4transaction222.value+topublickey4transaction222.value+sequence34.value+signature34.value+
      blockchainprev222.value);
    if(s.substring(0,4)==="0000"){
      blockchainnonce222.value=i;
      blockchainhash222.value=s;
      for (var i = 5; i < 6; i++) {
        blockchainshell[i].style.background="#D1F2EB";
      }
      for (var i = 25; i < 30; i++) {
        blockrow[i].style.borderColor="#D1F2EB";
      }
      for (var i = 8; i < 12; i++) {
        transactionrow[i].style.borderColor="#D1F2EB";
      }
      break;
    }
  }
});

function SHA256(s){
    var chrsz   = 8;
    var hexcase = 0;
    function safe_add (x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }
    function S (X, n) { return ( X >>> n ) | (X << (32 - n)); }
    function R (X, n) { return ( X >>> n ); }
    function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }
    function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }
    function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }
    function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }
    function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }
    function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }
    function core_sha256 (m, l) {
        var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
        var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
        var W = new Array(64);
        var a, b, c, d, e, f, g, h, i, j;
        var T1, T2;
        m[l >> 5] |= 0x80 << (24 - l % 32);
        m[((l + 64 >> 9) << 4) + 15] = l;
        for ( var i = 0; i<m.length; i+=16 ) {
            a = HASH[0];
            b = HASH[1];
            c = HASH[2];
            d = HASH[3];
            e = HASH[4];
            f = HASH[5];
            g = HASH[6];
            h = HASH[7];
            for ( var j = 0; j<64; j++) {
                if (j < 16) W[j] = m[j + i];
                else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);
                T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
                T2 = safe_add(Sigma0256(a), Maj(a, b, c));
                h = g;
                g = f;
                f = e;
                e = safe_add(d, T1);
                d = c;
                c = b;
                b = a;
                a = safe_add(T1, T2);
            }
            HASH[0] = safe_add(a, HASH[0]);
            HASH[1] = safe_add(b, HASH[1]);
            HASH[2] = safe_add(c, HASH[2]);
            HASH[3] = safe_add(d, HASH[3]);
            HASH[4] = safe_add(e, HASH[4]);
            HASH[5] = safe_add(f, HASH[5]);
            HASH[6] = safe_add(g, HASH[6]);
            HASH[7] = safe_add(h, HASH[7]);
        }
        return HASH;
    }
    function str2binb (str) {
        var bin = Array();
        var mask = (1 << chrsz) - 1;
        for(var i = 0; i < str.length * chrsz; i += chrsz) {
            bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i%32);
        }
        return bin;
    }
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
    function binb2hex (binarray) {
        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var str = "";
        for(var i = 0; i < binarray.length * 4; i++) {
            str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +
            hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8  )) & 0xF);
        }
        return str;
    }
    s = Utf8Encode(s);
    return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
}
