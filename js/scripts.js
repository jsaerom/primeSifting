// Back end Logic
var input = 0;

function sieve(_input){
  // Initialize and populate an array of numbers to pass through the sieve
  var primes = [];
  for(var i = 2; i <= _input; i++){
    primes.push(i);
  }

  // Sieve!!!!
  primes.forEach(function(prime){
    for(var toRemove = prime + prime; toRemove <= _input; toRemove += prime){
      if(primes.includes(toRemove)){
        primes.splice(primes.indexOf(toRemove),1);
      }
    }
  });

  // Return sieved results
  return primes;
}

function generateOutput(_input){
  var output = "The prime numbers up to " + _input + " are: ";
  output += sieve(_input).join(", ");
  return output;
}

// Front end Logic
$("form").submit(function(event){
  event.preventDefault();
  input = $("#input").val();
  $("#output").text(generateOutput(input));
});
