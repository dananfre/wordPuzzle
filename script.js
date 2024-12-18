// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

START

    SET variabel totalSum = user input;
    SET variabel numOfPeople = user input;
    SET variabel tip = user input in decimals;

    PRINT "The total sum is " +totalSum
    PRINT "The tip is " +tip
    PRINT "The number of people to split the bill is " +numOfPeople

    FUNCTION calculateBill(totalSum, numOfPeople, tip)
        SET totalWithTip = totalSum + (totalSum * tip)
        RETURN totalWithTip / numOfPeople
    END FUNCTION

    SET amountPerPerson = calculateBill(totalSum, numOfPeople, tip)
    
    PRINT "Each person should pay:" +amountPerPerson

END

*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*

START

    SET variable dictionary = an array with all words in the english dictionary
    SET variable startWord = "FOUR"
    SET variable endWord = "FIVE"
    SET variable attemptCount = 0
    SET variable userInput = ""
    
    FUNCTION isOneLetterApart(wordOne, wordTwo)
        SET variabel diffCount = 0;
        FOR each letter in wordOne compare with the letter at the same position in wordTwo
            IF wordOne[i] !== wordTwo[i]
                diffCount = diffCount +1
        END FOR
            RETURN diffCount === 1
    END FUNCTION
       
    WHILE startWord !== endWord
        PRINT "The current word is +startWord"
        PRINT "Your goal is the word +endWord"
        PRINT "Change one letter in the current word to form a new valid word."
        
        SET userInput = input from user 

        IF userInput !== dictionary[any]
            attemptCount = attemptCount +1    
            PRINT "No, no, no, that is not a valid word, try again!"
        ELSE IF NOT isOneLetterApart(startWord, userInput)
            attemptCount = attemptCount +1
            PRINT "No, no, no, you word must differ by exactly one letter. Try again!"            
        ELSE        
            attemptCount = attemptCount +1
            startWord = userInput
            PRINT "Very good! You changed the word to +startWord"             
        END IF
    END WHILE       

    PRINT "Very good! You reached +endWord in +attemptCount attampts!" 

END

*/




