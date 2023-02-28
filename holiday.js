// Q1
function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false
        }
      } else {
        return true
      }
    } else {
      return false
    }
  }
  console.log(isLeapYear(2000))
  console.log(isLeapYear(1998))  
  
  // Q2
  function isSquareOrRectangle(length, breadth) {
    if (length === breadth) {
      return "This is a Square"
    } else {
      return "This is a Rectangle"
    }
  }
  console.log(isSquareOrRectangle(5, 9))  
  console.log(isSquareOrRectangle(8, 8))  
  
  
  
  // Q3
  function calculateCost(quantity) {
    const unitPrice = 100;
    const totalCost = quantity * unitPrice;
    
    if (totalCost > 1000) {
      const discountedCost = totalCost * 0.9
      return `Total cost: $${discountedCost}`
    } else {
      return `Total cost: $${totalCost}`
    }
  }
  console.log(calculateCost(5))
  console.log(calculateCost(12))
  
  //Q4
  function profitableGamble(prob, prize, pay) {
      return (prob * prize) > pay
    }
    console.log(profitableGamble(0.2, 50, 9))
    console.log(profitableGamble(0.9, 1, 2))
    console.log(profitableGamble(0.9, 3, 2))
  
  //   Q5 
  
  function makesTen(a, b) {
      return (a === 10 || b === 10 || a + b === 10)
    }
    console.log(makesTen(9, 10))
    console.log(makesTen(9, 9))
    console.log(makesTen(1, 9))
  
  //   Q6
  
  function comp(str1, str2) {
      return str1.length === str2.length
    }
    console.log(comp("AB", "CD"))
    console.log(comp("ABC", "DE"))
    console.log(comp("hello", "edabit"))
  
  // Q7 
  
  function acceptIntoMovie(age, isSupervised) {
      if (age >= 15 || isSupervised === true) {
        return true
      } else {
        return false
      }
    }
    console.log(acceptIntoMovie(14, true))
    console.log(acceptIntoMovie(14, false))
    console.log(acceptIntoMovie(16, false))
  
  //   Q8
  
  function oddOrEven(str) {
      return str.length % 2 === 0
    }
    console.log(oddOrEven("apples"))
    console.log(oddOrEven("pears"))
    console.log(oddOrEven("cherry"))
  
  //   Q9
  
  function isLastCharacterN(str) {
      return str.charAt(str.length - 1) === "n"
    }
    console.log(isLastCharacterN("Aiden"))
    console.log(isLastCharacterN("Piet"))
    console.log(isLastCharacterN("Bert"))
    console.log(isLastCharacterN("Dean"))
  
  //   Q10
  
  function isPlural(word) {
      return word.endsWith("s")
    }
    console.log(isPlural("changes"))
    console.log(isPlural("change"))
    console.log(isPlural("dudes"))
    console.log(isPlural("magic"))
  
  //   Q 11
  
  function fifth() {
      if (arguments.length < 5) {
        return "Not enough arguments"
      } else {
        return typeof arguments[4]
      }
    }
    
    
    console.log(fifth(1, 2, 3, 4, 5))
    console.log(fifth("a", 2, 3, true, "five"))
    console.log(fifth())
    console.log(fifth(1, 2, 3))
    console.log(fifth("a", 2, 3, true))
  // Q12
  
  function journeyDistance(cost) {
      if (cost < 3) {
        return 0
      }
      let remaining_cost = cost - 3
      let km_travelled = Math.floor(remaining_cost / 2)
      return km_travelled + 1
    }
    console.log(journeyDistance(3))
    console.log(journeyDistance(9))
    console.log(journeyDistance(5))
  
  
  //   Q13
  
  function days(month, year) {
    
      const firstDayOfMonth = new Date(year, month - 1, 1);
     
      firstDayOfMonth.setMonth(firstDayOfMonth.getMonth() + 1);
      
      firstDayOfMonth.setDate(0);
      
      return firstDayOfMonth.getDate();
    }
    console.log(days(2, 2018))
    console.log(days(4, 654))
    console.log(days(2, 200))
    console.log(days(2, 1000))
  
  // Q14
  
  function newWord(word) {
    
      return word.slice(1)
    }
    console.log(newWord("apple"))
    console.log(newWord("cherry"))
    console.log(newWord("plum"))
  
  
  // Q15
  
  
  function firstLast(str) {
   
      return str.charAt(0) + str.charAt(str.length - 1)
    }
    console.log(firstLast("ganesh"))
    console.log(firstLast("kali"))
    console.log(firstLast("shiva"))
    console.log(firstLast("Salman"))
    console.log(firstLast("Adeyemi"))
  
  
  // Q16
  
  function wumbo(str) {
    
      return str.replace(/M/g, "W")
    }
    console.log(wumbo("I LOVE MAKING CHALLENGES"))
    console.log(wumbo("MEET ME IN WARSAW"))
    console.log(wumbo("WUMBOLOGY"))
  
  
  // Q17
  
  function reverse(str) {
    
      return str.split("").reverse().join("")
    }
    console.log(reverse("Hello World"))
    console.log(reverse("The quick brown fox."))
    console.log(reverse("Edabit is really helpful!"))
  
  // Q18
  function checkEnding(str1, str2) {
    
      return str1.slice(-str2.length) === str2
    }
    console.log(checkEnding("abc", "bc"))
    console.log(checkEnding("abc", "d"))
    console.log(checkEnding("samurai", "zi"))
    console.log(checkEnding("feminine", "nine"))
    console.log(checkEnding("convention", "tio"))
  
  
  // Q19
  
  function getMiddle(str) {
      var middleIndex = Math.floor(str.length / 2)
      if (str.length % 2 == 0) {
        return str.substr(middleIndex - 1, 2)
      } else {
        return str.substr(middleIndex, 1)
      }
    }
    console.log(getMiddle("test"))
    console.log(getMiddle("testing"))
    console.log(getMiddle("middle"))
    console.log(getMiddle("A"))
    
    
  
  
  // Q20
  
  function isPlural(word) {
      if (word.endsWith("s")) {
        return true
      } else {
        return false
      }
    }
    console.log(isPlural("changes"))
    console.log(isPlural("change"))
    console.log(isPlural("dudes"))
    console.log(isPlural("magic"))

    // Q21 
    function moodToday(mood = 'neutral') {
        return `Today, I am feeling ${mood}`
      }
      console.log(moodToday("happy"))
      console.log(moodToday("sad"))
      console.log(moodToday())
      

    // Q22

    function match(s1, s2) {
        return s1.toLowerCase() === s2.toLowerCase()
      }
      
      console.log(match("hello", "hELLo"))
      console.log(match("motive", "emotive"))
      console.log(match("venom", "VENOM"))
      console.log(match("mask", "mAskinG"))
      

    // Q23
    function createID(firstName, lastName) {
        const firstChar = firstName.charAt(0).toLowerCase();
        const lastThreeChars = lastName.substring(0, 3).toLowerCase();
        const capitalizedLastThreeChars = lastThreeChars.charAt(0).toUpperCase() + lastThreeChars.slice(1);
        return firstChar + capitalizedLastThreeChars;
      }
      console.log(createID("mary", "lamb"))
      console.log(createID("John", "SMITH"))
      console.log(createID("mary", "smith"))

    // Q24

    function google(word) {
        return word.trim().replace(/\s+/g, '+')
      }
      console.log(google("Enjoying     "))
      console.log(google("Zulfah  "))
    // Q25

    function reverseCapitalize(str) {
        return str.split('').reverse().join('').toUpperCase()
      }
      console.log(reverseCapitalize("abc"))
      console.log(reverseCapitalize("hellothere"))
      console.log(reverseCapitalize("input"))

    // Q26
    function isValidNumber(num) {
        if (isNaN(num)) {
          return `${num} is not a number`
        } else {
          return `${num} is a valid number`
        }
      }
      console.log(isValidNumber(11))
      console.log(isValidNumber("19"))
      console.log(isValidNumber("xyz"))
      console.log(isValidNumber("17.5"))
      console.log(isValidNumber("21F"))

    // Q27


function isEmailValid(email) {
    if (email.indexOf("@") !== -1) {
      return true
    } else {
      return false
    }
  }
  console.log(isEmailValid("roshbon@gmail.com"))
  console.log(isEmailValid("zaicongmail.com"))

    // Q28

    function truncate_string(str, num) {
        return str.slice(0, num)
      }
      console.log(truncate_string("Robin Singh", 4))
      console.log(truncate_string("Ali Akerele", 2));
      

    // Q29

    function repeat_string(str, num) {
        return str.repeat(num);
      }
      
      console.log(repeat_string('Hello ', 4))
      console.log(repeat_string('Vote wisely ', 2))

    // Q30
    function helloWorld(num) {
        if (num % 3 === 0 && num % 5 === 0) {
          return "Hello World"
        } else if (num % 3 === 0) {
          return "Hello"
        } else if (num % 5 === 0) {
          return "World"
        } else {
          return num.toString()
        }
      }
      console.log (helloWorld(3))
      console.log (helloWorld(5))
      console.log (helloWorld(15))
      console.log (helloWorld(7))
