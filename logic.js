function ageCalculate()
{
var birthDate = document.getElementById('birth_date').value;
//alert(birthDate);
var d = new Date(birthDate);
var mdate = birthDate.toString();
var yearThen = parseInt(mdate.substring(0,4),10);
var monthThen = parseInt(mdate.substring(5,7),10);
var dayThen = parseInt(mdate.substring(8,10),10);

var today = new Date();
var birthday= new Date(yearThen,monthThen-1,dayThen);
//alert(today.valueOf() + " " + birthday.valueOf());
var differenceInMilisecond = today.valueOf() - birthday.valueOf();
//alert(differenceInMilisecond);
var year_age = Math.floor(differenceInMilisecond / 31536000000);
var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) 
    {
	  alert("Happy B'day!!!");
	  document.getElementById("age").innerHTML = ("Happy birthday - Have a Nice Day!");
    }
var month_age = Math.floor(day_age/30);
day_age = day_age % 30;
 if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) 
	{
    document.getElementById("age").innerHTML = ("Invalid Entry - Please try again!");
	}
 else 
	{
	document.getElementById("age").innerHTML = year_age + " years " + month_age + " months " + day_age + " days";
	}
if(birthday > today)
 {
	alert("Kindly enter correct Date of Birth. BirthDate can't be future Date")
	document.getElementById("age").innerHTML = ("Invalid birthday - Please try again!");
 }
}

function myClear()
{
	document.getElementById("age").innerHTML ="";
	document.getElementById("myform").reset();
}
var today = new Date();
document.getElementById("age2").innerHTML = today;
