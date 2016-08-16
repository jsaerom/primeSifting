// Back end Logic
var input = 0;

function sieve(input){
  var primes = [];

  for(var i = 2; i <= input; i++){
    primes.push(i);
  }

  primes.forEach(function(prime){
    for(var toRemove = prime + prime; toRemove <= input; toRemove += prime){
      if(primes.includes(toRemove)){
        primes.splice(primes.indexOf(toRemove),1);
      }
    }
    // console.log(primes);
  });

  return primes;
}

function generateOutput(input){
  var output = "The prime numbers up to " + input + " are: ";
  output += sieve(input).join(", ");
  return output;
}

// Front end Logic
$("form").submit(function(event){
  event.preventDefault();
  input = $("#input").val();
  $("#output").text(generateOutput(input));
});
