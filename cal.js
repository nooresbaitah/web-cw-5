function submit(){
    let q=document.getElementById("Quizes").value
    let m=document.getElementById("Midterm").value

    let f=document.getElementById("FinalTest").value
    let o=document.getElementById("Oral").value
    
    var total=q+m+f+o;
    var grad= total/4;
    

    document.getElementById("total_grades").innerHTML= grad;

    if (grad>=90 && grad==100){

        
        document.getElementById("final_grade").innerText="A";
    }
    else if (grad>=80){


        
        document.getElementById("final_grade").innerText="B";
        
    }
    else if (grad>=70){


        
        document.getElementById("final_grade").innerText="C";
        
    }
    else if (grad>=60){


        
        document.getElementById("final_grade").innerText="D";
        
    }
    else (grad<60)
    {
        
        document.getElementById("final_grade").innerText="F";
        
    }
    
}       















