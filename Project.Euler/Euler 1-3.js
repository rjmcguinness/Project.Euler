//Project Euler 
//Problem 1- Multiples of 3 and 5
var  sum= 0;
for (var i=1; i<=1000; i++){
	if ((i % 3 === 0) | (i % 5 === 0) ) {
		sum += i;
		}
}
console.log(sum);

//Problem 2- Even Fibonacci Numbers

termOne = 1;
termTwo = 1;
termThree = 0 
sum = 0    
while (termThree <= 4000000) {
     termThree = termOne + termTwo;
     termOne = termTwo;
     termTwo = termThree;
    if (termThree % 2 === 0) {
            sum += termThree ;
        };
	}
}
console.log(sum)

//Problem 3- Largest Prime Factor
var numberFactors = [];
function Factors (number){ 
    for (i = 1; i < number; i++) {
    	if (number % i === 0) {
			number /= i;
			numberFactors.push(number, i); //add every factor (i) to an array of the factors
		}
	
	}
}

function isPrime (factor){ //checks if a factor is a prime number
	if (factor === 2) {
		return true; //2 is a prime number
	}
	if (factor % 2 === 0) { //if number is divisible by 2 then not prime
			return false;
			}
	k = 3;
	while (k <=Math.sqrt(factor)) {//*start at 3 because next prime  up by 2 b/c can only be odd + up to square root of number only
		if (factor % k === 0) { 
			return false; //cannot be prime 
					}
		k += 2; // can only be odd so increase by 2 to only get odd numbers
				}
	return true //otherwise must be true
} 
					 
		

 
 function primeFactor (number) {
     max = 0; //variable to store max prime factor
	 Factors(number); //gets all factors of number + stores them in an array
	 for (i=0; i < numberFactors.length; i++){ //goes through array and checks if each factor is prime or not
		 isPrime(numberFactors[i]);
		 if (isPrime(numberFactors[i]) === true) { //if they are prime, 
			if (numberFactors[i] > max) { //and are greater than current largest prime factor
    		  max = numberFactors[i];   //variable becomes largest new prime factor
			}
            
		 }
         
	 }
	 console.log(max); //after loop has run completely, prints largest prime factor to the console. 
 }
 primeFactor(600851475143);

