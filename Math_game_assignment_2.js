
function game_add_round_1(fn_round_num, fn_name, fn_level_num, fn_points, fn_lives)
{      
    let first_num = Math.floor(Math.random() * 25) + 1;
    
   	let second_num = Math.floor(Math.random() * 9) + 1;
    
    let right_ans = first_num + second_num;
    
    let wrong_ans = Math.floor(Math.random() * 34) + 1;
    
    while(wrong_ans == right_ans || wrong_ans < right_ans - 5  || wrong_ans > right_ans + 5)
    {
    	wrong_ans = Math.floor(Math.random() * 34) + 1;
    }
    
    //alert(`First Number ${first_num}`);
    //alert(`Second Number ${second_num}`);
    //alert(`Right answer sum ${right_ans}`);
    //alert(`Wrong answer ${wrong_ans}`);
    //alert(`Level number ${fn_level_num}`);
    //alert(`Total points ${fn_points}`);
    
    let player_ans;
           
    let level_result = question_answer(fn_name, player_ans, fn_round_num, fn_level_num, first_num, second_num, right_ans, wrong_ans, fn_points, fn_lives);
     
    //alert(`Level result ${level_result}`);
    
    return level_result;
}

function game_sub_round_2(fn_round_num, fn_name, fn_level_num, fn_points, fn_lives)
{      
    let first_num = Math.floor(Math.random() * 25) + 1;
    
   	let second_num = Math.floor(Math.random() * 9) + 1;
    
    while(first_num <= second_num)
    {
    	first_num = Math.floor(Math.random() * 25) + 1;
    }
    
    let right_ans = first_num - second_num;
    
    let wrong_ans = Math.floor(Math.random() * 24) + 1;
    
    while(wrong_ans == right_ans || wrong_ans < right_ans - 5  || wrong_ans > right_ans + 5)
    {
    	wrong_ans = Math.floor(Math.random() * 24) + 1;
    }
    
    //alert(`First Number ${first_num}`);
    //alert(`Second Number ${second_num}`);
    //alert(`Right answer sum ${right_ans}`);
    //alert(`Wrong answer ${wrong_ans}`);
    //alert(`Level number ${fn_level_num}`);
    //alert(`Total points ${fn_points}`);
    
    let player_ans;
           
    let level_result = question_answer(fn_name, player_ans, fn_round_num, fn_level_num, first_num, second_num, right_ans, wrong_ans, fn_points, fn_lives);
     
    //alert(`Level result ${level_result}`);
    
    return level_result;	
}

function game_div_round_3(fn_round_num, fn_name, fn_level_num, fn_points, fn_lives)
{    
    let first_num = Math.floor(Math.random() * 25) + 1;
    
   	let second_num = Math.floor(Math.random() * 9) + 2;
    
    while(first_num % second_num != 0)
    {
    	first_num = Math.floor(Math.random() * 25) + 1;
    
   		second_num = Math.floor(Math.random() * 9) + 2;	
    }
    
    let right_ans = first_num / second_num;
    
    let wrong_ans = Math.floor(Math.random() * 12) + 1;
    
    while(wrong_ans == right_ans || wrong_ans < right_ans - 3  || wrong_ans > right_ans + 3)
    {
    	wrong_ans = Math.floor(Math.random() * 12) + 1;
    }
    
    //alert(`First Number ${first_num}`);
    //alert(`Second Number ${second_num}`);
    //alert(`Right answer sum ${right_ans}`);
    //alert(`Wrong answer ${wrong_ans}`);
    //alert(`Level number ${fn_level_num}`);
    //alert(`Total points ${fn_points}`);
    
    let player_ans;
           
    let level_result = question_answer(fn_name, player_ans, fn_round_num, fn_level_num, first_num, second_num, right_ans, wrong_ans, fn_points, fn_lives);
     
    //alert(`Level result ${level_result}`);
    
    return level_result;
}

function question_answer(fn_name, fn_player_ans, fn_round_num, fn_level_num, fn_first_num, fn_second_num, fn_right_ans, fn_wrong_ans, fn_points, fn_lives)
{
	let choice_A, choice_B, choice_randomizer, level_result;
    
    choice_randomizer = Math.floor(Math.random()*2);
    
    if(choice_randomizer == 0)
    {
    	choice_A = fn_right_ans;
        
        choice_B = fn_wrong_ans;
    }
    
    else if(choice_randomizer == 1)
    {
    	choice_B = fn_right_ans;
        
        choice_A = fn_wrong_ans;
    }
    
    if(fn_round_num == 1)
    {
    	fn_player_ans = prompt(`${fn_name} you are on Round ${fn_round_num}, Level ${fn_level_num}. Please enter the letter which represents the correct answer for ${fn_first_num} + ${fn_second_num} :\n\nA. ${choice_A}\nB. ${choice_B}`);
        
        if(fn_player_ans != null)
        {
        	fn_player_ans = fn_player_ans.toUpperCase();
        }
    
    	while(fn_player_ans != "A" && fn_player_ans != "B")
    	{
    		alert("Please enter A or B only");
        
        	fn_player_ans = prompt(`${fn_name} you are on Round ${fn_round_num}, Level ${fn_level_num}. Please enter the letter which represents the correct answer for ${fn_first_num} + ${fn_second_num} :\n\nA. ${choice_A}\nB. ${choice_B}`);
            
            if(fn_player_ans != null)
        	{
        		fn_player_ans = fn_player_ans.toUpperCase();
        	}
    	}   
    }
    
    else if(fn_round_num == 2)
    {
    	fn_player_ans = prompt(`${fn_name} you are on Round ${fn_round_num}, Level ${fn_level_num}. Please enter the letter which represents the correct answer for ${fn_first_num} - ${fn_second_num} :\n\nA. ${choice_A}\nB. ${choice_B}`);
    
     	if(fn_player_ans != null)
        {
        	fn_player_ans = fn_player_ans.toUpperCase();
        }   	
    
    	while(fn_player_ans != "A" && fn_player_ans != "B")
    	{
    		alert("Please enter A or B only");
        
        	fn_player_ans = prompt(`${fn_name} you are on Round ${fn_round_num}, Level ${fn_level_num}. Please enter the letter which represents the correct answer for ${fn_first_num} - ${fn_second_num} :\n\nA. ${choice_A}\nB. ${choice_B}`);
            
            if(fn_player_ans != null)
        	{
        		fn_player_ans = fn_player_ans.toUpperCase();
        	}
    	}   
    }
    
    else if(fn_round_num == 3)
    {
    	fn_player_ans = prompt(`${fn_name} you are on Round ${fn_round_num}, Level ${fn_level_num}. Please enter the letter which represents the correct answer for ${fn_first_num} / ${fn_second_num} :\n\nA. ${choice_A}\nB. ${choice_B}`);
    
        if(fn_player_ans != null)
        {
        	fn_player_ans = fn_player_ans.toUpperCase();
        }
    
    	while(fn_player_ans != "A" && fn_player_ans != "B")
    	{
    		alert("Please enter A or B only");
        
        	fn_player_ans = prompt(`${fn_name} you are on Round ${fn_round_num}, Level ${fn_level_num}. Please enter the letter which represents the correct answer for ${fn_first_num} / ${fn_second_num} :\n\nA. ${choice_A}\nB. ${choice_B}`);
            
            if(fn_player_ans != null)
        	{
        		fn_player_ans = fn_player_ans.toUpperCase();
        	}
    	}   
    }
    
    if((fn_player_ans == "A" && choice_A == fn_right_ans) || (fn_player_ans == "B" && choice_B == fn_right_ans))
    {
    	level_result = "win";   
        
        //fn_level_num++
    }
    
    else
    {
    	level_result = "lose";
        
        //fn_level_num += 0
    }
    
   	return level_result;  
}

function life_checker(fn_level_result, fn_lives)
{
	if(fn_level_result == "lose")
    {
    	fn_lives--;
    }
    
    return fn_lives;
}

function level_checker(fn_level_result, fn_level_num)
{
	if(fn_level_result == "win")
    {
     	fn_level_num++;
    }
    
    return fn_level_num;
}

function point_checker(fn_level_result, fn_points, fn_level_num, fn_lives)
{	
	let points_won = 10, points_lost = 5

    if(fn_level_result == "win")
    {
    	fn_points += points_won;
        
        if(fn_level_num >= 1 && fn_level_num <= 9)
        {
    		alert(`Correct! Moving on to Level ${fn_level_num}.\nNumber of points won = ${points_won}\nNew point total = ${fn_points}`);
        }
        
        else if(fn_level_num == 10)
        {
    		alert(`Correct! Moving on to the Final Level, Level ${fn_level_num}.\nNumber of points won = ${points_won}\nNew point total = ${fn_points}`);
        }
        
        else if(fn_level_num > 10)
        {
    		alert("Correct!!!");
        }
    }
    
    else
    {  	        
        fn_points -= points_lost;
                    
    	if(fn_points < 0)
    	{
    		fn_points = 0;
    	}
        
        if(fn_lives > 1)
        {
        	alert(`Wrong! Only ${fn_lives} lives remaining to retry Level ${fn_level_num}.\nNumber of points lost = ${points_lost}\nNew point total = ${fn_points}`);
       	}
        
        else if(fn_lives == 1)
        {
        	alert(`Wrong! Only ${fn_lives} life remaining to retry Level ${fn_level_num}.\nNumber of points lost = ${points_lost}\nNew point total = ${fn_points}`);
        }
        
        else
        {
        	alert("Wrong! Sorry, no more lives remaining! Click OK to view results.");
        }
    }
    
    return fn_points;
}

function game_end(fn_lives, fn_name, fn_age, fn_total_score, fn_level)
{
	if(fn_lives == 0)
    {
     	alert(`Sorry, you lost this time! Your final results are:\nName: ${fn_name}\nAge: ${fn_age} years\nTotal Score: ${fn_total_score} out of a possible 100\nHighest Level Completed: ${fn_level - 1}\nBetter luck next time!`);
    }
    
    else if(fn_lives > 0 && fn_level > 10)
    {
    	alert(`Congratulations!!! You beat all 10 levels!!! Your final results are:\nName: ${fn_name}\nAge: ${fn_age} years\nTotal Score: ${fn_total_score} out of a possible 100\nHighest Level Completed: ${fn_level - 1}\nThink you can do it again?`);
    }
}

function game_init_error()
{
    alert("Sorry, you are not within the required age bracket to play this game! Good-bye :)");
}

// ----- GAME PROGRAMME START -----

function main()
{
	alert("This is a one-player JavaScript multiple choice math game, designed to test only children of ages 8 to 11.");
    
   	alert("There are 10 levels broken up into 3 rounds as follows:\n\nRound 1: The addition round\nRound 2: The subtraction round\nRound 3: The division round\n\nThe player will win the game if all 10 questions are answered correctly but will lose if all 4 lives are used up.");   

	const name = prompt("Please enter a name.");
    
    let age = parseInt(prompt("Please enter your age."));
    
    if(isNaN(age) || age <= 0)
    {       
        age = parseInt(prompt("Invalid input. Please enter an appropriate number for age."));
        
        while(isNaN(age) || age <= 0)
        {
        	age = parseInt(prompt("Invalid input. Please enter an appropriate number for age."));
        }
    }
    
    if(age >= 8 && age <=11)
    {    
        let num_of_lives = 4, level_num = 1, num_of_points = 0;
            
            alert(`Hi ${name}, let's begin Round 1. Good luck!\nLife count = ${num_of_lives}`);
            
            while(level_num < 5 && num_of_lives > 0)
            {   
            	let round_num = 1;

                let level_result = game_add_round_1(round_num, name, level_num, num_of_points, num_of_lives);           
    		         
                level_num = level_checker(level_result, level_num);
                
                num_of_lives = life_checker(level_result, num_of_lives);
                
                num_of_points = point_checker(level_result, num_of_points, level_num, num_of_lives);
                
                if(num_of_lives > 0)
                	if(confirm("Click OK to continue onto the next round. Click cancel to end the game.") == false)
    				{	
                		if(confirm("Are you sure you want to quit? Click OK to confirm.") == true)
                
                    	break;
    				}
            }
            
            if(num_of_lives > 0)
            {
            alert(`Good job ${name}, you've made it to Round 2. You're getting better!\nLife count = ${num_of_lives}`);
            }
            
            while(level_num >= 5 && level_num <= 8 && num_of_lives > 0)
            {
            	let round_num = 2;
                
                let level_result = game_sub_round_2(round_num, name, level_num, num_of_points, num_of_lives);           
    		         
                level_num = level_checker(level_result, level_num);
                
                num_of_lives = life_checker(level_result, num_of_lives);
                
                num_of_points = point_checker(level_result, num_of_points, level_num, num_of_lives);
                
                if(num_of_lives > 0)
                	if(confirm("Click OK to continue onto the next round. Click cancel to end the game.") == false)
    				{	
                		if(confirm("Are you sure you want to quit? Click OK to confirm.") == true)
                
                    	break;
    				}
            }
            
            if(num_of_lives > 0)
            {
            alert(`Congrats ${name}! You've made it to the Final Round, Round 3. You're almost there!\nLife count = ${num_of_lives}`);
            }
            
            while(level_num > 8 && level_num <= 10 && num_of_lives > 0)
            {
            	let round_num = 3;
                
                let level_result = game_div_round_3(round_num, name, level_num, num_of_points, num_of_lives);           
    		         
                level_num = level_checker(level_result, level_num)
                
                num_of_lives = life_checker(level_result, num_of_lives)
                
                num_of_points = point_checker(level_result, num_of_points, level_num, num_of_lives);
                
                if(num_of_lives > 0 && level_num <= 10)
                	if(confirm("Click OK to continue onto the next round. Click cancel to end the game.") == false)
    				{	
                		if(confirm("Are you sure you want to quit? Click OK to confirm.") == true)
                
                    	break;
    				}
            }
            
    //alert("END GAME CHECK???" + level_num)
            
	const end_results = game_end(num_of_lives, name, age, num_of_points, level_num);		
    }
    
    else
    {
    	game_init_error();
    }
    
    //alert(name + age);
}

//--- CALL FUNCTION TESTING BELOW THIS LINE ---

main()

//game_add_round_1();

//game_sub_round_2();

//game_div_round_3();

