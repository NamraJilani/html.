let percentage  = prompt("Enter your percentage");

if(percentage < 30)
{
    console.log("F")
}
else if(percentage >= 30 && percentage < 50)
{
    console.log("D")
}
else if(percentage >= 50 && percentage < 60)
{
    console.log("C")
}
else if (percentage >= 60 && percentage < 70)
{
    console.log("B")
}
else if (percentage >= 70 && percentage < 80)
{
    console.log("A")
}
else if (percentage >= 80 && percentage < 99)
{
    console.log("A+")
}
else 
{
    console.log("Kindly Enter Valid Percentage" )
}